import { Trigger } from './trigger.model';

export interface EdgeRule {
  Guid: string;
  ActionParameter1: string;
  ActionParameter2: string;
  Triggers: Array<Trigger>;
  Description: string;
  Enabled: boolean;
}
