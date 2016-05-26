# arbita
Flexible random redirector for sharing your favorite media.

## Installing
```sh
# npm i -g arbita
```

## Usage
Create a links file. File extensions will be processed as:
- `.js` exporting an `express.Router` instance
- `.json` with properties:
  - `links`: **Array** of links
  - `sub` [optional]: **Object** containing route names as keys and objects of the same structure (`{ links, [sub] }`) as values
- otherwise: a list of links separated by lines, ignoring `#` comments

For more information, visit [examples/](https://github.com/edge/arbita/tree/master/examples).

```sh
$ cat > search
  # Google
  https://www.google.com/
  https://www.yahoo.com/
# arbita search
```

A server now runs on port 80, which will randomly redirect you to Google or Yahoo.

`arbita` serves on port 80 by default. To serve on a different port, pass it as the second argument.

```sh
$ arbita [file] [port=80]
```
