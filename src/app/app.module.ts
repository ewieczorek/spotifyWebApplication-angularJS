import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { navBarComponent } from './components/navigationBar/navBar.component';
import { appRoutes } from './app.routes';
import { AppComponent }  from './app.component';
import { searchBarComponent } from './components/searchBar/searchBar.component';
import { routerNgProbeToken } from '@angular/router/src/router_module';
import { AboutComponent } from './components/about/about.component';
import { HttpModule } from '@angular/http';
import { artistComponent } from './components/artist/artist.component';
import  {albumComponent } from './components/album/album.component';
import { SpotifyApiService } from './services/spotify.service';

@NgModule({
  imports:      [ BrowserModule, 
                  appRoutes, 
                  FormsModule,
                  HttpModule ],
  declarations: [ AppComponent, 
                  navBarComponent,
                  searchBarComponent,
                  AboutComponent,
                  artistComponent,
                  albumComponent ],
  bootstrap:    [ AppComponent ],
  providers:  [ SpotifyApiService ]
})
export class AppModule { }
