var w1 = "cinema";
var w2 = "policeman";
var result;
function anagram(word1, word2){
	word1=word1.split("");
	word2=word2.split("");

	for(i=0;i<word1.length;i++){
		for(j=0;j<word2.length;j++){
			if(word1[i]==word2[j]){
				word1[i]="";
				word2[j]="";
			}
		}
	}

	word1=word1.toString().replace(/\,/g,"");
	word2=word2.toString().replace(/\,/g,"");

	if(word1==word2){
		return "Anagram!";
	}
	else{
		return word1 + " " + word2;
	}
}

console.log(anagram(w1,w2));