import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Event} from '../models/event';
import * as moment from 'moment';

@Injectable({
    providedIn: 'root'
})
export class EventsService {

    url = 'api/admin/events';

    events$: Observable<Event[]>;
    events: Event[] = null;

    constructor(private http: HttpClient) {
        this.getAll();
    }

    private static toServer(event: Event) {
        return {
            ...event,
            startDate: moment(event.startDate).format('YYYY-MM-DD'),
            endDate: moment(event.endDate).format('YYYY-MM-DD'),
        };
    }

    private getAll() {
        this.events$ = this.getAll$();
        this.events$.subscribe(res => {
            console.log(res);
            this.events = res.map(item => new Event(item));
        });
    }

    public getAll$(): Observable<Event[]> {
        return this.http.get<Event[]>(this.url);
    }

    add(event: Event) {
        const data = EventsService.toServer(event);
        this.http.post(this.url, data)
            .subscribe(() => {
                this.getAll();
            });
    }

    update(event: Event) {
        const data = EventsService.toServer(event);
        console.log('put', data);
        this.http.put(`${this.url}/${event.id}`, data)
            .subscribe(() => {
                this.getAll();
            });
    }

}
