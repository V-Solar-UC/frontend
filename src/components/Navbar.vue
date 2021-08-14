<template>
  <div class="fixed flex items-center w-full h-20 bg-gray-100 z-50">
    <div class="relative w-full h-full">
      <img
        src="../assets/img/vsolar-logo.png"
        class="absolute w-16 h-11 top-4 left-4 cursor-pointer"
      />

      <div
        v-if="['', 'sm'].includes(screenSize)"
        class="absolute w-12 h-12 top-5 right-5 cursor-pointer"
        @click="isDropdownExpanded = !isDropdownExpanded"
      >
        <div v-if="!isDropdownExpanded" class="w-full h-full flex flex-col divide-y-2 divide-black">
          <div v-for="i in 4" :key="i" class="w-full flex-grow"></div>
        </div>
        <div v-else class="h-full flex mt-1 items-center justify-center text-3xl font-thin">X</div>
      </div>

      <div
        v-else
        class="ml-32 absolute flex flex-row items-center justify-center font-semibold text-lgl h-full right-16 cursor-pointer"
      >
        <div class="navbar-button">Noticias</div>
        <div class="navbar-button">Equipo</div>
        <div class="navbar-button">Nosotros</div>
        <div class="navbar-button">Donaciones</div>
        <div class="navbar-button">Contacto</div>
        <div
          class="relative navbar-button flex flex-row justify-center"
          @click="isOthersDropdownExpanded = !isOthersDropdownExpanded"
        >
          <div class="pr-2">Otros</div>
          <div>{{ isOthersDropdownExpanded ? 'x' : 'z' }}</div>
          <ul
            v-show="isOthersDropdownExpanded"
            class="absolute bg-gray-100 top-[75px] left-[-20px]"
          >
            <li class="others-dropdown-button">Galeria</li>
            <li class="others-dropdown-button">Postulaciones</li>
          </ul>
        </div>
      </div>

      <transition
        enter-active-class="transform transition duration-500 ease-custom"
        enter-class="-translate-y-1/2 scale-y-0 opacity-0"
        enter-to-class="translate-y-0 scale-y-100 opacity-100"
        leave-active-class="transform transition duration-500 ease-custom"
        leave-class="translate-y-0 scale-y-100 opacity-100"
        leave-to-class="-translate-y-1/2 scale-y-0 opacity-0"
      >
        <ul
          class="absolute top-20 w-full h-screen flex flex-col bg-gray-100 divide-y text-center"
          v-show="isDropdownExpanded"
          @click="isDropdownExpanded = !isDropdownExpanded"
        >
          <li class="dropdown-button">Home</li>
          <li class="dropdown-button">Nosotros</li>
          <li class="dropdown-button">Contacto</li>
          <li class="dropdown-button">Equipo</li>
          <li class="dropdown-button">Donaciones</li>
          <li class="dropdown-button">Otros</li>
        </ul>
      </transition>
    </div>
  </div>
</template>

<script>
import useScreen from '../use/screen.js';
import { ref, onMounted } from 'vue';

export default {
  name: 'Navbar',
  setup() {
    const isDropdownExpanded = ref(false);

    const isOthersDropdownExpanded = ref(false);

    const { screenSize } = useScreen();

    onMounted(() => {
      /* close all dropdowns when clicking outside navbar */
      document.querySelector('#content').addEventListener('click', () => {
        isDropdownExpanded.value = false;
        isOthersDropdownExpanded.value = false;
      });
    });

    return { isDropdownExpanded, isOthersDropdownExpanded, screenSize };
  },
};
</script>

<style scoped>
.dropdown-button {
  @apply py-8 transition duration-100 ease-in-out focus:bg-gray-200 sm:hover:bg-gray-200 cursor-pointer;
}

.others-dropdown-button {
  @apply px-4 py-2 text-center hover:bg-gray-200;
}

.navbar-button {
  @apply h-full flex items-center px-4 hover:scale-x-110 transition-transform duration-100 ease-in;
}
</style>
