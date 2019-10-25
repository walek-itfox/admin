<template>
<v-app>
  <v-app-bar app dark color="blue-grey darken-4">
    <v-app-bar-nav-icon
      @click="drawer = !drawer"
      class="hidden-md-and-up"
    >

    </v-app-bar-nav-icon>

    <v-toolbar-title>
        <router-link to="/" tag="span" class="pointer">Crypto</router-link>
    </v-toolbar-title>

    <v-spacer></v-spacer>
    
    <v-menu offset-y origin="center center" :nudge-bottom="10" transition="scale-transition" v-if="userLogedIn">
      <template v-slot:activator="{ on }">
      <v-btn icon large slot="activator" :ripple="false" v-on="on">
        <v-avatar size="42px">
          <img src="https://avataaars.io/?avatarStyle=Circle&topType=ShortHairShortFlat&accessoriesType=Sunglasses&hairColor=Black&facialHairType=Blank&clotheType=CollarSweater&clotheColor=Black&eyeType=Default&eyebrowType=Default&mouthType=Smile&skinColor=Light"/>
        </v-avatar>
      </v-btn>
      
        </template>
      <v-list>
        <v-list-item
          ripple="ripple"
          @click="logout">
          <v-list-item-action>
            <v-icon>exit_to_app</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Log Out</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
      
    </v-menu>
    
    
    <v-toolbar-items v-if="!userLogedIn">
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
  <template v-if="error">
      <v-snackbar
        color="error"
        :multi-line="true"
        :timeout="5000"
        @input="closeError"
        :value="true"
      >
        {{ error }}
        <v-btn
          dark
          text
          @click="closeError"
        >
          Close
        </v-btn>
      </v-snackbar>
    </template>

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
        
      ]
    }
  },
  computed: {
    userLogedIn () {
      return this.$store.getters.isAuthenticated
    },
    error () {
      return this.$store.getters.error
    }
  },
  methods: {
    logout () {
      this.$store.dispatch('logout')
      this.$router.replace('/login')
    },
    closeError () {
      this.$store.dispatch('clearError')
    }
  }
}
</script>

<style scoped>
  .pointer {
    cursor: pointer;
  }
</style>
