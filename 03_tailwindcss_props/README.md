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


#
#

# Props
we are use props for give dynamic properties 
``card.js``
```jsx
// function Card(props){
function Card({name,definedObj={name:'null',email:"null@navjot.com"}}){//default values and also give direct props propties using{} 
    // console.log(props.name)
    console.log(name)
    console.log(definedObj["name"],definedObj.email)
    return (<div className="relative h-[400px] w-[300px] rounded-md">
    <div className="absolute bottom-4 left-4 text-left">
      <h1 className="text-lg font-semibold text-white">{definedObj.name}</h1>
      <p className="mt-2 text-sm text-gray-300">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi,
        debitis? Email:{definedObj.email}
      </p>
      <button className="mt-2 inline-flex cursor-pointer items-center text-sm font-semibold text-white">
        View Profile →
      </button>
    </div>
  </div>)
}
export default Card
```

``App.js``
```jsx

import './App.css'
import Card from './components/Card';

function App() {
  let directObj={name:'navjot',email:"navjot@navjot.com"};
  let DirectArray=[1,2,3,4];
  return (
    <>
    <h1 className='bg-green-400 text-black p-4 rounded-xl mb-4'>Tailwind Test</h1>
    <Card name='Navjot' definedObj={directObj} rollNo='21071283' definedArray={DirectArray}/>
    <Card name='Imran' definedObj={directObj} rollNo='21071283' definedArray={DirectArray}/>
    {/* <Card name='Navjot' directObj={} DirectArray=[1,2,3,4]/> Direct object and array are not  */}
    {/* <Card name='Navjot' /> */}
    {/* <Card/> */}
    </>
  )
}

export default App

```