import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AboutCompanyComponent} from './about-company/header/about-company.component';
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
import {MainComponent} from './main/main.component';
import {ErrorComponent} from './errorPages/error/error.component';


const routes: Routes = [
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
    {path: 'error', component: ErrorComponent},
    {path: '', component: MainComponent},
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
