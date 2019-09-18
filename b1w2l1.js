//River van Gelder,B1W2O1 - Pizza Calculator 1.0
var small = 5;
var medium = 8;
var large = 11;

var pizza = prompt("Wilt u een pizza bestellen?");

if (pizza == "nee"){
    exit;
} 
var kind = prompt("Welke wilt u bestellen?")
var size = prompt("Wilt u een small,medium of large?")
var number = prompt("hoeveel wilt u?")

if (size == "small"){
    prijs = small * number 
} else if (size == "medium"){
      prijs = medium * number
} else if (size == "large"){
    prijs = large * number
}

if (pizza == "ja"){
    document.write(kind+" "+size+" "+number+"x<br>")
}
var anotherone = prompt ("Wilt u nog een pizza bestellen?")
if (anotherone == "nee"){
    document.write ("totaal = €"+ prijs)
    exit;
}

var kind = prompt("Welke wilt u erbij kopen?")
var size2 = prompt("Wilt u een small,medium of large?")
var number1 = prompt("Hoeveel wilt u?")

if (size2 == "small"){
    prijs = prijs + small * number1 
} else if (size2 == "medium"){
      prijs = prijs + medium * number1
} else if (size2 == "large"){
    prijs = prijs + large * number1
}
if (anotherone == "ja"){
    document.write(kind+" "+size2+" "+number1+"x<br>")
}
document.write ("totaal = €"+ prijs)

var anotherone = prompt ("Wilt u nog een pizza bestellen?")
if (anotherone == "nee"){
    document.write ("totaal = €"+ prijs)
    exit;
}
var anotherone = prompt ("Wilt u nog een pizza bestellen?")
if (anotherone == "nee"){
    document.write ("totaal = €"+ prijs)
    exit;
}
var kind = prompt("Welke wilt u erbij kopen?")
var size3 = prompt("Wilt u een small,medium of large?")
var number2 = prompt("Hoeveel wilt u?")

if (size3 == "small"){
    prijs = prijs + small * number1 
} else if (size3 == "medium"){
      prijs = prijs + medium * number1
} else if (size3 == "large"){
    prijs = prijs + large * number1
}
if (anotherone == "ja"){
    document.write(kind+" "+size3+" "+number2+"x<br>")
}
document.write ("totaal = €"+ prijs)