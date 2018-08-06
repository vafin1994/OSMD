import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {
  MatButtonModule, MatCardModule, MatGridListModule,
  MatIconModule, MatInputModule,
  MatMenuModule,
  MatSelectModule,
  MatTabsModule,
  MatToolbarModule
} from '@angular/material';
import { HeaderComponent } from './header/header.component';
import { MenuComponent } from './menu/menu.component';
import { HouseSelectorComponent } from './house-selector/house-selector.component';
import {FormsModule} from '@angular/forms';
import { AppRoutingModule } from './/app-routing.module';
import { AboutCompanyComponent } from './about-company/about-company.component';
import { NewsComponent } from './news/news.component';
import { VacanciesComponent } from './vacancies/vacancies.component';
import { DocumentsComponent } from './documents/documents.component';
import { OurServicesComponent } from './our-services/our-services.component';
import { ContactsComponent } from './contacts/contacts.component';
import { GalleryComponent } from './gallery/gallery.component';
import { LoginComponent } from './login/login.component';
import {FlexLayoutModule} from '@angular/flex-layout';
import { OsmdCreationComponent } from './osmd-creation/osmd-creation.component';
import { FooterComponent } from './footer/footer.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MenuComponent,
    HouseSelectorComponent,
    AboutCompanyComponent,
    NewsComponent,
    VacanciesComponent,
    DocumentsComponent,
    OurServicesComponent,
    ContactsComponent,
    GalleryComponent,
    LoginComponent,
    OsmdCreationComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatMenuModule,
    MatButtonModule,
    MatSelectModule,
    MatIconModule,
    FormsModule,
    AppRoutingModule,
    MatTabsModule,
    MatInputModule,
    MatGridListModule,
    MatCardModule,
    FlexLayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
