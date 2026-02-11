import { Component, signal } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink],
  template: `
  <main>
    <a [routerLink] = "['/']">
      <header class="brand-name">
        <img class="brand-logo" src="images/logo.svg" alt="logo">
      </header>
    </a>
    <section class="content">
      <router-outlet />
    </section>
  </main>
  `,
  styleUrl: './app.css'
})
export class App {
  protected readonly lol = signal('Home!');
}
