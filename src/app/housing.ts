import { Injectable } from '@angular/core';
import { HousingLocationInfo } from './housing-location';

@Injectable({
  providedIn: 'root',
})
export class Housing {
  readonly baseUrl = 'https://angular.dev/assets/images/tutorials/common';
  url = "http://localhost:3000/locations";
  

  async getAllHousingLocations(): Promise<HousingLocationInfo[]> {
    const data = await fetch(this.url);
    return (await data.json()) ?? [];
  }

  async getHousingLocationById(id: number): Promise<HousingLocationInfo | undefined> {
    const data = await fetch(`${this.url}?id=${id}`);
    const locationJson = await data.json();
    return locationJson[0] ?? {};
  }

  submitApplication(firstName: string, lastName: string, email: string) {
    console.log(`firstName: ${firstName}, lastName: ${lastName}, email: ${email}.`);
  }
}
