 //  только нажмите эту строку, если она содержит не пробельные символы.

    //JavaScript метод trim() позволяет удалить пробелы с обоих концов строки. 
    // К удаляемым символам относятся пробел, неразрывный пробел, символ табуляции,
    //  перевод страницы и все символы конца строки 
    //  (возврат каретки, перевод строки и прочие).
    
    //The push() method adds new items to the end of an array,
    //  and returns the new length
document.querySelector('.button-11').addEventListener('click',() =>{

var footballers =  $('#form-control').val().split(/\n/);
var footballers2 =  $('#form-control2').val().split(/\n/);

var listFootballers = [];
var listFootballers2 = [];

var listFootballersText = [];
var listFootballersText2 = [];


for (var i= 0; i<footballers.length; i++){
if (/\S/.test(footballers[i])){

    listFootballersText.push('"'+ $.trim(footballers[i])+ '"' );
    
    listFootballers.push($.trim(footballers[i]));
    var number = footballers.length;
    if(number > 11)
    {
        alert( " The number of players in a single team cannot be more than 11. " );
    } 

}
}

for (var j= 0; j<footballers2.length; j++){
   
    if (/\S/.test(footballers2[j]) ){
    
        listFootballersText2.push('"'+ $.trim(footballers2[j])+'"');
        
        listFootballers2.push($.trim(footballers2[j]));
        var number2 = footballers2.length;
        if(number2 > 11)
        {
            alert( " The number of players in a single team cannot be more than 11. " );
        } 

    }
    }

    
 document.querySelector('.out-11').innerHTML = "Players of first team: "  +  listFootballersText ;
 document.querySelector('.out-22').innerHTML = "Players of second team: "  +  listFootballersText2 ;

});

  

document.querySelector('.button-22').addEventListener('click',()=>{
    var data1 = +document.querySelector('.form-control3').value;
    var data2 = +document.querySelector('.form-control4').value;
if(data1==0){
                document.querySelector('.out-33').innerHTML = 0;
            
}
if(data2==0){
    document.querySelector('.out-44').innerHTML = 0;
}

        const findPartitions = (number1 = 1) => {
         
        const arr = Array(number1 + 1).fill(null).map(() => {
           return Array(number1 + 1).fill(null);
        });
        if (data1==0){
            document.querySelector('.out-33').innerHTML = 0;
        }

        for (let j = 1; j <= number1; j += 1) {
           arr[0][j] = 0;
        }
        for (let i = 0; i <= number1; i += 1) {
           arr[i][0] = 1;
        }
        for (let i = 1; i <= number1; i += 1) {
           for (let j = 1; j <= number1; j += 1) {
              if (i > j) {
                 arr[i][j] = arr[i - 1][j];
              }
              else {
                 const exclusive = arr[i - 1][j];
                 const inclusive = arr[i][j - i];
                 arr[i][j] = exclusive + inclusive;
              }

           }

        }

        return arr[number1][number1];

     };

     const findPartitions2 = (number2 = 1) => {
        if (data2==0){
            document.querySelector('.out-44').innerHTML = 0;
        }
        const arr = Array(number2 + 1).fill(null).map(() => {
           return Array(number2 + 1).fill(null);
        });
       
        for (let j = 1; j <= number2; j += 1) {
           arr[0][j] = 0;
        }
        for (let i = 0; i <= number2; i += 1) {
           arr[i][0] = 1;
        }
        for (let i = 1; i <= number2; i += 1) {
           for (let j = 1; j <= number2; j += 1) {
              if (i > j) {
                 arr[i][j] = arr[i - 1][j];
              }
              else {
                 const exclusive = arr[i - 1][j];
                 const inclusive = arr[i][j - i];
                 arr[i][j] = exclusive + inclusive;

              }

           }

        }
        return arr[number2][number2];
     };

     if (data1 + data2 > 7 ){
        alert( "The combined number of goals cannot be greater than 7" );
    }
    else if(data1 > data2){
        document.querySelector('.out-55').innerHTML = "Winner Team 1";
    }
    else if(data1==data2){
        document.querySelector('.out-55').innerHTML = " DRAW ";
    }
    else {
        document.querySelector('.out-55').innerHTML = "Winner Team 2";
    }


   


     if(data1==0){
            document.querySelector('.out-33').innerHTML = 0;
}

else {
    if(data1==4){
        document.querySelector('.out-33').innerHTML = findPartitions(data1) + "(1 1 1 1), (1 1 2), (1 3), (2 2), (4) ";
    }
    else if(data1==1){
        document.querySelector('.out-33').innerHTML = findPartitions(data1)+ "(1) ";
    }
    else if(data1==3){
        document.querySelector('.out-33').innerHTML = findPartitions(data1)+ "(1 1 1), (2 1) (3) ";
    }
    else if(data1==2){
        document.querySelector('.out-33').innerHTML = findPartitions(data1)+ "(1 1) (2)  ";
    }
    else if(data1==5){
        document.querySelector('.out-33').innerHTML = findPartitions(data1)+ "(1 1 1 1 1 ) (2 1 1 1) (3 1 1) (3 2) (2 2 1) (4 1) (5) ";
    }
    else if(data1==6){
        document.querySelector('.out-33').innerHTML = findPartitions(data1)+ "(1 1 1 1 1 1 ) (2 1 1 1 1) (3 1 1 1) (3 2 1) (2 2 2) (2 4) (3 3) (1 1 4) (5 1) (2 2 1 1)   (6) ";
    }
    else if(data1==7){
        document.querySelector('.out-33').innerHTML = findPartitions(data1)+ "(1 1 1 1 1 1 1 ) (2 1 1 1 1 1) (2 2 1 1 1) (2 2 2 1) (3 1 1 1 1) (3 2 1 1) (3 2 2) (3 3 1) (4 2 1) (4 1 1 1) (5 1 1) (4 3) (5 2) (6 1) (7) ";
    }}

 if(data2==0){
        document.querySelector('.out-44').innerHTML = 0;
}
else {
if(data2==4){
    document.querySelector('.out-44').innerHTML = findPartitions2(data2) + "(1 1 1 1), (1 1 2), (1 3), (2 2), (4) ";

}
else if(data2==1){
    document.querySelector('.out-44').innerHTML = findPartitions2(data2)+ "(1) ";
}
else if(data2==3){
    document.querySelector('.out-44').innerHTML = findPartitions2(data2)+ "(1 1 1), (2 1) (3)  ";
}
else if(data2==2){
    document.querySelector('.out-44').innerHTML = findPartitions2(data2)+ "(1 1) (2)  ";
}
else if(data2==5){
    document.querySelector('.out-44').innerHTML = findPartitions2(data2)+ "(1 1 1 1 1 ) (2 1 1 1) (3 1 1) (3 2) (2 2 1) (4 1) (5) ";
}
else if(data2==6){
    document.querySelector('.out-44').innerHTML = findPartitions2(data2)+ "(1 1 1 1 1 1 ) (2 1 1 1 1) (3 1 1 1) (3 2 1) (2 2 2) (2 4) (3 3) (1 1 4) (5 1) (2 2 1 1)   (6) ";
}
else if(data2==7){
    document.querySelector('.out-44').innerHTML = findPartitions2(data2)+ "(1 1 1 1 1 1 1 ) (2 1 1 1 1 1) (2 2 1 1 1) (2 2 2 1) (3 1 1 1 1) (3 2 1 1) (3 2 2) (3 3 1) (4 2 1) (4 1 1 1) (5 1 1) (4 3) (5 2) (6 1) (7) ";
}

}
console.log(findPartitions(data1))
console.log(findPartitions2(data2))
     
});

