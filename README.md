# chrome-clone-vanillajs

Javascript for Beginners

# 1. LOGIN

1. console.dir() : The method console.dir() displays an interactive list of the properties of the specified JavaScript object.

```
console.log(loginInput);
```

2. variable.length : The length data property of a String value contains the length of the string in UTF-16 code units.

3. HTML form validation

- Requirements : inside of a form

```
<input required maxlength="15" type="text" placeholder="What is your name?" />
```

- Instead of JavaScript validation

```
if (username === "") {
  alert("Please write your name");
} else if (username.length > 15) {
  alert("Your name is too long");
}
```

- Without submit refresh

```
function onLoginBtnSubmit(event) {
  event.preventDefault(); // prevent default behavior
  console.log(event); // addEventListener first argument : event information
}
loginForm.addEventListener("submit", onLoginBtnSubmit);
```

4. Remove Form

```
// CSS
.hidden {
  display: none;
}

// JavaScript
const HIDDEN_CLASSNAME = "hidden";

form.classList.add(HIDDEN_CLASSNAME);
```

```
greeting.classList.remove(HIDDEN_CLASSNAME);
```

5. Variable + String

```
greeting.innerText = `Hello ${username}`;
```

6. localStorage

- setItem(key, value)
- getItem(key)
- removeItem(key)

# 2. CLOCK

1. Interval

```
setInterval(func, 5000) // 5000ms(5s)
```

2. Timeout

```
setTimeout(func, 5000)
```

3. Date

```
const date = new Date()
date.getDate()
date.getDay()
date.getFullYear()
date.getHours()
date.getMinutes()
date.getSeconds()
```

```
"".padStart(2, "0")
String().padStart(2, "0")
```

3. QUOTES AND BACKGROUND
