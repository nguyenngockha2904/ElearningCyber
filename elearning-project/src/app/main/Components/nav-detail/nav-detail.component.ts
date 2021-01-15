import { AfterViewInit, Component, OnInit } from '@angular/core';
declare let $: any;
@Component({
  selector: 'app-nav-detail',
  templateUrl: './nav-detail.component.html',
  styleUrls: ['./nav-detail.component.scss'],
})
export class NavDetailComponent implements OnInit, AfterViewInit {
  constructor() {}

  ngOnInit(): void {}
  ngAfterViewInit(): void {
    let nav_offset_top = $('#navbar').height() + 50;

    function navbarFixed() {
      if ($('#navbar').length) {
        $(window).scroll(function () {
          let scroll = $(window).scrollTop();
          if (scroll >= nav_offset_top) {
            $('#navbar').addClass('navbar_fixed');
          } else {
            $('#navbar').removeClass('navbar_fixed');
          }
        });
      }
    }
    navbarFixed();
  }
}
