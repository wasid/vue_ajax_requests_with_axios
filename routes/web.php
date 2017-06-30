<?php

Route::get('/', function () {
    return view('welcome');
});

Route::get('skills', function () {
    return ['PHP', 'Laravel', 'JavaScript', 'Vue', 'Node JS'];
});

Route::get('projects/create', 'ProjectsController@create');
Route::post('projects', 'ProjectsController@store');
