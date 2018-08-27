import {Component, inject, OnInit} from '@angular/core';
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

    OnSubmit(mailForm) {
        console.log(mailForm.value);
        this.http.post('/assets/mailto.php', 'Hello')
            .subscribe(
                res => {
                    console.log(res);
                },
                err => {
                    console.log('Error occured');
                }
            );
    }
}
