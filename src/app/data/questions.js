const questions = [
  {
    id: 1,
    question: "My sister ___ to music while she ___ her homework.",
    options: ["listens / does", "is listening / does", "listens / is doing", "is listening / is doing"],
    correctAnswer: 3 // is listening / is doing (Present Continuous)
  },
  {
    id: 2,
    question: "I ___ my homework every evening.",
    options: ["do", "am doing", "does", "doing"],
    correctAnswer: 0 // do (Present Simple)
  },
  {
    id: 3,
    question: "Look! The cat ___ up the tree.",
    options: ["climbs", "is climbing", "climbed", "has climbed"],
    correctAnswer: 1 // is climbing (Present Continuous)
  },
  {
    id: 4,
    question: "She ___ in Paris for three years before moving to London.",
    options: ["lived", "was living", "had lived", "has lived"],
    correctAnswer: 2 // had lived (Past Perfect)
  },
  {
    id: 5,
    question: "By the time we get home, the movie ___ .",
    options: ["will start", "will have started", "starts", "is starting"],
    correctAnswer: 1 // will have started (Future Perfect)
  },
  {
    id: 6,
    question: "They ___ tennis when it started raining.",
    options: ["play", "played", "were playing", "have played"],
    correctAnswer: 2 // were playing (Past Continuous)
  },
  {
    id: 7,
    question: "I ___ this book three times already.",
    options: ["read", "have read", "am reading", "was reading"],
    correctAnswer: 1 // have read (Present Perfect)
  },
  {
    id: 8,
    question: "Water ___ at 100 degrees Celsius.",
    options: ["boils", "is boiling", "boiled", "has boiled"],
    correctAnswer: 0 // boils (Present Simple - general truth)
  },
  {
    id: 9,
    question: "She ___ for the company since 2010.",
    options: ["works", "is working", "has been working", "worked"],
    correctAnswer: 2 // has been working (Present Perfect Continuous)
  },
  {
    id: 10,
    question: "When I arrived, they ___ dinner.",
    options: ["eat", "ate", "were eating", "have eaten"],
    correctAnswer: 2 // were eating (Past Continuous)
  },
  {
    id: 11,
    question: "I ___ him tomorrow at 5 PM.",
    options: ["will meet", "am meeting", "meet", "will be meeting"],
    correctAnswer: 1 // am meeting (Present Continuous for future arrangement)
  },
  {
    id: 12,
    question: "This time next week, we ___ in Thailand.",
    options: ["will travel", "will be traveling", "travel", "are traveling"],
    correctAnswer: 1 // will be traveling (Future Continuous)
  },
  {
    id: 13,
    question: "He ___ five novels so far this year.",
    options: ["wrote", "has written", "writes", "is writing"],
    correctAnswer: 1 // has written (Present Perfect)
  },
  {
    id: 14,
    question: "We ___ for over 8 hours when we finally arrived.",
    options: ["drove", "were driving", "had been driving", "have been driving"],
    correctAnswer: 2 // had been driving (Past Perfect Continuous)
  },
  {
    id: 15,
    question: "They ___ in that house since they got married.",
    options: ["live", "are living", "have lived", "lived"],
    correctAnswer: 2 // have lived (Present Perfect)
  },
  {
    id: 16,
    question: "Don't disturb him! He ___ .",
    options: ["sleeps", "is sleeping", "slept", "has slept"],
    correctAnswer: 1 // is sleeping (Present Continuous)
  },
  {
    id: 17,
    question: "I ___ my wallet yesterday.",
    options: ["lose", "lost", "have lost", "was losing"],
    correctAnswer: 1 // lost (Past Simple)
  },
  {
    id: 18,
    question: "She ___ TV when the power went out.",
    options: ["watches", "watched", "was watching", "has watched"],
    correctAnswer: 2 // was watching (Past Continuous)
  },
  {
    id: 19,
    question: "By 2027, I ___ English for 12 years.",
    options: ["will study", "will be studying", "will have been studying", "study"],
    correctAnswer: 2 // will have been studying (Future Perfect Continuous)
  },
  {
    id: 20,
    question: "He ___ already ___ lunch when I called.",
    options: ["has / eaten", "had / eaten", "was / eating", "ate"],
    correctAnswer: 1 // had / eaten (Past Perfect)
  },
  {
    id: 21,
    question: "Which tense describes actions happening at the moment of speaking?",
    options: ["Present Simple", "Present Continuous", "Present Perfect", "Past Simple"],
    correctAnswer: 1
  },
  {
    id: 22,
    question: "We usually ___ coffee in the morning.",
    options: ["drink", "are drinking", "drank", "have drunk"],
    correctAnswer: 0
  },
  {
    id: 23,
    question: "I ___ that movie twice already.",
    options: ["saw", "have seen", "am seeing", "was seeing"],
    correctAnswer: 1
  },
  {
    id: 24,
    question: "They ___ in Italy for three weeks next month.",
    options: ["will stay", "will be staying", "are staying", "stay"],
    correctAnswer: 1
  },
  {
    id: 25,
    question: "When I was a teenager, I ___ video games every day.",
    options: ["play", "played", "was playing", "have played"],
    correctAnswer: 1
  },
  {
    id: 26,
    question: "She ___ for this company since 2018.",
    options: ["works", "is working", "has been working", "worked"],
    correctAnswer: 2
  },
  {
    id: 27,
    question: "Don't call me at 7 PM. I ___ dinner.",
    options: ["will eat", "will be eating", "eat", "am eating"],
    correctAnswer: 1
  },
  {
    id: 28,
    question: "He ___ the guitar when his friends arrived.",
    options: ["played", "was playing", "has played", "had played"],
    correctAnswer: 1
  },
  {
    id: 29,
    question: "By the end of this year, we ___ together for 15 years.",
    options: ["will work", "will be working", "will have been working", "are working"],
    correctAnswer: 2
  },
  {
    id: 30,
    question: "I ___ never ___ Chinese food before visiting Beijing.",
    options: ["have / eaten", "had / eaten", "was / eating", "ate"],
    correctAnswer: 1
  },
  {
    id: 31,
    question: "Which tense shows an action completed before another past action?",
    options: ["Past Simple", "Past Continuous", "Past Perfect", "Present Perfect"],
    correctAnswer: 2
  },
  {
    id: 32,
    question: "At 10 PM last night, I ___ my report.",
    options: ["finish", "finished", "was finishing", "have finished"],
    correctAnswer: 2
  },
  {
    id: 33,
    question: "We ___ to the party tomorrow evening.",
    options: ["go", "are going", "will go", "went"],
    correctAnswer: 1
  },
  {
    id: 34,
    question: "She ___ two marathons by the age of 25.",
    options: ["ran", "has run", "had run", "was running"],
    correctAnswer: 2
  },
  {
    id: 35,
    question: "They ___ in the garden all afternoon yesterday.",
    options: ["work", "worked", "were working", "have worked"],
    correctAnswer: 2
  },
  {
    id: 36,
    question: "By the time he graduates, he ___ for the university for 5 years.",
    options: ["will study", "will be studying", "will have been studying", "studies"],
    correctAnswer: 2
  },
  {
    id: 37,
    question: "I ___ my phone. Have you seen it?",
    options: ["lost", "have lost", "was losing", "lose"],
    correctAnswer: 1
  },
  {
    id: 38,
    question: "The bus ___ at 8 AM every morning.",
    options: ["leaves", "is leaving", "left", "has left"],
    correctAnswer: 0
  },
  {
    id: 39,
    question: "When I woke up, it ___ heavily outside.",
    options: ["rains", "rained", "was raining", "has rained"],
    correctAnswer: 2
  },
  {
    id: 40,
    question: "This is the most delicious cake I ___ ever ___ .",
    options: ["have / tasted", "had / tasted", "tasted", "taste"],
    correctAnswer: 0
  },
  {
    id: 41,
    question: "She ___ Spanish before she moved to Spain.",
    options: ["never studied", "had never studied", "was never studying", "has never studied"],
    correctAnswer: 1
  },
  {
    id: 42,
    question: "We ___ here for over three hours waiting for the train!",
    options: ["wait", "waited", "are waiting", "have been waiting"],
    correctAnswer: 3
  },
  {
    id: 43,
    question: "I ___ my cousin next Saturday after 3 years!",
    options: ["will see", "am seeing", "see", "will be seeing"],
    correctAnswer: 1
  },
  {
    id: 44,
    question: "They ___ the room when the earthquake happened.",
    options: ["clean", "cleaned", "were cleaning", "have cleaned"],
    correctAnswer: 2
  },
  {
    id: 45,
    question: "By 2035, scientists ___ a solution for climate change.",
    options: ["will find", "will have found", "are finding", "find"],
    correctAnswer: 1
  },
  {
    id: 46,
    question: "He ___ tired because he ___ all day.",
    options: ["is / worked", "was / had worked", "is / has worked", "was / worked"],
    correctAnswer: 2
  },
  {
    id: 47,
    question: "I ___ my assignment yet.",
    options: ["didn't finish", "haven't finished", "wasn't finishing", "don't finish"],
    correctAnswer: 1
  },
  {
    id: 48,
    question: "The Earth ___ around the Sun.",
    options: ["goes", "is going", "went", "has gone"],
    correctAnswer: 0
  },
  {
    id: 49,
    question: "While I ___ dinner, the doorbell rang.",
    options: ["had", "was having", "have had", "had had"],
    correctAnswer: 1
  },
  {
    id: 50,
    question: "By the time we arrive, the concert ___ .",
    options: ["will start", "will have started", "starts", "is starting"],
    correctAnswer: 1
  },
  {
    id: 51,
    question: "How long ___ married?",
    options: ["are you", "were you", "have you been", "did you be"],
    correctAnswer: 2
  },
  {
    id: 52,
    question: "She ___ when I called her last night.",
    options: ["sleeps", "slept", "was sleeping", "has slept"],
    correctAnswer: 2
  },
  {
    id: 53,
    question: "I ___ to the cinema twice a month.",
    options: ["go", "am going", "went", "have gone"],
    correctAnswer: 0
  },
  {
    id: 54,
    question: "They ___ married for 30 years next June.",
    options: ["will be", "are", "will have been", "have been"],
    correctAnswer: 2
  },
  {
    id: 55,
    question: "When I arrived, he ___ already ___ .",
    options: ["has / gone", "had / gone", "was / going", "went"],
    correctAnswer: 1
  },
  {
    id: 56,
    question: "I can't talk now. I ___ lunch.",
    options: ["cook", "am cooking", "cooked", "have cooked"],
    correctAnswer: 1
  },
  {
    id: 57,
    question: "He ___ in New York when he was a student.",
    options: ["lives", "lived", "has lived", "was living"],
    correctAnswer: 1
  },
  {
    id: 58,
    question: "By this time tomorrow, I ___ my presentation.",
    options: ["will finish", "will have finished", "finish", "am finishing"],
    correctAnswer: 1
  },
  {
    id: 59,
    question: "She ___ for 10 hours straight when she finally rested.",
    options: ["studies", "studied", "was studying", "had been studying"],
    correctAnswer: 3
  },
  {
    id: 60,
    question: "We ___ this TV show all season!",
    options: ["watch", "are watching", "have been watching", "watched"],
    correctAnswer: 2
  },
  {
    id: 61,
    question: "Next year, I ___ in this school for 8 years.",
    options: ["will study", "will be studying", "will have studied", "study"],
    correctAnswer: 2
  },
  {
    id: 62,
    question: "He ___ just ___ his final exam!",
    options: ["has / passed", "passed", "had / passed", "passes"],
    correctAnswer: 0
  },
  {
    id: 63,
    question: "When we entered, they ___ a meeting.",
    options: ["have", "had", "were having", "have had"],
    correctAnswer: 2
  },
  {
    id: 64,
    question: "I ___ my umbrella somewhere last week.",
    options: ["leave", "left", "was leaving", "have left"],
    correctAnswer: 1
  },
  {
    id: 65,
    question: "At 9 PM tonight, I ___ probably ___ my favorite show.",
    options: ["will / watch", "will be / watching", "watch", "am watching"],
    correctAnswer: 1
  },
  {
    id: 66,
    question: "She ___ never ___ to Europe before last summer.",
    options: ["has / gone", "had / gone", "went", "goes"],
    correctAnswer: 1
  },
  {
    id: 67,
    question: "They ___ the project by next Monday.",
    options: ["will finish", "will have finished", "finish", "are finishing"],
    correctAnswer: 1
  },
  {
    id: 68,
    question: "I ___ the newspaper when the phone rang.",
    options: ["read", "was reading", "have read", "had read"],
    correctAnswer: 1
  },
  {
    id: 69,
    question: "We ___ best friends since primary school.",
    options: ["are", "were", "have been", "had been"],
    correctAnswer: 2
  },
  {
    id: 70,
    question: "By 2055, people ___ on the Moon regularly.",
    options: ["will live", "will be living", "will have been living", "live"],
    correctAnswer: 0
  },
  {
    id: 71,
    question: "Which tense is used for actions that started in the past and continue to the present?",
    options: ["Present Perfect", "Present Perfect Continuous", "Past Perfect", "Future Perfect"],
    correctAnswer: 1
  },
  {
    id: 72,
    question: "He ___ smoking two years ago.",
    options: ["quits", "quit", "has quit", "had quit"],
    correctAnswer: 1
  },
  {
    id: 73,
    question: "I ___ in this city all my life.",
    options: ["live", "am living", "have lived", "lived"],
    correctAnswer: 2
  },
  {
    id: 74,
    question: "While you were on vacation, I ___ your dog.",
    options: ["walk", "walked", "was walking", "have walked"],
    correctAnswer: 1
  },
  {
    id: 75,
    question: "They ___ the new restaurant by next month.",
    options: ["will open", "will be opening", "will have opened", "open"],
    correctAnswer: 2
  },
  {
    id: 76,
    question: "She ___ for 14 hours straight when she finally slept.",
    options: ["works", "worked", "was working", "had been working"],
    correctAnswer: 3
  },
  {
    id: 77,
    question: "My flight ___ at 7 AM tomorrow.",
    options: ["leaves", "is leaving", "will leave", "left"],
    correctAnswer: 0
  },
  {
    id: 78,
    question: "I ___ him since we were in college.",
    options: ["know", "knew", "have known", "had known"],
    correctAnswer: 2
  },
  {
    id: 79,
    question: "When I got home, dinner ___ already ___ .",
    options: ["was / cooked", "had been / cooked", "has been / cooked", "is / cooked"],
    correctAnswer: 1
  },
  {
    id: 80,
    question: "The children ___ in the park all afternoon.",
    options: ["play", "played", "were playing", "have been playing"],
    correctAnswer: 3
  },
  {
    id: 81,
    question: "By the time the party starts, I ___ the cake.",
    options: ["will bake", "will have baked", "bake", "am baking"],
    correctAnswer: 1
  },
  {
    id: 82,
    question: "He ___ never ___ Indian food before yesterday.",
    options: ["has / tried", "had / tried", "tried", "tries"],
    correctAnswer: 1
  },
  {
    id: 83,
    question: "I ___ my emails while she was talking on the phone.",
    options: ["check", "checked", "was checking", "have checked"],
    correctAnswer: 2
  },
  {
    id: 84,
    question: "Tomorrow at this time, we ___ in the mountains.",
    options: ["will hike", "will be hiking", "hike", "are hiking"],
    correctAnswer: 1
  },
  {
    id: 85,
    question: "She ___ four languages fluently.",
    options: ["speaks", "is speaking", "spoke", "has spoken"],
    correctAnswer: 0
  },
  {
    id: 86,
    question: "They ___ in that office for 6 years before moving.",
    options: ["worked", "were working", "had worked", "have worked"],
    correctAnswer: 2
  },
  {
    id: 87,
    question: "I ___ you as soon as I get the results.",
    options: ["tell", "will tell", "am telling", "told"],
    correctAnswer: 1
  },
  {
    id: 88,
    question: "When I was younger, I ___ basketball every weekend.",
    options: ["play", "played", "was playing", "have played"],
    correctAnswer: 1
  },
  {
    id: 89,
    question: "By next summer, I ___ my master's degree.",
    options: ["will complete", "will have completed", "complete", "am completing"],
    correctAnswer: 1
  },
  {
    id: 90,
    question: "He ___ for the train when it started snowing.",
    options: ["waits", "waited", "was waiting", "has waited"],
    correctAnswer: 2
  },
  {
    id: 91,
    question: "I ___ this novel since last week.",
    options: ["read", "am reading", "have been reading", "was reading"],
    correctAnswer: 2
  },
  {
    id: 92,
    question: "The play ___ at 8 PM tonight.",
    options: ["starts", "is starting", "will start", "started"],
    correctAnswer: 0
  },
  {
    id: 93,
    question: "She ___ already ___ four books this month.",
    options: ["has / read", "read", "had / read", "is reading"],
    correctAnswer: 0
  },
  {
    id: 94,
    question: "While I ___ the laundry, I found your wallet.",
    options: ["do", "did", "was doing", "have done"],
    correctAnswer: 2
  },
  {
    id: 95,
    question: "By 2045, humans ___ cities on Mars.",
    options: ["will build", "will have built", "build", "are building"],
    correctAnswer: 1
  },
  {
    id: 96,
    question: "We ___ colleagues for over 10 years.",
    options: ["are", "were", "have been", "had been"],
    correctAnswer: 2
  },
  {
    id: 97,
    question: "I ___ my glasses. Can you help me find them?",
    options: ["lost", "have lost", "was losing", "lose"],
    correctAnswer: 1
  },
  {
    id: 98,
    question: "He ___ in Tokyo when the earthquake happened.",
    options: ["lives", "lived", "was living", "has lived"],
    correctAnswer: 2
  },
  {
    id: 99,
    question: "Next year, she ___ here for 15 years.",
    options: ["will work", "will be working", "will have been working", "works"],
    correctAnswer: 2
  },
  {
    id: 100,
    question: "I ___ never ___ such an amazing performance before.",
    options: ["have / seen", "had / seen", "saw", "see"],
    correctAnswer: 1
  }
];

export default questions;