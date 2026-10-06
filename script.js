// ============================================================
// PRODUCT DATABASE (demo — élesben a Corwell feedből)
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

// ============================================================
// FODICO — app
// A termékadatok (DB) demo adatok; élesben a Corwell feedből jönnek.
// Az értékelés-mezőket (rating/reviews) szándékosan nem jelenítjük meg.
// ============================================================

// --- Demo beállítások (HELYŐRZŐK — a Fodicóval egyeztetendő) ---
const FREE_SHIP = 25000;           // ingyenes szállítás határa (helyőrző)
const SHIP_OPTS = [
  {id:'courier', name:'Házhozszállítás futárral', sub:'Szállítási partner: egyeztetés alatt', price:1490},
  {id:'locker',  name:'Csomagpont / automata',     sub:'Szállítási partner: egyeztetés alatt', price:990},
];
const PAY_OPTS = [
  {id:'card', name:'Bankkártya — SimplePay', sub:'Biztonságos online fizetés a SimplePay oldalán'},
  {id:'cod',  name:'Utánvét', sub:'Fizetés átvételkor'},
];

// --- Icons (simple line glyphs) ---
const I = {
  paper:'<path d="M7 3.5h7l4 4V20a.5.5 0 0 1-.5.5h-10A.5.5 0 0 1 7 20V3.5Z"/><path d="M14 3.5V8h4"/><path d="M9.8 12h5.4M9.8 15h5.4M9.8 18h3"/>',
  printer:'<path d="M7 8V3.8h10V8"/><rect x="3.5" y="8" width="17" height="8.5" rx="2.2"/><path d="M7 14h10v6.2H7z"/><circle cx="17" cy="11" r=".6" fill="currentColor"/>',
  pen:'<path d="M15.5 4.5l4 4L9 19l-5 1 1-5L15.5 4.5Z"/><path d="M13.5 6.5l4 4"/>',
  folder:'<path d="M3.5 7.5a2 2 0 0 1 2-2h4l2 2.2h7a2 2 0 0 1 2 2V18a2 2 0 0 1-2 2h-13a2 2 0 0 1-2-2V7.5Z"/><path d="M3.5 10.5h17"/>',
  clip:'<path d="M8 12.5l6.3-6.3a3 3 0 0 1 4.2 4.2l-7.6 7.6a4.5 4.5 0 0 1-6.4-6.4L12 4.1"/>',
  board:'<rect x="3.5" y="4" width="17" height="11.5" rx="1.6"/><path d="M12 15.5V20M8.5 20.5l3.5-5 3.5 5"/><path d="M7.5 11.5l3-3 2.5 2 3.5-3.5"/>',
  chair:'<path d="M8 3.8h8a1.5 1.5 0 0 1 1.5 1.6L17 12H7l-.5-6.6A1.5 1.5 0 0 1 8 3.8Z"/><path d="M5.5 12h13v3h-13z"/><path d="M12 15v4.5M8 20.5h8"/>',
  tag:'<path d="M3.8 12.6V4.3a.5.5 0 0 1 .5-.5h8.3l7.7 7.7a1.5 1.5 0 0 1 0 2.1l-6.2 6.2a1.5 1.5 0 0 1-2.1 0L3.8 12.6Z"/><circle cx="8.3" cy="8.3" r="1.6"/>',
  search:'<circle cx="11" cy="11" r="7"/><path d="m20 20-3.6-3.6"/>',
  bag:'<path d="M5 8h14l-1.2 11.2a2 2 0 0 1-2 1.8H8.2a2 2 0 0 1-2-1.8L5 8Z"/><path d="M9 8V6.5a3 3 0 0 1 6 0V8"/>',
  heart:'<path d="M12 20s-7.5-4.6-7.5-10.2A4.3 4.3 0 0 1 12 7.3a4.3 4.3 0 0 1 7.5 2.5C19.5 15.4 12 20 12 20Z"/>',
  arrow:'<path d="M5 12h14M13 6l6 6-6 6"/>',
  chev:'<path d="m6 9 6 6 6-6"/>',
  plus:'<path d="M12 5v14M5 12h14"/>',
  check:'<path d="M5 12.5l4.2 4.2L19 7"/>',
  card:'<rect x="3" y="5.5" width="18" height="13" rx="2.4"/><path d="M3 10h18M7 15h4"/>',
  receipt:'<path d="M6 3.5h12v17l-2-1.4-2 1.4-2-1.4-2 1.4-2-1.4-2 1.4v-17Z"/><path d="M9 8.5h6M9 12h6M9 15.5h3.5"/>',
  truck:'<path d="M3.5 6.5h10v9h-10z"/><path d="M13.5 9.5h4l3 3v3h-7"/><circle cx="7.5" cy="17.5" r="1.8"/><circle cx="17" cy="17.5" r="1.8"/>',
  filter:'<path d="M4 6h16M7 12h10M10 18h4"/>',
  home:'<path d="M4 11l8-6.5 8 6.5V20h-5.5v-5h-5v5H4v-9Z"/>',
};
const ic = (n, s=24, w=1.8) => `<svg width="${s}" height="${s}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="${w}" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${I[n]||''}</svg>`;

// --- Categories ---
const CATS = [
  {key:'Papír',          name:'Papír',          sub:'Másoló- és fotópapír', ic:'paper'},
  {key:'Nyomtatószerek', name:'Nyomtatókellék', sub:'Patronok, tonerek',    ic:'printer'},
  {key:'Írószerek',      name:'Írószerek',      sub:'Tollak, ceruzák, filcek', ic:'pen'},
  {key:'Irattartók',     name:'Irattartók',     sub:'Mappák, dobozok',      ic:'folder'},
  {key:'Irodaszerek',    name:'Irodaszerek',    sub:'Ragasztó, tűző, notesz', ic:'clip'},
  {key:'Tárgyalóterem',  name:'Tárgyaló',       sub:'Táblák, flipchart',     ic:'board'},
  {key:'Irodabútor',     name:'Irodabútor',     sub:'Székek, tartók',        ic:'chair'},
  {key:'Akciók',         name:'Akciók',         sub:'Most olcsóbban',        ic:'tag', sale:true},
];
const catOf = p => CATS.find(c=>c.key===p.cat) || CATS[4];
const inCat = (p, key) => key==='Akciók' ? (p.cat==='Akciók' || !!p.origPrice) : (p.cat===key || p.sub===key);

// --- State ---
const state = {
  view:'home', catFilter:null, product:null, cart:[], wishlist:[], search:'',
  filters:{ brands:[], priceMax:null, inStock:false, sub:null }, sort:'pop',
  checkoutStep:1, orderData:null, printerBrand:null, printerModel:null,
};

// --- Utils ---
const $ = (s, r=document) => r.querySelector(s);
const $$ = (s, r=document) => [...r.querySelectorAll(s)];
const app = () => $('#app');
const fmt = n => n.toLocaleString('hu-HU').replace(/ /g,' ') + ' Ft';
const esc = s => String(s).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const uid = () => 'FO-' + Date.now().toString(36).toUpperCase().slice(-6);
const RM = (() => { try { return matchMedia('(prefers-reduced-motion: reduce)').matches; } catch(e){ return false; } })();
const thumb = (p, cls='') => `<div class="th ${cls}">${ic(catOf(p).ic, 24, 1.5)}</div>`;

function toast(msg, opts={}) {
  const t = $('#toast');
  t.className = opts.err ? 'err' : '';
  t.innerHTML = `<span>${esc(msg)}</span>${opts.action ? `<button type="button">${esc(opts.action)}</button>` : ''}`;
  if (opts.action) t.querySelector('button').onclick = () => { t.classList.remove('on'); opts.onAction && opts.onAction(); };
  requestAnimationFrame(() => t.classList.add('on'));
  clearTimeout(t._t); t._t = setTimeout(() => t.classList.remove('on'), opts.ms || 3000);
}

// ============================================================
// NAV
// ============================================================
function navigate(view, extra) {
  state.view = view;
  if (extra) Object.assign(state, extra);
  closeAll();
  render(true);
  window.scrollTo(0, 0);
}
function navigateCat(cat) {
  state.catFilter = cat; state.search = '';
  state.filters = { brands:[], priceMax:null, inStock:false, sub:null };
  state.sort = 'pop';
  navigate('category');
}
function doSearch(q) {
  q = (q||'').trim(); if (!q) return;
  state.catFilter = null; state.search = q;
  state.filters = { brands:[], priceMax:null, inStock:false, sub:null };
  navigate('category');
}
function viewProduct(id) { state.product = DB.find(x=>x.id===id); navigate('product'); }

function renderNav() {
  $('#cnav').innerHTML = CATS.map(c => `<a href="#" class="${c.sale?'sale':''}${state.view==='category'&&state.catFilter===c.key?' on':''}" onclick="event.preventDefault();navigateCat('${c.key}')">${c.sale?'<span class="hlmark">Akciók</span>':c.name}</a>`).join('')
    + `<a href="#" class="${state.view==='printer'?'on':''}" onclick="event.preventDefault();navigate('printer')">${ic('printer',17,2)} Patronkereső</a>`;
  $('#ft-cats').innerHTML = CATS.map(c => `<a href="#" onclick="event.preventDefault();navigateCat('${c.key}')">${c.name}</a>`).join('');
  $('#mnav-list').innerHTML =
    `<a href="#" onclick="event.preventDefault();navigate('home')"><span class="cat-ic">${ic('home',20,1.8)}</span>Főoldal</a>` +
    CATS.map(c => `<a href="#" onclick="event.preventDefault();navigateCat('${c.key}')"><span class="cat-ic">${ic(c.ic,20,1.8)}</span>${c.name}</a>`).join('') +
    `<hr><a href="#" onclick="event.preventDefault();navigate('printer')"><span class="cat-ic">${ic('printer',20,1.8)}</span>Patronkereső</a>` +
    `<a href="#" onclick="event.preventDefault();navigate('wishlist')"><span class="cat-ic">${ic('heart',20,1.8)}</span>Kívánságlista</a>`;
}

// ============================================================
// CART
// ============================================================
const cartItems = () => state.cart.map(c => ({...DB.find(x=>x.id===c.id), qty:c.qty})).filter(x=>x.id);
const cartTotal = () => cartItems().reduce((s,i)=>s+i.price*i.qty, 0);
const cartCount = () => state.cart.reduce((s,c)=>s+c.qty, 0);

function addToCart(id, qty=1, srcEl) {
  const p = DB.find(x=>x.id===id); if (!p) return;
  const ex = state.cart.find(x=>x.id===id);
  if (ex) ex.qty += qty; else state.cart.push({id, qty});
  const done = () => {
    updateBadges(true); renderCart();
    toast(`Kosárba került: ${p.name}`, {action:'Kosár megnyitása', onAction:openCart});
  };
  if (srcEl && !RM) flyToCart(srcEl, catOf(p).ic, done); else done();
}
function setQty(id, d) {
  const it = state.cart.find(x=>x.id===id); if (!it) return;
  it.qty = Math.max(1, it.qty + d); updateBadges(); renderCart();
}
function removeFromCart(id) { state.cart = state.cart.filter(x=>x.id!==id); updateBadges(); renderCart(); }

function updateBadges(bump) {
  const cc = cartCount(), wc = state.wishlist.length;
  const cb = $('#cart-cnt'), wb = $('#wl-cnt');
  cb.textContent = cc; cb.style.display = cc ? 'flex' : 'none';
  wb.textContent = wc; wb.style.display = wc ? 'flex' : 'none';
  $('#cart-sum').textContent = cc ? fmt(cartTotal()) : 'Kosár';
  if (bump) {
    [cb, $('#cart-btn')].forEach(el => { el.classList.remove('pop','bump'); void el.offsetWidth; });
    cb.classList.add('pop'); $('#cart-btn').classList.add('bump');
  }
}

function flyToCart(srcEl, icon, done) {
  const a = srcEl.getBoundingClientRect(), target = $('#cart-btn').getBoundingClientRect();
  const x0 = a.left + a.width/2 - 27, y0 = a.top + a.height/2 - 27;
  const x1 = target.left + 24 - 27, y1 = target.top + target.height/2 - 27;
  const cx = x0 + (x1 - x0) * .18, cy = Math.max(12, Math.min(y0, y1) - 60);
  const el = document.createElement('div');
  el.className = 'fly';
  el.innerHTML = `<div class="fly-in">${ic(icon, 26, 2)}</div>`;
  document.body.appendChild(el);
  const frames = [];
  for (let i=0;i<=16;i++){
    const t=i/16, u=1-t;
    const x=u*u*x0+2*u*t*cx+t*t*x1, y=u*u*y0+2*u*t*cy+t*t*y1;
    const s = i===0 ? .4 : 1 - t*.62;
    frames.push({transform:`translate(${x}px,${y}px) scale(${s})`, opacity: t>.92 ? 0 : 1});
  }
  const anim = el.animate(frames, {duration:780, easing:'cubic-bezier(.45,0,.2,1)', fill:'forwards'});
  anim.onfinish = () => { el.remove(); done(); };
}

function renderCart() {
  const items = cartItems(), total = cartTotal();
  $('#dr-cnt').textContent = items.length ? `${cartCount()} db` : '';
  if (!items.length) {
    $('#dr-ship').innerHTML = '';
    $('#dr-b').innerHTML = `<div class="dr-empty"><div class="fly-in">${ic('bag',34,1.8)}</div><h4>Üres a kosár</h4><p>Nézz körül a kategóriák között!</p><button class="btn btn-jelly" onclick="closeCart();navigate('home')">Vásárlás indítása</button></div>`;
    $('#dr-f').innerHTML = ''; return;
  }
  const left = Math.max(0, FREE_SHIP - total), pct = Math.min(100, total / FREE_SHIP * 100);
  $('#dr-ship').innerHTML = `<div class="ship"><p>${left ? `Még <b>${fmt(left)}</b> és ingyenes a szállítás` : '<b>Ingyenes szállítás</b> — megvan!'}</p><div class="bar"><i style="width:${pct}%"></i></div></div>`;
  $('#dr-b').innerHTML = items.map((i,k) => `
    <div class="ci" style="animation-delay:${k*40}ms">
      ${thumb(i)}
      <div>
        <div class="ci-n">${esc(i.name)}</div>
        <div class="qty"><button onclick="setQty(${i.id},-1)" aria-label="Kevesebb">−</button><output>${i.qty}</output><button onclick="setQty(${i.id},1)" aria-label="Több">+</button></div>
      </div>
      <div class="ci-r"><b>${fmt(i.price*i.qty)}</b><button class="ci-del" onclick="removeFromCart(${i.id})">Törlés</button></div>
    </div>`).join('');
  $('#dr-f').innerHTML = `
    <div class="row"><span>Részösszeg</span><span>${fmt(total)}</span></div>
    <div class="row"><span>Szállítás</span><span>${left ? 'a pénztárban' : 'ingyenes'}</span></div>
    <div class="row tot"><span>Összesen</span><span>${fmt(total)}</span></div>
    <button class="btn btn-jelly btn-wide" onclick="closeCart();state.checkoutStep=1;navigate('checkout')">Tovább a pénztárhoz ${ic('arrow',18,2.4)}</button>
    <button class="btn btn-ghost btn-wide" style="margin-top:6px" onclick="closeCart()">Vásárlás folytatása</button>`;
}

// --- Drawers ---
function openLayer(id) {
  $('#toast').classList.remove('on');
  const el = $(id); el.removeAttribute('inert'); el.classList.add('on'); $('#scrim').classList.add('on');
  document.body.style.overflow = 'hidden';
  setTimeout(() => { const f = el.querySelector('button, input'); f && f.focus({preventScroll:true}); }, 420);
}
function closeLayer(id) { const el = $(id); if (!el) return; el.classList.remove('on'); el.setAttribute('inert',''); }
function openCart() { renderCart(); openLayer('#drawer'); }
function closeCart() { closeLayer('#drawer'); unlock(); }
function openSearch() {
  closeLayer('#drawer'); closeLayer('#mnav');
  openLayer('#spanel'); $('#srch-btn').setAttribute('aria-expanded','true');
  setTimeout(() => $('#q-h').focus({preventScroll:true}), 60);
}
function closeSearch() { closeLayer('#spanel'); $('#srch-btn').setAttribute('aria-expanded','false'); unlock(); }
document.addEventListener('keydown', e => {
  if (e.key==='/' && !/INPUT|TEXTAREA/.test(document.activeElement.tagName)) { e.preventDefault(); openSearch(); }
});
function openMenu() { openLayer('#mnav'); }
function closeMenu() { closeLayer('#mnav'); unlock(); }
function openFilters() { const f=$('#fpan'); if(!f) return; f.classList.add('on'); $('#scrim').classList.add('on'); document.body.style.overflow='hidden'; }
function unlock() { if (!$$('.drawer.on,.mnav.on,.fpan.on,.spanel.on').length) { $('#scrim').classList.remove('on'); document.body.style.overflow=''; } }
function closeAll() { closeLayer('#drawer'); closeLayer('#mnav'); closeLayer('#spanel'); const f=$('#fpan'); f && f.classList.remove('on'); $('#scrim').classList.remove('on'); document.body.style.overflow=''; }
document.addEventListener('keydown', e => { if (e.key==='Escape') { closeAll(); closeSels(); } });

// --- Wishlist ---
function toggleWish(id, btn) {
  const i = state.wishlist.indexOf(id);
  if (i>=0) state.wishlist.splice(i,1); else state.wishlist.push(id);
  const on = state.wishlist.includes(id);
  $$(`.wish[data-id="${id}"]`).forEach(b => { b.classList.toggle('on', on); b.setAttribute('aria-pressed', on); if (on) { b.classList.remove('beat'); void b.offsetWidth; b.classList.add('beat'); } });
  updateBadges();
  if (state.view==='wishlist') render();
}

// ============================================================
// SEARCH (header, hero, mobile)
// ============================================================
function hits(q) {
  q = q.toLowerCase();
  return DB.filter(p => p.name.toLowerCase().includes(q) || p.brand.toLowerCase().includes(q) || p.sku.toLowerCase().includes(q) || (p.tags||[]).some(t=>t.includes(q)));
}
function hl(s, q) {
  const i = s.toLowerCase().indexOf(q.toLowerCase());
  return i<0 ? esc(s) : esc(s.slice(0,i)) + '<mark>' + esc(s.slice(i,i+q.length)) + '</mark>' + esc(s.slice(i+q.length));
}
function bindSearch(inp, box) {
  if (!inp) return;
  let act = -1;
  const close = () => { if (box) box.classList.remove('open'); act = -1; };
  inp.addEventListener('input', () => {
    if (!box) return;
    const q = inp.value.trim();
    if (q.length < 2) return close();
    const h = hits(q);
    box.innerHTML = (h.length ? h.slice(0,5).map(p => `
      <div class="sres-it" role="option" data-id="${p.id}">${thumb(p)}<div><b>${hl(p.name,q)}</b><span>${esc(p.brand)} · ${fmt(p.price)}</span></div></div>`).join('')
      : `<div class="sres-it" style="cursor:default"><div><b>Nincs találat erre: „${esc(q)}”</b><span>Próbáld márkával vagy cikkszámmal.</span></div></div>`)
      + (h.length ? `<a class="sres-all" href="#" data-all="1">Mind a ${h.length} találat ${ic('arrow',15,2.4)}</a>` : '');
    box.classList.add('open'); act = -1;
  });
  box && box.addEventListener('mousedown', e => {
    const it = e.target.closest('[data-id]'), all = e.target.closest('[data-all]');
    if (it) { e.preventDefault(); inp.value=''; close(); viewProduct(+it.dataset.id); }
    if (all) { e.preventDefault(); const q = inp.value; inp.value=''; close(); doSearch(q); }
  });
  inp.addEventListener('keydown', e => {
    const items = box ? $$('.sres-it[data-id]', box) : [];
    if (e.key==='ArrowDown' || e.key==='ArrowUp') {
      if (!items.length) return; e.preventDefault();
      act = (act + (e.key==='ArrowDown'?1:-1) + items.length) % items.length;
      items.forEach((x,i)=>x.classList.toggle('act', i===act));
    } else if (e.key==='Enter') {
      e.preventDefault();
      if (act>=0 && items[act]) { const id=+items[act].dataset.id; inp.value=''; close(); viewProduct(id); }
      else { const q=inp.value; inp.value=''; close(); doSearch(q); }
    } else if (e.key==='Escape') close();
  });
  inp.addEventListener('blur', () => setTimeout(close, 120));
}

// ============================================================
// CUSTOM SELECT (no native control)
// ============================================================
const SEL = {};
function sel(name, opts, value, ph, extra='') {
  const cur = opts.find(o=>o.v===value);
  return `<div class="sel ${extra}" data-sel="${name}">
    <button type="button" class="sel-btn" aria-haspopup="listbox" aria-expanded="false">${cur ? esc(cur.t) : `<span class="ph-t">${esc(ph)}</span>`}${ic('chev',18,2.4)}</button>
    <ul class="sel-list" role="listbox" tabindex="-1">${opts.map(o=>`<li role="option" data-v="${esc(o.v)}" aria-selected="${o.v===value}">${esc(o.t)}</li>`).join('')}</ul>
  </div>`;
}
function closeSels(except) { $$('.sel.open').forEach(s => { if (s!==except) { s.classList.remove('open'); s.querySelector('.sel-btn').setAttribute('aria-expanded','false'); } }); }
document.addEventListener('click', e => {
  const btn = e.target.closest('.sel-btn');
  if (btn) {
    const s = btn.parentElement, open = !s.classList.contains('open');
    closeSels(s); s.classList.toggle('open', open); btn.setAttribute('aria-expanded', open);
    if (open) { const li = s.querySelector('[aria-selected="true"]') || s.querySelector('li'); $$('li',s).forEach(x=>x.classList.remove('kf')); li && li.classList.add('kf'); }
    return;
  }
  const li = e.target.closest('.sel-list li');
  if (li) { const s = li.closest('.sel'); closeSels(); SEL[s.dataset.sel] && SEL[s.dataset.sel](li.dataset.v); return; }
  closeSels();
});
document.addEventListener('keydown', e => {
  const s = $('.sel.open'); if (!s) return;
  const lis = $$('li', s); let k = lis.findIndex(x=>x.classList.contains('kf'));
  if (e.key==='ArrowDown'||e.key==='ArrowUp') { e.preventDefault(); k=(k+(e.key==='ArrowDown'?1:-1)+lis.length)%lis.length; lis.forEach((x,i)=>x.classList.toggle('kf',i===k)); lis[k].scrollIntoView({block:'nearest'}); }
  if (e.key==='Enter' && k>=0) { e.preventDefault(); closeSels(); SEL[s.dataset.sel] && SEL[s.dataset.sel](lis[k].dataset.v); }
});

const chk = (type, name, checked, label, onchange, n='') =>
  `<label class="chk ${type==='radio'?'rd':''}"><input type="${type}" name="${name}" ${checked?'checked':''} onchange="${onchange}"><span class="bx">${type==='checkbox'?'<svg viewBox="0 0 16 16"><path d="M3.5 8.5l3 3 6-7"/></svg>':''}</span><span class="lb">${label}</span>${n!==''?`<span class="n">${n}</span>`:''}</label>`;

// ============================================================
// PRODUCT CARD
// ============================================================
function productCard(p, i=0) {
  const wish = state.wishlist.includes(p.id);
  const disc = p.origPrice ? Math.round((1 - p.price/p.origPrice)*100) : 0;
  return `<article class="pc" data-rv style="--i:${i%8}">
    <div class="pc-img" onclick="viewProduct(${p.id})">
      ${thumb(p)}
      ${disc ? `<span class="pc-bdg">−${disc}%</span>` : ''}
      <button class="wish${wish?' on':''}" data-id="${p.id}" aria-pressed="${wish}" aria-label="Kívánságlista" onclick="event.stopPropagation();toggleWish(${p.id},this)">${ic('heart',18,2)}</button>
    </div>
    <div class="pc-b" onclick="viewProduct(${p.id})">
      <div class="pc-br">${esc(p.brand)}</div>
      <div class="pc-nm">${esc(p.name)}</div>
      <span class="stock${p.stock<20?' low':''}">${p.stock<20 ? 'Utolsó darabok' : 'Raktáron'}</span>
    </div>
    <div class="pc-f">
      <div class="price"><b>${fmt(p.price)}</b>${p.origPrice?`<s>${fmt(p.origPrice)}</s>`:''}</div>
      <button class="add" aria-label="Kosárba" onclick="addCard(${p.id},this)"><span>Kosárba</span><i class="ai"><b class="ai-plus">${ic('plus',22,2.6)}</b><b class="ai-bag">${ic('bag',20,2.3)}</b></i></button>
    </div>
  </article>`;
}
function addCard(id, btn) {
  btn.classList.remove('done'); void btn.offsetWidth; btn.classList.add('done');
  addToCart(id, 1, btn.closest('.pc').querySelector('.pc-img'));
}

// ============================================================
// HOME
// ============================================================
// Hero product renders (transparent cut-outs). Positions are % of the art area.
const HERO_SHOTS = [
  {src:'assets/hero2-markers.webp', x:-2, y:6, w:48, r:-10, d:7.0, dl:0,  z:1},
  {src:'assets/hero2-case.webp',    x:20, y:40, w:68, r:-3, d:8.0, dl:.5, z:2},
  {src:'assets/hero2-notes.webp',   x:66, y:16, w:31, r:7,  d:6.6, dl:.9, z:3},
];
const BUBS = [
  {x:84, y:74, s:60, d:6.4, dl:.6},
  {x:8,  y:78, s:40, d:5.6, dl:1.2},
];
const POPULAR = ['Golyóstoll','Másolópapír','Toner','Gyűrűs mappa','Post-it','Szövegkiemelő'];

function renderHome() {
  const featured = [13,29,14,6,17,27,10,22].map(id=>DB.find(p=>p.id===id)).filter(Boolean);
  const sale = DB.filter(p=>p.origPrice).slice(0,4);
  const counts = Object.fromEntries(CATS.map(c=>[c.key, DB.filter(p=>inCat(p,c.key)).length]));
  app().innerHTML = `
  <section class="hero">
    <div class="con">
      <div class="hcard">
        <div class="h-word" aria-hidden="true">Fodico</div>
        <div class="hcopy">
          <h1 class="h1">
            <span class="ln"><span style="--i:0">Minden, ami</span></span>
            <span class="ln"><span style="--i:1">az <span class="acc">íróasztalra</span></span></span>
            <span class="ln"><span style="--i:2">kell.</span></span>
          </h1>
          <p class="hsub">Írószer, papíráru, irattartók és nyomtatókellékek — több tízezer termék egy helyen, házhoz szállítva.</p>
          <div class="hcta">
            <button class="btn btn-jelly btn-lg" onclick="navigateCat(null)">Összes termék ${ic('arrow',19,2.4)}</button>
            <button class="btn btn-soft btn-lg" onclick="openSearch()">${ic('search',19,2.4)} Termék keresése</button>
          </div>
        </div>
        <div class="hart" id="hart" aria-hidden="true"><div class="hbox">
          <div class="disc"></div>
          ${BUBS.map((b,i)=>`<div class="bwrap" style="left:${b.x}%;top:${b.y}%;width:${(b.s/5.6).toFixed(2)}%;aspect-ratio:1" data-depth="${(b.s/230).toFixed(2)}"><div class="bub-in" style="--i:${i};--d:${b.d}s;--dl:${b.dl}s"><div class="bub" style="position:absolute;inset:0;--rim:${Math.max(2,b.s*.022).toFixed(1)}px"></div></div></div>`).join('')}
          ${HERO_SHOTS.map((h,i)=>`<div class="bwrap shot" style="left:${h.x}%;top:${h.y}%;width:${h.w}%;z-index:${h.z+2}" data-depth="${(.6+h.z*.25).toFixed(2)}"><div class="shot-in" style="--i:${i};--d:${h.d}s;--dl:${h.dl}s"><img src="${h.src}" alt="" style="--r:${h.r}deg" draggable="false"></div></div>`).join('')}
        </div></div>
        <div class="svc">
        ${[['card','Bankkártyás fizetés','SimplePay — biztonságosan'],['receipt','Számla minden rendelésről','Céges adatokkal is'],['truck','Házhozszállítás','Futárral vagy csomagpontra']]
          .map(([i,b,s],k)=>`<div class="svc-it" style="--i:${k}"><span class="svc-ic">${ic(i,22,1.9)}</span><div><b>${b}</b><span>${s}</span></div></div>`).join('')}
      </div>
      </div>
    </div>
  </section>

  <section class="sec">
    <div class="con">
      <div class="sec-h" data-rv><div><h2>Kategóriák</h2><p>Válassz témát, a többit mi rendezzük.</p></div></div>
      <div class="cats">
        ${CATS.map((c,i)=>`<a class="cat${c.sale?' sale':''}" href="#" data-rv style="--i:${i}" onclick="event.preventDefault();navigateCat('${c.key}')"><span class="cat-ic">${ic(c.ic,28,1.8)}</span><div><b>${c.name}</b><br><span>${counts[c.key]} termék</span></div></a>`).join('')}
      </div>
    </div>
  </section>

  <section class="sec">
    <div class="con">
      <div class="sec-h" data-rv><div><h2>Kiemelt termékek</h2><p>Amiből az irodában mindig fogy.</p></div><a class="more" href="#" onclick="event.preventDefault();navigateCat(null)">Összes termék ${ic('arrow',16,2.4)}</a></div>
      <div class="grid">${featured.map(productCard).join('')}</div>
    </div>
  </section>

  <section class="sec">
    <div class="con">
      <div class="pband" data-rv>
        <div>
          <h2>Melyik patron kell a nyomtatódba?</h2>
          <p>Válaszd ki a márkát és a típust, és megmutatjuk a hozzá illő tintát vagy tonert.</p>
        </div>
        <div class="pform">
          ${sel('hpb', Object.keys(printerData).map(b=>({v:b,t:b})), state.printerBrand, 'Márka')}
          ${sel('hpm', state.printerBrand ? Object.keys(printerData[state.printerBrand]).map(m=>({v:m,t:m})) : [], state.printerModel, 'Típus', state.printerBrand?'':'dis')}
          <button class="btn btn-jelly" onclick="navigate('printer')">Keresés ${ic('arrow',18,2.4)}</button>
        </div>
      </div>
    </div>
  </section>

  <section class="sec">
    <div class="con">
      <div class="sec-h" data-rv><div><h2>Most akciós</h2><p>Kedvezményes árak, amíg a készlet tart.</p></div><a class="more" href="#" onclick="event.preventDefault();navigateCat('Akciók')">Összes akció ${ic('arrow',16,2.4)}</a></div>
      <div class="grid">${sale.map(productCard).join('')}</div>
    </div>
  </section>`;
  SEL.hpb = v => { state.printerBrand=v; state.printerModel=null; render(); };
  SEL.hpm = v => { state.printerModel=v; navigate('printer'); };
  heroParallax();
}

function heroParallax() {
  const hart = $('#hart'); if (!hart || RM || !matchMedia('(pointer:fine)').matches) return;
  const card = hart.closest('.hcard');
  card.addEventListener('pointermove', e => {
    const r = card.getBoundingClientRect(), nx = (e.clientX - r.left)/r.width - .5, ny = (e.clientY - r.top)/r.height - .5;
    $$('.bwrap', hart).forEach(b => { const d = +b.dataset.depth; b.style.transform = `translate(${-nx*28*d}px,${-ny*22*d}px)`; });
  });
  card.addEventListener('pointerleave', () => $$('.bwrap', hart).forEach(b => b.style.transform = ''));
}

// ============================================================
// CATEGORY / SEARCH RESULTS
// ============================================================
function renderCategory() {
  const cat = CATS.find(c=>c.key===state.catFilter);
  const title = cat ? cat.name : (state.search ? `„${state.search}”` : 'Összes termék');
  const base = DB.filter(p => (!state.catFilter || inCat(p, state.catFilter)) && (!state.search || hits(state.search).includes(p)));
  let list = base.filter(p =>
    (!state.filters.brands.length || state.filters.brands.includes(p.brand)) &&
    (!state.filters.priceMax || p.price <= state.filters.priceMax) &&
    (!state.filters.inStock || p.stock >= 20) &&
    (!state.filters.sub || p.sub === state.filters.sub));
  if (state.sort==='price-asc') list.sort((a,b)=>a.price-b.price);
  else if (state.sort==='price-desc') list.sort((a,b)=>b.price-a.price);
  else if (state.sort==='name') list.sort((a,b)=>a.name.localeCompare(b.name,'hu'));
  const brands = [...new Set(base.map(p=>p.brand))].sort((a,b)=>a.localeCompare(b,'hu'));
  const subs = [...new Set(base.map(p=>p.sub))].filter(Boolean).sort((a,b)=>a.localeCompare(b,'hu'));
  const chips = [
    ...state.filters.brands.map(b=>({t:b, x:`toggleBrand('${esc(b)}')`})),
    ...(state.filters.sub?[{t:state.filters.sub, x:`state.filters.sub=null;render()`}]:[]),
    ...(state.filters.priceMax?[{t:`max. ${fmt(state.filters.priceMax)}`, x:`state.filters.priceMax=null;render()`}]:[]),
    ...(state.filters.inStock?[{t:'Raktáron', x:`state.filters.inStock=false;render()`}]:[]),
  ];
  app().innerHTML = `
  <div class="con">
    <nav class="crumbs"><a href="#" onclick="event.preventDefault();navigate('home')">Főoldal</a><span>/</span><span>${esc(title)}</span></nav>
    <div class="phead">
      <div><h1>${esc(title)}</h1><div class="cnt">${list.length} termék</div></div>
      <div style="display:flex;gap:10px;align-items:center">
        <button class="btn btn-soft fbtn" onclick="openFilters()">${ic('filter',18,2.2)} Szűrők</button>
        ${sel('sort', [{v:'pop',t:'Ajánlott sorrend'},{v:'price-asc',t:'Ár szerint növekvő'},{v:'price-desc',t:'Ár szerint csökkenő'},{v:'name',t:'Név szerint (A–Z)'}], state.sort, 'Rendezés', 'sm')}
      </div>
    </div>
    <div class="clay">
      <aside class="fpan" id="fpan">
        <div class="fpan-h"><b>Szűrők</b><button class="btn-ghost btn" style="font-size:13px" onclick="clearFilters()">Törlés</button></div>
        <div class="fg">${chk('checkbox','stock',state.filters.inStock,'Csak bőven raktáron','state.filters.inStock=this.checked;render()')}</div>
        ${subs.length>1 ? `<div class="fg"><div class="fg-t">Típus</div>
          ${chk('radio','sub',!state.filters.sub,'Mind','state.filters.sub=null;render()', base.length)}
          ${subs.map(s=>chk('radio','sub',state.filters.sub===s,esc(s),`state.filters.sub='${esc(s)}';render()`, base.filter(p=>p.sub===s).length)).join('')}</div>` : ''}
        <div class="fg"><div class="fg-t">Márka</div>
          ${brands.map(b=>chk('checkbox','brand',state.filters.brands.includes(b),esc(b),`toggleBrand('${esc(b)}')`, base.filter(p=>p.brand===b).length)).join('')}</div>
        <div class="fg"><div class="fg-t">Ár</div>
          ${chk('radio','price',!state.filters.priceMax,'Bármennyi','state.filters.priceMax=null;render()')}
          ${[2000,5000,10000,30000].map(v=>chk('radio','price',state.filters.priceMax===v,`max. ${fmt(v)}`,`state.filters.priceMax=${v};render()`)).join('')}</div>
      </aside>
      <div>
        ${chips.length ? `<div class="chips">${chips.map(c=>`<button class="chip" onclick="${c.x}">${esc(c.t)}<i>×</i></button>`).join('')}</div>` : ''}
        ${list.length ? `<div class="grid auto">${list.map(productCard).join('')}</div>`
          : `<div class="empty"><div class="fly-in" style="margin:0 auto">${ic('search',28,2)}</div><h3>Nincs ilyen termék</h3><p>Lazíts a szűrőkön, vagy keress másra.</p><button class="btn btn-soft" onclick="clearFilters()">Szűrők törlése</button></div>`}
      </div>
    </div>
  </div>`;
  SEL.sort = v => { state.sort=v; render(); };
}
function toggleBrand(b) { const i=state.filters.brands.indexOf(b); i>=0?state.filters.brands.splice(i,1):state.filters.brands.push(b); render(); }
function clearFilters() { state.filters={brands:[],priceMax:null,inStock:false,sub:null}; render(); }

// ============================================================
// PRODUCT PAGE
// ============================================================
let pageQty = 1;
function renderProduct() {
  const p = state.product; if (!p) return navigate('home');
  const wish = state.wishlist.includes(p.id), c = catOf(p);
  const disc = p.origPrice ? Math.round((1-p.price/p.origPrice)*100) : 0;
  const related = DB.filter(x=>x.cat===p.cat && x.id!==p.id).slice(0,4);
  const tabs = [['Leírás','desc'],['Műszaki adatok','spec'], ...(p.compat?[['Kompatibilitás','compat']]:[])];
  app().innerHTML = `
  <div class="con">
    <nav class="crumbs"><a href="#" onclick="event.preventDefault();navigate('home')">Főoldal</a><span>/</span><a href="#" onclick="event.preventDefault();navigateCat('${p.cat}')">${esc(c.name)}</a><span>/</span><span>${esc(p.sub||'')}</span></nav>
    <div class="pp">
      <div><div class="th gal-main">${ic(c.ic,24,1.3)}<small>A termékfotó a feedből érkezik</small></div></div>
      <div>
        <div class="pi-br">${esc(p.brand)}</div>
        <h1 class="pi-h">${esc(p.name)}</h1>
        <div class="pi-sku">Cikkszám: ${esc(p.sku)}</div>
        <div class="pi-box">
          <div class="pi-pr"><b>${fmt(p.price)}</b>${p.origPrice?`<s>${fmt(p.origPrice)}</s><span class="pc-bdg">−${disc}%</span>`:''}</div>
          <div class="pi-vat">Bruttó ár, az áfát tartalmazza</div>
          <span class="stock${p.stock<20?' low':''}">${p.stock<20 ? `Utolsó darabok — ${p.stock} db` : 'Raktáron'}</span>
          <div class="pi-row">
            <div class="qty"><button onclick="chQty(-1)" aria-label="Kevesebb">−</button><output id="pqty">1</output><button onclick="chQty(1)" aria-label="Több">+</button></div>
            <button class="btn btn-jelly" onclick="addToCart(${p.id}, pageQty, this)">${ic('bag',20,2.2)} Kosárba</button>
            <button class="wish${wish?' on':''}" data-id="${p.id}" aria-pressed="${wish}" aria-label="Kívánságlista" onclick="toggleWish(${p.id},this)">${ic('heart',20,2)}</button>
          </div>
          <div class="perks">
            ${[['card','Bankkártya','SimplePay'],['bag','Utánvét','fizetés átvételkor'],['truck','Házhozszállítás','futár vagy csomagpont'],['receipt','Számla','minden rendelésről']]
              .map(([i,b,s])=>`<div class="perk"><span class="svc-ic">${ic(i,18,2)}</span><div><b>${b}</b><span>${s}</span></div></div>`).join('')}
          </div>
        </div>
      </div>
    </div>
    <div class="tabs" role="tablist">${tabs.map(([t,k],i)=>`<button role="tab" class="${i?'':'on'}" data-k="${k}" onclick="ptab(this)">${t}</button>`).join('')}<span class="tab-ind"></span></div>
    <div class="tabp" id="tabp">${tabBody(p,'desc')}</div>
    ${related.length ? `<div class="sec"><div class="sec-h" data-rv><div><h2>Ehhez is jól jöhet</h2></div></div><div class="grid">${related.map(productCard).join('')}</div></div>` : ''}
  </div>`;
  pageQty = 1;
  requestAnimationFrame(() => ptab($('.tabs button.on'), true));
}
function chQty(d) { pageQty = Math.max(1, pageQty + d); $('#pqty').textContent = pageQty; }
function tabBody(p, k) {
  if (k==='spec') return p.specs ? `<table class="spec">${Object.entries(p.specs).map(([a,b])=>`<tr><td>${esc(a)}</td><td>${esc(b)}</td></tr>`).join('')}</table>` : '<p>Nincs megadott műszaki adat.</p>';
  if (k==='compat') return `<p>A termék az alábbi nyomtatókhoz illik:</p><div class="compat">${p.compat.map(x=>`<span class="tag">${esc(x)}</span>`).join('')}</div>`;
  return `<p>${esc(p.desc)}</p>`;
}
function ptab(btn, init) {
  if (!btn) return;
  const tabs = btn.parentElement, ind = $('.tab-ind', tabs);
  $$('button', tabs).forEach(b=>b.classList.toggle('on', b===btn));
  ind.style.width = btn.offsetWidth + 'px'; ind.style.transform = `translateX(${btn.offsetLeft}px)`;
  if (!init) { const tp=$('#tabp'); tp.innerHTML = tabBody(state.product, btn.dataset.k); tp.animate([{opacity:0,transform:'translateY(6px)'},{opacity:1,transform:'none'}],{duration:350,easing:'cubic-bezier(.22,1,.36,1)'}); }
}

// ============================================================
// WISHLIST
// ============================================================
function renderWishlist() {
  const items = DB.filter(p=>state.wishlist.includes(p.id));
  app().innerHTML = `<div class="con">
    <nav class="crumbs"><a href="#" onclick="event.preventDefault();navigate('home')">Főoldal</a><span>/</span><span>Kívánságlista</span></nav>
    <div class="phead"><div><h1>Kívánságlista</h1><div class="cnt">${items.length} termék</div></div></div>
    ${items.length ? `<div class="grid">${items.map(productCard).join('')}</div>`
      : `<div class="empty"><div class="fly-in" style="margin:0 auto">${ic('heart',28,2)}</div><h3>Még üres</h3><p>A termékeken a szívre kattintva ide gyűjtheted őket.</p><button class="btn btn-jelly" onclick="navigate('home')">Böngészés</button></div>`}
  </div>`;
}

// ============================================================
// CHECKOUT
// ============================================================
function renderCheckout() {
  if (!state.cart.length) { navigate('home'); toast('A kosár üres.'); return; }
  const items = cartItems(), total = cartTotal(), step = state.checkoutStep, od = state.orderData || {};
  const ship = SHIP_OPTS.find(s=>s.id===od.delivery);
  const shipCost = total >= FREE_SHIP ? 0 : (ship ? ship.price : null);
  const steps = ['Adatok','Szállítás','Fizetés'];
  app().innerHTML = `<div class="con">
    <nav class="crumbs"><a href="#" onclick="event.preventDefault();navigate('home')">Főoldal</a><span>/</span><span>Pénztár</span></nav>
    <div class="phead"><div><h1>Pénztár</h1></div></div>
    <div class="steps">${steps.map((s,i)=>`<div class="st${i+1===step?' on':''}${i+1<step?' done':''}"><i>${i+1<step?ic('check',16,3):i+1}</i>${s}</div>${i<2?'<span class="st-sep"></span>':''}`).join('')}</div>
    <div class="co">
      <div class="card">${step===1?coStep1(od):step===2?coStep2(od):coStep3(od)}</div>
      <div class="card">
        <h2 style="font-size:22px">Összegzés</h2>
        ${items.map(i=>`<div class="sum-it"><span>${esc(i.name)} × ${i.qty}</span><b>${fmt(i.price*i.qty)}</b></div>`).join('')}
        <div class="sum-hr"></div>
        <div class="row"><span>Részösszeg</span><span>${fmt(total)}</span></div>
        <div class="row"><span>Szállítás</span><span>${shipCost===null?'választás után':shipCost===0?'ingyenes':fmt(shipCost)}</span></div>
        <div class="row tot"><span>Összesen</span><span>${fmt(total + (shipCost||0))}</span></div>
        <div class="pi-vat" style="margin:0">Az árak az áfát tartalmazzák.</div>
      </div>
    </div>
  </div>`;
}
const fld = (id,label,ph,val,type='text') => `<div class="fld"><label for="${id}">${label}</label><input id="${id}" type="${type}" placeholder="${ph}" value="${esc(val||'')}"></div>`;
function coStep1(o) {
  return `<h2>Elérhetőség</h2>
    <div class="fgrid">${fld('c-ln','Vezetéknév','Kovács',o.lname)}${fld('c-fn','Keresztnév','Anna',o.fname)}</div>
    ${fld('c-em','E-mail','anna@pelda.hu',o.email,'email')}${fld('c-ph','Telefon','+36 30 123 4567',o.phone,'tel')}
    <div class="note">Céges vásárlás? Add meg a számlázási adatokat, és ezekre állítjuk ki a számlát.</div>
    <div class="fgrid">${fld('c-co','Cégnév (nem kötelező)','Minta Kft.',o.company)}${fld('c-vat','Adószám (nem kötelező)','12345678-1-12',o.vat)}</div>
    <div class="btn-row"><button class="btn btn-jelly" onclick="coNext1()">Tovább a szállításhoz ${ic('arrow',18,2.4)}</button></div>`;
}
function coStep2(o) {
  return `<h2>Szállítás</h2>
    ${fld('c-ad','Utca, házszám','Fő utca 1.',o.addr)}
    <div class="fgrid">${fld('c-zip','Irányítószám','1011',o.zip)}${fld('c-ci','Település','Budapest',o.city)}</div>
    <h3>Szállítási mód</h3>
    ${SHIP_OPTS.map(s=>`<label class="opt"><input type="radio" name="dl" value="${s.id}" ${o.delivery===s.id?'checked':''} onchange="state.orderData={...(state.orderData||{}),delivery:'${s.id}'};renderCheckout()"><span class="bx"></span><span class="oi"><b>${s.name}</b><span>${s.sub}</span></span><em>${cartTotal()>=FREE_SHIP?'ingyenes':fmt(s.price)}</em></label>`).join('')}
    <div class="btn-row"><button class="btn btn-soft" onclick="saveStep2();state.checkoutStep=1;renderCheckout()">Vissza</button><button class="btn btn-jelly" onclick="coNext2()">Tovább a fizetéshez ${ic('arrow',18,2.4)}</button></div>`;
}
function coStep3(o) {
  return `<h2>Fizetés</h2>
    ${PAY_OPTS.map(s=>`<label class="opt"><input type="radio" name="pm" value="${s.id}" ${o.payment===s.id?'checked':''} onchange="state.orderData={...(state.orderData||{}),payment:'${s.id}'}"><span class="bx"></span><span class="oi"><b>${s.name}</b><span>${s.sub}</span></span>${s.id==='card'?ic('card',22,1.9):''}</label>`).join('')}
    <div style="margin:16px 0 4px">${chk('checkbox','tos',!!o.tos,'Elfogadom az ÁSZF-et és az adatkezelési tájékoztatót.','state.orderData={...(state.orderData||{}),tos:this.checked}')}</div>
    <div class="btn-row"><button class="btn btn-soft" onclick="state.checkoutStep=2;renderCheckout()">Vissza</button><button class="btn btn-jelly" onclick="placeOrder()">Megrendelés elküldése</button></div>
    <p class="pi-vat" style="margin-top:14px">Demó: a bankkártyás fizetés élesben a SimplePay oldalán történik.</p>`;
}
const v = id => ($('#'+id)?.value || '').trim();
function coNext1() {
  if (!v('c-ln') || !v('c-fn')) return toast('Add meg a neved.', {err:1});
  if (!/^\S+@\S+\.\S+$/.test(v('c-em'))) return toast('Ellenőrizd az e-mail címet.', {err:1});
  if (!v('c-ph')) return toast('Add meg a telefonszámod.', {err:1});
  state.orderData = {...(state.orderData||{}), lname:v('c-ln'), fname:v('c-fn'), email:v('c-em'), phone:v('c-ph'), company:v('c-co'), vat:v('c-vat')};
  state.checkoutStep = 2; renderCheckout(); scrollTo(0,0);
}
function saveStep2() { state.orderData = {...(state.orderData||{}), addr:v('c-ad'), zip:v('c-zip'), city:v('c-ci')}; }
function coNext2() {
  saveStep2(); const o = state.orderData;
  if (!o.addr || !o.zip || !o.city) return toast('Töltsd ki a szállítási címet.', {err:1});
  if (!o.delivery) return toast('Válassz szállítási módot.', {err:1});
  state.checkoutStep = 3; renderCheckout(); scrollTo(0,0);
}
function placeOrder() {
  const o = state.orderData || {};
  if (!o.payment) return toast('Válassz fizetési módot.', {err:1});
  if (!o.tos) return toast('Fogadd el az ÁSZF-et.', {err:1});
  o.orderId = uid(); o.items = cartItems(); o.total = cartTotal();
  state.cart = []; updateBadges(); renderCart();
  navigate('confirmation');
}
function renderConfirmation() {
  const o = state.orderData; if (!o || !o.orderId) return navigate('home');
  app().innerHTML = `<div class="con" style="max-width:720px;padding-top:40px">
    <div class="card" style="text-align:center">
      <div class="done-ic"><div class="fly-in"><svg viewBox="0 0 24 24"><path d="M5 12.5l4.2 4.2L19 7"/></svg></div></div>
      <h2 style="font-size:clamp(28px,4vw,40px);margin-bottom:8px">Köszönjük a rendelést!</h2>
      <p style="color:var(--ink2);font-weight:600;margin:0">A visszaigazolást elküldtük ide: <b style="color:var(--ink)">${esc(o.email)}</b></p>
      <div class="oid">Rendelésszám: <b>${o.orderId}</b></div>
      <div style="text-align:left">
        ${o.items.map(i=>`<div class="sum-it"><span>${esc(i.name)} × ${i.qty}</span><b>${fmt(i.price*i.qty)}</b></div>`).join('')}
        <div class="sum-hr"></div>
        <div class="row tot" style="margin-bottom:0"><span>Összesen</span><span>${fmt(o.total)}</span></div>
      </div>
      <div class="btn-row" style="justify-content:center"><button class="btn btn-jelly" style="flex:none" onclick="navigate('home')">Vissza a boltba</button></div>
    </div>
  </div>`;
}

// ============================================================
// PRINTER CARTRIDGE FINDER
// ============================================================
function renderPrinter() {
  const brands = Object.keys(printerData);
  const models = state.printerBrand ? Object.keys(printerData[state.printerBrand]) : [];
  const res = state.printerBrand && state.printerModel ? (printerData[state.printerBrand][state.printerModel]||[]) : [];
  const prods = DB.filter(p=>res.includes(p.name));
  app().innerHTML = `<div class="con">
    <nav class="crumbs"><a href="#" onclick="event.preventDefault();navigate('home')">Főoldal</a><span>/</span><span>Patronkereső</span></nav>
    <div class="pband" style="margin-bottom:28px">
      <div><h2>Patronkereső</h2><p>Válaszd ki a nyomtatód márkáját és típusát.</p></div>
      <div class="pform">
        ${sel('pb', brands.map(b=>({v:b,t:b})), state.printerBrand, 'Márka')}
        ${sel('pm', models.map(m=>({v:m,t:m})), state.printerModel, 'Típus', state.printerBrand?'':'dis')}
      </div>
    </div>
    ${prods.length ? `<div class="sec-h"><div><h2 style="font-size:28px">Ezek illenek hozzá</h2><p>${esc(state.printerModel)}</p></div></div><div class="grid">${prods.map(productCard).join('')}</div>`
      : `<div class="empty"><div class="fly-in" style="margin:0 auto">${ic('printer',28,2)}</div><h3>${state.printerModel?'Nincs találat':'Válassz nyomtatót'}</h3><p>${state.printerModel?'Ehhez a típushoz most nincs kellék a kínálatban.':'A márka és a típus kiválasztása után itt jelennek meg a kompatibilis kellékek.'}</p></div>`}
  </div>`;
  SEL.pb = v => { state.printerBrand=v; state.printerModel=null; render(); };
  SEL.pm = v => { state.printerModel=v; render(); };
}

// ============================================================
// RENDER + REVEALS
// ============================================================
let rvObs;
function reveals() {
  if (rvObs) rvObs.disconnect();
  const els = $$('#app [data-rv]');
  if (RM || !('IntersectionObserver' in window)) { els.forEach(e=>e.classList.add('in')); return; }
  rvObs = new IntersectionObserver(es => es.forEach(en => { if (en.isIntersecting) { en.target.classList.add('in'); rvObs.unobserve(en.target); } }), {rootMargin:'0px 0px -8% 0px'});
  els.forEach(e => rvObs.observe(e));
}
function render(swap) {
  document.body.className = 'v-' + state.view;
  switch (state.view) {
    case 'category': renderCategory(); break;
    case 'product': renderProduct(); break;
    case 'wishlist': renderWishlist(); break;
    case 'checkout': renderCheckout(); break;
    case 'confirmation': renderConfirmation(); break;
    case 'printer': renderPrinter(); break;
    default: renderHome();
  }
  renderNav(); reveals();
  if (swap && !RM) { const a = app(); a.classList.remove('swap'); void a.offsetWidth; a.classList.add('swap'); }
}
window.addEventListener('scroll', () => $('#hdr').classList.toggle('scrolled', scrollY > 8), {passive:true});

// ============================================================
// INTRO: loader → hero entrance
// ============================================================
function startEntrance() {
  const d = document.documentElement;
  d.classList.remove('pre'); d.classList.add('go');
  setTimeout(() => d.classList.add('settled'), 2300);
}
function runLoader() {
  const d = document.documentElement;
  if (d.classList.contains('ld-done')) { (document.fonts ? document.fonts.ready : Promise.resolve()).then(() => requestAnimationFrame(startEntrance)); return; }
  const imgs = $$('#loader img');
  const ready = Promise.all([
    document.fonts ? document.fonts.ready : Promise.resolve(),
    ...imgs.map(i => i.decode ? i.decode().catch(()=>{}) : Promise.resolve()),
  ]);
  const timeout = new Promise(r => setTimeout(r, 1400));
  Promise.race([ready, timeout]).then(() => requestAnimationFrame(() => requestAnimationFrame(() => {
    d.classList.add('ld-run');
    setTimeout(() => { d.classList.add('ld-out'); setTimeout(startEntrance, 220); }, 2480);
    setTimeout(() => { d.classList.add('ld-done'); const l=$('#loader'); l && l.remove(); }, 3700);
  })));
}

document.addEventListener('DOMContentLoaded', () => {
  render();
  bindSearch($('#q-h'), $('#r-h'));
  $('#sp-tags').innerHTML = POPULAR.map(t=>`<a class="tag" href="#" onclick="event.preventDefault();doSearch('${t}')">${t}</a>`).join('');
  bindSearch($('#q-m'), null);
  updateBadges(); renderCart();
  runLoader();
});
