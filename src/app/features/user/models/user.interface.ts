import { RestResponse } from '@shared/interfaces/rest-response.interface';

export interface UserApi extends RestResponse {
     data: User;
}

export class UserLogin {
     public login: string;
     public password: string;
}

export interface User {
     login: string;
     password: string;
}

export interface ChangePassword extends User {
     newPassword: string;
}

export interface LoginApi {
     data: {
          token: string;
          user: UserResponse;
     };
     message: string;
     success: boolean;
}

export interface UserResponse {
     id: number;
     name: string;
     role_id: number;
     deparment_id: number;
}

export interface UserRegister {
     name: string;
     email: string;
     password: string;
     c_password: string;
}

// "user": {
//      "id": 11,
//      "name": "test",
//      "email": "irache@wp.pl.com",
//      "email_verified_at": null,
//      "created_at": "2024-03-23 09:42:19",
//      "updated_at": "2024-03-23 09:42:19",
//      "role_id": null,
//      "deparment_id": null,
//      "login": null
//  }
