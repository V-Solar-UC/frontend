<template>
  <div
    class="bg-cover w-full h-screen flex flex-col justify-center items-center"
    :class="['', 'sm'].includes(screenSize) ? 'home-bg-mobile' : 'home-bg-desktop'"
  >
    <div class="flex flex-col justify-end items-center mt-36">
      <div class="text-white text-center text-xl mb-24 mx-12 drop-shadow sm:w-[600px]">
        Buscamos promover el uso de la energía eléctrica creando un auto que funciona únicamente con
        energía solar.
      </div>
      <button class="btn-red-round">conocenos</button>
    </div>
  </div>
  <div class="w-full h-full flex justify-center">
    <NewsFeed />
  </div>
  <div class="bg-green-200 my-6">
    <div class="text-3xl font-semibold text-center py-4">Anuncios</div>
    <div class="mx-6 text-center">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum tempora illum fugiat
      reprehenderit architecto accusamus molestiae laborum excepturi totam voluptate omnis
      perspiciatis, a incidunt velit eius sapiente, nulla optio ullam!
    </div>
    <div class="text-center my-6">Ver mas</div>
  </div>
  <div class="w-full h-full flex justify-center">
    <SponsorsCarousel />
  </div>
  <div class="w-full h-full"></div>
</template>


<script>
import NewsFeed from '../components/NewsFeed.vue';
import SponsorsCarousel from '../components/SponsorsCarousel.vue';
import useScreen from '../use/screen.js';

export default {
  name: 'Home',
  components: { NewsFeed, SponsorsCarousel },
  setup() {
    const { screenSize } = useScreen();

    return { screenSize };
  },
};
</script>

<style scoped>
.home-bg-mobile {
  background-image: url('../assets/img/solar-farm-mobile.jpg');
}

.home-bg-desktop {
  background-image: url('../assets/img/solar-farm-desktop.jpg');
}
</style>
