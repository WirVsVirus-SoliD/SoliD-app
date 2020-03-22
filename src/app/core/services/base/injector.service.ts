import { Injectable, Injector } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class InjectorService {
  static injector: Injector;
}
