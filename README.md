# {{ mustache }} for VSCode

[![Visual Studio Marketplace Version](https://img.shields.io/visual-studio-marketplace/v/imgildev.vscode-mustache-snippets?style=for-the-badge&label=VS%20Marketplace&logo=visual-studio-code)](https://marketplace.visualstudio.com/items?itemName=imgildev.vscode-mustache-snippets)
[![Visual Studio Marketplace Installs](https://img.shields.io/visual-studio-marketplace/i/imgildev.vscode-mustache-snippets?style=for-the-badge&logo=visual-studio-code)](https://marketplace.visualstudio.com/items?itemName=imgildev.vscode-mustache-snippets)
[![Visual Studio Marketplace Downloads](https://img.shields.io/visual-studio-marketplace/d/imgildev.vscode-mustache-snippets?style=for-the-badge&logo=visual-studio-code)](https://marketplace.visualstudio.com/items?itemName=imgildev.vscode-mustache-snippets)
[![Visual Studio Marketplace Rating](https://img.shields.io/visual-studio-marketplace/r/imgildev.vscode-mustache-snippets?style=for-the-badge&logo=visual-studio-code)](https://marketplace.visualstudio.com/items?itemName=imgildev.vscode-mustache-snippets&ssr=false#review-details)
[![GitHub Repo stars](https://img.shields.io/github/stars/ManuelGil/vscode-mustache-snippets?style=for-the-badge&logo=github)](https://github.com/ManuelGil/vscode-mustache-snippets)
[![GitHub license](https://img.shields.io/github/license/ManuelGil/vscode-mustache-snippets?style=for-the-badge&logo=github)](https://github.com/ManuelGil/vscode-mustache-snippets/blob/main/LICENSE)

> Advanced support for Mustache templates: syntax highlighting, completion, snippets, and file generation.

## Overview

This extension enhances Mustache template editing by providing:

- **Syntax highlighting** and tag matching
- **Code completion** for built‑in sections and delimiters
- **Customizable snippets** for layout, sections, comments, includes, and more
- **Commands** to generate new `.mustache` files in the workspace
- **Delimiter adjustment** to convert existing templates to alternate markers

![Mustache File Generator Demo](https://raw.githubusercontent.com/ManuelGil/vscode-mustache-snippets/main/images/demo.gif)

## Requirements

- Visual Studio Code 1.46.0 or later (also compatible with VSCodium, WindSurf, Cursor, etc.)

## Installation

1. Open **Visual Studio Code**.
2. Open the **Extensions** view (`Ctrl+Shift+X` on Windows/Linux or `⌘+Shift+X` on macOS).
3. Search for **Mustache Templates - Syntax Highlighting, Snippets & Autocomplete** or install directly from the [Marketplace](https://marketplace.visualstudio.com/items?itemName=imgildev.vscode-mustache-snippets).
4. Click **Install** and reload the editor if prompted.

## Usage

### Generate New Mustache File

- **Command Palette**: run **Mustache: Generate New Mustache File**
- **Explorer Context Menu**: right‑click a folder and select **Generate New Mustache File**

You will be prompted for a file name; a new `.mustache` file is created and opened.

### Change Delimiters

- Select a section of template text
- Run **Mustache: Change Delimiters** from the Command Palette
- Enter the current and desired delimiters (e.g. `{{ }} → [[ ]]`)

All matching tags in the selection will be updated.

### Snippet Expansion

Type a snippet prefix in a `.mustache` file and press **Tab** to expand:

| Prefix     | Expansion                        |
| ---------- | -------------------------------- |
| `layout`   | Basic HTML layout block          |
| `block`    | `{{#name}} … {{/name}}`          |
| `section`  | `{{#name}} … {{/name}}`          |
| `inverted` | `{{^name}} … {{/name}}`          |
| `comment`  | `{{! comment }}`                 |
| `override` | `{{!-- comment --!}}`            |
| `include`  | `{{> template}}`                 |
| `extends`  | `{{< template}} … {{/template}}` |

![Mustache Snippets Demo](https://raw.githubusercontent.com/ManuelGil/vscode-mustache-snippets/main/images/snippets.gif)

## Configuration

Add to your workspace `.vscode/settings.json`:

```jsonc
{
  "mustache.delimiters": {
    "left": "{{",
    "right": "}}"
  }
}
```

This setting applies when generating new files; syntax highlighting and snippets remain unaffected.

## Contributing

Contributions to the **Mustache Templates - Syntax Highlighting, Snippets & Autocomplete** are welcome and appreciated. To contribute:

1. Fork the [GitHub repository](https://github.com/ManuelGil/vscode-mustache-snippets).
2. Create a new branch for your feature or fix:

   ```bash
   git checkout -b feature/your-feature
   ```

3. Make your changes, commit them, and push to your fork.
4. Submit a Pull Request targeting the `main` branch.

Before contributing, please review the [Contribution Guidelines](https://github.com/ManuelGil/vscode-mustache-snippets/blob/main/CONTRIBUTING.md) for coding standards, testing, and commit message conventions. If you encounter a bug or wish to request a new feature, please open an Issue.

## Changelog

For a complete list of changes, see the [CHANGELOG.md](https://github.com/ManuelGil/vscode-mustache-snippets/blob/main/CHANGELOG.md).

## Authors

- **Manuel Gil** - _Owner_ - [@ManuelGil](https://github.com/ManuelGil)

For a complete list of contributors, please refer to the [contributors](https://github.com/ManuelGil/vscode-mustache-snippets/contributors) page.

## Follow Me

- **GitHub**: [![GitHub followers](https://img.shields.io/github/followers/ManuelGil?style=for-the-badge\&logo=github)](https://github.com/ManuelGil)
- **X (formerly Twitter)**: [![X Follow](https://img.shields.io/twitter/follow/imgildev?style=for-the-badge\&logo=x)](https://twitter.com/imgildev)

## Other Extensions

- **[Auto Barrel](https://marketplace.visualstudio.com/items?itemName=imgildev.vscode-auto-barrel)**
  Automatically generates and maintains barrel (`index.ts`) files for your TypeScript projects.

- **[Angular File Generator](https://marketplace.visualstudio.com/items?itemName=imgildev.vscode-angular-generator)**
  Generates boilerplate and navigates your Angular (9→20+) project from within the editor, with commands for components, services, directives, modules, pipes, guards, reactive snippets, and JSON2TS transformations.

- **[NestJS File Generator](https://marketplace.visualstudio.com/items?itemName=imgildev.vscode-nestjs-generator)**
  Simplifies creation of controllers, services, modules, and more for NestJS projects, with custom commands and Swagger snippets.

- **[NestJS Snippets](https://marketplace.visualstudio.com/items?itemName=imgildev.vscode-nestjs-snippets-extension)**
  Ready-to-use code patterns for creating controllers, services, modules, DTOs, filters, interceptors, and more in NestJS.

- **[T3 Stack / NextJS / ReactJS File Generator](https://marketplace.visualstudio.com/items?itemName=imgildev.vscode-nextjs-generator)**
  Automates file creation (components, pages, hooks, API routes, etc.) in T3 Stack (Next.js, React) projects and can start your dev server from VSCode.

- **[Drizzle ORM Snippets](https://marketplace.visualstudio.com/items?itemName=imgildev.vscode-drizzle-snippets)**
  Collection of code snippets to speed up Drizzle ORM usage, defines schemas, migrations, and common database operations in TypeScript/JavaScript.

- **[CodeIgniter 4 Spark](https://marketplace.visualstudio.com/items?itemName=imgildev.vscode-codeigniter4-spark)**
  Scaffolds controllers, models, migrations, libraries, and CLI commands in CodeIgniter 4 projects using Spark, directly from the editor.

- **[CodeIgniter 4 Snippets](https://marketplace.visualstudio.com/items?itemName=imgildev.vscode-codeigniter4-snippets)**
  Snippets for accelerating development with CodeIgniter 4, including controllers, models, validations, and more.

- **[CodeIgniter 4 Shield Snippets](https://marketplace.visualstudio.com/items?itemName=imgildev.vscode-codeigniter4-shield-snippets)**
  Snippets tailored to CodeIgniter 4 Shield for faster authentication and security-related code.

- **[Mustache Template Engine - Snippets & Autocomplete](https://marketplace.visualstudio.com/items?itemName=imgildev.vscode-mustache-snippets)**
  Snippets and autocomplete support for Mustache templates, making HTML templating faster and more reliable.

## Recommended Browser Extension

For developers who work with `.vsix` files for offline installations or distribution, the complementary [**One-Click VSIX**](https://chromewebstore.google.com/detail/imojppdbcecfpeafjagncfplelddhigc?utm_source=item-share-cb) extension is recommended, available for both Chrome and Firefox.

> **One-Click VSIX** integrates a direct "Download Extension" button into each VSCode Marketplace page, ensuring the file is saved with the `.vsix` extension, even if the server provides a `.zip` archive. This simplifies the process of installing or sharing extensions offline by eliminating the need for manual file renaming.

- [Get One-Click VSIX for Chrome &rarr;](https://chromewebstore.google.com/detail/imojppdbcecfpeafjagncfplelddhigc?utm_source=item-share-cb)
- [Get One-Click VSIX for Firefox &rarr;](https://addons.mozilla.org/es-ES/firefox/addon/one-click-vsix/)

## License

This project is licensed under the **MIT License**. See the [LICENSE](https://github.com/ManuelGil/vscode-mustache-snippets/blob/main/LICENSE) file for full details.
