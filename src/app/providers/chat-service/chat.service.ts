import { Injectable } from '@angular/core';
import * as io from 'socket.io-client';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class ChatService {
  private url = 'http://localhost:3000';
  private socket;
  constructor() {
    this.socket = io(this.url);
    this.socket.emit('init', { receiver: { _id: '1' } });
  }

  sendMessage(data) {
    this.socket.emit('message', data);
  }

  getMessages() {
    const observable = new Observable(observer => {
      this.socket.on('message', (data) => {
        observer.next(data);
      });
    });
    return observable;
  }

  getChatDetailList(reqData) {
    const observable = new Observable(observer => {
      this.socket.emit('joined', reqData);
      this.socket.emit('chat-list', reqData);
      this.socket.on('chat-list', (data) => {
        observer.next(data);
      });
    });
    return observable;
  }
}
