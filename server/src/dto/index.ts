//TODO validate DTO

export interface RegisterDto {
  username: string;
  mobile: string;
  password: string;
  bdate: Date;
}

export interface LoginDto {
  mobile: string;
  password: string;
}

