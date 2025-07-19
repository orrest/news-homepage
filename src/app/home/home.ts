import { Component, computed, inject, signal } from '@angular/core';
import { Service } from '../services/service';
import { toSignal } from '@angular/core/rxjs-interop';
import { NgOptimizedImage } from '@angular/common';
import { TextButton } from '../components/text-button/text-button.component';
import { News } from '../components/news/news';
import { Menu } from '../models/menu';
import { ArticleCard } from '../components/article-card/article-card';
import { Drawer } from '../components/drawer/drawer';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [
    NgOptimizedImage,
    TextButton,
    News,
    ArticleCard,
    Drawer,
    RouterLink,
  ],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  private service = inject(Service);

  article = toSignal(this.service.getData());
  news = computed(() => this.article()?.news);
  trends = computed(() => this.article()?.trends);

  menus = signal<Menu[]>([
    { title: 'Home', route: '' },
    { title: 'New', route: '' },
    { title: 'Popular', route: '' },
    { title: 'Trending', route: '' },
    { title: 'Categories', route: '' },
  ]);

  isDrawerOpen = signal<boolean>(false);

  changeDrawerVisibility() {
    this.isDrawerOpen.update((old) => !old);
    console.log('visible: ' + this.isDrawerOpen());
  }
}
