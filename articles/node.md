# Node

## Global Packages

```
npm list -g --depth=0
```

See: [Listing globally installed NPM packages and version](https://ponderingdeveloper.com/2013/09/03/listing-globally-installed-npm-packages-and-version/)

## npm-run-all

see: [npm-run-all](articles/npmrunall.md)

## md preview with vmd

```
npm i -g vmd; vmd README.md
```

See: [vmd](https://github.com/yoshuawuyts/vmd)

## git patch

```
git add --patch
git diff --cached
```

See: [7.2 Git Tools - Interactive Staging](https://git-scm.com/book/en/v2/Git-Tools-Interactive-Staging)

## { Error: listen EADDRINUSE 0.0.0.0:8080

```
killall -9 node
```

## npm update

```
npm outdated
```

```
npm i -S <package>@version
```