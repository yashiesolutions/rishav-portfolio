import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-not-found',
  standalone: true,
  imports: [RouterLink],
  template: `
    <section class="section not-found">
      <div class="container not-found__inner">
        <p class="eyebrow">Error 404</p>
        <h1>This route doesn't exist — yet.</h1>
        <p>The page you're looking for was moved, renamed, or never built.</p>
        <a class="btn btn-primary" routerLink="/">Back to home</a>
      </div>
    </section>
  `,
  styles: `
    .not-found__inner {
      text-align: center;
      padding: 4rem 0;
    }
    .not-found h1 {
      max-width: 20ch;
      margin-inline: auto;
    }
    .not-found p {
      max-width: 40ch;
      margin: 0 auto 2rem;
    }
  `,
})
export class NotFoundComponent {}
