// ============================================================
// PRODUCT DATABASE
// ============================================================
const DB = [
  // PAPER & PRINTING
  {id:1,name:"Xerox Performer A4 másolópapír 80g (500 lap)",brand:"Xerox",cat:"Papír",sub:"A4 másolópapír",price:1290,origPrice:null,sku:"XP-A4-80-500",stock:248,rating:4.8,reviews:312,desc:"Kiváló minőségű A4-es irodai másolópapír mindennapi nyomtatási feladatokhoz. Kompatibilis minden lézer- és tintasugaras nyomtatóval.",specs:{Méretek:"210 × 297 mm (A4)",Gramm:"80 g/m²","Lapszám":"500 lap/csomag",Fehérség:"161 CIE",Vastagság:"103 µm"},tags:["papír","a4","xerox","másolás"],img:"📄"},
  {id:2,name:"HP Office A4 80g/m² másolópapír (5×500 lap)",brand:"HP",cat:"Papír",sub:"A4 másolópapír",price:5890,origPrice:6490,sku:"HP-OFF-A4-5",stock:156,rating:4.7,reviews:198,desc:"5 csomag HP Office másolópapír csomagban. Gazdaságos megoldás nagy mennyiségű nyomtatáshoz.",specs:{Méretek:"210 × 297 mm",Gramm:"80 g/m²","Lapszám":"2500 lap (5×500)",Fehérség:"154 CIE"},tags:["papír","a4","hp","akció","csomag"],img:"📄"},
  {id:3,name:"Navigator Universal A4 80g fehér (500 lap)",brand:"Navigator",cat:"Papír",sub:"A4 másolópapír",price:1190,origPrice:null,sku:"NAV-UNI-A4",stock:89,rating:4.6,reviews:87,desc:"Prémium Navigator Universal papír, extra fehér. Kiváló reprodukálhatóság, minimum papírpor.",specs:{Méretek:"210 × 297 mm",Gramm:"80 g/m²","Lapszám":"500 lap",Fehérség:"168 CIE"},tags:["papír","a4","navigator"],img:"📄"},
  {id:4,name:"Color Copy A4 90g/m² másolópapír (500 lap)",brand:"Mondi",cat:"Papír",sub:"Fotópapír",price:2890,origPrice:null,sku:"CC-A4-90-500",stock:34,rating:4.9,reviews:56,desc:"Prémium papír színes lézernyomtatáshoz és digitális nyomtatáshoz. Rendkívül sima felület.",specs:{Méretek:"210 × 297 mm",Gramm:"90 g/m²","Lapszám":"500 lap",Fehérség:"168 CIE"},tags:["papír","fotó","prémium","szín"],img:"📄"},
  {id:5,name:"Másolópapír A3 80g/m² (500 lap)",brand:"Xerox",cat:"Papír",sub:"A3 papír",price:2490,origPrice:null,sku:"XER-A3-80",stock:67,rating:4.5,reviews:43,desc:"Xerox A3 másolópapír professzionális nyomtatáshoz és másoláshoz.",specs:{Méretek:"297 × 420 mm (A3)",Gramm:"80 g/m²","Lapszám":"500 lap"},tags:["papír","a3","xerox"],img:"📄"},

  // INK & TONER
  {id:6,name:"HP 304 fekete tintapatron (N9K06AE)",brand:"HP",cat:"Nyomtatószerek",sub:"Tintapatron",price:3490,origPrice:null,sku:"HP-304-BK",stock:145,rating:4.7,reviews:234,desc:"Eredeti HP 304 fekete tintapatron. Kompatibilis: HP DeskJet 2620, 2630, 3720, 3730, 3750, Envy 5010, 5020, 5030.",specs:{Szín:"Fekete",Kapacitás:"120 oldal",Kompatibilis:"HP DeskJet 26xx, 37xx; Envy 50xx"},tags:["tinta","hp","fekete","patron"],img:"🖨️",compat:["HP DeskJet 2620","HP DeskJet 2630","HP DeskJet 3720","HP DeskJet 3730","HP Envy 5010","HP Envy 5020"]},
  {id:7,name:"HP 304 háromszínű tintapatron (N9K05AE)",brand:"HP",cat:"Nyomtatószerek",sub:"Tintapatron",price:4290,origPrice:null,sku:"HP-304-COL",stock:98,rating:4.6,reviews:189,desc:"Eredeti HP 304 háromszínű tintapatron élénk színű nyomtatáshoz.",specs:{Szín:"Háromszínű (CMY)",Kapacitás:"100 oldal",Kompatibilis:"HP DeskJet 26xx, 37xx; Envy 50xx"},tags:["tinta","hp","színes","patron"],img:"🖨️",compat:["HP DeskJet 2620","HP DeskJet 2630","HP DeskJet 3720","HP Envy 5010"]},
  {id:8,name:"Canon PG-545 fekete + CL-546 színes patron csomag",brand:"Canon",cat:"Nyomtatószerek",sub:"Tintapatron",price:6890,origPrice:7490,sku:"CAN-545-546",stock:76,rating:4.8,reviews:143,desc:"Canon eredeti patron szett. PG-545 fekete + CL-546 színes. Kompatibilis: Canon PIXMA MG2550, MG2950, MX495.",specs:{Szín:"Fekete + Háromszínű","Fekete kapacitás":"180 oldal","Színes kapacitás":"180 oldal"},tags:["tinta","canon","csomag","fekete","színes"],img:"🖨️",compat:["Canon PIXMA MG2550","Canon PIXMA MG2950","Canon PIXMA MX495","Canon PIXMA TS205"]},
  {id:9,name:"Epson T1291 fekete tintapatron",brand:"Epson",cat:"Nyomtatószerek",sub:"Tintapatron",price:2890,origPrice:null,sku:"EPS-T1291",stock:54,rating:4.5,reviews:67,desc:"Eredeti Epson T1291 fekete tintapatron Stylus SX és Office sorozathoz.",specs:{Szín:"Fekete",Kapacitás:"11,2 ml / 385 oldal"},tags:["tinta","epson","fekete"],img:"🖨️"},
  {id:10,name:"HP CE505A fekete toner (LaserJet P2035)",brand:"HP",cat:"Nyomtatószerek",sub:"Toner",price:12900,origPrice:14500,sku:"HP-CE505A",stock:38,rating:4.9,reviews:112,desc:"Eredeti HP CE505A fekete toner. Kiváló éles szövegminőség lézernyomtatáshoz. ~2300 oldal kapacitás.",specs:{Szín:"Fekete",Kapacitás:"2300 oldal (5% lefedettség)",Kompatibilis:"HP LaserJet P2035, P2035n, P2055"},tags:["toner","hp","lézer","fekete"],img:"🖨️",compat:["HP LaserJet P2035","HP LaserJet P2035n","HP LaserJet P2055","HP LaserJet P2055d"]},
  {id:11,name:"Brother TN-2420 fekete toner",brand:"Brother",cat:"Nyomtatószerek",sub:"Toner",price:9800,origPrice:null,sku:"BRO-TN2420",stock:29,rating:4.8,reviews:89,desc:"Eredeti Brother TN-2420 nagy kapacitású toner. ~3000 oldal kapacitás.",specs:{Szín:"Fekete",Kapacitás:"3000 oldal",Kompatibilis:"Brother HL-L2310D, HL-L2350DW, MFC-L2710DW"},tags:["toner","brother","lézer"],img:"🖨️",compat:["Brother HL-L2310D","Brother HL-L2350DW","Brother MFC-L2710DW","Brother DCP-L2530DW"]},
  {id:12,name:"Samsung MLT-D101S fekete toner",brand:"Samsung",cat:"Nyomtatószerek",sub:"Toner",price:7200,origPrice:8100,sku:"SAM-D101S",stock:15,rating:4.4,reviews:45,desc:"Eredeti Samsung toner ML-2160, ML-2165, SCX-3400 nyomtatókhoz.",specs:{Szín:"Fekete",Kapacitás:"1500 oldal"},tags:["toner","samsung","lézer"],img:"🖨️",compat:["Samsung ML-2160","Samsung ML-2165","Samsung SCX-3400","Samsung SCX-3405"]},

  // PENS & WRITING
  {id:13,name:'BIC Cristal Original golyóstoll kék (50 db)',brand:"BIC",cat:"Írószerek",sub:"Golyóstoll",price:2490,origPrice:null,sku:"BIC-CRIST-50",stock:312,rating:4.9,reviews:567,desc:"A világ leghíresebb golyóstolla. Átlátszó test, kék tinta, közepes hegy (1,0 mm). 50 darabos csomag.",specs:{Szín:"Kék",Hegyméret:"1,0 mm (közepes)","Csomag":"50 db",Tinta:"Olajbázisú"},tags:["toll","bic","kék","golyóstoll","csomag"],img:"✏️"},
  {id:14,name:'Stabilo Point 88 tűfilc készlet (20 szín)',brand:"Stabilo",cat:"Írószerek",sub:"Filctoll",price:3890,origPrice:4290,sku:"STAB-P88-20",stock:87,rating:4.9,reviews:234,desc:"Stabilo Point 88 finom vonalú tűfilc. 20 élénk szín egy csomagban. Hegyméret: 0,4 mm.",specs:{Szín:"20 szín",Hegyméret:"0,4 mm (extra finom)","Csomag":"20 db"},tags:["filc","stabilo","színes","készlet","rajz"],img:"🖊️"},
  {id:15,name:'Pilot G2 rollertoll kék (12 db)',brand:"Pilot",cat:"Írószerek",sub:"Rollertoll",price:4800,origPrice:null,sku:"PIL-G2-12",stock:64,rating:4.8,reviews:145,desc:"Pilot G2 gél rollertoll – a legnépszerűbb prémium rollertoll. Kényelmes írás, élénk kék tinta.",specs:{Szín:"Kék",Hegyméret:"0,7 mm","Csomag":"12 db",Tinta:"Géltinta"},tags:["toll","pilot","rollertoll","gél","kék"],img:"🖊️"},
  {id:16,name:'Staedtler Mars grafitceruza készlet HB-4B (12 db)',brand:"Staedtler",cat:"Írószerek",sub:"Grafitceruza",price:1890,origPrice:null,sku:"STAE-MARS-12",stock:143,rating:4.7,reviews:98,desc:"Staedtler Mars carbon grafitceruza készlet. 12 különböző keménységű ceruza (HB, B, 2B, 3B, 4B, 2H, H stb.).",specs:{"Keménységek":"HB, B, 2B, 3B, 4B, H, 2H","Csomag":"12 db",Anyag:"Prémium grafit"},tags:["ceruza","staedtler","grafitceruza","készlet","rajz"],img:"✏️"},
  {id:17,name:'Stabilo BOSS szövegkiemelő készlet (6 szín)',brand:"Stabilo",cat:"Írószerek",sub:"Szövegkiemelő",price:1490,origPrice:1690,sku:"STAB-BOSS-6",stock:198,rating:4.8,reviews:312,desc:"Stabilo BOSS Original szövegkiemelő. 6 klasszikus szín egy csomagban. Kényelmes, vastag test.",specs:{"Szín":"6 szín","Csomag":"6 db",Hegyméret:"2–5 mm (ék alakú)"},tags:["kiemelő","stabilo","szövegkiemelő","színes"],img:"🖍️"},
  {id:18,name:'Parker Jotter töltőtoll kék',brand:"Parker",cat:"Írószerek",sub:"Töltőtoll",price:8900,origPrice:null,sku:"PARK-JOTT-BL",stock:23,rating:4.9,reviews:67,desc:"Parker Jotter prémium töltőtoll. Rozsdamentes acél keret, kék karabiner. Elegáns irodai íróeszköz.",specs:{Szín:"Kék/Ezüst",Hegyméret:"Közepes",Anyag:"Rozsdamentes acél"},tags:["töltőtoll","parker","prémium","ajándék"],img:"🖋️"},
  {id:19,name:'Edding 361 táblamarker fekete (10 db)',brand:"Edding",cat:"Írószerek",sub:"Táblamarker",price:2190,origPrice:null,sku:"EDD-361-10",stock:76,rating:4.6,reviews:88,desc:"Edding 361 whiteboard marker. Könnyen törölhető fehértáblára. Kerek hegy 1 mm.",specs:{Szín:"Fekete","Csomag":"10 db",Hegyméret:"1 mm (kerek)",Törölhető:"Igen (szárazon)"},tags:["táblamarker","edding","whiteboard","fekete"],img:"🖊️"},
  {id:20,name:'Maped Color\'Peps színes ceruza készlet (24 szín)',brand:"Maped",cat:"Írószerek",sub:"Színes ceruza",price:1290,origPrice:null,sku:"MAP-CP-24",stock:234,rating:4.7,reviews:123,desc:"Maped Color'Peps háromszög alakú ceruza helyes ceruzafogáshoz. 24 szín.",specs:{"Szín":"24 szín","Csomag":"24 db",Alak:"Háromszög"},tags:["ceruza","maped","színes","gyerek","iskola"],img:"🖍️"},

  // FOLDERS & FILING
  {id:21,name:'Leitz 1010 A4 gyűrűs mappa 4 gyűrű 50mm piros',brand:"Leitz",cat:"Irattartók",sub:"Gyűrűs mappa",price:1890,origPrice:null,sku:"LEI-1010-RED",stock:167,rating:4.7,reviews:134,desc:"Leitz Classic gyűrűs mappa. Erős PVC borítás, 4 D-gyűrű 50mm nyílású, kb. 350 lap befogadóképesség.",specs:{Szín:"Piros",Méret:"A4",Gyűrű:"4 × D-gyűrű 50mm","Befogadóképesség":"~350 lap"},tags:["mappa","leitz","gyűrűs","piros","irattartó"],img:"📁"},
  {id:22,name:'Leitz 1010 gyűrűs mappa 50mm kék',brand:"Leitz",cat:"Irattartók",sub:"Gyűrűs mappa",price:1890,origPrice:null,sku:"LEI-1010-BL",stock:145,rating:4.7,reviews:98,desc:"Leitz Classic gyűrűs mappa kék. Megegyező specifikáció mint a piros változat.",specs:{Szín:"Kék",Méret:"A4",Gyűrű:"4 × D-gyűrű 50mm"},tags:["mappa","leitz","gyűrűs","kék"],img:"📁"},
  {id:23,name:'Esselte Economy lefűző mappa A4 fekete (10 db)',brand:"Esselte",cat:"Irattartók",sub:"Lefűző mappa",price:2490,origPrice:null,sku:"ESS-ECO-10",stock:89,rating:4.5,reviews:56,desc:"Gazdaságos irodai lefűző mappa 10 darabos csomagban. Karton borítás.",specs:{Szín:"Fekete",Méret:"A4","Csomag":"10 db",Gerincszélesség:"80 mm"},tags:["mappa","lefűző","esselte","csomag"],img:"📁"},
  {id:24,name:'Fellowes Bankers Box archiváló doboz A4 (10 db)',brand:"Fellowes",cat:"Irattartók",sub:"Archiváló doboz",price:5890,origPrice:6490,sku:"FEL-BB-10",stock:45,rating:4.8,reviews:67,desc:"Fellowes Bankers Box archiváló iratdoboz. Erős hullámpapír, összerakható, fogantyúval.",specs:{Méret:"A4 (381×254×290mm)","Csomag":"10 db","Teherbírás":"30 kg",Anyag:"Hullámpapír"},tags:["doboz","archiváló","fellowes","irat","tároló"],img:"📦"},
  {id:25,name:'Han A4 irattartó tálca 3 szintes fekete',brand:"HAN",cat:"Irattartók",sub:"Irattartó tálca",price:3490,origPrice:null,sku:"HAN-TRAY-3",stock:56,rating:4.6,reviews:43,desc:"HAN 3 szintes irattartó tálca asztali rendszerezéshez. Átlátszó oldalpanel, cserélhető felirat-ablak.",specs:{Szín:"Fekete",Szintek:"3",Méret:"A4",Anyag:"Poliproplén"},tags:["tálca","irattartó","han","asztali","szervező"],img:"📋"},
  {id:26,name:'Leitz WOW irattartó mappa A4 neon zöld',brand:"Leitz",cat:"Irattartók",sub:"Portfolió mappa",price:2190,origPrice:null,sku:"LEI-WOW-GRN",stock:38,rating:4.4,reviews:29,desc:"Leitz WOW portfolió mappa iratokhoz, névjegykártyákhoz. Cipzáras záródás.",specs:{Szín:"Neon zöld",Méret:"A4",Záródás:"Cipzár"},tags:["mappa","leitz","wow","portfolió","neon"],img:"📁"},

  // OFFICE ACCESSORIES
  {id:27,name:'Scotch 550 ragasztószalag 19mm×33m (10 db)',brand:"3M Scotch",cat:"Irodaszerek",sub:"Ragasztószalag",price:1890,origPrice:null,sku:"SCO-550-10",stock:234,rating:4.8,reviews:345,desc:"Scotch Magic ragasztószalag, matt felületen írható. 10 db-os csomag. Irodai alapkellék.",specs:{Szélesség:"19 mm",Hossz:"33 m","Csomag":"10 db"},tags:["scotch","ragasztószalag","3m","irodaszer"],img:"🗂️"},
  {id:28,name:'Tesa Kristall-clear ragasztószalag 15mm×33m',brand:"Tesa",cat:"Irodaszerek",sub:"Ragasztószalag",price:490,origPrice:null,sku:"TES-KRIS-15",stock:456,rating:4.7,reviews:234,desc:"Tesa kristálytiszta ragasztószalag. Ultra átlátszó, erős ragasztás.",specs:{Szélesség:"15 mm",Hossz:"33 m"},tags:["ragasztószalag","tesa","átlátszó"],img:"🗂️"},
  {id:29,name:'Post-it 654 sárga öntapadó notes 76×76mm (12×100 lap)',brand:"3M Post-it",cat:"Irodaszerek",sub:"Öntapadó notes",price:4890,origPrice:5490,sku:"POST-654-12",stock:178,rating:4.9,reviews:456,desc:"Az eredeti Post-it notes. 12 csomag × 100 lap. Sárga szín, 76×76mm méret.",specs:{Szín:"Sárga",Méret:"76 × 76 mm","Csomag":"12 × 100 lap"},tags:["post-it","notes","sárga","3m","öntapadó"],img:"📝"},
  {id:30,name:'Post-it Super Sticky neon notes csomag (10 szín)',brand:"3M Post-it",cat:"Irodaszerek",sub:"Öntapadó notes",price:2490,origPrice:null,sku:"POST-SS-10C",stock:123,rating:4.8,reviews:178,desc:"Post-it Super Sticky erősített ragasztású neon öntapadó cetlik. 10 szín × 45 lap.",specs:{"Szín":"10 neon szín","Méret":"76 × 76 mm","Csomag":"10 × 45 lap"},tags:["post-it","notes","neon","színes","super sticky"],img:"📝"},
  {id:31,name:'Fellowes Apex 5502001 iratmegsemmisítő (P-4)',brand:"Fellowes",cat:"Irodaszerek",sub:"Iratmegsemmisítő",price:34900,origPrice:39900,sku:"FEL-APEX-P4",stock:12,rating:4.6,reviews:34,desc:"Fellowes Apex 10-lapos iratmegsemmisítő. P-4 biztonsági szint, mikrokonfetti vágás. CD/DVD vágás.",specs:{"Biztonsági szint":"P-4 (mikrokonfetti)","Kapacitás":"10 lap egyszerre",Kosár:"21 liter","Csendes üzemmód":"Igen"},tags:["iratmegsemmisítő","fellowes","iroda","biztonság"],img:"🗑️"},
  {id:32,name:'Maped Essentials olló 21cm irodai',brand:"Maped",cat:"Irodaszerek",sub:"Olló",price:890,origPrice:null,sku:"MAP-ESS-21",stock:345,rating:4.5,reviews:123,desc:"Maped Essentials irodai olló. Rozsdamentes acél pengék, kényelmes gumi nyél.",specs:{Hossz:"21 cm",Anyag:"Rozsdamentes acél penge + ABS nyél"},tags:["olló","maped","irodai"],img:"✂️"},
  {id:33,name:'Leitz Alpha 5 szintes regiszter A4',brand:"Leitz",cat:"Irattartók",sub:"Regiszter",price:890,origPrice:null,sku:"LEI-REG-5",stock:167,rating:4.6,reviews:56,desc:"Leitz Alpha 5 részből álló A4-es regiszter/elválasztó gyűrűs mappába.",specs:{Méret:"A4",Lapszám:"5 rész",Anyag:"PP fólia"},tags:["regiszter","leitz","elválasztó","mappa"],img:"📋"},

  // PRESENTATION & WHITEBOARD
  {id:34,name:'Bi-Office fehértábla 90×60cm alumínium keret',brand:"Bi-Office",cat:"Tárgyalóterem",sub:"Fehértábla",price:12900,origPrice:14500,sku:"BIO-WB-9060",stock:18,rating:4.7,reviews:43,desc:"Bi-Office fehértábla mágneses felülettel. Alumínium keret, polcos tálca márkertartóval.",specs:{Méret:"90 × 60 cm",Felület:"Mágneses acél",Keret:"Alumínium",Tartalmaz:"Polcos tálca"},tags:["fehértábla","bi-office","whiteboard","tárgyaló"],img:"🖥️"},
  {id:35,name:'Nobo Impression Pro 120×90cm fehértábla',brand:"Nobo",cat:"Tárgyalóterem",sub:"Fehértábla",price:24900,origPrice:28900,sku:"NOB-IMP-120",stock:8,rating:4.9,reviews:28,desc:"Nobo Impression Pro nagy fehértábla. Üveg felület, ultra fényes. Tárgyalótermekhez ideális.",specs:{Méret:"120 × 90 cm",Felület:"Edzett üveg",Keret:"Alumínium"},tags:["fehértábla","nobo","prémium","üveg","tárgyaló"],img:"🖥️"},
  {id:36,name:'Legamaster Economy flipchart állvány',brand:"Legamaster",cat:"Tárgyalóterem",sub:"Flipchart",price:8900,origPrice:null,sku:"LEG-FLIP-ECO",stock:14,rating:4.5,reviews:19,desc:"Legamaster Economy flipchart állvány 70×100cm-es papírhoz. Állítható magasság, összecsukható.",specs:{Méret:"70 × 100 cm",Állítható:"60–130 cm",Anyag:"Acél"},tags:["flipchart","legamaster","tárgyaló","előadás"],img:"📊"},
  {id:37,name:'Nobo T-Card flipchart papír 70×100cm (20 lap)',brand:"Nobo",cat:"Tárgyalóterem",sub:"Flipchart papír",price:1890,origPrice:null,sku:"NOB-FPC-20",stock:67,rating:4.6,reviews:34,desc:"Nobo flipchart papír. 70×100cm méret, 20 lapos tömb. Lyukasztott a könnyű cserért.",specs:{Méret:"70 × 100 cm","Lapszám":"20 lap","Felület":"Sima / kockás"},tags:["flipchart","papír","nobo","tárgyaló"],img:"📊"},
  {id:38,name:'Logitech MX Keys irodai billentyűzet',brand:"Logitech",cat:"Tárgyalóterem",sub:"Billentyűzet",price:34900,origPrice:39900,sku:"LOG-MX-KEYS",stock:22,rating:4.9,reviews:167,desc:"Logitech MX Keys prémium billentyűzet. Háttérvilágítás, adaptív backlighting, Bluetooth + USB.",specs:{Csatlakozás:"Bluetooth / USB Logi Bolt",Akkumulátor:"10 nap (háttérvilágítással)","Kompatibilis":"Windows, Mac, iOS, Android"},tags:["billentyűzet","logitech","prémium","bluetooth","iroda"],img:"⌨️"},
  {id:39,name:'Leitz 65070000 Smart Traveller prezentáció mappa',brand:"Leitz",cat:"Tárgyalóterem",sub:"Prezentáció mappa",price:5890,origPrice:null,sku:"LEI-SMART-PM",stock:31,rating:4.7,reviews:38,desc:"Leitz Smart Traveller prémium prezentáció mappa. 6 elágazás, névjegytartó, pen loop.",specs:{Kapacitás:"80 lap A4",Záródás:"Mágneses klikk","Lapok száma":"6 elágazás"},tags:["prezentáció","leitz","mappa","prémium"],img:"💼"},

  // CHAIRS & FURNITURE
  {id:40,name:'Huzaro Force 4.4 irodai szék fekete mesh',brand:"Huzaro",cat:"Irodabútor",sub:"Irodai szék",price:49900,origPrice:59900,sku:"HUZ-F44-BK",stock:7,rating:4.6,reviews:34,desc:"Huzaro Force 4.4 ergonomikus irodai szék. Mesh háttámla, állítható karfák, lumbális támasz.",specs:{Anyag:"Mesh háttámla + PU ülőpárna",Teherbírás:"150 kg","Magasság-állítás":"42–52 cm",Karfa:"4D állítható"},tags:["szék","irodai szék","huzaro","ergonomikus","mesh"],img:"🪑"},
  {id:41,name:'Nowy Styl Grospol ergonómikus irodai szék',brand:"Nowy Styl",cat:"Irodabútor",sub:"Irodai szék",price:89900,origPrice:99900,sku:"NS-GROS-ERG",stock:4,rating:4.8,reviews:19,desc:"Prémium európai irodai szék. Szinkron mechanizmus, állítható ülőmélység és lumbális.",specs:{Anyag:"Textil kárpit",Teherbírás:"130 kg","Garancia":"5 év"},tags:["szék","irodai szék","prémium","ergonomikus","nowy styl"],img:"🪑"},
  {id:42,name:'IKEA Lack polcrendszer 190×36cm fehér',brand:"IKEA",cat:"Irodabútor",sub:"Polcrendszer",price:12900,origPrice:null,sku:"IKE-LACK-190",stock:11,rating:4.3,reviews:23,desc:"IKEA Lack fali polcrendszer. 5 polc, fehér laminált forgácslap.",specs:{Méret:"190 × 36 cm (5 polc)",Anyag:"Laminált forgácslap","Terhelhetőség":"25 kg/polc"},tags:["polc","ikea","bútor","tároló","iroda"],img:"🪑"},

  // SALE ITEMS
  {id:43,name:'Avery zweckform L7160 etikett 63,5×38,1mm (100 ív)',brand:"Avery",cat:"Akciók",sub:"Etikett",price:2990,origPrice:4490,sku:"AVE-L7160",stock:89,rating:4.7,reviews:78,desc:"Avery Zweckform L7160 fehér etikett. 21 etikett/ív, 100 ív csomag. Lézernyomtatóhoz ideális.",specs:{Méret:"63,5 × 38,1 mm","Db/ív":"21","Ívek":"100","Csomag össz.":"2100 db"},tags:["etikett","avery","lézer","akció","akciós"],img:"🏷️"},
  {id:44,name:'Dymo LabelWriter 450 cimkenyomtató',brand:"Dymo",cat:"Akciók",sub:"Cimkenyomtató",price:24900,origPrice:34900,sku:"DYM-LW450",stock:6,rating:4.8,reviews:56,desc:"Dymo LabelWriter 450 direkt termál cimkenyomtató. USB csatlakozás, tintakazetta nélkül működik.",specs:{Technológia:"Direkt termál","Nyomtatási sebesség":"51 cimke/perc",Csatlakozás:"USB",OS:"Windows / Mac"},tags:["cimkenyomtató","dymo","akció","akciós"],img:"🖨️"},
  {id:45,name:'Leitz 7401 Power Performance iratrendező 10 db',brand:"Leitz",cat:"Akciók",sub:"Iratrendező",price:3490,origPrice:5200,sku:"LEI-7401-10",stock:34,rating:4.6,reviews:45,desc:"Leitz Power Performance iratrendező csomag. Erős, tartós polipropilén borítás. 10 db/csomag.",specs:{Méret:"A4",Gerincszélesség:"75 mm","Csomag":"10 db",Anyag:"PP borítás"},tags:["iratrendező","leitz","akció","akciós","csomag"],img:"📁"},
  {id:46,name:'3M Scotch 508 asztali ragasztószalag-adagoló + 1 tekercs',brand:"3M Scotch",cat:"Akciók",sub:"Ragasztószalag adagoló",price:1490,origPrice:2190,sku:"SCO-508-DISP",stock:67,rating:4.7,reviews:89,desc:"3M Scotch 508-as asztali ragasztószalag-adagoló + 1 tekercs mágneses ragasztószalaggal.",specs:{Tartalmaz:"1 tekercs (19mm × 33m) + adagoló",Anyag:"ABS műanyag"},tags:["ragasztószalag","adagoló","3m","scotch","akciós","akció"],img:"🗂️"},

  // MORE PRODUCTS
  {id:47,name:'Rapid K12 tűzőgép 25 lapos fekete',brand:"Rapid",cat:"Irodaszerek",sub:"Tűzőgép",price:1890,origPrice:null,sku:"RAP-K12-BK",stock:123,rating:4.6,reviews:67,desc:"Rapid K12 fémes tűzőgép. 25 lap kapacitás, 24/6 és 26/6-os tűzőkapcsokhoz.",specs:{Kapacitás:"25 lap",Kapocs:"24/6 és 26/6",Szín:"Fekete",Anyag:"Fém"},tags:["tűzőgép","rapid","irodai","fekete"],img:"📎"},
  {id:48,name:'Rapid E12 tűzőkapocs 24/6 (1000 db)',brand:"Rapid",cat:"Irodaszerek",sub:"Tűzőkapocs",price:390,origPrice:null,sku:"RAP-E12-1000",stock:567,rating:4.8,reviews:234,desc:"Rapid E12 galvanizált tűzőkapocs. 1000 db dobozban. 24/6 méret.",specs:{Méret:"24/6",Mennyiség:"1000 db",Anyag:"Galvanizált acél"},tags:["tűzőkapocs","rapid","kapocs"],img:"📎"},
  {id:49,name:'Dahle 533 asztali iratlyukasztó 30 lapos',brand:"Dahle",cat:"Irodaszerek",sub:"Lyukasztó",price:2490,origPrice:null,sku:"DAH-533-30",stock:78,rating:4.7,reviews:56,desc:"Dahle 533 ergonomikus irodai lyukasztó. 30 lap egyszerre, fix 80mm lyuktávolság.",specs:{Kapacitás:"30 lap",Lyuktávolság:"80 mm rögzített","Papírméret":"B4–A5"},tags:["lyukasztó","dahle","irodai"],img:"📋"},
  {id:50,name:'Leitz Cosy ergonomikus laptoptartó szürke',brand:"Leitz",cat:"Irodabútor",sub:"Laptoptartó",price:8900,origPrice:9900,sku:"LEI-COSY-LT",stock:29,rating:4.8,reviews:43,desc:"Leitz Cosy ergonomikus laptoptartó. 6 magassági fokozat, összecsukható, 15,6\"-ig.",specs:{Kompatibilis:"Max 15,6\"",Magasság:"6 fokozat",Anyag:"PP műanyag",Szín:"Szürke"},tags:["laptoptartó","leitz","ergonomikus","home office"],img:"💻"},
  {id:51,name:'Kensington Orbit optikai trackball egér',brand:"Kensington",cat:"Tárgyalóterem",sub:"Egér",price:12900,origPrice:14900,sku:"KEN-ORBIT",stock:17,rating:4.5,reviews:34,desc:"Kensington Orbit trackball egér. Ergonomikus tervezés, állítható gördítő gyűrű, USB.",specs:{Csatlakozás:"USB",Gombok:"2 + görgetőgyűrű",Kompatibilis:"Windows / Mac"},tags:["egér","trackball","kensington","ergonomikus"],img:"🖱️"},
  {id:52,name:'Sigel Conceptum A5 heti tervező naptár 2025',brand:"Sigel",cat:"Irodaszerek",sub:"Határidőnapló",price:5490,origPrice:null,sku:"SIG-CONC-25",stock:43,rating:4.7,reviews:38,desc:"Sigel Conceptum prémium A5-ös heti tervező. Finom linátus papír, gumi záró.",specs:{Méret:"A5",Formátum:"Heti",Oldalak:"192 oldal",Zárás:"Gumi szalag"},tags:["naptár","tervező","sigel","határidőnapló","2025"],img:"📅"}
];

// ============================================================
// STATE
// ============================================================
const state = {
  view: 'home',
  catFilter: null,
  product: null,
  cart: [],
  wishlist: [],
  search: '',
  filters: { brands:[], priceMax:null, inStock:false, sub:null },
  sort: 'pop',
  checkoutStep: 1,
  orderData: null,
  printerBrand: null,
  printerModel: null,
  user: null
};

// ============================================================
// UTILITIES
// ============================================================
const app = () => document.getElementById('app');
const fmt = n => n.toLocaleString('hu-HU') + ' Ft';
const stars = r => '★'.repeat(Math.round(r)) + '☆'.repeat(5 - Math.round(r));
const uid = () => 'FO-' + Date.now().toString(36).toUpperCase().slice(-6);

function showToast(msg, type='success') {
  const t = document.getElementById('toast');
  t.textContent = msg;
  t.className = type;
  t.style.display = 'block';
  t.style.opacity = '1';
  t.style.bottom = '80px';
  clearTimeout(t._timer);
  t._timer = setTimeout(() => {
    t.style.bottom = '-80px';
    t.style.opacity = '0';
    setTimeout(() => { t.style.display = 'none'; }, 350);
  }, 2800);
}


function toggleMobSearch() {
  const bar = document.getElementById('mob-srch');
  bar.classList.toggle('open');
  if(bar.classList.contains('open')) {
    setTimeout(() => document.getElementById('mob-srch-inp')?.focus(), 80);
  }
}

function navigate(view, extra) {
  state.view = view;
  if(extra) Object.assign(state, extra);
  render();
  window.scrollTo({ top: 0, behavior: 'smooth' });
  closeMobileNav();
}

function navigateCat(cat) {
  state.catFilter = cat;
  state.filters = { brands:[], priceMax:null, inStock:false, sub:null };
  state.sort = 'pop';
  navigate('category');
}

// ============================================================
// CART
// ============================================================
function addToCart(id, qty=1) {
  const p = DB.find(x=>x.id===id);
  if(!p) return;
  const ex = state.cart.find(x=>x.id===id);
  if(ex) ex.qty += qty; else state.cart.push({id, qty});
  updateBadges();
  renderCart();
  openCart();
  showToast(`"${p.name.slice(0,30)}…" hozzáadva a kosárhoz`);
}

function removeFromCart(id) {
  state.cart = state.cart.filter(x=>x.id!==id);
  updateBadges();
  renderCart();
}

function updateQty(id, delta) {
  const item = state.cart.find(x=>x.id===id);
  if(!item) return;
  item.qty = Math.max(1, item.qty + delta);
  updateBadges();
  renderCart();
}

function getCartItems() {
  return state.cart.map(c => ({ ...DB.find(x=>x.id===c.id), qty:c.qty })).filter(Boolean);
}

function getCartTotal() {
  return getCartItems().reduce((s,i) => s + i.price * i.qty, 0);
}

function getCartCount() {
  return state.cart.reduce((s,c) => s+c.qty, 0);
}

function updateBadges() {
  const cc = getCartCount();
  const wc = state.wishlist.length;
  const cb = document.getElementById('cart-cnt');
  const wb = document.getElementById('wl-cnt');
  if(cb){ cb.textContent = cc; cb.style.display = cc ? 'flex' : 'none'; }
  if(wb){ wb.textContent = wc; wb.style.display = wc ? 'flex' : 'none'; }
  const cdr = document.getElementById('cdr-cnt');
  if(cdr) cdr.textContent = cc;
}

function renderCart() {
  const body = document.getElementById('cdr-body');
  const ft = document.getElementById('cdr-ft');
  if(!body || !ft) return;
  const items = getCartItems();
  if(!items.length) {
    body.innerHTML = `<div style="text-align:center;padding:48px 24px;color:var(--txt2)">
      <div style="font-size:48px;margin-bottom:16px">🛒</div>
      <p style="font-size:16px;font-weight:600;color:var(--navy)">Üres a kosár</p>
      <p style="font-size:14px">Böngésszen termékeink között!</p>
      <button class="btn btn-p" style="margin-top:20px" onclick="closeCart();navigate('home')">Vásárlás</button>
    </div>`;
    ft.innerHTML = '';
    return;
  }
  body.innerHTML = items.map(i => `
    <div class="cdr-item">
      <div class="cdr-img">${i.img||'📦'}</div>
      <div class="cdr-info">
        <div class="cdr-name">${i.name}</div>
        <div class="cdr-pr">${fmt(i.price)}</div>
        <div class="cdr-qty">
          <button class="qty-btn" onclick="updateQty(${i.id},-1)">−</button>
          <span style="min-width:24px;text-align:center;font-weight:600">${i.qty}</span>
          <button class="qty-btn" onclick="updateQty(${i.id},1)">+</button>
          <button onclick="removeFromCart(${i.id})" style="margin-left:8px;background:none;border:none;color:var(--txt2);cursor:pointer;font-size:18px">🗑</button>
        </div>
      </div>
      <div style="font-weight:700;color:var(--navy);white-space:nowrap">${fmt(i.price*i.qty)}</div>
    </div>`).join('');

  const total = getCartTotal();
  const shipping = total >= 25000 ? 0 : 1290;
  ft.innerHTML = `
    <div style="border-top:1px solid var(--bdr);padding-top:16px">
      <div style="display:flex;justify-content:space-between;margin-bottom:8px;font-size:14px;color:var(--txt2)">
        <span>Részösszeg</span><span>${fmt(total)}</span>
      </div>
      <div style="display:flex;justify-content:space-between;margin-bottom:16px;font-size:14px;color:var(--txt2)">
        <span>Szállítás</span><span>${shipping === 0 ? '<span style="color:var(--teal)">Ingyenes</span>' : fmt(shipping)}</span>
      </div>
      ${shipping > 0 ? `<div style="background:#fef3c7;border-radius:8px;padding:10px 12px;font-size:12px;color:#92400e;margin-bottom:12px">Még <strong>${fmt(25000 - total)}</strong> vásárlás szükséges az ingyenes szállításhoz!</div>` : ''}
      <div style="display:flex;justify-content:space-between;font-size:18px;font-weight:700;color:var(--navy);margin-bottom:16px">
        <span>Összesen</span><span>${fmt(total + shipping)}</span>
      </div>
      <button class="btn btn-p" style="width:100%" onclick="closeCart();navigate('checkout')">Megrendelés →</button>
      <button class="btn btn-o" style="width:100%;margin-top:8px" onclick="closeCart()">Vásárlás folytatása</button>
    </div>`;
  updateBadges();
}

function openCart() {
  document.getElementById('cart-dr').classList.add('open');
  document.getElementById('cart-ov').classList.add('active');
  renderCart();
}
function closeCart() {
  document.getElementById('cart-dr').classList.remove('open');
  document.getElementById('cart-ov').classList.remove('active');
}

// ============================================================
// WISHLIST
// ============================================================
function toggleWish(id) {
  const idx = state.wishlist.indexOf(id);
  if(idx >= 0) { state.wishlist.splice(idx,1); showToast('Eltávolítva a kívánságlistáról','info'); }
  else { state.wishlist.push(id); showToast('Hozzáadva a kívánságlistához ❤️'); }
  updateBadges();
  document.querySelectorAll(`.pc-wish[data-id="${id}"]`).forEach(btn => {
    btn.classList.toggle('active', state.wishlist.includes(id));
  });
}

// ============================================================
// SEARCH
// ============================================================
function initSearch() {
  const inp = document.getElementById('srch-inp');
  const res = document.getElementById('srch-res');
  if(!inp || !res) return;
  inp.addEventListener('input', function() {
    const q = this.value.trim().toLowerCase();
    if(q.length < 2) { res.style.display='none'; return; }
    const hits = DB.filter(p =>
      p.name.toLowerCase().includes(q) ||
      p.brand.toLowerCase().includes(q) ||
      (p.tags && p.tags.some(t=>t.includes(q)))
    ).slice(0, 6);
    if(!hits.length) { res.style.display='none'; return; }
    res.innerHTML = hits.map(p => `
      <div class="srch-item" onclick="viewProduct(${p.id});document.getElementById('srch-inp').value='';document.getElementById('srch-res').style.display='none'">
        <span style="font-size:20px;margin-right:10px">${p.img||'📦'}</span>
        <div>
          <div style="font-size:13px;font-weight:600;color:var(--navy)">${p.name.slice(0,50)}</div>
          <div style="font-size:12px;color:var(--txt2)">${p.brand} • ${fmt(p.price)}</div>
        </div>
      </div>`).join('') +
      `<div class="srch-item" style="color:var(--blue);font-size:13px;justify-content:center" onclick="state.catFilter=null;state.search='${q}';navigate('category')">
        Összes találat megtekintése →
      </div>`;
    res.style.display = 'block';
  });
  document.addEventListener('click', e => {
    if(!e.target.closest('#srch-wrap')) res.style.display = 'none';
  });
  inp.addEventListener('keydown', e => {
    if(e.key === 'Enter') {
      state.catFilter = null;
      state.search = inp.value.trim();
      res.style.display = 'none';
      inp.value = '';
      navigate('category');
    }
  });
}

// ============================================================
// MOBILE NAV
// ============================================================
function openMobileNav() {
  document.getElementById('mnav').classList.add('open');
  document.getElementById('mnav-ov').classList.add('active');
}
function closeMobileNav() {
  document.getElementById('mnav').classList.remove('open');
  document.getElementById('mnav-ov').classList.remove('active');
}
function handleMobileSearch(v) {
  if(v.length > 1) { state.search = v; state.catFilter = null; navigate('category'); closeMobileNav(); }
}

// ============================================================
// LOGIN MODAL
// ============================================================
function toggleLogin() {
  const ov = document.getElementById('login-ov');
  ov.style.display = ov.style.display === 'flex' ? 'none' : 'flex';
}
function closeLogin() { document.getElementById('login-ov').style.display='none'; }
function fakeLogin() {
  const email = document.querySelector('#login-ov input[type=email]')?.value;
  if(!email || !email.includes('@')) { showToast('Kérem adjon meg érvényes e-mail címet!','error'); return; }
  state.user = { email };
  closeLogin();
  showToast('Sikeres bejelentkezés! Üdvözöljük!');
}

// ============================================================
// RENDER HOME
// ============================================================
function renderHome() {
  const featured = DB.filter(p=>p.reviews>100).sort((a,b)=>b.reviews-a.reviews).slice(0,8);
  const sale = DB.filter(p=>p.origPrice).slice(0,4);
  const heroFeat = featured[0] || DB[0];
  const heroMini1 = DB.find(p=>p.cat==='Írószerek') || DB[1];
  const heroMini2 = DB.find(p=>p.cat==='Nyomtatószerek') || DB[2];
  const cats = [
    {name:'Papír & Nyomtatás', icon:'📄', sub:'Papír, patronok, tonerök', cat:'Papír'},
    {name:'Írószerek', icon:'✏️', sub:'Tollak, ceruzák, kiemelők', cat:'Írószerek'},
    {name:'Irattartók', icon:'📁', sub:'Mappák, dobozok, tálcák', cat:'Irattartók'},
    {name:'Tárgyalóterem', icon:'🎯', sub:'Fehértáblák, flipchart', cat:'Tárgyalóterem'},
    {name:'Irodabútor', icon:'🪑', sub:'Székek, polcok, tartók', cat:'Irodabútor'},
    {name:'Irodaszerek', icon:'📎', sub:'Kellékek, szalagok, tűzők', cat:'Irodaszerek'},
  ];
  app().innerHTML = `
    <!-- HERO -->
    <section class="hero">
      <div class="hero-bg">
        <div class="hero-blob hero-blob-1"></div>
        <div class="hero-blob hero-blob-2"></div>
        <div class="hero-blob hero-blob-3"></div>
      </div>
      <div class="con" style="width:100%">
        <div class="hero-inner">
          <div>
            <div class="hero-badge">🏆 Megbízható partner 1990 óta</div>
            <h1 class="hero-h1">Az irodájának<br>minden, amire<br><em>szüksége van.</em></h1>
            <p class="hero-sub">10&thinsp;000+ irodaszer termék raktárkészletről. Ingyenes szállítás 25&thinsp;000 Ft felett. B2B kedvezmények vállalkozásoknak.</p>
            <div class="hero-cta">
              <button class="btn hero-btn-main" onclick="navigateCat('Papír')">Böngésszen most →</button>
              <button class="btn hero-btn-sec" onclick="navigate('printer-compat')">🖨️ Nyomtatókeresés</button>
            </div>
            <div class="hero-stats">
              <div class="hero-stat"><span class="hero-stat-n">10k+</span><span class="hero-stat-l">Termék</span></div>
              <div class="hero-stat-sep"></div>
              <div class="hero-stat"><span class="hero-stat-n">35+</span><span class="hero-stat-l">Év tapasztalat</span></div>
              <div class="hero-stat-sep"></div>
              <div class="hero-stat"><span class="hero-stat-n">24h</span><span class="hero-stat-l">Kiszállítás</span></div>
              <div class="hero-stat-sep"></div>
              <div class="hero-stat"><span class="hero-stat-n">5k+</span><span class="hero-stat-l">Ügyfél</span></div>
            </div>
          </div>
          <div class="hero-r">
            <div class="hero-r-main" onclick="navigate('product',${heroFeat.id})">
              <div class="hero-r-badge">⭐ Legjobb értékelés</div>
              <span class="hero-r-ico">${heroFeat.icon}</span>
              <div class="hero-r-nm">${heroFeat.name}</div>
              <div class="hero-r-sub">${heroFeat.brand}</div>
              <div class="hero-r-pr">${heroFeat.price.toLocaleString('hu-HU')} Ft</div>
              <button class="hero-r-btn" onclick="event.stopPropagation();addToCart(${heroFeat.id})">Kosárba teszem</button>
            </div>
            <div class="hero-mini-row">
              <div class="hero-mini" onclick="navigateCat('Írószerek')">
                <span class="hero-mini-ico">${heroMini1.icon}</span>
                <div><div class="hero-mini-nm">${heroMini1.name.substring(0,18)}</div><div class="hero-mini-pr">${heroMini1.price.toLocaleString('hu-HU')} Ft</div></div>
              </div>
              <div class="hero-mini" onclick="navigateCat('Nyomtatószerek')">
                <span class="hero-mini-ico">${heroMini2.icon}</span>
                <div><div class="hero-mini-nm">${heroMini2.name.substring(0,18)}</div><div class="hero-mini-pr">${heroMini2.price.toLocaleString('hu-HU')} Ft</div></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CATEGORIES -->
    <section style="padding:48px 0;background:var(--bg)">
      <div class="con">
        <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:24px">
          <h2 style="font-size:22px;font-weight:700;color:var(--navy);margin:0">Kategóriák</h2>
        </div>
        <div class="cg">
          ${cats.map(c=>`
            <div class="cat-card" onclick="navigateCat('${c.cat}')">
              <div class="cat-ico">${c.icon}</div>
              <div class="cat-name">${c.name}</div>
              <div class="cat-sub">${c.sub}</div>
            </div>`).join('')}
        </div>
      </div>
    </section>

    <!-- FEATURED PRODUCTS -->
    <section style="padding:48px 0">
      <div class="con">
        <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:24px">
          <h2 style="font-size:22px;font-weight:700;color:var(--navy);margin:0">Népszerű termékek</h2>
          <a onclick="navigateCat(null)" style="color:var(--blue);font-size:14px;cursor:pointer;text-decoration:none">Összes →</a>
        </div>
        <div class="pg4">${featured.map(p=>productCard(p)).join('')}</div>
      </div>
    </section>

    <!-- PROMO BANNER -->
    <section style="padding:32px 0;background:linear-gradient(135deg,#0d9488,#0f766e)">
      <div class="con" style="display:flex;align-items:center;justify-content:space-between;gap:24px;flex-wrap:wrap">
        <div>
          <h2 style="color:#fff;font-size:24px;font-weight:800;margin:0 0 8px">B2B vállalati kedvezmények</h2>
          <p style="color:rgba(255,255,255,0.85);margin:0;font-size:15px">5–30% kedvezmény vállalkozásoknak • Dedikált kapcsolattartó • Havi számla</p>
        </div>
        <button class="btn" style="background:#fff;color:#0d9488;font-weight:700;padding:14px 28px;white-space:nowrap" onclick="showToast('B2B ajánlatkérés elküldve!')">Ajánlatot kérek</button>
      </div>
    </section>

    <!-- SALE -->
    <section style="padding:48px 0;background:var(--bg)">
      <div class="con">
        <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:24px">
          <h2 style="font-size:22px;font-weight:700;color:var(--navy);margin:0">🔥 Akciók</h2>
          <a onclick="navigateCat('Akciók')" style="color:var(--blue);font-size:14px;cursor:pointer;text-decoration:none">Összes akció →</a>
        </div>
        <div class="pg4">${sale.map(p=>productCard(p)).join('')}</div>
      </div>
    </section>

    <!-- USP STRIP -->
    <section style="padding:32px 0;border-top:1px solid var(--bdr);border-bottom:1px solid var(--bdr)">
      <div class="con">
        <div class="tg">
          ${[
            ['🚚','Gyors szállítás','1-2 munkanapon belül a megrendelés után'],
            ['🎁','Ingyenes szállítás','25 000 Ft feletti rendelésekre'],
            ['↩️','Könnyű visszaküldés','30 napon belül, kérdések nélkül'],
            ['🏢','B2B program','Vállalati kedvezmények és havi elszámolás'],
          ].map(([ico,t,s])=>`
            <div style="display:flex;gap:16px;align-items:flex-start">
              <div style="font-size:32px;flex-shrink:0">${ico}</div>
              <div><div style="font-weight:700;font-size:15px;color:var(--navy);margin-bottom:4px">${t}</div><div style="font-size:13px;color:var(--txt2)">${s}</div></div>
            </div>`).join('')}
        </div>
      </div>
    </section>`;
}

// ============================================================
// PRODUCT CARD
// ============================================================
function productCard(p) {
  const isWish = state.wishlist.includes(p.id);
  const disc = p.origPrice ? Math.round((1 - p.price/p.origPrice)*100) : 0;
  return `<div class="pc">
    <div class="pc-img" onclick="viewProduct(${p.id})">${p.img||'📦'}
      ${disc ? `<div class="pc-bdg">-${disc}%</div>` : ''}
      <button class="pc-wish${isWish?' active':''}" data-id="${p.id}" onclick="event.stopPropagation();toggleWish(${p.id})">♥</button>
    </div>
    <div class="pc-body" onclick="viewProduct(${p.id})">
      <div class="pc-br">${p.brand}</div>
      <div class="pc-nm">${p.name}</div>
      <div style="display:flex;align-items:center;gap:6px;margin-bottom:4px">
        <span style="color:#f59e0b;font-size:12px">${stars(p.rating)}</span>
        <span style="font-size:12px;color:var(--txt2)">(${p.reviews})</span>
      </div>
      <div class="pc-pr">
        <span class="pc-p">${fmt(p.price)}</span>
        ${p.origPrice ? `<span style="font-size:12px;color:var(--txt2);text-decoration:line-through">${fmt(p.origPrice)}</span>` : ''}
      </div>
    </div>
    <div class="pc-foot">
      <div class="pc-op" onclick="viewProduct(${p.id})">Részletek</div>
      <button class="pc-cart" onclick="addToCart(${p.id})">+ Kosár</button>
    </div>
  </div>`;
}

function viewProduct(id) {
  state.product = DB.find(x=>x.id===id);
  navigate('product');
}

// ============================================================
// RENDER CATEGORY
// ============================================================
function renderCategory() {
  let products = [...DB];
  const title = state.catFilter || (state.search ? `Keresés: "${state.search}"` : 'Összes termék');

  // Apply filters
  if(state.catFilter) products = products.filter(p => p.cat === state.catFilter || p.sub === state.catFilter || p.tags?.includes(state.catFilter.toLowerCase()));
  if(state.search) products = products.filter(p =>
    p.name.toLowerCase().includes(state.search.toLowerCase()) ||
    p.brand.toLowerCase().includes(state.search.toLowerCase()) ||
    p.tags?.some(t => t.includes(state.search.toLowerCase()))
  );
  if(state.filters.brands.length) products = products.filter(p => state.filters.brands.includes(p.brand));
  if(state.filters.priceMax) products = products.filter(p => p.price <= state.filters.priceMax);
  if(state.filters.inStock) products = products.filter(p => p.stock > 0);
  if(state.filters.sub) products = products.filter(p => p.sub === state.filters.sub);

  // Sort
  if(state.sort === 'price-asc') products.sort((a,b) => a.price - b.price);
  else if(state.sort === 'price-desc') products.sort((a,b) => b.price - a.price);
  else if(state.sort === 'rating') products.sort((a,b) => b.rating - a.rating);
  else products.sort((a,b) => b.reviews - a.reviews);

  // Available brands
  const allBrands = [...new Set(DB.filter(p => !state.catFilter || p.cat === state.catFilter || p.sub === state.catFilter).map(p=>p.brand))].sort();
  const allSubs = [...new Set(DB.filter(p => !state.catFilter || p.cat === state.catFilter).map(p=>p.sub))].filter(Boolean).sort();

  app().innerHTML = `
    <div class="con" style="padding-top:24px;padding-bottom:48px">
      <div style="font-size:13px;color:var(--txt2);margin-bottom:16px">
        <span onclick="navigate('home')" style="cursor:pointer;color:var(--blue)">Főoldal</span>
        ${state.catFilter ? ` › <span>${state.catFilter}</span>` : ''}
        ${state.search ? ` › Keresés` : ''}
      </div>
      <div class="cpl">
        <!-- FILTERS -->
        <aside class="fp" id="filter-panel">
          <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:16px">
            <span style="font-weight:700;font-size:15px;color:var(--navy)">Szűrők</span>
            <button onclick="clearFilters()" style="background:none;border:none;color:var(--blue);font-size:13px;cursor:pointer">Törlés</button>
          </div>

          <div class="fg">
            <div class="fg-t" onclick="this.parentElement.classList.toggle('open')">Raktáron ▾</div>
            <div class="fg-body">
              <label style="display:flex;align-items:center;gap:8px;cursor:pointer;font-size:14px">
                <input type="checkbox" ${state.filters.inStock?'checked':''} onchange="state.filters.inStock=this.checked;renderCategory()">
                Csak raktáron lévő termékek
              </label>
            </div>
          </div>

          ${allSubs.length > 1 ? `<div class="fg open">
            <div class="fg-t" onclick="this.parentElement.classList.toggle('open')">Alkategória ▾</div>
            <div class="fg-body">
              <label class="fo"><input type="radio" name="sub" ${!state.filters.sub?'checked':''} onchange="state.filters.sub=null;renderCategory()"> Összes</label>
              ${allSubs.map(s=>`<label class="fo"><input type="radio" name="sub" ${state.filters.sub===s?'checked':''} onchange="state.filters.sub='${s}';renderCategory()"> ${s}</label>`).join('')}
            </div>
          </div>` : ''}

          <div class="fg open">
            <div class="fg-t" onclick="this.parentElement.classList.toggle('open')">Márka ▾</div>
            <div class="fg-body">
              ${allBrands.slice(0,12).map(b=>`
                <label class="fo">
                  <input type="checkbox" ${state.filters.brands.includes(b)?'checked':''} onchange="toggleBrandFilter('${b}')">
                  ${b} <span style="color:var(--txt2);font-size:12px">(${DB.filter(p=>p.brand===b).length})</span>
                </label>`).join('')}
            </div>
          </div>

          <div class="fg open">
            <div class="fg-t" onclick="this.parentElement.classList.toggle('open')">Ár ▾</div>
            <div class="fg-body">
              ${[5000,10000,20000,50000].map(v=>`
                <label class="fo">
                  <input type="radio" name="price" ${state.filters.priceMax===v?'checked':''} onchange="state.filters.priceMax=${v};renderCategory()">
                  Max ${fmt(v)}
                </label>`).join('')}
              <label class="fo">
                <input type="radio" name="price" ${!state.filters.priceMax?'checked':''} onchange="state.filters.priceMax=null;renderCategory()">
                Nincs korlát
              </label>
            </div>
          </div>
        </aside>

        <!-- PRODUCT GRID -->
        <div>
          <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:20px;flex-wrap:wrap;gap:12px">
            <div>
              <h1 style="font-size:22px;font-weight:700;color:var(--navy);margin:0 0 4px">${title}</h1>
              <span style="font-size:13px;color:var(--txt2)">${products.length} termék</span>
            </div>
            <div style="display:flex;align-items:center;gap:12px">
              <button class="btn btn-o" style="font-size:13px;padding:8px 14px;display:none" id="filter-mob-btn" onclick="document.getElementById('filter-panel').style.display='block'">⚙ Szűrők</button>
              <select style="padding:8px 12px;border:1px solid var(--bdr);border-radius:8px;font-size:14px;background:#fff" onchange="state.sort=this.value;renderCategory()">
                <option value="pop" ${state.sort==='pop'?'selected':''}>Népszerűség</option>
                <option value="price-asc" ${state.sort==='price-asc'?'selected':''}>Ár: növekvő</option>
                <option value="price-desc" ${state.sort==='price-desc'?'selected':''}>Ár: csökkenő</option>
                <option value="rating" ${state.sort==='rating'?'selected':''}>Értékelés</option>
              </select>
            </div>
          </div>
          ${products.length === 0
            ? `<div style="text-align:center;padding:64px 24px;color:var(--txt2)">
                <div style="font-size:48px;margin-bottom:16px">🔍</div>
                <p style="font-size:16px;font-weight:600;color:var(--navy)">Nem találtunk termékeket</p>
                <p style="font-size:14px">Próbáljon más szűrőkkel keresni</p>
                <button class="btn btn-o" style="margin-top:16px" onclick="clearFilters()">Szűrők törlése</button>
              </div>`
            : `<div class="ppl">${products.map(p=>productCard(p)).join('')}</div>`}
        </div>
      </div>
    </div>`;
}

function toggleBrandFilter(brand) {
  const idx = state.filters.brands.indexOf(brand);
  if(idx >= 0) state.filters.brands.splice(idx,1); else state.filters.brands.push(brand);
  renderCategory();
}
function clearFilters() {
  state.filters = { brands:[], priceMax:null, inStock:false, sub:null };
  renderCategory();
}

// ============================================================
// RENDER PRODUCT PAGE
// ============================================================
function renderProduct() {
  const p = state.product;
  if(!p) { navigate('home'); return; }
  const isWish = state.wishlist.includes(p.id);
  const related = DB.filter(x => x.cat === p.cat && x.id !== p.id).slice(0,4);
  const disc = p.origPrice ? Math.round((1 - p.price/p.origPrice)*100) : 0;

  app().innerHTML = `
    <div class="con" style="padding-top:24px;padding-bottom:48px">
      <div style="font-size:13px;color:var(--txt2);margin-bottom:24px">
        <span onclick="navigate('home')" style="cursor:pointer;color:var(--blue)">Főoldal</span>
        › <span onclick="navigateCat('${p.cat}')" style="cursor:pointer;color:var(--blue)">${p.cat}</span>
        › <span>${p.name.slice(0,40)}</span>
      </div>
      <div class="ppage">
        <div class="pgal">
          <div class="pgal-main" id="pgal-main">${p.img||'📦'}</div>
          <div class="pgal-row">
            ${[p.img||'📦','📦','🏷️','📋'].map((i,idx)=>`<div class="pgal-thumb${idx===0?' active':''}" onclick="document.getElementById('pgal-main').textContent='${i}';this.parentElement.querySelectorAll('.pgal-thumb').forEach(t=>t.classList.remove('active'));this.classList.add('active')">${i}</div>`).join('')}
          </div>
        </div>
        <div class="pinfo">
          <div style="font-size:13px;font-weight:600;color:var(--blue);text-transform:uppercase;letter-spacing:.5px;margin-bottom:8px">${p.brand}</div>
          <h1 style="font-size:clamp(18px,2.5vw,26px);font-weight:700;color:var(--navy);margin:0 0 12px;line-height:1.3">${p.name}</h1>
          <div style="display:flex;align-items:center;gap:12px;margin-bottom:16px">
            <span style="color:#f59e0b;font-size:16px">${stars(p.rating)}</span>
            <span style="font-size:14px;color:var(--txt2)">${p.rating} csillag (${p.reviews} értékelés)</span>
          </div>
          <div style="display:flex;align-items:baseline;gap:12px;margin-bottom:8px">
            <span style="font-size:32px;font-weight:800;color:var(--navy)">${fmt(p.price)}</span>
            ${p.origPrice ? `<span style="font-size:18px;color:var(--txt2);text-decoration:line-through">${fmt(p.origPrice)}</span><span style="background:#fee2e2;color:#dc2626;padding:4px 8px;border-radius:6px;font-size:13px;font-weight:700">-${disc}%</span>` : ''}
          </div>
          <div style="font-size:13px;color:var(--txt2);margin-bottom:20px">SKU: ${p.sku} • ÁFA: 27%</div>
          <div style="padding:12px 16px;border-radius:8px;margin-bottom:20px;font-size:14px;font-weight:600;${p.stock > 20 ? 'background:#dcfce7;color:#16a34a' : p.stock > 0 ? 'background:#fef9c3;color:#ca8a04' : 'background:#fee2e2;color:#dc2626'}">
            ${p.stock > 20 ? `✅ Raktáron (${p.stock} db)` : p.stock > 0 ? `⚠️ Korlátozott készlet (${p.stock} db)` : '❌ Jelenleg nem elérhető'}
          </div>
          <div style="display:flex;align-items:center;gap:12px;margin-bottom:20px">
            <div style="display:flex;align-items:center;border:2px solid var(--bdr);border-radius:8px;overflow:hidden">
              <button onclick="changePageQty(-1)" style="width:40px;height:40px;background:none;border:none;font-size:20px;cursor:pointer">−</button>
              <span id="page-qty" style="min-width:40px;text-align:center;font-weight:700;font-size:16px">1</span>
              <button onclick="changePageQty(1)" style="width:40px;height:40px;background:none;border:none;font-size:20px;cursor:pointer">+</button>
            </div>
            <button class="btn btn-p" style="flex:1;padding:12px" onclick="addToCart(${p.id}, getPageQty())" ${p.stock === 0 ? 'disabled style="opacity:.5"':''}>
              🛒 Kosárba
            </button>
            <button class="pc-wish${isWish?' active':''}" data-id="${p.id}" onclick="toggleWish(${p.id})" style="width:44px;height:44px;border-radius:8px;border:2px solid var(--bdr);background:#fff;font-size:20px;cursor:pointer">♥</button>
          </div>
          <div style="display:grid;grid-template-columns:1fr 1fr;gap:8px;margin-bottom:20px">
            ${[['🚚','Szállítás','1-2 munkanap'],['↩️','Visszaküldés','30 napon belül'],['🏢','Személyes','Átvehető raktárból'],['💳','Fizetés','Kártya, utalás, SZÉP']].map(([i,t,s])=>`
              <div style="display:flex;gap:10px;align-items:flex-start;padding:10px;background:var(--bg);border-radius:8px">
                <span style="font-size:18px">${i}</span>
                <div><div style="font-size:12px;font-weight:600;color:var(--navy)">${t}</div><div style="font-size:11px;color:var(--txt2)">${s}</div></div>
              </div>`).join('')}
          </div>
        </div>
      </div>

      <!-- TABS -->
      <div style="margin-top:40px;border-bottom:2px solid var(--bdr)">
        <div style="display:flex;gap:0">
          ${['Leírás','Specifikációk','Értékelések'].map((tab,i)=>`
            <button onclick="switchPTab(${i})" id="ptab-${i}" class="tab-btn${i===0?' active':''}" style="padding:12px 24px;border:none;background:none;font-weight:600;font-size:15px;cursor:pointer;border-bottom:3px solid ${i===0?'var(--blue)':'transparent'};color:${i===0?'var(--blue)':'var(--txt2)'}">
              ${tab}
            </button>`).join('')}
        </div>
      </div>
      <div id="ptab-content" style="padding:24px 0">
        <div id="ptab-panel-0">${renderProductDesc(p)}</div>
        <div id="ptab-panel-1" style="display:none">${renderProductSpecs(p)}</div>
        <div id="ptab-panel-2" style="display:none">${renderProductReviews(p)}</div>
      </div>

      <!-- RELATED -->
      ${related.length ? `
      <div style="margin-top:48px">
        <h2 style="font-size:20px;font-weight:700;color:var(--navy);margin:0 0 20px">Kapcsolódó termékek</h2>
        <div class="pg4">${related.map(r=>productCard(r)).join('')}</div>
      </div>` : ''}
    </div>`;
}

let pageQty = 1;
function getPageQty() { return pageQty; }
function changePageQty(d) {
  pageQty = Math.max(1, pageQty + d);
  const el = document.getElementById('page-qty');
  if(el) el.textContent = pageQty;
}

function switchPTab(idx) {
  [0,1,2].forEach(i => {
    const panel = document.getElementById(`ptab-panel-${i}`);
    const btn = document.getElementById(`ptab-${i}`);
    if(panel) panel.style.display = i===idx ? 'block' : 'none';
    if(btn) {
      btn.style.borderBottomColor = i===idx ? 'var(--blue)' : 'transparent';
      btn.style.color = i===idx ? 'var(--blue)' : 'var(--txt2)';
      btn.classList.toggle('active', i===idx);
    }
  });
}

function renderProductDesc(p) {
  return `<p style="font-size:15px;line-height:1.7;color:var(--txt)">${p.desc}</p>
  ${p.compat ? `<div style="margin-top:16px"><h4 style="font-weight:700;color:var(--navy);margin:0 0 8px">Kompatibilis nyomtatókkal:</h4>
  <ul style="padding-left:20px;font-size:14px;color:var(--txt);">${p.compat.map(c=>`<li>${c}</li>`).join('')}</ul></div>` : ''}`;
}

function renderProductSpecs(p) {
  if(!p.specs) return '<p style="color:var(--txt2)">Nincs elérhető specifikáció.</p>';
  return `<table style="width:100%;border-collapse:collapse;font-size:14px">
    ${Object.entries(p.specs).map(([k,v],i)=>`
      <tr style="background:${i%2===0?'var(--bg)':'#fff'}">
        <td style="padding:10px 16px;font-weight:600;color:var(--navy);width:35%">${k}</td>
        <td style="padding:10px 16px;color:var(--txt)">${v}</td>
      </tr>`).join('')}
  </table>`;
}

function renderProductReviews(p) {
  const mockReviews = [
    {name:'Nagy István',rating:5,date:'2024-03-15',text:'Kiváló termék, pontosan olyan, mint leírták. Gyors szállítás!'},
    {name:'Kovács Mária',rating:4,date:'2024-02-28',text:'Nagyon elégedett vagyok a termékkel. Már másodszor rendelek.'},
    {name:'Tóth Péter',rating:5,date:'2024-02-10',text:'Remek minőség, megbízható webshop. Ajánlom mindenkinek.'},
  ];
  return `
    <div style="display:flex;align-items:center;gap:32px;margin-bottom:32px;padding:24px;background:var(--bg);border-radius:12px">
      <div style="text-align:center">
        <div style="font-size:48px;font-weight:800;color:var(--navy)">${p.rating}</div>
        <div style="color:#f59e0b;font-size:20px">${stars(p.rating)}</div>
        <div style="font-size:13px;color:var(--txt2)">${p.reviews} értékelés</div>
      </div>
      <div style="flex:1">
        ${[5,4,3,2,1].map(n=>{
          const pct = n===5?70:n===4?20:n===3?6:n===2?2:2;
          return `<div style="display:flex;align-items:center;gap:8px;margin-bottom:4px">
            <span style="font-size:12px;width:12px;text-align:right">${n}</span>
            <span style="color:#f59e0b;font-size:12px">★</span>
            <div style="flex:1;height:8px;background:#e2e8f0;border-radius:4px;overflow:hidden">
              <div style="width:${pct}%;height:100%;background:#f59e0b;border-radius:4px"></div>
            </div>
            <span style="font-size:12px;color:var(--txt2);width:30px">${pct}%</span>
          </div>`;
        }).join('')}
      </div>
    </div>
    ${mockReviews.map(r=>`
      <div style="border-bottom:1px solid var(--bdr);padding:20px 0">
        <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:8px">
          <div style="display:flex;align-items:center;gap:10px">
            <div style="width:36px;height:36px;border-radius:50%;background:var(--navy);color:#fff;display:flex;align-items:center;justify-content:center;font-weight:700;font-size:14px">${r.name[0]}</div>
            <div><div style="font-weight:600;font-size:14px;color:var(--navy)">${r.name}</div>
            <div style="font-size:12px;color:var(--txt2)">${r.date}</div></div>
          </div>
          <span style="color:#f59e0b">${stars(r.rating)}</span>
        </div>
        <p style="font-size:14px;color:var(--txt);margin:0">${r.text}</p>
      </div>`).join('')}`;
}

// ============================================================
// RENDER WISHLIST
// ============================================================
function renderWishlist() {
  const items = DB.filter(p => state.wishlist.includes(p.id));
  app().innerHTML = `
    <div class="con" style="padding-top:32px;padding-bottom:48px">
      <h1 style="font-size:24px;font-weight:700;color:var(--navy);margin:0 0 24px">❤️ Kívánságlista</h1>
      ${items.length === 0
        ? `<div style="text-align:center;padding:64px 24px;color:var(--txt2)">
            <div style="font-size:48px;margin-bottom:16px">💝</div>
            <p style="font-size:16px;font-weight:600;color:var(--navy)">Üres a kívánságlista</p>
            <p style="font-size:14px">Adjon termékeket a szívecske ikonra kattintva!</p>
            <button class="btn btn-p" style="margin-top:20px" onclick="navigate('home')">Böngésszen</button>
          </div>`
        : `<div class="pg4">${items.map(p => productCard(p)).join('')}</div>`}
    </div>`;
}

// ============================================================
// RENDER CHECKOUT
// ============================================================
function renderCheckout() {
  if(state.cart.length === 0) { navigate('home'); showToast('A kosár üres!','error'); return; }
  const items = getCartItems();
  const total = getCartTotal();
  const shipping = total >= 25000 ? 0 : 1290;
  const step = state.checkoutStep;

  const steps = ['Adatok','Szállítás','Fizetés'];
  app().innerHTML = `
    <div class="con" style="padding-top:32px;padding-bottom:48px">
      <h1 style="font-size:24px;font-weight:700;color:var(--navy);margin:0 0 28px">Megrendelés</h1>
      <div class="chk-prog">
        ${steps.map((s,i)=>`
          <div class="chk-step${i+1<=step?' done':''}${i+1===step?' active':''}">
            <div style="width:32px;height:32px;border-radius:50%;display:flex;align-items:center;justify-content:center;font-weight:700;font-size:14px;background:${i+1<=step?'var(--blue)':'var(--bdr)'};color:${i+1<=step?'#fff':'var(--txt2)'}">
              ${i+1 < step ? '✓' : i+1}
            </div>
            <span style="font-size:13px;font-weight:${i+1===step?'700':'400'};color:${i+1<=step?'var(--navy)':'var(--txt2)'}">${s}</span>
          </div>
          ${i<2?'<div class="chk-sep"></div>':''}`).join('')}
      </div>
      <div style="display:grid;grid-template-columns:1fr 360px;gap:24px;align-items:start">
        <div>
          ${step===1 ? renderCheckoutStep1() : step===2 ? renderCheckoutStep2() : renderCheckoutStep3()}
        </div>
        <div class="chk-card">
          <h3 style="font-size:16px;font-weight:700;color:var(--navy);margin:0 0 16px">Rendelés összegzése</h3>
          ${items.map(i=>`
            <div style="display:flex;justify-content:space-between;font-size:13px;margin-bottom:8px;align-items:flex-start;gap:8px">
              <span style="color:var(--txt);flex:1">${i.name.slice(0,40)} <span style="color:var(--txt2)">×${i.qty}</span></span>
              <span style="font-weight:600;white-space:nowrap">${fmt(i.price*i.qty)}</span>
            </div>`).join('')}
          <div style="border-top:1px solid var(--bdr);margin:12px 0;padding-top:12px">
            <div style="display:flex;justify-content:space-between;font-size:14px;margin-bottom:6px;color:var(--txt2)"><span>Részösszeg</span><span>${fmt(total)}</span></div>
            <div style="display:flex;justify-content:space-between;font-size:14px;margin-bottom:16px;color:var(--txt2)"><span>Szállítás</span><span>${shipping===0?'<span style="color:var(--teal)">Ingyenes</span>':fmt(shipping)}</span></div>
            <div style="display:flex;justify-content:space-between;font-size:18px;font-weight:800;color:var(--navy)"><span>Összesen</span><span>${fmt(total+shipping)}</span></div>
          </div>
          <div style="font-size:12px;color:var(--txt2);margin-top:12px">Az ár tartalmazza a 27% ÁFÁ-t</div>
        </div>
      </div>
    </div>`;
}

function renderCheckoutStep1() {
  return `<div class="chk-card">
    <h2 style="font-size:18px;font-weight:700;color:var(--navy);margin:0 0 20px">Személyes adatok</h2>
    <div style="display:grid;grid-template-columns:1fr 1fr;gap:16px">
      <div class="form-g">
        <label class="form-l">Vezetéknév *</label>
        <input class="form-i" id="chk-lname" type="text" placeholder="Kovács" value="${state.orderData?.lname||''}">
      </div>
      <div class="form-g">
        <label class="form-l">Keresztnév *</label>
        <input class="form-i" id="chk-fname" type="text" placeholder="János" value="${state.orderData?.fname||''}">
      </div>
    </div>
    <div class="form-g">
      <label class="form-l">E-mail cím *</label>
      <input class="form-i" id="chk-email" type="email" placeholder="pelda@email.hu" value="${state.orderData?.email||''}">
    </div>
    <div class="form-g">
      <label class="form-l">Telefonszám *</label>
      <input class="form-i" id="chk-phone" type="tel" placeholder="+36 30 123 4567" value="${state.orderData?.phone||''}">
    </div>
    <div style="background:#eff6ff;border-radius:8px;padding:14px;margin:16px 0;font-size:13px;color:#1e40af">
      <strong>B2B rendelés?</strong> Adja meg cégének adatait a számlázáshoz:
    </div>
    <div class="form-g">
      <label class="form-l">Cégnév (opcionális)</label>
      <input class="form-i" id="chk-company" type="text" placeholder="Minta Kft." value="${state.orderData?.company||''}">
    </div>
    <div class="form-g">
      <label class="form-l">Adószám (opcionális)</label>
      <input class="form-i" id="chk-vat" type="text" placeholder="12345678-2-41" value="${state.orderData?.vat||''}">
    </div>
    <button class="btn btn-p" style="width:100%;margin-top:8px" onclick="goCheckoutStep2()">Tovább: Szállítás →</button>
    <button class="btn btn-o" style="width:100%;margin-top:8px" onclick="closeCart();navigate('home')">← Vissza a vásárláshoz</button>
  </div>`;
}

function renderCheckoutStep2() {
  return `<div class="chk-card">
    <h2 style="font-size:18px;font-weight:700;color:var(--navy);margin:0 0 20px">Szállítási adatok</h2>
    <div class="form-g">
      <label class="form-l">Szállítási cím *</label>
      <input class="form-i" id="chk-addr" type="text" placeholder="Budapest, Váci út 1." value="${state.orderData?.addr||''}">
    </div>
    <div style="display:grid;grid-template-columns:120px 1fr;gap:16px">
      <div class="form-g">
        <label class="form-l">Irányítószám *</label>
        <input class="form-i" id="chk-zip" type="text" placeholder="1052" value="${state.orderData?.zip||''}">
      </div>
      <div class="form-g">
        <label class="form-l">Város *</label>
        <input class="form-i" id="chk-city" type="text" placeholder="Budapest" value="${state.orderData?.city||''}">
      </div>
    </div>
    <h3 style="font-size:15px;font-weight:700;color:var(--navy);margin:20px 0 12px">Szállítási mód</h3>
    <div id="del-opts">
      ${[
        {id:'gls',name:'GLS futárszolgálat',sub:'1-2 munkanap',price:1290,icon:'🚚'},
        {id:'dpd',name:'DPD házhozszállítás',sub:'1-2 munkanap',price:1390,icon:'📦'},
        {id:'post',name:'Magyar Posta',sub:'2-3 munkanap',price:990,icon:'📮'},
        {id:'pickup',name:'Személyes átvétel',sub:'Budapest, Vörösmarty tér 1.',price:0,icon:'🏢'},
      ].map(d=>`
        <label class="del-opt${state.orderData?.delivery===d.id?' selected':''}">
          <input type="radio" name="delivery" value="${d.id}" ${state.orderData?.delivery===d.id?'checked':''} onchange="state.orderData=state.orderData||{};state.orderData.delivery='${d.id}';document.querySelectorAll('.del-opt').forEach(el=>el.classList.remove('selected'));this.closest('.del-opt').classList.add('selected')">
          <span style="font-size:24px">${d.icon}</span>
          <div style="flex:1"><div style="font-weight:600;font-size:14px">${d.name}</div><div style="font-size:12px;color:var(--txt2)">${d.sub}</div></div>
          <span style="font-weight:700;color:var(--navy)">${d.price===0?'Ingyenes':fmt(d.price)}</span>
        </label>`).join('')}
    </div>
    <button class="btn btn-p" style="width:100%;margin-top:20px" onclick="goCheckoutStep3()">Tovább: Fizetés →</button>
    <button class="btn btn-o" style="width:100%;margin-top:8px" onclick="state.checkoutStep=1;renderCheckout()">← Vissza</button>
  </div>`;
}

function renderCheckoutStep3() {
  return `<div class="chk-card">
    <h2 style="font-size:18px;font-weight:700;color:var(--navy);margin:0 0 20px">Fizetési mód</h2>
    <div id="pay-opts">
      ${[
        {id:'card',name:'Bankkártya (OTP SimplePay)',sub:'Biztonságos online fizetés',icon:'💳'},
        {id:'transfer',name:'Banki átutalás',sub:'Fizetési határidő: 5 munkanap',icon:'🏦'},
        {id:'szep',name:'SZÉP Kártya',sub:'OTP, K&H, MKB elfogadott',icon:'🎴'},
        {id:'cod',name:'Utánvét',sub:'Fizetés átvételkor (+390 Ft díj)',icon:'📬'},
      ].map(d=>`
        <label class="pay-opt${state.orderData?.payment===d.id?' selected':''}">
          <input type="radio" name="payment" value="${d.id}" ${state.orderData?.payment===d.id?'checked':''} onchange="state.orderData=state.orderData||{};state.orderData.payment='${d.id}';document.querySelectorAll('.pay-opt').forEach(el=>el.classList.remove('selected'));this.closest('.pay-opt').classList.add('selected')">
          <span style="font-size:24px">${d.icon}</span>
          <div><div style="font-weight:600;font-size:14px">${d.name}</div><div style="font-size:12px;color:var(--txt2)">${d.sub}</div></div>
        </label>`).join('')}
    </div>
    <div style="background:var(--bg);border-radius:8px;padding:16px;margin:20px 0">
      <label style="display:flex;align-items:flex-start;gap:10px;cursor:pointer;font-size:13px;color:var(--txt)">
        <input type="checkbox" id="chk-tos" style="margin-top:2px;flex-shrink:0">
        <span>Elfogadom az <a href="#" style="color:var(--blue)">Általános Szerződési Feltételeket</a> és az <a href="#" style="color:var(--blue)">Adatvédelmi Nyilatkozatot</a>.</span>
      </label>
    </div>
    <button class="btn btn-p" style="width:100%;font-size:16px;padding:14px" onclick="placeOrder()">🛒 Megrendelés elküldése</button>
    <button class="btn btn-o" style="width:100%;margin-top:8px" onclick="state.checkoutStep=2;renderCheckout()">← Vissza</button>
  </div>`;
}

function goCheckoutStep2() {
  const lname = document.getElementById('chk-lname')?.value.trim();
  const fname = document.getElementById('chk-fname')?.value.trim();
  const email = document.getElementById('chk-email')?.value.trim();
  const phone = document.getElementById('chk-phone')?.value.trim();
  if(!lname || !fname) { showToast('Kérem adja meg a nevét!','error'); return; }
  if(!email || !email.includes('@')) { showToast('Érvénytelen e-mail cím!','error'); return; }
  if(!phone) { showToast('Kérem adja meg a telefonszámát!','error'); return; }
  state.orderData = { ...state.orderData, lname, fname, email, phone,
    company: document.getElementById('chk-company')?.value,
    vat: document.getElementById('chk-vat')?.value };
  state.checkoutStep = 2;
  renderCheckout();
}

function goCheckoutStep3() {
  const addr = document.getElementById('chk-addr')?.value.trim();
  const zip = document.getElementById('chk-zip')?.value.trim();
  const city = document.getElementById('chk-city')?.value.trim();
  if(!addr || !zip || !city) { showToast('Kérem töltse ki a szállítási adatokat!','error'); return; }
  if(!state.orderData?.delivery) { showToast('Válasszon szállítási módot!','error'); return; }
  state.orderData = { ...state.orderData, addr, zip, city };
  state.checkoutStep = 3;
  renderCheckout();
}

function placeOrder() {
  const tos = document.getElementById('chk-tos')?.checked;
  if(!tos) { showToast('Kérem fogadja el az ÁSZF-et!','error'); return; }
  if(!state.orderData?.payment) { showToast('Válasszon fizetési módot!','error'); return; }
  state.orderData.orderId = uid();
  state.orderData.items = getCartItems();
  state.orderData.total = getCartTotal();
  state.cart = [];
  updateBadges();
  navigate('confirmation');
}

// ============================================================
// RENDER CONFIRMATION
// ============================================================
function renderConfirmation() {
  const d = state.orderData;
  if(!d) { navigate('home'); return; }
  app().innerHTML = `
    <div class="con" style="padding-top:48px;padding-bottom:64px;max-width:700px;margin:0 auto">
      <div class="oc">
        <div class="oc-ico">✅</div>
        <h1 style="font-size:28px;font-weight:800;color:var(--navy);margin:0 0 8px">Köszönjük rendelését!</h1>
        <p style="font-size:16px;color:var(--txt2);margin:0 0 24px">Visszaigazolást küldtünk az <strong>${d.email}</strong> e-mail címre.</p>
        <div class="oc-num">Rendelésszám: <strong>${d.orderId}</strong></div>
        <div class="oc-inf">
          <div>
            <div style="font-size:13px;font-weight:700;color:var(--navy);text-transform:uppercase;letter-spacing:.5px;margin-bottom:8px">Megrendelő</div>
            <div style="font-size:14px;color:var(--txt);line-height:2">${d.lname} ${d.fname}<br>${d.email}<br>${d.phone}${d.company?`<br>${d.company}`:''}</div>
          </div>
          <div>
            <div style="font-size:13px;font-weight:700;color:var(--navy);text-transform:uppercase;letter-spacing:.5px;margin-bottom:8px">Szállítás</div>
            <div style="font-size:14px;color:var(--txt);line-height:2">${d.zip} ${d.city}<br>${d.addr}<br><span style="color:var(--teal);font-weight:600">Várható szállítás: 1-2 munkanap</span></div>
          </div>
        </div>
        <div style="border-top:1px solid var(--bdr);padding-top:20px;margin-top:8px">
          <div style="font-size:13px;font-weight:700;color:var(--navy);text-transform:uppercase;letter-spacing:.5px;margin-bottom:12px">Rendelt termékek</div>
          ${(d.items||[]).map(i=>`
            <div style="display:flex;justify-content:space-between;font-size:14px;padding:8px 0;border-bottom:1px solid var(--bdr)">
              <span>${i.name.slice(0,50)} <span style="color:var(--txt2)">×${i.qty}</span></span>
              <span style="font-weight:600">${fmt(i.price*i.qty)}</span>
            </div>`).join('')}
          <div style="display:flex;justify-content:space-between;font-size:18px;font-weight:800;color:var(--navy);padding-top:12px">
            <span>Összesen</span><span>${fmt(d.total)}</span>
          </div>
        </div>
        <div style="display:flex;gap:12px;margin-top:24px;flex-wrap:wrap">
          <button class="btn btn-p" onclick="navigate('home')">Folytatja a vásárlást</button>
          <button class="btn btn-o" onclick="showToast('PDF számla letöltve!')">📄 Számla letöltése</button>
        </div>
      </div>
    </div>`;
}

// ============================================================
// PRINTER COMPAT
// ============================================================
const printerData = {
  'HP': {
    'HP DeskJet 2620': ['HP 304 fekete tintapatron (N9K06AE)', 'HP 304 háromszínű tintapatron (N9K05AE)'],
    'HP DeskJet 3720': ['HP 304 fekete tintapatron (N9K06AE)', 'HP 304 háromszínű tintapatron (N9K05AE)'],
    'HP LaserJet P2035': ['HP CE505A fekete toner (LaserJet P2035)'],
    'HP LaserJet P2055': ['HP CE505A fekete toner (LaserJet P2035)'],
  },
  'Canon': {
    'Canon PIXMA MG2550': ['Canon PG-545 fekete + CL-546 színes patron csomag'],
    'Canon PIXMA MG2950': ['Canon PG-545 fekete + CL-546 színes patron csomag'],
    'Canon PIXMA MX495': ['Canon PG-545 fekete + CL-546 színes patron csomag'],
  },
  'Brother': {
    'Brother HL-L2310D': ['Brother TN-2420 fekete toner'],
    'Brother HL-L2350DW': ['Brother TN-2420 fekete toner'],
    'Brother MFC-L2710DW': ['Brother TN-2420 fekete toner'],
  },
  'Samsung': {
    'Samsung ML-2160': ['Samsung MLT-D101S fekete toner'],
    'Samsung ML-2165': ['Samsung MLT-D101S fekete toner'],
    'Samsung SCX-3400': ['Samsung MLT-D101S fekete toner'],
  },
  'Epson': {
    'Epson Stylus SX230': ['Epson T1291 fekete tintapatron'],
    'Epson Stylus Office BX305F': ['Epson T1291 fekete tintapatron'],
  }
};

function renderPrinterCompat() {
  const brands = Object.keys(printerData);
  const models = state.printerBrand ? Object.keys(printerData[state.printerBrand]||{}) : [];
  const results = state.printerBrand && state.printerModel
    ? printerData[state.printerBrand][state.printerModel] || []
    : [];

  app().innerHTML = `
    <div class="con" style="padding-top:32px;padding-bottom:64px;max-width:700px;margin:0 auto">
      <h1 style="font-size:26px;font-weight:800;color:var(--navy);margin:0 0 8px">🖨️ Nyomtatókeresés</h1>
      <p style="color:var(--txt2);font-size:15px;margin:0 0 32px">Keresse meg a nyomtatójához megfelelő kellékanyagot!</p>
      <div style="background:#fff;border:1px solid var(--bdr);border-radius:16px;padding:28px;margin-bottom:32px">
        <div style="display:grid;grid-template-columns:1fr 1fr 1fr;gap:16px;align-items:end">
          <div>
            <label class="form-l">1. Nyomtató márka</label>
            <select class="form-i" onchange="state.printerBrand=this.value;state.printerModel=null;renderPrinterCompat()">
              <option value="">Válasszon…</option>
              ${brands.map(b=>`<option value="${b}" ${state.printerBrand===b?'selected':''}>${b}</option>`).join('')}
            </select>
          </div>
          <div>
            <label class="form-l">2. Nyomtató modell</label>
            <select class="form-i" onchange="state.printerModel=this.value;renderPrinterCompat()" ${!state.printerBrand?'disabled':''}>
              <option value="">Válasszon…</option>
              ${models.map(m=>`<option value="${m}" ${state.printerModel===m?'selected':''}>${m}</option>`).join('')}
            </select>
          </div>
          <div>
            <button class="btn btn-o" onclick="state.printerBrand=null;state.printerModel=null;renderPrinterCompat()">Törlés</button>
          </div>
        </div>
      </div>
      ${results.length > 0 ? `
        <h2 style="font-size:18px;font-weight:700;color:var(--navy);margin:0 0 16px">Kompatibilis kellékanyagok (${results.length})</h2>
        <div class="pg3">
          ${DB.filter(p => results.includes(p.name)).map(p => productCard(p)).join('')}
        </div>` :
        state.printerModel ? `<div style="text-align:center;padding:40px;color:var(--txt2)"><p>Nem találtunk kompatibilis terméket ebből a modellből.</p></div>` :
        `<div style="text-align:center;padding:40px;color:var(--txt2)">
          <div style="font-size:48px;margin-bottom:12px">🖨️</div>
          <p style="font-size:15px">Válassza ki a nyomtató márkáját és modelljét a kompatibilis kellékanyagok megjelenítéséhez.</p>
        </div>`}
    </div>`;
}

// ============================================================
// MAIN RENDER
// ============================================================
function render() {
  pageQty = 1;
  switch(state.view) {
    case 'home': renderHome(); break;
    case 'category': renderCategory(); break;
    case 'product': renderProduct(); break;
    case 'checkout': renderCheckout(); break;
    case 'confirmation': renderConfirmation(); break;
    case 'wishlist': renderWishlist(); break;
    case 'printer-compat': renderPrinterCompat(); break;
    default: renderHome();
  }
  // Sticky header update
  const hdr = document.getElementById('hdr');
  if(hdr) hdr.classList.toggle('scrolled', window.scrollY > 10);
}

// ============================================================
// INIT
// ============================================================
window.addEventListener('scroll', () => {
  const hdr = document.getElementById('hdr');
  if(hdr) hdr.classList.toggle('scrolled', window.scrollY > 10);
}, { passive: true });

document.addEventListener('DOMContentLoaded', () => {
  render();
  initSearch();
  updateBadges();
  renderCart();
});

// Initial render (in case DOMContentLoaded already fired)
if(document.readyState !== 'loading') {
  render();
  initSearch();
  updateBadges();
}
