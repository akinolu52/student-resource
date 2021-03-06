'use strict'

class Admin {

    *
    handle(request, response, next) {

        if (request.currentUser.is_admin !== 1) {
            response.redirect('/')
        }
        yield next
    }

}

module.exports = Admin