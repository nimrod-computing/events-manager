import {Component, Input, OnInit} from '@angular/core';
import {Event} from '../../../models/event';
import {NgbDateStruct, NgbInputDatepicker} from '@ng-bootstrap/ng-bootstrap';

@Component({
    selector: 'ev-event-form',
    templateUrl: './event-form.component.html',
    styles: []
})
export class EventFormComponent implements OnInit {

    @Input() event: Event;

    constructor() {
    }

    ngOnInit() {
    }

    onStartDateSelect(date: NgbDateStruct, endPicker: NgbInputDatepicker) {
        endPicker.minDate = date;
        if (!this.event.endDate) {
            endPicker.navigateTo(date);
        }
    }

}
