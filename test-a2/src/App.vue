<template>
  <v-app>
    <v-main>
      <Trees/>
    </v-main>
  </v-app>
</template>

<script>
import Trees from './components/Trees';

export default {
  name: 'App',

  components: {
    Trees,
  },

  data: () => ({
    //
  }),
};
</script>
