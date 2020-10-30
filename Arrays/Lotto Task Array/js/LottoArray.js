var NumberForLotto = []
NumberForLotto[0] = [Math.floor((Math.random() * 100) + 1)]
    NumberForLotto[1] = [Math.floor((Math.random() * 100) + 1)]
    NumberForLotto[2] = [Math.floor((Math.random() * 100) + 1)]     
    NumberForLotto[3] = [Math.floor((Math.random() * 100) + 1)]    
    NumberForLotto[4] = [Math.floor((Math.random() * 100) + 1)]     
    NumberForLotto[5] = [Math.floor((Math.random() * 100) + 1)]       

    NumberForLotto.sort();
    document.write("The 6 lotto numbers are listed below "+ "<br>")     
    for (i = 0; i <NumberForLotto.length; i++) {         
        document.write(NumberForLotto[i] + " "+ "<br>");}