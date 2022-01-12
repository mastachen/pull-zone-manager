import { Component, Input } from '@angular/core';

@Component({
  selector: 'pull-zone-geo-zone',
  templateUrl: './pull-zone-geo-zone.component.html',
  styleUrls: ['./pull-zone-geo-zone.component.scss']
})
export class PullZoneGeoZoneComponent{
  @Input()
  enabled: boolean = false;

  constructor() { }
}
