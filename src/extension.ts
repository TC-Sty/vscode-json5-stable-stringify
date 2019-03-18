import * as vscode from 'vscode';
import { formatTextEditorCommand } from './formatTextEditorCommand';

export function activate(context: vscode.ExtensionContext) {
  console.log('[vscode-json-stable-stringify] activated!');
  context.subscriptions.push(vscode.commands.registerTextEditorCommand('extension.jsonStableSort', formatTextEditorCommand));
}

export function deactivate() {}