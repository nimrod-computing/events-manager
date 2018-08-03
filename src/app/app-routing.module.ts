import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {ListEventsComponent} from './admin/events/list-events/list-events.component';
import {AddEventComponent} from './admin/events/add-event/add-event.component';
import {EditEventComponent} from './admin/events/edit-event/edit-event.component';

const routes: Routes = [
    {path: 'admin/events', component: ListEventsComponent},
    {path: 'admin/events/add', component: AddEventComponent},
    {path: 'admin/events/:id/edit', component: EditEventComponent}
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule {
}
