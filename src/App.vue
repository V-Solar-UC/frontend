<template>
  <Navbar />
  <div id="content">
    <router-view />
  </div>
  <Footer />
</template>

<script>
import { onMounted } from 'vue';
import Navbar from './components/Navbar.vue';
import Footer from './components/Footer.vue';
import useScreen from './use/screen';

export default {
  components: { Navbar, Footer },
  setup() {
    const { updateScreenState } = useScreen();

    onMounted(() => {
      ['resize', 'load'].forEach((e) => window.addEventListener(e, updateScreenState));
    });
  },
};
</script>


<style>
@import url(
  https://fonts.googleapis.com/css2?family=Nunito:ital,wght@0,300;0,400;0,600;0,700;1,300;1,600&display=swap
);

html,
body {
  width: 100%;
  height: 100%;
}

#app {
  width: 100%;
  height: 100%;
  font-family: 'Nunito';
}
</style>
