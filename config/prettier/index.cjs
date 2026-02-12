'use strict';

/**
 * This file documents all file-based configuration options supported by `prettier`.
 *
 * Each option is detailed for the understanding of:
 *
 * - Options which are available
 * - Options which have been overridden
 * - Options which have remain default
 *
 * This file is correct as of `prettier@2.8.8`.
 *
 * The order of this file is non-default options at the top in alphabetical order followed by
 * default options, also in alphabetical order (default options are commented out).
 */

/**
 * @type {import('prettier').Config}
 */
module.exports = {
  /**
   * Specify the line length that the printer will wrap on.
   *
   * @default 80
   * @type {number}
   */
  printWidth: 100,

  /**
   * By default, Prettier will wrap markdown text as-is since some services use a
   * linebreak-sensitive renderer. In some cases you may want to rely on editor/viewer soft wrapping
   * instead, so this option allows you to opt out.
   *
   * @default 'preserve'
   * @type {'always' | 'never' | 'preserve'}
   */
  proseWrap: 'always',

  /**
   * Use single quotes instead of double quotes.
   *
   * @default false
   * @type {boolean}
   */
  singleQuote: true,

  /**
   * Print trailing commas wherever possible.
   *
   * @default 'es5'
   * @type {'none' | 'es5' | 'all'}
   */
  trailingComma: 'all',

  /**
   * Include parentheses around a sole arrow function parameter.
   *
   * @default 'always'
   * @type {'avoid' | 'always'}
   */
  // arrowParens: 'always',

  /**
   * Put the `>` of a multi-line HTML (HTML, JSX, Vue, Angular) element at the end of the last line
   * instead of being alone on the next line (does not apply to self closing elements).
   *
   * @default false
   * @type {boolean}
   */
  // bracketSameLine: false,

  /**
   * Print spaces between brackets in object literals.
   *
   * @default true
   * @type {boolean}
   */
  // bracketSpacing: true,

  /**
   * Control whether Prettier formats quoted code embedded in the file.
   *
   * @default 'auto'
   * @type {'auto' | 'off'}
   */
  // embeddedLanguageFormatting: 'auto',

  /**
   * Which end of line characters to apply.
   *
   * @default 'lf'
   * @type {'auto' | 'lf' | 'crlf' | 'cr'}
   */
  // endOfLine: 'lf',

  /**
   * How to handle whitespaces in HTML.
   *
   * @default 'css'
   * @type {'css' | 'strict' | 'ignore'}
   */
  // htmlWhitespaceSensitivity: 'css',

  /**
   * Prettier can insert a special @format marker at the top of files specifying that
   * the file has been formatted with prettier. This works well when used in tandem with
   * the --require-pragma option. If there is already a docblock at the top of
   * the file then this option will add a newline to it with the @format marker.
   *
   * @default false
   * @type {boolean}
   */
  // insertPragma: boolean,

  /**
   * Put the `>` of a multi-line JSX element at the end of the last line instead of being alone on
   * the next line.
   *
   * @deprecated use bracketSameLine instead
   * @default false
   * @type {boolean}
   */
  // jsxBracketSameLine: false,

  /**
   * Use single quotes in JSX.
   *
   * @default false
   * @type {boolean}
   */
  // jsxSingleQuote: false,

  /**
   * Specify plugin directory paths to search for plugins if not installed in the same
   * `node_modules` where prettier is located.
   *
   * @default false
   * @type {string[] | false}
   */
  // pluginSearchDirs: false,

  /**
   * Change when properties in objects are quoted.
   * @default 'as-needed'
   * @type {'as-needed' | 'consistent' | 'preserve'}
   */
  // quoteProps: 'as-needed',

  /**
   * Prettier can restrict itself to only format files that contain a special comment, called a
   * pragma, at the top of the file. This is very useful when gradually transitioning large,
   * unformatted codebases to prettier.
   *
   * @default false
   * @type {boolean}
   */
  // requirePragma: false,

  /**
   * Print semicolons at the ends of statements.
   *
   * @default true
   * @type {boolean}
   */
  // semi: true,

  /**
   * Enforce single attribute per line in HTML, Vue and JSX.
   *
   * @default false
   * @type {boolean}
   */
  // singleAttributePerLine: false,

  /**
   * Specify the number of spaces per indentation-level.
   *
   * @default 2
   * @type {number}
   */
  // tabWidth: 2,

  /**
   * Indent lines with tabs instead of spaces.
   *
   * @default false
   * @type {boolean}
   */
  // useTabs: false,

  /**
   * Whether or not to indent the code inside <script> and <style> tags in Vue files.
   *
   * @default false
   * @type {boolean}
   */
  // vueIndentScriptAndStyle: false,
};
