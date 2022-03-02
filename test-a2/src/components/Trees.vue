<template>
  <v-card class="mx-auto" max-width="700">
    <v-list>
      <br />
      資料參考:<br />
      GroupAA: {{ GroupAA }} <br />
      GroupBB: {{ GroupBB }} <br />
      GroupAA_Node1: {{ GroupAA_Node1 }} <br />
      GroupAA_Node2: {{ GroupAA_Node2 }} <br />
      GroupAA_Node1_2: {{ GroupAA_Node1_2 }} <br />

      <br />

      <v-list>
        <v-list-group
          v-for="item in Groups"
          :key="item.title"
          v-model="item.active"
          :prepend-icon="item.action"
          no-action
        >
          <template v-slot:activator>
            <v-list-item-content>
              <v-list-item-title v-text="item.title"></v-list-item-title>
            </v-list-item-content>
          </template>

          <!-- <v-list-item
          v-for="child in item.items"
          :key="child.title"
        >
          <v-list-item-content>
            <v-list-item-title v-text="child.title"></v-list-item-title>
          </v-list-item-content>
        </v-list-item> -->

          <!-- item 裡面的 items -->
          <v-list-group
            v-for="child in item.items"
            :key="child.title"
            v-model="child.active"
            :prepend-icon="item.action"
            no-action
            sub-group
          >
            <template v-slot:activator>
              <v-list-item-content>
                <v-list-item-title v-text="child.title"></v-list-item-title>
              </v-list-item-content>
            </template>

            <!-- <v-list-item
            v-for="child2 in child.items"
            :key="child2.title"
          >
            <v-list-item-content>
              <v-list-item-title v-text="child2.title"></v-list-item-title>
            </v-list-item-content>
          </v-list-item> -->
            <!-- child2 裡的 items-->
            <v-list-group
              v-for="child2 in child.items"
              :key="child2.title"
              v-model="child2.active"
              :prepend-icon="child2.action"
              no-action
              sub-group
            >
              <template v-slot:activator>
                <v-list-item-content>
                  <v-list-item-title v-text="child2.title"></v-list-item-title>
                </v-list-item-content>
              </template>

              <v-list-item v-for="child3 in child2.items" :key="child3.title">
                <v-list-item-content>
                  <v-list-item-title v-text="child3.title"></v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </v-list-group>
          </v-list-group>
        </v-list-group>
      </v-list>

      {{ Groups }}
      
    </v-list>
  </v-card>
</template>

<script>
export default {
  name: "Trees",

  data: () => ({
    MainGroup,
    SubGroup,
    Groups: [],
    GrouptName: [{ name: "GroupAA" }, { name: "GroupBB" }],
    GroupAA: [],
    GroupBB: [],
    GroupAA_Node1: [],
    GroupAA_Node2: [],
    GroupAA_Node1_2: [],
    items: [
      {
        items: [
          {
            items: [
              {
                title: "Prod1_1",
              },
              {
                items: [{ title: "Prod1_2_1" }],
                title: "Prod1_2",
              },
            ],
            title: "Prod1",
          },
          {
            items: [{ title: "Prod2_2" }],
            title: "Prod2",
          },
        ],
        title: "GroupAA",
      },
      {
        items: [{ title: "Prod4" }],
        title: "GroupBB",
      },
    ],
  }),
  methods: {
    trees: function () {
      // GROUP 分組
      for (var i = 0; i < MainGroup.items.length; i++) {
        if (MainGroup.items[i][0] == "GroupAA") {
          this.GroupAA.push({ title: MainGroup.items[i][1] });
        } else {
          this.GroupBB.push({ title: MainGroup.items[i][1] });
        }
        // 最後一次時放入title
        if (i == MainGroup.items.length - 1) {
          this.GroupAA.push({ title: "GroupAA" });
          this.GroupBB.push({ title: "GroupBB" });
        }
      }

      // NODE分組
      // 根據 GROUP 分組分出的項目，再分成三個子節點
      for (var j = 0; j < SubGroup.items.length; j++) {
        if (SubGroup.items[j][1] == this.GroupAA[0].title) {
          this.GroupAA_Node1.push({ title: SubGroup.items[j][0] });
        } else if (SubGroup.items[j][1] == this.GroupAA[1].title) {
          this.GroupAA_Node2.push({ title: SubGroup.items[j][0] });
        } else {
          this.GroupAA_Node1_2.push({ title: SubGroup.items[j][0] });
        }
      }

      // this.Groups.push({
      //   items: [
      //     {
      //       title: "GroupAA",
      //       groups: [this.GroupAA, { node: this.GroupAA_Node1 }],
      //     },
      //     { title: "GroupBB", groups: this.GroupBB },
      //   ],
      // });
      this.Groups.push(
        {
          items: [
            {
              items: [
                {
                  title: this.GroupAA_Node1[0].title,
                },
                {
                  items: [{ title: this.GroupAA_Node1_2[0].title }],
                  title: this.GroupAA_Node1[1].title,
                },
              ],
              title: this.GroupAA[0].title,
            },
            {
              items: [
                {
                  title: this.GroupAA_Node2[0].title,
                },
              ],
              title: this.GroupAA[1].title,
            },
          ],
          title: this.GroupAA[2].title,
        },
        {
          items: [
            {
              title: this.GroupBB[0].title,
            },
          ],
          title: this.GroupBB[1].title,
        }
      );
    },
  },

  mounted() {
    this.trees();
  },
};

export const MainGroup = {
  fields: ["GroupID", "ProdID"],
  kind: ["String", "String"],
  items: [
    ["GroupAA", "Prod1"],
    ["GroupBB", "Prod4"],
    ["GroupAA", "Prod2"],
  ],
};

export const SubGroup = {
  fields: ["GroupID", "ParentGroupID", "Level"],
  kind: ["String", "String", "Int32"],
  items: [
    ["Prod1_1", "Prod1", 2],
    ["Prod1_2", "Prod1", 2],
    ["Prod1_2_1", "Prod1_2", 3],
    ["Prod2_2", "Prod2", 2],
  ],
};
</script>
