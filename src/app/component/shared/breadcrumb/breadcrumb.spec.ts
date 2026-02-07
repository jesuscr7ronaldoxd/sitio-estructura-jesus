import { Component, OnDestroy } from '@angular/core';
import { Router, NavigationEnd, RouterModule } from '@angular/router';
import { filter, Subscription } from 'rxjs';
import { NgFor, NgIf } from '@angular/common';

type Crumb = {
  label: string;
  url: string;
};

@Component({
  selector: 'app-breadcrumb', // 👈 ESTE ES EL NOMBRE CORRECTO
 standalone: true,
  imports: [
    RouterModule, //  para routerLink
    NgFor,        //  para *ngFor
    NgIf          //  para *ngIf
  ],
  templateUrl: './breadcrumb.html',
  styleUrls: ['./breadcrumb.css'],
})
export class Breadcrumb implements OnDestroy {

  crumbs: Crumb[] = [];
  private subscription!: Subscription;

  constructor(private router: Router) {
    this.subscription = this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe(() => this.buildBreadcrumbs());

    this.buildBreadcrumbs();
  }

  private buildBreadcrumbs(): void {
    const url = this.router.url.split('?')[0].split('#')[0];
    const segments = url.split('/').filter(Boolean);

    const labelMap: Record<string, string> = {
      elementos: 'Elementos',
      menu: 'Menú',
      breadcrumbs: 'breadcrumbs.html',
      'mapa-sitio': 'Mapa del sitio',
    };

    const breadcrumbs: Crumb[] = [{ label: 'Inicio', url: '/' }];

    let currentUrl = '';
    for (const segment of segments) {
      currentUrl += `/${segment}`;
      breadcrumbs.push({
        label: labelMap[segment] ?? this.formatLabel(segment),
        url: currentUrl,
      });
    }

    this.crumbs = breadcrumbs;
  }

  private formatLabel(text: string): string {
    return text
      .replace(/-/g, ' ')
      .replace(/\b\w/g, letter => letter.toUpperCase());
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
