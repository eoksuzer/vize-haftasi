// ============================================================
//  V8: KAS ANATOMİSİ · SINAV ÖNCESİ MUTLAKA ÇÖZ (60 soru, ders kas listesinden)
// ============================================================
(function(){
  var M = {};
  window.KASLIST.forEach(function(g){ g.items.forEach(function(m){ M[m.k] = m; }); });
  function card(k){ var m = M[k]; return m.ad.toUpperCase()+"\nO: "+m.o+"\nI: "+m.i+"\nS: "+m.s+"\nF: "+m.f+(m.n?"\nNot: "+m.n:""); }
  function Q(q,o,a,k,ex){ return {q:q, o:o, a:a, e:(ex?ex+"\n\n":"")+card(k)}; }

  var c = window.COURSES.filter(function(x){ return x.id==="kaslar"; })[0];
  c.units.unshift({ id:"sinav", code:"Sınav", title:"Sınav Öncesi Mutlaka Çöz" });

  window.TESTS.push({ id:"kl-sinav", course:"kaslar", unit:"sinav", v:8, src:"Ders kas listesi", date:"2026-11-16",
    title:"Sınav Öncesi Kesinlikle Çözülmesi Gerekenler",
    desc:"60 seçilmiş soru · kas–sinir eşleştirmeleri, kritik origo-insertio, fonksiyonlar ve klinik tablolar",
    questions:[
    // ---------- SIRT VE BOYUN ----------
    Q("Aşağıdaki kas–sinir eşleştirmelerinden hangisi YANLIŞTIR?",["Levator scapulae – n. axillaris","Trapezius – n. accessorius","Latissimus dorsi – n. thoracodorsalis","Rhomboideus – n. dorsalis scapulae"],0,"levator","Levator scapulae'nin siniri n. dorsalis scapulae ve C3–C4'tür. N. axillaris deltoideusun siniridir."),
    Q("Trapeziusun insertio'su ile deltoideusun origo'su için hangisi doğrudur?",["Aynı yapılardır: klavikula lateral 1/3, akromion ve spina scapulae","Trapezius humerusa, deltoideus skapulaya yapışır","İkisi de processus coracoideus ile ilişkilidir","İkisi de sternumdan başlar"],0,"trapez","Trapezius bu yapılara yapışır, deltoideus ise aynı yapılardan başlar. Sınavda çok sorulan bir ilişkidir."),
    Q("Eli arkadan arka cebe sokma hareketi (omuz ekstansiyonu, addüksiyonu ve iç rotasyonu) hangi kasın tipik fonksiyonudur?",["Latissimus dorsi","Deltoideus orta lifler","Trapezius üst lifler","Biceps brachii"],0,"lat"),
    Q("Erector spinae kaslarını hangi sinirler innerve eder?",["Spinal sinirlerin arka dalları","Spinal sinirlerin ön dalları","N. accessorius","N. thoracodorsalis"],0,"erektor"),
    Q("Omuz silkme (omuzları kulağa doğru kaldırma) hareketini yapan kaslar hangileridir?",["Trapezius üst lifleri ve levator scapulae","Latissimus dorsi ve pectoralis major","Erector spinae ve rectus abdominis","Deltoideus ve triceps brachii"],0,"levator"),
    Q("Skapulayı omurgaya yaklaştıran (retraksiyon) ve trapeziusun altında yer alan kas hangisidir?",["Rhomboideus","Latissimus dorsi","Levator scapulae","Pectoralis major"],0,"romboid"),
    Q("Trapeziusun üst ve alt lifleri birlikte kasıldığında skapulaya hangi hareketi yaptırır?",["Yukarı rotasyon","Aşağı rotasyon","Protraksiyon","Sadece depresyon"],0,"trapez","Bu hareket kolun başın üzerine kaldırılabilmesi için gereklidir."),
    Q("Levator scapulae kasının origo'su nedir?",["C1–C4 transvers çıkıntılar","C7–T1 spinöz çıkıntılar","Protuberantia occipitalis externa","1. kaburga"],0,"levator"),

    // ---------- KARIN ----------
    Q("Os pubisten başlayıp 5–7. kaburga kıkırdakları ve processus xiphoideus'a yapışan kas hangisidir?",["Rectus abdominis","Obliquus externus abdominis","Transversus abdominis","Obliquus internus abdominis"],0,"rectusabd"),
    Q("Ön karın duvarı kaslarının ortak siniri hangisidir?",["T7–T12 interkostal sinirler","N. phrenicus","N. femoralis","N. accessorius"],0,"obint","Obliquus internus ve transversus abdominis ayrıca n. iliohypogastricus ve n. ilioinguinalis (L1) dallarını da alır."),
    Q("Mekik (crunch) hareketinin ana kası hangisidir?",["Rectus abdominis","Transversus abdominis","Erector spinae","Latissimus dorsi"],0,"rectusabd"),
    Q("Gövdeyi SAĞA döndürürken birlikte çalışan oblik kaslar hangileridir?",["Sağ obliquus internus ve sol obliquus externus","Sağ obliquus externus ve sol obliquus internus","Her iki taraf rectus abdominis","Her iki taraf transversus abdominis"],0,"obext","Obliquus externus KARŞI tarafa, obliquus internus AYNI tarafa döndürür. Sağa dönüşte sağ iç ve sol dış oblik birlikte çalışır."),
    Q("Lifleri yatay uzanan, hareket yaptırmayıp karın içi basıncı artıran ve gövdeyi stabilize eden kas hangisidir?",["Transversus abdominis","Rectus abdominis","Obliquus externus abdominis","Quadratus lumborum"],0,"transabd"),
    Q("Ligamentum inguinale hangi kasın aponevrozunun alt kenarından oluşur?",["Obliquus externus abdominis","Rectus abdominis","Transversus abdominis","Pectoralis major"],0,"obext"),
    Q("Aşağıdakilerden hangisi karın kaslarının ortak fonksiyonudur?",["Karın içi basıncı artırmak (öksürme, ıkınma, zorlu ekspirasyon)","Kalça fleksiyonu","Skapula elevasyonu","Gövde ekstansiyonu"],0,"transabd"),

    // ---------- OMUZ VE KOL ----------
    Q("Aşağıdaki kaslardan hangisi n. musculocutaneus ile innerve EDİLMEZ?",["Triceps brachii","Biceps brachii","Brachialis","Coracobrachialis"],0,"triceps","Kolun ön kompartmanı (biceps, brachialis, coracobrachialis) n. musculocutaneus, arka kompartmanı (triceps) n. radialis ile innerve edilir."),
    Q("Humerus cerrahi boyun kırığı sonrası kolunu yana kaldıramayan hastada hangi sinir-kas çifti etkilenmiştir?",["N. axillaris – deltoideus","N. radialis – triceps","N. musculocutaneus – biceps","N. accessorius – trapezius"],0,"deltoid"),
    Q("Pectoralis major kasının insertio'su nerededir?",["Crista tuberculi majoris (sulcus intertubercularis lateral dudağı)","Processus coracoideus","Tuberositas deltoidea","Sulcus intertubercularis tabanı"],0,"pmaj","Sulcus intertubercularis TABANI latissimus dorsinin yapışma yeridir."),
    Q("Önkolun en güçlü supinatörü hangi kastır?",["Biceps brachii","Brachialis","Triceps brachii","Brachioradialis"],0,"biceps"),
    Q("Önkol pronasyonda bile dirsek fleksiyonu yapabilen, dirseğin asıl fleksörü olan kas hangisidir?",["Brachialis","Biceps brachii","Brachioradialis","Pronator teres"],0,"brachialis","Brachialis ulnaya yapıştığı için önkolun dönmesinden etkilenmez."),
    Q("Triceps brachii kasının siniri ve insertio'su hangisidir?",["N. radialis – olecranon","N. ulnaris – olecranon","N. musculocutaneus – tuberositas ulnae","N. axillaris – olecranon"],0,"triceps"),
    Q("Tuberculum infraglenoidale'den başlayan kas hangisidir?",["Triceps brachii uzun başı","Biceps brachii uzun başı","Biceps brachii kısa başı","Brachialis"],0,"triceps","Biceps uzun başı tuberculum SUPRAglenoidale'den, kısa başı processus coracoideus'tan başlar."),
    Q("Deltoideusun ARKA lifleri omuzda hangi hareketleri yapar?",["Ekstansiyon ve dış rotasyon","Fleksiyon ve iç rotasyon","Abduksiyon","Addüksiyon ve iç rotasyon"],0,"deltoid"),

    // ---------- ÖN KOL ----------
    Q("Ön kol kaslarının ortak origo'ları için hangisi doğrudur?",["Fleksörler epicondylus medialis'ten, ekstansörler epicondylus lateralis'ten başlar","Fleksörler epicondylus lateralis'ten, ekstansörler epicondylus medialis'ten başlar","İkisi de olecranon'dan başlar","İkisi de tuberositas radii'den başlar"],0,"fcr"),
    Q("Ön kol fleksörlerinden hangileri n. ulnaris ile innerve edilir?",["Flexor carpi ulnaris ve flexor digitorum profundus'un medial yarısı","Flexor carpi radialis ve palmaris longus","Pronator teres ve flexor digitorum superficialis","Flexor pollicis longus ve pronator quadratus"],0,"fdp","Geri kalan bütün ön kol fleksörleri n. medianus ile innerve edilir."),
    Q("El bileğini ve parmakları kaldıramayan, 'düşük el' (wrist drop) tablosu olan hastada hangi sinir hasarlıdır?",["N. radialis","N. ulnaris","N. medianus","N. musculocutaneus"],0,"ed"),
    Q("Tenisçi dirseğinde (lateral epikondilit) en sık etkilenen tendon hangisidir?",["Extensor carpi radialis brevis","Flexor carpi radialis","Pronator teres","Biceps brachii"],0,"ecrb"),
    Q("Golfçü dirseği (medial epikondilit) hangi yapıyı etkiler?",["Epicondylus medialis'teki ortak fleksör tendonu","Epicondylus lateralis'teki ortak ekstansör tendonu","Biceps tendonu","Olecranon bursası"],0,"fcr"),
    Q("Flexor digitorum superficialis ve profundus kaslarının insertio farkı nedir?",["Superficialis orta falankslara, profundus distal falankslara yapışır","Superficialis distal falankslara, profundus orta falankslara yapışır","İkisi de metakarplara yapışır","İkisi de proksimal falankslara yapışır"],0,"fds"),
    Q("Pronasyonun ana kası olan ve n. medianus (n. interosseus anterior) ile innerve edilen kas hangisidir?",["Pronator quadratus","Supinator","Brachioradialis","Extensor carpi ulnaris"],0,"pq"),
    Q("Siniri n. radialis olduğu hâlde dirsek FLEKSİYONU yapan kas hangisidir?",["Brachioradialis","Triceps brachii","Anconeus","Extensor digitorum"],0,"brrad"),
    Q("İçinden n. radialis derin dalının geçtiği kas hangisidir?",["Supinator","Pronator teres","Flexor carpi ulnaris","Brachialis"],0,"sup","N. medianus ise pronator teresin iki başı arasından geçer."),

    // ---------- KALÇA VE UYLUK ----------
    Q("Gluteus maximus kasının siniri hangisidir?",["N. gluteus inferior","N. gluteus superior","N. femoralis","N. ischiadicus"],0,"gmax"),
    Q("Oturduğu yerden kalkarken ve merdiven çıkarken en çok çalışan kalça ekstansörü hangisidir?",["Gluteus maximus","Tensor fasciae latae","Rectus femoris","Adductor longus"],0,"gmax"),
    Q("SIAS'tan başlayıp tractus iliotibialis'e yapışan ve n. gluteus superior ile innerve edilen kas hangisidir?",["Tensor fasciae latae","Gluteus maximus","Rectus femoris","Biceps femoris"],0,"tfl"),
    Q("Quadriceps femoris kasının siniri ve ortak insertio'su hangisidir?",["N. femoralis – lig. patellae ile tuberositas tibiae","N. ischiadicus – caput fibulae","N. obturatorius – linea aspera","N. femoralis – tibia medial kondili"],0,"rf"),
    Q("Quadricepsin hem kalça fleksiyonu hem diz ekstansiyonu yapan ve SIAI'dan başlayan başı hangisidir?",["Rectus femoris","Vastus lateralis","Vastus medialis","Vastus intermedius"],0,"rf"),
    Q("Patellayı medialde stabilize eden ve patellanın dışa kaymasını engelleyen kas hangisidir?",["Vastus medialis (VMO)","Vastus lateralis","Biceps femoris","Tensor fasciae latae"],0,"vm"),
    Q("Hamstring kaslarının ortak origo'su neresidir?",["Tuber ischiadicum","SIAS","SIAI","Trochanter major"],0,"st","Tek istisna biceps femorisin kısa başıdır, linea aspera'dan başlar."),
    Q("Biceps femoris kasının insertio'su nerededir?",["Caput fibulae","Tibia üst medial yüzü (pes anserinus)","Tibia medial kondilinin arka yüzü","Tuberositas tibiae"],0,"bf"),
    Q("Listedeki hamstringlerden hangisi pes anserinus'un yapısına katılır?",["Semitendinosus","Semimembranosus","Biceps femoris","Adductor magnus"],0,"st"),
    Q("Semimembranosus kasının insertio'su nerededir?",["Tibia medial kondilinin arka yüzü","Caput fibulae","Tuberositas tibiae","Tuberculum adductorium"],0,"sm"),
    Q("Hamstring kaslarının siniri için hangisi doğrudur?",["Hepsi n. ischiadicus tibial kısmından, yalnızca biceps femoris kısa başı fibular kısımdan innerve edilir","Hepsi n. femoralis ile innerve edilir","Hepsi n. obturatorius ile innerve edilir","Hepsi n. gluteus inferior ile innerve edilir"],0,"bf"),
    Q("Addüktör kaslarının ana siniri hangisidir ve hangi addüktör çift sinirlidir?",["N. obturatorius; adductor magnus (hamstring kısmı n. ischiadicus)","N. femoralis; adductor longus","N. ischiadicus; adductor brevis","N. gluteus superior; adductor magnus"],0,"amag"),
    Q("Futbolcularda 'kasık gerilmesi' denince en sık yaralanan addüktör hangisidir?",["Adductor longus","Adductor magnus","Adductor brevis","Semimembranosus"],0,"along"),

    // ---------- BACAK ----------
    Q("Tibialis anterior kasının siniri ve fonksiyonu hangisidir?",["N. fibularis profundus – dorsifleksiyon ve inversiyon","N. tibialis – plantar fleksiyon","N. fibularis superficialis – eversiyon","N. femoralis – diz ekstansiyonu"],0,"tant"),
    Q("Ayak ucunu kaldıramayan, yürürken ayağı yere sürten (stepaj yürüyüşü, düşük ayak) hastada hangi kas felçtir?",["Tibialis anterior","Gastrocnemius","Soleus","Peroneus brevis"],0,"tant","Neden genellikle n. fibularis (peroneus) hasarıdır."),
    Q("Peroneus brevis ve peroneus longus kaslarının insertio'ları için hangisi doğrudur?",["Brevis 5. metatars tabanına, longus os cuneiforme mediale ve 1. metatars tabanına yapışır","İkisi de 5. metatars tabanına yapışır","İkisi de tuber calcanei'ye yapışır","Brevis 1. metatarsa, longus 5. metatarsa yapışır"],0,"pbrev"),
    Q("Peroneus kaslarının ortak siniri ve ortak fonksiyonu hangisidir?",["N. fibularis superficialis – eversiyon","N. fibularis profundus – dorsifleksiyon","N. tibialis – inversiyon","N. femoralis – plantar fleksiyon"],0,"plong"),
    Q("Gastrocnemius ve soleus kaslarının ortak siniri ve insertio'su hangisidir?",["N. tibialis – Aşil tendonu ile tuber calcanei","N. fibularis profundus – 1. metatars","N. femoralis – tuberositas tibiae","N. fibularis superficialis – 5. metatars"],0,"gastro"),
    Q("Gastrocnemius neden diz düzken plantar fleksiyonda daha etkindir?",["Femur kondillerinden başlayıp diz eklemini geçtiği için","Tibiadan başladığı için","N. femoralis ile innerve edildiği için","Aşil tendonuna yapışmadığı için"],0,"gastro"),
    Q("Dizi geçmeyen, diz bükülüyken plantar fleksiyonda baskın olan ve venöz pompa görevi nedeniyle 'ikinci kalp' denen kas hangisidir?",["Soleus","Gastrocnemius","Tibialis anterior","Peroneus longus"],0,"soleus"),

    // ---------- YÜZ ----------
    Q("Mimik kaslarının siniri hangisidir?",["N. facialis (VII)","N. trigeminus (V)","N. hypoglossus (XII)","N. accessorius (XI)"],0,"zyg"),
    Q("Masseter ve temporalis kaslarının siniri hangisidir?",["N. trigeminus mandibular dalı (V3)","N. facialis (VII)","N. hypoglossus (XII)","N. vagus (X)"],0,"masseter","Bunlar çiğneme kaslarıdır. Mimik kaslarıyla karıştırmamak gerekir."),
    Q("Bell paralizisi (n. facialis felci) olan hasta gözünü neden kapatamaz?",["Orbicularis oculi felç olduğu için","Masseter felç olduğu için","Temporalis felç olduğu için","Occipitofrontalis kasıldığı için"],0,"oculi"),
    Q("Yanağı dişlere bastıran ve çiğnemede lokmayı dişler arasında tutan ama mimik kası olan kas hangisidir?",["Buccinator","Masseter","Temporalis","Zygomaticus major"],0,"bucc"),
    Q("Gülümsemede ağız köşesini yukarı ve dışa çeken kas hangisidir?",["Zygomaticus major","Orbicularis oris","Platysma","Corrugator supercilii"],0,"zyg"),

    // ---------- KARMA ----------
    Q("Aşağıdaki kaslardan hangisi İKİ eklemi birden geçer?",["Rectus femoris","Vastus lateralis","Soleus","Brachialis"],0,"rf","Gastrocnemius, biceps brachii, triceps uzun başı ve hamstringler (biceps femoris kısa başı hariç) de iki eklemli kaslardır."),
    Q("Hangi kas çiftinin insertio'su aynı yerdir (os cuneiforme mediale ve 1. metatars tabanı)?",["Tibialis anterior – peroneus longus","Tibialis anterior – peroneus brevis","Gastrocnemius – tibialis anterior","Soleus – peroneus longus"],0,"plong","Bu iki kas ayak tabanında bir 'üzengi' oluşturur."),
    Q("Aşağıdaki kas–sinir eşleştirmelerinden hangisi DOĞRUDUR?",["Soleus – n. tibialis","Tibialis anterior – n. tibialis","Peroneus longus – n. fibularis profundus","Gastrocnemius – n. femoralis"],0,"soleus")
    ]
  });
})();
