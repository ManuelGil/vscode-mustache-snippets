const { l10n } = require('vscode')

module.exports = async (vscode) => {
  let resource

  if (vscode.workspace.workspaceFolders) {
    resource = vscode.workspace.workspaceFolders[0].uri
  }

  const mustacheConfig = vscode.workspace.getConfiguration('mustache', resource)
  const delimiters = mustacheConfig.get('delimiters')

  let editor

  if (vscode.workspace.workspaceFolders) {
    editor = vscode.window.activeTextEditor
  } else {
    const message = l10n.t('No text editor is active')
    vscode.window.showErrorMessage(message)
    return
  }

  const selection = editor.selection

  if (!selection || selection.isEmpty) {
    const message = l10n.t('No text selected')
    vscode.window.showErrorMessage(message)
    return
  }

  const selectionRange = new vscode.Range(
    selection.start.line,
    selection.start.character,
    selection.end.line,
    selection.end.character,
  )

  const text = editor.document.getText(selectionRange)

  const left = await vscode.window.showInputBox({
    prompt: l10n.t('Enter current left delimiter'),
    placeHolder: l10n.t('e.g. {{'),
    value: '{{',
  })

  const right = await vscode.window.showInputBox({
    prompt: l10n.t('Enter current right delimiter'),
    placeHolder: l10n.t('e.g. }}'),
    value: '}}',
  })

  if (!left || !right) {
    return
  }

  // replace all patterns with the new delimiters
  const newText = text
    .replace(new RegExp(delimiters.left, 'g'), left)
    .replace(new RegExp(delimiters.right, 'g'), right)

  editor.selection = new vscode.Selection(selection.anchor, selection.active)

  const workspace = new vscode.WorkspaceEdit()
  workspace.replace(editor.document.uri, selectionRange, newText)

  return await vscode.workspace.applyEdit(workspace)
}
