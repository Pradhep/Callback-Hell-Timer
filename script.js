// function display(value){
//     console.log("Printed Value:" +value);
// }

// function add(a,b,display){
//     display(a+b);
// }

// add(5,5,display);

// let arr=[1,2,3,4,5]

// function loop(val,callback){

//         for(i=0;i<val.length;i++){
//             console.log(callback(val[i]));
//         }
// }


// loop (arr, (e) =>{
//     console.log("callback" +e);
// })
// let element
// document.getElementById("head").innerHTML = element;
//element.innerText="Welcome"
setTimeout (()=>{
    document.getElementById("head").innerText = 10;
    setTimeout (()=>{
        document.getElementById("head").innerText = 9;
        setTimeout (()=>{
            document.getElementById("head").innerText = 8;
            setTimeout (()=>{
                document.getElementById("head").innerText = 7;
                setTimeout (()=>{
                    document.getElementById("head").innerText = 6;
                    setTimeout (()=>{
                        document.getElementById("head").innerText = 5;
                        setTimeout (()=>{
                            document.getElementById("head").innerText = 4;
                            setTimeout (()=>{
                                document.getElementById("head").innerText = 3;
                                setTimeout (()=>{
                                    document.getElementById("head").innerText = 2;
                                    setTimeout (()=>{
                                        document.getElementById("head").innerText = 1;
                                        setTimeout (()=>{
                                            document.getElementById("head").innerText = "Happy Independence Day ";
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
},1000)