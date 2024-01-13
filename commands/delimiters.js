module.exports = async (vscode) => {
  let resource;

  if (vscode.workspace.workspaceFolders) {
    resource = vscode.workspace.workspaceFolders[0].uri;
  }

  const mustacheConfig = vscode.workspace.getConfiguration('mustache', resource);
  const delimiters = mustacheConfig.get('delimiters');

  let editor;

  if (vscode.workspace.workspaceFolders) {
    editor = vscode.window.activeTextEditor;
  } else {
    vscode.window.showErrorMessage('No text editor is active.');
    return;
  }

  const selection = editor.selection;

  if (selection && !selection.isEmpty) {
    const selectionRange = new vscode.Range(selection.start.line, selection.start.character, selection.end.line, selection.end.character);

    const text = editor.document.getText(selectionRange);

    const left = await vscode.window.showInputBox({
      prompt: 'Enter current left delimiter',
      placeHolder: 'e.g. {{',
      value: '{{',
    });

    const right = await vscode.window.showInputBox({
      prompt: 'Enter current right delimiter',
      placeHolder: 'e.g. }}',
      value: '}}',
    });

    const newText = text.replaceAll(left, delimiters.left).replaceAll(right, delimiters.right);

    editor.selection = new vscode.Selection(selection.anchor, selection.active);

    const workspace = new vscode.WorkspaceEdit();
    workspace.replace(editor.document.uri, selectionRange, newText);

    return await vscode.workspace.applyEdit(workspace);
  }
};
