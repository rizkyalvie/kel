const CC = require("currency-converter-lt");

export async function showPrice(params: {
  amount: number;
  currencyCode: string;
}) {
  const { amount, currencyCode } = params;

  if (currencyCode == "USD") {
    const shit = usdConverter(amount).then((res) => res);
    return idrFormat(await shit);
  } else {
    return idrFormat(amount);
  }
}

async function usdConverter(amount: number) {
  let currencyConverter = new CC({
    from: "USD",
    to: "IDR",
    amount,
    isDecimalComma: true,
  });
  const res = await currencyConverter.convert();
  return res;
}

function idrFormat(amount: number) {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
  }).format(amount);
}
