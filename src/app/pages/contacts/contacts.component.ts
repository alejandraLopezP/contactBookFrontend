import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { IContact } from 'src/app/models/icontact';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss']
})
export class ContactsComponent implements OnInit {
  displayedColumns: string[] = ['id', 'photo', 'name', 'email', 'phone_number']
  dataSource: MatTableDataSource<IContact> = new MatTableDataSource<IContact>([]);
  urlServer: string = 'http://127.0.0.1:3333'

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.read()
  }

  read(): void {
    this.dataService.get('http://127.0.0.1:3333/contacts')
      .subscribe(
        (data: IContact[]) => {
          this.dataSource = new MatTableDataSource<IContact>(data)
        }, 
        (err: any) => {
          console.log(err)
        }
      )
  }

}
