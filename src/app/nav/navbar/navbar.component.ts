import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'ev-navbar',
    templateUrl: './navbar.component.html',
    styles: []
})
export class NavbarComponent implements OnInit {
    isNavbarCollapsed = true;

    constructor() {
    }

    ngOnInit() {
    }

}
