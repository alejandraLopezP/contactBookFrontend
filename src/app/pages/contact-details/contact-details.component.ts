import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { IContact } from 'src/app/models/icontact';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-contact-details',
  templateUrl: './contact-details.component.html',
  styleUrls: ['./contact-details.component.scss']
})
export class ContactDetailsComponent implements OnInit {
  contact!:  IContact
  urlServer: string = 'http://127.0.0.1:3333'
  urlImg: string = "";

  constructor(private dataService: DataService,
    private _snackBar: MatSnackBar,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
      const id = this.route.snapshot.paramMap.get('id');
      this.dataService.get('http://127.0.0.1:3333/contacts/'+id)
        .subscribe(
          (data: IContact) => {
            this.contact = data
            this.urlImg = this.contact.photo === '' || this.contact.photo == null 
              ? 'assets/img/user.png'
              : this.urlServer + this.contact.photo
          },(err: any) => {
            console.log(err);
            this._snackBar.open("Server error, ", "Ok", {
              duration: 2000,
            });
          }
        )
    }
}