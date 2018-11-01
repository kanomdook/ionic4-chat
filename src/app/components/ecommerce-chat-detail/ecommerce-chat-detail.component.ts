import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-ecommerce-chat-detail',
  templateUrl: './ecommerce-chat-detail.component.html',
  styleUrls: ['./ecommerce-chat-detail.component.scss']
})
export class EcommerceChatDetailComponent implements OnInit {
  @Input() conversationList: Array<any> = [];
  @Input() receiver = '';
  constructor() { }

  ngOnInit() {
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
    //     img: 'https://2.bp.blogspot.com/-fo_mA9cqdYg/Wtx7J5wuh9I/AAAAAAAAErg/6A8__4irzCM6VYVQCorUiFK88-pgPbi6gCLcBGAs/s1600/%25E0%25B9%2581%25E0%25B8%2581%25E0%25B9%2589%25E0%25B8%25A7-%25E0%25B8%2593%25E0%25B8%25B1%25E0%25B8%2590%25E0%25B8%25A3%25E0%25B8%25B8%25E0%25B8%2588%25E0%25B8%25B2-1.jpg'
    //   },
    //   chat: 'สวัสดีค่ะ มีสินค้าค่ะ',
    //   dateTime: 'วันนี้, 13:00 น.'
    // }];

    // this.receiver = '2';
  }

}
