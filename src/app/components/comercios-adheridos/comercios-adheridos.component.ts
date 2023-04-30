import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-comercios-adheridos',
  templateUrl: './comercios-adheridos.component.html',
  styleUrls: ['./comercios-adheridos.component.css']
})
export class ComerciosAdheridosComponent implements OnInit {

  locales = [
    {
      nombre: 'Local 1',
      descripcion: 'Descripción del local 1',
      imagen: 'https://via.placeholder.com/300x200.png?text=Local+1'
    },
    {
      nombre: 'Local 2',
      descripcion: 'Descripción del local 2',
      imagen: 'https://via.placeholder.com/300x200.png?text=Local+2'
    },
    {
      nombre: 'Local 3',
      descripcion: 'Descripción del local 3',
      imagen: 'https://via.placeholder.com/300x200.png?text=Local+3'
    },
    {
      nombre: 'Local 4',
      descripcion: 'Descripción del local 4',
      imagen: 'https://via.placeholder.com/300x200.png?text=Local+4'
    },
    {
      nombre: 'Local 5',
      descripcion: 'Descripción del local 5',
      imagen: 'https://via.placeholder.com/300x200.png?text=Local+5'
    },
    {
      nombre: 'Local 6',
      descripcion: 'Descripción del local 6',
      imagen: 'https://via.placeholder.com/300x200.png?text=Local+6'
    },
    {
      nombre: 'Local 7',
      descripcion: 'Descripción del local 7',
      imagen: 'https://via.placeholder.com/300x200.png?text=Local+7'
    },
    {
      nombre: 'Local 8',
      descripcion: 'Descripción del local 8',
      imagen: 'https://via.placeholder.com/300x200.png?text=Local+8'
    },
    {
      nombre: 'Local 9',
      descripcion: 'Descripción del local 9',
      imagen: 'https://via.placeholder.com/300x200.png?text=Local+9'
    }
  ];

  realizarPedido(local) {
  }
  
  constructor() { }

  ngOnInit() {
  }

}