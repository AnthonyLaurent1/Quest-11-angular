import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {Cocktail} from "./cocktail";

@Injectable({
  providedIn: 'root'
})
export class CocktailService {

  constructor(private http: HttpClient) { }

  getCocktails(): Observable<Cocktail[]> {
    return this.http.get<Cocktail[]>('../assets/cocktail.json');
  }
}
