export interface IUser {
    id?: number;

    username?: string;

    phoneNumber?: string;

    email?: string;

    gender?: 'male' | 'female' | 'other';

    level?: number;

    deactivated?: boolean;

    createdAt?: Date;

    updatedAt?: Date;
}