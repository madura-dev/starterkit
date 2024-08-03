// src/Tiptap.tsx
import {BubbleMenu, EditorContent, FloatingMenu, useEditor} from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import {
	DropdownMenu,
	DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem,
	DropdownMenuLabel, DropdownMenuPortal,
	DropdownMenuSeparator, DropdownMenuShortcut, DropdownMenuSub, DropdownMenuSubContent, DropdownMenuSubTrigger,
	DropdownMenuTrigger
} from "@/components/ui/dropdown-menu";
import {Button} from "@/components/ui/button";
import {Popover, PopoverContent, PopoverTrigger} from "@/components/ui/popover";

// define your extension array
const extensions = [StarterKit]

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

	return (
		<div className={'flex h-full justify-center '}>
			<EditorContent editor={editor} className={'flex-1 max-w-[50%] m-10 overflow-y-auto'} />
			<FloatingMenu editor={editor}>
				<span className={'text-slate-500 font-light'}>Ketik <kbd>/</kbd> untuk menampilkan opsi</span>
				<Popover>
					<PopoverTrigger>Open</PopoverTrigger>
					<PopoverContent>Place content for the popover here.</PopoverContent>
				</Popover>
			</FloatingMenu>
			<BubbleMenu editor={editor}>This is the bubble menu</BubbleMenu>
		</div>
	)
}

export default BlockEditor
