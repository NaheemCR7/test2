const express =require('express')
const app = express()

const prm=new Promise((resolve,reject)=>{
    let x=5
    if(x===1){
        resolve('true')
    }else{
        reject('false')
    }
})
prm.then((res)=>console.log(res)).catch((err)=>console.log(err))



const PORT =3000
app.listen(PORT,()=>console.log(`running exm${PORT}`))