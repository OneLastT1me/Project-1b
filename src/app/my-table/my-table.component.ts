import { Component, OnInit, ViewChild } from '@angular/core';
import { TableReports } from 'src/environments/TableReport';
import { MytableservService } from '../mytableserv.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';



@Component({
  selector: 'app-my-table',
  templateUrl: './my-table.component.html',
  styleUrls: ['./my-table.component.scss']
})
export class MyTableComponent implements OnInit {
  ELEMENT_DATA!: TableReports[];
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource = new MatTableDataSource<TableReports>(this.ELEMENT_DATA);

  constructor(private service: MytableservService) { }
apiTimer: any
  ngOnInit(){
    this.getReport();
    this.apiTimer = setInterval(() => {
      this.getReport();
    }, 60000)
  }

  public getReport(){
    let resp= this.service.TableReports();
    resp.subscribe(report=>this.dataSource.data=report as TableReports[])
  }
}
