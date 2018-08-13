import {Component, OnInit} from '@angular/core';
import {Menu} from './menu';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  menuList: Menu[] = [
    {link: 'aboutCompany', name: 'О компании'},
    {link: 'osmdCreation', name: 'Создание ОСМД'},
    {link: 'ourServices', name: 'Услуги'},
    {link: 'news', name: 'Статьи и объяления'},
    {link: 'vacancies', name: 'Вакансии'},
    {link: 'contacts', name: 'Контакты'},
    {link: 'gallery', name: 'Галерея'},
    {link: 'login', name: 'Личный кабинет'},
  ];



  active = false;
  constructor() { }

  ngOnInit() {
  }
  isActive() {
    this.active = true;
  }
}
