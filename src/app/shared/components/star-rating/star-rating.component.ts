// src/app/shared/components/star-rating/star-rating.component.ts

import { Component, Input, computed, signal } from '@angular/core';

@Component({
  selector: 'app-star-rating',
  standalone: true,
  templateUrl: './star-rating.component.html',
  styleUrl: './star-rating.component.scss',
})
export class StarRatingComponent {
  @Input({ required: true }) rating = 0;
  @Input() maxRating = 5;

  get stars(): boolean[] {
    return Array.from({ length: this.maxRating }, (_, i) => i < this.rating);
  }

  get ariaLabel(): string {
    return `${this.rating} out of ${this.maxRating} stars`;
  }
}
