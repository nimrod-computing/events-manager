import {Component, OnInit} from '@angular/core';
import {Event} from '../../../models/event';
import {EventsService} from '../../../services/events.service';
import {Router} from '@angular/router';

@Component({
    selector: 'ev-add-event',
    templateUrl: './add-event.component.html',
    styles: []
})
export class AddEventComponent implements OnInit {

    event = new Event();

    constructor(
        private eventsService: EventsService,
        private router: Router
    ) {
    }

    ngOnInit() {
    }

    addEvent() {
        this.eventsService.add(this.event);
        this.router.navigate(['/admin/events']);
    }
}
