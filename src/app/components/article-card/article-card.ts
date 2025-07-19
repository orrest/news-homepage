import { Component, input } from '@angular/core';
import { Trend } from '../../models/article';
import { DecimalPipe, NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-article-card',
  imports: [NgOptimizedImage, DecimalPipe],
  templateUrl: './article-card.html',
  styleUrl: './article-card.css',
  host: {
    '[class]': "'flex flex-row gap-6 items-center'",
  },
})
export class ArticleCard {
  model = input.required<Trend>();
  number = input.required<number>();
}
