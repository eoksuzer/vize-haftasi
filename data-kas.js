// ============================================================
//  V4: MASAJDA KAS ANATOMİSİ (Manipülasyon 1 dersine eklenir)
//  O: origo · I: insertio · S: sinir · F: fonksiyon
// ============================================================
(function(){
  var K = {
    trapez: "TRAPEZ → O: protuberantia occipitalis externa, linea nuchae superior, lig. nuchae, C7–T12 spinöz çıkıntılar · I: klavikula lateral 1/3, akromion, spina scapulae · S: n. accessorius (XI) · F: üst lif elevasyon, orta lif retraksiyon, alt lif depresyon; skapulayı yukarı rotasyona getirir.",
    levator: "LEVATOR SCAPULAE → O: C1–C4 transvers çıkıntılar · I: skapula margo medialis üst kısmı (angulus superior) · S: n. dorsalis scapulae (C5) + C3–C4 · F: skapula elevasyonu ve aşağı rotasyonu, boynun lateral fleksiyonu.",
    romboid: "ROMBOİDLER → O: minör C7–T1, majör T2–T5 spinöz çıkıntılar · I: skapula margo medialis · S: n. dorsalis scapulae · F: skapula retraksiyonu, elevasyonu ve aşağı rotasyonu.",
    lat: "LATISSIMUS DORSI → O: T7–T12 spinöz çıkıntılar, fascia thoracolumbalis, crista iliaca, alt kaburgalar · I: sulcus intertubercularis tabanı · S: n. thoracodorsalis (C6–C8) · F: omuz ekstansiyonu, addüksiyonu ve iç rotasyonu.",
    erektor: "ERECTOR SPINAE → lateralden mediale iliocostalis, longissimus, spinalis · O: sakrum, crista iliaca, omurlar · I: kaburgalar, omurlar, kafa tabanı · S: spinal sinirlerin arka dalları · F: iki taraflı gövde ekstansiyonu, tek taraflı lateral fleksiyon.",
    ql: "QUADRATUS LUMBORUM → O: crista iliaca arka kısmı, lig. iliolumbale · I: 12. kaburga, L1–L4 transvers çıkıntılar · S: T12–L4 ön dalları · F: gövde lateral fleksiyonu, pelvisi yükseltme, 12. kaburgayı sabitleme.",
    scm: "STERNOKLEIDOMASTOİD → O: manubrium sterni ve klavikula medial 1/3 · I: processus mastoideus · S: n. accessorius (XI) · F: tek taraflı başı aynı tarafa eğer, yüzü karşı tarafa çevirir; iki taraflı boyun fleksiyonu.",
    splenius: "SPLENIUS CAPITIS → O: lig. nuchae alt kısmı, C7–T3 spinöz çıkıntılar · I: processus mastoideus, linea nuchae superior · S: servikal spinal sinirlerin arka dalları · F: iki taraflı baş-boyun ekstansiyonu, tek taraflı aynı tarafa rotasyon.",
    deltoid: "DELTOİD → O: klavikula lateral 1/3, akromion, spina scapulae · I: tuberositas deltoidea · S: n. axillaris (C5–C6) · F: ön lif fleksiyon ve iç rotasyon, orta lif abduksiyon, arka lif ekstansiyon ve dış rotasyon.",
    supra: "SUPRASPINATUS → O: fossa supraspinata · I: tuberculum majus üst yüzü · S: n. suprascapularis · F: abduksiyonu başlatır (ilk ~15°), humerus başını glenoide sabitler.",
    infra: "INFRASPINATUS → O: fossa infraspinata · I: tuberculum majus orta yüzü · S: n. suprascapularis · F: omuz dış rotasyonu.",
    tminor: "TERES MINOR → O: skapula lateral kenarı · I: tuberculum majus alt yüzü · S: n. axillaris · F: omuz dış rotasyonu.",
    subsc: "SUBSCAPULARIS → O: fossa subscapularis · I: tuberculum minus · S: n. subscapularis üst ve alt · F: omuz iç rotasyonu.",
    tmajor: "TERES MAJOR → O: skapula angulus inferior · I: crista tuberculi minoris · S: n. subscapularis inferior · F: omuz ekstansiyonu, addüksiyonu, iç rotasyonu.",
    pmaj: "PECTORALIS MAJOR → O: klavikula medial yarısı, sternum, 1–6. kaburga kıkırdakları · I: crista tuberculi majoris · S: n. pectoralis medialis ve lateralis · F: omuz addüksiyonu ve iç rotasyonu; klaviküler kısım fleksiyon.",
    pmin: "PECTORALIS MINOR → O: 3–5. kaburgalar · I: processus coracoideus · S: n. pectoralis medialis · F: skapula protraksiyonu ve depresyonu.",
    serratus: "SERRATUS ANTERIOR → O: 1–8. kaburgaların dış yüzü · I: skapula margo medialis ön yüzü · S: n. thoracicus longus (C5–C7) · F: skapula protraksiyonu ve yukarı rotasyonu; felcinde kanatlı skapula.",
    biceps: "BICEPS BRACHII → O: uzun baş tuberculum supraglenoidale, kısa baş processus coracoideus · I: tuberositas radii, aponeurosis bicipitalis · S: n. musculocutaneus · F: dirsek fleksiyonu ve önkol supinasyonu.",
    brachialis: "BRACHIALIS → O: humerus ön yüzü alt yarısı · I: tuberositas ulnae · S: n. musculocutaneus · F: dirseğin asıl fleksörü.",
    triceps: "TRICEPS BRACHII → O: uzun baş tuberculum infraglenoidale, lateral ve medial baş humerus arka yüzü · I: olecranon · S: n. radialis · F: dirsek ekstansiyonu; uzun baş omuz ekstansiyonuna yardım eder.",
    brrad: "BRACHIORADIALIS → O: humerus lateral suprakondiler kenarı · I: radius processus styloideus · S: n. radialis · F: yarı pronasyondaki önkolda dirsek fleksiyonu.",
    gmax: "GLUTEUS MAXIMUS → O: ilium dış yüzü arka kısmı, sakrum ve koksiks arka yüzü · I: tractus iliotibialis, tuberositas glutea · S: n. gluteus inferior (L5–S2) · F: kalça ekstansiyonu ve dış rotasyonu.",
    gmed: "GLUTEUS MEDIUS → O: ilium dış yüzü · I: trochanter major lateral yüzü · S: n. gluteus superior (L4–S1) · F: kalça abduksiyonu, tek ayak üstünde pelvisi dengeler.",
    piri: "PİRİFORMİS → O: sakrum ön yüzü · I: trochanter major üst kenarı · S: S1–S2 dalları · F: kalça dış rotasyonu. Siyatik sinir hemen altından geçer.",
    ilio: "İLİOPSOAS → O: psoas major T12–L5 omur cisimleri ve transvers çıkıntılar, iliacus fossa iliaca · I: trochanter minor · S: psoas L1–L3 ön dalları, iliacus n. femoralis · F: kalçanın en güçlü fleksörü.",
    tfl: "TENSOR FASCIAE LATAE → O: spina iliaca anterior superior (SIAS) · I: tractus iliotibialis · S: n. gluteus superior · F: kalça fleksiyonu, abduksiyonu ve iç rotasyonu.",
    quad: "QUADRICEPS FEMORIS → rectus femoris, vastus lateralis, medialis, intermedius · O: rectus femoris SIAI, vastuslar femur · I: patella ve lig. patellae ile tuberositas tibiae · S: n. femoralis · F: diz ekstansiyonu; rectus femoris kalça fleksiyonu da yapar.",
    hams: "HAMSTRİNGLER → biceps femoris, semitendinosus, semimembranosus · O: tuber ischiadicum (biceps femoris kısa başı linea aspera) · I: biceps femoris caput fibulae, diğer ikisi tibia medial yüzü · S: n. ischiadicus · F: diz fleksiyonu ve kalça ekstansiyonu.",
    sart: "SARTORİUS → O: SIAS · I: tibia üst medial yüzü (pes anserinus) · S: n. femoralis · F: kalça fleksiyonu, abduksiyonu, dış rotasyonu ve diz fleksiyonu. Vücudun en uzun kasıdır.",
    add: "ADDÜKTÖRLER → adductor longus, brevis, magnus, gracilis, pectineus · O: pubis ve ramus ischii · I: linea aspera (gracilis pes anserinus) · S: n. obturatorius · F: kalça addüksiyonu.",
    gastro: "GASTROKNEMİUS → O: femur medial ve lateral kondilleri · I: tendo calcaneus (Aşil) ile tuber calcanei · S: n. tibialis · F: ayak bileği plantar fleksiyonu, diz fleksiyonuna yardım.",
    soleus: "SOLEUS → O: tibia (linea m. solei) ve fibula başı arka yüzü · I: tendo calcaneus ile tuber calcanei · S: n. tibialis · F: plantar fleksiyon; dizi geçmez, diz bükülüyken daha etkindir.",
    tant: "TİBİALİS ANTERİOR → O: tibia lateral kondili ve gövdesinin üst lateral yüzü, membrana interossea · I: os cuneiforme mediale ve 1. metatars tabanı · S: n. fibularis (peroneus) profundus · F: dorsifleksiyon ve inversiyon.",
    perlong: "PERONEUS (FİBULARİS) LONGUS → O: fibula başı ve üst lateral yüzü · I: os cuneiforme mediale ve 1. metatars tabanı (taban altından) · S: n. fibularis superficialis · F: eversiyon, plantar fleksiyona yardım."
  };
  function card(k){ return K[k].replace(" → ","\n").split(" · ").join("\n"); }
  function Q(q,o,a,k,ex){ return { q:q, o:o, a:a, e:(ex?ex+"\n\n":"")+card(k) }; }

  var c = window.COURSES.filter(function(x){return x.id==="manip1";})[0];
  c.sub = "Klasik Masaj Teknikleri · Bölüm I · Kas Anatomisi";
  c.units = c.units.concat([
    { id:"kas1", code:"Kas 1", title:"Kas Anatomisi: Boyun ve Sırt" },
    { id:"kas2", code:"Kas 2", title:"Kas Anatomisi: Omuz, Göğüs ve Kol" },
    { id:"kas3", code:"Kas 3", title:"Kas Anatomisi: Kalça ve Uyluk" },
    { id:"kas4", code:"Kas 4", title:"Kas Anatomisi: Bacak" },
    { id:"kas5", code:"Kas 5", title:"Kas Anatomisi: Karma Tekrar" }
  ]);

  var SRC = "Anatomi kaynakları";
  window.TESTS = window.TESTS.concat([
  { id:"k1-boyun-sirt", course:"manip1", unit:"kas1", v:4, src:SRC, date:"2026-11-15",
    title:"Boyun ve Sırt Kasları",
    desc:"Trapez, levator scapulae, romboidler, latissimus, erector spinae, QL, SCM, splenius",
    questions:[
    Q("Trapez kasının motor siniri hangisidir?", ["N. dorsalis scapulae","N. accessorius (XI. kranial sinir)","N. thoracodorsalis","N. suprascapularis"],1,"trapez"),
    Q("Trapez kasının insertio'su (yapışma yeri) hangisidir?", ["Tuberositas deltoidea","Skapula margo medialis","Klavikula lateral 1/3, akromion ve spina scapulae","Processus coracoideus"],2,"trapez"),
    Q("Trapez kasının ALT liflerinin skapula üzerindeki ana fonksiyonu nedir?", ["Elevasyon","Depresyon","Protraksiyon","Aşağı rotasyon"],1,"trapez","Alt lifler skapulayı aşağı çeker. Üst lifler ise omuzu kaldırır."),
    Q("Hangi iki kas n. accessorius ile innerve edilir?", ["Trapez ve sternokleidomastoid","Trapez ve levator scapulae","Romboidler ve levator scapulae","SCM ve splenius capitis"],0,"scm","XI. kranial sinir boyunda yalnızca SCM ve trapezi innerve eder."),
    Q("Levator scapulae kasının origo'su nedir?", ["C7–T1 spinöz çıkıntılar","Protuberantia occipitalis externa","C1–C4 transvers çıkıntılar","1. ve 2. kaburgalar"],2,"levator"),
    Q("Romboid kaslarının siniri hangisidir?", ["N. accessorius","N. thoracicus longus","N. axillaris","N. dorsalis scapulae"],3,"romboid"),
    Q("Romboid kasları kasıldığında skapulayı hangi yöne hareket ettirir?", ["Retraksiyon (omurgaya yaklaştırma)","Protraksiyon","Yukarı rotasyon","Depresyon"],0,"romboid"),
    Q("Latissimus dorsi kasının insertio'su nerededir?", ["Tuberculum majus","Sulcus intertubercularis tabanı","Olecranon","Akromion"],1,"lat"),
    Q("Latissimus dorsi kasını innerve eden sinir hangisidir?", ["N. thoracodorsalis","N. thoracicus longus","N. subscapularis","N. radialis"],0,"lat"),
    Q("Aşağıdakilerden hangisi latissimus dorsi kasının fonksiyonu DEĞİLDİR?", ["Omuz ekstansiyonu","Omuz addüksiyonu","Omuz iç rotasyonu","Omuz dış rotasyonu"],3,"lat"),
    Q("Erector spinae grubunun kasları lateralden mediale doğru nasıl sıralanır?", ["Spinalis, longissimus, iliocostalis","Longissimus, iliocostalis, spinalis","Iliocostalis, longissimus, spinalis","Iliocostalis, spinalis, longissimus"],2,"erektor","Akılda kalsın diye: 'I Love Spine' (Iliocostalis, Longissimus, Spinalis) dıştan içe."),
    Q("Erector spinae kaslarının siniri hangisidir?", ["Spinal sinirlerin ön dalları","Spinal sinirlerin arka dalları","N. accessorius","N. thoracodorsalis"],1,"erektor"),
    Q("Erector spinae kasları iki taraflı kasıldığında hangi hareket oluşur?", ["Gövde fleksiyonu","Gövde rotasyonu","Gövde ekstansiyonu","Kalça fleksiyonu"],2,"erektor"),
    Q("Quadratus lumborum kasının insertio'su hangisidir?", ["12. kaburga ve L1–L4 transvers çıkıntılar","Crista iliaca","Trochanter minor","Sakrum ön yüzü"],0,"ql","Origo'su crista iliaca'dır. Yukarıda 12. kaburgaya yapışır."),
    Q("Quadratus lumborum kasının fonksiyonu hangisidir?", ["Kalça fleksiyonu","Gövde lateral fleksiyonu ve pelvisi yükseltme","Skapula elevasyonu","Diz ekstansiyonu"],1,"ql"),
    Q("Sternokleidomastoid kasının origo'su nedir?", ["Processus mastoideus","C1–C4 transvers çıkıntılar","Manubrium sterni ve klavikula medial 1/3","1. kaburga"],2,"scm","Adı yapışma yerlerini anlatır: sterno (sternum), kleido (klavikula), mastoid (processus mastoideus)."),
    Q("SAĞ sternokleidomastoid tek taraflı kasılırsa baş hangi pozisyona gelir?", ["Sağa eğilir, yüz sola döner","Sola eğilir, yüz sağa döner","Sağa eğilir, yüz sağa döner","Baş ekstansiyona gider"],0,"scm","Tortikoliste (eğri boyun) bu pozisyon görülür."),
    Q("Splenius capitis tek taraflı kasıldığında başa hangi hareketi yaptırır?", ["Karşı tarafa rotasyon","Aynı tarafa rotasyon","Fleksiyon","Depresyon"],1,"splenius","SCM'nin tersine, splenius başı aynı tarafa çevirir.")
  ]},
  { id:"k2-omuz-gogus", course:"manip1", unit:"kas2", v:4, src:SRC, date:"2026-11-15",
    title:"Omuz ve Göğüs Kasları",
    desc:"Deltoid, rotator cuff, teres major, pectoralis major/minor, serratus anterior",
    questions:[
    Q("Deltoid kasının siniri hangisidir?", ["N. suprascapularis","N. radialis","N. axillaris","N. musculocutaneus"],2,"deltoid"),
    Q("Deltoid kasının insertio'su nerededir?", ["Tuberculum majus","Tuberositas deltoidea","Sulcus intertubercularis","Processus coracoideus"],1,"deltoid"),
    Q("Deltoid kasının ORTA lifleri hangi hareketi yapar?", ["Omuz fleksiyonu","Omuz ekstansiyonu","Omuz abduksiyonu","Omuz iç rotasyonu"],2,"deltoid"),
    Q("Deltoid kasının ARKA lifleri hangi hareketleri yapar?", ["Ekstansiyon ve dış rotasyon","Fleksiyon ve iç rotasyon","Addüksiyon ve iç rotasyon","Elevasyon"],0,"deltoid"),
    Q("Aşağıdakilerden hangisi rotator cuff kaslarından biri DEĞİLDİR?", ["Supraspinatus","Infraspinatus","Teres minor","Teres major"],3,"tmajor","Rotator cuff 'SITS' kaslarıdır: Supraspinatus, Infraspinatus, Teres minor, Subscapularis."),
    Q("Omuz abduksiyonunu başlatan (ilk ~15°) rotator cuff kası hangisidir?", ["Supraspinatus","Subscapularis","Teres minor","Infraspinatus"],0,"supra"),
    Q("Supraspinatus ve infraspinatus kaslarının ortak siniri hangisidir?", ["N. axillaris","N. suprascapularis","N. subscapularis","N. dorsalis scapulae"],1,"infra"),
    Q("Teres minor kası hangi sinirle innerve edilir?", ["N. suprascapularis","N. subscapularis","N. axillaris","N. thoracodorsalis"],2,"tminor","Deltoid ile aynı siniri paylaşır."),
    Q("Tuberculum minus'a yapışan ve omzu iç rotasyona getiren rotator cuff kası hangisidir?", ["Infraspinatus","Subscapularis","Teres minor","Supraspinatus"],1,"subsc","Diğer üç rotator cuff kası tuberculum majus'a yapışır."),
    Q("Infraspinatus kasının ana fonksiyonu nedir?", ["Omuz iç rotasyonu","Omuz dış rotasyonu","Omuz fleksiyonu","Skapula elevasyonu"],1,"infra"),
    Q("Fonksiyonu latissimus dorsiye benzediği için 'latissimusun küçük yardımcısı' denen kas hangisidir?", ["Teres minor","Teres major","Romboid majör","Serratus anterior"],1,"tmajor"),
    Q("Pectoralis major kasının insertio'su nerededir?", ["Processus coracoideus","Crista tuberculi majoris (sulcus intertubercularis lateral dudağı)","Tuberositas deltoidea","Tuberculum minus"],1,"pmaj"),
    Q("Pectoralis major kasının siniri hangisidir?", ["N. thoracicus longus","N. pectoralis medialis ve lateralis","N. axillaris","N. musculocutaneus"],1,"pmaj"),
    Q("Pectoralis major kasının omuz eklemindeki ana fonksiyonu nedir?", ["Abduksiyon ve dış rotasyon","Addüksiyon ve iç rotasyon","Ekstansiyon ve dış rotasyon","Yalnızca elevasyon"],1,"pmaj"),
    Q("Pectoralis minor kasının insertio'su hangisidir?", ["Processus coracoideus","Akromion","Klavikula","Tuberculum majus"],0,"pmin"),
    Q("Serratus anterior kasının siniri hangisidir?", ["N. thoracodorsalis","N. dorsalis scapulae","N. thoracicus longus","N. accessorius"],2,"serratus"),
    Q("'Kanatlı skapula' (scapula alata) en çok hangi kasın felcinde görülür?", ["Trapez üst lifler","Serratus anterior","Romboid minör","Pectoralis minor"],1,"serratus","Serratus anterior skapulayı göğüs duvarına bastırır. Felç olunca margo medialis dışarı kalkar.")
  ]},
  { id:"k3-kol", course:"manip1", unit:"kas2", v:4, src:SRC, date:"2026-11-15",
    title:"Kol Kasları",
    desc:"Biceps, brachialis, triceps, brachioradialis",
    questions:[
    Q("Biceps brachii UZUN başının origo'su nedir?", ["Processus coracoideus","Tuberculum supraglenoidale","Tuberculum infraglenoidale","Humerus ön yüzü"],1,"biceps"),
    Q("Biceps brachii KISA başının origo'su nedir?", ["Processus coracoideus","Akromion","Tuberculum supraglenoidale","Tuberculum minus"],0,"biceps"),
    Q("Biceps brachii kasının insertio'su hangisidir?", ["Tuberositas ulnae","Olecranon","Tuberositas radii","Radius processus styloideus"],2,"biceps"),
    Q("Biceps brachii kasının siniri hangisidir?", ["N. radialis","N. medianus","N. musculocutaneus","N. axillaris"],2,"biceps"),
    Q("Biceps brachii kasının dirsek fleksiyonu dışındaki önemli fonksiyonu nedir?", ["Önkol pronasyonu","Önkol supinasyonu","Bilek ekstansiyonu","Omuz addüksiyonu"],1,"biceps","Vida sıkma hareketi bicepsin supinasyon gücüyle yapılır."),
    Q("Dirseğin 'asıl fleksörü' sayılan ve tuberositas ulnae'ye yapışan kas hangisidir?", ["Biceps brachii","Brachialis","Brachioradialis","Pronator teres"],1,"brachialis"),
    Q("Triceps brachii kasının insertio'su nerededir?", ["Olecranon","Tuberositas radii","Epicondylus lateralis","Tuberositas ulnae"],0,"triceps"),
    Q("Triceps brachii kasının siniri hangisidir?", ["N. ulnaris","N. musculocutaneus","N. radialis","N. axillaris"],2,"triceps"),
    Q("Triceps brachii UZUN başı nereden başlar ve bu nedenle hangi ekleme de etki eder?", ["Tuberculum infraglenoidale; omuz ekstansiyonuna yardım eder","Processus coracoideus; omuz fleksiyonu yapar","Humerus arka yüzü; yalnızca dirseğe etki eder","Akromion; abduksiyon yapar"],0,"triceps"),
    Q("Siniri n. radialis olduğu hâlde dirsek FLEKSİYONU yapan kas hangisidir?", ["Triceps brachii","Anconeus","Brachioradialis","Biceps brachii"],2,"brrad","N. radialis genelde ekstansörleri innerve eder. Brachioradialis bunun bilinen istisnasıdır.")
  ]},
  { id:"k4-kalca", course:"manip1", unit:"kas3", v:4, src:SRC, date:"2026-11-15",
    title:"Kalça Kasları",
    desc:"Gluteus maximus/medius, piriformis, iliopsoas, TFL",
    questions:[
    Q("Gluteus maximus kasının siniri hangisidir?", ["N. gluteus superior","N. gluteus inferior","N. femoralis","N. obturatorius"],1,"gmax"),
    Q("Gluteus maximus kasının ana fonksiyonu nedir?", ["Kalça fleksiyonu","Kalça ekstansiyonu ve dış rotasyonu","Kalça addüksiyonu","Diz ekstansiyonu"],1,"gmax","Merdiven çıkarken ve oturduğu yerden kalkarken en çok çalışan kastır."),
    Q("Gluteus maximus kasının insertio'su nerededir?", ["Trochanter minor","Tractus iliotibialis ve tuberositas glutea","Trochanter major üst kenarı","Tuber ischiadicum"],1,"gmax"),
    Q("Gluteus medius kasının siniri hangisidir?", ["N. gluteus inferior","N. ischiadicus","N. gluteus superior","N. femoralis"],2,"gmed"),
    Q("Gluteus medius kasının ana fonksiyonu nedir?", ["Kalça abduksiyonu ve tek ayakta pelvisi dengeleme","Kalça ekstansiyonu","Diz fleksiyonu","Kalça addüksiyonu"],0,"gmed"),
    Q("Pozitif Trendelenburg belirtisi (tek ayakta karşı kalçanın düşmesi) hangi kasın zayıflığını gösterir?", ["Gluteus maximus","Iliopsoas","Gluteus medius","Quadriceps femoris"],2,"gmed"),
    Q("Piriformis kasının origo'su nedir?", ["Ilium dış yüzü","Sakrum ön yüzü","Tuber ischiadicum","Pubis"],1,"piri"),
    Q("Piriformis sendromunda kalçadan bacağa yayılan ağrının nedeni hangi sinirin sıkışmasıdır?", ["N. femoralis","N. obturatorius","N. ischiadicus (siyatik)","N. gluteus superior"],2,"piri","Masajda piriformisin gevşetilmesi bu yüzden siyatik benzeri ağrılarda önemlidir."),
    Q("İliopsoas kasının insertio'su hangisidir?", ["Trochanter major","Trochanter minor","Linea aspera","Tuberositas tibiae"],1,"ilio"),
    Q("Kalçanın en güçlü fleksörü hangi kastır?", ["Rectus femoris","Sartorius","İliopsoas","Tensor fasciae latae"],2,"ilio"),
    Q("Psoas major kasının origo'su nedir?", ["Fossa iliaca","T12–L5 omur cisimleri ve transvers çıkıntılar","Sakrum ön yüzü","Crista iliaca"],1,"ilio"),
    Q("İliacus kasının siniri hangisidir?", ["N. obturatorius","N. femoralis","N. gluteus superior","N. ischiadicus"],1,"ilio"),
    Q("Tensor fasciae latae kasının insertio'su ve siniri hangisidir?", ["Tractus iliotibialis; n. gluteus superior","Trochanter minor; n. femoralis","Patella; n. femoralis","Fibula başı; n. ischiadicus"],0,"tfl")
  ]},
  { id:"k5-uyluk", course:"manip1", unit:"kas3", v:4, src:SRC, date:"2026-11-15",
    title:"Uyluk Kasları",
    desc:"Quadriceps, hamstringler, sartorius, addüktörler",
    questions:[
    Q("Quadriceps femoris kasının siniri hangisidir?", ["N. ischiadicus","N. obturatorius","N. femoralis","N. tibialis"],2,"quad"),
    Q("Quadriceps femoris kaslarının ortak insertio'su nerededir?", ["Patella ve lig. patellae ile tuberositas tibiae","Caput fibulae","Tibia medial kondili","Linea aspera"],0,"quad"),
    Q("Quadriceps grubunda hem kalça hem diz eklemini geçen kas hangisidir?", ["Vastus lateralis","Vastus medialis","Vastus intermedius","Rectus femoris"],3,"quad"),
    Q("Rectus femoris kasının origo'su nedir?", ["SIAS","SIAI (spina iliaca anterior inferior)","Trochanter major","Linea aspera"],1,"quad"),
    Q("Quadriceps femoris kasının diz eklemindeki fonksiyonu nedir?", ["Diz fleksiyonu","Diz ekstansiyonu","Diz iç rotasyonu","Diz dış rotasyonu"],1,"quad"),
    Q("Hamstring kaslarının ortak origo'su nedir?", ["SIAS","Pubis","Tuber ischiadicum","Sakrum"],2,"hams"),
    Q("Hamstring kaslarının siniri hangisidir?", ["N. femoralis","N. ischiadicus","N. obturatorius","N. gluteus inferior"],1,"hams"),
    Q("Biceps femoris kasının insertio'su nerededir?", ["Caput fibulae","Tibia medial yüzü","Tuberositas tibiae","Calcaneus"],0,"hams"),
    Q("Hamstring kaslarının fonksiyonu nedir?", ["Diz ekstansiyonu ve kalça fleksiyonu","Diz fleksiyonu ve kalça ekstansiyonu","Kalça abduksiyonu","Ayak dorsifleksiyonu"],1,"hams"),
    Q("Pes anserinus'u oluşturan kaslar hangileridir?", ["Sartorius, gracilis, semitendinosus","Biceps femoris, semimembranosus, gracilis","Rectus femoris, sartorius, TFL","Vastus medialis, gracilis, adductor magnus"],0,"sart","Akılda kalsın diye: 'Say Grace before Tea' (Sartorius, Gracilis, semiTendinosus)."),
    Q("Vücudun en uzun kası olan ve SIAS'tan başlayan kas hangisidir?", ["Rectus femoris","Gracilis","Sartorius","Tensor fasciae latae"],2,"sart"),
    Q("Uyluğun iç yüzündeki addüktör kas grubunun siniri hangisidir?", ["N. femoralis","N. obturatorius","N. ischiadicus","N. gluteus superior"],1,"add")
  ]},
  { id:"k6-bacak", course:"manip1", unit:"kas4", v:4, src:SRC, date:"2026-11-15",
    title:"Bacak Kasları",
    desc:"Gastroknemius, soleus, tibialis anterior, peroneus longus",
    questions:[
    Q("Gastroknemius kasının origo'su nedir?", ["Tibia arka yüzü","Femur medial ve lateral kondilleri","Fibula başı","Tuber ischiadicum"],1,"gastro"),
    Q("Gastroknemius ve soleus kaslarının ortak insertio'su nerededir?", ["Tendo calcaneus (Aşil tendonu) ile tuber calcanei","1. metatars tabanı","Os naviculare","Tuberositas tibiae"],0,"soleus"),
    Q("Gastroknemius ve soleus kaslarının (triceps surae) siniri hangisidir?", ["N. fibularis profundus","N. femoralis","N. tibialis","N. fibularis superficialis"],2,"gastro"),
    Q("Soleus kasını gastroknemiusdan ayıran özellik hangisidir?", ["Dizi geçmez, diz bükülüyken plantar fleksiyonda daha etkindir","Dorsifleksiyon yapar","Femur kondillerinden başlar","N. femoralis ile innerve edilir"],0,"soleus"),
    Q("Tibialis anterior kasının insertio'su nerededir?", ["Tuber calcanei","Os cuneiforme mediale ve 1. metatars tabanı","5. metatars tabanı","Talus"],1,"tant"),
    Q("Tibialis anterior kasının siniri hangisidir?", ["N. tibialis","N. fibularis superficialis","N. fibularis profundus","N. femoralis"],2,"tant"),
    Q("Tibialis anterior kasının fonksiyonu nedir?", ["Plantar fleksiyon ve eversiyon","Dorsifleksiyon ve inversiyon","Dorsifleksiyon ve eversiyon","Plantar fleksiyon ve inversiyon"],1,"tant"),
    Q("'Düşük ayak' (foot drop) en çok hangi sinirin hasarında görülür?", ["N. tibialis","N. femoralis","N. fibularis (peroneus)","N. obturatorius"],2,"tant","Dorsifleksörler felç olunca ayak ucu yere sürtünür ve hasta 'stepaj yürüyüşü' yapar."),
    Q("Peroneus longus kasının ana fonksiyonu nedir?", ["Ayak eversiyonu","Ayak inversiyonu","Diz fleksiyonu","Ayak parmak fleksiyonu"],0,"perlong"),
    Q("Peroneus longus kasının siniri hangisidir?", ["N. fibularis profundus","N. fibularis superficialis","N. tibialis","N. suralis"],1,"perlong")
  ]},
  { id:"k7-karma", course:"manip1", unit:"kas5", v:4, src:SRC, date:"2026-11-15",
    title:"Sinir ve Fonksiyon Karması",
    desc:"Bölgeler arası sinir eşleştirme ve masaj uygulamasından sorular",
    questions:[
    Q("N. axillaris hangi iki kası innerve eder?", ["Deltoid ve teres minor","Deltoid ve teres major","Supraspinatus ve infraspinatus","Teres minor ve subscapularis"],0,"tminor"),
    Q("Aşağıdaki kaslardan hangisi n. radialis ile innerve EDİLMEZ?", ["Triceps brachii","Brachioradialis","Biceps brachii","Bilek ekstansörleri"],2,"biceps"),
    Q("Aşağıdaki kaslardan hangisi n. musculocutaneus ile innerve edilir?", ["Triceps brachii","Brachialis","Brachioradialis","Deltoid"],1,"brachialis"),
    Q("Aşağıdaki kaslardan hangisi n. femoralis ile innerve EDİLMEZ?", ["Rectus femoris","Sartorius","Biceps femoris","İliacus"],2,"hams","Adı benzese de biceps femoris bir hamstringdir ve n. ischiadicus ile innerve edilir."),
    Q("Aşağıdakilerden hangisi omuzu dış rotasyona getiren kaslardan biri DEĞİLDİR?", ["Infraspinatus","Teres minor","Deltoid arka lifleri","Subscapularis"],3,"subsc"),
    Q("Aşağıdaki kaslardan hangisi ayak bileğinde plantar fleksiyon YAPMAZ?", ["Gastroknemius","Soleus","Tibialis anterior","Peroneus longus"],2,"tant"),
    Q("Masada uzun süre çalışanlarda omuz üstünde ele gelen gergin bantlar en sık hangi kasta bulunur?", ["Trapez üst lifleri","Pectoralis minor","Serratus anterior","Latissimus dorsi"],0,"trapez","Trapez üst lifleri ve levator scapulae boyun-omuz masajında en çok çalışılan bölgedir."),
    Q("Bel ağrısında 12. kaburga ile crista iliaca arasında, yanda palpe edilen derin kas hangisidir?", ["Quadratus lumborum","Gluteus medius","Latissimus dorsi","Psoas major"],0,"ql"),
    Q("Sırt masajında skapulanın medial kenarı ile omurga arasında, trapezin altında çalışılan kaslar hangileridir?", ["Romboidler","Infraspinatus ve teres minor","Serratus anterior","Pectoralis minor"],0,"romboid"),
    Q("Yüzüstü yatan hastada kalça ekstansiyonunu test etmek için hangi kas ve sinir ikilisi değerlendirilir?", ["Gluteus maximus ve n. gluteus inferior","Gluteus medius ve n. gluteus superior","İliopsoas ve n. femoralis","Addüktörler ve n. obturatorius"],0,"gmax")
  ]}
  ]);
})();
