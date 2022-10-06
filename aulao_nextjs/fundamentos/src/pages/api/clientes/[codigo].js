export default function handler(req, res) {
    const codigo = req.query.codigo;
    res.status(200).json({
        id: codigo,
        nome: `Willie ${codigo}`,
        email: `willie_santos${codigo}@hotmail.com` 
    })
}