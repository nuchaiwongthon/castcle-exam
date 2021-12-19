import { Component, OnInit } from '@angular/core';
import { RequestOtpService } from './../../services/request-otp.service';

@Component({
  selector: 'app-request-otp',
  templateUrl: './request-otp.component.html',
  styleUrls: ['./request-otp.component.scss'],
})
export class RequestOtpComponent implements OnInit {
  public routeData: any = {
    text: 'Send OTP',
    route: '/send-otp',
    disable: true,
  };

  public countryCode: any = [];
  public selectedCountry: string = '';
  public telInput: string = '';
  constructor(private requestOTP: RequestOtpService) {}

  ngOnInit() {
    this.getCountryCode();
  }
  /**
   * get data by request call api country code.
   */
  async getCountryCode() {
    const response: any = await this.requestOTP.countryCode();
    if (response.payload) {
      this.countryCode = response.payload;
    }
  }
  /**
   * event regular expression telephone number correct format.
   * @param {any} event
   */
  telFormat(event: any) {
    if (event.target.value) {
      if (event.target.value.includes(this.selectedCountry)) {
       const tel = event.target.value.split(' ');
       if (tel[1]) {
       event.target.value = `${tel[0]} ${tel[1] ? tel[1].replace(/[^0-9]/g, '') : ''}`;
       this.routeData.disable = false;
       } else {
       event.target.value = `${tel[0]} `;
       this.routeData.disable = true;
       }
      } else {
      event.target.value = `${this.selectedCountry} ${event.target.value.replace(/[^0-9]/g, '')}`;
      this.routeData.disable = false;
      }
    } else {
      this.routeData.disable = true;
    }
    this.routeData.state = {
      telNumber: this.telInput,
      refOTP: 'TksE1d'
    }
  }
}
