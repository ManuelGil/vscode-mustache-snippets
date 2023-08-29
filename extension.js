const fs = require('fs');
const path = require('path');
const vscode = require('vscode');

/**
 * @param {vscode.ExtensionContext} context
 */
function activate(context) {
  const mustache_new_file = vscode.commands.registerCommand('vscode-mustache-snippets.file', function () {
    vscode.window
      .showInputBox({
        prompt: 'Filename',
        placeHolder: 'Filename',
        validateInput: (text) => {
          if (!/^[\w,\s-\/.]+$/.test(text)) {
            return 'Invalid format!';
          }
        },
      })
      .then(function (value) {
        let folder;

        if (vscode.workspace.workspaceFolders) {
          folder = vscode.workspace.workspaceFolders[0].uri.fsPath;
        } else {
          vscode.window.showErrorMessage('The file has not been created!');
          return;
        }

        const filename = value.endsWith('.mustache') ? value : `${value}.mustache`;

        const content = `{{! ${filename}  }}
{{% BLOCKS }}
<!DOCTYPE html>
<html lang=\"en\">
<html>
\t<head>
\t\t<meta charset=\"UTF-8\">
\t\t<meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\">
\t\t<meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">
\t\t<title>{{$ title }}My Awesome Site{{/ title }}</title>
\t\t{{$ stylesheets }}
\t\t\t<link rel=\"stylesheet\" href=\"/assets/css/default.css\">
\t\t{{/ stylesheets }}
\t</head>
\t\t<header>
\t\t\t{{$ header }}
\t\t\t\t<h1>Welcome to My Awesome Site</h1>
\t\t\t{{/ header }}
\t\t</header>
\t\t<div id=\"content\">
\t\t\t{{$ content }}
\t\t\t\t<p>Hello, World!</p>
\t\t\t{{/ content }}
\t\t</div>
\t\t{{$ scripts }}
\t\t\t<script src=\"/assets/js/default.js\"></script>
\t\t{{/ scripts }}
\t</body>
</html>
`;

        const pathfile = path.join(folder, filename);

        if (!fs.existsSync(path.dirname(pathfile))) {
          fs.mkdirSync(path.dirname(pathfile));
        }

        fs.access(pathfile, function (err) {
          if (err) {
            fs.open(pathfile, 'w+', function (err, fd) {
              if (err) throw err;
              fs.writeFileSync(fd, content);
              const openPath = vscode.Uri.file(pathfile);
              vscode.workspace.openTextDocument(openPath).then(function (filename) {
                vscode.window.showTextDocument(filename);
              });
            });

            vscode.window.showInformationMessage('Successfully created the file!');
          } else {
            vscode.window.showWarningMessage('Name already exist!');
          }
        });
      });
  });

  context.subscriptions.push(mustache_new_file);
}

function deactivate() {}

module.exports = {
  activate,
  deactivate,
};
