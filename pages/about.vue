<template>
  <div class="d-flex justify-space-around align-center flex-column flex-sm-row fill-height">
    <v-btn flat="">
      Normal
    </v-btn>

    <v-btn
        flat=""
        color="secondary"
    >
      Secondary55
    </v-btn>

    <v-btn
        flat=""
        color="error"
    >
      Error
    </v-btn>

    <v-btn
        flat=""
        disabled
    >
      Disabled
    </v-btn>
  </div>
</template>

<script>
export default {
  name: "About"
}
</script>

<style scoped>

</style>
