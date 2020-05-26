import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
import { ErrorObservable } from 'rxjs/Observable/ErrorObservable';

@Injectable()
export class AvengersService {

  public baseUrl = 'http://localhost:3000/api/v1/avengers/';

  constructor(private _http: HttpClient) { }

  public signupForm(signupData): any {

    let params = new HttpParams()
      .set('firstName', signupData.firstName)
      .set('lastName', signupData.lastName)
      .set('mobile', signupData.mobile)
      .set('username', signupData.username)
      .set('email', signupData.email)
      .set('password', signupData.password)

    return this._http.post(this.baseUrl + 'signup', params)
      .catch(this.handleError);
  }
  public loginForm(loginData): Observable<any> {

    let params = new HttpParams()
      .set('username', loginData.username)
      .set('password', loginData.password)

    return this._http.post(this.baseUrl + 'login', params)
      .catch(this.handleError);
  }

  public avengersData(): Observable<any> {
    return this._http.get(this.baseUrl + 'avengersData')
      .catch(this.handleError);
  }
  public avengersSaveData(params): Observable<any> {
    return this._http.post(this.baseUrl + 'avengersData', params)
      .catch(this.handleError);
  }

  private handleError(err: HttpErrorResponse) {
    let apiResponse = {
      'error': true,
      'data': null,
      'status': '500'
    }
    if (err.error instanceof ErrorEvent) {
      apiResponse['message'] = "Client side error";
    } else {
      apiResponse['message'] = "Server side error";
    }
    return Observable.create((observer) => {
      observer.next(apiResponse);
    });
  }
}
