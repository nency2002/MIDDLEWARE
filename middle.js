const check = (req , res , next) => {
    console.log(req.body);

    let {name , grid , course} = req.body;

    if(name && grid && course){
        next();
    }
    else if(req.body.name){
        res.status(400).json({message: "Please provide all the fields course and grid"});
    }
    else if(req.body.grid){
        res.status(400).json({message: "Please provide all the fields course and name"});
    }
    else if(req.body.course){
        res.status(400).json({message: "Please provide all the fields name and grid"});
    }
    else{
        res.status(400).json({message: "Please provide all the fields name and grid and course"});
    }
}

module.exports = check;
