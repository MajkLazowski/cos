function zaokraglenie()
{

    var liczba = document.getElementById("liczba").value;
    parseFloat(liczba);


    if (Number.isInteger(liczba))
    {
        alert("jest liczbą całkowitą");
    }
    else
    {
        document.getElementById("round").innerHTML = Math.round(liczba);
        document.getElementById("floor").innerHTML = Math.floor(liczba);
        document.getElementById("ceil").innerHTML = Math.ceil(liczba);
        document.getElementById("trunc").innerHTML = Math.trunc(liczba);
    }
}