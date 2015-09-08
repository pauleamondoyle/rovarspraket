/**
 * PART 0
 *
 * Define a function max() that takes two numbers as arguments
 * and returns the largest of them. Use the if-then-else construct available in Javascript.
 */

function max(a, b){
    // YOUR CODE HERE
    if(a>=b) return a
    else return b
    // 
}

console.assert(max(1,3) === 3);
console.assert(max(0,3) === 3);
console.assert(max(10,3) === 10);
console.assert(max(-1,-3) === -1);
console.assert(isNaN(max("aaa","bbb")));

/**
 * PART 1
 *
 * Define a function maxOfThree() that takes three
 * numbers as arguments and returns the largest of them.
 */

function maxOfThree(a, b, c){
    // YOUR CODE HERE
    if((a>=b && a>c)||(a>b && a>=c)){
    	return a
    }
    else if((b>=a && b>c)||(b>a && b>=c)){
    	return b
    }
    else {
    	return c
    }
    // 
}

console.assert(maxOfThree(1,3,2) === 3);
console.assert(maxOfThree(0,3,-1) === 3);
console.assert(maxOfThree(10,3,50) === 50);
console.assert(maxOfThree(-1,-3,-10) === -1);
console.assert(isNaN(maxOfThree("aaa","bbb","ccc")));

/**
 * PART 2
 *
 * Write a function isVowel() that takes a character (i.e. a string of length 1)
 * and returns true if it is a vowel, false otherwise.
 */

function isVowel(char){
    // YOUR CODE HERE
    
    
    if((char==="A")||(char==="a")||(char==="E")||(char==="e")||(char==="I")||(char==="i")||(char==="O")||(char==="o")||(char==="U")||(char==="u")) return true
    else return false
    // 
}

console.assert(isVowel(0) === false);
console.assert(isVowel("B") === false);
console.assert(isVowel("b") === false);
console.assert(isVowel("a") === true);
console.assert(isVowel("E") === true);

/**
 * PART 3
 *
 * Write a function rovarspraket() that will translate
 * a text into a "rövarspråket". That is, double every
 * consonant and place an occurrence of "o" in between.
 *
 * For example, rovarspraket("this is fun") should
 * return the string "tothohisos isos fofunon".

 */

function rovarspraket(word){
    // YOUR CODE HERE
   
    var what = ""

    if(typeof word === 'number'){
        return word.toString()
    }

    var wordInput = word.toLowerCase();
	counter = 0

	while(counter < wordInput.length){
		if((wordInput[counter] !== "a")&&(wordInput[counter] !== "e")&&(wordInput[counter] !== "i")&&(wordInput[counter] !== "o")&&(wordInput[counter] !== "u")){
			what +=(wordInput[counter]+"o"+wordInput[counter])
			counter +=1
		}
		else{
			what += wordInput[counter]
			counter +=1
		}
	}

	return what
    // 
}

console.assert(rovarspraket("a") === "a")
console.assert(rovarspraket("b") === "bob")
console.assert(rovarspraket("cat") === "cocatot")
console.assert(rovarspraket("javascript") === "jojavovasoscocroripoptot")
console.assert(rovarspraket(0) === "0")

/**
 * Part 4
 *
 * Define a function reverse() that computes
 * the reversal of a string. For example,
 * reverse("skoob") should return the
 * string "books".
 */

function reverse(str){
    // YOUR CODE HERE
    var counter = str.length - 1
    var backwards = ""

    while(counter>=0){
    	backwards +=str[counter]
    	counter -=1
	}
	return backwards
    // 
}

console.assert(reverse("books") === "skoob")
console.assert(reverse("we don't want no trouble") === "elbuort on tnaw t'nod ew")

/**
 * Part 5
 *
 * Write a function findLongestWord() that takes an
 * string returns the first, longest word in the array.
 *
 * i.e. findLongestWord("book dogs") should return "book"
 */

function findLongestWord(sentence){
    // YOUR CODE HERE

    //-----------------make array of words excluding any non-letter characters----------------------------------------------------- 
    var i = 0
    wordArray = []
    var indWord = ""
    var counter = 0
    var sentenceMod = sentence.toLowerCase()

    while(i<sentenceMod.length){

        if(sentenceMod[i]=== " "){
            wordArray.push(indWord)
            indWord = ""
            i++

        }

        else if((sentenceMod[i]!=="a")&&(sentenceMod[i]!=="b")&&(sentenceMod[i]!=="c")&&(sentenceMod[i]!=="d")&&(sentenceMod[i]!=="e")&&(sentenceMod[i]!=="f")&&(sentenceMod[i]!=="g")&&(sentenceMod[i]!=="h")&&(sentenceMod[i]!=="i")&&(sentenceMod[i]!=="j")&&(sentenceMod[i]!=="k")&&(sentenceMod[i]!=="l")&&(sentenceMod[i]!=="m")&&(sentenceMod[i]!=="n")&&(sentenceMod[i]!=="o")&&(sentenceMod[i]!=="p")&&(sentenceMod[i]!=="q")&&(sentenceMod[i]!=="r")&&(sentenceMod[i]!=="s")&&(sentenceMod[i]!=="t")&&(sentenceMod[i]!=="u")&&(sentenceMod[i]!=="v")&&(sentenceMod[i]!=="w")&&(sentenceMod[i]!=="x")&&(sentenceMod[i]!=="y")&&(sentenceMod[i]!=="z")){
            i++
        }

        else{
            indWord += sentenceMod[i]
                i++
        }


    }

    wordArray.push(indWord)  

    // -----------find longest word within array------------------


    var counterTwo = wordArray.length - 1
    var largest = ""


    while (counterTwo >= 0){
        if (wordArray[counterTwo].length >= largest.length){
            var largest = wordArray[counterTwo] 
            counterTwo--}
        else{
            counterTwo--
        } 

    }

    var positionLargest = wordArray.indexOf(largest)

    // -------------make new array of words, including non-letter characters. Find position of longest word within that array and return it.

    var t = 0
    finalWordArray = []
    var finalWord = ""
    

    while(t<sentence.length){

        if(sentence[t]=== " "){
            finalWordArray.push(finalWord)
            finalWord = ""
            t++

        }

        else{
            finalWord += sentence[t]
                t++
        }


    }

    finalWordArray.push(finalWord)
    return finalWordArray[positionLargest]
    
    // 
}

console.assert(findLongestWord("book dogs") === "book")
console.assert(findLongestWord("don't mess with Texas") === "Texas")

