const routes = require('express').Router()
const db = require("../database/database.js")

routes.get("/all", async (req, res) => {
    const sql = "select * from course"
    db.all(sql, (err, rows) => res.send(rows))
})

routes.get("", async (req, res) => {
    const abbreviation = req.query.abbr

    getCourseFromAbbreviation(abbreviation, res)
})

function getCourseFromAbbreviation(abbreviation, res) {
    const sql = "select * from course where upper(abbreviation)=upper(?)"
    db.all(sql, [abbreviation], (err, rows) => res.send(rows))
}


module.exports = routes