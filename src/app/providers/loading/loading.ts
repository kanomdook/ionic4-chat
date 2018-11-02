import { Injectable } from '@angular/core';
import { LoadingController } from '@ionic/angular';

@Injectable()
export class LoadingProvider {
  loading: any;
  constructor(public loadingCtrl: LoadingController) {
  }

  // onLoading() {
  //   this.loading = this.loadingCtrl.create({
  //     spinner: 'hide',
  //     message: `<div class="lds-css ng-scope">
  //     <div style="width:100%;height:100%" class="lds-eclipse">
  //       <img src="./assets/imgs/loading.png" class="loading-img"/>
  //       <div></div>
  //     </div>`,
  //     duration: 2000
  //   });
  //   this.loading.present();
  //   return;
  // }

  async onLoading() {
    this.loading = await this.loadingCtrl.create({
      message: 'กำลังโหลด...'
    });
    return await this.loading.present();
  }

  dismiss() {
    setTimeout(() => {
      return this.loading.dismiss();
    }, 2000);
  }

}
