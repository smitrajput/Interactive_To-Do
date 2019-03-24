import {Component} from '@angular/core';

/**
 * @title Basic use of the tab nav bar
 */
@Component({
  selector: 'app-tab-nav-bar-basic-example',
  templateUrl: 'tab-nav-bar-basic-example.component.html',
  styleUrls: ['tab-nav-bar-basic-example.component.css'],
})
export class TabNavBarBasicExampleComponent {
  links = [
    {
      label: 'Top Priorities',
      url: "/dashboard"
    }, {
      label: 'To-Do List',
      url: "/todolist",
     }
  ];
  activeLink = this.links[0];
  background = '';
  linkUrls = ["/dashboard", "/todolist", "/details/:id"];

  toggleBackground() {
    this.background = this.background ? '' : 'primary';
  }
}
