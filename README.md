![icon](https://raw.githubusercontent.com/ManuelGil/vscode-mustache-snippets/main/icon.png)

# Mustache Template - Snippets & Autocomplete

[![GitHub Release](https://img.shields.io/github/v/release/ManuelGil/vscode-mustache-snippets)]()
[![GitHub Release Date](https://img.shields.io/github/release-date/ManuelGil/vscode-mustache-snippets)]()
[![GitHub license](https://img.shields.io/github/license/ManuelGil/vscode-mustache-snippets)]()
[![vsm-version](https://img.shields.io/visual-studio-marketplace/v/imgildev.vscode-mustache-snippets?style=flat&label=VS%20Marketplace&logo=visual-studio-code)](https://marketplace.visualstudio.com/items?itemName=imgildev.vscode-mustache-snippets)

Snippets, autocomplete and syntax for Mustache language

## Usage

![Snippets](https://raw.githubusercontent.com/ManuelGil/vscode-mustache-snippets/main/readme/snippets.gif)

Type part of snippet, press `Tab` or `Enter`, and the snippet unfolds. Below is a list of the most important shortcuts.

```mustache
layout                  html template
block                   {{$ name }} ... {{/ name }}
section                 {{# name }} ... {{/ name }}
inverted section        {{^ name }} ... {{/ name }}
comment                 {{! name }}
include                 {{> template }}
extends                 {{< template }}
loop                    {{# name }} {{ . }} {{/ name }}
```

## Requirements

- VSCode 1.53.0 or later

## Changelog

See [CHANGELOG.md](./CHANGELOG.md)

## Authors

- **Manuel Gil** - _Owner_ - [ManuelGil](https://github.com/ManuelGil)

See also the list of [contributors](https://github.com/ManuelGil/vscode-mustache-snippets/contributors) who participated in this project.

## License

Mustache Snippets is licensed under the MIT License - see the [MIT License](https://opensource.org/licenses/MIT) for details.
