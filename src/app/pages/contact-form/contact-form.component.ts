import { Component, ElementRef, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { IContact } from 'src/app/models/icontact';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ContactFormComponent implements OnInit {
  form!: FormGroup;
  edit: boolean = false;
  id: any = "0";

  constructor(private fb: FormBuilder,
    private dataService: DataService,
    private _snackBar: MatSnackBar,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      phone_number: ['', [Validators.required]],
      photo: '',
      favorite: false
    })

    if(this.route.snapshot.paramMap.get('id') != "0"){
      this.id = this.route.snapshot.paramMap.get('id');
      this.edit = true
      this.dataService.get('http://127.0.0.1:3333/contacts/'+this.id)
        .subscribe(
          (data: IContact) => {
            this.form.setValue({
              name: data.name,
              email: data.email,
              phone_number: data.phone_number,
              photo: data.photo,
              favorite: data.favorite,
            })
          },(err: any) => {
            console.log(err);
            this._snackBar.open("Server error, ", "Ok", {
              duration: 2000,
            });
          }
        )
    }
  }

  save(): void {
    if(!this.form.valid) {
      this._snackBar.open("Validator Error", "Ok", {
        duration: 2000,
      });
      return;
    }

    const data = this.form.value;
    if(this.edit){
      this.dataService.put("http://127.0.0.1:3333/contacts/"+this.id, data)
        .subscribe(
          (data) => {
            this.router.navigate(['contacts'])
          },
          (err) => {
            console.log(err);
            this._snackBar.open("Server error, ", "Ok", {
              duration: 2000,
            });
          }
        )
    }else {
      this.dataService.post("http://127.0.0.1:3333/contacts", data)
        .subscribe(
          (data) => {
            this.router.navigate(['contacts'])
          },
          (err) => {
            console.log(err);
            this._snackBar.open("Server error, ", "Ok", {
              duration: 2000,
            });
          }
        )
    }
  }
}
