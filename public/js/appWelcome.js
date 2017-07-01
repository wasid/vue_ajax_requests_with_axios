Vue.prototype.$http = axios

new Vue({
    
    el:'#appWelcome',
    
    data: {
        skills: []
    },
    
    mounted(){
        this.$http.get('/skills')
          .then(response =>
            this.skills = response.data
          );
    }
});