import { Department } from "./Department";

export type User = {
    id: number;
    name: string;
    department: Department;
    image: string;
    role: string;
    email: string;
    password: string;
    birthday: Date;
}