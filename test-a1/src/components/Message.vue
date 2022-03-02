<template>
  <div class="text-center">
    <v-dialog v-model="dialog" width="500">
      <template v-slot:activator="{ on, attrs }">
        <v-btn elevation="2" v-bind="attrs" v-on="on">
          {{ base[0]["data"][11].btn }}
        </v-btn>
      </template>

      <v-card>
        <v-card-text class="message-dialog">
          {{ base[0]["data"][11].key }} is {{ base[0]["data"][11].value }}
        </v-card-text>

        <v-divider></v-divider>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="primary" text @click="dialog = false"> OK </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
export default {
  data() {
    return {
      dialog: false,
      base,
    };
  },
};

export const base = [
  {
    data: [
      { key: "Type", value: "Production" },
      { key: "Sub Type", value: "Production" },
      { key: "Last Claimed TS", value: "2021-10-13-01.27.00.498213" },
      { key: "Lot Status", value: "Waiting", btn: "Info" },
      { key: "Flow Batch ID", value: "" },
      { key: "Description", value: "This is Production Desc" },
      { key: "Lot Owner ID", value: "MFG", btn: "Gate Pass >>" },
      { key: "Lot Cost Owner ID", value: "MFG", btn: "Inter Bay Xfer" },
      { key: "Lot Owner Dept", value: "MFG", btn: "Stock Out" },
      { key: "Count", value: "1" },
      { key: "Color", value: "Red" },
      { key: "Status", value: "Prepare", btn: "Info" },
    ],
  },
];
</script>
<style scoped>
.message-dialog {
  padding-top: 1.5rem !important;
  font-size: 1.5rem;
}
</style>
