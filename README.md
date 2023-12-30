# {{ mustache }} for VSCode

[![Visual Studio Marketplace Version](https://img.shields.io/visual-studio-marketplace/v/imgildev.vscode-mustache-snippets?style=for-the-badge&label=VS%20Marketplace&logo=visual-studio-code)](https://marketplace.visualstudio.com/items?itemName=imgildev.vscode-mustache-snippets)
[![Visual Studio Marketplace Installs](https://img.shields.io/visual-studio-marketplace/i/imgildev.vscode-mustache-snippets?style=for-the-badge&logo=visual-studio-code)](https://marketplace.visualstudio.com/items?itemName=imgildev.vscode-mustache-snippets)
[![GitHub Repo stars](https://img.shields.io/github/stars/ManuelGil/vscode-mustache-snippets?style=for-the-badge&logo=github)](https://github.com/ManuelGil/vscode-mustache-snippets)
[![GitHub license](https://img.shields.io/github/license/ManuelGil/vscode-mustache-snippets?style=for-the-badge&logo=github)](https://github.com/ManuelGil/vscode-mustache-snippets/blob/main/LICENSE)

![icon](https://raw.githubusercontent.com/ManuelGil/vscode-mustache-snippets/main/icon.png)

Mustache – snippets & autocomplete for VSCode editor (HTML, JS, PHP, React, etc.). Mustache is a logic-less template syntax. It can be used for HTML, config files, source code – anything. It works by expanding tags in a template using values provided in a hash or object. We call it 'logic-less' because there are no if statements, else clauses, or for loops. Instead, there are only tags. Some tags are replaced with a value, some nothing, and others a series of values. This repo contains the official VSCode extension for Mustache. It includes snippets, syntax highlighting, and code completion.

## Requirements

- VSCode 1.46.0 or later

## Usage

### Snippets

![snippets](https://raw.githubusercontent.com/ManuelGil/vscode-mustache-snippets/main/images/snippets.gif)

Type part of snippet, press `Tab` or `Enter`, and the snippet unfolds. Below is a list of the most important shortcuts.

| Snippet          | Purpose                        |
| ---------------- | ------------------------------ |
| layout           | html template                  |
| block            | {{$ name }} ... {{/ name }}    |
| section          | {{# name }} ... {{/ name }}    |
| inverted section | {{^ name }} ... {{/ name }}    |
| comment          | {{! comment }}                 |
| include          | {{> template }}                |
| extends          | {{< template }}                |

### Commands

![commands](https://raw.githubusercontent.com/ManuelGil/vscode-mustache-snippets/main/images/commands.gif)

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
