import {Component, Input, OnInit} from '@angular/core';
import {Event} from '../../../models/event';
import {EventsService} from '../../../services/events.service';
import {ActivatedRoute, Router} from '@angular/router';
import {NgbDateAdapter, NgbDateNativeAdapter} from '@ng-bootstrap/ng-bootstrap';


@Component({
    selector: 'ev-edit-event',
    templateUrl: './edit-event.component.html',
    styles: [],
    providers: [{
        provide: NgbDateAdapter,
        useClass: NgbDateNativeAdapter
    }]
})
export class EditEventComponent implements OnInit {

    @Input() id: any;
    event: Event;

    constructor(
        private eventsService: EventsService,
        private router: Router,
        private activatedRoute: ActivatedRoute
    ) {
    }

    ngOnInit() {
        this.activatedRoute.params
            .subscribe(params => {
                this.id = params.id;

                // console.log(this.activatedRoute.params.subscribe(value => console.log(value)));

                if (this.eventsService.events) {
                    this.event = this.eventsService.events.find(item => item.id === this.id);
                }
                if (!this.event) {
                    this.router.navigate(['admin', 'events']);
                }
            });
    }

    // getMinDate() {
    //     const date = this.event.startDate;
    //     return date
    //         ? {
    //             year: date.getFullYear(),
    //             month: date.getMonth() + 1,
    //             day: date.getDay()
    //         }
    //         : null;
    // }

    updateEvent() {
        this.eventsService.update(this.event);
        this.router.navigate(['/admin/events']);
    }
}
