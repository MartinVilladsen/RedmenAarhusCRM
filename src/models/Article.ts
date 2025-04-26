import { User } from "./User";

export type Article = {
    id: number;
    subject: string;
    title: string;
    image: string;
    content: string;
    user: User;
}
