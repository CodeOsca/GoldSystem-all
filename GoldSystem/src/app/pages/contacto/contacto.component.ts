import { ModalComponent } from './../../shared/components/modal/modal.component';
import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

interface Contact {
  photo: string;
  telf: string;
  email: string;
}

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css'],
})
export class ContactoComponent implements OnInit {
  contacts: Contact[] = [
    {
      photo: 'assets/img/mexico.jpg',
      telf: 'https://wa.link/cp46wm',
      email: 'mexico.goldsystem@gmail.com',
    },

    {
      photo: 'assets/img/venezuela.jpg',
      telf: 'https://wa.me/message/WCLYPQPUPCUZK1',
      email: 'venezuela.goldsystem@gmail.com',
    },
    {
      photo: 'assets/img/peru.jpg',
      telf: 'https://wa.link/eccgys',
      email: 'peru.goldsystem@gmail.com',
    },
  ];
  constructor(private modalService: NgbModal) {}

  ngOnInit(): void {}

  open(correo: string) {
    const modalRef = this.modalService.open(ModalComponent);
    modalRef.componentInstance.correo = correo;
  }
}
