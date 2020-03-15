const moment = require(`moment`)

const formatVehicle = (vehicle: any) => {
    const { price, vehicleTags, vehicleId } = vehicle
    const result: any = {}

    result.id = vehicleId
    result.lastFetched = moment().toISOString()

    result.price = price.total - price.totalDiscountAmount || price.total
    result.totalPrice = price.total + vehicle.transportCost
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

    const basics = vehicle.vehicleDetails.details.basics || {}

    result.exteriorColor = basics.exteriorColor
    result.interiorColor = basics.interiorColor
    result.driveType = basics.driveTrainDescription
    result.mpgCity = basics.mpgCity
    result.mpgHighway = basics.mpgHighway
    result.fuelDescription = basics.fuelDescription
    result.transmission = basics.transmission
    result.numberOfKeys = basics.numberOfKeys
    result.doors = basics.doors
    result.seating = basics.seating
    result.bodyType = vehicle.vehicleDetails.header.bodyType
    result.length = vehicle.vehicleDetails.details.specs.overallLength

    return result
}

export default formatVehicle
