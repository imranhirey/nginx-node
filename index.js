let express=require('express');
let app=express();


app.get('/test',(req,res)=>{
    res.send(`
    <html>
    <head>
    <title>Test</title>
    </head>
    <body>
    <h1  style="color:green;">thank you the test has been successfully passed ..</h1>
    </body>

    </html>
    
    
    `)
})
app.listen(3003,function(){
    console.log('Server started on port 3003');
}

);