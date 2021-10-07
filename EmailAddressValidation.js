let arguments = process.argv;
arguments.splice(0,2);

let emailRegex = RegExp("([a-zA-Z][a-zA-Z0-9_-]*[a-z|A-Z|0-9])");
arguments.forEach(element => 
    {
    console.log("uc1" +element+": ", emailRegex.test(element));
});

 arguments = process.argv;
arguments.splice(0,2);

emailRegex = RegExp("^[a-zA-Z]*[@][.a-zA-z]*$");
arguments.forEach(element => 
    {
    console.log("uc2" +element+": ", emailRegex.test(element));
});

emailRegex = RegExp("^[a-zA-Z][a-zA-Z]*[a-zA-Z0-9_-]*[a-z|A-Z|0-9](@)[a-zA-Z0-9]*(.)([a-z]{2,})$");
arguments.forEach(element => 
    {
    console.log("uc3" +element+": ", emailRegex.test(element));
});

emailRegex = RegExp("^[a-zA-z]+[a-zA-Z0-9]*[- . + _]?[a-zA-Z0-9]+[@]{1}[a-z0-9]+[.]{1}[.a-z]*$");
arguments.forEach(element => 
    {
    console.log("uc4" +element+": ", emailRegex.test(element));
});

emailRegex = RegExp("^[a-zA-z]+[a-zA-Z0-9]*[- . + _]?[a-zA-Z0-9]+[@]{1}[a-zA-Z0-9]+[.]{1}[.a-z]*[.]{1}[.a-z]*$");
arguments.forEach(element => 
    {
    console.log("uc5" +element+": ", emailRegex.test(element));
});