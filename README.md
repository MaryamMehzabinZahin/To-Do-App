# To-do App
This is a simple everyday use To-do app. Users can add a to-do(task to be done). They can edit the to-dos and delete them also. They can also track how many tasks they have already completed. They can easily remove all the completed tasks if they don't want to track them.

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

## Documentation of the features
***ADD:***
1. In index.html, we are using directive v-if. If isEditing is false(by default it is false), then it enters into that div and works accordingly.
2. I have used v-model for binding inputs. When the add button is clicked(used @click which is the shorthand for v-on:click), addTodo method is called.
3. In the addTodo method, we are checking if the user add someting(other than empty string), todo gets added to the todos list. Otherwise, an alert is created.
4. In the index.html we are using v-for for displaying the list items.


***Edit:***

1.  When the user clicks Edit button editTodo is called. We are passing the index and the todo from the todos list as parameters. 
2.  isEditing is turned true so the update is enabled rather than 'ADD' in the index.html. We are using the reactive nature of vue here.
3.  isActive is also turned on, so user can click on either 'Update' or 'Go Back' button(other buttons are disabled for isActive)
4.  If user clicks 'Update', updateTodo is called, splice function starts working by deleting 1 element at the selectedIndex and replacing that by this.todo(user input of that object). isEditing and isActive is turned false.
5.  If 'Go Back' is clicked, isEditing and isActive is turned false so all the buttons are active and previous state is regained using the reactive nature of vue.


***Delete:***

1.  When 'Delete' is clicked, deleteTodo is called and  splice function starts working by deleting 1 element at the selected index.


***Completed:***
1. When one todo is done, user can mark it as completed by pressing completed button. 
2. once it is done, the completed task is deleted from the todos list and added in the completed list(done in createCompleted method).
   completed todos are striked and shown on the page with the total count of completed tasks.
3. In index.html, v-if is used to verify that the complted list has a length > 0, then the completed list elements are shown along with count.


***Delete ALL:***
1. deleteAll method delete completed todos one by one by using their index values.
