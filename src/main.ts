import { PaymentContext } from "./app/PaymentContext";
import { StripeFactory } from "./providers/stripe/StripeFactory";
import { PaypalFactory } from "./providers/paypal/PaypalFactory";
import { AppleFactory } from "./providers/apple/AppleFactory";

const providerArg = process.argv[2];
const amount = 100;
const transactionId = Math.random().toString(36).substring(2, 8);

let factory;

switch (providerArg) {
  case "stripe":
    factory = new StripeFactory();
    break;
  case "paypal":
    factory = new PaypalFactory();
    break;
  case "apple":
    factory = new AppleFactory();
    break;
  default:
    console.error("Unknown provider. Use stripe, paypal or apple.");
    process.exit(1);
}

const context = new PaymentContext(factory);
context.processPayment(amount, transactionId);
