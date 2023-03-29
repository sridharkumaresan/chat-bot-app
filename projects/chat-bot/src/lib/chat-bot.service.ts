import { Injectable } from '@angular/core';
import { io, Socket } from 'socket.io-client';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ChatBotService {
  private socket!: Socket;
  public message$: BehaviorSubject<string> = new BehaviorSubject('');
  constructor() {}
  public connect(url: string, customData?: any, path?: any): void {
    const options = path ? { path } : {};
    this.socket = io(url, options);
    this.socket.on('connect', () => {
      this.socket.emit('session_request', { session_id: this.socket.id });
    });
    this.socket.on('session_confirm', remote_id => {});
    this.socket.on('connect_error', error => {
      console.log(error);
    });
    this.socket.on('error', error => {
      console.log(error);
    });
    this.socket.on('disconnect', reason => {
      console.log(reason);
    });
  }

  public sendMessage(message: any): void {
    this.socket.emit('user_uttered', { message: message });
  }

  public getMessages = (): Observable<string> => {
    this.socket.on('bot_uttered', message => {
      this.message$.next(message);
    });
    return this.message$.asObservable();
  };
}
