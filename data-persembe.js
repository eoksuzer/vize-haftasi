// ============================================================
//  V14: perşembe klasörü · her dosyadan 20 soru, test adı = dosya adı
//  Daha önce işlenen 11 dosya (içerik birebir aynı) mevcut testlerden
//  seçilen 20 soruyla; 4 yeni dosya için yeni sorular.
//  Bu dosya data-motor / data-elektro* dosyalarından SONRA yüklenmeli.
// ============================================================
(function(){
  function Q(q,o,a,e){ return {q:q, o:o, a:a, e:e}; }
  var FILES = [
    "1. Elektroterapiye Giriş.pdf",
    "2. Elektroterapinin Etkileri ve  Kullanılan Kavramlar.pdf",
    "3.Elektrodlar.pdf",
    "4.Düz Akım.pdf",
    "5. Alçak Frekanslı Akımlar Faradik ve Sinüzoidal Akımlar.pdf",
    "6. Alçak Frekanslı Akımlar (Diadinamik Akımlar).pdf",
    "7.Elektrodiyagnoz.pdf",
    "8. Pnömatik Kompresyon.pdf",
    "9.Elektroterapi Uygulama Yöntemleri 1.pdf",
    "Ders 1 Gelişim ile ilgili temel kavramlar.pdf",
    "Ders 2-3 Hamilelik ve fetus gelişimi.pdf",
    "Ders 4-5 Gelişimi Etkileyen Faktörler.pdf",
    "Ders 6 MOTOR GELİŞİM ALANLARI.pdf",
    "Ders 7 Motor Gelişim Teorileri.pdf",
    "Ders 8-9 Normal Gelişim.pptx"
  ];
  window.COURSES.unshift({ id:"persembe", name:"Perşembe", sub:"perşembe klasörü · 15 dosya · her biri 20 soru",
    units: FILES.map(function(f,i){ return {id:"pr-"+(i+1), code:String(i+1), title:f.replace(/\.(pdf|pptx)$/,"")}; }) });

  function add(i, desc, qs){
    window.TESTS.push({ id:"pr-"+i, course:"persembe", unit:"pr-"+i, v:14, src:FILES[i-1], date:"2026-11-20",
      title:FILES[i-1]+" testi", desc:"20 soru · "+desc, questions:qs });
  }
  function pick(id, idx){
    var t = (window.TESTS||[]).filter(function(x){ return x.id===id; })[0];
    if(!t) return [];
    return idx.map(function(k){ return t.questions[k]; }).filter(Boolean);
  }

  // ---- Daha önce işlenen dosyalar (içerik aynı): seçilmiş 20'şer soru ----
  add(1,"tanım ve elektroterapinin tarihçesindeki kritik isimler", pick("elektro-1",[0,8,9,12,19,20,22,24,25,27,32,34,37,39,45,46,53,55,56,58]));
  add(2,"temel etkiler, anot-katot farkları, seviyeler, akım kavramları", pick("elektro-2",[0,1,5,10,11,12,13,15,17,18,21,28,29,36,40,41,44,45,50,57]));
  add(3,"ideal elektrod, boyut, monopolar-bipolar, deri direnci, uygulama", pick("elektro-3",[1,2,7,8,10,13,16,17,21,24,25,26,27,31,32,35,36,40,49,57]));
  add(4,"galvanik akım, kutup olayları, tıbbi galvanizm, iyontoforez ve iyonlar", pick("elektro-4",[0,3,8,10,11,18,19,20,21,25,26,33,34,36,38,40,42,43,44,57]));
  add(5,"kapı kontrol, denerve kas, faradik ve sinüzoidal akım, sinir lezyonları", pick("elektro-5",[0,6,8,11,14,15,18,19,20,26,29,30,32,36,38,40,42,45,46,57]));
  add(10,"büyüme, olgunlaşma, gelişim ilkeleri ve temel terimler", pick("motor-1",[0,1,2,4,6,7,8,10,11,12,15,16,17,19,20,26,27,29,30,33]));
  add(11,"plasenta, embriyonik tabakalar ve kritik fetal haftalar", pick("motor-2",[0,1,3,4,5,6,8,10,11,12,14,16,19,20,23,24,25,26,29,33]));
  add(12,"doğum öncesi/sırası/sonrası faktörler, refleksler, sınır taşları", pick("motor-3",[0,3,4,6,7,8,12,13,14,15,17,20,21,22,23,24,30,32,33,34]));
  add(13,"motor gelişim kavramları, kas tonusu, postüral reaksiyonlar", pick("motor-4",[0,3,4,7,8,9,11,12,15,16,17,20,21,22,24,26,27,31,32,34]));
  add(14,"Freud, Erikson, Piaget, Gesell, Bandura ve motor gelişim teorileri", pick("motor-5",[2,5,6,8,9,12,13,14,16,18,20,23,25,26,28,29,30,31,32,33]));
  add(15,"çocukluk evreleri, aylara göre gelişim, primitif refleksler", pick("motor-6",[3,5,7,9,10,12,13,15,17,20,21,22,23,24,26,27,28,29,30,34]));

  // ---------------- 6. Diadinamik Akımlar (yeni) ----------------
  add(6,"DF, MF, CP, LP, RS; doz, süre, elektrot uygulamaları, endikasyon ve kontrendikasyonlar",[
    Q("Diadinamik akımları tanıtan ve bir çok yumuşak doku probleminde analjezik etkisi olduğunu öne süren kimdir?",["Fransız diş hekimi Pierre Bernard","Melzack ve Wall","Yakov Kotz","Dr. Nemec"],0,"Diadinamik akımlar Fransız diş hekimi Pierre Bernard tarafından tanıtılmıştır. (Sayfa 2)"),
    Q("Diadinamik akımın temel elemanı nedir?",["10 ms süreli tek yönlü sinüzoidal akım","1 sn süreli düz akım","4000 Hz orta frekanslı akım","0,1 ms süreli bifazik atım"],0,"50–100 Hz sinüzoidal tipte periyodik akım; temel elemanı 10 ms süreli tek yönlü sinüzoidal akımdır. Etkileri galvano-faradik uygulamaya benzer. (Sayfa 4)"),
    Q("Diadinamik akımın analjezik etkisi ne zaman başlar ve ne kadar sürer?",["Uygulamanın ilk saniyelerinde başlar, 2–24 saat sürer","1 hafta sonra başlar, 1 ay sürer","Sadece uygulama sırasında görülür","Hiç analjezik etkisi yoktur"],0,"Analjezik etki ilk saniyelerde başlar, olguya göre 2–24 saat sürer; kapı-kontrol teorisine göre olur. (Sayfa 4)"),
    Q("Difaze fikse (DF) akım için hangisi DOĞRUDUR?",["100 Hz, tam dalga rektifiye; impulslar arasında boşluk yok; inhibisyon ve alışkanlık erken gelişir","50 Hz yarım dalga rektifiye; tolerans geç gelişir","DF ve MF'nin 1'er saniye dönüşümüdür","İki MF'nin iç içe geçmesiyle oluşur"],0,"DF: iki fazlı 100 Hz tam dalga rektifiye; her uyarı 10 msn; uyarıcı etkisi kısa (15–30 sn). (Sayfa 6)"),
    Q("DF akımın kullanımıyla ilgili hangisi DOĞRUDUR?",["Tedavinin başında, diğer akımlardan önce kullanılır; sempatik gangliyonlara sık uygulanır","Sadece kas kuvvetlendirmede kullanılır","Tolerans gelişse bile tedavinin sonuna kadar sürdürülür","Hasta kuvvetli vibrasyon hisseder"],0,"DF tedavi başında uygundur; sempatik gangliyonlar ve periferik dolaşım bozukluklarında kullanılır; tolerans gelişince MF'ye geçilir. Hasta yayılan iğnelenme hisseder. (Sayfa 7)"),
    Q("Monofaze fikse (MF) akım için hangisi DOĞRUDUR?",["50 Hz yarım dalga rektifiye; uyarı ve dinlenme 10'ar msn; tolerans geç gelişir, hasta kuvvetli vibrasyon hisseder","100 Hz tam dalga rektifiye; inhibisyon erken","Akım 1 sn aralıklarla kesilir","Uyarıcı etkisi sadece düz kaslardadır"],0,"MF: bağ dokusunu uyarır, spazma bağlı ağrıda DF'den sonra kullanılır; kasları daha iyi uyarır, trofik etkisi vardır. (Sayfa 9)"),
    Q("DF ve MF'nin 1'er saniye dönüşümlü gelmesiyle oluşan, inhibisyon ve tolerans gelişmeyen akım hangisidir?",["Court periyot (CP, kısa devreli modüle akım)","Long periyot (LP)","Ritm senkop (RS)","Difaze fikse (DF)"],0,"CP: analjezi ve uyarımın birlikte gerektiği durumlar; kas atonileri, burkulmalar, ağrılı eklem sertlikleri, trofik bozukluklar. (Sayfa 10)"),
    Q("Long periyot (LP) akım için hangisi DOĞRUDUR?",["İki MF iç içe girer, birinin amplitüdü yavaşça artıp azalır; analjezi uzun sürer; uyarıcı etkisi düz kaslardadır","DF ve MF 1'er saniye dönüşümlüdür","MF 1 sn aralıklarla kesilir","Çizgili kasları en güçlü uyaran akımdır"],0,"LP: tolerans görülmez; nevralji, miyalji (lumbago) gibi kronik ağrılarda ve karın içi organların pitozis/atonisinde kullanılır. (Sayfa 11)"),
    Q("MF akımın 1'er saniye aralarla kesilmesiyle elde edilen, faradik eksitabilite testinde ve lokal kas egzersizinde kullanılan akım hangisidir?",["Ritm senkop (RS)","Court periyot (CP)","Long periyot (LP)","Difaze fikse (DF)"],0,"RS: geçiş ve kapanış süreleri 1'er sn; inhibisyon ve tolerans önlenir, dinamojenik (uyarıcı) etki sürer. (Sayfa 12)"),
    Q("Diadinamik akımda her komponent en fazla ne kadar uygulanır ve bir seans toplam kaç dakikayı geçmemelidir?",["Her komponent 3–4 dk; seans 10–12 dk","Her komponent 15 dk; seans 1 saat","Her komponent 30 sn; seans 2 dk","Süre sınırı yoktur"],0,"Uygulama süresi uzarsa alışkanlık etkisiyle tedavi etkisi azalır. (Sayfa 16)"),
    Q("Diadinamik tedavinin ortasında kutup neden değiştirilir?",["Elektrotlar altındaki elektrolitik (kutup) etkileri önlemek için","Akım şiddetini artırmak için","Hastanın uyanık kalması için","Frekansı sıfırlamak için"],0,"Tedavi ortasında kutup değiştirilerek elektrolitik etkiler önlenmelidir; kutup değiştirmeden önce akım sıfıra indirilmelidir. (Sayfa 16, 21)"),
    Q("Plak elektrot kullanırken elektrot pedleri için hangisi DOĞRUDUR?",["Pedler elektrotun tüm kenarlarından en az 1 cm büyük olmalı ve ılık suyla ıslatılmalıdır","Pedler elektrottan küçük olmalıdır","Pedler kuru kullanılmalıdır","Ped kullanılmaz"],0,"Direkt deriye temasla oluşacak yanığı önlemek için pedler en az 1 cm büyük olmalıdır; pedler yaklaşık 1 cm kalınlıktadır. (Sayfa 17, 21)"),
    Q("Nokta şeklinde uygulamada elektrotlar nasıl yerleştirilir?",["Ağrılı nokta üzerine tercihen (−) kutba bağlı kap elektrot, diğeri 2–3 cm proksimaline","İki elektrot da ağrılı noktanın distaline","Elektrotlar karşı ekstremiteye","Pozitif elektrot ağrılı noktaya, negatif uzak bölgeye"],0,"(Sayfa 19)"),
    Q("Sinir üzerine uygulamada elektrotlar sinirin yüzeyelleştiği hangi noktalara konur ve doğru yerleşimde hasta ne hisseder?",["Valleix noktaları; sinirin duyusal alanında karıncalanma","Motor noktalar; kas kasılması","Trigger noktalar; yanma","Akupunktur noktaları; uyuşma yok"],0,"(Sayfa 19)"),
    Q("Eklem burkulmasında diadinamik uygulama nasıldır?",["3–4 dk CP; ağrı çok şiddetliyse öncesinde 1 dk DF","10 dk LP","15 dk RS","Sadece DF 20 dk"],0,"Kronik durumlarda kasa egzersiz için 2 dk RS de eklenebilir. (Sayfa 22, 27)"),
    Q("Epikondilitte diadinamik uygulama nasıldır?",["Küçük kap elektrotlarla ağrılı nokta ve proksimaline 2–3 dk LP","Büyük plak elektrotla 10 dk DF","Stellat gangliona 3 dk DF","Paravertebral 15 sn DF"],0,"(Sayfa 23, 32)"),
    Q("Üst ekstremite Sudeck atrofisinde (KBAS) elektrotlar nereye konur ve hangi akım verilir?",["Biri stellat gangliyona (supraklavikular), diğeri SCM arka kenarına; 3 dk DF","Biri deltoide, diğeri servikal vertebralara; 3 dk CP","Elin dorsal ve volar yüzüne; 5 dk LP","Lumbal paravertebral; 2 dk RS"],0,"Alt ekstremitede elektrotlar L3–5 vertebraların iki yanına konur, 3'er dk DF. (Sayfa 24, 36)"),
    Q("Periferik fasiyal paralizide diadinamik tedavi nasıl planlanır?",["İlk 3 tedavide CP, sonra yüz kaslarına egzersiz amacıyla RS","Sadece DF","Sadece LP","İlk seanstan itibaren 20 dk RS"],0,"(Sayfa 26, 47)"),
    Q("Raynaud hastalığında diadinamik uygulama nasıldır?",["Önce stellat gangliona 3 dk DF, sonra elin dorsal ve volar yüzüne 2 dk CP","Sadece 10 dk RS","Paravertebral LP","Hiç uygulanmaz"],0,"Raynaud: sempatik sistemin aşırı çalışmasına bağlı arter spazmı; soğuk ve emosyonel stresle tetiklenir. (Sayfa 40–41)"),
    Q("Aşağıdakilerden hangisi diadinamik akımın kontrendikasyonlarından biri DEĞİLDİR?",["Kronik lumbago","Anterior servikal bölge","Kalp pili","Epilepsi"],0,"Kontrendikasyonlar: anterior servikal bölge, ilk trimesterde abdominal/pelvik/lumbal bölge, metal implant, epilepsi, kalp pili, hemoraji ve tümör alanı, bütünlüğü bozuk deri. Ayrıca KDD aletinin yanında kullanılması elektronik enterferans riski taşır. (Sayfa 50–51)")
  ]);

  // ---------------- 7. Elektrodiyagnoz (yeni) ----------------
  add(7,"membran potansiyeli, dejenerasyon reaksiyonu, reobaz-kronaksi, akomodasyon, NCS ve EMG",[
    Q("Elektrodiyagnoz nasıl tanımlanır?",["Sinir ve kas dokularının elektriksel özelliklerini inceleyerek nöromüsküler sistemin fonksiyonel durumu hakkında bilgi veren değerlendirme yöntemleri","Sadece kas kuvvetinin ölçülmesi","Sadece görüntüleme yöntemleri","Kalbin elektriksel aktivitesinin kaydı"],0,"(Sayfa 2)"),
    Q("Derse göre istirahat membran potansiyeli nöronlarda ve iskelet kası liflerinde yaklaşık kaçtır?",["Nöronda −70 mV; iskelet kasında −90 mV","Nöronda −90 mV; kasta −70 mV","İkisinde de 0 mV","Nöronda +35 mV; kasta −60 mV"],0,"(Sayfa 3)"),
    Q("Aksiyon potansiyelinin depolarizasyon evresinde ne olur?",["Voltaj kapılı sodyum kanalları açılır, Na⁺ hücre içine girer","K⁺ hücre dışına çıkar","Membran istirahatten daha negatif olur","Na-K pompası durur"],0,"Repolarizasyon: K⁺ dışarı çıkar. Hiperpolarizasyon: membran geçici olarak istirahatten daha negatif olur. (Sayfa 5)"),
    Q("Aşağıdakilerden hangisi elektriksel uyarılabilirliği etkileyen faktörler arasında sayılmamıştır?",["Hastanın kan grubu","Uyarının yükselme hızı","Sinirin miyelinizasyon durumu","Doku sıcaklığı"],0,"Faktörler: akım şiddeti, uyarı süresi, yükselme hızı, elektrot yerleşimi/büyüklüğü, doku direnci ve temas, miyelinizasyon, innervasyon durumu, doku sıcaklığı. (Sayfa 6)"),
    Q("Tam denervasyonlu kas için hangisi DOĞRUDUR?",["Kısa süreli uyarıya yanıt alınamayabilir; uzun süreli uyarıyla doğrudan kas yanıtı alınabilir; kasılma yavaştır","Kısa süreli uyarıya hızlı yanıt verir","Motor sinir aracılı yanıt korunmuştur","Kuvvet-zaman eğrisi sola kayar"],0,"Denervasyonda kuvvet–zaman eğrisi genellikle sağa kayar. (Sayfa 8)"),
    Q("Yaralanan sinirde dejenerasyon reaksiyonu testleri için ne kadar beklenmelidir?",["10–14 gün","1 saat","6 ay","Beklemeye gerek yoktur"],0,"Dejenerasyonun oluşması için zaman gerekir; DR derecesini belirlemek için galvanik ve faradik akımlar kullanılır. (Sayfa 9)"),
    Q("Tam dejenerasyon reaksiyonunda hangi bulgu görülür?",["Faradiğe sinir ve kasta yanıt yok; kas doğrudan uzun süreli galvaniğe yanıt verebilir; kasılma yavaş ve sürüncemeli","Faradiğe yanıt normal","Galvaniğe hiçbir koşulda yanıt yok","Kas kontraksiyonu hızlı ve güçlü"],0,"Kısmi DR: faradiğe yanıt azalmış, kasılma genellikle korunur. Kesin DR: kasın galvaniğe doğrudan yanıtı da ileri derecede azalmış veya kaybolmuştur. (Sayfa 9)"),
    Q("Dejenerasyon reaksiyonu tiplerine göre beklenen iyileşme süreleri hangisidir?",["Kısmi 6 hafta; tam 6 ay; kesin 1–2 yıldan önce değil ya da hiç","Kısmi 6 ay; tam 6 hafta; kesin 1 hafta","Hepsi 1 hafta","Kısmi 1 yıl; tam 2 yıl; kesin 6 hafta"],0,"(Sayfa 10)"),
    Q("Derse göre sinir iyileşme hızı nasıl ifade edilir?",["1 mm/gün veya 2,5 cm/ay","1 cm/gün","10 cm/ay","1 mm/ay"],0,"İyileşme süresi rejenere liflerin ne kadar uzakta olduğuna bağlıdır. (Sayfa 10)"),
    Q("Aşağıdakilerden hangisi MODERN elektrodiyagnostik yöntemdir?",["İğne elektromiyografisi (EMG)","Kuvvet–zaman eğrisi","Polarite testi","Akomodasyon değerlendirmesi"],0,"Modern: sinir iletim çalışmaları, iğne EMG, F yanıtı, H refleksi, tekrarlayıcı sinir uyarımı. Klasik: faradik/galvanik test, polarite, reaksiyon dejeneresansı, KZE, reobaz, kronaksi, akomodasyon. (Sayfa 11–12)"),
    Q("Faradik testte sağ (sağlam) tibialis anteriorda 5 mA'de, sol (etkilenmiş) tarafta 12 mA'de kontraksiyon oluşuyor. Sol taraf için durum nedir?",["Hipoeksitabilite","Hipereksitabilite","Normoeksitabilite","İneksitabilite"],0,"Kontraksiyon için daha yüksek şiddet gerekmesi uyarılabilirliğin azaldığını gösterir. (Sayfa 13)"),
    Q("Reinnerve kasta çizilen kuvvet–zaman eğrisinde ne görülür?",["Merdivenli (basamaklı) bir eğri","Tamamen düz bir çizgi","Normal eğriyle aynı","Sola kaymış eğri"],0,"Normal innerve kas ani geçişli akıma hemen yanıt verir; denerve kas gecikmeli ve yavaş yanıt verir. (Sayfa 16)"),
    Q("Kuvvet–zaman eğrisinin avantajlarından biri hangisidir?",["Nöropraksiyi diğer iki lezyon tipinden ayırt edebilmesi","Hiç ekipman gerektirmemesi","Deneyim gerektirmemesi","Anatomik kopmayı kesin göstermesi"],0,"Ayrıca seri değişiklikleri hızlı gösterir, ekipman kolay bulunur, dejenerasyon/rejenerasyon takibi yapılabilir. (Sayfa 17)"),
    Q("İnerve kasta reobaz değeri olarak eşik akım derste kaç verilmiştir?",["2–8 mA","20–80 mA","0,1–0,5 mA","100 mA"],0,"Eşik akım 2–8 mA, eşik voltaj 3–40 V. (Sayfa 18)"),
    Q("Kronaksi nasıl tanımlanır?",["Reobazın iki katı şiddetteki uyarının yanıt oluşturması için gereken minimum süre","Minimum kasılma için gereken akım şiddeti","Akomodasyon oranının yarısı","Sinir iletim hızı"],0,"Örnek: reobaz 3 mA → 6 mA'de minimum kasılma süresi 0,4 ms ise kronaksi 0,4 ms'dir. (Sayfa 19)"),
    Q("Denervasyonda kronaksi nasıl değişir?",["Belirgin şekilde uzar; yaralanmadan 1 ay sonra motor nokta kronaksisi 100 kat artar","Kısalır","Değişmez","Sıfırlanır"],0,"İnerve kasta eşik akım için kronaksi 1 msn'den kısa, denerve kasta 10 msn'den uzundur; rejenerasyonla kronaksi azalır. (Sayfa 19–20)"),
    Q("Akomodasyon nedir?",["Uyarılabilir dokunun yavaş yükselen elektriksel uyarıya karşı uyarılabilirliğinin azalması","Dokunun ani uyarıya cevap vermemesi","Reobazın iki katı","Kasın yorulması"],0,"Bu yüzden yavaş yükselen üçgen uyarının eşiği ani yükselen dikdörtgen uyarınınkinden yüksek olabilir. Akomodasyon oranı normalde 2–7 veya 3,5–6,5. (Sayfa 21–22)"),
    Q("Elektrodiyagnozda akomodasyon değerlendirmesinde hangi akım tipi kullanılır?",["Üçgen atımlı akım","Dikdörtgen atımlı akım","Sinüzoidal akım","Diadinamik CP"],0,"Üçgen atımlı akımda şiddet kademeli yükselir; uzun süreli üçgen atımlar bazı denerve kaslarda doğrudan uyarım yapabilir. (Sayfa 23)"),
    Q("Sinir iletim çalışmalarında değerlendirilen parametreler arasında hangisi YOKTUR?",["Kas kuvveti (MMT)","Distal latans","İletim hızı","CMAP ve SNAP amplitüdü"],0,"NCS: distal latans, iletim hızı, motor (CMAP) ve duyusal (SNAP) yanıt amplitüdü, yanıt süresi ve dalga biçimi. (Sayfa 24)"),
    Q("İğne EMG'de denervasyon potansiyelleri yaralanmadan sonra genellikle ne zaman ortaya çıkar?",["Yaklaşık 1–4 hafta içinde","İlk saatlerde","6 ay sonra","Hiç ortaya çıkmaz"],0,"Bu nedenle değerlendirme zamanı klinik soruya göre belirlenmelidir. Yüzeyel EMG iğne EMG ile aynı tanısal bilgiyi sağlamaz. (Sayfa 25, 29)")
  ]);

  // ---------------- 8. Pnömatik Kompresyon (yeni) ----------------
  add(8,"lenfatik sistem, lenfödem, kompresyon tedavisi, bandaj, çorap ve pnömatik kompresyon",[
    Q("Lenfatik sistem derste nasıl tanımlanmıştır?",["İnterstisyel sıvıyı toplayıp süzen ikinci dolaşım sistemi","Sadece kanı pompalayan sistem","Hormon üreten sistem","Sadece bağışıklık hücresi üreten sistem"],0,"(Sayfa 2)"),
    Q("Lenfödem nasıl oluşur?",["Lenfatik sistemin transport kapasitesi normal lenfatik yükün altına düşünce proteinden zengin interstisyel sıvı birikir","Kan basıncı düşünce","Kas kuvveti azalınca","Ter bezleri çalışmayınca"],0,"Lenfödem izole bir tablo veya hayatı tehdit eden sistemik bir sendrom olabilir. (Sayfa 3)"),
    Q("Aşağıdakilerin hangisinde lenfatik ağ BULUNMAZ?",["Kornea","Kas","Deri altı doku","Bağırsak"],0,"Epidermis, kıl, tırnak, kıkırdak, kornea gibi avasküler yapılar, kemik iliği, MSS, orbita, pankreas adacıkları ve iç kulak hariç tüm vücudu ağ gibi sarar. (Sayfa 5)"),
    Q("Lenfödemin yüzde kaçı sekonderdir ve tahmini prevalansı nedir?",["%99; 1000 kişide 1","%50; 100 kişide 1","%10; 10.000 kişide 1","%1; 10 kişide 1"],0,"Kadınlarda erkeklerden daha sık görülür. (Sayfa 6)"),
    Q("Gelişmiş ülkelerde sekonder lenfödemin en sık nedeni nedir?",["Meme kanseri cerrahisi","Filaryazis","Obezite","Travma"],0,"Gelişmekte olan ülkelerde en sık neden parazitler (filaryazis). Alt ekstremitede üst ekstremiteden daha sık görülür. (Sayfa 7)"),
    Q("Aşağıdakilerden hangisi sekonder lenfödem nedeni olarak sayılmamıştır?",["Hipotiroidi","Kronik venöz yetmezlik","Renal yetmezlikte kullanılan rapamycin","Radyasyon"],0,"Nedenler: enfeksiyon, cerrahi ve radyasyon, travma, immobilite, kronik venöz yetmezlik, rapamycin, obezite, malignite. (Sayfa 7)"),
    Q("Kompresyon tedavisinin amacı nedir?",["Ödemli saha üzerinde eksternal (dış) bir basınç sağlamak","Dokuyu ısıtmak","Kası elektrikle uyarmak","Kan basıncını artırmak"],0,"(Sayfa 9)"),
    Q("Lenfödem tedavisinde en yaygın kullanılan ve en etkin yöntem hangisidir?",["Kompleks boşaltıcı fizyoterapi","Sadece pnömatik kompresyon","Sadece istirahat","Sıcak uygulama"],0,"(Sayfa 9)"),
    Q("Aşağıdakilerden hangisi kompresyon tedavisinin etkilerinden biri DEĞİLDİR?",["Efektif ultrafiltrasyon basıncını artırır","Venöz ve lenfatik drenajı artırır","Venöz pompa fonksiyonunu iyileştirir","Fibrotik dokuları gevşetir"],0,"Kompresyon ultrafiltrasyon basıncını AZALTIR; ayrıca terapötik sonuçların korunmasını sağlar. (Sayfa 10)"),
    Q("Kompresyon tedavisinin tipi ve düzeyi neye bağlıdır?",["Ödemin lokalizasyonu, genişliği, ciddiyeti, hastanın basıncı tolere etme yeteneği ve tercihleri","Sadece hastanın yaşına","Sadece mevsime","Sadece cihazın markasına"],0,"(Sayfa 10)"),
    Q("Kompresyon bandajları uzatılabilirlik açısından nasıl ayrılır?",["Elastik olmayan, kısa çekişli, orta çekişli ve uzun çekişli","Pamuklu ve yünlü","Tek kullanımlık ve kalıcı","Yapışkanlı ve yapışkansız"],0,"Kompresyon; bandaj, çorap/giysi, ped, pnömatik cihaz veya özel giysilerle yapılır. (Sayfa 11)"),
    Q("Aşağıdakilerden hangisi kompresyon bandajının KESİN kontrendikasyonudur?",["Arteriyel hastalıklar","Yüksek kan basıncı","Koroner skleroz / angina pektoris","Kalp ritim bozukluğu"],0,"Kesin: kardiyak ödem, arteriyel hastalık, skleroderma, Sudeck atrofisi. Göreceli: yüksek kan basıncı, koroner skleroz/angina, ritim bozukluğu. (Sayfa 15)"),
    Q("Kompresyon çoraplarıyla ilgili hangisi DOĞRUDUR?",["Her lenfödem tedavisi sonrası mutlaka kullanılmalı ve mümkünse kişiye özel üretilmelidir","Sadece tedaviden önce kullanılır","Hastanın uyumu önemsizdir","Basıncı 100 mmHg'dir"],0,"Ödem redüksiyonunu korur ve derinin elastik yetersizliğini kompanse eder. (Sayfa 16)"),
    Q("Başarılı dekonjestif fizyoterapi sonrası sıvının yeniden birikmesini önlemek için önerilen kompresyon çorabı basıncı nedir?",["25–46 mmHg","5–10 mmHg","80–100 mmHg","150 mmHg"],0,"Lenfödem derecesine göre 25–46 mmHg. (Sayfa 16)"),
    Q("Pnömatik kompresyon cihazlarıyla ilgili derste hangisi vurgulanmıştır?",["Kompleks boşaltıcı fizyoterapiye destekleyici olarak kullanılabilir ama ilave etkinliği gösterilmemiştir","Tek başına en etkili tedavidir","Lenfödemde kesinlikle kullanılmaz","Manuel lenf drenajının yerini tamamen alır"],0,"(Sayfa 19)"),
    Q("Pnömatik kompresyon hangi hastalarda faydalı bir tamamlayıcı olabilir?",["Self-drenaj yapamayan, limitli mobilitesi olan veya bakıcı desteği olmayan hastalarda","Sadece sporcularda","Arteriyel hastalığı olanlarda","Akut DVT'li hastalarda"],0,"(Sayfa 19)"),
    Q("Pnömatik kompresyon uygulamasından sonra mutlaka ne yapılmalıdır?",["Manuel lenf drenajı veya self-drenajla sıvı sağlam taraflara yönlendirilmeli ve kompresyon (giysi/bandaj) uygulanmalı","Hasta hemen koşmalı","Bölge ısıtılmalı","Hiçbir şey yapılmamalı"],0,"Çünkü proksimale göllenmeye neden olabilir. (Sayfa 20)"),
    Q("Pnömatik kompresyon cihazı neden oluşur?",["Belli zaman diliminde şişirilip indirilen bir giysi/kılıf içine basınçlı hava üfleyen kompresörden","Elektrik akımı veren elektrotlardan","Sıcak su dolaşımı sağlayan pompadan","Vakum uygulayan kaplardan"],0,"(Sayfa 21)"),
    Q("Pnömatik kompresyonda önerilen basınçlar nedir?",["Üst ekstremite 40–60 mmHg; alt ekstremite 60–80 mmHg","Üst 100 mmHg; alt 150 mmHg","Üst 5 mmHg; alt 10 mmHg","Her iki ekstremite için 200 mmHg"],0,"(Sayfa 21)"),
    Q("Pnömatik kompresyonda 60 mmHg üzerindeki basıncın riski nedir?",["Lenfatik damarlara zarar, iskemi ve venöz akımda artış yerine azalma","Hiçbir riski yoktur","Sadece ciltte kızarıklık","Kas hipertrofisi"],0,"(Sayfa 21)")
  ]);

  // ---------------- 9. Uygulama Yöntemleri 1 (yeni) ----------------
  add(9,"analjezi uygulamalarında bölgelere göre hasta pozisyonu, destekler ve elektrot yerleşimleri",[
    Q("Dersin bu bölümünün başlığı hangi amaçla yapılan uygulamalardır?",["Analjezi","Kas kuvvetlendirme","Elektrodiyagnoz","İyontoforez"],0,"‘Analjezi için yapılan uygulamalar.’ (Sayfa 2)"),
    Q("Boyun bölgesi uygulamalarında genelde hangi iki pozisyon kullanılır?",["Sandalyede oturup yatağa konan yastığa yaslanarak ve yüzüstü","Ayakta ve diz üstü","Sırtüstü ve yan yatış","Sadece oturarak"],0,"(Sayfa 2)"),
    Q("Yüzüstü pozisyonda hastanın konforu için ayak bileği altına ne konur?",["İnce bir yastık","Kum torbası","Buz paketi","Hiçbir şey"],0,"Görsellerde yüzüstü pozisyonda ayak bileğinin altına ince bir yastık, gerektiğinde ince bir havlu kullanılır. (Sayfa 2, 5, 14)"),
    Q("Omuz uygulamaları hangi pozisyonlarda yapılabilir?",["Sandalyede otururken, yüzüstü ve sırtüstü","Sadece ayakta","Sadece yan yatarak","Sadece diz üstü"],0,"(Sayfa 5)"),
    Q("Omuz bölgesi elektrot yerleşim görsellerinde aşağıdakilerden hangisi YOKTUR?",["Olekranon bursiti","Biceps tendinopati","Subakromial bursit","Thoracic outlet syndrome"],0,"Omuz görselleri: biceps tendinopati, subakromial bursit, donuk omuz, trapez üst parçasında ağrı, thoracic outlet syndrome. Olekranon bursiti dirsek bölgesindedir. (Sayfa 6, 10)"),
    Q("Dirsek uygulamaları hangi pozisyonda yapılır?",["Hasta sandalyede otururken","Yüzüstü yatarken","Ayakta","Sırtüstü yatarken"],0,"(Sayfa 9)"),
    Q("Dirsek bölgesi görsellerinde hangi durumlar gösterilmiştir?",["Lateral ve medial epikondilit, olekranon bursiti, tendinit/kırık ağrıları","Donuk omuz ve TOS","Aşil tendiniti ve plantar fasiit","Lumbago ve siyatik"],0,"(Sayfa 10)"),
    Q("Kol–önkol ve el–el bileği uygulamaları hangi pozisyonda yapılır?",["Dirsek uygulamalarının yapıldığı pozisyonlarda (oturarak)","Yüzüstü","Diz üstü","Sadece ayakta"],0,"(Sayfa 11–12)"),
    Q("Kol–önkol elektrot görsellerinde hangi durumlar için uygulama gösterilmiştir?",["İzole kas, kırık vb. noktalarda ağrı","Donuk omuz","Lumbago","Aşil tendiniti"],0,"(Sayfa 11)"),
    Q("Kalça uygulamaları hangi pozisyonda yapılır?",["Yüzüstü veya yan uzanır pozisyonda","Oturarak","Ayakta","Diz üstü"],0,"(Sayfa 14)"),
    Q("Diz uygulamaları hangi pozisyonda yapılır?",["Oturma veya yarı oturma","Yüzüstü","Yan yatış","Ayakta"],0,"Görselde dizin altına yumuşak bir destek veya yastık konur. (Sayfa 16)"),
    Q("Bacak uygulamaları hangi pozisyonlarda yapılabilir?",["Sırtüstü, yüzüstü veya yan uzanır pozisyonda","Sadece oturarak","Sadece ayakta","Sadece diz üstü"],0,"(Sayfa 18)"),
    Q("Ayak–ayak bileği uygulamaları hangi pozisyonda yapılır?",["Oturma veya yarı oturma","Yüzüstü","Ayakta","Baş aşağı"],0,"(Sayfa 20)"),
    Q("Sırt bölgesi uygulamaları hangi pozisyonda yapılır?",["Hasta yatakta yüzüstü uzanır","Sırtüstü","Oturarak","Ayakta"],0,"(Sayfa 23)"),
    Q("Abdomen bölgesi uygulamaları hangi pozisyonda yapılır?",["Hasta yatakta sırtüstü uzanır","Yüzüstü","Yan yatış","Oturarak"],0,"(Sayfa 28)"),
    Q("Derste faradik ile çalışılan trapezius kasının sinirini ders notları nasıl veriyor?",["N. accessorius","N. radialis","N. femoralis","N. medianus"],0,"Trapezius: S: N. accessorius; F: skapula hareketleri. (Sayfa 3)"),
    Q("Ders notlarına göre erector spinae'ye faradik uygulama hangi durumlarda yapılır?",["Kifoz, vertebra kırığı, ankilozan spondilit","Akut menisküs yırtığı","Karpal tünel sendromu","Plantar fasiit"],0,"Sırt bölgesindeki el yazısı notlar. (Sayfa 24, 27)"),
    Q("Sırt-bel bölgesi görsellerinde gösterilen elektrot yerleşimleri hangi tablolar içindir?",["Low back pain, sciatica, back pain","Migren, trigeminal nevralji","Epikondilit, olekranon bursiti","Raynaud, varis"],0,"(Sayfa 27)"),
    Q("Ders notlarına göre rektus abdominis kasının siniri nedir?",["İnterkostal sinirler","N. accessorius","N. femoralis","N. ulnaris"],0,"Abdomen sayfasındaki el yazısı not: rectus abdominis S: interkostal sinirler; F: karın içi basınç. (Sayfa 29)"),
    Q("Abdomen bölgesinde organ cerrahisi (ör. histerektomi) sonrası notlarda hangi diadinamik kombinasyonlar yazılmıştır?",["DF–MF ve DF–LP","Sadece RS","Sadece CP","Hiç diadinamik kullanılmaz"],0,"(Sayfa 29, el yazısı not)")
  ]);
})();
