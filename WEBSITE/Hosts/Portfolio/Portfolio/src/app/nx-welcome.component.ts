import { Component, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-nx-welcome',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    @defer {
      <div class="loading-container">
        <h4>Loading...</h4>
      </div>
    }
  `,
  styles: [],
  encapsulation: ViewEncapsulation.None,
})
export class NxWelcomeComponent {

  loading = true;

}
