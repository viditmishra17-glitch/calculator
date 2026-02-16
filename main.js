let a="0";
let history=[]; // history stores each expression of a before a is updated
let solve=function(num){
    let t=true;
    let t2=true;
    if(a=="0"){
        if(num!='back') a=num;
        else {
            document.querySelector(".output-box").textContent="UnderFlow";
            t=false;
        }
    }
    else if(num == 'back'){
        if(history.length!=0){
            a=history.pop();
            t2=false;
        }
        else{
            document.querySelector(".output-box").textContent="";
            t=false;
            t2=false;
        }
    }
    else if(num == '='){
        let sol=eval(a);
        history.push(sol);
        a=sol;
        document.querySelector(".output-box").textContent=sol;
        t=false;
        t2=false;
    }
    else{
        a+=num;
    }
    if(t2){
        history.push(a);
        const hist=document.getElementById("hisss");
        const li=document.createElement("li");
        li.textContent=a;
        hist.appendChild(li);
    }
    if(t) document.querySelector(".output-box").textContent=a;
    console.log(history);
}

