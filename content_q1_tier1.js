/* ============================================================
   YOUNG MAN GROWTH PLAN — CONTENT SOURCE
   Quarter 1 "Foundations" · Tier 1 (ages 11-12)

   This is the single source of truth. The interactive webpage
   and the printable booklet both read from this file.
   Edit content here; do not edit it inside the app files.
   ============================================================ */

const PLAN = {

  meta: {
    quarter: 1,
    quarterName: "Foundations",
    tier: 1,
    ageRange: "11-12",
    weeks: 13,
    tagline: "Roots go down before branches go out."
  },

  /* ---------- RANKS ----------
     Earned by points AND mentor co-sign. Points alone never rank him up. */
  ranks: [
    { name: "Sapling",     minPoints: 0,   note: "Just planted. Everyone starts here." },
    { name: "Pathfinder",  minPoints: 120, note: "Finding the trail on your own." },
    { name: "Trailblazer", minPoints: 300, note: "Making trail others can follow." },
    { name: "Woodsman",    minPoints: 520, note: "Competent, steady, useful to have around." },
    { name: "Guide",       minPoints: 800, note: "Others follow you now. Lead well." }
  ],

  /* ---------- POINT VALUES ---------- */
  points: {
    dailyRoot: 1,
    weeklyReflection: 3,
    weeklyApplication: 5,
    questMilestone: 8,
    questComplete: 25,
    mentorConversation: 4
  },

  /* ---------- DAILY ROOTS ----------
     Preset. Same every day. This is the non-negotiable spine.
     area: character | faith | selfcare | competence */
  dailyRoots: [
    { id: "dr1", area: "faith",      text: "Read today's Scripture and pray",           icon: "book" },
    { id: "dr2", area: "selfcare",   text: "Brush teeth, shower, clean clothes",         icon: "droplet" },
    { id: "dr3", area: "character",  text: "Make bed and tidy room — no reminder",       icon: "bed" },
    { id: "dr4", area: "character",  text: "Chores done promptly, done right",           icon: "check" },
    { id: "dr5", area: "character",  text: "Spoke respectfully to parents and adults",   icon: "message" },
    { id: "dr6", area: "selfcare",   text: "Moved your body — 20+ minutes",              icon: "activity" },
    { id: "dr7", area: "character",  text: "Screen time kept where it belongs",          icon: "screen" },
    { id: "dr8", area: "faith",      text: "Thanked God and one person out loud",        icon: "heart" }
  ],

  /* ---------- WEEKLY CONTENT ----------
     13 weeks. Each week: theme, verse, quote, application challenge
     (branch), journal prompt, mentor conversation question. */
  weeks: [
    {
      n: 1,
      theme: "Ready yourself",
      verse: { ref: "Luke 16:10", text: "One who is faithful in a very little is also faithful in much, and one who is dishonest in a very little is also dishonest in much." },
      quote: { text: "If you want to change the world, start off by making your bed.", by: "Adm. William H. McRaven" },
      application: {
        title: "Own your ground",
        text: "Your room is the first thing you're in charge of. Get it fully in order this week — not 'good enough,' actually done — and keep it that way seven days straight.",
        options: [
          "Deep clean it Monday and hold it all week",
          "Fix one thing that's been broken or messy for months",
          "Reorganize so it's easier to keep clean, not just clean once"
        ]
      },
      journal: "What's one thing you've been putting off because it's boring? Why does doing small things well matter before anyone hands you big things?",
      mentor: "Ask him: what's one job around here you think you could take over completely, without me checking?",
      quest: null
    },
    {
      n: 2,
      theme: "Tell the truth",
      verse: { ref: "Proverbs 12:22", text: "Lying lips are an abomination to the Lord, but those who act faithfully are his delight." },
      quote: { text: "Whoever is careless with the truth in small matters cannot be trusted with important matters.", by: "Albert Einstein" },
      application: {
        title: "The costly truth",
        text: "This week, tell the truth one time when a lie would have been easier or cheaper. Write down what it cost you and what it was worth.",
        options: [
          "Admit a mistake before anyone finds out",
          "Correct something you said that wasn't quite right",
          "Say the hard true thing kindly instead of the easy false thing"
        ]
      },
      journal: "Write about a time you told a lie and got away with it. Did getting away with it feel like winning?",
      mentor: "Ask him: when is it hardest for you to tell me the truth? Then listen without reacting.",
      quest: "select"
    },
    {
      n: 3,
      theme: "Know your tools",
      verse: { ref: "Proverbs 22:29", text: "Do you see a man skillful in his work? He will stand before kings; he will not stand before obscure men." },
      quote: { text: "Give me six hours to chop down a tree and I will spend the first four sharpening the axe.", by: "attributed to Abraham Lincoln" },
      application: {
        title: "Name every tool",
        text: "Go to the toolbox or garage with your mentor. Learn the name and job of ten tools you couldn't name before. Then use three of them for something real.",
        options: [
          "Hand tools — hammer, level, square, chisel, plane",
          "Measuring and marking tools",
          "Power tools (with supervision) — drill, driver, sander"
        ]
      },
      journal: "Which tool surprised you? What's a job you could now do that you couldn't do last week?",
      mentor: "Work alongside him on something real this week — don't just explain the tool, use it together.",
      quest: "start"
    },
    {
      n: 4,
      theme: "Do it now",
      verse: { ref: "Proverbs 6:6-8", text: "Go to the ant, O sluggard; consider her ways, and be wise. Without having any chief, officer, or ruler, she prepares her bread in summer and gathers her food in harvest." },
      quote: { text: "Do the hard jobs first. The easy jobs will take care of themselves.", by: "Dale Carnegie" },
      application: {
        title: "Hardest thing first",
        text: "Every day this week, do the thing you least want to do before anything fun. Track how long you actually put it off before starting.",
        options: [
          "Homework before screens, every day",
          "The chore you always leave for last, done first",
          "The conversation you've been avoiding"
        ]
      },
      journal: "What's the difference between how long a hard job actually takes and how long dreading it takes?",
      mentor: "Ask him: what did you dread this week that turned out to be smaller than you thought?",
      quest: null
    },
    {
      n: 5,
      theme: "Guard your mouth",
      verse: { ref: "Ephesians 4:29", text: "Let no corrupting talk come out of your mouths, but only such as is good for building up, as fits the occasion, that it may give grace to those who hear." },
      quote: { text: "A gentleman is one who never hurts anyone's feelings unintentionally.", by: "Oscar Wilde" },
      application: {
        title: "Build somebody up",
        text: "Say something true and encouraging to five different people this week — out loud, to their face, not by text. Write down what happened.",
        options: [
          "Encourage someone who's struggling at something",
          "Thank someone nobody usually thanks",
          "Tell a friend something you actually admire about him"
        ]
      },
      journal: "Whose words have built you up the most? What did they say, and why did it stick?",
      mentor: "Ask him: has anything I've said stuck with you — good or bad? Be ready to hear the bad one.",
      quest: "milestone"
    },
    {
      n: 6,
      theme: "Handle your money",
      verse: { ref: "Proverbs 21:20", text: "Precious treasure and oil are in a wise man's dwelling, but a foolish man devours it." },
      quote: { text: "Do not save what is left after spending, but spend what is left after saving.", by: "Warren Buffett" },
      application: {
        title: "Give, save, spend",
        text: "Split every dollar you get this month into three: give first, save second, spend what's left. Write down every dollar in and out for the full week.",
        options: [
          "10% give / 40% save / 50% spend",
          "Save toward one specific thing you want and name it",
          "Give to something specific, not just generally"
        ]
      },
      journal: "What's something you bought that you stopped caring about within a week? What did that teach you?",
      mentor: "Show him a real bill or budget of yours. Let him see what running a household actually costs.",
      quest: null
    },
    {
      n: 7,
      theme: "Be useful in a crisis",
      verse: { ref: "Galatians 6:2", text: "Bear one another's burdens, and so fulfill the law of Christ." },
      quote: { text: "Nobody made a greater mistake than he who did nothing because he could only do a little.", by: "Edmund Burke" },
      application: {
        title: "First aid ready",
        text: "Learn to treat a cut, a burn, a sprain, and a nosebleed. Build or restock a real first aid kit for the house or the car.",
        options: [
          "Build a kit from scratch and know what each item does",
          "Learn the recovery position and when to use it",
          "Memorize how to call for help clearly: where, what, who"
        ]
      },
      journal: "Why do most people freeze in an emergency? What makes the difference between freezing and helping?",
      mentor: "Run a surprise drill: 'Someone just cut their hand badly. Go.' See what he does.",
      quest: "milestone"
    },
    {
      n: 8,
      theme: "Forgive fast",
      verse: { ref: "Colossians 3:13", text: "Bearing with one another and, if one has a complaint against another, forgiving each other; as the Lord has forgiven you, so you also must forgive." },
      quote: { text: "To be wronged is nothing unless you continue to remember it.", by: "Confucius" },
      application: {
        title: "Let it go — actually",
        text: "Think of someone you're holding something against. Forgive them this week. If it's right to say it out loud, say it. If not, settle it with God and drop it.",
        options: [
          "Go to the person directly and clear it",
          "Forgive someone who will never apologize",
          "Ask forgiveness from someone you wronged"
        ]
      },
      journal: "What does holding a grudge actually cost you? Who's paying more — you or them?",
      mentor: "Tell him about a grudge you carried too long and what it cost you. Be honest about it.",
      quest: null
    },
    {
      n: 9,
      theme: "Find your way",
      verse: { ref: "Psalm 119:105", text: "Your word is a lamp to my feet and a light to my path." },
      quote: { text: "It is not the mountain we conquer, but ourselves.", by: "Sir Edmund Hillary" },
      application: {
        title: "Lead the way",
        text: "Learn to read a real map and use a compass. Then plan and lead a walk or hike for your family — your route, your call.",
        options: [
          "Plan a route on paper before you walk it",
          "Navigate by compass with the phone in your pocket",
          "Lead the whole family and answer their questions"
        ]
      },
      journal: "What's the difference between following a path and leading one? Which one did you find harder?",
      mentor: "Let him lead even if he gets it wrong. Don't correct the route unless it's unsafe.",
      quest: "milestone"
    },
    {
      n: 10,
      theme: "Stand alone",
      verse: { ref: "1 Samuel 17:45", text: "You come to me with a sword and with a spear and with a javelin, but I come to you in the name of the Lord of hosts." },
      quote: { text: "Courage is not the absence of fear, but the judgment that something else is more important than fear.", by: "Ambrose Redmoon" },
      application: {
        title: "The hard right",
        text: "This week, do one right thing that nobody around you is doing — and don't announce it. Write down what it cost you socially.",
        options: [
          "Refuse to join in when others are mocking someone",
          "Stand with the kid nobody stands with",
          "Walk away from something you know is wrong"
        ]
      },
      journal: "David was your age when he faced Goliath. What made him able to stand there? Where does that kind of nerve come from?",
      mentor: "Ask him: where do you feel the most pressure right now to go along with something?",
      quest: null
    },
    {
      n: 11,
      theme: "Fix what's broken",
      verse: { ref: "Genesis 41:39-40", text: "Since God has shown you all this, there is none so discerning and wise as you are. You shall be over my house." },
      quote: { text: "The best way to find yourself is to lose yourself in the service of others.", by: "Mahatma Gandhi" },
      application: {
        title: "Repair something real",
        text: "Find something broken in the house that you can fix with what you now know. Fix it. Don't ask permission to be useful.",
        options: [
          "Tighten, patch, or replace something worn out",
          "Fix a bike, a door, a drawer, a hose",
          "Improve a system in the house that annoys everyone"
        ]
      },
      journal: "How did it feel to fix something instead of report it? What else around here could you handle now?",
      mentor: "Inspect the repair with him. Praise the effort honestly — including where it could be better.",
      quest: "finish"
    },
    {
      n: 12,
      theme: "Serve without being asked",
      verse: { ref: "Philippians 2:3-4", text: "Do nothing from selfish ambition or conceit, but in humility count others more significant than yourselves. Let each of you look not only to his own interests, but also to the interests of others." },
      quote: { text: "The highest of distinctions is service to others.", by: "King George VI" },
      application: {
        title: "Unasked and unannounced",
        text: "Do three helpful things this week that nobody asked you to do and nobody knows about. Don't tell anyone — write them here only.",
        options: [
          "Take over someone else's chore quietly",
          "Do something for a neighbor or an older person",
          "Fix or clean something before anyone notices it needed it"
        ]
      },
      journal: "Was it harder to serve, or harder to stay quiet about it? What does that tell you about your own heart?",
      mentor: "Don't ask what he did. At the end of the quarter, tell him what you noticed on your own.",
      quest: null
    },
    {
      n: 13,
      theme: "Take stock",
      verse: { ref: "Psalm 1:3", text: "He is like a tree planted by streams of water that yields its fruit in its season, and its leaf does not wither. In all that he does, he prospers." },
      quote: { text: "We do not learn from experience. We learn from reflecting on experience.", by: "John Dewey" },
      application: {
        title: "Quarter review",
        text: "Go back through all thirteen weeks. Read what you wrote in week 1 and compare it to who you are now. Sit down with your mentor and go through it together.",
        options: [
          "Name the week that changed you most",
          "Name the root habit that's now automatic",
          "Name the one you're still fighting"
        ]
      },
      journal: "Write a letter to yourself thirteen weeks from now. What do you want to be true about you by then? Seal it and don't read it until then.",
      mentor: "Sign off on the quarter. Say out loud one specific thing you've seen grow in him. Be specific — 'you're doing great' means nothing.",
      quest: null
    }
  ],

  /* ---------- BRANCH QUESTS ----------
     He picks ONE in week 2, works it weeks 3-11, finishes week 11.
     Milestones checked in weeks 5, 7, 9. */
  quests: [
    {
      id: "q_read",
      name: "Read a real book",
      icon: "book",
      blurb: "Pick a book with weight to it and finish it. Not a summary, not a video — the actual book.",
      milestones: ["Pick it and start", "One third in", "Two thirds in", "Finish and report on it"],
      badge: "Reader"
    },
    {
      id: "q_fire",
      name: "Master fire and knots",
      icon: "flame",
      blurb: "Learn to build a safe fire from scratch and tie six knots from memory, blindfolded if you can.",
      milestones: ["Learn three knots", "Build a fire with supervision", "Six knots from memory", "Build and manage a fire start to finish"],
      badge: "Fire builder"
    },
    {
      id: "q_build",
      name: "Build something useful",
      icon: "hammer",
      blurb: "Design and build one thing the family will actually use. Wood, metal, or code — your call.",
      milestones: ["Design it on paper", "Gather materials", "Build it", "Deliver it and take the feedback"],
      badge: "Builder"
    },
    {
      id: "q_learn",
      name: "Learn how something works",
      icon: "gear",
      blurb: "Pick one machine or system and learn it well enough to teach it. Engine, electricity, plumbing, a computer.",
      milestones: ["Pick your subject", "Study the parts", "Take something apart", "Teach it to the family"],
      badge: "Explainer"
    },
    {
      id: "q_serve",
      name: "Serve outside the house",
      icon: "hands",
      blurb: "Find a real need beyond your own family and meet it, week after week, for the whole quarter.",
      milestones: ["Find the need", "Show up once", "Show up five times", "Finish the quarter without quitting"],
      badge: "Servant"
    },
    {
      id: "q_skill",
      name: "Learn a hard skill",
      icon: "target",
      blurb: "Instrument, language, sport, trade skill. Something that takes daily practice and can't be faked.",
      milestones: ["Pick it and set a practice time", "Two weeks unbroken", "Five weeks unbroken", "Perform or demonstrate it"],
      badge: "Craftsman"
    }
  ],

  /* ---------- BADGES ---------- */
  badges: [
    { id: "b_root",     name: "Rooted",       icon: "tree",    req: "All daily roots, 14 days straight" },
    { id: "b_truth",    name: "Straight arrow", icon: "arrow", req: "Complete the week 2 truth challenge" },
    { id: "b_tools",    name: "Toolman",      icon: "wrench",  req: "Name and use 10 tools" },
    { id: "b_money",    name: "Steward",      icon: "coin",    req: "Track every dollar for a full month" },
    { id: "b_aid",      name: "First aid",    icon: "cross",    req: "Complete the week 7 first aid challenge" },
    { id: "b_nav",      name: "Navigator",    icon: "compass", req: "Lead a family hike by map and compass" },
    { id: "b_stand",    name: "Stood alone",  icon: "shield",  req: "Complete the week 10 courage challenge" },
    { id: "b_fixer",    name: "Fixer",        icon: "wrench",  req: "Repair something real, unasked" },
    { id: "b_quarter",  name: "Quarter done", icon: "star",    req: "Finish all 13 weeks with mentor co-sign" }
  ],

  /* ---------- MONTHLY MAN PROFILES ---------- */
  profiles: [
    {
      month: 1,
      name: "David, before he was king",
      blurb: "A teenager watching sheep nobody thought mattered. He learned courage in private — killing a lion and a bear with nobody watching — long before Goliath. The public moment only revealed what the private years built.",
      takeaway: "Nobody sees the practice. Everybody sees the performance. Do the practice anyway.",
      ref: "1 Samuel 17:34-37"
    },
    {
      month: 2,
      name: "Joseph, in prison",
      blurb: "Sold by his own brothers, lied about, forgotten in a cell for years. He kept doing excellent work in a place where excellent work seemed pointless — and that habit is exactly what put him over Egypt.",
      takeaway: "Do good work in the place nobody's watching. It's building something you can't see yet.",
      ref: "Genesis 39-41"
    },
    {
      month: 3,
      name: "Daniel, as a young man",
      blurb: "Taken from home as a teenager into a foreign court designed to make him forget who he was. He decided ahead of time what he would and wouldn't do — before the pressure came, not during it.",
      takeaway: "Decide who you are before you're tested. In the moment is too late.",
      ref: "Daniel 1:8"
    }
  ],

  /* ---------- PRIVILEGE LEDGER ----------
     Mentor-granted only. Points make a privilege ELIGIBLE.
     The mentor decides whether to actually grant it. */
  privileges: [
    {
      id: "p_contacts", name: "Friends' numbers in your phone", category: "social", risk: "low",
      reqPoints: 100, reqRank: "Pathfinder",
      restore: "One clean week of roots + a conversation about who's in your contacts and why."
    },
    {
      id: "p_screen", name: "Extended weekend screen time", category: "social", risk: "low",
      reqPoints: 140, reqRank: "Pathfinder",
      restore: "Two clean weeks of screen-time self-control with no reminders."
    },
    {
      id: "p_game", name: "A new video game (rating-appropriate)", category: "gaming", risk: "medium",
      reqPoints: 300, reqRank: "Trailblazer",
      restore: "Two clean weeks + finish the current quest before a new game is discussed."
    },
    {
      id: "p_music", name: "Music app — Spotify, controls on", category: "music", risk: "medium",
      reqPoints: 340, reqRank: "Trailblazer",
      restore: "Two clean weeks + a conversation about what you're actually listening to."
    },
    {
      id: "p_ai", name: "AI app, with supervision settings on", category: "ai-tools", risk: "high",
      reqPoints: 520, reqRank: "Woodsman",
      restore: "A full month of clean roots + a sit-down about how you were using it."
    },
    {
      id: "p_stream", name: "Video streaming app", category: "streaming", risk: "high",
      reqPoints: 560, reqRank: "Woodsman",
      restore: "A full month of clean roots + you and your mentor agree on what's off-limits."
    }
  ]
};

if (typeof module !== "undefined") { module.exports = PLAN; }
