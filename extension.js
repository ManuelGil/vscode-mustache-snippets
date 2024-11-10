const fs = require('fs')
const path = require('path')
const vscode = require('vscode')

const mustache = require('./commands/mustache')
const delimiters = require('./commands/delimiters')

/**
 * @param {vscode.ExtensionContext} context
 */
function activate(context) {
  const mustache_new_file = vscode.commands.registerCommand(
    'mustache.new.file',
    (args) => {
      mustache(vscode, fs, path, args)
    },
  )
  const mustache_change_delimiters = vscode.commands.registerCommand(
    'mustache.change.delimiters',
    () => {
      delimiters(vscode)
    },
  )

  context.subscriptions.push(mustache_new_file)
  context.subscriptions.push(mustache_change_delimiters)
}

function deactivate() {}

module.exports = {
  activate,
  deactivate,
}
