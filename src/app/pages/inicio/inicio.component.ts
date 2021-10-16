import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { SocketCustomService } from 'src/app/socket-custom.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.scss']
})
export class InicioComponent implements OnInit {
  data: FormControl = new FormControl('');
  datos: string = '';
  constructor(private socketService: SocketCustomService) { }

  ngOnInit(): void {
    this.data.valueChanges.subscribe(data => {
      this.emitir(data);
      this.datos = data;
    });
    this.socketService.getMessage().subscribe(
      data => this.datos = data.data,
      err => console.log(err),
      () => console.log('siempre')
    );
  }

  cambiar(data?:any){
    console.log(data);
  }

  emitir(data:string){
    this.socketService.sendMessage(data);
  }

}
