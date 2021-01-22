import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-intro-course-item',
  templateUrl: './intro-course-item.component.html',
  styleUrls: ['./intro-course-item.component.scss'],
})
export class IntroCourseItemComponent implements OnInit {
  @Input() item: any;
  constructor() {}

  ngOnInit(): void {}
}
