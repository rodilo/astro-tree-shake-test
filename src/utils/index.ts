export function formatPrice(
  price: {
    amount: number;
    currency: string;
  },
  locale: string = "de-DE"
) {
  if (!price) {
    return "";
  }
  return new Intl.NumberFormat(locale, {
    style: "currency",
    currency: price.currency,
    maximumFractionDigits: 0,
    minimumFractionDigits: 0,
  }).format(price.amount);
}

export function logMessage(message: string) {
  console.log(message);
}
