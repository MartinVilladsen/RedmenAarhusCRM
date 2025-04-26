import { User } from "./User";

export type Department = {
    id: number;
    department: string;
    users: User[];
}