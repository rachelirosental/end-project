import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Reference } from 'src/app/Data/Reference';
@Injectable({
    providedIn: 'root'
  })
  export class referenceservice{
    url: string;
    constructor(public httpClient: HttpClient) {
      this.url = environment.url + "Reference";
    }
  }

  