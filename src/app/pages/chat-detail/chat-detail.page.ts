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
  sender: any = {
    _id: '1',
    username: 'dook',
    img: 'https://stickershop.line-scdn.net/stickershop/v1/product/444/LINEStorePC/main@2x.png;compress=true'
  }; // get from localStorage
  conversationList: Array<any> = [];
  isChatting = false;
  constructor(
    // private route: ActivatedRoute,
    private chatService: ChatService,
    private api: RestApiService,
    private params: ParamsService,
    private loading: LoadingProvider) { }

  ngOnInit() {
    // this.receiverid = this.route.snapshot.paramMap.get('id');
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

  // async getChatDetail() {
  //   if (!this.isChatting) {
  //     this.loading.onLoading();
  //   }
  //   try {
  //     const res: any = await this.api.get('api/chats/' + this.data.receiverid + '/' + this.sender._id);
  //     if (res.status === 200) {
  //       this.conversationList = res.data;
  //       if (!this.isChatting) {
  //         this.loading.dismiss();
  //       }
  //     }
  //   } catch (error) {
  //     if (!this.isChatting) {
  //       this.loading.dismiss();
  //     }
  //     throw error;
  //   }
  // }

  // async sendMessage(e) {
  //   this.isChatting = true;
  //   const reqBody = {
  //     name: this.data.title,
  //     sender: this.sender,
  //     receiver: {
  //       _id: this.data.receiverid,
  //       username: this.data.title,
  //       img: this.data.receiveridimg
  //     },
  //     message: e
  //   };

  //   try {
  //     const res: any = await this.api.post('api/chats', reqBody);
  //     if (res.status === 200) {
  //       this.getChatDetail();
  //       setTimeout(() => {
  //         this.chatBot(e);
  //       }, 2000);
  //     }
  //   } catch (error) {
  //     throw error;
  //   }
  // }

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

  // async chatBot(word) {
  //   const states: Array<any> = [{
  //     matchWord: 'เปิดร้านอยู่รึป่าวครับ',
  //     message: 'สวัสดีค่ะ เปิดอยู่ค่ะ มีอะไรให้ฉันช่วยค่ะ'
  //   }, {
  //     matchWord: 'มีครับ',
  //     message: 'บอกมาได้เลยค่ะ'
  //   }];

  //   const rexg = RegExp(word, 'g');

  //   const matchWords = states.filter(item => {
  //     return item.matchWord.match(rexg);
  //   });

  //   if (matchWords.length > 0) {
  //     this.isChatting = true;
  //     const reqBody = {
  //       name: this.data.title,
  //       sender: {
  //         _id: this.data.receiverid,
  //         username: this.data.title,
  //         img: this.data.receiveridimg
  //       },
  //       receiver: this.sender,
  //       message: matchWords[0].message
  //     };

  //     try {
  //       const res: any = await this.api.post('api/chats', reqBody);
  //       if (res.status === 200) {
  //         this.getChatDetail();
  //       }
  //     } catch (error) {
  //       throw error;
  //     }
  //   }


  // }

}
