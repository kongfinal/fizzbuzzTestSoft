function fizzBuzz(number){
    if(number > 0){
    var array=[]
    var z = ""
    var result = ""
    
   for(i=1;i<=number;i++){
        if(i%3==0&&i%5==0){
            array[i-1] = 'FizzBuzz'
        }else if(i%3==0){
            array[i-1] = 'Fizz'
        }else if(i%5==0){
            array[i-1] = 'Buzz'
        }else{   
            z= i.toString()
            array[i-1] = z   
        }

        if(i==number){
            result = result+array[i-1]
        }else{
            result = result+array[i-1]+" "
        } 

    }
    return result
    }
    return false
}

module.exports = fizzBuzz;