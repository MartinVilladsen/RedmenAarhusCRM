"use client"

import { useState } from "react";
import { useActionState } from "react";
import { createArticle } from "@/actions/createArticle";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Newspaper } from "lucide-react";

const subjects = [
  "Indlæg",
  "Blog",
  "Karakter",
  "Analyse",
];

const initialState = {
  message: "",
  errors: {} as Record<string, string[]>,
};

export function CreateArticleForm() {
  const [state, action, isPending] = useActionState(
    createArticle,
    initialState
  );

  async function formAction(formData: FormData) {
    action(formData);
  }

  return (
    <form action={formAction} className="w-full">
      <Card className="w-full border-border">
        <CardHeader className="pb-4">
          <div className="flex items-center gap-2">
            <div className="p-2 rounded-full bg-primary/10">
              <Newspaper className="h-5 w-5 text-primary" />
            </div>
            <div>
              <CardTitle>Opret Artikel</CardTitle>
              <CardDescription>
                Udfyld formularen for at oprette en ny artikel
              </CardDescription>
            </div>
          </div>
        </CardHeader>

        {state.message && (
          <p className="text-red-600 text-center mt-2">{state.message}</p>
        )}

        <CardContent className="space-y-4 px-6 pb-6">
          <div>
            <label
              htmlFor="subject"
              className="block text-sm font-medium text-gray-700"
            >
              Emne
            </label>
            <select
              id="subject"
              name="subject"
              required
              className="mt-1 block w-full border border-gray-300 rounded-md p-2 bg-white"
            >
              <option value="" disabled>
                Vælg emne
              </option>
              {subjects.map((subj) => (
                <option key={subj} value={subj}>
                  {subj}
                </option>
              ))}
            </select>
            {state.errors.subject?.map((err, i) => (
              <p key={i} className="text-red-500 text-xs mt-1">
                {err}
              </p>
            ))}
          </div>

          <div>
            <label
              htmlFor="title"
              className="block text-sm font-medium text-gray-700"
            >
              Titel
            </label>
            <input
              id="title"
              name="title"
              type="text"
              placeholder="Indtast artikelens titel"
              className="mt-1 block w-full border border-gray-300 rounded-md p-2"
            />
            {state.errors.title?.map((err, i) => (
              <p key={i} className="text-red-500 text-xs mt-1">
                {err}
              </p>
            ))}
          </div>

          <div>
            <label
              htmlFor="image"
              className="block text-sm font-medium text-gray-700"
            >
              Billede-URL
            </label>
            <input
              id="image"
              name="image"
              type="text"
              placeholder="https://..."
              className="mt-1 block w-full border border-gray-300 rounded-md p-2"
            />
            {state.errors.image?.map((err, i) => (
              <p key={i} className="text-red-500 text-xs mt-1">
                {err}
              </p>
            ))}
          </div>

          <div>
            <label
              htmlFor="content"
              className="block text-sm font-medium text-gray-700"
            >
              Indhold
            </label>
            <textarea
              id="content"
              name="content"
              rows={5}
              placeholder="Skriv din artikel her"
              className="mt-1 block w-full border border-gray-300 rounded-md p-2"
            />
            {state.errors.content?.map((err, i) => (
              <p key={i} className="text-red-500 text-xs mt-1">
                {err}
              </p>
            ))}
          </div>
        </CardContent>

        <CardFooter className="flex flex-col items-center pt-0 pb-6">
          <Button
            type="submit"
            className="w-full max-w-sm relative overflow-hidden group"
            disabled={isPending}
            size="lg"
          >
            <span className="relative z-10 text-white">
              {isPending ? "Opretter..." : "Opret Artikel"}
            </span>
            <span className="absolute inset-0 bg-primary/10 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
          </Button>
        </CardFooter>
      </Card>
    </form>
  );
}

export default CreateArticleForm;
