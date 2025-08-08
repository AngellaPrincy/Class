function analyzeText()
{
        let input=document.getElementById("paragraphInput").value
        let charCount=input.length
        let wordCount=input.split("").length
        let nospace=charCount-wordCount-1
        let sentenceCount=(input.match(/[.!?]/g))
        let unique_words=[...new Set(input.split(" "))]
        console.log("Space"+nospace)
        console.log("Total number of text"+text)
        console.log("Total number of words" + wordCount)
        console.log(input.match(/[.!?]/g))
        console.log(unique_words)
}
