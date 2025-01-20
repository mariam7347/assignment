import { NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  imports: [NgIf],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.css'
})
export class PortfolioComponent {
  photos:string[] = [
    '/poert1.png',
    '/port2.png',
    '/port3.png',
    '/poert1.png',
    '/port2.png',
    '/port3.png',
  ];

  selectedPhoto: string | null = null;

  selectPhoto(photo: string): void {
    this.selectedPhoto = photo;
  }

  closePhoto(): void {
    this.selectedPhoto = null;
  }

}
