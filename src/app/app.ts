import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  // templateUrl: './lol.html',
  template: `
    <h1>Hello, {{title()}}</h1>`,
  styleUrl: './app.css'
})
export class App {
  // title = 'LoL Face!!! hahahaa'
  protected readonly title = signal('World!');
}
