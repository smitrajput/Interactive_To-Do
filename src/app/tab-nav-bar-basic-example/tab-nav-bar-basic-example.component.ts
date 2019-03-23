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
  links = ['Top Priorities', 'To-Do List', 'Task Details'];
  activeLink = this.links[0];
  background = '';
  linkUrls = ["/dashboard", "/heroes", "/details/:id"];

  toggleBackground() {
    this.background = this.background ? '' : 'primary';
  }
}
