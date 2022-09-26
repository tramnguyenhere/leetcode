/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {  
    if(digits=='') {
        return []
    } 
    let table = [ '0','1','abc','def','ghi','jkl','mno','pqrs','tuv','wxyz'];
    let result =[];
    let query = [''];
     
    while(query.length>0){
        let string = query[0];
        query.shift();
         
        if(string.length == digits.length){
            result.push(string); 
        } else{
            let s= Number(digits.charAt(string.length));
            let val = table[s]; 
            for(i=0;i<val.length;i++){
                query.push(string+val.charAt(i));
            }
        }
    }
     
    return result;
};