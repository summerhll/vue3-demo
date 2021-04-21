<template>
  <div class="container">
    <global-header :user="currentUser"></global-header>
    <!-- <column-list :list="list"></column-list> -->
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import "bootstrap/dist/css/bootstrap.min.css";

import GlobalHeader, { UserProps } from "./components/GlobalHeader.vue";


const currentUser: UserProps = {
  isLogin: true,
  name: "小栗子"
};

export default defineComponent({
  name: "App",
  components: {
   
    GlobalHeader,
  },
  setup() {
    return {
     
      currentUser: currentUser,
    };
  },
});
</script>
