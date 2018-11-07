import { RestApiService } from './../providers/rest-api-service/rest-api.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { NavController } from '@ionic/angular';
import { LoadingProvider } from '../providers/loading/loading';
import { ParamsService } from '../providers/params/params.service';
import { ChatService } from '../providers/chat-service/chat.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit, OnDestroy {
  chatList: Array<any> = [];
  chatListData: Array<any> = [];
  connection: any;
  user: any = {};
  constructor(private navCtrl: NavController,
    private api: RestApiService,
    private params: ParamsService,
    private chatService: ChatService,
    private loading: LoadingProvider) {

  }

  ngOnInit() {
    const user = JSON.parse(localStorage.getItem('user')) ?
      JSON.parse(localStorage.getItem('user')) : {};
    this.user = user;
    this.getChatList();
    // this.chatList = [{
    //   _id: '1',
    //   name: 'ร้านค้า 1',
    //   img: 'https://www.winhelponline.com/blog/wp-content/uploads/2017/12/user.png',
    //   dateTime: '13:00',
    //   lastChat: 'ดูสินค้ารุ่นไหนครับ'
    // }, {
    //   _id: '2',
    //   name: 'ร้านค้า 2',
    //   img: 'https://www.pngarts.com/files/3/Avatar-PNG-High-Quality-Image.png',
    //   dateTime: '12:10',
    //   lastChat: 'สวัสดีครับ'
    // }];
  }

  ngOnDestroy() {
    this.connection.unsubscribe();
  }

  openPageChatDetail(item) {
    console.log(item);
    this.params.data = {
      receiverid: item._id,
      title: item.name,
      receiveridimg: item.img
    };
    this.navCtrl.navigateForward('chat-detail');
  }

  getChatList() {
    // this.loading.onLoading();
    this.connection = this.chatService.getMessages().subscribe(data => {
      const chatList: any = data;
      console.log(chatList);
      const newChatList: Array<any> = [];
      chatList.forEach((chatEl, i) => {
        if (chatEl._id !== this.user._id && chatEl.name !== this.user.username) {
          newChatList.push(chatEl);
        }
      });

      chatList.forEach((chatEl, i) => {
        if (chatEl.ref) {
          const countEl = newChatList.filter(el => {
            return chatEl.ref._id === el._id;
          });
          if (countEl.length <= 0) {
            newChatList.push({
              dateTime: chatEl.dateTime,
              img: chatEl.ref.img,
              lastChat: chatEl.lastChat,
              name: chatEl.ref.username,
              _id: chatEl.ref._id
            });
          }
        }
      });

      console.log(newChatList);
      this.chatList = newChatList;
      // this.loading.dismiss();
    });
  }

  findShop() {
    this.navCtrl.navigateForward('shop');
  }

  logout() {
    localStorage.removeItem('user');
    this.navCtrl.navigateForward('login');
  }

}
