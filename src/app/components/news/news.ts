import { Component, input } from '@angular/core';
import { New } from '../../models/article';

@Component({
  selector: 'app-news',
  imports: [],
  templateUrl: './news.html',
  styleUrl: './news.css',
  host: {
    '[class]':
      "'flex flex-col px-6 py-4 gap-8 md:px-10 md:py-8 xl:px-6 xl:py-4 bg-navy-950'",
  },
})
export class News {
  news = input.required<New[]>();
}
