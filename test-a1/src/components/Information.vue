<template>
  <v-container fluid>
    <v-row>
      <v-list-item>
        <v-list-item-content>
          <v-col cols="1"> Car ID :</v-col>
          <v-col cols="2">
            <v-text-field
              class="white"
              value="CAR111222"
              outlined
              dense
              readonly
            ></v-text-field>
          </v-col>

          <v-col cols="1"> Prod id</v-col>
          <v-col cols="2">
            <v-select :items="info['Prod ID']" label="Solo field" solo dense>
            </v-select>
          </v-col>

          <v-col cols="1"> Test Name</v-col>
          <v-col cols="2">
            <v-text-field
              class="white"
              value="ProdTestName"
              outlined
              dense
              readonly
            ></v-text-field></v-col
          ><v-col cols="2"><v-btn elevation="2">Query</v-btn> </v-col
          >
        </v-list-item-content>
      </v-list-item>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "Information",

  data: () => ({
    info: {
      "Car ID": "CAR111222",
      "Prod ID": ["ProdAABB.11", "ProdAABB.22"],
      "Test Name": "ProdTestName",
    },
  }),
};
</script>

