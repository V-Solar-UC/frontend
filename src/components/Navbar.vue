<template>
  <div class="fixed z-50 flex items-center w-full h-20 bg-gray-100">
    <div class="relative w-full h-full">
      <img
        src="../assets/img/vsolar-logo.png"
        class="absolute w-16 cursor-pointer h-11 top-4 left-4"
      />

      <div
        v-if="['', 'sm'].includes(screenSize)"
        class="absolute w-12 h-12 cursor-pointer top-5 right-5"
        @click="isDropdownExpanded = !isDropdownExpanded"
      >
        <div v-if="!isDropdownExpanded" class="flex flex-col w-full h-full divide-y-2 divide-black">
          <div v-for="i in 4" :key="i" class="flex-grow w-full"></div>
        </div>
        <div v-else class="flex items-center justify-center h-full mt-1 text-3xl font-thin">X</div>
      </div>

      <div
        v-else
        class="absolute flex flex-row items-center justify-center h-full ml-32 text-lg font-semibold cursor-pointer right-16"
      >
        <div class="navbar-button">Noticias</div>
        <div class="navbar-button">Equipo</div>
        <div class="navbar-button">Nosotros</div>
        <div class="navbar-button">Donaciones</div>
        <div class="navbar-button">Contacto</div>
        <div
          class="relative flex flex-row justify-center navbar-button"
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
        enter-class="opacity-0 -translate-y-1/2 scale-y-0"
        enter-to-class="opacity-100 translate-y-0 scale-y-100"
        leave-active-class="transform transition duration-500 ease-custom"
        leave-class="opacity-100 translate-y-0 scale-y-100"
        leave-to-class="opacity-0 -translate-y-1/2 scale-y-0"
      >
        <ul
          v-show="isDropdownExpanded"
          class="absolute flex flex-col w-full h-screen text-center bg-gray-100 top-20 divide-r"
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
import { ref, onMounted } from 'vue';
import useScreen from '../use/screen';

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
  @apply py-8 transition duration-100 ease-in-out focus:bg-gray-200 
        sm:hover:bg-gray-200 cursor-pointer;
}

.others-dropdown-button {
  @apply px-4 py-2 text-center hover:bg-gray-200;
}

.navbar-button {
  @apply h-full flex items-center px-4 hover:scale-x-110 transition-transform duration-100 ease-in;
}
</style>
