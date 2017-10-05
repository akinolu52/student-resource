'use strict'

const Schema = use('Schema')

class StudentsTableSchema extends Schema {

    up() {
        this.create('students', (table) => {
            table.increments()
            table.integer('matric_no').unique().unsigned()
            table.string('firstname')
            table.string('lastname')
            table.string('number_of_course')
            table.string('level')
            table.string('department')
            table.string('faculty')
            table.string('next_of_kin')
            table.string('cgpa')
            table.timestamps()
        })
    }

    down() {
        this.drop('students')
    }

}

module.exports = StudentsTableSchema