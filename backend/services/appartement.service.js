const { Sequelize } = require('sequelize');
const Appartement = require('../models/appartement.models');

class AppartementService {
  static async getAllAppartements() {
    try {
      const appartements = await Appartement.findAll();
      return appartements;
    } catch (error) {
      throw error;
    }
  }

  static async getAppartementById(id) {
    try {
      const appartement = await Appartement.findOne({
        where: {
          id: Number(id)
        }
      });
      if (appartement) return appartement;
      else return null;
      } catch (error) {
        throw error;
      }
    }

  static async createAppartement(superficie, capacite, adresse, prix_nuit) {
    const disponibilite = true;
    try {
      const appartement = await Appartement.create({
        superficie,
        capacite,
        adresse,
        disponibilite,
        prix_nuit
      });
      return appartement;
    } catch (error) {
      throw error;
    }
  }

  static async updateAppartement(id, superficie, capacite, adresse, prix_nuit) {
    try {
      const appartement = await Appartement.findOne({
        where: {
          id: Number(id)
        }
      });
      if (appartement) {
        await Appartement.update({
          superficie,
          capacite,
          adresse,
          prix_nuit
        }, {
          where: {
            id: Number(id)
          }
        });
        return appartement;
      }
      return null;
    } catch (error) {
      throw error;
    }
  }

  static async deleteAppartement(id) {
    // Vérifier si la personne qui supprime est admin
    if (req.user.isAdmin == false) return res.status(403).json({ message: 'Vous n\'avez pas les droits pour effectuer cette action' });
    
    try {
      const appartement = await Appartement.findOne({
        where: {
          id: Number(id)
        }
      });
      if (appartement) {
        const deletedAppartement = await Appartement.destroy({
          where: {
            id: Number(id)
          }
        });
        return deletedAppartement;
      }
      return null;
    } catch (error) {
      throw error;
    }
  }
}

module.exports = AppartementService;