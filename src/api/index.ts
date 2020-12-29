const BASE_URL = ' https://dev.to/api';
const toJson = (_: Response) => _.json();

// fetch all Articles
async function fetchArticles() {
  return await fetch(`${BASE_URL}/articles`).then(toJson);
}

// fetch  Article by ID
async function fetchArticle(id: number) {
  return await fetch(`${BASE_URL}/articles/${id}`).then(toJson);
}

export { fetchArticles, fetchArticle };
