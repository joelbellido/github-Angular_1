import { InsumoService } from './../../_service/insumo.service';
import { MatSort, MatSnackBar, MatDialog } from '@angular/material';
import { MatPaginator } from '@angular/material';
import { MatTableDataSource } from '@angular/material';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Insumo } from '../_model/insumo';

@Component({
  selector: 'app-insumo',
  templateUrl: './insumo.component.html',
  styleUrls: ['./insumo.component.css']
})
export class InsumoComponent implements OnInit {

  displayedColumns =['idInsumo','nombre','marca','proveedor','acciones'];
  dataSource: MatTableDataSource<Insumo>;
  @ViewChild(MatPaginator) paginator : MatPaginator;
  @ViewChild(MatSort)sort:MatSort; 

  constructor(private  insumoService : InsumoService , private snackBar: MatSnackBar, private dialog: MatDialog) { }

  ngOnInit() {
    this.insumoService.insumoCambio.subscribe(data => {
      this.dataSource = new MatTableDataSource(data);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });

    this.insumoService.mensajeCambio.subscribe(data=> {
      this.snackBar.open(data,'Aviso',{duration:2000});
    });

    this.insumoService.listar().subscribe(data => {
      this.dataSource=new MatTableDataSource(data);
      this.dataSource.paginator=this.paginator;
      this.dataSource.sort=this.sort;
    });
  }
  /*
  openDialog(insumo?:Marca){
    let med = insumo != null ? insumo :new Marca();
    //this.dialog.open(MarcaDialogoComponent, {
      width:'250px',
      data:med
    });
  }
  */
  filter(filterValue: string) {
    filterValue = filterValue.trim();
    filterValue = filterValue.toLowerCase();
    this.dataSource.filter = filterValue;
  }

  eliminar(insumo:Insumo){
    this.insumoService.eliminar(insumo.idInsumo).subscribe(data => {
      this.insumoService.listar().subscribe(insumos => {
        this.insumoService.insumoCambio.next(insumos);
        this.insumoService.mensajeCambio.next("Se elimino");
      });

  });
}
}
