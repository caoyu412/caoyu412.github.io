// http://eslint.org/docs/user-guide/configuring

module.exports = {
  root: true,
  parser: 'babel-eslint',
  parserOptions: {
    sourceType: 'module'
  },
  env: {
    browser: true,
  },
  extends: 'airbnb-base',
  // required to lint *.vue files
  plugins: [
    'html'
  ],
  // check if imports actually resolve
  'settings': {
    'import/resolver': {
      'webpack': {
        'config': 'build/webpack.base.conf.js'
      }
    }
  },
  // add your custom rules here
  'rules': {
    // don't require .vue extension when importing
    'import/extensions': ['error', 'always', {
      'js': 'never',
      'vue': 'never'
    }],
    // allow optionalDependencies
    'import/no-extraneous-dependencies': ['error', {
      'optionalDependencies': ['test/unit/index.js']
    }],

    'no-console': ['off'],
    'no-var': ['off'],
    'vars-on-top': ['off'],
    'prefer-template': ['off'],
    'prefer-arrow-callback': ['off'],
    'no-else-return': ['off'],
    'global-require': ['off'],// 后期调整
    'linebreak-style': ['off'],
    "semi": [0, "always"],
    "comma-dangle": [0],
    "no-plusplus": ['off'],
    "no-mixed-operators": 0,
    "no-new": 0,
    "no-param-reassign": 0,
    "no-return-assign": 0,
    "func-names": 0,
    "no-underscore-dangle": 0,
    "max-len": 0,
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0
  }
}
