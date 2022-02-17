$(function(){
    var temp1 = " ";
    var temp2 = " ";
    var op = " ";

   $("#9, #8, #7, #6, #5, #4, #3, #2, #1, #0").click(function(){ 
       var num1 = $(this).html();
        temp1 = num1;
        $("input").val(temp1);
       console.log(temp1);  

       
   })
   $("#9, #8, #7, #6, #5, #4, #3, #2, #1, #0").click(function(){
       var num2 = $(this).html();
       temp2 = num2;
       $("input").val(temp2);
       console.log(temp2);
   })
    
    $("#add").click(function(){
    var opp = $(this).html();
    op = opp;
    $("input").val(op);
    console.log(op);
    })
    $("#subtract").click(function(){
    var opp = $(this).html();
    op = opp;
    $("input").val(op);
    console.log(op);
    })
    $("#multiply").click(function(){
    var opp = $(this).html();
    op = opp;
    $("input").val(op);
    console.log(op);
    })
    $("#divide").click(function(){
    var opp = $(this).html();
    op = opp;
    $("input").val(op);
    console.log(op);
    })
function add(){
    var t1 = parseInt(temp1);
    var t2 = parseInt(temp2);
    var result = t1 + t2;
    return result;

} 
function subtract(){
    var t1 = parseInt(temp1);
    var t2 = parseInt(temp2);
    var result = t1 - t2;
    return result;

}
function multiply(){
    var t1 = parseInt(temp1);
    var t2 = parseInt(temp2);
    var result = t1 * t2;
    return result;

} 
function divide(){
    var t1 = parseInt(temp1);
    var t2 = parseInt(temp2);
    var result = t1 / t2;
    return result;

} 


$("#equal").click(function(){
if(op == "+"){
$("input").val(add());
}else if(op == "-"){
$("input").val(subtract());   
}
else if(op == "*"){
    $("input").val(multiply());   
}
else if(op == "/"){
$("input").val(divide());
}   
})



$("#ac").click(function(){
$("input").val(" ");
})
   
})
   
