'use strict'

/*
|--------------------------------------------------------------------------
| Model and Database Factory
|--------------------------------------------------------------------------
|
| Factories let you define blueprints for your database models or tables.
| These blueprints can be used with seeds to create fake entries. Also
| factories are helpful when writing tests.
|
*/

const Factory = use('Factory')

/*
|--------------------------------------------------------------------------
| User Model Blueprint
|--------------------------------------------------------------------------
| Below is an example of blueprint for User Model. You can make use of
| this blueprint inside your seeds to generate dummy data.
|
*/

Factory.blueprint('App/Model/User', (fake) => {
        return {
            username: fake.username(),
            email: fake.email(),
            password: fake.password()
        }
    })
    /*
    Factory.blueprint('App/Model/Student', (fake) => {
        return {
            matric_no: fake.username(),
            firstname: fake.firstname(),
            lastname: fake.lastname(),
            number_of_course: fake.number_of_course(),
            level: fake.level(),
            department: fake.department(),
            faculty: fake.faculty(),
            next_of_kin: fake.next_of_kin(),
            cgpa: fake.cgpa()
        }
    })
    */