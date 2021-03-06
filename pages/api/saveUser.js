import connect from "../../utils/database"



function badRequest(res){
    res.status(400).json({ error: "Missing data", sucess: false})
    return
}



export default async function(req, res){



    if(req.method == "POST"){

        const {name} = req.body;
        const {birthday} = req.body;
        const {cpf} = req.body;
        const {email} = req.body;
        const {phone} = req.body;
        const {zipcode} = req.body;
        const {uf} = req.body;
        const {city} = req.body;
        const {neighborhood} = req.body;
        const {address} = req.body; 
        const {password} = req.body;

        if(!name || !birthday || !cpf || !email || !phone || !zipcode || !uf || !city || !neighborhood || !address || !password){
            badRequest(res)
        }else{

            const {db} = await connect()
            const response  = await db.collection("users").insertOne({
            name: name,
            birthday: birthday,
            cpf: cpf,
            email: email,
            phone: phone,
            zipcode: zipcode,
            uf: uf,
            city: city,
            neighborhood: neighborhood,
            address: address,
            password: password})

            res.status(200).json({id: response.insertedId, sucess: response.acknowledged})

        }
    
    }else{
        res.status(200).json({error: "Method don't avail yet"})
    }

    


    
}