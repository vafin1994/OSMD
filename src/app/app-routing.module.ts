import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AboutCompanyComponent} from './about-company/about-company.component';
import {OurServicesComponent} from './our-services/our-services.component';
import {NewsComponent} from './news/news.component';
import {VacanciesComponent} from './vacancies/vacancies.component';
import {DocumentsComponent} from './documents/documents.component';
import {ContactsComponent} from './contacts/contacts.component';
import {GalleryComponent} from './gallery/gallery.component';
import {LoginComponent} from './login/login.component';
import {OsmdCreationComponent} from './osmd-creation/osmd-creation.component';
import {ArticleComponent} from './news/article/article.component';
import {VacancyComponent} from './vacancies/vacancy/vacancy.component';

const routes: Routes = [
    {path: 'aboutCompany', component: AboutCompanyComponent},
    {path: 'osmdCreation', component: OsmdCreationComponent},
    {path: 'ourServices', component: OurServicesComponent},
    {path: 'news', component: NewsComponent},
    {path: 'vacancies', component: VacanciesComponent},
    {path: 'documents', component: DocumentsComponent},
    {path: 'contacts', component: ContactsComponent},
    {path: 'aboutCompany', component: AboutCompanyComponent},
    {path: 'gallery', component: GalleryComponent},
    {path: 'login', component: LoginComponent},
    {path: 'article', component: ArticleComponent},
    {path: 'vacancy', component: VacancyComponent},
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [
        RouterModule,
    ]
})
export class AppRoutingModule {
}
