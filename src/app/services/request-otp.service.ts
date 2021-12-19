import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class RequestOtpService {
  constructor(private http: HttpClient) {}

  countryCode() {
    return new Promise(async (resolve, reject) => {
      try {
        let headers = new HttpHeaders();
        headers = headers.append('Content-Type','application/json');
        headers = headers.append('Accept-Version','1.0');
        headers = headers.append('Accept-Language','en');
        const response: any = await this.http.get(`https://api-dev.castcle.com/metadata/country?sortBy=asc(name)`, { headers }).toPromise();
        resolve(response);
      } catch (error) {
        reject(error);
      }
    });
  }
}
