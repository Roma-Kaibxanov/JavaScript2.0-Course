    "use strict"
    // Урок 6. Арифметические оперции

    // 1) Дано такое выражениие: (8 + 15) / ((14 - 9) * (7.8 - 15 * 14)). Вычислите на JavaScript и выведите результат в консоль.
    // 2) Каждое чиисло в выражениие сделайте переменной, например let x = 8; let y = 15 и так далее. При этом если число 15 встречается дважды, то не надо создавать вторую переменную.
    // 3) Подставьте в выражениие вместо чисел переменные, посмотрите на результат и убедиитесь, что он совпадает с рассчитанным в 1-м пункте.
    // 4) Создайте 2 строки 12 и 40.
    // 5) Сложите эти строки знаком + и выведите результат в консоль..
    // 6) Сложите эти строки знаком + , пропустив их предварительно через функцию Number, и выведите результат в консоль.
    // 7) Обьясните разницу в результатах 5-го и 6-го пункта. 


    let a = (8 + 15) / ((14 - 9) * (7.8 - 15 * 14));
    console.log(a);

    -0.02274975272007913

    let eight = 8;
    let fifteen = 15;
    let fourteen = 14;
    let nine = 9;
    let seven = 7.8;

    console.log(`(${eight} + ${fifteen}) / ((${fourteen} - ${nine}) * (${seven} - ${fifteen} * ${fourteen}))` + " = " + (eight + fifteen) / ((fourteen - nine) * (seven - fifteen * fourteen)));


    let num_One = "12";
    let num_Two = "40";

    console.log(num_One + num_Two);


    console.log(Number(num_One) + Number(num_Two));