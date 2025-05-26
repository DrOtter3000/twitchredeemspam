for (let i = 0; i < 20; i++) {

//fetch here

await new Promise(r => setTimeout(r, 2000));
console.log(i)
};
