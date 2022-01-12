import { LongTierType } from "./long-tier-type.enum";
import { TierType } from "./tier-type.enum";

export interface GeoNameFormat {
  name: string;
  region: string;
  style: string;
  tier: TierType;
  tierLong: LongTierType;
}
