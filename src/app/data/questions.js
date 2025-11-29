const questions = [
  {
    id: 1,
    question: "Which tense is used to talk about habits and general truths?",
    options: ["Present Continuous", "Present Simple", "Past Simple", "Future Simple"],
    correctAnswer: 1 // Present Simple
  },
  {
    id: 2,
    question: "She ___ English at the moment.",
    options: ["studies", "is studying", "studied", "has studied"],
    correctAnswer: 1 // is studying (Present Continuous)
  },
  {
    id: 3,
    question: "By the time we arrive, they ___ dinner.",
    options: ["will eat", "will have eaten", "are eating", "eat"],
    correctAnswer: 1 // will have eaten (Future Perfect)
  },
  {
    id: 4,
    question: "I ___ in London for 5 years before I moved to Paris.",
    options: ["lived", "was living", "had lived", "have lived"],
    correctAnswer: 2 // had lived (Past Perfect)
  },
  {
    id: 5,
    question: "At this time tomorrow, we ___ on the beach.",
    options: ["will lie", "will be lying", "are lying", "lie"],
    correctAnswer: 1 // will be lying (Future Continuous)
  },
  {
    id: 6,
    question: "They ___ football when it started to rain.",
    options: ["played", "were playing", "have played", "had played"],
    correctAnswer: 1 // were playing (Past Continuous)
  },
  {
    id: 7,
    question: "By next month, I ___ this project for a year.",
    options: ["will work", "will be working", "will have been working", "am working"],
    correctAnswer: 2 // will have been working (Future Perfect Continuous)
  },
  {
    id: 8,
    question: "She ___ here since 2018.",
    options: ["works", "is working", "has been working", "worked"],
    correctAnswer: 2 // has been working (Present Perfect Continuous)
  },
  {
    id: 9,
    question: "When I entered the room, everyone ___ quietly.",
    options: ["works", "worked", "was working", "has worked"],
    correctAnswer: 2 // was working (Past Continuous)
  },
  {
    id: 10,
    question: "I ___ him tomorrow at 3 PM.",
    options: ["will meet", "am meeting", "meet", "will be meeting"],
    correctAnswer: 1 // am meeting (Present Continuous for future arrangement)
  },
  {
    id: 11,
    question: "This time next week, I ___ in Japan.",
    options: ["will travel", "will be traveling", "travel", "am traveling"],
    correctAnswer: 1 // will be traveling (Future Continuous)
  },
  {
    id: 12,
    question: "He ___ three novels so far this year.",
    options: ["wrote", "has written", "writes", "is writing"],
    correctAnswer: 1 // has written (Present Perfect)
  },
  {
    id: 13,
    question: "We ___ for over 6 hours when we finally stopped.",
    options: ["drove", "were driving", "had been driving", "have been driving"],
    correctAnswer: 2 // had been driving (Past Perfect Continuous)
  },
  {
    id: 14,
    question: "Water ___ at 100°C.",
    options: ["boils", "is boiling", "boiled", "has boiled"],
    correctAnswer: 0 // boils (Present Simple - general truth)
  },
  {
    id: 15,
    question: "They ___ in that house since they got married.",
    options: ["live", "are living", "have lived", "lived"],
    correctAnswer: 2 // have lived (Present Perfect)
  },
  {
    id: 16,
    question: "Look! The bus ___ . We must run!",
    options: ["comes", "is coming", "came", "has come"],
    correctAnswer: 1 // is coming (Present Continuous)
  },
  {
    id: 17,
    question: "I ___ my keys yesterday.",
    options: ["lose", "lost", "have lost", "was losing"],
    correctAnswer: 1 // lost (Past Simple)
  },
  {
    id: 18,
    question: "She ___ TV when the phone rang.",
    options: ["watches", "watched", "was watching", "has watched"],
    correctAnswer: 2 // was watching (Past Continuous)
  },
  {
    id: 19,
    question: "By 2026, I ___ English for 10 years.",
    options: ["will study", "will be studying", "will have been studying", "study"],
    correctAnswer: 2 // will have been studying (Future Perfect Continuous)
  },
  {
    id: 20,
    question: "He ___ already ___ breakfast when I called.",
    options: ["has / eaten", "had / eaten", "was / eating", "ate"],
    correctAnswer: 1 // had / eaten (Past Perfect)
  },
  {
    id: 21,
    question: "Which tense is used for actions happening right now?",
    options: ["Present Simple", "Present Continuous", "Present Perfect", "Past Simple"],
    correctAnswer: 1
  },
  {
    id: 22,
    question: "We usually ___ to school by bus.",
    options: ["go", "are going", "went", "have gone"],
    correctAnswer: 0
  },
  {
    id: 23,
    question: "I ___ this movie three times already.",
    options: ["saw", "have seen", "am seeing", "was seeing"],
    correctAnswer: 1
  },
  {
    id: 24,
    question: "They ___ in Spain for two months next summer.",
    options: ["will stay", "will be staying", "are staying", "stay"],
    correctAnswer: 1
  },
  {
    id: 25,
    question: "When I was a child, I ___ a bicycle.",
    options: ["have", "had", "was having", "am having"],
    correctAnswer: 1
  },
  {
    id: 26,
    question: "She ___ for the company since 2015.",
    options: ["works", "is working", "has been working", "worked"],
    correctAnswer: 2
  },
  {
    id: 27,
    question: "Don't call me at 8 PM. I ___ dinner.",
    options: ["will eat", "will be eating", "eat", "am eating"],
    correctAnswer: 1
  },
  {
    id: 28,
    question: "He ___ the piano when suddenly the lights went out.",
    options: ["played", "was playing", "has played", "had played"],
    correctAnswer: 1
  },
  {
    id: 29,
    question: "By the end of this year, we ___ together for 20 years.",
    options: ["will work", "will be working", "will have been working", "are working"],
    correctAnswer: 2
  },
  {
    id: 30,
    question: "I ___ never ___ Japanese food before coming to Tokyo.",
    options: ["have / eaten", "had / eaten", "was / eating", "ate"],
    correctAnswer: 1
  },
  {
    id: 31,
    question: "Which tense is used for completed actions before another past action?",
    options: ["Past Simple", "Past Continuous", "Past Perfect", "Present Perfect"],
    correctAnswer: 2
  },
  {
    id: 32,
    question: "At 9 PM last night, I ___ my homework.",
    options: ["do", "did", "was doing", "have done"],
    correctAnswer: 2
  },
  {
    id: 33,
    question: "We ___ to the concert tomorrow night.",
    options: ["go", "are going", "will go", "went"],
    correctAnswer: 1
  },
  {
    id: 34,
    question: "She ___ three marathons by the age of 30.",
    options: ["ran", "has run", "had run", "was running"],
    correctAnswer: 2
  },
  {
    id: 35,
    question: "They ___ in the pool all afternoon yesterday.",
    options: ["swim", "swam", "were swimming", "have swum"],
    correctAnswer: 2
  },
  {
    id: 36,
    question: "By the time he retires, he ___ for the company for 40 years.",
    options: ["will work", "will be working", "will have been working", "works"],
    correctAnswer: 2
  },
  {
    id: 37,
    question: "I ___ my keys. Can you help me look for them?",
    options: ["lost", "have lost", "was losing", "lose"],
    correctAnswer: 1
  },
  {
    id: 38,
    question: "The train ___ at 7 PM sharp every day.",
    options: ["leaves", "is leaving", "left", "has left"],
    correctAnswer: 0
  },
  {
    id: 39,
    question: "When I woke up, it ___ heavily.",
    options: ["rains", "rained", "was raining", "has rained"],
    correctAnswer: 2
  },
  {
    id: 40,
    question: "This is the best pizza I ___ ever ___ .",
    options: ["have / eaten", "had / eaten", "ate", "eat"],
    correctAnswer: 0
  },
  {
    id: 41,
    question: "She ___ French before she moved to Paris.",
    options: ["never studied", "had never studied", "was never studying", "has never studied"],
    correctAnswer: 1
  },
  {
    id: 42,
    question: "We ___ here for more than two hours waiting for you!",
    options: ["wait", "waited", "are waiting", "have been waiting"],
    correctAnswer: 3
  },
  {
    id: 43,
    question: "I ___ my best friend next weekend after 5 years!",
    options: ["will see", "am seeing", "see", "will be seeing"],
    correctAnswer: 1
  },
  {
    id: 44,
    question: "They ___ the house when the fire started.",
    options: ["clean", "cleaned", "were cleaning", "have cleaned"],
    correctAnswer: 2
  },
  {
    id: 45,
    question: "By 2030, scientists ___ a cure for cancer.",
    options: ["will find", "will have found", "are finding", "find"],
    correctAnswer: 1
  },
  {
    id: 46,
    question: "He ___ tired because he ___ all night.",
    options: ["is / worked", "was / had worked", "is / has worked", "was / worked"],
    correctAnswer: 2
  },
  {
    id: 47,
    question: "I ___ my homework yet.",
    options: ["didn't finish", "haven't finished", "wasn't finishing", "don't finish"],
    correctAnswer: 1
  },
  {
    id: 48,
    question: "The sun ___ in the east.",
    options: ["rises", "is rising", "rose", "has risen"],
    correctAnswer: 0
  },
  {
    id: 49,
    question: "While I ___ breakfast, the phone rang.",
    options: ["had", "was having", "have had", "had had"],
    correctAnswer: 1
  },
  {
    id: 50,
    question: "By the time we get there, the movie ___ .",
    options: ["will start", "will have started", "starts", "is starting"],
    correctAnswer: 1
  },
  {
    id: 51,
    question: "How long ___ English?",
    options: ["do you learn", "are you learning", "have you been learning", "did you learn"],
    correctAnswer: 2
  },
  {
    id: 52,
    question: "She ___ when I called her yesterday.",
    options: ["sleeps", "slept", "was sleeping", "has slept"],
    correctAnswer: 2
  },
  {
    id: 53,
    question: "I ___ to the gym three times a week.",
    options: ["go", "am going", "went", "have gone"],
    correctAnswer: 0
  },
  {
    id: 54,
    question: "They ___ married for 25 years next month.",
    options: ["will be", "are", "will have been", "have been"],
    correctAnswer: 2
  },
  {
    id: 55,
    question: "When I arrived, he ___ already ___ .",
    options: ["has / left", "had / left", "was / leaving", "left"],
    correctAnswer: 1
  },
  {
    id: 56,
    question: "I can't play now. I ___ dinner.",
    options: ["cook", "am cooking", "cooked", "have cooked"],
    correctAnswer: 1
  },
  {
    id: 57,
    question: "He ___ in London when he was young.",
    options: ["lives", "lived", "has lived", "was living"],
    correctAnswer: 1
  },
  {
    id: 58,
    question: "By this time tomorrow, I ___ my exam.",
    options: ["will finish", "will have finished", "finish", "am finishing"],
    correctAnswer: 1
  },
  {
    id: 59,
    question: "She ___ for hours when she finally took a break.",
    options: ["studies", "studied", "was studying", "had been studying"],
    correctAnswer: 3
  },
  {
    id: 60,
    question: "We ___ this series all week!",
    options: ["watch", "are watching", "have been watching", "watched"],
    correctAnswer: 2
  },
  {
    id: 61,
    question: "Next year, I ___ in this company for 10 years.",
    options: ["will work", "will be working", "will have worked", "work"],
    correctAnswer: 2
  },
  {
    id: 62,
    question: "He ___ just ___ his driving test!",
    options: ["has / passed", "passed", "had / passed", "passes"],
    correctAnswer: 0
  },
  {
    id: 63,
    question: "When we came in, they ___ cards.",
    options: ["play", "played", "were playing", "have played"],
    correctAnswer: 2
  },
  {
    id: 64,
    question: "I ___ my wallet somewhere yesterday.",
    options: ["leave", "left", "was leaving", "have left"],
    correctAnswer: 1
  },
  {
    id: 65,
    question: "At 10 PM tonight, I ___ probably ___ TV.",
    options: ["will / watch", "will be / watching", "watch", "am watching"],
    correctAnswer: 1
  },
  {
    id: 66,
    question: "She ___ never ___ to Asia before.",
    options: ["has / been", "had / been", "was", "is"],
    correctAnswer: 1
  },
  {
    id: 67,
    question: "They ___ the report by Friday.",
    options: ["will finish", "will have finished", "finish", "are finishing"],
    correctAnswer: 1
  },
  {
    id: 68,
    question: "I ___ the book when the power went out.",
    options: ["read", "was reading", "have read", "had read"],
    correctAnswer: 1
  },
  {
    id: 69,
    question: "We ___ friends since kindergarten.",
    options: ["are", "were", "have been", "had been"],
    correctAnswer: 2
  },
  {
    id: 70,
    question: "By 2050, people ___ on Mars.",
    options: ["will live", "will be living", "will have been living", "live"],
    correctAnswer: 0
  },
  {
    id: 71,
    question: "Which tense is NOT used for future actions?",
    options: ["Present Continuous", "Future Simple", "Future Perfect", "Past Perfect"],
    correctAnswer: 3
  },
  {
    id: 72,
    question: "He ___ smoking last year.",
    options: ["quits", "quit", "has quit", "had quit"],
    correctAnswer: 1
  },
  {
    id: 73,
    question: "I ___ here all my life.",
    options: ["live", "am living", "have lived", "lived"],
    correctAnswer: 2
  },
  {
    id: 74,
    question: "While you were away, I ___ your plants.",
    options: ["water", "watered", "was watering", "have watered"],
    correctAnswer: 1
  },
  {
    id: 75,
    question: "They ___ the new office by next spring.",
    options: ["will open", "will be opening", "will have opened", "open"],
    correctAnswer: 2
  },
  {
    id: 76,
    question: "She ___ for 12 hours straight when she finally slept.",
    options: ["works", "worked", "was working", "had been working"],
    correctAnswer: 3
  },
  {
    id: 77,
    question: "My plane ___ at 6 AM tomorrow.",
    options: ["leaves", "is leaving", "will leave", "left"],
    correctAnswer: 0
  },
  {
    id: 78,
    question: "I ___ him since we were children.",
    options: ["know", "knew", "have known", "had known"],
    correctAnswer: 2
  },
  {
    id: 79,
    question: "When I got home, dinner ___ already ___ .",
    options: ["was / prepared", "had been / prepared", "has been / prepared", "is / prepared"],
    correctAnswer: 1
  },
  {
    id: 80,
    question: "The kids ___ in the garden all morning.",
    options: ["play", "played", "were playing", "have been playing"],
    correctAnswer: 3
  },
  {
    id: 81,
    question: "By the time the meeting starts, I ___ the presentation.",
    options: ["will finish", "will have finished", "finish", "am finishing"],
    correctAnswer: 1
  },
  {
    id: 82,
    question: "He ___ never ___ sushi before last night.",
    options: ["has / tried", "had / tried", "tried", "tries"],
    correctAnswer: 1
  },
  {
    id: 83,
    question: "I ___ my homework while she was cooking.",
    options: ["do", "did", "was doing", "have done"],
    correctAnswer: 2
  },
  {
    id: 84,
    question: "Tomorrow at this time, we ___ on the plane.",
    options: ["will sit", "will be sitting", "sit", "are sitting"],
    correctAnswer: 1
  },
  {
    id: 85,
    question: "She ___ three languages fluently.",
    options: ["speaks", "is speaking", "spoke", "has spoken"],
    correctAnswer: 0
  },
  {
    id: 86,
    question: "They ___ in that apartment for 8 years before buying a house.",
    options: ["lived", "were living", "had lived", "have lived"],
    correctAnswer: 2
  },
  {
    id: 87,
    question: "I ___ you the news as soon as I hear it.",
    options: ["tell", "will tell", "am telling", "told"],
    correctAnswer: 1
  },
  {
    id: 88,
    question: "When I was younger, I ___ football every day.",
    options: ["play", "played", "was playing", "have played"],
    correctAnswer: 1
  },
  {
    id: 89,
    question: "By next summer, I ___ my degree.",
    options: ["will complete", "will have completed", "complete", "am completing"],
    correctAnswer: 1
  },
  {
    id: 90,
    question: "He ___ for the bus when it started raining.",
    options: ["waits", "waited", "was waiting", "has waited"],
    correctAnswer: 2
  },
  {
    id: 91,
    question: "I ___ this book since last month.",
    options: ["read", "am reading", "have been reading", "was reading"],
    correctAnswer: 2
  },
  {
    id: 92,
    question: "The movie ___ at 8 PM tonight.",
    options: ["starts", "is starting", "will start", "started"],
    correctAnswer: 0
  },
  {
    id: 93,
    question: "She ___ already ___ three cups of coffee today.",
    options: ["has / drunk", "drank", "had / drunk", "is drinking"],
    correctAnswer: 0
  },
  {
    id: 94,
    question: "While I ___ the dishes, I dropped a glass.",
    options: ["wash", "washed", "was washing", "have washed"],
    correctAnswer: 2
  },
  {
    id: 95,
    question: "By 2040, humans ___ colonies on Mars.",
    options: ["will establish", "will have established", "establish", "are establishing"],
    correctAnswer: 1
  },
  {
    id: 96,
    question: "We ___ friends for over 20 years.",
    options: ["are", "were", "have been", "had been"],
    correctAnswer: 2
  },
  {
    id: 97,
    question: "I ___ my keys. Have you seen them?",
    options: ["lost", "have lost", "was losing", "lose"],
    correctAnswer: 1
  },
  {
    id: 98,
    question: "He ___ in London when the war started.",
    options: ["lives", "lived", "was living", "has lived"],
    correctAnswer: 2
  },
  {
    id: 99,
    question: "Next year, she ___ here for a decade.",
    options: ["will work", "will be working", "will have been working", "works"],
    correctAnswer: 2
  },
  {
    id: 100,
    question: "I ___ never ___ such a beautiful sunset before.",
    options: ["have / seen", "had / seen", "saw", "see"],
    correctAnswer: 1
  }
];

export default questions;