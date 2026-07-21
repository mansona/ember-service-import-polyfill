module.exports = function () {
  return {
    name: 'undeprecate-inject-from-at-ember-service',
    visitor: {
      ImportDeclaration(path) {
        if (path.node.source.value === '@ember/service') {
          for (let specifier of path.node.specifiers) {
            if (
              specifier.type === 'ImportSpecifier' &&
              specifier.imported.name === 'service'
            ) {
              specifier.imported.name = 'inject';
            }
          }
        }
      },
    },
  };
};
