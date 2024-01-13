const { parsePath, save } = require('./functions');

module.exports = async (vscode, fs, path, args) => {
  let resource;

  if (vscode.workspace.workspaceFolders) {
    resource = vscode.workspace.workspaceFolders[0].uri;
  }

  const mustacheConfig = vscode.workspace.getConfiguration('mustache', resource);
  const delimiters = mustacheConfig.get('delimiters');

  let relativePath = '';

  if (args) {
    relativePath = parsePath(vscode, path, args);
  }

  const value = await vscode.window.showInputBox({
    prompt: 'Filename',
    placeHolder: 'Filename',
    validateInput: (text) => {
      if (!/^[A-Za-z0-9][\w\s\/,.-]+$/.test(text)) {
        return 'Invalid format!';
      }
    },
    value: `${relativePath}filename`,
  });

  if (value.lenght === 0) {
    return;
  }

  const filename = value.endsWith('.mustache') ? value : `${value}.mustache`;

  const content = `${delimiters.left}! ${filename} ${delimiters.right}
${delimiters.left}% BLOCKS ${delimiters.right}
<!DOCTYPE html>
<html lang=\"en\">
<html>
\t<head>
\t\t<meta charset=\"UTF-8\">
\t\t<meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\">
\t\t<meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">
\t\t<title>${delimiters.left}$ title ${delimiters.right}My Awesome Site${delimiters.left}/ title ${delimiters.right}</title>
\t\t${delimiters.left}$ stylesheets ${delimiters.right}
\t\t\t<link rel=\"stylesheet\" href=\"/assets/css/default.css\">
\t\t${delimiters.left}/ stylesheets ${delimiters.right}
\t</head>
\t\t<header>
\t\t\t${delimiters.left}$ header ${delimiters.right}
\t\t\t\t<h1>Welcome to My Awesome Site</h1>
\t\t\t${delimiters.left}/ header ${delimiters.right}
\t\t</header>
\t\t<div id=\"content\">
\t\t\t${delimiters.left}$ content ${delimiters.right}
\t\t\t\t<p>Hello, World!</p>
\t\t\t${delimiters.left}/ content ${delimiters.right}
\t\t</div>
\t\t${delimiters.left}$ scripts ${delimiters.right}
\t\t\t<script src=\"/assets/js/default.js\"></script>
\t\t${delimiters.left}/ scripts ${delimiters.right}
\t</body>
</html>
`;

  save(vscode, fs, path, filename, content);
};
