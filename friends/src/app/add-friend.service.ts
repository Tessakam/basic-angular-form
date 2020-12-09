import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Friend } from "./friend";



@Injectable({
  providedIn: 'root'
})
export class AddFriendService {

  constructor() { }

  addFriend(friend: Friend){
    return this.http.post(url, "temp")
  }
}
