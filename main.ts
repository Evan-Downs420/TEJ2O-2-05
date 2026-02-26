/* Copyright (c) 2020 MTHS All rights reserved
 *
 * Created by: Evan
 * Created on: Feb 2026
 * This program ...
*/

let temperatureInCelsius: number
let temperatureInKelvin: number

basic.clearScreen()
basic.showIcon(IconNames.Happy)

input.onButtonPressed(Button.A, function () {
    let temperature = input.temperature()
    temperatureInKelvin = (temperature + 273.15)
    temperatureInKelvin = Math.round(temperature)

    basic.clearScreen()
    basic.showString("The temperature is" + (temperature) + "K")
})
