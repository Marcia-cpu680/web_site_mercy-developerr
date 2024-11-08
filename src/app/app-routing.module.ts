import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './componentes/inicio/inicio.component';
import { ContactoComponent } from './componentes/contacto/contacto.component';
import { UbicacionComponent } from './componentes/ubicacion/ubicacion.component';

 const routes: Routes = [
  
  {
    path:"inicio",
    component: InicioComponent
  },
  {
    path:"contacto",
    component:ContactoComponent
  },
  {
    path:"ubicacion",
    component:UbicacionComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }





