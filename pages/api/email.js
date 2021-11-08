import connect from "../../utils/database";

function badRequest(res){
    res.status(200).json({error: "Bad request"})
}


export default async function(req, res){

    if(req.method == "POST"){

        const {email} = req.body

        if(!email){
            badRequest(res)
        }else{

            const {db} = await connect()

            const response = await db.collection("users").findOne({email: email})

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