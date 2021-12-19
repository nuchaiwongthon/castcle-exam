import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-send-otp',
  templateUrl: './send-otp.component.html',
  styleUrls: ['./send-otp.component.scss'],
})
export class SendOtpComponent implements OnInit {
  @ViewChild('ngOtpInput', { static: false}) ngOtpInput: any;
   public routeData: any = {
    text: 'Next',
    route: '/',
    disable: true,
  };
  public telData: any = '';
  public optionOTP = {
    allowNumbersOnly: true,
    length: 6,
    inputClass: 'form-control input-otp',
    containerClass: 'd-flex justify-content-center',
    inputStyles: {
      'width': '40px',
      'height': '60px',
      'border': 'none',
      'border-bottom': 'white 3px solid',
      'font-size': '31px',
      'border-radius': '0px'
    }
  };
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private location: Location
  ) {
    const navigation: any = this.router.getCurrentNavigation();
    const state = navigation.extras.state;
    if (state) {
      this.telData = state;
    } else {
      this.location.back()
    }
  }

  ngOnInit() {
  }
  /**
   * event otp input number.
   */
  onOtpChange(){
    let length = 0;
    for (const key in this.ngOtpInput.otpForm.value) {
      if (Object.prototype.hasOwnProperty.call(this.ngOtpInput.otpForm.value, key)) {
        const element = this.ngOtpInput.otpForm.value[key];
        if (element) {
          length++
        } else {
          break;
        }
      }
    }
    if (length === 6) {
      this.routeData.disable = false;
    } else {
      this.routeData.disable = true;
    }
  }
}
