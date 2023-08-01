let nbr = Number((prompt("Enter any number during 1 to 20")))

for (var i=nbr; i <=20; i++) {
    
    document.write(`<b> <center> <br> <h2> it's a table </h2> ${i}`)
    for (var b=1; b <= 10; b++) {
        document.write("<b> <center> <br>")
        document.write(` ${i} x ${b} = ${i*b}`)
    }
    document.write("<br> <hr>")
}

if (nbr > 20) {
    document.write("<b><i> <center> <br> Enter a Number Less Than 21 ")
}
document.write("<b><i> <center> <br> <h2>  Made by Muhammad Unaid ")

