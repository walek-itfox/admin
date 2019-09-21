<template>
<v-app>
  <v-navigation-drawer app temporary>
  </v-navigation-drawer>
  <v-app-bar app dark color="primary">
    <v-app-bar-nav-icon></v-app-bar-nav-icon>

    <v-toolbar-title>Admin panel</v-toolbar-title>

    <v-spacer></v-spacer>
    <v-toolbar-items>
      <v-btn flat text>
        Link 1
      </v-btn>

      <v-btn flat text>
        Link 2
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
  
}
</script>

<style>

</style>
