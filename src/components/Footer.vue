<template>
  <div class="flex flex-col bg-red-200 w-full h-48 text-center">
    <div class="text-center w-full flex-grow flex flex-col items-center justify-center">
      <div class="btn-red-round">conocenos</div>
      <div class="flex flex-row justify-between w-48 mt-6">
        <div>gh</div>
        <div>twitter</div>
        <div>linkedin</div>
      </div>
    </div>
    <div class="text-center w-full bg-red-500">
      V-Solar {{ year }} @ Todos los derechos reservados
    </div>
  </div>
</template>

<script>
export default {
  name: 'Footer',
  components: {},
  setup() {
    const year = 2021; // TODO: get current year
    return { year };
  },
};
</script>
