import {Component, OnInit} from '@angular/core';
import {EventsService} from '../../../services/events.service';

@Component({
    selector: 'ev-events',
    templateUrl: './list-events.component.html',
    styleUrls: [ './list-events.component.scss' ]
})
export class ListEventsComponent implements OnInit {

    get events() {
        return this.eventsService.events;
    }

    constructor(private eventsService: EventsService) {
    }

    ngOnInit() {
    }
}
