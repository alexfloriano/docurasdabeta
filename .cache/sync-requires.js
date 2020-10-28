const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => (m && m.default) || m


exports.components = {
  "component---cache-dev-404-page-js": hot(preferDefault(require("/home/alex/projeto/docurasdabeta/.cache/dev-404-page.js"))),
  "component---src-pages-404-js": hot(preferDefault(require("/home/alex/projeto/docurasdabeta/src/pages/404.js"))),
  "component---src-pages-blog-js": hot(preferDefault(require("/home/alex/projeto/docurasdabeta/src/pages/blog.js"))),
  "component---src-pages-index-js": hot(preferDefault(require("/home/alex/projeto/docurasdabeta/src/pages/index.js"))),
  "component---src-pages-projects-js": hot(preferDefault(require("/home/alex/projeto/docurasdabeta/src/pages/projects.js"))),
  "component---src-pages-stack-js": hot(preferDefault(require("/home/alex/projeto/docurasdabeta/src/pages/stack.js")))
}

