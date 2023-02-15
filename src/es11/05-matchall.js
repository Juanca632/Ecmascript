const regex = /\b(apple)+\b/g;

const fruit ="apple,banana kiwi, apple, orange, etc. etc. etc";

for (const match of fruit.matchAll(regex)){
    console.log(match);
}