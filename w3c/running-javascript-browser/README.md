# Running Javascript in Browser

* [&lt;script>](#script)
* [onEvents](#onevents)
* [URL (JS)](#url-js)

## &lt;script>
---

### Body

[hello-body.html](hello-body.html):
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>Document</title>
</head>
<body>
  <h1>Running Javascript</h1>
  <script>
    console.log('Hello World!')
  </script>
</body>
</html>
```

### Body (file.js)

[hello-body-file.html](hello-body-file.html):
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>Document</title>
</head>
<body>
  <h1>Running Javascript</h1>
  <script src="js/main.js"></script>
</body>
</html>
```

[js/main.js](js/main.js):
```js
console.log('Hello World!')
```

### Head (file.js)

[hello-head-file.html](hello-head-file.html):
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>Document</title>
  <script src="js/main.js"></script>
</head>
<body>
  <h1>Running Javascript</h1>
</body>
</html>
```

## onEvents
---

[event-print.html](event-print.html):
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>Document</title>
</head>
<body>
  <h1>Running Javascript</h1>
  <button onclick="window.print()">Print</button>
</body>
</html>
```

## URL (JS)
---

[url-print.html](url-print.html):
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>Document</title>
</head>
<body>
  <h1>Running Javascript</h1>
  <a href="javascript:window.print()">Print</a>
</body>
</html>
```