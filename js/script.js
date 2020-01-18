// lista di 6 carte/ immagini da popolare nell'array in modo random
// per fare questo devo creare una lista vuota e poi la popolo
// creo una funzione per il numero random
// dentro al ciclo che si ripete max volte per la lunghezza dell'array carte ci metto il push al SECONDO ARRAY  vuoto
//
// dopo faccio scegliere all utente 3 numeri che indicano le posizioni delle tre carte da scegliere
// creo una TERZO ARRAY e la popolo
// scelte le tre carte bisogna controllare  le varie condizioni

$(document).ready(function() {
  $("#mescola").click(
    function() {
      $("#prima_scelta").addClass("carta1");
      $("#seconda_scelta").addClass("carta2");
      $("#terza_scelta").addClass("carta3");
      $("#quarta_carta").addClass("carta4");
      $("#quinta_carta").addClass("carta5");
      $("#sesta_carta").addClass("carta6");

      var x = document.getElementById("myAudio");

      function playAudio() {
        x.play();
      }
      playAudio()

      var listaCarte = ["img/il_matto.png", "img/il_mondo.png", "img/il_papa.png", "img/il_sole.png", "img/l_appeso.png", "img/l_eremita.png"];
      console.log("lista carte " + listaCarte);
      var listaCarteCasuale = [];
      var listaCarteScelte = [];
      while (listaCarteCasuale.length < 6) {
        var numeroCasuale = listaCarte[genNumeroCasuale(listaCarte.length - 1)];
        var cerca = presenteInArray(listaCarteCasuale, numeroCasuale);
        if (cerca == false) {
          listaCarteCasuale.push(numeroCasuale);
        }
      }
      console.log("lista casuale carte " + listaCarteCasuale);

      $("#mescola").fadeOut(400);
      ritardoBottone()

      function ritardoBottone() {
        setTimeout(function() {
          $("#scegli_carte").fadeIn(600);
        }, 12000);
      }

      // FUNZIONE SCEGLI CARTE

      $("#scegli_carte").click(
        function() {
          $("#prima_scelta").removeClass("carte");
          $("#seconda_scelta").removeClass("carte");
          $("#terza_scelta").removeClass("carte");
          $("#prima_scelta").addClass("carte2");
          $("#seconda_scelta").addClass("carte2");
          $("#terza_scelta").addClass("carte2");
          $("#container2").removeClass("container2");
          $("#container2").addClass("container3");
          $("#quarta_carta").hide();
          $("#quinta_carta").hide();
          $("#sesta_carta").hide();
          $("h1").fadeOut();

          $("#scegli_carte").fadeOut(1000);

          var numeroMax = 6
          var numeroMin = 1

          var numeroCarteSelezionabili = 0;
          var numeriProibiti = [];
          while (numeroCarteSelezionabili < 3) {

            var numeriUtenteScelti = parseInt(prompt("scegli le carte. inserisci un numero da 1 a 6 "));

            while (presenteInArray(numeriProibiti, numeriUtenteScelti) == true) {
              numeriUtenteScelti = parseInt(prompt("Non puoi inserire lo stesso numero. Riprova"));
            }
            numeriProibiti.push(numeriUtenteScelti);
            console.log("nimeri proibiti" + numeriProibiti);
            richiediNumeroCorretto();

            if (presenteInArray(listaCarteScelte, numeriUtenteScelti) == false) {

              listaCarteScelte.push(listaCarteCasuale[numeriUtenteScelti - 1]);
              console.log("lista prova :" + listaCarteScelte);
            }

            numeroCarteSelezionabili++
          }

          listaCarteScelte.sort();

          //funzione che controlla che un numero sia in un certo range
          function controlloRangeNumeri(min, max, number) {
            var result = false;
            if (number >= min && number <= max) {
              result = true;
            }
            return result;
          }
          // richiedi numero corretto
          function richiediNumeroCorretto() {
            while (controlloRangeNumeri(numeroMin, numeroMax, numeriUtenteScelti) == false) {
              numeriUtenteScelti = parseInt(prompt("Per favore inserisci un numero corretto: da 1  a " + numeroMax));
              console.log('Numero inserito: ' + numeriUtenteScelti);
            }
          }


          ritardoBottone2()
          var caricAudio = document.getElementById("caricamentoAudio");

          function playAudio() {
            caricAudio.play();
          }
          playAudio()


          $(".caricamento").addClass("container3");
          $(".caricamento").fadeIn(1000);


          function ritardoBottone2() {
            setTimeout(function() {
              $(".caricamento").fadeOut();
              $("#container__responso").addClass("container3");

              console.log("lista numeri utente scelti " + listaCarteScelte);
              document.getElementById("prima_scelta").src = listaCarteScelte[0];
              document.getElementById("seconda_scelta").src = listaCarteScelte[1];
              document.getElementById("terza_scelta").src = listaCarteScelte[2];

              var nomeCarta;
              var descrizioneCarta;
              var significatoCarta;
              var responso;

              var prova1 = presenteInArray(listaCarteScelte, "img/il_matto.png")
              if (prova1 == true) {

                nomeCarta = "Il Matto";
                descrizioneCarta = "<strong> Descrizione:</strong> Un vagabondo, forse un giullare, procede aiutandosi con un bastone mentre un cane lo segue e gli morde le vesti. Che la carta del matto non abbia un numero ad essa associato, o al più venga considerata la carta numero zero, ne sottolinea la particolarità."
                significatoCarta = "<strong>Significato della Carta:</strong> La carta del matto può avere un duplice significato: sia positivo che negativo. Il significato positivo è l’incitazione a lasciarci andare, a vivere liberamente.Liberiamoci dell’eccesso di logica, di razionalità, e facciamo ciò che più ci piace. Viviamo quindi “come dei matti”, rompiamo le regole che altri hanno imposto e facciamo ciò che ci fa sentire meglio, anche se contrasta col senso comune; l’importante è che per noi sia positivo ed appagante. <br> O anche: estro e genialità (spesso incompresa). L’interpretazione negativa della carta, invece, riguarda azioni sconsiderate, compiute senza logica alcuna, “da matto”. Persona che ha agito in modo irresponsabile, che ha bisogno di tornare sui suoi passi. <br> O anche: poco rispetto per se stessi; lasciarsi condurre dagli eventi in modo passivo."
                console.log("trovato" + nomeCarta);
                document.getElementById("nome_carta1").innerHTML = nomeCarta;
                document.getElementById("descrizione_carta1").innerHTML = descrizioneCarta;
                document.getElementById("significato_carta1").innerHTML = significatoCarta;

              } else {
                $("#nome_carta1").addClass("scegli_carte");
                $("#descrizione_carta1").addClass("scegli_carte");
                $("#significato_carta1").addClass("scegli_carte");
              }

              var prova2 = presenteInArray(listaCarteScelte, "img/il_mondo.png")
              if (prova2 == true) {

                nomeCarta = "Il Mondo";
                descrizioneCarta = "<strong> Descrizione:</strong> Una donna nuda o seminuda, racchiusa all’interno di una ghirlanda ovale e con una gamba leggermente piegata, tiene in mano una o due bacchette magiche. Agli angoli della carta appaiono invece i simboli dei quattro evangelisti: un angelo (Matteo), un leone (Marco), un toro (Luca), e un’aquila (Giovanni)."
                significatoCarta = "<strong>Significato della Carta:</strong> Il mondo è una della carte più positive dei tarocchi; rappresenta purezza ed armonia, la creazione e lo scibile umano. Gli obiettivi saranno raggiunti, si avrà successo in ciò che si sta facendo. Si sarà prolifici. Verrà raggiunta la serenità interiore. Impareremo a sentirci appagati della nostra situazione e a godere di ciò che abbiamo.."
                console.log("trovato" + nomeCarta);
                document.getElementById("nome_carta2").innerHTML = nomeCarta;
                document.getElementById("descrizione_carta2").innerHTML = descrizioneCarta;
                document.getElementById("significato_carta2").innerHTML = significatoCarta;

              } else {
                $("#nome_carta2").addClass("scegli_carte");
                $("#descrizione_carta2").addClass("scegli_carte");
                $("#significato_carta2").addClass("scegli_carte");
              }

              var prova3 = presenteInArray(listaCarteScelte, "img/il_papa.png")
              if (prova3 == true) {

                nomeCarta = "Il Papa";
                descrizioneCarta = "<strong> Descrizione:</strong> La figura del papa è una delle rappresentazioni dei tarocchi che è rimasta più costante nel tempo e nei diversi mazzi di carte. Il papa è infatti rappresentato praticamente sempre nello stesso modo: un papa seduto su di un trono che con una mano sostiene il pastorale, e con l’altra impartisce una benedizione alle due figure inginocchiate dinanzi a lui. La figura trasmette saggezza e rispetto, ma al tempo stesso anche timore reverenziale. In alcuni mazzi di tarocchi il papa è raffigurato tra due colonne, in altri è invece lo schienale del trono che termina ai lati con una sorta di colonne."
                significatoCarta = "<strong>Significato della Carta:</strong> Il papa simboleggia buoni consigli disinteressati, avallo altrui, successo giusto, persona fedele e leale su cui contare. Il papa può rappresentare una figura esterna, un mentore, una figura che rispettiamo e da cui dovremmo prendere il buon esempio."
                console.log("trovato" + nomeCarta);
                document.getElementById("nome_carta3").innerHTML = nomeCarta;
                document.getElementById("descrizione_carta3").innerHTML = descrizioneCarta;
                document.getElementById("significato_carta3").innerHTML = significatoCarta;

              } else {
                $("#nome_carta3").addClass("scegli_carte");
                $("#descrizione_carta3").addClass("scegli_carte");
                $("#significato_carta3").addClass("scegli_carte");
              }

              var prova4 = presenteInArray(listaCarteScelte, "img/il_sole.png")
              if (prova4 == true) {

                nomeCarta = "Il Sole";
                descrizioneCarta = "<strong> Descrizione:</strong> E’ significativo che nell’ordine dei tarocchi la carta del sole venga subito dopo quella della luna: ritorna a risplendere il sole dopo un periodo di tenebre."
                significatoCarta = "<strong>Significato della Carta:</strong> Torna la luce del sole ad illuminarci il cammino e a cancellare le insidie dell’oscurità.Ora la via è più chiara e senza pericoli. Ci aspetta un periodo di serenità e buon umore.Dopo periodi difficili (l’oscurità), tutto volge per il meglio. Grande appagamento personale poiché il momento positivo viene dopo momenti meno fortunati."
                console.log("trovato" + nomeCarta);
                document.getElementById("nome_carta4").innerHTML = nomeCarta;
                document.getElementById("descrizione_carta4").innerHTML = descrizioneCarta;
                document.getElementById("significato_carta4").innerHTML = significatoCarta;

              } else {
                $("#nome_carta4").addClass("scegli_carte");
                $("#descrizione_carta4").addClass("scegli_carte");
                $("#significato_carta4").addClass("scegli_carte");
              }

              var prova5 = presenteInArray(listaCarteScelte, "img/l_appeso.png")
              if (prova5 == true) {

                nomeCarta = "L'appeso";
                descrizioneCarta = "<strong> Descrizione:</strong> La posizione dell’appeso dei tarocchi è quella di un’antica forma di tortura: essere appesi a testa in giù per un piede, con le mani legate dietro la schiena.L’appeso ha però un volto imperturbato, quasi in meditazione, che sopporta impassibilmente il dolore."
                significatoCarta = "<strong>Significato della Carta:</strong> Ad una prima analisi questa carta sembra trasmettere una situazione negativa di immobilità, ma ad uno sguardo più attento si capisce che è invece la situazione di chi non si profonde in sforzi che sarebbero inutili, ed attende il mutamento degli eventi nella consapevolezza che la situazione sfavorevole è solo temporanea. La carta simboleggia un sacrificio, una condizione sfavorevole da sopportare, per raggiungere un obiettivo. Sono necessari degli sforzi importanti, delle rinunce, sarà necessario superare delle prove difficili. E’ necessario fare buon viso a cattiva sorte, in quanto reagendo in modo istintivo e sbagliato questa situazione temporaneamente difficile rischia di trasformarsi in condizione permanente. Bisogna sacrificarsi, essere lucidi nelle condizioni di difficoltà, e saper sopportare. Sacrificio temporaneo, per poter poi migliorare la propria situazione."
                console.log("trovato" + nomeCarta);
                document.getElementById("nome_carta5").innerHTML = nomeCarta;
                document.getElementById("descrizione_carta5").innerHTML = descrizioneCarta;
                document.getElementById("significato_carta5").innerHTML = significatoCarta;

              } else {
                $("#nome_carta5").addClass("scegli_carte");
                $("#descrizione_carta5").addClass("scegli_carte");
                $("#significato_carta5").addClass("scegli_carte");
              }

              var prova6 = presenteInArray(listaCarteScelte, "img/l_eremita.png")
              if (prova6 == true) {

                nomeCarta = "L'eremita";
                descrizioneCarta = "<strong> Descrizione:</strong> Un vecchio barbuto, con indosso una lunga veste con cappuccio, procede aiutandosi con un bastone ed illuminando la sua strada con una lanterna."
                significatoCarta = "<strong>Significato della Carta:</strong> L’eremita è il simbolo della saggezza. Il riferimento simbolico alla saggezza è sia nella lanterna che tiene in mano l’eremita – che illumina la realtà dei fatti – sia nella figura dell’eremita stesso. La saggezza dell’eremita dei tarocchi è anche prudenza, ad esempio nel valutare dove si sta andando e cosa si sta facendo. Significa anche riflessione su se stessi, e sulle situazioni indicate dalle carte vicine. Desiderio di scoprire la verità, ricerca della verità."
                console.log("trovato" + nomeCarta);
                document.getElementById("nome_carta6").innerHTML = nomeCarta;
                document.getElementById("descrizione_carta6").innerHTML = descrizioneCarta;
                document.getElementById("significato_carta6").innerHTML = significatoCarta;
              } else {
                $("#nome_carta6").addClass("scegli_carte");
                $("#descrizione_carta6").addClass("scegli_carte");
                $("#significato_carta6").addClass("scegli_carte");
              }

              //RESP0NSO/////////
              // MATTO - MONDO - PAPA
              if (prova1 == true && prova2 == true && prova3 == true) {
                responso = "<h2> Responso: Il Matto, Il Mondo e Il Papa</h2> La lettura mostra che ultimamente, ti sei preso il tempo di riflettere. Sembra tu stia attraversando un periodo di transizione durante il quale sei determinato a prendere delle decisioni, a intraprendere nuovi progetti e a scoprire cose nuove. Hai scelto delle carte che rivelano il tuo temperamento risoluto e profondo. Grazie al tuo carattere, sei in grado di interpretare il mondo a modo tuo, in base alle tue sensazioni. Questa lettura evoca nuove opportunità nella tua vita e annuncia l'incontro di una donna con cui hai molti interessi in comune. E' una persona carismatica che gode di una grande stima sociale grazie alla sua professione. Entrerà nella tua vita in maniera del tutto inaspettata durante il mese di Febbraio 2020. All'inizio questo incontro non sarà preso particolarmente in considerazione, poiché sarete entrambi occupati in altre cose. Però dopo un po' di tempo potreste incontrarvi di nuovo e tessere un legame duraturo. Questa persona potrebbe avere una grande influenza nella tua vita e indurti a prendere una nuova strada. In termini simbolici, questa lettura evoca un nuovo inizio e mostra che il nuovo stato d'animo che hai adottato è quello giusto. Se in passato hai dovuto affrontare delle difficoltà e delle delusioni personali, bisogna constatare che le cose nella vita si stanno piano piano sistemando. Seguendo gli insegnamenti di queste carte avrai la possibilità di vivere un vero e proprio rinnovamento dal punto di vista personale e mettere finalmente da parte i problemi che oggi stai ancora affrontando. Dovrai però avere pazienza e credere in te stesso, nelle tue potenzialità, nei tuoi valori e in tutte le qualità che le carte hanno messo in evidenza. ";

                $("#responso").html(responso);
              }
              // MATTO - PAPA - SOLE
              if (prova1 == true && prova3 == true && prova4 == true) {
                responso = "<h2> Responso: Il Matto, Il Papa e Il Sole</h2> da scrivere...";

                $("#responso").html(responso);
              }
              // MATTO - SOLE - APPESO
              if (prova1 == true && prova4 == true && prova5 == true) {
                responso = "<h2> Responso: Il Matto, Il Sole e L'Appeso</h2> da scrivere...";

                $("#responso").html(responso);
              }
              // MATTO - APPESO - EREMITA
              if (prova1 == true && prova5 == true && prova6 == true) {
                responso = "<h2> Responso: Il Matto, L'Appeso e L'Eremita</h2> da scrivere...";

                $("#responso").html(responso);
              }
              // MONDO - PAPA - SOLE
              if (prova2 == true && prova3 == true && prova4 == true) {
                responso = "<h2> Responso: Il Mondo, Il Papa e Il sole  </h2> da scrivere...";

                $("#responso").html(responso);
              }
              // MONDO - SOLE - APPESO
              if (prova2 == true && prova4 == true && prova5 == true) {
                responso = "<h2> Responso: Il Mondo, Il sole e L'Appeso </h2> da scrivere...";

                $("#responso").html(responso);
              }
              // PAPA - SOLE - APPESO
              if (prova3 == true && prova4 == true && prova5 == true) {
                responso = "<h2> Responso: Il Papa, Il Sole e L'Appeso </h2> da scrivere...";

                $("#responso").html(responso);
              }
              // PAPA - APPESO - EREMITA
              if (prova3 == true && prova5 == true && prova6 == true) {
                responso = "<h2> Responso: L'Appeso, Il Papa e L'Eremita </h2> La lettura mostra che ultimamente, ti sei preso il tempo di riflettere. Sembra tu stia attraversando un periodo di transizione durante il quale sei determinato a prendere delle decisioni, a intraprendere nuovi progetti e a scoprire cose nuove. Hai scelto delle carte che rivelano il tuo temperamento risoluto e profondo. Grazie al tuo carattere, sei in grado di interpretare il mondo a modo tuo, in base alle tue sensazioni. Questa lettura evoca nuove opportunità nella tua vita e annuncia l'incontro di una donna con cui hai molti interessi in comune. E' una persona carismatica che gode di una grande stima sociale grazie alla sua professione. Entrerà nella tua vita in maniera del tutto inaspettata durante il mese di Febbraio 2020. All'inizio questo incontro non sarà preso particolarmente in considerazione, poiché sarete entrambi occupati in altre cose. Però dopo un po' di tempo potreste incontrarvi di nuovo e tessere un legame duraturo. Questa persona potrebbe avere una grande influenza nella tua vita e indurti a prendere una nuova strada. In termini simbolici, questa lettura evoca un nuovo inizio e mostra che il nuovo stato d'animo che hai adottato è quello giusto. Se in passato hai dovuto affrontare delle difficoltà e delle delusioni personali, bisogna constatare che le cose nella vita si stanno piano piano sistemando. Seguendo gli insegnamenti di queste carte avrai la possibilità di vivere un vero e proprio rinnovamento dal punto di vista personale e mettere finalmente da parte i problemi che oggi stai ancora affrontando. Dovrai però avere pazienza e credere in te stesso, nelle tue potenzialità, nei tuoi valori e in tutte le qualità che le carte hanno messo in evidenza. Le carte svelano ottime opportunità per il mese di Febbraio. ";

                $("#responso").html(responso);
              }
              // SOLE - APPESO -  EREMITA
              if (prova4 == true && prova5 == true && prova6 == true) {
                responso = "<h2> Responso: L'Eremita, L'Appeso e Il Sole </h2> Le carte che hai selezionato ti invitano a fare degli sforzi per sbloccare una situazione in cui sei arenato da un po'. Per farlo, dovrai superare un ostacolo che costituisce per te una vera e propria prova. Se adotterai un comportamento adeguato, dovresti riuscire a sfociare su una situazione più soddisfacente in cui le difficoltà si dissiperanno. Nei prossimi giorni, avrai la possibilità di riprendere in mano la situazione grazie a un evento inatteso che ti permetterà di provare il tuo valore dinanzi alle persone che davvero contano per te. L'avrai capito, devi tornare ad essere protagonista della tua vita, se vuoi approfittare delle belle promesse di questa lettura. In passato, ti è capito di trovarti in situazioni simili a questa, in cui le cose sembravano sfuggirti di mano. All'epoca avevi potuto contare sul sostegno dei tuoi cari, in cui avevi estrema fiducia. Oggi le carte evocano l'influenza di una donna più anziana di te. Questi sembra occupare tutti i tuoi pensieri e probabilmente ti aiuterà a riprendere in mano la tua vita. Non è sempre facile trovare dei punti di riferimento quando ci si trova in una situazione imprevista, ma questa donna rimarrà al tuo fianco, ti aiuterà a trovare la strada giusta e a prendere le decisioni giuste durante questo periodo determinante. In febbraio 2020 farai bene a non perdere di vista i tuoi obiettivi e a seguire gli insegnamenti di questa lettura per avere più probabilità di riuscire. Dovrai tener presente tutti gli aspetti evocati durante questa lettura, se vorrai avanzare verso una situazione più appagante sia in amore che nella tua vita personale.";

                $("#responso").html(responso);
              }
              // MONDO - PAPA - EREMITA
              if (prova2 == true && prova3 == true && prova6 == true) {
                responso = "<h2> Responso: Il Mondo, Il Papa e L'Eremita </h2> Le carte che hai selezionato ti invitano a fare degli sforzi per sbloccare una situazione in cui sei arenato da un po'. Per farlo, dovrai superare un ostacolo che costituisce per te una vera e propria prova. Se adotterai un comportamento adeguato, dovresti riuscire a sfociare su una situazione più soddisfacente in cui le difficoltà si dissiperanno. Nei prossimi giorni, avrai la possibilità di riprendere in mano la situazione grazie a un evento inatteso che ti permetterà di provare il tuo valore dinanzi alle persone che davvero contano per te. L'avrai capito, devi tornare ad essere protagonista della tua vita, se vuoi approfittare delle belle promesse di questa lettura. In passato, ti è capito di trovarti in situazioni simili a questa, in cui le cose sembravano sfuggirti di mano. All'epoca avevi potuto contare sul sostegno dei tuoi cari, in cui avevi estrema fiducia. Oggi le carte evocano l'influenza di una donna più anziana di te. Questi sembra occupare tutti i tuoi pensieri e probabilmente ti aiuterà a riprendere in mano la tua vita. Non è sempre facile trovare dei punti di riferimento quando ci si trova in una situazione imprevista, ma questa donna rimarrà al tuo fianco, ti aiuterà a trovare la strada giusta e a prendere le decisioni giuste durante questo periodo determinante. In febbraio 2020 farai bene a non perdere di vista i tuoi obiettivi e a seguire gli insegnamenti di questa lettura per avere più probabilità di riuscire. Dovrai tener presente tutti gli aspetti evocati durante questa lettura, se vorrai avanzare verso una situazione più appagante sia in amore che nella tua vita personale.";

                $("#responso").html(responso);
              }
              // MATTO - APPESO - PAPA -
              if (prova1 == true && prova5 == true && prova3 == true) {
                responso = "<h2> Responso: Il Matto, L'Appeso e Il Papa </h2> da scrivere...";

                $("#responso").html(responso);
              }
              // MATTO - MONDO - APPESO
              if (prova1 == true && prova2 == true && prova5 == true) {
                responso = "<h2> Responso: Il Matto, Il Mondo e L'Appeso </h2> da scrivere...";

                $("#responso").html(responso);
              }
              // MATTO - MONDO - EREMITA
              if (prova1 == true && prova2 == true && prova6 == true) {
                responso = "<h2> Responso: Il Matto, Il Mondo e L'Eremita </h2> da scrivere...";

                $("#responso").html(responso);
              }
              // PAPA -SOLE - EREMITA
              if (prova3 == true && prova4 == true && prova6 == true) {
                responso = "<h2> Responso: Il Papa, Il Sole e L'Eremita </h2> da scrivere...";

                $("#responso").html(responso);
              }
              // MATTO - MONDO -SOLE
              if (prova1 == true && prova2 == true && prova4 == true) {
                responso = "<h2> Responso: Il Matto, Il Mondo e Il Sole </h2> La lettura mostra che ultimamente, ti sei preso il tempo di riflettere. Sembra tu stia attraversando un periodo di transizione durante il quale sei determinato a prendere delle decisioni, a intraprendere nuovi progetti e a scoprire cose nuove. Hai scelto delle carte che rivelano il tuo temperamento risoluto e profondo. Grazie al tuo carattere, sei in grado di interpretare il mondo a modo tuo, in base alle tue sensazioni. Questa lettura evoca nuove opportunità nella tua vita e annuncia l'incontro di una donna con cui hai molti interessi in comune. E' una persona carismatica che gode di una grande stima sociale grazie alla sua professione. Entrerà nella tua vita in maniera del tutto inaspettata durante il mese di Febbraio 2020. All'inizio questo incontro non sarà preso particolarmente in considerazione, poiché sarete entrambi occupati in altre cose. Però dopo un po' di tempo potreste incontrarvi di nuovo e tessere un legame duraturo. Questa persona potrebbe avere una grande influenza nella tua vita e indurti a prendere una nuova strada. In termini simbolici, questa lettura evoca un nuovo inizio e mostra che il nuovo stato d'animo che hai adottato è quello giusto. Se in passato hai dovuto affrontare delle difficoltà e delle delusioni personali, bisogna constatare che le cose nella vita si stanno piano piano sistemando. Seguendo gli insegnamenti di queste carte avrai la possibilità di vivere un vero e proprio rinnovamento dal punto di vista personale e mettere finalmente da parte i problemi che oggi stai ancora affrontando. Dovrai però avere pazienza e credere in te stesso, nelle tue potenzialità, nei tuoi valori e in tutte le qualità che le carte hanno messo in evidenza.";

                $("#responso").html(responso);
              }

              // MONDO - PAPA - APPESO
              if (prova2 == true && prova3 == true && prova5 == true) {
                responso = "<h2> Responso: Il Mondo, Il Papa e L'Appeso </h2> La lettura mostra che ultimamente, ti sei preso il tempo di riflettere. Sembra tu stia attraversando un periodo di transizione durante il quale sei determinato a prendere delle decisioni, a intraprendere nuovi progetti e a scoprire cose nuove. Hai scelto delle carte che rivelano il tuo temperamento risoluto e profondo. Grazie al tuo carattere, sei in grado di interpretare il mondo a modo tuo, in base alle tue sensazioni. Questa lettura evoca nuove opportunità nella tua vita e annuncia l'incontro di una donna con cui hai molti interessi in comune. E' una persona carismatica che gode di una grande stima sociale grazie alla sua professione. Entrerà nella tua vita in maniera del tutto inaspettata durante il mese di Febbraio 2020. All'inizio questo incontro non sarà preso particolarmente in considerazione, poiché sarete entrambi occupati in altre cose. Però dopo un po' di tempo potreste incontrarvi di nuovo e tessere un legame duraturo. Questa persona potrebbe avere una grande influenza nella tua vita e indurti a prendere una nuova strada. In termini simbolici, questa lettura evoca un nuovo inizio e mostra che il nuovo stato d'animo che hai adottato è quello giusto. Se in passato hai dovuto affrontare delle difficoltà e delle delusioni personali, bisogna constatare che le cose nella vita si stanno piano piano sistemando. Seguendo gli insegnamenti di queste carte avrai la possibilità di vivere un vero e proprio rinnovamento dal punto di vista personale e mettere finalmente da parte i problemi che oggi stai ancora affrontando. Dovrai però avere pazienza e credere in te stesso, nelle tue potenzialità, nei tuoi valori e in tutte le qualità che le carte hanno messo in evidenza.";

                $("#responso").html(responso);
              }

              // MATTO - SOLE - EREMITA
              if (prova1 == true && prova4 == true && prova6 == true) {
                responso = "<h2> Responso: Il Sole, Il Matto e L'Eremita </h2> Le carte che hai selezionato ti invitano a fare degli sforzi per sbloccare una situazione in cui sei arenato da un po'. Per farlo, dovrai superare un ostacolo che costituisce per te una vera e propria prova. Se adotterai un comportamento adeguato, dovresti riuscire a sfociare su una situazione più soddisfacente in cui le difficoltà si dissiperanno. Nei prossimi giorni, avrai la possibilità di riprendere in mano la situazione grazie a un evento inatteso che ti permetterà di provare il tuo valore dinanzi alle persone che davvero contano per te. L'avrai capito, devi tornare ad essere protagonista della tua vita, se vuoi approfittare delle belle promesse di questa lettura. In passato, ti è capito di trovarti in situazioni simili a questa, in cui le cose sembravano sfuggirti di mano. All'epoca avevi potuto contare sul sostegno dei tuoi cari, in cui avevi estrema fiducia. Oggi le carte evocano l'influenza di una donna più anziana di te. Questi sembra occupare tutti i tuoi pensieri e probabilmente ti aiuterà a riprendere in mano la tua vita. Non è sempre facile trovare dei punti di riferimento quando ci si trova in una situazione imprevista, ma questa donna rimarrà al tuo fianco, ti aiuterà a trovare la strada giusta e a prendere le decisioni giuste durante questo periodo determinante. In febbraio 2020 farai bene a non perdere di vista i tuoi obiettivi e a seguire gli insegnamenti di questa lettura per avere più probabilità di riuscire. Dovrai tener presente tutti gli aspetti evocati durante questa lettura, se vorrai avanzare verso una situazione più appagante sia in amore che nella tua vita personale. Le carte svelano ottime opportunità per il mese di Febbraio.";

                $("#responso").html(responso);
              }

              // MATTO - PAPA - EREMITA
              if (prova1 == true && prova3 == true && prova6 == true) {
                responso = "<h2> Responso: Il Matto, Il Papa e L'Eremita </h2> da scrivere...";

                $("#responso").html(responso);
              }
              // MONDO - APPESO - EREMITA
              if (prova2 == true && prova5 == true && prova6 == true) {
                responso = "<h2> Responso: Il Matto, L'appeso e L'Eremita </h2> da scrivere...";

                $("#responso").html(responso);
              }
              // MONDO - SOLE - EREMITA
              if (prova6 == true && prova4 == true && prova6 == true) {
                responso = "<h2> Responso: Il Mondo, Il sole e L'Eremita </h2> da scrivere...";

                $("#responso").html(responso);
              }

            }, 5000);
          }

        });

    });

  // FUNZIONI DELLO SCRIPT

  function genNumeroCasuale(max) {
    return Math.floor(Math.random() * (max + 1));
  }

  // funzione che cerca in un array
  function presenteInArray(array, indice) {
    var i = 0;
    var trovato = false;
    while (i < array.length && trovato == false) {
      if (array[i] == indice) {
        trovato = true;
      }
      i++;
    }
    return trovato;
  }

});
