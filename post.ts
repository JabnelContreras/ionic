import { Component,Input } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DataServices } from '../../Servicios/ServiciosFire';
import { HomePage } from '../home/home';

/**
 * Generated class for the PostPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-post',
  templateUrl: 'post.html',
  
})
export class PostPage {
  @Input() itemlike:any;
  public DatosNoticias:any;
  Valor:number; 
  public  Item:String;
  Actualizar:any;
  public Likes:number=0;
  public DataLike:any;
  

  constructor(public navCtrl: NavController, public navParams: NavParams,public Serviciopost:DataServices) {
  
    this.CargarNoticias();
    //this.LeerChild(this.DatosNoticias);
    //this. LeerChild();
    //this.RecorrerLike();
    this.Item=this.navParams.get('Item');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PostPage');
  }

  CargarNoticias()
  {
    this.Serviciopost.LeerPosted().valueChanges().subscribe((post=>{
    this.DatosNoticias=post;   
    //this.LeerChild();
    console.log(this.DatosNoticias);
    
     

    }));
  }

 
  LeerChild(itemlike)
  {
    this.Serviciopost.RecorrerChild(itemlike).valueChanges().subscribe((post=>{
      this.DataLike=post;
      this.Likes=this.DataLike.length;
      console.log(this.DataLike.length);
    }))
  }

  Salir()
  {
    this.navCtrl.setRoot(HomePage);
  }

  DarLike(a)
  {
    //a.like=this.Item;
    a.like++;

    //this.Actualizar={
    
      //'id':a.id,
      //'iduser':this.Item,
      
    
            
   // }

    this.Serviciopost.ActualizarLikePost(a);
  }
  
  DarNoLike(b)
  {
    b.nolike++;
    //b.iduser=this.Item;
    //b.islike=true;
    this.Serviciopost.ActualizarNolikePost(b);

  }



}
