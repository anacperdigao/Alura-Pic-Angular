import { Input } from '@angular/core';
import { Component } from '@angular/core';

@Component({
  selector: 'ap-photo',
  templateUrl: 'photo.component.html'
})

export class PhotoComponent {
  @Input() description = '';
  @Input() url = ''
}
