import {Component, OnInit} from '@angular/core';
import {Vacancy} from './vacancy';

@Component({
    selector: 'app-vacancies',
    templateUrl: './vacancies.component.html',
    styleUrls: ['./vacancies.component.css']
})
export class VacanciesComponent implements OnInit {
    vacanciesList: Vacancy[] = [
        {title: `Сантехник`, description: `Мы ожидаем от кандидата:
Коммуникабельность
Знание английского языка не ниже native speacker
Java, C++, ООП
 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
  aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut  `
        },
        {title: `Сантехник`, description: `Мы ожидаем от кандидата:
Коммуникабельность
Знание английского языка не ниже native speacker
Java, C++, ООП
 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
  aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut  `
        },
        {title: `Сантехник`, description: `Мы ожидаем от кандидата:
Коммуникабельность
Знание английского языка не ниже native speacker
Java, C++, ООП
 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
  aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut  `
        },
        {title: `Сантехник`, description: `Мы ожидаем от кандидата:
Коммуникабельность
Знание английского языка не ниже native speacker
Java, C++, ООП
 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
  aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut  `
        },
        {title: `Сантехник`, description: `Мы ожидаем от кандидата:
Коммуникабельность
Знание английского языка не ниже native speacker
Java, C++, ООП
 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
  aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut  `
        }];

    constructor() {
    }

    ngOnInit() {
    }

}
