let avg = 0
let sum = 0
let num1 = game.askForNumber("What is your first number? ")
let num2 = game.askForNumber("What is your second number? ")
scene.setBackgroundColor(0)
game.onUpdate(function () {
    game.splash("1st number is: ", num1)
    game.splash("2nd number is: ", num2)
    sum = num1 + num2
    game.splash("The sum of your numbers is: ", sum)
    avg = sum / 2
    game.splash("The average of your numbers is: ", avg)
})
