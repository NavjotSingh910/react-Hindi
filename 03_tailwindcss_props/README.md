# Install Tailwind CSS with Vite

## Step 1 .
```terminal
npm install -D tailwindcss postcss autoprefixer
```
in upper command -D means install in ``devDependencies`` which is present in package.json 

- Because devDependencies used in for development after building the project it don't put load on application.

## Step 2 .
```terminal
npx tailwindcss init -p
```
it create a file thats name is tailwind.config.js

## Step 3 .
```js
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

``Configure your template paths`` Add the paths to all of your template files in your tailwind.config.js file.

## Step 4
```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```
``Add the Tailwind directives to your CSS`` Add the @tailwind directives for each of Tailwind’s layers to your ./src/index.css file.


## Step 5
```terminal
npm run dev
```
``Start your build process`` Run your build process with npm run dev.

## Step 6
```jsx
export default function App() {
  return (
    <h1 className="text-3xl font-bold underline">
      Hello world!
    </h1>
  )
}
```
``Start using Tailwind in your project`` Start using Tailwind’s utility classes to style your content.

## Sites 
- pixels
- dev ui 
- tailwind