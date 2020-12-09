import {Component, OnInit} from '@angular/core';
import {Friend} from './friend';
import {AddFriendService} from './add-friend.service'
import {HttpClient} from '@angular/common/http';
import {HttpHeaders} from "@angular/common/http";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  title = "Hello friends";
  listLanguages = ["HTML", "CSS", "JS", "PHP"];
  friendModel = new Friend("", "", "", "", "")
  private AddFriendService: any;
  public allFriends: any = [];


  constructor(AddFriendService: any, http: HttpClient) {
    this.AddFriendService = AddFriendService;
  }

  addFriend(): void {
    this.AddFriendService.addFriend(this.friendModel).subscribe((data: Friend) => this.getAllFriends('http://localhost:9000/allFriends'));
    console.log(this.friendModel);
  }

  // display updated friend list
  async getAllFriends(url: string): Promise<any> {

    const response = await fetch(url, {
      //The method should be get and the headers should be 'Content-Type': 'application/json'.
      method: "GET",
      headers: {
        'Content-Type': 'application/json'
      }
    })

    const data = await response.json()
    this.allFriends = data;
    return data;
  }

  ngOnInit():any{
    this.getAllFriends('http://localhost:9000/allFriends')
  }
}
