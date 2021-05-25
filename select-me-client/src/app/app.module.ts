import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import{GallaryViewModule} from 'src/components/gallary-view/gallary-view.module'

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    GallaryViewModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
