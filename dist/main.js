/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/dist/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/random-words/index.js":
/*!********************************************!*\
  !*** ./node_modules/random-words/index.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var wordList = [// Borrowed from xkcd password generator which borrowed it from wherever
"ability", "able", "aboard", "about", "above", "accept", "accident", "according", "account", "accurate", "acres", "across", "act", "action", "active", "activity", "actual", "actually", "add", "addition", "additional", "adjective", "adult", "adventure", "advice", "affect", "afraid", "after", "afternoon", "again", "against", "age", "ago", "agree", "ahead", "aid", "air", "airplane", "alike", "alive", "all", "allow", "almost", "alone", "along", "aloud", "alphabet", "already", "also", "although", "am", "among", "amount", "ancient", "angle", "angry", "animal", "announced", "another", "answer", "ants", "any", "anybody", "anyone", "anything", "anyway", "anywhere", "apart", "apartment", "appearance", "apple", "applied", "appropriate", "are", "area", "arm", "army", "around", "arrange", "arrangement", "arrive", "arrow", "art", "article", "as", "aside", "ask", "asleep", "at", "ate", "atmosphere", "atom", "atomic", "attached", "attack", "attempt", "attention", "audience", "author", "automobile", "available", "average", "avoid", "aware", "away", "baby", "back", "bad", "badly", "bag", "balance", "ball", "balloon", "band", "bank", "bar", "bare", "bark", "barn", "base", "baseball", "basic", "basis", "basket", "bat", "battle", "be", "bean", "bear", "beat", "beautiful", "beauty", "became", "because", "become", "becoming", "bee", "been", "before", "began", "beginning", "begun", "behavior", "behind", "being", "believed", "bell", "belong", "below", "belt", "bend", "beneath", "bent", "beside", "best", "bet", "better", "between", "beyond", "bicycle", "bigger", "biggest", "bill", "birds", "birth", "birthday", "bit", "bite", "black", "blank", "blanket", "blew", "blind", "block", "blood", "blow", "blue", "board", "boat", "body", "bone", "book", "border", "born", "both", "bottle", "bottom", "bound", "bow", "bowl", "box", "boy", "brain", "branch", "brass", "brave", "bread", "break", "breakfast", "breath", "breathe", "breathing", "breeze", "brick", "bridge", "brief", "bright", "bring", "broad", "broke", "broken", "brother", "brought", "brown", "brush", "buffalo", "build", "building", "built", "buried", "burn", "burst", "bus", "bush", "business", "busy", "but", "butter", "buy", "by", "cabin", "cage", "cake", "call", "calm", "came", "camera", "camp", "can", "canal", "cannot", "cap", "capital", "captain", "captured", "car", "carbon", "card", "care", "careful", "carefully", "carried", "carry", "case", "cast", "castle", "cat", "catch", "cattle", "caught", "cause", "cave", "cell", "cent", "center", "central", "century", "certain", "certainly", "chain", "chair", "chamber", "chance", "change", "changing", "chapter", "character", "characteristic", "charge", "chart", "check", "cheese", "chemical", "chest", "chicken", "chief", "child", "children", "choice", "choose", "chose", "chosen", "church", "circle", "circus", "citizen", "city", "class", "classroom", "claws", "clay", "clean", "clear", "clearly", "climate", "climb", "clock", "close", "closely", "closer", "cloth", "clothes", "clothing", "cloud", "club", "coach", "coal", "coast", "coat", "coffee", "cold", "collect", "college", "colony", "color", "column", "combination", "combine", "come", "comfortable", "coming", "command", "common", "community", "company", "compare", "compass", "complete", "completely", "complex", "composed", "composition", "compound", "concerned", "condition", "congress", "connected", "consider", "consist", "consonant", "constantly", "construction", "contain", "continent", "continued", "contrast", "control", "conversation", "cook", "cookies", "cool", "copper", "copy", "corn", "corner", "correct", "correctly", "cost", "cotton", "could", "count", "country", "couple", "courage", "course", "court", "cover", "cow", "cowboy", "crack", "cream", "create", "creature", "crew", "crop", "cross", "crowd", "cry", "cup", "curious", "current", "curve", "customs", "cut", "cutting", "daily", "damage", "dance", "danger", "dangerous", "dark", "darkness", "date", "daughter", "dawn", "day", "dead", "deal", "dear", "death", "decide", "declared", "deep", "deeply", "deer", "definition", "degree", "depend", "depth", "describe", "desert", "design", "desk", "detail", "determine", "develop", "development", "diagram", "diameter", "did", "die", "differ", "difference", "different", "difficult", "difficulty", "dig", "dinner", "direct", "direction", "directly", "dirt", "dirty", "disappear", "discover", "discovery", "discuss", "discussion", "disease", "dish", "distance", "distant", "divide", "division", "do", "doctor", "does", "dog", "doing", "doll", "dollar", "done", "donkey", "door", "dot", "double", "doubt", "down", "dozen", "draw", "drawn", "dream", "dress", "drew", "dried", "drink", "drive", "driven", "driver", "driving", "drop", "dropped", "drove", "dry", "duck", "due", "dug", "dull", "during", "dust", "duty", "each", "eager", "ear", "earlier", "early", "earn", "earth", "easier", "easily", "east", "easy", "eat", "eaten", "edge", "education", "effect", "effort", "egg", "eight", "either", "electric", "electricity", "element", "elephant", "eleven", "else", "empty", "end", "enemy", "energy", "engine", "engineer", "enjoy", "enough", "enter", "entire", "entirely", "environment", "equal", "equally", "equator", "equipment", "escape", "especially", "essential", "establish", "even", "evening", "event", "eventually", "ever", "every", "everybody", "everyone", "everything", "everywhere", "evidence", "exact", "exactly", "examine", "example", "excellent", "except", "exchange", "excited", "excitement", "exciting", "exclaimed", "exercise", "exist", "expect", "experience", "experiment", "explain", "explanation", "explore", "express", "expression", "extra", "eye", "face", "facing", "fact", "factor", "factory", "failed", "fair", "fairly", "fall", "fallen", "familiar", "family", "famous", "far", "farm", "farmer", "farther", "fast", "fastened", "faster", "fat", "father", "favorite", "fear", "feathers", "feature", "fed", "feed", "feel", "feet", "fell", "fellow", "felt", "fence", "few", "fewer", "field", "fierce", "fifteen", "fifth", "fifty", "fight", "fighting", "figure", "fill", "film", "final", "finally", "find", "fine", "finest", "finger", "finish", "fire", "fireplace", "firm", "first", "fish", "five", "fix", "flag", "flame", "flat", "flew", "flies", "flight", "floating", "floor", "flow", "flower", "fly", "fog", "folks", "follow", "food", "foot", "football", "for", "force", "foreign", "forest", "forget", "forgot", "forgotten", "form", "former", "fort", "forth", "forty", "forward", "fought", "found", "four", "fourth", "fox", "frame", "free", "freedom", "frequently", "fresh", "friend", "friendly", "frighten", "frog", "from", "front", "frozen", "fruit", "fuel", "full", "fully", "fun", "function", "funny", "fur", "furniture", "further", "future", "gain", "game", "garage", "garden", "gas", "gasoline", "gate", "gather", "gave", "general", "generally", "gentle", "gently", "get", "getting", "giant", "gift", "girl", "give", "given", "giving", "glad", "glass", "globe", "go", "goes", "gold", "golden", "gone", "good", "goose", "got", "government", "grabbed", "grade", "gradually", "grain", "grandfather", "grandmother", "graph", "grass", "gravity", "gray", "great", "greater", "greatest", "greatly", "green", "grew", "ground", "group", "grow", "grown", "growth", "guard", "guess", "guide", "gulf", "gun", "habit", "had", "hair", "half", "halfway", "hall", "hand", "handle", "handsome", "hang", "happen", "happened", "happily", "happy", "harbor", "hard", "harder", "hardly", "has", "hat", "have", "having", "hay", "he", "headed", "heading", "health", "heard", "hearing", "heart", "heat", "heavy", "height", "held", "hello", "help", "helpful", "her", "herd", "here", "herself", "hidden", "hide", "high", "higher", "highest", "highway", "hill", "him", "himself", "his", "history", "hit", "hold", "hole", "hollow", "home", "honor", "hope", "horn", "horse", "hospital", "hot", "hour", "house", "how", "however", "huge", "human", "hundred", "hung", "hungry", "hunt", "hunter", "hurried", "hurry", "hurt", "husband", "ice", "idea", "identity", "if", "ill", "image", "imagine", "immediately", "importance", "important", "impossible", "improve", "in", "inch", "include", "including", "income", "increase", "indeed", "independent", "indicate", "individual", "industrial", "industry", "influence", "information", "inside", "instance", "instant", "instead", "instrument", "interest", "interior", "into", "introduced", "invented", "involved", "iron", "is", "island", "it", "its", "itself", "jack", "jar", "jet", "job", "join", "joined", "journey", "joy", "judge", "jump", "jungle", "just", "keep", "kept", "key", "kids", "kill", "kind", "kitchen", "knew", "knife", "know", "knowledge", "known", "label", "labor", "lack", "lady", "laid", "lake", "lamp", "land", "language", "large", "larger", "largest", "last", "late", "later", "laugh", "law", "lay", "layers", "lead", "leader", "leaf", "learn", "least", "leather", "leave", "leaving", "led", "left", "leg", "length", "lesson", "let", "letter", "level", "library", "lie", "life", "lift", "light", "like", "likely", "limited", "line", "lion", "lips", "liquid", "list", "listen", "little", "live", "living", "load", "local", "locate", "location", "log", "lonely", "long", "longer", "look", "loose", "lose", "loss", "lost", "lot", "loud", "love", "lovely", "low", "lower", "luck", "lucky", "lunch", "lungs", "lying", "machine", "machinery", "mad", "made", "magic", "magnet", "mail", "main", "mainly", "major", "make", "making", "man", "managed", "manner", "manufacturing", "many", "map", "mark", "market", "married", "mass", "massage", "master", "material", "mathematics", "matter", "may", "maybe", "me", "meal", "mean", "means", "meant", "measure", "meat", "medicine", "meet", "melted", "member", "memory", "men", "mental", "merely", "met", "metal", "method", "mice", "middle", "might", "mighty", "mile", "military", "milk", "mill", "mind", "mine", "minerals", "minute", "mirror", "missing", "mission", "mistake", "mix", "mixture", "model", "modern", "molecular", "moment", "money", "monkey", "month", "mood", "moon", "more", "morning", "most", "mostly", "mother", "motion", "motor", "mountain", "mouse", "mouth", "move", "movement", "movie", "moving", "mud", "muscle", "music", "musical", "must", "my", "myself", "mysterious", "nails", "name", "nation", "national", "native", "natural", "naturally", "nature", "near", "nearby", "nearer", "nearest", "nearly", "necessary", "neck", "needed", "needle", "needs", "negative", "neighbor", "neighborhood", "nervous", "nest", "never", "new", "news", "newspaper", "next", "nice", "night", "nine", "no", "nobody", "nodded", "noise", "none", "noon", "nor", "north", "nose", "not", "note", "noted", "nothing", "notice", "noun", "now", "number", "numeral", "nuts", "object", "observe", "obtain", "occasionally", "occur", "ocean", "of", "off", "offer", "office", "officer", "official", "oil", "old", "older", "oldest", "on", "once", "one", "only", "onto", "open", "operation", "opinion", "opportunity", "opposite", "or", "orange", "orbit", "order", "ordinary", "organization", "organized", "origin", "original", "other", "ought", "our", "ourselves", "out", "outer", "outline", "outside", "over", "own", "owner", "oxygen", "pack", "package", "page", "paid", "pain", "paint", "pair", "palace", "pale", "pan", "paper", "paragraph", "parallel", "parent", "park", "part", "particles", "particular", "particularly", "partly", "parts", "party", "pass", "passage", "past", "path", "pattern", "pay", "peace", "pen", "pencil", "people", "per", "percent", "perfect", "perfectly", "perhaps", "period", "person", "personal", "pet", "phrase", "physical", "piano", "pick", "picture", "pictured", "pie", "piece", "pig", "pile", "pilot", "pine", "pink", "pipe", "pitch", "place", "plain", "plan", "plane", "planet", "planned", "planning", "plant", "plastic", "plate", "plates", "play", "pleasant", "please", "pleasure", "plenty", "plural", "plus", "pocket", "poem", "poet", "poetry", "point", "pole", "police", "policeman", "political", "pond", "pony", "pool", "poor", "popular", "population", "porch", "port", "position", "positive", "possible", "possibly", "post", "pot", "potatoes", "pound", "pour", "powder", "power", "powerful", "practical", "practice", "prepare", "present", "president", "press", "pressure", "pretty", "prevent", "previous", "price", "pride", "primitive", "principal", "principle", "printed", "private", "prize", "probably", "problem", "process", "produce", "product", "production", "program", "progress", "promised", "proper", "properly", "property", "protection", "proud", "prove", "provide", "public", "pull", "pupil", "pure", "purple", "purpose", "push", "put", "putting", "quarter", "queen", "question", "quick", "quickly", "quiet", "quietly", "quite", "rabbit", "race", "radio", "railroad", "rain", "raise", "ran", "ranch", "range", "rapidly", "rate", "rather", "raw", "rays", "reach", "read", "reader", "ready", "real", "realize", "rear", "reason", "recall", "receive", "recent", "recently", "recognize", "record", "red", "refer", "refused", "region", "regular", "related", "relationship", "religious", "remain", "remarkable", "remember", "remove", "repeat", "replace", "replied", "report", "represent", "require", "research", "respect", "rest", "result", "return", "review", "rhyme", "rhythm", "rice", "rich", "ride", "riding", "right", "ring", "rise", "rising", "river", "road", "roar", "rock", "rocket", "rocky", "rod", "roll", "roof", "room", "root", "rope", "rose", "rough", "round", "route", "row", "rubbed", "rubber", "rule", "ruler", "run", "running", "rush", "sad", "saddle", "safe", "safety", "said", "sail", "sale", "salmon", "salt", "same", "sand", "sang", "sat", "satellites", "satisfied", "save", "saved", "saw", "say", "scale", "scared", "scene", "school", "science", "scientific", "scientist", "score", "screen", "sea", "search", "season", "seat", "second", "secret", "section", "see", "seed", "seeing", "seems", "seen", "seldom", "select", "selection", "sell", "send", "sense", "sent", "sentence", "separate", "series", "serious", "serve", "service", "sets", "setting", "settle", "settlers", "seven", "several", "shade", "shadow", "shake", "shaking", "shall", "shallow", "shape", "share", "sharp", "she", "sheep", "sheet", "shelf", "shells", "shelter", "shine", "shinning", "ship", "shirt", "shoe", "shoot", "shop", "shore", "short", "shorter", "shot", "should", "shoulder", "shout", "show", "shown", "shut", "sick", "sides", "sight", "sign", "signal", "silence", "silent", "silk", "silly", "silver", "similar", "simple", "simplest", "simply", "since", "sing", "single", "sink", "sister", "sit", "sitting", "situation", "six", "size", "skill", "skin", "sky", "slabs", "slave", "sleep", "slept", "slide", "slight", "slightly", "slip", "slipped", "slope", "slow", "slowly", "small", "smaller", "smallest", "smell", "smile", "smoke", "smooth", "snake", "snow", "so", "soap", "social", "society", "soft", "softly", "soil", "solar", "sold", "soldier", "solid", "solution", "solve", "some", "somebody", "somehow", "someone", "something", "sometime", "somewhere", "son", "song", "soon", "sort", "sound", "source", "south", "southern", "space", "speak", "special", "species", "specific", "speech", "speed", "spell", "spend", "spent", "spider", "spin", "spirit", "spite", "split", "spoken", "sport", "spread", "spring", "square", "stage", "stairs", "stand", "standard", "star", "stared", "start", "state", "statement", "station", "stay", "steady", "steam", "steel", "steep", "stems", "step", "stepped", "stick", "stiff", "still", "stock", "stomach", "stone", "stood", "stop", "stopped", "store", "storm", "story", "stove", "straight", "strange", "stranger", "straw", "stream", "street", "strength", "stretch", "strike", "string", "strip", "strong", "stronger", "struck", "structure", "struggle", "stuck", "student", "studied", "studying", "subject", "substance", "success", "successful", "such", "sudden", "suddenly", "sugar", "suggest", "suit", "sum", "summer", "sun", "sunlight", "supper", "supply", "support", "suppose", "sure", "surface", "surprise", "surrounded", "swam", "sweet", "swept", "swim", "swimming", "swing", "swung", "syllable", "symbol", "system", "table", "tail", "take", "taken", "tales", "talk", "tall", "tank", "tape", "task", "taste", "taught", "tax", "tea", "teach", "teacher", "team", "tears", "teeth", "telephone", "television", "tell", "temperature", "ten", "tent", "term", "terrible", "test", "than", "thank", "that", "thee", "them", "themselves", "then", "theory", "there", "therefore", "these", "they", "thick", "thin", "thing", "think", "third", "thirty", "this", "those", "thou", "though", "thought", "thousand", "thread", "three", "threw", "throat", "through", "throughout", "throw", "thrown", "thumb", "thus", "thy", "tide", "tie", "tight", "tightly", "till", "time", "tin", "tiny", "tip", "tired", "title", "to", "tobacco", "today", "together", "told", "tomorrow", "tone", "tongue", "tonight", "too", "took", "tool", "top", "topic", "torn", "total", "touch", "toward", "tower", "town", "toy", "trace", "track", "trade", "traffic", "trail", "train", "transportation", "trap", "travel", "treated", "tree", "triangle", "tribe", "trick", "tried", "trip", "troops", "tropical", "trouble", "truck", "trunk", "truth", "try", "tube", "tune", "turn", "twelve", "twenty", "twice", "two", "type", "typical", "uncle", "under", "underline", "understanding", "unhappy", "union", "unit", "universe", "unknown", "unless", "until", "unusual", "up", "upon", "upper", "upward", "us", "use", "useful", "using", "usual", "usually", "valley", "valuable", "value", "vapor", "variety", "various", "vast", "vegetable", "verb", "vertical", "very", "vessels", "victory", "view", "village", "visit", "visitor", "voice", "volume", "vote", "vowel", "voyage", "wagon", "wait", "walk", "wall", "want", "war", "warm", "warn", "was", "wash", "waste", "watch", "water", "wave", "way", "we", "weak", "wealth", "wear", "weather", "week", "weigh", "weight", "welcome", "well", "went", "were", "west", "western", "wet", "whale", "what", "whatever", "wheat", "wheel", "when", "whenever", "where", "wherever", "whether", "which", "while", "whispered", "whistle", "white", "who", "whole", "whom", "whose", "why", "wide", "widely", "wife", "wild", "will", "willing", "win", "wind", "window", "wing", "winter", "wire", "wise", "wish", "with", "within", "without", "wolf", "women", "won", "wonder", "wonderful", "wood", "wooden", "wool", "word", "wore", "work", "worker", "world", "worried", "worry", "worse", "worth", "would", "wrapped", "write", "writer", "writing", "written", "wrong", "wrote", "yard", "year", "yellow", "yes", "yesterday", "yet", "you", "young", "younger", "your", "yourself", "youth", "zero", "zebra", "zipper", "zoo", "zulu"];

function words(options) {
  function word() {
    if (options && options.maxLength > 1) {
      return generateWordWithMaxLength();
    } else {
      return generateRandomWord();
    }
  }

  function generateWordWithMaxLength() {
    var rightSize = false;
    var wordUsed;

    while (!rightSize) {
      wordUsed = generateRandomWord();

      if (wordUsed.length <= options.maxLength) {
        rightSize = true;
      }
    }

    return wordUsed;
  }

  function generateRandomWord() {
    return wordList[randInt(wordList.length)];
  }

  function randInt(lessThan) {
    return Math.floor(Math.random() * lessThan);
  } // No arguments = generate one word


  if (typeof options === 'undefined') {
    return word();
  } // Just a number = return that many words


  if (typeof options === 'number') {
    options = {
      exactly: options
    };
  } // options supported: exactly, min, max, join


  if (options.exactly) {
    options.min = options.exactly;
    options.max = options.exactly;
  } // not a number = one word par string


  if (typeof options.wordsPerString !== 'number') {
    options.wordsPerString = 1;
  } //not a function = returns the raw word


  if (typeof options.formatter !== 'function') {
    options.formatter = word => word;
  } //not a string = separator is a space


  if (typeof options.separator !== 'string') {
    options.separator = ' ';
  }

  var total = options.min + randInt(options.max + 1 - options.min);
  var results = [];
  var token = '';
  var relativeIndex = 0;

  for (var i = 0; i < total * options.wordsPerString; i++) {
    if (relativeIndex === options.wordsPerString - 1) {
      token += options.formatter(word(), relativeIndex);
    } else {
      token += options.formatter(word(), relativeIndex) + options.separator;
    }

    relativeIndex++;

    if ((i + 1) % options.wordsPerString === 0) {
      results.push(token);
      token = '';
      relativeIndex = 0;
    }
  }

  if (typeof options.join === 'string') {
    results = results.join(options.join);
  }

  return results;
}

module.exports = words; // Export the word list as it is often useful

words.wordList = wordList;

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_index_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/index.scss */ "./src/styles/index.scss");
/* harmony import */ var _styles_index_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_styles_index_scss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _scripts_game__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scripts/game */ "./src/scripts/game.js");


document.addEventListener('DOMContentLoaded', function () {
  var canvas = document.getElementById("ship-game");
  var ctx = canvas.getContext('2d');
  var bgCanvas = document.getElementById("bg-canvas");
  var bgCtx = bgCanvas.getContext('2d');
  var pCanvas = document.getElementById("player-screen");
  var pCtx = pCanvas.getContext('2d');
  var inputSection = document.getElementById("input-section");
  var playerWord = document.getElementById('player-word');
  playerWord.autofocus = true;
  inputSection.addEventListener('submit', handleSubmit);
  var newGame = new _scripts_game__WEBPACK_IMPORTED_MODULE_1__["default"](canvas, ctx, bgCtx, pCtx);
  document.addEventListener("keypress", removeSplash);
  var startBtn = document.getElementById('start');
  startBtn.addEventListener("click", removeSplash);

  function removeSplash(e) {
    // debugger
    if (e.key === 'Enter' || e.type === "click") {
      var splash = document.getElementById("splash");
      splash.style.display = 'none';
      document.removeEventListener("keypress", removeSplash);
      startBtn.removeEventListener("click", removeSplash);
      newGame.start();
      playerWord.focus();
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
    newGame.checkWord(playerWord.value.trim());
    inputSection.reset();
  }

  ;
});

/***/ }),

/***/ "./src/scripts/background.js":
/*!***********************************!*\
  !*** ./src/scripts/background.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Background; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Background = /*#__PURE__*/function () {
  function Background(canvas, ctx, speed) {
    _classCallCheck(this, Background);

    this.canvas = canvas;
    this.ctx = ctx; // this.speed = speed;

    this.bImage = new Image();
    this.bImage.src = './src/assets/spritesheet.png';
    this.height = this.canvas.height;
    this.width = this.canvas.width;
    this.bTFrames = [2, 260, 518, 776, 1034];
    this.bBFrames = [2, 260, 518, 776, 1034, 1292];
    this.tFrame = 0;
    this.bFrame = 0; // this.y = 0;
  }

  _createClass(Background, [{
    key: "animate",
    value: function animate() {
      this.ctx.clearRect(0, 0, this.width, this.height);
      this.ctx.drawImage(this.bImage, this.bBFrames[this.bFrame], 226, 256, 222, 0, 0, this.canvas.width, this.canvas.height);
      this.ctx.drawImage(this.bImage, this.bTFrames[this.tFrame], 2, 256, 222, 0, 0, this.canvas.width, this.canvas.height);
      this.bFrame += 1;
      this.tFrame += 1;
      if (this.bFrame > 5) this.bFrame = 0;
      if (this.tFrame > 4) this.tFrame = 0;
    }
  }]);

  return Background;
}();



/***/ }),

/***/ "./src/scripts/enemy.js":
/*!******************************!*\
  !*** ./src/scripts/enemy.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Enemy; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var randomWords = __webpack_require__(/*! random-words */ "./node_modules/random-words/index.js");

var Enemy = /*#__PURE__*/function () {
  function Enemy(canvas, ctx, speed, shipPos) {
    _classCallCheck(this, Enemy);

    this.canvas = canvas;
    this.ctx = ctx;
    this.word = randomWords();
    this.speed = speed;
    this.rendered = true;
    this.shipImg = new Image();
    this.shipImg.src = "./src/assets/tie_fighter.png";
    this.sprites = new Image();
    this.sprites.src = './src/assets/spritesheet.png';
    this.shipPos = shipPos;
    this.dz = 0.1;
    this.dx = this.shipPos[0] / 256;
    this.attacking = false;
    this.atf = 0;
    this.draw = this.draw.bind(this);
    this.attack = this.attack.bind(this);
  }

  _createClass(Enemy, [{
    key: "draw",
    value: function draw() {
      this.ctx.drawImage(this.shipImg, this.dx * this.canvas.width, this.shipPos[1] / 222 * this.canvas.height, this.dz * (this.canvas.width * (40 / 256)), this.dz * (this.canvas.height * (40 / 222)));
      this.ctx.fillStyle = "#FFFFFF";
      this.ctx.font = '20px Red Rose';
      this.ctx.textAlign = "center";
      this.ctx.fillText(this.word, this.dx * this.canvas.width + this.dz * (this.canvas.width * 20 / 256), this.shipPos[1] / 222 * this.canvas.height);
      this.attack();
    }
  }, {
    key: "animate",
    value: function animate() {
      if (this.rendered) {
        if (this.dz < 1) {
          this.dz += this.speed;
          this.dx -= .001;
        }

        this.draw();
      }
    }
  }, {
    key: "attack",
    value: function attack() {
      if (this.dz >= 1) {
        if (this.attacking) {
          this.ctx.drawImage(this.sprites, 771, 450, 245, 68, // (( this.dx * this.canvas.width) - (this.dz *(this.canvas.width * 122/256))), 
          (this.shipPos[0] - 125) / 256 * this.canvas.width, (this.shipPos[1] + 25) / 222 * this.canvas.height, this.canvas.width * 245 / 256, this.canvas.height * ((222 - (this.shipPos[1] + 25)) / 222));
          this.atf += 1;

          if (this.atf > 20) {
            this.attacking = false;
            this.atf = 0;
          }
        }
      }
    }
  }]);

  return Enemy;
}();



/***/ }),

/***/ "./src/scripts/game.js":
/*!*****************************!*\
  !*** ./src/scripts/game.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Game; });
/* harmony import */ var _enemy__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./enemy */ "./src/scripts/enemy.js");
/* harmony import */ var _background__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./background */ "./src/scripts/background.js");
/* harmony import */ var _player__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./player */ "./src/scripts/player.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }





var Game = /*#__PURE__*/function () {
  function Game(canvas, ctx, bgCtx, pCtx) {
    _classCallCheck(this, Game);

    this.canvas = canvas;
    this.ctx = ctx;
    this.bgCtx = bgCtx;
    this.pCtx = pCtx;
    this.background = new _background__WEBPACK_IMPORTED_MODULE_1__["default"](canvas, bgCtx, 1.0);
    this.focused = true;
    this.startGame = false;
    this.ships = [];
    this.player = new _player__WEBPACK_IMPORTED_MODULE_2__["default"](canvas, pCtx);
    this.words = [];
    this.startPositions = [[96, 80], [172, 70], [63, 30], [120, 25], [197, 20]];
    this.usedStartPos = [];
    this.animate = this.animate.bind(this);
    this.animateBackground = this.animateBackground.bind(this);
    this.start = this.start.bind(this);
    this.createEnemy = this.createEnemy.bind(this);
    this.generateEnemies = this.generateEnemies.bind(this);
    this.generateAttacks = this.generateAttacks.bind(this);
    this.enemyAttack = this.enemyAttack.bind(this);
  }

  _createClass(Game, [{
    key: "animateBackground",
    value: function animateBackground() {
      this.bgCtx.canvas.width = window.innerWidth;
      this.bgCtx.canvas.height = window.innerHeight;
      this.pCtx.canvas.width = window.innerWidth;
      this.pCtx.canvas.height = window.innerHeight;
      this.background.animate();
      this.player.animate();
    }
  }, {
    key: "animate",
    value: function animate() {
      this.ctx.canvas.width = window.innerWidth;
      this.ctx.canvas.height = window.innerHeight;

      for (var i = 0; i < this.ships.length; i++) {
        var ship = this.ships[i];

        if (ship.rendered) {
          ship.animate(); // if (ship.dz >= 1) {
          //     this.player.health -= 1;
          //     ship.attacking = true;
          //     // debugger
          // }
        } else {
          this.ships.splice(i, 1);
          this.words.splice(i, 1);
        }
      }

      requestAnimationFrame(this.animate);
    }
  }, {
    key: "start",
    value: function start() {
      var _this = this;

      if (!this.startGame) {
        this.generateEnemies();
        this.generateAttacks();
        this.startGame = true;

        var _playerWord = document.getElementById('player-word');

        _playerWord.autofocus = true;
      }

      window.onblur = function () {
        return _this.focused = false;
      };

      window.onfocus = function () {
        _this.focused = true;

        _this.generateEnemies();

        _this.generateAttacks();
      };

      var playerWord = document.getElementById('player-word');
      playerWord.autofocus = true;
      this.canvas.addEventListener('click', function () {
        return playerWord.focus();
      });
      document.getElementById('bg-canvas').addEventListener('click', function () {
        return playerWord.focus();
      });
      document.getElementById('player-screen').addEventListener('click', function () {
        return playerWord.focus();
      });
      setInterval(this.animateBackground, 125);
      this.animate();
    }
  }, {
    key: "createEnemy",
    value: function createEnemy(canvas, ctx) {
      if (this.startPositions.length) {
        var enemy = new _enemy__WEBPACK_IMPORTED_MODULE_0__["default"](canvas, ctx, .01, this.startPositions[0]);
        this.ships.push(enemy);
        this.words.push(enemy.word);
        var x = this.startPositions.shift();
        this.usedStartPos.push(x);
      }
    }
  }, {
    key: "generateEnemies",
    value: function generateEnemies() {
      var _this2 = this;

      var delay = Math.floor(Math.random() * 5000);

      if (this.focused) {
        setTimeout(function () {
          _this2.createEnemy(_this2.canvas, _this2.ctx);

          _this2.generateEnemies();
        }, delay - .2);
      }
    }
  }, {
    key: "generateAttacks",
    value: function generateAttacks() {
      var _this3 = this;

      var delay = Math.floor(Math.random() * 5000);

      if (this.focused) {
        setTimeout(function () {
          if (_this3.ships.length) _this3.enemyAttack();

          _this3.generateAttacks();
        }, delay - .2);
      }
    }
  }, {
    key: "enemyAttack",
    value: function enemyAttack() {
      var ship = this.ships[Math.floor(Math.random() * this.ships.length)];

      if (!ship.attacking && ship.dz >= 1) {
        ship.attacking = true;
        this.player.health -= 1;
      }
    }
  }, {
    key: "checkWord",
    value: function checkWord(word) {
      var i = this.words.indexOf(word);

      if (i != -1) {
        this.startPositions.push(this.ships[i].shipPos);
        this.ships[i].rendered = false;
        this.player.score += 1;
      }
    }
  }]);

  return Game;
}();



/***/ }),

/***/ "./src/scripts/player.js":
/*!*******************************!*\
  !*** ./src/scripts/player.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Player; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Player = /*#__PURE__*/function () {
  function Player(canvas, ctx) {
    _classCallCheck(this, Player);

    this.canvas = canvas;
    this.ctx = ctx;
    this.pImg = new Image();
    this.pImg.src = "./src/assets/spritesheet.png";
    this.navScreenFrames = [260, 316];
    this.nSF = 0;
    this.health = 10;
    this.scoreFrames = [337, 328, 270, 277, 285, 292, 299, 306, 313, 320];
    this.score = 0;
  }

  _createClass(Player, [{
    key: "animate",
    value: function animate() {
      this.ctx.drawImage(this.pImg, 2, 450, 256, 163, 0, 59 / 222 * this.canvas.height, this.canvas.width, 163 / 222 * this.canvas.height);
      this.ctx.drawImage(this.pImg, this.navScreenFrames[this.nSF], 580, 54, 33, 101 / 256 * this.canvas.width, 176 / 222 * this.canvas.height, 54 / 256 * this.canvas.width, 33 / 222 * this.canvas.height);
      this.nSF += 1;
      if (this.nSF > 1) this.nSF = 0;
      if (this.health <= 9) this.ctx.drawImage(this.pImg, 268, 561, 6, 3, 161 / 256 * this.canvas.width, 153 / 222 * this.canvas.height, 6 / 256 * this.canvas.width, 3 / 222 * this.canvas.height);
      if (this.health <= 8) this.ctx.drawImage(this.pImg, 268, 561, 6, 3, 153 / 256 * this.canvas.width, 153 / 222 * this.canvas.height, 6 / 256 * this.canvas.width, 3 / 222 * this.canvas.height);
      if (this.health <= 7) this.ctx.drawImage(this.pImg, 268, 561, 6, 3, 145 / 256 * this.canvas.width, 153 / 222 * this.canvas.height, 6 / 256 * this.canvas.width, 3 / 222 * this.canvas.height);
      if (this.health <= 6) this.ctx.drawImage(this.pImg, 268, 561, 6, 3, 137 / 256 * this.canvas.width, 153 / 222 * this.canvas.height, 6 / 256 * this.canvas.width, 3 / 222 * this.canvas.height);
      if (this.health <= 5) this.ctx.drawImage(this.pImg, 268, 561, 6, 3, 129 / 256 * this.canvas.width, 153 / 222 * this.canvas.height, 6 / 256 * this.canvas.width, 3 / 222 * this.canvas.height);
      if (this.health <= 4) this.ctx.drawImage(this.pImg, 268, 561, 6, 3, 121 / 256 * this.canvas.width, 153 / 222 * this.canvas.height, 6 / 256 * this.canvas.width, 3 / 222 * this.canvas.height);
      if (this.health <= 3) this.ctx.drawImage(this.pImg, 268, 561, 6, 3, 113 / 256 * this.canvas.width, 153 / 222 * this.canvas.height, 6 / 256 * this.canvas.width, 3 / 222 * this.canvas.height);
      if (this.health <= 2) this.ctx.drawImage(this.pImg, 268, 561, 6, 3, 105 / 256 * this.canvas.width, 153 / 222 * this.canvas.height, 6 / 256 * this.canvas.width, 3 / 222 * this.canvas.height);
      if (this.health <= 1) this.ctx.drawImage(this.pImg, 268, 561, 6, 3, 97 / 256 * this.canvas.width, 153 / 222 * this.canvas.height, 6 / 256 * this.canvas.width, 3 / 222 * this.canvas.height);
      if (this.health <= 0) this.ctx.drawImage(this.pImg, 268, 561, 6, 3, 89 / 256 * this.canvas.width, 153 / 222 * this.canvas.height, 6 / 256 * this.canvas.width, 3 / 222 * this.canvas.height);
      var tens = Math.floor(this.score / 10);
      var ones = this.score % 10;
      this.ctx.drawImage(this.pImg, this.scoreFrames[tens], 571, 6, 7, 169 / 256 * this.canvas.width, 200 / 222 * this.canvas.height, 6 / 256 * this.canvas.width, 7 / 222 * this.canvas.height);
      this.ctx.drawImage(this.pImg, this.scoreFrames[ones], 571, 6, 7, 177 / 256 * this.canvas.width, 200 / 222 * this.canvas.height, 6 / 256 * this.canvas.width, 7 / 222 * this.canvas.height);
    }
  }]);

  return Player;
}();



/***/ }),

/***/ "./src/styles/index.scss":
/*!*******************************!*\
  !*** ./src/styles/index.scss ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3JhbmRvbS13b3Jkcy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMvYmFja2dyb3VuZC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NyaXB0cy9lbmVteS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NyaXB0cy9nYW1lLmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL3BsYXllci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3R5bGVzL2luZGV4LnNjc3MiXSwibmFtZXMiOlsiZG9jdW1lbnQiLCJhZGRFdmVudExpc3RlbmVyIiwiY2FudmFzIiwiZ2V0RWxlbWVudEJ5SWQiLCJjdHgiLCJnZXRDb250ZXh0IiwiYmdDYW52YXMiLCJiZ0N0eCIsInBDYW52YXMiLCJwQ3R4IiwiaW5wdXRTZWN0aW9uIiwicGxheWVyV29yZCIsImF1dG9mb2N1cyIsImhhbmRsZVN1Ym1pdCIsIm5ld0dhbWUiLCJHYW1lIiwicmVtb3ZlU3BsYXNoIiwic3RhcnRCdG4iLCJlIiwia2V5IiwidHlwZSIsInNwbGFzaCIsInN0eWxlIiwiZGlzcGxheSIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJzdGFydCIsImZvY3VzIiwicHJldmVudERlZmF1bHQiLCJjaGVja1dvcmQiLCJ2YWx1ZSIsInRyaW0iLCJyZXNldCIsIkJhY2tncm91bmQiLCJzcGVlZCIsImJJbWFnZSIsIkltYWdlIiwic3JjIiwiaGVpZ2h0Iiwid2lkdGgiLCJiVEZyYW1lcyIsImJCRnJhbWVzIiwidEZyYW1lIiwiYkZyYW1lIiwiY2xlYXJSZWN0IiwiZHJhd0ltYWdlIiwicmFuZG9tV29yZHMiLCJyZXF1aXJlIiwiRW5lbXkiLCJzaGlwUG9zIiwid29yZCIsInJlbmRlcmVkIiwic2hpcEltZyIsInNwcml0ZXMiLCJkeiIsImR4IiwiYXR0YWNraW5nIiwiYXRmIiwiZHJhdyIsImJpbmQiLCJhdHRhY2siLCJmaWxsU3R5bGUiLCJmb250IiwidGV4dEFsaWduIiwiZmlsbFRleHQiLCJiYWNrZ3JvdW5kIiwiZm9jdXNlZCIsInN0YXJ0R2FtZSIsInNoaXBzIiwicGxheWVyIiwiUGxheWVyIiwid29yZHMiLCJzdGFydFBvc2l0aW9ucyIsInVzZWRTdGFydFBvcyIsImFuaW1hdGUiLCJhbmltYXRlQmFja2dyb3VuZCIsImNyZWF0ZUVuZW15IiwiZ2VuZXJhdGVFbmVtaWVzIiwiZ2VuZXJhdGVBdHRhY2tzIiwiZW5lbXlBdHRhY2siLCJ3aW5kb3ciLCJpbm5lcldpZHRoIiwiaW5uZXJIZWlnaHQiLCJpIiwibGVuZ3RoIiwic2hpcCIsInNwbGljZSIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsIm9uYmx1ciIsIm9uZm9jdXMiLCJzZXRJbnRlcnZhbCIsImVuZW15IiwicHVzaCIsIngiLCJzaGlmdCIsImRlbGF5IiwiTWF0aCIsImZsb29yIiwicmFuZG9tIiwic2V0VGltZW91dCIsImhlYWx0aCIsImluZGV4T2YiLCJzY29yZSIsInBJbWciLCJuYXZTY3JlZW5GcmFtZXMiLCJuU0YiLCJzY29yZUZyYW1lcyIsInRlbnMiLCJvbmVzIl0sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFB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eEIsRUFBOEIsS0FBS0csV0FBTCxDQUFpQkMsSUFBakIsQ0FBOUIsRUFBc0QsR0FBdEQsRUFBMkQsQ0FBM0QsRUFBOEQsQ0FBOUQsRUFBbUUsTUFBTSxHQUFQLEdBQWMsS0FBS3hHLE1BQUwsQ0FBWW9DLEtBQTVGLEVBQXNHLE1BQU0sR0FBUCxHQUFjLEtBQUtwQyxNQUFMLENBQVltQyxNQUEvSCxFQUEwSSxJQUFJLEdBQUwsR0FBWSxLQUFLbkMsTUFBTCxDQUFZb0MsS0FBakssRUFBMkssSUFBSSxHQUFMLEdBQVksS0FBS3BDLE1BQUwsQ0FBWW1DLE1BQWxNO0FBQ0EsV0FBS2pDLEdBQUwsQ0FBU3dDLFNBQVQsQ0FBbUIsS0FBSzBELElBQXhCLEVBQThCLEtBQUtHLFdBQUwsQ0FBaUJFLElBQWpCLENBQTlCLEVBQXNELEdBQXRELEVBQTJELENBQTNELEVBQThELENBQTlELEVBQW1FLE1BQU0sR0FBUCxHQUFjLEtBQUt6RyxNQUFMLENBQVlvQyxLQUE1RixFQUFzRyxNQUFNLEdBQVAsR0FBYyxLQUFLcEMsTUFBTCxDQUFZbUMsTUFBL0gsRUFBMEksSUFBSSxHQUFMLEdBQVksS0FBS25DLE1BQUwsQ0FBWW9DLEtBQWpLLEVBQTJLLElBQUksR0FBTCxHQUFZLEtBQUtwQyxNQUFMLENBQVltQyxNQUFsTTtBQUVIOzs7Ozs7Ozs7Ozs7Ozs7OztBQ3JDSCx1QyIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCIvZGlzdC9cIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCJ2YXIgd29yZExpc3QgPSBbLy8gQm9ycm93ZWQgZnJvbSB4a2NkIHBhc3N3b3JkIGdlbmVyYXRvciB3aGljaCBib3Jyb3dlZCBpdCBmcm9tIHdoZXJldmVyXG5cImFiaWxpdHlcIiwgXCJhYmxlXCIsIFwiYWJvYXJkXCIsIFwiYWJvdXRcIiwgXCJhYm92ZVwiLCBcImFjY2VwdFwiLCBcImFjY2lkZW50XCIsIFwiYWNjb3JkaW5nXCIsIFwiYWNjb3VudFwiLCBcImFjY3VyYXRlXCIsIFwiYWNyZXNcIiwgXCJhY3Jvc3NcIiwgXCJhY3RcIiwgXCJhY3Rpb25cIiwgXCJhY3RpdmVcIiwgXCJhY3Rpdml0eVwiLCBcImFjdHVhbFwiLCBcImFjdHVhbGx5XCIsIFwiYWRkXCIsIFwiYWRkaXRpb25cIiwgXCJhZGRpdGlvbmFsXCIsIFwiYWRqZWN0aXZlXCIsIFwiYWR1bHRcIiwgXCJhZHZlbnR1cmVcIiwgXCJhZHZpY2VcIiwgXCJhZmZlY3RcIiwgXCJhZnJhaWRcIiwgXCJhZnRlclwiLCBcImFmdGVybm9vblwiLCBcImFnYWluXCIsIFwiYWdhaW5zdFwiLCBcImFnZVwiLCBcImFnb1wiLCBcImFncmVlXCIsIFwiYWhlYWRcIiwgXCJhaWRcIiwgXCJhaXJcIiwgXCJhaXJwbGFuZVwiLCBcImFsaWtlXCIsIFwiYWxpdmVcIiwgXCJhbGxcIiwgXCJhbGxvd1wiLCBcImFsbW9zdFwiLCBcImFsb25lXCIsIFwiYWxvbmdcIiwgXCJhbG91ZFwiLCBcImFscGhhYmV0XCIsIFwiYWxyZWFkeVwiLCBcImFsc29cIiwgXCJhbHRob3VnaFwiLCBcImFtXCIsIFwiYW1vbmdcIiwgXCJhbW91bnRcIiwgXCJhbmNpZW50XCIsIFwiYW5nbGVcIiwgXCJhbmdyeVwiLCBcImFuaW1hbFwiLCBcImFubm91bmNlZFwiLCBcImFub3RoZXJcIiwgXCJhbnN3ZXJcIiwgXCJhbnRzXCIsIFwiYW55XCIsIFwiYW55Ym9keVwiLCBcImFueW9uZVwiLCBcImFueXRoaW5nXCIsIFwiYW55d2F5XCIsIFwiYW55d2hlcmVcIiwgXCJhcGFydFwiLCBcImFwYXJ0bWVudFwiLCBcImFwcGVhcmFuY2VcIiwgXCJhcHBsZVwiLCBcImFwcGxpZWRcIiwgXCJhcHByb3ByaWF0ZVwiLCBcImFyZVwiLCBcImFyZWFcIiwgXCJhcm1cIiwgXCJhcm15XCIsIFwiYXJvdW5kXCIsIFwiYXJyYW5nZVwiLCBcImFycmFuZ2VtZW50XCIsIFwiYXJyaXZlXCIsIFwiYXJyb3dcIiwgXCJhcnRcIiwgXCJhcnRpY2xlXCIsIFwiYXNcIiwgXCJhc2lkZVwiLCBcImFza1wiLCBcImFzbGVlcFwiLCBcImF0XCIsIFwiYXRlXCIsIFwiYXRtb3NwaGVyZVwiLCBcImF0b21cIiwgXCJhdG9taWNcIiwgXCJhdHRhY2hlZFwiLCBcImF0dGFja1wiLCBcImF0dGVtcHRcIiwgXCJhdHRlbnRpb25cIiwgXCJhdWRpZW5jZVwiLCBcImF1dGhvclwiLCBcImF1dG9tb2JpbGVcIiwgXCJhdmFpbGFibGVcIiwgXCJhdmVyYWdlXCIsIFwiYXZvaWRcIiwgXCJhd2FyZVwiLCBcImF3YXlcIiwgXCJiYWJ5XCIsIFwiYmFja1wiLCBcImJhZFwiLCBcImJhZGx5XCIsIFwiYmFnXCIsIFwiYmFsYW5jZVwiLCBcImJhbGxcIiwgXCJiYWxsb29uXCIsIFwiYmFuZFwiLCBcImJhbmtcIiwgXCJiYXJcIiwgXCJiYXJlXCIsIFwiYmFya1wiLCBcImJhcm5cIiwgXCJiYXNlXCIsIFwiYmFzZWJhbGxcIiwgXCJiYXNpY1wiLCBcImJhc2lzXCIsIFwiYmFza2V0XCIsIFwiYmF0XCIsIFwiYmF0dGxlXCIsIFwiYmVcIiwgXCJiZWFuXCIsIFwiYmVhclwiLCBcImJlYXRcIiwgXCJiZWF1dGlmdWxcIiwgXCJiZWF1dHlcIiwgXCJiZWNhbWVcIiwgXCJiZWNhdXNlXCIsIFwiYmVjb21lXCIsIFwiYmVjb21pbmdcIiwgXCJiZWVcIiwgXCJiZWVuXCIsIFwiYmVmb3JlXCIsIFwiYmVnYW5cIiwgXCJiZWdpbm5pbmdcIiwgXCJiZWd1blwiLCBcImJlaGF2aW9yXCIsIFwiYmVoaW5kXCIsIFwiYmVpbmdcIiwgXCJiZWxpZXZlZFwiLCBcImJlbGxcIiwgXCJiZWxvbmdcIiwgXCJiZWxvd1wiLCBcImJlbHRcIiwgXCJiZW5kXCIsIFwiYmVuZWF0aFwiLCBcImJlbnRcIiwgXCJiZXNpZGVcIiwgXCJiZXN0XCIsIFwiYmV0XCIsIFwiYmV0dGVyXCIsIFwiYmV0d2VlblwiLCBcImJleW9uZFwiLCBcImJpY3ljbGVcIiwgXCJiaWdnZXJcIiwgXCJiaWdnZXN0XCIsIFwiYmlsbFwiLCBcImJpcmRzXCIsIFwiYmlydGhcIiwgXCJiaXJ0aGRheVwiLCBcImJpdFwiLCBcImJpdGVcIiwgXCJibGFja1wiLCBcImJsYW5rXCIsIFwiYmxhbmtldFwiLCBcImJsZXdcIiwgXCJibGluZFwiLCBcImJsb2NrXCIsIFwiYmxvb2RcIiwgXCJibG93XCIsIFwiYmx1ZVwiLCBcImJvYXJkXCIsIFwiYm9hdFwiLCBcImJvZHlcIiwgXCJib25lXCIsIFwiYm9va1wiLCBcImJvcmRlclwiLCBcImJvcm5cIiwgXCJib3RoXCIsIFwiYm90dGxlXCIsIFwiYm90dG9tXCIsIFwiYm91bmRcIiwgXCJib3dcIiwgXCJib3dsXCIsIFwiYm94XCIsIFwiYm95XCIsIFwiYnJhaW5cIiwgXCJicmFuY2hcIiwgXCJicmFzc1wiLCBcImJyYXZlXCIsIFwiYnJlYWRcIiwgXCJicmVha1wiLCBcImJyZWFrZmFzdFwiLCBcImJyZWF0aFwiLCBcImJyZWF0aGVcIiwgXCJicmVhdGhpbmdcIiwgXCJicmVlemVcIiwgXCJicmlja1wiLCBcImJyaWRnZVwiLCBcImJyaWVmXCIsIFwiYnJpZ2h0XCIsIFwiYnJpbmdcIiwgXCJicm9hZFwiLCBcImJyb2tlXCIsIFwiYnJva2VuXCIsIFwiYnJvdGhlclwiLCBcImJyb3VnaHRcIiwgXCJicm93blwiLCBcImJydXNoXCIsIFwiYnVmZmFsb1wiLCBcImJ1aWxkXCIsIFwiYnVpbGRpbmdcIiwgXCJidWlsdFwiLCBcImJ1cmllZFwiLCBcImJ1cm5cIiwgXCJidXJzdFwiLCBcImJ1c1wiLCBcImJ1c2hcIiwgXCJidXNpbmVzc1wiLCBcImJ1c3lcIiwgXCJidXRcIiwgXCJidXR0ZXJcIiwgXCJidXlcIiwgXCJieVwiLCBcImNhYmluXCIsIFwiY2FnZVwiLCBcImNha2VcIiwgXCJjYWxsXCIsIFwiY2FsbVwiLCBcImNhbWVcIiwgXCJjYW1lcmFcIiwgXCJjYW1wXCIsIFwiY2FuXCIsIFwiY2FuYWxcIiwgXCJjYW5ub3RcIiwgXCJjYXBcIiwgXCJjYXBpdGFsXCIsIFwiY2FwdGFpblwiLCBcImNhcHR1cmVkXCIsIFwiY2FyXCIsIFwiY2FyYm9uXCIsIFwiY2FyZFwiLCBcImNhcmVcIiwgXCJjYXJlZnVsXCIsIFwiY2FyZWZ1bGx5XCIsIFwiY2FycmllZFwiLCBcImNhcnJ5XCIsIFwiY2FzZVwiLCBcImNhc3RcIiwgXCJjYXN0bGVcIiwgXCJjYXRcIiwgXCJjYXRjaFwiLCBcImNhdHRsZVwiLCBcImNhdWdodFwiLCBcImNhdXNlXCIsIFwiY2F2ZVwiLCBcImNlbGxcIiwgXCJjZW50XCIsIFwiY2VudGVyXCIsIFwiY2VudHJhbFwiLCBcImNlbnR1cnlcIiwgXCJjZXJ0YWluXCIsIFwiY2VydGFpbmx5XCIsIFwiY2hhaW5cIiwgXCJjaGFpclwiLCBcImNoYW1iZXJcIiwgXCJjaGFuY2VcIiwgXCJjaGFuZ2VcIiwgXCJjaGFuZ2luZ1wiLCBcImNoYXB0ZXJcIiwgXCJjaGFyYWN0ZXJcIiwgXCJjaGFyYWN0ZXJpc3RpY1wiLCBcImNoYXJnZVwiLCBcImNoYXJ0XCIsIFwiY2hlY2tcIiwgXCJjaGVlc2VcIiwgXCJjaGVtaWNhbFwiLCBcImNoZXN0XCIsIFwiY2hpY2tlblwiLCBcImNoaWVmXCIsIFwiY2hpbGRcIiwgXCJjaGlsZHJlblwiLCBcImNob2ljZVwiLCBcImNob29zZVwiLCBcImNob3NlXCIsIFwiY2hvc2VuXCIsIFwiY2h1cmNoXCIsIFwiY2lyY2xlXCIsIFwiY2lyY3VzXCIsIFwiY2l0aXplblwiLCBcImNpdHlcIiwgXCJjbGFzc1wiLCBcImNsYXNzcm9vbVwiLCBcImNsYXdzXCIsIFwiY2xheVwiLCBcImNsZWFuXCIsIFwiY2xlYXJcIiwgXCJjbGVhcmx5XCIsIFwiY2xpbWF0ZVwiLCBcImNsaW1iXCIsIFwiY2xvY2tcIiwgXCJjbG9zZVwiLCBcImNsb3NlbHlcIiwgXCJjbG9zZXJcIiwgXCJjbG90aFwiLCBcImNsb3RoZXNcIiwgXCJjbG90aGluZ1wiLCBcImNsb3VkXCIsIFwiY2x1YlwiLCBcImNvYWNoXCIsIFwiY29hbFwiLCBcImNvYXN0XCIsIFwiY29hdFwiLCBcImNvZmZlZVwiLCBcImNvbGRcIiwgXCJjb2xsZWN0XCIsIFwiY29sbGVnZVwiLCBcImNvbG9ueVwiLCBcImNvbG9yXCIsIFwiY29sdW1uXCIsIFwiY29tYmluYXRpb25cIiwgXCJjb21iaW5lXCIsIFwiY29tZVwiLCBcImNvbWZvcnRhYmxlXCIsIFwiY29taW5nXCIsIFwiY29tbWFuZFwiLCBcImNvbW1vblwiLCBcImNvbW11bml0eVwiLCBcImNvbXBhbnlcIiwgXCJjb21wYXJlXCIsIFwiY29tcGFzc1wiLCBcImNvbXBsZXRlXCIsIFwiY29tcGxldGVseVwiLCBcImNvbXBsZXhcIiwgXCJjb21wb3NlZFwiLCBcImNvbXBvc2l0aW9uXCIsIFwiY29tcG91bmRcIiwgXCJjb25jZXJuZWRcIiwgXCJjb25kaXRpb25cIiwgXCJjb25ncmVzc1wiLCBcImNvbm5lY3RlZFwiLCBcImNvbnNpZGVyXCIsIFwiY29uc2lzdFwiLCBcImNvbnNvbmFudFwiLCBcImNvbnN0YW50bHlcIiwgXCJjb25zdHJ1Y3Rpb25cIiwgXCJjb250YWluXCIsIFwiY29udGluZW50XCIsIFwiY29udGludWVkXCIsIFwiY29udHJhc3RcIiwgXCJjb250cm9sXCIsIFwiY29udmVyc2F0aW9uXCIsIFwiY29va1wiLCBcImNvb2tpZXNcIiwgXCJjb29sXCIsIFwiY29wcGVyXCIsIFwiY29weVwiLCBcImNvcm5cIiwgXCJjb3JuZXJcIiwgXCJjb3JyZWN0XCIsIFwiY29ycmVjdGx5XCIsIFwiY29zdFwiLCBcImNvdHRvblwiLCBcImNvdWxkXCIsIFwiY291bnRcIiwgXCJjb3VudHJ5XCIsIFwiY291cGxlXCIsIFwiY291cmFnZVwiLCBcImNvdXJzZVwiLCBcImNvdXJ0XCIsIFwiY292ZXJcIiwgXCJjb3dcIiwgXCJjb3dib3lcIiwgXCJjcmFja1wiLCBcImNyZWFtXCIsIFwiY3JlYXRlXCIsIFwiY3JlYXR1cmVcIiwgXCJjcmV3XCIsIFwiY3JvcFwiLCBcImNyb3NzXCIsIFwiY3Jvd2RcIiwgXCJjcnlcIiwgXCJjdXBcIiwgXCJjdXJpb3VzXCIsIFwiY3VycmVudFwiLCBcImN1cnZlXCIsIFwiY3VzdG9tc1wiLCBcImN1dFwiLCBcImN1dHRpbmdcIiwgXCJkYWlseVwiLCBcImRhbWFnZVwiLCBcImRhbmNlXCIsIFwiZGFuZ2VyXCIsIFwiZGFuZ2Vyb3VzXCIsIFwiZGFya1wiLCBcImRhcmtuZXNzXCIsIFwiZGF0ZVwiLCBcImRhdWdodGVyXCIsIFwiZGF3blwiLCBcImRheVwiLCBcImRlYWRcIiwgXCJkZWFsXCIsIFwiZGVhclwiLCBcImRlYXRoXCIsIFwiZGVjaWRlXCIsIFwiZGVjbGFyZWRcIiwgXCJkZWVwXCIsIFwiZGVlcGx5XCIsIFwiZGVlclwiLCBcImRlZmluaXRpb25cIiwgXCJkZWdyZWVcIiwgXCJkZXBlbmRcIiwgXCJkZXB0aFwiLCBcImRlc2NyaWJlXCIsIFwiZGVzZXJ0XCIsIFwiZGVzaWduXCIsIFwiZGVza1wiLCBcImRldGFpbFwiLCBcImRldGVybWluZVwiLCBcImRldmVsb3BcIiwgXCJkZXZlbG9wbWVudFwiLCBcImRpYWdyYW1cIiwgXCJkaWFtZXRlclwiLCBcImRpZFwiLCBcImRpZVwiLCBcImRpZmZlclwiLCBcImRpZmZlcmVuY2VcIiwgXCJkaWZmZXJlbnRcIiwgXCJkaWZmaWN1bHRcIiwgXCJkaWZmaWN1bHR5XCIsIFwiZGlnXCIsIFwiZGlubmVyXCIsIFwiZGlyZWN0XCIsIFwiZGlyZWN0aW9uXCIsIFwiZGlyZWN0bHlcIiwgXCJkaXJ0XCIsIFwiZGlydHlcIiwgXCJkaXNhcHBlYXJcIiwgXCJkaXNjb3ZlclwiLCBcImRpc2NvdmVyeVwiLCBcImRpc2N1c3NcIiwgXCJkaXNjdXNzaW9uXCIsIFwiZGlzZWFzZVwiLCBcImRpc2hcIiwgXCJkaXN0YW5jZVwiLCBcImRpc3RhbnRcIiwgXCJkaXZpZGVcIiwgXCJkaXZpc2lvblwiLCBcImRvXCIsIFwiZG9jdG9yXCIsIFwiZG9lc1wiLCBcImRvZ1wiLCBcImRvaW5nXCIsIFwiZG9sbFwiLCBcImRvbGxhclwiLCBcImRvbmVcIiwgXCJkb25rZXlcIiwgXCJkb29yXCIsIFwiZG90XCIsIFwiZG91YmxlXCIsIFwiZG91YnRcIiwgXCJkb3duXCIsIFwiZG96ZW5cIiwgXCJkcmF3XCIsIFwiZHJhd25cIiwgXCJkcmVhbVwiLCBcImRyZXNzXCIsIFwiZHJld1wiLCBcImRyaWVkXCIsIFwiZHJpbmtcIiwgXCJkcml2ZVwiLCBcImRyaXZlblwiLCBcImRyaXZlclwiLCBcImRyaXZpbmdcIiwgXCJkcm9wXCIsIFwiZHJvcHBlZFwiLCBcImRyb3ZlXCIsIFwiZHJ5XCIsIFwiZHVja1wiLCBcImR1ZVwiLCBcImR1Z1wiLCBcImR1bGxcIiwgXCJkdXJpbmdcIiwgXCJkdXN0XCIsIFwiZHV0eVwiLCBcImVhY2hcIiwgXCJlYWdlclwiLCBcImVhclwiLCBcImVhcmxpZXJcIiwgXCJlYXJseVwiLCBcImVhcm5cIiwgXCJlYXJ0aFwiLCBcImVhc2llclwiLCBcImVhc2lseVwiLCBcImVhc3RcIiwgXCJlYXN5XCIsIFwiZWF0XCIsIFwiZWF0ZW5cIiwgXCJlZGdlXCIsIFwiZWR1Y2F0aW9uXCIsIFwiZWZmZWN0XCIsIFwiZWZmb3J0XCIsIFwiZWdnXCIsIFwiZWlnaHRcIiwgXCJlaXRoZXJcIiwgXCJlbGVjdHJpY1wiLCBcImVsZWN0cmljaXR5XCIsIFwiZWxlbWVudFwiLCBcImVsZXBoYW50XCIsIFwiZWxldmVuXCIsIFwiZWxzZVwiLCBcImVtcHR5XCIsIFwiZW5kXCIsIFwiZW5lbXlcIiwgXCJlbmVyZ3lcIiwgXCJlbmdpbmVcIiwgXCJlbmdpbmVlclwiLCBcImVuam95XCIsIFwiZW5vdWdoXCIsIFwiZW50ZXJcIiwgXCJlbnRpcmVcIiwgXCJlbnRpcmVseVwiLCBcImVudmlyb25tZW50XCIsIFwiZXF1YWxcIiwgXCJlcXVhbGx5XCIsIFwiZXF1YXRvclwiLCBcImVxdWlwbWVudFwiLCBcImVzY2FwZVwiLCBcImVzcGVjaWFsbHlcIiwgXCJlc3NlbnRpYWxcIiwgXCJlc3RhYmxpc2hcIiwgXCJldmVuXCIsIFwiZXZlbmluZ1wiLCBcImV2ZW50XCIsIFwiZXZlbnR1YWxseVwiLCBcImV2ZXJcIiwgXCJldmVyeVwiLCBcImV2ZXJ5Ym9keVwiLCBcImV2ZXJ5b25lXCIsIFwiZXZlcnl0aGluZ1wiLCBcImV2ZXJ5d2hlcmVcIiwgXCJldmlkZW5jZVwiLCBcImV4YWN0XCIsIFwiZXhhY3RseVwiLCBcImV4YW1pbmVcIiwgXCJleGFtcGxlXCIsIFwiZXhjZWxsZW50XCIsIFwiZXhjZXB0XCIsIFwiZXhjaGFuZ2VcIiwgXCJleGNpdGVkXCIsIFwiZXhjaXRlbWVudFwiLCBcImV4Y2l0aW5nXCIsIFwiZXhjbGFpbWVkXCIsIFwiZXhlcmNpc2VcIiwgXCJleGlzdFwiLCBcImV4cGVjdFwiLCBcImV4cGVyaWVuY2VcIiwgXCJleHBlcmltZW50XCIsIFwiZXhwbGFpblwiLCBcImV4cGxhbmF0aW9uXCIsIFwiZXhwbG9yZVwiLCBcImV4cHJlc3NcIiwgXCJleHByZXNzaW9uXCIsIFwiZXh0cmFcIiwgXCJleWVcIiwgXCJmYWNlXCIsIFwiZmFjaW5nXCIsIFwiZmFjdFwiLCBcImZhY3RvclwiLCBcImZhY3RvcnlcIiwgXCJmYWlsZWRcIiwgXCJmYWlyXCIsIFwiZmFpcmx5XCIsIFwiZmFsbFwiLCBcImZhbGxlblwiLCBcImZhbWlsaWFyXCIsIFwiZmFtaWx5XCIsIFwiZmFtb3VzXCIsIFwiZmFyXCIsIFwiZmFybVwiLCBcImZhcm1lclwiLCBcImZhcnRoZXJcIiwgXCJmYXN0XCIsIFwiZmFzdGVuZWRcIiwgXCJmYXN0ZXJcIiwgXCJmYXRcIiwgXCJmYXRoZXJcIiwgXCJmYXZvcml0ZVwiLCBcImZlYXJcIiwgXCJmZWF0aGVyc1wiLCBcImZlYXR1cmVcIiwgXCJmZWRcIiwgXCJmZWVkXCIsIFwiZmVlbFwiLCBcImZlZXRcIiwgXCJmZWxsXCIsIFwiZmVsbG93XCIsIFwiZmVsdFwiLCBcImZlbmNlXCIsIFwiZmV3XCIsIFwiZmV3ZXJcIiwgXCJmaWVsZFwiLCBcImZpZXJjZVwiLCBcImZpZnRlZW5cIiwgXCJmaWZ0aFwiLCBcImZpZnR5XCIsIFwiZmlnaHRcIiwgXCJmaWdodGluZ1wiLCBcImZpZ3VyZVwiLCBcImZpbGxcIiwgXCJmaWxtXCIsIFwiZmluYWxcIiwgXCJmaW5hbGx5XCIsIFwiZmluZFwiLCBcImZpbmVcIiwgXCJmaW5lc3RcIiwgXCJmaW5nZXJcIiwgXCJmaW5pc2hcIiwgXCJmaXJlXCIsIFwiZmlyZXBsYWNlXCIsIFwiZmlybVwiLCBcImZpcnN0XCIsIFwiZmlzaFwiLCBcImZpdmVcIiwgXCJmaXhcIiwgXCJmbGFnXCIsIFwiZmxhbWVcIiwgXCJmbGF0XCIsIFwiZmxld1wiLCBcImZsaWVzXCIsIFwiZmxpZ2h0XCIsIFwiZmxvYXRpbmdcIiwgXCJmbG9vclwiLCBcImZsb3dcIiwgXCJmbG93ZXJcIiwgXCJmbHlcIiwgXCJmb2dcIiwgXCJmb2xrc1wiLCBcImZvbGxvd1wiLCBcImZvb2RcIiwgXCJmb290XCIsIFwiZm9vdGJhbGxcIiwgXCJmb3JcIiwgXCJmb3JjZVwiLCBcImZvcmVpZ25cIiwgXCJmb3Jlc3RcIiwgXCJmb3JnZXRcIiwgXCJmb3Jnb3RcIiwgXCJmb3Jnb3R0ZW5cIiwgXCJmb3JtXCIsIFwiZm9ybWVyXCIsIFwiZm9ydFwiLCBcImZvcnRoXCIsIFwiZm9ydHlcIiwgXCJmb3J3YXJkXCIsIFwiZm91Z2h0XCIsIFwiZm91bmRcIiwgXCJmb3VyXCIsIFwiZm91cnRoXCIsIFwiZm94XCIsIFwiZnJhbWVcIiwgXCJmcmVlXCIsIFwiZnJlZWRvbVwiLCBcImZyZXF1ZW50bHlcIiwgXCJmcmVzaFwiLCBcImZyaWVuZFwiLCBcImZyaWVuZGx5XCIsIFwiZnJpZ2h0ZW5cIiwgXCJmcm9nXCIsIFwiZnJvbVwiLCBcImZyb250XCIsIFwiZnJvemVuXCIsIFwiZnJ1aXRcIiwgXCJmdWVsXCIsIFwiZnVsbFwiLCBcImZ1bGx5XCIsIFwiZnVuXCIsIFwiZnVuY3Rpb25cIiwgXCJmdW5ueVwiLCBcImZ1clwiLCBcImZ1cm5pdHVyZVwiLCBcImZ1cnRoZXJcIiwgXCJmdXR1cmVcIiwgXCJnYWluXCIsIFwiZ2FtZVwiLCBcImdhcmFnZVwiLCBcImdhcmRlblwiLCBcImdhc1wiLCBcImdhc29saW5lXCIsIFwiZ2F0ZVwiLCBcImdhdGhlclwiLCBcImdhdmVcIiwgXCJnZW5lcmFsXCIsIFwiZ2VuZXJhbGx5XCIsIFwiZ2VudGxlXCIsIFwiZ2VudGx5XCIsIFwiZ2V0XCIsIFwiZ2V0dGluZ1wiLCBcImdpYW50XCIsIFwiZ2lmdFwiLCBcImdpcmxcIiwgXCJnaXZlXCIsIFwiZ2l2ZW5cIiwgXCJnaXZpbmdcIiwgXCJnbGFkXCIsIFwiZ2xhc3NcIiwgXCJnbG9iZVwiLCBcImdvXCIsIFwiZ29lc1wiLCBcImdvbGRcIiwgXCJnb2xkZW5cIiwgXCJnb25lXCIsIFwiZ29vZFwiLCBcImdvb3NlXCIsIFwiZ290XCIsIFwiZ292ZXJubWVudFwiLCBcImdyYWJiZWRcIiwgXCJncmFkZVwiLCBcImdyYWR1YWxseVwiLCBcImdyYWluXCIsIFwiZ3JhbmRmYXRoZXJcIiwgXCJncmFuZG1vdGhlclwiLCBcImdyYXBoXCIsIFwiZ3Jhc3NcIiwgXCJncmF2aXR5XCIsIFwiZ3JheVwiLCBcImdyZWF0XCIsIFwiZ3JlYXRlclwiLCBcImdyZWF0ZXN0XCIsIFwiZ3JlYXRseVwiLCBcImdyZWVuXCIsIFwiZ3Jld1wiLCBcImdyb3VuZFwiLCBcImdyb3VwXCIsIFwiZ3Jvd1wiLCBcImdyb3duXCIsIFwiZ3Jvd3RoXCIsIFwiZ3VhcmRcIiwgXCJndWVzc1wiLCBcImd1aWRlXCIsIFwiZ3VsZlwiLCBcImd1blwiLCBcImhhYml0XCIsIFwiaGFkXCIsIFwiaGFpclwiLCBcImhhbGZcIiwgXCJoYWxmd2F5XCIsIFwiaGFsbFwiLCBcImhhbmRcIiwgXCJoYW5kbGVcIiwgXCJoYW5kc29tZVwiLCBcImhhbmdcIiwgXCJoYXBwZW5cIiwgXCJoYXBwZW5lZFwiLCBcImhhcHBpbHlcIiwgXCJoYXBweVwiLCBcImhhcmJvclwiLCBcImhhcmRcIiwgXCJoYXJkZXJcIiwgXCJoYXJkbHlcIiwgXCJoYXNcIiwgXCJoYXRcIiwgXCJoYXZlXCIsIFwiaGF2aW5nXCIsIFwiaGF5XCIsIFwiaGVcIiwgXCJoZWFkZWRcIiwgXCJoZWFkaW5nXCIsIFwiaGVhbHRoXCIsIFwiaGVhcmRcIiwgXCJoZWFyaW5nXCIsIFwiaGVhcnRcIiwgXCJoZWF0XCIsIFwiaGVhdnlcIiwgXCJoZWlnaHRcIiwgXCJoZWxkXCIsIFwiaGVsbG9cIiwgXCJoZWxwXCIsIFwiaGVscGZ1bFwiLCBcImhlclwiLCBcImhlcmRcIiwgXCJoZXJlXCIsIFwiaGVyc2VsZlwiLCBcImhpZGRlblwiLCBcImhpZGVcIiwgXCJoaWdoXCIsIFwiaGlnaGVyXCIsIFwiaGlnaGVzdFwiLCBcImhpZ2h3YXlcIiwgXCJoaWxsXCIsIFwiaGltXCIsIFwiaGltc2VsZlwiLCBcImhpc1wiLCBcImhpc3RvcnlcIiwgXCJoaXRcIiwgXCJob2xkXCIsIFwiaG9sZVwiLCBcImhvbGxvd1wiLCBcImhvbWVcIiwgXCJob25vclwiLCBcImhvcGVcIiwgXCJob3JuXCIsIFwiaG9yc2VcIiwgXCJob3NwaXRhbFwiLCBcImhvdFwiLCBcImhvdXJcIiwgXCJob3VzZVwiLCBcImhvd1wiLCBcImhvd2V2ZXJcIiwgXCJodWdlXCIsIFwiaHVtYW5cIiwgXCJodW5kcmVkXCIsIFwiaHVuZ1wiLCBcImh1bmdyeVwiLCBcImh1bnRcIiwgXCJodW50ZXJcIiwgXCJodXJyaWVkXCIsIFwiaHVycnlcIiwgXCJodXJ0XCIsIFwiaHVzYmFuZFwiLCBcImljZVwiLCBcImlkZWFcIiwgXCJpZGVudGl0eVwiLCBcImlmXCIsIFwiaWxsXCIsIFwiaW1hZ2VcIiwgXCJpbWFnaW5lXCIsIFwiaW1tZWRpYXRlbHlcIiwgXCJpbXBvcnRhbmNlXCIsIFwiaW1wb3J0YW50XCIsIFwiaW1wb3NzaWJsZVwiLCBcImltcHJvdmVcIiwgXCJpblwiLCBcImluY2hcIiwgXCJpbmNsdWRlXCIsIFwiaW5jbHVkaW5nXCIsIFwiaW5jb21lXCIsIFwiaW5jcmVhc2VcIiwgXCJpbmRlZWRcIiwgXCJpbmRlcGVuZGVudFwiLCBcImluZGljYXRlXCIsIFwiaW5kaXZpZHVhbFwiLCBcImluZHVzdHJpYWxcIiwgXCJpbmR1c3RyeVwiLCBcImluZmx1ZW5jZVwiLCBcImluZm9ybWF0aW9uXCIsIFwiaW5zaWRlXCIsIFwiaW5zdGFuY2VcIiwgXCJpbnN0YW50XCIsIFwiaW5zdGVhZFwiLCBcImluc3RydW1lbnRcIiwgXCJpbnRlcmVzdFwiLCBcImludGVyaW9yXCIsIFwiaW50b1wiLCBcImludHJvZHVjZWRcIiwgXCJpbnZlbnRlZFwiLCBcImludm9sdmVkXCIsIFwiaXJvblwiLCBcImlzXCIsIFwiaXNsYW5kXCIsIFwiaXRcIiwgXCJpdHNcIiwgXCJpdHNlbGZcIiwgXCJqYWNrXCIsIFwiamFyXCIsIFwiamV0XCIsIFwiam9iXCIsIFwiam9pblwiLCBcImpvaW5lZFwiLCBcImpvdXJuZXlcIiwgXCJqb3lcIiwgXCJqdWRnZVwiLCBcImp1bXBcIiwgXCJqdW5nbGVcIiwgXCJqdXN0XCIsIFwia2VlcFwiLCBcImtlcHRcIiwgXCJrZXlcIiwgXCJraWRzXCIsIFwia2lsbFwiLCBcImtpbmRcIiwgXCJraXRjaGVuXCIsIFwia25ld1wiLCBcImtuaWZlXCIsIFwia25vd1wiLCBcImtub3dsZWRnZVwiLCBcImtub3duXCIsIFwibGFiZWxcIiwgXCJsYWJvclwiLCBcImxhY2tcIiwgXCJsYWR5XCIsIFwibGFpZFwiLCBcImxha2VcIiwgXCJsYW1wXCIsIFwibGFuZFwiLCBcImxhbmd1YWdlXCIsIFwibGFyZ2VcIiwgXCJsYXJnZXJcIiwgXCJsYXJnZXN0XCIsIFwibGFzdFwiLCBcImxhdGVcIiwgXCJsYXRlclwiLCBcImxhdWdoXCIsIFwibGF3XCIsIFwibGF5XCIsIFwibGF5ZXJzXCIsIFwibGVhZFwiLCBcImxlYWRlclwiLCBcImxlYWZcIiwgXCJsZWFyblwiLCBcImxlYXN0XCIsIFwibGVhdGhlclwiLCBcImxlYXZlXCIsIFwibGVhdmluZ1wiLCBcImxlZFwiLCBcImxlZnRcIiwgXCJsZWdcIiwgXCJsZW5ndGhcIiwgXCJsZXNzb25cIiwgXCJsZXRcIiwgXCJsZXR0ZXJcIiwgXCJsZXZlbFwiLCBcImxpYnJhcnlcIiwgXCJsaWVcIiwgXCJsaWZlXCIsIFwibGlmdFwiLCBcImxpZ2h0XCIsIFwibGlrZVwiLCBcImxpa2VseVwiLCBcImxpbWl0ZWRcIiwgXCJsaW5lXCIsIFwibGlvblwiLCBcImxpcHNcIiwgXCJsaXF1aWRcIiwgXCJsaXN0XCIsIFwibGlzdGVuXCIsIFwibGl0dGxlXCIsIFwibGl2ZVwiLCBcImxpdmluZ1wiLCBcImxvYWRcIiwgXCJsb2NhbFwiLCBcImxvY2F0ZVwiLCBcImxvY2F0aW9uXCIsIFwibG9nXCIsIFwibG9uZWx5XCIsIFwibG9uZ1wiLCBcImxvbmdlclwiLCBcImxvb2tcIiwgXCJsb29zZVwiLCBcImxvc2VcIiwgXCJsb3NzXCIsIFwibG9zdFwiLCBcImxvdFwiLCBcImxvdWRcIiwgXCJsb3ZlXCIsIFwibG92ZWx5XCIsIFwibG93XCIsIFwibG93ZXJcIiwgXCJsdWNrXCIsIFwibHVja3lcIiwgXCJsdW5jaFwiLCBcImx1bmdzXCIsIFwibHlpbmdcIiwgXCJtYWNoaW5lXCIsIFwibWFjaGluZXJ5XCIsIFwibWFkXCIsIFwibWFkZVwiLCBcIm1hZ2ljXCIsIFwibWFnbmV0XCIsIFwibWFpbFwiLCBcIm1haW5cIiwgXCJtYWlubHlcIiwgXCJtYWpvclwiLCBcIm1ha2VcIiwgXCJtYWtpbmdcIiwgXCJtYW5cIiwgXCJtYW5hZ2VkXCIsIFwibWFubmVyXCIsIFwibWFudWZhY3R1cmluZ1wiLCBcIm1hbnlcIiwgXCJtYXBcIiwgXCJtYXJrXCIsIFwibWFya2V0XCIsIFwibWFycmllZFwiLCBcIm1hc3NcIiwgXCJtYXNzYWdlXCIsIFwibWFzdGVyXCIsIFwibWF0ZXJpYWxcIiwgXCJtYXRoZW1hdGljc1wiLCBcIm1hdHRlclwiLCBcIm1heVwiLCBcIm1heWJlXCIsIFwibWVcIiwgXCJtZWFsXCIsIFwibWVhblwiLCBcIm1lYW5zXCIsIFwibWVhbnRcIiwgXCJtZWFzdXJlXCIsIFwibWVhdFwiLCBcIm1lZGljaW5lXCIsIFwibWVldFwiLCBcIm1lbHRlZFwiLCBcIm1lbWJlclwiLCBcIm1lbW9yeVwiLCBcIm1lblwiLCBcIm1lbnRhbFwiLCBcIm1lcmVseVwiLCBcIm1ldFwiLCBcIm1ldGFsXCIsIFwibWV0aG9kXCIsIFwibWljZVwiLCBcIm1pZGRsZVwiLCBcIm1pZ2h0XCIsIFwibWlnaHR5XCIsIFwibWlsZVwiLCBcIm1pbGl0YXJ5XCIsIFwibWlsa1wiLCBcIm1pbGxcIiwgXCJtaW5kXCIsIFwibWluZVwiLCBcIm1pbmVyYWxzXCIsIFwibWludXRlXCIsIFwibWlycm9yXCIsIFwibWlzc2luZ1wiLCBcIm1pc3Npb25cIiwgXCJtaXN0YWtlXCIsIFwibWl4XCIsIFwibWl4dHVyZVwiLCBcIm1vZGVsXCIsIFwibW9kZXJuXCIsIFwibW9sZWN1bGFyXCIsIFwibW9tZW50XCIsIFwibW9uZXlcIiwgXCJtb25rZXlcIiwgXCJtb250aFwiLCBcIm1vb2RcIiwgXCJtb29uXCIsIFwibW9yZVwiLCBcIm1vcm5pbmdcIiwgXCJtb3N0XCIsIFwibW9zdGx5XCIsIFwibW90aGVyXCIsIFwibW90aW9uXCIsIFwibW90b3JcIiwgXCJtb3VudGFpblwiLCBcIm1vdXNlXCIsIFwibW91dGhcIiwgXCJtb3ZlXCIsIFwibW92ZW1lbnRcIiwgXCJtb3ZpZVwiLCBcIm1vdmluZ1wiLCBcIm11ZFwiLCBcIm11c2NsZVwiLCBcIm11c2ljXCIsIFwibXVzaWNhbFwiLCBcIm11c3RcIiwgXCJteVwiLCBcIm15c2VsZlwiLCBcIm15c3RlcmlvdXNcIiwgXCJuYWlsc1wiLCBcIm5hbWVcIiwgXCJuYXRpb25cIiwgXCJuYXRpb25hbFwiLCBcIm5hdGl2ZVwiLCBcIm5hdHVyYWxcIiwgXCJuYXR1cmFsbHlcIiwgXCJuYXR1cmVcIiwgXCJuZWFyXCIsIFwibmVhcmJ5XCIsIFwibmVhcmVyXCIsIFwibmVhcmVzdFwiLCBcIm5lYXJseVwiLCBcIm5lY2Vzc2FyeVwiLCBcIm5lY2tcIiwgXCJuZWVkZWRcIiwgXCJuZWVkbGVcIiwgXCJuZWVkc1wiLCBcIm5lZ2F0aXZlXCIsIFwibmVpZ2hib3JcIiwgXCJuZWlnaGJvcmhvb2RcIiwgXCJuZXJ2b3VzXCIsIFwibmVzdFwiLCBcIm5ldmVyXCIsIFwibmV3XCIsIFwibmV3c1wiLCBcIm5ld3NwYXBlclwiLCBcIm5leHRcIiwgXCJuaWNlXCIsIFwibmlnaHRcIiwgXCJuaW5lXCIsIFwibm9cIiwgXCJub2JvZHlcIiwgXCJub2RkZWRcIiwgXCJub2lzZVwiLCBcIm5vbmVcIiwgXCJub29uXCIsIFwibm9yXCIsIFwibm9ydGhcIiwgXCJub3NlXCIsIFwibm90XCIsIFwibm90ZVwiLCBcIm5vdGVkXCIsIFwibm90aGluZ1wiLCBcIm5vdGljZVwiLCBcIm5vdW5cIiwgXCJub3dcIiwgXCJudW1iZXJcIiwgXCJudW1lcmFsXCIsIFwibnV0c1wiLCBcIm9iamVjdFwiLCBcIm9ic2VydmVcIiwgXCJvYnRhaW5cIiwgXCJvY2Nhc2lvbmFsbHlcIiwgXCJvY2N1clwiLCBcIm9jZWFuXCIsIFwib2ZcIiwgXCJvZmZcIiwgXCJvZmZlclwiLCBcIm9mZmljZVwiLCBcIm9mZmljZXJcIiwgXCJvZmZpY2lhbFwiLCBcIm9pbFwiLCBcIm9sZFwiLCBcIm9sZGVyXCIsIFwib2xkZXN0XCIsIFwib25cIiwgXCJvbmNlXCIsIFwib25lXCIsIFwib25seVwiLCBcIm9udG9cIiwgXCJvcGVuXCIsIFwib3BlcmF0aW9uXCIsIFwib3BpbmlvblwiLCBcIm9wcG9ydHVuaXR5XCIsIFwib3Bwb3NpdGVcIiwgXCJvclwiLCBcIm9yYW5nZVwiLCBcIm9yYml0XCIsIFwib3JkZXJcIiwgXCJvcmRpbmFyeVwiLCBcIm9yZ2FuaXphdGlvblwiLCBcIm9yZ2FuaXplZFwiLCBcIm9yaWdpblwiLCBcIm9yaWdpbmFsXCIsIFwib3RoZXJcIiwgXCJvdWdodFwiLCBcIm91clwiLCBcIm91cnNlbHZlc1wiLCBcIm91dFwiLCBcIm91dGVyXCIsIFwib3V0bGluZVwiLCBcIm91dHNpZGVcIiwgXCJvdmVyXCIsIFwib3duXCIsIFwib3duZXJcIiwgXCJveHlnZW5cIiwgXCJwYWNrXCIsIFwicGFja2FnZVwiLCBcInBhZ2VcIiwgXCJwYWlkXCIsIFwicGFpblwiLCBcInBhaW50XCIsIFwicGFpclwiLCBcInBhbGFjZVwiLCBcInBhbGVcIiwgXCJwYW5cIiwgXCJwYXBlclwiLCBcInBhcmFncmFwaFwiLCBcInBhcmFsbGVsXCIsIFwicGFyZW50XCIsIFwicGFya1wiLCBcInBhcnRcIiwgXCJwYXJ0aWNsZXNcIiwgXCJwYXJ0aWN1bGFyXCIsIFwicGFydGljdWxhcmx5XCIsIFwicGFydGx5XCIsIFwicGFydHNcIiwgXCJwYXJ0eVwiLCBcInBhc3NcIiwgXCJwYXNzYWdlXCIsIFwicGFzdFwiLCBcInBhdGhcIiwgXCJwYXR0ZXJuXCIsIFwicGF5XCIsIFwicGVhY2VcIiwgXCJwZW5cIiwgXCJwZW5jaWxcIiwgXCJwZW9wbGVcIiwgXCJwZXJcIiwgXCJwZXJjZW50XCIsIFwicGVyZmVjdFwiLCBcInBlcmZlY3RseVwiLCBcInBlcmhhcHNcIiwgXCJwZXJpb2RcIiwgXCJwZXJzb25cIiwgXCJwZXJzb25hbFwiLCBcInBldFwiLCBcInBocmFzZVwiLCBcInBoeXNpY2FsXCIsIFwicGlhbm9cIiwgXCJwaWNrXCIsIFwicGljdHVyZVwiLCBcInBpY3R1cmVkXCIsIFwicGllXCIsIFwicGllY2VcIiwgXCJwaWdcIiwgXCJwaWxlXCIsIFwicGlsb3RcIiwgXCJwaW5lXCIsIFwicGlua1wiLCBcInBpcGVcIiwgXCJwaXRjaFwiLCBcInBsYWNlXCIsIFwicGxhaW5cIiwgXCJwbGFuXCIsIFwicGxhbmVcIiwgXCJwbGFuZXRcIiwgXCJwbGFubmVkXCIsIFwicGxhbm5pbmdcIiwgXCJwbGFudFwiLCBcInBsYXN0aWNcIiwgXCJwbGF0ZVwiLCBcInBsYXRlc1wiLCBcInBsYXlcIiwgXCJwbGVhc2FudFwiLCBcInBsZWFzZVwiLCBcInBsZWFzdXJlXCIsIFwicGxlbnR5XCIsIFwicGx1cmFsXCIsIFwicGx1c1wiLCBcInBvY2tldFwiLCBcInBvZW1cIiwgXCJwb2V0XCIsIFwicG9ldHJ5XCIsIFwicG9pbnRcIiwgXCJwb2xlXCIsIFwicG9saWNlXCIsIFwicG9saWNlbWFuXCIsIFwicG9saXRpY2FsXCIsIFwicG9uZFwiLCBcInBvbnlcIiwgXCJwb29sXCIsIFwicG9vclwiLCBcInBvcHVsYXJcIiwgXCJwb3B1bGF0aW9uXCIsIFwicG9yY2hcIiwgXCJwb3J0XCIsIFwicG9zaXRpb25cIiwgXCJwb3NpdGl2ZVwiLCBcInBvc3NpYmxlXCIsIFwicG9zc2libHlcIiwgXCJwb3N0XCIsIFwicG90XCIsIFwicG90YXRvZXNcIiwgXCJwb3VuZFwiLCBcInBvdXJcIiwgXCJwb3dkZXJcIiwgXCJwb3dlclwiLCBcInBvd2VyZnVsXCIsIFwicHJhY3RpY2FsXCIsIFwicHJhY3RpY2VcIiwgXCJwcmVwYXJlXCIsIFwicHJlc2VudFwiLCBcInByZXNpZGVudFwiLCBcInByZXNzXCIsIFwicHJlc3N1cmVcIiwgXCJwcmV0dHlcIiwgXCJwcmV2ZW50XCIsIFwicHJldmlvdXNcIiwgXCJwcmljZVwiLCBcInByaWRlXCIsIFwicHJpbWl0aXZlXCIsIFwicHJpbmNpcGFsXCIsIFwicHJpbmNpcGxlXCIsIFwicHJpbnRlZFwiLCBcInByaXZhdGVcIiwgXCJwcml6ZVwiLCBcInByb2JhYmx5XCIsIFwicHJvYmxlbVwiLCBcInByb2Nlc3NcIiwgXCJwcm9kdWNlXCIsIFwicHJvZHVjdFwiLCBcInByb2R1Y3Rpb25cIiwgXCJwcm9ncmFtXCIsIFwicHJvZ3Jlc3NcIiwgXCJwcm9taXNlZFwiLCBcInByb3BlclwiLCBcInByb3Blcmx5XCIsIFwicHJvcGVydHlcIiwgXCJwcm90ZWN0aW9uXCIsIFwicHJvdWRcIiwgXCJwcm92ZVwiLCBcInByb3ZpZGVcIiwgXCJwdWJsaWNcIiwgXCJwdWxsXCIsIFwicHVwaWxcIiwgXCJwdXJlXCIsIFwicHVycGxlXCIsIFwicHVycG9zZVwiLCBcInB1c2hcIiwgXCJwdXRcIiwgXCJwdXR0aW5nXCIsIFwicXVhcnRlclwiLCBcInF1ZWVuXCIsIFwicXVlc3Rpb25cIiwgXCJxdWlja1wiLCBcInF1aWNrbHlcIiwgXCJxdWlldFwiLCBcInF1aWV0bHlcIiwgXCJxdWl0ZVwiLCBcInJhYmJpdFwiLCBcInJhY2VcIiwgXCJyYWRpb1wiLCBcInJhaWxyb2FkXCIsIFwicmFpblwiLCBcInJhaXNlXCIsIFwicmFuXCIsIFwicmFuY2hcIiwgXCJyYW5nZVwiLCBcInJhcGlkbHlcIiwgXCJyYXRlXCIsIFwicmF0aGVyXCIsIFwicmF3XCIsIFwicmF5c1wiLCBcInJlYWNoXCIsIFwicmVhZFwiLCBcInJlYWRlclwiLCBcInJlYWR5XCIsIFwicmVhbFwiLCBcInJlYWxpemVcIiwgXCJyZWFyXCIsIFwicmVhc29uXCIsIFwicmVjYWxsXCIsIFwicmVjZWl2ZVwiLCBcInJlY2VudFwiLCBcInJlY2VudGx5XCIsIFwicmVjb2duaXplXCIsIFwicmVjb3JkXCIsIFwicmVkXCIsIFwicmVmZXJcIiwgXCJyZWZ1c2VkXCIsIFwicmVnaW9uXCIsIFwicmVndWxhclwiLCBcInJlbGF0ZWRcIiwgXCJyZWxhdGlvbnNoaXBcIiwgXCJyZWxpZ2lvdXNcIiwgXCJyZW1haW5cIiwgXCJyZW1hcmthYmxlXCIsIFwicmVtZW1iZXJcIiwgXCJyZW1vdmVcIiwgXCJyZXBlYXRcIiwgXCJyZXBsYWNlXCIsIFwicmVwbGllZFwiLCBcInJlcG9ydFwiLCBcInJlcHJlc2VudFwiLCBcInJlcXVpcmVcIiwgXCJyZXNlYXJjaFwiLCBcInJlc3BlY3RcIiwgXCJyZXN0XCIsIFwicmVzdWx0XCIsIFwicmV0dXJuXCIsIFwicmV2aWV3XCIsIFwicmh5bWVcIiwgXCJyaHl0aG1cIiwgXCJyaWNlXCIsIFwicmljaFwiLCBcInJpZGVcIiwgXCJyaWRpbmdcIiwgXCJyaWdodFwiLCBcInJpbmdcIiwgXCJyaXNlXCIsIFwicmlzaW5nXCIsIFwicml2ZXJcIiwgXCJyb2FkXCIsIFwicm9hclwiLCBcInJvY2tcIiwgXCJyb2NrZXRcIiwgXCJyb2NreVwiLCBcInJvZFwiLCBcInJvbGxcIiwgXCJyb29mXCIsIFwicm9vbVwiLCBcInJvb3RcIiwgXCJyb3BlXCIsIFwicm9zZVwiLCBcInJvdWdoXCIsIFwicm91bmRcIiwgXCJyb3V0ZVwiLCBcInJvd1wiLCBcInJ1YmJlZFwiLCBcInJ1YmJlclwiLCBcInJ1bGVcIiwgXCJydWxlclwiLCBcInJ1blwiLCBcInJ1bm5pbmdcIiwgXCJydXNoXCIsIFwic2FkXCIsIFwic2FkZGxlXCIsIFwic2FmZVwiLCBcInNhZmV0eVwiLCBcInNhaWRcIiwgXCJzYWlsXCIsIFwic2FsZVwiLCBcInNhbG1vblwiLCBcInNhbHRcIiwgXCJzYW1lXCIsIFwic2FuZFwiLCBcInNhbmdcIiwgXCJzYXRcIiwgXCJzYXRlbGxpdGVzXCIsIFwic2F0aXNmaWVkXCIsIFwic2F2ZVwiLCBcInNhdmVkXCIsIFwic2F3XCIsIFwic2F5XCIsIFwic2NhbGVcIiwgXCJzY2FyZWRcIiwgXCJzY2VuZVwiLCBcInNjaG9vbFwiLCBcInNjaWVuY2VcIiwgXCJzY2llbnRpZmljXCIsIFwic2NpZW50aXN0XCIsIFwic2NvcmVcIiwgXCJzY3JlZW5cIiwgXCJzZWFcIiwgXCJzZWFyY2hcIiwgXCJzZWFzb25cIiwgXCJzZWF0XCIsIFwic2Vjb25kXCIsIFwic2VjcmV0XCIsIFwic2VjdGlvblwiLCBcInNlZVwiLCBcInNlZWRcIiwgXCJzZWVpbmdcIiwgXCJzZWVtc1wiLCBcInNlZW5cIiwgXCJzZWxkb21cIiwgXCJzZWxlY3RcIiwgXCJzZWxlY3Rpb25cIiwgXCJzZWxsXCIsIFwic2VuZFwiLCBcInNlbnNlXCIsIFwic2VudFwiLCBcInNlbnRlbmNlXCIsIFwic2VwYXJhdGVcIiwgXCJzZXJpZXNcIiwgXCJzZXJpb3VzXCIsIFwic2VydmVcIiwgXCJzZXJ2aWNlXCIsIFwic2V0c1wiLCBcInNldHRpbmdcIiwgXCJzZXR0bGVcIiwgXCJzZXR0bGVyc1wiLCBcInNldmVuXCIsIFwic2V2ZXJhbFwiLCBcInNoYWRlXCIsIFwic2hhZG93XCIsIFwic2hha2VcIiwgXCJzaGFraW5nXCIsIFwic2hhbGxcIiwgXCJzaGFsbG93XCIsIFwic2hhcGVcIiwgXCJzaGFyZVwiLCBcInNoYXJwXCIsIFwic2hlXCIsIFwic2hlZXBcIiwgXCJzaGVldFwiLCBcInNoZWxmXCIsIFwic2hlbGxzXCIsIFwic2hlbHRlclwiLCBcInNoaW5lXCIsIFwic2hpbm5pbmdcIiwgXCJzaGlwXCIsIFwic2hpcnRcIiwgXCJzaG9lXCIsIFwic2hvb3RcIiwgXCJzaG9wXCIsIFwic2hvcmVcIiwgXCJzaG9ydFwiLCBcInNob3J0ZXJcIiwgXCJzaG90XCIsIFwic2hvdWxkXCIsIFwic2hvdWxkZXJcIiwgXCJzaG91dFwiLCBcInNob3dcIiwgXCJzaG93blwiLCBcInNodXRcIiwgXCJzaWNrXCIsIFwic2lkZXNcIiwgXCJzaWdodFwiLCBcInNpZ25cIiwgXCJzaWduYWxcIiwgXCJzaWxlbmNlXCIsIFwic2lsZW50XCIsIFwic2lsa1wiLCBcInNpbGx5XCIsIFwic2lsdmVyXCIsIFwic2ltaWxhclwiLCBcInNpbXBsZVwiLCBcInNpbXBsZXN0XCIsIFwic2ltcGx5XCIsIFwic2luY2VcIiwgXCJzaW5nXCIsIFwic2luZ2xlXCIsIFwic2lua1wiLCBcInNpc3RlclwiLCBcInNpdFwiLCBcInNpdHRpbmdcIiwgXCJzaXR1YXRpb25cIiwgXCJzaXhcIiwgXCJzaXplXCIsIFwic2tpbGxcIiwgXCJza2luXCIsIFwic2t5XCIsIFwic2xhYnNcIiwgXCJzbGF2ZVwiLCBcInNsZWVwXCIsIFwic2xlcHRcIiwgXCJzbGlkZVwiLCBcInNsaWdodFwiLCBcInNsaWdodGx5XCIsIFwic2xpcFwiLCBcInNsaXBwZWRcIiwgXCJzbG9wZVwiLCBcInNsb3dcIiwgXCJzbG93bHlcIiwgXCJzbWFsbFwiLCBcInNtYWxsZXJcIiwgXCJzbWFsbGVzdFwiLCBcInNtZWxsXCIsIFwic21pbGVcIiwgXCJzbW9rZVwiLCBcInNtb290aFwiLCBcInNuYWtlXCIsIFwic25vd1wiLCBcInNvXCIsIFwic29hcFwiLCBcInNvY2lhbFwiLCBcInNvY2lldHlcIiwgXCJzb2Z0XCIsIFwic29mdGx5XCIsIFwic29pbFwiLCBcInNvbGFyXCIsIFwic29sZFwiLCBcInNvbGRpZXJcIiwgXCJzb2xpZFwiLCBcInNvbHV0aW9uXCIsIFwic29sdmVcIiwgXCJzb21lXCIsIFwic29tZWJvZHlcIiwgXCJzb21laG93XCIsIFwic29tZW9uZVwiLCBcInNvbWV0aGluZ1wiLCBcInNvbWV0aW1lXCIsIFwic29tZXdoZXJlXCIsIFwic29uXCIsIFwic29uZ1wiLCBcInNvb25cIiwgXCJzb3J0XCIsIFwic291bmRcIiwgXCJzb3VyY2VcIiwgXCJzb3V0aFwiLCBcInNvdXRoZXJuXCIsIFwic3BhY2VcIiwgXCJzcGVha1wiLCBcInNwZWNpYWxcIiwgXCJzcGVjaWVzXCIsIFwic3BlY2lmaWNcIiwgXCJzcGVlY2hcIiwgXCJzcGVlZFwiLCBcInNwZWxsXCIsIFwic3BlbmRcIiwgXCJzcGVudFwiLCBcInNwaWRlclwiLCBcInNwaW5cIiwgXCJzcGlyaXRcIiwgXCJzcGl0ZVwiLCBcInNwbGl0XCIsIFwic3Bva2VuXCIsIFwic3BvcnRcIiwgXCJzcHJlYWRcIiwgXCJzcHJpbmdcIiwgXCJzcXVhcmVcIiwgXCJzdGFnZVwiLCBcInN0YWlyc1wiLCBcInN0YW5kXCIsIFwic3RhbmRhcmRcIiwgXCJzdGFyXCIsIFwic3RhcmVkXCIsIFwic3RhcnRcIiwgXCJzdGF0ZVwiLCBcInN0YXRlbWVudFwiLCBcInN0YXRpb25cIiwgXCJzdGF5XCIsIFwic3RlYWR5XCIsIFwic3RlYW1cIiwgXCJzdGVlbFwiLCBcInN0ZWVwXCIsIFwic3RlbXNcIiwgXCJzdGVwXCIsIFwic3RlcHBlZFwiLCBcInN0aWNrXCIsIFwic3RpZmZcIiwgXCJzdGlsbFwiLCBcInN0b2NrXCIsIFwic3RvbWFjaFwiLCBcInN0b25lXCIsIFwic3Rvb2RcIiwgXCJzdG9wXCIsIFwic3RvcHBlZFwiLCBcInN0b3JlXCIsIFwic3Rvcm1cIiwgXCJzdG9yeVwiLCBcInN0b3ZlXCIsIFwic3RyYWlnaHRcIiwgXCJzdHJhbmdlXCIsIFwic3RyYW5nZXJcIiwgXCJzdHJhd1wiLCBcInN0cmVhbVwiLCBcInN0cmVldFwiLCBcInN0cmVuZ3RoXCIsIFwic3RyZXRjaFwiLCBcInN0cmlrZVwiLCBcInN0cmluZ1wiLCBcInN0cmlwXCIsIFwic3Ryb25nXCIsIFwic3Ryb25nZXJcIiwgXCJzdHJ1Y2tcIiwgXCJzdHJ1Y3R1cmVcIiwgXCJzdHJ1Z2dsZVwiLCBcInN0dWNrXCIsIFwic3R1ZGVudFwiLCBcInN0dWRpZWRcIiwgXCJzdHVkeWluZ1wiLCBcInN1YmplY3RcIiwgXCJzdWJzdGFuY2VcIiwgXCJzdWNjZXNzXCIsIFwic3VjY2Vzc2Z1bFwiLCBcInN1Y2hcIiwgXCJzdWRkZW5cIiwgXCJzdWRkZW5seVwiLCBcInN1Z2FyXCIsIFwic3VnZ2VzdFwiLCBcInN1aXRcIiwgXCJzdW1cIiwgXCJzdW1tZXJcIiwgXCJzdW5cIiwgXCJzdW5saWdodFwiLCBcInN1cHBlclwiLCBcInN1cHBseVwiLCBcInN1cHBvcnRcIiwgXCJzdXBwb3NlXCIsIFwic3VyZVwiLCBcInN1cmZhY2VcIiwgXCJzdXJwcmlzZVwiLCBcInN1cnJvdW5kZWRcIiwgXCJzd2FtXCIsIFwic3dlZXRcIiwgXCJzd2VwdFwiLCBcInN3aW1cIiwgXCJzd2ltbWluZ1wiLCBcInN3aW5nXCIsIFwic3d1bmdcIiwgXCJzeWxsYWJsZVwiLCBcInN5bWJvbFwiLCBcInN5c3RlbVwiLCBcInRhYmxlXCIsIFwidGFpbFwiLCBcInRha2VcIiwgXCJ0YWtlblwiLCBcInRhbGVzXCIsIFwidGFsa1wiLCBcInRhbGxcIiwgXCJ0YW5rXCIsIFwidGFwZVwiLCBcInRhc2tcIiwgXCJ0YXN0ZVwiLCBcInRhdWdodFwiLCBcInRheFwiLCBcInRlYVwiLCBcInRlYWNoXCIsIFwidGVhY2hlclwiLCBcInRlYW1cIiwgXCJ0ZWFyc1wiLCBcInRlZXRoXCIsIFwidGVsZXBob25lXCIsIFwidGVsZXZpc2lvblwiLCBcInRlbGxcIiwgXCJ0ZW1wZXJhdHVyZVwiLCBcInRlblwiLCBcInRlbnRcIiwgXCJ0ZXJtXCIsIFwidGVycmlibGVcIiwgXCJ0ZXN0XCIsIFwidGhhblwiLCBcInRoYW5rXCIsIFwidGhhdFwiLCBcInRoZWVcIiwgXCJ0aGVtXCIsIFwidGhlbXNlbHZlc1wiLCBcInRoZW5cIiwgXCJ0aGVvcnlcIiwgXCJ0aGVyZVwiLCBcInRoZXJlZm9yZVwiLCBcInRoZXNlXCIsIFwidGhleVwiLCBcInRoaWNrXCIsIFwidGhpblwiLCBcInRoaW5nXCIsIFwidGhpbmtcIiwgXCJ0aGlyZFwiLCBcInRoaXJ0eVwiLCBcInRoaXNcIiwgXCJ0aG9zZVwiLCBcInRob3VcIiwgXCJ0aG91Z2hcIiwgXCJ0aG91Z2h0XCIsIFwidGhvdXNhbmRcIiwgXCJ0aHJlYWRcIiwgXCJ0aHJlZVwiLCBcInRocmV3XCIsIFwidGhyb2F0XCIsIFwidGhyb3VnaFwiLCBcInRocm91Z2hvdXRcIiwgXCJ0aHJvd1wiLCBcInRocm93blwiLCBcInRodW1iXCIsIFwidGh1c1wiLCBcInRoeVwiLCBcInRpZGVcIiwgXCJ0aWVcIiwgXCJ0aWdodFwiLCBcInRpZ2h0bHlcIiwgXCJ0aWxsXCIsIFwidGltZVwiLCBcInRpblwiLCBcInRpbnlcIiwgXCJ0aXBcIiwgXCJ0aXJlZFwiLCBcInRpdGxlXCIsIFwidG9cIiwgXCJ0b2JhY2NvXCIsIFwidG9kYXlcIiwgXCJ0b2dldGhlclwiLCBcInRvbGRcIiwgXCJ0b21vcnJvd1wiLCBcInRvbmVcIiwgXCJ0b25ndWVcIiwgXCJ0b25pZ2h0XCIsIFwidG9vXCIsIFwidG9va1wiLCBcInRvb2xcIiwgXCJ0b3BcIiwgXCJ0b3BpY1wiLCBcInRvcm5cIiwgXCJ0b3RhbFwiLCBcInRvdWNoXCIsIFwidG93YXJkXCIsIFwidG93ZXJcIiwgXCJ0b3duXCIsIFwidG95XCIsIFwidHJhY2VcIiwgXCJ0cmFja1wiLCBcInRyYWRlXCIsIFwidHJhZmZpY1wiLCBcInRyYWlsXCIsIFwidHJhaW5cIiwgXCJ0cmFuc3BvcnRhdGlvblwiLCBcInRyYXBcIiwgXCJ0cmF2ZWxcIiwgXCJ0cmVhdGVkXCIsIFwidHJlZVwiLCBcInRyaWFuZ2xlXCIsIFwidHJpYmVcIiwgXCJ0cmlja1wiLCBcInRyaWVkXCIsIFwidHJpcFwiLCBcInRyb29wc1wiLCBcInRyb3BpY2FsXCIsIFwidHJvdWJsZVwiLCBcInRydWNrXCIsIFwidHJ1bmtcIiwgXCJ0cnV0aFwiLCBcInRyeVwiLCBcInR1YmVcIiwgXCJ0dW5lXCIsIFwidHVyblwiLCBcInR3ZWx2ZVwiLCBcInR3ZW50eVwiLCBcInR3aWNlXCIsIFwidHdvXCIsIFwidHlwZVwiLCBcInR5cGljYWxcIiwgXCJ1bmNsZVwiLCBcInVuZGVyXCIsIFwidW5kZXJsaW5lXCIsIFwidW5kZXJzdGFuZGluZ1wiLCBcInVuaGFwcHlcIiwgXCJ1bmlvblwiLCBcInVuaXRcIiwgXCJ1bml2ZXJzZVwiLCBcInVua25vd25cIiwgXCJ1bmxlc3NcIiwgXCJ1bnRpbFwiLCBcInVudXN1YWxcIiwgXCJ1cFwiLCBcInVwb25cIiwgXCJ1cHBlclwiLCBcInVwd2FyZFwiLCBcInVzXCIsIFwidXNlXCIsIFwidXNlZnVsXCIsIFwidXNpbmdcIiwgXCJ1c3VhbFwiLCBcInVzdWFsbHlcIiwgXCJ2YWxsZXlcIiwgXCJ2YWx1YWJsZVwiLCBcInZhbHVlXCIsIFwidmFwb3JcIiwgXCJ2YXJpZXR5XCIsIFwidmFyaW91c1wiLCBcInZhc3RcIiwgXCJ2ZWdldGFibGVcIiwgXCJ2ZXJiXCIsIFwidmVydGljYWxcIiwgXCJ2ZXJ5XCIsIFwidmVzc2Vsc1wiLCBcInZpY3RvcnlcIiwgXCJ2aWV3XCIsIFwidmlsbGFnZVwiLCBcInZpc2l0XCIsIFwidmlzaXRvclwiLCBcInZvaWNlXCIsIFwidm9sdW1lXCIsIFwidm90ZVwiLCBcInZvd2VsXCIsIFwidm95YWdlXCIsIFwid2Fnb25cIiwgXCJ3YWl0XCIsIFwid2Fsa1wiLCBcIndhbGxcIiwgXCJ3YW50XCIsIFwid2FyXCIsIFwid2FybVwiLCBcIndhcm5cIiwgXCJ3YXNcIiwgXCJ3YXNoXCIsIFwid2FzdGVcIiwgXCJ3YXRjaFwiLCBcIndhdGVyXCIsIFwid2F2ZVwiLCBcIndheVwiLCBcIndlXCIsIFwid2Vha1wiLCBcIndlYWx0aFwiLCBcIndlYXJcIiwgXCJ3ZWF0aGVyXCIsIFwid2Vla1wiLCBcIndlaWdoXCIsIFwid2VpZ2h0XCIsIFwid2VsY29tZVwiLCBcIndlbGxcIiwgXCJ3ZW50XCIsIFwid2VyZVwiLCBcIndlc3RcIiwgXCJ3ZXN0ZXJuXCIsIFwid2V0XCIsIFwid2hhbGVcIiwgXCJ3aGF0XCIsIFwid2hhdGV2ZXJcIiwgXCJ3aGVhdFwiLCBcIndoZWVsXCIsIFwid2hlblwiLCBcIndoZW5ldmVyXCIsIFwid2hlcmVcIiwgXCJ3aGVyZXZlclwiLCBcIndoZXRoZXJcIiwgXCJ3aGljaFwiLCBcIndoaWxlXCIsIFwid2hpc3BlcmVkXCIsIFwid2hpc3RsZVwiLCBcIndoaXRlXCIsIFwid2hvXCIsIFwid2hvbGVcIiwgXCJ3aG9tXCIsIFwid2hvc2VcIiwgXCJ3aHlcIiwgXCJ3aWRlXCIsIFwid2lkZWx5XCIsIFwid2lmZVwiLCBcIndpbGRcIiwgXCJ3aWxsXCIsIFwid2lsbGluZ1wiLCBcIndpblwiLCBcIndpbmRcIiwgXCJ3aW5kb3dcIiwgXCJ3aW5nXCIsIFwid2ludGVyXCIsIFwid2lyZVwiLCBcIndpc2VcIiwgXCJ3aXNoXCIsIFwid2l0aFwiLCBcIndpdGhpblwiLCBcIndpdGhvdXRcIiwgXCJ3b2xmXCIsIFwid29tZW5cIiwgXCJ3b25cIiwgXCJ3b25kZXJcIiwgXCJ3b25kZXJmdWxcIiwgXCJ3b29kXCIsIFwid29vZGVuXCIsIFwid29vbFwiLCBcIndvcmRcIiwgXCJ3b3JlXCIsIFwid29ya1wiLCBcIndvcmtlclwiLCBcIndvcmxkXCIsIFwid29ycmllZFwiLCBcIndvcnJ5XCIsIFwid29yc2VcIiwgXCJ3b3J0aFwiLCBcIndvdWxkXCIsIFwid3JhcHBlZFwiLCBcIndyaXRlXCIsIFwid3JpdGVyXCIsIFwid3JpdGluZ1wiLCBcIndyaXR0ZW5cIiwgXCJ3cm9uZ1wiLCBcIndyb3RlXCIsIFwieWFyZFwiLCBcInllYXJcIiwgXCJ5ZWxsb3dcIiwgXCJ5ZXNcIiwgXCJ5ZXN0ZXJkYXlcIiwgXCJ5ZXRcIiwgXCJ5b3VcIiwgXCJ5b3VuZ1wiLCBcInlvdW5nZXJcIiwgXCJ5b3VyXCIsIFwieW91cnNlbGZcIiwgXCJ5b3V0aFwiLCBcInplcm9cIiwgXCJ6ZWJyYVwiLCBcInppcHBlclwiLCBcInpvb1wiLCBcInp1bHVcIl07XG5cbmZ1bmN0aW9uIHdvcmRzKG9wdGlvbnMpIHtcbiAgZnVuY3Rpb24gd29yZCgpIHtcbiAgICBpZiAob3B0aW9ucyAmJiBvcHRpb25zLm1heExlbmd0aCA+IDEpIHtcbiAgICAgIHJldHVybiBnZW5lcmF0ZVdvcmRXaXRoTWF4TGVuZ3RoKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBnZW5lcmF0ZVJhbmRvbVdvcmQoKTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBnZW5lcmF0ZVdvcmRXaXRoTWF4TGVuZ3RoKCkge1xuICAgIHZhciByaWdodFNpemUgPSBmYWxzZTtcbiAgICB2YXIgd29yZFVzZWQ7XG5cbiAgICB3aGlsZSAoIXJpZ2h0U2l6ZSkge1xuICAgICAgd29yZFVzZWQgPSBnZW5lcmF0ZVJhbmRvbVdvcmQoKTtcblxuICAgICAgaWYgKHdvcmRVc2VkLmxlbmd0aCA8PSBvcHRpb25zLm1heExlbmd0aCkge1xuICAgICAgICByaWdodFNpemUgPSB0cnVlO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB3b3JkVXNlZDtcbiAgfVxuXG4gIGZ1bmN0aW9uIGdlbmVyYXRlUmFuZG9tV29yZCgpIHtcbiAgICByZXR1cm4gd29yZExpc3RbcmFuZEludCh3b3JkTGlzdC5sZW5ndGgpXTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHJhbmRJbnQobGVzc1RoYW4pIHtcbiAgICByZXR1cm4gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogbGVzc1RoYW4pO1xuICB9IC8vIE5vIGFyZ3VtZW50cyA9IGdlbmVyYXRlIG9uZSB3b3JkXG5cblxuICBpZiAodHlwZW9mIG9wdGlvbnMgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgcmV0dXJuIHdvcmQoKTtcbiAgfSAvLyBKdXN0IGEgbnVtYmVyID0gcmV0dXJuIHRoYXQgbWFueSB3b3Jkc1xuXG5cbiAgaWYgKHR5cGVvZiBvcHRpb25zID09PSAnbnVtYmVyJykge1xuICAgIG9wdGlvbnMgPSB7XG4gICAgICBleGFjdGx5OiBvcHRpb25zXG4gICAgfTtcbiAgfSAvLyBvcHRpb25zIHN1cHBvcnRlZDogZXhhY3RseSwgbWluLCBtYXgsIGpvaW5cblxuXG4gIGlmIChvcHRpb25zLmV4YWN0bHkpIHtcbiAgICBvcHRpb25zLm1pbiA9IG9wdGlvbnMuZXhhY3RseTtcbiAgICBvcHRpb25zLm1heCA9IG9wdGlvbnMuZXhhY3RseTtcbiAgfSAvLyBub3QgYSBudW1iZXIgPSBvbmUgd29yZCBwYXIgc3RyaW5nXG5cblxuICBpZiAodHlwZW9mIG9wdGlvbnMud29yZHNQZXJTdHJpbmcgIT09ICdudW1iZXInKSB7XG4gICAgb3B0aW9ucy53b3Jkc1BlclN0cmluZyA9IDE7XG4gIH0gLy9ub3QgYSBmdW5jdGlvbiA9IHJldHVybnMgdGhlIHJhdyB3b3JkXG5cblxuICBpZiAodHlwZW9mIG9wdGlvbnMuZm9ybWF0dGVyICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgb3B0aW9ucy5mb3JtYXR0ZXIgPSB3b3JkID0+IHdvcmQ7XG4gIH0gLy9ub3QgYSBzdHJpbmcgPSBzZXBhcmF0b3IgaXMgYSBzcGFjZVxuXG5cbiAgaWYgKHR5cGVvZiBvcHRpb25zLnNlcGFyYXRvciAhPT0gJ3N0cmluZycpIHtcbiAgICBvcHRpb25zLnNlcGFyYXRvciA9ICcgJztcbiAgfVxuXG4gIHZhciB0b3RhbCA9IG9wdGlvbnMubWluICsgcmFuZEludChvcHRpb25zLm1heCArIDEgLSBvcHRpb25zLm1pbik7XG4gIHZhciByZXN1bHRzID0gW107XG4gIHZhciB0b2tlbiA9ICcnO1xuICB2YXIgcmVsYXRpdmVJbmRleCA9IDA7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCB0b3RhbCAqIG9wdGlvbnMud29yZHNQZXJTdHJpbmc7IGkrKykge1xuICAgIGlmIChyZWxhdGl2ZUluZGV4ID09PSBvcHRpb25zLndvcmRzUGVyU3RyaW5nIC0gMSkge1xuICAgICAgdG9rZW4gKz0gb3B0aW9ucy5mb3JtYXR0ZXIod29yZCgpLCByZWxhdGl2ZUluZGV4KTtcbiAgICB9IGVsc2Uge1xuICAgICAgdG9rZW4gKz0gb3B0aW9ucy5mb3JtYXR0ZXIod29yZCgpLCByZWxhdGl2ZUluZGV4KSArIG9wdGlvbnMuc2VwYXJhdG9yO1xuICAgIH1cblxuICAgIHJlbGF0aXZlSW5kZXgrKztcblxuICAgIGlmICgoaSArIDEpICUgb3B0aW9ucy53b3Jkc1BlclN0cmluZyA9PT0gMCkge1xuICAgICAgcmVzdWx0cy5wdXNoKHRva2VuKTtcbiAgICAgIHRva2VuID0gJyc7XG4gICAgICByZWxhdGl2ZUluZGV4ID0gMDtcbiAgICB9XG4gIH1cblxuICBpZiAodHlwZW9mIG9wdGlvbnMuam9pbiA9PT0gJ3N0cmluZycpIHtcbiAgICByZXN1bHRzID0gcmVzdWx0cy5qb2luKG9wdGlvbnMuam9pbik7XG4gIH1cblxuICByZXR1cm4gcmVzdWx0cztcbn1cblxubW9kdWxlLmV4cG9ydHMgPSB3b3JkczsgLy8gRXhwb3J0IHRoZSB3b3JkIGxpc3QgYXMgaXQgaXMgb2Z0ZW4gdXNlZnVsXG5cbndvcmRzLndvcmRMaXN0ID0gd29yZExpc3Q7IiwiaW1wb3J0IFwiLi9zdHlsZXMvaW5kZXguc2Nzc1wiO1xuaW1wb3J0IEdhbWUgZnJvbSAnLi9zY3JpcHRzL2dhbWUnO1xuXG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCAoKSA9PiB7XG4gICAgY29uc3QgY2FudmFzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzaGlwLWdhbWVcIik7XG4gICAgY29uc3QgY3R4ID0gY2FudmFzLmdldENvbnRleHQoJzJkJyk7XG4gICAgY29uc3QgYmdDYW52YXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImJnLWNhbnZhc1wiKTtcbiAgICBjb25zdCBiZ0N0eCA9IGJnQ2FudmFzLmdldENvbnRleHQoJzJkJyk7XG4gICAgY29uc3QgcENhbnZhcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicGxheWVyLXNjcmVlblwiKTtcbiAgICBjb25zdCBwQ3R4ID0gcENhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xuXG4gICAgY29uc3QgaW5wdXRTZWN0aW9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJpbnB1dC1zZWN0aW9uXCIpO1xuICAgIFxuICAgIGNvbnN0IHBsYXllcldvcmQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncGxheWVyLXdvcmQnKTtcbiAgICBwbGF5ZXJXb3JkLmF1dG9mb2N1cyA9IHRydWU7XG5cbiAgICBpbnB1dFNlY3Rpb24uYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgaGFuZGxlU3VibWl0KTtcbiAgICBjb25zdCBuZXdHYW1lID0gbmV3IEdhbWUoY2FudmFzLCBjdHgsIGJnQ3R4LCBwQ3R4KTtcbiAgICBcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwia2V5cHJlc3NcIiwgcmVtb3ZlU3BsYXNoKTtcblxuICAgIGNvbnN0IHN0YXJ0QnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3N0YXJ0Jyk7XG4gICAgc3RhcnRCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHJlbW92ZVNwbGFzaCk7XG4gICAgXG4gICAgZnVuY3Rpb24gcmVtb3ZlU3BsYXNoKGUpIHtcbiAgICAgICAgLy8gZGVidWdnZXJcbiAgICAgICAgaWYgKChlLmtleSA9PT0gJ0VudGVyJykgfHwgKGUudHlwZSA9PT0gXCJjbGlja1wiKSkge1xuICAgICAgICAgICAgY29uc3Qgc3BsYXNoID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzcGxhc2hcIik7XG4gICAgICAgICAgICBzcGxhc2guc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgICAgICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJrZXlwcmVzc1wiLCByZW1vdmVTcGxhc2gpO1xuICAgICAgICAgICAgc3RhcnRCdG4ucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHJlbW92ZVNwbGFzaCk7XG4gICAgICAgICAgICBuZXdHYW1lLnN0YXJ0KCk7XG4gICAgICAgICAgICBwbGF5ZXJXb3JkLmZvY3VzKCk7XG4gICAgICAgIH1cbiAgICB9XG5cblxuXG4gICAgZnVuY3Rpb24gaGFuZGxlU3VibWl0KGUpIHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBuZXdHYW1lLmNoZWNrV29yZChwbGF5ZXJXb3JkLnZhbHVlLnRyaW0oKSk7XG4gICAgICAgIGlucHV0U2VjdGlvbi5yZXNldCgpO1xuICAgIH07XG5cblxuXG59KTsiLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBCYWNrZ3JvdW5kIHtcbiAgICBjb25zdHJ1Y3RvcihjYW52YXMsIGN0eCwgc3BlZWQpIHtcbiAgICAgICAgdGhpcy5jYW52YXMgPSBjYW52YXM7XG4gICAgICAgIHRoaXMuY3R4ID0gY3R4O1xuICAgICAgICAvLyB0aGlzLnNwZWVkID0gc3BlZWQ7XG4gICAgICAgIHRoaXMuYkltYWdlID0gbmV3IEltYWdlKCk7XG4gICAgICAgIHRoaXMuYkltYWdlLnNyYyA9ICcuL3NyYy9hc3NldHMvc3ByaXRlc2hlZXQucG5nJztcbiAgICAgICAgdGhpcy5oZWlnaHQgPSB0aGlzLmNhbnZhcy5oZWlnaHQ7XG4gICAgICAgIHRoaXMud2lkdGggPSB0aGlzLmNhbnZhcy53aWR0aDtcbiAgICAgICAgdGhpcy5iVEZyYW1lcyA9IFsyLCAyNjAsIDUxOCwgNzc2LCAxMDM0XTtcbiAgICAgICAgdGhpcy5iQkZyYW1lcyA9IFsyLCAyNjAsIDUxOCwgNzc2LCAxMDM0LCAxMjkyXTtcbiAgICAgICAgdGhpcy50RnJhbWUgPSAwO1xuICAgICAgICB0aGlzLmJGcmFtZSA9IDA7XG4gICAgICAgIC8vIHRoaXMueSA9IDA7XG4gICAgfTtcblxuICAgIGFuaW1hdGUoKSB7XG4gICAgICAgIHRoaXMuY3R4LmNsZWFyUmVjdCgwLCAwLCB0aGlzLndpZHRoLCB0aGlzLmhlaWdodCk7XG4gICAgICAgIHRoaXMuY3R4LmRyYXdJbWFnZSh0aGlzLmJJbWFnZSwgdGhpcy5iQkZyYW1lc1t0aGlzLmJGcmFtZV0sIDIyNiwgMjU2LCAyMjIsIDAsIDAsIHRoaXMuY2FudmFzLndpZHRoLCB0aGlzLmNhbnZhcy5oZWlnaHQpO1xuICAgICAgICB0aGlzLmN0eC5kcmF3SW1hZ2UodGhpcy5iSW1hZ2UsIHRoaXMuYlRGcmFtZXNbdGhpcy50RnJhbWVdLCAyLCAyNTYsIDIyMiwgMCwgMCwgdGhpcy5jYW52YXMud2lkdGgsIHRoaXMuY2FudmFzLmhlaWdodCk7XG4gICAgICAgIHRoaXMuYkZyYW1lICs9IDE7XG4gICAgICAgIHRoaXMudEZyYW1lICs9IDE7XG4gICAgICAgIGlmICh0aGlzLmJGcmFtZSA+IDUpIHRoaXMuYkZyYW1lID0gMDtcbiAgICAgICAgaWYgKHRoaXMudEZyYW1lID4gNCkgdGhpcy50RnJhbWUgPSAwO1xuICAgIH07XG59IiwidmFyIHJhbmRvbVdvcmRzID0gcmVxdWlyZSgncmFuZG9tLXdvcmRzJyk7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEVuZW15IHtcbiAgICBjb25zdHJ1Y3RvcihjYW52YXMsIGN0eCwgc3BlZWQsIHNoaXBQb3MpIHtcbiAgICAgICAgdGhpcy5jYW52YXMgPSBjYW52YXM7XG4gICAgICAgIHRoaXMuY3R4ID0gY3R4O1xuICAgICAgICB0aGlzLndvcmQgPSByYW5kb21Xb3JkcygpO1xuICAgICAgICB0aGlzLnNwZWVkPSBzcGVlZDtcbiAgICAgICAgdGhpcy5yZW5kZXJlZCA9IHRydWU7XG4gICAgICAgIHRoaXMuc2hpcEltZyA9IG5ldyBJbWFnZSgpO1xuICAgICAgICB0aGlzLnNoaXBJbWcuc3JjID0gXCIuL3NyYy9hc3NldHMvdGllX2ZpZ2h0ZXIucG5nXCI7XG4gICAgICAgIHRoaXMuc3ByaXRlcyA9IG5ldyBJbWFnZSgpO1xuICAgICAgICB0aGlzLnNwcml0ZXMuc3JjID0gJy4vc3JjL2Fzc2V0cy9zcHJpdGVzaGVldC5wbmcnO1xuICAgICAgICB0aGlzLnNoaXBQb3MgPSBzaGlwUG9zO1xuICAgICAgICB0aGlzLmR6ID0gMC4xO1xuICAgICAgICB0aGlzLmR4ID0gKHRoaXMuc2hpcFBvc1swXSAvIDI1Nik7XG4gICAgICAgIHRoaXMuYXR0YWNraW5nID0gZmFsc2U7XG4gICAgICAgIHRoaXMuYXRmID0gMDtcblxuICAgICAgICB0aGlzLmRyYXcgPSB0aGlzLmRyYXcuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5hdHRhY2sgPSB0aGlzLmF0dGFjay5iaW5kKHRoaXMpO1xuICAgIH07XG5cbiAgICBkcmF3KCkge1xuICAgICAgICBcbiAgICAgICAgdGhpcy5jdHguZHJhd0ltYWdlKHRoaXMuc2hpcEltZywgKCB0aGlzLmR4ICogdGhpcy5jYW52YXMud2lkdGgpLCAoKHRoaXMuc2hpcFBvc1sxXSAvIDIyMikgKiB0aGlzLmNhbnZhcy5oZWlnaHQpLCAodGhpcy5keiAqICh0aGlzLmNhbnZhcy53aWR0aCAqICg0MCAvIDI1NikpKSwgKHRoaXMuZHogKiAodGhpcy5jYW52YXMuaGVpZ2h0ICogKDQwIC8gMjIyKSkpKTtcbiAgICAgICAgdGhpcy5jdHguZmlsbFN0eWxlID0gXCIjRkZGRkZGXCI7XG4gICAgICAgIHRoaXMuY3R4LmZvbnQgPSAnMjBweCBSZWQgUm9zZSc7XG4gICAgICAgIHRoaXMuY3R4LnRleHRBbGlnbiA9IFwiY2VudGVyXCI7XG4gICAgICAgIHRoaXMuY3R4LmZpbGxUZXh0KHRoaXMud29yZCwgKCggdGhpcy5keCAqIHRoaXMuY2FudmFzLndpZHRoKSArICh0aGlzLmR6ICoodGhpcy5jYW52YXMud2lkdGggKiAyMC8yNTYpKSksICgodGhpcy5zaGlwUG9zWzFdIC8gMjIyKSAqIHRoaXMuY2FudmFzLmhlaWdodCkpO1xuICAgICAgICB0aGlzLmF0dGFjaygpO1xuICAgIH07XG5cbiAgICBhbmltYXRlKCl7XG4gICAgICAgIGlmICh0aGlzLnJlbmRlcmVkKSB7XG4gICAgICAgIGlmICh0aGlzLmR6IDwgMSkge1xuICAgICAgICAgICAgdGhpcy5keiArPSB0aGlzLnNwZWVkO1xuICAgICAgICAgICAgdGhpcy5keCAtPSAuMDAxO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuZHJhdygpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgYXR0YWNrKCkge1xuICAgICAgICBpZiAodGhpcy5keiA+PSAxKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5hdHRhY2tpbmcpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmN0eC5kcmF3SW1hZ2UodGhpcy5zcHJpdGVzLCA3NzEsIDQ1MCwgMjQ1LCA2OCwgXG4gICAgICAgICAgICAgICAgICAgIC8vICgoIHRoaXMuZHggKiB0aGlzLmNhbnZhcy53aWR0aCkgLSAodGhpcy5keiAqKHRoaXMuY2FudmFzLndpZHRoICogMTIyLzI1NikpKSwgXG4gICAgICAgICAgICAgICAgICAgICggKCh0aGlzLnNoaXBQb3NbMF0gLSAxMjUpIC8gMjU2KSogdGhpcy5jYW52YXMud2lkdGgpLCBcbiAgICAgICAgICAgICAgICAgICAgKCgoKHRoaXMuc2hpcFBvc1sxXSArIDI1KSAvIDIyMikgKiB0aGlzLmNhbnZhcy5oZWlnaHQpKSwgXG4gICAgICAgICAgICAgICAgICAgICh0aGlzLmNhbnZhcy53aWR0aCAqIDI0NS8yNTYpLCBcbiAgICAgICAgICAgICAgICAgICAgKHRoaXMuY2FudmFzLmhlaWdodCAqICgoMjIyLSh0aGlzLnNoaXBQb3NbMV0gKyAyNSkpLyAyMjIpKSk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYXRmICs9IDE7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmF0ZiA+IDIwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmF0dGFja2luZyA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5hdGYgPSAwXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSAgICBcbiAgICB9XG59XG4iLCJpbXBvcnQgRW5lbXkgZnJvbSAnLi9lbmVteSc7XG5pbXBvcnQgQmFja2dyb3VuZCBmcm9tICcuL2JhY2tncm91bmQnO1xuaW1wb3J0IFBsYXllciBmcm9tICcuL3BsYXllcic7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEdhbWUge1xuICAgIGNvbnN0cnVjdG9yKGNhbnZhcywgY3R4LCBiZ0N0eCwgcEN0eCkge1xuICAgICAgICB0aGlzLmNhbnZhcyA9IGNhbnZhcztcbiAgICAgICAgdGhpcy5jdHggPSBjdHg7XG4gICAgICAgIHRoaXMuYmdDdHggPSBiZ0N0eDtcbiAgICAgICAgdGhpcy5wQ3R4ID0gcEN0eDtcbiAgICAgICAgdGhpcy5iYWNrZ3JvdW5kID0gbmV3IEJhY2tncm91bmQoY2FudmFzLCBiZ0N0eCwgMS4wKTtcbiAgICAgICAgdGhpcy5mb2N1c2VkID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5zdGFydEdhbWUgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5zaGlwcyA9IFtdO1xuICAgICAgICB0aGlzLnBsYXllciA9IG5ldyBQbGF5ZXIoY2FudmFzLCBwQ3R4KTtcbiAgICAgICAgdGhpcy53b3JkcyA9IFtdO1xuICAgICAgICB0aGlzLnN0YXJ0UG9zaXRpb25zID0gW1s5NiwgODBdLCBbMTcyLCA3MF0sIFs2MywgMzBdLCBbMTIwLCAyNV0sIFsxOTcsIDIwXV07XG4gICAgICAgIHRoaXMudXNlZFN0YXJ0UG9zID0gW107XG4gICAgICAgIHRoaXMuYW5pbWF0ZSA9IHRoaXMuYW5pbWF0ZS5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLmFuaW1hdGVCYWNrZ3JvdW5kID0gdGhpcy5hbmltYXRlQmFja2dyb3VuZC5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLnN0YXJ0ID0gdGhpcy5zdGFydC5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLmNyZWF0ZUVuZW15ID0gdGhpcy5jcmVhdGVFbmVteS5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLmdlbmVyYXRlRW5lbWllcyA9IHRoaXMuZ2VuZXJhdGVFbmVtaWVzLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMuZ2VuZXJhdGVBdHRhY2tzID0gdGhpcy5nZW5lcmF0ZUF0dGFja3MuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5lbmVteUF0dGFjayA9IHRoaXMuZW5lbXlBdHRhY2suYmluZCh0aGlzKTtcbiAgICB9XG5cbiAgICBhbmltYXRlQmFja2dyb3VuZCgpIHtcbiAgICAgICAgdGhpcy5iZ0N0eC5jYW52YXMud2lkdGggPSB3aW5kb3cuaW5uZXJXaWR0aDtcbiAgICAgICAgdGhpcy5iZ0N0eC5jYW52YXMuaGVpZ2h0ID0gd2luZG93LmlubmVySGVpZ2h0O1xuICAgICAgICB0aGlzLnBDdHguY2FudmFzLndpZHRoID0gd2luZG93LmlubmVyV2lkdGg7XG4gICAgICAgIHRoaXMucEN0eC5jYW52YXMuaGVpZ2h0ID0gd2luZG93LmlubmVySGVpZ2h0O1xuICAgICAgICB0aGlzLmJhY2tncm91bmQuYW5pbWF0ZSgpO1xuICAgICAgICB0aGlzLnBsYXllci5hbmltYXRlKCk7XG5cbiAgICB9XG5cbiAgICBhbmltYXRlKCkge1xuICAgICAgICB0aGlzLmN0eC5jYW52YXMud2lkdGggPSB3aW5kb3cuaW5uZXJXaWR0aDtcbiAgICAgICAgdGhpcy5jdHguY2FudmFzLmhlaWdodCA9IHdpbmRvdy5pbm5lckhlaWdodDtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnNoaXBzLmxlbmd0aDsgaSsrKXtcbiAgICAgICAgICAgIGNvbnN0IHNoaXAgPSB0aGlzLnNoaXBzW2ldO1xuICAgICAgICAgICAgaWYgKHNoaXAucmVuZGVyZWQpe1xuICAgICAgICAgICAgICAgIHNoaXAuYW5pbWF0ZSgpO1xuICAgICAgICAgICAgICAgIC8vIGlmIChzaGlwLmR6ID49IDEpIHtcbiAgICAgICAgICAgICAgICAvLyAgICAgdGhpcy5wbGF5ZXIuaGVhbHRoIC09IDE7XG4gICAgICAgICAgICAgICAgLy8gICAgIHNoaXAuYXR0YWNraW5nID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAvLyAgICAgLy8gZGVidWdnZXJcbiAgICAgICAgICAgICAgICAvLyB9XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMuc2hpcHMuc3BsaWNlKGksIDEpO1xuICAgICAgICAgICAgICAgIHRoaXMud29yZHMuc3BsaWNlKGksIDEpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSh0aGlzLmFuaW1hdGUpO1xuICAgICAgICBcbiAgICB9XG5cbiAgICBzdGFydCgpIHtcbiAgICAgICAgaWYgKCF0aGlzLnN0YXJ0R2FtZSkge1xuICAgICAgICAgICAgdGhpcy5nZW5lcmF0ZUVuZW1pZXMoKTtcbiAgICAgICAgICAgIHRoaXMuZ2VuZXJhdGVBdHRhY2tzKCk7XG5cbiAgICAgICAgdGhpcy5zdGFydEdhbWUgPSB0cnVlO1xuICAgICAgICBjb25zdCBwbGF5ZXJXb3JkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3BsYXllci13b3JkJyk7XG4gICAgICAgIHBsYXllcldvcmQuYXV0b2ZvY3VzID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgd2luZG93Lm9uYmx1ciA9ICgpID0+IHRoaXMuZm9jdXNlZCA9IGZhbHNlO1xuICAgICAgICB3aW5kb3cub25mb2N1cyA9ICgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuZm9jdXNlZCA9IHRydWU7XG4gICAgICAgICAgICB0aGlzLmdlbmVyYXRlRW5lbWllcygpO1xuICAgICAgICAgICAgdGhpcy5nZW5lcmF0ZUF0dGFja3MoKTtcblxuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgcGxheWVyV29yZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwbGF5ZXItd29yZCcpO1xuICAgICAgICBwbGF5ZXJXb3JkLmF1dG9mb2N1cyA9IHRydWU7XG4gICAgICAgIHRoaXMuY2FudmFzLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCk9PiBwbGF5ZXJXb3JkLmZvY3VzKCkpO1xuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYmctY2FudmFzJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKT0+IHBsYXllcldvcmQuZm9jdXMoKSk7XG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwbGF5ZXItc2NyZWVuJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKT0+IHBsYXllcldvcmQuZm9jdXMoKSk7XG5cblxuICAgICAgICBzZXRJbnRlcnZhbCh0aGlzLmFuaW1hdGVCYWNrZ3JvdW5kLCAxMjUpO1xuICAgICAgICB0aGlzLmFuaW1hdGUoKTtcbiAgICB9XG5cbiAgICBjcmVhdGVFbmVteShjYW52YXMsIGN0eCkge1xuICAgICAgICBpZiAodGhpcy5zdGFydFBvc2l0aW9ucy5sZW5ndGgpIHtcbiAgICAgICAgICAgIGxldCBlbmVteSA9IG5ldyBFbmVteShjYW52YXMsIGN0eCwgLjAxLCB0aGlzLnN0YXJ0UG9zaXRpb25zWzBdKTtcbiAgICAgICAgICAgIHRoaXMuc2hpcHMucHVzaChlbmVteSk7XG4gICAgICAgICAgICB0aGlzLndvcmRzLnB1c2goZW5lbXkud29yZCk7XG4gICAgICAgICAgICBsZXQgeCA9IHRoaXMuc3RhcnRQb3NpdGlvbnMuc2hpZnQoKTtcbiAgICAgICAgICAgIHRoaXMudXNlZFN0YXJ0UG9zLnB1c2goeCk7XG4gICAgICAgIH0gXG4gICAgfVxuXG4gICAgZ2VuZXJhdGVFbmVtaWVzKCkge1xuICAgICAgICBsZXQgZGVsYXkgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiA1MDAwKTtcbiAgICAgICAgaWYgKHRoaXMuZm9jdXNlZCkge1xuICAgICAgICAgICAgc2V0VGltZW91dCgoKT0+e1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmNyZWF0ZUVuZW15KHRoaXMuY2FudmFzLCB0aGlzLmN0eCk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZ2VuZXJhdGVFbmVtaWVzKCk7XG4gICAgICAgICAgICB9LCBkZWxheSAtIC4yKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGdlbmVyYXRlQXR0YWNrcyAoKSB7XG4gICAgICAgICAgICAgICAgbGV0IGRlbGF5ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogNTAwMCk7XG4gICAgICAgIGlmICh0aGlzLmZvY3VzZWQpIHtcbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCk9PntcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuc2hpcHMubGVuZ3RoKSB0aGlzLmVuZW15QXR0YWNrKCk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZ2VuZXJhdGVBdHRhY2tzKCk7XG4gICAgICAgICAgICB9LCBkZWxheSAtIC4yKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGVuZW15QXR0YWNrKCkge1xuICAgICAgICBsZXQgc2hpcCA9IHRoaXMuc2hpcHNbTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogdGhpcy5zaGlwcy5sZW5ndGgpXTtcbiAgICAgICAgaWYgKCFzaGlwLmF0dGFja2luZyAmJiBzaGlwLmR6ID49IDEpIHtcbiAgICAgICAgICAgIHNoaXAuYXR0YWNraW5nID0gdHJ1ZTtcbiAgICAgICAgICAgIHRoaXMucGxheWVyLmhlYWx0aCAtPTE7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjaGVja1dvcmQod29yZCkge1xuICAgICAgICBsZXQgaSA9IHRoaXMud29yZHMuaW5kZXhPZih3b3JkKTtcbiAgICAgICAgaWYgKGkgIT0gLTEpIHtcbiAgICAgICAgICAgIHRoaXMuc3RhcnRQb3NpdGlvbnMucHVzaCh0aGlzLnNoaXBzW2ldLnNoaXBQb3MpO1xuICAgICAgICAgICAgdGhpcy5zaGlwc1tpXS5yZW5kZXJlZCA9IGZhbHNlO1xuICAgICAgICAgICAgdGhpcy5wbGF5ZXIuc2NvcmUgKz0gMTtcbiAgICAgICAgfVxuICAgIH1cblxuXG59IiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgUGxheWVyIHtcbiAgY29uc3RydWN0b3IoY2FudmFzLCBjdHgpIHtcbiAgICB0aGlzLmNhbnZhcyA9IGNhbnZhcztcbiAgICB0aGlzLmN0eCA9IGN0eDtcbiAgICB0aGlzLnBJbWcgPSBuZXcgSW1hZ2UoKTtcbiAgICB0aGlzLnBJbWcuc3JjID0gXCIuL3NyYy9hc3NldHMvc3ByaXRlc2hlZXQucG5nXCI7XG4gICAgdGhpcy5uYXZTY3JlZW5GcmFtZXMgPSBbMjYwLCAzMTZdO1xuICAgIHRoaXMublNGID0gMDtcbiAgICB0aGlzLmhlYWx0aCA9IDEwO1xuICAgIHRoaXMuc2NvcmVGcmFtZXMgPSBbMzM3LCAzMjgsIDI3MCwgMjc3LCAyODUsIDI5MiwgMjk5LCAzMDYsIDMxMywgMzIwXTtcbiAgICB0aGlzLnNjb3JlID0gMDtcbiAgfVxuXG5cbiAgYW5pbWF0ZSgpIHtcbiAgICAgICAgdGhpcy5jdHguZHJhd0ltYWdlKHRoaXMucEltZywgMiwgNDUwLCAyNTYsIDE2MywgMCwgKCg1OSAvIDIyMikgKiB0aGlzLmNhbnZhcy5oZWlnaHQpLCB0aGlzLmNhbnZhcy53aWR0aCwgKCgxNjMgLyAyMjIpICogdGhpcy5jYW52YXMuaGVpZ2h0KSk7XG4gICAgICAgIHRoaXMuY3R4LmRyYXdJbWFnZSh0aGlzLnBJbWcsIHRoaXMubmF2U2NyZWVuRnJhbWVzW3RoaXMublNGXSwgNTgwLCA1NCwgMzMsICgoMTAxIC8gMjU2KSAqIHRoaXMuY2FudmFzLndpZHRoKSwgKCgxNzYgLyAyMjIpICogdGhpcy5jYW52YXMuaGVpZ2h0KSwgKCg1NCAvIDI1NikgKiB0aGlzLmNhbnZhcy53aWR0aCksICgoMzMgLyAyMjIpICogdGhpcy5jYW52YXMuaGVpZ2h0KSk7XG4gICAgICAgIHRoaXMublNGICs9IDE7XG4gICAgICAgIGlmICh0aGlzLm5TRiA+IDEpIHRoaXMublNGID0gMDtcblxuICAgICAgICBpZiAoIHRoaXMuaGVhbHRoIDw9IDkgKSB0aGlzLmN0eC5kcmF3SW1hZ2UodGhpcy5wSW1nLCAyNjgsIDU2MSwgNiwgMywgKCgxNjEgLyAyNTYpICogdGhpcy5jYW52YXMud2lkdGgpLCAoKDE1MyAvIDIyMikgKiB0aGlzLmNhbnZhcy5oZWlnaHQpLCAoKDYgLyAyNTYpICogdGhpcy5jYW52YXMud2lkdGgpLCAoKDMgLyAyMjIpICogdGhpcy5jYW52YXMuaGVpZ2h0KSk7XG4gICAgICAgIGlmICggdGhpcy5oZWFsdGggPD0gOCApIHRoaXMuY3R4LmRyYXdJbWFnZSh0aGlzLnBJbWcsIDI2OCwgNTYxLCA2LCAzLCAoKDE1MyAvIDI1NikgKiB0aGlzLmNhbnZhcy53aWR0aCksICgoMTUzIC8gMjIyKSAqIHRoaXMuY2FudmFzLmhlaWdodCksICgoNiAvIDI1NikgKiB0aGlzLmNhbnZhcy53aWR0aCksICgoMyAvIDIyMikgKiB0aGlzLmNhbnZhcy5oZWlnaHQpKTtcbiAgICAgICAgaWYgKCB0aGlzLmhlYWx0aCA8PSA3ICkgdGhpcy5jdHguZHJhd0ltYWdlKHRoaXMucEltZywgMjY4LCA1NjEsIDYsIDMsICgoMTQ1IC8gMjU2KSAqIHRoaXMuY2FudmFzLndpZHRoKSwgKCgxNTMgLyAyMjIpICogdGhpcy5jYW52YXMuaGVpZ2h0KSwgKCg2IC8gMjU2KSAqIHRoaXMuY2FudmFzLndpZHRoKSwgKCgzIC8gMjIyKSAqIHRoaXMuY2FudmFzLmhlaWdodCkpO1xuICAgICAgICBpZiAoIHRoaXMuaGVhbHRoIDw9IDYgKSB0aGlzLmN0eC5kcmF3SW1hZ2UodGhpcy5wSW1nLCAyNjgsIDU2MSwgNiwgMywgKCgxMzcgLyAyNTYpICogdGhpcy5jYW52YXMud2lkdGgpLCAoKDE1MyAvIDIyMikgKiB0aGlzLmNhbnZhcy5oZWlnaHQpLCAoKDYgLyAyNTYpICogdGhpcy5jYW52YXMud2lkdGgpLCAoKDMgLyAyMjIpICogdGhpcy5jYW52YXMuaGVpZ2h0KSk7XG4gICAgICAgIGlmICggdGhpcy5oZWFsdGggPD0gNSApIHRoaXMuY3R4LmRyYXdJbWFnZSh0aGlzLnBJbWcsIDI2OCwgNTYxLCA2LCAzLCAoKDEyOSAvIDI1NikgKiB0aGlzLmNhbnZhcy53aWR0aCksICgoMTUzIC8gMjIyKSAqIHRoaXMuY2FudmFzLmhlaWdodCksICgoNiAvIDI1NikgKiB0aGlzLmNhbnZhcy53aWR0aCksICgoMyAvIDIyMikgKiB0aGlzLmNhbnZhcy5oZWlnaHQpKTtcbiAgICAgICAgaWYgKCB0aGlzLmhlYWx0aCA8PSA0ICkgdGhpcy5jdHguZHJhd0ltYWdlKHRoaXMucEltZywgMjY4LCA1NjEsIDYsIDMsICgoMTIxIC8gMjU2KSAqIHRoaXMuY2FudmFzLndpZHRoKSwgKCgxNTMgLyAyMjIpICogdGhpcy5jYW52YXMuaGVpZ2h0KSwgKCg2IC8gMjU2KSAqIHRoaXMuY2FudmFzLndpZHRoKSwgKCgzIC8gMjIyKSAqIHRoaXMuY2FudmFzLmhlaWdodCkpO1xuICAgICAgICBpZiAoIHRoaXMuaGVhbHRoIDw9IDMgKSB0aGlzLmN0eC5kcmF3SW1hZ2UodGhpcy5wSW1nLCAyNjgsIDU2MSwgNiwgMywgKCgxMTMgLyAyNTYpICogdGhpcy5jYW52YXMud2lkdGgpLCAoKDE1MyAvIDIyMikgKiB0aGlzLmNhbnZhcy5oZWlnaHQpLCAoKDYgLyAyNTYpICogdGhpcy5jYW52YXMud2lkdGgpLCAoKDMgLyAyMjIpICogdGhpcy5jYW52YXMuaGVpZ2h0KSk7XG4gICAgICAgIGlmICggdGhpcy5oZWFsdGggPD0gMiApIHRoaXMuY3R4LmRyYXdJbWFnZSh0aGlzLnBJbWcsIDI2OCwgNTYxLCA2LCAzLCAoKDEwNSAvIDI1NikgKiB0aGlzLmNhbnZhcy53aWR0aCksICgoMTUzIC8gMjIyKSAqIHRoaXMuY2FudmFzLmhlaWdodCksICgoNiAvIDI1NikgKiB0aGlzLmNhbnZhcy53aWR0aCksICgoMyAvIDIyMikgKiB0aGlzLmNhbnZhcy5oZWlnaHQpKTtcbiAgICAgICAgaWYgKCB0aGlzLmhlYWx0aCA8PSAxICkgdGhpcy5jdHguZHJhd0ltYWdlKHRoaXMucEltZywgMjY4LCA1NjEsIDYsIDMsICgoOTcgLyAyNTYpICAqIHRoaXMuY2FudmFzLndpZHRoKSwgKCgxNTMgLyAyMjIpICogdGhpcy5jYW52YXMuaGVpZ2h0KSwgKCg2IC8gMjU2ICkgKiB0aGlzLmNhbnZhcy53aWR0aCksICgoMyAvIDIyMikgKiB0aGlzLmNhbnZhcy5oZWlnaHQpKTtcbiAgICAgICAgaWYgKCB0aGlzLmhlYWx0aCA8PSAwICkgdGhpcy5jdHguZHJhd0ltYWdlKHRoaXMucEltZywgMjY4LCA1NjEsIDYsIDMsICgoODkgLyAyNTYpICogdGhpcy5jYW52YXMud2lkdGgpLCAoKDE1MyAvIDIyMikgKiB0aGlzLmNhbnZhcy5oZWlnaHQpLCAoKDYgLyAyNTYpICogdGhpcy5jYW52YXMud2lkdGgpLCAoKDMgLyAyMjIpICogdGhpcy5jYW52YXMuaGVpZ2h0KSk7XG5cbiAgICAgIGxldCB0ZW5zID0gTWF0aC5mbG9vcih0aGlzLnNjb3JlIC8gMTApO1xuICAgICAgbGV0IG9uZXMgPSB0aGlzLnNjb3JlICUgMTA7XG4gICAgICBcbiAgICAgIHRoaXMuY3R4LmRyYXdJbWFnZSh0aGlzLnBJbWcsIHRoaXMuc2NvcmVGcmFtZXNbdGVuc10sIDU3MSwgNiwgNywgKCgxNjkgLyAyNTYpICogdGhpcy5jYW52YXMud2lkdGgpLCAoKDIwMCAvIDIyMikgKiB0aGlzLmNhbnZhcy5oZWlnaHQpLCAoKDYgLyAyNTYpICogdGhpcy5jYW52YXMud2lkdGgpLCAoKDcgLyAyMjIpICogdGhpcy5jYW52YXMuaGVpZ2h0KSk7XG4gICAgICB0aGlzLmN0eC5kcmF3SW1hZ2UodGhpcy5wSW1nLCB0aGlzLnNjb3JlRnJhbWVzW29uZXNdLCA1NzEsIDYsIDcsICgoMTc3IC8gMjU2KSAqIHRoaXMuY2FudmFzLndpZHRoKSwgKCgyMDAgLyAyMjIpICogdGhpcy5jYW52YXMuaGVpZ2h0KSwgKCg2IC8gMjU2KSAqIHRoaXMuY2FudmFzLndpZHRoKSwgKCg3IC8gMjIyKSAqIHRoaXMuY2FudmFzLmhlaWdodCkpO1xuICAgICAgXG4gIH1cbn1cbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiJdLCJzb3VyY2VSb290IjoiIn0=