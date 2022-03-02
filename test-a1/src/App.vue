<template>
  <v-app>
    <v-main>
      <ProductData/>
    </v-main>
  </v-app>
</template>

<script>
import ProductData from './components/ProductData';

export default {
  name: 'App',

  components: {
    ProductData
  },

  data: () => ({
    //
  }),
};
</script>
