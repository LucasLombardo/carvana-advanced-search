const moment = require(`moment`)

const formatVehicle = (vehicle: any) => {
    console.log(vehicle)
    const { price, vehicleTags, vehicleId } = vehicle
    const result: any = {}

    result.id = vehicleId
    result.lastFetched = moment().toISOString()

    result.price = price.total - price.totalDiscountAmount || price.total
    result.totalPrice = price.total + vehicle.transportCost
    result.discounts = price.discounts
    result.totalDiscount = price.totalDiscountAmount
    result.vehicleTags = JSON.stringify(
        vehicleTags.map((tag: any) => tag.tagName)
    )

    const flatFields = [
        `stockNumber`,
        `make`,
        `model`,
        `trim`,
        `mileage`,
        `transportCost`,
        `year`,
        `imageUrl`,
        `isOnDemand`,
        `isPurchasePending`,
        `daysUntilAvailable`,
        `vehicleInventoryType`,
        `vehicleLockType`,
        `addedToCoreInventoryDateTime`,
        `vdpSlug`,
        `priceUpdateDate`,
        `previousPrice`,
        `totalWriteDown`,
        `locationId`,
        `stockRecallStatusType`,
        `vin`,
    ]
    flatFields.map(key => (result[key] = vehicle[key] || null))

    return result
}

export default formatVehicle
