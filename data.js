// ============================================================
//  SORU BANKASI
//  Yapı: DERS (COURSES) > KONU (units) > TEST
//
//  Yeni yükleme yaparken (index.html script etiketlerindeki ?v= değerini de artır):
//   1) SITE.version'ı 1 artır (ör. 2 -> 3)
//   2) Yeni testlere  v: <yeni sürüm>  yaz -> sitede "V3 · YENİ" diye çıkar
//   3) Test id'lerini sonradan değiştirme (ilerleme buna bağlı)
//  a : doğru seçeneğin indeksi (0,1,2,3)   e : açıklama
// ============================================================

window.SITE = {
  title: "Vize Haftası",
  version: 12,
  // Arşive alınan dersler: ana sayfada "Arşiv" bölümünde görünür, testler ve ilerleme korunur
  archived: ["manip1", "kaslar", "tid", "kalp"],
  notes: {
    1: "İlk yükleme: Ders 1 ve Ders 2 notlarından 4 test",
    2: "Kitap başlıklarına göre konu düzeni ve 8 yeni test",
    3: "Türk İşaret Dili dersi: 5 ünite, 100 görselli soru ve işaret kartları",
    4: "Masajda kas anatomisi: origo, insertio, sinir ve fonksiyon, 7 test",
    5: "Türk İşaret Dili 2. set: 5 test, 65 yeni soru ve gruplama soruları",
    6: "Kas Anatomisi sekmesi: ders kas listesinin tablosu (60 kas) ve 8 test, 91 soru",
    7: "Türk İşaret Dili Sınav Hazırlık: 1–5. ünitelerden 35 kritik soru",
    8: "Kas Anatomisi: Sınav öncesi mutlaka çözülmesi gereken 60 soru",
    9: "Yeni ders: Kalp ve Damar Hastalıkları, 8 test, 100 soru",
    10: "Dosya adlı testler: may3.key testi, Cocuk_Ergen_Psikiyatrisi_1_Ders_Fizyoterapi.key testi, fizyoterapi ders.pptx testi (3 × 50 soru)",
    11: "Yeni ders: Normal Motor Gelişim (salı klasörü), dosya adlı 6 test × 35 soru",
    12: "Yeni ders: Elektrofiziksel Ajanlar I (çarşamba klasörü), dosya adlı 5 test × 60 soru"
  }
};

window.COURSES = [
  {
    id: "manip1",
    name: "Manipülasyon 1",
    sub: "Klasik Masaj Teknikleri · Bölüm I",
    units: [
      { id: "1a-1c", code: "1a–1c", title: "Tarihçe, Tanım ve Sınıflandırma" },
      { id: "1d", code: "1d", title: "Masajın Etkileri" },
      { id: "1e", code: "1e", title: "Masaj ve Ağrı" },
      { id: "1f", code: "1f", title: "Kullanım Alanları ve Kontrendikasyonlar" },
      { id: "1g", code: "1g", title: "Masaj Uygulamasında Genel Prensipler" },
      { id: "1h", code: "1h", title: "Masaj Hareketleri" },
      { id: "1ı", code: "1ı", title: "Uygulama Teknikleri" },
      { id: "1i", code: "1i", title: "Mekanik Masaj Yöntemleri" }
    ]
  }
];

window.TESTS = [
  {
    id: "t1-teknikler",
    course: "manip1",
    unit: "1a-1c",
    v: 1,
    src: "Ders 1 notları",
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
    course: "manip1",
    unit: "1d",
    v: 1,
    src: "Ders 1 notları",
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
    course: "manip1",
    unit: "1d",
    v: 1,
    src: "Ders 1 notları",
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
    course: "manip1",
    unit: "1g",
    v: 1,
    src: "Ders 2 notları",
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
,
  // ===================== V2 =====================
  {
    id: "t5-tarihce",
    course: "manip1",
    unit: "1a-1c",
    v: 2,
    src: "Kitap 1a–1b + araştırma",
    title: "Tarihçe ve Masajın Tanımı",
    desc: "Kelimenin kökeni, tarihteki önemli isimler, terminoloji",
    date: "2026-11-15",
    questions: [
      {
        q: "'Masaj' kelimesinin kökenlerinden hangisi Yunanca 'yoğurmak' anlamına gelir?",
        o: ["Mass", "Massein", "Manus", "Masso"],
        a: 1,
        e: "Mass: dokunmak (Arapça), Massein: yoğurmak (Yunanca), Manus: el (Latince)."
      },
      {
        q: "Masaj terminolojisi ilk kez hangi kaynakta yer almıştır?",
        o: ["MÖ 2598'e ait Çin tıp kitaplarında", "Hipokrat'ın yazılarında", "İbn-i Sina'nın El-Kanun'unda", "Rönesans dönemi cerrahi kitaplarında"],
        a: 0,
        e: "Masajla ilgili ilk kitap MÖ 2598 yılına ait Çin tıp kitaplarıdır. Masaj daha sonra Asur, Babil, Hindistan, Mısır, Pers, Yunan ve Roma'da kullanılmıştır."
      },
      {
        q: "Tıbbı 'ovma sanatı' olarak tanımlayan, burkulma ve çıkıklarda friksiyon öneren hekim kimdir?",
        o: ["Galen", "Hipokrat", "Celsus", "Ambroise Paré"],
        a: 1,
        e: "Hipokrat (MÖ 460-375) burkulma ve çıkıklarda friksiyonu, kabızlıkta kneading'i önermiş ve sağlık çalışanlarının masajı iyi bilmesi gerektiğini vurgulamıştır."
      },
      {
        q: "Masajı ilk kez cerrahi sonrası eklem sertliği ve yara iyileşmesinde kullanan kişi kimdir?",
        o: ["Per Henrik Ling", "Ambroise Paré", "Johann Mezger", "İbn-i Sina"],
        a: 1,
        e: "16. yüzyılda Fransız cerrah Ambroise Paré (1510-1590), masajı cerrahi sonrası eklem sertliği ve yara iyileşmesinde kullanmıştır."
      },
      {
        q: "'El-Kanun Fi't-Tıp' adlı eserinde masajla ilgili bilgiler veren kimdir?",
        o: ["Galen", "Demokritos", "İbn-i Sina", "Celsus"],
        a: 2,
        e: "İbn-i Sina (Avicenna, MS 980-1037) El-Kanun Fi't-Tıp adlı eserinde masajdan bahsetmiştir."
      },
      {
        q: "Masajın kilise tarafından yasaklanıp itibarını kaybettiği, sonra yeniden önem kazandığı dönemler hangisidir?",
        o: ["Antik Yunan'da yasaklandı, Roma'da önem kazandı", "Orta Çağ'da yasaklandı, Rönesans ile önem kazandı", "Rönesans'ta yasaklandı, 19. yüzyılda önem kazandı", "Hiç yasaklanmadı"],
        a: 1,
        e: "Orta Çağ'da kilise tarafından yasaklanan masaj, 14. yüzyıl sonlarında Rönesans ile yeniden önem kazanmıştır."
      },
      {
        q: "İsveç masajı denince akla gelen isim kimdir?",
        o: ["Per Henrik Ling", "Ambroise Paré", "Hipokrat", "Zabludowski"],
        a: 0,
        e: "İsveç masajı Per Henrik Ling ile özdeşleşmiştir. Ling, İsveç'te medikal jimnastiğin kurucularındandır. Klasik masaj = Geleneksel Avrupa masajı = İsveç masajı."
      },
      {
        q: "Effleurage, petrissage ve tapotement gibi masaj terimleri hangi dilden gelir?",
        o: ["Latince", "Yunanca", "Fransızca", "Almanca"],
        a: 2,
        e: "Bu terimler Fransızcadır. 19. yüzyılda Hollandalı hekim Johann Mezger'in bu Fransızca adları kullanmasıyla Avrupa'da yaygınlaşmıştır."
      },
      {
        q: "'Hastalıkları iyileştirebilen mekanik işlemler' tanımı kime aittir?",
        o: ["A. Hoffa", "Zabludowski", "D. Graham", "G. Beard"],
        a: 0,
        e: "Hoffa: hastalıkları iyileştirebilen mekanik işlemler. Zabludowski: hünerli el hareketlerinin sistematik olarak ustaca vücuda uygulanması."
      }
    ]
  },
  {
    id: "t6-etki-turleri",
    course: "manip1",
    unit: "1d",
    v: 2,
    src: "Kitap 1d + Tablo 8",
    title: "Mekanik, Refleks ve Psikolojik Etkiler",
    desc: "Hangi etki mekanik, hangisi refleks? Psikolojik etkiler",
    date: "2026-11-15",
    questions: [
      {
        q: "Masaj hareketlerinin etkileri tablolarda hangi iki ana başlık altında incelenir?",
        o: ["Akut ve kronik", "Mekanik ve refleks", "Lokal ve sistemik", "Aktif ve pasif"],
        a: 1,
        e: "Masaj hareketleri tablosunda her hareketin mekanik etkileri ve refleks etkileri ayrı sütunlarda verilir."
      },
      {
        q: "Aşağıdakilerden hangisi derin stroking'in MEKANİK etkisidir?",
        o: ["Sedasyon ve uyku sağlar", "Venöz ve lenfatik akışı artırır", "Kapı kontrol yoluyla ağrıyı azaltır", "Parasempatik yolla kasları gevşetir"],
        a: 1,
        e: "Venöz ve lenfatik akışı artırmak, ödemi azaltmak, doku beslenmesini ve kapiller dolaşımı artırmak derin stroking'in mekanik etkileridir. Diğer üçü yüzeyel stroking'in refleks etkileridir."
      },
      {
        q: "Derin stroking'in mekanik etkileri arasında yer alan 'deskuamasyon' ne demektir?",
        o: ["Deride ölü hücrelerin dökülmesi", "Kapillerlerin daralması", "Kasın kısalması", "Ter salgısının azalması"],
        a: 0,
        e: "Deskuamasyon, derinin üst tabakasındaki ölü hücrelerin dökülmesidir. Masaj ölü hücrelerin uzaklaştırılmasını sağlar."
      },
      {
        q: "Aşağıdakilerden hangisi kneading'in REFLEKS etkisidir?",
        o: ["Kapiller basıncı azaltır", "Adezyonları açar", "Abdomene uygulanırsa peristaltizmi artırır", "Metabolitleri uzaklaştırır"],
        a: 2,
        e: "Kneading'in refleks etkileri: yavaş uygulanınca gevşeme, hızlı uygulanınca stimülasyon, derin glandüler aktivitede artış, abdomende peristaltizm artışı ve propriyoseptif girdi."
      },
      {
        q: "Hacettepe ders notlarına göre masajın psikolojik etkileri için hangisi doğrudur?",
        o: ["Psikolojik etkileri fizyolojik etkilerinden daha belirgindir", "Psikolojik etkisi yoktur", "Sadece sporcularda psikolojik etki görülür", "Kaygıyı artırır"],
        a: 0,
        e: "Masajın psikolojik etkileri fizyolojik etkilerinden daha belirgindir ve iyileştirici etkisinin önemli kısmının psikolojik olduğu görüşü yaygındır."
      },
      {
        q: "Masajın kaygı ve depresyonu azaltmasıyla ilişkili olarak hangi hormon düzeyi düşer?",
        o: ["İnsülin", "Kortizol", "Büyüme hormonu", "Tiroksin"],
        a: 1,
        e: "Masaj kortizol, norepinefrin ve epinefrin düzeylerini düşürerek stres, kaygı ve depresyonu azaltır."
      },
      {
        q: "Masajın gecikmiş kas ağrısı üzerindeki etkisi için hangisi doğrudur?",
        o: ["Eksantrik egzersiz sonrası gecikmiş kas ağrısını ve hassasiyeti azaltır", "Gecikmiş kas ağrısını artırır", "Maksimal kas kuvvetinin geri dönüşünü hızlandırır", "Hiçbir etkisi yoktur"],
        a: 0,
        e: "Masaj eksantrik egzersiz sonrası gecikmiş kas ağrısı ve hassasiyetini azaltmada etkilidir. Ancak maksimal istemli kas kuvvetinin geri dönme hızına etkisi yoktur."
      },
      {
        q: "Aşağıdakilerden hangisi friksiyonun MEKANİK etkisidir?",
        o: ["Golgi tendon refleksini uyarır", "Ağrı ve spazmı azaltır", "Skarı çözer, derin doku yapışıklıklarını açar", "Hiperemi yapar"],
        a: 2,
        e: "Friksiyonun mekanik etkileri: deri ve derin doku yapışıklıklarını açar, skarı çözer, eklem çevresindeki ödemi emdirir, fibrozitik nodülleri tedavi eder. Ağrı-spazm azalması ve hiperemi refleks etkidir."
      }
    ]
  },
  {
    id: "t7-agri",
    course: "manip1",
    unit: "1e",
    v: 2,
    src: "Ders 1 notları + kitap 1e",
    title: "Masaj ve Ağrı",
    desc: "Ağrı yolları, kapı kontrol teorisi, kanser hastalarında masaj",
    date: "2026-11-15",
    questions: [
      {
        q: "Ağrının tanımı için en doğru ifade hangisidir?",
        o: ["Sadece sinir hasarında oluşan bir duyudur", "Doku hasarına cevap olarak oluşan, kaçınma motivasyonu ve uyanıklık sağlayan hoş olmayan bir duyudur", "Kasların yorgunluk hissidir", "Sadece psikolojik bir durumdur"],
        a: 1,
        e: "Ağrı, doku hasarına cevap olarak oluşan, kendisini oluşturan uyarandan kaçınmak için motivasyon ve uyanıklığa yol açan hoş olmayan bir duyudur."
      },
      {
        q: "Kapı kontrol teorisinde 'kapı' görevini gören yapı hangisidir?",
        o: ["Talamus", "Substantia gelatinosa (SG)", "Postsentral girus", "Ön boynuz motor nöronları"],
        a: 1,
        e: "Kapı, spinal kord arka boynuzundaki substantia gelatinosa'dır. SG, ağrı sinyalinin T transmisyon hücrelerine geçişini düzenler."
      },
      {
        q: "Kapı kontrol teorisinde ağrı sinyalini üst merkezlere ileten hücreler hangileridir?",
        o: ["T (transmisyon) hücreleri", "Schwann hücreleri", "Purkinje hücreleri", "Alfa motor nöronlar"],
        a: 0,
        e: "Kapı açık olduğunda sinyal T transmisyon hücreleri üzerinden beyne ulaşır ve ağrı algılanır."
      },
      {
        q: "Kapı kontrol teorisine göre kapıyı AÇARAK ağrıyı artıran lifler hangileridir?",
        o: ["Geniş çaplı A lifleri", "İnce çaplı C lifleri", "A alfa lifleri", "A beta lifleri"],
        a: 1,
        e: "İnce çaplı C lifleri kapıyı açar. Geniş çaplı A lifleri ise kapıyı kapatır ve ağrıyı azaltır. Masaj, A liflerini uyararak ağrıyı azaltır."
      },
      {
        q: "Ağrı iletiminde çıkan yollar talamustan sonra hangi kortikal alana ulaşır?",
        o: ["Prekuneus", "Postsentral girus", "Broca alanı", "Oksipital lob"],
        a: 1,
        e: "Ağrı uyarısı spinal kord, çıkan yollar ve talamus üzerinden postsentral girusa (primer duyu korteksi) ulaşır."
      },
      {
        q: "Yüzeyel stroking ağrıyı hangi mekanizma ile azaltır?",
        o: ["Kapı kontrol teorisi", "Golgi tendon refleksi", "Kutaneoviseral refleks", "Venöz staz"],
        a: 0,
        e: "Masaj hareketleri tablosuna göre yüzeyel stroking'in refleks etkisi, kapı kontrol teorisi ile ağrıyı azaltmaktır."
      },
      {
        q: "Kanser hastasına masaj planlanırken hangisi doğrudur?",
        o: ["Tümör bölgesinin üzerine masaj uygulanmaz", "Kemoterapi sırasında derin doku masajı rutin uygulanır", "Mastektomi sonrası lenfödemde masaj kesinlikle yasaktır", "Metastatik kanser bir kontrendikasyon değildir"],
        a: 0,
        e: "Tümör üzerine masaj yapılmaz, metastatik kanser genel kontrendikasyondur. Kemoterapi/radyoterapi sonrası doktor önerisi gerekir. Mastektomi sonrası lenfödemde ise manuel lenfatik drenaj en sık kullanılan uygulamadır."
      }
    ]
  },
  {
    id: "t8-endikasyon",
    course: "manip1",
    unit: "1f",
    v: 2,
    src: "Ders 1 Tablo 4–5 + Hacettepe notları",
    title: "Klinik İndikasyonlar ve Kontrendikasyonlar",
    desc: "Tablo 4 ve Tablo 5: hangi hastalık hangi grupta, lokal mi genel mi?",
    date: "2026-11-15",
    questions: [
      {
        q: "Raynaud ve lenfödem, masajın klinik indikasyonlarında hangi grupta yer alır?",
        o: ["Romatizmal hastalıklar", "Vasküler problemler", "Nörolojik problemler", "Ortopedik problemler"],
        a: 1,
        e: "Tablo 4'e göre vasküler problemler: Raynaud ve lenfödem."
      },
      {
        q: "Osteoartrit, fibromiyalji ve temporomandibular eklem problemleri hangi gruptadır?",
        o: ["Romatizmal hastalıklar", "Yumuşak doku problemleri", "Ortopedik problemler", "Nörolojik problemler"],
        a: 0,
        e: "Tablo 4: Romatizmal hastalıklar = osteoartrit, fibromiyalji, TME problemleri."
      },
      {
        q: "Paratenonitis, epikondilit, shin splint ve skolyoz hangi gruptadır?",
        o: ["Yumuşak doku problemleri", "Ortopedik problemler", "Romatizmal hastalıklar", "Bel ve boyun problemleri"],
        a: 1,
        e: "Tablo 4: Ortopedik problemler = paratenonitis, epikondilit, shin splint, skolyoz. Sprain ve strain ise yumuşak doku problemleridir."
      },
      {
        q: "Rahatsız bacak sendromu masajın hangi indikasyon grubunda yer alır?",
        o: ["Vasküler problemler", "Psikolojik problemler", "Nörolojik problemler", "Ortopedik problemler"],
        a: 2,
        e: "Tablo 4: Nörolojik problemler = multipl skleroz, Parkinson, paraliziler (CP vb.), baş ağrısı, rahatsız bacak sendromu."
      },
      {
        q: "Genel kontrendikasyonlar arasında yer alan yüksek ateş sınırı nedir?",
        o: ["37 °C üzeri", "37.5 °C üzeri", "38.3 °C üzeri", "40 °C üzeri"],
        a: 2,
        e: "Tablo 5'te genel kontrendikasyonlar arasında yüksek ateş (>38.3 °C) yer alır."
      },
      {
        q: "Aşağıdakilerden hangisi LOKAL kontrendikasyondur?",
        o: ["Sepsis", "Hemofili", "Açık yara", "Şok"],
        a: 2,
        e: "Açık yara lokal kontrendikasyondur, sadece o bölgeye masaj yapılmaz. Sepsis, hemofili ve şok ise genel kontrendikasyondur."
      },
      {
        q: "Aşağıdakilerden hangisi GENEL kontrendikasyondur?",
        o: ["Baker kisti", "Frozbit (soğuk yanığı)", "İlerlemiş böbrek yetmezliği", "Lokal enfeksiyon"],
        a: 2,
        e: "İlerlemiş böbrek, karaciğer ve solunum yetmezliği genel kontrendikasyondur. Baker kisti, frozbit ve lokal enfeksiyon lokal kontrendikasyondur."
      },
      {
        q: "Tablo 5'e göre aşağıdakilerden hangisi 'uyarı' değil, doğrudan genel KONTRENDİKASYONDUR?",
        o: ["Hipertansiyon", "Osteoporoz", "Epilepsi", "Metastatik kanser"],
        a: 3,
        e: "Metastatik kanser genel kontrendikasyondur. Hipertansiyon, osteoporoz, epilepsi ve kanser ise 'uyarılar' listesindedir, yani dikkatli uygulanır."
      },
      {
        q: "Hangi durumda karın masajı YAPILMAZ?",
        o: ["Konstipasyon", "Gaz şikayeti", "Apandisit olasılığı", "Kolik"],
        a: 2,
        e: "Gebelik, büyük fıtıklar, karın zarı iltihabı (peritonit) ve apandisit olasılığında karın masajı yapılmaz. Konstipasyon, gaz ve kolik ise indikasyondur."
      },
      {
        q: "Hangi ödem tipinde masaj kontrendikedir?",
        o: ["Kalp veya böbrek hastalığına bağlı ödem", "Spor yaralanması sonrası lokal ödem", "Mastektomi sonrası lenfödem", "Hareketsizliğe bağlı ödem"],
        a: 0,
        e: "Kalp ve böbrek hastalığı nedeniyle oluşan sistemik ödemlerde masaj kontrendikedir, çünkü sıvının dolaşıma geri itilmesi bu organlara yük bindirir."
      },
      {
        q: "Klinik karar verme sürecinde masaj uygulamasından önce ilk yapılması gereken nedir?",
        o: ["Hemen en derin teknikle başlamak", "Hastayı değerlendirip kontrendikasyonları belirlemek", "Masaj süresini uzatmak", "Sadece hastanın istediği bölgeye masaj yapmak"],
        a: 1,
        e: "Klinik karar vermede önce hasta değerlendirilir, indikasyon ve kontrendikasyonlar belirlenir, sonra amaca uygun teknik, süre ve doz seçilir."
      }
    ]
  },
  {
    id: "t9-pozisyon-doz",
    course: "manip1",
    unit: "1g",
    v: 2,
    src: "Ders 2 slaytları + araştırma",
    title: "Pozisyonlama, Hazırlık ve Dozaj",
    desc: "Hastanın pozisyonu ve örtülmesi, fizyoterapistin hazırlanması, masajın süresi",
    date: "2026-11-15",
    questions: [
      {
        q: "Yüzüstü pozisyonda lomber lordozu azaltmak için destek yastığı nereye konur?",
        o: ["Göğüs altına", "Karın altına", "Diz altına", "Baş altına"],
        a: 1,
        e: "Yüzüstü pozisyonda karın altına konan yastık lomber lordozu azaltır ve beli rahatlatır."
      },
      {
        q: "Yüzüstü pozisyonda ayak bileği altına rulo konmasının amacı nedir?",
        o: ["Ayak bileğini dorsifleksiyona zorlamak", "Dizlerin hafif fleksiyonda, ayakların rahat pozisyonda olmasını sağlamak", "Kalçayı yükseltmek", "Dolaşımı azaltmak"],
        a: 1,
        e: "Ayak bileği altındaki rulo dizlere hafif fleksiyon verir, ayak parmaklarının masaya bastırılmasını önler ve bacak arkasındaki gerginliği azaltır."
      },
      {
        q: "Sırtüstü pozisyonda dizlerin altına destek konmasının amacı nedir?",
        o: ["Bel bölgesindeki gerginliği azaltmak", "Dizleri tam ekstansiyonda kilitlemek", "Ayakları soğutmak", "Karın kaslarını germek"],
        a: 0,
        e: "Diz altı desteği kalça ve dizlere hafif fleksiyon vererek lomber bölgedeki gerginliği azaltır."
      },
      {
        q: "Hastanın örtülmesi için doğru kural hangisidir?",
        o: ["Tüm vücut açık bırakılır", "Sadece masaj yapılan bölge açılır, diğer bölgeler örtülür", "Örtü kullanılmaz", "Sadece baş örtülür"],
        a: 1,
        e: "Mahremiyet ve ısı kaybını önlemek için sadece masaj yapılan bölge açık bırakılır, diğer bölgeler çarşaf veya havluyla örtülür."
      },
      {
        q: "Fizyoterapistin masaja hazırlanmasıyla ilgili hangisi YANLIŞTIR?",
        o: ["Tırnaklar kısa olmalıdır", "Eller temiz ve sıcak olmalıdır", "Yüzük ve saat takılabilir", "Uygun, rahat kıyafet giyilmelidir"],
        a: 2,
        e: "Masaj sırasında yüzük, saat ve bilezik çıkarılır. Hem hastayı çizebilir hem de hijyen açısından uygun değildir."
      },
      {
        q: "Kafa boşluğu bulunan masaj masasının avantajı nedir?",
        o: ["Masanın taşınmasını kolaylaştırır", "Yüzüstü pozisyonda boynun nötral pozisyonda kalmasını sağlar", "Oturarak masaj yapılmasını sağlar", "Masanın yüksekliğini ayarlar"],
        a: 1,
        e: "Kafa boşluğu sayesinde hasta yüzüstü yatarken başını yana çevirmek zorunda kalmaz, boyun nötral kalır."
      },
      {
        q: "Genel vücut masajının süresi ortalama ne kadardır?",
        o: ["5-10 dakika", "15-20 dakika", "45-60 dakika", "90-120 dakika"],
        a: 2,
        e: "Genel vücut masajı ortalama 45-60 dakika, bölgesel masaj ise bölgenin genişliğine göre yaklaşık 15-20 dakika sürer. Kaynaklara göre küçük farklar olabilir."
      },
      {
        q: "Bölgesel masaj süresi ortalama ne kadardır?",
        o: ["1-2 dakika", "15-20 dakika", "45-60 dakika", "2 saat"],
        a: 1,
        e: "Bölgesel uygulamalarda süre, bölgenin genişliğine göre ayarlanır ve ortalama 15-20 dakikadır."
      },
      {
        q: "Masajda kullanılan kaydırıcı maddeler hangi gruplardır?",
        o: ["Yağlar, kremler, pudralar", "Sadece su", "Alkol ve kolonya", "Jel ve buz"],
        a: 0,
        e: "Ders 2 slaytlarında masaj kaydırıcıları yağlar, kremler ve pudralar olarak sayılır."
      }
    ]
  },
  {
    id: "t10-hareket-detay",
    course: "manip1",
    unit: "1h",
    v: 2,
    src: "Ders 2 Tablo 8 + Hacettepe notları",
    title: "Masaj Hareketleri: Detaylar",
    desc: "Hareketlerin tanımı, yönü, kullanımı ve kontrendikasyonları",
    date: "2026-11-15",
    questions: [
      {
        q: "Aşağıdakilerden hangisi yüzeyel stroking için KONTRENDİKASYONDUR?",
        o: ["Hiperestezi", "Dokunmaya alıştırma", "Yağlayıcının dağıtılması", "Hareketler arası geçiş"],
        a: 0,
        e: "Yüzeyel stroking kontrendikasyonları: hiperestezi, belirgin gode bırakan ödem, aşırı şişlik, açık yara, inflamasyon ve enfeksiyon sahasının distali."
      },
      {
        q: "Derin stroking'e özgü, yüzeyel stroking'de olmayan kontrendikasyon hangisidir?",
        o: ["Açık yara", "Aşırı kıllı deri", "Hiperestezi", "Aşırı şişlik"],
        a: 1,
        e: "Derin stroking'de yüzeyel stroking'in kontrendikasyonlarına ek olarak aşırı kıllı deri, yeni skar dokusu ve venöz staz vardır."
      },
      {
        q: "'Centripetal' yönde uygulanan stroking ne anlama gelir?",
        o: ["Kalpten uzağa doğru", "Kalbe doğru, distalden proksimale", "Dairesel", "Kas liflerine dik"],
        a: 1,
        e: "Centripetal yön merkeze, yani kalbe doğrudur. Stroking venöz ve lenfatik dönüşü desteklemek için distalden proksimale uygulanır."
      },
      {
        q: "Aşağıdakilerden hangisi tüm friksiyon tipleri için KONTRENDİKASYON DEĞİLDİR?",
        o: ["Akut inflamasyon", "Neuritis", "Fibrozitik nodüller", "Yeni yaralanma"],
        a: 2,
        e: "Fibrozitik nodüllerin tedavisi friksiyonun kullanım alanıdır. Kontrendikasyonlar: akut inflamasyon, neuritis, yeni yaralanma, akut OA/RA, paralizi, MS ve ALS gibi nöromüsküler disfonksiyonlar."
      },
      {
        q: "Vibrasyonun kullanım amacı nedir?",
        o: ["Kas tonusunu artırmak", "Gevşeme sağlamak", "Skar dokusunu parçalamak", "Mukusu çözmek"],
        a: 1,
        e: "Vibrasyon gevşeme amacıyla kullanılır. Refleks etkileri: sinir sedasyonu, ağrıda azalma, kaslarda gevşeme."
      },
      {
        q: "Elin ulnar kenarı ile ritmik olarak yapılan tapotement hareketi hangisidir?",
        o: ["Clapping", "Hacking", "Tapping", "Beating"],
        a: 1,
        e: "Hacking: ellerin kenarı ile vurma. Clapping: el ayası çukurlaştırılarak vurma. Beating: hafif yumruk şeklinde vurma. Tapping: parmak uçlarıyla vurma."
      },
      {
        q: "El ayası çukurlaştırılarak yapılan tapotement hareketi hangisidir?",
        o: ["Hacking", "Pounding", "Clapping", "Slapping"],
        a: 2,
        e: "Clapping'de el ayası çukur hale getirilir, vurma sırasında hava yastığı oluşur. Postural drenajda mukus çözmek için sık kullanılır."
      },
      {
        q: "İki elin dokuyu zıt yönlere doğru burarak sıktığı kneading tipi hangisidir?",
        o: ["Pinching", "Wringing", "Rolling", "Tapping"],
        a: 1,
        e: "Wringing, çamaşır sıkar gibi iki elin dokuyu zıt yönlere burmasıdır. Pinching: dokuyu parmaklar arasında kaldırma. Rolling: deri ve derialtı dokuyu parmaklar arasında yuvarlama."
      }
    ]
  },
  {
    id: "t11-uygulama",
    course: "manip1",
    unit: "1ı",
    v: 2,
    src: "Araştırma (kitap 1ı başlıkları)",
    title: "Bölgesel Uygulama Teknikleri",
    desc: "Alt ve üst ekstremite, sırt, karın ve yüz masajı",
    date: "2026-11-15",
    questions: [
      {
        q: "Ekstremite masajında stroking hareketleri hangi yönde uygulanır?",
        o: ["Proksimalden distale", "Distalden proksimale", "Sadece dairesel", "Yön önemli değildir"],
        a: 1,
        e: "Stroking venöz ve lenfatik dönüşü desteklemek için distalden proksimale, yani kalbe doğru uygulanır."
      },
      {
        q: "Ekstremite masajında neden önce proksimal bölgeye masaj yapılır?",
        o: ["Distaldeki sıvının akacağı yolun önceden açılması için", "Proksimal bölge daha az hassas olduğu için", "Hastanın daha çabuk uyuması için", "Distal bölgeye masaj yapılmadığı için"],
        a: 0,
        e: "Önce proksimal bölge masajlanarak venöz ve lenfatik yollar boşaltılır. Böylece distalden gelen sıvı rahatça akabilir."
      },
      {
        q: "Karın masajı hangi yönde uygulanır?",
        o: ["Saat yönünün tersine", "Saat yönünde, kolonun seyrine uygun", "Yukarıdan aşağıya düz çizgilerle", "Rastgele"],
        a: 1,
        e: "Karın masajı kolonun seyrine uygun olarak saat yönünde yapılır: çıkan kolon, transvers kolon, inen kolon sırası."
      },
      {
        q: "Karın masajı sırasında hastanın dizleri neden fleksiyonda tutulur?",
        o: ["Karın kaslarını gevşetmek için", "Kan basıncını artırmak için", "Hastanın uyumasını önlemek için", "Bacakları ısıtmak için"],
        a: 0,
        e: "Hasta sırtüstü, kalça ve dizler fleksiyonda yatırılır. Böylece karın kasları gevşer ve derin dokulara rahat ulaşılır."
      },
      {
        q: "Sırt masajında tapotement uygulanmaması gereken bölge neresidir?",
        o: ["Skapula arası", "Böbreklerin üzeri", "Omuz kasları", "Gluteal bölge"],
        a: 1,
        e: "Tapotement kemikli bölgelere, böbreklerin üzerine ve karın bölgesine uygulanmaz."
      },
      {
        q: "Yüz masajında hareketler genellikle hangi yönde yapılır?",
        o: ["Yanlardan orta hatta doğru", "Orta hattan yanlara doğru", "Sadece yukarıdan aşağıya", "Sadece dairesel"],
        a: 1,
        e: "Yüz masajında hareketler orta hattan yanlara doğru ve hafif basınçla yapılır. Yüz derisi ince olduğu için kaydırıcı az kullanılır."
      }
    ]
  },
  {
    id: "t12-mekanik",
    course: "manip1",
    unit: "1i",
    v: 2,
    src: "Araştırma (kitap 1i başlıkları)",
    title: "Mekanik Masaj Yöntemleri",
    desc: "Pozitif ve negatif basınç aletleri",
    date: "2026-11-15",
    questions: [
      {
        q: "Kitapta mekanik masaj yöntemleri hangi üç grupta incelenir?",
        o: ["Elektrikli, manuel, karma", "Pozitif basınç, negatif basınç, hem negatif hem pozitif basınç veren aletler", "Sıcak, soğuk, ılık", "Yüzeyel, derin, orta"],
        a: 1,
        e: "Kitabın 1i bölümü: pozitif basınç aletleri, negatif basınç aletleri ve hem negatif hem pozitif basınç veren aletler."
      },
      {
        q: "Dokulara dışarıdan bası uygulayarak titreşim oluşturan vibratörler hangi gruptadır?",
        o: ["Pozitif basınç aletleri", "Negatif basınç aletleri", "Hem pozitif hem negatif basınç aletleri", "Mekanik masaj aleti değildir"],
        a: 0,
        e: "Vibratörler dokulara pozitif basınç uygular. Amaç kas spazmını ve ağrıyı azaltıp dolaşımı artırmaktır."
      },
      {
        q: "Aralıklı pnömatik kompresyon cihazları en sık hangi durumda kullanılır?",
        o: ["Akut kırık", "Lenfödem ve venöz yetmezlik", "Açık yara", "Yüksek ateş"],
        a: 1,
        e: "Ekstremiteye takılan manşonu aralıklı şişirerek pozitif basınç uygulayan bu cihazlar lenfödem ve kronik venöz yetmezlikte kullanılır."
      },
      {
        q: "Dokuyu emerek yukarı kaldıran vakum (kupa) uygulamaları hangi gruptadır?",
        o: ["Pozitif basınç", "Negatif basınç", "Hem pozitif hem negatif basınç", "Elektroterapi"],
        a: 1,
        e: "Vakum uygulamaları dokuyu emerek negatif basınç oluşturur."
      },
      {
        q: "Hem negatif hem pozitif basıncı dönüşümlü uygulayan aletlerin temel amacı nedir?",
        o: ["Periferik dolaşımı artırmak", "Kas kuvvetini artırmak", "Kemik iyileşmesini hızlandırmak", "Deriyi soğutmak"],
        a: 0,
        e: "Ekstremiteye dönüşümlü emme ve basınç uygulanması damarları ritmik olarak genişletip sıkıştırır ve periferik dolaşımı artırır."
      }
    ]
  }
];
