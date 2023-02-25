//NUMBER1
function InstagramPost(handle, content,imageLink, numberOfViews, numberOfLikes){
this.handle = handle;
this.content = content;
this.imageLink = imageLink;
this.numberOfViews = numberOfViews;
this.numberOfLikes = numberOfLikes;
}

//Number 2
let DelishInsta = new InstagramPost ("Delish", "Cakes and Pastry", "https://Delish.jpg", "12.4K", "10K")
console.log(DelishInsta)

let SunglassInsta = new InstagramPost ("Sun & Shades", "Stylish Sunshades", "https://SunShades.jpg", "1M", "987K")
console.log(SunglassInsta)

//NUMBER 3
function createPerson(name, age, location){
    return {
    name: name,
    age: age,
    location: location,
    };
}
const musa = createPerson("Musa Dawodu", 19,"Lekki")
console.log(musa) 

function createJambScores(ENG, GOVT, LIT, CRK){
    return {
    ENG: ENG,
    GOVT: GOVT,
    LIT: LIT,
    CRK: CRK,
    };
}
const musaJamb = createJambScores(70, 85, 82, 94)
console.log(musaJamb)

//NUMBER 4
//Ways to clone an object are Object.assign() Method, Spread Method, JSON parse() 

//Object.assign()
const musa2 = Object.assign({}, musa)
console.log(musa2)

//Spread method
const musa3 = {...musa};
console.log(musa3);

//JSON.parse()
const musa4 = JSON.parse(JSON.stringify(musa));
console.log(musa4);

//NUMBER 5
const presidentialCandidates = {
    AAC: 'Omoyele Sowore',
    ACCORD: 'Christopher Imumolen',
    APC: 'Bola Ahmed Tinubu',
    LP: 'Peter Obi',
    NNPP: 'Rabiu Kwankwaso',
    PDP: 'Atiku Abubakar',
 }
 for (let key in presidentialCandidates){
    console.log(presidentialCandidates[key] + ' is the presidential candidate of ' + key )
 }
 
 