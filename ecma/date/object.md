# Date

Date objects are based on a time value that is the number of milliseconds since 1 January, 1970 UTC<br>
Range is -100,000,000 days to 100,000,000 days relative to 01 January, 1970 UTC

### Create Date

---

```js
// new Date();
var today = new Date();

// new Date(value);
var birthday = new Date(819169200000);

// new Date(dateString);
var birthday = new Date('Sun Dec 17 1995 00:00:00 GMT-0300 (BRT)');
var birthday = new Date('December 17, 1995 03:24:00');
var birthday = new Date('1995-12-17T03:24:00');

// new Date(year, month);
// new Date(year, month, date, hours, minutes, seconds, milliseconds);
var birthday = new Date(1995, 11, 17);
var birthday = new Date(95, 11, 17);
var birthday = new Date(1995, 11, 17, 3, 24, 0);

// Date()
var birthday = Date(819169200000); // String
var birthday = Date(1995, 11, 17); // String
```

## OBJECT

---

### Date.now

```js
console.log(Date.now()); // number of milliseconds since January 1, 1970, 00:00:00 UTC
```

### Date.parse()

```js
// like new Date(dateString)
// RFC2822 / IETF date syntax (RFC2822 Section 3.3)
// http://tools.ietf.org/html/rfc2822#section-3.3
console.log(Date.parse('Dec 25, 1995'));
console.log(Date.parse('12/25/2014'));
console.log(Date.parse('12 25 2014'));
console.log(Date.parse('Wed, 09 Aug 1995'));

console.log(isNaN(Date.parse(`${10}/${30}/${2016}`)));
console.log(isNaN(Date.parse(`${10}/${40}/${2016}`)));
```

### Getter

```js
var date = new Date();
console.log(date.getDate()); // day of the month (1-31)
console.log(date.getDay()); // day of the week (0-6)
console.log(date.getFullYear()); // year (4 digits for 4-digit years)
console.log(date.getHours()); // hour (0-23)
console.log(date.getMilliseconds()); // milliseconds (0-999)
console.log(date.getMinutes()); // minutes (0-59)
console.log(date.getMonth()); // month (0-11)
console.log(date.getSeconds()); // seconds (0-59)
console.log(date.getTime()); // number of milliseconds since January 1, 1970, 00:00:00 UTC
console.log(date.getYear()); // year (usually 2-3 digits)
```

### Setter

### Conversion getter

```js
// toDateString()
console.log(new Date().toDateString());

// toJSON()
console.log(new Date().toJSON());

// toLocaleString()
console.log(new Date().toLocaleString('en-US'));
console.log(new Date().toLocaleString('pt-BR'));

// toString()
console.log(new Date().toString());

// toLocaleFormat(formatString)
// A format string in the same format expected by the strftime() function in C.
// http://pubs.opengroup.org/onlinepubs/007908799/xsh/strftime.html
```
