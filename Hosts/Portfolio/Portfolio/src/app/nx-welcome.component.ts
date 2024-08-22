import { Component, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-nx-welcome',
  standalone: true,
  imports: [CommonModule],
  template: `
    <h1>Header One</h1>
    <h2>Header Two</h2>
    <h3>Header Three</h3>
    <h4>Header Four</h4>
    <h5>Header Five</h5>
    <h6>Header Six</h6>
    <p>Body Text</p>
    <span>Other Text</span>
  `,
  styles: [],
  encapsulation: ViewEncapsulation.None,
})
export class NxWelcomeComponent {}
