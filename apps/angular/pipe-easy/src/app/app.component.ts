import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { FastComputationPipe } from './heavy-computation.pipe';

@Component({
  standalone: true,
  imports: [NgFor, FastComputationPipe],
  selector: 'app-root',
  template: `
    <div *ngFor="let person of persons; let index = index">
      {{ person | fastComputation: index }}
    </div>
  `,
})
export class AppComponent {
  persons = ['toto', 'jack', 'pierre', 'paul'];

  heavyComputation(name: string, index: number) {
    // very heavy computation
    return `${name} - ${index}`;
  }
}
