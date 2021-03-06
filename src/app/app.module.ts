import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { PersonDetailsComponent } from './people-list-component/person-details.component';
import { PeopleListComponentComponent } from './people-list-component/people-list-component.component';
import { PeopleServiceService } from './people-list-component/people-service.service';


@NgModule({
  declarations: [
    AppComponent,
    PersonDetailsComponent,
    PeopleListComponentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  //providers: [],
  providers: [PeopleServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
