import { RestResponse } from '@shared/interfaces/rest-response.interface';

export interface UserApi extends RestResponse {
     data: User[];
}

export interface User {
     id: number;
     name: string;
     role: string;
     role_id: number;
     email: string;
     created_at: string;
     is_active: boolean | number;
}

export interface UserRolesApi extends RestResponse {
     data: Role[];
}

export interface Role {
     id: number;
     name: string;
     role: string;
}
