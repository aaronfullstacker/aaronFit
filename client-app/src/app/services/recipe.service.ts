import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Recipes } from '../models/recipes';
import { Observable, of } from 'rxjs';
import { Socket } from 'ngx-socket-io';


@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  constructor(private httpClient: HttpClient, private socket: Socket) { }

  onClick(r: Recipes): Observable<string>{
    console.log(r);
    return this.httpClient.post<string>('http://localhost:8888/recipes', r);
  }

  getRecipes():Observable<Recipes[]>{
    return this.httpClient.get<Recipes[]>('http://localhost:8888/recipes');
  }

  get(): Observable<number[]>{
    return this.socket.fromEvent('message');
  }

  post(n: Recipes): Observable<string>{
    console.log(n);
    
    return this.socket.emit('message', n, () => {
      return of('dfs');
    });
    
  }

}
