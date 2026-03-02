// Provide explicit declarations for the `react-dom/client` entrypoint to
// satisfy the TypeScript language server.  The official @types package is
// already installed, but the editor sometimes treats this module as type-
// only which leads to spurious errors. Overriding here ensures the module is
// treated as a value-exporting ES module with a default export and named
// helpers like `createRoot`.

declare module 'react-dom/client' {
  import * as ReactDOM from 'react-dom';

  export interface Root {
    render(children: React.ReactNode): void;
    unmount(): void;
  }

  export function createRoot(
    container: Element | Document | DocumentFragment,
    options?: { identifierPrefix?: string }
  ): Root;

  // re-export a default to allow default-style imports used by the build.
  const ReactDOMIncluded: typeof ReactDOM & {
    createRoot: typeof createRoot;
  };
  export default ReactDOMIncluded;
}
