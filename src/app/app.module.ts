import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TaskdescriptionComponent } from './taskdescription/taskdescription.component';
import { TasksolutionComponent } from './tasksolution/tasksolution.component';
import { SolutionComponent } from './solution/solution.component';
import { PassstrenghdetailsComponent } from './passstrenghdetails/passstrenghdetails.component';

@NgModule({
  declarations: [
    AppComponent,
    TaskdescriptionComponent,
    TasksolutionComponent,
    SolutionComponent,
    PassstrenghdetailsComponent,
  ],
  imports: [BrowserModule, FormsModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
