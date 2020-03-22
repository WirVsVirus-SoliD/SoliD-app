export interface IOfferCreateRequest {
    providerId: number;
    userId: number;
}

export interface IOfferUpdateRequest {
    contacted: boolean;
}

export interface IOfferResponse {
    applyDate: Date;
    contacted: boolean;
    offerId: number;
    provider: IProvider;
    user: IUser;
}

interface IAddress {
    city: string;
    housenr: string;
    street: string;
    zip: string;
}

interface IProvider {
    address: IAddress;
    contactFirstName: string;
    contactLastName: string;
    crops: string[];
    distance: number;
    email: string;
    farmName: string;
    hourlyRate: number;
    latitude: number;
    longitude: number;
    minWorkPeriod: number;
    overnightPossible: boolean;
    phone: string;
    pickupPossible: boolean;
    pickupRange: number;
    providerId: number;
    url: string;
}

interface IUser {
    driverLicense: boolean;
    email: string;
    employmentStatus: string;
    firstName: string;
    fullTime: boolean;
    lastName: string;
    mobileNumber: string;
    pickupRange: number;
    pickupRequired: boolean;
    userId: number;
}
