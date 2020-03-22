import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { IProviderOfferResponse, IProviderRequest, IProviderResponse } from '../interfaces/providers-controller.interface';
import { IOfferCreateRequest, IOfferUpdateRequest, IOfferResponse } from '../interfaces/offers-controller.interface';
import { IHelperRequest, IHelperResponse } from '../interfaces/helpers-controller.interface';
import { IFavoriteCreateRequest, IFavoriteCreateResponse } from '../interfaces/favorites-controller.interface';

@Injectable({
  providedIn: 'root'
})
export class BackendService {

  private backendBaseUrl: string = environment.backendBaseUrl;

  constructor(private httpClient: HttpClient) { }

  createProvider(providerRequest: IProviderRequest): Observable<IProviderResponse> {
    return this.httpClient.post<IProviderResponse>(`${this.backendBaseUrl}/providers`, providerRequest);
  }

  getProviders(lat: number, long: number, range = 5): Observable<Array<IProviderResponse>> {
    const params = new HttpParams()
      .set('lat', lat.toString())
      .set('long', long.toString())
      .set('range', range.toString());
    return this.httpClient.get<Array<IProviderResponse>>(`${this.backendBaseUrl}/providers`, {
      params
    });
  }

  updateProvider(providerId: number, providerRequest: IProviderRequest) {
    return this.httpClient.put<IProviderResponse>(`${this.backendBaseUrl}/providers/${providerId}`, providerRequest);
  }

  deleteProvider(providerId: number) {
    return this.httpClient.delete(`${this.backendBaseUrl}/providers/${providerId}`);
  }

  // TODO missing attributes in response according to swagger-ui? (e.g. contacted)
  getProviderOffers(providerId: number): Observable<Array<IProviderOfferResponse>> {
    return this.httpClient.get<Array<IProviderOfferResponse>>(`${this.backendBaseUrl}/providers/${providerId}/offers`);
  }

  createOffer(offerCreateRequest: IOfferCreateRequest) {
    return this.httpClient.post<IOfferResponse>(`${this.backendBaseUrl}/offers`, offerCreateRequest);
  }

  // TODO must be provided in request-body (backend)
  updateOffer(offerId: number, offerUpdateRequest: IOfferUpdateRequest) {
    return this.httpClient.put(`${this.backendBaseUrl}/offers/${offerId}`, offerUpdateRequest);
  }

  // TODO we need an endpoint to delete offers (allowed for both or only provider?)
  // TODO currently not implemented in backend
  deleteOffer(offerId: number) {
    return this.httpClient.delete(`${this.backendBaseUrl}/offers/${offerId}`);
  }

  // TODO backend -> rename users to helpers
  createHelper(helperRequest: IHelperRequest): Observable<IHelperResponse> {
    return this.httpClient.post<IHelperResponse>(`${this.backendBaseUrl}/helpers`, helperRequest);
  }

  updateHelper(helperId: number, helperRequest: IHelperRequest) {
    return this.httpClient.put<IHelperResponse>(`${this.backendBaseUrl}/helpers/${helperId}`, helperRequest);
  }

  deleteHelper(helperId: number): Observable<IHelperResponse> {
    return this.httpClient.delete<IHelperResponse>(`${this.backendBaseUrl}/helpers/${helperId}`);
  }


  getHelperFavorites(helperId: number): Observable<Array<IProviderResponse>> {
    return this.httpClient.get<Array<IProviderResponse>>(`${this.backendBaseUrl}/helpers/${helperId}/favorites`);
  }

  getHelperOffers(helperId: number): Observable<Array<IProviderResponse>> {
    return this.httpClient.get<Array<IProviderResponse>>(`${this.backendBaseUrl}/helpers/${helperId}/offers`);
  }

  // TODO backend -> move favorites to /helpers/{id}/favorites ?
  createFavorite(favoriteCreateRequest: IFavoriteCreateRequest): Observable<IFavoriteCreateResponse> {
    return this.httpClient.post<IFavoriteCreateResponse>(`${this.backendBaseUrl}/favorites`, favoriteCreateRequest);
  }

  // TODO backend -> move favorites to /helpers/{id}/favorites ?
  deleteFavorite(favoriteId: number) {
    return this.httpClient.delete(`${this.backendBaseUrl}/favorites/${favoriteId}`);
  }
}
