<template>
  <v-container fluid>
    <v-row>
      <v-col cols="12">
        <v-list-item three-line>
          <v-list-item-content>
            <v-col cols="2">{{ detail[0]["data"][0].key }}</v-col>
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
            <v-col cols="2">{{ detail[0]["data"][3].key }}</v-col>
            <v-col cols="3">
              <v-text-field
                value="Waiting"
                outlined
                dense
                readonly
                filled
              ></v-text-field>
            </v-col>
            <v-col cols="1"></v-col>

            <v-col cols="2">{{ detail[0]["data"][1].key }}</v-col>
            <v-col cols="3">
              <v-text-field
                value="Production"
                outlined
                dense
                readonly
                filled
              ></v-text-field> </v-col
            ><v-col cols="1"></v-col>

            <v-col cols="5" >
              Status List
              <v-simple-table class="statusTable">
                <template v-slot:default>
                  <thead>
                    <tr>
                      <th class="text-left gray">StateName</th>
                      <th class="text-left gray">StateValue</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr
                      v-for="item in detail[0]['data'][5].value"
                      :key="item.StateName"
                    >
                      <td>{{ item.StateName }}</td>
                      <td>{{ item.StateValue }}</td>
                    </tr>
                  </tbody>
                </template>
              </v-simple-table>
            </v-col><v-col cols="1"></v-col>

            <v-col cols="2">{{ detail[0]["data"][2].key }}</v-col>
            <v-col cols="3">
              <v-text-field
                value="2020-07-04-11.43.00.000213"
                outlined
                dense
                readonly
                filled
              ></v-text-field> </v-col
            ><v-col cols="1"></v-col>

            <v-col cols="6"></v-col>

            <v-col cols="2">{{ detail[0]["data"][4].key }}</v-col>
            <v-col cols="3">
              <v-text-field
                value=""
                outlined
                dense
                readonly
                filled
              ></v-text-field> </v-col
            ><v-col cols="1"></v-col>

            <v-col cols="6"></v-col>
          </v-list-item-content>
        </v-list-item>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "Information",

  data: () => ({
    detail,
  }),
};

export const detail = [
  {
    data: [
      { key: "Type", value: "Production" },
      { key: "Sub Type", value: "Production" },
      { key: "Due TS", value: "2020-07-04-11.43.00.000213" },
      { key: "Current Status", value: "Waiting" },
      { key: "Bank ID", value: "" },
      {
        key: "Status List",
        value: [
          { StateName: "Previous State", StateValue: "ACTIVE" },
          { StateName: "Test State", StateValue: "Always OK" },
        ],
      },
    ],
  },
];
</script>
<style lang='scss' scoped>
.statusTable{
  margin-top: 10px;
  border: 0.5px solid #CCC;
  th, td{
    border: 0.5px solid #CCC;
  }
}
</style>
