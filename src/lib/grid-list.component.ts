import {
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';

import { GridListAddBtn, GridListCard, GridListPagination } from './grid-list.service';

@Component({
  selector: 'lib-grid-list',
  templateUrl: './grid-list.component.html',
  styleUrls: ['./grid-list.component.scss'],
})
export class GridListComponent{
  constructor() {}
  @Input() data: GridListCard[];
  @Input() hasList: boolean;
  @Input() loading: boolean;
  @Input() isList = false;
  @Input() addBtn: GridListAddBtn;
  @Input() pagination: GridListPagination;
  @Input() ItemsPerPage = 10;
  @Input() thumbType: 'image' | 'audio' = 'image';
  @Output() actionBtnClicked = new EventEmitter<any>();
  @Output() actionBtn2Clicked = new EventEmitter<any>();
  @Output() actionBtn3Clicked = new EventEmitter<any>();
  @Output() actionBtn4Clicked = new EventEmitter<any>();
  @Output() pageChanged = new EventEmitter<number>();

  page = 1;
  audios: HTMLAudioElement[] = [];
  audiosProgress: any[] = [];
  timer: any;

  onActionBtnClick(item: any): any {
    this.actionBtnClicked.next(item);
  }
  onActionBtn2Click(item: any): any {
    this.actionBtn2Clicked.next(item);
  }
  onActionBtn3Click(item: any): any {
    this.actionBtn3Clicked.next(item);
  }
  onActionBtn4Click(item: any): any {
    this.actionBtn4Clicked.next(item);
  }

  onChangePage(page: number) {
    if (page) {
      this.pageChanged.next(page);
    }
  }


  public playAudio(src, index: number) {
    if (!this.audios[index]) {
      const audio = new Audio(src);
      this.audios.push(audio);
      this.audiosProgress[index] = 0;
    } else {
      if (this.audios[index].ended || this.audios[index].currentTime == 0) {
        this.audiosProgress[index] = 0;
      }
    }
    this.audios[index].play();
    this.startTimer(index);
  }

  public pauseAudio(index: number) {
    this.audios[index].pause();
    clearTimeout(this.timer);
  }

  public reloadAudio(index: number) {
    this.audios[index].currentTime = 0;
    this.audiosProgress[index] = 0;
    clearTimeout(this.timer);

    this.audios[index].play();
    this.startTimer(index);
  }
  private advance(index: number) {
    const duration = this.audios[index].duration;
    const currentTime = this.audios[index].currentTime;
    let increment = 10 / duration;
    let percent = Math.min(increment * currentTime * 10, 100);
    this.audiosProgress[index] = percent;
    this.startTimer(index);
  }
  private startTimer(index: number) {
    if (this.audiosProgress[index] < 100) {
      const that = this;
      this.timer = setTimeout(function () {
        that.advance(index);
        clearTimeout(this.timer);
      }, 1000);
    }
  }

  public removeAudio(index: number) {
    this.pauseAudio(index);
    this.audios[index] = null;
  }
}
