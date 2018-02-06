import { Component, OnInit } from '@angular/core';
import {SpotifyApiService} from '../../services/spotify.service';
import {artist} from '../../../artist';
import {album} from '../../../album';
import {ActivatedRoute} from '@angular/router';

@Component({
    moduleId: module.id,
    selector: 'artist',
    templateUrl: 'artist.component.html',
})
export class artistComponent implements OnInit{ 
    artistID:string
    artist: artist[];
    artistAlbums: album[];

    constructor(
        private _spotifyApiService:SpotifyApiService,
        private _route:ActivatedRoute){
    }

    ngOnInit(){
        this._route.params.map(params => params['id']).subscribe((id) => {
            //This next line is necessary to refresh the authorization token with spotify.
            this._spotifyApiService.spotifyApiToken().subscribe(res => {
                //This line searches spotify for the selected artist and returns a json with the data of that artist.
                this._spotifyApiService.searchArtist(id, res.access_token).subscribe(artist => {
                    console.log(artist)
                    this.artist = artist;
                })

                this._spotifyApiService.searchAlbums(id, res.access_token).subscribe(albums => {
                    console.log(albums.items);
                    this.artistAlbums = albums.items;
                })
            })
        })
    }
}
