import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  getUserName(): string {
    return 'Billy Bob';
  }
}
