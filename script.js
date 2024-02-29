// Define an array of predetermined colors and corresponding text options
var colorData = [
    { background: "#556b2fff", text: "#fffdd0" },
    { background: "#e2725bff", text: "#e6d6b8" },
    { background: "#d55f00ff", text: "#483c32" },
    { background: "#362819ff", text: "#fffff0" },
    { background: "#7b3f00ff", text: "#fff5e1" },
    { background: "#945b14", text: "#decca6" },
];

// Define an array of predetermined texts
var texts = [
    "Tomorrow will be better.\n\n\"What if it's not?\"\n\nThen tomorrow you say it again. \n\nBecause at some point tomorrow will be better.",
    "There is a crack,\na crack in everything.\n\nThat's how the light gets in.",
    "Walking home, for a moment you almost believe you could start again. And an intense love rushes into your heart, and hope. It's unendurable, unendurable.\n\n<span id=\"small\"><b>Franz Wright</b>, from <i>God's Silence; \"East Boston, 1996\"</i></span>",
    "Please keep going,\nyou might be almost there and not even know it.",
    "What is lonelier, to grieve or not love anyone enough to?\n\n<span id=\"small\"><b>Alexis Bates</b></span>",
    "<span>and at some point I thought to myself: <i>no person deserves this</i>, and I realized that includes even me.</span>",
    "And the earth looked at me and said \"Wasn't that fun?\" And I replied \"I'm sorry if I hurt anyone.\"\n\n<span id=\"small\"><i>When I Was Done Dying</i>, by <b>Dan Deacon</b></span>",
    "Happiness is the only thing we can give without having.",
    "It can still be a special memory, even if you made it with the wrong person.",
    "In the dark times, will there also be singing?\nYes, there will be singing.\nAbout the dark times.",
    "I am learning to love the sound of my feet walking away from things that aren't meant for me.",
    "Oh you haven't heard?\nIt's all gonna be okay.",
    "\"You owe no one anything\" is not a philosophy of love, nor is it sustainable.\n\nWe owe each other a lot.",
    "I hope the sun always rests gently on your shoulder.",
    "\"and if I asked you to name all the things that you love,\nhow long would it take for you to name yourself?\"",
    "<i>it gets better</i><i>it gets better</i><i>it gets better</i><i>it gets better</i>",
    "<span id=\"small\">What is something that is always true?</span>\n\n<i>Love is at the center of it all. Love is the point.</i>",
    "If hatred knocks at your door,\nGreet it with a smile,\nBut tell it it has come too late,\nFor love is already having tea inside.\n\n<span id=\"small\"><b>Nasim Asgari</b></span>",
    "Not everyone will understand.\nThat's okay.",
    "Don't lower your expectations so people can fit in your life. I don't care if you're lonely on that mountain. It's your mountain. Honor that.",
    "I think you should tell people how important they are to you not because they could leave at any moment,\nBut because they're here now,\nAnd it's worth saying.",
    "Love, he told me. Love everything from the grass to the first person who walks by in the street. Love it all. That's the only thing that can make life not just bearable but beautiful.\n\n<span id=\"small\"><b>Wendy Cope</b>, from <i>The Orange</i></span>",
    "I am learning to enjoy the journey,\nnot just the destination.",
    "But then it passed, as all things do.",
    "You are so used to your features-\nYou don't know how beautiful you look to a stranger.",
    "I was there.\nNow I'm here.",
    "All your life you're yellow. Then one day you brush up against something blue, the barest touch, and voila, the rest of your life you're green.\n\n<span id=\"small\"><b>Tess Callahan</b></span>",
    "Where there is grief\n<i>There was love.</i>",
    "I hope you heal from things you don't talk about.",
    "The point of life is learning to let go of it.",
    "I can bear any pain as long as it has meaning.",
    "It is a mark of maturity when someone hurts you, and you try to understand them.",
    "The time will pass anyways.",
    "And now that you don't have to be perfect, you can be good.",
    "I want to infect you with the tremendous excitement of living, because I believe that you have the strength to bear it.\n\n<span id=\"small\"><b>Tennessee Williams</b>, from <i>The Selected Letters: 1920-1945</i></span>",
    "I don't regret having been with you\nBut it ended and I don't regret that either",
    "<span>Do things <i>from</i> love, not for love.</span>",
    "To have gotten this far is a gift.",
    "I smiled.\nIt was time.\n To move\nOn.",
    "Tomorrow will be better and if not I'll say it again.",
    "People can only understand us at the depths in which they have met themselves.\n\n<span id=\"small\"><b>Artidote</b></span>",
    "You have never been in this exact moment before so there's no need to pretend that you know exactly what to do.",
    "You wouldn't believe the kind of person I could become if you wanted it.\n\n<span id=\"small\"><b>Franz Kafka</b>, from <i>Letters to Felice</i></span>",
    "Every once in a while you get a glimpse of the person you could be. Grab that. Hold on to that. Work for it. Nothing is out of reach.",
    "No love however brief is wasted.",
    "What I love will always stay with me\nI am more free than I realize.",
    "I am not selfish for wanting to be loved kindly.",
    "It wasn't easy, you know\nClimbing all the way up here\nBut boy do I see far!",
    "Do it or don't!\nThe time will pass anyway.",
    "You'll bear it. You'll last out. You will.\n\n<span id=\"small\"><b>Olga Bergholz</b>, from <i>Lies, Rust, Sadness; \"Conversation with a Neighbor\"</i></span>",
    "<span id=\"small\">I know.</span>\nIt's for the better."
];

// Function to choose a random item from an array
function chooseRandomItem(array) {
    var randomIndex = Math.floor(Math.random() * array.length);
    return array[randomIndex];
}

// Function to set the background color and text of the webpage
function setRandomStyles() {
    // Choose a random color data
    var randomColorData = chooseRandomItem(colorData);

    // Set background color
    document.body.style.backgroundColor = randomColorData.background;

    // Set text color
    document.getElementById('text-container').style.color = randomColorData.text;

    // Choose a random text
    var randomText = chooseRandomItem(texts);

    // Set the text content
    document.getElementById('text-container').innerHTML = randomText;

    setTimeout(fadeToBlack, 30000);
}

function fadeToBlack() {
    document.body.style.transition = "background-color 2s";
    document.body.style.backgroundColor = "#000000";
    document.getElementById('text-container').style.transition = "color 4s";
    document.getElementById('text-container').style.color = "#000000";
    document.getElementById('text-container').style.transition = "color 2s";

    setTimeout(setRandomStyles, 4000);
}

// Event listener to call the function when the webpage loads
window.addEventListener('load', setRandomStyles);
