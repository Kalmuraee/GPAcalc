/**
We have 3 functions to use in GPAcalc.html
The first is: changeVal() to save the values of the hours drop list
The Second is:changeGrd() to save the values of the grade gaind from the drop list
The Thirs is: calculate() to calculate and print the answer to the user in GPAcalc.html and the equation for calculation is (Grade * hours)+(Grade * Hours)+.../Total sum of hours
The Forth is: clear() to clear all selected values on drop list and the filled forms

**/

		//var c1=document.getElementById("H1");
		//var strUser=c1.options[e.selectedIndex].value;
		//var strUser2=c1.options[e.selectedIndex].text;

//document.getElementById("oh").innerHTML=c1+" and "+strUser+"and"strUser2;


//Equation (Grade * hours)+(Grade * Hours)/Total sum of hours



var get_val = new Array();
var get_grd = new Array();
var total=0 ;
var sumOfTotal=0;
var sumOfHours=0;


		function changeVal()//to save the values of drop list in GPAcalc.html
		{
			for(var i=1;i<6;i++){
			//var get_val= document.getElementById(b1);
			//get_val[i]=document.getElementById("b%d",i).selectedIndex.value;
			//get_val[i]=document.getElementById("b%d",i).options.value;
			//alert(get_val[i]);

			//playground
			var x = document.getElementById("b"+i).selectedIndex;
			get_val[i]=document.getElementsByTagName("option")[x].value;

				}

			}
		
		function changeGrd()//to save the Grade of the course
	{

		for (var i=1;i<=6;i++)
		{
			var y = document.getElementById("c"+i).selectedIndex;
			get_grd[i]=document.getElementsByTagName("option")[y].value;

		}


	}

		function calculate()//  to calculate the Total GPA
		{
				for (var i=1;i<=6;i++)
				{
					total=get_val[i]*get_grd[i];
					(isNaN(total) ? 0 : sumOfTotal+=total) 
					//sumOfTotal+=total;

				}
				
				for (var i=1;i<=6;i++)//sum of all hours
				{

					(isNaN(get_val[i]) ? 0 : sumOfHours+=parseInt(get_val[i])) 

				}
				alert(sumOfHours);
				
				return sumOfTotal/sumOfHours;
					
				
		}

		function viewResults()
		{
			document.getElementById("Result").innerHTML="Your Overall GPA is:"+calculate();

		}



		function clear() //to clear the forms and the drop list on GPAcalc.html
		{
		
		    if (document.selection) 
              document.selection.clear ();
		}

	
//document.getElementByID("Calc");


