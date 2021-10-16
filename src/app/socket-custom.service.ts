import { Injectable } from '@angular/core';
import { Socket } from 'ngx-socket-io';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SocketCustomService {

  constructor(private socket: Socket) {}

  sendMessage(msg: string) {
    this.socket.emit('message', msg);
  }
  getMessage(): Observable<any> {
    return this.socket.fromEvent('todos')
    .pipe(tap((data:any) => console.log('observa todos :>> ', data)));
  }

  sendMessageChat(msg: string) {
    this.socket.emit('messageChat', msg);
  }

  getMessageChat(): Observable<any> {
    return this.socket.fromEvent('todosChat')
    .pipe(tap((data:any) => console.log('observa todos :>> ', data)));
  }
}
