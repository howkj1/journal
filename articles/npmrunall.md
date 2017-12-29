# npm-run-all

## Making npm scripts great again!


See: [npm-run-all](https://github.com/mysticatea/npm-run-all/blob/master/docs/npm-run-all.md)

npm scripts are great, but it started to get out of hand. Use this trick to clean up your package.json and give some great output!


## Install

```
npm i --save-dev npm-run-all
```
### package.json

```
  "scripts": {
    "start"  : "npm-run-all -l start:*",
    "start:1": "echo 'this is start 1'",
    "start:2": "echo 'this is start 2'",
    "start:3": "echo 'this is start 3'",
    "start:4": "echo 'this is start 4'",
    "start:5": "echo 'this is start 5'",
    "startme"  : "npm-run-all -l start:*"
  }
```

## Running
```
# I am hijacking the start script
>>> npm start

# Otherwise...
>>> npm run startme
```
## Output 

![npm-run-all output](../images/npm_run_all.png)

## Conclusion

 Cleaner package.json, better output, useful? What do you think?
