import connect from "../../utils/database";

function badRequest(res){
    res.status(400).json({error: "Bad rerquest"})
}




export default async function(req, res){

    if(req.method == "POST"){


        const {email, password} = req.body

        if(!email || !password){
            badRequest(res)
        }

        const {db} = await connect()

        const response = await db.collection("users").findOne({email: email, password : password})

        if(response){
            const email = response.email
            const password = response.password
            const _id = response._id

            res.status(200).json({sucess: true, id: _id, email: email, password : password})

        }else{
            res.status(200).json({sucess: false})
        }

    }


}