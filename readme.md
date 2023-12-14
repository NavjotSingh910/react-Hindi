# create react project 

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



## install react by using npx 

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
