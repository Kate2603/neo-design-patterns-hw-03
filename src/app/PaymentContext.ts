import { PaymentProviderFactory } from "../core/PaymentProviderFactory";

export class PaymentContext {
  private provider;

  constructor(factory: PaymentProviderFactory) {
    this.provider = factory.createPaymentProvider();
  }

  processPayment(amount: number, transactionId: string): void {
    this.provider.authorize(amount);
    this.provider.capture(transactionId);
    this.provider.refund(transactionId);
  }
}
