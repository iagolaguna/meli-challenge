export function formatAmount (amount: number) {
    return new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
        currencyDisplay: "symbol",
        maximumFractionDigits: 0,
    })
        .format(amount)
        .substring(1);
}
