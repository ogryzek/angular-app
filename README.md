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

## Add a Component

We are going to add a Home component using an Angular generator. Try running:

```bash
ng generate component home
```

And then just confirm the app builds without any errors with `ng serve`.  
  
Now that we have a Home component with its appropriate files, let's use it in our app component. The first step is to import it, so  we will want to add the import line to import the file, and we will add the Home component to the imports array in the @Component decorator.

```ts
// src/app.ts
import {Home} from './home/home';
// ...

@Component({
  imports: [RouterOutlet, Home],
  //...
})

export class App {
  //...
}
```

And then we can use the Home component in our template.

Since we can use it, we will now add it to the template in the `app.ts` file:

```ts
// src/app.ts
// ...
  template: `
    <main>
      <header class="brand-name">
        <img class="brand-logo" src="/public/logo.svg" alt="logo" aria-hidden="true" />
      </header>
      <section class="content">
        <app-home />
      </section>
    </main>`,

// ...
```

And we should see the "home works!" text from the home component.  
  
Go ahead and add these global styles to `src/styles.css`:

```css
:root {
  --primary-color: #605DC8;
  --secondary-color: #8B89E6;
  --accent-color: #e8e7fa;
  --shadow-color: #E8E8E8;
}
button.primary {
  padding: 10px;
  border: solid 1px var(--primary-color);
  background: var(--primary-color);
  color: white;
  border-radius: 8px;
}
```

## Add a Form

In the home.ts file, we will add a form to the template.  

```ts
// src/app/home/home.ts
// ...
  template: `
    <section>
      <form>
        <input type="text" placeholder="Filter by city" />
        <button class="primary" type="button">Search</button>
      </form>
    </section>  
  `,
// ...
```

And add some CSS to `src/app/home/home.css`:

```css
.results {
  display: grid;
  column-gap: 14px;
  row-gap: 14px;
  grid-template-columns: repeat(auto-fill, minmax(400px, 400px));
  margin-top: 50px;
  justify-content: space-around;
}
input[type="text"] {
  border: solid 1px var(--primary-color);
  padding: 10px;
  border-radius: 8px;
  margin-right: 4px;
  display: inline-block;
  width: 30%;
}
button {
  padding: 10px;
  border: solid 1px var(--primary-color);
  background: var(--primary-color);
  color: white;
  border-radius: 8px;
}
@media (min-width: 500px) and (max-width: 768px) {
  .results {
      grid-template-columns: repeat(2, 1fr);
  }
  input[type="text"] {
      width: 70%;
  }   
}
@media (max-width: 499px) {
  .results {
      grid-template-columns: 1fr;
  }    
}
```

That's it! The application should work.  
  
## Exercise. 

Complete the steps as outlined above. Optionally, you may add other components, and use them in the App component. You may also wish to use `templateUrl` for separate HTML files rather than `template` as in this tutorial.  
  
## HousingLocation  
Let's generate a new component called `HousingLocation`. 
  
```sh
ng generate component housingLocation
```

Next, we want to import it into the Home component, so open up `app/home/home.ts` add the file import and the component import:

```ts
// app/home/home.ts
// ...
import { HousingLocation } from '../housing-location/housing-location';
// ...
  imports: [HousingLocation],
// ...  

``` 

And then we can use it in the template:

```ts
// app/home/home.ts

// ...
  template: `
    <section>
      <form>
        <input type="text" placeholder="Filter by city" />
        <button class="primary" type="button">Search</button>
      </form>
    </section>
    <section class="results">
      <app-housing-location />
    </section> 
  `,  
 // ...
```

And add the styles to `housing-location.css`:

```css
.listing {
  background: var(--accent-color);
  border-radius: 30px;
  padding-bottom: 30px;
}
.listing-heading {
  color: var(--primary-color);
  padding: 10px 20px 0 20px;
}
.listing-photo {
  height: 250px;
  width: 100%;
  object-fit: cover;
  border-radius: 30px 30px 0 0;
}
.listing-location {
  padding: 10px 20px 20px 20px;
}
.listing-location::before {
  content: url('/public/location-pin.svg') / '';
}
section.listing a {
  padding-left: 20px;
  text-decoration: none;
  color: var(--primary-color);
}
section.listing a::after {
  content: '\203A';
  margin-left: 5px;
}
```

## Creating an Angular Interface. 
  
If you want to read the CLI help menu specifically for generating an interface, the following command is useful:

```
ng --help generate interface
```   

We'll use `ng generate` to generate a new interface. We want to generate an interface for `HousingLocation` which will create a new `housing-location.ts` file. We want this to be in our application's root directory. In our case, that is `first-app/`.    

```sh
ng generate interface housingLocation
```

This will create a new file in `src/app/housing-location.ts` with the following contents:

```ts
export interface HousingLocation {
}
```

If we import this as is to use in our `Home` component, we will have a naming collision, because `HousingLocation` is also the name of a component.  
  
To avoid this collision, we could add an alias, or just rename the interface. And that's what we'll do:

```ts
// src/app/housing-location.ts
export interface HousingLocationInfo {
  id: number;
  name: string;
  city: string;
  state: string;
  photo: string;
  availableUnits: number;
  wifi: boolean;
  laundry: boolean;
}
```

And then we can use it in our `Home` component:

```ts
// src/app/home/home.ts
import { HousingLocationInfo } from '../housing-location';

// ...

export class Home {

  housingLocation: HousingLocationInfo = {
    id: 9999,
    name: 'Test Home',
    city: 'Test city',
    state: 'ST',
    photo: `${this.baseUrl}/example-house.jpg`,
    availableUnits: 99,
    wifi: true,
    laundry: false,
  };
}
```

We are also adding a `baseUrl` property to the home component, so we can use it to construct the URL for the image.
