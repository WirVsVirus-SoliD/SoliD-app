export interface IProviderRequest {
    address: IAddress;
    contactFirstName: string;
    contactLastName: string;
    crops: string[];
    email: string;
    farmName: string;
    hourlyRate: number;
    minWorkPeriod: number;
    overnightPossible: boolean;
    phone: string;
    pickupPossible: boolean;
    pickupRange: number;
    url: string;
}

export interface IProviderResponse {
    providerId: number;
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
    url: string;
}

export interface IProviderOfferResponse {
    userId: number;
    driverLicense: boolean;
    email: string;
    employmentStatus: string;
    firstName: string;
    fullTime: boolean;
    lastName: string;
    mobileNumber: string;
    pickupRange: number;
    pickupRequired: boolean;
}

interface IAddress {
    city: string;
    housenr: string;
    street: string;
    zip: string;
}
