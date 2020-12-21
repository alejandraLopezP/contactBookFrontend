import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactsComponent } from './pages/contacts/contacts.component';
import { ContactDetailsComponent } from './pages/contact-details/contact-details.component';
import { ContactFavoritesComponent } from './pages/contact-favorites/contact-favorites.component';
import { LastContactsComponent } from './pages/last-contacts/last-contacts.component';
import { DocumentationComponent } from './pages/documentation/documentation.component';
import { CreditComponent } from './pages/credit/credit.component';
import { ContactFormComponent } from './pages/contact-form/contact-form.component';

const routes: Routes = [
  {
    path: 'contacts', component: ContactsComponent
  },
  {
    path: 'contacts/:id', component: ContactDetailsComponent
  },
  {
    path: 'contacts/:id/form', component: ContactFormComponent
  },
  {
    path: 'contact-favorites', component: ContactFavoritesComponent
  },
  {
    path: 'last-contacts', component: LastContactsComponent
  },
  {
    path: 'documentation', component: DocumentationComponent
  },
  {
    path: 'credit', component: CreditComponent
  },
  {
    path: '', redirectTo: '/contacts', pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
