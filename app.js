new Vue({
    el:"#app",
    data:
    {
        isEditing:false,
        selectedIndex:null,
        new_item:"",
        todos:["reading","shopping"]
    },
    methods: {
        addTodo()
        {
            this.todos.push(this.todo)
            this.todo=""
        },

        editTodo(index,todo)
        {
            this.todo=todo
            this.selectedIndex=index
            this.isEditing=true
        },

        updateTodo()
        {
            this.todos.splice(this.selectedIndex,1,this.todo)
            this.isEditing=false
            this.todo=""
        },

        deleteTodo(index)
        {
            this.todos.splice(index,1)
        }
    }
    

});