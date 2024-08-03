import {BubbleMenu, EditorContent, FloatingMenu, useEditor} from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import Placeholder from '@tiptap/extension-placeholder'

// define your extension array
const extensions = [
	StarterKit,
	Placeholder.configure({
		// Use a placeholder:
		placeholder: 'Write something …', // Use different placeholders depending on the node type:
		// placeholder: ({ node }) => {
		//   if (node.type.name === 'heading') {
		//     return 'What’s the title?'
		//   }

		//   return 'Can you add some further context?'
		// },
	}),
]

const content = '<p>Hello World!</p>'

const BlockEditor = () => {
	const editor = useEditor({
		extensions,
		content,
		autofocus: true,
		editable: true,
		injectCSS: false,
		editorProps: {
			attributes: {
				autocomplete: 'off',
				autocorrect: 'off',
				autocapitalize: 'off',
			},
		},

	})

	return (<div className={'flex h-full justify-center '}>
		<EditorContent editor={editor} className={'flex-1 max-w-[50%] m-10 overflow-y-auto'} />
		<FloatingMenu editor={editor}>
			<span className={'text-slate-500 font-light'}>Ketik <kbd>/</kbd> untuk menampilkan opsi</span>
		</FloatingMenu>
		<BubbleMenu editor={editor}>This is the bubble menu</BubbleMenu>
	</div>)
}

export default BlockEditor
