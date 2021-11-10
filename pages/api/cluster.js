function badRequest(res){
    res.status(400).json({error: "Bad request"})
    return
}

var resoponse = "no data"

export default function(req, res){
    
    if(req.method == "POST"){
        const {sshd} = req.body
        if(!sshd){
            badRequest(res)
        }

        resoponse = sshd
        res.status(200).json({sshd: sshd})
    }
    if(req.method == "GET"){
        res.status(200).json({sshd: resoponse})
    }else{
        badRequest(res)
    }
}