import { ClubTypes } from "../enums";

export interface IClub {
  name: string;
  description: string;
  phoneNum: number;
  email: string;
  website: string;
  extraInfo: string;
  type: ClubTypes;
  smallImage: string;
  largeImage: string;
}
