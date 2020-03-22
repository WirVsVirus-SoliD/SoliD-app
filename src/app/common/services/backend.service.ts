import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { IHelperInquiry, IProvider, IProviderRequest } from '../interfaces/providers-controller.interface';
import { IHelper, IHelperFavorite, IHelperProviderRequest, IProviderInquired } from '../interfaces/helpers-controller.interface';

@Injectable({
  providedIn: 'root'
})
export class BackendService {

  private backendBaseUrl: string = environment.backendBaseUrl;

  constructor(private httpClient: HttpClient) { }

  createProvider(providerRequest: IProviderRequest): Observable<IProvider> {
    return this.httpClient.post<IProvider>(`${this.backendBaseUrl}/providers`, providerRequest);
  }

  getProviders(lat: number, long: number, range = 5): Observable<Array<IProvider>> {
    const params = new HttpParams()
      .set('lat', lat.toString())
      .set('long', long.toString())
      .set('range', range.toString());
    return this.httpClient.get<Array<IProvider>>(`${this.backendBaseUrl}/providers`, {
      params
    });
  }

  getProvider(providerId: number): Observable<IProvider> {
    return this.httpClient.get<IProvider>(`${this.backendBaseUrl}/providers/${providerId}`);
  }

  updateProvider(providerId: number, providerRequest: IProviderRequest) {
    return this.httpClient.put<IProvider>(`${this.backendBaseUrl}/providers/${providerId}`, providerRequest);
  }

  deleteProvider(providerId: number) {
    return this.httpClient.delete(`${this.backendBaseUrl}/providers/${providerId}`);
  }

  uploadPicture(providerId: number) {
    // TODO file-upload
    return this.httpClient.post(`${this.backendBaseUrl}/providers/${providerId}/upload-picture`, {});
  }

  getProviderPicture(providerId: number): Observable<any> {
    return this.httpClient.get<any>(`${this.backendBaseUrl}/providers/${providerId}/download-picture`);
  }

  getInquiredHelpers(providerId: number): Observable<IHelperInquiry> {
    return this.httpClient.get<any>(`${this.backendBaseUrl}/providers/${providerId}/inquired`);
  }

  changeContactedState(inquiryId: number) {
    return this.httpClient.put(`${this.backendBaseUrl}/providers/inquire/${inquiryId}`, {});
  }

  deleteInquiryAsProvider(inquiryId: number) {
    return this.httpClient.delete(`${this.backendBaseUrl}/providers/inquire/${inquiryId}`);
  }

  createHelper(helperRequest: IHelper): Observable<IHelper> {
    return this.httpClient.post<IHelper>(`${this.backendBaseUrl}/helpers`, helperRequest);
  }

  getHelper(helperId: number): Observable<IHelper> {
    return this.httpClient.get<IHelper>(`${this.backendBaseUrl}/helpers/${helperId}`);
  }

  updateHelper(helperId: number, helperRequest: IHelper) {
    return this.httpClient.put<IHelper>(`${this.backendBaseUrl}/helpers/${helperId}`, helperRequest);
  }

  deleteHelper(helperId: number) {
    return this.httpClient.delete(`${this.backendBaseUrl}/helpers/${helperId}`);
  }

  getHelperFavorites(helperId: number): Observable<Array<IHelperFavorite>> {
    return this.httpClient.get<Array<IHelperFavorite>>(`${this.backendBaseUrl}/helpers/${helperId}/favorites`);
  }

  getInquiredProviders(helperId: number): Observable<Array<IProviderInquired>> {
    return this.httpClient.get<Array<IProviderInquired>>(`${this.backendBaseUrl}/helpers/${helperId}/inquired`);
  }

  createFavorite(helperProviderRequest: IHelperProviderRequest): Observable<IHelperFavorite> {
    return this.httpClient.post<IHelperFavorite>(`${this.backendBaseUrl}/helpers/favorites`, helperProviderRequest);
  }

  deleteFavorite(favoriteId: number) {
    return this.httpClient.delete(`${this.backendBaseUrl}/helpers/favorites/${favoriteId}`);
  }

  createInquiry(helperProviderRequest: IHelperProviderRequest): Observable<IHelperInquiry> {
    return this.httpClient.post<IHelperInquiry>(`${this.backendBaseUrl}/helpers/inquire`, helperProviderRequest);
  }

  deleteInquiryAsHelper() {
    return this.httpClient.delete(`${this.backendBaseUrl}/helpers/inquire`);
  }
}
