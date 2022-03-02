<template>
  <v-container fluid>
    <v-row>
      <v-col cols="12">
        <v-list-item three-line>
          <v-list-item-content>
            <v-col cols="2">{{ base[0]["data"][0].key }}</v-col>
            <v-col cols="3">
              <v-text-field
                value="Production"
                outlined
                dense
                readonly
                filled
              ></v-text-field>
            </v-col>
            <v-col cols="1"></v-col>

            <v-col cols="2">{{ base[0]["data"][11].key }}</v-col>
            <v-col cols="3">
              <v-text-field
                value="Prepare"
                outlined
                dense
                readonly
                filled
              ></v-text-field>
            </v-col>
            <v-col cols="1">
              <Message />
            </v-col>

            <v-col cols="2">{{ base[0]["data"][1].key }}</v-col>
            <v-col cols="3">
              <v-text-field
                value="Production"
                outlined
                dense
                readonly
                filled
              ></v-text-field>
            </v-col>
            <v-col cols="1"></v-col>

            <v-col cols="2">{{ base[0]["data"][5].key }}</v-col>
            <v-col cols="3">
              <v-text-field
                value="This is Production Desc"
                outlined
                dense
                readonly
                filled
              ></v-text-field>
            </v-col>
            <v-col cols="1"></v-col>

            <v-col cols="2">{{ base[0]["data"][2].key }}</v-col>
            <v-col cols="3">
              <v-text-field
                value="2021-10-13-01.27.00.498213"
                outlined
                dense
                readonly
                filled
              ></v-text-field>
            </v-col>
            <v-col cols="1"></v-col>

            <v-col cols="2">{{ base[0]["data"][9].key }}</v-col>
            <v-col cols="1">
              <v-text-field
                value="1"
                outlined
                dense
                readonly
                filled
              ></v-text-field>
            </v-col>
            <v-col cols="1">{{ base[0]["data"][10].key }}</v-col>
            <v-col cols="1">
              <v-text-field
                value="Red"
                outlined
                dense
                readonly
                filled
              ></v-text-field>
            </v-col>
            <v-col cols="1">
              <v-btn elevation="2" disabled>
                {{ base[0]["data"][11].btn }}
              </v-btn>
            </v-col>
          </v-list-item-content>
        </v-list-item>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import Message from "@/components/Message";

export default {
  name: "Base",
  components: {
    Message,
  },
  data: () => ({
    base,
  }),
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
p {
  line-height: 1rem;
}
</style>