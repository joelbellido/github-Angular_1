
import { MaterialModule } from './material/material.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { PersonaNaturalComponent } from './pages/persona-natural/persona-natural.component';
import { TipoentidadComponent } from './pages/tipoentidad/tipoentidad.component';
import { ContactoComponent } from './pages/contacto/contacto.component';
import { TiposolicitudComponent } from './pages/tiposolicitud/tiposolicitud.component';
import { InsumoComponent } from './pages/insumo/insumo.component';
import { DialogoComponent } from './pages/tipoentidad/dialogo/dialogo.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { ProveedorinsumoComponent } from './pages/proveedorinsumo/proveedorinsumo.component';
import { ProveedorinsumoDialogoComponent } from './pages/proveedorinsumo/proveedorinsumo-dialogo/proveedorinsumo-dialogo.component';
import { MarcaComponent } from './pages/marca/marca.component';
import { MarcaDialogoComponent } from './pages/marca/marca-dialogo/marca-dialogo.component';
import { InsumoEdicionComponent } from './pages/insumo/insumo-edicion/insumo-edicion.component';
import { MatFormFieldModule } from '@angular/material';
import { TipoproductoComponent } from './pages/tipoproducto/tipoproducto.component';
import { TipoproductoDialogoComponent } from './pages/tipoproducto/tipoproducto-dialogo/tipoproducto-dialogo.component';
import { ProveedorproductoComponent } from './pages/proveedorproducto/proveedorproducto.component';
import { ProveedorproductoDialogoComponent } from './pages/proveedorproducto/proveedorproducto-dialogo/proveedorproducto-dialogo.component';
import { ProductoComponent } from './pages/producto/producto.component';


@NgModule({
  
  declarations: [
    AppComponent,
    PersonaNaturalComponent,
    TipoentidadComponent,
    ContactoComponent,
    TiposolicitudComponent,
    InsumoComponent,
    DialogoComponent,
    ProveedorinsumoComponent,
    ProveedorinsumoDialogoComponent,
    MarcaComponent,
    MarcaDialogoComponent,
    InsumoEdicionComponent,
    TipoproductoComponent,
    TipoproductoDialogoComponent,
    ProveedorproductoComponent,
    ProveedorproductoDialogoComponent,
    ProductoComponent
  
    
  ],
  entryComponents:[
    DialogoComponent,
    ProveedorinsumoDialogoComponent,
    TipoproductoDialogoComponent,
    ProveedorproductoDialogoComponent,
    MarcaDialogoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    HttpClientModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    FormsModule,
  


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
