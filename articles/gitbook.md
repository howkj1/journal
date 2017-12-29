# Gitbook : Getting started

## Why

I wanted a place to blog \(reference resources\) but didn't want to reinvent the wheel. It had to be public, easy to host \(free / cheap\) and would be great to scale with analytics. ;\)

## My own blog \(Problem\)!

Most of my favorite tech blogs are simple and mostly look like they were edited by hand. With so much content I would bookmark a few articles \(or the whole site\) and promise myself I would come back. After a short time, my bookmarks became a mess and I found myself trying to google for that one thing that one guy said a while back. The problem, I got sucked down the rabbit hole of Jekyll, gh-pages and pretty much everything listed on [staticgen](https://www.staticgen.com/). I was spending more time configuring then blogging. Once I got a theme published I realized it didn't have this feature or couldn't do that thing.

That's when I realized:

> The content is why I kept coming back not the flashy graphics!

As I looked for ways to organize my madness \(that didn't require [ yak shaving ](https://www.google.com/search?q=yak+shaving&oq=yak+shaving&aqs=chrome..69i57j0l5.2923j0j7&sourceid=chrome&ie=UTF-8)\) I started to see a trend:

* [Redux](http://redux.js.org/)
* [Learn Javascript](https://gitbookio.gitbooks.io/javascript/content/)
* [Front-End Developer Handbook](https://www.frontendhandbook.com/)
* [many more](https://www.gitbook.com/explore).

## Gitbook

Even the sites that I bookmarked that were not a Gitbook they were simple and straight forward. Gitbook was searchable, easy to deploy and has plugins for analytics, disqus, etc. So, we have a static blogger that can be hosted anywhere, how do I use it?

```
npm init

# If running gitbook commands from npm scripts
npm install --save-dev gitbook-cli

# If runing gibook commands on commandline
npm install -g gitbook-cli
```

### Build locally

```
gitbook install
touch README.md
gitbook build
```

## Serve locally

```
gitbook serve
```

### Optional: [Disqus](https://plugins.gitbook.com/plugin/disqus)

```
book.json
{
    "plugins": ["disqus"],
    "pluginsConfig": {
        "disqus": {
            "shortName": "xxxxxxxx"
        }
    }
}
```

There we go!

## Aditional Resources:

[Using Gitbook to document an open source project](https://medium.com/@gpbl/how-to-use-gitbook-to-publish-docs-for-your-open-source-npm-packages-465dd8d5bfba)

[https://github.com/GitbookIO/plugin](https://github.com/GitbookIO/plugin)

[https://github.com/Bandwidth/docs-theme\#readme](https://github.com/Bandwidth/docs-theme#readme "GitBook API Theme")

[https://www.npmjs.com/package/gitbook-plugin-theme-gestalt](https://www.npmjs.com/package/gitbook-plugin-theme-gestalt)

[https://plugins.gitbook.com/plugin/summary](https://plugins.gitbook.com/plugin/summary)

[https://plugins.gitbook.com/plugin/recently-updated](https://plugins.gitbook.com/plugin/recently-updated)

[https://plugins.gitbook.com/plugin/codesandbox](https://plugins.gitbook.com/plugin/codesandbox)

* [https://npm.runkit.com/gitbook-plugin-codesandbox](https://npm.runkit.com/gitbook-plugin-codesandbox)
* [https://github.com/WebEngage/gitbook-plugin-copy-code-button](https://github.com/WebEngage/gitbook-plugin-copy-code-button)

[https://plugins.gitbook.com/plugin/terminal](https://plugins.gitbook.com/plugin/terminal)

[https://github.com/chudaol/gitbook-plugin-insert-md\#readme](https://github.com/chudaol/gitbook-plugin-insert-md#readme)

[https://github.com/visallo/gitbook-plugin-github-embed](https://github.com/visallo/gitbook-plugin-github-embed)

[https://plugins.gitbook.com/plugin/exercises](https://plugins.gitbook.com/plugin/exercises)

[https://github.com/KimGenius/plugin-codetabs\#readme](https://github.com/KimGenius/plugin-codetabs#readme)

[https://plugins.gitbook.com/plugin/include-codeblock](https://plugins.gitbook.com/plugin/include-codeblock)

[https://plugins.gitbook.com/plugin/insert-logo](https://plugins.gitbook.com/plugin/insert-logo)

[https://plugins.gitbook.com/plugin/versions](https://plugins.gitbook.com/plugin/versions)

[https://www.npmjs.com/package/gitbook-plugin-image-captions](https://www.npmjs.com/package/gitbook-plugin-image-captions)

[https://github.com/Mavrin/gitbook-plugin-jsfiddle](https://github.com/Mavrin/gitbook-plugin-jsfiddle)

[https://www.npmjs.com/package/gitbook-tester](https://www.npmjs.com/package/gitbook-tester)

[https://www.npmjs.com/package/gitbook-tester](https://www.npmjs.com/package/gitbook-tester)  
[https://toolchain.gitbook.com/themes/](https://toolchain.gitbook.com/themes/)



### Storybook

[https://github.com/tuchk4/storybook-readme](https://github.com/tuchk4/storybook-readme)[https://storybook.js.org/addons/addon-gallery/](https://storybook.js.org/addons/addon-gallery/)

[https://github.com/storybook-eol/addon-backgrounds](https://github.com/storybook-eol/addon-backgrounds)

[https://github.com/storybooks/addon-jsx](https://github.com/storybooks/addon-jsx)

[https://github.com/tsuyoshiwada/storybook-chrome-screenshot](https://github.com/tsuyoshiwada/storybook-chrome-screenshot)

[https://github.com/storybooks/storybook](https://github.com/storybooks/storybook)

