import { Component,ViewChild } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';
import { DataServices } from '../../Servicios/ServiciosFire';
//import { PerfilPage } from '../perfil/perfil';
import { FeedPage } from '../feed/feed';
import { PostPage } from '../post/post';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})


export class HomePage {

@ViewChild('Username') NombreUsuario;
@ViewChild('Password') Password;


 public GetData:any;
 public RecibirData:any;
  public obj:any;
  Vexiste:number=0;
  Nombre:string;
  UserID:string;
  constructor(public navCtrl: NavController,public AlertCtrl:AlertController,public ServicioDataBase:DataServices ) {
       this.PublicarPerfil();
  }

  Publicar()
  {
    this.ServicioDataBase.ListarDatos().valueChanges().subscribe((post=>{
      this.GetData=post;
     // console.log(this.GetData);
      //});
   }));

  }

  async PublicarPerfil()
  {
    await this.ServicioDataBase.ListarPerfil().valueChanges().subscribe((Data=>{
      this.RecibirData=Data;
      

    }));
  }

  Entrar()
  {
    var xusername=this.NombreUsuario.value;
    var Xpass=this.Password.value;
    var TipoUsuario;
    let xuser=this.RecibirData.find(user=> user.nombreusu==xusername)

    if(xuser==undefined||xuser==''){
      const alert = this.AlertCtrl.create({
        title: 'Valor Incorrecto!',
        subTitle: 'Favor Verificaque User y Passwd! ',
        buttons: ['OK']
      });
      alert.present();
      return 
    }

    if(xusername==xuser.nombreusu && Xpass==xuser.password){

       this.UserID=xuser.id
       const alerta1 = this.AlertCtrl.create({
        title: 'Login Sucessful!',
        subTitle: 'Bienvenid@! '+ this.UserID,
        buttons: ['OK']
        
       
      });
      alerta1.present();
      TipoUsuario=xuser.Tipo;

      if(TipoUsuario=='Usuario Final')
      {
        this.navCtrl.setRoot(PostPage,{Item:this.UserID});
      }
      else{
        this.navCtrl.setRoot(FeedPage);
      }
      //return   
    }
    else{
      const alerta2 = this.AlertCtrl.create({
        title: 'Usuario no registrado',
        subTitle: 'error de usuario! '+ this.NombreUsuario.value,
        buttons: ['OK']
      });
      alerta2.present();
    }
  }

  DataGuardar()
  {
    
    this.ServicioDataBase.ListarDatos()
     this.ServicioDataBase.ListarDatos().valueChanges().subscribe((post=>{
       this.GetData=post;
       
     }));



     this.GetData.forEach(element=>{
         this.Nombre=element.Nombre;

         if(this.NombreUsuario.value==this.Nombre)
            {
              this.Vexiste=1;
            
            }       
     });
     
     
     if(this.Vexiste==0)
     {
        this.obj={
            'Nombre':this.NombreUsuario.value,
            'Pass':this.Password.value,
            'id':Date.now()
        }
        
        this.ServicioDataBase.GuardarDatos(this.obj)
        this. MensajeGuardado();
       // this. Publicar();
        this.Limpiar();
     }
     else{
           this.ShowAlert();
     }
  }

   ShowAlert()
  {
    const alert=  this.AlertCtrl.create({
     // title: 'Low battery'
     // subTitle: '10% of battery remaining',
     title: 'Usuario No puede Ser Creado, ya Existe',
     subTitle: 'Contro de usuario',
     buttons: ['Dismiss']
    });
     alert.present(); 
  }

  MensajeGuardado()
  {
    const Alerta=this.AlertCtrl.create({
    title: 'Usuario ha sido creado satisfactoriamente',
    subTitle: 'Mensaje Usuario',
    buttons: ['Ok']
   });
   Alerta.present(); 
  }

  Limpiar()
  {
    this.NombreUsuario.value="";
    this.Password.value="";
  }

  PublicarPAgina()
  {
    //this.navCtrl.push(PerfilPage);
    this.navCtrl.push(FeedPage);
  }
}
