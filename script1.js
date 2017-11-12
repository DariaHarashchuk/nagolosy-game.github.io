   var ans;
   var Rnum = 1000;
   var Rnum_previous = 1000;
   var result_t = 0;
   var result_f = 0;
   var sarr_size = 0;

   var arr = [];
   var mas_kol_tf = [];
   arr[0] = {
       f: "соломИнка",
       s: "солОминка"

   }
   arr[1] = {
       f: "надлИшок",
       s: "нАдлишок"

   }
   arr[2] = {
       f: "жалюзІ",
       s: "жАлюзі"
   }
   arr[3] = {
       f: "перелЯк",
       s: "перЕляк"
   }
   arr[4] = {
       f: "фОрзац",
       s: "форзАц"
   }
   arr[5] = {
       f: "кАмбала",
       s: "камбАла"
   }
   arr[6] = {
       f: "перЕпис",
       s: "пЕрепис"
   }
   arr[7] = {
       f: "болотИстий",
       s: "болОтистий"
   }
   arr[8] = {
       f: "одноразОвий",
       s: "однорАзовий"
   }
   arr[9] = {
       f: "данИна",
       s: "данинА"
   }
   arr[10] = {
       f: "прИчіп",
       s: "причІп"
   }
   arr[11] = {
       f: "кОсий",
       s: "косИй"
   }
   arr[12] = {
       f: "перелЯк",
       s: "перЕляк"
   }
   arr[13] = {
       f: "ціннИк",
       s: "цІнник"
   }
   arr[14] = {
       f: "гуртОжиток",
       s: "гуртожИток"
   }
   arr[15] = {
       f: "руслО",
       s: "рУсло"
   }
   arr[16] = {
       f: "терезИ",
       s: "терЕзи"
   }
   arr[17] = {
       f: "черствИй",
       s: "чЕрствий"
   }

   arr[18] = {
       f: "аджЕ",
       s: "Адже"
   }
   arr[19] = {
       f: "флюорогрАфія",
       s: "флюорографІя"
   }
   arr[20] = {
       f: "болотИстий",
       s: "болОтистий"
   }
   arr[21] = {
       f: "пОдруга",
       s: "подрУга"
   }
   arr[22] = {
       f: "прИятель",
       s: "прИятель"
   }
   arr[23] = {
       f: "крОїти",
       s: "кроЇти"
   }
   arr[24] = {
       f: "обрУч",
       s: "Обруч"
   }
   arr[25] = {
       f: "кИшка",
       s: "кишкА"
   }
   arr[26] = {
       f: "корабЕль",
       s: "корАбель"
   }
   arr[27] = {
       f: "нІздря",
       s: "ніздрЯ"
   }
   arr[28] = {
       f: "горошИна",
       s: "горОшина"
   }
   arr[29] = {
       f: "видАння",
       s: "виданнЯ"
   }
   arr[30] = {
       f: "чарівнА",
       s: "чарІвна"
   }
   arr[31] = {
       f: "цИган",
       s: "цигАн"
   }
   arr[32] = {
       f: "рЕмінь",
       s: "ремІнь"
   }
   arr[33] = {
       f: "бОвтати",
       s: "бовтАти"
   }
   arr[34] = {
       f: "ненАвисть",
       s: "нЕнависть"
   }
   arr[35] = {
       f: "покрОва",
       s: "покровА"
   }
   arr[36] = {
       f: "отАман",
       s: "отамАн"
   }
   arr[37] = {
       f: "черговИй",
       s: "чЕрговий"
   }

   arr[38] = {
       f: "фенОмен",
       s: "феномЕн"
   }
   arr[39] = {
       f: "кухОнний",
       s: "кУхонний"
   }
   arr[40] = {
       f: "котрИй",
       s: "кОтрий"
   }
   arr[41] = {
       f: "лАте",
       s: "латЕ"
   }
   arr[42] = {
       f: "вИтрати",
       s: "витрАти"
   }
   arr[43] = {
       f: "кропивА",
       s: "кропИва"
   }
   arr[44] = {
       f: "дрОва",
       s: "дровА"
   }
   arr[45] = {
       f: "рАзом",
       s: "разОм"
   }
   arr[46] = {
       f: "фОльга",
       s: "фольгА"
   }
   arr[47] = {
       f: "серЕдина",
       s: "середИна"
   }
   arr[48] = {
       f: "асиметрІя",
       s: "асимЕтрія"
   }
   arr[49] = {
       f: "мерЕжа",
       s: "мережА"
   }
   arr[50] = {
       f: "нестИ",
       s: "нестИ"
   }
   arr[51] = {
       f: "вестИ",
       s: "вЕсти"
   }
   arr[52] = {
       f: "фаховИй",
       s: "фАховий"
   }
   arr[53] = {
       f: "кОлесо",
       s: "колесО"
   }
   arr[54] = {
       f: "новИй",
       s: "нОвий"
   }
   arr[55] = {
       f: "спИна",
       s: "спинА"
   }
   arr[56] = {
       f: "вИпадок",
       s: "випАдок"
   }
   arr[57] = {
       f: "Олень",
       s: "олЕнь"
   }

   arr[58] = {
       f: "мАркетинг",
       s: "маркЕтинг"
   }
   arr[59] = {
       f: "граблІ",
       s: "грАблі"
   }
   arr[60] = {
       f: "кИдати",
       s: "кидАти"
   }
   arr[61] = {
       f: "вестИ",
       s: "вЕсти"
   }
   arr[62] = {
       f: "кУрятина",
       s: "курЯтина"
   }
   arr[63] = {
       f: "лОкшина",
       s: "локшИна"
   }
   arr[64] = {
       f: "одинАдцять",
       s: "одИнадцять"
   }
   arr[65] = {
       f: "чорнОслив",
       s: "чорнослИв"
   }
   arr[66] = {
       f: "фартУх",
       s: "фАртух"
   }
   arr[67] = {
       f: "рИнковий",
       s: "ринкОвий"
   }

   arr[68] = {
       f: "сОлодощі",
       s: "солОдощі"
   }
   arr[69] = {
       f: "вантажІвка",
       s: "вантАжівка"
   }
   arr[70] = {
       f: "зрУчний",
       s: "зручнИй"
   }
   arr[71] = {
       f: "легкИй",
       s: "лЕгкий"
   }
   arr[72] = {
       f: "чорнОзем",
       s: "чорнозЕм"
   }
   arr[73] = {
       f: "листопАд",
       s: "листОпад"
   }
   arr[74] = {
       f: "тонкИй",
       s: "тОнкий"
   }
   arr[75] = {
       f: "товстИй",
       s: "тОвстий"
   }
   arr[66] = {
       f: "страшнИй",
       s: "стрАшний"
   }
   arr[67] = {
       f: "сантимЕтр",
       s: "сантИметр"
   }

   arr[68] = {
       f: "каталОг",
       s: "катАлог"
   }
   arr[69] = {
       f: "нАчинка",
       s: "начИнка"
   }
   arr[70] = {
       f: "ідемО",
       s: "ідЕмо"
   }
   arr[71] = {
       f: "навчАння",
       s: "навчаннЯ"
   }
   arr[72] = {
       f: "мозолИстий",
       s: "мозОлистий"
   }
   arr[73] = {
       f: "оптОвий",
       s: "Оптовий"
   }
   arr[74] = {
       f: "осокА",
       s: "осОка"
   }
   arr[75] = {
       f: "дочкА",
       s: "дОчка"
   }
   for (var i = 0; i < 76; i++) {
       mas_kol_tf[i] = 0;
   }
   mas_kol_tf[1000] = 0;

   function getRandomInt(min, max) {
       return Math.floor(Math.random() * (max - min + 1)) + min;
   }

   function result_line() {
       document.getElementById('result').style.display = "block";
       document.getElementById('resNum').style.display = "block";
       var pers = document.getElementById('result').clientWidth;
       var twidth = (pers / (result_t + result_f) * result_t) / pers * 100;
       document.getElementById('div_true').style.width = twidth + '%';
       document.getElementById('div_false').style.width = (100 - twidth) + '%';
       document.getElementById('resNum_t').innerHTML = "+" + result_t;
       document.getElementById('resNum_f').innerHTML = "-" + result_f;
   }

   function fs_download() {

       while ((Rnum == Rnum_previous) || mas_kol_tf[Rnum] > 1) {
           Rnum = getRandomInt(0, 75);

       }
       if (getRandomInt(0, 1) == 0) {
           ans = 0;
           var forFirst = arr[Rnum].f;
           var forSecond = arr[Rnum].s;
       } else {
           ans = 1;
           var forFirst = arr[Rnum].s;
           var forSecond = arr[Rnum].f;
       }

       document.getElementById('word').innerHTML = forFirst.toLowerCase();
       document.getElementById('first_p').innerHTML = forFirst;
       document.getElementById('second_p').innerHTML = forSecond;
       Rnum_previous = Rnum;

   }

   function buttonClicked(bNum) {
       document.getElementById('past').style.padding = "50px";
       if (bNum == ans) {
           mas_kol_tf[Rnum] += 1;
           document.getElementById('past').style.background = "#CCFFCC";
           document.getElementById('p_past').innerHTML = "Правильно:) Завжди наголошуйте  " + arr[Rnum].f + "  так!";
           result_t += 1;

       } else {
           mas_kol_tf[Rnum] -= 1;
           document.getElementById('past').style.background = "#FAEBD7";
           document.getElementById('p_past').innerHTML = "Неправильно:((( Завжди наголошуйте  " + arr[Rnum].f + "  так!";
           result_f += 1;
       }
       result_line();
       fs_download();
   }