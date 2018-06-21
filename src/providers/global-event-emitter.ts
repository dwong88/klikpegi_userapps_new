import { EventEmitter, Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the GlobalEventEmitterProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class GlobalEventEmitterProvider {
  public fetchUserData: EventEmitter<boolean> = new EventEmitter<boolean>();
  public initializePage: EventEmitter<boolean> = new EventEmitter<boolean>();
  public isLoggedIn: EventEmitter<boolean> = new EventEmitter<boolean>();


  constructor(public http: Http) {
    console.log('Hello GlobalEventEmitterProvider Provider');
  }

}
