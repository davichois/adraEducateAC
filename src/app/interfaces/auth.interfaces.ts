export interface AuthModel {
  usucredencial: string;
  pwdcredencial: string;
}

export interface AuthState {
  usuario: AuthModel;
  isLoading: boolean;
}

export interface Token {
  access_token: string;
  refresh_token: string;
}
