const app = express()

app.listen('3000')

// let author = "Patricia"

app.route('/:identificador').delete((req, res)=>{
    // author =""
    res.send (req.params.identificador)
    })

    

//OBS: let author = "Patricia"
//author =""
//somente usado agora como exemplo para mostrar o que sera apagado