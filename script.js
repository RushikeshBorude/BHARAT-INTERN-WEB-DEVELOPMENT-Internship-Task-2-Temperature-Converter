function temperatureConvert()
{
    let temperature = document.getElementById("temp").value;
    let inputdegree = document.getElementById("deg").value;
    let finalTemperature;

    if (inputdegree == 'Fahrenheit')
    {
        finalTemperature = "Temperature in Celsius is: " + (parseFloat(temperature) - 32) / 1.8;
    }
    else
    {
        finalTemperature = "Temperature in Fahrenheit is: " + (parseFloat(temperature) * 1.8) + 32;
    }

    console.log(finalTemperature);
    document.getElementById("output").textContent = finalTemperature;
    return false;
}
