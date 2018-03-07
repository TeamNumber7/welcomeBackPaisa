
app.get('/reply', function(req,res){
  data.getReply((err,results)=>{
    if(err){
      console.log('error');
      res.sendStatus(500);
    }else{
      res.status(200).json(results)
    }
  })
})
app.post('/reply'),function(req,res){
  let reply=req.body.reply
  if(!reply){
    res.sendStatus(400);
  }else{
    data.postReply(reply,(error,results)=>{
      if(err){
        res.sendStatus(500);

      }else{
        res.status(200).json(results)
      }
    })
  }

}
app.get('/paisa', function(req,res){
  data.getComment((err,results)=>{
if(err){
  console.log('error')
  res.sendStatus(500);
}else{
  res.status(200).json(results)
}
})
} )

app.get('/comment', function(req,res){
  data.getComment((err,results)=>{
    if(err){
      console.log('error')
     res.sendStatus(500)
   }else{
     res.status(200).json(results)
   }
  })
})
app.post('/paisa', function(req,res){
  let comment =req.body.comment
  if(!comment){
    res.sendStatus(400);

  }else{
    data.postComment(comment,(err,results)=>{
      if(err){
        res.sendStatus(500);

      }else{
        res.status(200).json(results);
      }
    })
  }
})
