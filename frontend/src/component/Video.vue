<template>
    <Main v-bind:category="category" v-bind:pageCategory="pageCategory"/>
   </template>
   <script setup>
   import Main from '../component/Main.vue';
   import { onMounted, ref } from 'vue';
   import { createListResource,createDocumentResource, createResource, Button,} from 'frappe-ui'
   const category = ref('Video')
   const pageCategory=('Video Notes')
   </script>
   