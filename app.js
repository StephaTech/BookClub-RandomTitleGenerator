let btn = document.getElementById("btn");
let output = document.getElementById("output");
let bookTitle = [
"The Clocks by Agatha Christie",
"The Moving finger by Agatha Christie",
"Uma breve historia da humanidade sapiens by Yuval Noah Harari",
 
"O cobrador by Rubem Fonseca",
"A merda do mundo by Arcangelo Ferreira e Thiago Roney",
"Uma breve historia da filosofia by Nigel Warburton",
"As veias abertas da America Latina by Eduardo Galeano",
"Escravidao by Laurentino Gomes",
"Sobre o autoritarismo brasileiro by Lilia Moritz Schwarcz",

"Mulheres, Raca e Classe by Angela Davis",
"Murder in Mesopotamia by Agatha Christie",
"Quem tem medo do feminismo negro by Djamila Ribeiro",
"All God children need travelling shoes by Maya Angelou",

"The Beauty Myth", 
"All about Love", 
"A Gentleman in Moscow",

"Mulheres, Raca e Classe by Angela Davis",
"Murder in Mesopotamia by Agatha Christie"];

btn.addEventListener("click", function(){
    var randomBook = bookTitle[Math.floor(Math.random() * bookTitle.length)]
    output.innerHTML = randomBook;

    // saveLocalBooks(randomBook.id);
})

// function saveLocalBooks(bookTitle) {
//     // let bookTitle;
//     if (localStorage.getItem("output") === null) {
//         bookTitle = [];
//     } else {
//         bookTitle = JSON.parse(localStorage.getItem("output"));
//     }
//     bookTitle.push(bookTitle);
//     localStorage.setItem("output", JSON.stringify(bookTitle));
//   }
console.log(localStorage);