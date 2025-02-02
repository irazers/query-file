import { FlatCompat } from '@eslint/eslintrc';
import js from '@eslint/js';
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: js.configs.recommended,
  allConfig: js.configs.all,
});

export default [
  {
    ignores: ['bin', 'dist'],
  },
  ...compat
    .extends(
      'eslint:recommended',
      'plugin:@typescript-eslint/recommended',
      'plugin:prettier/recommended',
    )
    .map((config) => ({
      ...config,
      files: ['**/*.ts'],
    })),
  {
    files: ['**/*.ts'],

    rules: {
      '@typescript-eslint/interface-name-prefix': 'off',
      '@typescript-eslint/explicit-function-return-type': 'off',
      '@typescript-eslint/explicit-module-boundary-types': 'off',
      '@typescript-eslint/no-explicit-any': 'off',

      'sort-imports': [
        'error',
        {
          ignoreCase: true,
          ignoreDeclarationSort: true,
          ignoreMemberSort: false,
          memberSyntaxSortOrder: ['none', 'all', 'multiple', 'single'],
        },
      ],

      '@typescript-eslint/explicit-member-accessibility': [
        'error',
        {
          overrides: {
            constructors: 'no-public',
          },
        },
      ],

      semi: ['error', 'always'],
      quotes: ['error', 'single'],

      'prettier/prettier': [
        'error',
        {
          endOfLine: 'auto',
          printWidth: 85,
          singleQuote: true,
          trailingComma: 'all',
          tabWidth: 2,
          semi: true,
        },
      ],
    },
  },
  eslintPluginPrettierRecommended,
];
