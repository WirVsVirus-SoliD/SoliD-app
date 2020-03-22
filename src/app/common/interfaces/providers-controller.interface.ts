import { Crops } from '../enums/crops.enum';

export interface IProviderRequest {
    address?: IAddress;
    contactFirstName?: string;
    contactLastName?: string;
    crops?: Crops[];
    email?: string;
    farmName?: string;
    hourlyRate?: number;
    minWorkPeriod?: number;
    overnightPossible?: boolean;
    phone?: string;
    pickupPossible?: boolean;
    pickupRange?: number;
    url?: string;
}

export interface IProvider {
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

export interface IHelperInquiry {
    inquiryId?: number;
    applyDate?: Date;
    contacted?: boolean;
    helper?: IHelper;
}
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

interface IAddress {
    city?: string;
    housenr?: string;
    street?: string;
    zip?: string;
}
