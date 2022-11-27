import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor() {}

  list = [
    {
      "name": "test",
      "value": "asdasdas"
    },
    {
      "name": "asdasdas",
      "value": "asdasdas"
    },
  ]


}
