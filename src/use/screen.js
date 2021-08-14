import { ref, computed } from 'vue';

/* valid screen sizes:
 * 'sm': > 640px
 * 'md': > 768px
 * 'lg': > 1024px
 * 'xl': > 1280px
 * '2xl': > 1536px
 */

const state = ref('');

const updateScreenState = (e) => {
  if (window.innerWidth < 640) {
    state.value = '';
  } else if (window.innerWidth >= 640 && window.innerWidth < 768) {
    state.value = 'sm';
  } else if (window.innerWidth >= 768 && window.innerWidth < 1024) {
    state.value = 'md';
  } else if (window.innerWidth >= 1024 && window.innerWidth < 1280) {
    state.value = 'lg';
  } else if (window.innerWidth >= 1280 && window.innerWidth < 1536) {
    state.value = 'xl';
  } else if (window.innerWidth >= 1536) {
    state.value = '2xl';
  }
};

const screenSize = computed({
  get: () => state.value,
});

export default function useScreen() {
  return {
    screenSize,
    updateScreenState,
  };
}
