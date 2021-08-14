<template>
  <div class="flex flex-col container mt-12 px-4">
    <div class="text-center sm:text-left text-2xl font-black">Noticias Relevantes</div>
    <div class="flex flex-col">
      <div v-if="loading" class="w-32 h-32">loading...</div>

      <Carousel :items-to-show="1">
        <Slide v-for="(newArray, i) in news" :key="i">
          <div class="w-screen flex flex-col justify-center">
            <div
              v-for="(new_, j) in newArray"
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
                <div class="text-center mt-6 text-xl font-semibold">
                  {{ new_.title }}
                </div>
                <div class="text-center m-6 text-sm">
                  {{ new_.subtitle }}
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
import useScreen from '../use/screen.js';
import { newsAPI } from '../api';

import 'vue3-carousel/dist/carousel.css';

export default {
  name: 'Home',
  components: { Carousel, Slide, Pagination },
  setup() {
    /* TODO: better variable naming */
    const { screenSize } = useScreen();

    const loading = ref(true);

    const newsRef = ref([]);
    const news = computed(() => {
      const cols = ['', 'sm'].includes(screenSize.value) ? 1 : 2;
      const newsRefCopy = [...newsRef.value];
      const news_ = [];
      while (newsRefCopy.length) {
        news_.push(newsRefCopy.splice(0, cols));
      }
      return news_;
    });

    onMounted(async () => {
      const news = await newsAPI.getNews();
      news.forEach((n) => newsRef.value.push(n));
      loading.value = false;
    });

    return { screenSize, news, loading };
  },
};
</script>
