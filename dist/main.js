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
      if (this.tFrame > 4) this.tFrame = 0; // this.y += this.speed;
      // this.ctx.drawImage(
      //   this.backgroundImage,
      //   0,
      //   this.y,
      //   this.canvas.width,
      //   this.canvas.height
      // );
      // this.ctx.drawImage(
      //   this.backgroundImage,
      //   0,
      //   this.y - this.canvas.height,
      //   this.canvas.width,
      //   this.canvas.height
      // );
      // if (this.y === this.canvas.height) this.y = 0;
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
      this.ctx.font = '20px Red Rose'; // const wordPos = (100 - (this.word.length * 20)) / 2;

      this.ctx.textAlign = "center";
      this.ctx.fillText(this.word, this.dx * this.canvas.width + this.dz * (this.canvas.width * 20 / 256), this.shipPos[1] / 222 * this.canvas.height);
      this.attack(); // debugger
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
          (this.shipPos[0] - 125) / 256 * this.canvas.width, (this.shipPos[1] + 25) / 222 * this.canvas.height, this.canvas.width * 245 / 256, this.canvas.height * ((222 - (this.shipPos[1] + 25)) / 222)); // debugger

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
    this.startPositions = [[96, 80], [172, 70], [63, 30], [120, 35], [197, 20]];
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
      // debugger
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
          // if (!.this.startPositions)
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
          // if (!.this.startPositions)
          // this.createEnemy(this.canvas, this.ctx);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3JhbmRvbS13b3Jkcy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMvYmFja2dyb3VuZC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NyaXB0cy9lbmVteS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NyaXB0cy9nYW1lLmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL3BsYXllci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3R5bGVzL2luZGV4LnNjc3MiXSwibmFtZXMiOlsiZG9jdW1lbnQiLCJhZGRFdmVudExpc3RlbmVyIiwiY2FudmFzIiwiZ2V0RWxlbWVudEJ5SWQiLCJjdHgiLCJnZXRDb250ZXh0IiwiYmdDYW52YXMiLCJiZ0N0eCIsInBDYW52YXMiLCJwQ3R4IiwiaW5wdXRTZWN0aW9uIiwicGxheWVyV29yZCIsImF1dG9mb2N1cyIsImhhbmRsZVN1Ym1pdCIsIm5ld0dhbWUiLCJHYW1lIiwicmVtb3ZlU3BsYXNoIiwic3RhcnRCdG4iLCJlIiwia2V5IiwidHlwZSIsInNwbGFzaCIsInN0eWxlIiwiZGlzcGxheSIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJzdGFydCIsImZvY3VzIiwicHJldmVudERlZmF1bHQiLCJjaGVja1dvcmQiLCJ2YWx1ZSIsInRyaW0iLCJyZXNldCIsIkJhY2tncm91bmQiLCJzcGVlZCIsImJJbWFnZSIsIkltYWdlIiwic3JjIiwiaGVpZ2h0Iiwid2lkdGgiLCJiVEZyYW1lcyIsImJCRnJhbWVzIiwidEZyYW1lIiwiYkZyYW1lIiwiY2xlYXJSZWN0IiwiZHJhd0ltYWdlIiwicmFuZG9tV29yZHMiLCJyZXF1aXJlIiwiRW5lbXkiLCJzaGlwUG9zIiwid29yZCIsInJlbmRlcmVkIiwic2hpcEltZyIsInNwcml0ZXMiLCJkeiIsImR4IiwiYXR0YWNraW5nIiwiYXRmIiwiZHJhdyIsImJpbmQiLCJhdHRhY2siLCJmaWxsU3R5bGUiLCJmb250IiwidGV4dEFsaWduIiwiZmlsbFRleHQiLCJiYWNrZ3JvdW5kIiwiZm9jdXNlZCIsInN0YXJ0R2FtZSIsInNoaXBzIiwicGxheWVyIiwiUGxheWVyIiwid29yZHMiLCJzdGFydFBvc2l0aW9ucyIsInVzZWRTdGFydFBvcyIsImFuaW1hdGUiLCJhbmltYXRlQmFja2dyb3VuZCIsImNyZWF0ZUVuZW15IiwiZ2VuZXJhdGVFbmVtaWVzIiwiZ2VuZXJhdGVBdHRhY2tzIiwiZW5lbXlBdHRhY2siLCJ3aW5kb3ciLCJpbm5lcldpZHRoIiwiaW5uZXJIZWlnaHQiLCJpIiwibGVuZ3RoIiwic2hpcCIsInNwbGljZSIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsIm9uYmx1ciIsIm9uZm9jdXMiLCJzZXRJbnRlcnZhbCIsImVuZW15IiwicHVzaCIsIngiLCJzaGlmdCIsImRlbGF5IiwiTWF0aCIsImZsb29yIiwicmFuZG9tIiwic2V0VGltZW91dCIsImhlYWx0aCIsImluZGV4T2YiLCJwSW1nIiwibmF2U2NyZWVuRnJhbWVzIiwiblNGIl0sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJC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SztBQUN4QixVQUFLLEtBQUs4RCxNQUFMLElBQWUsQ0FBcEIsRUFBd0IsS0FBSy9GLEdBQUwsQ0FBU3dDLFNBQVQsQ0FBbUIsS0FBS3lELElBQXhCLEVBQThCLEdBQTlCLEVBQW1DLEdBQW5DLEVBQXdDLENBQXhDLEVBQTJDLENBQTNDLEVBQWdELEtBQUssR0FBTixHQUFjLEtBQUtuRyxNQUFMLENBQVlvQyxLQUF6RSxFQUFtRixNQUFNLEdBQVAsR0FBYyxLQUFLcEMsTUFBTCxDQUFZbUMsTUFBNUcsRUFBdUgsSUFBSSxHQUFMLEdBQWEsS0FBS25DLE1BQUwsQ0FBWW9DLEtBQS9JLEVBQXlKLElBQUksR0FBTCxHQUFZLEtBQUtwQyxNQUFMLENBQVltQyxNQUFoTDtBQUN4QixVQUFLLEtBQUs4RCxNQUFMLElBQWUsQ0FBcEIsRUFBd0IsS0FBSy9GLEdBQUwsQ0FBU3dDLFNBQVQsQ0FBbUIsS0FBS3lELElBQXhCLEVBQThCLEdBQTlCLEVBQW1DLEdBQW5DLEVBQXdDLENBQXhDLEVBQTJDLENBQTNDLEVBQWdELEtBQUssR0FBTixHQUFhLEtBQUtuRyxNQUFMLENBQVlvQyxLQUF4RSxFQUFrRixNQUFNLEdBQVAsR0FBYyxLQUFLcEMsTUFBTCxDQUFZbUMsTUFBM0csRUFBc0gsSUFBSSxHQUFMLEdBQVksS0FBS25DLE1BQUwsQ0FBWW9DLEtBQTdJLEVBQXVKLElBQUksR0FBTCxHQUFZLEtBQUtwQyxNQUFMLENBQVltQyxNQUE5SztBQUM3Qjs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM1QkgsdUMiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiL2Rpc3QvXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwidmFyIHdvcmRMaXN0ID0gWy8vIEJvcnJvd2VkIGZyb20geGtjZCBwYXNzd29yZCBnZW5lcmF0b3Igd2hpY2ggYm9ycm93ZWQgaXQgZnJvbSB3aGVyZXZlclxuXCJhYmlsaXR5XCIsIFwiYWJsZVwiLCBcImFib2FyZFwiLCBcImFib3V0XCIsIFwiYWJvdmVcIiwgXCJhY2NlcHRcIiwgXCJhY2NpZGVudFwiLCBcImFjY29yZGluZ1wiLCBcImFjY291bnRcIiwgXCJhY2N1cmF0ZVwiLCBcImFjcmVzXCIsIFwiYWNyb3NzXCIsIFwiYWN0XCIsIFwiYWN0aW9uXCIsIFwiYWN0aXZlXCIsIFwiYWN0aXZpdHlcIiwgXCJhY3R1YWxcIiwgXCJhY3R1YWxseVwiLCBcImFkZFwiLCBcImFkZGl0aW9uXCIsIFwiYWRkaXRpb25hbFwiLCBcImFkamVjdGl2ZVwiLCBcImFkdWx0XCIsIFwiYWR2ZW50dXJlXCIsIFwiYWR2aWNlXCIsIFwiYWZmZWN0XCIsIFwiYWZyYWlkXCIsIFwiYWZ0ZXJcIiwgXCJhZnRlcm5vb25cIiwgXCJhZ2FpblwiLCBcImFnYWluc3RcIiwgXCJhZ2VcIiwgXCJhZ29cIiwgXCJhZ3JlZVwiLCBcImFoZWFkXCIsIFwiYWlkXCIsIFwiYWlyXCIsIFwiYWlycGxhbmVcIiwgXCJhbGlrZVwiLCBcImFsaXZlXCIsIFwiYWxsXCIsIFwiYWxsb3dcIiwgXCJhbG1vc3RcIiwgXCJhbG9uZVwiLCBcImFsb25nXCIsIFwiYWxvdWRcIiwgXCJhbHBoYWJldFwiLCBcImFscmVhZHlcIiwgXCJhbHNvXCIsIFwiYWx0aG91Z2hcIiwgXCJhbVwiLCBcImFtb25nXCIsIFwiYW1vdW50XCIsIFwiYW5jaWVudFwiLCBcImFuZ2xlXCIsIFwiYW5ncnlcIiwgXCJhbmltYWxcIiwgXCJhbm5vdW5jZWRcIiwgXCJhbm90aGVyXCIsIFwiYW5zd2VyXCIsIFwiYW50c1wiLCBcImFueVwiLCBcImFueWJvZHlcIiwgXCJhbnlvbmVcIiwgXCJhbnl0aGluZ1wiLCBcImFueXdheVwiLCBcImFueXdoZXJlXCIsIFwiYXBhcnRcIiwgXCJhcGFydG1lbnRcIiwgXCJhcHBlYXJhbmNlXCIsIFwiYXBwbGVcIiwgXCJhcHBsaWVkXCIsIFwiYXBwcm9wcmlhdGVcIiwgXCJhcmVcIiwgXCJhcmVhXCIsIFwiYXJtXCIsIFwiYXJteVwiLCBcImFyb3VuZFwiLCBcImFycmFuZ2VcIiwgXCJhcnJhbmdlbWVudFwiLCBcImFycml2ZVwiLCBcImFycm93XCIsIFwiYXJ0XCIsIFwiYXJ0aWNsZVwiLCBcImFzXCIsIFwiYXNpZGVcIiwgXCJhc2tcIiwgXCJhc2xlZXBcIiwgXCJhdFwiLCBcImF0ZVwiLCBcImF0bW9zcGhlcmVcIiwgXCJhdG9tXCIsIFwiYXRvbWljXCIsIFwiYXR0YWNoZWRcIiwgXCJhdHRhY2tcIiwgXCJhdHRlbXB0XCIsIFwiYXR0ZW50aW9uXCIsIFwiYXVkaWVuY2VcIiwgXCJhdXRob3JcIiwgXCJhdXRvbW9iaWxlXCIsIFwiYXZhaWxhYmxlXCIsIFwiYXZlcmFnZVwiLCBcImF2b2lkXCIsIFwiYXdhcmVcIiwgXCJhd2F5XCIsIFwiYmFieVwiLCBcImJhY2tcIiwgXCJiYWRcIiwgXCJiYWRseVwiLCBcImJhZ1wiLCBcImJhbGFuY2VcIiwgXCJiYWxsXCIsIFwiYmFsbG9vblwiLCBcImJhbmRcIiwgXCJiYW5rXCIsIFwiYmFyXCIsIFwiYmFyZVwiLCBcImJhcmtcIiwgXCJiYXJuXCIsIFwiYmFzZVwiLCBcImJhc2ViYWxsXCIsIFwiYmFzaWNcIiwgXCJiYXNpc1wiLCBcImJhc2tldFwiLCBcImJhdFwiLCBcImJhdHRsZVwiLCBcImJlXCIsIFwiYmVhblwiLCBcImJlYXJcIiwgXCJiZWF0XCIsIFwiYmVhdXRpZnVsXCIsIFwiYmVhdXR5XCIsIFwiYmVjYW1lXCIsIFwiYmVjYXVzZVwiLCBcImJlY29tZVwiLCBcImJlY29taW5nXCIsIFwiYmVlXCIsIFwiYmVlblwiLCBcImJlZm9yZVwiLCBcImJlZ2FuXCIsIFwiYmVnaW5uaW5nXCIsIFwiYmVndW5cIiwgXCJiZWhhdmlvclwiLCBcImJlaGluZFwiLCBcImJlaW5nXCIsIFwiYmVsaWV2ZWRcIiwgXCJiZWxsXCIsIFwiYmVsb25nXCIsIFwiYmVsb3dcIiwgXCJiZWx0XCIsIFwiYmVuZFwiLCBcImJlbmVhdGhcIiwgXCJiZW50XCIsIFwiYmVzaWRlXCIsIFwiYmVzdFwiLCBcImJldFwiLCBcImJldHRlclwiLCBcImJldHdlZW5cIiwgXCJiZXlvbmRcIiwgXCJiaWN5Y2xlXCIsIFwiYmlnZ2VyXCIsIFwiYmlnZ2VzdFwiLCBcImJpbGxcIiwgXCJiaXJkc1wiLCBcImJpcnRoXCIsIFwiYmlydGhkYXlcIiwgXCJiaXRcIiwgXCJiaXRlXCIsIFwiYmxhY2tcIiwgXCJibGFua1wiLCBcImJsYW5rZXRcIiwgXCJibGV3XCIsIFwiYmxpbmRcIiwgXCJibG9ja1wiLCBcImJsb29kXCIsIFwiYmxvd1wiLCBcImJsdWVcIiwgXCJib2FyZFwiLCBcImJvYXRcIiwgXCJib2R5XCIsIFwiYm9uZVwiLCBcImJvb2tcIiwgXCJib3JkZXJcIiwgXCJib3JuXCIsIFwiYm90aFwiLCBcImJvdHRsZVwiLCBcImJvdHRvbVwiLCBcImJvdW5kXCIsIFwiYm93XCIsIFwiYm93bFwiLCBcImJveFwiLCBcImJveVwiLCBcImJyYWluXCIsIFwiYnJhbmNoXCIsIFwiYnJhc3NcIiwgXCJicmF2ZVwiLCBcImJyZWFkXCIsIFwiYnJlYWtcIiwgXCJicmVha2Zhc3RcIiwgXCJicmVhdGhcIiwgXCJicmVhdGhlXCIsIFwiYnJlYXRoaW5nXCIsIFwiYnJlZXplXCIsIFwiYnJpY2tcIiwgXCJicmlkZ2VcIiwgXCJicmllZlwiLCBcImJyaWdodFwiLCBcImJyaW5nXCIsIFwiYnJvYWRcIiwgXCJicm9rZVwiLCBcImJyb2tlblwiLCBcImJyb3RoZXJcIiwgXCJicm91Z2h0XCIsIFwiYnJvd25cIiwgXCJicnVzaFwiLCBcImJ1ZmZhbG9cIiwgXCJidWlsZFwiLCBcImJ1aWxkaW5nXCIsIFwiYnVpbHRcIiwgXCJidXJpZWRcIiwgXCJidXJuXCIsIFwiYnVyc3RcIiwgXCJidXNcIiwgXCJidXNoXCIsIFwiYnVzaW5lc3NcIiwgXCJidXN5XCIsIFwiYnV0XCIsIFwiYnV0dGVyXCIsIFwiYnV5XCIsIFwiYnlcIiwgXCJjYWJpblwiLCBcImNhZ2VcIiwgXCJjYWtlXCIsIFwiY2FsbFwiLCBcImNhbG1cIiwgXCJjYW1lXCIsIFwiY2FtZXJhXCIsIFwiY2FtcFwiLCBcImNhblwiLCBcImNhbmFsXCIsIFwiY2Fubm90XCIsIFwiY2FwXCIsIFwiY2FwaXRhbFwiLCBcImNhcHRhaW5cIiwgXCJjYXB0dXJlZFwiLCBcImNhclwiLCBcImNhcmJvblwiLCBcImNhcmRcIiwgXCJjYXJlXCIsIFwiY2FyZWZ1bFwiLCBcImNhcmVmdWxseVwiLCBcImNhcnJpZWRcIiwgXCJjYXJyeVwiLCBcImNhc2VcIiwgXCJjYXN0XCIsIFwiY2FzdGxlXCIsIFwiY2F0XCIsIFwiY2F0Y2hcIiwgXCJjYXR0bGVcIiwgXCJjYXVnaHRcIiwgXCJjYXVzZVwiLCBcImNhdmVcIiwgXCJjZWxsXCIsIFwiY2VudFwiLCBcImNlbnRlclwiLCBcImNlbnRyYWxcIiwgXCJjZW50dXJ5XCIsIFwiY2VydGFpblwiLCBcImNlcnRhaW5seVwiLCBcImNoYWluXCIsIFwiY2hhaXJcIiwgXCJjaGFtYmVyXCIsIFwiY2hhbmNlXCIsIFwiY2hhbmdlXCIsIFwiY2hhbmdpbmdcIiwgXCJjaGFwdGVyXCIsIFwiY2hhcmFjdGVyXCIsIFwiY2hhcmFjdGVyaXN0aWNcIiwgXCJjaGFyZ2VcIiwgXCJjaGFydFwiLCBcImNoZWNrXCIsIFwiY2hlZXNlXCIsIFwiY2hlbWljYWxcIiwgXCJjaGVzdFwiLCBcImNoaWNrZW5cIiwgXCJjaGllZlwiLCBcImNoaWxkXCIsIFwiY2hpbGRyZW5cIiwgXCJjaG9pY2VcIiwgXCJjaG9vc2VcIiwgXCJjaG9zZVwiLCBcImNob3NlblwiLCBcImNodXJjaFwiLCBcImNpcmNsZVwiLCBcImNpcmN1c1wiLCBcImNpdGl6ZW5cIiwgXCJjaXR5XCIsIFwiY2xhc3NcIiwgXCJjbGFzc3Jvb21cIiwgXCJjbGF3c1wiLCBcImNsYXlcIiwgXCJjbGVhblwiLCBcImNsZWFyXCIsIFwiY2xlYXJseVwiLCBcImNsaW1hdGVcIiwgXCJjbGltYlwiLCBcImNsb2NrXCIsIFwiY2xvc2VcIiwgXCJjbG9zZWx5XCIsIFwiY2xvc2VyXCIsIFwiY2xvdGhcIiwgXCJjbG90aGVzXCIsIFwiY2xvdGhpbmdcIiwgXCJjbG91ZFwiLCBcImNsdWJcIiwgXCJjb2FjaFwiLCBcImNvYWxcIiwgXCJjb2FzdFwiLCBcImNvYXRcIiwgXCJjb2ZmZWVcIiwgXCJjb2xkXCIsIFwiY29sbGVjdFwiLCBcImNvbGxlZ2VcIiwgXCJjb2xvbnlcIiwgXCJjb2xvclwiLCBcImNvbHVtblwiLCBcImNvbWJpbmF0aW9uXCIsIFwiY29tYmluZVwiLCBcImNvbWVcIiwgXCJjb21mb3J0YWJsZVwiLCBcImNvbWluZ1wiLCBcImNvbW1hbmRcIiwgXCJjb21tb25cIiwgXCJjb21tdW5pdHlcIiwgXCJjb21wYW55XCIsIFwiY29tcGFyZVwiLCBcImNvbXBhc3NcIiwgXCJjb21wbGV0ZVwiLCBcImNvbXBsZXRlbHlcIiwgXCJjb21wbGV4XCIsIFwiY29tcG9zZWRcIiwgXCJjb21wb3NpdGlvblwiLCBcImNvbXBvdW5kXCIsIFwiY29uY2VybmVkXCIsIFwiY29uZGl0aW9uXCIsIFwiY29uZ3Jlc3NcIiwgXCJjb25uZWN0ZWRcIiwgXCJjb25zaWRlclwiLCBcImNvbnNpc3RcIiwgXCJjb25zb25hbnRcIiwgXCJjb25zdGFudGx5XCIsIFwiY29uc3RydWN0aW9uXCIsIFwiY29udGFpblwiLCBcImNvbnRpbmVudFwiLCBcImNvbnRpbnVlZFwiLCBcImNvbnRyYXN0XCIsIFwiY29udHJvbFwiLCBcImNvbnZlcnNhdGlvblwiLCBcImNvb2tcIiwgXCJjb29raWVzXCIsIFwiY29vbFwiLCBcImNvcHBlclwiLCBcImNvcHlcIiwgXCJjb3JuXCIsIFwiY29ybmVyXCIsIFwiY29ycmVjdFwiLCBcImNvcnJlY3RseVwiLCBcImNvc3RcIiwgXCJjb3R0b25cIiwgXCJjb3VsZFwiLCBcImNvdW50XCIsIFwiY291bnRyeVwiLCBcImNvdXBsZVwiLCBcImNvdXJhZ2VcIiwgXCJjb3Vyc2VcIiwgXCJjb3VydFwiLCBcImNvdmVyXCIsIFwiY293XCIsIFwiY293Ym95XCIsIFwiY3JhY2tcIiwgXCJjcmVhbVwiLCBcImNyZWF0ZVwiLCBcImNyZWF0dXJlXCIsIFwiY3Jld1wiLCBcImNyb3BcIiwgXCJjcm9zc1wiLCBcImNyb3dkXCIsIFwiY3J5XCIsIFwiY3VwXCIsIFwiY3VyaW91c1wiLCBcImN1cnJlbnRcIiwgXCJjdXJ2ZVwiLCBcImN1c3RvbXNcIiwgXCJjdXRcIiwgXCJjdXR0aW5nXCIsIFwiZGFpbHlcIiwgXCJkYW1hZ2VcIiwgXCJkYW5jZVwiLCBcImRhbmdlclwiLCBcImRhbmdlcm91c1wiLCBcImRhcmtcIiwgXCJkYXJrbmVzc1wiLCBcImRhdGVcIiwgXCJkYXVnaHRlclwiLCBcImRhd25cIiwgXCJkYXlcIiwgXCJkZWFkXCIsIFwiZGVhbFwiLCBcImRlYXJcIiwgXCJkZWF0aFwiLCBcImRlY2lkZVwiLCBcImRlY2xhcmVkXCIsIFwiZGVlcFwiLCBcImRlZXBseVwiLCBcImRlZXJcIiwgXCJkZWZpbml0aW9uXCIsIFwiZGVncmVlXCIsIFwiZGVwZW5kXCIsIFwiZGVwdGhcIiwgXCJkZXNjcmliZVwiLCBcImRlc2VydFwiLCBcImRlc2lnblwiLCBcImRlc2tcIiwgXCJkZXRhaWxcIiwgXCJkZXRlcm1pbmVcIiwgXCJkZXZlbG9wXCIsIFwiZGV2ZWxvcG1lbnRcIiwgXCJkaWFncmFtXCIsIFwiZGlhbWV0ZXJcIiwgXCJkaWRcIiwgXCJkaWVcIiwgXCJkaWZmZXJcIiwgXCJkaWZmZXJlbmNlXCIsIFwiZGlmZmVyZW50XCIsIFwiZGlmZmljdWx0XCIsIFwiZGlmZmljdWx0eVwiLCBcImRpZ1wiLCBcImRpbm5lclwiLCBcImRpcmVjdFwiLCBcImRpcmVjdGlvblwiLCBcImRpcmVjdGx5XCIsIFwiZGlydFwiLCBcImRpcnR5XCIsIFwiZGlzYXBwZWFyXCIsIFwiZGlzY292ZXJcIiwgXCJkaXNjb3ZlcnlcIiwgXCJkaXNjdXNzXCIsIFwiZGlzY3Vzc2lvblwiLCBcImRpc2Vhc2VcIiwgXCJkaXNoXCIsIFwiZGlzdGFuY2VcIiwgXCJkaXN0YW50XCIsIFwiZGl2aWRlXCIsIFwiZGl2aXNpb25cIiwgXCJkb1wiLCBcImRvY3RvclwiLCBcImRvZXNcIiwgXCJkb2dcIiwgXCJkb2luZ1wiLCBcImRvbGxcIiwgXCJkb2xsYXJcIiwgXCJkb25lXCIsIFwiZG9ua2V5XCIsIFwiZG9vclwiLCBcImRvdFwiLCBcImRvdWJsZVwiLCBcImRvdWJ0XCIsIFwiZG93blwiLCBcImRvemVuXCIsIFwiZHJhd1wiLCBcImRyYXduXCIsIFwiZHJlYW1cIiwgXCJkcmVzc1wiLCBcImRyZXdcIiwgXCJkcmllZFwiLCBcImRyaW5rXCIsIFwiZHJpdmVcIiwgXCJkcml2ZW5cIiwgXCJkcml2ZXJcIiwgXCJkcml2aW5nXCIsIFwiZHJvcFwiLCBcImRyb3BwZWRcIiwgXCJkcm92ZVwiLCBcImRyeVwiLCBcImR1Y2tcIiwgXCJkdWVcIiwgXCJkdWdcIiwgXCJkdWxsXCIsIFwiZHVyaW5nXCIsIFwiZHVzdFwiLCBcImR1dHlcIiwgXCJlYWNoXCIsIFwiZWFnZXJcIiwgXCJlYXJcIiwgXCJlYXJsaWVyXCIsIFwiZWFybHlcIiwgXCJlYXJuXCIsIFwiZWFydGhcIiwgXCJlYXNpZXJcIiwgXCJlYXNpbHlcIiwgXCJlYXN0XCIsIFwiZWFzeVwiLCBcImVhdFwiLCBcImVhdGVuXCIsIFwiZWRnZVwiLCBcImVkdWNhdGlvblwiLCBcImVmZmVjdFwiLCBcImVmZm9ydFwiLCBcImVnZ1wiLCBcImVpZ2h0XCIsIFwiZWl0aGVyXCIsIFwiZWxlY3RyaWNcIiwgXCJlbGVjdHJpY2l0eVwiLCBcImVsZW1lbnRcIiwgXCJlbGVwaGFudFwiLCBcImVsZXZlblwiLCBcImVsc2VcIiwgXCJlbXB0eVwiLCBcImVuZFwiLCBcImVuZW15XCIsIFwiZW5lcmd5XCIsIFwiZW5naW5lXCIsIFwiZW5naW5lZXJcIiwgXCJlbmpveVwiLCBcImVub3VnaFwiLCBcImVudGVyXCIsIFwiZW50aXJlXCIsIFwiZW50aXJlbHlcIiwgXCJlbnZpcm9ubWVudFwiLCBcImVxdWFsXCIsIFwiZXF1YWxseVwiLCBcImVxdWF0b3JcIiwgXCJlcXVpcG1lbnRcIiwgXCJlc2NhcGVcIiwgXCJlc3BlY2lhbGx5XCIsIFwiZXNzZW50aWFsXCIsIFwiZXN0YWJsaXNoXCIsIFwiZXZlblwiLCBcImV2ZW5pbmdcIiwgXCJldmVudFwiLCBcImV2ZW50dWFsbHlcIiwgXCJldmVyXCIsIFwiZXZlcnlcIiwgXCJldmVyeWJvZHlcIiwgXCJldmVyeW9uZVwiLCBcImV2ZXJ5dGhpbmdcIiwgXCJldmVyeXdoZXJlXCIsIFwiZXZpZGVuY2VcIiwgXCJleGFjdFwiLCBcImV4YWN0bHlcIiwgXCJleGFtaW5lXCIsIFwiZXhhbXBsZVwiLCBcImV4Y2VsbGVudFwiLCBcImV4Y2VwdFwiLCBcImV4Y2hhbmdlXCIsIFwiZXhjaXRlZFwiLCBcImV4Y2l0ZW1lbnRcIiwgXCJleGNpdGluZ1wiLCBcImV4Y2xhaW1lZFwiLCBcImV4ZXJjaXNlXCIsIFwiZXhpc3RcIiwgXCJleHBlY3RcIiwgXCJleHBlcmllbmNlXCIsIFwiZXhwZXJpbWVudFwiLCBcImV4cGxhaW5cIiwgXCJleHBsYW5hdGlvblwiLCBcImV4cGxvcmVcIiwgXCJleHByZXNzXCIsIFwiZXhwcmVzc2lvblwiLCBcImV4dHJhXCIsIFwiZXllXCIsIFwiZmFjZVwiLCBcImZhY2luZ1wiLCBcImZhY3RcIiwgXCJmYWN0b3JcIiwgXCJmYWN0b3J5XCIsIFwiZmFpbGVkXCIsIFwiZmFpclwiLCBcImZhaXJseVwiLCBcImZhbGxcIiwgXCJmYWxsZW5cIiwgXCJmYW1pbGlhclwiLCBcImZhbWlseVwiLCBcImZhbW91c1wiLCBcImZhclwiLCBcImZhcm1cIiwgXCJmYXJtZXJcIiwgXCJmYXJ0aGVyXCIsIFwiZmFzdFwiLCBcImZhc3RlbmVkXCIsIFwiZmFzdGVyXCIsIFwiZmF0XCIsIFwiZmF0aGVyXCIsIFwiZmF2b3JpdGVcIiwgXCJmZWFyXCIsIFwiZmVhdGhlcnNcIiwgXCJmZWF0dXJlXCIsIFwiZmVkXCIsIFwiZmVlZFwiLCBcImZlZWxcIiwgXCJmZWV0XCIsIFwiZmVsbFwiLCBcImZlbGxvd1wiLCBcImZlbHRcIiwgXCJmZW5jZVwiLCBcImZld1wiLCBcImZld2VyXCIsIFwiZmllbGRcIiwgXCJmaWVyY2VcIiwgXCJmaWZ0ZWVuXCIsIFwiZmlmdGhcIiwgXCJmaWZ0eVwiLCBcImZpZ2h0XCIsIFwiZmlnaHRpbmdcIiwgXCJmaWd1cmVcIiwgXCJmaWxsXCIsIFwiZmlsbVwiLCBcImZpbmFsXCIsIFwiZmluYWxseVwiLCBcImZpbmRcIiwgXCJmaW5lXCIsIFwiZmluZXN0XCIsIFwiZmluZ2VyXCIsIFwiZmluaXNoXCIsIFwiZmlyZVwiLCBcImZpcmVwbGFjZVwiLCBcImZpcm1cIiwgXCJmaXJzdFwiLCBcImZpc2hcIiwgXCJmaXZlXCIsIFwiZml4XCIsIFwiZmxhZ1wiLCBcImZsYW1lXCIsIFwiZmxhdFwiLCBcImZsZXdcIiwgXCJmbGllc1wiLCBcImZsaWdodFwiLCBcImZsb2F0aW5nXCIsIFwiZmxvb3JcIiwgXCJmbG93XCIsIFwiZmxvd2VyXCIsIFwiZmx5XCIsIFwiZm9nXCIsIFwiZm9sa3NcIiwgXCJmb2xsb3dcIiwgXCJmb29kXCIsIFwiZm9vdFwiLCBcImZvb3RiYWxsXCIsIFwiZm9yXCIsIFwiZm9yY2VcIiwgXCJmb3JlaWduXCIsIFwiZm9yZXN0XCIsIFwiZm9yZ2V0XCIsIFwiZm9yZ290XCIsIFwiZm9yZ290dGVuXCIsIFwiZm9ybVwiLCBcImZvcm1lclwiLCBcImZvcnRcIiwgXCJmb3J0aFwiLCBcImZvcnR5XCIsIFwiZm9yd2FyZFwiLCBcImZvdWdodFwiLCBcImZvdW5kXCIsIFwiZm91clwiLCBcImZvdXJ0aFwiLCBcImZveFwiLCBcImZyYW1lXCIsIFwiZnJlZVwiLCBcImZyZWVkb21cIiwgXCJmcmVxdWVudGx5XCIsIFwiZnJlc2hcIiwgXCJmcmllbmRcIiwgXCJmcmllbmRseVwiLCBcImZyaWdodGVuXCIsIFwiZnJvZ1wiLCBcImZyb21cIiwgXCJmcm9udFwiLCBcImZyb3plblwiLCBcImZydWl0XCIsIFwiZnVlbFwiLCBcImZ1bGxcIiwgXCJmdWxseVwiLCBcImZ1blwiLCBcImZ1bmN0aW9uXCIsIFwiZnVubnlcIiwgXCJmdXJcIiwgXCJmdXJuaXR1cmVcIiwgXCJmdXJ0aGVyXCIsIFwiZnV0dXJlXCIsIFwiZ2FpblwiLCBcImdhbWVcIiwgXCJnYXJhZ2VcIiwgXCJnYXJkZW5cIiwgXCJnYXNcIiwgXCJnYXNvbGluZVwiLCBcImdhdGVcIiwgXCJnYXRoZXJcIiwgXCJnYXZlXCIsIFwiZ2VuZXJhbFwiLCBcImdlbmVyYWxseVwiLCBcImdlbnRsZVwiLCBcImdlbnRseVwiLCBcImdldFwiLCBcImdldHRpbmdcIiwgXCJnaWFudFwiLCBcImdpZnRcIiwgXCJnaXJsXCIsIFwiZ2l2ZVwiLCBcImdpdmVuXCIsIFwiZ2l2aW5nXCIsIFwiZ2xhZFwiLCBcImdsYXNzXCIsIFwiZ2xvYmVcIiwgXCJnb1wiLCBcImdvZXNcIiwgXCJnb2xkXCIsIFwiZ29sZGVuXCIsIFwiZ29uZVwiLCBcImdvb2RcIiwgXCJnb29zZVwiLCBcImdvdFwiLCBcImdvdmVybm1lbnRcIiwgXCJncmFiYmVkXCIsIFwiZ3JhZGVcIiwgXCJncmFkdWFsbHlcIiwgXCJncmFpblwiLCBcImdyYW5kZmF0aGVyXCIsIFwiZ3JhbmRtb3RoZXJcIiwgXCJncmFwaFwiLCBcImdyYXNzXCIsIFwiZ3Jhdml0eVwiLCBcImdyYXlcIiwgXCJncmVhdFwiLCBcImdyZWF0ZXJcIiwgXCJncmVhdGVzdFwiLCBcImdyZWF0bHlcIiwgXCJncmVlblwiLCBcImdyZXdcIiwgXCJncm91bmRcIiwgXCJncm91cFwiLCBcImdyb3dcIiwgXCJncm93blwiLCBcImdyb3d0aFwiLCBcImd1YXJkXCIsIFwiZ3Vlc3NcIiwgXCJndWlkZVwiLCBcImd1bGZcIiwgXCJndW5cIiwgXCJoYWJpdFwiLCBcImhhZFwiLCBcImhhaXJcIiwgXCJoYWxmXCIsIFwiaGFsZndheVwiLCBcImhhbGxcIiwgXCJoYW5kXCIsIFwiaGFuZGxlXCIsIFwiaGFuZHNvbWVcIiwgXCJoYW5nXCIsIFwiaGFwcGVuXCIsIFwiaGFwcGVuZWRcIiwgXCJoYXBwaWx5XCIsIFwiaGFwcHlcIiwgXCJoYXJib3JcIiwgXCJoYXJkXCIsIFwiaGFyZGVyXCIsIFwiaGFyZGx5XCIsIFwiaGFzXCIsIFwiaGF0XCIsIFwiaGF2ZVwiLCBcImhhdmluZ1wiLCBcImhheVwiLCBcImhlXCIsIFwiaGVhZGVkXCIsIFwiaGVhZGluZ1wiLCBcImhlYWx0aFwiLCBcImhlYXJkXCIsIFwiaGVhcmluZ1wiLCBcImhlYXJ0XCIsIFwiaGVhdFwiLCBcImhlYXZ5XCIsIFwiaGVpZ2h0XCIsIFwiaGVsZFwiLCBcImhlbGxvXCIsIFwiaGVscFwiLCBcImhlbHBmdWxcIiwgXCJoZXJcIiwgXCJoZXJkXCIsIFwiaGVyZVwiLCBcImhlcnNlbGZcIiwgXCJoaWRkZW5cIiwgXCJoaWRlXCIsIFwiaGlnaFwiLCBcImhpZ2hlclwiLCBcImhpZ2hlc3RcIiwgXCJoaWdod2F5XCIsIFwiaGlsbFwiLCBcImhpbVwiLCBcImhpbXNlbGZcIiwgXCJoaXNcIiwgXCJoaXN0b3J5XCIsIFwiaGl0XCIsIFwiaG9sZFwiLCBcImhvbGVcIiwgXCJob2xsb3dcIiwgXCJob21lXCIsIFwiaG9ub3JcIiwgXCJob3BlXCIsIFwiaG9yblwiLCBcImhvcnNlXCIsIFwiaG9zcGl0YWxcIiwgXCJob3RcIiwgXCJob3VyXCIsIFwiaG91c2VcIiwgXCJob3dcIiwgXCJob3dldmVyXCIsIFwiaHVnZVwiLCBcImh1bWFuXCIsIFwiaHVuZHJlZFwiLCBcImh1bmdcIiwgXCJodW5ncnlcIiwgXCJodW50XCIsIFwiaHVudGVyXCIsIFwiaHVycmllZFwiLCBcImh1cnJ5XCIsIFwiaHVydFwiLCBcImh1c2JhbmRcIiwgXCJpY2VcIiwgXCJpZGVhXCIsIFwiaWRlbnRpdHlcIiwgXCJpZlwiLCBcImlsbFwiLCBcImltYWdlXCIsIFwiaW1hZ2luZVwiLCBcImltbWVkaWF0ZWx5XCIsIFwiaW1wb3J0YW5jZVwiLCBcImltcG9ydGFudFwiLCBcImltcG9zc2libGVcIiwgXCJpbXByb3ZlXCIsIFwiaW5cIiwgXCJpbmNoXCIsIFwiaW5jbHVkZVwiLCBcImluY2x1ZGluZ1wiLCBcImluY29tZVwiLCBcImluY3JlYXNlXCIsIFwiaW5kZWVkXCIsIFwiaW5kZXBlbmRlbnRcIiwgXCJpbmRpY2F0ZVwiLCBcImluZGl2aWR1YWxcIiwgXCJpbmR1c3RyaWFsXCIsIFwiaW5kdXN0cnlcIiwgXCJpbmZsdWVuY2VcIiwgXCJpbmZvcm1hdGlvblwiLCBcImluc2lkZVwiLCBcImluc3RhbmNlXCIsIFwiaW5zdGFudFwiLCBcImluc3RlYWRcIiwgXCJpbnN0cnVtZW50XCIsIFwiaW50ZXJlc3RcIiwgXCJpbnRlcmlvclwiLCBcImludG9cIiwgXCJpbnRyb2R1Y2VkXCIsIFwiaW52ZW50ZWRcIiwgXCJpbnZvbHZlZFwiLCBcImlyb25cIiwgXCJpc1wiLCBcImlzbGFuZFwiLCBcIml0XCIsIFwiaXRzXCIsIFwiaXRzZWxmXCIsIFwiamFja1wiLCBcImphclwiLCBcImpldFwiLCBcImpvYlwiLCBcImpvaW5cIiwgXCJqb2luZWRcIiwgXCJqb3VybmV5XCIsIFwiam95XCIsIFwianVkZ2VcIiwgXCJqdW1wXCIsIFwianVuZ2xlXCIsIFwianVzdFwiLCBcImtlZXBcIiwgXCJrZXB0XCIsIFwia2V5XCIsIFwia2lkc1wiLCBcImtpbGxcIiwgXCJraW5kXCIsIFwia2l0Y2hlblwiLCBcImtuZXdcIiwgXCJrbmlmZVwiLCBcImtub3dcIiwgXCJrbm93bGVkZ2VcIiwgXCJrbm93blwiLCBcImxhYmVsXCIsIFwibGFib3JcIiwgXCJsYWNrXCIsIFwibGFkeVwiLCBcImxhaWRcIiwgXCJsYWtlXCIsIFwibGFtcFwiLCBcImxhbmRcIiwgXCJsYW5ndWFnZVwiLCBcImxhcmdlXCIsIFwibGFyZ2VyXCIsIFwibGFyZ2VzdFwiLCBcImxhc3RcIiwgXCJsYXRlXCIsIFwibGF0ZXJcIiwgXCJsYXVnaFwiLCBcImxhd1wiLCBcImxheVwiLCBcImxheWVyc1wiLCBcImxlYWRcIiwgXCJsZWFkZXJcIiwgXCJsZWFmXCIsIFwibGVhcm5cIiwgXCJsZWFzdFwiLCBcImxlYXRoZXJcIiwgXCJsZWF2ZVwiLCBcImxlYXZpbmdcIiwgXCJsZWRcIiwgXCJsZWZ0XCIsIFwibGVnXCIsIFwibGVuZ3RoXCIsIFwibGVzc29uXCIsIFwibGV0XCIsIFwibGV0dGVyXCIsIFwibGV2ZWxcIiwgXCJsaWJyYXJ5XCIsIFwibGllXCIsIFwibGlmZVwiLCBcImxpZnRcIiwgXCJsaWdodFwiLCBcImxpa2VcIiwgXCJsaWtlbHlcIiwgXCJsaW1pdGVkXCIsIFwibGluZVwiLCBcImxpb25cIiwgXCJsaXBzXCIsIFwibGlxdWlkXCIsIFwibGlzdFwiLCBcImxpc3RlblwiLCBcImxpdHRsZVwiLCBcImxpdmVcIiwgXCJsaXZpbmdcIiwgXCJsb2FkXCIsIFwibG9jYWxcIiwgXCJsb2NhdGVcIiwgXCJsb2NhdGlvblwiLCBcImxvZ1wiLCBcImxvbmVseVwiLCBcImxvbmdcIiwgXCJsb25nZXJcIiwgXCJsb29rXCIsIFwibG9vc2VcIiwgXCJsb3NlXCIsIFwibG9zc1wiLCBcImxvc3RcIiwgXCJsb3RcIiwgXCJsb3VkXCIsIFwibG92ZVwiLCBcImxvdmVseVwiLCBcImxvd1wiLCBcImxvd2VyXCIsIFwibHVja1wiLCBcImx1Y2t5XCIsIFwibHVuY2hcIiwgXCJsdW5nc1wiLCBcImx5aW5nXCIsIFwibWFjaGluZVwiLCBcIm1hY2hpbmVyeVwiLCBcIm1hZFwiLCBcIm1hZGVcIiwgXCJtYWdpY1wiLCBcIm1hZ25ldFwiLCBcIm1haWxcIiwgXCJtYWluXCIsIFwibWFpbmx5XCIsIFwibWFqb3JcIiwgXCJtYWtlXCIsIFwibWFraW5nXCIsIFwibWFuXCIsIFwibWFuYWdlZFwiLCBcIm1hbm5lclwiLCBcIm1hbnVmYWN0dXJpbmdcIiwgXCJtYW55XCIsIFwibWFwXCIsIFwibWFya1wiLCBcIm1hcmtldFwiLCBcIm1hcnJpZWRcIiwgXCJtYXNzXCIsIFwibWFzc2FnZVwiLCBcIm1hc3RlclwiLCBcIm1hdGVyaWFsXCIsIFwibWF0aGVtYXRpY3NcIiwgXCJtYXR0ZXJcIiwgXCJtYXlcIiwgXCJtYXliZVwiLCBcIm1lXCIsIFwibWVhbFwiLCBcIm1lYW5cIiwgXCJtZWFuc1wiLCBcIm1lYW50XCIsIFwibWVhc3VyZVwiLCBcIm1lYXRcIiwgXCJtZWRpY2luZVwiLCBcIm1lZXRcIiwgXCJtZWx0ZWRcIiwgXCJtZW1iZXJcIiwgXCJtZW1vcnlcIiwgXCJtZW5cIiwgXCJtZW50YWxcIiwgXCJtZXJlbHlcIiwgXCJtZXRcIiwgXCJtZXRhbFwiLCBcIm1ldGhvZFwiLCBcIm1pY2VcIiwgXCJtaWRkbGVcIiwgXCJtaWdodFwiLCBcIm1pZ2h0eVwiLCBcIm1pbGVcIiwgXCJtaWxpdGFyeVwiLCBcIm1pbGtcIiwgXCJtaWxsXCIsIFwibWluZFwiLCBcIm1pbmVcIiwgXCJtaW5lcmFsc1wiLCBcIm1pbnV0ZVwiLCBcIm1pcnJvclwiLCBcIm1pc3NpbmdcIiwgXCJtaXNzaW9uXCIsIFwibWlzdGFrZVwiLCBcIm1peFwiLCBcIm1peHR1cmVcIiwgXCJtb2RlbFwiLCBcIm1vZGVyblwiLCBcIm1vbGVjdWxhclwiLCBcIm1vbWVudFwiLCBcIm1vbmV5XCIsIFwibW9ua2V5XCIsIFwibW9udGhcIiwgXCJtb29kXCIsIFwibW9vblwiLCBcIm1vcmVcIiwgXCJtb3JuaW5nXCIsIFwibW9zdFwiLCBcIm1vc3RseVwiLCBcIm1vdGhlclwiLCBcIm1vdGlvblwiLCBcIm1vdG9yXCIsIFwibW91bnRhaW5cIiwgXCJtb3VzZVwiLCBcIm1vdXRoXCIsIFwibW92ZVwiLCBcIm1vdmVtZW50XCIsIFwibW92aWVcIiwgXCJtb3ZpbmdcIiwgXCJtdWRcIiwgXCJtdXNjbGVcIiwgXCJtdXNpY1wiLCBcIm11c2ljYWxcIiwgXCJtdXN0XCIsIFwibXlcIiwgXCJteXNlbGZcIiwgXCJteXN0ZXJpb3VzXCIsIFwibmFpbHNcIiwgXCJuYW1lXCIsIFwibmF0aW9uXCIsIFwibmF0aW9uYWxcIiwgXCJuYXRpdmVcIiwgXCJuYXR1cmFsXCIsIFwibmF0dXJhbGx5XCIsIFwibmF0dXJlXCIsIFwibmVhclwiLCBcIm5lYXJieVwiLCBcIm5lYXJlclwiLCBcIm5lYXJlc3RcIiwgXCJuZWFybHlcIiwgXCJuZWNlc3NhcnlcIiwgXCJuZWNrXCIsIFwibmVlZGVkXCIsIFwibmVlZGxlXCIsIFwibmVlZHNcIiwgXCJuZWdhdGl2ZVwiLCBcIm5laWdoYm9yXCIsIFwibmVpZ2hib3Job29kXCIsIFwibmVydm91c1wiLCBcIm5lc3RcIiwgXCJuZXZlclwiLCBcIm5ld1wiLCBcIm5ld3NcIiwgXCJuZXdzcGFwZXJcIiwgXCJuZXh0XCIsIFwibmljZVwiLCBcIm5pZ2h0XCIsIFwibmluZVwiLCBcIm5vXCIsIFwibm9ib2R5XCIsIFwibm9kZGVkXCIsIFwibm9pc2VcIiwgXCJub25lXCIsIFwibm9vblwiLCBcIm5vclwiLCBcIm5vcnRoXCIsIFwibm9zZVwiLCBcIm5vdFwiLCBcIm5vdGVcIiwgXCJub3RlZFwiLCBcIm5vdGhpbmdcIiwgXCJub3RpY2VcIiwgXCJub3VuXCIsIFwibm93XCIsIFwibnVtYmVyXCIsIFwibnVtZXJhbFwiLCBcIm51dHNcIiwgXCJvYmplY3RcIiwgXCJvYnNlcnZlXCIsIFwib2J0YWluXCIsIFwib2NjYXNpb25hbGx5XCIsIFwib2NjdXJcIiwgXCJvY2VhblwiLCBcIm9mXCIsIFwib2ZmXCIsIFwib2ZmZXJcIiwgXCJvZmZpY2VcIiwgXCJvZmZpY2VyXCIsIFwib2ZmaWNpYWxcIiwgXCJvaWxcIiwgXCJvbGRcIiwgXCJvbGRlclwiLCBcIm9sZGVzdFwiLCBcIm9uXCIsIFwib25jZVwiLCBcIm9uZVwiLCBcIm9ubHlcIiwgXCJvbnRvXCIsIFwib3BlblwiLCBcIm9wZXJhdGlvblwiLCBcIm9waW5pb25cIiwgXCJvcHBvcnR1bml0eVwiLCBcIm9wcG9zaXRlXCIsIFwib3JcIiwgXCJvcmFuZ2VcIiwgXCJvcmJpdFwiLCBcIm9yZGVyXCIsIFwib3JkaW5hcnlcIiwgXCJvcmdhbml6YXRpb25cIiwgXCJvcmdhbml6ZWRcIiwgXCJvcmlnaW5cIiwgXCJvcmlnaW5hbFwiLCBcIm90aGVyXCIsIFwib3VnaHRcIiwgXCJvdXJcIiwgXCJvdXJzZWx2ZXNcIiwgXCJvdXRcIiwgXCJvdXRlclwiLCBcIm91dGxpbmVcIiwgXCJvdXRzaWRlXCIsIFwib3ZlclwiLCBcIm93blwiLCBcIm93bmVyXCIsIFwib3h5Z2VuXCIsIFwicGFja1wiLCBcInBhY2thZ2VcIiwgXCJwYWdlXCIsIFwicGFpZFwiLCBcInBhaW5cIiwgXCJwYWludFwiLCBcInBhaXJcIiwgXCJwYWxhY2VcIiwgXCJwYWxlXCIsIFwicGFuXCIsIFwicGFwZXJcIiwgXCJwYXJhZ3JhcGhcIiwgXCJwYXJhbGxlbFwiLCBcInBhcmVudFwiLCBcInBhcmtcIiwgXCJwYXJ0XCIsIFwicGFydGljbGVzXCIsIFwicGFydGljdWxhclwiLCBcInBhcnRpY3VsYXJseVwiLCBcInBhcnRseVwiLCBcInBhcnRzXCIsIFwicGFydHlcIiwgXCJwYXNzXCIsIFwicGFzc2FnZVwiLCBcInBhc3RcIiwgXCJwYXRoXCIsIFwicGF0dGVyblwiLCBcInBheVwiLCBcInBlYWNlXCIsIFwicGVuXCIsIFwicGVuY2lsXCIsIFwicGVvcGxlXCIsIFwicGVyXCIsIFwicGVyY2VudFwiLCBcInBlcmZlY3RcIiwgXCJwZXJmZWN0bHlcIiwgXCJwZXJoYXBzXCIsIFwicGVyaW9kXCIsIFwicGVyc29uXCIsIFwicGVyc29uYWxcIiwgXCJwZXRcIiwgXCJwaHJhc2VcIiwgXCJwaHlzaWNhbFwiLCBcInBpYW5vXCIsIFwicGlja1wiLCBcInBpY3R1cmVcIiwgXCJwaWN0dXJlZFwiLCBcInBpZVwiLCBcInBpZWNlXCIsIFwicGlnXCIsIFwicGlsZVwiLCBcInBpbG90XCIsIFwicGluZVwiLCBcInBpbmtcIiwgXCJwaXBlXCIsIFwicGl0Y2hcIiwgXCJwbGFjZVwiLCBcInBsYWluXCIsIFwicGxhblwiLCBcInBsYW5lXCIsIFwicGxhbmV0XCIsIFwicGxhbm5lZFwiLCBcInBsYW5uaW5nXCIsIFwicGxhbnRcIiwgXCJwbGFzdGljXCIsIFwicGxhdGVcIiwgXCJwbGF0ZXNcIiwgXCJwbGF5XCIsIFwicGxlYXNhbnRcIiwgXCJwbGVhc2VcIiwgXCJwbGVhc3VyZVwiLCBcInBsZW50eVwiLCBcInBsdXJhbFwiLCBcInBsdXNcIiwgXCJwb2NrZXRcIiwgXCJwb2VtXCIsIFwicG9ldFwiLCBcInBvZXRyeVwiLCBcInBvaW50XCIsIFwicG9sZVwiLCBcInBvbGljZVwiLCBcInBvbGljZW1hblwiLCBcInBvbGl0aWNhbFwiLCBcInBvbmRcIiwgXCJwb255XCIsIFwicG9vbFwiLCBcInBvb3JcIiwgXCJwb3B1bGFyXCIsIFwicG9wdWxhdGlvblwiLCBcInBvcmNoXCIsIFwicG9ydFwiLCBcInBvc2l0aW9uXCIsIFwicG9zaXRpdmVcIiwgXCJwb3NzaWJsZVwiLCBcInBvc3NpYmx5XCIsIFwicG9zdFwiLCBcInBvdFwiLCBcInBvdGF0b2VzXCIsIFwicG91bmRcIiwgXCJwb3VyXCIsIFwicG93ZGVyXCIsIFwicG93ZXJcIiwgXCJwb3dlcmZ1bFwiLCBcInByYWN0aWNhbFwiLCBcInByYWN0aWNlXCIsIFwicHJlcGFyZVwiLCBcInByZXNlbnRcIiwgXCJwcmVzaWRlbnRcIiwgXCJwcmVzc1wiLCBcInByZXNzdXJlXCIsIFwicHJldHR5XCIsIFwicHJldmVudFwiLCBcInByZXZpb3VzXCIsIFwicHJpY2VcIiwgXCJwcmlkZVwiLCBcInByaW1pdGl2ZVwiLCBcInByaW5jaXBhbFwiLCBcInByaW5jaXBsZVwiLCBcInByaW50ZWRcIiwgXCJwcml2YXRlXCIsIFwicHJpemVcIiwgXCJwcm9iYWJseVwiLCBcInByb2JsZW1cIiwgXCJwcm9jZXNzXCIsIFwicHJvZHVjZVwiLCBcInByb2R1Y3RcIiwgXCJwcm9kdWN0aW9uXCIsIFwicHJvZ3JhbVwiLCBcInByb2dyZXNzXCIsIFwicHJvbWlzZWRcIiwgXCJwcm9wZXJcIiwgXCJwcm9wZXJseVwiLCBcInByb3BlcnR5XCIsIFwicHJvdGVjdGlvblwiLCBcInByb3VkXCIsIFwicHJvdmVcIiwgXCJwcm92aWRlXCIsIFwicHVibGljXCIsIFwicHVsbFwiLCBcInB1cGlsXCIsIFwicHVyZVwiLCBcInB1cnBsZVwiLCBcInB1cnBvc2VcIiwgXCJwdXNoXCIsIFwicHV0XCIsIFwicHV0dGluZ1wiLCBcInF1YXJ0ZXJcIiwgXCJxdWVlblwiLCBcInF1ZXN0aW9uXCIsIFwicXVpY2tcIiwgXCJxdWlja2x5XCIsIFwicXVpZXRcIiwgXCJxdWlldGx5XCIsIFwicXVpdGVcIiwgXCJyYWJiaXRcIiwgXCJyYWNlXCIsIFwicmFkaW9cIiwgXCJyYWlscm9hZFwiLCBcInJhaW5cIiwgXCJyYWlzZVwiLCBcInJhblwiLCBcInJhbmNoXCIsIFwicmFuZ2VcIiwgXCJyYXBpZGx5XCIsIFwicmF0ZVwiLCBcInJhdGhlclwiLCBcInJhd1wiLCBcInJheXNcIiwgXCJyZWFjaFwiLCBcInJlYWRcIiwgXCJyZWFkZXJcIiwgXCJyZWFkeVwiLCBcInJlYWxcIiwgXCJyZWFsaXplXCIsIFwicmVhclwiLCBcInJlYXNvblwiLCBcInJlY2FsbFwiLCBcInJlY2VpdmVcIiwgXCJyZWNlbnRcIiwgXCJyZWNlbnRseVwiLCBcInJlY29nbml6ZVwiLCBcInJlY29yZFwiLCBcInJlZFwiLCBcInJlZmVyXCIsIFwicmVmdXNlZFwiLCBcInJlZ2lvblwiLCBcInJlZ3VsYXJcIiwgXCJyZWxhdGVkXCIsIFwicmVsYXRpb25zaGlwXCIsIFwicmVsaWdpb3VzXCIsIFwicmVtYWluXCIsIFwicmVtYXJrYWJsZVwiLCBcInJlbWVtYmVyXCIsIFwicmVtb3ZlXCIsIFwicmVwZWF0XCIsIFwicmVwbGFjZVwiLCBcInJlcGxpZWRcIiwgXCJyZXBvcnRcIiwgXCJyZXByZXNlbnRcIiwgXCJyZXF1aXJlXCIsIFwicmVzZWFyY2hcIiwgXCJyZXNwZWN0XCIsIFwicmVzdFwiLCBcInJlc3VsdFwiLCBcInJldHVyblwiLCBcInJldmlld1wiLCBcInJoeW1lXCIsIFwicmh5dGhtXCIsIFwicmljZVwiLCBcInJpY2hcIiwgXCJyaWRlXCIsIFwicmlkaW5nXCIsIFwicmlnaHRcIiwgXCJyaW5nXCIsIFwicmlzZVwiLCBcInJpc2luZ1wiLCBcInJpdmVyXCIsIFwicm9hZFwiLCBcInJvYXJcIiwgXCJyb2NrXCIsIFwicm9ja2V0XCIsIFwicm9ja3lcIiwgXCJyb2RcIiwgXCJyb2xsXCIsIFwicm9vZlwiLCBcInJvb21cIiwgXCJyb290XCIsIFwicm9wZVwiLCBcInJvc2VcIiwgXCJyb3VnaFwiLCBcInJvdW5kXCIsIFwicm91dGVcIiwgXCJyb3dcIiwgXCJydWJiZWRcIiwgXCJydWJiZXJcIiwgXCJydWxlXCIsIFwicnVsZXJcIiwgXCJydW5cIiwgXCJydW5uaW5nXCIsIFwicnVzaFwiLCBcInNhZFwiLCBcInNhZGRsZVwiLCBcInNhZmVcIiwgXCJzYWZldHlcIiwgXCJzYWlkXCIsIFwic2FpbFwiLCBcInNhbGVcIiwgXCJzYWxtb25cIiwgXCJzYWx0XCIsIFwic2FtZVwiLCBcInNhbmRcIiwgXCJzYW5nXCIsIFwic2F0XCIsIFwic2F0ZWxsaXRlc1wiLCBcInNhdGlzZmllZFwiLCBcInNhdmVcIiwgXCJzYXZlZFwiLCBcInNhd1wiLCBcInNheVwiLCBcInNjYWxlXCIsIFwic2NhcmVkXCIsIFwic2NlbmVcIiwgXCJzY2hvb2xcIiwgXCJzY2llbmNlXCIsIFwic2NpZW50aWZpY1wiLCBcInNjaWVudGlzdFwiLCBcInNjb3JlXCIsIFwic2NyZWVuXCIsIFwic2VhXCIsIFwic2VhcmNoXCIsIFwic2Vhc29uXCIsIFwic2VhdFwiLCBcInNlY29uZFwiLCBcInNlY3JldFwiLCBcInNlY3Rpb25cIiwgXCJzZWVcIiwgXCJzZWVkXCIsIFwic2VlaW5nXCIsIFwic2VlbXNcIiwgXCJzZWVuXCIsIFwic2VsZG9tXCIsIFwic2VsZWN0XCIsIFwic2VsZWN0aW9uXCIsIFwic2VsbFwiLCBcInNlbmRcIiwgXCJzZW5zZVwiLCBcInNlbnRcIiwgXCJzZW50ZW5jZVwiLCBcInNlcGFyYXRlXCIsIFwic2VyaWVzXCIsIFwic2VyaW91c1wiLCBcInNlcnZlXCIsIFwic2VydmljZVwiLCBcInNldHNcIiwgXCJzZXR0aW5nXCIsIFwic2V0dGxlXCIsIFwic2V0dGxlcnNcIiwgXCJzZXZlblwiLCBcInNldmVyYWxcIiwgXCJzaGFkZVwiLCBcInNoYWRvd1wiLCBcInNoYWtlXCIsIFwic2hha2luZ1wiLCBcInNoYWxsXCIsIFwic2hhbGxvd1wiLCBcInNoYXBlXCIsIFwic2hhcmVcIiwgXCJzaGFycFwiLCBcInNoZVwiLCBcInNoZWVwXCIsIFwic2hlZXRcIiwgXCJzaGVsZlwiLCBcInNoZWxsc1wiLCBcInNoZWx0ZXJcIiwgXCJzaGluZVwiLCBcInNoaW5uaW5nXCIsIFwic2hpcFwiLCBcInNoaXJ0XCIsIFwic2hvZVwiLCBcInNob290XCIsIFwic2hvcFwiLCBcInNob3JlXCIsIFwic2hvcnRcIiwgXCJzaG9ydGVyXCIsIFwic2hvdFwiLCBcInNob3VsZFwiLCBcInNob3VsZGVyXCIsIFwic2hvdXRcIiwgXCJzaG93XCIsIFwic2hvd25cIiwgXCJzaHV0XCIsIFwic2lja1wiLCBcInNpZGVzXCIsIFwic2lnaHRcIiwgXCJzaWduXCIsIFwic2lnbmFsXCIsIFwic2lsZW5jZVwiLCBcInNpbGVudFwiLCBcInNpbGtcIiwgXCJzaWxseVwiLCBcInNpbHZlclwiLCBcInNpbWlsYXJcIiwgXCJzaW1wbGVcIiwgXCJzaW1wbGVzdFwiLCBcInNpbXBseVwiLCBcInNpbmNlXCIsIFwic2luZ1wiLCBcInNpbmdsZVwiLCBcInNpbmtcIiwgXCJzaXN0ZXJcIiwgXCJzaXRcIiwgXCJzaXR0aW5nXCIsIFwic2l0dWF0aW9uXCIsIFwic2l4XCIsIFwic2l6ZVwiLCBcInNraWxsXCIsIFwic2tpblwiLCBcInNreVwiLCBcInNsYWJzXCIsIFwic2xhdmVcIiwgXCJzbGVlcFwiLCBcInNsZXB0XCIsIFwic2xpZGVcIiwgXCJzbGlnaHRcIiwgXCJzbGlnaHRseVwiLCBcInNsaXBcIiwgXCJzbGlwcGVkXCIsIFwic2xvcGVcIiwgXCJzbG93XCIsIFwic2xvd2x5XCIsIFwic21hbGxcIiwgXCJzbWFsbGVyXCIsIFwic21hbGxlc3RcIiwgXCJzbWVsbFwiLCBcInNtaWxlXCIsIFwic21va2VcIiwgXCJzbW9vdGhcIiwgXCJzbmFrZVwiLCBcInNub3dcIiwgXCJzb1wiLCBcInNvYXBcIiwgXCJzb2NpYWxcIiwgXCJzb2NpZXR5XCIsIFwic29mdFwiLCBcInNvZnRseVwiLCBcInNvaWxcIiwgXCJzb2xhclwiLCBcInNvbGRcIiwgXCJzb2xkaWVyXCIsIFwic29saWRcIiwgXCJzb2x1dGlvblwiLCBcInNvbHZlXCIsIFwic29tZVwiLCBcInNvbWVib2R5XCIsIFwic29tZWhvd1wiLCBcInNvbWVvbmVcIiwgXCJzb21ldGhpbmdcIiwgXCJzb21ldGltZVwiLCBcInNvbWV3aGVyZVwiLCBcInNvblwiLCBcInNvbmdcIiwgXCJzb29uXCIsIFwic29ydFwiLCBcInNvdW5kXCIsIFwic291cmNlXCIsIFwic291dGhcIiwgXCJzb3V0aGVyblwiLCBcInNwYWNlXCIsIFwic3BlYWtcIiwgXCJzcGVjaWFsXCIsIFwic3BlY2llc1wiLCBcInNwZWNpZmljXCIsIFwic3BlZWNoXCIsIFwic3BlZWRcIiwgXCJzcGVsbFwiLCBcInNwZW5kXCIsIFwic3BlbnRcIiwgXCJzcGlkZXJcIiwgXCJzcGluXCIsIFwic3Bpcml0XCIsIFwic3BpdGVcIiwgXCJzcGxpdFwiLCBcInNwb2tlblwiLCBcInNwb3J0XCIsIFwic3ByZWFkXCIsIFwic3ByaW5nXCIsIFwic3F1YXJlXCIsIFwic3RhZ2VcIiwgXCJzdGFpcnNcIiwgXCJzdGFuZFwiLCBcInN0YW5kYXJkXCIsIFwic3RhclwiLCBcInN0YXJlZFwiLCBcInN0YXJ0XCIsIFwic3RhdGVcIiwgXCJzdGF0ZW1lbnRcIiwgXCJzdGF0aW9uXCIsIFwic3RheVwiLCBcInN0ZWFkeVwiLCBcInN0ZWFtXCIsIFwic3RlZWxcIiwgXCJzdGVlcFwiLCBcInN0ZW1zXCIsIFwic3RlcFwiLCBcInN0ZXBwZWRcIiwgXCJzdGlja1wiLCBcInN0aWZmXCIsIFwic3RpbGxcIiwgXCJzdG9ja1wiLCBcInN0b21hY2hcIiwgXCJzdG9uZVwiLCBcInN0b29kXCIsIFwic3RvcFwiLCBcInN0b3BwZWRcIiwgXCJzdG9yZVwiLCBcInN0b3JtXCIsIFwic3RvcnlcIiwgXCJzdG92ZVwiLCBcInN0cmFpZ2h0XCIsIFwic3RyYW5nZVwiLCBcInN0cmFuZ2VyXCIsIFwic3RyYXdcIiwgXCJzdHJlYW1cIiwgXCJzdHJlZXRcIiwgXCJzdHJlbmd0aFwiLCBcInN0cmV0Y2hcIiwgXCJzdHJpa2VcIiwgXCJzdHJpbmdcIiwgXCJzdHJpcFwiLCBcInN0cm9uZ1wiLCBcInN0cm9uZ2VyXCIsIFwic3RydWNrXCIsIFwic3RydWN0dXJlXCIsIFwic3RydWdnbGVcIiwgXCJzdHVja1wiLCBcInN0dWRlbnRcIiwgXCJzdHVkaWVkXCIsIFwic3R1ZHlpbmdcIiwgXCJzdWJqZWN0XCIsIFwic3Vic3RhbmNlXCIsIFwic3VjY2Vzc1wiLCBcInN1Y2Nlc3NmdWxcIiwgXCJzdWNoXCIsIFwic3VkZGVuXCIsIFwic3VkZGVubHlcIiwgXCJzdWdhclwiLCBcInN1Z2dlc3RcIiwgXCJzdWl0XCIsIFwic3VtXCIsIFwic3VtbWVyXCIsIFwic3VuXCIsIFwic3VubGlnaHRcIiwgXCJzdXBwZXJcIiwgXCJzdXBwbHlcIiwgXCJzdXBwb3J0XCIsIFwic3VwcG9zZVwiLCBcInN1cmVcIiwgXCJzdXJmYWNlXCIsIFwic3VycHJpc2VcIiwgXCJzdXJyb3VuZGVkXCIsIFwic3dhbVwiLCBcInN3ZWV0XCIsIFwic3dlcHRcIiwgXCJzd2ltXCIsIFwic3dpbW1pbmdcIiwgXCJzd2luZ1wiLCBcInN3dW5nXCIsIFwic3lsbGFibGVcIiwgXCJzeW1ib2xcIiwgXCJzeXN0ZW1cIiwgXCJ0YWJsZVwiLCBcInRhaWxcIiwgXCJ0YWtlXCIsIFwidGFrZW5cIiwgXCJ0YWxlc1wiLCBcInRhbGtcIiwgXCJ0YWxsXCIsIFwidGFua1wiLCBcInRhcGVcIiwgXCJ0YXNrXCIsIFwidGFzdGVcIiwgXCJ0YXVnaHRcIiwgXCJ0YXhcIiwgXCJ0ZWFcIiwgXCJ0ZWFjaFwiLCBcInRlYWNoZXJcIiwgXCJ0ZWFtXCIsIFwidGVhcnNcIiwgXCJ0ZWV0aFwiLCBcInRlbGVwaG9uZVwiLCBcInRlbGV2aXNpb25cIiwgXCJ0ZWxsXCIsIFwidGVtcGVyYXR1cmVcIiwgXCJ0ZW5cIiwgXCJ0ZW50XCIsIFwidGVybVwiLCBcInRlcnJpYmxlXCIsIFwidGVzdFwiLCBcInRoYW5cIiwgXCJ0aGFua1wiLCBcInRoYXRcIiwgXCJ0aGVlXCIsIFwidGhlbVwiLCBcInRoZW1zZWx2ZXNcIiwgXCJ0aGVuXCIsIFwidGhlb3J5XCIsIFwidGhlcmVcIiwgXCJ0aGVyZWZvcmVcIiwgXCJ0aGVzZVwiLCBcInRoZXlcIiwgXCJ0aGlja1wiLCBcInRoaW5cIiwgXCJ0aGluZ1wiLCBcInRoaW5rXCIsIFwidGhpcmRcIiwgXCJ0aGlydHlcIiwgXCJ0aGlzXCIsIFwidGhvc2VcIiwgXCJ0aG91XCIsIFwidGhvdWdoXCIsIFwidGhvdWdodFwiLCBcInRob3VzYW5kXCIsIFwidGhyZWFkXCIsIFwidGhyZWVcIiwgXCJ0aHJld1wiLCBcInRocm9hdFwiLCBcInRocm91Z2hcIiwgXCJ0aHJvdWdob3V0XCIsIFwidGhyb3dcIiwgXCJ0aHJvd25cIiwgXCJ0aHVtYlwiLCBcInRodXNcIiwgXCJ0aHlcIiwgXCJ0aWRlXCIsIFwidGllXCIsIFwidGlnaHRcIiwgXCJ0aWdodGx5XCIsIFwidGlsbFwiLCBcInRpbWVcIiwgXCJ0aW5cIiwgXCJ0aW55XCIsIFwidGlwXCIsIFwidGlyZWRcIiwgXCJ0aXRsZVwiLCBcInRvXCIsIFwidG9iYWNjb1wiLCBcInRvZGF5XCIsIFwidG9nZXRoZXJcIiwgXCJ0b2xkXCIsIFwidG9tb3Jyb3dcIiwgXCJ0b25lXCIsIFwidG9uZ3VlXCIsIFwidG9uaWdodFwiLCBcInRvb1wiLCBcInRvb2tcIiwgXCJ0b29sXCIsIFwidG9wXCIsIFwidG9waWNcIiwgXCJ0b3JuXCIsIFwidG90YWxcIiwgXCJ0b3VjaFwiLCBcInRvd2FyZFwiLCBcInRvd2VyXCIsIFwidG93blwiLCBcInRveVwiLCBcInRyYWNlXCIsIFwidHJhY2tcIiwgXCJ0cmFkZVwiLCBcInRyYWZmaWNcIiwgXCJ0cmFpbFwiLCBcInRyYWluXCIsIFwidHJhbnNwb3J0YXRpb25cIiwgXCJ0cmFwXCIsIFwidHJhdmVsXCIsIFwidHJlYXRlZFwiLCBcInRyZWVcIiwgXCJ0cmlhbmdsZVwiLCBcInRyaWJlXCIsIFwidHJpY2tcIiwgXCJ0cmllZFwiLCBcInRyaXBcIiwgXCJ0cm9vcHNcIiwgXCJ0cm9waWNhbFwiLCBcInRyb3VibGVcIiwgXCJ0cnVja1wiLCBcInRydW5rXCIsIFwidHJ1dGhcIiwgXCJ0cnlcIiwgXCJ0dWJlXCIsIFwidHVuZVwiLCBcInR1cm5cIiwgXCJ0d2VsdmVcIiwgXCJ0d2VudHlcIiwgXCJ0d2ljZVwiLCBcInR3b1wiLCBcInR5cGVcIiwgXCJ0eXBpY2FsXCIsIFwidW5jbGVcIiwgXCJ1bmRlclwiLCBcInVuZGVybGluZVwiLCBcInVuZGVyc3RhbmRpbmdcIiwgXCJ1bmhhcHB5XCIsIFwidW5pb25cIiwgXCJ1bml0XCIsIFwidW5pdmVyc2VcIiwgXCJ1bmtub3duXCIsIFwidW5sZXNzXCIsIFwidW50aWxcIiwgXCJ1bnVzdWFsXCIsIFwidXBcIiwgXCJ1cG9uXCIsIFwidXBwZXJcIiwgXCJ1cHdhcmRcIiwgXCJ1c1wiLCBcInVzZVwiLCBcInVzZWZ1bFwiLCBcInVzaW5nXCIsIFwidXN1YWxcIiwgXCJ1c3VhbGx5XCIsIFwidmFsbGV5XCIsIFwidmFsdWFibGVcIiwgXCJ2YWx1ZVwiLCBcInZhcG9yXCIsIFwidmFyaWV0eVwiLCBcInZhcmlvdXNcIiwgXCJ2YXN0XCIsIFwidmVnZXRhYmxlXCIsIFwidmVyYlwiLCBcInZlcnRpY2FsXCIsIFwidmVyeVwiLCBcInZlc3NlbHNcIiwgXCJ2aWN0b3J5XCIsIFwidmlld1wiLCBcInZpbGxhZ2VcIiwgXCJ2aXNpdFwiLCBcInZpc2l0b3JcIiwgXCJ2b2ljZVwiLCBcInZvbHVtZVwiLCBcInZvdGVcIiwgXCJ2b3dlbFwiLCBcInZveWFnZVwiLCBcIndhZ29uXCIsIFwid2FpdFwiLCBcIndhbGtcIiwgXCJ3YWxsXCIsIFwid2FudFwiLCBcIndhclwiLCBcIndhcm1cIiwgXCJ3YXJuXCIsIFwid2FzXCIsIFwid2FzaFwiLCBcIndhc3RlXCIsIFwid2F0Y2hcIiwgXCJ3YXRlclwiLCBcIndhdmVcIiwgXCJ3YXlcIiwgXCJ3ZVwiLCBcIndlYWtcIiwgXCJ3ZWFsdGhcIiwgXCJ3ZWFyXCIsIFwid2VhdGhlclwiLCBcIndlZWtcIiwgXCJ3ZWlnaFwiLCBcIndlaWdodFwiLCBcIndlbGNvbWVcIiwgXCJ3ZWxsXCIsIFwid2VudFwiLCBcIndlcmVcIiwgXCJ3ZXN0XCIsIFwid2VzdGVyblwiLCBcIndldFwiLCBcIndoYWxlXCIsIFwid2hhdFwiLCBcIndoYXRldmVyXCIsIFwid2hlYXRcIiwgXCJ3aGVlbFwiLCBcIndoZW5cIiwgXCJ3aGVuZXZlclwiLCBcIndoZXJlXCIsIFwid2hlcmV2ZXJcIiwgXCJ3aGV0aGVyXCIsIFwid2hpY2hcIiwgXCJ3aGlsZVwiLCBcIndoaXNwZXJlZFwiLCBcIndoaXN0bGVcIiwgXCJ3aGl0ZVwiLCBcIndob1wiLCBcIndob2xlXCIsIFwid2hvbVwiLCBcIndob3NlXCIsIFwid2h5XCIsIFwid2lkZVwiLCBcIndpZGVseVwiLCBcIndpZmVcIiwgXCJ3aWxkXCIsIFwid2lsbFwiLCBcIndpbGxpbmdcIiwgXCJ3aW5cIiwgXCJ3aW5kXCIsIFwid2luZG93XCIsIFwid2luZ1wiLCBcIndpbnRlclwiLCBcIndpcmVcIiwgXCJ3aXNlXCIsIFwid2lzaFwiLCBcIndpdGhcIiwgXCJ3aXRoaW5cIiwgXCJ3aXRob3V0XCIsIFwid29sZlwiLCBcIndvbWVuXCIsIFwid29uXCIsIFwid29uZGVyXCIsIFwid29uZGVyZnVsXCIsIFwid29vZFwiLCBcIndvb2RlblwiLCBcIndvb2xcIiwgXCJ3b3JkXCIsIFwid29yZVwiLCBcIndvcmtcIiwgXCJ3b3JrZXJcIiwgXCJ3b3JsZFwiLCBcIndvcnJpZWRcIiwgXCJ3b3JyeVwiLCBcIndvcnNlXCIsIFwid29ydGhcIiwgXCJ3b3VsZFwiLCBcIndyYXBwZWRcIiwgXCJ3cml0ZVwiLCBcIndyaXRlclwiLCBcIndyaXRpbmdcIiwgXCJ3cml0dGVuXCIsIFwid3JvbmdcIiwgXCJ3cm90ZVwiLCBcInlhcmRcIiwgXCJ5ZWFyXCIsIFwieWVsbG93XCIsIFwieWVzXCIsIFwieWVzdGVyZGF5XCIsIFwieWV0XCIsIFwieW91XCIsIFwieW91bmdcIiwgXCJ5b3VuZ2VyXCIsIFwieW91clwiLCBcInlvdXJzZWxmXCIsIFwieW91dGhcIiwgXCJ6ZXJvXCIsIFwiemVicmFcIiwgXCJ6aXBwZXJcIiwgXCJ6b29cIiwgXCJ6dWx1XCJdO1xuXG5mdW5jdGlvbiB3b3JkcyhvcHRpb25zKSB7XG4gIGZ1bmN0aW9uIHdvcmQoKSB7XG4gICAgaWYgKG9wdGlvbnMgJiYgb3B0aW9ucy5tYXhMZW5ndGggPiAxKSB7XG4gICAgICByZXR1cm4gZ2VuZXJhdGVXb3JkV2l0aE1heExlbmd0aCgpO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gZ2VuZXJhdGVSYW5kb21Xb3JkKCk7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gZ2VuZXJhdGVXb3JkV2l0aE1heExlbmd0aCgpIHtcbiAgICB2YXIgcmlnaHRTaXplID0gZmFsc2U7XG4gICAgdmFyIHdvcmRVc2VkO1xuXG4gICAgd2hpbGUgKCFyaWdodFNpemUpIHtcbiAgICAgIHdvcmRVc2VkID0gZ2VuZXJhdGVSYW5kb21Xb3JkKCk7XG5cbiAgICAgIGlmICh3b3JkVXNlZC5sZW5ndGggPD0gb3B0aW9ucy5tYXhMZW5ndGgpIHtcbiAgICAgICAgcmlnaHRTaXplID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gd29yZFVzZWQ7XG4gIH1cblxuICBmdW5jdGlvbiBnZW5lcmF0ZVJhbmRvbVdvcmQoKSB7XG4gICAgcmV0dXJuIHdvcmRMaXN0W3JhbmRJbnQod29yZExpc3QubGVuZ3RoKV07XG4gIH1cblxuICBmdW5jdGlvbiByYW5kSW50KGxlc3NUaGFuKSB7XG4gICAgcmV0dXJuIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIGxlc3NUaGFuKTtcbiAgfSAvLyBObyBhcmd1bWVudHMgPSBnZW5lcmF0ZSBvbmUgd29yZFxuXG5cbiAgaWYgKHR5cGVvZiBvcHRpb25zID09PSAndW5kZWZpbmVkJykge1xuICAgIHJldHVybiB3b3JkKCk7XG4gIH0gLy8gSnVzdCBhIG51bWJlciA9IHJldHVybiB0aGF0IG1hbnkgd29yZHNcblxuXG4gIGlmICh0eXBlb2Ygb3B0aW9ucyA9PT0gJ251bWJlcicpIHtcbiAgICBvcHRpb25zID0ge1xuICAgICAgZXhhY3RseTogb3B0aW9uc1xuICAgIH07XG4gIH0gLy8gb3B0aW9ucyBzdXBwb3J0ZWQ6IGV4YWN0bHksIG1pbiwgbWF4LCBqb2luXG5cblxuICBpZiAob3B0aW9ucy5leGFjdGx5KSB7XG4gICAgb3B0aW9ucy5taW4gPSBvcHRpb25zLmV4YWN0bHk7XG4gICAgb3B0aW9ucy5tYXggPSBvcHRpb25zLmV4YWN0bHk7XG4gIH0gLy8gbm90IGEgbnVtYmVyID0gb25lIHdvcmQgcGFyIHN0cmluZ1xuXG5cbiAgaWYgKHR5cGVvZiBvcHRpb25zLndvcmRzUGVyU3RyaW5nICE9PSAnbnVtYmVyJykge1xuICAgIG9wdGlvbnMud29yZHNQZXJTdHJpbmcgPSAxO1xuICB9IC8vbm90IGEgZnVuY3Rpb24gPSByZXR1cm5zIHRoZSByYXcgd29yZFxuXG5cbiAgaWYgKHR5cGVvZiBvcHRpb25zLmZvcm1hdHRlciAhPT0gJ2Z1bmN0aW9uJykge1xuICAgIG9wdGlvbnMuZm9ybWF0dGVyID0gd29yZCA9PiB3b3JkO1xuICB9IC8vbm90IGEgc3RyaW5nID0gc2VwYXJhdG9yIGlzIGEgc3BhY2VcblxuXG4gIGlmICh0eXBlb2Ygb3B0aW9ucy5zZXBhcmF0b3IgIT09ICdzdHJpbmcnKSB7XG4gICAgb3B0aW9ucy5zZXBhcmF0b3IgPSAnICc7XG4gIH1cblxuICB2YXIgdG90YWwgPSBvcHRpb25zLm1pbiArIHJhbmRJbnQob3B0aW9ucy5tYXggKyAxIC0gb3B0aW9ucy5taW4pO1xuICB2YXIgcmVzdWx0cyA9IFtdO1xuICB2YXIgdG9rZW4gPSAnJztcbiAgdmFyIHJlbGF0aXZlSW5kZXggPSAwO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgdG90YWwgKiBvcHRpb25zLndvcmRzUGVyU3RyaW5nOyBpKyspIHtcbiAgICBpZiAocmVsYXRpdmVJbmRleCA9PT0gb3B0aW9ucy53b3Jkc1BlclN0cmluZyAtIDEpIHtcbiAgICAgIHRva2VuICs9IG9wdGlvbnMuZm9ybWF0dGVyKHdvcmQoKSwgcmVsYXRpdmVJbmRleCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRva2VuICs9IG9wdGlvbnMuZm9ybWF0dGVyKHdvcmQoKSwgcmVsYXRpdmVJbmRleCkgKyBvcHRpb25zLnNlcGFyYXRvcjtcbiAgICB9XG5cbiAgICByZWxhdGl2ZUluZGV4Kys7XG5cbiAgICBpZiAoKGkgKyAxKSAlIG9wdGlvbnMud29yZHNQZXJTdHJpbmcgPT09IDApIHtcbiAgICAgIHJlc3VsdHMucHVzaCh0b2tlbik7XG4gICAgICB0b2tlbiA9ICcnO1xuICAgICAgcmVsYXRpdmVJbmRleCA9IDA7XG4gICAgfVxuICB9XG5cbiAgaWYgKHR5cGVvZiBvcHRpb25zLmpvaW4gPT09ICdzdHJpbmcnKSB7XG4gICAgcmVzdWx0cyA9IHJlc3VsdHMuam9pbihvcHRpb25zLmpvaW4pO1xuICB9XG5cbiAgcmV0dXJuIHJlc3VsdHM7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gd29yZHM7IC8vIEV4cG9ydCB0aGUgd29yZCBsaXN0IGFzIGl0IGlzIG9mdGVuIHVzZWZ1bFxuXG53b3Jkcy53b3JkTGlzdCA9IHdvcmRMaXN0OyIsImltcG9ydCBcIi4vc3R5bGVzL2luZGV4LnNjc3NcIjtcbmltcG9ydCBHYW1lIGZyb20gJy4vc2NyaXB0cy9nYW1lJztcblxuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgKCkgPT4ge1xuICAgIGNvbnN0IGNhbnZhcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic2hpcC1nYW1lXCIpO1xuICAgIGNvbnN0IGN0eCA9IGNhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xuICAgIGNvbnN0IGJnQ2FudmFzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJiZy1jYW52YXNcIik7XG4gICAgY29uc3QgYmdDdHggPSBiZ0NhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xuICAgIGNvbnN0IHBDYW52YXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInBsYXllci1zY3JlZW5cIik7XG4gICAgY29uc3QgcEN0eCA9IHBDYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcblxuICAgIGNvbnN0IGlucHV0U2VjdGlvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaW5wdXQtc2VjdGlvblwiKTtcbiAgICBcbiAgICBjb25zdCBwbGF5ZXJXb3JkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3BsYXllci13b3JkJyk7XG4gICAgcGxheWVyV29yZC5hdXRvZm9jdXMgPSB0cnVlO1xuXG4gICAgaW5wdXRTZWN0aW9uLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIGhhbmRsZVN1Ym1pdCk7XG4gICAgY29uc3QgbmV3R2FtZSA9IG5ldyBHYW1lKGNhbnZhcywgY3R4LCBiZ0N0eCwgcEN0eCk7XG4gICAgXG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImtleXByZXNzXCIsIHJlbW92ZVNwbGFzaCk7XG5cbiAgICBjb25zdCBzdGFydEJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzdGFydCcpO1xuICAgIHN0YXJ0QnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCByZW1vdmVTcGxhc2gpO1xuICAgIFxuICAgIGZ1bmN0aW9uIHJlbW92ZVNwbGFzaChlKSB7XG4gICAgICAgIC8vIGRlYnVnZ2VyXG4gICAgICAgIGlmICgoZS5rZXkgPT09ICdFbnRlcicpIHx8IChlLnR5cGUgPT09IFwiY2xpY2tcIikpIHtcbiAgICAgICAgICAgIGNvbnN0IHNwbGFzaCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic3BsYXNoXCIpO1xuICAgICAgICAgICAgc3BsYXNoLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICAgICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKFwia2V5cHJlc3NcIiwgcmVtb3ZlU3BsYXNoKTtcbiAgICAgICAgICAgIHN0YXJ0QnRuLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCByZW1vdmVTcGxhc2gpO1xuICAgICAgICAgICAgbmV3R2FtZS5zdGFydCgpO1xuICAgICAgICAgICAgcGxheWVyV29yZC5mb2N1cygpO1xuICAgICAgICB9XG4gICAgfVxuXG5cblxuICAgIGZ1bmN0aW9uIGhhbmRsZVN1Ym1pdChlKSB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgbmV3R2FtZS5jaGVja1dvcmQocGxheWVyV29yZC52YWx1ZS50cmltKCkpO1xuICAgICAgICBpbnB1dFNlY3Rpb24ucmVzZXQoKTtcbiAgICB9O1xuXG5cblxufSk7IiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgQmFja2dyb3VuZCB7XG4gICAgY29uc3RydWN0b3IoY2FudmFzLCBjdHgsIHNwZWVkKSB7XG4gICAgICAgIHRoaXMuY2FudmFzID0gY2FudmFzO1xuICAgICAgICB0aGlzLmN0eCA9IGN0eDtcbiAgICAgICAgLy8gdGhpcy5zcGVlZCA9IHNwZWVkO1xuICAgICAgICB0aGlzLmJJbWFnZSA9IG5ldyBJbWFnZSgpO1xuICAgICAgICB0aGlzLmJJbWFnZS5zcmMgPSAnLi9zcmMvYXNzZXRzL3Nwcml0ZXNoZWV0LnBuZyc7XG4gICAgICAgIHRoaXMuaGVpZ2h0ID0gdGhpcy5jYW52YXMuaGVpZ2h0O1xuICAgICAgICB0aGlzLndpZHRoID0gdGhpcy5jYW52YXMud2lkdGg7XG4gICAgICAgIHRoaXMuYlRGcmFtZXMgPSBbMiwgMjYwLCA1MTgsIDc3NiwgMTAzNF07XG4gICAgICAgIHRoaXMuYkJGcmFtZXMgPSBbMiwgMjYwLCA1MTgsIDc3NiwgMTAzNCwgMTI5Ml07XG4gICAgICAgIHRoaXMudEZyYW1lID0gMDtcbiAgICAgICAgdGhpcy5iRnJhbWUgPSAwO1xuICAgICAgICAvLyB0aGlzLnkgPSAwO1xuICAgIH07XG5cbiAgICBhbmltYXRlKCkge1xuICAgICAgICB0aGlzLmN0eC5jbGVhclJlY3QoMCwgMCwgdGhpcy53aWR0aCwgdGhpcy5oZWlnaHQpO1xuICAgICAgICB0aGlzLmN0eC5kcmF3SW1hZ2UodGhpcy5iSW1hZ2UsIHRoaXMuYkJGcmFtZXNbdGhpcy5iRnJhbWVdLCAyMjYsIDI1NiwgMjIyLCAwLCAwLCB0aGlzLmNhbnZhcy53aWR0aCwgdGhpcy5jYW52YXMuaGVpZ2h0KTtcbiAgICAgICAgdGhpcy5jdHguZHJhd0ltYWdlKHRoaXMuYkltYWdlLCB0aGlzLmJURnJhbWVzW3RoaXMudEZyYW1lXSwgMiwgMjU2LCAyMjIsIDAsIDAsIHRoaXMuY2FudmFzLndpZHRoLCB0aGlzLmNhbnZhcy5oZWlnaHQpO1xuICAgICAgICB0aGlzLmJGcmFtZSArPSAxO1xuICAgICAgICB0aGlzLnRGcmFtZSArPSAxO1xuICAgICAgICBpZiAodGhpcy5iRnJhbWUgPiA1KSB0aGlzLmJGcmFtZSA9IDA7XG4gICAgICAgIGlmICh0aGlzLnRGcmFtZSA+IDQpIHRoaXMudEZyYW1lID0gMDtcbiAgICAgICAgLy8gdGhpcy55ICs9IHRoaXMuc3BlZWQ7XG4gICAgICAgIC8vIHRoaXMuY3R4LmRyYXdJbWFnZShcbiAgICAgICAgLy8gICB0aGlzLmJhY2tncm91bmRJbWFnZSxcbiAgICAgICAgLy8gICAwLFxuICAgICAgICAvLyAgIHRoaXMueSxcbiAgICAgICAgLy8gICB0aGlzLmNhbnZhcy53aWR0aCxcbiAgICAgICAgLy8gICB0aGlzLmNhbnZhcy5oZWlnaHRcbiAgICAgICAgLy8gKTtcbiAgICAgICAgLy8gdGhpcy5jdHguZHJhd0ltYWdlKFxuICAgICAgICAvLyAgIHRoaXMuYmFja2dyb3VuZEltYWdlLFxuICAgICAgICAvLyAgIDAsXG4gICAgICAgIC8vICAgdGhpcy55IC0gdGhpcy5jYW52YXMuaGVpZ2h0LFxuICAgICAgICAvLyAgIHRoaXMuY2FudmFzLndpZHRoLFxuICAgICAgICAvLyAgIHRoaXMuY2FudmFzLmhlaWdodFxuICAgICAgICAvLyApO1xuICAgICAgICAvLyBpZiAodGhpcy55ID09PSB0aGlzLmNhbnZhcy5oZWlnaHQpIHRoaXMueSA9IDA7XG5cbiAgICB9O1xufSIsInZhciByYW5kb21Xb3JkcyA9IHJlcXVpcmUoJ3JhbmRvbS13b3JkcycpO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBFbmVteSB7XG4gICAgY29uc3RydWN0b3IoY2FudmFzLCBjdHgsIHNwZWVkLCBzaGlwUG9zKSB7XG4gICAgICAgIHRoaXMuY2FudmFzID0gY2FudmFzO1xuICAgICAgICB0aGlzLmN0eCA9IGN0eDtcbiAgICAgICAgdGhpcy53b3JkID0gcmFuZG9tV29yZHMoKTtcbiAgICAgICAgdGhpcy5zcGVlZD0gc3BlZWQ7XG4gICAgICAgIHRoaXMucmVuZGVyZWQgPSB0cnVlO1xuICAgICAgICB0aGlzLnNoaXBJbWcgPSBuZXcgSW1hZ2UoKTtcbiAgICAgICAgdGhpcy5zaGlwSW1nLnNyYyA9IFwiLi9zcmMvYXNzZXRzL3RpZV9maWdodGVyLnBuZ1wiO1xuICAgICAgICB0aGlzLnNwcml0ZXMgPSBuZXcgSW1hZ2UoKTtcbiAgICAgICAgdGhpcy5zcHJpdGVzLnNyYyA9ICcuL3NyYy9hc3NldHMvc3ByaXRlc2hlZXQucG5nJztcbiAgICAgICAgdGhpcy5zaGlwUG9zID0gc2hpcFBvcztcbiAgICAgICAgdGhpcy5keiA9IDAuMTtcbiAgICAgICAgdGhpcy5keCA9ICh0aGlzLnNoaXBQb3NbMF0gLyAyNTYpO1xuICAgICAgICB0aGlzLmF0dGFja2luZyA9IGZhbHNlO1xuICAgICAgICB0aGlzLmF0ZiA9IDA7XG5cbiAgICAgICAgdGhpcy5kcmF3ID0gdGhpcy5kcmF3LmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMuYXR0YWNrID0gdGhpcy5hdHRhY2suYmluZCh0aGlzKTtcbiAgICB9O1xuXG4gICAgZHJhdygpIHtcbiAgICAgICAgXG4gICAgICAgIHRoaXMuY3R4LmRyYXdJbWFnZSh0aGlzLnNoaXBJbWcsICggdGhpcy5keCAqIHRoaXMuY2FudmFzLndpZHRoKSwgKCh0aGlzLnNoaXBQb3NbMV0gLyAyMjIpICogdGhpcy5jYW52YXMuaGVpZ2h0KSwgKHRoaXMuZHogKiAodGhpcy5jYW52YXMud2lkdGggKiAoNDAgLyAyNTYpKSksICh0aGlzLmR6ICogKHRoaXMuY2FudmFzLmhlaWdodCAqICg0MCAvIDIyMikpKSk7XG4gICAgICAgIHRoaXMuY3R4LmZpbGxTdHlsZSA9IFwiI0ZGRkZGRlwiO1xuICAgICAgICB0aGlzLmN0eC5mb250ID0gJzIwcHggUmVkIFJvc2UnO1xuICAgICAgICAvLyBjb25zdCB3b3JkUG9zID0gKDEwMCAtICh0aGlzLndvcmQubGVuZ3RoICogMjApKSAvIDI7XG4gICAgICAgIHRoaXMuY3R4LnRleHRBbGlnbiA9IFwiY2VudGVyXCI7XG4gICAgICAgIHRoaXMuY3R4LmZpbGxUZXh0KHRoaXMud29yZCwgKCggdGhpcy5keCAqIHRoaXMuY2FudmFzLndpZHRoKSArICh0aGlzLmR6ICoodGhpcy5jYW52YXMud2lkdGggKiAyMC8yNTYpKSksICgodGhpcy5zaGlwUG9zWzFdIC8gMjIyKSAqIHRoaXMuY2FudmFzLmhlaWdodCkpO1xuICAgICAgICB0aGlzLmF0dGFjaygpO1xuICAgICAgICAvLyBkZWJ1Z2dlclxuICAgIH07XG5cbiAgICBhbmltYXRlKCl7XG4gICAgICAgIGlmICh0aGlzLnJlbmRlcmVkKSB7XG4gICAgICAgIGlmICh0aGlzLmR6IDwgMSkge1xuICAgICAgICAgICAgdGhpcy5keiArPSB0aGlzLnNwZWVkO1xuICAgICAgICAgICAgdGhpcy5keCAtPSAuMDAxO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuZHJhdygpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgYXR0YWNrKCkge1xuICAgICAgICBpZiAodGhpcy5keiA+PSAxKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5hdHRhY2tpbmcpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmN0eC5kcmF3SW1hZ2UodGhpcy5zcHJpdGVzLCA3NzEsIDQ1MCwgMjQ1LCA2OCwgXG4gICAgICAgICAgICAgICAgICAgIC8vICgoIHRoaXMuZHggKiB0aGlzLmNhbnZhcy53aWR0aCkgLSAodGhpcy5keiAqKHRoaXMuY2FudmFzLndpZHRoICogMTIyLzI1NikpKSwgXG4gICAgICAgICAgICAgICAgICAgICggKCh0aGlzLnNoaXBQb3NbMF0gLSAxMjUpIC8gMjU2KSogdGhpcy5jYW52YXMud2lkdGgpLCBcbiAgICAgICAgICAgICAgICAgICAgKCgoKHRoaXMuc2hpcFBvc1sxXSArIDI1KSAvIDIyMikgKiB0aGlzLmNhbnZhcy5oZWlnaHQpKSwgXG4gICAgICAgICAgICAgICAgICAgICh0aGlzLmNhbnZhcy53aWR0aCAqIDI0NS8yNTYpLCBcbiAgICAgICAgICAgICAgICAgICAgKHRoaXMuY2FudmFzLmhlaWdodCAqICgoMjIyLSh0aGlzLnNoaXBQb3NbMV0gKyAyNSkpLyAyMjIpKSk7XG4gICAgICAgICAgICAgICAgICAgIC8vIGRlYnVnZ2VyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYXRmICs9IDE7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmF0ZiA+IDIwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmF0dGFja2luZyA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5hdGYgPSAwXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSAgICBcbiAgICB9XG59XG4iLCJpbXBvcnQgRW5lbXkgZnJvbSAnLi9lbmVteSc7XG5pbXBvcnQgQmFja2dyb3VuZCBmcm9tICcuL2JhY2tncm91bmQnO1xuaW1wb3J0IFBsYXllciBmcm9tICcuL3BsYXllcic7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEdhbWUge1xuICAgIGNvbnN0cnVjdG9yKGNhbnZhcywgY3R4LCBiZ0N0eCwgcEN0eCkge1xuICAgICAgICB0aGlzLmNhbnZhcyA9IGNhbnZhcztcbiAgICAgICAgdGhpcy5jdHggPSBjdHg7XG4gICAgICAgIHRoaXMuYmdDdHggPSBiZ0N0eDtcbiAgICAgICAgdGhpcy5wQ3R4ID0gcEN0eDtcbiAgICAgICAgdGhpcy5iYWNrZ3JvdW5kID0gbmV3IEJhY2tncm91bmQoY2FudmFzLCBiZ0N0eCwgMS4wKTtcbiAgICAgICAgdGhpcy5mb2N1c2VkID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5zdGFydEdhbWUgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5zaGlwcyA9IFtdO1xuICAgICAgICB0aGlzLnBsYXllciA9IG5ldyBQbGF5ZXIoY2FudmFzLCBwQ3R4KTtcbiAgICAgICAgdGhpcy53b3JkcyA9IFtdO1xuICAgICAgICB0aGlzLnN0YXJ0UG9zaXRpb25zID0gW1s5NiwgODBdLCBbMTcyLCA3MF0sIFs2MywgMzBdLCBbMTIwLCAzNV0sIFsxOTcsIDIwXV07XG4gICAgICAgIHRoaXMudXNlZFN0YXJ0UG9zID0gW107XG4gICAgICAgIHRoaXMuYW5pbWF0ZSA9IHRoaXMuYW5pbWF0ZS5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLmFuaW1hdGVCYWNrZ3JvdW5kID0gdGhpcy5hbmltYXRlQmFja2dyb3VuZC5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLnN0YXJ0ID0gdGhpcy5zdGFydC5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLmNyZWF0ZUVuZW15ID0gdGhpcy5jcmVhdGVFbmVteS5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLmdlbmVyYXRlRW5lbWllcyA9IHRoaXMuZ2VuZXJhdGVFbmVtaWVzLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMuZ2VuZXJhdGVBdHRhY2tzID0gdGhpcy5nZW5lcmF0ZUF0dGFja3MuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5lbmVteUF0dGFjayA9IHRoaXMuZW5lbXlBdHRhY2suYmluZCh0aGlzKTtcbiAgICB9XG5cbiAgICBhbmltYXRlQmFja2dyb3VuZCgpIHtcbiAgICAgICAgdGhpcy5iZ0N0eC5jYW52YXMud2lkdGggPSB3aW5kb3cuaW5uZXJXaWR0aDtcbiAgICAgICAgdGhpcy5iZ0N0eC5jYW52YXMuaGVpZ2h0ID0gd2luZG93LmlubmVySGVpZ2h0O1xuICAgICAgICB0aGlzLnBDdHguY2FudmFzLndpZHRoID0gd2luZG93LmlubmVyV2lkdGg7XG4gICAgICAgIHRoaXMucEN0eC5jYW52YXMuaGVpZ2h0ID0gd2luZG93LmlubmVySGVpZ2h0O1xuICAgICAgICB0aGlzLmJhY2tncm91bmQuYW5pbWF0ZSgpO1xuICAgICAgICB0aGlzLnBsYXllci5hbmltYXRlKCk7XG5cbiAgICB9XG5cbiAgICBhbmltYXRlKCkge1xuICAgICAgICB0aGlzLmN0eC5jYW52YXMud2lkdGggPSB3aW5kb3cuaW5uZXJXaWR0aDtcbiAgICAgICAgdGhpcy5jdHguY2FudmFzLmhlaWdodCA9IHdpbmRvdy5pbm5lckhlaWdodDtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnNoaXBzLmxlbmd0aDsgaSsrKXtcbiAgICAgICAgICAgIGNvbnN0IHNoaXAgPSB0aGlzLnNoaXBzW2ldO1xuICAgICAgICAgICAgaWYgKHNoaXAucmVuZGVyZWQpe1xuICAgICAgICAgICAgICAgIHNoaXAuYW5pbWF0ZSgpO1xuICAgICAgICAgICAgICAgIC8vIGlmIChzaGlwLmR6ID49IDEpIHtcbiAgICAgICAgICAgICAgICAvLyAgICAgdGhpcy5wbGF5ZXIuaGVhbHRoIC09IDE7XG4gICAgICAgICAgICAgICAgLy8gICAgIHNoaXAuYXR0YWNraW5nID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAvLyAgICAgLy8gZGVidWdnZXJcbiAgICAgICAgICAgICAgICAvLyB9XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMuc2hpcHMuc3BsaWNlKGksIDEpO1xuICAgICAgICAgICAgICAgIHRoaXMud29yZHMuc3BsaWNlKGksIDEpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSh0aGlzLmFuaW1hdGUpO1xuICAgICAgICBcbiAgICB9XG5cbiAgICBzdGFydCgpIHtcbiAgICAgICAgaWYgKCF0aGlzLnN0YXJ0R2FtZSkge1xuICAgICAgICAgICAgdGhpcy5nZW5lcmF0ZUVuZW1pZXMoKTtcbiAgICAgICAgICAgIHRoaXMuZ2VuZXJhdGVBdHRhY2tzKCk7XG5cbiAgICAgICAgdGhpcy5zdGFydEdhbWUgPSB0cnVlO1xuICAgICAgICBjb25zdCBwbGF5ZXJXb3JkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3BsYXllci13b3JkJyk7XG4gICAgICAgIHBsYXllcldvcmQuYXV0b2ZvY3VzID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgd2luZG93Lm9uYmx1ciA9ICgpID0+IHRoaXMuZm9jdXNlZCA9IGZhbHNlO1xuICAgICAgICB3aW5kb3cub25mb2N1cyA9ICgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuZm9jdXNlZCA9IHRydWU7XG4gICAgICAgICAgICB0aGlzLmdlbmVyYXRlRW5lbWllcygpO1xuICAgICAgICAgICAgdGhpcy5nZW5lcmF0ZUF0dGFja3MoKTtcblxuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgcGxheWVyV29yZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwbGF5ZXItd29yZCcpO1xuICAgICAgICBwbGF5ZXJXb3JkLmF1dG9mb2N1cyA9IHRydWU7XG4gICAgICAgIHRoaXMuY2FudmFzLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCk9PiBwbGF5ZXJXb3JkLmZvY3VzKCkpO1xuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYmctY2FudmFzJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKT0+IHBsYXllcldvcmQuZm9jdXMoKSk7XG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwbGF5ZXItc2NyZWVuJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKT0+IHBsYXllcldvcmQuZm9jdXMoKSk7XG5cblxuICAgICAgICBzZXRJbnRlcnZhbCh0aGlzLmFuaW1hdGVCYWNrZ3JvdW5kLCAxMjUpO1xuICAgICAgICB0aGlzLmFuaW1hdGUoKTtcbiAgICB9XG5cbiAgICBjcmVhdGVFbmVteShjYW52YXMsIGN0eCkge1xuICAgICAgICAvLyBkZWJ1Z2dlclxuICAgICAgICBpZiAodGhpcy5zdGFydFBvc2l0aW9ucy5sZW5ndGgpIHtcbiAgICAgICAgICAgIGxldCBlbmVteSA9IG5ldyBFbmVteShjYW52YXMsIGN0eCwgLjAxLCB0aGlzLnN0YXJ0UG9zaXRpb25zWzBdKTtcbiAgICAgICAgICAgIHRoaXMuc2hpcHMucHVzaChlbmVteSk7XG4gICAgICAgICAgICB0aGlzLndvcmRzLnB1c2goZW5lbXkud29yZCk7XG4gICAgICAgICAgICBsZXQgeCA9IHRoaXMuc3RhcnRQb3NpdGlvbnMuc2hpZnQoKTtcbiAgICAgICAgICAgIHRoaXMudXNlZFN0YXJ0UG9zLnB1c2goeCk7XG4gICAgICAgIH0gXG4gICAgfVxuXG4gICAgZ2VuZXJhdGVFbmVtaWVzKCkge1xuICAgICAgICBsZXQgZGVsYXkgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiA1MDAwKTtcbiAgICAgICAgaWYgKHRoaXMuZm9jdXNlZCkge1xuICAgICAgICAgICAgc2V0VGltZW91dCgoKT0+e1xuICAgICAgICAgICAgICAgIC8vIGlmICghLnRoaXMuc3RhcnRQb3NpdGlvbnMpXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY3JlYXRlRW5lbXkodGhpcy5jYW52YXMsIHRoaXMuY3R4KTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5nZW5lcmF0ZUVuZW1pZXMoKTtcbiAgICAgICAgICAgIH0sIGRlbGF5IC0gLjIpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZ2VuZXJhdGVBdHRhY2tzICgpIHtcbiAgICAgICAgICAgICAgICBsZXQgZGVsYXkgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiA1MDAwKTtcbiAgICAgICAgaWYgKHRoaXMuZm9jdXNlZCkge1xuICAgICAgICAgICAgc2V0VGltZW91dCgoKT0+e1xuICAgICAgICAgICAgICAgIC8vIGlmICghLnRoaXMuc3RhcnRQb3NpdGlvbnMpXG4gICAgICAgICAgICAgICAgICAgIC8vIHRoaXMuY3JlYXRlRW5lbXkodGhpcy5jYW52YXMsIHRoaXMuY3R4KTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuc2hpcHMubGVuZ3RoKSB0aGlzLmVuZW15QXR0YWNrKCk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZ2VuZXJhdGVBdHRhY2tzKCk7XG4gICAgICAgICAgICB9LCBkZWxheSAtIC4yKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGVuZW15QXR0YWNrKCkge1xuICAgICAgICBsZXQgc2hpcCA9IHRoaXMuc2hpcHNbTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogdGhpcy5zaGlwcy5sZW5ndGgpXTtcbiAgICAgICAgaWYgKCFzaGlwLmF0dGFja2luZyAmJiBzaGlwLmR6ID49IDEpIHtcbiAgICAgICAgICAgIHNoaXAuYXR0YWNraW5nID0gdHJ1ZTtcbiAgICAgICAgICAgIHRoaXMucGxheWVyLmhlYWx0aCAtPTE7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjaGVja1dvcmQod29yZCkge1xuICAgICAgICBsZXQgaSA9IHRoaXMud29yZHMuaW5kZXhPZih3b3JkKTtcbiAgICAgICAgaWYgKGkgIT0gLTEpIHtcbiAgICAgICAgICAgIHRoaXMuc3RhcnRQb3NpdGlvbnMucHVzaCh0aGlzLnNoaXBzW2ldLnNoaXBQb3MpO1xuICAgICAgICAgICAgdGhpcy5zaGlwc1tpXS5yZW5kZXJlZCA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgfVxuXG5cbn0iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBQbGF5ZXIge1xuICBjb25zdHJ1Y3RvcihjYW52YXMsIGN0eCkge1xuICAgIHRoaXMuY2FudmFzID0gY2FudmFzO1xuICAgIHRoaXMuY3R4ID0gY3R4O1xuICAgIHRoaXMucEltZyA9IG5ldyBJbWFnZSgpO1xuICAgIHRoaXMucEltZy5zcmMgPSBcIi4vc3JjL2Fzc2V0cy9zcHJpdGVzaGVldC5wbmdcIjtcbiAgICB0aGlzLm5hdlNjcmVlbkZyYW1lcyA9IFsyNjAsIDMxNl07XG4gICAgdGhpcy5uU0YgPSAwO1xuICAgIHRoaXMuaGVhbHRoID0gMTA7XG4gIH1cblxuXG4gIGFuaW1hdGUoKSB7XG4gICAgICAgIHRoaXMuY3R4LmRyYXdJbWFnZSh0aGlzLnBJbWcsIDIsIDQ1MCwgMjU2LCAxNjMsIDAsICgoNTkgLyAyMjIpICogdGhpcy5jYW52YXMuaGVpZ2h0KSwgdGhpcy5jYW52YXMud2lkdGgsICgoMTYzIC8gMjIyKSAqIHRoaXMuY2FudmFzLmhlaWdodCkpO1xuICAgICAgICB0aGlzLmN0eC5kcmF3SW1hZ2UodGhpcy5wSW1nLCB0aGlzLm5hdlNjcmVlbkZyYW1lc1t0aGlzLm5TRl0sIDU4MCwgNTQsIDMzLCAoKDEwMSAvIDI1NikgKiB0aGlzLmNhbnZhcy53aWR0aCksICgoMTc2IC8gMjIyKSAqIHRoaXMuY2FudmFzLmhlaWdodCksICgoNTQgLyAyNTYpICogdGhpcy5jYW52YXMud2lkdGgpLCAoKDMzIC8gMjIyKSAqIHRoaXMuY2FudmFzLmhlaWdodCkpO1xuICAgICAgICB0aGlzLm5TRiArPSAxO1xuICAgICAgICBpZiAodGhpcy5uU0YgPiAxKSB0aGlzLm5TRiA9IDA7XG5cbiAgICAgICAgaWYgKCB0aGlzLmhlYWx0aCA8PSA5ICkgdGhpcy5jdHguZHJhd0ltYWdlKHRoaXMucEltZywgMjY4LCA1NjEsIDYsIDMsICgoMTYxIC8gMjU2KSAqIHRoaXMuY2FudmFzLndpZHRoKSwgKCgxNTMgLyAyMjIpICogdGhpcy5jYW52YXMuaGVpZ2h0KSwgKCg2IC8gMjU2KSAqIHRoaXMuY2FudmFzLndpZHRoKSwgKCgzIC8gMjIyKSAqIHRoaXMuY2FudmFzLmhlaWdodCkpO1xuICAgICAgICBpZiAoIHRoaXMuaGVhbHRoIDw9IDggKSB0aGlzLmN0eC5kcmF3SW1hZ2UodGhpcy5wSW1nLCAyNjgsIDU2MSwgNiwgMywgKCgxNTMgLyAyNTYpICogdGhpcy5jYW52YXMud2lkdGgpLCAoKDE1MyAvIDIyMikgKiB0aGlzLmNhbnZhcy5oZWlnaHQpLCAoKDYgLyAyNTYpICogdGhpcy5jYW52YXMud2lkdGgpLCAoKDMgLyAyMjIpICogdGhpcy5jYW52YXMuaGVpZ2h0KSk7XG4gICAgICAgIGlmICggdGhpcy5oZWFsdGggPD0gNyApIHRoaXMuY3R4LmRyYXdJbWFnZSh0aGlzLnBJbWcsIDI2OCwgNTYxLCA2LCAzLCAoKDE0NSAvIDI1NikgKiB0aGlzLmNhbnZhcy53aWR0aCksICgoMTUzIC8gMjIyKSAqIHRoaXMuY2FudmFzLmhlaWdodCksICgoNiAvIDI1NikgKiB0aGlzLmNhbnZhcy53aWR0aCksICgoMyAvIDIyMikgKiB0aGlzLmNhbnZhcy5oZWlnaHQpKTtcbiAgICAgICAgaWYgKCB0aGlzLmhlYWx0aCA8PSA2ICkgdGhpcy5jdHguZHJhd0ltYWdlKHRoaXMucEltZywgMjY4LCA1NjEsIDYsIDMsICgoMTM3IC8gMjU2KSAqIHRoaXMuY2FudmFzLndpZHRoKSwgKCgxNTMgLyAyMjIpICogdGhpcy5jYW52YXMuaGVpZ2h0KSwgKCg2IC8gMjU2KSAqIHRoaXMuY2FudmFzLndpZHRoKSwgKCgzIC8gMjIyKSAqIHRoaXMuY2FudmFzLmhlaWdodCkpO1xuICAgICAgICBpZiAoIHRoaXMuaGVhbHRoIDw9IDUgKSB0aGlzLmN0eC5kcmF3SW1hZ2UodGhpcy5wSW1nLCAyNjgsIDU2MSwgNiwgMywgKCgxMjkgLyAyNTYpICogdGhpcy5jYW52YXMud2lkdGgpLCAoKDE1MyAvIDIyMikgKiB0aGlzLmNhbnZhcy5oZWlnaHQpLCAoKDYgLyAyNTYpICogdGhpcy5jYW52YXMud2lkdGgpLCAoKDMgLyAyMjIpICogdGhpcy5jYW52YXMuaGVpZ2h0KSk7XG4gICAgICAgIGlmICggdGhpcy5oZWFsdGggPD0gNCApIHRoaXMuY3R4LmRyYXdJbWFnZSh0aGlzLnBJbWcsIDI2OCwgNTYxLCA2LCAzLCAoKDEyMSAvIDI1NikgKiB0aGlzLmNhbnZhcy53aWR0aCksICgoMTUzIC8gMjIyKSAqIHRoaXMuY2FudmFzLmhlaWdodCksICgoNiAvIDI1NikgKiB0aGlzLmNhbnZhcy53aWR0aCksICgoMyAvIDIyMikgKiB0aGlzLmNhbnZhcy5oZWlnaHQpKTtcbiAgICAgICAgaWYgKCB0aGlzLmhlYWx0aCA8PSAzICkgdGhpcy5jdHguZHJhd0ltYWdlKHRoaXMucEltZywgMjY4LCA1NjEsIDYsIDMsICgoMTEzIC8gMjU2KSAqIHRoaXMuY2FudmFzLndpZHRoKSwgKCgxNTMgLyAyMjIpICogdGhpcy5jYW52YXMuaGVpZ2h0KSwgKCg2IC8gMjU2KSAqIHRoaXMuY2FudmFzLndpZHRoKSwgKCgzIC8gMjIyKSAqIHRoaXMuY2FudmFzLmhlaWdodCkpO1xuICAgICAgICBpZiAoIHRoaXMuaGVhbHRoIDw9IDIgKSB0aGlzLmN0eC5kcmF3SW1hZ2UodGhpcy5wSW1nLCAyNjgsIDU2MSwgNiwgMywgKCgxMDUgLyAyNTYpICogdGhpcy5jYW52YXMud2lkdGgpLCAoKDE1MyAvIDIyMikgKiB0aGlzLmNhbnZhcy5oZWlnaHQpLCAoKDYgLyAyNTYpICogdGhpcy5jYW52YXMud2lkdGgpLCAoKDMgLyAyMjIpICogdGhpcy5jYW52YXMuaGVpZ2h0KSk7XG4gICAgICAgIGlmICggdGhpcy5oZWFsdGggPD0gMSApIHRoaXMuY3R4LmRyYXdJbWFnZSh0aGlzLnBJbWcsIDI2OCwgNTYxLCA2LCAzLCAoKDk3IC8gMjU2KSAgKiB0aGlzLmNhbnZhcy53aWR0aCksICgoMTUzIC8gMjIyKSAqIHRoaXMuY2FudmFzLmhlaWdodCksICgoNiAvIDI1NiApICogdGhpcy5jYW52YXMud2lkdGgpLCAoKDMgLyAyMjIpICogdGhpcy5jYW52YXMuaGVpZ2h0KSk7XG4gICAgICAgIGlmICggdGhpcy5oZWFsdGggPD0gMCApIHRoaXMuY3R4LmRyYXdJbWFnZSh0aGlzLnBJbWcsIDI2OCwgNTYxLCA2LCAzLCAoKDg5IC8gMjU2KSAqIHRoaXMuY2FudmFzLndpZHRoKSwgKCgxNTMgLyAyMjIpICogdGhpcy5jYW52YXMuaGVpZ2h0KSwgKCg2IC8gMjU2KSAqIHRoaXMuY2FudmFzLndpZHRoKSwgKCgzIC8gMjIyKSAqIHRoaXMuY2FudmFzLmhlaWdodCkpO1xuICB9XG59XG4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iXSwic291cmNlUm9vdCI6IiJ9