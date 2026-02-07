import { Component, OnDestroy } from '@angular/core';
import { Router, NavigationEnd, RouterModule } from '@angular/router';
import { NgFor, NgIf } from '@angular/common';
import { filter, Subscription } from 'rxjs';

type Crumb = {
  label: string;
  url: string;
};

@Component({
  selector: 'app-breadcrumb',
  standalone: true,
  imports: [
    RouterModule, // 🔥 NECESARIO para routerLink
    NgFor,        // 🔥 NECESARIO para *ngFor
    NgIf          // 🔥 NECESARIO para *ngIf
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

    const breadcrumbs: Crumb[] = [{ label: 'Inicio', url: '/' }];

    let currentUrl = '';
    for (const segment of segments) {
      currentUrl += `/${segment}`;
      breadcrumbs.push({
        label: this.formatLabel(segment),
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
