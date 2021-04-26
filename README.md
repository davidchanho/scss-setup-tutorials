# SCSS Setup

---

## What's the big deal?

Sass announced that [@import](https://sass-lang.com/documentation/at-rules/import) will be deprecated and will be replaced by [@use](https://sass-lang.com/documentation/at-rules/use) and [@forward](https://sass-lang.com/documentation/at-rules/forward).

## Why isn't it working?

libSass and node-sass are both [deprecated](https://sass-lang.com/blog/libsass-is-deprecated)!

None of the VS code extentions, such as [Live Sass Complier](https://marketplace.visualstudio.com/items?itemName=ritwickdey.live-sass) have been updated in years (since 2017) and do not support it.

## How do I fix it?

HTML, CSS, Javascript

### Option 1: Continue to @import and continue using live sass complier or node-sass.

### Option 2: Compling scss into css using [dart sass](https://www.npmjs.com/package/sass)

[github](https://github.com/davidchanho/scss-setup-tutorials/tree/main/2-compile-scss)

Initiate npm

```
npm init -y
```

- Creates a package.json and allows user to install npm packges in the folder.

[Install](https://sass-lang.com/install) sass

```
npm i sass -D
```

folder set up

```
src
  - styles
    - scss
    	- styles.scss
    - styles.css
  - scripts
  	- script.js
index.html
package.json
```

compile sass into css

```
sass --watch styles/scss/styles.scss styles/styles.css
```

--watch - keep compling scss into css without retyping the above command every time.

styles/scss/index.scss - compile the scss file named index in the folder styles/scss and compile it

styles/index.css - output the css file index and put it in the folder styles.

Hook css to html

index.html

<head>
 <link rel="stylesheet" href="styles/styles.css">
</head>

### Option 3: Gulp Setup

[github](https://github.com/davidchanho/scss-setup-tutorials/tree/main/3-gulp-scss)

### Option 4: Webpack Setup

[github](https://github.com/davidchanho/scss-setup-tutorials/tree/main/4-webpack-scss)

### Option 5: PostCSS Setup

[github](https://github.com/davidchanho/scss-setup-tutorials/tree/main/5-postcss-scss)

### Bonus: React Setup

[github](https://github.com/davidchanho/scss-setup-tutorials/tree/main/6-react-scss)
