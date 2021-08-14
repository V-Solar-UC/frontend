// id Integer
// name String
// logo_path String

import { ref } from 'vue';
import { seedSponsors } from './mocks/sponsors.js';

const sponsorsRef = ref([]);

function timeout(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function fetchSponsors() {
  /* eventually make api requests in here */
  await timeout(1000);
  seedSponsors.forEach((n) => sponsorsRef.value.push(n));
}

async function getSponsors() {
  if (!sponsorsRef.value.length) {
    await fetchSponsors();
  }

  return sponsorsRef.value;
}

export const sponsorsAPI = {
  getSponsors,
};
