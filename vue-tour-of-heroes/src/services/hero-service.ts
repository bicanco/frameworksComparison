import axios, { AxiosRequestConfig } from "axios";
import { catchError, from, Observable, of, tap } from "rxjs";
import { InjectionKey } from "vue";

import { Hero } from "@/models/hero";
import { MessageService } from "@/store/message-service";
import { mapToData } from "@/utils/operators";

export class HeroService {
  private heroesUrl = "http://localhost:4000/heroes";
  private httpOptions: AxiosRequestConfig = {
    headers: { "Content-Type": "application/json" },
  };

  constructor(private messageService: MessageService) {}

  getHeroes(): Observable<Hero[]> {
    return from(axios.get(this.heroesUrl)).pipe(
      mapToData<Hero[]>(),
      tap(() => this.log("fetched heroes")),
      catchError(this.handleError<Hero[]>("getHeroes", []))
    );
  }

  getHero(id: number): Observable<Hero> {
    const url = `${this.heroesUrl}/${id}`;
    return from(axios.get(url)).pipe(
      mapToData<Hero>(),
      tap(() => this.log(`fetched hero id=${id}`)),
      catchError(this.handleError<Hero>(`getHero id=${id}`))
    );
  }

  updateHero(hero: Hero): Observable<unknown> {
    const url = `${this.heroesUrl}/${hero.id}`;
    return from(axios.put(url, hero, this.httpOptions)).pipe(
      mapToData(),
      tap(() => this.log(`updated hero id=${hero.id}`)),
      catchError(this.handleError("updateHero"))
    );
  }

  addHero(hero: Hero): Observable<Hero> {
    return from(axios.post(this.heroesUrl, hero)).pipe(
      mapToData<Hero>(),
      tap((newHero: Hero) => this.log(`added hero w/ id=${newHero.id}`)),
      catchError(this.handleError<Hero>("addHero"))
    );
  }

  deleteHero(id: number): Observable<Hero> {
    const url = `${this.heroesUrl}/${id}`;
    return from(axios.delete(url)).pipe(
      mapToData<Hero>(),
      tap(() => this.log(`deleted hero id=${id}`)),
      catchError(this.handleError<Hero>("deleteHero"))
    );
  }

  searchHeroes(term: string): Observable<Hero[]> {
    if (!term.trim()) {
      return of([]);
    }
    return from(axios.get(`${this.heroesUrl}/?name_like=${term}`)).pipe(
      mapToData<Hero[]>(),
      tap((x) =>
        x.length
          ? this.log(`found heroes matching "${term}"`)
          : this.log(`no heroes matching "${term}"`)
      ),
      catchError(this.handleError<Hero[]>("searchHeroes", []))
    );
  }

  private log(message: string) {
    this.messageService.add(`HeroService: ${message}`);
  }

  private handleError<T>(operation = "operation", result?: T) {
    return (error: { [key: string]: unknown }): Observable<T> => {
      console.error(error);
      this.log(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }
}

export const heroServiceKey: InjectionKey<HeroService> = Symbol();
