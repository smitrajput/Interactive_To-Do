import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HeroesComponent } from './heroes/heroes.component';
import { DashboardComponent }   from './dashboard/dashboard.component';
import { HeroDetailComponent }  from './hero-detail/hero-detail.component';
import { DashboardMatComponent }   from './dashboard-mat/dashboard-mat.component';
import { DragDropMatComponent } from './drag-drop-mat/drag-drop-mat.component';


const routes: Routes = [
  { path: 'todolist', component: DragDropMatComponent },
  { path: 'dashboard', component: DashboardMatComponent },
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule { 

}
