import { Component } from '@angular/core';
import { NavController, NavParams, ModalController } from 'ionic-angular';
import { HomePage } from '../home/home';
import {datosHorario} from '../../data/dataHorario';
import {horarioC} from '../../interfaces/Horario.interface';
import {HorariomodalPage} from '../modales/horariomodal/horariomodal';



/**
 * Generated class for the HorarioPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-horario',
  templateUrl: 'horario.html',
})
export class HorarioPage {
  
  Horario:horarioC[] =[];
  virtual:boolean;
  cronograma: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, private modalCtrl: ModalController) {
    this.Horario = datosHorario.slice(0);
    this.virtual=true;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HorarioPage');
  }
    //devolverpagina inicio

  homePush(){
    this.navCtrl.setRoot(HomePage)
  }

 /* showModal(obj){
    if (obj !=null) {
      this.cronograma;
      let modalH = this.modalCtrl.create(HorariomodalPage);
      modalH.present();
      for (let index = 0; index < detalles.length; index++) {
        
        
      }      
    } else {
      console.log('Sus Materias aún no han sido cargadas');
    }
   
  }

  detalles = [
    {
      asignatura:'Calculo',
      dia:'lunes',
      horaInicio:'',
      horaFin:'',
      sede:'',
      aula:'',
      grupo:'',
      docente:'',
      FechaInicio: '',
      FechaFinal:'',
      Nivel:'',
      Créditos:'',
      Horas:'',
      CodPrograma:'',
      CodPensum:''
    },
    {
      asignatura:'Calculo',
      dia:'martes',
      horaInicio:'',
      horaFin:'',
      sede:'',
      aula:'',
      grupo:'',
      docente:'',
      FechaInicio: '',
      FechaFinal:'',
      Nivel:'',
      Créditos:'',
      Horas:'',
      CodPrograma:'',
      CodPensum:''
    },
    {
      asignatura:'español',
      dia:'',
      horaInicio:'lunes',
      horaFin:'',
      sede:'',
      aula:'',
      grupo:'',
      docente:'',
      FechaInicio: '',
      FechaFinal:'',
      Nivel:'',
      Créditos:'',
      Horas:'',
      CodPrograma:'',
      CodPensum:''
    },
    {
      asignatura:'ciencia',
      dia:'miercoles',
      horaInicio:'',
      horaFin:'',
      sede:'',
      aula:'',
      grupo:'',
      docente:'',
      FechaInicio: '',
      FechaFinal:'',
      Nivel:'',
      Créditos:'',
      Horas:'',
      CodPrograma:'',
      CodPensum:''
    },
    {
      asignatura:'ingles',
      dia:'viernes',
      horaInicio:'',
      horaFin:'',
      sede:'',
      aula:'',
      grupo:'',
      docente:'',
      FechaInicio: '',
      FechaFinal:'',
      Nivel:'',
      Créditos:'',
      Horas:'',
      CodPrograma:'',
      CodPensum:''
    },
    {
      asignatura:'software',
      dia:'jueves',
      horaInicio:'',
      horaFin:'',
      sede:'',
      aula:'',
      grupo:'',
      docente:'',
      FechaInicio: '',
      FechaFinal:'',
      Nivel:'',
      Créditos:'',
      Horas:'',
      CodPrograma:'',
      CodPensum:''
    },
    {
      asignatura:'hola',
      dia:'miercoles',
      horaInicio:'',
      horaFin:'',
      sede:'',
      aula:'',
      grupo:'',
      docente:'',
      FechaInicio: '',
      FechaFinal:'',
      Nivel:'',
      Créditos:'',
      Horas:'',
      CodPrograma:'',
      CodPensum:''
    },
    {
      asignatura:'prueba',
      dia:'lunes',
      horaInicio:'',
      horaFin:'',
      sede:'',
      aula:'',
      grupo:'',
      docente:'',
      FechaInicio: '',
      FechaFinal:'',
      Nivel:'',
      Créditos:'',
      Horas:'',
      CodPrograma:'',
      CodPensum:''
    },
    {
      asignatura:'eyy',
      dia:'domingo',
      horaInicio:'',
      horaFin:'',
      sede:'',
      aula:'',
      grupo:'',
      docente:'',
      FechaInicio: '',
      FechaFinal:'',
      Nivel:'',
      Créditos:'',
      Horas:'',
      CodPrograma:'',
      CodPensum:''
    }    
  ]*/
}
