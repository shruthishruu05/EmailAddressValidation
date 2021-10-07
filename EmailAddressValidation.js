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