// define array of country where the user will guess
var randomCountryArr = ["afghanistan", "albania", "algeria", "andorra", "angola", "antigua and barbuda",
  "argentina", "armenia", "australia", "austria", "azerbaijan", "bahamas", "bahrain", "bangladesh", "barbados",
  "belarus", "belgium", "belize", "benin", "bhutan", "bolivia", "bosnia and herzegovina", "botswana", "brazil",
  "brunei", "bulgaria", "burkina faso", "burundi", "cambodia", "cameroon", "canada",
  "cape verde", "central african republic", "chad", "chile", "china", "colombia", "comoros", "congo",
  "democratic republic of congo", "costa rica", "croatia", "cuba", "cyprus", "czech republic",
  "denmark", "djibouti", "dominica", "dominican republic",
  "east timor", "ecuador", "egypt", "el salvador", "equatorial guinea", "eritrea", "estonia", "ethiopia",
  "fiji", "finland", "france",
  "gabon", "gambia", "georgia", "germany", "ghana", "greece", "grenada", "guatemala", "guinea", "guinea bissau",
  "guyana", "haiti", "honduras", "hungary", "iceland", "india", 'indonesia', 'iran', 'iraq',
  'ireland', 'israel', 'italy', 'ivory coast', 'jamaica', 'japan', 'jordan',
  'kazakhstan', 'kenya', 'kiribati',
  'north korea', 'south korea',
  'kosovo', 'kuwait', 'kyrgyzstan',
  'laos', 'latvia', 'lebanon', 'lesotho', 'liberia', 'libya', 'liechtenstein', 'lithuania', 'luxembourg',
  'macedonia', 'madagascar', 'malawi', 'malaysia', 'maldives', 'mali', 'malta', 'marshall islands',
  'mauritania', 'mauritius', 'mexico', 'micronesia', 'moldova', 'monaco', 'mongolia', 'montenegro',
  'morocco', 'mozambique', 'myanmar', 'namibia', 'nauru', 'nepal', 'netherlands', 'new zealand', 'nicaragua',
  'niger', 'nigeria', 'norway', 'oman',
  'pakistan', 'palau', 'panama', 'papua new guinea', 'paraguay', 'peru', 'philippines', 'poland',
  'portugal', 'qatar', 'romania', 'russia', 'rwanda',
  'st kitts and nevis', 'st lucia', 'st vincent and the grenadines', 'samoa',
  'san marino', 'sao tome and principe', 'saudi arabia', 'senegal', 'serbia', 'seychelles',
  'sierra leone', 'singapore', 'slovakia',
  'slovenia', 'solomon islands', 'somalia', 'south africa', 'south sudan', 'spain', 'sri lanka',
  'sudan', 'suriname', 'swaziland', 'sweden', 'switzerland', 'syria', 'taiwan', 'tajikistan',
  'tanzania', 'thailand', 'togo', 'tonga', 'trinidad and tobago', 'tunisia', 'turkey', 'turkmenistan',
  'tuvalu', 'uganda', 'ukraine', 'united arab emirates', 'united kingdom', 'united states',
  'uruguay', 'uzbekistan', 'vanuatu', 'vatican city', 'venezuela', 'vietnam', 'yemen', 'zambia', 'zimbabwe'];

// randomly choose a country from the country array list 
var randomCountry = randomCountryArr[Math.floor(Math.random() * randomCountryArr.length)];

//create varibale count to count number of guesses
var count = 12;

// empty array to store future guesses
var answerCountryArr = [];

// fill the answer array with empty under scores
// number of underscore should equal the number of letter from random country word
function startUp() {
  for (var i = 0; i < randomCountry.length; i++) {
    answerCountryArr[i] = "_";
  }
  var country = answerCountryArr.join(" ");
  document.getElementById("answer").innerHTML = country;
};

console.log("oi gioi oi")

//function using onkeyup 
document.onkeyup = function (event) {
  //Get the letter that was presed on the key board
  var letter = event.key;
  // Make sure that a guess is made
  if (letter.length > 0) {
    //
    for (var i = 0; i < randomCountry.length; i++) {
      // if the randomCountry contains the letter that was typed in
      if (randomCountry[i] === letter) {
        //put the letter in the underscore
        answerCountryArr[i] = letter;
      }
    }
  };
  // counting the number of guesses
  count--;
  document.getElementById("counter").innerHTML = "No of Guesses Remaining : " + count;
  document.getElementById("answer").innerHTML = answerCountryArr.join(" ");
  if (count < 1) {
    document.write ("Game Over");
  };
};

console.log("goddman");