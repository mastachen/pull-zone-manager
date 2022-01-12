import { PatternMatchingType } from "./pattern-matching-type.enum";
import { TriggerType } from "./trigger-type.enum";

export interface Trigger {
  Type: TriggerType;
  PatternMatches: Array<string>;
  PatternMatchingType: PatternMatchingType;
  Parameter1: string;
}
