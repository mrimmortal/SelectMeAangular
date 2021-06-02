import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import{GallaryViewComponent} from 'src/components/gallary-view/gallary-view.component'
import { NgxGalleryModule } from 'ngx-gallery-9';

@NgModule({
  declarations: [
    GallaryViewComponent
  ],
  imports: [
    NgxGalleryModule

  ],
  exports:[GallaryViewComponent],
  providers: [],
  bootstrap: []
})
export class GallaryViewModule { }
