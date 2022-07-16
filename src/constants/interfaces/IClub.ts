import { ClubTypes } from "../enums";

export default interface IClub {
  name: string;
  description: string;
  phoneNum: number;
  email: string;
  website: string;
  extraInfo: string;
  type: ClubTypes;
  smallImage: any;
  largeImage: any;
}
