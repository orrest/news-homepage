import { Component, inject, input, output } from '@angular/core';
import { Menu } from '../../models/menu';
import { NgOptimizedImage } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-drawer',
  imports: [NgOptimizedImage],
  templateUrl: './drawer.html',
  styleUrl: './drawer.css',
  host: {
    '[class]': "'fixed top-0 right-0 flex flex-col size-full bg-navy-950/50 '",
    '(click)': 'onClick($event)',
    '[class.hidden]': '!visible()',
  },
})
export class Drawer {
  private router = inject(Router);

  menus = input.required<Menu[]>();
  visible = input(false);

  close = output();

  onClick(event: MouseEvent) {
    this.close.emit();
    event.stopPropagation();
  }

  onCloseClick(event: MouseEvent) {
    this.close.emit();
    console.log('on close click');
    event.stopPropagation();
  }

  onDrawerClick(event: MouseEvent) {
    event.stopPropagation();
  }

  navigateTo(route: string) {
    this.router.navigateByUrl(route);
    this.close.emit();
  }
}
