import NewsList from "../components/List/NewsList";
import { ARTICLES } from "../data/dummy_data";

function LocalNewsScreen() {
  // set category to display
  const category = "local"
  // filter dummy data to respective category
  const displayedArticles = ARTICLES.filter((article) => {
    return article.category === category;
  });

  // return custom list component populated with relevant articles
  return <NewsList items={displayedArticles} />;
}

export default LocalNewsScreen;