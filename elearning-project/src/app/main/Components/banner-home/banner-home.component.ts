import { AfterViewInit, Component, Input, OnInit } from '@angular/core';
export interface IBanner {
  id: number;
  src: string;
}
@Component({
  selector: 'app-banner-home',
  templateUrl: './banner-home.component.html',
  styleUrls: ['./banner-home.component.scss'],
})
export class BannerHomeComponent implements OnInit, AfterViewInit {
  @Input() title: any;
  @Input() idImg: any;
  listBanner: IBanner[] = [
    { id: 1, src: '../../../../assets/images/women-svg.svg' },
    { id: 2, src: '../../../../assets/images/Character-svg.svg' },
    { id: 3, src: '../../../../assets/images/teacher-svg.svg' },
    { id: 4, src: '../../../../assets/images/user-svg.svg' },
  ];
  currentBanner: string = '../../../../assets/images/women-svg.svg';
  constructor() {}

  ngOnInit(): void {
    this.currentBanner = this.listBanner.filter(
      (item) => item.id === this.idImg
    )[0].src;
  }
  ngAfterViewInit(): void {
    this.currentBanner = this.listBanner.filter(
      (item) => item.id === this.idImg
    )[0].src;
  }
}
