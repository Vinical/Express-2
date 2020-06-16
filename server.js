Var express = require (‘express’);
Var app = express();
Const PORT= 3000;

//we can now serve static pages 
App.use (express.static(_dirname));
app.listen(PORT, ()=>{
console.log(`app is running on port $ {PORT}`);

});
