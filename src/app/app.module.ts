import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TopbarComponent } from './layout/topbar/topbar.component';
import { PageWrapperComponent } from './layout/page-wrapper/page-wrapper.component';

@NgModule({
  declarations: [
    AppComponent,
    TopbarComponent,
 
    PageWrapperComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
