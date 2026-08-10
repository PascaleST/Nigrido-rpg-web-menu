    document.addEventListener("DOMContentLoaded", () => {
      const piedra = document.getElementById("piedra");
      const arania = document.getElementById("arania");
      const escena = document.getElementById("escena");
      const menuIdiomas = document.getElementById("menu-idiomas");
      const estadoArania = document.getElementById("estado-arania");
      const botonesIdioma = [...document.querySelectorAll("[data-idioma]")];
      const fichaBanda = document.getElementById("ficha-banda");
      const fondoFicha = document.getElementById("fondo-ficha");
      const fichaTitulo = document.getElementById("ficha-titulo");
      const fichaContenido = document.getElementById("ficha-contenido");
      const cerrarFicha = document.getElementById("cerrar-ficha");
      const cartelesBanda = [...document.querySelectorAll("[data-seccion]")];

      const traducciones = {
        es: {
          languageTitle: "Idioma",
          openLanguageMenu: "Abrir selector de idioma",
          closeLanguageMenu: "Cerrar selector de idioma",
          showBaseSpider: "Mostrar la araña base",
          showRitualSpider: "Mostrar la araña ritual",
          launchJumpscare: "Activar el jumpscare",
          spiderVisible: "Araña visible; púlsala para continuar",
          hideSpider: "Ocultar la araña",
          spiderHidden: "La araña se esconde.",
          invokeSpider: "Invocar a la araña desde la fogata",
          ritualSpider: "Transformar a la araña",
          activateJumpscare: "Activar el jumpscare",
          jumpscareRunning: "Jumpscare en curso",
          spiderBase: "La araña aparece por primera vez.",
          spiderRitual: "La araña reaparece realizando el ritual.",
          spiderJump: "¡La araña salta hacia la pantalla!",
          spiderReset: "El jumpscare termina y el ciclo vuelve al primer menú.",
          boardKicker: "Archivo oficial",
          boardTitle: "Tablón de Nigrido",
          boardIntro: "Elige un cartel para descubrir la banda.",
          musicPoster: "Música", videosPoster: "Videos", biographyPoster: "Biografía",
          datesPoster: "Fechas", galleryPoster: "Galería", contactPoster: "Contacto",
          musicTitle: "Música",
          musicBody: "Lanzamientos, álbumes, letras y enlaces oficiales de escucha.",
          videosTitle: "Videos",
          videosBody: "Videoclips, sesiones en vivo y material audiovisual.",
          biographyTitle: "Biografía",
          biographyBody: "Historia de la banda, integrantes, influencias y evolución.",
          datesTitle: "Fechas",
          datesBody: "Próximos conciertos, presentaciones y archivo de fechas.",
          galleryTitle: "Galería",
          galleryBody: "Fotografías promocionales, conciertos y material detrás de escena.",
          contactTitle: "Contacto",
          contactBody: "Redes oficiales, prensa, contrataciones y contacto directo.",
          contentSoon: "Contenido en preparación.",
          closePanel: "Cerrar ficha",
          houseAlt: "Casa",
          groundAlt: "Suelo"
        },
        en: {
          languageTitle: "Language",
          openLanguageMenu: "Open language selector",
          closeLanguageMenu: "Close language selector",
          showBaseSpider: "Show the base spider",
          showRitualSpider: "Show the ritual spider",
          launchJumpscare: "Activate the jumpscare",
          spiderVisible: "Spider visible; press it to continue",
          hideSpider: "Hide the spider",
          spiderHidden: "The spider hides.",
          invokeSpider: "Summon the spider from the campfire",
          ritualSpider: "Transform the spider",
          activateJumpscare: "Activate the jumpscare",
          jumpscareRunning: "Jumpscare in progress",
          spiderBase: "The spider appears for the first time.",
          spiderRitual: "The spider returns to perform the ritual.",
          spiderJump: "The spider leaps toward the screen!",
          spiderReset: "The jumpscare ends and the cycle returns to the first menu.",
          boardKicker: "Official archive",
          boardTitle: "Nigrido Notice Board",
          boardIntro: "Choose a poster to discover the band.",
          musicPoster: "Music", videosPoster: "Videos", biographyPoster: "Biography",
          datesPoster: "Live dates", galleryPoster: "Gallery", contactPoster: "Contact",
          musicTitle: "Music",
          musicBody: "Releases, albums, lyrics and official listening links.",
          videosTitle: "Videos",
          videosBody: "Music videos, live sessions and audiovisual material.",
          biographyTitle: "Biography",
          biographyBody: "The band's story, members, influences and evolution.",
          datesTitle: "Live dates",
          datesBody: "Upcoming concerts, appearances and an archive of past dates.",
          galleryTitle: "Gallery",
          galleryBody: "Promotional photography, concerts and behind-the-scenes material.",
          contactTitle: "Contact",
          contactBody: "Official networks, press, bookings and direct contact.",
          contentSoon: "Content in preparation.",
          closePanel: "Close panel",
          houseAlt: "House",
          groundAlt: "Ground"
        },
        de: {
          languageTitle: "Sprache",
          openLanguageMenu: "Sprachauswahl öffnen",
          closeLanguageMenu: "Sprachauswahl schließen",
          showBaseSpider: "Einfache Spinne zeigen",
          showRitualSpider: "Ritualspinne zeigen",
          launchJumpscare: "Jumpscare auslösen",
          spiderVisible: "Spinne sichtbar; zum Fortfahren anklicken",
          hideSpider: "Spinne ausblenden",
          spiderHidden: "Die Spinne versteckt sich.",
          invokeSpider: "Spinne am Lagerfeuer beschwören",
          ritualSpider: "Spinne verwandeln",
          activateJumpscare: "Jumpscare auslösen",
          jumpscareRunning: "Jumpscare läuft",
          spiderBase: "Die Spinne erscheint zum ersten Mal.",
          spiderRitual: "Die Spinne kehrt für das Ritual zurück.",
          spiderJump: "Die Spinne springt auf den Bildschirm zu!",
          spiderReset: "Der Jumpscare endet und der Ablauf beginnt beim ersten Menü neu.",
          boardKicker: "Offizielles Archiv",
          boardTitle: "Nigrido-Anschlagbrett",
          boardIntro: "Wähle ein Plakat und entdecke die Band.",
          musicPoster: "Musik", videosPoster: "Videos", biographyPoster: "Biografie",
          datesPoster: "Termine", galleryPoster: "Galerie", contactPoster: "Kontakt",
          musicTitle: "Musik",
          musicBody: "Veröffentlichungen, Alben, Liedtexte und offizielle Streaming-Links.",
          videosTitle: "Videos",
          videosBody: "Musikvideos, Live-Sessions und weiteres Bildmaterial.",
          biographyTitle: "Biografie",
          biographyBody: "Geschichte, Mitglieder, Einflüsse und Entwicklung der Band.",
          datesTitle: "Termine",
          datesBody: "Kommende Konzerte, Auftritte und ein Archiv vergangener Termine.",
          galleryTitle: "Galerie",
          galleryBody: "Pressefotos, Konzerte und Material hinter den Kulissen.",
          contactTitle: "Kontakt",
          contactBody: "Offizielle Netzwerke, Presse, Buchungen und direkter Kontakt.",
          contentSoon: "Inhalt in Vorbereitung.",
          closePanel: "Fenster schließen",
          houseAlt: "Haus",
          groundAlt: "Boden"
        },
        ja: {
          languageTitle: "言語",
          openLanguageMenu: "言語メニューを開く",
          closeLanguageMenu: "言語メニューを閉じる",
          showBaseSpider: "通常のクモを表示する",
          showRitualSpider: "儀式のクモを表示する",
          launchJumpscare: "ジャンプスケアを起動する",
          spiderVisible: "クモを押すと次に進みます",
          hideSpider: "クモを隠す",
          spiderHidden: "クモが隠れた。",
          invokeSpider: "焚き火からクモを呼び出す",
          ritualSpider: "クモを変身させる",
          activateJumpscare: "ジャンプスケアを起動する",
          jumpscareRunning: "ジャンプスケア再生中",
          spiderBase: "クモが初めて姿を現す。",
          spiderRitual: "クモが儀式のために再び現れる。",
          spiderJump: "クモが画面に飛びかかってきた！",
          spiderReset: "ジャンプスケアが終わり、最初のメニューに戻る。",
          boardKicker: "公式アーカイブ",
          boardTitle: "Nigrido 掲示板",
          boardIntro: "ポスターを選んでバンドの世界をご覧ください。",
          musicPoster: "音楽", videosPoster: "映像", biographyPoster: "バイオグラフィー",
          datesPoster: "ライブ情報", galleryPoster: "ギャラリー", contactPoster: "お問い合わせ",
          musicTitle: "音楽",
          musicBody: "作品、アルバム、歌詞、公式配信リンクをご紹介します。",
          videosTitle: "映像",
          videosBody: "ミュージックビデオ、ライブセッション、映像作品をご覧いただけます。",
          biographyTitle: "バイオグラフィー",
          biographyBody: "バンドの歩み、メンバー、影響、進化をご紹介します。",
          datesTitle: "ライブ情報",
          datesBody: "今後の公演情報と過去のライブ記録を掲載します。",
          galleryTitle: "ギャラリー",
          galleryBody: "プロモーション写真、ライブ、舞台裏の写真を掲載します。",
          contactTitle: "お問い合わせ",
          contactBody: "公式SNS、プレス、出演依頼、直接のお問い合わせをご案内します。",
          contentSoon: "コンテンツを準備中です。",
          closePanel: "パネルを閉じる",
          houseAlt: "家",
          groundAlt: "地面"
        }
      };

      const apariciones = [
        { imagen: 'url("assets/img/arania_base.png")', clase: "arania-base", mensaje: "spiderBase" },
        { imagen: 'url("assets/img/arania_ritual.png")', clase: "arania-ritual", mensaje: "spiderRitual" }
      ];

      // 0 menú 1, 1 araña base, 2 menú 2, 3 araña ritual,
      // 4 menú 3, 5 jumpscare. Después vuelve a 0.
      let etapa = 0;
      let idiomaActual = "es";
      let seccionAbierta = null;

      try {
        const idiomaGuardado = window.localStorage.getItem("nigrido-idioma");
        if (traducciones[idiomaGuardado]) idiomaActual = idiomaGuardado;
      } catch (error) {
        // La selección sigue funcionando aunque el navegador bloquee el almacenamiento.
      }

      const t = (clave) => traducciones[idiomaActual][clave];

      function actualizarControles() {
        let etiquetaPiedra = "openLanguageMenu";
        if (!menuIdiomas.hidden) etiquetaPiedra = "closeLanguageMenu";
        else if (etapa === 1) etiquetaPiedra = "showBaseSpider";
        else if (etapa === 3) etiquetaPiedra = "showRitualSpider";
        else if (etapa === 5) etiquetaPiedra = "launchJumpscare";

        if (piedra.classList.contains("bloqueada")) etiquetaPiedra = "spiderVisible";
        piedra.setAttribute("aria-label", t(etiquetaPiedra));
        arania.setAttribute("aria-label", t("hideSpider"));
      }

      function aplicarIdioma(codigo) {
        idiomaActual = codigo;
        document.documentElement.lang = codigo;

        document.querySelectorAll("[data-i18n]").forEach((elemento) => {
          elemento.textContent = t(elemento.dataset.i18n);
        });

        document.querySelectorAll("[data-i18n-alt]").forEach((elemento) => {
          elemento.alt = t(elemento.dataset.i18nAlt);
        });

        botonesIdioma.forEach((boton) => {
          const seleccionado = boton.dataset.idioma === codigo;
          boton.setAttribute("aria-checked", String(seleccionado));
          boton.classList.toggle("seleccionado", seleccionado);
        });

        if (arania.classList.contains("arania-base")) estadoArania.textContent = t("spiderBase");
        if (arania.classList.contains("arania-ritual")) estadoArania.textContent = t("spiderRitual");
        if (arania.classList.contains("arania-jumpscare")) estadoArania.textContent = t("spiderJump");
        if (seccionAbierta) actualizarFicha();
        actualizarControles();

        try {
          window.localStorage.setItem("nigrido-idioma", codigo);
        } catch (error) {
          // No impide traducir la sesión actual.
        }
      }

      function actualizarFicha() {
        if (!seccionAbierta) return;
        fichaTitulo.textContent = t(`${seccionAbierta}Title`);
        fichaContenido.textContent = t(`${seccionAbierta}Body`);
        cerrarFicha.setAttribute("aria-label", t("closePanel"));
      }

      function abrirFicha(seccion) {
        seccionAbierta = seccion;
        actualizarFicha();
        fichaBanda.hidden = false;
        fondoFicha.hidden = false;
        document.body.classList.add("ficha-abierta");
        cerrarFicha.focus();
      }

      function cerrarFichaBanda() {
        if (!seccionAbierta) return;
        const disparador = document.querySelector(`[data-seccion="${seccionAbierta}"]`);
        fichaBanda.hidden = true;
        fondoFicha.hidden = true;
        document.body.classList.remove("ficha-abierta");
        seccionAbierta = null;
        disparador?.focus();
      }

      function alternarMenu(forzar) {
        const abrir = typeof forzar === "boolean" ? forzar : menuIdiomas.hidden;
        menuIdiomas.hidden = !abrir;
        piedra.classList.toggle("abierta", abrir);
        piedra.setAttribute("aria-expanded", String(abrir));
        actualizarControles();
      }

      function mostrarArania(estado) {
        arania.classList.remove("visible", "arania-base", "arania-ritual", "arania-jumpscare");
        arania.style.backgroundImage = estado.imagen;
        arania.setAttribute("aria-hidden", "false");
        arania.setAttribute("tabindex", "0");
        void arania.offsetWidth;
        arania.classList.add("visible", estado.clase);
        piedra.classList.add("bloqueada");
        piedra.setAttribute("aria-disabled", "true");
        estadoArania.textContent = t(estado.mensaje);
        actualizarControles();
      }

      function ocultarArania() {
        arania.classList.remove("visible", "arania-base", "arania-ritual");
        arania.setAttribute("aria-hidden", "true");
        arania.setAttribute("tabindex", "-1");
        piedra.classList.remove("bloqueada");
        piedra.removeAttribute("aria-disabled");
        etapa += 1;
        estadoArania.textContent = t("spiderHidden");
        actualizarControles();
        piedra.focus();
      }

      function reiniciarEscena() {
        etapa = 0;
        alternarMenu(false);
        piedra.classList.remove("bloqueada");
        piedra.removeAttribute("aria-disabled");
        arania.classList.remove("visible", "arania-base", "arania-ritual", "arania-jumpscare");
        arania.setAttribute("aria-hidden", "true");
        arania.setAttribute("tabindex", "-1");
        escena.classList.remove("jumpscare-activo");
        estadoArania.textContent = t("spiderReset");
        actualizarControles();
      }

      function lanzarJumpscare() {
        arania.style.backgroundImage = 'url("assets/img/arania_jumpscare_salto.png")';
        arania.setAttribute("aria-hidden", "false");
        arania.setAttribute("tabindex", "-1");
        const rect = arania.getBoundingClientRect();
        const factorPantalla = window.innerWidth <= 600 ? 1.12 : 0.78;
        const anchoFinal = Math.min(window.innerWidth * factorPantalla, 900);
        const escalaInicial = Math.max(0.12, rect.width / anchoFinal);
        const saltoX = rect.left + rect.width / 2 - window.innerWidth / 2;
        const saltoY = rect.top + rect.height / 2 - window.innerHeight / 2;

        arania.style.setProperty("--salto-x", `${saltoX}px`);
        arania.style.setProperty("--salto-y", `${saltoY}px`);
        arania.style.setProperty("--salto-x-75", `${saltoX * 0.75}px`);
        arania.style.setProperty("--salto-y-75", `${saltoY * 0.75}px`);
        arania.style.setProperty("--salto-x-50", `${saltoX * 0.5}px`);
        arania.style.setProperty("--salto-y-50", `${saltoY * 0.5}px`);
        arania.style.setProperty("--salto-x-25", `${saltoX * 0.25}px`);
        arania.style.setProperty("--salto-y-25", `${saltoY * 0.25}px`);
        arania.style.setProperty("--salto-escala-inicial", escalaInicial);
        arania.style.setProperty("--salto-escala-1", Math.max(0.3, escalaInicial * 1.9));
        arania.style.setProperty("--salto-escala-2", Math.max(0.55, escalaInicial * 3.4));
        arania.style.setProperty("--salto-escala-3", Math.max(0.82, escalaInicial * 5));
        arania.classList.remove("arania-base", "arania-ritual");
        void arania.offsetWidth;
        arania.classList.add("visible", "arania-jumpscare");
        escena.classList.add("jumpscare-activo");
        piedra.classList.add("bloqueada");
        piedra.setAttribute("aria-disabled", "true");
        estadoArania.textContent = t("spiderJump");
        actualizarControles();

        const duracion = window.matchMedia("(prefers-reduced-motion: reduce)").matches ? 400 : 780;
        window.setTimeout(reiniciarEscena, duracion);
      }

      piedra.addEventListener("click", (evento) => {
        evento.stopPropagation();

        if (etapa === 0 || etapa === 2 || etapa === 4) {
          alternarMenu();
          return;
        }

        alternarMenu(false);
        if (etapa === 1) mostrarArania(apariciones[0]);
        else if (etapa === 3) mostrarArania(apariciones[1]);
        else if (etapa === 5) lanzarJumpscare();
      });

      menuIdiomas.addEventListener("click", (evento) => evento.stopPropagation());

      botonesIdioma.forEach((boton) => {
        boton.addEventListener("click", () => {
          aplicarIdioma(boton.dataset.idioma);
          etapa += 1;
          alternarMenu(false);
          piedra.focus();
        });
      });

      arania.addEventListener("click", () => {
        if (etapa === 1 || etapa === 3) ocultarArania();
      });

      cartelesBanda.forEach((cartel) => {
        cartel.addEventListener("click", (evento) => {
          evento.stopPropagation();
          abrirFicha(cartel.dataset.seccion);
        });
      });

      cerrarFicha.addEventListener("click", cerrarFichaBanda);
      fondoFicha.addEventListener("click", cerrarFichaBanda);

      document.addEventListener("click", () => alternarMenu(false));
      document.addEventListener("keydown", (evento) => {
        if (evento.key === "Escape" && !fichaBanda.hidden) {
          cerrarFichaBanda();
          return;
        }
        if (evento.key === "Escape" && !menuIdiomas.hidden) {
          alternarMenu(false);
          piedra.focus();
        }
      });

      aplicarIdioma(idiomaActual);
    });
