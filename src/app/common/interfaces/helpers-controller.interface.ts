export interface IHelperRequest {
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

export interface IHelperResponse {
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
