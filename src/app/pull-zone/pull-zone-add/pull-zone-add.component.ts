import { PullZoneService } from './../../services/pull-zone/pull-zone.service';
import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Validators } from '@angular/forms';
import { MessageService } from 'src/app/services/messages/message.service';
import { ErrorStateMatcher } from '@angular/material/core';

@Component({
  selector: 'pull-zone-add',
  templateUrl: './pull-zone-add.component.html',
  styleUrls: ['./pull-zone-add.component.scss'],
})
export class PullZoneAddComponent {
  constructor(
    private pullZoneService: PullZoneService,
    private messageService: MessageService
  ) {}

  //new pull zone form group
  pullZoneForm = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.maxLength(30)]),
    originUrl: new FormControl('', [
      Validators.required,
      Validators.maxLength(50),
      //url validator (will not validate every single url, so it is still possible to enter broken url)
      Validators.pattern(/^((http|https):\/\/|(www\.))[^ "]+\.[^ "]+$/),
    ]),
    type: new FormControl(1),
  });

  // getter for accesing form name (to avoid "form.get('name')" in the template)
  get name() {
    return this.pullZoneForm.get('name');
  }

  // getter for accesing form originUrl
  get originUrl() {
    return this.pullZoneForm.get('originUrl');
  }

  // getter for accesing form originUrl
  get type() {
    return this.pullZoneForm.get('type');
  }

  // adds new pull zone
  add() {
    const pullZone = {
      Name: this.pullZoneForm.value.name.trim(),
      OriginUrl: this.pullZoneForm.value.originUrl.trim(),
      Type: this.pullZoneForm.value.type,
    };
    this.pullZoneService
      .addPullZone(JSON.stringify(pullZone))
      .subscribe((newPullZone) => {
        if (newPullZone) {
          // reset form values
          this.name?.reset();
          this.originUrl?.reset();
          this.type?.reset();

          // display message
          this.messageService.show(
            `Pull zone ${newPullZone.Name} successfully added.`
          );
        }
      });
  }
}
