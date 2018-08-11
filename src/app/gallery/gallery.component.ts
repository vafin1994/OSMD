import {Component, OnInit} from '@angular/core';
import {Img} from './img';

@Component({
    selector: 'app-gallery',
    templateUrl: './gallery.component.html',
    styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {
    imgList: Img[] = [
        {title: 'Асташкина 25', link: '../../assets/f2.png'},
        {title: 'img1', link: '../../assets/f2.png'},
        {title: 'img1', link: '../../assets/f2.png'},
        {title: 'img1', link: '../../assets/f2.png'},
        {title: 'img1', link: '../../assets/f2.png'},
        {title: 'img1', link: '../../assets/f2.png'},
    ];

    constructor() {
    }

    ngOnInit() {
    }

}
