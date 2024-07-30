let index = 0;
let questions = quiz.sort(function()
{
    return 0.5 - math.random();
});

$(function(){
    //timer code start from here
    let totalTime = 200;//200 seconds for timer
    let min = 0;
    let sec= 0;
    let counter=0;


    let timer = setInterval(function(){
    counter++;
    min = math.floor((totalTime - counter)/60);  //calculating min
    sec = totalTime - (min * 60) - counter;
    

$(".timerBox span").text(min +":"+ sec);
if(counter == totalTime){
    clearInterval(timer);

}


    }, 1000); //timer set 1 seconds interval
    //timer code end from here
    //printQuestion
    printQuestion(index);

});

//function to print question start
function printQuestion(i){
    // console.log(questions[0]);

    $(".questionBox").text(questions[i].question);
    $(".optionBox span").eq(0).text(questions[i].option[0]);
    $(".optionBox span").eq(1).text(questions[i].option[1]);
    $(".optionBox span").eq(2).text(questions[i].option[2]);
    $(".optionBox span").eq(3).text(questions[i].option[3]);
}
//function to print question end

