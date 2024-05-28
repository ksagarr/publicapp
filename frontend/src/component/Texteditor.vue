<template>
<CustomToast ref="chidComponent" v-bind:intent="intentData" v-bind:title="intentTitle" v-bind:content="intentContent"/>
  <div class="container mx-auto max-w-4xl my-[100px]">
    <form @submit.prevent="submitForm" class="space-y-8">
      <input type="text" class="w-full border-0 outline-0 p-2 bg-slate-100 rounded-md shadow-sm shadow-black" placeholder="Enter title" v-model="title">
      <EditorData @editorInstance="receiveEditorInstance" @selectCategory="getCategory" v-bind:con="content.description"/>
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
import CustomToast from './CustomToast.vue'
import EditorData from './Editor.vue'
import { session } from '../data/session'
import { createListResource,createDocumentResource, createResource, Button,} from 'frappe-ui'
import { ref, onBeforeMount, onMounted, onBeforeUpdate, watch, toRaw, reactive } from 'vue'
import route from '../router'
let intentData=ref(null)
let title = ref(null)
let intentTitle=ref(null)
let intentContent=ref(null)
const chidComponent=ref('success')
let content = reactive({
  description:''
})

let editorInstance = ref('null')
let getselectCategory=ref(null)
onMounted(() => {
  content.description = 'hello world'

})

const digitalNote = createListResource({
doctype: 'Digital Notes',

})

const getContent = async () => {
  if (title.value && getselectCategory.value) {
         
    digitalNote.insert.submit({
      user:session.user,
      title: title.value,
      category:getselectCategory.value,
      description: editorInstance.value,
    }).then(res => {
      if (res) {
        intentData.value = 'succuss'
        intentTitle.value = 'Note Created Successfully'
        intentContent.value='Your note has been successfully created and stored.'
        chidComponent.value.showAlterOnConditon()
      }
    })
  } else {
    intentData.value = 'warning'
    intentTitle.value = 'Note Creation Warning'
    intentContent.value='Your note could not be created due to missing title or category information. Please make sure to fill out both fields before proceeding.'
    chidComponent.value.showAlterOnConditon()
  }
}

const getCategory = (instance) => {
  getselectCategory.value=instance
}

const receiveEditorInstance = (instance) => {
  editorInstance.value = instance;
}

</script>
