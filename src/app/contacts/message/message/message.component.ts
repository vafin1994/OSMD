import {Component, inject, OnInit} from '@angular/core';
import {NgForm} from '@angular/forms';
import {HttpClient} from '@angular/common/http';


@Component({
    selector: 'app-message',
    templateUrl: './message.component.html',
    styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit {
    constructor(private http: HttpClient) {
    }

    ngOnInit() {
    }

    OnSubmit(mailForm: NgForm) {
        console.log(JSON.stringify(mailForm.value));
        this.http.post('https://xoz.od.ua/send_mailto.php', JSON.stringify(mailForm.value));
    }
}
