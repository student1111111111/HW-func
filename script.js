// Дано масив імен. Сформувати новий масив, який складається з імен, які починаються на задану літеру.

let names = ['pasha', 'ivan', 'artem', 'vova', 'igor', 'artur']
let fLetter = names.filter((x, i, arr) => arr[i][0] == 'a')  Краще було використати копію елемента x 
                                                             let fLetter = names.filter(x => x[0] == 'a')
document.write(fLetter)



// Дано ваги автомобілів на парковці. З’ясувати, чи усі автомобілі є легковими (легшими за 2000 кг).

let carWeigth = ["900", "1300", "2100", "3500", "850", "1930", "4100"]
carWeigth.every(x => x < 2000) ? document.write("All cars are less than 2000") : document.write("All cars weigh more than 2000")

// Дано масив, який зберігає кількість відвідувачів протягом тижня.З’ясувати, чи були дні, коли кількість відвідувачів була меншою за 10.

let numberOfVisitors = ["15","34","28","3","7","50","9","62","30"]
numberOfVisitors.every(x => x < 10) ? document.write("in a few days was less than 10 visitours")   Тут логічніше було використати some
: document.write("ther was more than 10 visitours in this days")


