// app/articles/new/page.tsx
import CreateArticleForm from "@/components/CreateArticleForm";
import Header from "@/components/Header";

export default function NewArticlePage() {
  return (
    <>
      <Header />
      <div className="mt-8 px-4">
      <h1 className="text-2xl font-bold text-center mb-6">Opret ny artikel</h1>
        <CreateArticleForm />
      </div>
    </>
  );
}
