//Once you complete a problem, open up Chrome and check the answer in the console.


//Create an object called me. Give it a key of name with the value being your name, and another key of age with the value being your age. Then alert your name using dot notation.

  var me = {
    name: 'Harry',
    age: 26
  }
// alert(me.age);



//NEXT PROBLEM




//Make a 'favoriteThings' object that contains the following keys: band, food, person, book, movie, holiday. Have the values to those keys be your favorite thing in that category.

  var favoriteThings = {
    band: 'Tool',
    food: 'sushi',
    person: 'myself',
    book: 'Ready Player 1',
    movie: 'Fight Club',
    holiday: 'Xmas'
  }


//After you've made your object, add another key named 'car' with the value being your favorite car and then another key named 'brand' with the value being your favorite brand.

  favoriteThings.car = 'R8';
  favoriteThings.brand = 'Nike'


//Now change the value of the food key in your favoriteThings object to be 'Chicken Nuggets' and change the value of the book key in your favoriteThings object to be 'Harry Potter'.

  favoriteThings.food = 'Chicken Nuggets';
  favoriteThings.book = 'Harry Potter';





//NEXT PROBLEM



/*Create an empty Object called backPack. Now, create a variable called 'item'
and set it equal to the string 'firstPocket'. Using bracket notation,
add a 'firstPocket' key (or property) to backPack, using 'item'.
Set the value of that key to 'chapstick'.


Using dot notation, add another key (or property) to your backPack object
that is named color, with the value being the color of your backpack. */

  var backPack = {};
  var item = 'firstPocket';
  backPack[item] = 'chapstick';

//After you do the above, alert your entire backPack object.

  // alert(backPack);

/*You probably noticed that it just alerted [object Object].
Alerting to see the data in your Object doesn't work so well.
Instead, console.log your whole backPack object and then check out the console. */

  console.log(backPack);




//NEXT PROBLEM




//Create an 'alsoMe' object with the following properties name, age, height, gender, married, eyeColor, hairColor. Fill those properties in with the appropriate values.

  var alsoMe = {
    name: 'harry',
    age: 26,
    height: "6'0",
    gender: 'male',
    married: false,
    eyeColor: 'brown',
    hairColor: 'black'
  }

//Now, loop through your object and alert every value. *Tyler --> 24 --> 6'0 --> Male, etc etc

  // for (i in alsoMe) {
  //   alert(alsoMe[i]);
  // }




//NEXT PROBLEM




//Create an Object called 'album' with 5 keys named different song titles that you make up, with the values being the length of each song.

  var album = {
    song1: '3:45',
    song2: '2:20',
    song3: '1:59',
    song4: '5:20',
    song5: '4:20'
  }

//Now, loop through your album object alerting every song title individually.

  // for (i in album) {
  //   alert(i);
  // }




//NEXT PROBLEM




//Create an object called states that has 5 US states as properties with the values being their population (doesn't have to be accurate).

  var states = {
    utah: 192384,
    Iowa: 9872345,
    California: 20394857,
    Texas: 1209387,
    Oregon: 1928374
  }

//Now, loop through your states object and if the states population is greater than 30K, alert that state.

  // for (i in states) {
  //   if (states[i] > 30000) {
  //     alert(i);
  //   }
  // }




//NEXT PROBLEM




var user1 = {
    name: 'Tyler McGinnis',
    email: null,
    pwHash: 'U+Ldlngx2BYQk',
    birthday: undefined,
    username: 'tylermcginnis33',
    age: 0
}
/*Above you're given a user object. Loop through the user object checking to make sure
that each value is truthy. If it's not truthy, remove it from the object. */

  for (i in user1) {
    if (Boolean(user1[i]) === false) {
      delete user1[i];
    }
  }

//Once you get your truthy Object, Change the remaining values in the object to be specific to you (name: 'your name', username: 'your username'), rather than my information.

  //Code Here




//NEXT PROBLEM




var user2 = {
        name: 'Tyler McGinnis',
        age: 24,
        pwHash: 'U+Ldlngx2BYQk',
        email: 'tylermcginnis33@gmail.com',
        birthday: '05/02/1990',
        username: 'tylermcginnis33',
        sayEmail: function(){
            alert('Email is : ' + this.email);
        }
};
//Let's say I, the user, decided to change my name and email address to the following
// name -> 'Tyler S. McGinnis', email -> 'tyler.mcginnis@devmounta.in'. Make that change.

  user2.name = 'Tyler S. McGinnis';
  user2.email = 'tyler.mcginnis@devmounta.in';

//Now call the sayEmail method that's on the user object which will alert the users email

  // user2.sayEmail();




//NEXT PROBLEM




//Create an empty object called methodCollection.

  var methodCollection = {};

/*Now add two methods (functions that are properties on objects) to your methodCollection
object. One called 'alertHello' which alerts 'hello' and another method called logHello
 which logs 'hello' to the console. */

  methodCollection.alertHello = function(){alert('hello');};
  methodCollection.logHello = function(){console.log('hello')};

//Now call your alertHello and logHello methods.

  // methodCollection.alertHello();
  // methodCollection.logHello();



//NEXT PROBLEM



// Create a function called makePerson which takes in name, birthday, ssn as its
// parameters and returns a new object with all of the information that you passed in.

  function makePerson(name, bday, ssn) {
    var obj = {};
    obj.name = name;
    obj.birthday = bday;
    obj.ssn = ssn;
    return obj;
  }



//NEXT PROBLEM



// Create a function called makeCard which takes in cardNumber, expirationDate, and securityCode to make a Credit Card object and returns that object so that whenever you invoke makeCard, you get a brand new credit card.

  function makeCard(cn,ed,sc) {
    var cc = {};
    cc.cardNumber = cn;
    cc.expirationDate = ed;
    cc.securityCode = sc;
    return cc;
  }



//NEXT PROBLEM



/* As of this point you should have a makePerson and a makeCard function which returns you either a person or a credit card object.
   Now, create a bindCard function that takes in a person object as its first parameter and a creditcard object as its second parameter.
   Have bindCard merge the two parameters together into a new object which contains all the properties from the person as well as the creditcard. While Object.assign would give you the answer, specRunner requires an answer without using it.
*/

  function bindCard(person,creditcard) {
    for (var i in creditcard) {
      person[i] = creditcard[i];
    }
    return person;
  }
