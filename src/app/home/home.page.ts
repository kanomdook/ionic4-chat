import { RestApiService } from './../providers/rest-api-service/rest-api.service';
import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { LoadingProvider } from '../providers/loading/loading';
import { ParamsService } from '../providers/params/params.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  chatList: Array<any> = [];
  sender = '1';
  constructor(private navCtrl: NavController,
    private api: RestApiService,
    private params: ParamsService,
    private loading: LoadingProvider) {

  }

  ngOnInit() {
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

  openPageChatDetail(item) {
    this.params.data = {
      receiverid: item._id,
      title: item.name,
      receiveridimg: item.img
    };
    this.navCtrl.navigateForward('chat-detail');
  }

  async getChatList() {
    this.loading.onLoading();
    try {
      const res: any = await this.api.get('api/chats');
      if (res.status === 200) {
        this.chatList = res.data;
        console.log(res.data);
        this.loading.dismiss();
      }
    } catch (error) {
      this.loading.dismiss();
      throw error;
    }
  }
}
