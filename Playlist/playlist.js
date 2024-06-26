const musicPlaylist = [
    "Tom Sawyer",
    "Sabotage",
    "I Wanna Dance With Somebody",
    "Don't Speak",
    "Bulls On Parade",
    "Thriller",
    "The Breaks",
    "Brick",
    "Aeroplane Over the Sea",
    "Tubthumping"
  ];

  //removing the first and lat element
  musicPlaylist.shift();
  musicPlaylist.pop();
  //adding one new element to the end of the array
  musicPlaylist.push("Party");
  //adding 2 new elements to the beginning of the array
  musicPlaylist.unshift("Parade", "Smile");

  console.log(musicPlaylist);
