// src/app/shared/components/testimonial-card/testimonial-card.component.ts

import { Component, Input, signal, computed } from '@angular/core';
import { Testimonial } from '../../models/config.model';
import { StarRatingComponent } from '../star-rating/star-rating.component';

// Flat-colour palette: [background, foreground]
const AVATAR_PALETTE: Array<[string, string]> = [
  ['#FF6B6B', '#ffffff'],
  ['#4ECDC4', '#ffffff'],
  ['#45B7D1', '#ffffff'],
  ['#96CEB4', '#2d3436'],
  ['#F0A500', '#ffffff'],
  ['#DDA0DD', '#ffffff'],
  ['#6C5CE7', '#ffffff'],
  ['#E17055', '#ffffff'],
  ['#00B894', '#ffffff'],
  ['#FDCB6E', '#2d3436'],
  ['#A29BFE', '#ffffff'],
  ['#55EFC4', '#2d3436'],
];

function hashName(name: string): number {
  return name.split('').reduce((acc, c) => acc + c.charCodeAt(0), 0);
}

function getInitials(name: string): string {
  // Strip tokens like "&", numbers, etc. — keep only word characters
  const words = name.trim().split(/\s+/).filter(w => /[a-zA-Z]/.test(w));
  if (words.length === 0) return '?';
  if (words.length === 1) return words[0][0].toUpperCase();
  return (words[0][0] + words[words.length - 1][0]).toUpperCase();
}

@Component({
  selector: 'app-testimonial-card',
  standalone: true,
  imports: [StarRatingComponent],
  templateUrl: './testimonial-card.component.html',
  styleUrl: './testimonial-card.component.scss',
})
export class TestimonialCardComponent {
  @Input({ required: true }) testimonial!: Testimonial;

  // Treat a blank/missing URL the same as a load error
  get avatarError(): boolean {
    return !this.testimonial.avatarUrl || this._avatarLoadError();
  }

  private readonly _avatarLoadError = signal(false);

  onAvatarError(): void {
    this._avatarLoadError.set(true);
  }

  get initials(): string {
    return getInitials(this.testimonial.name);
  }

  get avatarBg(): string {
    return AVATAR_PALETTE[hashName(this.testimonial.name) % AVATAR_PALETTE.length][0];
  }

  get avatarFg(): string {
    return AVATAR_PALETTE[hashName(this.testimonial.name) % AVATAR_PALETTE.length][1];
  }
}
