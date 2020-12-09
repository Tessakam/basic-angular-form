import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Friend } from "./friend";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})

export class AddFriendService {
  url = 'http://localhost:9000/';

  constructor(public http: HttpClient) { }

  //In the method, call the addFriend method of the addFriendService and pass the friend data to it.
  //"observable" = returns method and to get the data out,use subscribe

  addFriend(friend: Friend): Observable<Friend>{
    //this.http.post(url, data)
    return this.http.post<Friend>(this.url, friend);
  }
}
