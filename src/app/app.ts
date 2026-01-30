import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Home } from './home/home';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Home],
  template: `
  <main>
    <header class="brand-name">
      <img class="brand-logo" src="/public/logo.png" alt="logo">
      <h1>My Houses</h1>
    </header>
    <section class="content">
      <app-home />
    </section>
  </main>
  `,
  styleUrl: './app.css'
})
export class App {
  secretWord = 'Everybody';
  protected readonly lol = signal('Home!');
}
