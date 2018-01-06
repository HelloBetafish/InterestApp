const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const InterestSchema = new Schema(
{
  firstname: 
  { 
    type: String,
    required: true 
  },

  lastname: 
  { 
    type: String, 
    required: true 
  },

  dateofbirth: 
  { type: Date, 
    required: true
  },

  gender: 
  { type: String, 
    required: true
  },
  title: 
  { 
    type: String, 
    required: true
  },

  tech_int: 
  { 
    type: String, 
    required: true
  },
  tech_exp: 
  { 
    type: String, 
    required: true
  },
  tech_years: 
  { 
    type: String, 
    required: true
  },

  art_int: 
  { 
    type: String, 
    required: true
  },

  art_exp: 
  { 
    type: String, 
    required: true
  },

  art_years: 
  { 
    type: String, 
    required: true
  },

  science_int: 
  { 
    type: String, 
    required: true
  },

  science_exp: 
  { 
    type: String, 
    required: true
  },

  science_years: 
  { 
    type: String, 
    required: true
  },

  network_int: 
  { 
    type: String, 
    required: true
  },

  network_exp: 
  { 
    type: String, 
    required: true
  }, 

  network_years: 
  { 
    type: String, 
    required: true
  },

  entertainment_int: 
  { 
    type: String, 
    required: true
  },

  entertainement_exp: 
  { 
    type: String, 
    required: true
  },

  entertainment_years: 
  { 
    type: String, 
    required: true
  },

  entrepreneur_int: 
  { 
    type: String, 
    required: true
  },

  entrepreneur_exp: 
  { 
    type: String, 
    required: true
  },

  entrepreneur_years: 
  { 
    type: String, 
    required: true
  },

});

// This creates our model from the above schema, using mongoose's model method
const Interest = mongoose.model("Interest", InterestSchema);

module.exports = Interest;