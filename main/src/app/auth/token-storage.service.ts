import {Injectable} from '@angular/core';
import {JwtResponse} from './jwt-response';

const TOKEN_KEY = 'AuthToken';
const USERNAME_KEY = 'AuthUsername';
const AUTHORITIES_KEY = 'AuthAuthorities';
const USERID_KEY = 'AuthUserId';
const USER_KEY = 'AuthUser';
const JWTRESPONSE_KEY = 'JwtResponse';

@Injectable({
  providedIn: 'root'
})
export class TokenStorageService {

  private roles: Array<string> = [];

  constructor() {
  }

  signOut() {
    window.localStorage.clear();
  }

  public getAuthorities(): string[] {
    this.roles = [];
    if (window.localStorage.getItem(JWTRESPONSE_KEY)) {
      JSON.parse(window.localStorage.getItem(JWTRESPONSE_KEY)).authorities.forEach(authority => {
        this.roles.push(authority.authority);
      });
    }
    return this.roles;
  }

  public saveJwtResponse(jwtResponse: JwtResponse) {
    window.localStorage.removeItem(JWTRESPONSE_KEY);
    window.localStorage.setItem(JWTRESPONSE_KEY, JSON.stringify(jwtResponse));
  }

  public getJwtResponse(): JwtResponse {
    return JSON.parse(window.localStorage.getItem(JWTRESPONSE_KEY));
  }
}



