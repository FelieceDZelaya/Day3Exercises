var myBooks = [
    {
        title: 'The Kavinci Kode',
        author: 'Keliece Kelaya',
        readAlready: true 
    },
    {
        title: 'The Kavinci Kode II',
        author: 'Keliece Kelaya',
        readAlready: true 
    },    
    {
        title: 'The Kavinci Kode III', 
        author: 'Keliece Kelaya',
        readAlready: false
    }];
  
  for (var i = 0; i < myBooks.length; i++) {

    var book = myBooks[i];

    if (book.readAlready) {
      console.log(`You have already read "${book.title}" by ${book.author}`);
    } else {
      console.log(`You need to read "${book.title}" by ${book.author}`);
    }
  }