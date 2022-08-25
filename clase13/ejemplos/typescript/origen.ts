const lista: Array<number> = [2,3,4,5];

lista.map((x:number) => {
   return x * x
}).forEach(function(x){
    return console.log(x)
})