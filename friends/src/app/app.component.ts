import {Component} from '@angular/core';
import {Friend} from './friend';
import {AddFriendService} from './add-friend.service'


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
  title = "Hello friends";
  listLanguages = ["HTML", "CSS", "JS", "PHP"];
  friendModel = new Friend("", "", "", "", "")
  public AddFriendService: any;
  allFriends: any= [];

  constructor(AddFriendService: AddFriendService) {
    this.AddFriendService = AddFriendService;
  }

  addFriend() : void {
    this.AddFriendService.addFriend(this.friendModel).subscribe((data: Friend ) => console.log(data))
    console.log(this.friendModel);
    }
  }




