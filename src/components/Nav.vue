<template>
    <v-app-bar
        absolute
        color="primary"
        elevate-on-scroll
        height="120"
        scroll-target="#scrolling-techniques-7"
    >
      <v-img
          class="mx-2"
          src="../assets/logo.png"
          max-height="100"
          max-width="100"
          contain
      ></v-img>
      <v-toolbar-items>
        <v-btn text color="white">Bureau</v-btn>
        <v-btn text color="white">Effectif</v-btn>
        <v-btn text color="white">Championnats</v-btn>
        <v-btn text color="white">Buteurs</v-btn>
      </v-toolbar-items>

      <v-spacer></v-spacer>

      <v-btn color="white" icon x-large>
        <v-icon>mdi-account-circle</v-icon>
      </v-btn>
    </v-app-bar>
</template>

<script>

export default {
  name: 'Nav',

  data: () => ({

  }),
};
</script>