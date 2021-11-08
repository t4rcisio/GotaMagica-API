import connect from "../../utils/database";


function badRequest(res){
    res.status(400).json({error: "Bad request"})
    return
}


export default async function(req, res){

    if(req.method == "POST"){

        const {cpf} = req.body

        if(!cpf){
            badRequest(res)
        }else{

            const {db} = await connect()
            const response = await db.collection("users").findOne({cpf: cpf})

            if(response){
                const sucess = true
                res.status(200).json({sucess: sucess})
            }else{
                const sucess = false
                res.status(200).json({sucess: sucess})
            }
        }

    }else{
        badRequest(res)
    }

}

