const express = require('express');
const app = express();

app.get('/whoami?',(req,res)=> {
   res.json({Firstname : 'Alper' , Lastname : 'Ardıç'});

});

app.post('/alert' ,(req,res)=> {
   const jsonType = true;

   if (jsonType)
      res.json({Firstname : 'Alper' , Lastname : 'Ardıç'});
   else
      res.send('JSON formatı harici post isteği reddedilmektedir')
});

const port = process.env.port || 3000;
app.listen(port, () => {
   console.log('İsim soyisim json stringfy olarak yazdırıldı') ;
});
