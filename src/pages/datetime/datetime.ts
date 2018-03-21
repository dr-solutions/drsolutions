import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-datetime',
  templateUrl: 'datetime.html',
})
export class DatetimePage {
  myDate1: string;
  myDate2: string;
  myDate3: string;
  myDate4: string = '2017-01-01';
  myDate5: string = '2017-02-02'
  
  monthNames: string[] = [
    'Jänner Oida',
    'Februar Oida',
    'März Oida',
    'April Oida',
    'Mai Oida',
    'Juni Oida',
    'Juli Oida',
    'August Oida',
    'September Oida',
    'Oktober Oida',
    'November Oida',
    'Dezember Oida',
  ];
  monthNamesShort: string[] = [
    'JäO',
    'FeO',
    'MäO',
    'ApO',
    'MaO',
    'JuO',
    'JuO',
    'AuO',
    'SeO',
    'OkO',
    'NoO',
    'DeO',
  ];
  dayNames: string[] = [
    'Montag Oida',
    'Dienstag Oida',
    'Mittwoch Oida',
    'Donnerstag Oida',
    'Freitag Oida',
    'Sanstag Oida',
    'Sonntag Oida',
  ];
  dayNamesShort: string[] = [
    'MO Oida',
    'DI Oida',
    'MI Oida',
    'DO Oida',
    'FR Oida',
    'SA Oida',
    'SO Oida',
  ];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLeave() {
    console.log(this.myDate1);
  }

  canceled() {
    console.log('Datepicker gecanceled');
  }

  /*
  Format          Description                     Example
  YYYY            Year, 4 digits                  2018
  YY              Year, 2 digits                  18
  M               Month                           1 ... 12
  MM              Month, leading zero             01 ... 12
  MMM             Month, short name               Jan
  MMMM            Month, full name                January
  D               Day                             1 ... 31
  DD              Day, leading zero               01 ... 31
  DDD             Day, short name                 Fri
  DDDD            Day, full name                  Friday
  H               Hour, 24-hour                   0 ... 23
  HH              Hour, 24-hour, leading zero     00 ... 23
  h               Hour, 12-hour                   1 ... 12
  hh              Hour, 12-hour, leading zero     01 ... 12
  a               12-hour time period, lowercase  am pm
  A               12-hour time period, uppercase  AM PM
  m               Minute                          1 ... 59
  mm              Minute, leading zero            01 ... 59
  s               Second                          1 ... 59
  ss              Second, leading zero            01 ... 59
  Z               UTC Timezone Offset             Z or +HH:mm or -HH:mm
  */

}
