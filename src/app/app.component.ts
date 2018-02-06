import { Component } from '@angular/core';
import { navBarComponent } from './components/navigationBar/navBar.component';
import { searchBarComponent } from './components/searchBar/searchBar.component';
import { AboutComponent } from './components/about/about.component';

//import {ROUTER_DIRECTIVES} from '@angular/router';

@Component({
  moduleId: module.id,
  selector: 'my-app',
  templateUrl: 'app.component.html',
  entryComponents: [navBarComponent, searchBarComponent, AboutComponent], 
})
export class AppComponent  { name = 'Angular'; }