import { PullZone } from './../../pull-zone/models/pull-zone.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { MessageService } from '../messages/message.service';

@Injectable({
  providedIn: 'root',
})
// service class for managing pull zone api calls
export class PullZoneService {
  // URL to web api
  private pullZoneUrl = 'https://api.bunny.net/pullzone';

  // http options for web api
  httpOptions = {
    headers: new HttpHeaders({
      AccessKey:
        '9fa2bb8f-93c2-4fe1-abca-df208a4064cee5020dd4-a89a-4896-9494-bc2b921fcaae',
      Accept: 'application/json',
    }),
  };

  constructor(
    private http: HttpClient,
    private messageService: MessageService
  ) {}

  /** GET pull zones from the server */
  getPullZones(): Observable<PullZone[]> {
    // call api and return Observable array of pull zones
    // with pipe, we extend the returned Observable and give it a catchError operator
    // catchError() operator intercepts an Observable that failed
    return this.http
      .get<PullZone[]>(this.pullZoneUrl, this.httpOptions)
      .pipe(
        catchError(
          this.handleError<PullZone[]>(
            'Error occured while getting pull zones.'
          )
        )
      );
  }

  /** GET pull zone details */
  getPullZone(id: number): Observable<PullZone> {
    const url = `${this.pullZoneUrl}/${id}`;
    return this.http
      .get<PullZone>(url, this.httpOptions)
      .pipe(
        catchError(
          this.handleError<PullZone>(
            'Error occured while getting pull zone data.'
          )
        )
      );
  }

  /** POST: add new pull zone to the server */
  addPullZone(pullZone: any): Observable<PullZone> {
    const httpHeadersAdd: HttpHeaders = this.httpOptions.headers.append(
      'Content-Type',
      'application/json'
    );
    const httpOptionsAdd = {
      headers: httpHeadersAdd,
    };

    return this.http
      .post<PullZone>(this.pullZoneUrl, pullZone, httpOptionsAdd)
      .pipe(
        catchError(
          this.handleError<PullZone>('Error occured when adding new pull zone.')
        )
      );
  }

  /** POST: update pull zone origin url */
  updateOrigin(id: number, originUrl: string): Observable<PullZone> {
    const url = `${this.pullZoneUrl}/${id}`;

    const httpHeadersAdd: HttpHeaders = this.httpOptions.headers.append(
      'Content-Type',
      'application/json'
    );
    const httpOptionsAdd = {
      headers: httpHeadersAdd,
    };

    return this.http.post<PullZone>(url, originUrl, httpOptionsAdd)
    .pipe(
      catchError(
        this.handleError<PullZone>('Error occured while updating origin url.')
      )
    );
  }

  // Show message with message service
  private displayMessage(message: string) {
    this.messageService.show(message);
  }

  /**
   * Handle Http operation that failed. Copied from angular tour of heroes guide with small modifications.
   * Let the app continue.
   * @param userMessage - error to display to user
   * @param result - optional value to return as the observable result
   */
  private handleError<T>(userMessage: string, result?: T) {
    return (error: any): Observable<T> => {
      // log to console
      console.error(error);

      // display message to user
      this.displayMessage(userMessage);

      // Let the app keep running by returning an empty result (as observable).
      return of(result as T);
    };
  }
}
