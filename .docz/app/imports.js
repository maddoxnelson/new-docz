export const imports = {
  'test.mdx': () =>
    import(/* webpackPrefetch: true, webpackChunkName: "test" */ 'test.mdx'),
}
