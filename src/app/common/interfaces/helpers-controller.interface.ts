import { Crops } from '../enums/crops.enum';

export interface IHelper {
    helperId?: number;
    driverLicense?: boolean;
    email?: string;
    employmentStatus?: string;
    firstName?: string;
    fullTime?: boolean;
    lastName?: string;
    mobileNumber?: string;
    pickupRange?: number;
    pickupRequired?: boolean;
}

export interface IProviderInquired {
    address?: IAddress;
    contactFirstName?: string;
    contactLastName?: string;
    crops?: Crops[];
    distance?: number;
    email?: string;
    farmName?: string;
    hourlyRate?: number;
    latitude?: number;
    longitude?: number;
    minWorkPeriod?: number;
    overnightPossible?: boolean;
    phone?: string;
    pickupPossible?: boolean;
    pickupRange?: number;
    providerId?: number;
    url?: string;
}

export interface IHelperProviderRequest {
    helperId?: number;
    providerId?: number;
}

export interface IHelperFavorite {
    favoriteId?: number;
    helper?: Helper;
    markedDate?: Date;
    provider?: IProvider;
}

interface IAddress {
    city?: string;
    housenr?: string;
    street?: string;
    zip?: string;
}

interface Helper {
    driverLicense?: boolean;
    email?: string;
    employmentStatus?: string;
    firstName?: string;
    fullTime?: boolean;
    helperId?: number;
    lastName?: string;
    mobileNumber?: string;
    pickupRange?: number;
    pickupRequired?: boolean;
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
