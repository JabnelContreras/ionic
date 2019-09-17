import {AngularFireDatabase} from "@angular/fire/database";
import {Injectable} from "@angular/core"


@Injectable()

export class DataServices{

   

 constructor(public AFDB:AngularFireDatabase)
 {

 }

 GuardarDatos(a)
 {
    return this.AFDB.database.ref('Usuario').push(a);

 }

 ListarDatos()
 {
     return this.AFDB.list('Usuario')
 }

 ListarDatos2()
 {
     return this.AFDB.database.ref('Usuario/')
 }

 GuardarPerfil(obj)
 {
   // return this.AFDB.database.ref('PerfilUsuario').push(a);
   this.AFDB.database.ref('PerfilUsuario/'+obj.id).set(obj);
 }

 ListarPerfil()
 {
     return this.AFDB.list('PerfilUsuario/');
 }

 AgregarPost(a)
 {
    return this.AFDB.database.ref('posted/noticias').push(a);
 }
 LeerPosted()
 {
    return this.AFDB.list('posted/');
 }

 RecorrerChild(b)
 {
    return this.AFDB.list('posted/'+b.id+'/like/');
   

 }

 ActualizarLikePost(b)
 {
  //  return this.AFDB.database.ref('posted/'+ b.id).update({like:b.iduser});
   // this.AFDB.database.ref('posted/'+ b.id).set(b);
   // this.AFDB.database.ref('posted/'+ b.id).child('like/'+ b.iduser).set('Me gusta');
  // this.AFDB.database.ref('posted/'+ b.id +'like/'+ b.iduser).push(b.iduser);
  return this.AFDB.database.ref('posted/'+ b.id).update({like:b.like});
 }

 ActualizarNolikePost(c)
 {
   return this.AFDB.database.ref('posted/'+ c.id).update({nolike:c.nolike});
 }

 Remover(a)
 {
    return this.AFDB.database.ref("posted/"+ a.id).remove();
 }

 public editar(obj:any){
   this.AFDB.database.ref('posted/'+obj.id).set(obj);
 }


}
