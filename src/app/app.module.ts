import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TopbarComponent } from './layout/topbar/topbar.component';
import { PageWrapperComponent } from './layout/page-wrapper/page-wrapper.component';
import { ListStudentsComponent } from './pages/list-students/list-students.component';

@NgModule({
  declarations: [
    AppComponent,
    TopbarComponent,
 
    PageWrapperComponent,
      ListStudentsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
