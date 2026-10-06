import { BaseContract } from '../../src/bank/BaseContract'
import { DepositContract } from '../../src/bank/DepositContract'
import { InsuranceContract } from '../../src/bank/InsuranceContract'
import { LoanContract } from '../../src/bank/LoanContract'

describe("Premium", () =>{
  let depositContract: DepositContract
  let loanContract: LoanContract
  let insuranceContract: InsuranceContract
  depositContract = new DepositContract(
    'A123',
    'Bill Ray',
    false,
    10000,
    4,
  )
  loanContract = new LoanContract(
    'B123',
    'Alice Bloom',
    false,
    5000,
    500,
    12
  )
  insuranceContract = new InsuranceContract(
    'C123',
    'Varvara Chi',
    false,
    'health',
    100,
    5,
  )

  beforeEach(() => {
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
  afterEach(() => {
    depositContract.deactivate()
    loanContract.deactivate()
    insuranceContract.deactivate()
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
  test('The loan contract is activated', () => {
    expect(loanContract.activate()).toBe(true)
  })
  test('The insurance contract is activated', () => {
    expect(insuranceContract.activate()).toBe(true)
  })
  test('The deposit contract is deactivated', () => {
    expect(depositContract.deactivate()).toBe(false)
  })
  test('The loan contract is deactivated', () => {
    expect(loanContract.deactivate()).toBe(false)
  })
  test('The insurance contract is deactivated', () => {
    expect(insuranceContract.deactivate()).toBe(false)
  })
  test(`The total deposit amount is correct`, () => {
    expect(depositContract.calculateInterest()).toBe(400);
  })
  test('The total payment amount for loan is correct', () => {
    expect(loanContract.calculateTotalPayment()).toBe(6000);
  })
  test('The payment amount for insurance is correct', () => {
    expect(insuranceContract.calculateTotalPremium()).toBe(500);
  })
  test('All data for Deposit contract is correct', () => {
    expect(depositContract.contractId).toBe('A123')
    expect(depositContract.clientName).toBe('Bill Ray')
    expect(depositContract.amount).toBe(10000)
    expect(depositContract.interestRate).toBe(4)
  })
  test('All data for Loan contract is correct', () => {
    expect(loanContract.contractId).toBe('B123')
    expect(loanContract.clientName).toBe('Alice Bloom')
    expect(loanContract.loanTermMonths).toBe(12)
    expect(loanContract.monthlyPayment).toBe(500)
    expect(loanContract.loanAmount).toBe(5000)
  })
  test('All data for Insurance contract is correct', () => {
    expect(insuranceContract.contractId).toBe('C123')
    expect(insuranceContract.clientName).toBe('Varvara Chi')
    expect(insuranceContract.premium).toBe(100)
    expect(insuranceContract.insuranceType).toBe('health')
    expect(insuranceContract.termYears).toBe(5)
  })


})