class Errors{
    
    constructor(){
        this.errorMsg = {};
    }
    
    get(field){
       if (this.errorMsg[field]) {
           return this.errorMsg[field][0];
       } 
    }

    has(field){
       return this.errorMsg.hasOwnProperty(field)
    }
    
    any(){
        
        return Object.keys(this.errorMsg).length > 0;
        
    }
    

    record(response){
        this.errorMsg = response;
    }
    
    clear(field){
        delete this.errorMsg[field]
    }
    
}
new Vue({
    
    el: '#app',
    data: {
            name: '',
            description: '',
            errorMsg: new Errors()
    },

    methods: {
        onSubmit() {
            axios.post('/projects', this.$data)
                .then(this.onSuccess)
                .catch(error => this.errorMsg.record(error.response.data));
        },
        
        onSuccess(response){
            alert(response.data.message);
            
            this.name = '';
            this.description = '';
        }
    }
});