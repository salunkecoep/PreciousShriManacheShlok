import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AppSettingsService } from '../app-settings.service';

@Component({
  selector: 'app-poet',
  templateUrl: './poet.component.html',
  styleUrls: ['./poet.component.css']
})
export class PoetComponent implements OnInit {

  constructor(
    public setting: AppSettingsService,
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialogRef: MatDialogRef<PoetComponent>
  ) { }

  ngOnInit(): void { }

  public getBackGroundImage() {
    let myStyles = {
      'height': '100%',
      'width': '100%',
      'background-repeat': 'no-repeat',
      'background-size': 'cover'
    };

    return myStyles;
  }

  public closeDialog(): void {
    this.dialogRef.close();
  }
}
