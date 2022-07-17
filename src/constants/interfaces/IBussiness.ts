export interface IBussiness {
    email: string;
    password: string;
    name: string;
    brandId: string;
    information: {
        name: string;
        address: string;
        phone: string;
        openingHours1: string;
        openingHours2: string;
        contactName: string;
        description: string;
    }
}
