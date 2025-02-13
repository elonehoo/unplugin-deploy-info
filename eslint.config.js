// eslint.config.js
import antfu from '@antfu/eslint-config'

export default antfu({
  rules: {
    'regexp/no-unused-capturing-group': 'off',
    'regexp/optimal-quantifier-concatenat': 'off',
    'regexp/no-super-linear-backtracking': 'off',
    'regexp/optimal-quantifier-concatenation': 'off',
  },
})
