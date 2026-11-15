(function(){
  "use strict";
  var KEY = "vize-quiz-v1";

  // ---------- storage (sessiz hata) ----------
  function load(){ try{ return JSON.parse(localStorage.getItem(KEY)) || {}; }catch(e){ return {}; } }
  function save(){ try{ localStorage.setItem(KEY, JSON.stringify(S)); }catch(e){} }
  var S = load();
  S.tests = S.tests || {};   // id -> {best, last, attempts, seen, answers:{qi:bool}}
  S.streak = S.streak || 0;

  var app = document.getElementById("app");
  var SITE = window.SITE || {title:"Vize Haftası", version:1};
  var TESTS = window.TESTS || [];
  var COURSES = window.COURSES || [];
  var CUR = SITE.version;

  // ---------- yardımcılar ----------
  function esc(s){ return String(s).replace(/[&<>"]/g,function(c){return {"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c];}); }
  function T(id){ return S.tests[id] || (S.tests[id] = {best:null,last:null,attempts:0,seen:false,answers:{}}); }
  function today(){ var d=new Date(); return d.getFullYear()+"-"+String(d.getMonth()+1).padStart(2,"0")+"-"+String(d.getDate()).padStart(2,"0"); }
  function daysSince(s){ return Math.round((new Date(today()) - new Date(s)) / 864e5); }
  function shuffle(a){ a=a.slice(); for(var i=a.length-1;i>0;i--){var j=Math.floor(Math.random()*(i+1));var x=a[i];a[i]=a[j];a[j]=x;} return a; }
  function isNew(t){ return t.v === CUR && !T(t.id).seen; }
  function course(id){ return COURSES.filter(function(c){return c.id===id;})[0]; }
  function testsOf(cid){ return TESTS.filter(function(t){return t.course===cid;}); }
  function testById(id){ return TESTS.filter(function(t){return t.id===id;})[0]; }

  function bumpStreak(){
    var t = today();
    if(S.streakDay === t) return;
    S.streak = (S.streakDay && daysSince(S.streakDay) === 1) ? S.streak+1 : 1;
    S.streakDay = t;
  }

  function stats(list){
    var total=0, solved=0, correct=0;
    list.forEach(function(t){
      total += t.questions.length;
      var ans=T(t.id).answers;
      Object.keys(ans).forEach(function(k){ solved++; if(ans[k]) correct++; });
    });
    return {total:total, solved:solved, correct:correct,
            pct: solved ? Math.round(correct/solved*100) : 0,
            cover: total ? Math.round(solved/total*100) : 0};
  }

  function wrongsOf(list){
    var out=[];
    list.forEach(function(t){
      var ans=T(t.id).answers;
      t.questions.forEach(function(q,i){ if(ans[i]===false) out.push({test:t,qi:i}); });
    });
    return out;
  }

  function motto(st){
    if(!st.solved) return "İlk testle başla, 10 dakikanı alır.";
    if(st.pct>=90) return "Vizeye hazırsın. Yanlış kalan varsa onları da temizle.";
    if(st.pct>=70) return "İyi gidiyor. Yanlışlarını tekrar çözüp %90'ı geç.";
    if(st.pct>=50) return "Yarı yoldasın. Açıklamaları okuyarak bir tur daha.";
    return "Sorun değil, açıklamalar tam bunun için. Devam!";
  }

  function statsHtml(st){
    return '<div class="stats">'
      + '<div class="stat"><b>'+st.solved+'/'+st.total+'</b><span>çözülen soru</span></div>'
      + '<div class="stat"><b>%'+st.pct+'</b><span>başarı</span></div>'
      + '<div class="stat"><b>'+(S.streak||0)+'🔥</b><span>gün seri</span></div>'
      + '</div>'
      + '<div class="overall"><div class="row"><span>Konu kapsamı</span><b>%'+st.cover+'</b></div>'
      + '<div class="bar"><i style="width:'+st.cover+'%"></i></div>'
      + '<div class="motto">'+esc(motto(st))+'</div></div>';
  }

  function vPill(t){
    if(t.v === CUR) return isNew(t)
      ? '<span class="pill new">V'+t.v+' · YENİ</span>'
      : '<span class="pill vcur">V'+t.v+'</span>';
    return '<span class="pill v">V'+t.v+'</span>';
  }

  // ---------- HOME: dersler ----------
  var view = {name:"home"};

  function home(){
    view = {name:"home"};
    var st = stats(TESTS);
    var fresh = TESTS.filter(isNew);
    var h = '<header class="top"><div class="brand"><small>Ders çalışma testleri</small><h1>'+esc(SITE.title)+'</h1></div></header>';

    if(fresh.length){
      var q = fresh.reduce(function(n,t){return n+t.questions.length;},0);
      h += '<button class="vbanner" data-act="newonly"><span class="vtag">V'+CUR+'</span>'
        + '<div><b>Yeni yükleme geldi</b><span>'+fresh.length+' yeni test, '+q+' soru. Dokun, sadece yenileri göster.</span></div></button>';
    }

    h += statsHtml(st);
    h += '<div class="sec-title">Dersler</div>';
    COURSES.forEach(function(c){
      var list = testsOf(c.id), cs = stats(list);
      var nNew = list.filter(isNew).length;
      var pills = nNew ? '<span class="pill new">'+nNew+' yeni test</span>' : '';
      h += '<button class="card course" data-act="course" data-id="'+c.id+'">'
        + '<div class="meta">'+pills+'<span>'+list.length+' test · '+cs.total+' soru</span></div>'
        + '<h3>'+esc(c.name)+'</h3><p>'+esc(c.sub||"")+'</p>'
        + '<div class="foot"><div class="bar"><i style="width:'+cs.cover+'%"></i></div><span>%'+cs.cover+' çözüldü</span></div>'
        + '</button>';
    });

    if(SITE.notes){
      h += '<div class="sec-title">Sürümler</div><div class="changelog">';
      Object.keys(SITE.notes).sort(function(a,b){return b-a;}).forEach(function(v){
        h += '<div><b>V'+v+'</b> · '+esc(SITE.notes[v])+'</div>';
      });
      h += '</div>';
    }
    h += '<div class="sec-title">Paylaş</div>';
    h += '<button class="card share" data-act="share"><h3>📤 İlerlememi gönder</h3><p>İstatistiklerini ve yanlışlarını tek bir link olarak WhatsApp\'tan gönder. Linki açan kişi konu konu durumunu görür.</p></button>';
    h += '<div id="sharebox"></div>';
    h += '<div class="footer">İlerlemen bu cihazda saklanır. Gönderdiğin link o anki durumu taşır.</div>';
    app.innerHTML = h;
    window.scrollTo(0,0);
  }

  // ---------- DERS sayfası: konular > testler ----------
  function coursePage(cid, filter){
    var c = course(cid);
    view = {name:"course", cid:cid, filter:filter||"all"};
    var all = testsOf(cid);
    var list = view.filter==="new" ? all.filter(function(t){return t.v===CUR;}) : all;
    var st = stats(all);
    var wrongs = wrongsOf(all);

    var h = '<button class="back" data-act="home">← Dersler</button>';
    h += '<div class="course-title"><small>'+esc(c.sub||"")+'</small><h1>'+esc(c.name)+'</h1></div>';
    h += statsHtml(st);

    if(wrongs.length){
      h += '<button class="card wrongs" data-act="wrongs"><div class="meta"><span class="pill" style="background:var(--bad);color:#fff">TEKRAR</span></div>'
        + '<h3>Yanlışlarım ('+wrongs.length+')</h3><p>Bu dersteki yanlışlarını karışık olarak tekrar çöz. Doğru yaptıkça listeden düşer.</p></button>';
    }

    var nq = all.reduce(function(n,t){return n+t.questions.length;},0);
    if(all.length > 1) h += '<button class="btn ghost allmix" data-act="mix">🔀 Tüm dersi karışık çöz ('+nq+' soru)</button>';

    var nCur = all.filter(function(t){return t.v===CUR;}).length;
    h += '<div class="tabs"><button data-act="filter" data-v="all" class="'+(view.filter==="all"?'on':'')+'">Tüm testler ('+all.length+')</button>'
      + '<button data-act="filter" data-v="new" class="'+(view.filter==="new"?'on':'')+'">Sadece V'+CUR+' ('+nCur+')</button></div>';

    c.units.forEach(function(u){
      var ut = list.filter(function(t){return t.unit===u.id;});
      if(!ut.length) return;
      var us = stats(ut);
      h += '<section class="unit"><div class="unit-head"><span class="code">'+esc(u.code)+'</span><h2>'+esc(u.title)+'</h2><small>'+us.solved+'/'+us.total+'</small></div>';
      var cs = cardsOf(cid, u.id);
      if(cs.length) h += '<div class="unit-tools"><button class="chip brand" data-act="cards" data-u="'+esc(u.id)+'">🃏 İşaret kartlarıyla çalış ('+cs.length+')</button></div>';
      ut.slice().sort(function(a,b){return a.v-b.v;}).forEach(function(t){ h += card(t); });
      h += '</section>';
    });
    if(!list.length) h += '<div class="empty">Bu filtrede test yok.</div>';
    h += '<div class="footer">Konu kodları kitaptaki içindekiler sayfasına göredir.</div>';
    app.innerHTML = h;
    window.scrollTo(0,0);
  }

  function card(t){
    var s = T(t.id), n = t.questions.length;
    var correct = Object.keys(s.answers).filter(function(k){return s.answers[k];}).length;
    var pills = vPill(t);
    if(s.best!==null && s.best===n) pills += '<span class="pill done">TAM PUAN</span>';
    var info = s.attempts ? 'En iyi: <b>'+s.best+'/'+n+'</b> · '+s.attempts+' deneme' : n+' soru · henüz çözülmedi';
    return '<button class="card" data-act="start" data-id="'+t.id+'">'
      + '<div class="meta">'+pills+(t.src?'<span class="src">'+esc(t.src)+'</span>':'')+'</div>'
      + '<h3>'+esc(t.title)+'</h3><p>'+esc(t.desc)+'</p>'
      + '<div class="foot"><div class="bar"><i style="width:'+Math.round(correct/n*100)+'%"></i></div><span>'+info+'</span></div>'
      + '</button>';
  }

  function backToCourse(){ if(Q && Q.cid) coursePage(Q.cid, Q.filter); else home(); }

  // ---------- KARTLAR (işaret sözlüğü) ----------
  function cardsOf(cid, uid){ var c = (window.CARDS||{})[cid]; return (c && c[uid]) || []; }
  var C = null;
  function startCards(uid){
    var list = cardsOf(view.cid, uid);
    var u = course(view.cid).units.filter(function(x){return x.id===uid;})[0];
    C = { cid:view.cid, filter:view.filter, title:u.title, list:list, order:list.map(function(_,i){return i;}), i:0, shown:false, mixed:false };
    cardView();
  }
  function cardView(){
    view = {name:"cards", cid:C.cid, filter:C.filter};
    var it = C.list[C.order[C.i]], n = C.list.length;
    var h = '<button class="back" data-act="cardsback">← Konular</button>';
    h += '<div class="qhead"><div class="bar"><i style="width:'+Math.round((C.i+1)/n*100)+'%"></i></div><span class="count">'+(C.i+1)+' / '+n+'</span></div>';
    h += '<div class="qtitle">'+esc(C.title)+' · işaret kartları</div>';
    h += '<div class="flash"><img src="'+esc(it.i)+'" alt="işaret">';
    h += C.shown ? '<div class="ans">'+esc(it.l)+'</div><div class="pg">Kitapta s. '+it.p+'</div>'
                 : '<div class="hid">Önce tahmin et, sonra cevabı gör.</div>';
    h += '</div>';
    h += C.shown ? '' : '<button class="btn" data-act="creveal" style="margin-top:12px">Cevabı göster</button>';
    h += '<div class="navrow"><button class="btn ghost" data-act="cprev">←</button>'
      + '<button class="btn ghost" data-act="cshuffle">'+(C.mixed?'Sırayla':'🔀 Karıştır')+'</button>'
      + '<button class="btn ghost" data-act="cnext">→</button></div>';
    app.innerHTML = h;
    var nx = C.list[C.order[(C.i+1)%n]]; if(nx){ var im = new Image(); im.src = nx.i; }
  }

  // ---------- QUIZ ----------
  var Q = null;

  function prep(it){ it.order = shuffle([0,1,2,3].slice(0, it.test.questions[it.qi].o.length)); }

  function start(testId){
    var t = testById(testId);
    T(t.id).seen = true; save();
    Q = { title:t.title, mode:"test", testId:t.id, cid:t.course, filter:view.filter, i:0, results:[],
          items: t.questions.map(function(_,qi){ return {test:t, qi:qi}; }) };
    Q.items.forEach(prep);
    question();
  }
  function startMix(){
    var cid = view.cid, items = [];
    testsOf(cid).forEach(function(t){ t.questions.forEach(function(_,qi){ items.push({test:t, qi:qi}); }); });
    Q = { title:"Karışık: "+course(cid).name, mode:"wrongs", cid:cid, filter:view.filter, i:0, results:[], items: shuffle(items) };
    Q.items.forEach(prep);
    question();
  }
  function startWrongs(){
    var cid = view.cid;
    Q = { title:"Yanlışlarım", mode:"wrongs", cid:cid, filter:view.filter, i:0, results:[], items: shuffle(wrongsOf(testsOf(cid))) };
    Q.items.forEach(prep);
    question();
  }

  function question(){
    view = {name:"quiz", cid:Q.cid, filter:Q.filter};
    var it = Q.items[Q.i], q = it.test.questions[it.qi], n = Q.items.length;
    var h = '<button class="back" data-act="quit">← Konular</button>';
    h += '<div class="qhead"><div class="bar"><i style="width:'+Math.round(Q.i/n*100)+'%"></i></div><span class="count">'+(Q.i+1)+' / '+n+'</span></div>';
    h += '<div class="qtitle">'+esc(Q.mode==="wrongs" ? it.test.title : Q.title)+'</div>';
    h += '<p class="qtext">'+esc(q.q)+'</p>';
    if(q.img) h += '<img class="qimg" src="'+esc(q.img)+'" alt="işaret">';
    if(q.oimg){
      h += '<div class="ogrid">';
      it.order.forEach(function(oi,pos){
        h += '<button class="opt imgopt" data-act="pick" data-oi="'+oi+'"><span class="k">'+"ABCD"[pos]+'</span><img src="'+esc(q.oimg[oi])+'" alt="seçenek '+"ABCD"[pos]+'"><span class="cap"></span></button>';
      });
      h += '</div>';
    } else {
      it.order.forEach(function(oi,pos){
        h += '<button class="opt" data-act="pick" data-oi="'+oi+'"><span class="k">'+"ABCD"[pos]+'</span><span>'+esc(q.o[oi])+'</span></button>';
      });
    }
    h += '<div id="after"></div>';
    app.innerHTML = h;
    window.scrollTo(0,0);
    // sonraki sorunun görsellerini önceden yükle
    var nx = Q.items[Q.i+1];
    if(nx){ var nq = nx.test.questions[nx.qi]; [nq.img].concat(nq.oimg||[]).forEach(function(src){ if(src){ var im=new Image(); im.src=src; } }); }
  }

  function pick(oi, btn){
    var it = Q.items[Q.i], q = it.test.questions[it.qi];
    var ok = oi === q.a;
    app.querySelectorAll(".opt").forEach(function(b){
      b.disabled = true;
      var v = +b.getAttribute("data-oi");
      if(v===q.a) b.classList.add("ok");
      else if(b===btn) b.classList.add("bad");
      else b.classList.add("dim");
      var cap = b.querySelector(".cap"); if(cap) cap.textContent = q.o[v];
    });
    var ts = T(it.test.id);
    ts.answers[it.qi] = ok;
    ts.n = ts.n || {}; ts.w = ts.w || {}; ts.p = ts.p || {};
    ts.n[it.qi] = (ts.n[it.qi]||0) + 1;
    if(!ok){ ts.w[it.qi] = (ts.w[it.qi]||0) + 1; ts.p[it.qi] = oi; }
    Q.results.push({it:it, picked:oi, ok:ok});
    bumpStreak(); save();
    if(navigator.vibrate && !ok){ try{navigator.vibrate(60);}catch(e){} }

    var last = Q.i === Q.items.length-1;
    var after = document.getElementById("after");
    after.innerHTML = '<div class="explain '+(ok?'ok':'bad')+'"><strong>'+(ok?'✓ Doğru!':'✗ Yanlış. Doğru cevap: '+esc(q.o[q.a]))+'</strong>'+esc(q.e)+'</div>'
      + '<button class="btn" data-act="next">'+(last?'Sonucu gör':'Sonraki soru →')+'</button>';
    after.scrollIntoView({behavior:"smooth", block:"nearest"});
  }

  function next(){ if(Q.i < Q.items.length-1){ Q.i++; question(); } else finish(); }

  // ---------- SONUÇ ----------
  function finish(){
    var c = Q.results.filter(function(r){return r.ok;}).length;
    if(Q.mode==="test"){
      var s = T(Q.testId);
      s.attempts++; s.last = c; s.best = s.best===null ? c : Math.max(s.best, c);
      save();
    }
    Q.view = Q.results.some(function(r){return !r.ok;}) ? "wrong" : "all";
    result();
  }

  function result(){
    view = {name:"result", cid:Q.cid, filter:Q.filter};
    var n = Q.results.length;
    var c = Q.results.filter(function(r){return r.ok;}).length;
    var pct = n ? Math.round(c/n*100) : 0;
    var R = 60, C = 2*Math.PI*R;
    var color = pct>=80 ? "var(--ok)" : pct>=50 ? "var(--brand)" : "var(--bad)";
    var head = pct===100 ? "Kusursuz! 🎉" : pct>=80 ? "Çok iyi!" : pct>=50 ? "Fena değil, biraz daha." : "Tekrar zamanı.";

    var h = '<button class="back" data-act="tocourse">← Konular</button>';
    h += '<div class="score"><div class="ring"><svg width="140" height="140" viewBox="0 0 140 140">'
      + '<circle cx="70" cy="70" r="'+R+'" fill="none" stroke="var(--line)" stroke-width="12"/>'
      + '<circle cx="70" cy="70" r="'+R+'" fill="none" stroke="'+color+'" stroke-width="12" stroke-linecap="round" stroke-dasharray="'+C+'" stroke-dashoffset="'+(C*(1-pct/100))+'"/>'
      + '</svg><b>%'+pct+'</b></div>'
      + '<h2>'+head+'</h2><p>'+c+' doğru · '+(n-c)+' yanlış · '+esc(Q.title)+'</p></div>';

    if(n-c>0) h += '<button class="btn" data-act="retrywrong">Bu turdaki yanlışları tekrar çöz ('+(n-c)+')</button>';
    h += '<button class="btn ghost" data-act="'+(Q.mode==="test"?'again':'tocourse')+'">'+(Q.mode==="test"?'Testi baştan çöz':'Konulara dön')+'</button>';

    h += '<div class="sec-title">Cevapların</div>';
    h += '<div class="tabs"><button data-act="view" data-v="wrong" class="'+(Q.view==="wrong"?'on':'')+'">Yanlışlar ('+(n-c)+')</button>'
      + '<button data-act="view" data-v="all" class="'+(Q.view==="all"?'on':'')+'">Hepsi ('+n+')</button></div>';

    var list = Q.results.filter(function(r){ return Q.view==="all" || !r.ok; });
    if(!list.length) h += '<div class="empty">Hiç yanlış yok, helal olsun.</div>';
    list.forEach(function(r){
      var q = r.it.test.questions[r.it.qi];
      h += '<div class="review"><div class="q">'+(r.ok?'✅ ':'❌ ')+esc(q.q)+'</div>';
      if(q.img || q.oimg){
        h += '<div class="thumbs">';
        if(q.img) h += '<figure><img src="'+esc(q.img)+'" alt=""><figcaption>Soru</figcaption></figure>';
        if(q.oimg){
          h += '<figure class="c"><img src="'+esc(q.oimg[q.a])+'" alt=""><figcaption>Doğru</figcaption></figure>';
          if(!r.ok) h += '<figure class="y"><img src="'+esc(q.oimg[r.picked])+'" alt=""><figcaption>Seçtiğin</figcaption></figure>';
        }
        h += '</div>';
      }
      if(!r.ok) h += '<div class="line y">Senin cevabın: '+esc(q.o[r.picked])+'</div>';
      h += '<div class="line c">Doğru cevap: '+esc(q.o[q.a])+'</div>';
      h += '<div class="ex">'+esc(q.e)+'</div></div>';
    });
    app.innerHTML = h;
    window.scrollTo(0,0);
  }

  function retryWrongFromResult(){
    var items = Q.results.filter(function(r){return !r.ok;}).map(function(r){ return {test:r.it.test, qi:r.it.qi}; });
    Q = { title:"Yanlışları tekrar", mode:"wrongs", cid:Q.cid, filter:Q.filter, i:0, results:[], items: shuffle(items) };
    Q.items.forEach(prep);
    question();
  }

  // ---------- RAPOR: ilerlemeyi link olarak paylaş ----------
  // Link biçimi: #r=<base64url(JSON)>  (hash sunucuya gitmez)
  // JSON: {k:1, ad, d:tarih, s:seri, t:{testId:[best, attempts, durum, yanlışSayısı]}}
  //   durum: soru başına bir karakter. "-" çözülmedi, "+" son cevap doğru, "a-d" son cevap yanlış (seçilen şık), "x" yanlış (şık bilinmiyor)
  //   yanlışSayısı: soru başına toplam yanlış sayısı (0-9)
  function b64e(str){ return btoa(unescape(encodeURIComponent(str))).replace(/\+/g,"-").replace(/\//g,"_").replace(/=+$/,""); }
  function b64d(str){ str=str.replace(/-/g,"+").replace(/_/g,"/"); while(str.length%4) str+="="; return decodeURIComponent(escape(atob(str))); }

  function packProgress(){
    var out = {k:1, ad:S.name||"", d:today(), s:S.streak||0, t:{}};
    TESTS.forEach(function(t){
      var s = S.tests[t.id]; if(!s) return;
      var st = "", wc = "", any = false;
      t.questions.forEach(function(_,i){
        var a = s.answers[i], p = s.p && s.p[i], w = (s.w && s.w[i]) || (a===false ? 1 : 0);
        if(a===undefined) st += "-";
        else { any = true; st += a ? "+" : (p===undefined ? "x" : "abcd"[p]); }
        wc += Math.min(w,9);
      });
      if(any || s.attempts) out.t[t.id] = [s.best, s.attempts||0, st, wc];
    });
    return out;
  }

  function shareProgress(){
    if(!S.name){
      var n = prompt("Raporda görünecek adın (boş bırakabilirsin):", "");
      if(n===null) return;
      S.name = n.trim().slice(0,30); save();
    }
    var url = location.origin + location.pathname + "#r=" + b64e(JSON.stringify(packProgress()));
    var text = (S.name ? S.name+" · " : "") + "Vize Haftası ilerleme raporum";
    var box = document.getElementById("sharebox");
    function showBox(msg){
      box.innerHTML = '<div class="sharebox"><b>'+esc(msg)+'</b><textarea readonly rows="3">'+esc(url)+'</textarea></div>';
      var ta = box.querySelector("textarea"); ta.focus(); ta.select();
    }
    if(navigator.share){
      navigator.share({title:"Vize Haftası raporu", text:text, url:url}).catch(function(){ showBox("Paylaşım iptal edildi. Linki buradan kopyalayabilirsin:"); });
    } else if(navigator.clipboard){
      navigator.clipboard.writeText(url).then(function(){ showBox("Link kopyalandı. WhatsApp'a yapıştırıp gönder:"); }, function(){ showBox("Linki kopyala ve gönder:"); });
    } else showBox("Linki kopyala ve gönder:");
  }

  var REP = null;
  function readReport(){
    var m = location.hash.match(/^#r=([A-Za-z0-9_-]+)/);
    if(!m) return null;
    try{ var r = JSON.parse(b64d(m[1])); return r && r.k===1 ? r : null; }catch(e){ return null; }
  }

  function repTest(t){
    var x = REP.t[t.id]; if(!x) return null;
    var res = {solved:0, correct:0, wrong:[]};
    t.questions.forEach(function(q,i){
      var c = x[2].charAt(i);
      if(!c || c==="-") return;
      res.solved++;
      if(c==="+") res.correct++;
      else res.wrong.push({q:q, qi:i, picked: "abcd".indexOf(c), times: +x[3].charAt(i) || 1});
    });
    return res;
  }
  function repStats(list){
    var o = {total:0, solved:0, correct:0, wrong:[]};
    list.forEach(function(t){
      o.total += t.questions.length;
      var r = repTest(t); if(!r) return;
      o.solved += r.solved; o.correct += r.correct;
      r.wrong.forEach(function(w){ w.test = t; o.wrong.push(w); });
    });
    o.pct = o.solved ? Math.round(o.correct/o.solved*100) : 0;
    o.cover = o.total ? Math.round(o.solved/o.total*100) : 0;
    return o;
  }
  function pctColor(p){ return p>=80 ? "var(--ok)" : p>=50 ? "var(--brand)" : "var(--bad)"; }

  function reportPage(){
    view = {name:"report"};
    var all = repStats(TESTS);
    var who = REP.ad ? REP.ad : "Arkadaşın";
    var h = '<button class="back" data-act="closereport">← Kendi siteme dön</button>';
    h += '<div class="course-title"><small>İlerleme raporu · '+esc(REP.d)+' tarihli</small><h1>'+esc(who)+'</h1></div>';
    h += '<div class="stats"><div class="stat"><b>'+all.solved+'/'+all.total+'</b><span>çözülen soru</span></div>'
      + '<div class="stat"><b style="color:'+pctColor(all.pct)+'">%'+all.pct+'</b><span>başarı</span></div>'
      + '<div class="stat"><b>'+(REP.s||0)+'🔥</b><span>gün seri</span></div></div>';
    h += '<button class="btn ghost" data-act="copyreport">📋 Raporu metin olarak kopyala</button><div id="copymsg" class="empty"></div>';

    // zayıf konular
    var units = [];
    COURSES.forEach(function(c){ c.units.forEach(function(u){
      var st = repStats(TESTS.filter(function(t){return t.course===c.id && t.unit===u.id;}));
      if(st.solved) units.push({c:c, u:u, st:st});
    }); });
    var weak = units.filter(function(x){return x.st.wrong.length;}).sort(function(a,b){ return a.st.pct-b.st.pct || b.st.wrong.length-a.st.wrong.length; }).slice(0,5);
    if(weak.length){
      h += '<div class="sec-title">En zayıf konular</div>';
      weak.forEach(function(x){
        h += '<div class="rrow"><div><b>'+esc(x.u.title)+'</b><small>'+esc(x.c.name)+' · '+x.st.wrong.length+' yanlış</small></div><span style="color:'+pctColor(x.st.pct)+'">%'+x.st.pct+'</span></div>';
      });
    }

    COURSES.forEach(function(c){
      var cl = TESTS.filter(function(t){return t.course===c.id;}), cs = repStats(cl);
      h += '<div class="sec-title">'+esc(c.name)+' · %'+cs.pct+' başarı · %'+cs.cover+' kapsam</div>';
      c.units.forEach(function(u){
        var ut = cl.filter(function(t){return t.unit===u.id;}); if(!ut.length) return;
        var us = repStats(ut);
        h += '<details class="runit"'+(us.wrong.length?'':' ')+'><summary><span class="code">'+esc(u.code)+'</span><span class="rt">'+esc(u.title)+'<small>'+us.solved+'/'+us.total+' çözüldü'+(us.solved?' · '+us.wrong.length+' yanlış':'')+'</small></span>'
          + (us.solved ? '<b style="color:'+pctColor(us.pct)+'">%'+us.pct+'</b>' : '<b class="none">—</b>') + '</summary>';
        ut.forEach(function(t){
          var x = REP.t[t.id];
          h += '<div class="rtest">'+esc(t.title)+' <small>'+(x && x[1] ? 'en iyi '+x[0]+'/'+t.questions.length+' · '+x[1]+' deneme' : 'test bitirilmedi')+'</small></div>';
        });
        us.wrong.forEach(function(w){
          h += '<div class="review"><div class="q">❌ '+esc(w.q.q)+(w.times>1?' <span class="pill" style="background:var(--bad-soft);color:var(--bad)">'+w.times+' kez</span>':'')+'</div>';
          if(w.q.img) h += '<div class="thumbs"><figure><img src="'+esc(w.q.img)+'" alt=""></figure></div>';
          if(w.picked>=0) h += '<div class="line y">Seçtiği: '+esc(w.q.o[w.picked])+'</div>';
          h += '<div class="line c">Doğru cevap: '+esc(w.q.o[w.q.a])+'</div></div>';
        });
        if(us.solved && !us.wrong.length) h += '<div class="empty">Bu konuda yanlışı yok.</div>';
        h += '</details>';
      });
    });
    h += '<div class="footer">Bu sayfa yalnızca linkteki verileri gösterir. Kendi ilerlemen değişmez.</div>';
    app.innerHTML = h;
    window.scrollTo(0,0);
  }

  function reportText(){
    var all = repStats(TESTS);
    var L = [];
    L.push("VİZE HAFTASI İLERLEME RAPORU");
    L.push("Kişi: "+(REP.ad||"-")+" · Tarih: "+REP.d+" · Genel: "+all.correct+"/"+all.solved+" doğru (%"+all.pct+"), kapsam %"+all.cover);
    COURSES.forEach(function(c){
      var cl = TESTS.filter(function(t){return t.course===c.id;});
      L.push(""); L.push("## "+c.name);
      c.units.forEach(function(u){
        var ut = cl.filter(function(t){return t.unit===u.id;}); if(!ut.length) return;
        var us = repStats(ut);
        L.push("- ["+u.code+"] "+u.title+": "+(us.solved ? us.correct+"/"+us.solved+" doğru (%"+us.pct+"), "+us.solved+"/"+us.total+" çözüldü" : "çözülmedi"));
        us.wrong.forEach(function(w){
          L.push("    ✗ "+w.q.q+(w.q.img?" [görsel: "+w.q.img+"]":"")+" | Seçtiği: "+(w.picked>=0?w.q.o[w.picked]:"?")+" | Doğru: "+w.q.o[w.q.a]+(w.times>1?" | "+w.times+" kez yanlış":"")+" | test: "+w.test.id+"#"+w.qi);
        });
      });
    });
    return L.join("\n");
  }

  function copyReport(){
    var txt = reportText(), msg = document.getElementById("copymsg");
    function fallback(){ msg.innerHTML = '<textarea readonly rows="8" style="width:100%">'+esc(txt)+'</textarea>'; }
    if(navigator.clipboard) navigator.clipboard.writeText(txt).then(function(){ msg.textContent = "Kopyalandı. İstediğin yere yapıştırabilirsin."; }, fallback);
    else fallback();
  }

  // ---------- olaylar ----------
  app.addEventListener("click", function(ev){
    var b = ev.target.closest("[data-act]"); if(!b) return;
    var a = b.getAttribute("data-act");
    if(a==="course") coursePage(b.getAttribute("data-id"));
    else if(a==="newonly"){
      var firstNew = TESTS.filter(isNew)[0];
      coursePage(firstNew ? firstNew.course : COURSES[0].id, "new");
    }
    else if(a==="filter") coursePage(view.cid, b.getAttribute("data-v"));
    else if(a==="start") start(b.getAttribute("data-id"));
    else if(a==="wrongs") startWrongs();
    else if(a==="mix") startMix();
    else if(a==="cards") startCards(b.getAttribute("data-u"));
    else if(a==="creveal"){ C.shown = true; cardView(); }
    else if(a==="cnext"){ C.i = (C.i+1) % C.list.length; C.shown = false; cardView(); }
    else if(a==="cprev"){ C.i = (C.i-1+C.list.length) % C.list.length; C.shown = false; cardView(); }
    else if(a==="cshuffle"){ C.mixed = !C.mixed; C.order = C.mixed ? shuffle(C.order) : C.list.map(function(_,i){return i;}); C.i = 0; C.shown = false; cardView(); }
    else if(a==="cardsback") coursePage(C.cid, C.filter);
    else if(a==="pick" && !b.disabled) pick(+b.getAttribute("data-oi"), b);
    else if(a==="next") next();
    else if(a==="home") home();
    else if(a==="tocourse") backToCourse();
    else if(a==="quit"){ if(!Q.results.length || confirm("Testten çıkılsın mı? Cevapladıkların kaydedildi.")) backToCourse(); }
    else if(a==="again") start(Q.testId);
    else if(a==="retrywrong") retryWrongFromResult();
    else if(a==="view"){ Q.view = b.getAttribute("data-v"); result(); }
    else if(a==="share") shareProgress();
    else if(a==="copyreport") copyReport();
    else if(a==="closereport"){ history.replaceState(null, "", location.pathname + location.search); REP = null; home(); }
  });

  function route(){ REP = readReport(); if(REP) reportPage(); else if(view.name==="report") home(); }
  window.addEventListener("hashchange", route);
  REP = readReport();
  if(REP) reportPage(); else home();
})();
