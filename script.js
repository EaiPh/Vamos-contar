function contar(){
   var start= document.getElementById("start")
   var end= document.getElementById("end")
   var skip= document.getElementById("skip")
   var res= document.getElementById("res")
   
      if (start.value.length == 0 || end.value.length == 0 || skip.value.length == 0){
         alert("[ERRO] Digite os Números pedidos acima!")
      } else {
         
        res.innerText= "contando..."
        var st= Number(start.value)
        var end= Number(end.value)
        var sk= Number(skip.value)
        
        for (var st= st; st <= end; st += sk){
           res.innerText+=  ", " + st
        }
      }
   
}