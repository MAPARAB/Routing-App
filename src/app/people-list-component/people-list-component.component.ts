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

  constructor(_peopleService : PeopleServiceService)
  {
    this._peopleService = _peopleService;
  }

  ngOnInit()
  {
    this.people = this._peopleService.getAll();
  }



  /*
  people: Person[] = [
    {name: 'Luke Skywalker', height: 177, weight: 70},
    {name: 'Darth Vader', height: 200, weight: 100},
    {name: 'Han Solo', height: 185, weight: 85},
  ];
  */

}
