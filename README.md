# {{ mustache }} for VSCode

[![Visual Studio Marketplace Version](https://img.shields.io/visual-studio-marketplace/v/imgildev.vscode-mustache-snippets?style=for-the-badge&label=VS%20Marketplace&logo=visual-studio-code)](https://marketplace.visualstudio.com/items?itemName=imgildev.vscode-mustache-snippets)
[![Visual Studio Marketplace Installs](https://img.shields.io/visual-studio-marketplace/i/imgildev.vscode-mustache-snippets?style=for-the-badge&logo=visual-studio-code)](https://marketplace.visualstudio.com/items?itemName=imgildev.vscode-mustache-snippets)
[![Visual Studio Marketplace Downloads](https://img.shields.io/visual-studio-marketplace/d/imgildev.vscode-mustache-snippets?style=for-the-badge&logo=visual-studio-code)](https://marketplace.visualstudio.com/items?itemName=imgildev.vscode-mustache-snippets)
[![Visual Studio Marketplace Rating](https://img.shields.io/visual-studio-marketplace/r/imgildev.vscode-mustache-snippets?style=for-the-badge&logo=visual-studio-code)](https://marketplace.visualstudio.com/items?itemName=imgildev.vscode-mustache-snippets&ssr=false#review-details)
[![GitHub Repo stars](https://img.shields.io/github/stars/ManuelGil/vscode-mustache-snippets?style=for-the-badge&logo=github)](https://github.com/ManuelGil/vscode-mustache-snippets)
[![GitHub license](https://img.shields.io/github/license/ManuelGil/vscode-mustache-snippets?style=for-the-badge&logo=github)](https://github.com/ManuelGil/vscode-mustache-snippets/blob/main/LICENSE)

This is a Visual Studio Code extension that provides robust support for the Mustache template engine. Simplify your workflow by Mustache file editing with advanced features such as syntax highlighting, code completion, customized snippets, and more!

![snippets](https://raw.githubusercontent.com/ManuelGil/vscode-mustache-snippets/main/images/snippets.gif)

## Requirements

- VSCode 1.46.0 or later

## Snippets

Type part of snippet, press `Tab` or `Enter`, and the snippet unfolds. Below is a list of the most important shortcuts.

| Snippet          | Purpose                        |
| ---------------- | ------------------------------ |
| layout           | html template                  |
| block            | {{$ name }} ... {{/ name }}    |
| section          | {{# name }} ... {{/ name }}    |
| inverted section | {{^ name }} ... {{/ name }}    |
| comment          | {{! comment }}                 |
| include          | {{> template }}                |
| extends          | {{\< template }}               |

## Usage

![demo](https://raw.githubusercontent.com/ManuelGil/vscode-mustache-snippets/main/images/demo.gif)

- If you want to create a new file, you can select the option `Mustache: Generate New Mustache File` from the command palette. This will create a new file with the extension `.mustache` and will open the file in the editor. If you want to create a new file in a specific folder, you can right-click on the folder and select the option `Generate New Mustache File`. This will create a new file with the extension `.mustache` in the selected folder and will open the file in the editor.

- If you want to change the delimiters, you can select the template section and then select the `Mustache: Change Delimiters` option from the command palette. This will open a dialog box where you can enter the delimiters currently used in the template and the extension will replace the delimiters of the selected section. For example, if you select the section `{{# name }} ... {{{/ name }}` and you need to change the delimiters to `[[` and `]]`, you can select the `Change delimiters` option and this will change the section to `[[# name ]] ... [[/name ]]`.

## Project Settings

Configure your project by creating or updating a settings.json file at the project's root. If you already have a `.vscode/settings.json` file, skip the first two steps.

1. Open the command palette in VSCode:
   - `CTRL + SHIFT + P` (Windows)
   - `CMD + SHIFT + P` (Mac OS)

2. Type `Preferences: Open Workspace Settings (JSON)`.

3. In the `.vscode/settings.json` file, copy and paste the following settings:

    ```jsonc
    {
      // The delimiters option can be used to change the current template delimiters when generating a new file.
      // Syntax highlighting or snippets included in the extension will not be affected by this setting.
      "mustache.delimiters": {
        "left": "{{",
        "right": "}}"
      }
    }
    ```

4. **Restart VS Code**

Your project is now set up to automatically format code upon saving.

## Connect with me

[![GitHub followers](https://img.shields.io/github/followers/ManuelGil?style=for-the-badge&logo=github)](https://github.com/ManuelGil)
[![X (formerly Twitter) Follow](https://img.shields.io/twitter/follow/imgildev?style=for-the-badge&logo=x)](https://twitter.com/imgildev)

## Other Extensions

- [NestJS File Generator](https://marketplace.visualstudio.com/items?itemName=imgildev.vscode-nestjs-generator)
- [NestJS Snippets](https://marketplace.visualstudio.com/items?itemName=imgildev.vscode-nestjs-snippets-extension)
- [Angular File Generator](https://marketplace.visualstudio.com/items?itemName=imgildev.vscode-angular-generator)
- [T3 Stack / NextJS / ReactJS File Generator](https://marketplace.visualstudio.com/items?itemName=imgildev.vscode-nextjs-generator)
- [CodeIgniter 4 Snippets](https://marketplace.visualstudio.com/items?itemName=imgildev.vscode-codeigniter4-snippets)
- [CodeIgniter 4 Shield Snippets](https://marketplace.visualstudio.com/items?itemName=imgildev.vscode-codeigniter4-shield-snippets)
- [CodeIgniter 4 Spark](https://marketplace.visualstudio.com/items?itemName=imgildev.vscode-codeigniter4-spark)
- [Moodle Pack](https://marketplace.visualstudio.com/items?itemName=imgildev.vscode-moodle-snippets)
- [Mustache Template Engine - Snippets & Autocomplete](https://marketplace.visualstudio.com/items?itemName=imgildev.vscode-mustache-snippets)

## Changelog

See [CHANGELOG.md](./CHANGELOG.md)

## Authors

- **Manuel Gil** - _Owner_ - [ManuelGil](https://github.com/ManuelGil)

See also the list of [contributors](https://github.com/ManuelGil/vscode-mustache-snippets/contributors) who participated in this project.

## License

Mustache Snippets is licensed under the MIT License - see the [MIT License](https://opensource.org/licenses/MIT) for details.
