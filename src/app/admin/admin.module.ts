import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {FormsModule} from '@angular/forms';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import {ListEventsComponent} from './events/list-events/list-events.component';
import {AddEventComponent} from './events/add-event/add-event.component';
import { EditEventComponent } from './events/edit-event/edit-event.component';
import { EventFormComponent } from './events/event-form/event-form.component';

@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        FormsModule,
        NgbModule
    ],
    declarations: [
        ListEventsComponent,
        AddEventComponent,
        EditEventComponent,
        EventFormComponent
    ]
})
export class AdminModule {
}
