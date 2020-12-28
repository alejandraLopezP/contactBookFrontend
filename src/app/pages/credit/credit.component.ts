import { Component, OnInit } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { MatSnackBar } from '@angular/material/snack-bar';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-credit',
  templateUrl: './credit.component.html',
  styleUrls: ['./credit.component.scss']
})
export class CreditComponent implements OnInit {
  
  urlServer: string = 'http://127.0.0.1:3333'

  constructor(private dataService: DataService,
    private _snackBar: MatSnackBar,
    private route: ActivatedRoute,
    private router: Router,
    private matIconRegistry: MatIconRegistry,
    private domSanitizer: DomSanitizer) {
      this.matIconRegistry.addSvgIcon(
        "github",
        this.domSanitizer.bypassSecurityTrustResourceUrl("assets/svg/github.svg"));
    }

  ngOnInit(): void {
  }     
}