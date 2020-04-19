export const formatCurrency = (currency: number | string) => {
    const num = Number(currency)

    return Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
    }).format(num)
}
