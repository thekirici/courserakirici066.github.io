var names = new Array();
names[0] = "Mike";
names[1] = "John";
names[2] = "Jen";
names[3] = "jason";
names[4] = "david";
names[5] = "frank";
names[6] = "larry";
names[7] = "paula";
names[8] = "alex";
names[9] = "jim";


for (var i = 0; i < names.length; i++) {
    if (names[i].charAt(0) === 'J' || names[i].charAt(0) === 'j') {
        console.log("Goodbye " + names[i])
    } else {
        console.log("Hello " + names[i])
    }
}