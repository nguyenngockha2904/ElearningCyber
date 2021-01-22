import { AfterViewInit, Component, OnInit } from '@angular/core';
declare let $: any;
@Component({
  selector: 'app-group-control',
  templateUrl: './group-control.component.html',
  styleUrls: ['./group-control.component.scss'],
})
export class GroupControlComponent implements OnInit, AfterViewInit {
  constructor() {}

  ngOnInit(): void {}
  ngAfterViewInit(): void {
    $(function () {
      $('[data-toggle="popover"]').popover();
    });
  }
}
