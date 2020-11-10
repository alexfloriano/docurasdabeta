const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => (m && m.default) || m


exports.components = {
  "component---cache-dev-404-page-js": hot(preferDefault(require("/home/alex/projeto/docurasdabeta/.cache/dev-404-page.js"))),
  "component---src-pages-404-js": hot(preferDefault(require("/home/alex/projeto/docurasdabeta/src/pages/404.js"))),
  "component---src-pages-contato-js": hot(preferDefault(require("/home/alex/projeto/docurasdabeta/src/pages/contato.js"))),
  "component---src-pages-index-js": hot(preferDefault(require("/home/alex/projeto/docurasdabeta/src/pages/index.js"))),
  "component---src-pages-produtos-js": hot(preferDefault(require("/home/alex/projeto/docurasdabeta/src/pages/produtos.js"))),
  "component---src-pages-produtosgourmet-js": hot(preferDefault(require("/home/alex/projeto/docurasdabeta/src/pages/produtosgourmet.js"))),
  "component---src-pages-quemsomos-js": hot(preferDefault(require("/home/alex/projeto/docurasdabeta/src/pages/quemsomos.js")))
}

