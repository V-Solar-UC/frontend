<template>
  <div class="w-full h-full flex flex-col items-center justify-center">
    <div class="w-full items-left p-10 text-2xl font-black">Auspiciadores</div>
    <div class="w-full h-full">
      <div v-if="loading" class="w-32 h-32">loading...</div>

      <Carousel :items-to-show="1">
        <Slide v-for="(sponsor, i) in sponsorsRef" :key="i">
          <div class="w-full max-w-[1000px] p-2 m-4 flex flex-col justify-center items-center">
            <div v-for="(new_, j) in newArray" :key="j" class="flex items-center my-2">
              <div class="p-2 flex-grow text-center bg-red-100 w-full h-[150px] sm:h-[200px]">
                im a photo
              </div>
              <div class="flex flex-col items-center sm:w-1/2">
                <div class="text-left py-12 p-4 text-xl font-semibold">
                  {{ new_.title }}
                </div>
                <div class="text-left p-6 text-sm">
                  {{ new_.subtitle }}
                </div>
                <button class="btn-red-square my-4">PRESS ME</button>
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
import { ref, onMounted } from 'vue';
import { Carousel, Slide, Pagination } from 'vue3-carousel';
import { sponsorsAPI } from '../api';

import 'vue3-carousel/dist/carousel.css';

export default {
  name: 'SponsorsCarousel',
  components: { Carousel, Slide, Pagination },
  setup() {
    const sponsorsRef = ref([]);
    const loading = ref(true);

    onMounted(async () => {
      const sponsors = await sponsorsAPI.getSponsors();
      sponsors.forEach((n) => sponsorsRef.value.push(n));
      loading.value = false;
    });

    return { sponsorsRef, loading };
  },
};
</script>
