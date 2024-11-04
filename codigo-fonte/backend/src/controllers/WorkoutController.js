const User = require("../models/User");
const uuid = require("uuid")
const mongoose = require("mongoose");


// controller validada
const WorkoutController = {

    /**
     * {
            "workout": {
                "name": "Treino A"
            },
            "program_id": "2e9c8249-4603-4b33-bca1-ad5ca025bd5d",
            "user_id": "67202e33bf5fb96f51165d3a"
        }


        OK
     * @param {*} req 
     * @param {*} res 
     */
  create: async(req, res)=>  {
    try {
      let workout = req.body.workout //isso será um objeto
        , program_id = req.body.program_id
        , user_id = req.body.user_id
      ;

        const workout_obj = {
            name: workout.name,
            exercises: workout.exercises || [],
        };

        const updated = await User.findByIdAndUpdate(user_id, {
            $push: { 'programs.$[program].workouts': workout_obj },
        }, { 
            new: true,
            arrayFilters: [{ "program._id": program_id }]
        }
    );

      res.status(201).json({ message: "Treino criado" });

    } catch (error) {
        console.log(error);
    }
  },


  /**
   * {
        "workout_id": "3d7ee614-fbd6-436c-aecb-07efb1b54ec4",
        "program_id": "2e9c8249-4603-4b33-bca1-ad5ca025bd5d",
        "user_id": "67202e33bf5fb96f51165d3a"
    }   


    OK
   * @param {*} req 
   * @param {*} res 
   */
  delete: async (req, res) => {
    try {
      let workout = {
        _id: req.body.workout_id
      } 
        , user_id = req.body.user_id
        , program_id = req.body.program_id
      ;

      const updated = await User.findByIdAndUpdate(user_id, {
          $pull: { 'programs.$[program].workouts': workout },
      }, { 
            new: true,
            arrayFilters: [{ "program._id": program_id }] 
         }
      );

      res.status(201).json({ message: "Treino deletado" });

    } catch (error) {
        console.log(error);
    }
  },



  /**
     {
        "workout": {
            "name": "Treino B",
            "exercises": [
                {"_id": "6609e57cdd41e1caf7f3e8f5"}
            ]
        },
        "workout_id": "67244640571380964b2c53d0",
        "program_id": "672445c7571380964b2c53c7",
        "user_id": "67202e33bf5fb96f51165d3a"
    }

    ok
   * @param {*} req 
   * @param {*} res 
   */
  update: async (req, res) => {
    try {
      let user_id = req.body.user_id
        , program_id = req.body.program_id
      ;
    //   let workout_id_obj = new mongoose.Types.ObjectId();
      
    
      let workout = {
        _id: req.body.workout_id,
        name: req.body.workout.name,
        exercises: req.body.workout.exercises || []
      }

      const updated = await User.findByIdAndUpdate(user_id,
        {
          $set: {
              "programs.$[program].workouts.$[workout]": workout // Atualiza o programa correspondente
          }
        },
        {
            new: true, // Retorna o documento atualizado
            arrayFilters: [
                { "program._id": program_id },
                { "workout._id": req.body.workout_id }
            ] // Filtra o programa a ser atualizado
        }
      )

      res.status(201).json({ message: "Treino editado" });

    } catch (error) {
        console.log(error);
    }
  },

};

module.exports = WorkoutController;

// console.log('params: ' + JSON.stringify(req.params))
// console.log('body: ' + JSON.stringify(req.body))
// throw new Error()
