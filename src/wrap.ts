import * as vscode from 'vscode'

export function wrap() {
	const editor = vscode.window.activeTextEditor

	if (editor) {
		const selection = editor.selection

		if (!selection.isEmpty) {
			const selectionRange = new vscode.Range(
				selection.start.line,
				selection.start.character,
				selection.end.line,
				selection.end.character
			)
			const highlighted = editor.document.getText(selectionRange)
			const wrappedText = `<${highlighted}>`

			editor.edit(editBuilder => {
				editBuilder.replace(selectionRange, wrappedText)
			})
		}
	}
}
