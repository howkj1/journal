
# Markdown Spell Check
## I can't ~~speell~~ spell


See: [markdown-spellcheck](https://www.npmjs.com/package/markdown-spellcheck)


Whether its a fat finger or having trouble braining, I don't want my typos ending up in my code or articles. After one too many helpful critiques it was time to set up spellcheck.

> Note: I am 1337 haxor and blogging out of [spacemacs](http://spacemacs.org/) 

## Install

```
npm i --save-dev markdown-spellcheck

```
## package.json

```
  "scripts": {
    "spellcheck": "mdspell -n -a './*.md' './articles/*.md'",
  }
```

## Running
```
>>> npm run spellcheck
```

## Output

![npm-run-all output](../images/mdspellcheck.png)


## Conclusion

Safety check for my spelling challenged brain!
