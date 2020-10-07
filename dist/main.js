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

  function removeSplash(e) {
    if (e.key === 'Enter') {
      var splash = document.getElementById("splash");
      splash.style.display = 'none';
      document.removeEventListener("keypress", removeSplash);
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
  function Enemy(canvas, ctx, speed) {
    _classCallCheck(this, Enemy);

    this.canvas = canvas;
    this.ctx = ctx;
    this.word = randomWords();
    this.speed = speed;
    this.rendered = true;
    this.shipImg = new Image();
    this.shipImg.src = "./src/assets/tie_fighter.png";
    this.shipPos = -100;
    this.dx = Math.floor(Math.random() * this.canvas.width);
  }

  _createClass(Enemy, [{
    key: "draw",
    value: function draw() {
      this.ctx.drawImage(this.shipImg, this.dx, this.shipPos, 100, 100);
      this.ctx.fillStyle = "#FFFFFF";
      this.ctx.font = '20px Red Rose';
      var wordPos = (100 - this.word.length * 20) / 2;
      this.ctx.fillText(this.word, wordPos + this.dx, this.shipPos);
    }
  }, {
    key: "animate",
    value: function animate() {
      if (this.rendered) {
        this.shipPos += this.speed;
        if (this.shipPos === this.canvas.height || this.shipPos === this.canvas.height + 1) this.shipPos = -100;
        this.draw();
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
    this.startPositions = [];
    this.usedStartPos = [];
    this.animate = this.animate.bind(this);
    this.animateBackground = this.animateBackground.bind(this);
    this.start = this.start.bind(this);
    this.createEnemy = this.createEnemy.bind(this);
    this.generateEnemies = this.generateEnemies.bind(this);
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
          ship.animate();
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
      };

      var playerWord = document.getElementById('player-word');
      playerWord.autofocus = true;
      this.canvas.addEventListener('click', function () {
        return playerWord.focus();
      });
      setInterval(this.animateBackground, 125);
      this.animate();
    }
  }, {
    key: "createEnemy",
    value: function createEnemy(canvas, ctx) {
      var enemy = new _enemy__WEBPACK_IMPORTED_MODULE_0__["default"](canvas, ctx, 2.0);
      this.ships.push(enemy);
      this.words.push(enemy.word);
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
    key: "checkWord",
    value: function checkWord(word) {
      var i = this.words.indexOf(word);

      if (i != -1) {
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
  }

  _createClass(Player, [{
    key: "animate",
    value: function animate() {
      this.ctx.drawImage(this.pImg, 3, 450, 254, 162, 0, 59 / 222 * this.canvas.height, this.canvas.width, 163 / 222 * this.canvas.height);
      this.ctx.drawImage(this.pImg, this.navScreenFrames[this.nSF], 580, 54, 33, 100 / 254 * this.canvas.width, 177 / 222 * this.canvas.height, 54 / 254 * this.canvas.width, 33 / 222 * this.canvas.height);
      this.nSF += 1;
      if (this.nSF > 1) this.nSF = 0;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3JhbmRvbS13b3Jkcy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMvYmFja2dyb3VuZC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NyaXB0cy9lbmVteS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NyaXB0cy9nYW1lLmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL3BsYXllci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3R5bGVzL2luZGV4LnNjc3M/YzgwNyJdLCJuYW1lcyI6WyJkb2N1bWVudCIsImFkZEV2ZW50TGlzdGVuZXIiLCJjYW52YXMiLCJnZXRFbGVtZW50QnlJZCIsImN0eCIsImdldENvbnRleHQiLCJiZ0NhbnZhcyIsImJnQ3R4IiwicENhbnZhcyIsInBDdHgiLCJpbnB1dFNlY3Rpb24iLCJwbGF5ZXJXb3JkIiwiYXV0b2ZvY3VzIiwiaGFuZGxlU3VibWl0IiwibmV3R2FtZSIsIkdhbWUiLCJyZW1vdmVTcGxhc2giLCJlIiwia2V5Iiwic3BsYXNoIiwic3R5bGUiLCJkaXNwbGF5IiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsInN0YXJ0IiwiZm9jdXMiLCJwcmV2ZW50RGVmYXVsdCIsImNoZWNrV29yZCIsInZhbHVlIiwidHJpbSIsInJlc2V0IiwiQmFja2dyb3VuZCIsInNwZWVkIiwiYkltYWdlIiwiSW1hZ2UiLCJzcmMiLCJoZWlnaHQiLCJ3aWR0aCIsImJURnJhbWVzIiwiYkJGcmFtZXMiLCJ0RnJhbWUiLCJiRnJhbWUiLCJjbGVhclJlY3QiLCJkcmF3SW1hZ2UiLCJyYW5kb21Xb3JkcyIsInJlcXVpcmUiLCJFbmVteSIsIndvcmQiLCJyZW5kZXJlZCIsInNoaXBJbWciLCJzaGlwUG9zIiwiZHgiLCJNYXRoIiwiZmxvb3IiLCJyYW5kb20iLCJmaWxsU3R5bGUiLCJmb250Iiwid29yZFBvcyIsImxlbmd0aCIsImZpbGxUZXh0IiwiZHJhdyIsImJhY2tncm91bmQiLCJmb2N1c2VkIiwic3RhcnRHYW1lIiwic2hpcHMiLCJwbGF5ZXIiLCJQbGF5ZXIiLCJ3b3JkcyIsInN0YXJ0UG9zaXRpb25zIiwidXNlZFN0YXJ0UG9zIiwiYW5pbWF0ZSIsImJpbmQiLCJhbmltYXRlQmFja2dyb3VuZCIsImNyZWF0ZUVuZW15IiwiZ2VuZXJhdGVFbmVtaWVzIiwid2luZG93IiwiaW5uZXJXaWR0aCIsImlubmVySGVpZ2h0IiwiaSIsInNoaXAiLCJzcGxpY2UiLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJvbmJsdXIiLCJvbmZvY3VzIiwic2V0SW50ZXJ2YWwiLCJlbmVteSIsInB1c2giLCJkZWxheSIsInNldFRpbWVvdXQiLCJpbmRleE9mIiwicEltZyIsIm5hdlNjcmVlbkZyYW1lcyIsIm5TRiJdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7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aW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIi9kaXN0L1wiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsInZhciB3b3JkTGlzdCA9IFsvLyBCb3Jyb3dlZCBmcm9tIHhrY2QgcGFzc3dvcmQgZ2VuZXJhdG9yIHdoaWNoIGJvcnJvd2VkIGl0IGZyb20gd2hlcmV2ZXJcblwiYWJpbGl0eVwiLCBcImFibGVcIiwgXCJhYm9hcmRcIiwgXCJhYm91dFwiLCBcImFib3ZlXCIsIFwiYWNjZXB0XCIsIFwiYWNjaWRlbnRcIiwgXCJhY2NvcmRpbmdcIiwgXCJhY2NvdW50XCIsIFwiYWNjdXJhdGVcIiwgXCJhY3Jlc1wiLCBcImFjcm9zc1wiLCBcImFjdFwiLCBcImFjdGlvblwiLCBcImFjdGl2ZVwiLCBcImFjdGl2aXR5XCIsIFwiYWN0dWFsXCIsIFwiYWN0dWFsbHlcIiwgXCJhZGRcIiwgXCJhZGRpdGlvblwiLCBcImFkZGl0aW9uYWxcIiwgXCJhZGplY3RpdmVcIiwgXCJhZHVsdFwiLCBcImFkdmVudHVyZVwiLCBcImFkdmljZVwiLCBcImFmZmVjdFwiLCBcImFmcmFpZFwiLCBcImFmdGVyXCIsIFwiYWZ0ZXJub29uXCIsIFwiYWdhaW5cIiwgXCJhZ2FpbnN0XCIsIFwiYWdlXCIsIFwiYWdvXCIsIFwiYWdyZWVcIiwgXCJhaGVhZFwiLCBcImFpZFwiLCBcImFpclwiLCBcImFpcnBsYW5lXCIsIFwiYWxpa2VcIiwgXCJhbGl2ZVwiLCBcImFsbFwiLCBcImFsbG93XCIsIFwiYWxtb3N0XCIsIFwiYWxvbmVcIiwgXCJhbG9uZ1wiLCBcImFsb3VkXCIsIFwiYWxwaGFiZXRcIiwgXCJhbHJlYWR5XCIsIFwiYWxzb1wiLCBcImFsdGhvdWdoXCIsIFwiYW1cIiwgXCJhbW9uZ1wiLCBcImFtb3VudFwiLCBcImFuY2llbnRcIiwgXCJhbmdsZVwiLCBcImFuZ3J5XCIsIFwiYW5pbWFsXCIsIFwiYW5ub3VuY2VkXCIsIFwiYW5vdGhlclwiLCBcImFuc3dlclwiLCBcImFudHNcIiwgXCJhbnlcIiwgXCJhbnlib2R5XCIsIFwiYW55b25lXCIsIFwiYW55dGhpbmdcIiwgXCJhbnl3YXlcIiwgXCJhbnl3aGVyZVwiLCBcImFwYXJ0XCIsIFwiYXBhcnRtZW50XCIsIFwiYXBwZWFyYW5jZVwiLCBcImFwcGxlXCIsIFwiYXBwbGllZFwiLCBcImFwcHJvcHJpYXRlXCIsIFwiYXJlXCIsIFwiYXJlYVwiLCBcImFybVwiLCBcImFybXlcIiwgXCJhcm91bmRcIiwgXCJhcnJhbmdlXCIsIFwiYXJyYW5nZW1lbnRcIiwgXCJhcnJpdmVcIiwgXCJhcnJvd1wiLCBcImFydFwiLCBcImFydGljbGVcIiwgXCJhc1wiLCBcImFzaWRlXCIsIFwiYXNrXCIsIFwiYXNsZWVwXCIsIFwiYXRcIiwgXCJhdGVcIiwgXCJhdG1vc3BoZXJlXCIsIFwiYXRvbVwiLCBcImF0b21pY1wiLCBcImF0dGFjaGVkXCIsIFwiYXR0YWNrXCIsIFwiYXR0ZW1wdFwiLCBcImF0dGVudGlvblwiLCBcImF1ZGllbmNlXCIsIFwiYXV0aG9yXCIsIFwiYXV0b21vYmlsZVwiLCBcImF2YWlsYWJsZVwiLCBcImF2ZXJhZ2VcIiwgXCJhdm9pZFwiLCBcImF3YXJlXCIsIFwiYXdheVwiLCBcImJhYnlcIiwgXCJiYWNrXCIsIFwiYmFkXCIsIFwiYmFkbHlcIiwgXCJiYWdcIiwgXCJiYWxhbmNlXCIsIFwiYmFsbFwiLCBcImJhbGxvb25cIiwgXCJiYW5kXCIsIFwiYmFua1wiLCBcImJhclwiLCBcImJhcmVcIiwgXCJiYXJrXCIsIFwiYmFyblwiLCBcImJhc2VcIiwgXCJiYXNlYmFsbFwiLCBcImJhc2ljXCIsIFwiYmFzaXNcIiwgXCJiYXNrZXRcIiwgXCJiYXRcIiwgXCJiYXR0bGVcIiwgXCJiZVwiLCBcImJlYW5cIiwgXCJiZWFyXCIsIFwiYmVhdFwiLCBcImJlYXV0aWZ1bFwiLCBcImJlYXV0eVwiLCBcImJlY2FtZVwiLCBcImJlY2F1c2VcIiwgXCJiZWNvbWVcIiwgXCJiZWNvbWluZ1wiLCBcImJlZVwiLCBcImJlZW5cIiwgXCJiZWZvcmVcIiwgXCJiZWdhblwiLCBcImJlZ2lubmluZ1wiLCBcImJlZ3VuXCIsIFwiYmVoYXZpb3JcIiwgXCJiZWhpbmRcIiwgXCJiZWluZ1wiLCBcImJlbGlldmVkXCIsIFwiYmVsbFwiLCBcImJlbG9uZ1wiLCBcImJlbG93XCIsIFwiYmVsdFwiLCBcImJlbmRcIiwgXCJiZW5lYXRoXCIsIFwiYmVudFwiLCBcImJlc2lkZVwiLCBcImJlc3RcIiwgXCJiZXRcIiwgXCJiZXR0ZXJcIiwgXCJiZXR3ZWVuXCIsIFwiYmV5b25kXCIsIFwiYmljeWNsZVwiLCBcImJpZ2dlclwiLCBcImJpZ2dlc3RcIiwgXCJiaWxsXCIsIFwiYmlyZHNcIiwgXCJiaXJ0aFwiLCBcImJpcnRoZGF5XCIsIFwiYml0XCIsIFwiYml0ZVwiLCBcImJsYWNrXCIsIFwiYmxhbmtcIiwgXCJibGFua2V0XCIsIFwiYmxld1wiLCBcImJsaW5kXCIsIFwiYmxvY2tcIiwgXCJibG9vZFwiLCBcImJsb3dcIiwgXCJibHVlXCIsIFwiYm9hcmRcIiwgXCJib2F0XCIsIFwiYm9keVwiLCBcImJvbmVcIiwgXCJib29rXCIsIFwiYm9yZGVyXCIsIFwiYm9yblwiLCBcImJvdGhcIiwgXCJib3R0bGVcIiwgXCJib3R0b21cIiwgXCJib3VuZFwiLCBcImJvd1wiLCBcImJvd2xcIiwgXCJib3hcIiwgXCJib3lcIiwgXCJicmFpblwiLCBcImJyYW5jaFwiLCBcImJyYXNzXCIsIFwiYnJhdmVcIiwgXCJicmVhZFwiLCBcImJyZWFrXCIsIFwiYnJlYWtmYXN0XCIsIFwiYnJlYXRoXCIsIFwiYnJlYXRoZVwiLCBcImJyZWF0aGluZ1wiLCBcImJyZWV6ZVwiLCBcImJyaWNrXCIsIFwiYnJpZGdlXCIsIFwiYnJpZWZcIiwgXCJicmlnaHRcIiwgXCJicmluZ1wiLCBcImJyb2FkXCIsIFwiYnJva2VcIiwgXCJicm9rZW5cIiwgXCJicm90aGVyXCIsIFwiYnJvdWdodFwiLCBcImJyb3duXCIsIFwiYnJ1c2hcIiwgXCJidWZmYWxvXCIsIFwiYnVpbGRcIiwgXCJidWlsZGluZ1wiLCBcImJ1aWx0XCIsIFwiYnVyaWVkXCIsIFwiYnVyblwiLCBcImJ1cnN0XCIsIFwiYnVzXCIsIFwiYnVzaFwiLCBcImJ1c2luZXNzXCIsIFwiYnVzeVwiLCBcImJ1dFwiLCBcImJ1dHRlclwiLCBcImJ1eVwiLCBcImJ5XCIsIFwiY2FiaW5cIiwgXCJjYWdlXCIsIFwiY2FrZVwiLCBcImNhbGxcIiwgXCJjYWxtXCIsIFwiY2FtZVwiLCBcImNhbWVyYVwiLCBcImNhbXBcIiwgXCJjYW5cIiwgXCJjYW5hbFwiLCBcImNhbm5vdFwiLCBcImNhcFwiLCBcImNhcGl0YWxcIiwgXCJjYXB0YWluXCIsIFwiY2FwdHVyZWRcIiwgXCJjYXJcIiwgXCJjYXJib25cIiwgXCJjYXJkXCIsIFwiY2FyZVwiLCBcImNhcmVmdWxcIiwgXCJjYXJlZnVsbHlcIiwgXCJjYXJyaWVkXCIsIFwiY2FycnlcIiwgXCJjYXNlXCIsIFwiY2FzdFwiLCBcImNhc3RsZVwiLCBcImNhdFwiLCBcImNhdGNoXCIsIFwiY2F0dGxlXCIsIFwiY2F1Z2h0XCIsIFwiY2F1c2VcIiwgXCJjYXZlXCIsIFwiY2VsbFwiLCBcImNlbnRcIiwgXCJjZW50ZXJcIiwgXCJjZW50cmFsXCIsIFwiY2VudHVyeVwiLCBcImNlcnRhaW5cIiwgXCJjZXJ0YWlubHlcIiwgXCJjaGFpblwiLCBcImNoYWlyXCIsIFwiY2hhbWJlclwiLCBcImNoYW5jZVwiLCBcImNoYW5nZVwiLCBcImNoYW5naW5nXCIsIFwiY2hhcHRlclwiLCBcImNoYXJhY3RlclwiLCBcImNoYXJhY3RlcmlzdGljXCIsIFwiY2hhcmdlXCIsIFwiY2hhcnRcIiwgXCJjaGVja1wiLCBcImNoZWVzZVwiLCBcImNoZW1pY2FsXCIsIFwiY2hlc3RcIiwgXCJjaGlja2VuXCIsIFwiY2hpZWZcIiwgXCJjaGlsZFwiLCBcImNoaWxkcmVuXCIsIFwiY2hvaWNlXCIsIFwiY2hvb3NlXCIsIFwiY2hvc2VcIiwgXCJjaG9zZW5cIiwgXCJjaHVyY2hcIiwgXCJjaXJjbGVcIiwgXCJjaXJjdXNcIiwgXCJjaXRpemVuXCIsIFwiY2l0eVwiLCBcImNsYXNzXCIsIFwiY2xhc3Nyb29tXCIsIFwiY2xhd3NcIiwgXCJjbGF5XCIsIFwiY2xlYW5cIiwgXCJjbGVhclwiLCBcImNsZWFybHlcIiwgXCJjbGltYXRlXCIsIFwiY2xpbWJcIiwgXCJjbG9ja1wiLCBcImNsb3NlXCIsIFwiY2xvc2VseVwiLCBcImNsb3NlclwiLCBcImNsb3RoXCIsIFwiY2xvdGhlc1wiLCBcImNsb3RoaW5nXCIsIFwiY2xvdWRcIiwgXCJjbHViXCIsIFwiY29hY2hcIiwgXCJjb2FsXCIsIFwiY29hc3RcIiwgXCJjb2F0XCIsIFwiY29mZmVlXCIsIFwiY29sZFwiLCBcImNvbGxlY3RcIiwgXCJjb2xsZWdlXCIsIFwiY29sb255XCIsIFwiY29sb3JcIiwgXCJjb2x1bW5cIiwgXCJjb21iaW5hdGlvblwiLCBcImNvbWJpbmVcIiwgXCJjb21lXCIsIFwiY29tZm9ydGFibGVcIiwgXCJjb21pbmdcIiwgXCJjb21tYW5kXCIsIFwiY29tbW9uXCIsIFwiY29tbXVuaXR5XCIsIFwiY29tcGFueVwiLCBcImNvbXBhcmVcIiwgXCJjb21wYXNzXCIsIFwiY29tcGxldGVcIiwgXCJjb21wbGV0ZWx5XCIsIFwiY29tcGxleFwiLCBcImNvbXBvc2VkXCIsIFwiY29tcG9zaXRpb25cIiwgXCJjb21wb3VuZFwiLCBcImNvbmNlcm5lZFwiLCBcImNvbmRpdGlvblwiLCBcImNvbmdyZXNzXCIsIFwiY29ubmVjdGVkXCIsIFwiY29uc2lkZXJcIiwgXCJjb25zaXN0XCIsIFwiY29uc29uYW50XCIsIFwiY29uc3RhbnRseVwiLCBcImNvbnN0cnVjdGlvblwiLCBcImNvbnRhaW5cIiwgXCJjb250aW5lbnRcIiwgXCJjb250aW51ZWRcIiwgXCJjb250cmFzdFwiLCBcImNvbnRyb2xcIiwgXCJjb252ZXJzYXRpb25cIiwgXCJjb29rXCIsIFwiY29va2llc1wiLCBcImNvb2xcIiwgXCJjb3BwZXJcIiwgXCJjb3B5XCIsIFwiY29yblwiLCBcImNvcm5lclwiLCBcImNvcnJlY3RcIiwgXCJjb3JyZWN0bHlcIiwgXCJjb3N0XCIsIFwiY290dG9uXCIsIFwiY291bGRcIiwgXCJjb3VudFwiLCBcImNvdW50cnlcIiwgXCJjb3VwbGVcIiwgXCJjb3VyYWdlXCIsIFwiY291cnNlXCIsIFwiY291cnRcIiwgXCJjb3ZlclwiLCBcImNvd1wiLCBcImNvd2JveVwiLCBcImNyYWNrXCIsIFwiY3JlYW1cIiwgXCJjcmVhdGVcIiwgXCJjcmVhdHVyZVwiLCBcImNyZXdcIiwgXCJjcm9wXCIsIFwiY3Jvc3NcIiwgXCJjcm93ZFwiLCBcImNyeVwiLCBcImN1cFwiLCBcImN1cmlvdXNcIiwgXCJjdXJyZW50XCIsIFwiY3VydmVcIiwgXCJjdXN0b21zXCIsIFwiY3V0XCIsIFwiY3V0dGluZ1wiLCBcImRhaWx5XCIsIFwiZGFtYWdlXCIsIFwiZGFuY2VcIiwgXCJkYW5nZXJcIiwgXCJkYW5nZXJvdXNcIiwgXCJkYXJrXCIsIFwiZGFya25lc3NcIiwgXCJkYXRlXCIsIFwiZGF1Z2h0ZXJcIiwgXCJkYXduXCIsIFwiZGF5XCIsIFwiZGVhZFwiLCBcImRlYWxcIiwgXCJkZWFyXCIsIFwiZGVhdGhcIiwgXCJkZWNpZGVcIiwgXCJkZWNsYXJlZFwiLCBcImRlZXBcIiwgXCJkZWVwbHlcIiwgXCJkZWVyXCIsIFwiZGVmaW5pdGlvblwiLCBcImRlZ3JlZVwiLCBcImRlcGVuZFwiLCBcImRlcHRoXCIsIFwiZGVzY3JpYmVcIiwgXCJkZXNlcnRcIiwgXCJkZXNpZ25cIiwgXCJkZXNrXCIsIFwiZGV0YWlsXCIsIFwiZGV0ZXJtaW5lXCIsIFwiZGV2ZWxvcFwiLCBcImRldmVsb3BtZW50XCIsIFwiZGlhZ3JhbVwiLCBcImRpYW1ldGVyXCIsIFwiZGlkXCIsIFwiZGllXCIsIFwiZGlmZmVyXCIsIFwiZGlmZmVyZW5jZVwiLCBcImRpZmZlcmVudFwiLCBcImRpZmZpY3VsdFwiLCBcImRpZmZpY3VsdHlcIiwgXCJkaWdcIiwgXCJkaW5uZXJcIiwgXCJkaXJlY3RcIiwgXCJkaXJlY3Rpb25cIiwgXCJkaXJlY3RseVwiLCBcImRpcnRcIiwgXCJkaXJ0eVwiLCBcImRpc2FwcGVhclwiLCBcImRpc2NvdmVyXCIsIFwiZGlzY292ZXJ5XCIsIFwiZGlzY3Vzc1wiLCBcImRpc2N1c3Npb25cIiwgXCJkaXNlYXNlXCIsIFwiZGlzaFwiLCBcImRpc3RhbmNlXCIsIFwiZGlzdGFudFwiLCBcImRpdmlkZVwiLCBcImRpdmlzaW9uXCIsIFwiZG9cIiwgXCJkb2N0b3JcIiwgXCJkb2VzXCIsIFwiZG9nXCIsIFwiZG9pbmdcIiwgXCJkb2xsXCIsIFwiZG9sbGFyXCIsIFwiZG9uZVwiLCBcImRvbmtleVwiLCBcImRvb3JcIiwgXCJkb3RcIiwgXCJkb3VibGVcIiwgXCJkb3VidFwiLCBcImRvd25cIiwgXCJkb3plblwiLCBcImRyYXdcIiwgXCJkcmF3blwiLCBcImRyZWFtXCIsIFwiZHJlc3NcIiwgXCJkcmV3XCIsIFwiZHJpZWRcIiwgXCJkcmlua1wiLCBcImRyaXZlXCIsIFwiZHJpdmVuXCIsIFwiZHJpdmVyXCIsIFwiZHJpdmluZ1wiLCBcImRyb3BcIiwgXCJkcm9wcGVkXCIsIFwiZHJvdmVcIiwgXCJkcnlcIiwgXCJkdWNrXCIsIFwiZHVlXCIsIFwiZHVnXCIsIFwiZHVsbFwiLCBcImR1cmluZ1wiLCBcImR1c3RcIiwgXCJkdXR5XCIsIFwiZWFjaFwiLCBcImVhZ2VyXCIsIFwiZWFyXCIsIFwiZWFybGllclwiLCBcImVhcmx5XCIsIFwiZWFyblwiLCBcImVhcnRoXCIsIFwiZWFzaWVyXCIsIFwiZWFzaWx5XCIsIFwiZWFzdFwiLCBcImVhc3lcIiwgXCJlYXRcIiwgXCJlYXRlblwiLCBcImVkZ2VcIiwgXCJlZHVjYXRpb25cIiwgXCJlZmZlY3RcIiwgXCJlZmZvcnRcIiwgXCJlZ2dcIiwgXCJlaWdodFwiLCBcImVpdGhlclwiLCBcImVsZWN0cmljXCIsIFwiZWxlY3RyaWNpdHlcIiwgXCJlbGVtZW50XCIsIFwiZWxlcGhhbnRcIiwgXCJlbGV2ZW5cIiwgXCJlbHNlXCIsIFwiZW1wdHlcIiwgXCJlbmRcIiwgXCJlbmVteVwiLCBcImVuZXJneVwiLCBcImVuZ2luZVwiLCBcImVuZ2luZWVyXCIsIFwiZW5qb3lcIiwgXCJlbm91Z2hcIiwgXCJlbnRlclwiLCBcImVudGlyZVwiLCBcImVudGlyZWx5XCIsIFwiZW52aXJvbm1lbnRcIiwgXCJlcXVhbFwiLCBcImVxdWFsbHlcIiwgXCJlcXVhdG9yXCIsIFwiZXF1aXBtZW50XCIsIFwiZXNjYXBlXCIsIFwiZXNwZWNpYWxseVwiLCBcImVzc2VudGlhbFwiLCBcImVzdGFibGlzaFwiLCBcImV2ZW5cIiwgXCJldmVuaW5nXCIsIFwiZXZlbnRcIiwgXCJldmVudHVhbGx5XCIsIFwiZXZlclwiLCBcImV2ZXJ5XCIsIFwiZXZlcnlib2R5XCIsIFwiZXZlcnlvbmVcIiwgXCJldmVyeXRoaW5nXCIsIFwiZXZlcnl3aGVyZVwiLCBcImV2aWRlbmNlXCIsIFwiZXhhY3RcIiwgXCJleGFjdGx5XCIsIFwiZXhhbWluZVwiLCBcImV4YW1wbGVcIiwgXCJleGNlbGxlbnRcIiwgXCJleGNlcHRcIiwgXCJleGNoYW5nZVwiLCBcImV4Y2l0ZWRcIiwgXCJleGNpdGVtZW50XCIsIFwiZXhjaXRpbmdcIiwgXCJleGNsYWltZWRcIiwgXCJleGVyY2lzZVwiLCBcImV4aXN0XCIsIFwiZXhwZWN0XCIsIFwiZXhwZXJpZW5jZVwiLCBcImV4cGVyaW1lbnRcIiwgXCJleHBsYWluXCIsIFwiZXhwbGFuYXRpb25cIiwgXCJleHBsb3JlXCIsIFwiZXhwcmVzc1wiLCBcImV4cHJlc3Npb25cIiwgXCJleHRyYVwiLCBcImV5ZVwiLCBcImZhY2VcIiwgXCJmYWNpbmdcIiwgXCJmYWN0XCIsIFwiZmFjdG9yXCIsIFwiZmFjdG9yeVwiLCBcImZhaWxlZFwiLCBcImZhaXJcIiwgXCJmYWlybHlcIiwgXCJmYWxsXCIsIFwiZmFsbGVuXCIsIFwiZmFtaWxpYXJcIiwgXCJmYW1pbHlcIiwgXCJmYW1vdXNcIiwgXCJmYXJcIiwgXCJmYXJtXCIsIFwiZmFybWVyXCIsIFwiZmFydGhlclwiLCBcImZhc3RcIiwgXCJmYXN0ZW5lZFwiLCBcImZhc3RlclwiLCBcImZhdFwiLCBcImZhdGhlclwiLCBcImZhdm9yaXRlXCIsIFwiZmVhclwiLCBcImZlYXRoZXJzXCIsIFwiZmVhdHVyZVwiLCBcImZlZFwiLCBcImZlZWRcIiwgXCJmZWVsXCIsIFwiZmVldFwiLCBcImZlbGxcIiwgXCJmZWxsb3dcIiwgXCJmZWx0XCIsIFwiZmVuY2VcIiwgXCJmZXdcIiwgXCJmZXdlclwiLCBcImZpZWxkXCIsIFwiZmllcmNlXCIsIFwiZmlmdGVlblwiLCBcImZpZnRoXCIsIFwiZmlmdHlcIiwgXCJmaWdodFwiLCBcImZpZ2h0aW5nXCIsIFwiZmlndXJlXCIsIFwiZmlsbFwiLCBcImZpbG1cIiwgXCJmaW5hbFwiLCBcImZpbmFsbHlcIiwgXCJmaW5kXCIsIFwiZmluZVwiLCBcImZpbmVzdFwiLCBcImZpbmdlclwiLCBcImZpbmlzaFwiLCBcImZpcmVcIiwgXCJmaXJlcGxhY2VcIiwgXCJmaXJtXCIsIFwiZmlyc3RcIiwgXCJmaXNoXCIsIFwiZml2ZVwiLCBcImZpeFwiLCBcImZsYWdcIiwgXCJmbGFtZVwiLCBcImZsYXRcIiwgXCJmbGV3XCIsIFwiZmxpZXNcIiwgXCJmbGlnaHRcIiwgXCJmbG9hdGluZ1wiLCBcImZsb29yXCIsIFwiZmxvd1wiLCBcImZsb3dlclwiLCBcImZseVwiLCBcImZvZ1wiLCBcImZvbGtzXCIsIFwiZm9sbG93XCIsIFwiZm9vZFwiLCBcImZvb3RcIiwgXCJmb290YmFsbFwiLCBcImZvclwiLCBcImZvcmNlXCIsIFwiZm9yZWlnblwiLCBcImZvcmVzdFwiLCBcImZvcmdldFwiLCBcImZvcmdvdFwiLCBcImZvcmdvdHRlblwiLCBcImZvcm1cIiwgXCJmb3JtZXJcIiwgXCJmb3J0XCIsIFwiZm9ydGhcIiwgXCJmb3J0eVwiLCBcImZvcndhcmRcIiwgXCJmb3VnaHRcIiwgXCJmb3VuZFwiLCBcImZvdXJcIiwgXCJmb3VydGhcIiwgXCJmb3hcIiwgXCJmcmFtZVwiLCBcImZyZWVcIiwgXCJmcmVlZG9tXCIsIFwiZnJlcXVlbnRseVwiLCBcImZyZXNoXCIsIFwiZnJpZW5kXCIsIFwiZnJpZW5kbHlcIiwgXCJmcmlnaHRlblwiLCBcImZyb2dcIiwgXCJmcm9tXCIsIFwiZnJvbnRcIiwgXCJmcm96ZW5cIiwgXCJmcnVpdFwiLCBcImZ1ZWxcIiwgXCJmdWxsXCIsIFwiZnVsbHlcIiwgXCJmdW5cIiwgXCJmdW5jdGlvblwiLCBcImZ1bm55XCIsIFwiZnVyXCIsIFwiZnVybml0dXJlXCIsIFwiZnVydGhlclwiLCBcImZ1dHVyZVwiLCBcImdhaW5cIiwgXCJnYW1lXCIsIFwiZ2FyYWdlXCIsIFwiZ2FyZGVuXCIsIFwiZ2FzXCIsIFwiZ2Fzb2xpbmVcIiwgXCJnYXRlXCIsIFwiZ2F0aGVyXCIsIFwiZ2F2ZVwiLCBcImdlbmVyYWxcIiwgXCJnZW5lcmFsbHlcIiwgXCJnZW50bGVcIiwgXCJnZW50bHlcIiwgXCJnZXRcIiwgXCJnZXR0aW5nXCIsIFwiZ2lhbnRcIiwgXCJnaWZ0XCIsIFwiZ2lybFwiLCBcImdpdmVcIiwgXCJnaXZlblwiLCBcImdpdmluZ1wiLCBcImdsYWRcIiwgXCJnbGFzc1wiLCBcImdsb2JlXCIsIFwiZ29cIiwgXCJnb2VzXCIsIFwiZ29sZFwiLCBcImdvbGRlblwiLCBcImdvbmVcIiwgXCJnb29kXCIsIFwiZ29vc2VcIiwgXCJnb3RcIiwgXCJnb3Zlcm5tZW50XCIsIFwiZ3JhYmJlZFwiLCBcImdyYWRlXCIsIFwiZ3JhZHVhbGx5XCIsIFwiZ3JhaW5cIiwgXCJncmFuZGZhdGhlclwiLCBcImdyYW5kbW90aGVyXCIsIFwiZ3JhcGhcIiwgXCJncmFzc1wiLCBcImdyYXZpdHlcIiwgXCJncmF5XCIsIFwiZ3JlYXRcIiwgXCJncmVhdGVyXCIsIFwiZ3JlYXRlc3RcIiwgXCJncmVhdGx5XCIsIFwiZ3JlZW5cIiwgXCJncmV3XCIsIFwiZ3JvdW5kXCIsIFwiZ3JvdXBcIiwgXCJncm93XCIsIFwiZ3Jvd25cIiwgXCJncm93dGhcIiwgXCJndWFyZFwiLCBcImd1ZXNzXCIsIFwiZ3VpZGVcIiwgXCJndWxmXCIsIFwiZ3VuXCIsIFwiaGFiaXRcIiwgXCJoYWRcIiwgXCJoYWlyXCIsIFwiaGFsZlwiLCBcImhhbGZ3YXlcIiwgXCJoYWxsXCIsIFwiaGFuZFwiLCBcImhhbmRsZVwiLCBcImhhbmRzb21lXCIsIFwiaGFuZ1wiLCBcImhhcHBlblwiLCBcImhhcHBlbmVkXCIsIFwiaGFwcGlseVwiLCBcImhhcHB5XCIsIFwiaGFyYm9yXCIsIFwiaGFyZFwiLCBcImhhcmRlclwiLCBcImhhcmRseVwiLCBcImhhc1wiLCBcImhhdFwiLCBcImhhdmVcIiwgXCJoYXZpbmdcIiwgXCJoYXlcIiwgXCJoZVwiLCBcImhlYWRlZFwiLCBcImhlYWRpbmdcIiwgXCJoZWFsdGhcIiwgXCJoZWFyZFwiLCBcImhlYXJpbmdcIiwgXCJoZWFydFwiLCBcImhlYXRcIiwgXCJoZWF2eVwiLCBcImhlaWdodFwiLCBcImhlbGRcIiwgXCJoZWxsb1wiLCBcImhlbHBcIiwgXCJoZWxwZnVsXCIsIFwiaGVyXCIsIFwiaGVyZFwiLCBcImhlcmVcIiwgXCJoZXJzZWxmXCIsIFwiaGlkZGVuXCIsIFwiaGlkZVwiLCBcImhpZ2hcIiwgXCJoaWdoZXJcIiwgXCJoaWdoZXN0XCIsIFwiaGlnaHdheVwiLCBcImhpbGxcIiwgXCJoaW1cIiwgXCJoaW1zZWxmXCIsIFwiaGlzXCIsIFwiaGlzdG9yeVwiLCBcImhpdFwiLCBcImhvbGRcIiwgXCJob2xlXCIsIFwiaG9sbG93XCIsIFwiaG9tZVwiLCBcImhvbm9yXCIsIFwiaG9wZVwiLCBcImhvcm5cIiwgXCJob3JzZVwiLCBcImhvc3BpdGFsXCIsIFwiaG90XCIsIFwiaG91clwiLCBcImhvdXNlXCIsIFwiaG93XCIsIFwiaG93ZXZlclwiLCBcImh1Z2VcIiwgXCJodW1hblwiLCBcImh1bmRyZWRcIiwgXCJodW5nXCIsIFwiaHVuZ3J5XCIsIFwiaHVudFwiLCBcImh1bnRlclwiLCBcImh1cnJpZWRcIiwgXCJodXJyeVwiLCBcImh1cnRcIiwgXCJodXNiYW5kXCIsIFwiaWNlXCIsIFwiaWRlYVwiLCBcImlkZW50aXR5XCIsIFwiaWZcIiwgXCJpbGxcIiwgXCJpbWFnZVwiLCBcImltYWdpbmVcIiwgXCJpbW1lZGlhdGVseVwiLCBcImltcG9ydGFuY2VcIiwgXCJpbXBvcnRhbnRcIiwgXCJpbXBvc3NpYmxlXCIsIFwiaW1wcm92ZVwiLCBcImluXCIsIFwiaW5jaFwiLCBcImluY2x1ZGVcIiwgXCJpbmNsdWRpbmdcIiwgXCJpbmNvbWVcIiwgXCJpbmNyZWFzZVwiLCBcImluZGVlZFwiLCBcImluZGVwZW5kZW50XCIsIFwiaW5kaWNhdGVcIiwgXCJpbmRpdmlkdWFsXCIsIFwiaW5kdXN0cmlhbFwiLCBcImluZHVzdHJ5XCIsIFwiaW5mbHVlbmNlXCIsIFwiaW5mb3JtYXRpb25cIiwgXCJpbnNpZGVcIiwgXCJpbnN0YW5jZVwiLCBcImluc3RhbnRcIiwgXCJpbnN0ZWFkXCIsIFwiaW5zdHJ1bWVudFwiLCBcImludGVyZXN0XCIsIFwiaW50ZXJpb3JcIiwgXCJpbnRvXCIsIFwiaW50cm9kdWNlZFwiLCBcImludmVudGVkXCIsIFwiaW52b2x2ZWRcIiwgXCJpcm9uXCIsIFwiaXNcIiwgXCJpc2xhbmRcIiwgXCJpdFwiLCBcIml0c1wiLCBcIml0c2VsZlwiLCBcImphY2tcIiwgXCJqYXJcIiwgXCJqZXRcIiwgXCJqb2JcIiwgXCJqb2luXCIsIFwiam9pbmVkXCIsIFwiam91cm5leVwiLCBcImpveVwiLCBcImp1ZGdlXCIsIFwianVtcFwiLCBcImp1bmdsZVwiLCBcImp1c3RcIiwgXCJrZWVwXCIsIFwia2VwdFwiLCBcImtleVwiLCBcImtpZHNcIiwgXCJraWxsXCIsIFwia2luZFwiLCBcImtpdGNoZW5cIiwgXCJrbmV3XCIsIFwia25pZmVcIiwgXCJrbm93XCIsIFwia25vd2xlZGdlXCIsIFwia25vd25cIiwgXCJsYWJlbFwiLCBcImxhYm9yXCIsIFwibGFja1wiLCBcImxhZHlcIiwgXCJsYWlkXCIsIFwibGFrZVwiLCBcImxhbXBcIiwgXCJsYW5kXCIsIFwibGFuZ3VhZ2VcIiwgXCJsYXJnZVwiLCBcImxhcmdlclwiLCBcImxhcmdlc3RcIiwgXCJsYXN0XCIsIFwibGF0ZVwiLCBcImxhdGVyXCIsIFwibGF1Z2hcIiwgXCJsYXdcIiwgXCJsYXlcIiwgXCJsYXllcnNcIiwgXCJsZWFkXCIsIFwibGVhZGVyXCIsIFwibGVhZlwiLCBcImxlYXJuXCIsIFwibGVhc3RcIiwgXCJsZWF0aGVyXCIsIFwibGVhdmVcIiwgXCJsZWF2aW5nXCIsIFwibGVkXCIsIFwibGVmdFwiLCBcImxlZ1wiLCBcImxlbmd0aFwiLCBcImxlc3NvblwiLCBcImxldFwiLCBcImxldHRlclwiLCBcImxldmVsXCIsIFwibGlicmFyeVwiLCBcImxpZVwiLCBcImxpZmVcIiwgXCJsaWZ0XCIsIFwibGlnaHRcIiwgXCJsaWtlXCIsIFwibGlrZWx5XCIsIFwibGltaXRlZFwiLCBcImxpbmVcIiwgXCJsaW9uXCIsIFwibGlwc1wiLCBcImxpcXVpZFwiLCBcImxpc3RcIiwgXCJsaXN0ZW5cIiwgXCJsaXR0bGVcIiwgXCJsaXZlXCIsIFwibGl2aW5nXCIsIFwibG9hZFwiLCBcImxvY2FsXCIsIFwibG9jYXRlXCIsIFwibG9jYXRpb25cIiwgXCJsb2dcIiwgXCJsb25lbHlcIiwgXCJsb25nXCIsIFwibG9uZ2VyXCIsIFwibG9va1wiLCBcImxvb3NlXCIsIFwibG9zZVwiLCBcImxvc3NcIiwgXCJsb3N0XCIsIFwibG90XCIsIFwibG91ZFwiLCBcImxvdmVcIiwgXCJsb3ZlbHlcIiwgXCJsb3dcIiwgXCJsb3dlclwiLCBcImx1Y2tcIiwgXCJsdWNreVwiLCBcImx1bmNoXCIsIFwibHVuZ3NcIiwgXCJseWluZ1wiLCBcIm1hY2hpbmVcIiwgXCJtYWNoaW5lcnlcIiwgXCJtYWRcIiwgXCJtYWRlXCIsIFwibWFnaWNcIiwgXCJtYWduZXRcIiwgXCJtYWlsXCIsIFwibWFpblwiLCBcIm1haW5seVwiLCBcIm1ham9yXCIsIFwibWFrZVwiLCBcIm1ha2luZ1wiLCBcIm1hblwiLCBcIm1hbmFnZWRcIiwgXCJtYW5uZXJcIiwgXCJtYW51ZmFjdHVyaW5nXCIsIFwibWFueVwiLCBcIm1hcFwiLCBcIm1hcmtcIiwgXCJtYXJrZXRcIiwgXCJtYXJyaWVkXCIsIFwibWFzc1wiLCBcIm1hc3NhZ2VcIiwgXCJtYXN0ZXJcIiwgXCJtYXRlcmlhbFwiLCBcIm1hdGhlbWF0aWNzXCIsIFwibWF0dGVyXCIsIFwibWF5XCIsIFwibWF5YmVcIiwgXCJtZVwiLCBcIm1lYWxcIiwgXCJtZWFuXCIsIFwibWVhbnNcIiwgXCJtZWFudFwiLCBcIm1lYXN1cmVcIiwgXCJtZWF0XCIsIFwibWVkaWNpbmVcIiwgXCJtZWV0XCIsIFwibWVsdGVkXCIsIFwibWVtYmVyXCIsIFwibWVtb3J5XCIsIFwibWVuXCIsIFwibWVudGFsXCIsIFwibWVyZWx5XCIsIFwibWV0XCIsIFwibWV0YWxcIiwgXCJtZXRob2RcIiwgXCJtaWNlXCIsIFwibWlkZGxlXCIsIFwibWlnaHRcIiwgXCJtaWdodHlcIiwgXCJtaWxlXCIsIFwibWlsaXRhcnlcIiwgXCJtaWxrXCIsIFwibWlsbFwiLCBcIm1pbmRcIiwgXCJtaW5lXCIsIFwibWluZXJhbHNcIiwgXCJtaW51dGVcIiwgXCJtaXJyb3JcIiwgXCJtaXNzaW5nXCIsIFwibWlzc2lvblwiLCBcIm1pc3Rha2VcIiwgXCJtaXhcIiwgXCJtaXh0dXJlXCIsIFwibW9kZWxcIiwgXCJtb2Rlcm5cIiwgXCJtb2xlY3VsYXJcIiwgXCJtb21lbnRcIiwgXCJtb25leVwiLCBcIm1vbmtleVwiLCBcIm1vbnRoXCIsIFwibW9vZFwiLCBcIm1vb25cIiwgXCJtb3JlXCIsIFwibW9ybmluZ1wiLCBcIm1vc3RcIiwgXCJtb3N0bHlcIiwgXCJtb3RoZXJcIiwgXCJtb3Rpb25cIiwgXCJtb3RvclwiLCBcIm1vdW50YWluXCIsIFwibW91c2VcIiwgXCJtb3V0aFwiLCBcIm1vdmVcIiwgXCJtb3ZlbWVudFwiLCBcIm1vdmllXCIsIFwibW92aW5nXCIsIFwibXVkXCIsIFwibXVzY2xlXCIsIFwibXVzaWNcIiwgXCJtdXNpY2FsXCIsIFwibXVzdFwiLCBcIm15XCIsIFwibXlzZWxmXCIsIFwibXlzdGVyaW91c1wiLCBcIm5haWxzXCIsIFwibmFtZVwiLCBcIm5hdGlvblwiLCBcIm5hdGlvbmFsXCIsIFwibmF0aXZlXCIsIFwibmF0dXJhbFwiLCBcIm5hdHVyYWxseVwiLCBcIm5hdHVyZVwiLCBcIm5lYXJcIiwgXCJuZWFyYnlcIiwgXCJuZWFyZXJcIiwgXCJuZWFyZXN0XCIsIFwibmVhcmx5XCIsIFwibmVjZXNzYXJ5XCIsIFwibmVja1wiLCBcIm5lZWRlZFwiLCBcIm5lZWRsZVwiLCBcIm5lZWRzXCIsIFwibmVnYXRpdmVcIiwgXCJuZWlnaGJvclwiLCBcIm5laWdoYm9yaG9vZFwiLCBcIm5lcnZvdXNcIiwgXCJuZXN0XCIsIFwibmV2ZXJcIiwgXCJuZXdcIiwgXCJuZXdzXCIsIFwibmV3c3BhcGVyXCIsIFwibmV4dFwiLCBcIm5pY2VcIiwgXCJuaWdodFwiLCBcIm5pbmVcIiwgXCJub1wiLCBcIm5vYm9keVwiLCBcIm5vZGRlZFwiLCBcIm5vaXNlXCIsIFwibm9uZVwiLCBcIm5vb25cIiwgXCJub3JcIiwgXCJub3J0aFwiLCBcIm5vc2VcIiwgXCJub3RcIiwgXCJub3RlXCIsIFwibm90ZWRcIiwgXCJub3RoaW5nXCIsIFwibm90aWNlXCIsIFwibm91blwiLCBcIm5vd1wiLCBcIm51bWJlclwiLCBcIm51bWVyYWxcIiwgXCJudXRzXCIsIFwib2JqZWN0XCIsIFwib2JzZXJ2ZVwiLCBcIm9idGFpblwiLCBcIm9jY2FzaW9uYWxseVwiLCBcIm9jY3VyXCIsIFwib2NlYW5cIiwgXCJvZlwiLCBcIm9mZlwiLCBcIm9mZmVyXCIsIFwib2ZmaWNlXCIsIFwib2ZmaWNlclwiLCBcIm9mZmljaWFsXCIsIFwib2lsXCIsIFwib2xkXCIsIFwib2xkZXJcIiwgXCJvbGRlc3RcIiwgXCJvblwiLCBcIm9uY2VcIiwgXCJvbmVcIiwgXCJvbmx5XCIsIFwib250b1wiLCBcIm9wZW5cIiwgXCJvcGVyYXRpb25cIiwgXCJvcGluaW9uXCIsIFwib3Bwb3J0dW5pdHlcIiwgXCJvcHBvc2l0ZVwiLCBcIm9yXCIsIFwib3JhbmdlXCIsIFwib3JiaXRcIiwgXCJvcmRlclwiLCBcIm9yZGluYXJ5XCIsIFwib3JnYW5pemF0aW9uXCIsIFwib3JnYW5pemVkXCIsIFwib3JpZ2luXCIsIFwib3JpZ2luYWxcIiwgXCJvdGhlclwiLCBcIm91Z2h0XCIsIFwib3VyXCIsIFwib3Vyc2VsdmVzXCIsIFwib3V0XCIsIFwib3V0ZXJcIiwgXCJvdXRsaW5lXCIsIFwib3V0c2lkZVwiLCBcIm92ZXJcIiwgXCJvd25cIiwgXCJvd25lclwiLCBcIm94eWdlblwiLCBcInBhY2tcIiwgXCJwYWNrYWdlXCIsIFwicGFnZVwiLCBcInBhaWRcIiwgXCJwYWluXCIsIFwicGFpbnRcIiwgXCJwYWlyXCIsIFwicGFsYWNlXCIsIFwicGFsZVwiLCBcInBhblwiLCBcInBhcGVyXCIsIFwicGFyYWdyYXBoXCIsIFwicGFyYWxsZWxcIiwgXCJwYXJlbnRcIiwgXCJwYXJrXCIsIFwicGFydFwiLCBcInBhcnRpY2xlc1wiLCBcInBhcnRpY3VsYXJcIiwgXCJwYXJ0aWN1bGFybHlcIiwgXCJwYXJ0bHlcIiwgXCJwYXJ0c1wiLCBcInBhcnR5XCIsIFwicGFzc1wiLCBcInBhc3NhZ2VcIiwgXCJwYXN0XCIsIFwicGF0aFwiLCBcInBhdHRlcm5cIiwgXCJwYXlcIiwgXCJwZWFjZVwiLCBcInBlblwiLCBcInBlbmNpbFwiLCBcInBlb3BsZVwiLCBcInBlclwiLCBcInBlcmNlbnRcIiwgXCJwZXJmZWN0XCIsIFwicGVyZmVjdGx5XCIsIFwicGVyaGFwc1wiLCBcInBlcmlvZFwiLCBcInBlcnNvblwiLCBcInBlcnNvbmFsXCIsIFwicGV0XCIsIFwicGhyYXNlXCIsIFwicGh5c2ljYWxcIiwgXCJwaWFub1wiLCBcInBpY2tcIiwgXCJwaWN0dXJlXCIsIFwicGljdHVyZWRcIiwgXCJwaWVcIiwgXCJwaWVjZVwiLCBcInBpZ1wiLCBcInBpbGVcIiwgXCJwaWxvdFwiLCBcInBpbmVcIiwgXCJwaW5rXCIsIFwicGlwZVwiLCBcInBpdGNoXCIsIFwicGxhY2VcIiwgXCJwbGFpblwiLCBcInBsYW5cIiwgXCJwbGFuZVwiLCBcInBsYW5ldFwiLCBcInBsYW5uZWRcIiwgXCJwbGFubmluZ1wiLCBcInBsYW50XCIsIFwicGxhc3RpY1wiLCBcInBsYXRlXCIsIFwicGxhdGVzXCIsIFwicGxheVwiLCBcInBsZWFzYW50XCIsIFwicGxlYXNlXCIsIFwicGxlYXN1cmVcIiwgXCJwbGVudHlcIiwgXCJwbHVyYWxcIiwgXCJwbHVzXCIsIFwicG9ja2V0XCIsIFwicG9lbVwiLCBcInBvZXRcIiwgXCJwb2V0cnlcIiwgXCJwb2ludFwiLCBcInBvbGVcIiwgXCJwb2xpY2VcIiwgXCJwb2xpY2VtYW5cIiwgXCJwb2xpdGljYWxcIiwgXCJwb25kXCIsIFwicG9ueVwiLCBcInBvb2xcIiwgXCJwb29yXCIsIFwicG9wdWxhclwiLCBcInBvcHVsYXRpb25cIiwgXCJwb3JjaFwiLCBcInBvcnRcIiwgXCJwb3NpdGlvblwiLCBcInBvc2l0aXZlXCIsIFwicG9zc2libGVcIiwgXCJwb3NzaWJseVwiLCBcInBvc3RcIiwgXCJwb3RcIiwgXCJwb3RhdG9lc1wiLCBcInBvdW5kXCIsIFwicG91clwiLCBcInBvd2RlclwiLCBcInBvd2VyXCIsIFwicG93ZXJmdWxcIiwgXCJwcmFjdGljYWxcIiwgXCJwcmFjdGljZVwiLCBcInByZXBhcmVcIiwgXCJwcmVzZW50XCIsIFwicHJlc2lkZW50XCIsIFwicHJlc3NcIiwgXCJwcmVzc3VyZVwiLCBcInByZXR0eVwiLCBcInByZXZlbnRcIiwgXCJwcmV2aW91c1wiLCBcInByaWNlXCIsIFwicHJpZGVcIiwgXCJwcmltaXRpdmVcIiwgXCJwcmluY2lwYWxcIiwgXCJwcmluY2lwbGVcIiwgXCJwcmludGVkXCIsIFwicHJpdmF0ZVwiLCBcInByaXplXCIsIFwicHJvYmFibHlcIiwgXCJwcm9ibGVtXCIsIFwicHJvY2Vzc1wiLCBcInByb2R1Y2VcIiwgXCJwcm9kdWN0XCIsIFwicHJvZHVjdGlvblwiLCBcInByb2dyYW1cIiwgXCJwcm9ncmVzc1wiLCBcInByb21pc2VkXCIsIFwicHJvcGVyXCIsIFwicHJvcGVybHlcIiwgXCJwcm9wZXJ0eVwiLCBcInByb3RlY3Rpb25cIiwgXCJwcm91ZFwiLCBcInByb3ZlXCIsIFwicHJvdmlkZVwiLCBcInB1YmxpY1wiLCBcInB1bGxcIiwgXCJwdXBpbFwiLCBcInB1cmVcIiwgXCJwdXJwbGVcIiwgXCJwdXJwb3NlXCIsIFwicHVzaFwiLCBcInB1dFwiLCBcInB1dHRpbmdcIiwgXCJxdWFydGVyXCIsIFwicXVlZW5cIiwgXCJxdWVzdGlvblwiLCBcInF1aWNrXCIsIFwicXVpY2tseVwiLCBcInF1aWV0XCIsIFwicXVpZXRseVwiLCBcInF1aXRlXCIsIFwicmFiYml0XCIsIFwicmFjZVwiLCBcInJhZGlvXCIsIFwicmFpbHJvYWRcIiwgXCJyYWluXCIsIFwicmFpc2VcIiwgXCJyYW5cIiwgXCJyYW5jaFwiLCBcInJhbmdlXCIsIFwicmFwaWRseVwiLCBcInJhdGVcIiwgXCJyYXRoZXJcIiwgXCJyYXdcIiwgXCJyYXlzXCIsIFwicmVhY2hcIiwgXCJyZWFkXCIsIFwicmVhZGVyXCIsIFwicmVhZHlcIiwgXCJyZWFsXCIsIFwicmVhbGl6ZVwiLCBcInJlYXJcIiwgXCJyZWFzb25cIiwgXCJyZWNhbGxcIiwgXCJyZWNlaXZlXCIsIFwicmVjZW50XCIsIFwicmVjZW50bHlcIiwgXCJyZWNvZ25pemVcIiwgXCJyZWNvcmRcIiwgXCJyZWRcIiwgXCJyZWZlclwiLCBcInJlZnVzZWRcIiwgXCJyZWdpb25cIiwgXCJyZWd1bGFyXCIsIFwicmVsYXRlZFwiLCBcInJlbGF0aW9uc2hpcFwiLCBcInJlbGlnaW91c1wiLCBcInJlbWFpblwiLCBcInJlbWFya2FibGVcIiwgXCJyZW1lbWJlclwiLCBcInJlbW92ZVwiLCBcInJlcGVhdFwiLCBcInJlcGxhY2VcIiwgXCJyZXBsaWVkXCIsIFwicmVwb3J0XCIsIFwicmVwcmVzZW50XCIsIFwicmVxdWlyZVwiLCBcInJlc2VhcmNoXCIsIFwicmVzcGVjdFwiLCBcInJlc3RcIiwgXCJyZXN1bHRcIiwgXCJyZXR1cm5cIiwgXCJyZXZpZXdcIiwgXCJyaHltZVwiLCBcInJoeXRobVwiLCBcInJpY2VcIiwgXCJyaWNoXCIsIFwicmlkZVwiLCBcInJpZGluZ1wiLCBcInJpZ2h0XCIsIFwicmluZ1wiLCBcInJpc2VcIiwgXCJyaXNpbmdcIiwgXCJyaXZlclwiLCBcInJvYWRcIiwgXCJyb2FyXCIsIFwicm9ja1wiLCBcInJvY2tldFwiLCBcInJvY2t5XCIsIFwicm9kXCIsIFwicm9sbFwiLCBcInJvb2ZcIiwgXCJyb29tXCIsIFwicm9vdFwiLCBcInJvcGVcIiwgXCJyb3NlXCIsIFwicm91Z2hcIiwgXCJyb3VuZFwiLCBcInJvdXRlXCIsIFwicm93XCIsIFwicnViYmVkXCIsIFwicnViYmVyXCIsIFwicnVsZVwiLCBcInJ1bGVyXCIsIFwicnVuXCIsIFwicnVubmluZ1wiLCBcInJ1c2hcIiwgXCJzYWRcIiwgXCJzYWRkbGVcIiwgXCJzYWZlXCIsIFwic2FmZXR5XCIsIFwic2FpZFwiLCBcInNhaWxcIiwgXCJzYWxlXCIsIFwic2FsbW9uXCIsIFwic2FsdFwiLCBcInNhbWVcIiwgXCJzYW5kXCIsIFwic2FuZ1wiLCBcInNhdFwiLCBcInNhdGVsbGl0ZXNcIiwgXCJzYXRpc2ZpZWRcIiwgXCJzYXZlXCIsIFwic2F2ZWRcIiwgXCJzYXdcIiwgXCJzYXlcIiwgXCJzY2FsZVwiLCBcInNjYXJlZFwiLCBcInNjZW5lXCIsIFwic2Nob29sXCIsIFwic2NpZW5jZVwiLCBcInNjaWVudGlmaWNcIiwgXCJzY2llbnRpc3RcIiwgXCJzY29yZVwiLCBcInNjcmVlblwiLCBcInNlYVwiLCBcInNlYXJjaFwiLCBcInNlYXNvblwiLCBcInNlYXRcIiwgXCJzZWNvbmRcIiwgXCJzZWNyZXRcIiwgXCJzZWN0aW9uXCIsIFwic2VlXCIsIFwic2VlZFwiLCBcInNlZWluZ1wiLCBcInNlZW1zXCIsIFwic2VlblwiLCBcInNlbGRvbVwiLCBcInNlbGVjdFwiLCBcInNlbGVjdGlvblwiLCBcInNlbGxcIiwgXCJzZW5kXCIsIFwic2Vuc2VcIiwgXCJzZW50XCIsIFwic2VudGVuY2VcIiwgXCJzZXBhcmF0ZVwiLCBcInNlcmllc1wiLCBcInNlcmlvdXNcIiwgXCJzZXJ2ZVwiLCBcInNlcnZpY2VcIiwgXCJzZXRzXCIsIFwic2V0dGluZ1wiLCBcInNldHRsZVwiLCBcInNldHRsZXJzXCIsIFwic2V2ZW5cIiwgXCJzZXZlcmFsXCIsIFwic2hhZGVcIiwgXCJzaGFkb3dcIiwgXCJzaGFrZVwiLCBcInNoYWtpbmdcIiwgXCJzaGFsbFwiLCBcInNoYWxsb3dcIiwgXCJzaGFwZVwiLCBcInNoYXJlXCIsIFwic2hhcnBcIiwgXCJzaGVcIiwgXCJzaGVlcFwiLCBcInNoZWV0XCIsIFwic2hlbGZcIiwgXCJzaGVsbHNcIiwgXCJzaGVsdGVyXCIsIFwic2hpbmVcIiwgXCJzaGlubmluZ1wiLCBcInNoaXBcIiwgXCJzaGlydFwiLCBcInNob2VcIiwgXCJzaG9vdFwiLCBcInNob3BcIiwgXCJzaG9yZVwiLCBcInNob3J0XCIsIFwic2hvcnRlclwiLCBcInNob3RcIiwgXCJzaG91bGRcIiwgXCJzaG91bGRlclwiLCBcInNob3V0XCIsIFwic2hvd1wiLCBcInNob3duXCIsIFwic2h1dFwiLCBcInNpY2tcIiwgXCJzaWRlc1wiLCBcInNpZ2h0XCIsIFwic2lnblwiLCBcInNpZ25hbFwiLCBcInNpbGVuY2VcIiwgXCJzaWxlbnRcIiwgXCJzaWxrXCIsIFwic2lsbHlcIiwgXCJzaWx2ZXJcIiwgXCJzaW1pbGFyXCIsIFwic2ltcGxlXCIsIFwic2ltcGxlc3RcIiwgXCJzaW1wbHlcIiwgXCJzaW5jZVwiLCBcInNpbmdcIiwgXCJzaW5nbGVcIiwgXCJzaW5rXCIsIFwic2lzdGVyXCIsIFwic2l0XCIsIFwic2l0dGluZ1wiLCBcInNpdHVhdGlvblwiLCBcInNpeFwiLCBcInNpemVcIiwgXCJza2lsbFwiLCBcInNraW5cIiwgXCJza3lcIiwgXCJzbGFic1wiLCBcInNsYXZlXCIsIFwic2xlZXBcIiwgXCJzbGVwdFwiLCBcInNsaWRlXCIsIFwic2xpZ2h0XCIsIFwic2xpZ2h0bHlcIiwgXCJzbGlwXCIsIFwic2xpcHBlZFwiLCBcInNsb3BlXCIsIFwic2xvd1wiLCBcInNsb3dseVwiLCBcInNtYWxsXCIsIFwic21hbGxlclwiLCBcInNtYWxsZXN0XCIsIFwic21lbGxcIiwgXCJzbWlsZVwiLCBcInNtb2tlXCIsIFwic21vb3RoXCIsIFwic25ha2VcIiwgXCJzbm93XCIsIFwic29cIiwgXCJzb2FwXCIsIFwic29jaWFsXCIsIFwic29jaWV0eVwiLCBcInNvZnRcIiwgXCJzb2Z0bHlcIiwgXCJzb2lsXCIsIFwic29sYXJcIiwgXCJzb2xkXCIsIFwic29sZGllclwiLCBcInNvbGlkXCIsIFwic29sdXRpb25cIiwgXCJzb2x2ZVwiLCBcInNvbWVcIiwgXCJzb21lYm9keVwiLCBcInNvbWVob3dcIiwgXCJzb21lb25lXCIsIFwic29tZXRoaW5nXCIsIFwic29tZXRpbWVcIiwgXCJzb21ld2hlcmVcIiwgXCJzb25cIiwgXCJzb25nXCIsIFwic29vblwiLCBcInNvcnRcIiwgXCJzb3VuZFwiLCBcInNvdXJjZVwiLCBcInNvdXRoXCIsIFwic291dGhlcm5cIiwgXCJzcGFjZVwiLCBcInNwZWFrXCIsIFwic3BlY2lhbFwiLCBcInNwZWNpZXNcIiwgXCJzcGVjaWZpY1wiLCBcInNwZWVjaFwiLCBcInNwZWVkXCIsIFwic3BlbGxcIiwgXCJzcGVuZFwiLCBcInNwZW50XCIsIFwic3BpZGVyXCIsIFwic3BpblwiLCBcInNwaXJpdFwiLCBcInNwaXRlXCIsIFwic3BsaXRcIiwgXCJzcG9rZW5cIiwgXCJzcG9ydFwiLCBcInNwcmVhZFwiLCBcInNwcmluZ1wiLCBcInNxdWFyZVwiLCBcInN0YWdlXCIsIFwic3RhaXJzXCIsIFwic3RhbmRcIiwgXCJzdGFuZGFyZFwiLCBcInN0YXJcIiwgXCJzdGFyZWRcIiwgXCJzdGFydFwiLCBcInN0YXRlXCIsIFwic3RhdGVtZW50XCIsIFwic3RhdGlvblwiLCBcInN0YXlcIiwgXCJzdGVhZHlcIiwgXCJzdGVhbVwiLCBcInN0ZWVsXCIsIFwic3RlZXBcIiwgXCJzdGVtc1wiLCBcInN0ZXBcIiwgXCJzdGVwcGVkXCIsIFwic3RpY2tcIiwgXCJzdGlmZlwiLCBcInN0aWxsXCIsIFwic3RvY2tcIiwgXCJzdG9tYWNoXCIsIFwic3RvbmVcIiwgXCJzdG9vZFwiLCBcInN0b3BcIiwgXCJzdG9wcGVkXCIsIFwic3RvcmVcIiwgXCJzdG9ybVwiLCBcInN0b3J5XCIsIFwic3RvdmVcIiwgXCJzdHJhaWdodFwiLCBcInN0cmFuZ2VcIiwgXCJzdHJhbmdlclwiLCBcInN0cmF3XCIsIFwic3RyZWFtXCIsIFwic3RyZWV0XCIsIFwic3RyZW5ndGhcIiwgXCJzdHJldGNoXCIsIFwic3RyaWtlXCIsIFwic3RyaW5nXCIsIFwic3RyaXBcIiwgXCJzdHJvbmdcIiwgXCJzdHJvbmdlclwiLCBcInN0cnVja1wiLCBcInN0cnVjdHVyZVwiLCBcInN0cnVnZ2xlXCIsIFwic3R1Y2tcIiwgXCJzdHVkZW50XCIsIFwic3R1ZGllZFwiLCBcInN0dWR5aW5nXCIsIFwic3ViamVjdFwiLCBcInN1YnN0YW5jZVwiLCBcInN1Y2Nlc3NcIiwgXCJzdWNjZXNzZnVsXCIsIFwic3VjaFwiLCBcInN1ZGRlblwiLCBcInN1ZGRlbmx5XCIsIFwic3VnYXJcIiwgXCJzdWdnZXN0XCIsIFwic3VpdFwiLCBcInN1bVwiLCBcInN1bW1lclwiLCBcInN1blwiLCBcInN1bmxpZ2h0XCIsIFwic3VwcGVyXCIsIFwic3VwcGx5XCIsIFwic3VwcG9ydFwiLCBcInN1cHBvc2VcIiwgXCJzdXJlXCIsIFwic3VyZmFjZVwiLCBcInN1cnByaXNlXCIsIFwic3Vycm91bmRlZFwiLCBcInN3YW1cIiwgXCJzd2VldFwiLCBcInN3ZXB0XCIsIFwic3dpbVwiLCBcInN3aW1taW5nXCIsIFwic3dpbmdcIiwgXCJzd3VuZ1wiLCBcInN5bGxhYmxlXCIsIFwic3ltYm9sXCIsIFwic3lzdGVtXCIsIFwidGFibGVcIiwgXCJ0YWlsXCIsIFwidGFrZVwiLCBcInRha2VuXCIsIFwidGFsZXNcIiwgXCJ0YWxrXCIsIFwidGFsbFwiLCBcInRhbmtcIiwgXCJ0YXBlXCIsIFwidGFza1wiLCBcInRhc3RlXCIsIFwidGF1Z2h0XCIsIFwidGF4XCIsIFwidGVhXCIsIFwidGVhY2hcIiwgXCJ0ZWFjaGVyXCIsIFwidGVhbVwiLCBcInRlYXJzXCIsIFwidGVldGhcIiwgXCJ0ZWxlcGhvbmVcIiwgXCJ0ZWxldmlzaW9uXCIsIFwidGVsbFwiLCBcInRlbXBlcmF0dXJlXCIsIFwidGVuXCIsIFwidGVudFwiLCBcInRlcm1cIiwgXCJ0ZXJyaWJsZVwiLCBcInRlc3RcIiwgXCJ0aGFuXCIsIFwidGhhbmtcIiwgXCJ0aGF0XCIsIFwidGhlZVwiLCBcInRoZW1cIiwgXCJ0aGVtc2VsdmVzXCIsIFwidGhlblwiLCBcInRoZW9yeVwiLCBcInRoZXJlXCIsIFwidGhlcmVmb3JlXCIsIFwidGhlc2VcIiwgXCJ0aGV5XCIsIFwidGhpY2tcIiwgXCJ0aGluXCIsIFwidGhpbmdcIiwgXCJ0aGlua1wiLCBcInRoaXJkXCIsIFwidGhpcnR5XCIsIFwidGhpc1wiLCBcInRob3NlXCIsIFwidGhvdVwiLCBcInRob3VnaFwiLCBcInRob3VnaHRcIiwgXCJ0aG91c2FuZFwiLCBcInRocmVhZFwiLCBcInRocmVlXCIsIFwidGhyZXdcIiwgXCJ0aHJvYXRcIiwgXCJ0aHJvdWdoXCIsIFwidGhyb3VnaG91dFwiLCBcInRocm93XCIsIFwidGhyb3duXCIsIFwidGh1bWJcIiwgXCJ0aHVzXCIsIFwidGh5XCIsIFwidGlkZVwiLCBcInRpZVwiLCBcInRpZ2h0XCIsIFwidGlnaHRseVwiLCBcInRpbGxcIiwgXCJ0aW1lXCIsIFwidGluXCIsIFwidGlueVwiLCBcInRpcFwiLCBcInRpcmVkXCIsIFwidGl0bGVcIiwgXCJ0b1wiLCBcInRvYmFjY29cIiwgXCJ0b2RheVwiLCBcInRvZ2V0aGVyXCIsIFwidG9sZFwiLCBcInRvbW9ycm93XCIsIFwidG9uZVwiLCBcInRvbmd1ZVwiLCBcInRvbmlnaHRcIiwgXCJ0b29cIiwgXCJ0b29rXCIsIFwidG9vbFwiLCBcInRvcFwiLCBcInRvcGljXCIsIFwidG9yblwiLCBcInRvdGFsXCIsIFwidG91Y2hcIiwgXCJ0b3dhcmRcIiwgXCJ0b3dlclwiLCBcInRvd25cIiwgXCJ0b3lcIiwgXCJ0cmFjZVwiLCBcInRyYWNrXCIsIFwidHJhZGVcIiwgXCJ0cmFmZmljXCIsIFwidHJhaWxcIiwgXCJ0cmFpblwiLCBcInRyYW5zcG9ydGF0aW9uXCIsIFwidHJhcFwiLCBcInRyYXZlbFwiLCBcInRyZWF0ZWRcIiwgXCJ0cmVlXCIsIFwidHJpYW5nbGVcIiwgXCJ0cmliZVwiLCBcInRyaWNrXCIsIFwidHJpZWRcIiwgXCJ0cmlwXCIsIFwidHJvb3BzXCIsIFwidHJvcGljYWxcIiwgXCJ0cm91YmxlXCIsIFwidHJ1Y2tcIiwgXCJ0cnVua1wiLCBcInRydXRoXCIsIFwidHJ5XCIsIFwidHViZVwiLCBcInR1bmVcIiwgXCJ0dXJuXCIsIFwidHdlbHZlXCIsIFwidHdlbnR5XCIsIFwidHdpY2VcIiwgXCJ0d29cIiwgXCJ0eXBlXCIsIFwidHlwaWNhbFwiLCBcInVuY2xlXCIsIFwidW5kZXJcIiwgXCJ1bmRlcmxpbmVcIiwgXCJ1bmRlcnN0YW5kaW5nXCIsIFwidW5oYXBweVwiLCBcInVuaW9uXCIsIFwidW5pdFwiLCBcInVuaXZlcnNlXCIsIFwidW5rbm93blwiLCBcInVubGVzc1wiLCBcInVudGlsXCIsIFwidW51c3VhbFwiLCBcInVwXCIsIFwidXBvblwiLCBcInVwcGVyXCIsIFwidXB3YXJkXCIsIFwidXNcIiwgXCJ1c2VcIiwgXCJ1c2VmdWxcIiwgXCJ1c2luZ1wiLCBcInVzdWFsXCIsIFwidXN1YWxseVwiLCBcInZhbGxleVwiLCBcInZhbHVhYmxlXCIsIFwidmFsdWVcIiwgXCJ2YXBvclwiLCBcInZhcmlldHlcIiwgXCJ2YXJpb3VzXCIsIFwidmFzdFwiLCBcInZlZ2V0YWJsZVwiLCBcInZlcmJcIiwgXCJ2ZXJ0aWNhbFwiLCBcInZlcnlcIiwgXCJ2ZXNzZWxzXCIsIFwidmljdG9yeVwiLCBcInZpZXdcIiwgXCJ2aWxsYWdlXCIsIFwidmlzaXRcIiwgXCJ2aXNpdG9yXCIsIFwidm9pY2VcIiwgXCJ2b2x1bWVcIiwgXCJ2b3RlXCIsIFwidm93ZWxcIiwgXCJ2b3lhZ2VcIiwgXCJ3YWdvblwiLCBcIndhaXRcIiwgXCJ3YWxrXCIsIFwid2FsbFwiLCBcIndhbnRcIiwgXCJ3YXJcIiwgXCJ3YXJtXCIsIFwid2FyblwiLCBcIndhc1wiLCBcIndhc2hcIiwgXCJ3YXN0ZVwiLCBcIndhdGNoXCIsIFwid2F0ZXJcIiwgXCJ3YXZlXCIsIFwid2F5XCIsIFwid2VcIiwgXCJ3ZWFrXCIsIFwid2VhbHRoXCIsIFwid2VhclwiLCBcIndlYXRoZXJcIiwgXCJ3ZWVrXCIsIFwid2VpZ2hcIiwgXCJ3ZWlnaHRcIiwgXCJ3ZWxjb21lXCIsIFwid2VsbFwiLCBcIndlbnRcIiwgXCJ3ZXJlXCIsIFwid2VzdFwiLCBcIndlc3Rlcm5cIiwgXCJ3ZXRcIiwgXCJ3aGFsZVwiLCBcIndoYXRcIiwgXCJ3aGF0ZXZlclwiLCBcIndoZWF0XCIsIFwid2hlZWxcIiwgXCJ3aGVuXCIsIFwid2hlbmV2ZXJcIiwgXCJ3aGVyZVwiLCBcIndoZXJldmVyXCIsIFwid2hldGhlclwiLCBcIndoaWNoXCIsIFwid2hpbGVcIiwgXCJ3aGlzcGVyZWRcIiwgXCJ3aGlzdGxlXCIsIFwid2hpdGVcIiwgXCJ3aG9cIiwgXCJ3aG9sZVwiLCBcIndob21cIiwgXCJ3aG9zZVwiLCBcIndoeVwiLCBcIndpZGVcIiwgXCJ3aWRlbHlcIiwgXCJ3aWZlXCIsIFwid2lsZFwiLCBcIndpbGxcIiwgXCJ3aWxsaW5nXCIsIFwid2luXCIsIFwid2luZFwiLCBcIndpbmRvd1wiLCBcIndpbmdcIiwgXCJ3aW50ZXJcIiwgXCJ3aXJlXCIsIFwid2lzZVwiLCBcIndpc2hcIiwgXCJ3aXRoXCIsIFwid2l0aGluXCIsIFwid2l0aG91dFwiLCBcIndvbGZcIiwgXCJ3b21lblwiLCBcIndvblwiLCBcIndvbmRlclwiLCBcIndvbmRlcmZ1bFwiLCBcIndvb2RcIiwgXCJ3b29kZW5cIiwgXCJ3b29sXCIsIFwid29yZFwiLCBcIndvcmVcIiwgXCJ3b3JrXCIsIFwid29ya2VyXCIsIFwid29ybGRcIiwgXCJ3b3JyaWVkXCIsIFwid29ycnlcIiwgXCJ3b3JzZVwiLCBcIndvcnRoXCIsIFwid291bGRcIiwgXCJ3cmFwcGVkXCIsIFwid3JpdGVcIiwgXCJ3cml0ZXJcIiwgXCJ3cml0aW5nXCIsIFwid3JpdHRlblwiLCBcIndyb25nXCIsIFwid3JvdGVcIiwgXCJ5YXJkXCIsIFwieWVhclwiLCBcInllbGxvd1wiLCBcInllc1wiLCBcInllc3RlcmRheVwiLCBcInlldFwiLCBcInlvdVwiLCBcInlvdW5nXCIsIFwieW91bmdlclwiLCBcInlvdXJcIiwgXCJ5b3Vyc2VsZlwiLCBcInlvdXRoXCIsIFwiemVyb1wiLCBcInplYnJhXCIsIFwiemlwcGVyXCIsIFwiem9vXCIsIFwienVsdVwiXTtcblxuZnVuY3Rpb24gd29yZHMob3B0aW9ucykge1xuICBmdW5jdGlvbiB3b3JkKCkge1xuICAgIGlmIChvcHRpb25zICYmIG9wdGlvbnMubWF4TGVuZ3RoID4gMSkge1xuICAgICAgcmV0dXJuIGdlbmVyYXRlV29yZFdpdGhNYXhMZW5ndGgoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIGdlbmVyYXRlUmFuZG9tV29yZCgpO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGdlbmVyYXRlV29yZFdpdGhNYXhMZW5ndGgoKSB7XG4gICAgdmFyIHJpZ2h0U2l6ZSA9IGZhbHNlO1xuICAgIHZhciB3b3JkVXNlZDtcblxuICAgIHdoaWxlICghcmlnaHRTaXplKSB7XG4gICAgICB3b3JkVXNlZCA9IGdlbmVyYXRlUmFuZG9tV29yZCgpO1xuXG4gICAgICBpZiAod29yZFVzZWQubGVuZ3RoIDw9IG9wdGlvbnMubWF4TGVuZ3RoKSB7XG4gICAgICAgIHJpZ2h0U2l6ZSA9IHRydWU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHdvcmRVc2VkO1xuICB9XG5cbiAgZnVuY3Rpb24gZ2VuZXJhdGVSYW5kb21Xb3JkKCkge1xuICAgIHJldHVybiB3b3JkTGlzdFtyYW5kSW50KHdvcmRMaXN0Lmxlbmd0aCldO1xuICB9XG5cbiAgZnVuY3Rpb24gcmFuZEludChsZXNzVGhhbikge1xuICAgIHJldHVybiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBsZXNzVGhhbik7XG4gIH0gLy8gTm8gYXJndW1lbnRzID0gZ2VuZXJhdGUgb25lIHdvcmRcblxuXG4gIGlmICh0eXBlb2Ygb3B0aW9ucyA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICByZXR1cm4gd29yZCgpO1xuICB9IC8vIEp1c3QgYSBudW1iZXIgPSByZXR1cm4gdGhhdCBtYW55IHdvcmRzXG5cblxuICBpZiAodHlwZW9mIG9wdGlvbnMgPT09ICdudW1iZXInKSB7XG4gICAgb3B0aW9ucyA9IHtcbiAgICAgIGV4YWN0bHk6IG9wdGlvbnNcbiAgICB9O1xuICB9IC8vIG9wdGlvbnMgc3VwcG9ydGVkOiBleGFjdGx5LCBtaW4sIG1heCwgam9pblxuXG5cbiAgaWYgKG9wdGlvbnMuZXhhY3RseSkge1xuICAgIG9wdGlvbnMubWluID0gb3B0aW9ucy5leGFjdGx5O1xuICAgIG9wdGlvbnMubWF4ID0gb3B0aW9ucy5leGFjdGx5O1xuICB9IC8vIG5vdCBhIG51bWJlciA9IG9uZSB3b3JkIHBhciBzdHJpbmdcblxuXG4gIGlmICh0eXBlb2Ygb3B0aW9ucy53b3Jkc1BlclN0cmluZyAhPT0gJ251bWJlcicpIHtcbiAgICBvcHRpb25zLndvcmRzUGVyU3RyaW5nID0gMTtcbiAgfSAvL25vdCBhIGZ1bmN0aW9uID0gcmV0dXJucyB0aGUgcmF3IHdvcmRcblxuXG4gIGlmICh0eXBlb2Ygb3B0aW9ucy5mb3JtYXR0ZXIgIT09ICdmdW5jdGlvbicpIHtcbiAgICBvcHRpb25zLmZvcm1hdHRlciA9IHdvcmQgPT4gd29yZDtcbiAgfSAvL25vdCBhIHN0cmluZyA9IHNlcGFyYXRvciBpcyBhIHNwYWNlXG5cblxuICBpZiAodHlwZW9mIG9wdGlvbnMuc2VwYXJhdG9yICE9PSAnc3RyaW5nJykge1xuICAgIG9wdGlvbnMuc2VwYXJhdG9yID0gJyAnO1xuICB9XG5cbiAgdmFyIHRvdGFsID0gb3B0aW9ucy5taW4gKyByYW5kSW50KG9wdGlvbnMubWF4ICsgMSAtIG9wdGlvbnMubWluKTtcbiAgdmFyIHJlc3VsdHMgPSBbXTtcbiAgdmFyIHRva2VuID0gJyc7XG4gIHZhciByZWxhdGl2ZUluZGV4ID0gMDtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHRvdGFsICogb3B0aW9ucy53b3Jkc1BlclN0cmluZzsgaSsrKSB7XG4gICAgaWYgKHJlbGF0aXZlSW5kZXggPT09IG9wdGlvbnMud29yZHNQZXJTdHJpbmcgLSAxKSB7XG4gICAgICB0b2tlbiArPSBvcHRpb25zLmZvcm1hdHRlcih3b3JkKCksIHJlbGF0aXZlSW5kZXgpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0b2tlbiArPSBvcHRpb25zLmZvcm1hdHRlcih3b3JkKCksIHJlbGF0aXZlSW5kZXgpICsgb3B0aW9ucy5zZXBhcmF0b3I7XG4gICAgfVxuXG4gICAgcmVsYXRpdmVJbmRleCsrO1xuXG4gICAgaWYgKChpICsgMSkgJSBvcHRpb25zLndvcmRzUGVyU3RyaW5nID09PSAwKSB7XG4gICAgICByZXN1bHRzLnB1c2godG9rZW4pO1xuICAgICAgdG9rZW4gPSAnJztcbiAgICAgIHJlbGF0aXZlSW5kZXggPSAwO1xuICAgIH1cbiAgfVxuXG4gIGlmICh0eXBlb2Ygb3B0aW9ucy5qb2luID09PSAnc3RyaW5nJykge1xuICAgIHJlc3VsdHMgPSByZXN1bHRzLmpvaW4ob3B0aW9ucy5qb2luKTtcbiAgfVxuXG4gIHJldHVybiByZXN1bHRzO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHdvcmRzOyAvLyBFeHBvcnQgdGhlIHdvcmQgbGlzdCBhcyBpdCBpcyBvZnRlbiB1c2VmdWxcblxud29yZHMud29yZExpc3QgPSB3b3JkTGlzdDsiLCJpbXBvcnQgXCIuL3N0eWxlcy9pbmRleC5zY3NzXCI7XG5pbXBvcnQgR2FtZSBmcm9tICcuL3NjcmlwdHMvZ2FtZSc7XG5cblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsICgpID0+IHtcbiAgICBjb25zdCBjYW52YXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNoaXAtZ2FtZVwiKTtcbiAgICBjb25zdCBjdHggPSBjYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcbiAgICBjb25zdCBiZ0NhbnZhcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYmctY2FudmFzXCIpO1xuICAgIGNvbnN0IGJnQ3R4ID0gYmdDYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcbiAgICBjb25zdCBwQ2FudmFzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwbGF5ZXItc2NyZWVuXCIpO1xuICAgIGNvbnN0IHBDdHggPSBwQ2FudmFzLmdldENvbnRleHQoJzJkJyk7XG5cbiAgICBjb25zdCBpbnB1dFNlY3Rpb24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImlucHV0LXNlY3Rpb25cIik7XG4gICAgXG4gICAgY29uc3QgcGxheWVyV29yZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwbGF5ZXItd29yZCcpO1xuICAgIHBsYXllcldvcmQuYXV0b2ZvY3VzID0gdHJ1ZTtcblxuICAgIGlucHV0U2VjdGlvbi5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCBoYW5kbGVTdWJtaXQpO1xuICAgIGNvbnN0IG5ld0dhbWUgPSBuZXcgR2FtZShjYW52YXMsIGN0eCwgYmdDdHgsIHBDdHgpO1xuICAgIFxuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlwcmVzc1wiLCByZW1vdmVTcGxhc2gpO1xuXG4gICAgZnVuY3Rpb24gcmVtb3ZlU3BsYXNoKGUpIHtcbiAgICAgICAgaWYgKGUua2V5ID09PSAnRW50ZXInKSB7XG4gICAgICAgICAgICBjb25zdCBzcGxhc2ggPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNwbGFzaFwiKTtcbiAgICAgICAgICAgIHNwbGFzaC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImtleXByZXNzXCIsIHJlbW92ZVNwbGFzaClcbiAgICAgICAgICAgIG5ld0dhbWUuc3RhcnQoKTtcbiAgICAgICAgICAgIHBsYXllcldvcmQuZm9jdXMoKTtcbiAgICAgICAgfVxuICAgIH1cblxuXG5cbiAgICBmdW5jdGlvbiBoYW5kbGVTdWJtaXQoZSkge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIG5ld0dhbWUuY2hlY2tXb3JkKHBsYXllcldvcmQudmFsdWUudHJpbSgpKTtcbiAgICAgICAgaW5wdXRTZWN0aW9uLnJlc2V0KCk7XG4gICAgfTtcblxuXG5cbn0pOyIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIEJhY2tncm91bmQge1xuICAgIGNvbnN0cnVjdG9yKGNhbnZhcywgY3R4LCBzcGVlZCkge1xuICAgICAgICB0aGlzLmNhbnZhcyA9IGNhbnZhcztcbiAgICAgICAgdGhpcy5jdHggPSBjdHg7XG4gICAgICAgIC8vIHRoaXMuc3BlZWQgPSBzcGVlZDtcbiAgICAgICAgdGhpcy5iSW1hZ2UgPSBuZXcgSW1hZ2UoKTtcbiAgICAgICAgdGhpcy5iSW1hZ2Uuc3JjID0gJy4vc3JjL2Fzc2V0cy9zcHJpdGVzaGVldC5wbmcnO1xuICAgICAgICB0aGlzLmhlaWdodCA9IHRoaXMuY2FudmFzLmhlaWdodDtcbiAgICAgICAgdGhpcy53aWR0aCA9IHRoaXMuY2FudmFzLndpZHRoO1xuICAgICAgICB0aGlzLmJURnJhbWVzID0gWzIsIDI2MCwgNTE4LCA3NzYsIDEwMzRdO1xuICAgICAgICB0aGlzLmJCRnJhbWVzID0gWzIsIDI2MCwgNTE4LCA3NzYsIDEwMzQsIDEyOTJdO1xuICAgICAgICB0aGlzLnRGcmFtZSA9IDA7XG4gICAgICAgIHRoaXMuYkZyYW1lID0gMDtcbiAgICAgICAgLy8gdGhpcy55ID0gMDtcbiAgICB9O1xuXG4gICAgYW5pbWF0ZSgpIHtcbiAgICAgICAgdGhpcy5jdHguY2xlYXJSZWN0KDAsIDAsIHRoaXMud2lkdGgsIHRoaXMuaGVpZ2h0KTtcbiAgICAgICAgdGhpcy5jdHguZHJhd0ltYWdlKHRoaXMuYkltYWdlLCB0aGlzLmJCRnJhbWVzW3RoaXMuYkZyYW1lXSwgMjI2LCAyNTYsIDIyMiwgMCwgMCwgdGhpcy5jYW52YXMud2lkdGgsIHRoaXMuY2FudmFzLmhlaWdodCk7XG4gICAgICAgIHRoaXMuY3R4LmRyYXdJbWFnZSh0aGlzLmJJbWFnZSwgdGhpcy5iVEZyYW1lc1t0aGlzLnRGcmFtZV0sIDIsIDI1NiwgMjIyLCAwLCAwLCB0aGlzLmNhbnZhcy53aWR0aCwgdGhpcy5jYW52YXMuaGVpZ2h0KTtcbiAgICAgICAgdGhpcy5iRnJhbWUgKz0gMTtcbiAgICAgICAgdGhpcy50RnJhbWUgKz0gMTtcbiAgICAgICAgaWYgKHRoaXMuYkZyYW1lID4gNSkgdGhpcy5iRnJhbWUgPSAwO1xuICAgICAgICBpZiAodGhpcy50RnJhbWUgPiA0KSB0aGlzLnRGcmFtZSA9IDA7XG4gICAgICAgIC8vIHRoaXMueSArPSB0aGlzLnNwZWVkO1xuICAgICAgICAvLyB0aGlzLmN0eC5kcmF3SW1hZ2UoXG4gICAgICAgIC8vICAgdGhpcy5iYWNrZ3JvdW5kSW1hZ2UsXG4gICAgICAgIC8vICAgMCxcbiAgICAgICAgLy8gICB0aGlzLnksXG4gICAgICAgIC8vICAgdGhpcy5jYW52YXMud2lkdGgsXG4gICAgICAgIC8vICAgdGhpcy5jYW52YXMuaGVpZ2h0XG4gICAgICAgIC8vICk7XG4gICAgICAgIC8vIHRoaXMuY3R4LmRyYXdJbWFnZShcbiAgICAgICAgLy8gICB0aGlzLmJhY2tncm91bmRJbWFnZSxcbiAgICAgICAgLy8gICAwLFxuICAgICAgICAvLyAgIHRoaXMueSAtIHRoaXMuY2FudmFzLmhlaWdodCxcbiAgICAgICAgLy8gICB0aGlzLmNhbnZhcy53aWR0aCxcbiAgICAgICAgLy8gICB0aGlzLmNhbnZhcy5oZWlnaHRcbiAgICAgICAgLy8gKTtcbiAgICAgICAgLy8gaWYgKHRoaXMueSA9PT0gdGhpcy5jYW52YXMuaGVpZ2h0KSB0aGlzLnkgPSAwO1xuXG4gICAgfTtcbn0iLCJ2YXIgcmFuZG9tV29yZHMgPSByZXF1aXJlKCdyYW5kb20td29yZHMnKTtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRW5lbXkge1xuICAgIGNvbnN0cnVjdG9yKGNhbnZhcywgY3R4LCBzcGVlZCkge1xuICAgICAgICB0aGlzLmNhbnZhcyA9IGNhbnZhcztcbiAgICAgICAgdGhpcy5jdHggPSBjdHg7XG4gICAgICAgIHRoaXMud29yZCA9IHJhbmRvbVdvcmRzKCk7XG4gICAgICAgIHRoaXMuc3BlZWQ9IHNwZWVkO1xuICAgICAgICB0aGlzLnJlbmRlcmVkID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5zaGlwSW1nID0gbmV3IEltYWdlKCk7XG4gICAgICAgIHRoaXMuc2hpcEltZy5zcmMgPSBcIi4vc3JjL2Fzc2V0cy90aWVfZmlnaHRlci5wbmdcIjtcbiAgICAgICAgdGhpcy5zaGlwUG9zID0gLTEwMDtcbiAgICAgICAgdGhpcy5keCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIHRoaXMuY2FudmFzLndpZHRoKTtcbiAgICB9O1xuXG4gICAgZHJhdygpIHtcbiAgICAgICAgdGhpcy5jdHguZHJhd0ltYWdlKHRoaXMuc2hpcEltZywgdGhpcy5keCwgdGhpcy5zaGlwUG9zLCAxMDAsIDEwMCk7XG4gICAgICAgIHRoaXMuY3R4LmZpbGxTdHlsZSA9IFwiI0ZGRkZGRlwiO1xuICAgICAgICB0aGlzLmN0eC5mb250ID0gJzIwcHggUmVkIFJvc2UnO1xuICAgICAgICBjb25zdCB3b3JkUG9zID0gKDEwMCAtICh0aGlzLndvcmQubGVuZ3RoICogMjApKSAvIDI7XG4gICAgICAgIHRoaXMuY3R4LmZpbGxUZXh0KHRoaXMud29yZCwgd29yZFBvcyArIHRoaXMuZHgsIHRoaXMuc2hpcFBvcyk7XG4gICAgfTtcblxuICAgIGFuaW1hdGUoKXtcbiAgICAgICAgaWYgKHRoaXMucmVuZGVyZWQpIHtcbiAgICAgICAgdGhpcy5zaGlwUG9zICs9IHRoaXMuc3BlZWQ7XG4gICAgICAgIGlmICgodGhpcy5zaGlwUG9zID09PSB0aGlzLmNhbnZhcy5oZWlnaHQpIHx8ICh0aGlzLnNoaXBQb3MgPT09IHRoaXMuY2FudmFzLmhlaWdodCArIDEpKSB0aGlzLnNoaXBQb3MgPSAtMTAwO1xuICAgICAgICB0aGlzLmRyYXcoKTtcbiAgICAgICAgfVxuICAgIH1cbn1cbiIsImltcG9ydCBFbmVteSBmcm9tICcuL2VuZW15JztcbmltcG9ydCBCYWNrZ3JvdW5kIGZyb20gJy4vYmFja2dyb3VuZCc7XG5pbXBvcnQgUGxheWVyIGZyb20gJy4vcGxheWVyJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR2FtZSB7XG4gICAgY29uc3RydWN0b3IoY2FudmFzLCBjdHgsIGJnQ3R4LCBwQ3R4KSB7XG4gICAgICAgIHRoaXMuY2FudmFzID0gY2FudmFzO1xuICAgICAgICB0aGlzLmN0eCA9IGN0eDtcbiAgICAgICAgdGhpcy5iZ0N0eCA9IGJnQ3R4O1xuICAgICAgICB0aGlzLnBDdHggPSBwQ3R4O1xuICAgICAgICB0aGlzLmJhY2tncm91bmQgPSBuZXcgQmFja2dyb3VuZChjYW52YXMsIGJnQ3R4LCAxLjApO1xuICAgICAgICB0aGlzLmZvY3VzZWQgPSB0cnVlO1xuICAgICAgICB0aGlzLnN0YXJ0R2FtZSA9IGZhbHNlO1xuICAgICAgICB0aGlzLnNoaXBzID0gW107XG4gICAgICAgIHRoaXMucGxheWVyID0gbmV3IFBsYXllcihjYW52YXMsIHBDdHgpO1xuICAgICAgICB0aGlzLndvcmRzID0gW107XG4gICAgICAgIHRoaXMuc3RhcnRQb3NpdGlvbnMgPSBbXTtcbiAgICAgICAgdGhpcy51c2VkU3RhcnRQb3MgPSBbXTtcbiAgICAgICAgdGhpcy5hbmltYXRlID0gdGhpcy5hbmltYXRlLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMuYW5pbWF0ZUJhY2tncm91bmQgPSB0aGlzLmFuaW1hdGVCYWNrZ3JvdW5kLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMuc3RhcnQgPSB0aGlzLnN0YXJ0LmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMuY3JlYXRlRW5lbXkgPSB0aGlzLmNyZWF0ZUVuZW15LmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMuZ2VuZXJhdGVFbmVtaWVzID0gdGhpcy5nZW5lcmF0ZUVuZW1pZXMuYmluZCh0aGlzKTtcbiAgICB9XG5cbiAgICBhbmltYXRlQmFja2dyb3VuZCgpIHtcbiAgICAgICAgdGhpcy5iZ0N0eC5jYW52YXMud2lkdGggPSB3aW5kb3cuaW5uZXJXaWR0aDtcbiAgICAgICAgdGhpcy5iZ0N0eC5jYW52YXMuaGVpZ2h0ID0gd2luZG93LmlubmVySGVpZ2h0O1xuICAgICAgICB0aGlzLnBDdHguY2FudmFzLndpZHRoID0gd2luZG93LmlubmVyV2lkdGg7XG4gICAgICAgIHRoaXMucEN0eC5jYW52YXMuaGVpZ2h0ID0gd2luZG93LmlubmVySGVpZ2h0O1xuICAgICAgICB0aGlzLmJhY2tncm91bmQuYW5pbWF0ZSgpO1xuICAgICAgICB0aGlzLnBsYXllci5hbmltYXRlKCk7XG5cbiAgICB9XG5cbiAgICBhbmltYXRlKCkge1xuICAgICAgICB0aGlzLmN0eC5jYW52YXMud2lkdGggPSB3aW5kb3cuaW5uZXJXaWR0aDtcbiAgICAgICAgdGhpcy5jdHguY2FudmFzLmhlaWdodCA9IHdpbmRvdy5pbm5lckhlaWdodDtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnNoaXBzLmxlbmd0aDsgaSsrKXtcbiAgICAgICAgICAgIGNvbnN0IHNoaXAgPSB0aGlzLnNoaXBzW2ldO1xuICAgICAgICAgICAgaWYgKHNoaXAucmVuZGVyZWQpe1xuICAgICAgICAgICAgICAgIHNoaXAuYW5pbWF0ZSgpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLnNoaXBzLnNwbGljZShpLCAxKTtcbiAgICAgICAgICAgICAgICB0aGlzLndvcmRzLnNwbGljZShpLCAxKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUodGhpcy5hbmltYXRlKTtcbiAgICAgICAgXG4gICAgfVxuXG4gICAgc3RhcnQoKSB7XG4gICAgICAgIGlmICghdGhpcy5zdGFydEdhbWUpIHtcbiAgICAgICAgICAgIHRoaXMuZ2VuZXJhdGVFbmVtaWVzKCk7XG5cbiAgICAgICAgdGhpcy5zdGFydEdhbWUgPSB0cnVlO1xuICAgICAgICBjb25zdCBwbGF5ZXJXb3JkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3BsYXllci13b3JkJyk7XG4gICAgICAgIHBsYXllcldvcmQuYXV0b2ZvY3VzID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgd2luZG93Lm9uYmx1ciA9ICgpID0+IHRoaXMuZm9jdXNlZCA9IGZhbHNlO1xuICAgICAgICB3aW5kb3cub25mb2N1cyA9ICgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuZm9jdXNlZCA9IHRydWU7XG4gICAgICAgICAgICB0aGlzLmdlbmVyYXRlRW5lbWllcygpO1xuXG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBwbGF5ZXJXb3JkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3BsYXllci13b3JkJyk7XG4gICAgICAgIHBsYXllcldvcmQuYXV0b2ZvY3VzID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5jYW52YXMuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKT0+IHBsYXllcldvcmQuZm9jdXMoKSk7XG5cbiAgICAgICAgc2V0SW50ZXJ2YWwodGhpcy5hbmltYXRlQmFja2dyb3VuZCwgMTI1KTtcbiAgICAgICAgdGhpcy5hbmltYXRlKCk7XG4gICAgfVxuXG4gICAgY3JlYXRlRW5lbXkoY2FudmFzLCBjdHgpIHtcbiAgICAgICAgbGV0IGVuZW15ID0gbmV3IEVuZW15KGNhbnZhcywgY3R4LCAyLjApO1xuICAgICAgICB0aGlzLnNoaXBzLnB1c2goZW5lbXkpO1xuICAgICAgICB0aGlzLndvcmRzLnB1c2goZW5lbXkud29yZCk7XG4gICAgfVxuXG4gICAgZ2VuZXJhdGVFbmVtaWVzKCkge1xuICAgICAgICBsZXQgZGVsYXkgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiA1MDAwKTtcbiAgICAgICAgaWYgKHRoaXMuZm9jdXNlZCkge1xuICAgICAgICAgICAgc2V0VGltZW91dCgoKT0+e1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmNyZWF0ZUVuZW15KHRoaXMuY2FudmFzLCB0aGlzLmN0eCk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZ2VuZXJhdGVFbmVtaWVzKCk7XG4gICAgICAgICAgICB9LCBkZWxheSAtIC4yKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNoZWNrV29yZCh3b3JkKSB7XG4gICAgICAgIGxldCBpID0gdGhpcy53b3Jkcy5pbmRleE9mKHdvcmQpO1xuICAgICAgICBpZiAoaSAhPSAtMSkge1xuICAgICAgICAgICAgdGhpcy5zaGlwc1tpXS5yZW5kZXJlZCA9IGZhbHNlXG4gICAgICAgIH1cbiAgICB9XG5cblxufSIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIFBsYXllciB7XG4gIGNvbnN0cnVjdG9yKGNhbnZhcywgY3R4KSB7XG4gICAgdGhpcy5jYW52YXMgPSBjYW52YXM7XG4gICAgdGhpcy5jdHggPSBjdHg7XG4gICAgdGhpcy5wSW1nID0gbmV3IEltYWdlKCk7XG4gICAgdGhpcy5wSW1nLnNyYyA9IFwiLi9zcmMvYXNzZXRzL3Nwcml0ZXNoZWV0LnBuZ1wiO1xuICAgIHRoaXMubmF2U2NyZWVuRnJhbWVzID0gWzI2MCwgMzE2XTtcbiAgICB0aGlzLm5TRiA9IDA7XG4gIH1cblxuXG4gIGFuaW1hdGUoKSB7XG4gICAgICAgIHRoaXMuY3R4LmRyYXdJbWFnZSh0aGlzLnBJbWcsIDMsIDQ1MCwgMjU0LCAxNjIsIDAsICgoNTkgLyAyMjIpICogdGhpcy5jYW52YXMuaGVpZ2h0KSwgdGhpcy5jYW52YXMud2lkdGgsICgoMTYzIC8gMjIyKSAqIHRoaXMuY2FudmFzLmhlaWdodCkpO1xuICAgICAgICB0aGlzLmN0eC5kcmF3SW1hZ2UodGhpcy5wSW1nLCB0aGlzLm5hdlNjcmVlbkZyYW1lc1t0aGlzLm5TRl0sIDU4MCwgNTQsIDMzLCAoKDEwMCAvIDI1NCkgKiB0aGlzLmNhbnZhcy53aWR0aCksICgoMTc3IC8gMjIyKSAqIHRoaXMuY2FudmFzLmhlaWdodCksICgoNTQgLyAyNTQpICogdGhpcy5jYW52YXMud2lkdGgpLCAoKDMzIC8gMjIyKSAqIHRoaXMuY2FudmFzLmhlaWdodCkpO1xuICAgICAgICB0aGlzLm5TRiArPSAxO1xuICAgICAgICBpZiAodGhpcy5uU0YgPiAxKSB0aGlzLm5TRiA9IDA7XG4gIH1cbn1cbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiJdLCJzb3VyY2VSb290IjoiIn0=