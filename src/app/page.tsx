import { getArticles } from "@/actions/getArticles";
import { getPodcasts } from "@/actions/getPodcasts";
import LandingPage from "@/components/BecomeMemberLandingPage";
import Header from "@/components/Header";
import NewsSection from "@/components/NewsSection";

export default async function Home() {
  const { articles } = await getArticles()
  const { podcasts } = await getPodcasts()

  return (
    <div>
      <Header />
      <LandingPage />
      <NewsSection
        featuredImage="/featured-news.jpg"
        articles={articles}
        podcasts={podcasts}
      />
    </div>
  );
}
