import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { DataServices } from '../../Servicios/ServiciosFire';
//import { analyzeAndValidateNgModules } from '@angular/compiler';

/**
 * Generated class for the PerfilPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  
  selector: 'page-perfil',
  templateUrl: 'perfil.html',
  
})
export class PerfilPage {
  obj:any;
  OtroValor:any;
  Guardar:any;

  myForm: FormGroup;
  constructor(public navCtrl: NavController, public navParams: NavParams, public Frm: FormBuilder,public ServicioDataBase:DataServices) {
    this.myForm = this.Frm.group({
      Nombre: ['', [Validators.required]],
      Apellidos: ['', [Validators.required]],
      email: ['', [Validators.required]],
      Edad: ['', [Validators.required]],
      NombreUsuario: ['', [Validators.required]],
      password: ['', [Validators.required]],
      TipoUsuario: [''],
  
    });
  }

  

  saveData(){
    
    this.obj=JSON.stringify(this.myForm.value);
    this.OtroValor=JSON.parse(this.obj);

    this.Guardar={
      'nombre':this.OtroValor['Nombre'],
      'apellido':this.OtroValor['Apellidos'],
      'email':this.OtroValor['email'],
      'edad':this.OtroValor['Edad'],
      'nombreusu':this.OtroValor['NombreUsuario'],
      'password':this.OtroValor['password'],
      'Tipo':this.OtroValor['TipoUsuario'],
      'id': Date.now(),
    }
    this.ServicioDataBase.GuardarPerfil(this.Guardar);

    this.myForm.reset({first:'Nombre',last:'TipoUsuario'});
    //alert(JSON.stringify(this.myForm.value));
    // alert(this.OtroValor['Nombre']);
    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PerfilPage');
  }

}
