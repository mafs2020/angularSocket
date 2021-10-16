/* eslint-disable @angular-eslint/no-empty-lifecycle-method */
import { Component, OnInit } from '@angular/core';
import { SocketCustomService } from 'src/app/socket-custom.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit {
  texto: string = '';
  textos: string[] = [];
  constructor(private socketService: SocketCustomService) { }

  ngOnInit(): void {
    this.socketService.getMessageChat().subscribe(({data}) => {
      this.textos.push(data);
    })
  }

  enviar() {
    console.log('this.textos :>> ', this.texto);
    this.textos.push(this.texto);
    this.socketService.sendMessageChat(this.texto);
  }

}
