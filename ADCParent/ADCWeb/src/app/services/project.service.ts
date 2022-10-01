import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Project } from '../models';

@Injectable()
export class ProjectService {
  private _jsonURL = 'assets/data/projects.json';

  constructor(private http: HttpClient) {}

  public getAll(): Observable<Project[]> {
    return this.http.get<Project[]>(this._jsonURL);
  }
}
