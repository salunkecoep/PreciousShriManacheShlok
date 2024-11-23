import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AppSettingsService } from '../app-settings.service';

@Component({
  selector: 'app-pasaydan',
  templateUrl: './pasaydan.component.html',
  styleUrls: ['./pasaydan.component.css']
})
export class PasaydanComponent implements OnInit {

  constructor(
    public setting: AppSettingsService,
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialogRef: MatDialogRef<PasaydanComponent>
  ) { }

  ngOnInit(): void { }

  public closeDialog(): void {
    this.dialogRef.close();
  }
}
