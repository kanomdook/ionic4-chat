import { Component, OnInit } from '@angular/core';
import { RestApiService } from '../../providers/rest-api-service/rest-api.service';
import { LoadingProvider } from '../../providers/loading/loading';
import { ParamsService } from '../../providers/params/params.service';
import { ChatService } from '../../providers/chat-service/chat.service';

@Component({
  selector: 'app-chat-detail',
  templateUrl: './chat-detail.page.html',
  styleUrls: ['./chat-detail.page.scss'],
})
export class ChatDetailPage implements OnInit {
  data: any = {
    receiverid: '',
    title: 'title',
    receiveridimg: ''
  };
  sender: any = {};
  conversationList: Array<any> = [];
  isChatting = false;
  constructor(
    private chatService: ChatService,
    private api: RestApiService,
    private params: ParamsService,
    private loading: LoadingProvider) { }

  ngOnInit() {
    const user = JSON.parse(localStorage.getItem('user')) ?
      JSON.parse(localStorage.getItem('user')) : {};
    this.sender = user;
    this.data = this.params.data ? this.params.data : this.data;
    this.getChatDetail();
  }

  getChatDetail() {
    const reqData: any = {
      sender: {
        _id: this.sender._id
      },
      receiver: {
        _id: this.data.receiverid
      }
    };
    this.chatService.getChatDetailList(reqData).subscribe(data => {
      const dataArr: any = data;
      this.conversationList = dataArr;
    });
  }

  async sendMessage(e) {
    const data = {
      name: this.data.title,
      sender: this.sender,
      receiver: {
        _id: this.data.receiverid,
        username: this.data.title,
        img: this.data.receiveridimg
      },
      message: e
    };
    this.chatService.sendMessage(data);
  }

}
