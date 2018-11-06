import { NavController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  credencial: any = {};
  users: Array<any> = [];
  constructor(private navCtrl: NavController) { }

  ngOnInit() {
    this.users = [{
      _id: '1',
      display: 'ร้านค้าเสื้อผ้ามือสอง',
      img: 'https://stickershop.line-scdn.net/stickershop/v1/product/444/LINEStorePC/main@2x.png;compress=true',
      username: 'dook',
      password: '1234'
    },
    {
      _id: '2',
      display: 'Apple Store',
      img: 'https://i.imgur.com/QiAMG0g.jpg',
      username: 'apple',
      password: '1234'
    },
    {
      _id: '3',
      display: 'ร้านเฟอร์นิเจอร์',
      img: 'https://upscaleresalefurnishings.com/wp-content/uploads/2015/10/chair.png',
      username: 'furniture',
      password: '1234'
    }];
  }

  login() {
    const userItem = this.users.filter(user => {
      return this.credencial.username === user.username && this.credencial.password === user.password;
    });
    if (userItem.length > 0) {
      localStorage.setItem('user', JSON.stringify(userItem[0]));
      this.navCtrl.navigateForward('home');
    } else {
      this.credencial.username = '';
      this.credencial.password = '';
    }
  }

}
