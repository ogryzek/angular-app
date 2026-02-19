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

We are also adding a `baseUrl` property to the home component, so we can use it to construct the URL for the image. The `baseUrl` is `/` and then whichever directory the image is in. By default, we have assets in our `/public` directory, so `baseUrl` can be `/images` and will expect an `images/` directory in `public/`.  
  
Update `home.ts` to use the `housing-location` component:

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
    <section class="results">
      <app-housing-location [housingLocation]="housingLocation" />
    </section> 
  `,
// ...
```
Note: We are using `[housingLocation]="housingLocation"`. This is syntax shows that we expect the value to come from a property on the component. This is known as "property binding."  
  
Finally, let's update the `HousingLocation` component (particularly the `template:` section) to look like a listing component:

```ts
// src/app/housing-location/housing-location.ts
// ...
  template: `
    <section class="listing">
      <img 
        class="listing-photo"
        [src]="housingLocation().photo"
        alt="Exterior photo of {{ housingLocation().name }}"
        crossorigin
      />
      <h2 class="listing-heading">{{ housingLocation().name }}</h2>
      <p class="listing-location">{{ housingLocation().city }}, {{ housingLocation().state }}</p>
    </section>
  `,
// ...

```

Let's add some styles to our `housing-location.css` file:

```css
/* src/app/housing-location/housing-location.css */
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
  
## `@for` Decorator. 
  
In Angular, we can use the `@for` decorator to loop over a list of items. This is similar to `*ngFor` in AngularJS, and kind of similar to JavaScript's `for` loop.  
  
In the class area of the `Home` component, let's modify the hard-coded single `housingLocation` into a list called `housingLocationList`.  
  
```ts
// src/app/home/home.ts
// ...

export class Home {
    // we use the angular.dev url so we can use the images hosted there...
    readonly baseUrl = 'https://angular.dev/assets/images/tutorials/common';

    housingLocationList: HousingLocationInfo[] = [
      {
        id: 0,
        name: 'Acme Fresh Start Housing',
        city: 'Chicago',
        state: 'IL',
        photo: `${this.baseUrl}/bernard-hermant-CLKGGwIBTaY-unsplash.jpg`,
        availableUnits: 4,
        wifi: true,
        laundry: true,
      },
      {
        id: 1,
        name: 'A113 Transitional Housing',
        city: 'Santa Monica',
        state: 'CA',
        photo: `${this.baseUrl}/brandon-griggs-wR11KBaB86U-unsplash.jpg`,
        availableUnits: 0,
        wifi: false,
        laundry: true,
      },
      {
        id: 2,
        name: 'Warm Beds Housing Support',
        city: 'Juneau',
        state: 'AK',
        photo: `${this.baseUrl}/i-do-nothing-but-love-lAyXdl1-Wmc-unsplash.jpg`,
        availableUnits: 1,
        wifi: false,
        laundry: false,
      },
      {
        id: 3,
        name: 'Homesteady Housing',
        city: 'Chicago',
        state: 'IL',
        photo: `${this.baseUrl}/ian-macdonald-W8z6aiwfi1E-unsplash.jpg`,
        availableUnits: 1,
        wifi: true,
        laundry: false,
      },
      {
        id: 4,
        name: 'Happy Homes Group',
        city: 'Gary',
        state: 'IN',
        photo: `${this.baseUrl}/krzysztof-hepner-978RAXoXnH4-unsplash.jpg`,
        availableUnits: 1,
        wifi: true,
        laundry: false,
      },
      {
        id: 5,
        name: 'Hopeful Apartment Group',
        city: 'Oakland',
        state: 'CA',
        photo: `${this.baseUrl}/r-architecture-JvQ0Q5IkeMM-unsplash.jpg`,
        availableUnits: 2,
        wifi: true,
        laundry: true,
      },
      {
        id: 6,
        name: 'Seriously Safe Towns',
        city: 'Oakland',
        state: 'CA',
        photo: `${this.baseUrl}/phil-hearing-IYfp2Ixe9nM-unsplash.jpg`,
        availableUnits: 5,
        wifi: true,
        laundry: true,
      },
      {
        id: 7,
        name: 'Hopeful Housing Solutions',
        city: 'Oakland',
        state: 'CA',
        photo: `${this.baseUrl}/r-architecture-GGupkreKwxA-unsplash.jpg`,
        availableUnits: 2,
        wifi: true,
        laundry: true,
      },
      {
        id: 8,
        name: 'Seriously Safe Towns',
        city: 'Oakland',
        state: 'CA',
        photo: `${this.baseUrl}/saru-robert-9rP3mxf8qWI-unsplash.jpg`,
        availableUnits: 10,
        wifi: false,
        laundry: false,
      },
      {
        id: 9,
        name: 'Capital Safe Towns',
        city: 'Portland',
        state: 'OR',
        photo: `${this.baseUrl}/webaliser-_TPTXZd9mOo-unsplash.jpg`,
        availableUnits: 6,
        wifi: true,
        laundry: true,
      },
  ];
}
``` 

Now that we have our list of `housingLocationList`, let's use the `@for` decorator in the template area of the same `Home` component.  
  
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
    <section class="results">
      @for (housingLocation in housingLocationList) {
        <app-housing-location [housingLocation]="housingLocation" />
      }
    </section> 
  `,
// ...
```

## Services

Let's create a service. We will use the CLI to generate a service. First, let's try looking at the docks and then a `--dry-run` to see what it will do.  
   
Check the docs:  
```sh
ng --help generate service
```

Do a dry run:  
```sh
ng generate service housing --dry-run
```

As you can see, it generates a couple of files. One is the service and other is a "spec" which is another name for a test. Since we are not covering testing in this course, we can generate the service without the test.  

```sh
ng generate service housing --skip-tests
```

That generates a `housing.ts` file in `src/app/housing.ts` for us. What we are going to do is take the `housingLocationList` out of our Home component, put it in the service, and then use Angular's Dependency Injection to hydrate the service into the Home component.  
  
Next, open up the `housing.ts` service and add the `housingLocationList`. You can just cut/paste from the Home component (note: we don't need it in the Home component anymore, which is why I stated "cut").  
  
We also add a couple of methods in the Housing service to interact with the data. One is to get a list of all the housing locations, and the other is to get one based on its id.  
  
So, our Housing service should end up looking like this:  
  
```js
// src/app/ housing.ts
import { Injectable } from '@angular/core';
import { HousingLocationInfo } from './housing-location';

@Injectable({
  providedIn: 'root',
})
export class Housing {
  readonly baseUrl = 'https://angular.dev/assets/images/tutorials/common';
  housingLocationList: HousingLocationInfo[] = [
    {
      id: 0,
      name: 'Acme Fresh Start Housing',  
      city: 'Chicago',
      state: 'IL',
      photo: `${this.baseUrl}/bernard-hermant-CLKGGwIBTaY-unsplash.jpg`,
      availableUnits: 4,
      wifi: true,
      laundry: true,
    },
    // ...
  ];

  getAllHousingLocations(): HousingLocationInfo[] {
    return this.housingLocationList;
  }

  getHousingLocationById(id: number): HousingLocationInfo | undefined {
    return this.housingLocationList.find(
      (housingLocation) => housingLocation.id === id
  );}
}
```

Next, we want to use the Housing service in our Home component. To do this, we will use Angular's Dependency Injection. Which means we need to add `inject` to the imports.  
  
```ts
import { Component, inject } from '@angular/core';
```

Then we declate an empty list for housing locations, and right after that we can use the `inject` function on the housing service.  
  
When the class constructor is called, we want the dependency injection to happen so we actually call inject inside the contructor. This means our Home component will look like this:  

```ts
// src/app/home/home.ts
import { Component, inject } from '@angular/core';
import { HousingLocationInfo } from '../housing-location';
import { Housing } from '../housing';

@Component({
  selector: 'app-home',
  imports: [HousingLocation],
  template: `
    <section>
      <form>
        <input type="text" placeholder="Filter by city" />
        <button class="primary" type="button">Search</button>
      </form>
    </section>
    <section class="results">
      @for (housingLocation of housingLocationList; track $index) {
        <app-housing-location [housingLocation]="housingLocation" />
      }
    </section> 
  `,
  styleUrl: './home.css',
});

export class Home {
  housingLocationList: HousingLocationInfo[] = [];
  housingService: Housing = inject(Housing);

  constructor() {
    this.housingLocationList = this.housingService.getAllHousingLocations();
  }
}

```

Run `ng serve` and make sure it still works.  
  
## Routing
  
So far, we've created some components and are able to view a list of house-locations on our app. For the next step, we want to be able to click on one and view it as it's own page. Of course, we'll need a component to do so (the `details.ts` component), but there's something interesting to note. Each location has an ID, and we want to be able to use that ID to pull up the specific location's details.  
  
To do so, we want to use something like `my-website-address/housing-locations/1` to pull up the details for the location with the ID of 1. The mechanism to create dynamic linking like this is called routing.  

Internally, we use code like `:id` to represent a URL Parameter in the path. And then we can call it by using the `RouterLink` directive. For example, in the `housing-location.ts` component, we can add a link to the details page like this:  

```ts
// src/app/housing-location/housing-location.ts
// ...
  template: `
    <section class="listing">
      <img 
        class="listing-photo"
        [src]="housingLocation().photo"
        alt="Exterior photo of {{ housingLocation().name }}"
        crossorigin
      />
      <h2 class="listing-heading">{{ housingLocation().name }}</h2>
      <p class="listing-location">{{ housingLocation().city }}, {{ housingLocation().state }}</p>
      <p><a [routerLink] = "['/details', housingLocation().id]">Learn More</a></p> 
    </section>
  `,
// ...
```
Where `[routerLink]` is the directive to add a link to a route, and the `['/details', housingLocation().id]` is the path to the route. The `housingLocation().id` is the dynamic part of the path.  
  
With the link in place on the `housing-location` component, let's create the `details` component: 
```sh
ng generate component details --skip-tests
```
  
We added the mechanism for constructing the link in the housing-location component, and we created the details component, which is the view to use for the specific housing-location. Now we need to tell Angular how to use that link to route to the details page.  
  
We took a look at the [documentation](https://angular.dev/tutorials/first-app/10-routing), which said to create a `routes.ts` file, but we decided to use the `app.routes.ts` that already existed.  
  
```ts
// src/app/app.routes.ts
import { Routes } from '@angular/router';
import { Home } from './home/home';
import { Details } from './details/details';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'details/:id', component: Details },
];
```
As you can see, the  `routes` are an array of objects where each object represent a route (a path that maps to a component).  
  
As you can see, the details path is `details/:id` where `:id` is the URL parameter, and it maps to the `Details` component, which is the view component for that route.  
  
Lastly, because we are adding routes, we need to import the `RouterOutlet` in the `app.ts` file, and update the `bootstrapApplication` in the `main.ts` file.  
  
```ts
// src/app/app.ts
// ...
import { RouterOutlet, RouterLink } from '@angular/router';
// ...
  imports: [RouterOutlet, RouterLink],
// ...
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
// ...
```

And then we update the `main.ts` file to include the `provideRouter` provider:

```ts
// src/main.ts
// ...
import { provideRouter } from '@angular/router';
import { routes } from './app/app.routes';
// ...

bootstrapApplication(App, {
  providers: [
    ...appConfig.providers,
    provideRouter(routes),
  ],
})
  .catch((err) => console.error(err));
```

## Bonus Exercise!  
  
Complete the Details component view such that it displays the details of the housing location. Use the Housing service to get the data.  

## Completing the Details Component View

To complete the `Details.ts` component, we need to get the `id` from the URL parameter. In order to do so, we import `ActivatedRoute` from `@angular/router`, which allows us to set the `route` property on the `Details` class. This gives us access to the `id` property, which we will want to pass to the `Housing` service through its `getHousingLocationById` method.  
  
```ts
// src/app/details/details.ts
/// ...
export class Details {
  route: ActivatedRoute = inject(ActivatedRoute);
  housingService: HousingService = inject(HousingService);
  housingLocationId: number = -1;
  housingLocation: HousingLocationInfo | undefined;

  constructor() {
    this.housingLocationId = Number(this.route.snapshot.params['id']);
    this.housingLocation = this.housingService.getHousingLocationById(this.housingLocationId)
  } 
}
``` 

Of course, we need to import `ActivatedRoute` and `HousingService` at the top of the file, and we set the template to use the `housingLocation` property.   
  
Our Details component file should now look like this:

```ts
// src/app/details/details.ts
import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Housing as HousingService } from '../housing';
import { HousingLocationInfo } from '../housing-location';

@Component({
  selector: 'app-details',
  imports: [],
  styleUrls: ['./details.css'],
  template: `
    <article>
      <img
        class="listing-photo"
        [src]="housingLocation?.photo"
        alt="Exterior photo of {{ housingLocation?.name }}"
        crossorigin
      />
      <section class="listing-description">
        <h2 class="listing-heading">{{ housingLocation?.name }}</h2>    
      </section>
    </article>
  `,
})
export class Details {
  route: ActivatedRoute = inject(ActivatedRoute);
  housingService: HousingService = inject(HousingService);
  housingLocationId: number = -1;
  housingLocation: HousingLocationInfo | undefined;

  constructor() {
    this.housingLocationId = Number(this.route.snapshot.params['id']);
    this.housingLocation = this.housingService.getHousingLocationById(this.housingLocationId)
  }
}
```

And of course, we add the styles to `details.css`:

```css
/* src/app/details/details.css */
.listing-photo {
  display: block;
  height: 600px;
  width: 50%;
  object-fit: cover;
  border-radius: 30px;
  float: right;
}
.listing-heading {
  font-size: 48pt;
  font-weight: bold;
  margin-bottom: 15px;
}
.listing-location::before {
  content: url('/public/location-pin.svg') / '';
}
.listing-location {
  font-size: 24pt;
  margin-bottom: 15px;
}
.listing-features > .section-heading {
  color: var(--secondary-color);
  font-size: 24pt;
  margin-bottom: 15px;
}
.listing-features {
  margin-bottom: 20px;
}
.listing-features li {
  font-size: 14pt;
}
li {
  list-style-type: none;
}
.listing-apply .section-heading {
  font-size: 18pt;
  margin-bottom: 15px;
}
label,
input {
  display: block;
}
label {
  color: var(--secondary-color);
  font-weight: bold;
  text-transform: uppercase;
  font-size: 12pt;
}
input {
  font-size: 16pt;
  margin-bottom: 15px;
  padding: 10px;
  width: 400px;
  border-top: none;
  border-right: none;
  border-left: none;
  border-bottom: solid 0.3px;
}
@media (max-width: 1024px) {
  .listing-photo {
    width: 100%;
    height: 400px;
  }
}
```

And that's the Details component complete!  
  
## Add a Form

We're going to add a form to get familiar forms! We can add a form on the details page to apply to rent a home. For now, we won't do anything with the form input values (data), other than ust log them to the console, but we will implement all of the necessary steps for handling forms.  
  
In the Housing service (housing.ts), we can add a method to log details to the console. It will take 3 arguments, and log a string.  
  
```ts
// src/app/housing.ts
// ...
submitApplication(firstName: string, lastName: string, email: string) {
  console.log(`firstName: ${firstName}, lastName: ${lastName}, email: ${email}.`);
}
```

Now we can add the form to the template where it will be displayed. And that is the `Details` component.  
  
```ts
// src/app/details/details.ts
// ...

`
<section class="listing-apply">
  <h2 class="section-heading">Apply now to live here</h2>
  <form [formGroup]="applyForm" (submit)="submitForm()">  
    <label for="first-name">First Name</label>
    <input id="first-name" type="text" formControlName="firstName" />
    <label for="last-name">Last Name</label>
    <input id="last-name" type="text" formControlName="lastName" />
    <label for="email">Email</label>
    <input id="email" type="email" formControlName="email" />
    <button type="submit" class="primary">Apply now</button>
  </form>
</section>
`
// ...
```

Let's pay attention to 3 parts of the form: 
1. The `formGroup` directive on the `<form>` element. This directive is used to bind the form to the `applyForm` property on the `Details` class.  

What this means is that `[formGroup]="applyForm"` is saying that the `applyForm` property of the `Details` class is now bound to this form.  

2. The `formControlName` directive on the `<input>` elements. This directive is used to bind the input to the `applyForm` property on the `Details` class.  

Basically the equivalent of 1, but for each input.


3. The `(submit)` event on the `<form>` element. This is where we specify the method to be called when the form is submitted.  
  
We also need to add the `ReactiveFormsModule` to the `imports` array in the `@Component` decorator, and the imports at the top.

```ts
// src/app/details/details.ts
// ...
import { FormGroup, FormControl, ReactiveFormsModule } from '@angular/forms';
// ...
  imports: [ReactiveFormsModule],
// ...
```

And finally, we want to add a property (`applyForm`)and a method (`submitForm`) to the `Details` class. 
  
```ts
// src/app/details/details.ts
// ...
export class Details {
  // ...
  applyForm: FormGroup = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    email: new FormControl(''),
  });
  // ...
  submitForm() {
    this.housingService.submitApplication(
      this.applyForm.value.firstName ?? '',
      this.applyForm.value.lastName ?? '',
      this.applyForm.value.email ?? ''
    )
  }
}
```

## Add Search Filter

To add a filter, we'll use the input we have on our Home component, and add a method to filter the results.  
  
We can add a template variable to the input, in this case we'll use `#filter`. This is just a variable that allows us to access the value of the input from the button, in the `(click)` event, like this: `(click)="filterResults(filter.value)"`.  

```ts
// src/app/home/home.ts
// ...
  template: `
    <section>
      <form>
        <input type="text" placeholder="Filter by city" #filter />
        <button class="primary" type="button" (click)="filterResults(filter.value)">Search</button>
      </form>
    </section>  
  `,
// ...
```

And then we add the method to the class:

```ts
// src/app/home/home.ts
// ...
export class Home {
  // ...
  filterResults(text: string) {
    if (!text) {
      this.filteredLocationList = this.housingLocationList;
    }

    this.filteredLocationList = this.housingLocationList.filter(
      (housingLocation) => housingLocation.city.toLowerCase().includes(text.toLowerCase())
    );
  }
}
```

And that's it! We can now search for a city and filter the results.  
  
## Configure a JSON Server

First off, let's install `json-server`. We will use this to serve a json file that we will use as the database for our application, rather than have a hard-coded `housing-location` array in our `housing` service.  
  
```
npm install -g json-server
```

Make a file for your data. It doesn't really matter where you put this, as long as you're able to serve it, but let's go ahead and keep it in the root directory of our application, and call it `db.json`:

```json
{
  "locations": [
    {
      "id": 0,
      "name": "Acme Fresh Start Housing",
      "city": "Chicago",
      "state": "IL",
      "photo": "https://angular.dev/assets/images/tutorials/common/bernard-hermant-CLKGGwIBTaY-unsplash.jpg",
      "availableUnits": 4,
      "wifi": true,
      "laundry": true
    },
    {
      "id": 1,
      "name": "A113 Transitional Housing",
      "city": "Santa Monica",
      "state": "CA",
      "photo": "https://angular.dev/assets/images/tutorials/common/brandon-griggs-wR11KBaB86U-unsplash.jpg",
      "availableUnits": 0,
      "wifi": false,
      "laundry": true
    },
    {
      "id": 2,
      "name": "Warm Beds Housing Support",
      "city": "Juneau",
      "state": "AK",
      "photo": "https://angular.dev/assets/images/tutorials/common/i-do-nothing-but-love-lAyXdl1-Wmc-unsplash.jpg",
      "availableUnits": 1,
      "wifi": false,
      "laundry": false
    },
    {
      "id": 3,
      "name": "Homesteady Housing",
      "city": "Chicago",
      "state": "IL",
      "photo": "https://angular.dev/assets/images/tutorials/common/ian-macdonald-W8z6aiwfi1E-unsplash.jpg",
      "availableUnits": 1,
      "wifi": true,
      "laundry": false
    },
    {
      "id": 4,
      "name": "Happy Homes Group",
      "city": "Gary",
      "state": "IN",
      "photo": "https://angular.dev/assets/images/tutorials/common/krzysztof-hepner-978RAXoXnH4-unsplash.jpg",
      "availableUnits": 1,
      "wifi": true,
      "laundry": false
    },
    {
      "id": 5,
      "name": "Hopeful Apartment Group",
      "city": "Oakland",
      "state": "CA",
      "photo": "https://angular.dev/assets/images/tutorials/common/r-architecture-JvQ0Q5IkeMM-unsplash.jpg",
      "availableUnits": 2,
      "wifi": true,
      "laundry": true
    },
    {
      "id": 6,
      "name": "Seriously Safe Towns",
      "city": "Oakland",
      "state": "CA",
      "photo": "https://angular.dev/assets/images/tutorials/common/phil-hearing-IYfp2Ixe9nM-unsplash.jpg",
      "availableUnits": 5,
      "wifi": true,
      "laundry": true
    },
    {
      "id": 7,
      "name": "Hopeful Housing Solutions",
      "city": "Oakland",
      "state": "CA",
      "photo": "https://angular.dev/assets/images/tutorials/common/r-architecture-GGupkreKwxA-unsplash.jpg",
      "availableUnits": 2,
      "wifi": true,
      "laundry": true
    },
    {
      "id": 8,
      "name": "Seriously Safe Towns",
      "city": "Oakland",
      "state": "CA",
      "photo": "https://angular.dev/assets/images/tutorials/common/saru-robert-9rP3mxf8qWI-unsplash.jpg",
      "availableUnits": 10,
      "wifi": false,
      "laundry": false
    },
    {
      "id": 9,
      "name": "Capital Safe Towns",
      "city": "Portland",
      "state": "OR",
      "photo": "https://angular.dev/assets/images/tutorials/common/webaliser-_TPTXZd9mOo-unsplash.jpg",
      "availableUnits": 6,
      "wifi": true,
      "laundry": true
    }
  ]
}
```

To run the server, use the `json-server` command on the file. In this case, we'll pass the `--watch` option as well:
```
json-server --watch db.json
```

Next, we'll update the `Housing` service to fetch data from the json-server rather than use the hard-coded array of housing-listings.  

Set a `url` property on the `Housing` service that we can use to fetch the data:
```ts
// src/app/housing.ts
// ...
url = 'http://localhost:3000/locations';

// ...
async getAllHousingLocations(): Promise<HousingLocationInfo[]> {
  const data = await fetch(this.url);
  return (await data.json()) ?? [];
}

```

Finally, we'll update the `getHousingLocationById()` method to also fetch data from the json-server.  
  
```ts
// src/app/housing.ts
async getHousingLocationById(id: number): Promise<HousingLocationInfo | undefined> {
  const data = await fetch(`${this.url}/${id}`);
  const locationJSON = await data.json();
  return locationJSON ?? [];
}

```

And lastely, we need to update the components! `Home` and `Details` to use the new `getAllHousingLocations()` and `getHousingLocationById()`, respectively.  
  
```ts
// src/app/home/home.ts

// ...

constructor() {
  this.housingService
    .getAllHousingLocations()
    .then((housingLocationList: HousingLocationInfo[]) => {
      this.housingLocationList = housingLocationList;
      this.filteredLocationList = housingLocationList;
      this.changeDetectorRef.markForCheck();
    });
}
```

```ts
// src/app/details/details.ts

// ...
  const housingLocationId = parseInt(this.route.snapshot.params['id'], 10);
  this.housingService.getHousingLocationById(housingLocationId).then((housingLocation) => {
    this.housingLocation = housingLocation;
    this.changeDetectorRef.markForCheck();
  });
```
