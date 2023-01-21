import { Component, OnInit } from '@angular/core';
import { PhotoService } from './photos/photo/photo.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {

  title = 'Alura Pic';

  photos: Object[] = [];

  constructor(private photoService: PhotoService) {}

  ngOnInit(): void {
    this.photoService
      .listFromUser('flavio')
      .subscribe(
          // in case of success
          photos => this.photos = photos,
          // in case of error
          err => console.log(err)
      );
  }
}
