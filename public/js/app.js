new Vue({
    el: '#app',

    data: {
            name: '',
            description: ''
    },

    methods: {
        onSubmit() {
            this.form.post('/projects')
                .then(response => alert('Wahoo!'));
        }
    }
});