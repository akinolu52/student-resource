'use strict'

/*
|--------------------------------------------------------------------------
| Database Seeder
|--------------------------------------------------------------------------
| Database Seeder can be used to seed dummy data to your application
| database. Here you can make use of Factories to create records.
|
| make use of Ace to generate a new seed
|   ./ace make:seed [name]
|
*/

// const Factory = use('Factory')
const Database = use('Database')

class DatabaseSeeder {

    *
    run() {
        // yield Factory.model('App/Model/User').create(5)
        // yield Factory.model('App/Model/Student').create(5)
        yield Database.table('students').insert([{
                matric_no: '120805034',
                firstname: 'ffirstname',
                lastname: 'lastname',
                number_of_course: '5',
                level: '200',
                department: 'computer science',
                faculty: 'engineering',
                next_of_kin: 'emmanuel adegoke',
                cgpa: '2.5',
                created_at: '2017-05-10 00:00:00',
                updated_at: '2017-05-10 00:00:00'
            },
            {
                matric_no: '120805035',
                firstname: 'akin',
                lastname: 'olu',
                number_of_course: '7',
                level: '400',
                department: 'computer science',
                faculty: 'science',
                next_of_kin: 'emmanuel adegoke',
                cgpa: '4.6',
                created_at: '2017-05-10 00:00:00',
                updated_at: '2017-05-10 00:00:00'
            }
        ])
    }

}

module.exports = DatabaseSeeder