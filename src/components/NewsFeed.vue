<template>
  <div class="container flex flex-col px-4 mt-12">
    <div class="text-2xl font-black text-center sm:text-left">Noticias Relevantes</div>
    <div class="flex flex-col">
      <div v-if="loading" class="w-32 h-32">loading...</div>

      <Carousel :items-to-show="1">
        <Slide v-for="(newArray, i) in newsArray" :key="i">
          <div class="flex flex-col justify-center w-screen">
            <div
              v-for="(n, j) in newArray"
              :key="j"
              class="container flex items-center my-6"
              :class="
                ['', 'sm'].includes(screenSize)
                  ? 'flex-col'
                  : j % 2 === 0
                  ? 'flex-row'
                  : 'flex-row-reverse'
              "
            >
              <div class="bg-red-100 w-full h-[150px] sm:w-1/2 lg:h-[200px]">im a photo</div>
              <div class="flex flex-col items-center w-full sm:w-1/2">
                <div class="mt-6 text-xl font-semibold text-center">
                  {{ n.title }}
                </div>
                <div class="m-6 text-sm text-center">
                  {{ n.subtitle }}
                </div>
                <button class="btn-red-square">PRESS ME</button>
              </div>
            </div>
          </div>
        </Slide>

        <template #addons>
          <Pagination />
        </template>
      </Carousel>
    </div>
  </div>
</template>

<script>
import { ref, computed, onMounted } from 'vue';
import { Carousel, Slide, Pagination } from 'vue3-carousel';
import useScreen from '../use/screen';
import { newsAPI } from '../api';

import 'vue3-carousel/dist/carousel.css';

export default {
  name: 'Home',
  components: { Carousel, Slide, Pagination },
  setup() {
    const { screenSize } = useScreen();
    const loading = ref(true);

    const newsRef = ref([]);
    const newsArray = computed(() => {
      const cols = ['', 'sm'].includes(screenSize.value) ? 1 : 2;
      const newsRefCopy = [...newsRef.value];
      const news = [];
      while (newsRefCopy.length) {
        news.push(newsRefCopy.splice(0, cols));
      }
      return news;
    });

    onMounted(async () => {
      const news = await newsAPI.getNews();
      news.forEach((n) => newsRef.value.push(n));
      loading.value = false;
    });

    return { screenSize, newsArray, loading };
  },
};
</script>
