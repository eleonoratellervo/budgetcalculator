 GET REMAINING DAYS IN CURRENT MONTH IN JS <script>
                // Add your javascript here
                $(function() {
                        getRemanningDays();
                });

                var getRemanningDays = function() {
                        var date = new Date();
                        var time = new Date(date.getTime());
                        time.setMonth(date.getMonth() + 1);
                        time.setDate(0);
                        var days =time.getDate() > date.getDate() ? time.getDate() - date.getDate() : 0;
                        alert(days +' Days Remaining.');
                        $('#remainingday').html(days);
                }
        </script> http://embed.plnkr.co/FFUXhl/preview -->


function getQuantity()
{
    //Assume form with id="theform"
    var thecalculator = document.forms["first"];
    var thecalculator = document.forms["second"];
    var thecalculator = document.forms["third"];
	var getRemanningDays = #remainingday

	function getTotal()
	{
		var daily budget = getfirst
	}

    //Get a reference to the TextBox
    var quantity = theForm.elements["quantity"];
    var howmany =0;
    //If the textbox is not blank
    if(quantity.value!="")
    {
        howmany = parseInt(quantity.value);
    }
return howmany;
}

var valittuTekstikappale = document.querySelector('p');
var teksti = 'Jotain ihan muuta';

valittuTekstikappale.textContent = teksti;

form.thecalculator = function() {
	var inputs = document.getElementsByTagName('first'),
	var inputs = document.getElementsByTagName('second'),
	var inputs = document.getElementsByTagName('third'),
	
	calculate.(((-first) + (-second))/third=0);



}