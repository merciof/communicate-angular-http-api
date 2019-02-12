import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WelcomeDataService {

  constructor() { }
  
  executeHelloWelcomeBeanService() {
    window.console.log('Hello welcome bean service!');
  }
}
