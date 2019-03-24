import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; // <-- NgModel lives here
import { HttpClientModule }    from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule, MatCheckboxModule, MatInputModule, MatSelectModule, MatRadioModule, MatCardModule, MatTabsModule, MatToolbarModule, MatSidenavModule, MatIconModule, MatListModule, MatTableModule, MatPaginatorModule, MatSortModule, MatGridListModule, MatMenuModule, MatChipsModule} from '@angular/material';

import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './in-memory-data.service';
import { AppComponent } from './app.component';
import { HeroesComponent } from './heroes/heroes.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { MessagesComponent } from './messages/messages.component';
import { AppRoutingModule } from './app-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeroSearchComponent } from './hero-search/hero-search.component';
import { AddressModuleComponent } from './address-module/address-module.component';
import { NavMatComponent } from './nav-mat/nav-mat.component';
import { LayoutModule } from '@angular/cdk/layout';
import { TableMatComponent } from './table-mat/table-mat.component';
import { DashboardMatComponent } from './dashboard-mat/dashboard-mat.component';
import { DragDropMatComponent } from './drag-drop-mat/drag-drop-mat.component';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { TabNavBarBasicExampleComponent } from './tab-nav-bar-basic-example/tab-nav-bar-basic-example.component';

@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    HeroDetailComponent,
    MessagesComponent,
    DashboardComponent,
    HeroSearchComponent,
    AddressModuleComponent,
    NavMatComponent,
    TableMatComponent,
    DashboardMatComponent,
    DragDropMatComponent,
    TabNavBarBasicExampleComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    // The HttpClientInMemoryWebApiModule module intercepts HTTP requests
    // and returns simulated server responses.
    // Remove it when a real server is ready to receive requests.
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
    ),
    BrowserAnimationsModule,
    MatButtonModule, 
    MatCheckboxModule, MatInputModule, MatSelectModule, MatRadioModule, MatCardModule, MatTabsModule, ReactiveFormsModule, LayoutModule, MatToolbarModule, MatSidenavModule, MatIconModule, MatListModule, MatTableModule, MatPaginatorModule, MatSortModule, MatGridListModule, MatMenuModule, DragDropModule,
    MatChipsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
