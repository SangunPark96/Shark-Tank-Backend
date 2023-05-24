const db = require('../db/dbConfig.js');

const getAllInvestments = async () => {
    try {
        const result = await db.any(`SELECT * FROM pitches`);
        return { result };
      } catch (error) {
        return { error };
      }
}

module.exports = {
    getAllInvestments
}