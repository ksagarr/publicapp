<template>
  <div class="max-w-7xl mx-auto flex ml-2">
    <div class="w-64 flex-shrink-0 max-h-screen overflow-y-auto p-4">
      <router-link :to="{ name: 'Home' }" class="flex items-center mb-5">
        <i class="ri-user-shared-line text-violet-500 mr-3"></i>
        <span class="text-lg font-semibold">Welcome To,{{ UserName }}</span>
      </router-link>
      <ul class="mt-2">
        <li class="group active"><router-link :to="{ name: 'Project' }"
            class="py-1.5 flex items-center px-4 text-gray-600 hover:text-gray-800 rounded-md group-[.active]: bg-gray-300">
            <i class="ri-notion-line mr-2"></i>
            <span>Project</span>
            <div
              class="ml-auto h-8 w-8 flex items-center justify-center text-Indigo-400 font-bold rounded-md bg-pink-400">{{
                totalCategoryCount.Project }}</div>
          </router-link>
        </li>

        <li class="group"><router-link :to="{ name: 'Meeting' }" class="py-1.5 flex items-center px-4 text-gray-600 hover:text-gray-800 rounded-md">
            <i class="ri-slideshow-4-fill mr-2"></i>
            <span>Meeting</span>
            <div
              class="ml-auto h-8 w-8 flex items-center justify-center text-Indigo-400 font-bold rounded-md bg-pink-400">{{
                totalCategoryCount.Meeting }}</div>

          </router-link>
        </li>

        <li class="group"><router-link :to="{ name: 'Work' }" class="py-1.5 flex items-center px-4 text-gray-600 hover:text-gray-800 rounded-md">
            <i class="ri-booklet-fill mr-2"></i>
            <span>Working</span>
            <div
              class="ml-auto h-8 w-8 flex items-center justify-center text-Indigo-400 font-bold rounded-md bg-pink-400 ">
              {{ totalCategoryCount.Work }}</div>
          </router-link>
        </li>

        <li class="group"><router-link :to="{ name: 'General' }"
            class="py-1.5 flex items-center px-4 text-gray-600 hover:text-gray-800 rounded-md">
            <i class="ri-sticky-note-add-fill mr-2"></i>
            <span>General</span>
            <div
              class="ml-auto h-8 w-8 flex items-center justify-center text-Indigo-400 font-bold rounded-md bg-pink-400">
              {{ totalCategoryCount.General }}</div>
          </router-link>
        </li>

        <li class="group"><router-link :to="{ name: 'Video' }" class="py-1.5 flex items-center px-4 text-gray-600 hover:text-gray-800 rounded-md">
            <i class="ri-folder-video-fill mr-2"></i>
            <span>Video</span>
            <div
              class="ml-auto h-8 w-8 flex items-center justify-center text-Indigo-400 font-bold rounded-md bg-pink-400">{{
                totalCategoryCount.Video }}</div>
          </router-link>
        </li>
      </ul>
    </div>
    <main id="" class="w-full py-4 ml-3">
      <div class="py-2 px-4 bg-white rounded-lg shadow-sm shadow-black/5 mr-3">
        <form action="" class="flex items-center max-w-xs w-full">
          <i class="ri-search-line text-Slate-400 flex-shrink-0 mr-3"></i>
          <input type="text" id="searchInput" class="border-0 focus:ring-0" placeholder="Search" v-model="search">
        </form>
          <ul id="selectOptionItem" class="ml-6 py-2 px-4 bg-white" v-show="autocompleteFunction">
            <li v-for="data in autocompleteFunction" @click="selectOption(data.title)">{{ data.title }}</li>
          </ul>
      </div>
      <div class="flex justify-between">
        <div class="p-4 text-slate-700 flex items-center">
          <i class="ri-booklet-fill mr-1 text-[18px]"></i>
          <span class="font-bold">{{ props.pageCategory }}</span>
        </div>
        <router-link :to="{ name: 'Texteditor' }" class="p-4 text-slate-700 flex items-center mr-2">
          <i class="ri-sticky-note-add-fill ri-booklet-fill mr-1 text-[18px]"></i>
          <span class="font-bold">Add Note</span>
        </router-link>
      </div>
      <div id="searchItem">
        <div @click="openEditor(data)" role="button" v-for="data in searchValues" :key="data.name"
          class="py-8 mt-8 px-4 bg-[#10559A] bg-opacity-20 rounded-lg shadow-sm shadow-black/5 mr-3 max-h-40  overflow-y-hidden text-ellipsis">
          <h1 class="mb-5 2.25em font-bold">{{ data.title }}</h1>
          <div class="text-gray-900" v-html="data.description"></div>
        </div>
        <div></div>
      </div>
      <Button  v-show="['Project', 'Work', 'Meeting', 'General', 'Video'].includes(props.category)" :variant="'solid'" theme="gray" size="md" label="Button" :loading="false" :loadingText="null" class="mt-3 float-right mr-5">
        <router-link :to="{ name: 'Home' }">Home</router-link>
    </Button>
    </main>
  </div>
</template>

<script setup>
import { createListResource, createResource } from 'frappe-ui';
import { session } from '../data/session';
import { ref, onMounted, computed } from 'vue';
import route from '../router'
document.head.innerHTML += `<link href="https://cdn.jsdelivr.net/npm/remixicon@4.2.0/fonts/remixicon.css" rel="stylesheet"/>`
let props = defineProps({
  category: String,
  pageCategory: String
})

const emit = defineEmits(['category', 'pageCategory'])
let search = ref('')
let UserName=ref('')
let res = ref([]);
let selectedOption = ref(null);
let filters = { category: props.category != null ? props.category : ''}
let totalCategoryCount = ref({})


const digitalNotes = createResource({
  url: '/api/method/frappe.client.get_list',
  params: {
    doctype: 'Digital Notes',
    filters: filters.category != '' ? filters : filters='' ,
    fields: ['*']
  },
})

onMounted(() => {
  data()
  countNotes()
  emit('category', props.category)
  emit('pageCategory', props.pageCategory)
  getUserName()

});

const countNotes = () => {

  const allCategory = ['Project', 'Work', 'Meeting', 'General', 'Video'];
  const promises = allCategory.map(async ele => {
    const digitalNotes = createResource({
      url: '/api/method/frappe.client.get_list',
      params: {
        doctype: 'Digital Notes',
        filters: { category: ele,user:session.user },
        fields: ['*']
      },
    });
    const res = await digitalNotes.fetch();
    totalCategoryCount.value[ele] = res.length
  });
}



const data = async () => {

  const res_data = await digitalNotes.fetch();
  console.log(res_data)
  res_data.forEach(element => {
    if(element.user==session.user)
      res.value.push(element)
  });
}



const openEditor = (data) => {
  route.push({
    name: 'Text', params: { 'name': data.name }, props: {
      description: data.description
    }
  },)
}
const searchValues = computed(() => {
  if (selectedOption.value) {
    search.value = selectedOption.value 
    selectedOption.value =null
    let items = document.getElementById('selectOptionItem')
    let searchitems = document.getElementById('searchInput')
    items.style.display = "none"
    return res.value.filter(item => item.title.toLowerCase().includes(search.value.toLowerCase()));
  }
  else { 
    return res.value.filter(item => item.title.toLowerCase().includes(search.value.toLowerCase()));
    
  }
});
const autocompleteFunction = computed(() => {
  if (search.value.length) {
    return res.value.filter(item => item.title.toLowerCase().includes(search.value.toLowerCase()));
  }
});


const selectOption = (option) => {
  selectedOption.value = option;
  
};

const getUserName = async () => {
  const user = createListResource({
      doctype: 'Employee',
      filters: { user_id: session.user },
      fields: ['*'],
      onSuccess(data) {
        if (data) {
          UserName.value=data[0].first_name
        }
      },
    
  }).fetch();
}
</script>

<style>
body {
  background-color: #f1f5f9;
}
</style>