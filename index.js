function takeANumber (line,name){   //
    line.push(name)
    return `Welcome, ${name}. You are number ${line.length} in line.` // return welcome message
    
  };
 
  
  function currentLine(line){
  if (!line.length){   //use !line.length to negate value of line. why not line.length=0 or false?
    return "The line is currently empty."
  }

  
  var numbersnames =[]
  
  for ( let i = 0,  l=line.length ; i < l; i++){
    numbersnames.push(`${i+1}. ${line[i]}`) // this puts together number and name. example 1.Bill. and loop creates the sequence
  
    
  }
  return `The line is currently: ${numbersnames.join(', ')}`   //returns the sequence 
  };
  
  
  function nowServing(line){
    if(!line.length ){
      return "There is nobody waiting to be served!"
      
    }
    return `Currently serving ${line.shift()}.` // arrays section
  };
  
   
