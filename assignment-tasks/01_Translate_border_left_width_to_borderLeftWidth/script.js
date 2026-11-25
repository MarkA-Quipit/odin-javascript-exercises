function camelize(input) {
    let arr = input.split('-');
    arr = arr.map((word, i) => (i === 0 ? word : word.charAt(0).toUpperCase() + word.slice(1)));
    arr = arr.join("");
    console.log(arr);
}

camelize("background-color") == 'backgroundColor';
camelize("list-style-image") == 'listStyleImage';
camelize("-webkit-transition") == 'WebkitTransition';