import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TaskdescriptionComponent } from './taskdescription/taskdescription.component';
import { TasksolutionComponent } from './tasksolution/tasksolution.component';

@NgModule({
  declarations: [AppComponent, TaskdescriptionComponent, TasksolutionComponent],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
