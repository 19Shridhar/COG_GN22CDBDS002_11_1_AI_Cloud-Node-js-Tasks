const stopWords=require('stopwords').english

const reverseString = (string)=>{
    
    var newString = "";
    
    for (var i = string.length - 1; i >= 0; i--) {
        newString += string[i];
    }
    
    return newString;

}

const joinSentencesWithComma =(inputArray)=>{

    return inputArray.join(', ')
}

const joinWordsWithComma = (inputArray)=>{
    
    var tempArray=new Array();
    
    inputArray.forEach(element=>{
        var temp=element.join(', ');
        tempArray.push(temp);
    })

    return tempArray.join(',');
}

const joinNumbersFoundInInputWithComma =(inputArray)=>{

    if (inputArray.length===0){
        return 'No numbers Found';
    }
    else{

        return inputArray.join(',')
    }

}

const joinWords=(words=>{

    var jointSentenceArray=new Array();
    
    words.forEach(element=>{
        
        var temp=element.join(' ');
        
        jointSentenceArray.push(temp)
    })

    return jointSentenceArray.join('. ');
})

const sentenceSegmentation = (sentence)=>{
      
    var segmentedArray = sentence.split(".");
    
    if(segmentedArray[segmentedArray.length-1]==='')
    {
        segmentedArray.pop();
    }

    return segmentedArray;
}


const wordSegmentation = (sentences)=>{
      
    var newArray=new Array();

    sentences.forEach(element => {

        newArray.push(element.trim().split(' '));
      });

    return newArray;
}

const removeStopwords = (words)=>{

    var noStopWords=new Array();
    
    words.forEach(element=>{
        
        var temp=new Array();
        
        element.forEach(word=>{
            if(!stopWords.includes(word)){
                temp.push(word);
            }
        })
        noStopWords.push(temp);
    })

    return noStopWords;
}

const removeDuplicates = (words)=>{
    
    var noDuplicate=new Array();

    words.forEach(element=>{
        var temp=new Array();

        element.forEach(word=>{
            if(!temp.includes(word))
            {
                temp.push(word);
            }
            
        })

        noDuplicate.push(temp);
    })

    return noDuplicate;
}

const reverseWords = (words)=>{
    
    var wordReversed=new Array();

    words.forEach(element=>{
        var temp=new Array();

        element.forEach(word=>{
            temp.push(reverseString(word));
        })

        wordReversed.push(temp);
    })

    return wordReversed;
}

const extractNumber = (sentence)=>{
   
    const regex=/\d+/g;

    return sentence.match(regex);
}

module.exports={
    joinSentencesWithComma,
    joinWordsWithComma,
    joinNumbersFoundInInputWithComma,
    joinWords,
    reverseWords,
    sentenceSegmentation,
    wordSegmentation,
    removeStopwords,
    removeDuplicates,
    extractNumber
    
}