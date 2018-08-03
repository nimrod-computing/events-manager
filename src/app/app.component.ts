import {Component} from '@angular/core';

@Component({
    selector: 'ev-root',
    templateUrl: './app.component.html',
    styles: [`
        main {
            margin-top: 56px;
            padding-top: 15px;
        }
    `]
})
export class AppComponent {
    title = 'events-manager';
}
