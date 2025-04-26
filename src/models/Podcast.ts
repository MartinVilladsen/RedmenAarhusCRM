import { User } from "./User";

export type Podcast = {
    id: number;
    subject: string;
    title: string;
    image: string;
    content: string;
    user: User;
}