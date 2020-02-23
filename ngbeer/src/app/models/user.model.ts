export class UserModel {
    id?: number;
    name: string = '';
    firstName: string = '';
    email: string = '';
    password: string = '';
    birthday: Date = new Date();
    createdAt: Date = new Date();
    updatedAt: Date = new Date();
}
