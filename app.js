const express = require('express')
const app = express()

// const obj = [
//     [1, 2, 3, 4],
//     [5, 6, 7, 8],
//     [9, 10, 11, 12],
//     [13, 14, 15, 16]
// ]
// const result = []
// var i, j
// for (i = 0; i < obj.length; i++) {
//     if (i == 0) {
//         for (j = 0; j < obj.length; j++) {
//             result.push(obj[0][j])
//         }
//     }
//     else {
//         result.push(obj[i][3])
//         if (i == 3) {
//             const rev = obj[3].reverse()
//             for (j = 1; j < obj[3].length; j++) {
//                 result.push(rev[j])
//             }
//         }
//     }
// }
// console.log(result)

// const obj = [
//     [1, 2, 3, 4],
//     [5, 6, 7, 8],
//     [9, 10, 11, 12],
//     [13, 14, 15, 16]
// ]
// for(var i=0;i<obj.length;i++){
//     if(i==0){
//         for(var j=0;j<obj.length;j++){
//         result.push(obj[0][j])
//     }
// }
// else{
//     result.push(obj[i][i])
// }
// }
// console.log(result)

// const a = [
//     [1, 2, 3, 4],
//     [5, 6, 7, 8],
//     [9, 10, 11, 12],
//     [13, 14, 15, 16]
// ]

// var m=a.length;
// var n=a[0].length; 
// for (var i=0;i<m;i++){
//     for(var j=0;j<n;j++ ){
//         if(i==0){
//             result.push(a[i][j])
//         }
//         else if (j==n-1)
//             result.push(a[i][j])
       
//          if(i==m-1){

//             result.push((a[i][j]))
//         }

//     }
// }


// console.log(result)

const result=[]

const a = [
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12],
    [13, 14, 15, 16]
]

let rowindex =0
let columnindex=0
// row
let m=a.lenght
// column
let n=a[1].length
while(rowindex<m&&columnindex<n){
for(let i=columnindex;i<n;i++){
    console.log(a[rowindex][i])
    result.push(a[rowindex][i])
}
rowindex+=1
for(let i=rowindex;i<m;i++){
    console.log(a[i][n-1])
    result.push(a[i][n-1])
}
}



console.log(result);
// console.log("1,2",a[1][2])



app.get("/", (req, res) => {
    // const result=obj[0]
    // res.json(result)
})


const PORT = 3000
app.listen(PORT, () => console.log('running'))