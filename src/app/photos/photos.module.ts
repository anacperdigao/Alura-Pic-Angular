// Angular imports
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

// Components imports
import { PhotoComponent } from './photo/photo.component';


@NgModule({

  declarations: [ PhotoComponent ],

  exports: [ PhotoComponent ],

  imports: [ HttpClientModule ]
})

export class PhotosModule { }
