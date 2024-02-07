import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {

  nomeCachorroQuente!: string | null;
  link!: string;
  numero: number = 0

  constructor() { }

  ngOnInit(): void {
    this.nomeCachorroQuente = 'doguinho'
    this.link = 'https://github.com/davipiassi'
  }

  ngOnDestroy(): void {
    this.nomeCachorroQuente = null
  }

  mudarNumero() {
    this.numero ++
  }

}
