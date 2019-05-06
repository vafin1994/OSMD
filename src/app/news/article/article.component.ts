import {Component, OnInit} from '@angular/core';
import {Article} from '../article';

@Component({
    selector: 'app-article',
    templateUrl: './article.component.html',
    styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {
    newsList: Article = {
        title: 'Ліцензія на виробництво теплової енергії',
        summary: '',
        content: '',
        img: '/assets/ліцензія на виробництво тепла 1198.jpeg',
    };
    title = this.newsList.title;
    summary = this.newsList.summary;
    content = this.newsList.content;
    img = this.img;
    constructor() {
    }

    ngOnInit() {
    }

}
