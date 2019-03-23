import { Component } from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-dashboard-mat',
  templateUrl: './dashboard-mat.component.html',
  styleUrls: ['./dashboard-mat.component.css']
})
export class DashboardMatComponent {

  heroes: Hero[] = [];
  /** Based on the screen size, switch from standard to one column per row */
  cards = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(({ matches }) => {
      if (matches) {
        return [
          { title: 'Task 1', cols: 1, rows: 1  },
          { title: 'Task 2', cols: 1, rows: 1  },
          { title: 'Task 3', cols: 1, rows: 1  },
          { title: 'Task 4', cols: 1, rows: 1  }
        ];
      }

      return [
        { title: 'Task 1', cols: 2, rows: 1 },
        { title: 'Task 2', cols: 1, rows: 1 },
        { title: 'Task 3', cols: 1, rows: 2 },
        { title: 'Task 4', cols: 1, rows: 1 }
      ];
    }),
  );

  constructor(private breakpointObserver: BreakpointObserver,
              private heroService: HeroService) {}

  ngOnInit() {
    this.getHeroes();
  }

  getHeroes(): void {
    this.heroService.getHeroes()
      .subscribe(heroes => this.heroes = heroes.slice(1, 5));
  }
}
