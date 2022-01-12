import { ZoneType } from "./zone-type.enum";

export interface PullZoneAdd {
  Name: string;
  OriginUrl: string;
  StorageZoneId?: number;
  Type?: ZoneType;
}
