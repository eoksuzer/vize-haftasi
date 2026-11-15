// ============================================================
//  SORU BANKASI
//  Yeni test eklemek için TESTS dizisine yeni bir nesne ekle.
//  id   : benzersiz, değiştirme (ilerleme buna bağlı)
//  date : eklendiği gün (YYYY-MM-DD) -> "YENİ" rozeti buna göre çıkar
//  a    : doğru seçeneğin indeksi (0,1,2,3)
//  e    : açıklama (yanlış yapınca gösterilir)
// ============================================================

window.SITE = {
  title: "Vize Haftası",
  course: "Manipülasyon 1 · Klasik Masaj",
  version: 1
};

window.TESTS = [
  {
    id: "t1-teknikler",
    lesson: "Ders 1",
    title: "Masaj Teknikleri ve Sınıflandırma",
    desc: "Klasik masaj, çağdaş teknikler, Doğu ve melez kültür teknikleri",
    date: "2026-11-15",
    questions: [
      {
        q: "Masajın tanımında yer alan temel hareketler arasında aşağıdakilerden hangisi YOKTUR?",
        o: ["Stroking (effleurage)", "Friksiyon", "Traksiyon", "Vibrasyon"],
        a: 2,
        e: "Masaj; stroking, friksiyon, vibrasyon, perküsyon, kneading, germe ve kompresyon hareketlerinin kombinasyonudur. Traksiyon masaj hareketi değildir."
      },
      {
        q: "Aşağıdakilerden hangisi Batı kültürlerindeki 'çağdaş masaj teknikleri' arasında yer ALMAZ?",
        o: ["Derin doku masajı", "Manuel lenfatik drenaj masajı", "Akupressure", "Spor masajı"],
        a: 2,
        e: "Akupressure ve Shiatsu Doğu kültürü teknikleridir. Çağdaş Batı teknikleri: derin doku, transvers friksiyon, miyofasyal gevşetme, yumuşak doku mobilizasyonu, konnektif doku, nöromusküler, spor masajı ve manuel lenfatik drenaj."
      },
      {
        q: "Klasik (İsveç) masaj hangi yönde uygulanır?",
        o: ["Kalpten uzağa doğru", "Kalbe doğru, kan akımı yönünü izleyerek", "Kas liflerine dik yönde", "Yön önemli değildir"],
        a: 1,
        e: "Klasik masaj (Geleneksel Avrupa / İsveç masajı) yüzeydeki kas kitlelerine, kalbe doğru olan kan akımının yönünü izleyerek uygulanır."
      },
      {
        q: "Derin doku masajı için klasik masaja kıyasla hangisi doğrudur?",
        o: ["Basınç daha az, hareketler daha hızlıdır", "Basınç daha fazla, hareketler daha yavaştır", "Basınç daha fazla, hareketler daha hızlıdır", "Basınç ve hız aynıdır"],
        a: 1,
        e: "Derin doku masajında basıncın şiddeti klasik masaja göre daha fazladır ve hareketler daha yavaş yapılır."
      },
      {
        q: "Aşağıdakilerden hangisi derin doku masajının KULLANILMADIĞI durumlardan biri DEĞİLDİR?",
        o: ["İleri derecede osteoporoz", "Açık yaralar", "Kronik ağrı", "Kan pıhtılaşmasına yatkınlık"],
        a: 2,
        e: "Kronik ağrı derin doku masajının kullanım alanlarından biridir. Osteoporoz, açık yara, pıhtılaşma yatkınlığı, gebelik ve kemoterapi/radyoterapi sonrası (doktor önerisi olmadan) ise kontrendikasyondur."
      },
      {
        q: "Transvers friksiyon masajı AKUT durumlarda ne kadar süre uygulanır?",
        o: ["1-2 dakika", "5-10 dakika", "15-20 dakika", "30 dakika"],
        a: 0,
        e: "Akut durumlarda 1-2 dakika, kronik durumlarda 15-20 dakika uygulanır."
      },
      {
        q: "Transvers friksiyon masajı doku liflerine göre hangi yönde uygulanır?",
        o: ["Liflere paralel", "Liflere dik (transvers)", "Kalbe doğru", "Dairesel"],
        a: 1,
        e: "Adından da anlaşılacağı gibi doku liflerine dik/transvers yönde uygulanır. Tek nokta üzerine uygulanan lokal bir tekniktir, iyi anatomi bilgisi gerektirir."
      },
      {
        q: "Transvers friksiyon masajının kronik yaralanmalardaki amacı nedir?",
        o: ["Kas tonusunu artırmak", "Oluşmuş fibröz doku yapışıklıklarını parçalamak", "Lenfatik drenajı artırmak", "Kalp hızını düşürmek"],
        a: 1,
        e: "Akut yaralanmalardan sonra fibröz yapışıklık oluşumunu engellemek, kronik yaralanmalardan sonra ise oluşmuş yapışıklıkları parçalamak amaçlanır."
      },
      {
        q: "İndirekt miyofasyal gevşetmede bariyer üzerine uygulanan hafif basınç ne kadar sürdürülür?",
        o: ["30 saniye", "1-2 dakika", "3-5 dakika", "15-20 dakika"],
        a: 2,
        e: "Bariyer hissedilene kadar germe yapılır, bariyer üzerindeki hafif basınç 3-5 dakika sürdürülür. Basınç gevşetilmeden önce ısı artışı gibi terapötik bir işaret hissedilmelidir."
      },
      {
        q: "Direkt miyofasyal gevşetme tekniğinde uygulanan kuvvet ne kadardır?",
        o: ["Birkaç gram", "Birkaç kilogram", "Vücut ağırlığının tamamı", "Kuvvet uygulanmaz"],
        a: 1,
        e: "Direkt teknikte gergin fasya; parmak eklemlerinin dış yüzleri, dirsekler veya araçlarla birkaç kilogramlık kuvvetle esnetilir. İndirekt teknikte ise sadece birkaç gramlık basınç uygulanır."
      },
      {
        q: "Konnektif doku masajı hangi refleksleri uyararak iç organlarda etki oluşturur?",
        o: ["Golgi tendon refleksleri", "Kutaneoviseral refleksler", "H refleksi", "Miyotatik refleksler"],
        a: 1,
        e: "Konnektif doku masajı otonom sinir sistemi aracılığıyla kutaneoviseral refleksleri uyarır; derideki dermatomlarla aynı inervasyonu paylaşan iç organlarda tedavi edici etki oluşturur."
      },
      {
        q: "'Trigger nokta masajı' veya 'miyoterapi' olarak da bilinen teknik hangisidir?",
        o: ["Nöromusküler masaj", "Konnektif doku masajı", "Spor masajı", "Shiatsu"],
        a: 0,
        e: "Nöromusküler masaj tek tek kaslar üzerine yüzeyel basınçla uygulanır; trigger noktaları gevşetir, kas spazmını ve sinirler üzerindeki basıncı azaltır."
      },
      {
        q: "Manuel lenfatik drenaj masajı en sık hangi durumda uygulanır?",
        o: ["Spor yaralanmaları sonrası", "Mastektomi sonrası", "Osteoartrit", "Bel ağrısı"],
        a: 1,
        e: "Lenfatik sıvı drenajına yardım için hafif ve ritmik uygulanır; en sık mastektomi sonrasında kullanılır."
      },
      {
        q: "Akupressure hangi maddelerde artış meydana getirerek ağrı ve stresi azaltır?",
        o: ["Kortizol", "Endojen opiatlar", "Laktat", "Adrenalin"],
        a: 1,
        e: "Akupressure Qi akışını etkiler, akupunktur veya trigger noktalara parmak/başparmakla basınç uygulanır ve endojen opiatlarda artış sağlar. Shiatsu bunun Japon versiyonudur."
      },
      {
        q: "Refleksolojide vücuttaki tüm organların temsil edildiği kabul edilen bölge neresidir?",
        o: ["Avuç içi", "Kafatası", "Ayak tabanı", "Sırt"],
        a: 2,
        e: "Refleksoloji, tüm organların ayak tabanında temsil edildiği kabul edilen refleks noktalara manuel basınç uygulamasıdır. Kranio-sakral terapi ise kafatasına hafif basınçla serebrospinal sıvı ritmini değiştirmeyi amaçlar."
      }
    ]
  },
  {
    id: "t2-etkiler",
    lesson: "Ders 1",
    title: "Masajın Etkileri",
    desc: "Deri, dolaşım, metabolizma, kas-iskelet, sinir sistemi etkileri",
    date: "2026-11-15",
    questions: [
      {
        q: "Aşağıdakilerden hangisi masajın derideki etkilerinden biri DEĞİLDİR?",
        o: ["Sebum üretimini artırır", "Yüzeydeki kapillerin dilatasyonunu sağlar", "Ter üretimini azaltır", "Ölü hücreleri uzaklaştırır"],
        a: 2,
        e: "Masaj ter bezlerinden ter üretimini ARTIRIR. Ayrıca kan dolaşımını artırır, üre ve atık atılımına yardım eder, sebum üretimini artırarak deriyi enfeksiyonlara dirençli kılar."
      },
      {
        q: "Masajın obezite üzerindeki etkisi için hangisi doğrudur?",
        o: ["Genel şişmanlığı azaltır", "Lokal yağ birikintilerini eritir", "Genel şişmanlık ve lokal yağ birikintisi üzerinde etkisi yoktur", "Sadece bel çevresinde etkilidir"],
        a: 2,
        e: "Masajın genel şişmanlık üzerinde de, lokal yağ birikintisini azaltmada da etkisi yoktur. Sınav klasiği!"
      },
      {
        q: "Masaj iç organlar üzerinde hangi sinir sisteminin aktivitesini artırır?",
        o: ["Sempatik", "Parasempatik", "Somatik", "Enterik olmayan"],
        a: 1,
        e: "Masaj parasempatik sinir sistemi aktivitesini artırır; kalın bağırsak peristaltizmini artırır, abdominal distansiyonu, konstipasyon, kolik ve gaz yakınmalarını azaltır, akciğerdeki mukusun çözülmesine yardım eder."
      },
      {
        q: "Masajın kan akımına etkileri için hangisi YANLIŞTIR?",
        o: ["Yüzeyel venlerdeki venöz dönüşe yardım eder", "Venostazı engeller", "Antikoagülan etkisi vardır", "Venöz basıncı artırır"],
        a: 3,
        e: "Masaj venöz basıncı AZALTARAK arteriyel dolaşımın artmasına yardım eder."
      },
      {
        q: "Masaj lenfatik akımı artırarak hangi hücrelerde artışa yol açar ve immün sistemi güçlendirir?",
        o: ["Eritrositler", "Trombositler", "Beyaz küreler (lökositler)", "Fibroblastlar"],
        a: 2,
        e: "Lenfatik drenajı artırıp atık ürünleri uzaklaştırarak ödemi azaltır; beyaz kürelerde artışa yol açarak immün sistemi güçlendirir."
      },
      {
        q: "Masaj kasa olan kan akımını artırarak hangi maddenin kastan uzaklaştırılmasına yardım eder?",
        o: ["Glikojen", "Laktat", "Kreatin", "Kalsiyum"],
        a: 1,
        e: "Masaj oksidasyon ve difüzyonu artırarak laktatın kastan uzaklaştırılmasına yardım eder; gecikmiş kas ağrısını ve yorgunluğu azaltır, kasın kan hacmini artırır."
      },
      {
        q: "Masajın H refleks amplitüdü üzerindeki etkisi nedir?",
        o: ["Kalıcı olarak artırır", "Geçici olarak düşürür", "Etkilemez", "Kalıcı olarak düşürür"],
        a: 1,
        e: "Masaj kasın alfa motor nöron eksitabilitesini inhibe eder ve H refleks amplitüdünü GEÇİCİ olarak düşürür."
      },
      {
        q: "Masaj kasın alfa motor nöron eksitabilitesini nasıl etkiler?",
        o: ["Artırır", "İnhibe eder", "Önce artırır sonra azaltır", "Etkilemez"],
        a: 1,
        e: "Sinir sistemi etkileri: alfa motor nöron eksitabilitesini inhibe eder, H refleks amplitüdünü geçici olarak düşürür."
      },
      {
        q: "İsveç masajı otonom sinir sisteminde hangi etkiyi oluşturur?",
        o: ["Sempatik aktivasyon, kalp hızı artar", "Parasempatik aktivasyon, kalp hızı azalır", "Sempatik aktivasyon, kalp hızı azalır", "Otonom sistemi etkilemez"],
        a: 1,
        e: "İsveç masajı parasempatik sistemi aktive eder, gevşeme oluşturarak kalp hızını azaltır ve endorfin salınımıyla ağrının azalmasına yardım eder."
      },
      {
        q: "Masajın ağrıyı azaltmasında rol oynayan, salınımı artan madde hangisidir?",
        o: ["Endorfin", "Kortizol", "Histamin", "İnsülin"],
        a: 0,
        e: "Masaj endorfinlerin salınımını sağlayarak ağrının azaltılmasına yardım eder."
      },
      {
        q: "Yaralanma sonrası masajla dıştan uygulanan mekanik basınç skar dokusunda neyi düzeltebilir?",
        o: ["Kan grubunu", "Kollajen tipini", "Kas lif tipini", "Kemik yoğunluğunu"],
        a: 1,
        e: "Masaj subkutan skar dokusunu ve fibrozisi gevşetir, deri-deri altı yapışıklıkları önler ve yaralanma sonrası kollajen tipini düzeltebilir."
      },
      {
        q: "Aşağıdakilerden hangisi PARASEMPATİK sistem aktivasyonunun bir bulgusudur?",
        o: ["Pupillar dilatasyon", "Bronşlarda dilatasyon", "Kalp hızında azalma", "Terlemede artış"],
        a: 2,
        e: "Parasempatik: pupil konstriksiyonu, tükürükte artış, kalp hızında azalma, bronş konstriksiyonu, sindirim ve barsak fonksiyonunda artış. Sempatik: pupil dilatasyonu, terleme artışı, kalp hızı artışı, bronş dilatasyonu."
      }
    ]
  },
  {
    id: "t3-odem-agri",
    lesson: "Ders 1",
    title: "Ödem, Seröz Kaviteler ve Ağrı",
    desc: "Ödem fizyolojisi, gode bırakan/bırakmayan ödem, efüzyon, ağrı lifleri",
    date: "2026-11-15",
    questions: [
      {
        q: "Ödem nedir?",
        o: ["Hücre içinde aşırı sıvı toplanması", "Dokularda aşırı miktarda interstisyel sıvı toplanması", "Kanda plazma hacminin artması", "Lenf düğümlerinin büyümesi"],
        a: 1,
        e: "Ödem, dokularda aşırı miktarda interstisyel sıvı toplanmasıdır. Bir hastalık değil, bozulan fizyolojik fonksiyonun göstergesidir."
      },
      {
        q: "Aşağıdakilerden hangisi ödemin fizyolojik nedenlerinden biri DEĞİLDİR?",
        o: ["Kapiller filtrasyon basıncında artma", "Kapiller kolloid ozmotik basınçta ARTMA", "Kapiller permeabilitede artma", "Lenfatik akışta tıkanma"],
        a: 1,
        e: "Ödeme yol açan, kapiller kolloid ozmotik basınçta AZALMADIR (proteinler sıvıyı damar içinde tutar). Diğer üçü doğru nedenlerdir."
      },
      {
        q: "Hangi bölgede gelişen akut ödem hayati tehlike oluşturur?",
        o: ["Ayak bileği", "El", "Larinks", "Diz"],
        a: 2,
        e: "Beyin, larinks ve akciğerlerde gelişen akut ödem hayati tehlike oluşturur. Ekstremite ödemi ise eklem hareketini limitler ve basınç yaralarına açıktır."
      },
      {
        q: "Gode bırakmayan ödemde bastırınca neden çukur oluşmaz?",
        o: ["Sıvı tamamen emilmiştir", "Proteinler dokuda birikip koagüle olmuş, doku sertleşmiştir", "Dokuda hiç sıvı yoktur", "Kapiller basınç çok düşüktür"],
        a: 1,
        e: "Protein birikimi + koagülasyon → doku sertleşir → sıvı kolayca yer değiştiremez → çukur oluşmaz. Gode bırakan ödemde ise daha fazla serbest sıvı vardır, bastırınca sıvı yer değiştirir ve çukur oluşur."
      },
      {
        q: "Peritoneal kavitede fazla sıvı birikmesine ne ad verilir?",
        o: ["Plevral efüzyon", "Perikardiyal efüzyon", "Asit (ascites)", "Hidrosefali"],
        a: 2,
        e: "Plevral kavite → plevral efüzyon, perikardiyal kavite → perikardiyal efüzyon, peritoneal kavite → asit (ascites)."
      },
      {
        q: "Parasentez nedir?",
        o: ["Plevradan sıvı alınması", "Karın boşluğunda biriken sıvının iğne veya kateterle alınması", "Eklem içine ilaç verilmesi", "Lenf düğümü biyopsisi"],
        a: 1,
        e: "Asit sıvısının nedenini araştırmak veya fazla sıvıyı uzaklaştırmak amacıyla karın boşluğundaki sıvı iğne/kateter yardımıyla alınır."
      },
      {
        q: "Seröz kavitelerde normalde bulunan az miktardaki sıvının temel görevi nedir?",
        o: ["Organları beslemek", "Organ hareketleri sırasında oluşan sürtünmeyi azaltmak", "Enfeksiyonu önlemek", "Isıyı dengelemek"],
        a: 1,
        e: "Seröz membranlar iki tabakadan oluşur, arasında seröz kavite bulunur. Sıvının temel görevi organ hareketlerindeki sürtünmeyi azaltmaktır. Sıvı oluşumu lenfatik drenajı aşarsa efüzyon gelişir."
      },
      {
        q: "Serbest sinir uçlarındaki ağrı reseptörlerinden köken alan lifler hangileridir?",
        o: ["A alfa ve A beta", "A delta ve C", "Sadece A alfa", "B lifleri"],
        a: 1,
        e: "Ağrı reseptörlerinden köken alan lifler A delta ve C lifleridir. Mekanoreseptörlerden köken alan miyelinli kalın lifler ise A alfa ve A beta'dır."
      },
      {
        q: "Kapı kontrol teorisine göre kalın çaplı (A) liflerin uyarılması ağrı iletimini nasıl etkiler?",
        o: ["Kapıyı açar, ağrı artar", "Kapıyı kapatır, ağrı azalır", "Etkisi yoktur", "Sadece kronik ağrıyı artırır"],
        a: 1,
        e: "Kalın çaplı A lifleri substantia gelatinosa (SG) üzerinden T transmisyon hücrelerini inhibe eder, 'kapı' kapanır ve ağrı azalır. Masajın (özellikle yüzeyel stroking) ağrıyı azaltma mekanizması budur."
      },
      {
        q: "Aşağıdakilerden hangisi ödem tedavisinde YER ALMAZ?",
        o: ["Elevasyon", "Sıcak uygulama", "Elastik bandaj ve çoraplar", "Masaj"],
        a: 1,
        e: "Ödem tedavisinde SOĞUK uygulama yer alır. Diğerleri: altta yatan hastalığın tedavisi, sodyum ve sıvı kısıtlaması, elevasyon, masaj, elektroterapi, splintleme, elastik bandaj, normal eklem hareketleri."
      }
    ]
  },
  {
    id: "t4-prensipler-hareketler",
    lesson: "Ders 2",
    title: "Genel Prensipler ve Masaj Hareketleri",
    desc: "Vücut mekaniği, ekipman, tedavi ortamı, stroking / kneading / friction / tapotement",
    date: "2026-11-15",
    questions: [
      {
        q: "Masaj uygulamasında DOĞRU bilek pozisyonu kaç derecedir?",
        o: ["90 derece", "120-130 derece", "180 derece", "45 derece"],
        a: 1,
        e: "Doğru bilek pozisyonu 120-130 derecedir. 90 derecelik bilek pozisyonu hatalıdır ve terapistin bileğini zorlar."
      },
      {
        q: "Tedavi ortamında ideal oda sıcaklığı kaç derece olmalıdır?",
        o: ["18-19 °C", "20-21 °C", "23-24 °C", "27-28 °C"],
        a: 2,
        e: "Tedavi ortamı sessiz ve temiz olmalı, oda sıcaklığı 23-24 derece olmalı, hafif müzik kullanılabilir."
      },
      {
        q: "Aşağıdakilerden hangisi masaj hareketlerinin üç ANA grubundan biri DEĞİLDİR?",
        o: ["Stroking", "Compression", "Percussion", "Pinching"],
        a: 3,
        e: "Üç ana grup: Stroking (effleurage), Compression (kneading + friction) ve Percussion (tapotement + shaking/vibrasyon). Pinching, kneading'in alt tipidir."
      },
      {
        q: "Aşağıdakilerden hangisi kneading (petrissage) alt tiplerinden biri DEĞİLDİR?",
        o: ["Pinching", "Wringing", "Rolling", "Hacking"],
        a: 3,
        e: "Kneading alt tipleri: pinching, wringing, rolling. Hacking bir tapotement (perküsyon) hareketidir."
      },
      {
        q: "Aşağıdakilerden hangisi tapotement hareketlerinden biri DEĞİLDİR?",
        o: ["Hacking", "Clapping", "Wringing", "Pounding"],
        a: 2,
        e: "Tapotement: hacking, clapping, slapping, tapping, beating, pounding. Wringing kneading alt tipidir."
      },
      {
        q: "Aşağıdakilerden hangisi YÜZEYEL stroking'in kullanım amaçlarından biri DEĞİLDİR?",
        o: ["Hastayı dokunmaya alıştırma", "Yağlayıcı maddenin dağıtılması", "Adezyonları açmak", "Dokunun değerlendirilmesi"],
        a: 2,
        e: "Yüzeyel stroking: dokunmaya alıştırma, hareketler arası geçiş, yağlayıcı dağıtma, doku değerlendirme. Adezyon açmak friction ve kneading'in mekanik etkisidir."
      },
      {
        q: "Kneading hangi hareketten SONRA kullanılır?",
        o: ["Tapotement'ten sonra", "Stroking'den sonra", "Vibrasyondan sonra", "Her zaman ilk hareket olarak"],
        a: 1,
        e: "Kneading stroking'den sonra kullanılır. Konjesyonu ve şişliği azaltır, sindirim bozuklukları, kas kısalıkları, spastik paralizi ve yorgunlukta kullanılır."
      },
      {
        q: "Aşağıdakilerden hangisi kneading için KONTRENDİKASYONDUR?",
        o: ["Spastik paralizi", "Flask paralizi", "Kas kısalıkları", "Yorgunluk"],
        a: 1,
        e: "Kneading kontrendikasyonları: atrofiye kaslar, flask paralizi, akut inflamasyon. Spastik paralizi ise kullanım alanlarından biridir, karıştırma!"
      },
      {
        q: "Transvers friksiyon hangi refleksi uyararak kasları gevşetir?",
        o: ["H refleksi", "Golgi tendon refleksi", "Kutaneoviseral refleks", "Babinski refleksi"],
        a: 1,
        e: "Transvers friksiyon skar/fibrotik dokuya dik açıda uygulanır, adezyonları açar, skar oluşumunu önler/parçalar ve Golgi tendon refleksini uyararak kasları gevşetir."
      },
      {
        q: "Tapotement'in mekanik etkisi aşağıdakilerden hangisidir?",
        o: ["Torasik kavitedeki mukusun çözülmesi", "Skarın çözülmesi", "Venöz dönüşün artması", "Deskuamasyon"],
        a: 0,
        e: "Tapotement postural drenaj amacıyla kullanılır; mekanik etkisi torasik kavitedeki mukusun çözülmesidir. Refleks etkileri: kas tonusunu artırır, dolaşımı artırır, organları stimüle eder."
      },
      {
        q: "Aşağıdakilerden hangisi tapotement için KONTRENDİKASYON DEĞİLDİR?",
        o: ["Kemik sahalar", "Böbrek bölgesi", "Yorgun kaslar", "İnsomnia"],
        a: 2,
        e: "Yorgun kaslarda stimülasyon sağlamak tapotement'in kullanım alanıdır. Kontrendikasyonlar: kas spazmı ve kramp, spastik/flask paralizi, kas atrofisi, insomnia, neuritis, kemik sahalar, böbrekler, gebelik ve menstruasyonda ağır tapotement."
      },
      {
        q: "Shaking hareketinin mekanik etkisi nedir?",
        o: ["Sinovyal aktiviteyi artırır", "Skar dokusunu parçalar", "Kas tonusunu artırır", "Mukusu çözer"],
        a: 0,
        e: "Shaking sinovyal aktiviteyi ve dolaşımı artırır; refleks olarak organlarda stimülasyon, koruyucu kas spazmında ve kassal yorgunlukta azalma sağlar. Vibrasyon ise gevşeme ve sedasyon amaçlıdır."
      },
      {
        q: "Masaj uygulamasında DOĞRU postür için aşağıdakilerden hangisi doğrudur?",
        o: ["Gövde öne eğilir, kuvvet kollardan alınır", "Bacaklar öne-arkaya açılır, vücut ağırlığı bacaklar üzerinden aktarılır", "Bilek 90 derecede sabit tutulur", "Dirsekler tam fleksiyonda kilitlenir"],
        a: 1,
        e: "Doğru postürde ağırlık bacaklar üzerinden verilir (ağırlık ver), sırt dik kalır. Hatalı postürde ağırlık öndedir, gövde öne eğilir ve bel zorlanır."
      }
    ]
  }
];
