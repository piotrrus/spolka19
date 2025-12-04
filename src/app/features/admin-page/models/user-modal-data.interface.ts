import { Role, User } from './user.interface';

export interface UserModalData {
     title: string;
     data: User;
     roles: Role[];
}
