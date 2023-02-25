$(window).ready(function(){
    draw(70, '.pie-chart1', '#3f0035ce');
   draw(60, '.pie-chart2', '#3f0035ce');
   draw(70, '.pie-chart3','#3f0035ce');
   draw(30, '.pie-chart4', '#3f0035ce');
   draw(60, '.pie-chart5','#3f0035ce');
 });
 
 function draw(max, classname, colorname){
    var i=1;
     var func1 = setInterval(function(){
       if(i<max){
           color1(i,classname,colorname);
           i++;
       } else{
         clearInterval(func1);
       }
     },10);
 }
 function color1(i, classname,colorname){
    $(classname).css({
         "background":"conic-gradient("+colorname+" 0% "+i+"%, #ffffff "+i+"% 100%)"
    });
 };

 history.scrollRestoration = "manual"
