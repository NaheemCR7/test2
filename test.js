const express = require('express')
const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: true }))


app.get("/", (req, res) => {

    const result = []
    const a = [
        [4, 3, 2, 1],
        [5, 14, 13, 12],
        [6, 15, 16, 11],
        [7, 8, 9, 10]
    ]

    let rowIndex = 0
    let columnIndex = 0
    let m = a.length
    let n = a[0].length
    while (rowIndex < m && columnIndex < n) {
        for (let i = n - 1; i >= columnIndex; i--) {
            console.log(a[rowIndex][i])
            result.push(a[rowIndex][i])
        }
        rowIndex += 1
        for (let i = rowIndex; i < m; i++) {
            console.log(a[i][columnIndex])
            result.push(a[i][columnIndex])

        }
        columnIndex += 1
        if (rowIndex < m) {
            for (let i = columnIndex; i < n; i++) {
                console.log(a[m - 1][i])
                result.push(a[m - 1][i])
            }
            m -= 1
        }
        if (columnIndex < n) {
            for (let i = m - 1; i >= rowIndex; i--) {
                console.log(a[i][n - 1])
                result.push(a[i][n - 1])
            }
            n -= 1
        }
    }


    console.log(result)
    res.json(result)

})

app.post('/', (req, res) => {

    const result = []
    const { a } = req.body

    let rowIndex = 0
    let columnIndex = 0
    let m = a.length      //rows
    let n = a[0].length   //columns
    while (rowIndex < m && columnIndex < n) {
        for (let i = n - 1; i >= columnIndex; i--) {
            console.log(a[rowIndex][i])
            result.push(a[rowIndex][i])
        }
        rowIndex += 1
        for (let i = rowIndex; i < m; i++) {
            console.log(a[i][columnIndex])
            result.push(a[i][columnIndex])

        }
        columnIndex += 1
        if (rowIndex < m) {
            for (let i = columnIndex; i < n; i++) {
                console.log(a[m - 1][i])
                result.push(a[m - 1][i])
            }
            m -= 1
        }
        if (columnIndex < n) {
            for (let i = m - 1; i >= rowIndex; i--) {
                console.log(a[i][n - 1])
                result.push(a[i][n - 1])
            }
            n -= 1
        }
    }

    console.log(result)
    res.json(result)

})



const PORT = 3000
app.listen(PORT, () => console.log(`running test ${PORT}`))