import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {
    MatButtonModule, MatCardModule, MatDividerModule, MatExpansionModule, MatGridListModule,
    MatIconModule, MatInputModule,
    MatMenuModule,
    MatSelectModule, MatSidenavModule,
    MatTabsModule,
    MatToolbarModule
} from '@angular/material';
import {MenuComponent} from './menu/menu.component';
import {FormsModule} from '@angular/forms';
import {AppRoutingModule} from './/app-routing.module';
import {AboutCompanyComponent} from './about-company/header/about-company.component';
import {NewsComponent} from './news/news.component';
import {VacanciesComponent} from './vacancies/vacancies.component';
import {DocumentsComponent} from './documents/documents.component';
import {OurServicesComponent} from './our-services/our-services.component';
import {ContactsComponent} from './contacts/contacts.component';
import {GalleryComponent} from './gallery/gallery.component';
import {LoginComponent} from './login/login.component';
import {FlexLayoutModule} from '@angular/flex-layout';
import {OsmdCreationComponent} from './osmd-creation/osmd-creation.component';
import {FooterComponent} from './footer/footer.component';
import {ContentComponent} from './about-company/content/content.component';
import { ArticleComponent } from './news/article/article.component';
import {VacancyComponent} from './vacancies/vacancy/vacancy.component';
import { MessageComponent } from './contacts/message/message/message.component';


@NgModule({
    declarations: [
        AppComponent,
        MenuComponent,
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
        ContentComponent,
        ArticleComponent,
        VacancyComponent,
        MessageComponent,
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
        MatDividerModule,
        FlexLayoutModule,
        MatExpansionModule,
        MatSidenavModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
