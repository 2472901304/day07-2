let startTime = new Date().getTime();
let sum = 0;
for(var i=0; i<5015165;i++){
    sum+=i
}

let endTime = new Date().getTime();
let timer = endTime - startTime +'';

process.send(timer)

process.on('message',(msg)=>{
    console.log(msg)
})