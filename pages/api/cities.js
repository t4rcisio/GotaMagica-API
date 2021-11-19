import connect from "../../utils/database";

function badRequest(res){
    res.status(400).json({error: "Bad rerquest"})
}




export default async function(req, res){

    if(req.method == "POST"){


        const {country, name, subcountry} = req.body
        const column = ""

        if(country){
            column = "country"

        }else if(name){

        }else if(subcountry){

        }else{
            badRequest(res)
        }

        const {db} = await connect()

        const response = await db.collection("cities").find({'${column}': country})

        if(response){
            res.status(200).json({sucess: true, data: response })

        }else{
            res.status(400).json({sucess: false})
        }

    }else{
        badRequest(res)
    }


}