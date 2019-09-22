<template>
  <v-container>
    <v-layout row>
      <v-flex xs12>
        <v-data-table
          :headers="headers"
          :items="users"
          sort-by="login"
          class="elevation-1"
        >
          <template v-slot:top>
            <v-toolbar flat color="white">
              <v-toolbar-title>Users list</v-toolbar-title>
              <v-divider
                class="mx-4"
                inset
                vertical
              ></v-divider>
              <div class="flex-grow-1"></div>
            </v-toolbar>
          </template>
          <template v-slot:item.action="{ item }">
            <v-icon
              small
              class="mr-2"
              @click="editItem(item)"
            >
              edit
            </v-icon>
            <v-icon
              small
              @click="deleteItem(item)"
            >
              delete
            </v-icon>
          </template>
        </v-data-table>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  data () {
    return {
      headers: [
        {
          text: 'Id',
          align: 'left',
          sortable: true,
          value: 'id',
        },
        { text: 'Login', value: 'login' },
        { text: 'Email', value: 'email' },
        { text: 'Password', value: 'password', sortable: false },
        { text: 'Actions', value: 'action', sortable: false }
      ]
    }
  },
  computed: {
    users () {
      return this.$store.getters.users
    }
  },
  methods: {
    editItem (item) {
       
    }
  }
}
</script>