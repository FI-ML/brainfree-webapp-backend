import {Component, Input, OnInit, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-loading-big-size',
  templateUrl: './loading-big-size.component.html',
  styleUrls: ['./loading-big-size.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class LoadingBigSizeComponent implements OnInit {
  @Input() loadingText!: string;

  constructor() {
  }


  ngOnInit(): void {
  }

  getLoadingText = () => {
    return this.loadingText + ' are loading'
  }

}
