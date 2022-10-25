let count=0
        let increment=document.getElementById("num")
        let savel=document.getElementById("svdEn")
        function incre(){
            count=count+1
            increment.innerText=count
        }
        function saveEl(){
        
            let counted =" "+count+" | "
             savel.innerText=savel.innerText+counted
             count=0
        }
function rst(){
    count=count-count
    num.innerText=count
}