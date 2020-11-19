"use strict";

module.exports.register = (app, database) => {

    app.get('/', async (req, res) => {
        res.status(200).send("You did it! I am now running:) ").end();
    });


    app.get('/api/emp', async (req, res) => {
        console.log("=================");
        let query;
        if (req.query.name) {
            let _name = req.query.name;
            query = database.query(
                'select * from rest_emp where name = ?',
                [_name]
            );
        } else {
            query = database.query(
                'SELECT * FROM rest_emp'
            );
        }
        console.log(query);
        const emps = await query;

        res.status(200).send(JSON.stringify(emps)).end();
    });



    app.get('/api/emp/:id', async (req, res) => {
        let _id = req.params.id;
        const query = database.query(
            'select * from rest_emp where id = ?',
            [_id]
        );
        const emps = await query;
        res.status(200).send(JSON.stringify(emps)).end();
    });



    app.post('/api/emp', async (req, res) => {
        let _name = req.body.name;
        let _phone = req.body.phone;
        let _email = req.body.email;
        let _address = req.body.address;

        const query = database.query(
            'insert into rest_emp(name, phone, email, address) values (?, ?, ?, ?)',
            [_name, _phone, _email, _address]
        );
        const emps = await query;
        res.status(200).send('Employee added successfully!').end();
    });



};
