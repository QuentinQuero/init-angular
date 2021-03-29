import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UtilsService {
  getLastWordInUrl(url) {
    const n = url.split('/');
    return  n[n.length - 1];
  }
}
