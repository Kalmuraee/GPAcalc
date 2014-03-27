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
			for(var i=1;i<b1.length;i++){
			//var get_val= document.getElementById(b1);
			get_val[i]=document.getElementById('b'+i);
			get_val[i]=get_val[i][get_val[i].selectedIndex].value;
			sumOfHours+=get_val[i];
				}

			}
		
		function changeGrd()//to save the Grade of the course
	{

		for (var i=1;i<=c1.length;i++)
		{
			get_grd[i]=document.getElementById('c'+i);
			get_grd[i]=[get_grd[i].selectedIndex].value;

		}


	}

		function claculate()//onclick button calculate in HTML to calculate the Total GPA
		{
				for (var j=1;j<=d1.length;j++)
				{
					total=get_val[i]*get_grd[i];
					sumOfTotal+=total;

				}

				for (var i=1;i<=d1.length;i++)//sum of all hours
				{

					sumOfHours+=get_val[i];

				}

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


