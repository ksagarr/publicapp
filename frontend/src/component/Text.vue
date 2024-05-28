<template>
  <div class="container mx-auto max-w-4xl my-3">
    <form @submit.prevent="submitForm" class="space-y-8">
      <input type="text" class="w-full border-0 outline-0 p-2 bg-slate-100 rounded-md shadow-sm shadow-black" placeholder="Enter title" v-model="title">
      <EditorData @editorInstance="receiveEditorInstance" v-bind:con="content.description"/>
     <div class="flex justify-between">
      <Button @click="getContent" :variant="'solid'" theme="gray" size="md" label="Button" :loading="false" :loadingText="null" class="mt-1">
        Save
      </Button>
      <Button :variant="'solid'" theme="gray" size="md" label="Button" :loading="false" :loadingText="null" class="mt-1">
        <router-link :to="{ name: 'Home' }">Back</router-link>
      </Button>
     </div>
    </form>
  </div>
</template>

<script setup>
import EditorData from './Editor.vue'
import { session } from '../data/session'
import { createListResource,createDocumentResource, createResource, Button } from 'frappe-ui'
import { ref, onBeforeMount,onMounted,onBeforeUpdate,watch,toRaw,reactive} from 'vue'
import route from '../router'

let title = ref(null)
let content = reactive({
  description:''
})

let editorInstance = ref('null')

onMounted(() => {
  validateContent()
})

const digitalNote = createDocumentResource({
doctype: 'Digital Notes',
name: route.currentRoute.value.params.name

})

const getContent = async () => {
  console.log( digitalNote,title.value)
  digitalNote.setValue.submit({
    title:title.value,
    description: editorInstance.value,
  })
}

const receiveEditorInstance = (instance) => {
  editorInstance.value = instance;
}

let validateContent = async () => {
 
  const url=`/api/resource/Digital Notes?fields=["*"]&filters=[["name","=","${route.currentRoute.value.params.name}"]]`
  const res = await fetch(url)
  const res_data = await res.json()
  console.log(res_data)
  title.value=res_data.data[0].title
  content.description=res_data.data[0].description
  
//   const digitalNotes = createResource({
//     url: '/api/method/frappe.client.get_list',
//     params: {
//       doctype: 'Digital Notes',
//       filters: {
//         name:route.currentRoute.value.params.name
//       },
//       fields:['*']
//     },
//   })
//   const res_data = await digitalNotes.fetch();
//   title.value = route.currentRoute.value.params.name
//   datares =res_data[0].description
//   console.log("descr", datares.value)
//   console.log("data",res_data)
  // }
}



</script>
