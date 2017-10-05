'use strict'

/*
|--------------------------------------------------------------------------
| Router
|--------------------------------------------------------------------------
|
| AdonisJs Router helps you in defining urls and their actions. It supports
| all major HTTP conventions to keep your routes file descriptive and
| clean.
|
| @example
| Route.get('/user', 'UserController.index')
| Route.post('/user', 'UserController.store')
| Route.resource('user', 'UserController')
*/

const Route = use('Route')

Route.on('/').render('welcome')
    // Route.get('/', 'StudentController.index')

Route.get('register', 'AuthController.showRegister')
Route.post('register', 'AuthController.register')

Route.get('login', 'AuthController.showLogin')
Route.post('login', 'AuthController.login')
Route.get('logout', 'AuthController.logout')

Route.group('admin', function() {
    Route.resource('/student', 'StudentController')
}).middleware('admin')