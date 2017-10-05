'use strict'
const User = use('App/Model/User')
const Validator = use('Validator')

class AuthController { *
    showRegister(request, response) {
        yield response.sendView('auth.register')
    }

    *
    showLogin(request, response) {
        yield response.sendView('auth.login')
    }

    *
    login(request, response) {
        const email = request.input('email')
        const password = request.input('password')

        try {
            yield request.auth.attempt(email, password)

            response.redirect('/')
        } catch (e) {
            yield request.with({ error: 'Invalid Credentials' }).flash()

            response.redirect('back')
        }
    }

    *
    logout(request, response) {
        yield request.auth.logout()

        response.redirect('login')
    }

    *
    register(request, response) {

        const validation = yield Validator.validate(request.all(), User.rules)

        if (validation.fails()) {
            yield request
                .withAll()
                .andWith({ errors: validation.messages() })
                .flash()

            return response.redirect('back')
        }

        const user = yield User.create({
            username: request.input('username'),
            email: request.input('email'),
            password: request.input('password'),
        })

        yield request.auth.login(user)

        response.redirect('/')
    }
}

module.exports = AuthController