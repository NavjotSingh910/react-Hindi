# create react project 
# create-react-app

## install react by using npx 

``` terminal
npx create-react-app appFolderName  (folder name must by contain lower letters)
npm run start   (first we always use run for start  at beginner level)

``` 
### Delete extra files From npx project
- setupTest.js
- reportWebVitals.js
- logo.svg
- App.test.js
- App.css
- index.css

### Check and understand files like:
- public - > index.html
- src    - > index.js
- package.json  (under dependencies find react-scripts that is responsible to inject script in html file )

#### create a new component in src
- Chai.js (but we also create it like Chai.jsx)
- Chai.js -> create new function which name starts with capital letter that is must 
-  function return a html element or other thing but must be we can return one element only

#
#
# Vite
## install react by using vite 

``` terminal
npm create vite@latest  (then hit enter and add project name then framework and then variant )

cd 01_vite_react
npm install (for node_modules folder)
npm run dev

```
### Delete extra files From vite project
- assets folder
- App.css
- index.css


### Check and understand files like:
- index.html (we find it in main or root of the folder (bhr hi pada hoga) )
- src    - > index.jsx
- package.json  (under dependencies it cannot provide  react-scripts so here in vite direct  inject script in index.html file  )


### add basic component and understand (vite)

#### create a new component in src
- Chai.jsx (extensions must be .jsx )
- Chai.jsx -> create new function which name starts with capital letter that is must 
-  function return a html element or other thing but must be we can return one element only
- To return multiple element developer use 
``` html
<div><!-- this is one element but contain many elements so div is use multiple time so react dev use new approach called fragment <></>-->
    <h1>chai</h1>
    <h2>aur</h2>
    <h2>code</h2>
</div>

<>
<!-- fragment -->
    <h1>chai</h1>
    <h2>aur</h2>
    <h2>code</h2>
</>
```


## Best Practice
- When we create components(functions) Capitalize name
- File Name also Capitalize
- Some libraries force as to make a component file  name with .jsx extension if they return html elements
