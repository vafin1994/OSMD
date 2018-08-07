import {Component, OnInit} from '@angular/core';
import {Article} from './article';

@Component({
    selector: 'app-news',
    templateUrl: './news.component.html',
    styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {
    newsList: Article[] = [
        {
            title: 'Место для выгула собак',
            summary: '',
            content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium, ' +
            'cumque cupiditate delectus dicta dolores enim mollitia non odio placeat qui quibusdam ' +
            'veritatis, vero! Alias aut culpa deserunt dolore dolorem inventore iste itaque iusto ' +
            'laboriosam laborum laudantium maiores mollitia nobis nulla odit, officia omnis optio sapiente ' +
            'sed suscipit velit voluptate voluptatibus. ',
            img: 'https://material.angular.io/assets/img/examples/shiba2.jpg',
        },
        {
            title: 'Место для выгула собак',
            summary: '',
            content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium, ' +
            'cumque cupiditate delectus dicta dolores enim mollitia non odio placeat qui quibusdam ' +
            'veritatis, vero! Alias aut culpa deserunt dolore dolorem inventore iste itaque iusto ' +
            'laboriosam laborum laudantium maiores mollitia nobis nulla odit, officia omnis optio sapiente ' +
            'sed suscipit velit voluptate voluptatibus. ',
            img: 'https://material.angular.io/assets/img/examples/shiba2.jpg',
        },
        {
            title: 'Место для выгула собак',
            summary: '',
            content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium, ' +
            'cumque cupiditate delectus dicta dolores enim mollitia non odio placeat qui quibusdam ' +
            'veritatis, vero! Alias aut culpa deserunt dolore dolorem inventore iste itaque iusto ' +
            'laboriosam laborum laudantium maiores mollitia nobis nulla odit, officia omnis optio sapiente ' +
            'sed suscipit velit voluptate voluptatibus. ',
            img: 'https://material.angular.io/assets/img/examples/shiba2.jpg',
        },
        {
            title: 'Место для выгула собак',
            summary: '',
            content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium, ' +
            'cumque cupiditate delectus dicta dolores enim mollitia non odio placeat qui quibusdam ' +
            'veritatis, vero! Alias aut culpa deserunt dolore dolorem inventore iste itaque iusto ' +
            'laboriosam laborum laudantium maiores mollitia nobis nulla odit, officia omnis optio sapiente ' +
            'sed suscipit velit voluptate voluptatibus. ',
            img: 'https://material.angular.io/assets/img/examples/shiba2.jpg',
        },
        {
            title: 'Место для выгула собак',
            summary: '',
            content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium, ' +
            'cumque cupiditate delectus dicta dolores enim mollitia non odio placeat qui quibusdam ' +
            'veritatis, vero! Alias aut culpa deserunt dolore dolorem inventore iste itaque iusto ' +
            'laboriosam laborum laudantium maiores mollitia nobis nulla odit, officia omnis optio sapiente ' +
            'sed suscipit velit voluptate voluptatibus. ',
            img: 'https://material.angular.io/assets/img/examples/shiba2.jpg',
        },
        {
            title: 'Место для выгула собак',
            summary: '',
            content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium, ' +
            'cumque cupiditate delectus dicta dolores enim mollitia non odio placeat qui quibusdam ' +
            'veritatis, vero! Alias aut culpa deserunt dolore dolorem inventore iste itaque iusto ' +
            'laboriosam laborum laudantium maiores mollitia nobis nulla odit, officia omnis optio sapiente ' +
            'sed suscipit velit voluptate voluptatibus. ',
            img: 'https://material.angular.io/assets/img/examples/shiba2.jpg',
        }
    ];

    constructor() {
    }

    ngOnInit() {
    }

}
