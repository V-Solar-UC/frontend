//     id = Column('new_id', Integer, primary_key=True)
//     title = Column(String, unique=True, index=True)
//     subtitle = Column(String)
//     reading_time = Column(Integer)
//     subject = Column(String)
//     content_dir = Column(String, unique=True)
//     created_at = Column(DateTime, default=datetime.datetime.utcnow)
//     last_edit_at = Column(DateTime, default=datetime.datetime.utcnow)

//     author_id = Column(Integer, ForeignKey('users.user_id'))
//     author = relationship('User', back_populates='news')

import { ref } from 'vue';
import { seedNews } from './mocks/news-body.js';

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

export const newsAPI = {
  getNews,
};
