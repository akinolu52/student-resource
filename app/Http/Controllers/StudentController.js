'use strict'

const Student = use('App/Model/Student')
const Validator = use('Validator')


class StudentController {

    // Creating Students’ resource
    // Listing Students’ resource
    // Showing Students’ resource
    // editing and deleting students on backend.

    *
    index(request, response) {
        const students = yield Student.all()
        yield response.sendView('students.all', { students: students.toJSON() })
    }

    *
    create(request, response) {
        // show form for creating students
        const students = yield Student.pair('matric_no', 'firstname', 'lastname', 'number_of_course', 'level', 'department', 'faculty', 'next_of_kin', 'cgpa')

        yield response.sendView('students.create', { students: students })
    }

    *
    store(request, response) {
        // const user = request.currentUser

        const validation = yield Validator.validateAll(request.all(), {
            matric_no: 'required',
            firstname: 'required',
            lastname: 'required',
            number_of_course: 'required',
            level: 'required',
            department: 'required',
            faculty: 'required',
            next_of_kin: 'required',
            cgpa: 'required'
        })

        if (validation.fails()) {
            if (validation.fails()) {
                yield request
                    .withAll()
                    .andWith({ errors: validation.messages() })
                    .flash()

                return response.redirect('back')
            }
        }

        const student = yield Student.create({
            matric_no: request.input('matric_no'),
            firstname: request.input('firstname'),
            lastname: request.input('lastname'),
            number_of_course: request.input('number_of_course'),
            level: request.input('level'),
            department: request.input('department'),
            faculty: request.input('faculty'),
            next_of_kin: request.input('next_of_kin'),
            cgpa: request.input('cgpa')
        })

        yield request.with({ status: `A Student with matric number: #${student.matric_no} has been created!.` }).flash()
        response.redirect('back')
    }

    *
    show(request, response) {
        const student = yield Student.find(request.param('id'))

        yield response.sendView('students.show', { student: student })
    }

    *
    edit(request, response) {
        const student = yield Student.find(request.param('id'))

        yield response.sendView('students.edit', { student: student })
    }

    *
    update(request, response) {
        // const user = request.currentUser

        const validation = yield Validator.validateAll(request.all(), {
            matric_no: 'required',
            firstname: 'required',
            lastname: 'required',
            number_of_course: 'required',
            level: 'required',
            department: 'required',
            faculty: 'required',
            next_of_kin: 'required',
            cgpa: 'required'
        })

        if (validation.fails()) {
            if (validation.fails()) {
                yield request
                    .withAll()
                    .andWith({ errors: validation.messages() })
                    .flash()

                return response.redirect('back')
            }
        }

        const student = yield Student.find(request.param('id'))

        // student.matric_no = request.input('matric_no')
        student.firstname = request.input('firstname')
        student.lastname = request.input('lastname')
        student.number_of_course = request.input('number_of_course')
        student.level = request.input('level')
        student.department = request.input('department')
        student.faculty = request.input('faculty')
        student.next_of_kin = request.input('next_of_kin')
        student.cgpa = request.input('cgpa')

        yield student.save()
        yield request.with({ status: `A Student with matric number: #${student.matric_no} has been edited!.` }).flash()

        response.redirect('/student/')
    }

    *
    destroy(request, response) {
        const student = yield Student.find(request.param('id'))
        yield student.delete()

        yield request.with({ status: `Student deleted!.` }).flash()

        return response.redirect('/student/')
    }

}

module.exports = StudentController