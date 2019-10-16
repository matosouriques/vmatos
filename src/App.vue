<template>
  <v-app app>
    <v-content>
      <Navbar />
      <Calendar />
    </v-content>
  </v-app>
</template>

<script>
import Navbar from "@/components/Navbar";
import Calendar from "@/components/Calendar";

export default {
  name: "App",
  components: {
    Navbar,
    Calendar
  },
  data: () => ({
    //
  })
};
</script>
