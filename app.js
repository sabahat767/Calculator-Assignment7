function getvalue(num)
{
    var input_num=document.getElementById("input_num");//set in input text bar
    input_num.value+=num;

}
function elvaluate()
{
    var expression=document.getElementById("input_num");//set in input text bar
    expression.value=eval(expression.value);
  // console.log(expression.value);

}
function clearInput()
{
    var val=document.getElementById("input_num");//set in input text bar
    val.value="";
  

}
