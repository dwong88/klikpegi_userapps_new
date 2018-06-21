import {AutoCompleteService} from 'ionic2-auto-complete';
import { Http } from '@angular/http';
import {Injectable} from "@angular/core";
import 'rxjs/add/operator/map';
import {
    ParseService
} from '../../providers/parse-service';
import {Observable} from "rxjs/Observable";
import 'rxjs/add/observable/fromPromise';

@Injectable()
export class CompleteGuestBookingDetails implements AutoCompleteService {
    labelAttribute = "name";
    // formValueAttribute = "";

    constructor(private http:Http, private parseService: ParseService) {

    }

    getResults(keyword:string) {
        console.log(keyword);
        if(this.parseService.getCurrentUser() == null) {
            return [];
        } else {
            return Observable.fromPromise(this.parseService.getUserContact(keyword)).map(results => results);
        }
    }
}