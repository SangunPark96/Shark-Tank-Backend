const db = require('../db/dbConfig.js');

const getAllPitches = async () => {
    try {
        const result = await db.any("SELECT * FROM pitches");
        return { result };
      } catch (error) {
        return { error };
      }
}


const getPitch = async (id) => {
    try {
      const result = await db.any(`SELECT * FROM pitches WHERE id=${id}`);
      return { result };
    } catch (error) {
      return { error };
    }
  };

  const createPitch = async (pitch) => {
    try {
      const result = await db.one(
        `INSERT INTO
          pitches(Season_Number,Season_Start,Season_End,Episode_Number,Pitch_Number,Original_Air_Date,Startup_Name,Industry,Business_Description,Pitchers_Gender,Pitchers_City,Pitchers_State,Pitchers_Average_Age,Entrepreneur_Names,Company_Website,Multiple_Entrepreneurs,US_Viewership,Original_Ask_Amount,Original_Offered_Equity,Valuation_Requested,Got_Deal,Total_Deal_Amount,Total_Deal_Equity,Deal_Valuation,Number_of_sharks_in_deal,Investment_Amount_Per_Shark,Equity_Per_Shark,Royalty_Deal,Loan,Barbara_Corcoran_Investment_Amount,Barbara_Corcoran_Investment_Equity,Mark_Cuban_Investment_Amount,Mark_Cuban_Investment_Equity,Lori_Greiner_Investment_Amount,Lori_Greiner_Investment_Equity,Robert_Herjavec_Investment_Amount,Robert_Herjavec_Investment_Equity,Daymond_John_Investment_Amount,Daymond_John_Investment_Equity,Kevin_O_Leary_Investment_Amount,Kevin_O_Leary_Investment_Equity,Guest_Investment_Amount,Guest_Investment_Equity,Guest_Name,Barbara_Corcoran_Present,Mark_Cuban_Present,Lori_Greiner_Present,Robert_Herjavec_Present,Daymond_John_Present,Kevin_O_Leary_Present)
         VALUES
          ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16, $17, $18, $19, $20, $21, $22, $23, $24, $25, $26, $27, $28, $29, $30, $31, $32, $33, $34, $35, $36, $37, $38, $39, $40, $41, $42, $43, $44, $45, $46, $47, $48, $49, $50)
         RETURNING *;`,
        [pitch.Season_Number, pitch.Season_Start, pitch.Season_End, pitch.Episode_Number, pitch.Pitch_Number, pitch.Original_Air_Date, pitch.Startup_Name, pitch.Industry, pitch.Business_Description, pitch.Pitchers_Gender, pitch.Pitchers_City, pitch.Pitchers_State, pitch.Pitchers_Average_Age, pitch.Entrepreneur_Names, pitch.Company_Website, pitch.Multiple_Entrepreneurs, pitch.US_Viewership, pitch.Original_Ask_Amount, pitch.Original_Offered_Equity, pitch.Valuation_Requested, pitch.Got_Deal, pitch.Total_Deal_Amount, pitch.Total_Deal_Equity, pitch.Deal_Valuation, pitch.Number_of_sharks_in_deal, pitch.Investment_Amount_Per_Shark, pitch.Equity_Per_Shark, pitch.Royalty_Deal, pitch.Loan, pitch.Barbara_Corcoran_Investment_Amount, pitch.Barbara_Corcoran_Investment_Equity, pitch.Mark_Cuban_Investment_Amount, pitch.Mark_Cuban_Investment_Equity, pitch.Lori_Greiner_Investment_Amount, pitch.Lori_Greiner_Investment_Equity, pitch.Robert_Herjavec_Investment_Amount, pitch.Robert_Herjavec_Investment_Equity, pitch.Daymond_John_Investment_Amount, pitch.Daymond_John_Investment_Equity, pitch.Kevin_O_Leary_Investment_Amount, pitch.Kevin_O_Leary_Investment_Equity, pitch.Guest_Investment_Amount, pitch.Guest_Investment_Equity, pitch.Guest_Name, pitch.Barbara_Corcoran_Present, pitch.Mark_Cuban_Present, pitch.Lori_Greiner_Present, pitch.Robert_Herjavec_Present, pitch.Daymond_John_Present, pitch.Kevin_O_Leary_Present]
      );
      return { result };
    } catch (error) {
      return { error };
    }
  };

  const deletePitch = async (id) => {
    try {
      const result = await db.one(
        "DELETE FROM pitches WHERE id=$1 RETURNING *",
        id
      );
      return { result };
    } catch (error) {
      return { error };
    }
  };

  const updatePitch = async (id, pitch) => {
    try {
      const result = await db.one(
        `UPDATE pitches SET Season_Number=$1, Season_Start=$2, Season_End=$3, Episode_Number=$4, Pitch_Number=$5, Original_Air_Date=$6, Startup_Name=$7, Industry=$8, Business_Description=$9, Pitchers_Gender=$10, Pitchers_City=$11, Pitchers_State=$12, Pitchers_Average_Age=$13, Entrepreneur_Names=$14, Company_Website=$15, Multiple_Entrepreneurs=$16, US_Viewership=$17, Original_Ask_Amount=$18, Original_Offered_Equity=$19, Valuation_Requested=$20, Got_Deal=$21, Total_Deal_Amount=$22, Total_Deal_Equity=$23, Deal_Valuation=$24, Number_of_sharks_in_deal=$25, Investment_Amount_Per_Shark=$26, Equity_Per_Shark=$27, Royalty_Deal=$28, Loan=$29, Barbara_Corcoran_Investment_Amount=$30, Barbara_Corcoran_Investment_Equity=$31, Mark_Cuban_Investment_Amount=$32, Mark_Cuban_Investment_Equity=$33, Lori_Greiner_Investment_Amount=$34, Lori_Greiner_Investment_Equity=$35, Robert_Herjavec_Investment_Amount=$36, Robert_Herjavec_Investment_Equity=$37, Daymond_John_Investment_Amount=$38, Daymond_John_Investment_Equity=$39, Kevin_O_Leary_Investment_Amount=$40, Kevin_O_Leary_Investment_Equity=$41, Guest_Investment_Amount=$42, Guest_Investment_Equity=$43, Guest_Name=$44, Barbara_Corcoran_Present=$45, Mark_Cuban_Present=$46, Lori_Greiner_Present=$47, Robert_Herjavec_Present=$48, Daymond_John_Present=$49, Kevin_O_Leary_Present=$50 WHERE id=$51 RETURNING *`,
        [pitch.Season_Number, pitch.Season_Start, pitch.Season_End, pitch.Episode_Number, pitch.Pitch_Number, pitch.Original_Air_Date, pitch.Startup_Name, pitch.Industry, pitch.Business_Description, pitch.Pitchers_Gender, pitch.Pitchers_City, pitch.Pitchers_State, pitch.Pitchers_Average_Age, pitch.Entrepreneur_Names, pitch.Company_Website, pitch.Multiple_Entrepreneurs, pitch.US_Viewership, pitch.Original_Ask_Amount, pitch.Original_Offered_Equity, pitch.Valuation_Requested, pitch.Got_Deal, pitch.Total_Deal_Amount, pitch.Total_Deal_Equity, pitch.Deal_Valuation, pitch.Number_of_sharks_in_deal, pitch.Investment_Amount_Per_Shark, pitch.Equity_Per_Shark, pitch.Royalty_Deal, pitch.Loan, pitch.Barbara_Corcoran_Investment_Amount, pitch.Barbara_Corcoran_Investment_Equity, pitch.Mark_Cuban_Investment_Amount, pitch.Mark_Cuban_Investment_Equity, pitch.Lori_Greiner_Investment_Amount, pitch.Lori_Greiner_Investment_Equity, pitch.Robert_Herjavec_Investment_Amount, pitch.Robert_Herjavec_Investment_Equity, pitch.Daymond_John_Investment_Amount, pitch.Daymond_John_Investment_Equity, pitch.Kevin_O_Leary_Investment_Amount, pitch.Kevin_O_Leary_Investment_Equity, pitch.Guest_Investment_Amount, pitch.Guest_Investment_Equity, pitch.Guest_Name, pitch.Barbara_Corcoran_Present, pitch.Mark_Cuban_Present, pitch.Lori_Greiner_Present, pitch.Robert_Herjavec_Present, pitch.Daymond_John_Present, pitch.Kevin_O_Leary_Present, id]
      );
      return { result };
    } catch (error) {
      return { error };
    }
  };

module.exports = {
    getAllPitches,
    getPitch,
    createPitch,
    deletePitch,
    updatePitch
}