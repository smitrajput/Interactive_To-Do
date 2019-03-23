import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Hero } from './hero';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
      { id: 11, name: 'Complete tutorial on Ethereum' },
      { id: 12, name: 'Bring a smile to a stranger' },
      { id: 13, name: 'Guide juniors to work to add value and not for passion' },
      { id: 14, name: 'Spread awareness about Blockchain technology and its use cases' },
      { id: 15, name: 'Skydive with friends' },
      { id: 16, name: 'Gift an iPad to little brother' },
      { id: 17, name: 'Become odd to be number one' },
      { id: 18, name: 'Drop Pie to school' },
      { id: 19, name: 'Top the billboard' },
      { id: 20, name: 'Create a useful network on LinkedIn' }
    ];
    return {heroes};
  }

  // Overrides the genId method to ensure that a hero always has an id.
  // If the heroes array is empty,
  // the method below returns the initial number (11).
  // if the heroes array is not empty, the method below returns the highest
  // hero id + 1.
  genId(heroes: Hero[]): number {
    return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.id)) + 1 : 11;
  }
}