import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Photo } from './photo';

const API = 'http://localhost:3000'


@Injectable({ providedIn: 'root' })
export class PhotoService {

  private http: HttpClient;

  constructor(http: HttpClient) {
    this.http = http
  }

  listFromUser(userName: string) {
    return this.http
      .get<Photo[]>(API + '/' + userName + '/photos')
  }

}
