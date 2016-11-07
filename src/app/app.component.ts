import { Component } from '@angular/core';

import { PeopleServiceService } from './people-list-component/people-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],

  // HERE! This registers the PeopleService 
  // now Angular 2 knows to inject it when required
  providers: [PeopleServiceService]

})
export class AppComponent {
  title = 'app works hello all done via GIT!';
}
