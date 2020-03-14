import { Entity, Column, PrimaryColumn } from "typeorm"

@Entity()
export class Vehicle {
    @PrimaryColumn()
    id: number

    @Column()
    make: string

    @Column()
    model: string

    @Column()
    price: number

    @Column()
    totalPrice: number

    @Column()
    lastFetched: string

    @Column()
    vehicleTags: string

    @Column()
    stockNumber: number

    @Column()
    year: number

    @Column()
    mileage: number

    @Column()
    imageUrl: string

    @Column({ nullable: true })
    transportCost?: number

    @Column({ nullable: true })
    trim?: string

    @Column({ nullable: true })
    isOnDemand?: boolean

    @Column({ nullable: true })
    isPurchasePending?: boolean

    @Column({ nullable: true })
    daysUntilAvailable?: number

    @Column({ nullable: true })
    vehicleInventoryType?: number

    @Column({ nullable: true })
    vehicleLockType?: number

    @Column({ nullable: true })
    addedToCoreInventoryDateTime?: string

    @Column({ nullable: true })
    vdpSlug?: string

    @Column({ nullable: true })
    priceUpdateDate?: string

    @Column({ nullable: true })
    previousPrice?: number

    @Column({ nullable: true })
    totalWriteDown?: number

    @Column({ nullable: true })
    locationId?: number

    @Column({ nullable: true })
    stockRecallStatusType?: number

    @Column({ nullable: true })
    vin?: string

    @Column({ nullable: true })
    exteriorColor?: string

    @Column({ nullable: true })
    interiorColor?: string

    @Column({ nullable: true })
    driveType?: string

    @Column({ nullable: true })
    mpgCity?: number

    @Column({ nullable: true })
    mpgHighway?: number

    @Column({ nullable: true })
    fuelDescription?: string

    @Column({ nullable: true })
    transmission?: string

    @Column({ nullable: true })
    numberOfKeys?: number

    @Column({ nullable: true })
    doors?: number

    @Column({ nullable: true })
    seating?: string

    @Column({ nullable: true })
    bodyType?: string

    @Column({ nullable: true })
    length?: number
}
