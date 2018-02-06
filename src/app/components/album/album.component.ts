import { Component, OnInit } from '@angular/core';
import {SpotifyApiService} from '../../services/spotify.service';
import {album} from '../../../album';
import {ActivatedRoute} from '@angular/router';

@Component({
    moduleId: module.id,
    selector: 'album',
    templateUrl: 'album.component.html',
})


export class albumComponent  { 
    albumId:string;
    album:album[];

    constructor(
        private _spotifyApiService:SpotifyApiService,
        private _route:ActivatedRoute){
    }

    ngOnInit(){
        console.log(this._route.params)
        this._route.params.map(params => params['id']).subscribe((id) => {
            //This next line is necessary to refresh the authorization token with spotify.
            this._spotifyApiService.spotifyApiToken().subscribe(res => {
                //This line searches spotify for the selected artist and returns a json with the data of that artist.
                this._spotifyApiService.searchAlbumSpecific(id, res.access_token).subscribe(album => {
                    console.log(album)
                    this.album = album;
                })
            })
        })
    }
}
