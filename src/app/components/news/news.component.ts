import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrl: './news.component.css',
})
export class NewsComponent {
  @Input()
  newsCover: string = '';
  @Input()
  newsTitle: string = '';
  @Input()
  newsDate: string = '';

  @Input()
  shadowStyle: string = '';

  addShadowStyle(arg: boolean) {
    if (arg) {
      this.shadowStyle = 'container__news-enable';
    } else {
      this.shadowStyle = '';
    }
  }
}
