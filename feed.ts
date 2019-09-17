import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController } from 'ionic-angular';
import { DataServices } from '../../Servicios/ServiciosFire';
import { CrearFeedPage } from '../crear-feed/crear-feed';
import { PerfilPage } from '../perfil/perfil';
import { HomePage } from '../home/home';

/**
 * Generated class for the FeedPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()

@Component({
  selector: 'page-feed',
  templateUrl: 'feed.html',
})
export class FeedPage {
   Prueba:string;
   obj=[];
   TomarDatos:any;

   public DatosNoticias:any;
 
  constructor(public navCtrl: NavController, public navParams: NavParams,public menuCtrl: MenuController ,public Serviciopost:DataServices) {
   
       this.CargarNoticias();

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FeedPage');
  }

  openMenu() {
    this.menuCtrl.open();
  }
 
  closeMenu() {
    this.menuCtrl.close();
  }

  CrearUsuario()
  {
     this.navCtrl.push(PerfilPage);
  }

  Crear()
  {
    this.navCtrl.push(CrearFeedPage);
  }

  CargarNoticias()
  {
    this.Serviciopost.LeerPosted().valueChanges().subscribe((post=>{
    this.DatosNoticias=post;
    console.log(this.DatosNoticias);
     

    }));
  }
  Eliminar(id:any)
  {
      
      this.Serviciopost.Remover(id);
  }

  Salir()
  {
    this.navCtrl.setRoot(HomePage);
  }

}
