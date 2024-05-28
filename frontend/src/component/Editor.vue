<template>
  <div>
  <section v-if="editor" class="button flex items-center flex-wrap gap-x-4 border-0 bg-black text-slate-100 rounded-t-md p-4 shadow-sm shadow-black">
    <button @click="editor.chain().focus().toggleBold().run()" :disabled="!editor.can().chain().focus().toggleBold().run()" 
    :class="{ 'bg-pink-500 rounded': editor.isActive('bold') }"
    class="p-1">
      <Bold size="20" title="Bold"/>
    </button>
    <button @click="editor.chain().focus().toggleItalic().run()" :disabled="!editor.can().chain().focus().toggleItalic().run()" 
    :class="{ 'bg-pink-500 rounded': editor.isActive('italic') }"
    class="p-1">
    <Italic size="20" title="Italic"/>
    </button>
    <button @click="editor.chain().focus().toggleUnderline().run()" 
    :class="{ 'bg-pink-500 rounded': editor.isActive('underline') }"
    class="p-1">
    <Under size="20" title="Underline"/>
    </button>
    <button @click="editor.chain().focus().toggleStrike().run()" :disabled="!editor.can().chain().focus().toggleStrike().run()" 
    :class="{ 'bg-pink-500 rounded': editor.isActive('strike') }"
    class="p-1">
    <Strike size="20" title="Strike"/>
    </button>
    <button @click="editor.chain().focus().toggleCode().run()" :disabled="!editor.can().chain().focus().toggleCode().run()" 
    :class="{ 'bg-pink-500 rounded': editor.isActive('code') }"
    class="p-1">
    <CodeBrace size="20" title="CodeBrace"/>
    </button>
    <button @click="editor.chain().focus().toggleHeading({ level: 1 }).run()" :class="{ 'bg-pink-500 rounded': editor.isActive('heading', { level: 1 }) }"
    class="p-1 font-bold">
      H1
    </button>
    <button @click="editor.chain().focus().toggleHeading({ level: 2 }).run()" :class="{ 'bg-pink-500 rounded': editor.isActive('heading', { level: 2 }) }"
    class="p-1 font-bold">
      H2
    </button>
    <button @click="editor.chain().focus().toggleHeading({ level: 3 }).run()" :class="{ 'bg-pink-500 rounded': editor.isActive('heading', { level: 3 }) }"
    class="p-1 font-bold">
     H3
    </button>
    <button @click="editor.chain().focus().toggleHeading({ level: 4 }).run()" :class="{ 'bg-pink-500 rounded': editor.isActive('heading', { level: 4 }) }"
    class="p-1 font-bold">
     H4
    </button>
    <button @click="editor.chain().focus().toggleBulletList().run()" :class="{ 'bg-pink-500 rounded': editor.isActive('bulletList') }"
    class="p-1">
    <BulletCircleList size="20" title="BulletCircleList"/>
    </button>
    <button @click="editor.chain().focus().toggleOrderedList().run()" :class="{ 'bg-pink-500 rounded': editor.isActive('orderedList') }"
    class="p-1">
    <OrderNumberList size="20" title="OrderNumberList"/>
    </button>
    <button @click="editor.chain().focus().toggleCodeBlock().run()" :class="{ 'bg-pink-500 rounded': editor.isActive('codeBlock') }"
    class="p-1">
    <CodeBlock size="20" title="CodeBlock"/>
    </button>
    <button @click="editor.chain().focus().toggleBlockquote().run()" :class="{ 'bg-pink-500 rounded': editor.isActive('blockquote') }"
    class="p-1">
    <BlockQuote size="20" title="BlockQuote"/>
    </button>
    <button @click="editor.chain().focus().setHardBreak().run()">
      <LineBreake size="20" title="LineBreake"/>
    </button>
    <button @click="setLink" :class="{ 'is-active': editor.isActive('link') }">
      setLink
    </button>
    <button @click="editor.chain().focus().unsetLink().run()" :disabled="!editor.isActive('link')">
      unsetLink
    </button>
    <button @click="editor.chain().focus().undo().run()" :disabled="!editor.can().chain().focus().undo().run()"
    class="p-1">
    <FormatUndo size="20" title="FormatUndo"/>
    </button>
    <button @click="editor.chain().focus().redo().run()" :disabled="!editor.can().chain().focus().redo().run()"
    class="p-1">
    <FormatRedo size="20" title="FormatRedo"/>
    </button>
    <div class="ml-1 bg-gray-100 text-gray-900 rounded-sm">
      <button @click="openColorBox" :class="{'bg-pink-500': editor.isActive('blockquote') }"
        class="flex items-center h-6 w-6 justify-center">
    <ColorIcon size="20" title="ColorIcon"/>
    </button>
        <div id="colorPickerBox" class="hidden grid-cols-7 grid-rows-5 p-1 gap-1 absolute w-[180px] h-[80px] bg-slate-50">
          <span tabindex="0" role="button" @click="setColor('#e60000')" style="background-color: #e60000;"></span>
          <span tabindex="0" role="button" @click="setColor('#ff9900')" style="background-color: #ff9900;"></span>
          <span tabindex="0" role="button" @click="setColor('#ffff00')" style="background-color: #ffff00;"></span>
          <span tabindex="0" role="button" @click="setColor('#008a00')" style="background-color: #008a00;"></span>
          <span tabindex="0" role="button" @click="setColor('#0066cc')" style="background-color: #0066cc;"></span>
          <span tabindex="0" role="button" @click="setColor('#9933ff')" style="background-color: #9933ff;"></span>
          <span tabindex="0" role="button" @click="setColor('#ffffff')" style="background-color: #ffffff;"></span>
          <span tabindex="0" role="button" @click="setColor('#facccc')" style="background-color: #facccc;"></span>
          <span tabindex="0" role="button" @click="setColor('#ffebcc')" style="background-color: #ffebcc;"></span>
          <span tabindex="0" role="button" @click="setColor('#ffffcc')" style="background-color: #ffffcc;"></span>
          <span tabindex="0" role="button" @click="setColor('#cce8cc')" style="background-color: #cce8cc;"></span>
          <span tabindex="0" role="button" @click="setColor('#cce0f5')" style="background-color: #cce0f5;"></span>
          <span tabindex="0" role="button" @click="setColor('#ebd6ff')" style="background-color: #ebd6ff;"></span>
          <span tabindex="0" role="button" @click="setColor('#bbbbbb')" style="background-color: #bbbbbb;"></span>
          <span tabindex="0" role="button" @click="setColor('#f06666')" style="background-color: #f06666;"></span>
          <span tabindex="0" role="button" @click="setColor('#ffc266')" style="background-color: #ffc266;"></span>
          <span tabindex="0" role="button" @click="setColor('#ffff66')" style="background-color: #ffff66;"></span>
          <span tabindex="0" role="button" @click="setColor('#66b966')" style="background-color: #66b966;"></span>
          <span tabindex="0" role="button" @click="setColor('#66a3e0')" style="background-color: #66a3e0;"></span>
          <span tabindex="0" role="button" @click="setColor('#c285ff')" style="background-color: #c285ff;"></span>
          <span tabindex="0" role="button" @click="setColor('#888888')" style="background-color: #888888;"></span>
          <span tabindex="0" role="button" @click="setColor('#a10000')" style="background-color: #a10000;"></span>
          <span tabindex="0" role="button" @click="setColor('#b26b00')" style="background-color: #b26b00;"></span>
          <span tabindex="0" role="button" @click="setColor('#b2b200')" style="background-color: #b2b200;"></span>
          <span tabindex="0" role="button" @click="setColor('#006100')" style="background-color: #006100;"></span>
          <span tabindex="0" role="button" @click="setColor('#0047b2')" style="background-color: #0047b2;"></span>
          <span tabindex="0" role="button" @click="setColor('#6b24b2')" style="background-color: #6b24b2;"></span>
          <span tabindex="0" role="button" @click="setColor('#444444')" style="background-color: #444444;"></span>
          <span tabindex="0" role="button" @click="setColor('#5c0000')" style="background-color: #5c0000;"></span>
          <span tabindex="0" role="button" @click="setColor('#663d00')" style="background-color: #663d00;"></span>
          <span tabindex="0" role="button" @click="setColor('#666600')" style="background-color: #666600;"></span>
          <span tabindex="0" role="button" @click="setColor('#003700')" style="background-color: #003700;"></span>
          <span tabindex="0" role="button" @click="setColor('#002966')" style="background-color: #002966;"></span>
          <span tabindex="0" role="button" @click="setColor('#3d1466')" style="background-color: #3d1466;"></span>
        </div>
      </div>
      <select class="w-[130px] h-[30px] text-[14px] bg-white border-2 border-[#eee] pt-0 pb-0 outline-none rounded cursor-pointer text-gray-900" v-model="category">
      <option value="" disabled="true">Category</option>
      <option value="Project">Project</option>
      <option value="Meeting">Meeting</option>
      <option value="Work">Work</option>
      <option value="General">General</option>
      <option value="Video">Video</option>
      </select>
    </section>
  <EditorContent :editor="editor" />
  </div>
</template>
<script setup>
import { ref, watch,onMounted,onBeforeMount,onUpdated,toRaw} from 'vue'
import Link from '@tiptap/extension-link'
import { Editor, EditorContent } from '@tiptap/vue-3'
import StarterKit from '@tiptap/starter-kit'
import Underline from '@tiptap/extension-underline'
import Code from '@tiptap/extension-code'
import { Color } from '@tiptap/extension-color'
import TextStyle from '@tiptap/extension-text-style'
import Bold from 'vue-material-design-icons/FormatBold.vue';
import Italic from 'vue-material-design-icons/FormatItalic.vue';
import Under from 'vue-material-design-icons/FormatUnderline.vue';
import Strike from 'vue-material-design-icons/FormatStrikethroughVariant.vue';
import CodeBrace from 'vue-material-design-icons/CodeBraces.vue';
import BulletCircleList from 'vue-material-design-icons/FormatListBulleted.vue';
import OrderNumberList from 'vue-material-design-icons/FormatListNumbered.vue';
import CodeBlock from 'vue-material-design-icons/CodeBlockTags.vue';
import BlockQuote from 'vue-material-design-icons/FormatQuoteClose.vue';
import LineBreake from 'vue-material-design-icons/FormatPageBreak.vue';
import FormatUndo from 'vue-material-design-icons/Undo.vue';
import FormatRedo from 'vue-material-design-icons/Redo.vue';
import ColorIcon from 'vue-material-design-icons/FormatColorText.vue';
import Highlight from '@tiptap/extension-highlight'

let category=ref('')

const emit  = defineEmits(['con','editorInstance','selectCategory'])
let props = defineProps({
        con: String,
    })

let editor = ref(null)

function editorUpdate(props) {
  console.log("execute comand")
   editor = new Editor({
    content: props.con,
    editorProps: {
      attributes: {
        class: 'bg-slate-100 border-0 rounded-b-md min-h-[12rem] max-h-[12rem] overflow-y-auto outline-none prose max-w-none p-4',
      },
    },
    extensions: [
      StarterKit, Underline, Code, Color, TextStyle, Highlight.configure({ multicolor: true }),
      Link.configure({
        openOnClick: true,
      })
    ],
  })
}


watch(props, (newValue) => {
  props = newValue
  editorUpdate(props)
})


onUpdated(() => {
  emit('editorInstance', editor.getHTML())
  emit('selectCategory',category.value)
})
watch(props, (newValue) => {
  props = newValue
  editorUpdate(props)
})

const setLink = () => {
  const previousUrl = editor.getAttributes('link').href
  const url = window.prompt('URL', previousUrl)

  // cancelled
  if (url === null) {
    return
  }

  // empty
  if (url === '') {
    editor
      .chain()
      .focus()
      .extendMarkRange('link')
      .unsetLink()
      .run()

    return
  }

  editor
    .chain()
    .focus()
    .extendMarkRange('link')
    .setLink({ href: url })
    .run()
}

const handleClickOutside = (event) => {
  const button = document.querySelector('.bg-gray-100');
  const colorPickerBox = document.getElementById('colorPickerBox')
  if (!colorPickerBox.contains(event.target) && !button.contains(event.target)) {
    colorPickerBox.style.display='none'
  }
}

const openColorBox = () => {
  const colorPickerBox = document.getElementById('colorPickerBox')
  colorPickerBox.style.display = 'grid'
  colorPickerBox.style.zIndex = '1'
  window.addEventListener('click', handleClickOutside)
}

const setColor = (value) => {
  editor.chain().focus().setColor(value).run()
  const colorPickerBox = document.getElementById('colorPickerBox')
  colorPickerBox.style.display = 'none'
}

</script>
<style>

input::-webkit-color-swatch{
            width: 20px;
            height: 20px;
            border: none;
            border-radius: 50%;
        }
</style>