<?php

Route::get('/', function () {
    return view('welcome');
});

Route::get('skills', function () {
    return ['PHP', 'Laravel', 'JavaScript', 'Vue', 'Node JS'];
});
