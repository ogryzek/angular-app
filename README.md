# Angular First App

We are going over the [Angular.dev tutorial](https://angular.dev/tutorials/first-app-tutorial) for building a houses for rent app. 
  
## Running the App

```bash
npm install
npm start

# or
ng serve
```

## Tutorial Section 1: Setup

Recall, we need to have Node and Angular installed. Make sure to [install NodeJS](https://nodejs.org/en/download) if you haven't already. Then you can install the Angular CLI. The lastest, which we are using for this tutorial is `21.1.2`.  
  
```bash
npm install -g @angular/cli@21.1.2
```

For this project, we create a new application using `ng new first-app`.  
  
And here we are!  

First of all, let's run the application using `ng serve` to make sure it works, and then we'll move on to the next step.

 ## Hello World!  

  
We have created a new application, let's modify it so it displays "Hello World!" instead of "Hello, first-app".  

src/app.html
```html
    <title>Homes</title>
```

src/app.ts
```ts
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

```