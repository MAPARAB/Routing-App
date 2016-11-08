import { Component, OnInit } from '@angular/core';
import {Person} from './person';
import {PeopleServiceService} from './people-service.service';

@Component({
  selector: 'app-people-list-component',
  templateUrl: './people-list-component.component.html',
  styleUrls: ['./people-list-component.component.css']
})


export class PeopleListComponentComponent implements OnInit
{
  private _peopleService: PeopleServiceService;
  people: Person[] = [];
  //selectedPerson : Person;

  constructor(_peopleService : PeopleServiceService)
  {
    this._peopleService = _peopleService;
  }

  ngOnInit()
  {
    this.people = this._peopleService.getAll();
  }

  /*
  selectPerson(person)
  {
    this.selectedPerson = person;
  }
  */

}
