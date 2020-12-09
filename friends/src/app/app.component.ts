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
  private AddFriendService: any;

  constructor(AddFriendService: AddFriendService) {
  }

  //In the method, call the addFriend method of the addFriendService and pass the friend data to it.
  //"observable" = returns method and to get the data out,use subscribe
  addFriend() {
    this.AddFriendService.addFriend(this.friendModel).subscribe(data => console.log(data))
      //console.log(this.friendModel);
    }
  }




