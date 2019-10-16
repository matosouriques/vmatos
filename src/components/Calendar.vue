<template>
  <v-container id="calendar">
    <v-sheet height="500">
      <v-calendar locale="pt-br" type="month" now="2019-10-11" value="2019-10-11" :events="events"></v-calendar>
    </v-sheet>
  </v-container>
</template>

<script>
export default {
  name: "Calendar",
  data() {
    return {};
  }
};
</script>

<style>
#calendar {
    margin: 60px 0px 0px 300px;
}
</style>