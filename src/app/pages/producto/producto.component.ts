import { ProductoListaInsumo } from './../../_model/productoListaInsumo';
import { Producto } from './../../_model/producto';
import { Observable } from 'rxjs';
import { ProveedorproductoService } from './../../_service/proveedorproducto.service';
import { TipoproductoService } from './../../_service/tipoproducto.service';
import { ProductoService } from './../../_service/producto.service';
import { Component, OnInit} from '@angular/core';
import { MatSnackBar} from '@angular/material';
import { Tipoproducto } from './../../_model/tipoproducto';
import { Proveedorproducto } from './../../_model/proveedorproducto';
import { Insumo } from './../../_model/insumo';
import { InsumoService } from './../../_service/insumo.service';


@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css']
})
export class ProductoComponent implements OnInit {

  
  tipoproductos:Tipoproducto[]=[];
  proveedorproductos:Proveedorproducto[]=[];
  insumos:Insumo[]=[];
  idTipoProductoSeleccionado: number;
  idProveedorProductoSeleccionado: number;
  idInsumoSeleccionado: number;
  mensaje: string;

  insumosSeleccionados: Insumo[] = [];

  constructor(private insumoService:InsumoService ,private productoService:ProductoService ,private  tipoproductoService:TipoproductoService , private proveedorproductoService:ProveedorproductoService,private snackBar: MatSnackBar) { }

  ngOnInit() {
    this.listarTipoProductos();
    this.listarProveedorProductos();
    this.listarInsumos();
  }

   listarTipoProductos(){
     this.tipoproductoService.listar().subscribe(data =>{
       this.tipoproductos=data;
     })

   }

   listarProveedorProductos(){
    this.proveedorproductoService.listar().subscribe(data =>{
      this.proveedorproductos=data;
    })

  }

  listarInsumos() {
    this.insumoService.listar().subscribe(data => {
      this.insumos = data;
    });
  }

  agregarInsumo() {
    if (this.idInsumoSeleccionado > 0) {

      let cont = 0;
      for (let i = 0; i < this.insumosSeleccionados.length; i++) {
        let insumo = this.insumosSeleccionados[i];
        if (insumo.idInsumo === this.idInsumoSeleccionado) {
          cont++;
          break;
        }
      }

      if (cont > 0) {
        this.mensaje = 'El mensaje se encuentra en la lista';
        console.log("everth");
        this.snackBar.open(this.mensaje, "Aviso", { duration: 2000 });
      } else {
        let ex = new Insumo();
        ex.idInsumo = this.idInsumoSeleccionado;
        this.insumoService.listarPorId(this.idInsumoSeleccionado).subscribe(data => {
          ex.nombre = data.nombre;
          this.insumosSeleccionados.push(ex);
        });
      }
    } else {
      this.mensaje = `Debe agregar un examen`;
      console.log("everth 1");
      this.snackBar.open(this.mensaje, "Aviso", { duration: 2000 });
    }

  }



  aceptar() {
    let tipoproducto = new Tipoproducto();
    tipoproducto.idTipoProducto = this.idTipoProductoSeleccionado;
  
    let proveedorproducto = new Proveedorproducto();
    proveedorproducto.idProveedorProducto = this.idProveedorProductoSeleccionado;

    let producto = new Producto();
    producto.tipoProducto = tipoproducto;
    producto.proveedorProducto = proveedorproducto;
    
    let productoListaInsumo = new ProductoListaInsumo();
    productoListaInsumo.producto = producto;
    productoListaInsumo.lstInsumo = this.insumosSeleccionados;

    this.productoService.registrar(productoListaInsumo).subscribe(() => {
      this.snackBar.open("Se registró", "Aviso", { duration: 2000 });

      setTimeout(() => {
        this.limpiarControles();
      }, 2000);

    });


  }
  removerInsumo(index: number) {
    this.insumosSeleccionados.splice(index, 1);
  }
   estadoBotonRegistrar() {
    return ( this.idTipoProductoSeleccionado === 0 || this.idProveedorProductoSeleccionado === 0 );
  }

  limpiarControles() {
    
    this.insumosSeleccionados = [];
    this.idTipoProductoSeleccionado = 0;
    this.idProveedorProductoSeleccionado = 0;
    this.idInsumoSeleccionado = 0;
   
    this.mensaje = '';
  }


}