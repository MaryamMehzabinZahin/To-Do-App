
new Vue({
    el:"#app",
    data:
    {
        isEditing:false,
        isActive:false,
        selectedIndex:null,
        new_item:"",
        todos:["reading","shopping"]
    },
    methods: {
        addTodo()
        {
        
            if(this.todo)
            {
            this.todos.push(this.todo)
            this.todo=""
            }
            else
            {
                window.alert("Please, write something")
            }
            
            
        },

        editTodo(index,todo)
        {
           
            this.todo=todo
            
            this.selectedIndex=index
            this.isEditing=true
            this.isActive=true
           
           
        },

        updateTodo()
        {
           
            if(this.todo)
            {
                this.todos.splice(this.selectedIndex,1,this.todo)
                this.isEditing=false
                this.isActive=false
                this.todo=""
            }
            else
            {
                window.alert("Please, write something")
            }
            
        },

        deleteTodo(index)
        {
            this.todos.splice(index,1)
        },

        goBack()
        {
            this.isEditing=false
            this.isActive=false
            this.todo=""
        }
    }
    

});