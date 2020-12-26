import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { IContact } from 'src/app/models/icontact';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss']
})
export class ContactsComponent implements OnInit {
  displayedColumns: string[] = ['id', 'photo', 'name', 'email', 'phone_number','favorite','action']
  dataSource: MatTableDataSource<IContact> = new MatTableDataSource<IContact>([]);
  urlServer: string = 'http://127.0.0.1:3333'

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.read()
  }

  read(): void {
    this.dataService.get('http://127.0.0.1:3333/contacts')
      .subscribe(
        (data: IContact[]) => {
          this.dataSource.data = data;
          this.dataSource.paginator = this.paginator
          this.dataSource.sort = this.sort
        }, 
        (err: any) => {
          console.log(err)
        }
      )
  }

  applyFilter(event: Event): void {
    const dataFilter = (event.target as HTMLInputElement).value
    this.dataSource.filter = dataFilter
  }

  delete(id: string): void {
    this.dataService.delete("http://127.0.0.1:3333/contacts/"+id)
      .subscribe(
        (data) => {
          this.read()
        }
      )
  }

}
