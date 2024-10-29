'use strict';

var connection = require('../koneksi');

// Menampilkan semua biodata (GET all)
exports.showAllBiodata = function (req, res) {
    connection.query('SELECT * FROM biodata', function (error, rows, fields) {
        if (error) {
            console.log(error);
            res.status(500).send({ error: 'Error fetching data' });
        } else {
            res.json(rows);  // Menampilkan semua biodata dalam format JSON
        }
    });
};

// Menampilkan biodata berdasarkan ID (GET by ID)
exports.showBiodataById = function (req, res) {
    let userId = req.params.id;
    connection.query('SELECT * FROM biodata WHERE id = ?', [userId], function (error, row) {
        if (error) {
            console.log(error);
            res.status(500).send({ error: 'Error fetching data' });
        } else {
            if (row.length > 0) {
                res.json(row[0]);  // Menampilkan biodata berdasarkan ID
            } else {
                res.status(404).send({ message: 'Biodata not found' });
            }
        }
    });
};

// Menambahkan data biodata baru (POST)
exports.addBiodata = function (req, res) {
    let data = {
        nama: req.body.nama,
        tanggal_lahir: req.body.tanggal_lahir,
        jenis_kelamin: req.body.jenis_kelamin,
        alamat: req.body.alamat,
        no_telepon: req.body.no_telepon,
        email: req.body.email,
        pekerjaan: req.body.pekerjaan,
        status_perkawinan: req.body.status_perkawinan
    };
    
    connection.query('INSERT INTO biodata SET ?', data, function (error, results) {
        if (error) {
            console.log(error);
            res.status(500).send({ error: 'Error inserting data' });
        } else {
            res.status(201).send({ message: 'Biodata added successfully!', id: results.insertId });
        }
    });
};

// Mengubah data biodata berdasarkan ID (PUT)
exports.updateBiodataById = function (req, res) {
    let userId = req.params.id;
    let updatedData = {
        nama: req.body.nama,
        tanggal_lahir: req.body.tanggal_lahir,
        jenis_kelamin: req.body.jenis_kelamin,
        alamat: req.body.alamat,
        no_telepon: req.body.no_telepon,
        email: req.body.email,
        pekerjaan: req.body.pekerjaan,
        status_perkawinan: req.body.status_perkawinan
    };
    
    connection.query('UPDATE biodata SET ? WHERE id = ?', [updatedData, userId], function (error, results) {
        if (error) {
            console.log(error);
            res.status(500).send({ error: 'Error updating data' });
        } else {
            if (results.affectedRows === 0) {
                res.status(404).send({ message: 'Biodata not found' });
            } else {
                res.status(200).send({ message: 'Biodata updated successfully!' });
            }
        }
    });
};
// Menghapus biodata berdasarkan ID (DELETE)
exports.deleteUserById = function (req, res) {
    let userId = req.params.id;
    connection.query('DELETE FROM biodata WHERE id = ?', [userId], function (error, results) {
        if (error) {
            console.log(error);
            res.status(500).send({ error: 'Error deleting data' });
        } else {
            if (results.affectedRows === 0) {
                res.status(404).send({ message: 'Biodata not found' });
            } else {
                res.status(200).send({ message: 'Biodata deleted successfully!' });
            }
        }
    });
};
