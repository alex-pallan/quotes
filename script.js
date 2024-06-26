var timeouts = [];

// Define an array of predetermined colors and corresponding text options
var colorData = [
    { background: "#556b2fff", text: "#fffdd0" },
    { background: "#e2725bff", text: "#e6d6b8" },
    { background: "#d55f00ff", text: "#483c32" },
    { background: "#362819ff", text: "#fffff0" },
    { background: "#7b3f00ff", text: "#fff5e1" },
    { background: "#945b14", text: "#decca6" },
    { background: "#000435", text: "#e5e5ff" },
    { background: "#003b49", text: "#ffffff" },
    { background: "#000435", text: "#e5e5ff" },
    { background: "#003b49", text: "#d6d2c4" },
    { background: "#4a148c", text: "#e8d4ff" },
    { background: "#5b0f00ff", text: "#ffdfdf" },
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
    "<span id=\"small\">I know.</span>\nIt's for the better.",
    "And it's inside myself that I must create someone who will understand.\n\n<span id=\"small\"><b>Clarice Lispector</b></span>",
    "We grow. It hurts at first.\n\n<span id=\"small\"><b>Sylvia Plath</b>, from The Collected Poems; \"<i>Witch Burning,</i>\" c. October 1961</span>",
    "I know better now how to handle loss, accept doubt, live with the unknown. I learned to wait for spring.\n<b>Spring came.</b>",
    "My suffering did not make me anything.\n\nI suffered\nand then I made myself gentle and kind, I made myself strong, and I made myself good.",
    "You can easily return to the past, but no one is there anymore.",
    "Should I be grateful or should I curse the fact that despite all misfortune I can still feel love.\n\n<span id=\"small\"><b>Franz Kafka</b>, from <i>Diaries, 1910-1923</i></span>",
    "I guess I'm trying to say, grab anything that goes by. It may not come around again.\n\n<span id=\"small\"><b>John Steinbeck</b></span>",
    "I can't afford to hate anyone, I don't have that kind of time.\n\n<span id=\"small\">Akira Kurosawa</span>",
    "this time\n\ni should be true to myself",
    "I still fondly cherish the beautiful memories we share, those are part of me and my life, I don't regret them.",
    "I want to look back and say that I was alive. That I didn't turn my back. That I tried. That I was happy.\n\n<span id=\"small\"><b>Evelyn Waugh</b>, from <i>Brideshead Revisited</i></span>",
    "...and that's a good lesson to learn in life.\n\nLet go.",
    "Let's pay attention to where we are.\nThere's enough beauty in being here and not somewhere else.",
    "Some things are more precious because they don't last long.\n\n<span id=\"small\"><b>Oscar Wilde</b>, from <i>The Picture of Dorian Gray</i></span>",
    "I love when I realize that I'm handling a situation better than my old self would have.",
    "Anyone who takes the time to be kind is beautiful.\n\n<span id=\"small\"><b>Richelle E. Goodrich</b></span>",
    "There is no minimum amount of suffering before you are allowed to alleviate it.",
    "I hope you find everything you've been searching for.",
    "When trauma is transformed into art, there will always be a paradox at play: The art's existence is beautiful. But it shouldn't have to exist at all.\n\n<span id=\"small\"><b>Megan Garber</b>, The Atlantic</span>",
    "-but we cannot sit and stare\nat our wounds forever.",
    "Remember the time you thought you never could survive?\n\n<b>You did, and you can do it again.</b>",
    "It is safe for me to change my plans and rest instead.",
    "Growth will also feel like loss.\nRemember that.",
    "The path to getting better is not linear. Two steps forward and one step back is still progress.",
    "One day you will wake up\nand not feel these heavy feelings in your heart.\nThey will dissolve in the rain.",
    "I'm proud of you for always trying",
    "Everything has changed and yet, I am more me than I've ever been.",
    "The most beautiful part of your body is where it's headed.\n\n<span id=\"small\"><b>Ocean Vuong</b>, from <i>Someday I'll love Ocean Vuong</i></span>",
    "Loneliness is still time spent with the world.\n\n<span id=\"small\"><b>Ocean Vuong</b>, from <i>Someday I'll love Ocean Vuong</i></span>",
    "Life is so subtle sometimes that you barely notice yourself walking through the doors you once prayed would open.",
    "Today is a great day to be proud of all the progress you've made.",
    "\"In the end, only three things matter:\nhow much you loved,\nhow gently you lived,\nand how gracefully you let go of things not meant for you.\"",
    "I promise you, little by little, the healing adds up.\n\n<span id=\"small\"><b>Ella Hicks</b></span>",
    "If you have a warm soul, you will always be a home for love.\n\n<span id=\"small\"><b>Juansen Dizon</b></span>",
    "I'm excited to see where this is all going",
    "In order to love what you are, you cannot hate the experiences that shaped you.",
    "<i>You will never have to force what is meant for you</i>",
    "The key to handling this journey, is to always be grateful and present.",
    "Be proud of how hard you're trying",
    "How wonderful it is for me to be alive please forgive me for forgetting.",
    "It's the small things that will heal you.",
    "It has gotten better before\n<i>and it will again</i>.",
    "Every now and then I do something little me would've loved.",
    "The little progress you have made today still matters.",
    "Sometimes we're just misunderstood.",
    "And sometimes, against all odds, against all logic, we hope.",
    "please be gentile with yourself",
    "One day you'll sit in the sun and things won't feel so bad",
    "The sun will rise and we will try again.",
    "The pain you've been feeling\ncan't compare to the joy that's coming",
    "You're gonna figure it all out,\nand it's going to be so worth it despite all.\n\n<span id=\"small\"><b>Leo</b></span>",
    "Everyone is worth loving.\nThat includes you.",
    "Even if you mess up super badly, the doggies on the street will still tug on their owners when you walk by because they wanna say hello so badly.",
    "The world is cruel;\ntherefore I won't be.",
    "Forgive yourself for not knowing what you didn't know before you learned it.\n\n<span id=\"small\"><b>Maya Angelou</b></span>",
    "anyway. onto better things",
    "\"Do I deserve this?\"\n\"Am I worthy of love?\"\nSo irrelevant. Do you want it?",
    "Thanks for everything.\nI had a wonderful time.",
    "Since my house burned down I now own a better view of the rising moon.",
    "If we're not supposed to dance, why all this music?",
    "You're not here to entertain anybody.",
    "It's okay if you're not who you thought you would be.",
    "It's going to be okay.\nBut it's going to be different.",
    "Nothing about you is a mistake.",
    "The sun will always rise again.",
    "i was worthy of love\ni am worthy of love\ni will always be worthy of love",
    "I'm human.\nYes, I feel sadness and grief.\nBut oh how I feel love and joy.",
    "The sky holds us softly.\nMay I always look at it with love.",
    "If the universe didn't need you,\nyou wouldn't be here.",
    "I will never regret being kind.",
    "Today I will carry <i>hope</i> with a little more <i>care</i> than I did yesterday.",
    "I deserve good things and you do too.",
    "I wish solitude for everyone who knows chaos.",
    "Thank yourself for how far you've come. It hasn't been easy.",
    "Somewhere someone is searching for you in every person they meet.",
    "Be so completely yourself that everyone else feels safe to be themselves too.",
    "There are so many people who are waiting to love you.\nKeep going.",
    "I think we deserve a soft epilogue, my love.\nWe are good people and we've suffered enough.\n\n<span id=\"small\"><b>Nikka Ursula</b>, from <i>Seventy Years of Sleep</i></span>",
    "I want to leave people better than I found them.",
    "Sometimes losing people\nhelps you find yourself.",
    "Sometimes you don't get what you want because you deserve better.",
    "I want to become all of the love I didn't recieve.",
    "it is a serious thing\njust to be alive\non this fresh morning\nin this broken world.",
    "and the universe said I love you because you are love.",
    "I've decided to live the life I want to live,\n<span id=\"small\">countless small steps will get me there.</span>",
    "<i>i'm wishing you a safe return back to yourself</i>",
    "Thank you universe for always looking out for me and making sure things work out in my favor.",
    "Maybe my purpose in life is to have a nice day"
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
    timeouts.push(setTimeout(function() {
        fadeToBlack(4000);
    }, 30000));    
}

function fadeToBlack(time) {
    setBodyTransitionTime(time / 2);
    document.body.style.backgroundColor = "#000000";
    setTextTransitionTime(time);
    document.getElementById('text-container').style.color = "#000000";

    timeouts.push(setTimeout(function() {
        setTextTransitionTime(time / 2);
    }, time));  
    timeouts.push(setTimeout(setRandomStyles, time));
}

function setBodyTransitionTime(millis) {
    document.body.style.transition = "background-color " + (millis / 1000) + "s";
}

function setTextTransitionTime(millis) {
    document.getElementById('text-container').style.transition = "color " + (millis / 1000) + "s";
}

document.addEventListener('click', function() {
    for (var i = 0; i < timeouts.length; i++) {
        clearTimeout(timeouts[i]);
    }
    //quick reset of the timer array you just cleared
    timeouts = [];

    fadeToBlack(1000);
});

// Event listener to call the function when the webpage loads
window.addEventListener('load', startPage);

function startPage() {
    setRandomStyles();
    setTimeout(donationButtonFadeIn, 60000);
    resizeBrowserTo75PercentZoom();
}

function donationButtonFadeIn() {
    document.getElementById('donation-button-div').style.opacity = 0.5;
    setTimeout(donationButtonFadeOut, 15000);
}

function donationButtonFadeOut() {
    document.getElementById('donation-button-div').style.opacity = 0;
    setTimeout(removeDonationDiv, 1000);
}

function removeDonationDiv() {
    document.getElementById('donation-button-div').remove();
}

// Check if the device is a smartphone
function isSmartphone() {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
}

// Resize the browser window to 75% zoom
function resizeBrowserTo75PercentZoom() {
    if (isSmartphone()) {
        document.body.style.zoom = "75%";
    }
}
