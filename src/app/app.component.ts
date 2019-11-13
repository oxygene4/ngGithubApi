import {Component} from '@angular/core';
import {IUser} from './types';
import {Subject, EMPTY} from 'rxjs';
import {switchMap, map, catchError} from 'rxjs/operators';
import {ajax} from 'rxjs/ajax';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  public subject = new Subject<any>();
  public users: IUser[] = [];
  readonly baseUrl = 'https://api.github.com/search/users?q=';

  constructor() {
    this.subject.pipe(
      switchMap(query => ajax.getJSON(this.baseUrl + query).pipe(
        catchError(() => {
          this.users = [];
          return EMPTY;
        }))
      ),
      map((response: any) => response.items),
      map((users: IUser[]) => {
        return users.map((user: IUser) => {
          return {
            id: user.id,
            avatar_url: user.avatar_url,
            login: user.login,
            html_url: user.html_url
          };
        });
      })
    ).subscribe((users: IUser[]) => {
      this.users = users;
    });
  }

  public trackByFunction(index, item) {
    return item.id;
  }
}
