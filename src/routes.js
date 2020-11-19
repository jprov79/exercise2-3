"use strict";

module.exports.register = (app, database) => {

    app.get('/', async (req, res) => {
        res.status(200).send("You did it! I am now running:) ").end();
    });


    app.get('/api/emp/:course_id', async (req, res) => {
        let course_id = req.params.course_id;
        let course_name = req.params.course_name;
        const query = database.query(
            'select * from rest_emp where course_id = ? OR where course_name = ?',
            [_course_id, _course_name]
        );
        const emps = await query;
        res.status(200).send(JSON.stringify(emps)).end();
    });



    app.post('/api/emp', async (req, res) => {
        let _course_id = req.body.course_id;
        let _course_name = req.body.course_name;
        let _course_description = req.body.course_description;

        const query = database.query(
            'insert into rest_emp(course_id, course_name, course_description) values (?, ?, ?, ?)',
            [_course_id, _course_name, _course_description]
        );
        const emps = await query;
        res.status(200).send('Course added successfully!').end();
    });

    app.post('/api/emp', async (req, res) => {
        let _course_description = req.body.course_description;

        const query = database.query(
            'update rest_emp(course_description) values (?)',
            [_course_description]
        );
        const emps = await query;
        res.status(200).send('Course added successfully!').end();
    });

    app.post('/api/emp')



};
