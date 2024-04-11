import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class HackerNewsService {

private baseUrl = 'https://hacker-news.firebaseio.com/v0';

constructor(private http : HttpClient){}

getNewStories(): Observable<number[]>{
  const url = `${this.baseUrl}/newstories.json`;
  return this.http.get<number[]>(url);
}

getTopStories(): Observable<number[]>{
  const url = `${this.baseUrl}/topstories.json`;
  return this.http.get<number[]>(url);
}

getBestStories(): Observable<number[]>{
  const url = `${this.baseUrl}/beststories.json`;
  return this.http.get<number[]>(url);

}

getStoriesDetails(id:number): Observable<any[]>{
  const url = `${this.baseUrl}/item/${id}.json`;
  return this.http.get<any>(url);
}

 // Recupera gli ID delle ultime news
 getLatestNewsIDs(): Observable<number[]> {
  const url = `${this.baseUrl}/newstories.json`;
  return this.http.get<number[]>(url);
}

// Recupera i dettagli di una singola news
getNewsDetail(id: number): Observable<any> {
  const url = `${this.baseUrl}/item/${id}.json`;
  return this.http.get<any>(url);
}
}




