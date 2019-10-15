import { Injectable } from '@angular/core';

export enum Endpoints {
	ALL_PRODUCTS = 'all-products',
	PRODUCT_DETAIL = 'product-detail',
}

export class EndpointsURI {
	static readonly MAP = {
		[Endpoints.ALL_PRODUCTS]: 'retrieve-product/products',
		[Endpoints.PRODUCT_DETAIL]: 'retrieve-product/{code}',
	};
}

@Injectable()
export class HttpHelper {
	constructor() { }

	public getUrl(uriType: Endpoints, pathParams: { [key: string]: string } = {}): string {
    const preventCORS = 'https://cors-anywhere.herokuapp.com/';
    const apiEndpoint = 'http://challenge-front-end.us-east-2.elasticbeanstalk.com/';
		const uri = EndpointsURI.MAP[uriType];

    const apiFinal = `${preventCORS}${apiEndpoint}`;
    return `${apiFinal}${this.replaceUrlParams(uri, pathParams)}`;
	}
	
	private replaceUrlParams(url: string, pathParams: { [key: string]: string }): string {
    return Object.keys(pathParams).reduce((acc, k) => {
      return acc.replace(`{${k}}`, pathParams[k]);
    }, url);
  }
}