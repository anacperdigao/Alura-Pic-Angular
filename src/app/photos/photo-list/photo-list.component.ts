import { Component, OnInit } from '@angular/core';
import { PhotoService } from '../photo/photo.service';
import { ActivatedRoute } from '@angular/router'
import { Photo } from '../photo/photo';

@Component({
  selector: 'app-photo-list',
  templateUrl: './photo-list.component.html',
  styleUrls: ['./photo-list.component.css']
})
export class PhotoListComponent implements OnInit {

  photos: Photo[] = [];

  inputFilter: string = '';


  constructor(
    private photoService: PhotoService,
    private activatedRoute: ActivatedRoute

  ) { }

  ngOnInit(): void {

    const userName = this.activatedRoute.snapshot.params.userName

    this.photoService
      .listFromUser(userName)
      .subscribe(
          // in case of success
          photos => this.photos = photos,
          // in case of error
          err => console.log(err)
      );
  }

}
