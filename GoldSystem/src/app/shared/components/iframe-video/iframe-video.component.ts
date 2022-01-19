import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-iframe-video',
  templateUrl: './iframe-video.component.html',
  styles: [],
})
export class IframeVideoComponent implements OnInit {
  @Input() src = '';
  @Input() title = '';
  constructor() {}

  ngOnInit(): void {}
}
