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
    {link: 'aboutCompany', name: 'О компании' , ukrname: 'Про компанію'},
    {link: 'osmdCreation', name: 'Создание ОСМД' , ukrname: 'Створення ОСМД'},
    {link: 'ourServices', name: 'Услуги' , ukrname: 'Послуги'},
    {link: 'news', name: 'Статьи и объяления' , ukrname: 'Статті та оголошення'},
    {link: 'vacancies', name: 'Вакансии' , ukrname: 'Вакансії'},
    {link: 'contacts', name: 'Контакты' , ukrname: 'Контакти'},
    {link: 'gallery', name: 'Галерея' , ukrname: 'Галерея'},
    {link: 'login', name: 'Личный кабинет' , ukrname: 'Особистий кабінет'},
  ];
  active = false;
  currentLang = 'ru';
    constructor(private translate: TranslateService) {
        translate.setDefaultLang('ru');
    }

  ngOnInit() {
  }
  isActive() {
    this.active = true;
  }
    useLanguage(language: string) {
        this.translate.use(language);
        this.currentLang = language;
    }

}
