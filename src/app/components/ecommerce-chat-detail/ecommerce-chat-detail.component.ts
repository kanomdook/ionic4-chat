import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-ecommerce-chat-detail',
  templateUrl: './ecommerce-chat-detail.component.html',
  styleUrls: ['./ecommerce-chat-detail.component.scss']
})
export class EcommerceChatDetailComponent implements OnInit {
  chat: string;
  @Input() conversationList: Array<any> = [];
  @Input() receiver = '';
  @Output() message = new EventEmitter();
  constructor() { }

  ngOnInit() {
    setTimeout(() => {
      const element = document.getElementById('box');
      element.scrollIntoView({ behavior: 'smooth', block: 'end', inline: 'nearest' });
    }, 400);
    // this.conversationList = [{
    //   _id: '11111', // ลูกค้า
    //   user: {
    //     _id: '1',
    //     img: 'https://www.winhelponline.com/blog/wp-content/uploads/2017/12/user.png'
    //   },
    //   chat: 'สวัสดีครับ มีของหรือเปล่าครับ',
    //   dateTime: 'วันนี้, 11:30 น.'
    // },
    // {
    //   _id: '22222', // เจ้าของร้าน
    //   user: {
    //     _id: '2',
    //     img: 'https://www.winhelponline.com/blog/wp-content/uploads/2017/12/user.png'
    //   },
    //   chat: 'สวัสดีค่ะ มีสินค้าค่ะ',
    //   dateTime: 'วันนี้, 13:00 น.'
    // }];

    // this.receiver = '2';
  }

  sendMessage(e) {
    if (this.chat) {
      this.message.emit(this.chat);
      this.chat = '';
    }
  }

}
