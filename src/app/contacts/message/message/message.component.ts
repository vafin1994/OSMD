import {Component, inject, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
    selector: 'app-message',
    templateUrl: './message.component.html',
    styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit {
    sent = false;
    error = false;
    constructor(private http: HttpClient) {
    }
    ngOnInit() {
    }

    OnSubmit(mailForm) {
        console.log(mailForm.value);
        this.http.post('/assets/mailto.php', JSON.stringify(mailForm.value) )
            .subscribe(
                res => {
                    this.sent = true;
                    console.log(res);
                    mailForm.reset();
                },
                err => {
                    this.error = true;
                    console.log('Error occured');
                }
            );
    }
}
