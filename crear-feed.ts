import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DataServices } from '../../Servicios/ServiciosFire';

/**
 * Generated class for the CrearFeedPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-crear-feed',
  templateUrl: 'crear-feed.html',
})
export class CrearFeedPage {
  myForm: FormGroup;
  obj:any;
  OtroValor:any;
  Guardar:any;
  Like:number;
  Nolike:number;
  constructor(public navCtrl: NavController, public navParams: NavParams,public Frm: FormBuilder,public ServicioDataBase:DataServices) {
    this.myForm = this.Frm.group({
      comentario: ['', [Validators.required]],
      url: ['', [Validators.required]],   
  
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CrearFeedPage');
  }

  saveData(){
    
    this.obj=JSON.stringify(this.myForm.value);
    this.OtroValor=JSON.parse(this.obj);
    this.Like=0;
    this.Nolike=0;
    this.Guardar={
      'comentario':this.OtroValor['comentario'],
      'url':this.OtroValor['url'],
      'like':this.Like,
      'nolike':this.Nolike,
      'id':Date.now(),      

    }
  //  this.ServicioDataBase.AgregarPost(this.Guardar);
  this.ServicioDataBase.editar(this.Guardar);
    this.myForm.reset({first:'comentario',last:'url'});
    //alert(JSON.stringify(this.myForm.value));
    // alert(this.OtroValor['Nombre']);
    
  }
  


}
