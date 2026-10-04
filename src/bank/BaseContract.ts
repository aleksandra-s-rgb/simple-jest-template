export abstract class BaseContract {
  contractId: string;
  clientName: string;
  isActive: boolean;

  constructor(contractId: string, clientName: string, isActive: boolean) {
    this.contractId = contractId;
    this.clientName = clientName;
    this.isActive = isActive;
  }

  activate(): boolean{
    return this.isActive = true;
  }
  deactivate(): boolean{
    return this.isActive = false;
  }
}