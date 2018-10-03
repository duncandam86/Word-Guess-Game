// define array of country where the user will guess
var randomCountryArr = ["afghanistan", "albania", "algeria", "andorra", "angola", "antigua-and-barbuda",
    "argentina", "armenia", "australia", "austria", "azerbaijan", "bahamas", "bahrain", "bangladesh", "barbados",
    "belarus", "belgium", "belize", "benin", "bhutan", "bolivia", "bosnia-and-herzegovina", "botswana", "brazil",
    "brunei", "bulgaria", "burkina-faso", "burundi", "cambodia", "cameroon", "canada",
    "cape-verde", "central-african-republic", "chad", "chile", "china", "colombia", "comoros", "congo",
    "democratic-republic-of-congo", "costa-rica", "croatia", "cuba", "cyprus", "czech-republic",
    "denmark", "djibouti", "dominica", "dominican-republic",
    "east-timor", "ecuador", "egypt", "el-salvador", "equatorial-guinea", "eritrea", "estonia", "ethiopia",
    "fiji", "finland", "france",
    "gabon", "gambia", "georgia", "germany", "ghana", "greece", "grenada", "guatemala", "guinea", "guinea-bissau",
    "guyana", "haiti", "honduras", "hungary", "iceland", "india", 'indonesia', 'iran', 'iraq',
    'ireland', 'israel', 'italy', 'ivory-coast', 'jamaica', 'japan', 'jordan',
    'kazakhstan', 'kenya', 'kiribati',
    'north-korea', 'south-korea',
    'kosovo', 'kuwait', 'kyrgyzstan',
    'laos', 'latvia', 'lebanon', 'lesotho', 'liberia', 'libya', 'liechtenstein', 'lithuania', 'luxembourg',
    'macedonia', 'madagascar', 'malawi', 'malaysia', 'maldives', 'mali', 'malta', 'marshall-islands',
    'mauritania', 'mauritius', 'mexico', 'micronesia', 'moldova', 'monaco', 'mongolia', 'montenegro',
    'morocco', 'mozambique', 'myanmar', 'namibia', 'nauru', 'nepal', 'netherlands', 'new-zealand', 'nicaragua',
    'niger', 'nigeria', 'norway', 'oman',
    'pakistan', 'palau', 'panama', 'papua-new-guinea', 'paraguay', 'peru', 'philippines', 'poland',
    'portugal', 'qatar', 'romania', 'russia', 'rwanda',
    'saint-kitts-and-nevis', 'saint-lucia', 'saint-vincent-and-the-grenadines', 'samoa',
    'san-marino', 'saotome-and-principe', 'saudi-arabia', 'senegal', 'serbia', 'seychelles',
    'sierra-leone', 'singapore', 'slovakia',
    'slovenia', 'solomon-islands', 'somalia', 'south-africa', 'south-sudan', 'spain', 'sri-lanka',
    'sudan', 'suriname', 'swaziland', 'sweden', 'switzerland', 'syria', 'taiwan', 'tajikistan',
    'tanzania', 'thailand', 'togo', 'tonga', 'trinidad-and-tobago', 'tunisia', 'turkey', 'turkmenistan',
    'tuvalu', 'uganda', 'ukraine', 'united-arab-emirates', 'united-kingdom', 'united-states',
    'uruguay', 'uzbekistan', 'vanuatu', 'vatican-city', 'venezuela', 'vietnam', 'yemen', 'zambia', 'zimbabwe'];

// randomly choose a country from the country array list 
var randomCountry = randomCountryArr[Math.floor(Math.random() * randomCountryArr.length)];

//create varibale count to count number of guesses
var count;

// empty array to store future guesses/letters
var answerCountryArr = [];
var wrongAnswerCountryArr = []

// fill the answer array with empty under scores
// number of underscore should equal the number of letter from random country word
function startUp() {
    for (var i = 0; i < randomCountry.length; i++) {
        answerCountryArr[i] = "_";
    }
    var country = answerCountryArr.join(" ");
    document.getElementById("answer").innerHTML = country;
    if (answerCountryArr.length >= 9) {
        count = 16;
    }
    else {
        count = 15
    };
    document.getElementById("counter").innerHTML = "Number of Guesses Remaining : " + count;
    document.getElementById("wrongletter").innerHTML = "Wrong letters: ";
    //box to prompt keyboard in smartphone
    var textbox = document.getElementById('my-input');
    textbox.select();
    console.log(textbox);
};

//function using onkeydown 
document.onkeydown = function (event) {
    //Get the letter that was presed on the key board
    letter = event.key;
    //prevent letter to be uppercase
    letter = letter.toLowerCase();
    //prevent number as input
    if (letter === "0" || letter==="1" || letter==="2" || letter==="3"
    || letter==="4" || letter==="5"|| letter==="6"|| letter==="7"
    || letter==="8"|| letter==="9"){
        return;
    }
    
    //prevent the same input to be input twice - using indexOf through both arrays that store letters
    if (answerCountryArr.indexOf(letter) > -1 || wrongAnswerCountryArr.indexOf(letter) > -1) {
        return;
        console.log(letter);
    }

    // checking if the letter matched
    //create a boolean variable so that it can be toggled
    var isletterInCountryName = false;

    // run a for loop 
    for (var i = 0; i < randomCountry.length; i++) {
        // check if the pressed letter was found in the name of the random country
        if (randomCountry[i] === letter) {
            // the value of boolean toggled
            isletterInCountryName = true;
        }
    }

    //if the letter exists
    if (isletterInCountryName) {
        //
        for (var j = 0; j < randomCountry.length; j++) {
            // if the randomCountry contains the letter that was typed in
            if (randomCountry[j] === letter) {
                //put the letter in the underscore
                answerCountryArr[j] = letter;
                console.log(answerCountryArr);
            }
        }
    }
    //if the letter doesn't
    else {
        wrongAnswerCountryArr.push(letter);
        count--;
        console.log(wrongAnswerCountryArr);
    }
    console.log("hahahaha");

    // Showing the answer in underscores
    document.getElementById("answer").innerHTML = answerCountryArr.join(" ");

    // Showing Number of guesses remaining 
    document.getElementById("counter").innerHTML = "Number of Guesses Remaining : " + count;

    // Showing the wrong letter
    document.getElementById("wrongletter").innerHTML = "Wrong letters: " + wrongAnswerCountryArr.join(" ");

    //showing "game over" because you ran out of guesses
    if (count === 0) {
        alert("GAME OVER!!!😭 ");
    };

    //Showing "winner" if the guess is correct
    var letterInRandomCountry = randomCountry.split("");
    if (letterInRandomCountry.toString() === answerCountryArr.toString()) {
        alert("🎊 CONGRATULATIONS! 🎉 YOU WON 👍 🤓 ");
    };
};
console.log("goddman");
