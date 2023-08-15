const http = require('http')

const server = http.createServer(function (req, res){
    if(req.url === '/'){
        res.end('Selamat datang coy')
    }
    else if(req.url === '/about'){
        res.end('Ini about yah')
    }else{
    res.end(`<h1>Waduh!</h1>
            <p>404 coy</p>
            <a href="/">back</a>
        `)
    }
})

server.listen(5000)