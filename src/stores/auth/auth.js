import { defineStore } from 'pinia';
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import api from '@/axios/index';

const useAuthStore = defineStore(
  'useAuthStore',
  () => {
    const router = useRouter();

    const token = ref('');

    async function loginHandler(form) {
      try {
        const { data } = await api.post('/login', form);

        if (data.success) {
          token.value = form.token;
          router.push('/console/udemy');
        }
      } catch (error) {
        console.log(error);
      }
    }

    function logoutHandler() {
      token.value = '';
      router.push('/');
    }

    return {
      token,
      logoutHandler,
      // async
      loginHandler,
    };
  },
  {
    persist: {
      key: 'auth',
      paths: ['token'],
    },
  }
);

export default useAuthStore;
