import {Component, OnInit} from '@angular/core';
import {Menu} from './menu';
import {TranslateService} from '@ngx-translate/core';

@Component({
    selector: 'app-menu',
    templateUrl: './menu.component.html',
    styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

    menuList: Menu[] = [
        {hashlink: '#/aboutCompany', link: '/aboutCompany', name: 'О компании', ukrname: 'Про компанію'},
        {hashlink: '#/osmdCreation', link: '/osmdCreation', name: 'Создание ОСМД', ukrname: 'Створення ОСМД'},
        {hashlink: '#/ourServices', link: '/ourServices', name: 'Услуги', ukrname: 'Послуги'},
        {hashlink: '#/news', link: '/news', name: 'Статьи и объяления', ukrname: 'Статті та оголошення'},
        // {hashlink: '#/vacancies', link: '/vacancies', name: 'Вакансии', ukrname: 'Вакансії'},
        {hashlink: '#/contacts', link: '/contacts', name: 'Контакты', ukrname: 'Контакти'},
        // {hashlink: '#/gallery', link: '/gallery', name: 'Галерея', ukrname: 'Галерея'},
        {hashlink: '#/login', link: '/login', name: 'Личный кабинет', ukrname: 'Особистий кабінет'},
    ];
    address = '';
    currentLang = 'ru';
    constructor(private translate: TranslateService) {
        translate.setDefaultLang('ru');
    }

    ngOnInit() {
        this.getURL();
    }

    useLanguage(language: string) {
        this.translate.use(language);
        this.currentLang = language;
    }

    getURL() {
        this.address = window.location.hash;
    }
}
