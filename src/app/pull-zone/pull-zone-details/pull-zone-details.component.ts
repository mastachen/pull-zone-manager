import { PullZone } from './../models/pull-zone.model';
import { PullZoneService } from './../../services/pull-zone/pull-zone.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { MessageDialogComponent } from 'src/app/message-dialog/message-dialog.component';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'pull-zone-details',
  templateUrl: './pull-zone-details.component.html',
  styleUrls: ['./pull-zone-details.component.scss'],
})
export class PullZoneDetailsComponent implements OnInit {
  pullZone: PullZone;
  editMode: boolean = false;

  // form group, currently used only for origin url input
  pullZoneForm = new FormGroup({
    originUrl: new FormControl('', [
      Validators.required,
      Validators.maxLength(50),
      //url validator (will not validate every single url, so it is still possible to enter broken url)
      Validators.pattern(/^((http|https):\/\/|(www\.))[^ "]+\.[^ "]+$/),
    ])
  });

  // getter for accesing form originUrl
  get originUrl() {
    return this.pullZoneForm.get('originUrl');
  }

  constructor(
    private route: ActivatedRoute,
    private pullZoneService: PullZoneService,
    public dialog: MatDialog
  ) {}

  // gut pull zone details for zone with specified id
  getPullZone() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.pullZoneService.getPullZone(id).subscribe((pullzone) => {
      this.pullZone = pullzone;
    });
  }

  // update origin url
  updateOrigin() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    const pullZone = {
      OriginUrl: this.pullZoneForm.value.originUrl.trim()
    };

    this.pullZoneService
      .updateOrigin(id, JSON.stringify(pullZone))
      .subscribe((pullZone) => {
        if (pullZone) {
          //update pull zone
          this.pullZone = pullZone;
          this.editMode = false;
        }
      });
  }

  toggleEdit() {
    this.editMode = !this.editMode;
  }

  ngOnInit(): void {
    this.getPullZone();
  }
}
