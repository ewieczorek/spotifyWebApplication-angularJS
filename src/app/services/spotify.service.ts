import { Injectable } from '@angular/core';
import {Http, Headers} from '@angular/http';
import 'rxjs/add/operator/map';
import * as $ from "jquery";

@Injectable()
export class SpotifyApiService{
    private searchURL: string;
    private artistInfoUrl: string;
    private albumInfoUrl: string;
    private albumUrl: string;
    private redirect_uri:string;
    //The following two lines are my spotify api IDs
    private client_id ='7a0406e618934c5688fb5600bd517fde';
    private client_secret = '168797fce23e4a67848715e75166b519';
    private authToken:string;
    private Artist:string;
    private Albums:string;
    private Album:string;
    //the base64 version of the encoded id (for reference) 'N2EwNDA2ZTYxODkzNGM1Njg4ZmI1NjAwYmQ1MTdmZGU6MTY4Nzk3ZmNlMjNlNGE2Nzg0ODcxNWU3NTE2NmI1MTk=='
    //The following line will encode the client id and the client secret into base 64 for spotify to decode
    private encodedID = btoa(this.client_id + ':' + this.client_secret);

    constructor(private _http:Http){
      console.log('going to make the token request');
      var token = this.spotifyApiToken().subscribe(res => {this.authToken = res.access_token});
      console.log(token);
    }

    spotifyApiToken (){
      //The parameter is what type of token we're asking for
      var parameters = 'grant_type=client_credentials';
      //The header has the authorization code and the app name
      var header = new Headers();
      header.append('Authorization', 'Basic ' + this.encodedID);
      header.append('Content-Type', 'application/x-www-form-urlencoded');
      //The ajax call the get authorized
      var post = this._http.post('https://accounts.spotify.com/api/token', parameters, {headers: header}).map(res => res.json());
      return post;
    }

    searchSpotify(type='artist', searchString:string){
      //This is the url for searching through spotify's api
        this.searchURL = 'https://api.spotify.com/v1/search?query='+searchString+'&offset=0&limit=20&type='+type+'&market=US';
        //these lines add the 
        var header = new Headers();
        header.append('Authorization', 'Bearer ' + this.authToken);
        return this._http.get(this.searchURL , {headers : header}).map(res => res.json());
    }

    searchArtist(artistId:string, authorizationToken:string){
      //This is the url for searching for an artist through spotify's api
        this.artistInfoUrl = 'https://api.spotify.com/v1/artists/'+artistId;
        //these lines add the 
        var header = new Headers();
        header.append('Authorization', 'Bearer ' + authorizationToken);
        return this._http.get(this.artistInfoUrl , {headers : header}).map(res => res.json());
    }

    searchAlbums(artistId:string, authorizationToken:string){
      //This is the url for searching for an artist's albums through spotify's api
        this.albumInfoUrl = 'https://api.spotify.com/v1/artists/'+artistId+'/albums';
        //these lines add the 
        var header = new Headers();
        header.append('Authorization', 'Bearer ' + authorizationToken);
        return this._http.get(this.albumInfoUrl , {headers : header}).map(res => res.json());
    }

    searchAlbumSpecific(albumId:string, authorizationToken:string){
      //This is the url for searching for an artist's albums through spotify's api
        this.albumUrl = 'https://api.spotify.com/v1/albums/'+albumId
        //these lines add the 
        var header = new Headers();
        header.append('Authorization', 'Bearer ' + authorizationToken);
        return this._http.get(this.albumUrl , {headers : header}).map(res => res.json());
    }
}