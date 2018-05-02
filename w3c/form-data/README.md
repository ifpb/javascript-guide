# [FormData](https://developer.mozilla.org/en-US/docs/Web/API/FormData)


## Example
---

```html
<form>
  <label>Login:</label>
  <input type="email" name="username" placeholder="username"><br>
  <label>Password:</label>
  <input type="password" name="password" placeholder="password"><br>
</form>
```

```js
const formElement = document.querySelector("form");
const formData = new FormData(formElement)
formData.get('username')
```

## References
---

* [Using FormData Objects](https://developer.mozilla.org/en-US/docs/Web/API/FormData/Using_FormData_Objects)