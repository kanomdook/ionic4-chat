import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RestApiService } from '../../providers/rest-api-service/rest-api.service';
import { LoadingProvider } from '../../providers/loading/loading';

@Component({
  selector: 'app-chat-detail',
  templateUrl: './chat-detail.page.html',
  styleUrls: ['./chat-detail.page.scss'],
})
export class ChatDetailPage implements OnInit {
  title = 'title';
  receiverid = '';
  sender = '1';
  conversationList: Array<any> = [];
  constructor(private route: ActivatedRoute,
    private api: RestApiService,
    private loading: LoadingProvider) { }

  ngOnInit() {
    this.title = this.route.snapshot.paramMap.get('name');
    this.receiverid = this.route.snapshot.paramMap.get('id');
    this.getChatDetail();
  }

  async getChatDetail() {
    this.loading.onLoading();
    try {
      const res: any = await this.api.get('api/chats/' + this.receiverid + '/' + this.sender);
      if (res.status === 200) {
        this.conversationList = res.data;
        console.log(res.data);
        this.loading.dismiss();
      }
    } catch (error) {
      this.loading.dismiss();
      throw error;
    }
  }

}
