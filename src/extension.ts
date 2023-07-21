import * as vscode from 'vscode'
import { wrap } from './wrap'

export function activate(context: vscode.ExtensionContext) {
	console.log('extension "angle-wrapper" is now active!')

	let disposable = vscode.commands.registerCommand('angle-wrapper.wrap', () => {
		wrap()
	})

	context.subscriptions.push(disposable)
}

export function deactivate() {}
