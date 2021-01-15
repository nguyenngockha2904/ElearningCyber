import { AfterViewInit, Component, OnInit } from '@angular/core';
declare let $: any;
@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
})
export class HomePageComponent implements OnInit, AfterViewInit {
  constructor() {}
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
  ngOnInit(): void {}
  ngAfterViewInit(): void {
    $(document).ready(function () {
      $('#sidebarCollapse').on('click', function () {
        $('#sidebar').toggleClass('active');
      });
    });
  }
}
