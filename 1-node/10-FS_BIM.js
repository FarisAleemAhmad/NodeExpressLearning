const fs = require('fs')

// two methods - async (nonblocking) and sync (blocking)

// sync
    const second = fs.readFileSync('./content/test2.txt', 'utf-8')
    
    console.log(second)


    // flag = a allows appending insteaad of overwriting
    fs.writeFileSync('./content/result-sync.txt', `here is the result : ${second}`, flag = 'a')
// async (left to later)