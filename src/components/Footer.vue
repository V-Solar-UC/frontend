<template>
  <div class="flex flex-col bg-gray-50 w-full h-48 text-center">
    <div class="text-center w-full h-full flex flex-col items-center justify-center space-y-5 pt-6">
      <button class="btn-red-round">conocenos</button>
      <div class="flex flex-row justify-between space-x-6 mt-6">
        <a href="https://github.com/V-Solar-UC">
          <font-awesome-icon :icon="['fab', 'github']" class="icon" />
        </a>
        <a href="https://instagram.com/vsolar_uc">
          <font-awesome-icon :icon="['fab', 'instagram']" class="icon" />
        </a>
        <a href="https://www.linkedin.com/company/v-solar-uc">
          <font-awesome-icon :icon="['fab', 'linkedin']" class="icon" />
        </a>
        <a href="mailto:v-solar@ing.puc.cl">
          <font-awesome-icon :icon="['far', 'envelope']" class="icon" />
        </a>
      </div>
    </div>
    <div class="text-center w-full bg-red-500 text-base py-2 text-white">
      V-Solar {{ year }} @ Todos los derechos reservados
    </div>
  </div>
</template>

<script>
export default {
  name: 'Footer',
  components: {},
  setup() {
    const year = new Date().getFullYear();
    return { year };
  },
};
</script>

<style>
.icon {
  @apply text-3xl;
}
</style>

