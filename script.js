document.addEventListener("DOMContentLoaded", function () {
  var languageStrings = {
    en: {
      dobLabel: "Enter your Date of Birth:",
      calculateBtn: "Calculate Age",
      resultLabel: "Your age is: ",
      errorMsg: "Please enter your date of birth.",
      errorValidMsg: "Please enter a valid date of birth.",
      unitYears: "Years",
      unitMonths: "Months",
      unitDays: "Days",
      clearBtn: "Clear",
      themeLabel: "Theme Color:",
      shareBtn: "Share",
      ageCalculatorTitle: "Age Calculator",
      languageTitle: "Language",
      yearsLabel: "Years",
      monthsLabel: "Months",
      daysLabel: "Days",
      languageButtonLabel: "Change Language",
      languageDropdownLabel: "Language"
    },
    fr: {
      dobLabel: "Entrez votre date de naissance :",
      calculateBtn: "Calculer l'âge",
      resultLabel: "Votre âge est : ",
      errorMsg: "Veuillez entrer votre date de naissance.",
      errorValidMsg: "Veuillez entrer une date de naissance valide.",
      unitYears: "Année",
      unitMonths: "Mois",
      unitDays: "Jours",
      clearBtn: "Effacer",
      themeLabel: "Couleur du thème :",
      shareBtn: "Partager",
      ageCalculatorTitle: "Calculateur d'âge",
      languageTitle: "Langue",
      yearsLabel: " Année",
      monthsLabel: "Mois",
      daysLabel: "Jour",
      languageButtonLabel: " Changer de langue",
      languageDropdownLabel: "Langue"
    },
    hi: {
      dobLabel: "अपनी जन्मतिथि दर्ज करें:",
      calculateBtn: "आयु की गणना करें",
      resultLabel: "आपकी आयु है: ",
      errorMsg: "कृपया अपनी जन्मतिथि दर्ज करें।",
      errorValidMsg: "कृपया एक वैध जन्मतिथि दर्ज करें।",
      unitYears: "वर्ष",
      unitMonths: "महीने",
      unitDays: "दिन",
      clearBtn: "साफ करें",
      themeLabel: "थीम का रंग:",
      shareBtn: "शेयर",
      ageCalculatorTitle: "आयु का कैलकुलेटर",
      languageTitle: "भाषा",
      yearsLabel: " साल",
      monthsLabel: "महीने",
      daysLabel: "दिन",
      languageButtonLabel: "भाषा बदलें",
      languageDropdownLabel: "भाषा"
    },
    ur: {
      dobLabel: "اپنی تاریخ پیدائش درج کریں:",
      calculateBtn: "عمر حاصل کریں",
      resultLabel: "آپ کی عمر ہے: ",
      errorMsg: "براہ کرم اپنی تاریخ پیدائش درج کریں۔",
      errorValidMsg: "براہ کرم ایک درست تاریخ پیدائش درج کریں۔",
      unitYears: "سال",
      unitMonths: "مہینے",
      unitDays: "دن",
      clearBtn: "صاف کریں",
      themeLabel: "تھیم کا رنگ:",
      shareBtn: "شیئر",
      ageCalculatorTitle: "عمر کا کیلکولیٹر",
      languageTitle: "زبان",
      yearsLabel: "سال",
      monthsLabel: "مہینے",
      daysLabel: "دن",
      languageButtonLabel: "زبان تبدیل کریں",
      languageDropdownLabel: "زبان"
    },
    sn: {
      dobLabel: ":پنھنجي پيدائش جي تاريخ داخل ڪريو",

      calculateBtn: "عمر جو حساب ڪريو",

      resultLabel: ":توهان جي عمر آهي",

      errorMsg: ".مھرباني ڪري پنھنجي ڄم جي تاريخ داخل ڪريو",

      errorValidMsg: "مھرباني ڪري ڄمڻ جي صحيح تاريخ داخل ڪريو.",

      unitYears: "سال",

      unitMonths: "مهينو",

      unitDays: "ڏينهن",

      clearBtn: "صاف ڪريو",

      themeLabel: "موضوع جو رنگ:",

      shareBtn: "شیئرڪريو",

      ageCalculatorTitle: "عمر جو حساب ڪندڙ",

      languageTitle: "ٻولي",

      yearsLabel: "سال",

      monthsLabel: "مهينو",

      daysLabel: "ڏينهن",

      languageButtonLabel: "ٻولي تبديل ڪريو",

      languageDropdownLabel: "ٻولي"
    },
    ar: {
      dobLabel: "ادخل تاريخ ميلادك:",
      calculateBtn: "احسب العمر",
      resultLabel: "عمرك هو: ",
      errorMsg: "الرجاء إدخال تاريخ ميلادك.",
      errorValidMsg: "الرجاء إدخال تاريخ ميلاد صالح.",
      unitYears: "سنوات",
      unitMonths: "أشهر",
      unitDays: "أيام",
      clearBtn: "مسح",
      themeLabel: "لون الثيم:",
      shareBtn: "مشاركة",
      ageCalculatorTitle: "آلة حاسبة للعمر",
      languageTitle: "اللغة",
      yearsLabel: "سنوات",
      monthsLabel: "أشهر",
      daysLabel: "أيام",
      languageButtonLabel: "تغيير اللغة",
      languageDropdownLabel: "اللغة"
    },
    cn: {
      dobLabel: "请输入您的出生日期：",
      calculateBtn: "计算年龄",
      resultLabel: "您的年龄是：",
      errorMsg: "请输入您的出生日期。",
      errorValidMsg: "请输入有效的出生日期。",
      unitYears: "年",
      unitMonths: "月",
      unitDays: "天",
      clearBtn: "清除",
      themeLabel: "主题颜色：",
      shareBtn: "分享",
      ageCalculatorTitle: "年龄计算器",
      languageTitle: "语言",
      yearsLabel: "年",
      monthsLabel: "月",
      daysLabel: "天",
      languageButtonLabel: "更改语言",
      languageDropdownLabel: "语言"
    },
    gr: {
      dobLabel: "Geburtsdatum eingeben:",
      calculateBtn: "Alter berechnen",
      resultLabel: "Dein Alter ist: ",
      errorMsg: "Bitte geben Sie Ihr Geburtsdatum ein.",
      errorValidMsg: "Bitte geben Sie ein gültiges Geburtsdatum ein.",
      unitYears: "Jahre",
      unitMonths: "Monate",
      unitDays: "Tage",
      clearBtn: "Löschen",
      themeLabel: "Themenfarbe:",
      shareBtn: "Teilen",
      ageCalculatorTitle: "Altersrechner",
      languageTitle: "Sprache",
      yearsLabel: "Jahre",
      monthsLabel: "Monate",
      daysLabel: "Tage",
      languageButtonLabel: "Sprache ändern",
      languageDropdownLabel: "Sprache"
    },
    tr: {
      dobLabel: "Doğum Tarihinizi Girin:",
      calculateBtn: "Yaşı Hesapla",
      resultLabel: "Yaşınız: ",
      errorMsg: "Lütfen doğum tarihinizi girin.",
      errorValidMsg: "Lütfen geçerli bir doğum tarihi girin.",
      unitYears: "Yıl",
      unitMonths: "Ay",
      unitDays: "Gün",
      clearBtn: "Temizle",
      themeLabel: "Tema Rengi:",
      shareBtn: "Paylaş",
      ageCalculatorTitle: "Yaş Hesaplayıcı",
      languageTitle: "Dil",
      yearsLabel: "Yıl",
      monthsLabel: "Ay",
      daysLabel: "Gün",
      languageButtonLabel: "Dili Değiştir",
      languageDropdownLabel: "Dil"
    },
    pn: {
      dobLabel: "اپنی پیدائش دی تاریخ داخل کرو:",
      calculateBtn: "عمر حساب کرو",
      resultLabel: "تواڈی عمر اے:",
      errorMsg: "براہ کرم اپنی پیدائش دی تاریخ داخل کرو۔",
      errorValidMsg: "براہ کرم اک درست پیدائش دی تاریخ داخل کرو۔",
      unitYears: "سال",
      unitMonths: "مہینے",
      unitDays: "دن",
      clearBtn: "صاف کرو",
      themeLabel: "تھیم دا رنگ:",
      shareBtn: "شیئر کرو",
      ageCalculatorTitle: "عمر دا حساب کتاب",
      languageTitle: "بولی",
      yearsLabel: "سال",
      monthsLabel: "مہینے",
      daysLabel: "دن",
      languageButtonLabel: "بولی بدلو",
      languageDropdownLabel: "بولی"
    },
    jp: {
      dobLabel: "生年月日を入力してください：",
      calculateBtn: "年齢を計算",
      resultLabel: "あなたの年齢は：",
      errorMsg: "生年月日を入力してください。",
      errorValidMsg: "有効な生年月日を入力してください。",
      unitYears: "年",
      unitMonths: "ヶ月",
      unitDays: "日",
      clearBtn: "クリア",
      themeLabel: "テーマカラー：",
      shareBtn: "共有",
      ageCalculatorTitle: "年齢計算機",
      languageTitle: "言語",
      yearsLabel: "年",
      monthsLabel: "ヶ月",
      daysLabel: "日",
      languageButtonLabel: "言語を変更",
      languageDropdownLabel: "言語"
    },
    ru: {
      dobLabel: "Введите вашу дату рождения:",
      calculateBtn: "Рассчитать возраст",
      resultLabel: "Ваш возраст: ",
      errorMsg: "Пожалуйста, введите вашу дату рождения.",
      errorValidMsg: "Пожалуйста, введите корректную дату рождения.",
      unitYears: "лет",
      unitMonths: "месяцев",
      unitDays: "дней",
      clearBtn: "Очистить",
      themeLabel: "Цвет темы:",
      shareBtn: "Поделиться",
      ageCalculatorTitle: "Калькулятор возраста",
      languageTitle: "Язык",
      yearsLabel: "лет",
      monthsLabel: "месяцев",
      daysLabel: "дней",
      languageButtonLabel: "Изменить язык",
      languageDropdownLabel: "Язык"
    },
    es: {
      dobLabel: "Ingrese su fecha de nacimiento:",
      calculateBtn: "Calcular Edad",
      resultLabel: "Su edad es: ",
      errorMsg: "Por favor ingrese su fecha de nacimiento.",
      errorValidMsg: "Por favor ingrese una fecha de nacimiento válida.",
      unitYears: "Años",
      unitMonths: "Meses",
      unitDays: "Días",
      clearBtn: "Limpiar",
      themeLabel: "Color del Tema:",
      shareBtn: "Compartir",
      ageCalculatorTitle: "Calculadora de Edad",
      languageTitle: "Idioma",
      yearsLabel: "Años",
      monthsLabel: "Meses",
      daysLabel: "Días",
      languageButtonLabel: "Cambiar Idioma",
      languageDropdownLabel: "Idioma"
    },
    bn: {
      dobLabel: "আপনার জন্ম তারিখ লিখুন:",
      calculateBtn: "বয়স হিসাব করুন",
      resultLabel: "আপনার বয়স হলো: ",
      errorMsg: "অনুগ্রহ করে আপনার জন্ম তারিখ লিখুন।",
      errorValidMsg: "অনুগ্রহ করে একটি সঠিক জন্ম তারিখ লিখুন।",
      unitYears: "বছর",
      unitMonths: "মাস",
      unitDays: "দিন",
      clearBtn: "পরিষ্কার করুন",
      themeLabel: "থিমের রং:",
      shareBtn: "শেয়ার করুন",
      ageCalculatorTitle: "বয়স হিসাবকারী",
      languageTitle: "ভাষা",
      yearsLabel: "বছর",
      monthsLabel: "মাস",
      daysLabel: "দিন",
      languageButtonLabel: "ভাষা পরিবর্তন করুন",
      languageDropdownLabel: "ভাষা"
    },
    pt: {
      dobLabel: "Digite sua data de nascimento:",
      calculateBtn: "Calcular Idade",
      resultLabel: "A Sua idade é: ",
      errorMsg: "Por favor, insira sua data de nascimento.",
      errorValidMsg: "Por favor, insira uma data de nascimento válida.",
      unitYears: "Anos",
      unitMonths: "Meses",
      unitDays: "Dias",
      clearBtn: "Limpar",
      themeLabel: "Cor do Tema:",
      shareBtn: "Compartilhar",
      ageCalculatorTitle: "Calculadora de Idade",
      languageTitle: "Idioma",
      yearsLabel: "Anos",
      monthsLabel: "Meses",
      daysLabel: "Dias",
      languageButtonLabel: "Alterar Idioma",
      languageDropdownLabel: "Idioma"
    }
  };

  var currentLanguage = "en"; // Default language is English

  // Function to update UI elements based on language
  function updateLanguage() {
    var strings = languageStrings[currentLanguage];

    document.querySelector('label[for="dob"]').textContent =
      strings["dobLabel"];
    document.getElementById("calculateBtn").textContent =
      strings["calculateBtn"];
    document.getElementById("result").textContent = strings["resultLabel"];
    document.getElementById("error").textContent = ""; // Clear previous error message
    document.querySelector('label[for="years"]').textContent =
      strings["unitYears"];
    document.querySelector('label[for="months"]').textContent =
      strings["unitMonths"];
    document.querySelector('label[for="days"]').textContent =
      strings["unitDays"];
    document.getElementById("clearBtn").textContent = strings["clearBtn"];
    document.querySelector('label[for="themeColor"]').textContent =
      strings["themeLabel"];
    document.getElementById("shareBtn").textContent = strings["shareBtn"];
    document.querySelector("h1").textContent = strings["ageCalculatorTitle"];
    // Update the language label
    document.getElementById("languageLabel").textContent =
      strings["languageTitle"];
  }

  // Function to calculate age in years, months, and days
  function calculateAge(dob, unit) {
    var today = new Date();
    var birthDate = new Date(dob);
    var age = today.getFullYear() - birthDate.getFullYear();
    var m = today.getMonth() - birthDate.getMonth();
    var d = today.getDate() - birthDate.getDate();

    if (unit === "days") {
      var ageInDays = Math.floor((today - birthDate) / (24 * 3600 * 1000));
      return ageInDays + " days";
    } else if (unit === "months") {
      if (d < 0) {
        m--;
      }
      if (m < 0) {
        age--;
        m += 12;
      }
      var ageInMonths = age * 12 + m;
      return ageInMonths + " months";
    } else {
      // Default to 'years'
      if (m < 0 || (m === 0 && d < 0)) {
        age--;
      }
      return age + " years";
    }
  }

  // Event listener for the Calculate button
  document
    .getElementById("calculateBtn")
    .addEventListener("click", function () {
      var dob = document.getElementById("dob").value;
      var unit = document.querySelector('input[name="unit"]:checked').value;
      if (dob) {
        var age = calculateAge(dob, unit);
        document.getElementById("result").textContent =
          languageStrings[currentLanguage]["resultLabel"] + age;
        document.getElementById("error").textContent = "";
      } else {
        document.getElementById("error").textContent =
          languageStrings[currentLanguage]["errorMsg"];
      }
    });

  // Event listener for the Clear button
  document.getElementById("clearBtn").addEventListener("click", function () {
    document.getElementById("dob").value = "";
    document.getElementById("result").textContent = "";
    document.getElementById("error").textContent = "";
  });

  // Event listener for the Theme Color input
  document.getElementById("themeColor").addEventListener("input", function () {
    var themeColor = document.getElementById("themeColor").value;
    document.body.style.backgroundColor = themeColor;
  });

  // Event listener for the Language selection dropdown
  document.getElementById("language").addEventListener("change", function () {
    currentLanguage = this.value;
    updateLanguage();
  });

  // Event listener for the Share button
  document.getElementById("shareBtn").addEventListener("click", function () {
    var resultText = document.getElementById("result").textContent;
    if (navigator.share) {
      navigator
        .share({
          title: "Age Calculator Result",
          text: resultText,
          url: window.location.href // You can also share the URL of your web app
        })
        .then(() => {
          console.log("Thanks for sharing!");
        })
        .catch(console.error);
    } else {
      // Fallback for browsers that do not support the Web Share API
      console.log("Web Share not supported on this browser");
    }
  });

  // Call updateLanguage at startup to set the default language
  updateLanguage();
});
