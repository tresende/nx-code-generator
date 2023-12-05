import { ESLintUtils, TSESTree } from '@typescript-eslint/utils'

export const RULE_NAME = 'no-fc'
const notAllowed = ['FC', 'FunctionComponent']

export const rule = ESLintUtils.RuleCreator(() => __filename)({
  name: RULE_NAME,
  meta: {
    type: 'suggestion',
    docs: {
      description: ``,
      recommended: 'recommended'
    },
    schema: [],
    messages: {
      'avoid-react-fc': 'Pelo amor de deus, não use React.FC'
    }
  },
  defaultOptions: [],

  //https://astexplorer.net/#/gist/eb17b8eabbaf116359468180b99b2030/35d16d52be024558b65d94af8cb62f3581f23486
  create(context) {
    return {
      'VariableDeclarator > Identifier > TSTypeAnnotation > TSTypeReference > TSQualifiedName': (
        node: TSESTree.TSQualifiedName
      ) => {
        if (notAllowed.includes(node.right.name)) {
          context.report({
            messageId: 'avoid-react-fc',
            node: node.right
          })
        }
      }
    }
  }
})
