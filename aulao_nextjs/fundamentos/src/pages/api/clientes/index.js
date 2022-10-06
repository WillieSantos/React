export default function cliente(req, res) {

    if(res.method === "GET") {
        handlerGet(req, res)
    } else {
        res.status(405).send()
    }

}
    

function handlerGet(req, res) {
    res.status(200).json({
        id: 3,
        nome: "Willie",
        email: "willie_santos@hotmail.com" 
    })
}
