import {Component, OnInit} from '@angular/core';
import {Article} from './article';

@Component({
    selector: 'app-news',
    templateUrl: './news.component.html',
    styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {
    newsList: Article =
        {
            title: 'Ліцензія на виробництво теплової енергії',
            summary: '',
            content: '',
            img: '/assets/ліцензія на виробництво тепла 1198.jpeg'
        }
    ;

    constructor() {
    }

    ngOnInit() {
    }

}
