import { Component, AfterViewInit, OnInit, OnDestroy, ViewChild, ElementRef } from '@angular/core';
import { MatTabChangeEvent } from '@angular/material/tabs';
import { HttpClient } from "@angular/common/http";
import { HostListener } from "@angular/core";
import { MatDialog } from '@angular/material/dialog';
import { AboutComponent } from '../about/about.component';
import { PoetComponent } from '../poet/poet.component';
import { PasaydanComponent } from '../pasaydan/pasaydan.component';
import { SettingsComponent } from '../settings/settings.component';
import { ShlokSelectorComponent } from '../shlok-selector/shlok-selector.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, AfterViewInit, OnDestroy {

  @ViewChild('tabGroup') tabGroup;
  public shlokAudio = new Audio();

  public title = 'श्री मनाचे श्लोक';
  public tabs = new Array(205);
  public shlokTextFile: string = '';
  public shlokMeaning: string;
  public shlokTextFileName: string;
  public shlokMeaningFileName: string;
  public shlokAudioFileName: string;
  public startShlokAudio = false;
  public selectedTabIndex = 0;
  public endTabIndex = 204;
  public shlokLines;
  public scrHeight = 100;
  public scrWidth = 100;
  public startTouchPoint = null;
  public endTouchPoint = null;
  public tabTouched = false;
  public selectedTabIndexKey = "selectedTabIndexKey";
  public dialogRef = null;
  public isDialogOpened = false;

  @HostListener('window:resize', ['$event'])
  getScreenSize(event?) {
    this.scrHeight = window.innerHeight;
    this.scrWidth = window.innerWidth;
  }

  constructor(
    public dialog: MatDialog,
    private httpService: HttpClient,
    private elementRef: ElementRef
  ) {
    this.getScreenSize();

    let tabIndex = localStorage.getItem(this.selectedTabIndexKey);
    if (tabIndex != null) {
      this.selectedTabIndex = Number(tabIndex);
    }

    document.addEventListener("deviceready", this.onDeviceReady, false);
  }

  public onDeviceReady() {
    document.addEventListener("backbutton", this.onBackKeyDown, false);
  }

  public onBackKeyDown() {
    alert('onBackKeyDown');
    if (this.isDialogOpened) {
      this.dialogRef.close();
      alert('this.dialogRef.close()');
    } else {
      alert('navigator');
      navigator['app'].exitApp();
    }
  }

  ngAfterViewInit() {
    this.elementRef.nativeElement.ownerDocument.body.style.backgroundColor = 'rgb(230, 108, 44)';
    let shlokNo = this.selectedTabIndex + 1;
    this.readShlok(shlokNo);
  }

  ngOnInit(): void {
    var that = this;
    this.shlokAudio.addEventListener('ended', function () { return that.playNextShlok(); });
  }

  ngOnDestroy() {
    this.shlokAudio.pause();
    this.shlokAudio.src = "";
    this.shlokAudio = null;
  }

  public openSettingsDialog() {
    this.openDialog(SettingsComponent);
  }

  public openRateUsDialog() {
    window.location.href = "https://play.google.com/store/apps/details?id=com.precious.shri.manache.shlok"
  }

  public openAboutUsDialog() {
    this.openDialog(AboutComponent);
  }

  public openPoetDialog() {
    this.openDialog(PoetComponent);
  }

  public openShlokSelectorDialog() {
    this.openDialog(ShlokSelectorComponent);
    this.dialogRef.afterClosed().subscribe(result => {
      let selectedShlok = Number(localStorage.getItem("selectedTabIndexKey"));
      if (selectedShlok !== this.selectedTabIndex) {
        this.selectedTabIndex = selectedShlok;
      }
    });
  }

  public openPasaydanDialog() {
    this.openDialog(PasaydanComponent);
  }

  public openDialog(dialogName: any) {
    this.isDialogOpened = true;

    let height = this.scrHeight - 70;
    let width = this.scrWidth - 50;

    this.dialogRef = this.dialog.open(dialogName, {
      panelClass: 'custom-dialog-container',
      maxHeight: height + 'px',
      maxWidth: width + 'px',
      height: '100%',
      width: '100%',
      data: {
        height: height,
        width: width
      }
    });

    this.dialogRef.afterClosed().subscribe(result => {
      this.isDialogOpened = false;
    });
  }

  public tabChanged(tabChangeEvent: MatTabChangeEvent) {
    let shlokNo = tabChangeEvent.index + 1;
    this.readShlok(shlokNo);
    localStorage.setItem(this.selectedTabIndexKey, this.selectedTabIndex.toString());
  }

  public readShlok(shlokNo: number): Promise<any> {
    return new Promise((resolve, reject) => {
      try {
        this.shlokTextFileName = "assets/shlokText/shlok";
        this.shlokTextFileName += shlokNo;
        this.shlokTextFileName += ".text";

        this.shlokMeaningFileName = "assets/shlokMeaning/shlok";
        this.shlokMeaningFileName += shlokNo;
        this.shlokMeaningFileName += ".text";

        this.shlokAudioFileName = "assets/shlokAudio/shlok";
        this.shlokAudioFileName += shlokNo;
        this.shlokAudioFileName += ".mp3";

        this.shlokAudio.src = this.shlokAudioFileName;
        this.shlokAudio.load();

        this.httpService.get(this.shlokTextFileName, { responseType: 'text' }).subscribe(data => {
          this.shlokTextFile = data;
          this.shlokLines = this.shlokTextFile.split("\n");

          this.httpService.get(this.shlokMeaningFileName, { responseType: 'text' }).subscribe(data => {
            this.shlokMeaning = data;
            resolve({ shlokMeaning: data });
          });
          this.playAudio();
        });
      } catch (err) {
        reject({ err: err });
      }
    });
  }

  /*
   * Start Audio.
   */
  public startAudio() {
    this.startShlokAudio = true;
    this.playAudio();
  }

  /*
   * Play Audio.
   */
  public playAudio() {
    if (true == this.startShlokAudio) {
      this.shlokAudio.play();
    }
  }

  /*
   * Stop Audio.
   */
  public stopAudio() {
    this.startShlokAudio = false;
    this.shlokAudio.pause();
  }

  public sliderChange(event: any) {
    let tabIndex = event.value - 1;
    if (this.selectedTabIndex != tabIndex) {
      this.selectedTabIndex = tabIndex;
    }
  }

  public playNextShlok() {
    this.selectedTabIndex = this.selectedTabIndex < this.endTabIndex ? this.selectedTabIndex + 1 : 0;
  }

  public formatLabel(val: number) {
    return val;
  }

  public getBackGroundImage() {
    let height = this.scrHeight - 82;
    let myStyles = {
      'height': height + 'px',
      'width': '100%',
      'background-repeat': 'no-repeat',
      'background-size': 'cover',
      'overflow': 'scroll'
    };

    return myStyles;
  }

  public tabGroupTouchStart(event: TouchEvent) {
    this.startTouchPoint = event;
    this.endTouchPoint = event;
  }

  public tabGroupTouchMove(event: TouchEvent) {
    if (!this.tabTouched) {
      let mousePos = event.touches[0].clientX;
      let dragDistLimit = 10;
      let dragDist = Math.abs(this.startTouchPoint.touches[0].clientX - mousePos);

      if (dragDist >= dragDistLimit) {
        let tabJump = Math.floor(dragDist / dragDistLimit);
        if (mousePos > this.startTouchPoint.touches[0].clientX) {
          let nextTabIndex = Math.floor(this.selectedTabIndex - tabJump);
          this.selectedTabIndex = nextTabIndex >= 0 ? nextTabIndex : 0;
        } else if (mousePos < this.startTouchPoint.touches[0].clientX) {
          let nextTabIndex = Math.ceil(this.selectedTabIndex + tabJump);
          this.selectedTabIndex = nextTabIndex <= this.endTabIndex ? nextTabIndex : this.endTabIndex;
        }
        this.startTouchPoint = event;
      }
    }
  }

  public tabGroupTouchEnd(event: TouchEvent) {
    this.startTouchPoint = null;
    this.endTouchPoint = null;
    this.tabTouched = false;
  }

  public tabTouchStart(event: TouchEvent) {
    this.tabTouched = true;
    this.startTouchPoint = event;
    this.endTouchPoint = event;
  }

  public tabTouchMove(event: TouchEvent) {
    this.endTouchPoint = event;
  }

  public tabTouchEnd(event: TouchEvent) {
    let height = Math.abs(this.startTouchPoint.touches[0].clientY - this.endTouchPoint.touches[0].clientY);
    let width = this.startTouchPoint.touches[0].clientX - this.endTouchPoint.touches[0].clientX;

    let heightLimit = 100;
    let dragDistLimit = 100;
    if (height <= heightLimit && Math.abs(width) >= dragDistLimit) {
      if (width <= 0) {
        this.selectedTabIndex = this.selectedTabIndex > 0 ? this.selectedTabIndex - 1 : 0;
      } else {
        this.selectedTabIndex = this.selectedTabIndex < this.endTabIndex ? this.selectedTabIndex + 1 : this.endTabIndex;
      }
    }

    this.startTouchPoint = null;
    this.endTouchPoint = null;
    this.tabTouched = false;
  }
}
