import { Injectable } from '@nestjs/common';
import * as btoa from 'btoa';
import * as moment from 'moment';

@Injectable()
export class AuthService {

  public async getToken() {
    const time = moment().format('dd MMM D YYYY');
    const token = btoa(time);
    return token;
  }
}
