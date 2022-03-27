const express=require('express');
const path=require('path')


const utils=require('./src/utils/func.js');
const fs = require('fs');


const app=express()
const port=process.env.PORT || 3000



app.use(express.urlencoded())
app.use(express.json())

console.log(__dirname)

app.get('/',(req,res)=>{
    res.sendFile(__dirname+'/public/index.html')
})

app.post("/output", (req, res)=>{
    
    const sentence=req.body.sentence

    res.set("Content-Type", "text/html");
    res.write('<b>Recived Input: </b>'+sentence);
    res.write('<br>')
    res.write('<br>')
    res.write('<b>Sentence Segmentation: Each sentence is comma separated:-  </b>')

    const sentenceArray=utils.sentenceSegmentation(sentence);
    res.write(utils.joinSentencesWithComma(sentenceArray))
    res.write('<br>');
    res.write('<br>');

 
    const wordsArray=utils.wordSegmentation(sentenceArray);
    res.write('<b>Word Segmentation: Each Word is comma separated:-  </b>')
    res.write(utils.joinWordsWithComma(wordsArray))
    res.write('<br>');
    res.write('<br>');


    const noStopWords=utils.removeStopwords(wordsArray);
    res.write('<b>Original Sentence with no stop words: </b>');
    res.write(utils.joinWords(noStopWords));
    res.write('<br>');
    res.write('<br>');

    res.write('<b>Original sentence with all the words reversed : </b>');
    res.write(utils.joinWords(utils.reverseWords(wordsArray)));
    res.write('<br>');
    res.write('<br>');

    res.write('<b>Original sentence with no repeated words : </b>');
    res.write(utils.joinWords(utils.removeDuplicates(wordsArray)));
    res.write('<br>');
    res.write('<br>');

    res.write('<b>Numbers found in original sentence: </b>');
    res.write(utils.joinNumbersFoundInInputWithComma(utils.extractNumber(sentence)))
    res.write('<br>');
    res.write('<br>');

    res.end()
  });



app.listen(port,()=>{
    console.log('Server running on port 3000')
})