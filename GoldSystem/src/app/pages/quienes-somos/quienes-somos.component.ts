import { Component, OnInit } from '@angular/core';

interface Fundadores {
  img: string;
  name: string;
  cargo: string;
}

@Component({
  selector: 'app-quienes-somos',
  templateUrl: './quienes-somos.component.html',
  styleUrls: ['./quienes-somos.component.css'],
})
export class QuienesSomosComponent implements OnInit {
  fundadores: Fundadores[] = [
    {
      name: 'Efrain Castillo',
      img: 'assets/img/efrain.jpeg',
      cargo: 'Fundador, CEO and CFO/Jefe Ejecutivo y Jefe de Finanzas.',
    },
    {
      name: 'Yeferson Sánchez',
      img: 'assets/img/yeferson.jpeg',
      cargo:
        'Fundador, CIO and CCO/Jefe de Información y Jefe de Comunicaciones.',
    },
    {
      name: 'William Peña',
      img: 'assets/img/william.jpeg',
      cargo: 'Fundador, COO and CMO/Jefe de Operaciones y Jefe de Marketing.',
    },

    {
      name: 'Marcos Velásquez',
      img: 'assets/img/marcos.jpeg',
      cargo: 'Cofundador de Gold System, Técnico-Desarrollador.',
    },
  ];
  constructor() {}

  ngOnInit(): void {}
}
