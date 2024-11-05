

export async function exerciseCreate(name, email, password, confirmPassword) {
    const response = await axios.post("http://10.0.0.168:3333/users/edit", {
        name: req.body.name,
        series: req.body.series,
        repetitions: req.body.repetitions,
        demo: req.body.demo,
        thumb: req.body.thumb,
    })
    return (response.status == 200)
}

export async function getExercicies() {
    try{
        const response = await axios.get("http://10.0.0.168:3333/exercises")
        return response.data
    }catch(err){
        console.log(err);
    }
}