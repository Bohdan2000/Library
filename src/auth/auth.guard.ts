import { Injectable, CanActivate, ExecutionContext, UnauthorizedException } from '@nestjs/common';
import * as atob from 'atob';
import * as moment from 'moment';
import { Observable } from 'rxjs';
import { GqlExecutionContext } from '@nestjs/graphql';

@Injectable()
export class AuthGuard implements CanActivate {
  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const ctx = GqlExecutionContext.create(context);
    const { req } = ctx.getContext();
    return this.validateRequest(req);
  }
  private async validateRequest(request): Promise<boolean | never> {
    if (!request) {
        throw new UnauthorizedException('Does not have request');
      }
    if (!request.headers) {
    throw new UnauthorizedException('Does not have headers');
    }
    if (!request.headers.authorization) {
    throw new UnauthorizedException('Does not have authorization');
    }
    const authHeader = request.headers.authorization;
    const token = authHeader.split(' ')[1];
    try {
      const decodedToken = atob(token);
      if ( decodedToken === moment().format('dd MMM D YYYY')) {
        return true;
      }
      throw new UnauthorizedException('Token is not valid');
    } catch ({ message }) {
        throw new UnauthorizedException(message);
    }
  }
}
