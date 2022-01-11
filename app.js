
new Vue({ //creating vue instance
    el:"#app",
    data:
    {
        isSh:false,
        isEditing:false,
        isActive:false,
        selectedIndex:null,
        new_item:"",
        todos:["reading a book","go to shopping", "call a cousin", "watering the plants", "giving house keys to mom", "take medicines"],//list for active todos
        completed:[]
        //list for completed tasks
    },
    methods: {
        addTodo()
        {
        
            if(this.todo)//if the user add someting other than empty string, todo gets added to the todos list.
            {
            this.todos.push(this.todo)
            this.todo=""
            }
            else//if user tries to add empty string
            {
                window.alert("Please, write something")
            }       
         },

        editTodo(index,todo)
        {
            this.todo=todo
            this.selectedIndex=index
            this.isEditing=true//isEditing is turned true so the update is enabled rather than 'ADD'
            this.isActive=true         
        },

        updateTodo()
        {         
            if(this.todo)
            {
                this.todos.splice(this.selectedIndex,1,this.todo) //deleting 1 element at the selectedIndex
                this.isEditing=false
                this.isActive=false //it is turned false so that all other buttons are disabled while updating
                this.todo=""
            }
            else
            {
                window.alert("Please, write something")//if user tries to add empty string
            }
            
        },

        deleteTodo(index)
        {
            this.todos.splice(index,1)//deleting 1 element at the selectedIndex
        },

        goBack()//when user tries to skip the update
        {
            this.isEditing=false
            this.isActive=false
            this.todo=""
        },

        createCompleted(index,todo)
        {
            this.todo=todo
            this.index=index
            this.completed.push(this.todo) //creating completed list 
            this.todos.splice(this.index,1)//deleting the completed todos from the active todos
            this.todo=""           
        },

        deleteAll()
        {
                for(var i=this.completed.length-1;i>=0;i--)//deleting completed todos one by one by using their index values
                {
                this.completed.splice(i,1)
                }
        }


    }
    

});