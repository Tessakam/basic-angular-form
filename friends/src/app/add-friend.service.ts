import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Friend } from "./friend";

@Injectable({
  providedIn: 'root'
})

export class AddFriendService {
  url = 'http://localhost:9000/';

  constructor(public http: HttpClient) { }

  addFriend(friend: Friend){
    //this.http.post(url, data)
    return this.http.post(this.url, friend);
  }
}
