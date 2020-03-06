const Model = require('elkorm');

class User extends Model {
    constructor() {
        const table = "users";
        const columns = {
            id: {type: "int", primaryKey: true, notNull: true},
            name: {type: "string", notNull: true},
            email: {type: "string", notNull: true},
            password: {type: "string", notNull: true},
        }
        super(table, columns);
    }
}

module.exports=User;