import { Component } from '@angular/core';
import {SpotifyApiService} from '../../services/spotify.service';
import {artist} from '../../../artist';

@Component({
    moduleId: module.id,
    selector: 'searchBar',
    templateUrl: 'searchBar.component.html',
    providers:[SpotifyApiService],
})
export class searchBarComponent  { 
    searchString:string;
    searchResult: artist[];
    constructor(private _SpotifyApiService:SpotifyApiService){

    }

    searchSpotify(){
        //console.log(
        this._SpotifyApiService.searchSpotify('artist', this.searchString).subscribe(res => {
            this.searchResult = res.artists.items;
            console.log(res.artists.items);
        });
    }
}
