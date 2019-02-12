import { Component, OnInit } from '@angular/core';
import { WelcomeDataService } from './../service/data/welcome-data.service'}

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  constructor(private service:WelcomeDataService) { }

  ngOnInit() {
  }

  getWelcomeMessage() {
    //window.console.log('Welcome message!');
    this.service.executeHelloWelcomeBeanService();
  }

}
