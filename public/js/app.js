class Errors{
    
    constructor(){
        this.errorMsg = {};
    }
    
    get(field){
       if (this.errorMsg[field]) {
           return this.errorMsg[field][0];
       } 
    }
    
    record(response){
        this.errorMsg = response;
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
                .then(response => alert('Wahoo!'))
                .catch(error => this.errorMsg.record(error.response.data));
        }
    }
});