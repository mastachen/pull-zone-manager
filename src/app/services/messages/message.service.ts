import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MessageDialogComponent } from 'src/app/message-dialog/message-dialog.component';

@Injectable({
  providedIn: 'root',
})
// service class for managing user notifications
export class MessageService {
  constructor(public dialog: MatDialog){}

  show(message: string) {
    this.dialog.open(MessageDialogComponent, {
      width: '350px',
      data: message
    });
  }
}
