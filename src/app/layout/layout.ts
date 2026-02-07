import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Breadcrumb } from '../component/shared/breadcrumb/breadcrumb';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [Breadcrumb, RouterModule],
  templateUrl: './layout.html',
  styleUrl: './layout.css'
})
export class Layout {}
