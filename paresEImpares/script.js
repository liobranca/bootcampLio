let parametroCantidad= 10
let divisible=7
let palabra="hola"
let i=0
let o=0
while(i<parametroCantidad){
    i++
    if((i%divisible)==0 && (i%2)==0){
        console.log(palabra)
        }
        else if((i%2)==0){
            console.log(i)
        }
    
}
while(o<parametroCantidad){
    o++
    if((o%divisible)==0 && (o%2)!==0){
    console.log(palabra)
    }
    else if(!(o%2)==0){
        console.log(o)
    }
}