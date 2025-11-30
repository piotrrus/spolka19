import { LoginApi } from '@features/user/models/user.interface';

export const loginDataMock: LoginApi = {
     data: {
          token: 'test123',
          user: {
               id: 123,
               name: 'test',
               role_id: 1,
               deparment_id: 1,
          },
     },
     message: 'OK',
     success: true,
};
