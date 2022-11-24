

var div = document.createElement("div");
div.setAttribute("id","screen");

var element = document.createElement("h1");
element.setAttribute("id","count");
element.innerHTML = "10";

div.append(element);
document.body.append(div);

var count1 = document.getElementById("count").innerText;
setTimeout(()=>{
    count1 = count1 - 1;
    element.innerHTML = count1;
    setTimeout(()=>{
        count1 = count1 - 1;
        element.innerHTML = count1;
        setTimeout(()=>{
           count1 = count1 - 1;
           element.innerHTML = count1;
           setTimeout(()=>{
              count1 = count1 - 1;
              element.innerHTML = count1;
              setTimeout(()=>{
                 count1 = count1 - 1;
                 element.innerHTML = count1;
                 setTimeout(()=>{
                     count1 = count1 - 1;
                     element.innerHTML = count1;
                     setTimeout(()=>{
                        count1 = count1 - 1;
                        element.innerHTML = count1;
                        setTimeout(()=>{
                            count1 = count1 - 1;
                            element.innerHTML = count1;
                            setTimeout(()=>{
                                 count1 = count1 - 1;
                                 element.innerHTML = count1;
                                 setTimeout(()=>{
                                    element.innerHTML = '<p id = "display">HAPPY INDEPENDENCE DAY </P>';
                                },1000)
                              },1000) 
                            },1000)
                        },1000)
                    },1000)
                },1000)
            },1000)
        },1000)
    },1000)
},1000)