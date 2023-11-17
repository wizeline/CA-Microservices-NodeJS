import {createUserSchema} from '../models';

export const UserServices = {
    create: async (user) => {
        return new Promise(async (resolve, reject) => {
          try {
            let existUser = await createUserSchema.findOne({ Id: user.Id });
            if (existUser) {
              resolve({ user: null, message: 'User not created. Duplicate Id' });
            } else {
              const newUser = await UserModel.create({ ...user });
              resolve({ user: newUser });
            }
          } catch (ex) {
            reject({ message: ex });
          }
        });
    },
}