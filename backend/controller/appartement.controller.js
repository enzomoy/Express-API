const express = require("express");
const router = express.Router();
const db = require("../config/db");
const AppartementService = require("../services/appartement.service");

// Controller for appartement

exports.getAllAppartement = async (req, res) => {
    try {
        const appartements = await AppartementService.getAllAppartements();
        res.status(200).json(appartements);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
};

exports.getAppartementById = async (req, res) => {
    try {
        const { id } = req.params;
        const appartement = await AppartementService.getAppartementById(id);
        if (appartement) {
            res.status(200).json(appartement);
        } else {
            res.status(404).json({ message: 'Appartement not found' });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
};