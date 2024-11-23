import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AppSettingsService } from '../app-settings.service';

@Component({
  selector: 'app-shlok-selector',
  templateUrl: './shlok-selector.component.html',
  styleUrls: ['./shlok-selector.component.css']
})
export class ShlokSelectorComponent implements OnInit {

  public shlokNo = 1;
  public percentage = 0;
  public diaHeight = 0;
  public diaWidth = 0;
  public shlokNos = [];
  public startTouchPoint = null;
  public endTouchPoint = null;

  constructor(
    public setting: AppSettingsService,
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialogRef: MatDialogRef<ShlokSelectorComponent>
  ) {
    this.shlokNo = Number(localStorage.getItem("selectedTabIndexKey")) + 1;
    this.percentage = Math.floor((this.shlokNo / 205) * 100);
    this.diaHeight = data.height;
    this.diaWidth = data.width;

    for (let no = 1; no <= 205; no++) {
      this.shlokNos.push(no);
    }
  }

  ngOnInit(): void { }

  public getShlokSelectorStyle() {
    let style = {
      'height': this.diaHeight - 79 + "px",
      'width': this.diaWidth - 41 + "px"
    };

    return style;
  }

  public closeDialog(): void {
    this.dialogRef.close();
  }

  public acceptChanges(): void {
    this.dialogRef.close();
    localStorage.setItem("selectedTabIndexKey", (this.shlokNo - 1).toString());
  }

  public sliderChange(event: any) {
    let no = event.value;
    this.selectShlokNo(no);
  }

  public selectShlokNo(no: number) {
    this.shlokNo = no;
    this.percentage = Math.floor((this.shlokNo / 205) * 100);
  }

  public tabTouchStart(event: TouchEvent) {
    this.startTouchPoint = event;
    this.endTouchPoint = event;
  }

  public tabTouchMove(event: TouchEvent) {
    this.endTouchPoint = event;
    let dist = this.endTouchPoint.touches[0].clientX - this.startTouchPoint.touches[0].clientX;
    dist = Math.round(dist);
    if (dist !== 0) {
      let newShlokNo = this.shlokNo + dist;
      if (newShlokNo >= 1 && newShlokNo <= 205) {
        this.selectShlokNo(newShlokNo);
      }
      this.startTouchPoint = this.endTouchPoint;
    }
  }

  public tabTouchEnd(event: TouchEvent) {
    this.startTouchPoint = null;
    this.endTouchPoint = null;
  }
}
