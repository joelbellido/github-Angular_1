import { Tipo } from './../../_model/tipo';
import { TipoService } from './../../_service/tipo.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatSort, MatPaginator } from '@angular/material';

@Component({
  selector: 'app-tipo',
  templateUrl: './tipo.component.html',
  styleUrls: ['./tipo.component.css']
})
export class TipoComponent implements OnInit {

  displayedColumns =['idTipo','nombre','acciones'];
  dataSource: MatTableDataSource<Tipo>;
  @ViewChild(MatSort)sort:MatSort; 
  @ViewChild(MatPaginator) paginator : MatPaginator;

   //tipos: Tipo[]=[];
  constructor(private tipoService : TipoService) { }

  ngOnInit() {
  this.listar();
  }

listar(){
  this.tipoService.listar().subscribe(data =>{
    this.dataSource = new MatTableDataSource(data);
    this.dataSource.sort = this.sort;
    this.dataSource.paginator= this.paginator;
  });
}

filter(filterValue: string) {
  filterValue = filterValue.trim();
  filterValue = filterValue.toLowerCase();
  this.dataSource.filter = filterValue;
}

}
