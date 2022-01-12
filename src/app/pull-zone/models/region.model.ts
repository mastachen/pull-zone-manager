import { GeoNameFormat } from "./geo-name-format.model";

export interface Region {
  Id: number;
  Name: string;
  NameMedium: string;
  PricePerGigabyte: number;
  RegionCode: string;
  ContinentCode: string;
  CountryCode: string;
  Latitude: number;
  Longitude: number;
  Tier: GeoNameFormat["tier"];
  TierLong: GeoNameFormat["tierLong"];
  Style: GeoNameFormat["style"];
}
