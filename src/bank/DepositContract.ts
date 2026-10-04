import { BaseContract } from './BaseContract'

export class DepositContract extends BaseContract{
  amount: number;
  interestRate: number;

  constructor(contractId: string, clientName: string, isActive: boolean, amount: number, interestRater: number)  {
    super(contractId, clientName, isActive);
    this.amount = amount;
    this.interestRate = interestRater;

  }
  calculateInterest(): number{
    return this.amount * (1 + (this.interestRate / 100) * (365 / 365));
  }
}