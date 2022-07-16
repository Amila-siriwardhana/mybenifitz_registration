import { ClubOfferTypes } from "../enums";

export default interface IClubOffer {
    type: ClubOfferTypes;
    price: number;
    // priceBeforeDiscount: number;
    points: number;
    possiblePurchases: number | null;
    description: string;
    longDescription: string;
    discountAmount: number;
    extraInfo: string;
    smallImage: any;
    largeImage: any;
}