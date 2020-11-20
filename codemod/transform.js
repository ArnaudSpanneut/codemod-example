// Press ctrl+space for code completion
export default function transformer(file, api) {
  const j = api.jscodeshift;
  const root = j(file.source);

  const removeIIFE = () => {
    // 1. Query AST
    root
      .find(j.ExpressionStatement, {
        expression: { callee: { id: { name: "iife" } } },
      })
      // 2. Loop on AST nodes
      .forEach((ast) => {
        // 3. Replace element
        j(ast).replaceWith(ast.node.expression.callee.body.body);
      });
  };

  const exportClass = () => {
    // 1. Query AST
    root
      .find(j.ClassDeclaration)
      // 2. Loop on AST nodes
      .forEach((ast) => {
        // 3. Define the new ES tree
        const exportNode = j.exportNamedDeclaration(ast.node);
        // 4. Replace with the new export definition
        j(ast).replaceWith(exportNode);
      });
  };

  // Run baby run
  removeIIFE();
  exportClass();

  // Remrite the file
  return root.toSource();
}
