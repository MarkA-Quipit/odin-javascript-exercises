function camelize(input) {
    let arr = input.split('-');
    // Iteration through the array and if the first word, still the same, if not, start cased for camelCase effect
    arr = arr.map((word, i) => (i === 0 ? word : word.charAt(0).toUpperCase() + word.slice(1)));
    arr = arr.join("");
    return console.log(arr);
}

camelize("background-color");
camelize("list-style-image");
camelize("-webkit-transition");