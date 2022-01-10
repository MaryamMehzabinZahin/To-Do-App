new Vue({
    el:"#app",
    data:
    {
        new_item:"",
        todos:["reading","shopping"]
    },
    methods: {
        addTodo()
        {
            this.todos.push(this.new_item)
            this.new_item=""
        }
    }
    

});