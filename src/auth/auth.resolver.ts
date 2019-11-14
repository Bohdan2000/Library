import { Resolver, Query, Args, Mutation } from '@nestjs/graphql';
import { AuthService } from './auth.service';

@Resolver('Auth')
export class AuthResolver {
  constructor(
    private readonly authService: AuthService,
  ) {}

  @Query(() => String)
  async getToken() {
    return await this.authService.getToken();
  }

}
