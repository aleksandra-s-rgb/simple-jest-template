import { BaseContract } from '../../src/bank/BaseContract'
import { DepositContract } from '../../src/bank/DepositContract'
import { InsuranceContract } from '../../src/bank/InsuranceContract'
import { LoanContract } from '../../src/bank/LoanContract'

describe("Premium", () =>{
  let depositContract: DepositContract
  let loanContract: LoanContract
  let insuranceContract: InsuranceContract

  beforeAll(() => {
    depositContract = new DepositContract(
      'A123',
      'Bill Ray',
      false,
      10000,
      4,
    )
    loanContract = new LoanContract('B123', 'Alice Bloom', false,5000, 500, 12)
    insuranceContract = new InsuranceContract(
      'C123',
      'Varvara Chi',
      false,
      'health',
      100,
      5,
    )
    depositContract.activate()
    loanContract.activate()
    insuranceContract.activate()
    console.log(`The contract ${depositContract.contractId} for client ${depositContract.clientName} is activated before test`)
    console.log(
      `The contract ${loanContract.contractId} for client ${loanContract.clientName} is activated before test`,
    )
    console.log(
      `The contract ${insuranceContract.contractId} for client ${insuranceContract.clientName} is activated before test`,
    )
  })
  afterAll(() => {
    depositContract.deactivate()
    console.log(
      `The contract ${depositContract.contractId} for client ${depositContract.clientName} is deactivated after test`,
    )
    console.log(
      `The contract ${loanContract.contractId} for client ${loanContract.clientName} is deactivated after test`,
    )
    console.log(
      `The contract ${insuranceContract.contractId} for client ${insuranceContract.clientName} is deactivated after test`,
    )
  })

  test('The deposit contract is activated', () => {
    expect(depositContract.activate()).toBe(true)
  })
  test('The deposit contract is deactivated', () => {
    depositContract.deactivate();
    expect(depositContract.deactivate()).toBe(false)
  })
  test(`The total deposit amount is correct`, () => {
    expect(depositContract.calculateInterest()).toBe(10400);
  })
  test('The total payment amount for loan is correct', () => {
    expect(loanContract.calculateTotalPayment()).toBe(6000);
  })
  test('The payment amount for insurance is correct', () => {
    expect(insuranceContract.calculateTotalPremium()).toBe(500);
  })

})