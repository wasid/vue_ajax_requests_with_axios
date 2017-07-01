<!doctype html>
<html lang="{{ app()->getLocale() }}">
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title>Laravel</title>

        <!-- Fonts -->
        <link href="https://fonts.googleapis.com/css?family=Raleway:100,600" rel="stylesheet" type="text/css">

    </head>
    <body>
        <div id="appWelcome">
            <ul>
                <li v-for="skill in skills">@{{skill}}</li>
            </ul>
        </div>
        <!-- Script -->
        <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/vue/2.3.4/vue.js"></script>
        <script src="https://unpkg.com/axios/dist/axios.min.js"></script>
        <script type="text/javascript" src="js/appWelcome.js"></script>
    </body>
</html>
