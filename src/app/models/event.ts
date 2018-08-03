import {Model} from './model';

export class Event extends Model {

    private _startDate: Date;
    private _endDate: Date;

    id: string;
    name: string;
    description: string;
    abstract: string;
    location: string;

    get startDate(): Date {
        return this._startDate;
    }

    set startDate(value) {
        this._startDate = new Date(value);
    }

    get endDate(): Date {
        return this._endDate;
    }

    set endDate(value) {
        this._endDate = new Date(value);
    }

}

