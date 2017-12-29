# Article

## Credit
see: [stackoverflow: VIM - multiple commands on same line ](https://stackoverflow.com/a/17391954)

## Why? 
Writing good code that makes the linter, the test and the tester happy is sometimes challenging: 

```
Type some code, run test .... LINT ERROR!!!
Type some code, run lint .... TEST ERROR!!!
```
I want to run the linter, auto-fix what it can and then tell me how bad the test are failing... 

## How? 

```
nmap <Leader>lt  :!npm run lint:js:fix <CR> :!npm run tests:unit <CR>
```

## Result
Type some code, space-l-t

```

  awesome test 
      ✓  is awesome!


        302 passing (1s)
```

