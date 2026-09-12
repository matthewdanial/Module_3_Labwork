if (0) console.log('#1 zero is true')
if ("0") console.log('#2 zero is true')
if (null) console.log('null is true')
if (-1) console.log('negative is true')
if (1) console.log('positive is true')

///'#2 zero is true' pritns because a string is truthy as long as it isnt empty
//'negative is true' prints because a number is truthy as long as it isn't zero
//'positive is true' prints because 1 is a non-zero number
//'#1 zero is true' but doesnt print becasue 0 is falsy
//'null is true' doesnt print because null is falsy

