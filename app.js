const http = require('http');

const child_process = require('child_process')

const server = http.createServer((req,res)=>{
    if(req.url === '/count'){
         let child = child_process.fork('./count.js')
         
         child.on('message',(timer)=>{
            res.end(timer)
         })
         
         child.send('主进程的数据')
    }else{
        
        res.end("没有此目录")
    }

})

server.listen(3000)