import { Injectable } from '@angular/core';
import { Envio } from '../dto/envio';

@Injectable()
export class EnviosService {

  envios: Envio[] = [
    {
      guia: 1234567890
        ,consignatario: {
         id: 1
         , nombre: 'kato'
         , compania: ''
         , direccion: 'Manuel Gonzalez'
         , telefono: '12-23-445'
       }
    }
    ,{
      guia: 1234567891
      , consignatario: {
        id: 1
        , nombre: 'kato puebla'
        , compania: ''
        , direccion: 'Manuel Torres'
        , telefono: '12-23-445'
      }
    }
    ,{
      guia: 1234567892
      , consignatario: {
        id: 1
        , nombre: 'kato Mexico'
        , compania: ''
        , direccion: 'Tlatelolco'
        , telefono: '12-23-445'
      }
    }
  ];

  constructor() { }

  getListGuia() {
    return this.envios;
  }

}