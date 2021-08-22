import { ref } from 'vue';
import seedNews from './mocks/news-body';

const newsState = ref([]);

function timeout(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function fetchNews() {
  /* eventually make api requests in here */
  await timeout(1000);
  seedNews.forEach((n) => newsState.value.push(n));
}

async function getNews() {
  if (!newsState.value.length) {
    await fetchNews();
  }

  return newsState.value;
}

export default {
  getNews,
};
