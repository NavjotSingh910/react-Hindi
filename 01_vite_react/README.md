# Custom react Using vite
- App is a function so we can directly write a function in other component(or main.jsx) that is write in App.jsx 

- But remember that here is also function name starts with capital letter

- we can also write direct function name instead of react tag for example:
```jsx 

ReactDOM.createRoot(document.getElementById('root'))
.render(
  //  <React.StrictMode>
  // {/* its work without React.StrictMode but developer can use this for optimization */}
  // <App />
  
  // <myApp/>//not allowed captilized 
  //<MyApp/>
  MyApp()//also write like that but  not good practice

  // </React.StrictMode>,
)

```

- we can also write directly write a element in React dom for example:
```jsx

ReactDOM.createRoot(document.getElementById('root'))
.render(
  
<h1>Hello guyzz</h1> //also allowed


)
```

- But we cannot give our custom object like that we use in our custom react example:
```jsx

const ReactElement= { //not alowed 
  type:'a',
  props:{
      href:'http://google.com',
      target:'_blank'
  },
  children:'click me to visit google'

}

ReactDOM.createRoot(document.getElementById('root'))
.render(
  <ReactElement/> //not allowed because here react wants proper element or  function so that it would be convert it into dom tree and object according to pre defined rules
)
```

- we can also store html element in variable and pass it to React dom its convert it into a tree structure and object for example:

```jsx
const anotherElement=(<a href='www.google.com' target='_blank'>Visit google here</a>)

ReactDOM.createRoot(document.getElementById('root'))
.render(
  anotherElement //also allowed
)
```

- we can create element using react create that is imported from React Method for example
```jsx
const anotherElement2=React.createElement('a',{href:'www.google.com',target:'_blank'},'click me')//tag,object(of attributes or empty but nesscery to give),text

ReactDOM.createRoot(document.getElementById('root'))
.render(

  anotherElement2

)
```


# How to use variable value in react
- use curly brackets for write a variable into html element example
```jsx
const username='Navjot';//here declare user name
function Chai(){
    return(
        <>
        <h1>chai</h1>
         <h2>aur</h2>
        <h2>code</h2>
        <h3>{username}</h3> {/*here i use it*/}
        </>
    )
}

export default Chai;
```

- But we give evaluated expression we cannot give full expression in to this like if condition etc. for example:

```jsx
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

const myName="Navjot Singh"

const anotherElement2=React.createElement('a',{href:'https://www.google.com',target:'_blank'},'click me ',myName,myName)//here at the last we can give mulitple variables


ReactDOM.createRoot(document.getElementById('root'))
.render(
  anotherElement2

)

```

- also upper code shows that we can give final value of variable `not` a expression of variable for example:
```jsx
   const anotherElement2=React.createElement(
    'a',
   {
    href:'https://www.google.com',
    target:'_blank'
   },
   'click me ',
   if(){})//not allowed full expression

```