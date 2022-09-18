let popa = document.getElementById("popa");
let dolina2 = document.getElementById("dolina2");
let ru1 = document.getElementById("ru1");
let ru2 = document.getElementById("ru2");
let dolina3 = document.getElementById("dolina3");
let ru3 = document.getElementById("ru3");
let ru4 = document.getElementById("ru4");
let dolina4 = document.getElementById("dolina4");
let ru5 = document.getElementById("ru5");
let ru6 = document.getElementById("ru6");
let proect = document.getElementById("proect")
let dolina = document.getElementById("dolina")

let language = "ru"

function popas() {
    if(language === "ru")
    {
        language = "en";
        popa.style.background = 'url("imgonline-com-ua-Resize-C4bQyXtuonqaogMa.jpg")'
        popa.innerHTML = "Russian"
        dolina2.innerHTML = "VALLEY OF GEYSERS – THE PEARL OF KAMCHATKA"
        ru1.innerHTML = "The world is getting more and more fussy from year to year. We<br> more often began to think about the possibility of being alone<br> with ourselves in the environment of nature. Kamchatka gives us such an<br>opportunity — to find ourselves in a world far from civilization<br>fire—breathing volcanoes, lush green slopes and flowering meadows, blue<br> snows, giant geysers and cold waters of the Pacific Ocean."
        ru2.innerHTML = "The pearl of the Kamchatka peninsula — the famous Valley <br>  geysers, mother nature hid from human eyes in <br>  difficult-to-reach gorge so skillfully that to get here <br>  it is possible only by helicopter, buying tours and excursions included<br> in the Valley of Geysers of Kamchatka."
        dolina3.innerHTML = "THE HISTORY OF THE DISCOVERY OF THE VALLEY OF GEYSERS"
        ru3.innerHTML = "The Valley of Geysers was discovered relatively recently — in April<br> 1941. Hydrologist of the Kronotsky Reserve Tatiana<br> Ustinova and the guide-itelmen Anisifor Krupenin<br> climbed the bed of the Noisy River, and entering a narrow passage<br> between the rocks, stopped to rest near the mouth of an unknown tributary."
        ru4.innerHTML = "There is still snow everywhere in April. Having settled down on<br> a snow-covered slope, the travelers decided to have a snack. On<br> the opposite bank of the river, suddenly a jet of hot water hit them<br> directly from the thaw. Terrified people caught up — we must save<br> ourselves! — however, it soon became clear that boiling water does<br> not finish them off, and rain is not dangerous. The fountain ended as<br> suddenly as it started, and Ustinova realized that in front of her was a real<br> geyser — the first one in Kamchatka. The geyser was called the Firstborn."
        dolina4.innerHTML = "WHERE IS THE KAMCHATKA VALLEY OF GEYSERS?"
        ru5.innerHTML = "If you want to find out where the famous Kamchatka<br> is located Valley of Geysers, take a look at the map of Russia, on the<br> Kamchatka Peninsula."
        ru6.innerHTML = "In the very heart of the Kamchatka Territory, on the territory of the<br> Kronotsky Nature Reserve, among mountains and volcanoes, there is a<br> bubbling valley with thermal springs, geysers and hot rivers."
        proect.innerHTML = "Maxim Dovgal's Creative Project"
        dolina.innerHTML = "Valley of Geysers"
    }
    else
    {
        language = "ru";
        popa.style.background = 'url("imgonline-com-ua-Resize-PpHTYYW62lUn.jpg")'
        popa.innerHTML = "English"
        dolina2.innerHTML = "ДОЛИНА ГЕЙЗЕРОВ – ЖЕМЧУЖИНА КАМЧАТКИ"
        ru1.innerHTML = "Мир год от года становится все более суетливым. Мы чаще<br>стали думать о возможности побыть наедине с собой в<br>окружении природы. Камчатка предоставляет нам такую<br>возможность — очутиться в далеком от цивилизации Мире<br>огнедышащих вулканов, поросших буйной зеленью склонов и<br>цветущих лугов, голубых снегов, гейзеров — гигантов и<br>холодных вод Тихого океана."
        ru2.innerHTML = "Жемчужину полуострова Камчатки — знаменитую Долину<br> гейзеров, матушка-природа спрятала от людских глаз в<br> труднодоступном ущелье столь искусно, что добраться сюда<br> возможно только на вертолете, приобретая туры и экскурсии<br> в Долину Гейзеров Камчатки."
        dolina3.innerHTML = "ИСТОРИЯ ОТКРЫТИЯ ДОЛИНЫ ГЕЙЗЕРОВ"
        ru3.innerHTML = "Долина Гейзеров открыта сравнительно недавно — в апреле<br> 1941 года. Гидролог Кроноцкого заповедника Татьяна<br> Устинова и проводник-ительмен Анисифор Крупенин<br> поднялись по руслу реки Шумной, и войдя в узкий проход<br> между скалами, остановились отдохнуть неподалеку от устья<br> неизвестного притока."
        ru4.innerHTML = "В апреле всюду еще лежит снег. Расположившись на<br> заснеженном склоне, путники решили перекусить. На<br> противоположном берегу реки вдруг из проталины прямо в<br> них ударила струя горячей воды. Перепуганные люди<br> подхватились — надо спасаться! — впрочем, вскоре<br> выяснилось, что кипяток до них не добивает, а дождь не<br> опасен. Фонтан закончился так же внезапно, как и начался, и<br> Устинова поняла, что перед ней настоящий гейзер — первый<br> на Камчатке. Гейзер назвали — Первенцем."
        dolina4.innerHTML = "ГДЕ НАХОДИТСЯ КАМЧАТСКАЯ ДОЛИНА ГЕЙЗЕРОВ?"
        ru5.innerHTML = "Если хотите узнать, где находится знаменитая Камчатская<br> Долина Гейзеров, взгляните на карту России, на полуостров<br> Камчатка."
        ru6.innerHTML = "В самом сердце Камчатского края, на территории Кроноцкого<br> заповедника, среди гор и вулканов и расположилась бурлящая<br> долина с термальными источниками, гейзерами и горячими реками."
        proect.innerHTML = "Творческий Проект Довгаль Максима"
        dolina.innerHTML = "Долина Гейзеров"
    }
};