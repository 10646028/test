<template>
  <v-container id="input-usage" fluid>
    <v-row>
      <v-col cols="12"><h2>Production Data</h2></v-col>
      <v-col cols="12">
        <v-card class="mx-auto" outlined >
          <v-list-item three-line>
            <v-list-item-content>
              <v-list-item-title class="text-h5 mb-1">Information</v-list-item-title>
              <Information class="information"/>

              <v-tabs
                v-model="tab"
                background-color="transparent"
                color="basil"
              >
                <v-tab v-for="item in tabs" :key="item">
                  {{ item }}
                </v-tab>
              </v-tabs>

              <v-tabs-items v-model="tab">
                <v-tab-item>
                  <v-card color="basil" flat>
                    <v-card-text><Base /></v-card-text>
                  </v-card>
                </v-tab-item>
                <v-tab-item>
                  <v-card color="basil" flat>
                    <v-card-text><Detail /></v-card-text>
                  </v-card>
                </v-tab-item>
              </v-tabs-items>
              
            </v-list-item-content>
          </v-list-item>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import Information from "@/components/Information";
import Detail from "@/components/Detail";
import Base from "@/components/Base";

export default {
  name: "ProductData",
  components: {
    Information,
    Detail,
    Base,
  },
  data: () => ({
    tab: null,
    tabs: ["Base Information", "Detail"],
  }),
};
</script>
<style lang="scss" scoped>
.container, .v-card {
  background: #EEEEEE;
}
.v-card{
  box-shadow: 3px #000000;
}
</style>
<style>
.v-text-field__details {
    display: none;
}
.white{
  background: #FFF;
}
.v-input__slot{
  margin-bottom: 0 !important;
}
.gray{
  background: #EEEEEE;
}
</style>