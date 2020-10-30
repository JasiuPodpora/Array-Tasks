var studentNames = ['Aidan','Cody','Daniel','Jerry','Liam','David','Emanuel','Ethan','Haiden','Harry','Jasiu','Jean','Kaidyn','Leah','Michael','Rowan','Ryder','Stefan','Vaida','Andrew','Thomas']

studentNames.sort();
console.log(studentNames);
NameChosen = parseInt(prompt(`Please input a number between 0 - ${studentNames.length}`));

if (NameChosen > 0 && NameChosen < 21) {
    document.write(`The number that you have entered is associated with ${studentNames[NameChosen]}`);
} else {
    alert('Number must be between 0-21!');
    location.reload();
}