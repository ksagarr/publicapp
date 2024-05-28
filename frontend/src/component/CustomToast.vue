<template>
    <div class="toast-container animate-right-left absolute right-0 top-2"  v-show="showAlert">
    <div :class="conainerClass">
        <div :class="alertClass">
        <Alert />
        </div>
        <div class="flex-1 ml-2 space-y-2"> 
        <h1 class="font-bold text-slate-900 text-[16px]">{{ props.title }}</h1>
         <p class="text-slate-500 font-normal">{{ props.content }}</p>
        </div>
        <div class="shrink-0 ml-4">
        <button @click="dismisAlert" class="hover:bg-orange-400 h-7 w-7 rounded-[15px] p-0.3 flex items-center justify-center">
            <CloseCircle size="18" />
        </button>
        </div>
    </div>
    </div>
</template>

<script setup>
import Alert from 'vue-material-design-icons/AlertCircle.vue';
import CloseCircle from 'vue-material-design-icons/Close.vue';
import { cva } from "class-variance-authority";
import { onMounted, ref, computed, onUpdated, watch } from 'vue';

let icon=ref(null)

let props = defineProps({
    intent: {
        type: String,
        validator(value) {
            return ['succuss','warning'].includes(value)
        }
        ,
        default:'succuss'
    },
    title: String,
    content: String
  
})



const emit = defineEmits(['intent'])

let showAlert = ref(false)
const dismisAlert = () => {
    showAlert.value=false
}
const showAlterOnConditon = () => {
    showAlert.value = true
    setTimeout(function() {
    showAlert.value = false
     }, 3000); 
}


const conainerClass = computed(() => {
    return cva('flex rounded-md float-right mx-4 p-4', {
        variants: {
            intent: {
                succuss: 'bg-green-100',
                warning:'bg-red-100'
            }
        }
    })({
        intent:props.intent
    })
})
const alertClass = computed(() => {
    return cva('', {
        variants: {
            intent: {
                succuss: 'text-green-700',
                warning:'text-red-700'
            }
        }
    })({
        intent:props.intent
    })
})

defineExpose({ showAlterOnConditon })

onMounted(() => {
    emit('intent',props.intent)
})

watch((newValue) => {
    props.intent = newValue
    
})

</script>
