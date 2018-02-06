import {ModuleWithProviders} from '@angular/core';
import {provideRoutes, RouterModule, Routes} from '@angular/router';
import {searchBarComponent} from './components/searchBar/searchBar.component';
import {AboutComponent} from './components/about/about.component';
import {artistComponent} from './components/artist/artist.component';
import {albumComponent} from './components/album/album.component';

const APP_ROUTES: Routes = [
    {path: '', component:searchBarComponent},
    {path: 'about', component:AboutComponent},
    {path: 'artist/:id', component:artistComponent},
    {path: 'album/:id', component:albumComponent}
];

export const appRoutes: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);  

//export const appRoutes = RouterModule.forRoot(APP_ROUTES);  

//other ways of doing this that I have found
/**
provideRoutes([
    {path: '', component:searchBarComponent},
    {path: 'about', component:AboutComponent}
])
*/