// Angular imports
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Components imports
import { PhotoComponent } from './photo/photo.component';


@NgModule({

  declarations: [ PhotoComponent ],

  exports: [ PhotoComponent ]
})

export class PhotosModule { }
