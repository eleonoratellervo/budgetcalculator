//EKAKSI SIIS OON LÖYTÄNY TOHON TOMMOSEN JOKA LASKEE MUN LASKUTOIMITUKSESSA KÄYTETTÄVÄN
// JAKAJAN, ELI MONTAKO PÄIVÄÄ KUUKAUDESSA ON VIELÄ JÄLJELLÄ!
//JOKA SITTEN TOIMII JAKAJANA FORM-INPUTEISTA SAADUILLE YHTEEN LASKETTAVILLE ARVOILLE

//TÄMÄN HÖSKÄN TULOS PITÄÄ SAADA VIELÄ TONNE LASKUTOIMITUKSEEN MUKAAN. VOINKO JOTENKIN TON var days'IN
//MÄÄRITTÄÄ NUMEERISEKSI ARVOKSI JA KÄYTTÄÄ SITÄ LASKUTOIMITUKSESSA MYÖHEMMIN?
//VAI KÄSKENKÖ KONEEN PULJAAMAAN

<script>

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
        </script> 


//ht tp://embed.plnkr.co/FFUXhl/preview -->

// TÄSSÄ NÄITÄ VAIHTOEHTOJA JOILLA KUVITTELISIN ET SAISIN TON PULJATTUA
// JA SE YHTÄLÖ JONKA TULOKSEN SIIS HALUAN ON
// (A1+(-A2)+(-A3))/A4=A5
// EKANA MUN MIELESTÄ LUPAAVIN VAIHTOEHTO

<script>

var A1 = 5;
var A2 = 6;
var A3 = 6;
var days = ;
var total = (A1 + -A2 + -A3)/days;
document.getElementById("thecalculator").innerHTML =
"Your daily budget: " + total;
</script>







//	//function getQuantity()
//{
//  //Assume form with id=""
//    var  = document.forms["A1"];
//    var  = document.forms["A2"];
//   var  = document.forms["A3"];
//	var getRemanningDays = #remainingday

//	function getTotal()
//	{
//		var daily budget = getfirst
//	}

  //Get a reference to the TextBox
//   var quantity = theForm.elements["quantity"];
//    var howmany =0;
//    //If the textbox is not blank
//    if(quantity.value!="")
//    {
//        howmany = parseInt(quantity.value);
//    }
//return howmany;
//}



//form.thecalculator = function() {
//	var inputs = document.getElementsByTagName('A1'),
//	var inputs = document.getElementsByTagName('A2'),
//	var inputs = document.getElementsByTagName('A3'),
//	var output = ((-A1+-A2)/A3=A4),





	//calculate.(((-A1)+(-A2))/A3=A4);



//}


//document.getElementById('total_expenses').value = firstValue + secondValue + thirdValue + fourthValue;