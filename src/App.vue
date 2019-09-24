<template>
<v-app>
  <v-navigation-drawer
    app
    temporary
    v-model="drawer"
  >
    <v-list dense>
      <v-subheader>MENU</v-subheader>
      <v-list-item-group color="primary" v-if="userLogedIn">
        <v-list-item
          v-for="item in linksAuth"
          :key="item.title"
          :to="item.url"
        >
          <v-list-item-icon>
            <v-icon v-text="item.icon"></v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title v-text="item.title"></v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list-item-group>
      <v-list-item-group color="primary" v-else>
        <v-list-item
          v-for="item in links"
          :key="item.title"
          :to="item.url"
        >
          <v-list-item-icon>
            <v-icon v-text="item.icon"></v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title v-text="item.title"></v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item
          @click="logout"
        >
          <v-list-item-icon>
            <v-icon>how_to_reg</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>LogOut</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list-item-group>
    </v-list>
  </v-navigation-drawer>
  <v-app-bar app dark color="primary">
    <v-app-bar-nav-icon
      @click="drawer = !drawer"
      class="hidden-md-and-up"
    >

    </v-app-bar-nav-icon>

    <v-toolbar-title>
        <router-link to="/" tag="span" class="pointer">Admin panel</router-link>
    </v-toolbar-title>

    <v-spacer></v-spacer>
    <v-toolbar-items class="hidden-sm-and-down" v-if='userLogedIn'>
      <v-btn
        text
        v-for="link in linksAuth"
        :key="link.title"
        :to="link.url"
      >
        <v-icon left>{{link.icon}}</v-icon>
        {{link.title}}
      </v-btn>
      <v-btn
        text
        @click="logout"
      >
        <v-icon left>how_to_reg</v-icon>
        LogOut
      </v-btn>
    </v-toolbar-items>
    <v-toolbar-items class="hidden-sm-and-down" v-else>
      <v-btn
        text
        v-for="link in links"
        :key="link.title"
        :to="link.url"
      >
        <v-icon left>{{link.icon}}</v-icon>
        {{link.title}}
      </v-btn>
    </v-toolbar-items>
  </v-app-bar>
  <v-content>
    <router-view></router-view>
  </v-content>
</v-app>
</template>

<script>
/* eslint-disable */
export default {
  data () {
    return {
      drawer: false,
      links: [
        {
          icon: "how_to_reg",
          title: "Login",
          url: "/login"
        }
      ],
      linksAuth: [
        {
          icon: "people",
          title: "Users",
          url: "/users"
        },
        {
          icon: "person_add",
          title: "New user",
          url: "/create"
        },
        {
          icon: "person_add",
          title: "Events",
          url: "/events"
        }
      ]
    }
  },
  computed: {
    userLogedIn () {
      return this.$store.getters.user != null
    }
  },
  methods: {
    logout () {
      this.$store.dispatch('logout')
      this.$router.replace('/login')
    }
  }
}
</script>

<style scoped>
  .pointer {
    cursor: pointer;
  }
</style>
