<template>
 <Main v-bind:category="category" v-bind:pageCategory="pageCategory"/>
</template>
<script setup>
import Main from '../component/Main.vue';
import { onMounted,ref } from 'vue';
const category = ref('')
const pageCategory = ('All Notes')

</script>
