import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TaskdescriptionComponent } from './taskdescription/taskdescription.component';
import { SolutionComponent } from './solution/solution.component';
import { PassstrenghdetailsComponent } from './passstrenghdetails/passstrenghdetails.component';

@NgModule({
  declarations: [
    AppComponent,
    TaskdescriptionComponent,
    SolutionComponent,
    PassstrenghdetailsComponent,
  ],
  imports: [BrowserModule, FormsModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
