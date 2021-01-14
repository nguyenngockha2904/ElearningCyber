import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  danhMucList: any[] = [
    {
      maDanhMuc: 'BackEnd',
      tenDanhMuc: 'Lập trình Backend',
    },
    {
      maDanhMuc: 'Design',
      tenDanhMuc: 'Thiết kế Web',
    },
    {
      maDanhMuc: 'DiDong',
      tenDanhMuc: 'Lập trình di động',
    },
    {
      maDanhMuc: 'FrontEnd',
      tenDanhMuc: 'Lập trình Front end',
    },
    {
      maDanhMuc: 'FullStack',
      tenDanhMuc: 'Lập trình Full Stack',
    },
    {
      maDanhMuc: 'TuDuy',
      tenDanhMuc: 'Tư duy lập trình',
    },
  ];
  constructor() {}

  ngOnInit(): void {}
}
