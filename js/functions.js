/**
We have 3 functions to use in GPAcalc.html
The first is: changeVal() to save the values of the drop list
The Second is: calculate() to calculate and print the answer to the user in GPAcalc.html
The Third is: clear() to clear all selected values on drop list and the filled forms

**//

		//var c1=document.getElementById("H1");
		//var strUser=c1.options[e.selectedIndex].value;
		//var strUser2=c1.options[e.selectedIndex].text;

//document.getElementById("oh").innerHTML=c1+" and "+strUser+"and"strUser2;


//Equation (Grade * hours)+(Grade * Hours)/Total sum of hours



var get_id = new Array();


		function changeVal()//to save the values of drop list in GPAcalc.html
		{
			for(var i=1;i<b1.length;i++){
				for(var j=1;j<=2;j++){
			//var get_id= document.getElementById(b1);
			get_id[i]=document.getElementById('b'+i);
			alert(get_id[i][get_id[i].selectedIndex].value);
				}
			}
		}

	

		function claculate()//onclick button calculate in HTML to calculate the Total GPA
		{
					for (var j=0;j<get_id.length;j++){
			document.getElementById("Result").innerHTML="Your Overall GPA is:"+"\n";
		}

		

		function clear()//to clear the forms and the drop list on GPAcalc.html
		{
		
		    if (document.selection) 
              document.selection.clear ();
		}
	
//document.getElementByID("Calc");


