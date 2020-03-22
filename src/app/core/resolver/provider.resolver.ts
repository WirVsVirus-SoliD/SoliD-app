import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { IProviderResponse } from 'src/app/common/interfaces/providers-controller.interface';

@Injectable({
  providedIn: 'root'
})
export class ProviderResolver implements Resolve<IProviderResponse> {

  public providerList: Array<IProviderResponse> = [
    {"providerId":2,"farmName":"Bauernhof Eppinger","crops":["Obstbau","Sonstige"],"contactFirstName":"Frieda","contactLastName":"Eppinger","email":"kontakt@bauernhof-eppinger.de","address":{"street":"Beim Rötelbrunnen","housenr":"19","zip":"71686","city":"Remseck am Neckar"},"url":"","phone":"0170 5806250","minWorkPeriod":5,"hourlyRate":9.5,"pickupPossible":true,"pickupRange":20,"overnightPossible":true,"distance":11.878871531397067,"latitude":48.87509,"longitude":9.28792},
    {"providerId":3,"farmName":"Bauernhof Stahl","crops":["Weinbau"],"contactFirstName":"Herbert","contactLastName":"Stahl","email":"kontakt@bauernhof-stahl.de","address":{"street":"Vordere Wanne","housenr":"2","zip":"75417","city":"Mühlacker"},"url":"","phone":"07041 810173","minWorkPeriod":3,"hourlyRate":9.5,"pickupPossible":false,"pickupRange":0,"overnightPossible":false,"distance":19.946558586437916,"latitude":48.93855,"longitude":8.86574},{"providerId":1,"farmName":"Bauernhof Müller","crops":["Erdbeeren","Spargel","Hopfen","Sonstige"],"contactFirstName":"Bauer","contactLastName":"Müller","email":"kontakt@bauernhof-mueller.de","address":{"street":"Seestrasse","housenr":"19","zip":"71409","city":"Schwaikheim"},"url":"","phone":"07195 57413","minWorkPeriod":5,"hourlyRate":9.5,"pickupPossible":true,"pickupRange":20,"overnightPossible":true,"distance":16.310729068262226,"latitude":48.87926,"longitude":9.34905}];


  async resolve(route: ActivatedRouteSnapshot): Promise<IProviderResponse> {
    const providerId = route.paramMap.get('providerId');
    return Promise.resolve(this.providerList.find(p => p.providerId === +providerId));
  }
}
