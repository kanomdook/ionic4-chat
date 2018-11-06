import { Component, OnInit } from '@angular/core';
import { ParamsService } from '../../providers/params/params.service';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.page.html',
  styleUrls: ['./shop.page.scss'],
})
export class ShopPage implements OnInit {
  shops = [{
    _id: '1',
    name: 'ร้านค้าเสื้อผ้ามือสอง',
    cover: 'https://static1.squarespace.com/static/56bbf7f707eaa031a1502462/t/56bc0dcb2b8ddef92479a6cd/1455164894249/',
    img: 'https://stickershop.line-scdn.net/stickershop/v1/product/444/LINEStorePC/main@2x.png;compress=true',
    username: 'dook',
    password: '1234'
  },
  {
    _id: '2',
    name: 'Apple Store',
    cover: 'http://1d2wuq2vibm61wvgg740yve3-wpengine.netdna-ssl.com/wp-content/uploads/2016/06/Concourse-A_Apple-00-1024x603.jpg',
    img: 'https://i.imgur.com/QiAMG0g.jpg',
    username: 'apple',
    password: '1234'
  },
  {
    _id: '3',
    name: 'ร้านเฟอร์นิเจอร์',
    cover: 'http://struckarquitectos.com/wp-content/uploads/2017/02/PROYECTO-APERTURA-TIENDA-MODA.jpg',
    img: 'https://upscaleresalefurnishings.com/wp-content/uploads/2015/10/chair.png',
    username: 'furniture',
    password: '1234'
  }];

  ownner: any = {};
  constructor(private params: ParamsService, private navCtrl: NavController) { }

  ngOnInit() {
    const user = JSON.parse(localStorage.getItem('user')) ?
      JSON.parse(localStorage.getItem('user')) : {};
    this.ownner = user;
  }

  openChat(item) {
    this.params.data = {
      receiverid: item._id,
      title: item.name,
      receiveridimg: item.img
    };
    this.navCtrl.navigateForward('chat-detail');
  }

}
