# stringstonumbers

`stringstonumbersr` is a very simple `npm` package that converts any string input into a number and back. It was created to be used with the scratch-api module for transferring data over scratch cloud servers.

## How to use

### Install

`npm install stringstonumbers`

### Importing

```javascript
const strToNum = require('stringstonumbers');
```

### Encoding

```javascript
strToNum.encode('Hello World!')
// returns "07303737409122404337296200"
```

### Decoding

```javascript
strToNum.decode('07303737409122404337296200')
// returns "Hello World!"
```

### Custom Key

```javascript
// sets a custom encode/decode key. must be array with a length less than 100.
strToNum.setKey(['A','B','...'])
```
