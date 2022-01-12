## Project Setup
###### install dependencies
***Direct <script> include***

Simply download the vue.js file and include with a script tag. Vue will be registered as a global variable.

1. We need to create a folder and inside that we need to keep our downloaded vue.js file.
2. In the folder, create two files- index.html and a js file(app.js here).
3. In the project's index.html file include
**<script src="vue.js"></script>**

## Creating Connectivity
1. In our app.js file, create a vue instance. In the el parameter of this instance set "#app"(el takes the id of DOM element).
2. So we need to create a div in our index.html with the id "app" and include **<script src="app.js"></script>**. Now we can access the instance and any changes made to the instance will affect the div and nothing outside it.
