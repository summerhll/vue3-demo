<template>
  <div class="container">
    <global-header :user="currentUser"></global-header>
    <column-list :list="list"></column-list>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import "bootstrap/dist/css/bootstrap.min.css";
import ColumnList, { ColumnProps } from "./components/ColumnList.vue";
import GlobalHeader, { UserProps } from "./components/GlobalHeader.vue";

const testData: ColumnProps[] = [
  {
    id: 1,
    title: "test1的专栏",
    description: "这是test1的专栏，有一段非常有意思的简介，可以更新以下哦",
    avatar: "http://img.souche.com/BD1EA7E7-C450-4B42-A641-6A348CCF2609.jpg",
  },
  {
    id: 2,
    title: "test2的专栏",
    description: "这是test2的专栏，有一段非常有意思的简介，可以更新以下哦",
    avatar: "http://img.souche.com/BD1EA7E7-C450-4B42-A641-6A348CCF2609.jpg",
  },
  {
    id: 3,
    title: "test3的专栏",
    description: "这是test3的专栏，有一段非常有意思的简介，可以更新以下哦",
    avatar: "http://img.souche.com/BD1EA7E7-C450-4B42-A641-6A348CCF2609.jpg",
  },
  {
    id: 4,
    title: "test4的专栏",
    description: "这是test4的专栏，有一段非常有意思的简介，可以更新以下哦",
  },
];

const currentUser: UserProps = {
  isLogin: true,
  name: "小栗子"
};

export default defineComponent({
  name: "App",
  components: {
    ColumnList,
    GlobalHeader,
  },
  setup() {
    return {
      list: testData,
      currentUser: currentUser,
    };
  },
});
</script>
