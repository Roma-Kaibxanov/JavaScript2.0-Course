    "use strict"
    // Урок 7. Операции сравнения

    // 1) Создайте булевскую переменную и запишите в нее результат сравнения (100 * 200 > 200 * 100).
    // 2) Выведите созданную переменную в консоль.
    // 3) Создайте вторую булевскую переменную, в которую запишите результат сравнения (400 > 300).
    // 4) Выведите созданную переменную в консоль.
    // 5) Выведите в консоль результат сравнения: 0 == false
    // 6) Выведите в консоль результат сравнения: 0 === false
    // 7) Обьясните полученные результаты в 5 и 6 пунктах.

    let bool_One = false;
    let bool_Two = (100 * 200 > 200 * 100);

    console.log(bool_One == bool_Two);
    console.log(bool_One);
    console.log(bool_Two);

    let bool_Three = true;
    let bool_Four = (400 > 300);

    console.log(bool_Three == bool_Four);
    console.log(bool_Three);
    console.log(bool_Four);


    console.log("0 == false " + (0 == false));
    console.log("0 === false " + (0 === false));
