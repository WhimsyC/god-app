import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
  
@Injectable({
  providedIn: 'root'
})
export class PostService {
  private url = ' https://dog.ceo/api/breeds/list/all';
  private imgUrl = 'https://dog.ceo/api/breeds/image/random'
   
  constructor(private httpClient: HttpClient) { }
  
  getPosts(): Observable<any>{
    return this.httpClient.get(this.url)
    // .pipe(
    //   catchError(this.handleError('getPosts', []))
    // );
  }

  showPic(breed:any): Observable<any>{
    return this.httpClient.get('https://dog.ceo/api/breed/' + breed + '/images')

    .pipe(
      catchError(this.handleError('showPic', []))
    );
  }

  showtest(): Observable<any> {
    return this.httpClient.get(this.url)
  }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      return of(result as T);
    };
  }
  

}