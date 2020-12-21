import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { TopbarComponent } from './layout/topbar/topbar.component';
import { SidebarComponent } from './layout/sidebar/sidebar.component';
import { MainContentComponent } from './layout/main-content/main-content.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ContactsComponent } from './pages/contacts/contacts.component';
import { ContactFavoritesComponent } from './pages/contact-favorites/contact-favorites.component';
import { DataService } from './services/data.service';
import { LastContactsComponent } from './pages/last-contacts/last-contacts.component';
import { ContactFormComponent } from './pages/contact-form/contact-form.component';
import { ContactDetailsComponent } from './pages/contact-details/contact-details.component';
import { DocumentationComponent } from './pages/documentation/documentation.component';
import { CreditComponent } from './pages/credit/credit.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    TopbarComponent,
    SidebarComponent,
    MainContentComponent,
    ContactsComponent,
    ContactFavoritesComponent,
    LastContactsComponent,
    ContactFormComponent,
    ContactDetailsComponent,
    DocumentationComponent,
    CreditComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FlexLayoutModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
