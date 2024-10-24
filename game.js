
let round = 1;
let lives = 3;
let history = [];
let hints = [];
let score = 0.0;
let incorrect = 0;
let json_codes = {};

const correctAudio = new Audio('correct.mp3');
const wrongAudio = new Audio('wrong.mp3');
const gameOverAudio = new Audio('gameover.mp3');
const data = [
    {
        "alpha2Code": "AF",
        "alpha3Code": "AFG",
        "altSpellings": [
            "AF",
            "Afġānistān"
        ],
        "area": 652230,
        "borders": [
            "IRN",
            "PAK",
            "TKM",
            "UZB",
            "TJK",
            "CHN"
        ],
        "callingCodes": [
            "93"
        ],
        "capital": "Kabul",
        "currencies": [
            {
                "code": "AFN",
                "name": "Afghan afghani",
                "symbol": "؋"
            }
        ],
        "demonym": "Afghan",
        "flag": "https://restcountries.eu/data/afg.svg",
        "gini": 27.8,
        "languages": [
            {
                "iso639_1": "ps",
                "iso639_2": "pus",
                "name": "Pashto",
                "nativeName": "پښتو"
            },
            {
                "iso639_1": "uz",
                "iso639_2": "uzb",
                "name": "Uzbek",
                "nativeName": "Oʻzbek"
            },
            {
                "iso639_1": "tk",
                "iso639_2": "tuk",
                "name": "Turkmen",
                "nativeName": "Türkmen"
            }
        ],
        "latlng": [
            33,
            65
        ],
        "name": "Afghanistan",
        "nativeName": "افغانستان",
        "numericCode": "004",
        "population": 38928341,
        "region": "Asia",
        "regionalBlocs": [
            {
                "acronym": "SAARC",
                "name": "South Asian Association for Regional Cooperation"
            }
        ],
        "subregion": "Southern Asia",
        "timezones": [
            "UTC+04:30"
        ],
        "topLevelDomain": [
            ".af"
        ],
        "translations": {
            "br": "Afeganistão",
            "de": "Afghanistan",
            "es": "Afganistán",
            "fa": "افغانستان",
            "fr": "Afghanistan",
            "hr": "Afganistan",
            "it": "Afghanistan",
            "ja": "アフガニスタン",
            "nl": "Afghanistan",
            "pt": "Afeganistão",
            "ru": "Афганистан",
            "pl": "Afganistan",
            "cs": "Afgánistán",
            "zh": "阿富汗伊斯兰共和国",
            "hu": "Afganisztán",
            "se": "Afghanistan"
        },
        "cioc": "AFG"
    },
    {
        "alpha2Code": "AX",
        "alpha3Code": "ALA",
        "altSpellings": [
            "AX",
            "Aaland",
            "Aland",
            "Ahvenanmaa"
        ],
        "area": 1580,
        "borders": [],
        "callingCodes": [
            "358"
        ],
        "capital": "Mariehamn",
        "currencies": [
            {
                "code": "EUR",
                "name": "Euro",
                "symbol": "€"
            }
        ],
        "demonym": "Ålandish",
        "flag": "https://restcountries.eu/data/ala.svg",
        "languages": [
            {
                "iso639_1": "sv",
                "iso639_2": "swe",
                "name": "Swedish",
                "nativeName": "svenska"
            }
        ],
        "latlng": [
            60.116667,
            19.9
        ],
        "name": "Åland Islands",
        "nativeName": "Åland",
        "numericCode": "248",
        "population": 28875,
        "region": "Europe",
        "regionalBlocs": [
            {
                "acronym": "EU",
                "name": "European Union"
            }
        ],
        "subregion": "Northern Europe",
        "timezones": [
            "UTC+02:00"
        ],
        "topLevelDomain": [
            ".ax"
        ],
        "translations": {
            "br": "Ilhas de Aland",
            "de": "Åland",
            "es": "Alandia",
            "fa": "جزایر الند",
            "fr": "Åland",
            "hr": "Ålandski otoci",
            "it": "Isole Aland",
            "ja": "オーランド諸島",
            "nl": "Ålandeilanden",
            "pt": "Ilhas de Aland",
            "pl": "Wyspy Alandzkie",
            "cs": "Ålandy",
            "ru": "Åland Islands",
            "zh": "奥兰群岛",
            "hu": "Åland-szigetek",
            "se": "Åland"
        },
        "cioc": ""
    },
    {
        "alpha2Code": "AL",
        "alpha3Code": "ALB",
        "altSpellings": [
            "AL",
            "Shqipëri",
            "Shqipëria",
            "Shqipnia"
        ],
        "area": 28748,
        "borders": [
            "MNE",
            "GRC",
            "MKD",
            "UNK"
        ],
        "callingCodes": [
            "355"
        ],
        "capital": "Tirana",
        "currencies": [
            {
                "code": "ALL",
                "name": "Albanian lek",
                "symbol": "L"
            }
        ],
        "demonym": "Albanian",
        "flag": "https://restcountries.eu/data/alb.svg",
        "gini": 34.5,
        "languages": [
            {
                "iso639_1": "sq",
                "iso639_2": "sqi",
                "name": "Albanian",
                "nativeName": "Shqip"
            }
        ],
        "latlng": [
            41,
            20
        ],
        "name": "Albania",
        "nativeName": "Shqipëria",
        "numericCode": "008",
        "population": 2837743,
        "region": "Europe",
        "regionalBlocs": [
            {
                "acronym": "CEFTA",
                "name": "Central European Free Trade Agreement"
            }
        ],
        "subregion": "Southern Europe",
        "timezones": [
            "UTC+01:00"
        ],
        "topLevelDomain": [
            ".al"
        ],
        "translations": {
            "br": "Albânia",
            "de": "Albanien",
            "es": "Albania",
            "fa": "آلبانی",
            "fr": "Albanie",
            "hr": "Albanija",
            "it": "Albania",
            "ja": "アルバニア",
            "nl": "Albanië",
            "pt": "Albânia",
            "ru": "Албания",
            "pl": "Albania",
            "cs": "Albánie",
            "zh": "阿尔巴尼亚共和国",
            "hu": "Albánia",
            "se": "Albanien"
        },
        "cioc": "ALB"
    },
    {
        "alpha2Code": "DZ",
        "alpha3Code": "DZA",
        "altSpellings": [
            "DZ",
            "Dzayer",
            "Algérie"
        ],
        "area": 2381741,
        "borders": [
            "TUN",
            "LBY",
            "NER",
            "ESH",
            "MRT",
            "MLI",
            "MAR"
        ],
        "callingCodes": [
            "213"
        ],
        "capital": "Algiers",
        "currencies": [
            {
                "code": "DZD",
                "name": "Algerian dinar",
                "symbol": "د.ج"
            }
        ],
        "demonym": "Algerian",
        "flag": "https://restcountries.eu/data/dza.svg",
        "gini": 35.3,
        "languages": [
            {
                "iso639_1": "ar",
                "iso639_2": "ara",
                "name": "Arabic",
                "nativeName": "العربية"
            }
        ],
        "latlng": [
            28,
            3
        ],
        "name": "Algeria",
        "nativeName": "الجزائر",
        "numericCode": "012",
        "population": 43851043,
        "region": "Africa",
        "regionalBlocs": [
            {
                "acronym": "AU",
                "name": "African Union",
                "otherNames": [
                    "الاتحاد الأفريقي",
                    "Union africaine",
                    "União Africana",
                    "Unión Africana",
                    "Umoja wa Afrika"
                ]
            },
            {
                "acronym": "AL",
                "name": "Arab League",
                "otherNames": [
                    "جامعة الدول العربية",
                    "Jāmiʻat ad-Duwal al-ʻArabīyah",
                    "League of Arab States"
                ]
            }
        ],
        "subregion": "Northern Africa",
        "timezones": [
            "UTC+01:00"
        ],
        "topLevelDomain": [
            ".dz"
        ],
        "translations": {
            "br": "Argélia",
            "de": "Algerien",
            "es": "Argelia",
            "fa": "الجزایر",
            "fr": "Algérie",
            "hr": "Alžir",
            "it": "Algeria",
            "ja": "アルジェリア",
            "nl": "Algerije",
            "pt": "Argélia",
            "ru": "Алжир",
            "pl": "Algieria",
            "cs": "Alžírsko",
            "zh": "阿尔及利亚人民民主共和国",
            "hu": "Algéria",
            "se": "Algeriet"
        },
        "cioc": "ALG"
    },
    {
        "alpha2Code": "AS",
        "alpha3Code": "ASM",
        "altSpellings": [
            "AS",
            "Amerika Sāmoa",
            "Amelika Sāmoa",
            "Sāmoa Amelika"
        ],
        "area": 199,
        "borders": [],
        "callingCodes": [
            "1"
        ],
        "capital": "Pago Pago",
        "currencies": [
            {
                "code": "USD",
                "name": "United States Dollar",
                "symbol": "$"
            }
        ],
        "demonym": "American Samoan",
        "flag": "https://restcountries.eu/data/asm.svg",
        "languages": [
            {
                "iso639_1": "en",
                "iso639_2": "eng",
                "name": "English",
                "nativeName": "English"
            },
            {
                "iso639_1": "sm",
                "iso639_2": "smo",
                "name": "Samoan",
                "nativeName": "gagana fa'a Samoa"
            }
        ],
        "latlng": [
            -14.33333333,
            -170
        ],
        "name": "American Samoa",
        "nativeName": "American Samoa",
        "numericCode": "016",
        "population": 55197,
        "region": "Oceania",
        "regionalBlocs": [],
        "subregion": "Polynesia",
        "timezones": [
            "UTC-11:00"
        ],
        "topLevelDomain": [
            ".as"
        ],
        "translations": {
            "br": "Samoa Americana",
            "de": "Amerikanisch-Samoa",
            "es": "Samoa Americana",
            "fa": "ساموآی آمریکا",
            "fr": "Samoa américaines",
            "hr": "Američka Samoa",
            "it": "Samoa Americane",
            "ja": "アメリカ領サモア",
            "nl": "Amerikaans Samoa",
            "pt": "Samoa Americana",
            "pl": "Samoa Amerykańskie",
            "cs": "Americká Samoa",
            "ru": "American Samoa",
            "zh": "美属萨摩亚",
            "hu": "Amerikai Szamoa",
            "se": "Amerikanska Samoa"
        },
        "cioc": "ASA"
    },
    {
        "alpha2Code": "AD",
        "alpha3Code": "AND",
        "altSpellings": [
            "AD",
            "Principality of Andorra",
            "Principat d'Andorra"
        ],
        "area": 468,
        "borders": [
            "FRA",
            "ESP"
        ],
        "callingCodes": [
            "376"
        ],
        "capital": "Andorra la Vella",
        "currencies": [
            {
                "code": "EUR",
                "name": "Euro",
                "symbol": "€"
            }
        ],
        "demonym": "Andorran",
        "flag": "https://restcountries.eu/data/and.svg",
        "languages": [
            {
                "iso639_1": "ca",
                "iso639_2": "cat",
                "name": "Catalan",
                "nativeName": "català"
            }
        ],
        "latlng": [
            42.5,
            1.5
        ],
        "name": "Andorra",
        "nativeName": "Andorra",
        "numericCode": "020",
        "population": 77265,
        "region": "Europe",
        "regionalBlocs": [],
        "subregion": "Southern Europe",
        "timezones": [
            "UTC+01:00"
        ],
        "topLevelDomain": [
            ".ad"
        ],
        "translations": {
            "br": "Andorra",
            "de": "Andorra",
            "es": "Andorra",
            "fa": "آندورا",
            "fr": "Andorre",
            "hr": "Andora",
            "it": "Andorra",
            "ja": "アンドラ",
            "nl": "Andorra",
            "pt": "Andorra",
            "ru": "Андорра",
            "pl": "Andora",
            "cs": "Andorra",
            "zh": "安道尔公国",
            "hu": "Andorra",
            "se": "Andorra"
        },
        "cioc": "AND"
    },
    {
        "alpha2Code": "AO",
        "alpha3Code": "AGO",
        "altSpellings": [
            "AO",
            "República de Angola",
            "ʁɛpublika de an'ɡɔla"
        ],
        "area": 1246700,
        "borders": [
            "COG",
            "COD",
            "ZMB",
            "NAM"
        ],
        "callingCodes": [
            "244"
        ],
        "capital": "Luanda",
        "currencies": [
            {
                "code": "AOA",
                "name": "Angolan kwanza",
                "symbol": "Kz"
            }
        ],
        "demonym": "Angolan",
        "flag": "https://restcountries.eu/data/ago.svg",
        "gini": 58.6,
        "languages": [
            {
                "iso639_1": "pt",
                "iso639_2": "por",
                "name": "Portuguese",
                "nativeName": "Português"
            }
        ],
        "latlng": [
            -12.5,
            18.5
        ],
        "name": "Angola",
        "nativeName": "Angola",
        "numericCode": "024",
        "population": 32866268,
        "region": "Africa",
        "regionalBlocs": [
            {
                "acronym": "AU",
                "name": "African Union",
                "otherNames": [
                    "الاتحاد الأفريقي",
                    "Union africaine",
                    "União Africana",
                    "Unión Africana",
                    "Umoja wa Afrika"
                ]
            }
        ],
        "subregion": "Middle Africa",
        "timezones": [
            "UTC+01:00"
        ],
        "topLevelDomain": [
            ".ao"
        ],
        "translations": {
            "br": "Angola",
            "de": "Angola",
            "es": "Angola",
            "fa": "آنگولا",
            "fr": "Angola",
            "hr": "Angola",
            "it": "Angola",
            "ja": "アンゴラ",
            "nl": "Angola",
            "pt": "Angola",
            "ru": "Ангола",
            "pl": "Angola",
            "cs": "Angola",
            "zh": "安哥拉共和国",
            "hu": "Angola",
            "se": "Angola"
        },
        "cioc": "ANG"
    },
    {
        "alpha2Code": "AI",
        "alpha3Code": "AIA",
        "altSpellings": [
            "AI"
        ],
        "area": 91,
        "borders": [],
        "callingCodes": [
            "1"
        ],
        "capital": "The Valley",
        "currencies": [
            {
                "code": "XCD",
                "name": "East Caribbean dollar",
                "symbol": "$"
            }
        ],
        "demonym": "Anguillian",
        "flag": "https://restcountries.eu/data/aia.svg",
        "languages": [
            {
                "iso639_1": "en",
                "iso639_2": "eng",
                "name": "English",
                "nativeName": "English"
            }
        ],
        "latlng": [
            18.25,
            -63.16666666
        ],
        "name": "Anguilla",
        "nativeName": "Anguilla",
        "numericCode": "660",
        "population": 13452,
        "region": "Americas",
        "regionalBlocs": [],
        "subregion": "Caribbean",
        "timezones": [
            "UTC-04:00"
        ],
        "topLevelDomain": [
            ".ai"
        ],
        "translations": {
            "br": "Anguila",
            "de": "Anguilla",
            "es": "Anguilla",
            "fa": "آنگویلا",
            "fr": "Anguilla",
            "hr": "Angvila",
            "it": "Anguilla",
            "ja": "アンギラ",
            "nl": "Anguilla",
            "pt": "Anguila",
            "pl": "Anguilla",
            "cs": "Anguilla",
            "ru": "Anguilla",
            "zh": "安圭拉",
            "hu": "Anguilla",
            "se": "Anguilla"
        },
        "cioc": ""
    },
    {
        "alpha2Code": "AQ",
        "alpha3Code": "ATA",
        "altSpellings": [],
        "area": 14000000,
        "borders": [],
        "callingCodes": [
            "672"
        ],
        "capital": "",
        "currencies": [
            {
                "code": "AUD",
                "name": "Australian dollar",
                "symbol": "$"
            },
            {
                "code": "GBP",
                "name": "British pound",
                "symbol": "£"
            }
        ],
        "demonym": "",
        "flag": "https://restcountries.eu/data/ata.svg",
        "languages": [
            {
                "iso639_1": "en",
                "iso639_2": "eng",
                "name": "English",
                "nativeName": "English"
            },
            {
                "iso639_1": "ru",
                "iso639_2": "rus",
                "name": "Russian",
                "nativeName": "Русский"
            }
        ],
        "latlng": [
            -74.65,
            4.48
        ],
        "name": "Antarctica",
        "nativeName": "Antarctica",
        "numericCode": "010",
        "population": 1000,
        "region": "Polar",
        "regionalBlocs": [],
        "subregion": "",
        "timezones": [
            "UTC-03:00",
            "UTC+03:00",
            "UTC+05:00",
            "UTC+06:00",
            "UTC+07:00",
            "UTC+08:00",
            "UTC+10:00",
            "UTC+12:00"
        ],
        "topLevelDomain": [
            ".aq"
        ],
        "translations": {
            "br": "Antártida",
            "de": "Antarktika",
            "es": "Antártida",
            "fa": "جنوبگان",
            "fr": "Antarctique",
            "hr": "Antarktika",
            "it": "Antartide",
            "ja": "南極大陸",
            "nl": "Antarctica",
            "pt": "Antárctida",
            "pl": "Antarktyda",
            "cs": "Antarktida",
            "ru": "Antarctica",
            "zh": "南极洲",
            "hu": "Antarktisz",
            "se": "Antarktis"
        },
        "cioc": ""
    },
    {
        "alpha2Code": "AG",
        "alpha3Code": "ATG",
        "altSpellings": [
            "AG"
        ],
        "area": 442,
        "borders": [],
        "callingCodes": [
            "1"
        ],
        "capital": "Saint John's",
        "currencies": [
            {
                "code": "XCD",
                "name": "East Caribbean dollar",
                "symbol": "$"
            }
        ],
        "demonym": "Antiguan, Barbudan",
        "flag": "https://restcountries.eu/data/atg.svg",
        "languages": [
            {
                "iso639_1": "en",
                "iso639_2": "eng",
                "name": "English",
                "nativeName": "English"
            }
        ],
        "latlng": [
            17.05,
            -61.8
        ],
        "name": "Antigua and Barbuda",
        "nativeName": "Antigua and Barbuda",
        "numericCode": "028",
        "population": 97928,
        "region": "Americas",
        "regionalBlocs": [
            {
                "acronym": "CARICOM",
                "name": "Caribbean Community",
                "otherNames": [
                    "Comunidad del Caribe",
                    "Communauté Caribéenne",
                    "Caribische Gemeenschap"
                ]
            }
        ],
        "subregion": "Caribbean",
        "timezones": [
            "UTC-04:00"
        ],
        "topLevelDomain": [
            ".ag"
        ],
        "translations": {
            "br": "Antígua e Barbuda",
            "de": "Antigua und Barbuda",
            "es": "Antigua y Barbuda",
            "fa": "آنتیگوا و باربودا",
            "fr": "Antigua-et-Barbuda",
            "hr": "Antigva i Barbuda",
            "it": "Antigua e Barbuda",
            "ja": "アンティグア・バーブーダ",
            "nl": "Antigua en Barbuda",
            "pt": "Antígua e Barbuda",
            "ru": "Антигуа и Барбуда",
            "pl": "Antigua i Barbuda",
            "cs": "Antigua a Barbuda",
            "zh": "安提瓜和巴布达",
            "hu": "Antigua és Barbuda",
            "se": "Antigua och Barbuda"
        },
        "cioc": "ANT"
    },
    {
        "alpha2Code": "AR",
        "alpha3Code": "ARG",
        "altSpellings": [
            "AR",
            "Argentine Republic",
            "República Argentina"
        ],
        "area": 2780400,
        "borders": [
            "BOL",
            "BRA",
            "CHL",
            "PRY",
            "URY"
        ],
        "callingCodes": [
            "54"
        ],
        "capital": "Buenos Aires",
        "currencies": [
            {
                "code": "ARS",
                "name": "Argentine peso",
                "symbol": "$"
            }
        ],
        "demonym": "Argentinean",
        "flag": "https://restcountries.eu/data/arg.svg",
        "gini": 44.5,
        "languages": [
            {
                "iso639_1": "es",
                "iso639_2": "spa",
                "name": "Spanish",
                "nativeName": "Español"
            },
            {
                "iso639_1": "gn",
                "iso639_2": "grn",
                "name": "Guaraní",
                "nativeName": "Avañe'ẽ"
            }
        ],
        "latlng": [
            -34,
            -64
        ],
        "name": "Argentina",
        "nativeName": "Argentina",
        "numericCode": "032",
        "population": 45376763,
        "region": "Americas",
        "regionalBlocs": [
            {
                "acronym": "USAN",
                "name": "Union of South American Nations",
                "otherAcronyms": [
                    "UNASUR",
                    "UNASUL",
                    "UZAN"
                ],
                "otherNames": [
                    "Unión de Naciones Suramericanas",
                    "União de Nações Sul-Americanas",
                    "Unie van Zuid-Amerikaanse Naties",
                    "South American Union"
                ]
            }
        ],
        "subregion": "South America",
        "timezones": [
            "UTC-03:00"
        ],
        "topLevelDomain": [
            ".ar"
        ],
        "translations": {
            "br": "Argentina",
            "de": "Argentinien",
            "es": "Argentina",
            "fa": "آرژانتین",
            "fr": "Argentine",
            "hr": "Argentina",
            "it": "Argentina",
            "ja": "アルゼンチン",
            "nl": "Argentinië",
            "pt": "Argentina",
            "ru": "Аргентина",
            "pl": "Argentyna",
            "cs": "Argentina",
            "zh": "阿根廷共和国",
            "hu": "Argentína",
            "se": "Argentina"
        },
        "cioc": "ARG"
    },
    {
        "alpha2Code": "AM",
        "alpha3Code": "ARM",
        "altSpellings": [
            "AM",
            "Hayastan",
            "Republic of Armenia",
            "Հայաստանի Հանրապետություն"
        ],
        "area": 29743,
        "borders": [
            "AZE",
            "GEO",
            "IRN",
            "TUR"
        ],
        "callingCodes": [
            "374"
        ],
        "capital": "Yerevan",
        "currencies": [
            {
                "code": "AMD",
                "name": "Armenian dram",
                "symbol": "֏"
            }
        ],
        "demonym": "Armenian",
        "flag": "https://restcountries.eu/data/arm.svg",
        "gini": 30.9,
        "languages": [
            {
                "iso639_1": "hy",
                "iso639_2": "hye",
                "name": "Armenian",
                "nativeName": "Հայերեն"
            }
        ],
        "latlng": [
            40,
            45
        ],
        "name": "Armenia",
        "nativeName": "Հայաստան",
        "numericCode": "051",
        "population": 2963234,
        "region": "Asia",
        "regionalBlocs": [
            {
                "acronym": "EEU",
                "name": "Eurasian Economic Union",
                "otherAcronyms": [
                    "EAEU"
                ]
            }
        ],
        "subregion": "Western Asia",
        "timezones": [
            "UTC+04:00"
        ],
        "topLevelDomain": [
            ".am"
        ],
        "translations": {
            "br": "Armênia",
            "de": "Armenien",
            "es": "Armenia",
            "fa": "ارمنستان",
            "fr": "Arménie",
            "hr": "Armenija",
            "it": "Armenia",
            "ja": "アルメニア",
            "nl": "Armenië",
            "pt": "Arménia",
            "ru": "Армения",
            "pl": "Armenia",
            "cs": "Arménie",
            "zh": "亚美尼亚共和国",
            "hu": "Örményország",
            "se": "Armenien"
        },
        "cioc": "ARM"
    },
    {
        "alpha2Code": "AW",
        "alpha3Code": "ABW",
        "altSpellings": [
            "AW"
        ],
        "area": 180,
        "borders": [],
        "callingCodes": [
            "297"
        ],
        "capital": "Oranjestad",
        "currencies": [
            {
                "code": "AWG",
                "name": "Aruban florin",
                "symbol": "ƒ"
            }
        ],
        "demonym": "Aruban",
        "flag": "https://restcountries.eu/data/abw.svg",
        "languages": [
            {
                "iso639_1": "nl",
                "iso639_2": "nld",
                "name": "Dutch",
                "nativeName": "Nederlands"
            },
            {
                "iso639_1": "",
                "iso639_2": "pap",
                "name": "Papiamento",
                "nativeName": "Papiamentu"
            }
        ],
        "latlng": [
            12.5,
            -69.96666666
        ],
        "name": "Aruba",
        "nativeName": "Aruba",
        "numericCode": "533",
        "population": 106766,
        "region": "Americas",
        "regionalBlocs": [],
        "subregion": "Caribbean",
        "timezones": [
            "UTC-04:00"
        ],
        "topLevelDomain": [
            ".aw"
        ],
        "translations": {
            "br": "Aruba",
            "de": "Aruba",
            "es": "Aruba",
            "fa": "آروبا",
            "fr": "Aruba",
            "hr": "Aruba",
            "it": "Aruba",
            "ja": "アルバ",
            "nl": "Aruba",
            "pt": "Aruba",
            "pl": "Aruba",
            "cs": "Aruba",
            "ru": "Aruba",
            "zh": "阿鲁巴",
            "hu": "Aruba",
            "se": "Aruba"
        },
        "cioc": "ARU"
    },
    {
        "alpha2Code": "AU",
        "alpha3Code": "AUS",
        "altSpellings": [
            "AU"
        ],
        "area": 7692024,
        "borders": [],
        "callingCodes": [
            "61"
        ],
        "capital": "Canberra",
        "currencies": [
            {
                "code": "AUD",
                "name": "Australian dollar",
                "symbol": "$"
            }
        ],
        "demonym": "Australian",
        "flag": "https://restcountries.eu/data/aus.svg",
        "gini": 30.5,
        "languages": [
            {
                "iso639_1": "en",
                "iso639_2": "eng",
                "name": "English",
                "nativeName": "English"
            }
        ],
        "latlng": [
            -27,
            133
        ],
        "name": "Australia",
        "nativeName": "Australia",
        "numericCode": "036",
        "population": 25687041,
        "region": "Oceania",
        "regionalBlocs": [],
        "subregion": "Australia and New Zealand",
        "timezones": [
            "UTC+05:00",
            "UTC+06:30",
            "UTC+07:00",
            "UTC+08:00",
            "UTC+09:30",
            "UTC+10:00",
            "UTC+10:30",
            "UTC+11:30"
        ],
        "topLevelDomain": [
            ".au"
        ],
        "translations": {
            "br": "Austrália",
            "de": "Australien",
            "es": "Australia",
            "fa": "استرالیا",
            "fr": "Australie",
            "hr": "Australija",
            "it": "Australia",
            "ja": "オーストラリア",
            "nl": "Australië",
            "pt": "Austrália",
            "ru": "Австралия",
            "pl": "Australia",
            "cs": "Austrálie",
            "zh": "澳大利亚联邦",
            "hu": "Ausztrália",
            "se": "Australien"
        },
        "cioc": "AUS"
    },
    {
        "alpha2Code": "AT",
        "alpha3Code": "AUT",
        "altSpellings": [
            "AT",
            "Österreich",
            "Osterreich",
            "Oesterreich"
        ],
        "area": 83871,
        "borders": [
            "CZE",
            "DEU",
            "HUN",
            "ITA",
            "LIE",
            "SVK",
            "SVN",
            "CHE"
        ],
        "callingCodes": [
            "43"
        ],
        "capital": "Vienna",
        "currencies": [
            {
                "code": "EUR",
                "name": "Euro",
                "symbol": "€"
            }
        ],
        "demonym": "Austrian",
        "flag": "https://restcountries.eu/data/aut.svg",
        "gini": 26,
        "languages": [
            {
                "iso639_1": "de",
                "iso639_2": "deu",
                "name": "German",
                "nativeName": "Deutsch"
            }
        ],
        "latlng": [
            47.33333333,
            13.33333333
        ],
        "name": "Austria",
        "nativeName": "Österreich",
        "numericCode": "040",
        "population": 8917205,
        "region": "Europe",
        "regionalBlocs": [
            {
                "acronym": "EU",
                "name": "European Union"
            }
        ],
        "subregion": "Western Europe",
        "timezones": [
            "UTC+01:00"
        ],
        "topLevelDomain": [
            ".at"
        ],
        "translations": {
            "br": "Áustria",
            "de": "Österreich",
            "es": "Austria",
            "fa": "اتریش",
            "fr": "Autriche",
            "hr": "Austrija",
            "it": "Austria",
            "ja": "オーストリア",
            "nl": "Oostenrijk",
            "pt": "Áustria",
            "ru": "Австрия",
            "pl": "Austria",
            "cs": "Rakousko",
            "zh": "奥地利共和国",
            "hu": "Ausztria",
            "se": "Österrike"
        },
        "cioc": "AUT"
    },
    {
        "alpha2Code": "AZ",
        "alpha3Code": "AZE",
        "altSpellings": [
            "AZ",
            "Republic of Azerbaijan",
            "Azərbaycan Respublikası"
        ],
        "area": 86600,
        "borders": [
            "ARM",
            "GEO",
            "IRN",
            "RUS",
            "TUR"
        ],
        "callingCodes": [
            "994"
        ],
        "capital": "Baku",
        "currencies": [
            {
                "code": "AZN",
                "name": "Azerbaijani manat",
                "symbol": "₼"
            }
        ],
        "demonym": "Azerbaijani",
        "flag": "https://restcountries.eu/data/aze.svg",
        "gini": 33.7,
        "languages": [
            {
                "iso639_1": "az",
                "iso639_2": "aze",
                "name": "Azerbaijani",
                "nativeName": "azərbaycan dili"
            }
        ],
        "latlng": [
            40.5,
            47.5
        ],
        "name": "Azerbaijan",
        "nativeName": "Azərbaycan",
        "numericCode": "031",
        "population": 10110116,
        "region": "Asia",
        "regionalBlocs": [],
        "subregion": "Western Asia",
        "timezones": [
            "UTC+04:00"
        ],
        "topLevelDomain": [
            ".az"
        ],
        "translations": {
            "br": "Azerbaijão",
            "de": "Aserbaidschan",
            "es": "Azerbaiyán",
            "fa": "آذربایجان",
            "fr": "Azerbaïdjan",
            "hr": "Azerbajdžan",
            "it": "Azerbaijan",
            "ja": "アゼルバイジャン",
            "nl": "Azerbeidzjan",
            "pt": "Azerbaijão",
            "ru": "Азербайджан",
            "pl": "Azerbejdżan",
            "cs": "Ázerbájdžán",
            "zh": "阿塞拜疆共和国",
            "hu": "Azerbajdzsán",
            "se": "Azerbajdzjan"
        },
        "cioc": "AZE"
    },
    {
        "alpha2Code": "BS",
        "alpha3Code": "BHS",
        "altSpellings": [
            "BS",
            "Commonwealth of the Bahamas"
        ],
        "area": 13943,
        "borders": [],
        "callingCodes": [
            "1"
        ],
        "capital": "Nassau",
        "currencies": [
            {
                "code": "BSD",
                "name": "Bahamian dollar",
                "symbol": "$"
            }
        ],
        "demonym": "Bahamian",
        "flag": "https://restcountries.eu/data/bhs.svg",
        "languages": [
            {
                "iso639_1": "en",
                "iso639_2": "eng",
                "name": "English",
                "nativeName": "English"
            }
        ],
        "latlng": [
            24.25,
            -76
        ],
        "name": "Bahamas",
        "nativeName": "Bahamas",
        "numericCode": "044",
        "population": 393248,
        "region": "Americas",
        "regionalBlocs": [
            {
                "acronym": "CARICOM",
                "name": "Caribbean Community",
                "otherNames": [
                    "Comunidad del Caribe",
                    "Communauté Caribéenne",
                    "Caribische Gemeenschap"
                ]
            }
        ],
        "subregion": "Caribbean",
        "timezones": [
            "UTC-05:00"
        ],
        "topLevelDomain": [
            ".bs"
        ],
        "translations": {
            "br": "Bahamas",
            "de": "Bahamas",
            "es": "Bahamas",
            "fa": "باهاما",
            "fr": "Bahamas",
            "hr": "Bahami",
            "it": "Bahamas",
            "ja": "バハマ",
            "nl": "Bahama’s",
            "pt": "Baamas",
            "ru": "Багамские Острова",
            "pl": "Bahamy",
            "cs": "Bahamy",
            "zh": "巴哈马联邦",
            "hu": "Bahama-szigetek",
            "se": "Bahamas"
        },
        "cioc": "BAH"
    },
    {
        "alpha2Code": "BH",
        "alpha3Code": "BHR",
        "altSpellings": [
            "BH",
            "Kingdom of Bahrain",
            "Mamlakat al-Baḥrayn"
        ],
        "area": 765,
        "borders": [],
        "callingCodes": [
            "973"
        ],
        "capital": "Manama",
        "currencies": [
            {
                "code": "BHD",
                "name": "Bahraini dinar",
                "symbol": ".د.ب"
            }
        ],
        "demonym": "Bahraini",
        "flag": "https://restcountries.eu/data/bhr.svg",
        "gini": null,
        "languages": [
            {
                "iso639_1": "ar",
                "iso639_2": "ara",
                "name": "Arabic",
                "nativeName": "العربية"
            }
        ],
        "latlng": [
            26,
            50.55
        ],
        "name": "Bahrain",
        "nativeName": "‏البحرين",
        "numericCode": "048",
        "population": 1701583,
        "region": "Asia",
        "regionalBlocs": [
            {
                "acronym": "AL",
                "name": "Arab League",
                "otherNames": [
                    "جامعة الدول العربية",
                    "Jāmiʻat ad-Duwal al-ʻArabīyah",
                    "League of Arab States"
                ]
            }
        ],
        "subregion": "Western Asia",
        "timezones": [
            "UTC+03:00"
        ],
        "topLevelDomain": [
            ".bh"
        ],
        "translations": {
            "br": "Bahrein",
            "de": "Bahrain",
            "es": "Bahrein",
            "fa": "بحرین",
            "fr": "Bahreïn",
            "hr": "Bahrein",
            "it": "Bahrein",
            "ja": "バーレーン",
            "nl": "Bahrein",
            "pt": "Barém",
            "ru": "Бахрейн",
            "pl": "Bahrajn",
            "cs": "Bahrajn",
            "zh": "巴林王国",
            "hu": "Bahrein",
            "se": "Bahrain"
        },
        "cioc": "BRN"
    },
    {
        "alpha2Code": "BD",
        "alpha3Code": "BGD",
        "altSpellings": [
            "BD",
            "People's Republic of Bangladesh",
            "Gônôprôjatôntri Bangladesh"
        ],
        "area": 147570,
        "borders": [
            "MMR",
            "IND"
        ],
        "callingCodes": [
            "880"
        ],
        "capital": "Dhaka",
        "currencies": [
            {
                "code": "BDT",
                "name": "Bangladeshi taka",
                "symbol": "৳"
            }
        ],
        "demonym": "Bangladeshi",
        "flag": "https://restcountries.eu/data/bgd.svg",
        "gini": 32.1,
        "languages": [
            {
                "iso639_1": "bn",
                "iso639_2": "ben",
                "name": "Bengali",
                "nativeName": "বাংলা"
            }
        ],
        "latlng": [
            24,
            90
        ],
        "name": "Bangladesh",
        "nativeName": "Bangladesh",
        "numericCode": "050",
        "population": 164689383,
        "region": "Asia",
        "regionalBlocs": [
            {
                "acronym": "SAARC",
                "name": "South Asian Association for Regional Cooperation"
            }
        ],
        "subregion": "Southern Asia",
        "timezones": [
            "UTC+06:00"
        ],
        "topLevelDomain": [
            ".bd"
        ],
        "translations": {
            "br": "Bangladesh",
            "de": "Bangladesch",
            "es": "Bangladesh",
            "fa": "بنگلادش",
            "fr": "Bangladesh",
            "hr": "Bangladeš",
            "it": "Bangladesh",
            "ja": "バングラデシュ",
            "nl": "Bangladesh",
            "pt": "Bangladeche",
            "ru": "Бангладеш",
            "pl": "Bangladesz",
            "cs": "Bangladéš",
            "zh": "孟加拉人民共和国",
            "hu": "Banglades",
            "se": "Bangladesh"
        },
        "cioc": "BAN"
    },
    {
        "alpha2Code": "BB",
        "alpha3Code": "BRB",
        "altSpellings": [
            "BB"
        ],
        "area": 430,
        "borders": [],
        "callingCodes": [
            "1"
        ],
        "capital": "Bridgetown",
        "currencies": [
            {
                "code": "BBD",
                "name": "Barbadian dollar",
                "symbol": "$"
            }
        ],
        "demonym": "Barbadian",
        "flag": "https://restcountries.eu/data/brb.svg",
        "languages": [
            {
                "iso639_1": "en",
                "iso639_2": "eng",
                "name": "English",
                "nativeName": "English"
            }
        ],
        "latlng": [
            13.16666666,
            -59.53333333
        ],
        "name": "Barbados",
        "nativeName": "Barbados",
        "numericCode": "052",
        "population": 287371,
        "region": "Americas",
        "regionalBlocs": [
            {
                "acronym": "CARICOM",
                "name": "Caribbean Community",
                "otherNames": [
                    "Comunidad del Caribe",
                    "Communauté Caribéenne",
                    "Caribische Gemeenschap"
                ]
            }
        ],
        "subregion": "Caribbean",
        "timezones": [
            "UTC-04:00"
        ],
        "topLevelDomain": [
            ".bb"
        ],
        "translations": {
            "br": "Barbados",
            "de": "Barbados",
            "es": "Barbados",
            "fa": "باربادوس",
            "fr": "Barbade",
            "hr": "Barbados",
            "it": "Barbados",
            "ja": "バルバドス",
            "nl": "Barbados",
            "pt": "Barbados",
            "ru": "Барбадос",
            "pl": "Barbados",
            "cs": "Barbados",
            "zh": "巴巴多斯",
            "hu": "Barbados",
            "se": "Barbados"
        },
        "cioc": "BAR"
    },
    {
        "alpha2Code": "BY",
        "alpha3Code": "BLR",
        "altSpellings": [
            "BY",
            "Bielaruś",
            "Republic of Belarus",
            "Белоруссия",
            "Республика Беларусь",
            "Belorussiya",
            "Respublika Belarus’"
        ],
        "area": 207600,
        "borders": [
            "LVA",
            "LTU",
            "POL",
            "RUS",
            "UKR"
        ],
        "callingCodes": [
            "375"
        ],
        "capital": "Minsk",
        "currencies": [
            {
                "code": "BYN",
                "name": "New Belarusian ruble",
                "symbol": "Br"
            },
            {
                "code": "BYR",
                "name": "Old Belarusian ruble",
                "symbol": "Br"
            }
        ],
        "demonym": "Belarusian",
        "flag": "https://restcountries.eu/data/blr.svg",
        "gini": 26.5,
        "languages": [
            {
                "iso639_1": "be",
                "iso639_2": "bel",
                "name": "Belarusian",
                "nativeName": "беларуская мова"
            },
            {
                "iso639_1": "ru",
                "iso639_2": "rus",
                "name": "Russian",
                "nativeName": "Русский"
            }
        ],
        "latlng": [
            53,
            28
        ],
        "name": "Belarus",
        "nativeName": "Белару́сь",
        "numericCode": "112",
        "population": 9398861,
        "region": "Europe",
        "regionalBlocs": [
            {
                "acronym": "EEU",
                "name": "Eurasian Economic Union",
                "otherAcronyms": [
                    "EAEU"
                ]
            }
        ],
        "subregion": "Eastern Europe",
        "timezones": [
            "UTC+03:00"
        ],
        "topLevelDomain": [
            ".by"
        ],
        "translations": {
            "br": "Bielorrússia",
            "de": "Weißrussland",
            "es": "Bielorrusia",
            "fa": "بلاروس",
            "fr": "Biélorussie",
            "hr": "Bjelorusija",
            "it": "Bielorussia",
            "ja": "ベラルーシ",
            "nl": "Wit-Rusland",
            "pt": "Bielorrússia",
            "ru": "Белоруссия",
            "pl": "Białoruś",
            "cs": "Bělorusko",
            "zh": "白俄罗斯共和国",
            "hu": "Fehéroroszország",
            "se": "Vitryssland"
        },
        "cioc": "BLR"
    },
    {
        "alpha2Code": "BE",
        "alpha3Code": "BEL",
        "altSpellings": [
            "BE",
            "België",
            "Belgie",
            "Belgien",
            "Belgique",
            "Kingdom of Belgium",
            "Koninkrijk België",
            "Royaume de Belgique",
            "Königreich Belgien"
        ],
        "area": 30528,
        "borders": [
            "FRA",
            "DEU",
            "LUX",
            "NLD"
        ],
        "callingCodes": [
            "32"
        ],
        "capital": "Brussels",
        "currencies": [
            {
                "code": "EUR",
                "name": "Euro",
                "symbol": "€"
            }
        ],
        "demonym": "Belgian",
        "flag": "https://restcountries.eu/data/bel.svg",
        "gini": 33,
        "languages": [
            {
                "iso639_1": "nl",
                "iso639_2": "nld",
                "name": "Dutch",
                "nativeName": "Nederlands"
            },
            {
                "iso639_1": "fr",
                "iso639_2": "fra",
                "name": "French",
                "nativeName": "français"
            },
            {
                "iso639_1": "de",
                "iso639_2": "deu",
                "name": "German",
                "nativeName": "Deutsch"
            }
        ],
        "latlng": [
            50.83333333,
            4
        ],
        "name": "Belgium",
        "nativeName": "België",
        "numericCode": "056",
        "population": 11555997,
        "region": "Europe",
        "regionalBlocs": [
            {
                "acronym": "EU",
                "name": "European Union"
            }
        ],
        "subregion": "Western Europe",
        "timezones": [
            "UTC+01:00"
        ],
        "topLevelDomain": [
            ".be"
        ],
        "translations": {
            "br": "Bélgica",
            "de": "Belgien",
            "es": "Bélgica",
            "fa": "بلژیک",
            "fr": "Belgique",
            "hr": "Belgija",
            "it": "Belgio",
            "ja": "ベルギー",
            "nl": "België",
            "pt": "Bélgica",
            "ru": "Бельгия",
            "pl": "Belgia",
            "cs": "Belgie",
            "zh": "比利时王国",
            "hu": "Belgium",
            "se": "Belgien"
        },
        "cioc": "BEL"
    },
    {
        "alpha2Code": "BZ",
        "alpha3Code": "BLZ",
        "altSpellings": [
            "BZ"
        ],
        "area": 22966,
        "borders": [
            "GTM",
            "MEX"
        ],
        "callingCodes": [
            "501"
        ],
        "capital": "Belmopan",
        "currencies": [
            {
                "code": "BZD",
                "name": "Belize dollar",
                "symbol": "$"
            }
        ],
        "demonym": "Belizean",
        "flag": "https://restcountries.eu/data/blz.svg",
        "gini": 53.1,
        "languages": [
            {
                "iso639_1": "en",
                "iso639_2": "eng",
                "name": "English",
                "nativeName": "English"
            },
            {
                "iso639_1": "es",
                "iso639_2": "spa",
                "name": "Spanish",
                "nativeName": "Español"
            }
        ],
        "latlng": [
            17.25,
            -88.75
        ],
        "name": "Belize",
        "nativeName": "Belize",
        "numericCode": "084",
        "population": 397621,
        "region": "Americas",
        "regionalBlocs": [
            {
                "acronym": "CARICOM",
                "name": "Caribbean Community",
                "otherNames": [
                    "Comunidad del Caribe",
                    "Communauté Caribéenne",
                    "Caribische Gemeenschap"
                ]
            },
            {
                "acronym": "CAIS",
                "name": "Central American Integration System",
                "otherAcronyms": [
                    "SICA"
                ],
                "otherNames": [
                    "Sistema de la Integración Centroamericana,"
                ]
            }
        ],
        "subregion": "Central America",
        "timezones": [
            "UTC-06:00"
        ],
        "topLevelDomain": [
            ".bz"
        ],
        "translations": {
            "br": "Belize",
            "de": "Belize",
            "es": "Belice",
            "fa": "بلیز",
            "fr": "Belize",
            "hr": "Belize",
            "it": "Belize",
            "ja": "ベリーズ",
            "nl": "Belize",
            "pt": "Belize",
            "ru": "Белиз",
            "pl": "Belize",
            "cs": "Belize",
            "zh": "伯利兹",
            "hu": "Belize",
            "se": "Belize"
        },
        "cioc": "BIZ"
    },
    {
        "alpha2Code": "BJ",
        "alpha3Code": "BEN",
        "altSpellings": [
            "BJ",
            "Republic of Benin",
            "République du Bénin"
        ],
        "area": 112622,
        "borders": [
            "BFA",
            "NER",
            "NGA",
            "TGO"
        ],
        "callingCodes": [
            "229"
        ],
        "capital": "Porto-Novo",
        "currencies": [
            {
                "code": "XOF",
                "name": "West African CFA franc",
                "symbol": "Fr"
            }
        ],
        "demonym": "Beninese",
        "flag": "https://restcountries.eu/data/ben.svg",
        "gini": 38.6,
        "languages": [
            {
                "iso639_1": "fr",
                "iso639_2": "fra",
                "name": "French",
                "nativeName": "français"
            }
        ],
        "latlng": [
            9.5,
            2.25
        ],
        "name": "Benin",
        "nativeName": "Bénin",
        "numericCode": "204",
        "population": 12123198,
        "region": "Africa",
        "regionalBlocs": [
            {
                "acronym": "AU",
                "name": "African Union",
                "otherNames": [
                    "الاتحاد الأفريقي",
                    "Union africaine",
                    "União Africana",
                    "Unión Africana",
                    "Umoja wa Afrika"
                ]
            }
        ],
        "subregion": "Western Africa",
        "timezones": [
            "UTC+01:00"
        ],
        "topLevelDomain": [
            ".bj"
        ],
        "translations": {
            "br": "Benin",
            "de": "Benin",
            "es": "Benín",
            "fa": "بنین",
            "fr": "Bénin",
            "hr": "Benin",
            "it": "Benin",
            "ja": "ベナン",
            "nl": "Benin",
            "pt": "Benim",
            "ru": "Бенин",
            "pl": "Benin",
            "cs": "Benin",
            "zh": "贝宁共和国",
            "hu": "Benin",
            "se": "Benin"
        },
        "cioc": "BEN"
    },
    {
        "alpha2Code": "BM",
        "alpha3Code": "BMU",
        "altSpellings": [
            "BM",
            "The Islands of Bermuda",
            "The Bermudas",
            "Somers Isles"
        ],
        "area": 54,
        "borders": [],
        "callingCodes": [
            "1"
        ],
        "capital": "Hamilton",
        "currencies": [
            {
                "code": "BMD",
                "name": "Bermudian dollar",
                "symbol": "$"
            }
        ],
        "demonym": "Bermudian",
        "flag": "https://restcountries.eu/data/bmu.svg",
        "languages": [
            {
                "iso639_1": "en",
                "iso639_2": "eng",
                "name": "English",
                "nativeName": "English"
            }
        ],
        "latlng": [
            32.33333333,
            -64.75
        ],
        "name": "Bermuda",
        "nativeName": "Bermuda",
        "numericCode": "060",
        "population": 63903,
        "region": "Americas",
        "regionalBlocs": [],
        "subregion": "Northern America",
        "timezones": [
            "UTC-04:00"
        ],
        "topLevelDomain": [
            ".bm"
        ],
        "translations": {
            "br": "Bermudas",
            "de": "Bermuda",
            "es": "Bermudas",
            "fa": "برمودا",
            "fr": "Bermudes",
            "hr": "Bermudi",
            "it": "Bermuda",
            "ja": "バミューダ",
            "nl": "Bermuda",
            "pt": "Bermudas",
            "pl": "Bermudy",
            "cs": "Bermudy",
            "ru": "Bermuda",
            "zh": "百慕大",
            "hu": "Bermuda",
            "se": "Bermuda"
        },
        "cioc": "BER"
    },
    {
        "alpha2Code": "BT",
        "alpha3Code": "BTN",
        "altSpellings": [
            "BT",
            "Kingdom of Bhutan"
        ],
        "area": 38394,
        "borders": [
            "CHN",
            "IND"
        ],
        "callingCodes": [
            "975"
        ],
        "capital": "Thimphu",
        "currencies": [
            {
                "code": "BTN",
                "name": "Bhutanese ngultrum",
                "symbol": "Nu."
            },
            {
                "code": "INR",
                "name": "Indian rupee",
                "symbol": "₹"
            }
        ],
        "demonym": "Bhutanese",
        "flag": "https://restcountries.eu/data/btn.svg",
        "gini": 38.1,
        "languages": [
            {
                "iso639_1": "dz",
                "iso639_2": "dzo",
                "name": "Dzongkha",
                "nativeName": "རྫོང་ཁ"
            }
        ],
        "latlng": [
            27.5,
            90.5
        ],
        "name": "Bhutan",
        "nativeName": "ʼbrug-yul",
        "numericCode": "064",
        "population": 771612,
        "region": "Asia",
        "regionalBlocs": [
            {
                "acronym": "SAARC",
                "name": "South Asian Association for Regional Cooperation"
            }
        ],
        "subregion": "Southern Asia",
        "timezones": [
            "UTC+06:00"
        ],
        "topLevelDomain": [
            ".bt"
        ],
        "translations": {
            "br": "Butão",
            "de": "Bhutan",
            "es": "Bután",
            "fa": "بوتان",
            "fr": "Bhoutan",
            "hr": "Butan",
            "it": "Bhutan",
            "ja": "ブータン",
            "nl": "Bhutan",
            "pt": "Butão",
            "ru": "Бутан",
            "pl": "Bhutan",
            "cs": "Bhútán",
            "zh": "不丹王国",
            "hu": "Bhután",
            "se": "Bhutan"
        },
        "cioc": "BHU"
    },
    {
        "alpha2Code": "BO",
        "alpha3Code": "BOL",
        "altSpellings": [
            "BO",
            "Buliwya",
            "Wuliwya",
            "Plurinational State of Bolivia",
            "Estado Plurinacional de Bolivia",
            "Buliwya Mamallaqta",
            "Wuliwya Suyu",
            "Tetã Volívia"
        ],
        "area": 1098581,
        "borders": [
            "ARG",
            "BRA",
            "CHL",
            "PRY",
            "PER"
        ],
        "callingCodes": [
            "591"
        ],
        "capital": "Sucre",
        "currencies": [
            {
                "code": "BOB",
                "name": "Bolivian boliviano",
                "symbol": "Bs."
            }
        ],
        "demonym": "Bolivian",
        "flag": "https://restcountries.eu/data/bol.svg",
        "gini": 56.3,
        "languages": [
            {
                "iso639_1": "es",
                "iso639_2": "spa",
                "name": "Spanish",
                "nativeName": "Español"
            },
            {
                "iso639_1": "ay",
                "iso639_2": "aym",
                "name": "Aymara",
                "nativeName": "aymar aru"
            },
            {
                "iso639_1": "qu",
                "iso639_2": "que",
                "name": "Quechua",
                "nativeName": "Runa Simi"
            }
        ],
        "latlng": [
            -17,
            -65
        ],
        "name": "Bolivia (Plurinational State of)",
        "nativeName": "Bolivia",
        "numericCode": "068",
        "population": 11673029,
        "region": "Americas",
        "regionalBlocs": [
            {
                "acronym": "USAN",
                "name": "Union of South American Nations",
                "otherAcronyms": [
                    "UNASUR",
                    "UNASUL",
                    "UZAN"
                ],
                "otherNames": [
                    "Unión de Naciones Suramericanas",
                    "União de Nações Sul-Americanas",
                    "Unie van Zuid-Amerikaanse Naties",
                    "South American Union"
                ]
            }
        ],
        "subregion": "South America",
        "timezones": [
            "UTC-04:00"
        ],
        "topLevelDomain": [
            ".bo"
        ],
        "translations": {
            "br": "Bolívia",
            "de": "Bolivien",
            "es": "Bolivia",
            "fa": "بولیوی",
            "fr": "Bolivie",
            "hr": "Bolivija",
            "it": "Bolivia",
            "ja": "ボリビア多民族国",
            "nl": "Bolivia",
            "pt": "Bolívia",
            "ru": "Боливия",
            "pl": "Boliwia",
            "cs": "Bolívie",
            "zh": "多民族玻利维亚国",
            "hu": "Bolívia",
            "se": "Bolivia"
        },
        "cioc": "BOL"
    },
    {
        "alpha2Code": "BQ",
        "alpha3Code": "BES",
        "altSpellings": [
            "BQ",
            "Boneiru"
        ],
        "area": 294,
        "borders": [],
        "callingCodes": [
            "599"
        ],
        "capital": "Kralendijk",
        "currencies": [
            {
                "code": "USD",
                "name": "United States dollar",
                "symbol": "$"
            }
        ],
        "demonym": "Dutch",
        "flag": "https://restcountries.eu/data/bes.svg",
        "languages": [
            {
                "iso639_1": "nl",
                "iso639_2": "nld",
                "name": "Dutch",
                "nativeName": "Nederlands"
            }
        ],
        "latlng": [
            12.15,
            -68.266667
        ],
        "name": "Bonaire, Sint Eustatius and Saba",
        "nativeName": "Bonaire",
        "numericCode": "535",
        "population": 17408,
        "region": "Americas",
        "regionalBlocs": [],
        "subregion": "Caribbean",
        "timezones": [
            "UTC-04:00"
        ],
        "topLevelDomain": [
            ".an",
            ".nl"
        ],
        "translations": {
            "br": "Bonaire",
            "de": "Bonaire, Sint Eustatius und Saba",
            "fa": "بونیر",
            "fr": "Bonaire, Saint-Eustache et Saba",
            "it": "Bonaire, Saint-Eustache e Saba",
            "pt": "Bonaire",
            "pl": "Holandia Karaibska",
            "cs": "Karibské Nizozemsko",
            "es": "Bonaire, Sint Eustatius and Saba",
            "hr": "Bonaire, Sint Eustatius and Saba",
            "ja": "Bonaire, Sint Eustatius and Saba",
            "nl": "Caribisch Nederland",
            "ru": "Bonaire, Sint Eustatius and Saba",
            "zh": "荷蘭加勒比區",
            "hu": "Bonaire",
            "se": "Karibiska Nederländerna"
        }
    },
    {
        "alpha2Code": "BA",
        "alpha3Code": "BIH",
        "altSpellings": [
            "BA",
            "Bosnia-Herzegovina",
            "Босна и Херцеговина"
        ],
        "area": 51209,
        "borders": [
            "HRV",
            "MNE",
            "SRB"
        ],
        "callingCodes": [
            "387"
        ],
        "capital": "Sarajevo",
        "currencies": [
            {
                "code": "BAM",
                "name": "Bosnia and Herzegovina convertible mark",
                "symbol": "KM"
            }
        ],
        "demonym": "Bosnian, Herzegovinian",
        "flag": "https://restcountries.eu/data/bih.svg",
        "gini": 36.2,
        "languages": [
            {
                "iso639_1": "bs",
                "iso639_2": "bos",
                "name": "Bosnian",
                "nativeName": "bosanski jezik"
            },
            {
                "iso639_1": "hr",
                "iso639_2": "hrv",
                "name": "Croatian",
                "nativeName": "hrvatski jezik"
            },
            {
                "iso639_1": "sr",
                "iso639_2": "srp",
                "name": "Serbian",
                "nativeName": "српски језик"
            }
        ],
        "latlng": [
            44,
            18
        ],
        "name": "Bosnia and Herzegovina",
        "nativeName": "Bosna i Hercegovina",
        "numericCode": "070",
        "population": 3280815,
        "region": "Europe",
        "regionalBlocs": [
            {
                "acronym": "CEFTA",
                "name": "Central European Free Trade Agreement"
            }
        ],
        "subregion": "Southern Europe",
        "timezones": [
            "UTC+01:00"
        ],
        "topLevelDomain": [
            ".ba"
        ],
        "translations": {
            "br": "Bósnia e Herzegovina",
            "de": "Bosnien und Herzegowina",
            "es": "Bosnia y Herzegovina",
            "fa": "بوسنی و هرزگوین",
            "fr": "Bosnie-Herzégovine",
            "hr": "Bosna i Hercegovina",
            "it": "Bosnia ed Erzegovina",
            "ja": "ボスニア・ヘルツェゴビナ",
            "nl": "Bosnië en Herzegovina",
            "pt": "Bósnia e Herzegovina",
            "ru": "Босния и Герцеговина",
            "pl": "Bośnia i Hercegowina",
            "cs": "Bosna a Hercegovina",
            "zh": "波斯尼亚和黑塞哥维那",
            "hu": "Bosznia-Hercegovina",
            "se": "Bosnien och Hercegovina"
        },
        "cioc": "BIH"
    },
    {
        "alpha2Code": "BW",
        "alpha3Code": "BWA",
        "altSpellings": [
            "BW",
            "Republic of Botswana",
            "Lefatshe la Botswana"
        ],
        "area": 582000,
        "borders": [
            "NAM",
            "ZAF",
            "ZMB",
            "ZWE"
        ],
        "callingCodes": [
            "267"
        ],
        "capital": "Gaborone",
        "currencies": [
            {
                "code": "BWP",
                "name": "Botswana pula",
                "symbol": "P"
            }
        ],
        "demonym": "Motswana",
        "flag": "https://restcountries.eu/data/bwa.svg",
        "gini": 61,
        "languages": [
            {
                "iso639_1": "en",
                "iso639_2": "eng",
                "name": "English",
                "nativeName": "English"
            },
            {
                "iso639_1": "tn",
                "iso639_2": "tsn",
                "name": "Tswana",
                "nativeName": "Setswana"
            }
        ],
        "latlng": [
            -22,
            24
        ],
        "name": "Botswana",
        "nativeName": "Botswana",
        "numericCode": "072",
        "population": 2351625,
        "region": "Africa",
        "regionalBlocs": [
            {
                "acronym": "AU",
                "name": "African Union",
                "otherNames": [
                    "الاتحاد الأفريقي",
                    "Union africaine",
                    "União Africana",
                    "Unión Africana",
                    "Umoja wa Afrika"
                ]
            }
        ],
        "subregion": "Southern Africa",
        "timezones": [
            "UTC+02:00"
        ],
        "topLevelDomain": [
            ".bw"
        ],
        "translations": {
            "br": "Botsuana",
            "de": "Botswana",
            "es": "Botswana",
            "fa": "بوتسوانا",
            "fr": "Botswana",
            "hr": "Bocvana",
            "it": "Botswana",
            "ja": "ボツワナ",
            "nl": "Botswana",
            "pt": "Botsuana",
            "ru": "Ботсвана",
            "pl": "Botswana",
            "cs": "Botswana",
            "zh": "博茨瓦纳共和国",
            "hu": "Botswana",
            "se": "Botswana"
        },
        "cioc": "BOT"
    },
    {
        "alpha2Code": "BV",
        "alpha3Code": "BVT",
        "altSpellings": [
            "BV",
            "Bouvetøya",
            "Bouvet-øya"
        ],
        "area": 49,
        "borders": [],
        "callingCodes": [
            "47"
        ],
        "capital": "",
        "currencies": [
            {
                "code": "NOK",
                "name": "Norwegian krone",
                "symbol": "kr"
            }
        ],
        "demonym": "",
        "flag": "https://restcountries.eu/data/bvt.svg",
        "languages": [
            {
                "iso639_1": "no",
                "iso639_2": "nor",
                "name": "Norwegian",
                "nativeName": "Norsk"
            },
            {
                "iso639_1": "nb",
                "iso639_2": "nob",
                "name": "Norwegian Bokmål",
                "nativeName": "Norsk bokmål"
            },
            {
                "iso639_1": "nn",
                "iso639_2": "nno",
                "name": "Norwegian Nynorsk",
                "nativeName": "Norsk nynorsk"
            }
        ],
        "latlng": [
            -54.43333333,
            3.4
        ],
        "name": "Bouvet Island",
        "nativeName": "Bouvetøya",
        "numericCode": "074",
        "population": 0,
        "region": "Polar",
        "regionalBlocs": [],
        "subregion": "",
        "timezones": [
            "UTC+01:00"
        ],
        "topLevelDomain": [
            ".bv"
        ],
        "translations": {
            "br": "Ilha Bouvet",
            "de": "Bouvetinsel",
            "es": "Isla Bouvet",
            "fa": "جزیره بووه",
            "fr": "Île Bouvet",
            "hr": "Otok Bouvet",
            "it": "Isola Bouvet",
            "ja": "ブーベ島",
            "nl": "Bouveteiland",
            "pt": "Ilha Bouvet",
            "pl": "Wyspa Bouveta",
            "cs": "Bouvetův ostrov",
            "ru": "Bouvet Island",
            "zh": "布维岛",
            "hu": "Bouvet-sziget",
            "se": "Bouvetön"
        },
        "cioc": ""
    },
    {
        "alpha2Code": "BR",
        "alpha3Code": "BRA",
        "altSpellings": [
            "BR",
            "Brasil",
            "Federative Republic of Brazil",
            "República Federativa do Brasil"
        ],
        "area": 8515767,
        "borders": [
            "ARG",
            "BOL",
            "COL",
            "FRA",
            "GUF",
            "GUY",
            "PRY",
            "PER",
            "SUR",
            "URY",
            "VEN"
        ],
        "callingCodes": [
            "55"
        ],
        "capital": "Brasília",
        "currencies": [
            {
                "code": "BRL",
                "name": "Brazilian real",
                "symbol": "R$"
            }
        ],
        "demonym": "Brazilian",
        "flag": "https://restcountries.eu/data/bra.svg",
        "gini": 54.7,
        "languages": [
            {
                "iso639_1": "pt",
                "iso639_2": "por",
                "name": "Portuguese",
                "nativeName": "Português"
            }
        ],
        "latlng": [
            -10,
            -55
        ],
        "name": "Brazil",
        "nativeName": "Brasil",
        "numericCode": "076",
        "population": 212559409,
        "region": "Americas",
        "regionalBlocs": [
            {
                "acronym": "USAN",
                "name": "Union of South American Nations",
                "otherAcronyms": [
                    "UNASUR",
                    "UNASUL",
                    "UZAN"
                ],
                "otherNames": [
                    "Unión de Naciones Suramericanas",
                    "União de Nações Sul-Americanas",
                    "Unie van Zuid-Amerikaanse Naties",
                    "South American Union"
                ]
            }
        ],
        "subregion": "South America",
        "timezones": [
            "UTC-05:00",
            "UTC-04:00",
            "UTC-03:00",
            "UTC-02:00"
        ],
        "topLevelDomain": [
            ".br"
        ],
        "translations": {
            "br": "Brasil",
            "de": "Brasilien",
            "es": "Brasil",
            "fa": "برزیل",
            "fr": "Brésil",
            "hr": "Brazil",
            "it": "Brasile",
            "ja": "ブラジル",
            "nl": "Brazilië",
            "pt": "Brasil",
            "ru": "Бразилия",
            "pl": "Brazylia",
            "cs": "Brazílie",
            "zh": "巴西联邦共和国",
            "hu": "Brazília",
            "se": "Brasilien"
        },
        "cioc": "BRA"
    },
    {
        "alpha2Code": "IO",
        "alpha3Code": "IOT",
        "altSpellings": [
            "IO"
        ],
        "area": 60,
        "borders": [],
        "callingCodes": [
            "246"
        ],
        "capital": "Diego Garcia",
        "currencies": [
            {
                "code": "USD",
                "name": "United States dollar",
                "symbol": "$"
            }
        ],
        "demonym": "Indian",
        "flag": "https://restcountries.eu/data/iot.svg",
        "languages": [
            {
                "iso639_1": "en",
                "iso639_2": "eng",
                "name": "English",
                "nativeName": "English"
            }
        ],
        "latlng": [
            -6,
            71.5
        ],
        "name": "British Indian Ocean Territory",
        "nativeName": "British Indian Ocean Territory",
        "numericCode": "086",
        "population": 3000,
        "region": "Africa",
        "regionalBlocs": [
            {
                "acronym": "AU",
                "name": "African Union",
                "otherNames": [
                    "الاتحاد الأفريقي",
                    "Union africaine",
                    "União Africana",
                    "Unión Africana",
                    "Umoja wa Afrika"
                ]
            }
        ],
        "subregion": "Eastern Africa",
        "timezones": [
            "UTC+06:00"
        ],
        "topLevelDomain": [
            ".io"
        ],
        "translations": {
            "br": "Território Britânico do Oceano íÍdico",
            "de": "Britisches Territorium im Indischen Ozean",
            "es": "Territorio Británico del Océano Índico",
            "fa": "قلمرو بریتانیا در اقیانوس هند",
            "fr": "Territoire britannique de l'océan Indien",
            "hr": "Britanski Indijskooceanski teritorij",
            "it": "Territorio britannico dell'oceano indiano",
            "ja": "イギリス領インド洋地域",
            "nl": "Britse Gebieden in de Indische Oceaan",
            "pt": "Território Britânico do Oceano Índico",
            "pl": "Brytyjskie Terytorium Oceanu Indyjskiego",
            "cs": "Britské indickooceánské území",
            "ru": "British Indian Ocean Territory",
            "zh": "英属印度洋领地",
            "hu": "Brit Indiai-óceáni Terület",
            "se": "Brittiska territoriet i Indiska Oceanen"
        },
        "cioc": ""
    },
    {
        "alpha2Code": "UM",
        "alpha3Code": "UMI",
        "altSpellings": [
            "UM"
        ],
        "borders": [],
        "callingCodes": [
            "1"
        ],
        "capital": "",
        "currencies": [
            {
                "code": "USD",
                "name": "United States Dollar",
                "symbol": "$"
            }
        ],
        "demonym": "American",
        "flag": "https://restcountries.eu/data/umi.svg",
        "languages": [
            {
                "iso639_1": "en",
                "iso639_2": "eng",
                "name": "English",
                "nativeName": "English"
            }
        ],
        "latlng": [],
        "name": "United States Minor Outlying Islands",
        "nativeName": "United States Minor Outlying Islands",
        "numericCode": "581",
        "population": 300,
        "region": "Americas",
        "regionalBlocs": [],
        "subregion": "Northern America",
        "timezones": [
            "UTC-11:00",
            "UTC-10:00",
            "UTC+12:00"
        ],
        "topLevelDomain": [
            ".us"
        ],
        "translations": {
            "br": "Ilhas Menores Distantes dos Estados Unidos",
            "de": "Kleinere Inselbesitzungen der Vereinigten Staaten",
            "es": "Islas Ultramarinas Menores de Estados Unidos",
            "fa": "جزایر کوچک حاشیه‌ای ایالات متحده آمریکا",
            "fr": "Îles mineures éloignées des États-Unis",
            "hr": "Mali udaljeni otoci SAD-a",
            "it": "Isole minori esterne degli Stati Uniti d'America",
            "ja": "合衆国領有小離島",
            "nl": "Kleine afgelegen eilanden van de Verenigde Staten",
            "pt": "Ilhas Menores Distantes dos Estados Unidos",
            "pl": "Dalekie Wyspy Mniejsze Stanów Zjednoczonych",
            "cs": "Menší odlehlé ostrovy Spojených států amerických",
            "ru": "United States Minor Outlying Islands",
            "zh": "美国本土外小岛屿",
            "hu": "Amerikai Egyesült Államok lakatlan külbirtokai",
            "se": "Förenta staternas mindre öar i Oceanien och Västindien"
        },
        "cioc": ""
    },
    {
        "alpha2Code": "VG",
        "alpha3Code": "VGB",
        "altSpellings": [
            "VG"
        ],
        "area": 151,
        "borders": [],
        "callingCodes": [
            "1"
        ],
        "capital": "Road Town",
        "currencies": [
            {
                "code": "USD",
                "name": "United States dollar",
                "symbol": "$"
            }
        ],
        "demonym": "Virgin Islander",
        "flag": "https://restcountries.eu/data/vgb.svg",
        "languages": [
            {
                "iso639_1": "en",
                "iso639_2": "eng",
                "name": "English",
                "nativeName": "English"
            }
        ],
        "latlng": [
            18.431383,
            -64.62305
        ],
        "name": "Virgin Islands (British)",
        "nativeName": "British Virgin Islands",
        "numericCode": "092",
        "population": 30237,
        "region": "Americas",
        "regionalBlocs": [],
        "subregion": "Caribbean",
        "timezones": [
            "UTC-04:00"
        ],
        "topLevelDomain": [
            ".vg"
        ],
        "translations": {
            "br": "Ilhas Virgens Britânicas",
            "de": "Britische Jungferninseln",
            "es": "Islas Vírgenes del Reino Unido",
            "fa": "جزایر ویرجین بریتانیا",
            "fr": "Îles Vierges britanniques",
            "hr": "Britanski Djevičanski Otoci",
            "it": "Isole Vergini Britanniche",
            "ja": "イギリス領ヴァージン諸島",
            "nl": "Britse Maagdeneilanden",
            "pt": "Ilhas Virgens Britânicas",
            "pl": "Brytyjskie Wyspy Dziewicze",
            "cs": "Britské Panenské ostrovy",
            "ru": "Virgin Islands (British)",
            "zh": "英属维尔京群岛",
            "hu": "Brit Virgin-szigetek",
            "se": "Brittiska Jungfruöarna"
        },
        "cioc": "IVB"
    },
    {
        "alpha2Code": "VI",
        "alpha3Code": "VIR",
        "altSpellings": [
            "VI",
            "USVI",
            "American Virgin Islands",
            "U.S. Virgin Islands"
        ],
        "area": 346.36,
        "borders": [],
        "callingCodes": [
            "1 340"
        ],
        "capital": "Charlotte Amalie",
        "currencies": [
            {
                "code": "USD",
                "name": "United States dollar",
                "symbol": "$"
            }
        ],
        "demonym": "Virgin Islander",
        "flag": "https://restcountries.eu/data/vir.svg",
        "languages": [
            {
                "iso639_1": "en",
                "iso639_2": "eng",
                "name": "English",
                "nativeName": "English"
            }
        ],
        "latlng": [
            18.34,
            -64.93
        ],
        "name": "Virgin Islands (U.S.)",
        "nativeName": "Virgin Islands of the United States",
        "numericCode": "850",
        "population": 106290,
        "region": "Americas",
        "regionalBlocs": [],
        "subregion": "Caribbean",
        "timezones": [
            "UTC-04:00"
        ],
        "topLevelDomain": [
            ".vi"
        ],
        "translations": {
            "br": "Ilhas Virgens Americanas",
            "de": "Amerikanische Jungferninseln",
            "es": "Islas Vírgenes de los Estados Unidos",
            "fa": "جزایر ویرجین آمریکا",
            "fr": "Îles Vierges des États-Unis",
            "it": "Isole Vergini americane",
            "ja": "アメリカ領ヴァージン諸島",
            "nl": "Verenigde Staten Maagdeneilanden",
            "pt": "Ilhas Virgens Americanas",
            "pl": "Wyspy Dziewicze Stanów Zjednoczonych",
            "cs": "Americké Panenské ostrovy",
            "hr": "Virgin Islands (U.S.)",
            "ru": "Virgin Islands (U.S.)",
            "zh": "美属维尔京群岛",
            "hu": "Amerikai Virgin-szigetek",
            "se": "Amerikanska Jungfruöarna"
        },
        "cioc": "ISV"
    },
    {
        "alpha2Code": "BN",
        "alpha3Code": "BRN",
        "altSpellings": [
            "BN",
            "Nation of Brunei",
            "The Abode of Peace"
        ],
        "area": 5765,
        "borders": [
            "MYS"
        ],
        "callingCodes": [
            "673"
        ],
        "capital": "Bandar Seri Begawan",
        "currencies": [
            {
                "code": "BND",
                "name": "Brunei dollar",
                "symbol": "$"
            },
            {
                "code": "SGD",
                "name": "Singapore dollar",
                "symbol": "$"
            }
        ],
        "demonym": "Bruneian",
        "flag": "https://restcountries.eu/data/brn.svg",
        "languages": [
            {
                "iso639_1": "ms",
                "iso639_2": "msa",
                "name": "Malay",
                "nativeName": "bahasa Melayu"
            }
        ],
        "latlng": [
            4.5,
            114.66666666
        ],
        "name": "Brunei Darussalam",
        "nativeName": "Negara Brunei Darussalam",
        "numericCode": "096",
        "population": 437483,
        "region": "Asia",
        "regionalBlocs": [
            {
                "acronym": "ASEAN",
                "name": "Association of Southeast Asian Nations"
            }
        ],
        "subregion": "South-Eastern Asia",
        "timezones": [
            "UTC+08:00"
        ],
        "topLevelDomain": [
            ".bn"
        ],
        "translations": {
            "br": "Brunei",
            "de": "Brunei",
            "es": "Brunei",
            "fa": "برونئی",
            "fr": "Brunei",
            "hr": "Brunej",
            "it": "Brunei",
            "ja": "ブルネイ・ダルサラーム",
            "nl": "Brunei",
            "pt": "Brunei",
            "ru": "Бруней",
            "pl": "Brunei",
            "cs": "Brunej",
            "zh": "文莱和平之国",
            "hu": "Brunei",
            "se": "Brunei"
        },
        "cioc": "BRU"
    },
    {
        "alpha2Code": "BG",
        "alpha3Code": "BGR",
        "altSpellings": [
            "BG",
            "Republic of Bulgaria",
            "Република България"
        ],
        "area": 110879,
        "borders": [
            "GRC",
            "MKD",
            "ROU",
            "SRB",
            "TUR"
        ],
        "callingCodes": [
            "359"
        ],
        "capital": "Sofia",
        "currencies": [
            {
                "code": "BGN",
                "name": "Bulgarian lev",
                "symbol": "лв"
            }
        ],
        "demonym": "Bulgarian",
        "flag": "https://restcountries.eu/data/bgr.svg",
        "gini": 28.2,
        "languages": [
            {
                "iso639_1": "bg",
                "iso639_2": "bul",
                "name": "Bulgarian",
                "nativeName": "български език"
            }
        ],
        "latlng": [
            43,
            25
        ],
        "name": "Bulgaria",
        "nativeName": "България",
        "numericCode": "100",
        "population": 6927288,
        "region": "Europe",
        "regionalBlocs": [
            {
                "acronym": "EU",
                "name": "European Union"
            }
        ],
        "subregion": "Eastern Europe",
        "timezones": [
            "UTC+02:00"
        ],
        "topLevelDomain": [
            ".bg"
        ],
        "translations": {
            "br": "Bulgária",
            "de": "Bulgarien",
            "es": "Bulgaria",
            "fa": "بلغارستان",
            "fr": "Bulgarie",
            "hr": "Bugarska",
            "it": "Bulgaria",
            "ja": "ブルガリア",
            "nl": "Bulgarije",
            "pt": "Bulgária",
            "ru": "Болгария",
            "pl": "Bułgaria",
            "cs": "Bulharsko",
            "zh": "保加利亚共和国",
            "hu": "Bulgária",
            "se": "Bulgarien"
        },
        "cioc": "BUL"
    },
    {
        "alpha2Code": "BF",
        "alpha3Code": "BFA",
        "altSpellings": [
            "BF"
        ],
        "area": 272967,
        "borders": [
            "BEN",
            "CIV",
            "GHA",
            "MLI",
            "NER",
            "TGO"
        ],
        "callingCodes": [
            "226"
        ],
        "capital": "Ouagadougou",
        "currencies": [
            {
                "code": "XOF",
                "name": "West African CFA franc",
                "symbol": "Fr"
            }
        ],
        "demonym": "Burkinabe",
        "flag": "https://restcountries.eu/data/bfa.svg",
        "gini": 39.8,
        "languages": [
            {
                "iso639_1": "fr",
                "iso639_2": "fra",
                "name": "French",
                "nativeName": "français"
            },
            {
                "iso639_1": "ff",
                "iso639_2": "ful",
                "name": "Fula",
                "nativeName": "Fulfulde"
            }
        ],
        "latlng": [
            13,
            -2
        ],
        "name": "Burkina Faso",
        "nativeName": "Burkina Faso",
        "numericCode": "854",
        "population": 20903278,
        "region": "Africa",
        "regionalBlocs": [
            {
                "acronym": "AU",
                "name": "African Union",
                "otherNames": [
                    "الاتحاد الأفريقي",
                    "Union africaine",
                    "União Africana",
                    "Unión Africana",
                    "Umoja wa Afrika"
                ]
            }
        ],
        "subregion": "Western Africa",
        "timezones": [
            "UTC"
        ],
        "topLevelDomain": [
            ".bf"
        ],
        "translations": {
            "br": "Burkina Faso",
            "de": "Burkina Faso",
            "es": "Burkina Faso",
            "fa": "بورکینافاسو",
            "fr": "Burkina Faso",
            "hr": "Burkina Faso",
            "it": "Burkina Faso",
            "ja": "ブルキナファソ",
            "nl": "Burkina Faso",
            "pt": "Burquina Faso",
            "ru": "Буркина-Фасо",
            "pl": "Burkina Faso",
            "cs": "Burkina Faso",
            "zh": "布基纳法索",
            "hu": "Burkina Faso",
            "se": "Burkina Faso"
        },
        "cioc": "BUR"
    },
    {
        "alpha2Code": "BI",
        "alpha3Code": "BDI",
        "altSpellings": [
            "BI",
            "Republic of Burundi",
            "Republika y'Uburundi",
            "République du Burundi"
        ],
        "area": 27834,
        "borders": [
            "COD",
            "RWA",
            "TZA"
        ],
        "callingCodes": [
            "257"
        ],
        "capital": "Gitega",
        "currencies": [
            {
                "code": "BIF",
                "name": "Burundian franc",
                "symbol": "Fr"
            }
        ],
        "demonym": "Burundian",
        "flag": "https://restcountries.eu/data/bdi.svg",
        "gini": 33.3,
        "languages": [
            {
                "iso639_1": "fr",
                "iso639_2": "fra",
                "name": "French",
                "nativeName": "français"
            },
            {
                "iso639_1": "rn",
                "iso639_2": "run",
                "name": "Kirundi",
                "nativeName": "Ikirundi"
            }
        ],
        "latlng": [
            -3.5,
            30
        ],
        "name": "Burundi",
        "nativeName": "Burundi",
        "numericCode": "108",
        "population": 11890781,
        "region": "Africa",
        "regionalBlocs": [
            {
                "acronym": "AU",
                "name": "African Union",
                "otherNames": [
                    "الاتحاد الأفريقي",
                    "Union africaine",
                    "União Africana",
                    "Unión Africana",
                    "Umoja wa Afrika"
                ]
            }
        ],
        "subregion": "Eastern Africa",
        "timezones": [
            "UTC+02:00"
        ],
        "topLevelDomain": [
            ".bi"
        ],
        "translations": {
            "br": "Burundi",
            "de": "Burundi",
            "es": "Burundi",
            "fa": "بوروندی",
            "fr": "Burundi",
            "hr": "Burundi",
            "it": "Burundi",
            "ja": "ブルンジ",
            "nl": "Burundi",
            "pt": "Burúndi",
            "ru": "Бурунди",
            "pl": "Burundi",
            "cs": "Burundi",
            "zh": "布隆迪共和国",
            "hu": "Burundi",
            "se": "Burundi"
        },
        "cioc": "BDI"
    },
    {
        "alpha2Code": "KH",
        "alpha3Code": "KHM",
        "altSpellings": [
            "KH",
            "Kingdom of Cambodia"
        ],
        "area": 181035,
        "borders": [
            "LAO",
            "THA",
            "VNM"
        ],
        "callingCodes": [
            "855"
        ],
        "capital": "Phnom Penh",
        "currencies": [
            {
                "code": "KHR",
                "name": "Cambodian riel",
                "symbol": "៛"
            },
            {
                "code": "USD",
                "name": "United States dollar",
                "symbol": "$"
            }
        ],
        "demonym": "Cambodian",
        "flag": "https://restcountries.eu/data/khm.svg",
        "gini": 37.9,
        "languages": [
            {
                "iso639_1": "km",
                "iso639_2": "khm",
                "name": "Khmer",
                "nativeName": "ខ្មែរ"
            }
        ],
        "latlng": [
            13,
            105
        ],
        "name": "Cambodia",
        "nativeName": "Kâmpŭchéa",
        "numericCode": "116",
        "population": 16718971,
        "region": "Asia",
        "regionalBlocs": [
            {
                "acronym": "ASEAN",
                "name": "Association of Southeast Asian Nations"
            }
        ],
        "subregion": "South-Eastern Asia",
        "timezones": [
            "UTC+07:00"
        ],
        "topLevelDomain": [
            ".kh"
        ],
        "translations": {
            "br": "Camboja",
            "de": "Kambodscha",
            "es": "Camboya",
            "fa": "کامبوج",
            "fr": "Cambodge",
            "hr": "Kambodža",
            "it": "Cambogia",
            "ja": "カンボジア",
            "nl": "Cambodja",
            "pt": "Camboja",
            "ru": "Камбоджа",
            "pl": "Kambodża",
            "cs": "Kambodža",
            "zh": "柬埔寨王国",
            "hu": "Kambodzsa",
            "se": "Kambodja"
        },
        "cioc": "CAM"
    },
    {
        "alpha2Code": "CM",
        "alpha3Code": "CMR",
        "altSpellings": [
            "CM",
            "Republic of Cameroon",
            "République du Cameroun"
        ],
        "area": 475442,
        "borders": [
            "CAF",
            "TCD",
            "COG",
            "GNQ",
            "GAB",
            "NGA"
        ],
        "callingCodes": [
            "237"
        ],
        "capital": "Yaoundé",
        "currencies": [
            {
                "code": "XAF",
                "name": "Central African CFA franc",
                "symbol": "Fr"
            }
        ],
        "demonym": "Cameroonian",
        "flag": "https://restcountries.eu/data/cmr.svg",
        "gini": 38.9,
        "languages": [
            {
                "iso639_1": "en",
                "iso639_2": "eng",
                "name": "English",
                "nativeName": "English"
            },
            {
                "iso639_1": "fr",
                "iso639_2": "fra",
                "name": "French",
                "nativeName": "français"
            }
        ],
        "latlng": [
            6,
            12
        ],
        "name": "Cameroon",
        "nativeName": "Cameroon",
        "numericCode": "120",
        "population": 26545864,
        "region": "Africa",
        "regionalBlocs": [
            {
                "acronym": "AU",
                "name": "African Union",
                "otherNames": [
                    "الاتحاد الأفريقي",
                    "Union africaine",
                    "União Africana",
                    "Unión Africana",
                    "Umoja wa Afrika"
                ]
            }
        ],
        "subregion": "Middle Africa",
        "timezones": [
            "UTC+01:00"
        ],
        "topLevelDomain": [
            ".cm"
        ],
        "translations": {
            "br": "Camarões",
            "de": "Kamerun",
            "es": "Camerún",
            "fa": "کامرون",
            "fr": "Cameroun",
            "hr": "Kamerun",
            "it": "Camerun",
            "ja": "カメルーン",
            "nl": "Kameroen",
            "pt": "Camarões",
            "ru": "Камерун",
            "pl": "Kamerun",
            "cs": "Kamerun",
            "zh": "喀麦隆共和国",
            "hu": "Kamerun",
            "se": "Kamerun"
        },
        "cioc": "CMR"
    },
    {
        "alpha2Code": "CA",
        "alpha3Code": "CAN",
        "altSpellings": [
            "CA"
        ],
        "area": 9984670,
        "borders": [
            "USA"
        ],
        "callingCodes": [
            "1"
        ],
        "capital": "Ottawa",
        "currencies": [
            {
                "code": "CAD",
                "name": "Canadian dollar",
                "symbol": "$"
            }
        ],
        "demonym": "Canadian",
        "flag": "https://restcountries.eu/data/can.svg",
        "gini": 32.6,
        "languages": [
            {
                "iso639_1": "en",
                "iso639_2": "eng",
                "name": "English",
                "nativeName": "English"
            },
            {
                "iso639_1": "fr",
                "iso639_2": "fra",
                "name": "French",
                "nativeName": "français"
            }
        ],
        "latlng": [
            60,
            -95
        ],
        "name": "Canada",
        "nativeName": "Canada",
        "numericCode": "124",
        "population": 38005238,
        "region": "Americas",
        "regionalBlocs": [
            {
                "acronym": "NAFTA",
                "name": "North American Free Trade Agreement",
                "otherNames": [
                    "Tratado de Libre Comercio de América del Norte",
                    "Accord de Libre-échange Nord-Américain"
                ]
            }
        ],
        "subregion": "Northern America",
        "timezones": [
            "UTC-08:00",
            "UTC-07:00",
            "UTC-06:00",
            "UTC-05:00",
            "UTC-04:00",
            "UTC-03:30"
        ],
        "topLevelDomain": [
            ".ca"
        ],
        "translations": {
            "br": "Canadá",
            "de": "Kanada",
            "es": "Canadá",
            "fa": "کانادا",
            "fr": "Canada",
            "hr": "Kanada",
            "it": "Canada",
            "ja": "カナダ",
            "nl": "Canada",
            "pt": "Canadá",
            "ru": "Канада",
            "pl": "Kanada",
            "cs": "Kanada",
            "zh": "加拿大",
            "hu": "Kanada",
            "se": "Kanada"
        },
        "cioc": "CAN"
    },
    {
        "alpha2Code": "CV",
        "alpha3Code": "CPV",
        "altSpellings": [
            "CV",
            "Republic of Cabo Verde",
            "República de Cabo Verde"
        ],
        "area": 4033,
        "borders": [],
        "callingCodes": [
            "238"
        ],
        "capital": "Praia",
        "currencies": [
            {
                "code": "CVE",
                "name": "Cape Verdean escudo",
                "symbol": "Esc"
            }
        ],
        "demonym": "Cape Verdian",
        "flag": "https://restcountries.eu/data/cpv.svg",
        "gini": 50.5,
        "languages": [
            {
                "iso639_1": "pt",
                "iso639_2": "por",
                "name": "Portuguese",
                "nativeName": "Português"
            }
        ],
        "latlng": [
            16,
            -24
        ],
        "name": "Cabo Verde",
        "nativeName": "Cabo Verde",
        "numericCode": "132",
        "population": 555988,
        "region": "Africa",
        "regionalBlocs": [
            {
                "acronym": "AU",
                "name": "African Union",
                "otherNames": [
                    "الاتحاد الأفريقي",
                    "Union africaine",
                    "União Africana",
                    "Unión Africana",
                    "Umoja wa Afrika"
                ]
            }
        ],
        "subregion": "Western Africa",
        "timezones": [
            "UTC-01:00"
        ],
        "topLevelDomain": [
            ".cv"
        ],
        "translations": {
            "br": "Cabo Verde",
            "de": "Kap Verde",
            "es": "Cabo Verde",
            "fa": "کیپ ورد",
            "fr": "Cap Vert",
            "hr": "Zelenortska Republika",
            "it": "Capo Verde",
            "ja": "カーボベルデ",
            "nl": "Kaapverdië",
            "pt": "Cabo Verde",
            "ru": "Кабо-Верде",
            "pl": "Wyspy Zielonego Przylądka",
            "cs": "Kapverdy",
            "zh": "佛得角共和国",
            "hu": "Zöld-foki Köztársaság",
            "se": "Kap Verde"
        },
        "cioc": "CPV"
    },
    {
        "alpha2Code": "KY",
        "alpha3Code": "CYM",
        "altSpellings": [
            "KY"
        ],
        "area": 264,
        "borders": [],
        "callingCodes": [
            "1"
        ],
        "capital": "George Town",
        "currencies": [
            {
                "code": "KYD",
                "name": "Cayman Islands dollar",
                "symbol": "$"
            }
        ],
        "demonym": "Caymanian",
        "flag": "https://restcountries.eu/data/cym.svg",
        "languages": [
            {
                "iso639_1": "en",
                "iso639_2": "eng",
                "name": "English",
                "nativeName": "English"
            }
        ],
        "latlng": [
            19.5,
            -80.5
        ],
        "name": "Cayman Islands",
        "nativeName": "Cayman Islands",
        "numericCode": "136",
        "population": 65720,
        "region": "Americas",
        "regionalBlocs": [],
        "subregion": "Caribbean",
        "timezones": [
            "UTC-05:00"
        ],
        "topLevelDomain": [
            ".ky"
        ],
        "translations": {
            "br": "Ilhas Cayman",
            "de": "Kaimaninseln",
            "es": "Islas Caimán",
            "fa": "جزایر کیمن",
            "fr": "Îles Caïmans",
            "hr": "Kajmanski otoci",
            "it": "Isole Cayman",
            "ja": "ケイマン諸島",
            "nl": "Caymaneilanden",
            "pt": "Ilhas Caimão",
            "pl": "Kajmany",
            "cs": "Kajmanské ostrovy",
            "ru": "Cayman Islands",
            "zh": "开曼群岛",
            "hu": "Kajmán-szigetek",
            "se": "Caymanöarna"
        },
        "cioc": "CAY"
    },
    {
        "alpha2Code": "CF",
        "alpha3Code": "CAF",
        "altSpellings": [
            "CF",
            "Central African Republic",
            "République centrafricaine"
        ],
        "area": 622984,
        "borders": [
            "CMR",
            "TCD",
            "COD",
            "COG",
            "SSD",
            "SDN"
        ],
        "callingCodes": [
            "236"
        ],
        "capital": "Bangui",
        "currencies": [
            {
                "code": "XAF",
                "name": "Central African CFA franc",
                "symbol": "Fr"
            }
        ],
        "demonym": "Central African",
        "flag": "https://restcountries.eu/data/caf.svg",
        "gini": 56.3,
        "languages": [
            {
                "iso639_1": "fr",
                "iso639_2": "fra",
                "name": "French",
                "nativeName": "français"
            },
            {
                "iso639_1": "sg",
                "iso639_2": "sag",
                "name": "Sango",
                "nativeName": "yângâ tî sängö"
            }
        ],
        "latlng": [
            7,
            21
        ],
        "name": "Central African Republic",
        "nativeName": "Ködörösêse tî Bêafrîka",
        "numericCode": "140",
        "population": 4829764,
        "region": "Africa",
        "regionalBlocs": [
            {
                "acronym": "AU",
                "name": "African Union",
                "otherNames": [
                    "الاتحاد الأفريقي",
                    "Union africaine",
                    "União Africana",
                    "Unión Africana",
                    "Umoja wa Afrika"
                ]
            }
        ],
        "subregion": "Middle Africa",
        "timezones": [
            "UTC+01:00"
        ],
        "topLevelDomain": [
            ".cf"
        ],
        "translations": {
            "br": "República Centro-Africana",
            "de": "Zentralafrikanische Republik",
            "es": "República Centroafricana",
            "fa": "جمهوری آفریقای مرکزی",
            "fr": "République centrafricaine",
            "hr": "Srednjoafrička Republika",
            "it": "Repubblica Centrafricana",
            "ja": "中央アフリカ共和国",
            "nl": "Centraal-Afrikaanse Republiek",
            "pt": "República Centro-Africana",
            "ru": "ЦАР",
            "pl": "Republika Środkowoafrykańska",
            "cs": "Středoafrická republika",
            "zh": "中非共和国",
            "hu": "Közép-afrikai Köztársaság",
            "se": "Centralafrikanska republiken"
        },
        "cioc": "CAF"
    },
    {
        "alpha2Code": "TD",
        "alpha3Code": "TCD",
        "altSpellings": [
            "TD",
            "Tchad",
            "Republic of Chad",
            "République du Tchad"
        ],
        "area": 1284000,
        "borders": [
            "CMR",
            "CAF",
            "LBY",
            "NER",
            "NGA",
            "SDN"
        ],
        "callingCodes": [
            "235"
        ],
        "capital": "N'Djamena",
        "currencies": [
            {
                "code": "XAF",
                "name": "Central African CFA franc",
                "symbol": "Fr"
            }
        ],
        "demonym": "Chadian",
        "flag": "https://restcountries.eu/data/tcd.svg",
        "gini": 39.8,
        "languages": [
            {
                "iso639_1": "fr",
                "iso639_2": "fra",
                "name": "French",
                "nativeName": "français"
            },
            {
                "iso639_1": "ar",
                "iso639_2": "ara",
                "name": "Arabic",
                "nativeName": "العربية"
            }
        ],
        "latlng": [
            15,
            19
        ],
        "name": "Chad",
        "nativeName": "Tchad",
        "numericCode": "148",
        "population": 16425859,
        "region": "Africa",
        "regionalBlocs": [
            {
                "acronym": "AU",
                "name": "African Union",
                "otherNames": [
                    "الاتحاد الأفريقي",
                    "Union africaine",
                    "União Africana",
                    "Unión Africana",
                    "Umoja wa Afrika"
                ]
            }
        ],
        "subregion": "Middle Africa",
        "timezones": [
            "UTC+01:00"
        ],
        "topLevelDomain": [
            ".td"
        ],
        "translations": {
            "br": "Chade",
            "de": "Tschad",
            "es": "Chad",
            "fa": "چاد",
            "fr": "Tchad",
            "hr": "Čad",
            "it": "Ciad",
            "ja": "チャド",
            "nl": "Tsjaad",
            "pt": "Chade",
            "ru": "Чад",
            "pl": "Czad",
            "cs": "Čad",
            "zh": "乍得共和国",
            "hu": "Csád",
            "se": "Tchad"
        },
        "cioc": "CHA"
    },
    {
        "alpha2Code": "CL",
        "alpha3Code": "CHL",
        "altSpellings": [
            "CL",
            "Republic of Chile",
            "República de Chile"
        ],
        "area": 756102,
        "borders": [
            "ARG",
            "BOL",
            "PER"
        ],
        "callingCodes": [
            "56"
        ],
        "capital": "Santiago",
        "currencies": [
            {
                "code": "CLP",
                "name": "Chilean peso",
                "symbol": "$"
            }
        ],
        "demonym": "Chilean",
        "flag": "https://restcountries.eu/data/chl.svg",
        "gini": 52.1,
        "languages": [
            {
                "iso639_1": "es",
                "iso639_2": "spa",
                "name": "Spanish",
                "nativeName": "Español"
            }
        ],
        "latlng": [
            -30,
            -71
        ],
        "name": "Chile",
        "nativeName": "Chile",
        "numericCode": "152",
        "population": 19116209,
        "region": "Americas",
        "regionalBlocs": [
            {
                "acronym": "PA",
                "name": "Pacific Alliance",
                "otherNames": [
                    "Alianza del Pacífico"
                ]
            },
            {
                "acronym": "USAN",
                "name": "Union of South American Nations",
                "otherAcronyms": [
                    "UNASUR",
                    "UNASUL",
                    "UZAN"
                ],
                "otherNames": [
                    "Unión de Naciones Suramericanas",
                    "União de Nações Sul-Americanas",
                    "Unie van Zuid-Amerikaanse Naties",
                    "South American Union"
                ]
            }
        ],
        "subregion": "South America",
        "timezones": [
            "UTC-06:00",
            "UTC-04:00"
        ],
        "topLevelDomain": [
            ".cl"
        ],
        "translations": {
            "br": "Chile",
            "de": "Chile",
            "es": "Chile",
            "fa": "شیلی",
            "fr": "Chili",
            "hr": "Čile",
            "it": "Cile",
            "ja": "チリ",
            "nl": "Chili",
            "pt": "Chile",
            "ru": "Чили",
            "pl": "Chile",
            "cs": "Chile",
            "zh": "智利共和国",
            "hu": "Chile",
            "se": "Chile"
        },
        "cioc": "CHI"
    },
    {
        "alpha2Code": "CN",
        "alpha3Code": "CHN",
        "altSpellings": [
            "CN",
            "Zhōngguó",
            "Zhongguo",
            "Zhonghua",
            "People's Republic of China",
            "中华人民共和国",
            "Zhōnghuá Rénmín Gònghéguó"
        ],
        "area": 9640011,
        "borders": [
            "AFG",
            "BTN",
            "MMR",
            "HKG",
            "IND",
            "KAZ",
            "PRK",
            "KGZ",
            "LAO",
            "MAC",
            "MNG",
            "PAK",
            "RUS",
            "TJK",
            "VNM"
        ],
        "callingCodes": [
            "86"
        ],
        "capital": "Beijing",
        "currencies": [
            {
                "code": "CNY",
                "name": "Chinese yuan",
                "symbol": "¥"
            }
        ],
        "demonym": "Chinese",
        "flag": "https://restcountries.eu/data/chn.svg",
        "gini": 47,
        "languages": [
            {
                "iso639_1": "zh",
                "iso639_2": "zho",
                "name": "Chinese",
                "nativeName": "中文 (Zhōngwén)"
            }
        ],
        "latlng": [
            35,
            105
        ],
        "name": "China",
        "nativeName": "中国",
        "numericCode": "156",
        "population": 1402112000,
        "region": "Asia",
        "regionalBlocs": [],
        "subregion": "Eastern Asia",
        "timezones": [
            "UTC+08:00"
        ],
        "topLevelDomain": [
            ".cn"
        ],
        "translations": {
            "br": "China",
            "de": "China",
            "es": "China",
            "fa": "چین",
            "fr": "Chine",
            "hr": "Kina",
            "it": "Cina",
            "ja": "中国",
            "nl": "China",
            "pt": "China",
            "ru": "Китай (Китайская Народная Республика)",
            "pl": "Chiny",
            "cs": "Čínská lidová republika",
            "zh": "中国",
            "hu": "Kína",
            "se": "Kina"
        },
        "cioc": "CHN"
    },
    {
        "alpha2Code": "CX",
        "alpha3Code": "CXR",
        "altSpellings": [
            "CX",
            "Territory of Christmas Island"
        ],
        "area": 135,
        "borders": [],
        "callingCodes": [
            "61"
        ],
        "capital": "Flying Fish Cove",
        "currencies": [
            {
                "code": "AUD",
                "name": "Australian dollar",
                "symbol": "$"
            }
        ],
        "demonym": "Christmas Island",
        "flag": "https://restcountries.eu/data/cxr.svg",
        "languages": [
            {
                "iso639_1": "en",
                "iso639_2": "eng",
                "name": "English",
                "nativeName": "English"
            }
        ],
        "latlng": [
            -10.5,
            105.66666666
        ],
        "name": "Christmas Island",
        "nativeName": "Christmas Island",
        "numericCode": "162",
        "population": 2072,
        "region": "Oceania",
        "regionalBlocs": [],
        "subregion": "Australia and New Zealand",
        "timezones": [
            "UTC+07:00"
        ],
        "topLevelDomain": [
            ".cx"
        ],
        "translations": {
            "br": "Ilha Christmas",
            "de": "Weihnachtsinsel",
            "es": "Isla de Navidad",
            "fa": "جزیره کریسمس",
            "fr": "Île Christmas",
            "hr": "Božićni otok",
            "it": "Isola di Natale",
            "ja": "クリスマス島",
            "nl": "Christmaseiland",
            "pt": "Ilha do Natal",
            "pl": "Wyspa Bożego Narodzenia",
            "cs": "Vánoční ostrov",
            "ru": "Christmas Island",
            "zh": "圣诞岛",
            "hu": "Karácsony-sziget",
            "se": "Julön"
        },
        "cioc": ""
    },
    {
        "alpha2Code": "CC",
        "alpha3Code": "CCK",
        "altSpellings": [
            "CC",
            "Territory of the Cocos (Keeling) Islands",
            "Keeling Islands"
        ],
        "area": 14,
        "borders": [],
        "callingCodes": [
            "61"
        ],
        "capital": "West Island",
        "currencies": [
            {
                "code": "AUD",
                "name": "Australian dollar",
                "symbol": "$"
            }
        ],
        "demonym": "Cocos Islander",
        "flag": "https://restcountries.eu/data/cck.svg",
        "languages": [
            {
                "iso639_1": "en",
                "iso639_2": "eng",
                "name": "English",
                "nativeName": "English"
            }
        ],
        "latlng": [
            -12.5,
            96.83333333
        ],
        "name": "Cocos (Keeling) Islands",
        "nativeName": "Cocos (Keeling) Islands",
        "numericCode": "166",
        "population": 550,
        "region": "Oceania",
        "regionalBlocs": [],
        "subregion": "Australia and New Zealand",
        "timezones": [
            "UTC+06:30"
        ],
        "topLevelDomain": [
            ".cc"
        ],
        "translations": {
            "br": "Ilhas Cocos",
            "de": "Kokosinseln",
            "es": "Islas Cocos o Islas Keeling",
            "fa": "جزایر کوکوس",
            "fr": "Îles Cocos",
            "hr": "Kokosovi Otoci",
            "it": "Isole Cocos e Keeling",
            "ja": "ココス（キーリング）諸島",
            "nl": "Cocoseilanden",
            "pt": "Ilhas dos Cocos",
            "pl": "Wyspy Kokosowe",
            "cs": "Kokosové ostrovy",
            "ru": "Cocos (Keeling) Islands",
            "zh": "科科斯",
            "hu": "Kókusz-szigetek",
            "se": "Kokosöarna"
        },
        "cioc": ""
    },
    {
        "alpha2Code": "CO",
        "alpha3Code": "COL",
        "altSpellings": [
            "CO",
            "Republic of Colombia",
            "República de Colombia"
        ],
        "area": 1141748,
        "borders": [
            "BRA",
            "ECU",
            "PAN",
            "PER",
            "VEN"
        ],
        "callingCodes": [
            "57"
        ],
        "capital": "Bogotá",
        "currencies": [
            {
                "code": "COP",
                "name": "Colombian peso",
                "symbol": "$"
            }
        ],
        "demonym": "Colombian",
        "flag": "https://restcountries.eu/data/col.svg",
        "gini": 55.9,
        "languages": [
            {
                "iso639_1": "es",
                "iso639_2": "spa",
                "name": "Spanish",
                "nativeName": "Español"
            }
        ],
        "latlng": [
            4,
            -72
        ],
        "name": "Colombia",
        "nativeName": "Colombia",
        "numericCode": "170",
        "population": 50882884,
        "region": "Americas",
        "regionalBlocs": [
            {
                "acronym": "PA",
                "name": "Pacific Alliance",
                "otherNames": [
                    "Alianza del Pacífico"
                ]
            },
            {
                "acronym": "USAN",
                "name": "Union of South American Nations",
                "otherAcronyms": [
                    "UNASUR",
                    "UNASUL",
                    "UZAN"
                ],
                "otherNames": [
                    "Unión de Naciones Suramericanas",
                    "União de Nações Sul-Americanas",
                    "Unie van Zuid-Amerikaanse Naties",
                    "South American Union"
                ]
            }
        ],
        "subregion": "South America",
        "timezones": [
            "UTC-05:00"
        ],
        "topLevelDomain": [
            ".co"
        ],
        "translations": {
            "br": "Colômbia",
            "de": "Kolumbien",
            "es": "Colombia",
            "fa": "کلمبیا",
            "fr": "Colombie",
            "hr": "Kolumbija",
            "it": "Colombia",
            "ja": "コロンビア",
            "nl": "Colombia",
            "pt": "Colômbia",
            "ru": "Колумбия",
            "pl": "Kolumbia",
            "cs": "Kolumbie",
            "zh": "哥伦比亚共和国",
            "hu": "Kolumbia",
            "se": "Colombia"
        },
        "cioc": "COL"
    },
    {
        "alpha2Code": "KM",
        "alpha3Code": "COM",
        "altSpellings": [
            "KM",
            "Union of the Comoros",
            "Union des Comores",
            "Udzima wa Komori",
            "al-Ittiḥād al-Qumurī"
        ],
        "area": 1862,
        "borders": [],
        "callingCodes": [
            "269"
        ],
        "capital": "Moroni",
        "currencies": [
            {
                "code": "KMF",
                "name": "Comorian franc",
                "symbol": "Fr"
            }
        ],
        "demonym": "Comoran",
        "flag": "https://restcountries.eu/data/com.svg",
        "gini": 64.3,
        "languages": [
            {
                "iso639_1": "ar",
                "iso639_2": "ara",
                "name": "Arabic",
                "nativeName": "العربية"
            },
            {
                "iso639_1": "fr",
                "iso639_2": "fra",
                "name": "French",
                "nativeName": "français"
            }
        ],
        "latlng": [
            -12.16666666,
            44.25
        ],
        "name": "Comoros",
        "nativeName": "Komori",
        "numericCode": "174",
        "population": 869595,
        "region": "Africa",
        "regionalBlocs": [
            {
                "acronym": "AU",
                "name": "African Union",
                "otherNames": [
                    "الاتحاد الأفريقي",
                    "Union africaine",
                    "União Africana",
                    "Unión Africana",
                    "Umoja wa Afrika"
                ]
            },
            {
                "acronym": "AL",
                "name": "Arab League",
                "otherNames": [
                    "جامعة الدول العربية",
                    "Jāmiʻat ad-Duwal al-ʻArabīyah",
                    "League of Arab States"
                ]
            }
        ],
        "subregion": "Eastern Africa",
        "timezones": [
            "UTC+03:00"
        ],
        "topLevelDomain": [
            ".km"
        ],
        "translations": {
            "br": "Comores",
            "de": "Union der Komoren",
            "es": "Comoras",
            "fa": "کومور",
            "fr": "Comores",
            "hr": "Komori",
            "it": "Comore",
            "ja": "コモロ",
            "nl": "Comoren",
            "pt": "Comores",
            "ru": "Коморы",
            "pl": "Komory",
            "cs": "Komory",
            "zh": "科摩罗联盟",
            "hu": "Comore-szigetek",
            "se": "Komorerna"
        },
        "cioc": "COM"
    },
    {
        "alpha2Code": "CG",
        "alpha3Code": "COG",
        "altSpellings": [
            "CG",
            "Congo-Brazzaville"
        ],
        "area": 342000,
        "borders": [
            "AGO",
            "CMR",
            "CAF",
            "COD",
            "GAB"
        ],
        "callingCodes": [
            "242"
        ],
        "capital": "Brazzaville",
        "currencies": [
            {
                "code": "XAF",
                "name": "Central African CFA franc",
                "symbol": "Fr"
            }
        ],
        "demonym": "Congolese",
        "flag": "https://restcountries.eu/data/cog.svg",
        "gini": 47.3,
        "languages": [
            {
                "iso639_1": "fr",
                "iso639_2": "fra",
                "name": "French",
                "nativeName": "français"
            },
            {
                "iso639_1": "ln",
                "iso639_2": "lin",
                "name": "Lingala",
                "nativeName": "Lingála"
            }
        ],
        "latlng": [
            -1,
            15
        ],
        "name": "Congo",
        "nativeName": "République du Congo",
        "numericCode": "178",
        "population": 5518092,
        "region": "Africa",
        "regionalBlocs": [
            {
                "acronym": "AU",
                "name": "African Union",
                "otherNames": [
                    "الاتحاد الأفريقي",
                    "Union africaine",
                    "União Africana",
                    "Unión Africana",
                    "Umoja wa Afrika"
                ]
            }
        ],
        "subregion": "Middle Africa",
        "timezones": [
            "UTC+01:00"
        ],
        "topLevelDomain": [
            ".cg"
        ],
        "translations": {
            "br": "Congo",
            "de": "Kongo",
            "es": "Congo",
            "fa": "کنگو",
            "fr": "Congo",
            "hr": "Kongo",
            "it": "Congo",
            "ja": "コンゴ共和国",
            "nl": "Congo [Republiek]",
            "pt": "Congo",
            "ru": "Республика Конго",
            "pl": "Kongo",
            "cs": "Demokratická republika Kongo",
            "zh": "刚果共和国",
            "hu": "Kongói Köztársaság",
            "se": "Kongo-Brazzaville"
        },
        "cioc": "CGO"
    },
    {
        "alpha2Code": "CD",
        "alpha3Code": "COD",
        "altSpellings": [
            "CD",
            "DR Congo",
            "Congo-Kinshasa",
            "DRC"
        ],
        "area": 2344858,
        "borders": [
            "AGO",
            "BDI",
            "CAF",
            "COG",
            "RWA",
            "SSD",
            "TZA",
            "UGA",
            "ZMB"
        ],
        "callingCodes": [
            "243"
        ],
        "capital": "Kinshasa",
        "currencies": [
            {
                "code": "CDF",
                "name": "Congolese franc",
                "symbol": "Fr"
            }
        ],
        "demonym": "Congolese",
        "flag": "https://restcountries.eu/data/cod.svg",
        "languages": [
            {
                "iso639_1": "fr",
                "iso639_2": "fra",
                "name": "French",
                "nativeName": "français"
            },
            {
                "iso639_1": "ln",
                "iso639_2": "lin",
                "name": "Lingala",
                "nativeName": "Lingála"
            },
            {
                "iso639_1": "kg",
                "iso639_2": "kon",
                "name": "Kongo",
                "nativeName": "Kikongo"
            },
            {
                "iso639_1": "sw",
                "iso639_2": "swa",
                "name": "Swahili",
                "nativeName": "Kiswahili"
            },
            {
                "iso639_1": "lu",
                "iso639_2": "lub",
                "name": "Luba-Katanga",
                "nativeName": "Tshiluba"
            }
        ],
        "latlng": [
            0,
            25
        ],
        "name": "Congo (Democratic Republic of the)",
        "nativeName": "République démocratique du Congo",
        "numericCode": "180",
        "population": 89561404,
        "region": "Africa",
        "regionalBlocs": [
            {
                "acronym": "AU",
                "name": "African Union",
                "otherNames": [
                    "الاتحاد الأفريقي",
                    "Union africaine",
                    "União Africana",
                    "Unión Africana",
                    "Umoja wa Afrika"
                ]
            }
        ],
        "subregion": "Middle Africa",
        "timezones": [
            "UTC+01:00",
            "UTC+02:00"
        ],
        "topLevelDomain": [
            ".cd"
        ],
        "translations": {
            "br": "RD Congo",
            "de": "Kongo (Dem. Rep.)",
            "es": "Congo (Rep. Dem.)",
            "fa": "جمهوری کنگو",
            "fr": "Congo (Rép. dém.)",
            "hr": "Kongo, Demokratska Republika",
            "it": "Congo (Rep. Dem.)",
            "ja": "コンゴ民主共和国",
            "nl": "Congo [DRC]",
            "pt": "RD Congo",
            "ru": "ДР Конго",
            "pl": "Demokratyczna Republika Konga",
            "cs": "Demokratická republika Kongo",
            "zh": "刚果民主共和国",
            "hu": "Kongói Demokratikus Köztársaság",
            "se": "Kongo-Kinshasa"
        },
        "cioc": "COD"
    },
    {
        "alpha2Code": "CK",
        "alpha3Code": "COK",
        "altSpellings": [
            "CK",
            "Kūki 'Āirani"
        ],
        "area": 236,
        "borders": [],
        "callingCodes": [
            "682"
        ],
        "capital": "Avarua",
        "currencies": [
            {
                "code": "NZD",
                "name": "New Zealand dollar",
                "symbol": "$"
            },
            {
                "code": "CKD",
                "name": "Cook Islands dollar",
                "symbol": "$"
            }
        ],
        "demonym": "Cook Islander",
        "flag": "https://restcountries.eu/data/cok.svg",
        "languages": [
            {
                "iso639_1": "en",
                "iso639_2": "eng",
                "name": "English",
                "nativeName": "English"
            }
        ],
        "latlng": [
            -21.23333333,
            -159.76666666
        ],
        "name": "Cook Islands",
        "nativeName": "Cook Islands",
        "numericCode": "184",
        "population": 18100,
        "region": "Oceania",
        "regionalBlocs": [],
        "subregion": "Polynesia",
        "timezones": [
            "UTC-10:00"
        ],
        "topLevelDomain": [
            ".ck"
        ],
        "translations": {
            "br": "Ilhas Cook",
            "de": "Cookinseln",
            "es": "Islas Cook",
            "fa": "جزایر کوک",
            "fr": "Îles Cook",
            "hr": "Cookovo Otočje",
            "it": "Isole Cook",
            "ja": "クック諸島",
            "nl": "Cookeilanden",
            "pt": "Ilhas Cook",
            "pl": "Wyspy Cooka",
            "cs": "Cookovy ostrovy",
            "ru": "Cook Islands",
            "zh": "库克群岛",
            "hu": "Cook-szigetek",
            "se": "Cooköarna"
        },
        "cioc": "COK"
    },
    {
        "alpha2Code": "CR",
        "alpha3Code": "CRI",
        "altSpellings": [
            "CR",
            "Republic of Costa Rica",
            "República de Costa Rica"
        ],
        "area": 51100,
        "borders": [
            "NIC",
            "PAN"
        ],
        "callingCodes": [
            "506"
        ],
        "capital": "San José",
        "currencies": [
            {
                "code": "CRC",
                "name": "Costa Rican colón",
                "symbol": "₡"
            }
        ],
        "demonym": "Costa Rican",
        "flag": "https://restcountries.eu/data/cri.svg",
        "gini": 50.7,
        "languages": [
            {
                "iso639_1": "es",
                "iso639_2": "spa",
                "name": "Spanish",
                "nativeName": "Español"
            }
        ],
        "latlng": [
            10,
            -84
        ],
        "name": "Costa Rica",
        "nativeName": "Costa Rica",
        "numericCode": "188",
        "population": 5094114,
        "region": "Americas",
        "regionalBlocs": [
            {
                "acronym": "CAIS",
                "name": "Central American Integration System",
                "otherAcronyms": [
                    "SICA"
                ],
                "otherNames": [
                    "Sistema de la Integración Centroamericana,"
                ]
            }
        ],
        "subregion": "Central America",
        "timezones": [
            "UTC-06:00"
        ],
        "topLevelDomain": [
            ".cr"
        ],
        "translations": {
            "br": "Costa Rica",
            "de": "Costa Rica",
            "es": "Costa Rica",
            "fa": "کاستاریکا",
            "fr": "Costa Rica",
            "hr": "Kostarika",
            "it": "Costa Rica",
            "ja": "コスタリカ",
            "nl": "Costa Rica",
            "pt": "Costa Rica",
            "ru": "Коста-Рика",
            "pl": "Kostaryka",
            "cs": "Kostarika",
            "zh": "哥斯达黎加共和国",
            "hu": "Costa Rica",
            "se": "Costa Rica"
        },
        "cioc": "CRC"
    },
    {
        "alpha2Code": "HR",
        "alpha3Code": "HRV",
        "altSpellings": [
            "HR",
            "Hrvatska",
            "Republic of Croatia",
            "Republika Hrvatska"
        ],
        "area": 56594,
        "borders": [
            "BIH",
            "HUN",
            "MNE",
            "SRB",
            "SVN"
        ],
        "callingCodes": [
            "385"
        ],
        "capital": "Zagreb",
        "currencies": [
            {
                "code": "HRK",
                "name": "Croatian kuna",
                "symbol": "kn"
            }
        ],
        "demonym": "Croatian",
        "flag": "https://restcountries.eu/data/hrv.svg",
        "gini": 33.7,
        "languages": [
            {
                "iso639_1": "hr",
                "iso639_2": "hrv",
                "name": "Croatian",
                "nativeName": "hrvatski jezik"
            }
        ],
        "latlng": [
            45.16666666,
            15.5
        ],
        "name": "Croatia",
        "nativeName": "Hrvatska",
        "numericCode": "191",
        "population": 4047200,
        "region": "Europe",
        "regionalBlocs": [
            {
                "acronym": "EU",
                "name": "European Union"
            }
        ],
        "subregion": "Southern Europe",
        "timezones": [
            "UTC+01:00"
        ],
        "topLevelDomain": [
            ".hr"
        ],
        "translations": {
            "br": "Croácia",
            "de": "Kroatien",
            "es": "Croacia",
            "fa": "کرواسی",
            "fr": "Croatie",
            "hr": "Hrvatska",
            "it": "Croazia",
            "ja": "クロアチア",
            "nl": "Kroatië",
            "pt": "Croácia",
            "ru": "Хорватия",
            "pl": "Chorwacja",
            "cs": "Chorvatsko",
            "zh": "克罗地亚共和国",
            "hu": "Horvátország",
            "se": "Kroatien"
        },
        "cioc": "CRO"
    },
    {
        "alpha2Code": "CU",
        "alpha3Code": "CUB",
        "altSpellings": [
            "CU",
            "Republic of Cuba",
            "República de Cuba"
        ],
        "area": 109884,
        "borders": [],
        "callingCodes": [
            "53"
        ],
        "capital": "Havana",
        "currencies": [
            {
                "code": "CUC",
                "name": "Cuban convertible peso",
                "symbol": "$"
            },
            {
                "code": "CUP",
                "name": "Cuban peso",
                "symbol": "$"
            }
        ],
        "demonym": "Cuban",
        "flag": "https://restcountries.eu/data/cub.svg",
        "gini": null,
        "languages": [
            {
                "iso639_1": "es",
                "iso639_2": "spa",
                "name": "Spanish",
                "nativeName": "Español"
            }
        ],
        "latlng": [
            21.5,
            -80
        ],
        "name": "Cuba",
        "nativeName": "Cuba",
        "numericCode": "192",
        "population": 11326616,
        "region": "Americas",
        "regionalBlocs": [],
        "subregion": "Caribbean",
        "timezones": [
            "UTC-05:00"
        ],
        "topLevelDomain": [
            ".cu"
        ],
        "translations": {
            "br": "Cuba",
            "de": "Kuba",
            "es": "Cuba",
            "fa": "کوبا",
            "fr": "Cuba",
            "hr": "Kuba",
            "it": "Cuba",
            "ja": "キューバ",
            "nl": "Cuba",
            "pt": "Cuba",
            "ru": "Куба",
            "pl": "Kuba",
            "cs": "Kuba",
            "zh": "古巴共和国",
            "hu": "Kuba",
            "se": "Kuba"
        },
        "cioc": "CUB"
    },
    {
        "alpha2Code": "CW",
        "alpha3Code": "CUW",
        "altSpellings": [
            "CW",
            "Curacao",
            "Kòrsou",
            "Country of Curaçao",
            "Land Curaçao",
            "Pais Kòrsou"
        ],
        "area": 444,
        "borders": [],
        "callingCodes": [
            "599"
        ],
        "capital": "Willemstad",
        "currencies": [
            {
                "code": "ANG",
                "name": "Netherlands Antillean guilder",
                "symbol": "ƒ"
            }
        ],
        "demonym": "Dutch",
        "flag": "https://restcountries.eu/data/cuw.svg",
        "languages": [
            {
                "iso639_1": "nl",
                "iso639_2": "nld",
                "name": "Dutch",
                "nativeName": "Nederlands"
            },
            {
                "iso639_1": "",
                "iso639_2": "pap",
                "name": "Papiamento",
                "nativeName": "Papiamentu"
            },
            {
                "iso639_1": "en",
                "iso639_2": "eng",
                "name": "English",
                "nativeName": "English"
            }
        ],
        "latlng": [
            12.116667,
            -68.933333
        ],
        "name": "Curaçao",
        "nativeName": "Curaçao",
        "numericCode": "531",
        "population": 155014,
        "region": "Americas",
        "regionalBlocs": [],
        "subregion": "Caribbean",
        "timezones": [
            "UTC-04:00"
        ],
        "topLevelDomain": [
            ".cw"
        ],
        "translations": {
            "br": "Curaçao",
            "de": "Curaçao",
            "fa": "کوراسائو",
            "fr": "Curaçao",
            "it": "Curaçao",
            "nl": "Curaçao",
            "pt": "Curaçao",
            "pl": "Curaçao",
            "cs": "Curaçao",
            "es": "Curaçao",
            "hr": "Curaçao",
            "ja": "Curaçao",
            "ru": "Curaçao",
            "zh": "库拉索",
            "hu": "Curaçao",
            "se": "Curaçao"
        },
        "cioc": ""
    },
    {
        "alpha2Code": "CY",
        "alpha3Code": "CYP",
        "altSpellings": [
            "CY",
            "Kýpros",
            "Kıbrıs",
            "Republic of Cyprus",
            "Κυπριακή Δημοκρατία",
            "Kıbrıs Cumhuriyeti"
        ],
        "area": 9251,
        "borders": [],
        "callingCodes": [
            "357"
        ],
        "capital": "Nicosia",
        "currencies": [
            {
                "code": "EUR",
                "name": "Euro",
                "symbol": "€"
            }
        ],
        "demonym": "Cypriot",
        "flag": "https://restcountries.eu/data/cyp.svg",
        "gini": null,
        "languages": [
            {
                "iso639_1": "el",
                "iso639_2": "ell",
                "name": "Greek (modern)",
                "nativeName": "ελληνικά"
            },
            {
                "iso639_1": "tr",
                "iso639_2": "tur",
                "name": "Turkish",
                "nativeName": "Türkçe"
            },
            {
                "iso639_1": "hy",
                "iso639_2": "hye",
                "name": "Armenian",
                "nativeName": "Հայերեն"
            }
        ],
        "latlng": [
            35,
            33
        ],
        "name": "Cyprus",
        "nativeName": "Κύπρος",
        "numericCode": "196",
        "population": 1207361,
        "region": "Europe",
        "regionalBlocs": [
            {
                "acronym": "EU",
                "name": "European Union"
            }
        ],
        "subregion": "Southern Europe",
        "timezones": [
            "UTC+02:00"
        ],
        "topLevelDomain": [
            ".cy"
        ],
        "translations": {
            "br": "Chipre",
            "de": "Zypern",
            "es": "Chipre",
            "fa": "قبرس",
            "fr": "Chypre",
            "hr": "Cipar",
            "it": "Cipro",
            "ja": "キプロス",
            "nl": "Cyprus",
            "pt": "Chipre",
            "ru": "Кипр",
            "pl": "Cypr",
            "cs": "Kypr",
            "zh": "塞浦路斯共和国",
            "hu": "Ciprus",
            "se": "Cypern"
        },
        "cioc": "CYP"
    },
    {
        "alpha2Code": "CZ",
        "alpha3Code": "CZE",
        "altSpellings": [
            "CZ",
            "Česká republika",
            "Česko"
        ],
        "area": 78865,
        "borders": [
            "AUT",
            "DEU",
            "POL",
            "SVK"
        ],
        "callingCodes": [
            "420"
        ],
        "capital": "Prague",
        "currencies": [
            {
                "code": "CZK",
                "name": "Czech koruna",
                "symbol": "Kč"
            }
        ],
        "demonym": "Czech",
        "flag": "https://restcountries.eu/data/cze.svg",
        "gini": 26,
        "languages": [
            {
                "iso639_1": "cs",
                "iso639_2": "ces",
                "name": "Czech",
                "nativeName": "čeština"
            },
            {
                "iso639_1": "sk",
                "iso639_2": "slk",
                "name": "Slovak",
                "nativeName": "slovenčina"
            }
        ],
        "latlng": [
            49.75,
            15.5
        ],
        "name": "Czech Republic",
        "nativeName": "Česká republika",
        "numericCode": "203",
        "population": 10698896,
        "region": "Europe",
        "regionalBlocs": [
            {
                "acronym": "EU",
                "name": "European Union"
            }
        ],
        "subregion": "Eastern Europe",
        "timezones": [
            "UTC+01:00"
        ],
        "topLevelDomain": [
            ".cz"
        ],
        "translations": {
            "br": "República Tcheca",
            "de": "Tschechische Republik",
            "es": "República Checa",
            "fa": "جمهوری چک",
            "fr": "République tchèque",
            "hr": "Češka",
            "it": "Repubblica Ceca",
            "ja": "チェコ",
            "nl": "Tsjechië",
            "pt": "República Checa",
            "ru": "Чехия",
            "pl": "Czechy",
            "cs": "Česká republika",
            "zh": "捷克共和国",
            "hu": "Csehország",
            "se": "Tjeckien"
        },
        "cioc": "CZE"
    },
    {
        "alpha2Code": "DK",
        "alpha3Code": "DNK",
        "altSpellings": [
            "DK",
            "Danmark",
            "Kingdom of Denmark",
            "Kongeriget Danmark"
        ],
        "area": 43094,
        "borders": [
            "DEU"
        ],
        "callingCodes": [
            "45"
        ],
        "capital": "Copenhagen",
        "currencies": [
            {
                "code": "DKK",
                "name": "Danish krone",
                "symbol": "kr"
            }
        ],
        "demonym": "Danish",
        "flag": "https://restcountries.eu/data/dnk.svg",
        "gini": 24,
        "languages": [
            {
                "iso639_1": "da",
                "iso639_2": "dan",
                "name": "Danish",
                "nativeName": "dansk"
            }
        ],
        "latlng": [
            56,
            10
        ],
        "name": "Denmark",
        "nativeName": "Danmark",
        "numericCode": "208",
        "population": 5831404,
        "region": "Europe",
        "regionalBlocs": [
            {
                "acronym": "EU",
                "name": "European Union"
            }
        ],
        "subregion": "Northern Europe",
        "timezones": [
            "UTC-04:00",
            "UTC-03:00",
            "UTC-01:00",
            "UTC",
            "UTC+01:00"
        ],
        "topLevelDomain": [
            ".dk"
        ],
        "translations": {
            "br": "Dinamarca",
            "de": "Dänemark",
            "es": "Dinamarca",
            "fa": "دانمارک",
            "fr": "Danemark",
            "hr": "Danska",
            "it": "Danimarca",
            "ja": "デンマーク",
            "nl": "Denemarken",
            "pt": "Dinamarca",
            "ru": "Дания",
            "pl": "Dania",
            "cs": "Dánsko",
            "zh": "丹麦王国",
            "hu": "Dánia",
            "se": "Danmark"
        },
        "cioc": "DEN"
    },
    {
        "alpha2Code": "DJ",
        "alpha3Code": "DJI",
        "altSpellings": [
            "DJ",
            "Jabuuti",
            "Gabuuti",
            "Republic of Djibouti",
            "République de Djibouti",
            "Gabuutih Ummuuno",
            "Jamhuuriyadda Jabuuti"
        ],
        "area": 23200,
        "borders": [
            "ERI",
            "ETH",
            "SOM"
        ],
        "callingCodes": [
            "253"
        ],
        "capital": "Djibouti",
        "currencies": [
            {
                "code": "DJF",
                "name": "Djiboutian franc",
                "symbol": "Fr"
            }
        ],
        "demonym": "Djibouti",
        "flag": "https://restcountries.eu/data/dji.svg",
        "gini": 40,
        "languages": [
            {
                "iso639_1": "fr",
                "iso639_2": "fra",
                "name": "French",
                "nativeName": "français"
            },
            {
                "iso639_1": "ar",
                "iso639_2": "ara",
                "name": "Arabic",
                "nativeName": "العربية"
            }
        ],
        "latlng": [
            11.5,
            43
        ],
        "name": "Djibouti",
        "nativeName": "Djibouti",
        "numericCode": "262",
        "population": 988002,
        "region": "Africa",
        "regionalBlocs": [
            {
                "acronym": "AU",
                "name": "African Union",
                "otherNames": [
                    "الاتحاد الأفريقي",
                    "Union africaine",
                    "União Africana",
                    "Unión Africana",
                    "Umoja wa Afrika"
                ]
            },
            {
                "acronym": "AL",
                "name": "Arab League",
                "otherNames": [
                    "جامعة الدول العربية",
                    "Jāmiʻat ad-Duwal al-ʻArabīyah",
                    "League of Arab States"
                ]
            }
        ],
        "subregion": "Eastern Africa",
        "timezones": [
            "UTC+03:00"
        ],
        "topLevelDomain": [
            ".dj"
        ],
        "translations": {
            "br": "Djibuti",
            "de": "Dschibuti",
            "es": "Yibuti",
            "fa": "جیبوتی",
            "fr": "Djibouti",
            "hr": "Džibuti",
            "it": "Gibuti",
            "ja": "ジブチ",
            "nl": "Djibouti",
            "pt": "Djibuti",
            "ru": "Джибути",
            "pl": "Dżibuti",
            "cs": "Džibutsko",
            "zh": "吉布提共和国",
            "hu": "Dzsibuti",
            "se": "Djibouti"
        },
        "cioc": "DJI"
    },
    {
        "alpha2Code": "DM",
        "alpha3Code": "DMA",
        "altSpellings": [
            "DM",
            "Dominique",
            "Wai‘tu kubuli",
            "Commonwealth of Dominica"
        ],
        "area": 751,
        "borders": [],
        "callingCodes": [
            "1"
        ],
        "capital": "Roseau",
        "currencies": [
            {
                "code": "XCD",
                "name": "East Caribbean dollar",
                "symbol": "$"
            }
        ],
        "demonym": "Dominican",
        "flag": "https://restcountries.eu/data/dma.svg",
        "languages": [
            {
                "iso639_1": "en",
                "iso639_2": "eng",
                "name": "English",
                "nativeName": "English"
            }
        ],
        "latlng": [
            15.41666666,
            -61.33333333
        ],
        "name": "Dominica",
        "nativeName": "Dominica",
        "numericCode": "212",
        "population": 71991,
        "region": "Americas",
        "regionalBlocs": [],
        "subregion": "Caribbean",
        "timezones": [
            "UTC-04:00"
        ],
        "topLevelDomain": [
            ".dm"
        ],
        "translations": {
            "br": "Dominica",
            "de": "Dominica",
            "es": "Dominica",
            "fa": "دومینیکا",
            "fr": "Dominique",
            "hr": "Dominika",
            "it": "Dominica",
            "ja": "ドミニカ国",
            "nl": "Dominica",
            "pt": "Dominica",
            "ru": "Доминика",
            "pl": "Dominika",
            "cs": "Dominika",
            "zh": "多米尼加共和国",
            "hu": "Dominikai Közösség",
            "se": "Dominica"
        },
        "cioc": "DMA"
    },
    {
        "alpha2Code": "DO",
        "alpha3Code": "DOM",
        "altSpellings": [
            "DO"
        ],
        "area": 48671,
        "borders": [
            "HTI"
        ],
        "callingCodes": [
            "1"
        ],
        "capital": "Santo Domingo",
        "currencies": [
            {
                "code": "DOP",
                "name": "Dominican peso",
                "symbol": "$"
            }
        ],
        "demonym": "Dominican",
        "flag": "https://restcountries.eu/data/dom.svg",
        "gini": 47.2,
        "languages": [
            {
                "iso639_1": "es",
                "iso639_2": "spa",
                "name": "Spanish",
                "nativeName": "Español"
            }
        ],
        "latlng": [
            19,
            -70.66666666
        ],
        "name": "Dominican Republic",
        "nativeName": "República Dominicana",
        "numericCode": "214",
        "population": 10847904,
        "region": "Americas",
        "regionalBlocs": [
            {
                "acronym": "CARICOM",
                "name": "Caribbean Community",
                "otherNames": [
                    "Comunidad del Caribe",
                    "Communauté Caribéenne",
                    "Caribische Gemeenschap"
                ]
            },
            {
                "acronym": "CAIS",
                "name": "Central American Integration System",
                "otherAcronyms": [
                    "SICA"
                ],
                "otherNames": [
                    "Sistema de la Integración Centroamericana,"
                ]
            }
        ],
        "subregion": "Caribbean",
        "timezones": [
            "UTC-04:00"
        ],
        "topLevelDomain": [
            ".do"
        ],
        "translations": {
            "br": "República Dominicana",
            "de": "Dominikanische Republik",
            "es": "República Dominicana",
            "fa": "جمهوری دومینیکن",
            "fr": "République dominicaine",
            "hr": "Dominikanska Republika",
            "it": "Repubblica Dominicana",
            "ja": "ドミニカ共和国",
            "nl": "Dominicaanse Republiek",
            "pt": "República Dominicana",
            "ru": "Доминиканская Республика",
            "pl": "Dominikana",
            "cs": "Dominikánská republika",
            "zh": "多明尼加共和国",
            "hu": "Dominikai Köztársaság",
            "se": "Dominikanska republiken"
        },
        "cioc": "DOM"
    },
    {
        "alpha2Code": "EC",
        "alpha3Code": "ECU",
        "altSpellings": [
            "EC",
            "Republic of Ecuador",
            "República del Ecuador"
        ],
        "area": 276841,
        "borders": [
            "COL",
            "PER"
        ],
        "callingCodes": [
            "593"
        ],
        "capital": "Quito",
        "currencies": [
            {
                "code": "USD",
                "name": "United States dollar",
                "symbol": "$"
            }
        ],
        "demonym": "Ecuadorean",
        "flag": "https://restcountries.eu/data/ecu.svg",
        "gini": 49.3,
        "languages": [
            {
                "iso639_1": "es",
                "iso639_2": "spa",
                "name": "Spanish",
                "nativeName": "Español"
            }
        ],
        "latlng": [
            -2,
            -77.5
        ],
        "name": "Ecuador",
        "nativeName": "Ecuador",
        "numericCode": "218",
        "population": 17643060,
        "region": "Americas",
        "regionalBlocs": [
            {
                "acronym": "USAN",
                "name": "Union of South American Nations",
                "otherAcronyms": [
                    "UNASUR",
                    "UNASUL",
                    "UZAN"
                ],
                "otherNames": [
                    "Unión de Naciones Suramericanas",
                    "União de Nações Sul-Americanas",
                    "Unie van Zuid-Amerikaanse Naties",
                    "South American Union"
                ]
            }
        ],
        "subregion": "South America",
        "timezones": [
            "UTC-06:00",
            "UTC-05:00"
        ],
        "topLevelDomain": [
            ".ec"
        ],
        "translations": {
            "br": "Equador",
            "de": "Ecuador",
            "es": "Ecuador",
            "fa": "اکوادور",
            "fr": "Équateur",
            "hr": "Ekvador",
            "it": "Ecuador",
            "ja": "エクアドル",
            "nl": "Ecuador",
            "pt": "Equador",
            "ru": "Эквадор",
            "pl": "Ekwador",
            "cs": "Ekvádor",
            "zh": "厄瓜多尔共和国",
            "hu": "Ecuador",
            "se": "Ecuador"
        },
        "cioc": "ECU"
    },
    {
        "alpha2Code": "EG",
        "alpha3Code": "EGY",
        "altSpellings": [
            "EG",
            "Arab Republic of Egypt"
        ],
        "area": 1002450,
        "borders": [
            "ISR",
            "LBY",
            "SDN"
        ],
        "callingCodes": [
            "20"
        ],
        "capital": "Cairo",
        "currencies": [
            {
                "code": "EGP",
                "name": "Egyptian pound",
                "symbol": "£"
            }
        ],
        "demonym": "Egyptian",
        "flag": "https://restcountries.eu/data/egy.svg",
        "gini": 30.8,
        "languages": [
            {
                "iso639_1": "ar",
                "iso639_2": "ara",
                "name": "Arabic",
                "nativeName": "العربية"
            }
        ],
        "latlng": [
            27,
            30
        ],
        "name": "Egypt",
        "nativeName": "مصر‎",
        "numericCode": "818",
        "population": 102334403,
        "region": "Africa",
        "regionalBlocs": [
            {
                "acronym": "AU",
                "name": "African Union",
                "otherNames": [
                    "الاتحاد الأفريقي",
                    "Union africaine",
                    "União Africana",
                    "Unión Africana",
                    "Umoja wa Afrika"
                ]
            },
            {
                "acronym": "AL",
                "name": "Arab League",
                "otherNames": [
                    "جامعة الدول العربية",
                    "Jāmiʻat ad-Duwal al-ʻArabīyah",
                    "League of Arab States"
                ]
            }
        ],
        "subregion": "Northern Africa",
        "timezones": [
            "UTC+02:00"
        ],
        "topLevelDomain": [
            ".eg"
        ],
        "translations": {
            "br": "Egito",
            "de": "Ägypten",
            "es": "Egipto",
            "fa": "مصر",
            "fr": "Égypte",
            "hr": "Egipat",
            "it": "Egitto",
            "ja": "エジプト",
            "nl": "Egypte",
            "pt": "Egipto",
            "ru": "Египет",
            "pl": "Egipt",
            "cs": "Egypt",
            "zh": "阿拉伯埃及共和国",
            "hu": "Egyiptom",
            "se": "Egypten"
        },
        "cioc": "EGY"
    },
    {
        "alpha2Code": "SV",
        "alpha3Code": "SLV",
        "altSpellings": [
            "SV",
            "Republic of El Salvador",
            "República de El Salvador"
        ],
        "area": 21041,
        "borders": [
            "GTM",
            "HND"
        ],
        "callingCodes": [
            "503"
        ],
        "capital": "San Salvador",
        "currencies": [
            {
                "code": "USD",
                "name": "United States dollar",
                "symbol": "$"
            }
        ],
        "demonym": "Salvadoran",
        "flag": "https://restcountries.eu/data/slv.svg",
        "gini": 48.3,
        "languages": [
            {
                "iso639_1": "es",
                "iso639_2": "spa",
                "name": "Spanish",
                "nativeName": "Español"
            }
        ],
        "latlng": [
            13.83333333,
            -88.91666666
        ],
        "name": "El Salvador",
        "nativeName": "El Salvador",
        "numericCode": "222",
        "population": 6486201,
        "region": "Americas",
        "regionalBlocs": [
            {
                "acronym": "CAIS",
                "name": "Central American Integration System",
                "otherAcronyms": [
                    "SICA"
                ],
                "otherNames": [
                    "Sistema de la Integración Centroamericana,"
                ]
            }
        ],
        "subregion": "Central America",
        "timezones": [
            "UTC-06:00"
        ],
        "topLevelDomain": [
            ".sv"
        ],
        "translations": {
            "br": "El Salvador",
            "de": "El Salvador",
            "es": "El Salvador",
            "fa": "السالوادور",
            "fr": "Salvador",
            "hr": "Salvador",
            "it": "El Salvador",
            "ja": "エルサルバドル",
            "nl": "El Salvador",
            "pt": "El Salvador",
            "ru": "Сальвадор",
            "pl": "Salwador",
            "cs": "Salvador",
            "zh": "萨尔瓦多共和国",
            "hu": "Salvador",
            "se": "El Salvador"
        },
        "cioc": "ESA"
    },
    {
        "alpha2Code": "GQ",
        "alpha3Code": "GNQ",
        "altSpellings": [
            "GQ",
            "Republic of Equatorial Guinea",
            "República de Guinea Ecuatorial",
            "République de Guinée équatoriale",
            "República da Guiné Equatorial"
        ],
        "area": 28051,
        "borders": [
            "CMR",
            "GAB"
        ],
        "callingCodes": [
            "240"
        ],
        "capital": "Malabo",
        "currencies": [
            {
                "code": "XAF",
                "name": "Central African CFA franc",
                "symbol": "Fr"
            }
        ],
        "demonym": "Equatorial Guinean",
        "flag": "https://restcountries.eu/data/gnq.svg",
        "gini": null,
        "languages": [
            {
                "iso639_1": "es",
                "iso639_2": "spa",
                "name": "Spanish",
                "nativeName": "Español"
            },
            {
                "iso639_1": "fr",
                "iso639_2": "fra",
                "name": "French",
                "nativeName": "français"
            }
        ],
        "latlng": [
            2,
            10
        ],
        "name": "Equatorial Guinea",
        "nativeName": "Guinea Ecuatorial",
        "numericCode": "226",
        "population": 1402985,
        "region": "Africa",
        "regionalBlocs": [
            {
                "acronym": "AU",
                "name": "African Union",
                "otherNames": [
                    "الاتحاد الأفريقي",
                    "Union africaine",
                    "União Africana",
                    "Unión Africana",
                    "Umoja wa Afrika"
                ]
            }
        ],
        "subregion": "Middle Africa",
        "timezones": [
            "UTC+01:00"
        ],
        "topLevelDomain": [
            ".gq"
        ],
        "translations": {
            "br": "Guiné Equatorial",
            "de": "Äquatorial-Guinea",
            "es": "Guinea Ecuatorial",
            "fa": "گینه استوایی",
            "fr": "Guinée-Équatoriale",
            "hr": "Ekvatorijalna Gvineja",
            "it": "Guinea Equatoriale",
            "ja": "赤道ギニア",
            "nl": "Equatoriaal-Guinea",
            "pt": "Guiné Equatorial",
            "ru": "Экваториальная Гвинея",
            "pl": "Gwinea Równikowa",
            "cs": "Rovníková Guinea",
            "zh": "赤道几内亚共和国",
            "hu": "Egyenlítői-Guinea",
            "se": "Ekvatorialguinea"
        },
        "cioc": "GEQ"
    },
    {
        "alpha2Code": "ER",
        "alpha3Code": "ERI",
        "altSpellings": [
            "ER",
            "State of Eritrea",
            "ሃገረ ኤርትራ",
            "Dawlat Iritriyá",
            "ʾErtrā",
            "Iritriyā",
            ""
        ],
        "area": 117600,
        "borders": [
            "DJI",
            "ETH",
            "SDN"
        ],
        "callingCodes": [
            "291"
        ],
        "capital": "Asmara",
        "currencies": [
            {
                "code": "ERN",
                "name": "Eritrean nakfa",
                "symbol": "Nfk"
            }
        ],
        "demonym": "Eritrean",
        "flag": "https://restcountries.eu/data/eri.svg",
        "languages": [
            {
                "iso639_1": "ti",
                "iso639_2": "tir",
                "name": "Tigrinya",
                "nativeName": "ትግርኛ"
            },
            {
                "iso639_1": "ar",
                "iso639_2": "ara",
                "name": "Arabic",
                "nativeName": "العربية"
            },
            {
                "iso639_1": "en",
                "iso639_2": "eng",
                "name": "English",
                "nativeName": "English"
            }
        ],
        "latlng": [
            15,
            39
        ],
        "name": "Eritrea",
        "nativeName": "ኤርትራ",
        "numericCode": "232",
        "population": 5352000,
        "region": "Africa",
        "regionalBlocs": [
            {
                "acronym": "AU",
                "name": "African Union",
                "otherNames": [
                    "الاتحاد الأفريقي",
                    "Union africaine",
                    "União Africana",
                    "Unión Africana",
                    "Umoja wa Afrika"
                ]
            }
        ],
        "subregion": "Eastern Africa",
        "timezones": [
            "UTC+03:00"
        ],
        "topLevelDomain": [
            ".er"
        ],
        "translations": {
            "br": "Eritreia",
            "de": "Eritrea",
            "es": "Eritrea",
            "fa": "اریتره",
            "fr": "Érythrée",
            "hr": "Eritreja",
            "it": "Eritrea",
            "ja": "エリトリア",
            "nl": "Eritrea",
            "pt": "Eritreia",
            "ru": "Эритрея",
            "pl": "Erytrea",
            "cs": "Eritrea",
            "zh": "厄立特里亚",
            "hu": "Eritrea",
            "se": "Eritrea"
        },
        "cioc": "ERI"
    },
    {
        "alpha2Code": "EE",
        "alpha3Code": "EST",
        "altSpellings": [
            "EE",
            "Eesti",
            "Republic of Estonia",
            "Eesti Vabariik"
        ],
        "area": 45227,
        "borders": [
            "LVA",
            "RUS"
        ],
        "callingCodes": [
            "372"
        ],
        "capital": "Tallinn",
        "currencies": [
            {
                "code": "EUR",
                "name": "Euro",
                "symbol": "€"
            }
        ],
        "demonym": "Estonian",
        "flag": "https://restcountries.eu/data/est.svg",
        "gini": 36,
        "languages": [
            {
                "iso639_1": "et",
                "iso639_2": "est",
                "name": "Estonian",
                "nativeName": "eesti"
            }
        ],
        "latlng": [
            59,
            26
        ],
        "name": "Estonia",
        "nativeName": "Eesti",
        "numericCode": "233",
        "population": 1331057,
        "region": "Europe",
        "regionalBlocs": [
            {
                "acronym": "EU",
                "name": "European Union"
            }
        ],
        "subregion": "Northern Europe",
        "timezones": [
            "UTC+02:00"
        ],
        "topLevelDomain": [
            ".ee"
        ],
        "translations": {
            "br": "Estônia",
            "de": "Estland",
            "es": "Estonia",
            "fa": "استونی",
            "fr": "Estonie",
            "hr": "Estonija",
            "it": "Estonia",
            "ja": "エストニア",
            "nl": "Estland",
            "pt": "Estónia",
            "ru": "Эстония",
            "pl": "Estonia",
            "cs": "Estonsko",
            "zh": "爱沙尼亚共和国",
            "hu": "Észtország",
            "se": "Estland"
        },
        "cioc": "EST"
    },
    {
        "alpha2Code": "ET",
        "alpha3Code": "ETH",
        "altSpellings": [
            "ET",
            "ʾĪtyōṗṗyā",
            "Federal Democratic Republic of Ethiopia",
            "የኢትዮጵያ ፌዴራላዊ ዲሞክራሲያዊ ሪፐብሊክ"
        ],
        "area": 1104300,
        "borders": [
            "DJI",
            "ERI",
            "KEN",
            "SOM",
            "SSD",
            "SDN"
        ],
        "callingCodes": [
            "251"
        ],
        "capital": "Addis Ababa",
        "currencies": [
            {
                "code": "ETB",
                "name": "Ethiopian birr",
                "symbol": "Br"
            }
        ],
        "demonym": "Ethiopian",
        "flag": "https://restcountries.eu/data/eth.svg",
        "gini": 29.8,
        "languages": [
            {
                "iso639_1": "am",
                "iso639_2": "amh",
                "name": "Amharic",
                "nativeName": "አማርኛ"
            }
        ],
        "latlng": [
            8,
            38
        ],
        "name": "Ethiopia",
        "nativeName": "ኢትዮጵያ",
        "numericCode": "231",
        "population": 114963583,
        "region": "Africa",
        "regionalBlocs": [
            {
                "acronym": "AU",
                "name": "African Union",
                "otherNames": [
                    "الاتحاد الأفريقي",
                    "Union africaine",
                    "União Africana",
                    "Unión Africana",
                    "Umoja wa Afrika"
                ]
            }
        ],
        "subregion": "Eastern Africa",
        "timezones": [
            "UTC+03:00"
        ],
        "topLevelDomain": [
            ".et"
        ],
        "translations": {
            "br": "Etiópia",
            "de": "Äthiopien",
            "es": "Etiopía",
            "fa": "اتیوپی",
            "fr": "Éthiopie",
            "hr": "Etiopija",
            "it": "Etiopia",
            "ja": "エチオピア",
            "nl": "Ethiopië",
            "pt": "Etiópia",
            "ru": "Эфиопия",
            "pl": "Etiopia",
            "cs": "Etiopie",
            "zh": "埃塞俄比亚联邦民主共和国",
            "hu": "Etiópia",
            "se": "Etiopien"
        },
        "cioc": "ETH"
    },
    {
        "alpha2Code": "FK",
        "alpha3Code": "FLK",
        "altSpellings": [
            "FK",
            "Islas Malvinas"
        ],
        "area": 12173,
        "borders": [],
        "callingCodes": [
            "500"
        ],
        "capital": "Stanley",
        "currencies": [
            {
                "code": "FKP",
                "name": "Falkland Islands pound",
                "symbol": "£"
            }
        ],
        "demonym": "Falkland Islander",
        "flag": "https://restcountries.eu/data/flk.svg",
        "languages": [
            {
                "iso639_1": "en",
                "iso639_2": "eng",
                "name": "English",
                "nativeName": "English"
            }
        ],
        "latlng": [
            -51.75,
            -59
        ],
        "name": "Falkland Islands (Malvinas)",
        "nativeName": "Falkland Islands",
        "numericCode": "238",
        "population": 2563,
        "region": "Americas",
        "regionalBlocs": [
            {
                "acronym": "USAN",
                "name": "Union of South American Nations",
                "otherAcronyms": [
                    "UNASUR",
                    "UNASUL",
                    "UZAN"
                ],
                "otherNames": [
                    "Unión de Naciones Suramericanas",
                    "União de Nações Sul-Americanas",
                    "Unie van Zuid-Amerikaanse Naties",
                    "South American Union"
                ]
            }
        ],
        "subregion": "South America",
        "timezones": [
            "UTC-04:00"
        ],
        "topLevelDomain": [
            ".fk"
        ],
        "translations": {
            "br": "Ilhas Malvinas",
            "de": "Falklandinseln",
            "es": "Islas Malvinas",
            "fa": "جزایر فالکلند",
            "fr": "Îles Malouines",
            "hr": "Falklandski Otoci",
            "it": "Isole Falkland o Isole Malvine",
            "ja": "フォークランド（マルビナス）諸島",
            "nl": "Falklandeilanden [Islas Malvinas]",
            "pt": "Ilhas Falkland",
            "pl": "Falklandy (Malwiny)",
            "cs": "Falklandy",
            "ru": "Falkland Islands (Malvinas)",
            "zh": "福克兰群岛",
            "hu": "Falkland-szigetek",
            "se": "Falklandsöarna"
        },
        "cioc": ""
    },
    {
        "alpha2Code": "FO",
        "alpha3Code": "FRO",
        "altSpellings": [
            "FO",
            "Føroyar",
            "Færøerne"
        ],
        "area": 1393,
        "borders": [],
        "callingCodes": [
            "298"
        ],
        "capital": "Tórshavn",
        "currencies": [
            {
                "code": "DKK",
                "name": "Danish krone",
                "symbol": "kr"
            },
            {
                "code": "(none)",
                "name": "Faroese króna",
                "symbol": "kr"
            }
        ],
        "demonym": "Faroese",
        "flag": "https://restcountries.eu/data/fro.svg",
        "languages": [
            {
                "iso639_1": "fo",
                "iso639_2": "fao",
                "name": "Faroese",
                "nativeName": "føroyskt"
            }
        ],
        "latlng": [
            62,
            -7
        ],
        "name": "Faroe Islands",
        "nativeName": "Føroyar",
        "numericCode": "234",
        "population": 48865,
        "region": "Europe",
        "subregion": "Northern Europe",
        "timezones": [
            "UTC+00:00"
        ],
        "topLevelDomain": [
            ".fo"
        ],
        "translations": {
            "br": "Ilhas Faroé",
            "de": "Färöer-Inseln",
            "es": "Islas Faroe",
            "fa": "جزایر فارو",
            "fr": "Îles Féroé",
            "hr": "Farski Otoci",
            "it": "Isole Far Oer",
            "ja": "フェロー諸島",
            "nl": "Faeröer",
            "pt": "Ilhas Faroé",
            "pl": "Wyspy Owcze",
            "cs": "Faerské ostrovy",
            "ru": "Faroe Islands",
            "zh": "法罗群岛",
            "hu": "Feröer",
            "se": "Färöarna"
        },
        "cioc": ""
    },
    {
        "alpha2Code": "FJ",
        "alpha3Code": "FJI",
        "altSpellings": [
            "FJ",
            "Viti",
            "Republic of Fiji",
            "Matanitu ko Viti",
            "Fijī Gaṇarājya"
        ],
        "area": 18272,
        "borders": [],
        "callingCodes": [
            "679"
        ],
        "capital": "Suva",
        "currencies": [
            {
                "code": "FJD",
                "name": "Fijian dollar",
                "symbol": "$"
            }
        ],
        "demonym": "Fijian",
        "flag": "https://restcountries.eu/data/fji.svg",
        "gini": 42.8,
        "languages": [
            {
                "iso639_1": "en",
                "iso639_2": "eng",
                "name": "English",
                "nativeName": "English"
            },
            {
                "iso639_1": "fj",
                "iso639_2": "fij",
                "name": "Fijian",
                "nativeName": "vosa Vakaviti"
            },
            {
                "iso639_1": "hi",
                "iso639_2": "hin",
                "name": "Hindi",
                "nativeName": "हिन्दी"
            },
            {
                "iso639_1": "ur",
                "iso639_2": "urd",
                "name": "Urdu",
                "nativeName": "اردو"
            }
        ],
        "latlng": [
            -18,
            175
        ],
        "name": "Fiji",
        "nativeName": "Fiji",
        "numericCode": "242",
        "population": 896444,
        "region": "Oceania",
        "regionalBlocs": [],
        "subregion": "Melanesia",
        "timezones": [
            "UTC+12:00"
        ],
        "topLevelDomain": [
            ".fj"
        ],
        "translations": {
            "br": "Fiji",
            "de": "Fidschi",
            "es": "Fiyi",
            "fa": "فیجی",
            "fr": "Fidji",
            "hr": "Fiđi",
            "it": "Figi",
            "ja": "フィジー",
            "nl": "Fiji",
            "pt": "Fiji",
            "ru": "Фиджи",
            "pl": "Fidżi",
            "cs": "Fidži",
            "zh": "斐济共和国",
            "hu": "Fidzsi-szigetek",
            "se": "Fiji"
        },
        "cioc": "FIJ"
    },
    {
        "alpha2Code": "FI",
        "alpha3Code": "FIN",
        "altSpellings": [
            "FI",
            "Suomi",
            "Republic of Finland",
            "Suomen tasavalta",
            "Republiken Finland"
        ],
        "area": 338424,
        "borders": [
            "NOR",
            "SWE",
            "RUS"
        ],
        "callingCodes": [
            "358"
        ],
        "capital": "Helsinki",
        "currencies": [
            {
                "code": "EUR",
                "name": "Euro",
                "symbol": "€"
            }
        ],
        "demonym": "Finnish",
        "flag": "https://restcountries.eu/data/fin.svg",
        "gini": 26.9,
        "languages": [
            {
                "iso639_1": "fi",
                "iso639_2": "fin",
                "name": "Finnish",
                "nativeName": "suomi"
            },
            {
                "iso639_1": "sv",
                "iso639_2": "swe",
                "name": "Swedish",
                "nativeName": "svenska"
            }
        ],
        "latlng": [
            64,
            26
        ],
        "name": "Finland",
        "nativeName": "Suomi",
        "numericCode": "246",
        "population": 5530719,
        "region": "Europe",
        "regionalBlocs": [
            {
                "acronym": "EU",
                "name": "European Union"
            }
        ],
        "subregion": "Northern Europe",
        "timezones": [
            "UTC+02:00"
        ],
        "topLevelDomain": [
            ".fi"
        ],
        "translations": {
            "br": "Finlândia",
            "de": "Finnland",
            "es": "Finlandia",
            "fa": "فنلاند",
            "fr": "Finlande",
            "hr": "Finska",
            "it": "Finlandia",
            "ja": "フィンランド",
            "nl": "Finland",
            "pt": "Finlândia",
            "ru": "Финляндия",
            "pl": "Finlandia",
            "cs": "Finsko",
            "zh": "芬兰共和国",
            "hu": "Finnország",
            "se": "Finland"
        },
        "cioc": "FIN"
    },
    {
        "alpha2Code": "FR",
        "alpha3Code": "FRA",
        "altSpellings": [
            "FR",
            "French Republic",
            "République française"
        ],
        "area": 640679,
        "borders": [
            "AND",
            "BEL",
            "DEU",
            "ITA",
            "LUX",
            "MCO",
            "ESP",
            "CHE"
        ],
        "callingCodes": [
            "33"
        ],
        "capital": "Paris",
        "currencies": [
            {
                "code": "EUR",
                "name": "Euro",
                "symbol": "€"
            }
        ],
        "demonym": "French",
        "flag": "https://restcountries.eu/data/fra.svg",
        "gini": 32.7,
        "languages": [
            {
                "iso639_1": "fr",
                "iso639_2": "fra",
                "name": "French",
                "nativeName": "français"
            }
        ],
        "latlng": [
            46,
            2
        ],
        "name": "France",
        "nativeName": "France",
        "numericCode": "250",
        "population": 67391582,
        "region": "Europe",
        "regionalBlocs": [
            {
                "acronym": "EU",
                "name": "European Union"
            }
        ],
        "subregion": "Western Europe",
        "timezones": [
            "UTC-10:00",
            "UTC-09:30",
            "UTC-09:00",
            "UTC-08:00",
            "UTC-04:00",
            "UTC-03:00",
            "UTC+01:00",
            "UTC+03:00",
            "UTC+04:00",
            "UTC+05:00",
            "UTC+10:00",
            "UTC+11:00",
            "UTC+12:00"
        ],
        "topLevelDomain": [
            ".fr"
        ],
        "translations": {
            "br": "França",
            "de": "Frankreich",
            "es": "Francia",
            "fa": "فرانسه",
            "fr": "France",
            "hr": "Francuska",
            "it": "Francia",
            "ja": "フランス",
            "nl": "Frankrijk",
            "pt": "França",
            "ru": "Франция",
            "pl": "Francja",
            "cs": "Francie",
            "zh": "法兰西共和国",
            "hu": "Franciaország",
            "se": "Frankrike"
        },
        "cioc": "FRA"
    },
    {
        "alpha2Code": "GF",
        "alpha3Code": "GUF",
        "altSpellings": [
            "GF",
            "Guiana",
            "Guyane"
        ],
        "borders": [
            "BRA",
            "SUR"
        ],
        "callingCodes": [
            "594"
        ],
        "capital": "Cayenne",
        "currencies": [
            {
                "code": "EUR",
                "name": "Euro",
                "symbol": "€"
            }
        ],
        "demonym": "",
        "flag": "https://restcountries.eu/data/guf.svg",
        "languages": [
            {
                "iso639_1": "fr",
                "iso639_2": "fra",
                "name": "French",
                "nativeName": "français"
            }
        ],
        "latlng": [
            4,
            -53
        ],
        "name": "French Guiana",
        "nativeName": "Guyane française",
        "numericCode": "254",
        "population": 254541,
        "region": "Americas",
        "regionalBlocs": [
            {
                "acronym": "USAN",
                "name": "Union of South American Nations",
                "otherAcronyms": [
                    "UNASUR",
                    "UNASUL",
                    "UZAN"
                ],
                "otherNames": [
                    "Unión de Naciones Suramericanas",
                    "União de Nações Sul-Americanas",
                    "Unie van Zuid-Amerikaanse Naties",
                    "South American Union"
                ]
            },
            {
                "acronym": "EU",
                "name": "European Union"
            }
        ],
        "subregion": "South America",
        "timezones": [
            "UTC-03:00"
        ],
        "topLevelDomain": [
            ".gf"
        ],
        "translations": {
            "br": "Guiana Francesa",
            "de": "Französisch Guyana",
            "es": "Guayana Francesa",
            "fa": "گویان فرانسه",
            "fr": "Guyane française",
            "hr": "Francuska Gvajana",
            "it": "Guyana francese",
            "ja": "フランス領ギアナ",
            "nl": "Frans-Guyana",
            "pt": "Guiana Francesa",
            "pl": "Gujana Francuska",
            "cs": "Francouzská Guyana",
            "ru": "French Guiana",
            "zh": "法属圭亚那",
            "hu": "Francia Guyana",
            "se": "Franska Guyana"
        },
        "cioc": ""
    },
    {
        "alpha2Code": "PF",
        "alpha3Code": "PYF",
        "altSpellings": [
            "PF",
            "Polynésie française",
            "French Polynesia",
            "Pōrīnetia Farāni"
        ],
        "area": 4167,
        "borders": [],
        "callingCodes": [
            "689"
        ],
        "capital": "Papeetē",
        "currencies": [
            {
                "code": "XPF",
                "name": "CFP franc",
                "symbol": "Fr"
            }
        ],
        "demonym": "French Polynesian",
        "flag": "https://restcountries.eu/data/pyf.svg",
        "languages": [
            {
                "iso639_1": "fr",
                "iso639_2": "fra",
                "name": "French",
                "nativeName": "français"
            }
        ],
        "latlng": [
            -15,
            -140
        ],
        "name": "French Polynesia",
        "nativeName": "Polynésie française",
        "numericCode": "258",
        "population": 280904,
        "region": "Oceania",
        "regionalBlocs": [],
        "subregion": "Polynesia",
        "timezones": [
            "UTC-10:00",
            "UTC-09:30",
            "UTC-09:00"
        ],
        "topLevelDomain": [
            ".pf"
        ],
        "translations": {
            "br": "Polinésia Francesa",
            "de": "Französisch-Polynesien",
            "es": "Polinesia Francesa",
            "fa": "پلی‌نزی فرانسه",
            "fr": "Polynésie française",
            "hr": "Francuska Polinezija",
            "it": "Polinesia Francese",
            "ja": "フランス領ポリネシア",
            "nl": "Frans-Polynesië",
            "pt": "Polinésia Francesa",
            "pl": "Polinezja Francuska",
            "cs": "Francouzská Polynésie",
            "ru": "French Polynesia",
            "zh": "法属波利尼西亚",
            "hu": "Francia Polinézia",
            "se": "Franska Polynesien"
        },
        "cioc": ""
    },
    {
        "alpha2Code": "TF",
        "alpha3Code": "ATF",
        "altSpellings": [
            "TF"
        ],
        "area": 7747,
        "borders": [],
        "callingCodes": [
            "262"
        ],
        "capital": "Port-aux-Français",
        "currencies": [
            {
                "code": "EUR",
                "name": "Euro",
                "symbol": "€"
            }
        ],
        "demonym": "French",
        "flag": "https://restcountries.eu/data/atf.svg",
        "languages": [
            {
                "iso639_1": "fr",
                "iso639_2": "fra",
                "name": "French",
                "nativeName": "français"
            }
        ],
        "latlng": [
            -49.25,
            69.167
        ],
        "name": "French Southern Territories",
        "nativeName": "Territoire des Terres australes et antarctiques françaises",
        "numericCode": "260",
        "population": 140,
        "region": "Africa",
        "regionalBlocs": [
            {
                "acronym": "AU",
                "name": "African Union",
                "otherNames": [
                    "الاتحاد الأفريقي",
                    "Union africaine",
                    "União Africana",
                    "Unión Africana",
                    "Umoja wa Afrika"
                ]
            }
        ],
        "subregion": "Southern Africa",
        "timezones": [
            "UTC+05:00"
        ],
        "topLevelDomain": [
            ".tf"
        ],
        "translations": {
            "br": "Terras Austrais e Antárticas Francesas",
            "de": "Französische Süd- und Antarktisgebiete",
            "es": "Tierras Australes y Antárticas Francesas",
            "fa": "سرزمین‌های جنوبی و جنوبگانی فرانسه",
            "fr": "Terres australes et antarctiques françaises",
            "hr": "Francuski južni i antarktički teritoriji",
            "it": "Territori Francesi del Sud",
            "ja": "フランス領南方・南極地域",
            "nl": "Franse Gebieden in de zuidelijke Indische Oceaan",
            "pt": "Terras Austrais e Antárticas Francesas",
            "pl": "Francuskie Terytoria Południowe i Antarktyczne",
            "cs": "Francouzská jižní a antarktická území",
            "ru": "French Southern Territories",
            "zh": "法国南部和南极土地",
            "hu": "Francia déli és antarktiszi területek",
            "se": "Franska södra territorierna"
        },
        "cioc": ""
    },
    {
        "alpha2Code": "GA",
        "alpha3Code": "GAB",
        "altSpellings": [
            "GA",
            "Gabonese Republic",
            "République Gabonaise"
        ],
        "area": 267668,
        "borders": [
            "CMR",
            "COG",
            "GNQ"
        ],
        "callingCodes": [
            "241"
        ],
        "capital": "Libreville",
        "currencies": [
            {
                "code": "XAF",
                "name": "Central African CFA franc",
                "symbol": "Fr"
            }
        ],
        "demonym": "Gabonese",
        "flag": "https://restcountries.eu/data/gab.svg",
        "gini": 41.5,
        "languages": [
            {
                "iso639_1": "fr",
                "iso639_2": "fra",
                "name": "French",
                "nativeName": "français"
            }
        ],
        "latlng": [
            -1,
            11.75
        ],
        "name": "Gabon",
        "nativeName": "Gabon",
        "numericCode": "266",
        "population": 2225728,
        "region": "Africa",
        "regionalBlocs": [
            {
                "acronym": "AU",
                "name": "African Union",
                "otherNames": [
                    "الاتحاد الأفريقي",
                    "Union africaine",
                    "União Africana",
                    "Unión Africana",
                    "Umoja wa Afrika"
                ]
            }
        ],
        "subregion": "Middle Africa",
        "timezones": [
            "UTC+01:00"
        ],
        "topLevelDomain": [
            ".ga"
        ],
        "translations": {
            "br": "Gabão",
            "de": "Gabun",
            "es": "Gabón",
            "fa": "گابن",
            "fr": "Gabon",
            "hr": "Gabon",
            "it": "Gabon",
            "ja": "ガボン",
            "nl": "Gabon",
            "pt": "Gabão",
            "ru": "Габон",
            "pl": "Gabon",
            "cs": "Gabon",
            "zh": "加蓬共和国",
            "hu": "Gabon",
            "se": "Gabon"
        },
        "cioc": "GAB"
    },
    {
        "alpha2Code": "GM",
        "alpha3Code": "GMB",
        "altSpellings": [
            "GM",
            "Republic of the Gambia"
        ],
        "area": 11295,
        "borders": [
            "SEN"
        ],
        "callingCodes": [
            "220"
        ],
        "capital": "Banjul",
        "currencies": [
            {
                "code": "GMD",
                "name": "Gambian dalasi",
                "symbol": "D"
            }
        ],
        "demonym": "Gambian",
        "flag": "https://restcountries.eu/data/gmb.svg",
        "languages": [
            {
                "iso639_1": "en",
                "iso639_2": "eng",
                "name": "English",
                "nativeName": "English"
            }
        ],
        "latlng": [
            13.46666666,
            -16.56666666
        ],
        "name": "Gambia",
        "nativeName": "Gambia",
        "numericCode": "270",
        "population": 2416664,
        "region": "Africa",
        "regionalBlocs": [
            {
                "acronym": "AU",
                "name": "African Union",
                "otherNames": [
                    "الاتحاد الأفريقي",
                    "Union africaine",
                    "União Africana",
                    "Unión Africana",
                    "Umoja wa Afrika"
                ]
            }
        ],
        "subregion": "Western Africa",
        "timezones": [
            "UTC+00:00"
        ],
        "topLevelDomain": [
            ".gm"
        ],
        "translations": {
            "br": "Gâmbia",
            "de": "Gambia",
            "es": "Gambia",
            "fa": "گامبیا",
            "fr": "Gambie",
            "hr": "Gambija",
            "it": "Gambia",
            "ja": "ガンビア",
            "nl": "Gambia",
            "pt": "Gâmbia",
            "ru": "Гамбия",
            "pl": "Gambia",
            "cs": "Gambie",
            "zh": "冈比亚共和国",
            "hu": "Gambia",
            "se": "Gambia"
        },
        "cioc": "GAM"
    },
    {
        "alpha2Code": "GE",
        "alpha3Code": "GEO",
        "altSpellings": [
            "GE",
            "Sakartvelo"
        ],
        "area": 69700,
        "borders": [
            "ARM",
            "AZE",
            "RUS",
            "TUR"
        ],
        "callingCodes": [
            "995"
        ],
        "capital": "Tbilisi",
        "currencies": [
            {
                "code": "GEL",
                "name": "Georgian Lari",
                "symbol": "ლ"
            }
        ],
        "demonym": "Georgian",
        "flag": "https://restcountries.eu/data/geo.svg",
        "gini": 41.3,
        "languages": [
            {
                "iso639_1": "ka",
                "iso639_2": "kat",
                "name": "Georgian",
                "nativeName": "ქართული"
            }
        ],
        "latlng": [
            42,
            43.5
        ],
        "name": "Georgia",
        "nativeName": "საქართველო",
        "numericCode": "268",
        "population": 3714000,
        "region": "Asia",
        "regionalBlocs": [],
        "subregion": "Western Asia",
        "timezones": [
            "UTC+04:00"
        ],
        "topLevelDomain": [
            ".ge"
        ],
        "translations": {
            "br": "Geórgia",
            "de": "Georgien",
            "es": "Georgia",
            "fa": "گرجستان",
            "fr": "Géorgie",
            "hr": "Gruzija",
            "it": "Georgia",
            "ja": "グルジア",
            "nl": "Georgië",
            "pt": "Geórgia",
            "ru": "Грузия",
            "pl": "Gruzja",
            "cs": "Gruzie",
            "zh": "格鲁吉亚",
            "hu": "Grúzia",
            "se": "Georgien"
        },
        "cioc": "GEO"
    },
    {
        "alpha2Code": "DE",
        "alpha3Code": "DEU",
        "altSpellings": [
            "DE",
            "Federal Republic of Germany",
            "Bundesrepublik Deutschland"
        ],
        "area": 357114,
        "borders": [
            "AUT",
            "BEL",
            "CZE",
            "DNK",
            "FRA",
            "LUX",
            "NLD",
            "POL",
            "CHE"
        ],
        "callingCodes": [
            "49"
        ],
        "capital": "Berlin",
        "currencies": [
            {
                "code": "EUR",
                "name": "Euro",
                "symbol": "€"
            }
        ],
        "demonym": "German",
        "flag": "https://restcountries.eu/data/deu.svg",
        "gini": 28.3,
        "languages": [
            {
                "iso639_1": "de",
                "iso639_2": "deu",
                "name": "German",
                "nativeName": "Deutsch"
            }
        ],
        "latlng": [
            51,
            9
        ],
        "name": "Germany",
        "nativeName": "Deutschland",
        "numericCode": "276",
        "population": 83240525,
        "region": "Europe",
        "regionalBlocs": [
            {
                "acronym": "EU",
                "name": "European Union"
            }
        ],
        "subregion": "Western Europe",
        "timezones": [
            "UTC+01:00"
        ],
        "topLevelDomain": [
            ".de"
        ],
        "translations": {
            "br": "Alemanha",
            "de": "Deutschland",
            "es": "Alemania",
            "fa": "آلمان",
            "fr": "Allemagne",
            "hr": "Njemačka",
            "it": "Germania",
            "ja": "ドイツ",
            "nl": "Duitsland",
            "pt": "Alemanha",
            "ru": "Германия",
            "pl": "Niemcy",
            "cs": "Německo",
            "zh": "德意志联邦共和国",
            "hu": "Németország",
            "se": "Tyskland"
        },
        "cioc": "GER"
    },
    {
        "alpha2Code": "GH",
        "alpha3Code": "GHA",
        "altSpellings": [
            "GH"
        ],
        "area": 238533,
        "borders": [
            "BFA",
            "CIV",
            "TGO"
        ],
        "callingCodes": [
            "233"
        ],
        "capital": "Accra",
        "currencies": [
            {
                "code": "GHS",
                "name": "Ghanaian cedi",
                "symbol": "₵"
            }
        ],
        "demonym": "Ghanaian",
        "flag": "https://restcountries.eu/data/gha.svg",
        "gini": 42.8,
        "languages": [
            {
                "iso639_1": "en",
                "iso639_2": "eng",
                "name": "English",
                "nativeName": "English"
            }
        ],
        "latlng": [
            8,
            -2
        ],
        "name": "Ghana",
        "nativeName": "Ghana",
        "numericCode": "288",
        "population": 31072945,
        "region": "Africa",
        "regionalBlocs": [
            {
                "acronym": "AU",
                "name": "African Union",
                "otherNames": [
                    "الاتحاد الأفريقي",
                    "Union africaine",
                    "União Africana",
                    "Unión Africana",
                    "Umoja wa Afrika"
                ]
            }
        ],
        "subregion": "Western Africa",
        "timezones": [
            "UTC"
        ],
        "topLevelDomain": [
            ".gh"
        ],
        "translations": {
            "br": "Gana",
            "de": "Ghana",
            "es": "Ghana",
            "fa": "غنا",
            "fr": "Ghana",
            "hr": "Gana",
            "it": "Ghana",
            "ja": "ガーナ",
            "nl": "Ghana",
            "pt": "Gana",
            "ru": "Гана",
            "pl": "Ghana",
            "cs": "Ghana",
            "zh": "加纳共和国",
            "hu": "Ghána",
            "se": "Ghana"
        },
        "cioc": "GHA"
    },
    {
        "alpha2Code": "GI",
        "alpha3Code": "GIB",
        "altSpellings": [
            "GI"
        ],
        "area": 6,
        "borders": [
            "ESP"
        ],
        "callingCodes": [
            "350"
        ],
        "capital": "Gibraltar",
        "currencies": [
            {
                "code": "GIP",
                "name": "Gibraltar pound",
                "symbol": "£"
            }
        ],
        "demonym": "Gibraltar",
        "flag": "https://restcountries.eu/data/gib.svg",
        "languages": [
            {
                "iso639_1": "en",
                "iso639_2": "eng",
                "name": "English",
                "nativeName": "English"
            }
        ],
        "latlng": [
            36.13333333,
            -5.35
        ],
        "name": "Gibraltar",
        "nativeName": "Gibraltar",
        "numericCode": "292",
        "population": 33691,
        "region": "Europe",
        "regionalBlocs": [
            {
                "acronym": "EU",
                "name": "European Union"
            }
        ],
        "subregion": "Southern Europe",
        "timezones": [
            "UTC+01:00"
        ],
        "topLevelDomain": [
            ".gi"
        ],
        "translations": {
            "br": "Gibraltar",
            "de": "Gibraltar",
            "es": "Gibraltar",
            "fa": "جبل‌طارق",
            "fr": "Gibraltar",
            "hr": "Gibraltar",
            "it": "Gibilterra",
            "ja": "ジブラルタル",
            "nl": "Gibraltar",
            "pt": "Gibraltar",
            "pl": "Gibraltar",
            "cs": "Gibraltar",
            "ru": "Gibraltar",
            "zh": "直布罗陀",
            "hu": "Gibraltár",
            "se": "Gibraltar"
        },
        "cioc": ""
    },
    {
        "alpha2Code": "GR",
        "alpha3Code": "GRC",
        "altSpellings": [
            "GR",
            "Elláda",
            "Hellenic Republic",
            "Ελληνική Δημοκρατία"
        ],
        "area": 131990,
        "borders": [
            "ALB",
            "BGR",
            "TUR",
            "MKD"
        ],
        "callingCodes": [
            "30"
        ],
        "capital": "Athens",
        "currencies": [
            {
                "code": "EUR",
                "name": "Euro",
                "symbol": "€"
            }
        ],
        "demonym": "Greek",
        "flag": "https://restcountries.eu/data/grc.svg",
        "gini": 34.3,
        "languages": [
            {
                "iso639_1": "el",
                "iso639_2": "ell",
                "name": "Greek (modern)",
                "nativeName": "ελληνικά"
            }
        ],
        "latlng": [
            39,
            22
        ],
        "name": "Greece",
        "nativeName": "Ελλάδα",
        "numericCode": "300",
        "population": 10715549,
        "region": "Europe",
        "regionalBlocs": [
            {
                "acronym": "EU",
                "name": "European Union"
            }
        ],
        "subregion": "Southern Europe",
        "timezones": [
            "UTC+02:00"
        ],
        "topLevelDomain": [
            ".gr"
        ],
        "translations": {
            "br": "Grécia",
            "de": "Griechenland",
            "es": "Grecia",
            "fa": "یونان",
            "fr": "Grèce",
            "hr": "Grčka",
            "it": "Grecia",
            "ja": "ギリシャ",
            "nl": "Griekenland",
            "pt": "Grécia",
            "ru": "Греция",
            "pl": "Grecja",
            "cs": "Řecko",
            "zh": "希腊共和国",
            "hu": "Görögország",
            "se": "Grekland"
        },
        "cioc": "GRE"
    },
    {
        "alpha2Code": "GL",
        "alpha3Code": "GRL",
        "altSpellings": [
            "GL",
            "Grønland"
        ],
        "area": 2166086,
        "borders": [],
        "callingCodes": [
            "299"
        ],
        "capital": "Nuuk",
        "currencies": [
            {
                "code": "DKK",
                "name": "Danish krone",
                "symbol": "kr"
            }
        ],
        "demonym": "Greenlandic",
        "flag": "https://restcountries.eu/data/grl.svg",
        "languages": [
            {
                "iso639_1": "kl",
                "iso639_2": "kal",
                "name": "Kalaallisut",
                "nativeName": "kalaallisut"
            }
        ],
        "latlng": [
            72,
            -40
        ],
        "name": "Greenland",
        "nativeName": "Kalaallit Nunaat",
        "numericCode": "304",
        "population": 56367,
        "region": "Americas",
        "regionalBlocs": [],
        "subregion": "Northern America",
        "timezones": [
            "UTC-04:00",
            "UTC-03:00",
            "UTC-01:00",
            "UTC+00:00"
        ],
        "topLevelDomain": [
            ".gl"
        ],
        "translations": {
            "br": "Groelândia",
            "de": "Grönland",
            "es": "Groenlandia",
            "fa": "گرینلند",
            "fr": "Groenland",
            "hr": "Grenland",
            "it": "Groenlandia",
            "ja": "グリーンランド",
            "nl": "Groenland",
            "pt": "Gronelândia",
            "pl": "Grenlandia",
            "cs": "Grónsko",
            "ru": "Greenland",
            "zh": "格陵兰",
            "hu": "Grönland",
            "se": "Grönland"
        },
        "cioc": ""
    },
    {
        "alpha2Code": "GD",
        "alpha3Code": "GRD",
        "altSpellings": [
            "GD"
        ],
        "area": 344,
        "borders": [],
        "callingCodes": [
            "1"
        ],
        "capital": "St. George's",
        "currencies": [
            {
                "code": "XCD",
                "name": "East Caribbean dollar",
                "symbol": "$"
            }
        ],
        "demonym": "Grenadian",
        "flag": "https://restcountries.eu/data/grd.svg",
        "languages": [
            {
                "iso639_1": "en",
                "iso639_2": "eng",
                "name": "English",
                "nativeName": "English"
            }
        ],
        "latlng": [
            12.11666666,
            -61.66666666
        ],
        "name": "Grenada",
        "nativeName": "Grenada",
        "numericCode": "308",
        "population": 112519,
        "region": "Americas",
        "regionalBlocs": [
            {
                "acronym": "CARICOM",
                "name": "Caribbean Community",
                "otherNames": [
                    "Comunidad del Caribe",
                    "Communauté Caribéenne",
                    "Caribische Gemeenschap"
                ]
            }
        ],
        "subregion": "Caribbean",
        "timezones": [
            "UTC-04:00"
        ],
        "topLevelDomain": [
            ".gd"
        ],
        "translations": {
            "br": "Granada",
            "de": "Grenada",
            "es": "Grenada",
            "fa": "گرنادا",
            "fr": "Grenade",
            "hr": "Grenada",
            "it": "Grenada",
            "ja": "グレナダ",
            "nl": "Grenada",
            "pt": "Granada",
            "ru": "Гренада",
            "pl": "Grenada",
            "cs": "Grenada",
            "zh": "格林纳达",
            "hu": "Grenada",
            "se": "Grenada"
        },
        "cioc": "GRN"
    },
    {
        "alpha2Code": "GP",
        "alpha3Code": "GLP",
        "altSpellings": [
            "GP",
            "Gwadloup"
        ],
        "borders": [],
        "callingCodes": [
            "590"
        ],
        "capital": "Basse-Terre",
        "currencies": [
            {
                "code": "EUR",
                "name": "Euro",
                "symbol": "€"
            }
        ],
        "demonym": "Guadeloupian",
        "flag": "https://restcountries.eu/data/glp.svg",
        "languages": [
            {
                "iso639_1": "fr",
                "iso639_2": "fra",
                "name": "French",
                "nativeName": "français"
            }
        ],
        "latlng": [
            16.25,
            -61.583333
        ],
        "name": "Guadeloupe",
        "nativeName": "Guadeloupe",
        "numericCode": "312",
        "population": 400132,
        "region": "Americas",
        "regionalBlocs": [],
        "subregion": "Caribbean",
        "timezones": [
            "UTC-04:00"
        ],
        "topLevelDomain": [
            ".gp"
        ],
        "translations": {
            "br": "Guadalupe",
            "de": "Guadeloupe",
            "es": "Guadalupe",
            "fa": "جزیره گوادلوپ",
            "fr": "Guadeloupe",
            "hr": "Gvadalupa",
            "it": "Guadeloupa",
            "ja": "グアドループ",
            "nl": "Guadeloupe",
            "pt": "Guadalupe",
            "pl": "Gwadelupa",
            "cs": "Guadeloupe",
            "ru": "Guadeloupe",
            "zh": "瓜德罗普岛",
            "hu": "Guadeloupe",
            "se": "Guadeloupe"
        },
        "cioc": ""
    },
    {
        "alpha2Code": "GU",
        "alpha3Code": "GUM",
        "altSpellings": [
            "GU",
            "Guåhån"
        ],
        "area": 549,
        "borders": [],
        "callingCodes": [
            "1"
        ],
        "capital": "Hagåtña",
        "currencies": [
            {
                "code": "USD",
                "name": "United States dollar",
                "symbol": "$"
            }
        ],
        "demonym": "Guamanian",
        "flag": "https://restcountries.eu/data/gum.svg",
        "languages": [
            {
                "iso639_1": "en",
                "iso639_2": "eng",
                "name": "English",
                "nativeName": "English"
            },
            {
                "iso639_1": "ch",
                "iso639_2": "cha",
                "name": "Chamorro",
                "nativeName": "Chamoru"
            },
            {
                "iso639_1": "es",
                "iso639_2": "spa",
                "name": "Spanish",
                "nativeName": "Español"
            }
        ],
        "latlng": [
            13.46666666,
            144.78333333
        ],
        "name": "Guam",
        "nativeName": "Guam",
        "numericCode": "316",
        "population": 168783,
        "region": "Oceania",
        "regionalBlocs": [],
        "subregion": "Micronesia",
        "timezones": [
            "UTC+10:00"
        ],
        "topLevelDomain": [
            ".gu"
        ],
        "translations": {
            "br": "Guam",
            "de": "Guam",
            "es": "Guam",
            "fa": "گوام",
            "fr": "Guam",
            "hr": "Guam",
            "it": "Guam",
            "ja": "グアム",
            "nl": "Guam",
            "pt": "Guame",
            "pl": "Guam",
            "cs": "Guam",
            "ru": "Guam",
            "zh": "关岛",
            "hu": "Guam",
            "se": "Guam"
        },
        "cioc": "GUM"
    },
    {
        "alpha2Code": "GT",
        "alpha3Code": "GTM",
        "altSpellings": [
            "GT"
        ],
        "area": 108889,
        "borders": [
            "BLZ",
            "SLV",
            "HND",
            "MEX"
        ],
        "callingCodes": [
            "502"
        ],
        "capital": "Guatemala City",
        "currencies": [
            {
                "code": "GTQ",
                "name": "Guatemalan quetzal",
                "symbol": "Q"
            }
        ],
        "demonym": "Guatemalan",
        "flag": "https://restcountries.eu/data/gtm.svg",
        "gini": 55.9,
        "languages": [
            {
                "iso639_1": "es",
                "iso639_2": "spa",
                "name": "Spanish",
                "nativeName": "Español"
            }
        ],
        "latlng": [
            15.5,
            -90.25
        ],
        "name": "Guatemala",
        "nativeName": "Guatemala",
        "numericCode": "320",
        "population": 16858333,
        "region": "Americas",
        "regionalBlocs": [
            {
                "acronym": "CAIS",
                "name": "Central American Integration System",
                "otherAcronyms": [
                    "SICA"
                ],
                "otherNames": [
                    "Sistema de la Integración Centroamericana,"
                ]
            }
        ],
        "subregion": "Central America",
        "timezones": [
            "UTC-06:00"
        ],
        "topLevelDomain": [
            ".gt"
        ],
        "translations": {
            "br": "Guatemala",
            "de": "Guatemala",
            "es": "Guatemala",
            "fa": "گواتمالا",
            "fr": "Guatemala",
            "hr": "Gvatemala",
            "it": "Guatemala",
            "ja": "グアテマラ",
            "nl": "Guatemala",
            "pt": "Guatemala",
            "ru": "Гватемала",
            "pl": "Gwatemala",
            "cs": "Guatemala",
            "zh": "危地马拉共和国",
            "hu": "Guatemala",
            "se": "Guatemala"
        },
        "cioc": "GUA"
    },
    {
        "alpha2Code": "GG",
        "alpha3Code": "GGY",
        "altSpellings": [
            "GG",
            "Bailiwick of Guernsey",
            "Bailliage de Guernesey"
        ],
        "area": 78,
        "borders": [],
        "callingCodes": [
            "44"
        ],
        "capital": "St. Peter Port",
        "currencies": [
            {
                "code": "GBP",
                "name": "British pound",
                "symbol": "£"
            },
            {
                "code": "(none)",
                "name": "Guernsey pound",
                "symbol": "£"
            }
        ],
        "demonym": "Channel Islander",
        "flag": "https://restcountries.eu/data/ggy.svg",
        "languages": [
            {
                "iso639_1": "en",
                "iso639_2": "eng",
                "name": "English",
                "nativeName": "English"
            },
            {
                "iso639_1": "fr",
                "iso639_2": "fra",
                "name": "French",
                "nativeName": "français"
            }
        ],
        "latlng": [
            49.46666666,
            -2.58333333
        ],
        "name": "Guernsey",
        "nativeName": "Guernsey",
        "numericCode": "831",
        "population": 62999,
        "region": "Europe",
        "regionalBlocs": [],
        "subregion": "Northern Europe",
        "timezones": [
            "UTC+00:00"
        ],
        "topLevelDomain": [
            ".gg"
        ],
        "translations": {
            "br": "Guernsey",
            "de": "Guernsey",
            "es": "Guernsey",
            "fa": "گرنزی",
            "fr": "Guernesey",
            "hr": "Guernsey",
            "it": "Guernsey",
            "ja": "ガーンジー",
            "nl": "Guernsey",
            "pt": "Guernsey",
            "pl": "Guernsey",
            "cs": "Guernsey",
            "ru": "Guernsey",
            "zh": "根西岛",
            "hu": "Guernsey",
            "se": "Guernsey"
        },
        "cioc": ""
    },
    {
        "alpha2Code": "GN",
        "alpha3Code": "GIN",
        "altSpellings": [
            "GN",
            "Republic of Guinea",
            "République de Guinée"
        ],
        "area": 245857,
        "borders": [
            "CIV",
            "GNB",
            "LBR",
            "MLI",
            "SEN",
            "SLE"
        ],
        "callingCodes": [
            "224"
        ],
        "capital": "Conakry",
        "currencies": [
            {
                "code": "GNF",
                "name": "Guinean franc",
                "symbol": "Fr"
            }
        ],
        "demonym": "Guinean",
        "flag": "https://restcountries.eu/data/gin.svg",
        "gini": 39.4,
        "languages": [
            {
                "iso639_1": "fr",
                "iso639_2": "fra",
                "name": "French",
                "nativeName": "français"
            },
            {
                "iso639_1": "ff",
                "iso639_2": "ful",
                "name": "Fula",
                "nativeName": "Fulfulde"
            }
        ],
        "latlng": [
            11,
            -10
        ],
        "name": "Guinea",
        "nativeName": "Guinée",
        "numericCode": "324",
        "population": 13132792,
        "region": "Africa",
        "regionalBlocs": [
            {
                "acronym": "AU",
                "name": "African Union",
                "otherNames": [
                    "الاتحاد الأفريقي",
                    "Union africaine",
                    "União Africana",
                    "Unión Africana",
                    "Umoja wa Afrika"
                ]
            }
        ],
        "subregion": "Western Africa",
        "timezones": [
            "UTC"
        ],
        "topLevelDomain": [
            ".gn"
        ],
        "translations": {
            "br": "Guiné",
            "de": "Guinea",
            "es": "Guinea",
            "fa": "گینه",
            "fr": "Guinée",
            "hr": "Gvineja",
            "it": "Guinea",
            "ja": "ギニア",
            "nl": "Guinee",
            "pt": "Guiné",
            "ru": "Гвинея",
            "pl": "Gwinea",
            "cs": "Guinea",
            "zh": "几内亚共和国",
            "hu": "Guinea",
            "se": "Guinea"
        },
        "cioc": "GUI"
    },
    {
        "alpha2Code": "GW",
        "alpha3Code": "GNB",
        "altSpellings": [
            "GW",
            "Republic of Guinea-Bissau",
            "República da Guiné-Bissau"
        ],
        "area": 36125,
        "borders": [
            "GIN",
            "SEN"
        ],
        "callingCodes": [
            "245"
        ],
        "capital": "Bissau",
        "currencies": [
            {
                "code": "XOF",
                "name": "West African CFA franc",
                "symbol": "Fr"
            }
        ],
        "demonym": "Guinea-Bissauan",
        "flag": "https://restcountries.eu/data/gnb.svg",
        "gini": 35.5,
        "languages": [
            {
                "iso639_1": "pt",
                "iso639_2": "por",
                "name": "Portuguese",
                "nativeName": "Português"
            }
        ],
        "latlng": [
            12,
            -15
        ],
        "name": "Guinea-Bissau",
        "nativeName": "Guiné-Bissau",
        "numericCode": "624",
        "population": 1967998,
        "region": "Africa",
        "regionalBlocs": [
            {
                "acronym": "AU",
                "name": "African Union",
                "otherNames": [
                    "الاتحاد الأفريقي",
                    "Union africaine",
                    "União Africana",
                    "Unión Africana",
                    "Umoja wa Afrika"
                ]
            }
        ],
        "subregion": "Western Africa",
        "timezones": [
            "UTC"
        ],
        "topLevelDomain": [
            ".gw"
        ],
        "translations": {
            "br": "Guiné-Bissau",
            "de": "Guinea-Bissau",
            "es": "Guinea-Bisáu",
            "fa": "گینه بیسائو",
            "fr": "Guinée-Bissau",
            "hr": "Gvineja Bisau",
            "it": "Guinea-Bissau",
            "ja": "ギニアビサウ",
            "nl": "Guinee-Bissau",
            "pt": "Guiné-Bissau",
            "ru": "Гвинея-Бисау",
            "pl": "Gwinea Bissau",
            "cs": "Guinea-Bissau",
            "zh": "几内亚比绍共和国",
            "hu": "Bissau-Guinea",
            "se": "Guinea-Bissau"
        },
        "cioc": "GBS"
    },
    {
        "alpha2Code": "GY",
        "alpha3Code": "GUY",
        "altSpellings": [
            "GY",
            "Co-operative Republic of Guyana"
        ],
        "area": 214969,
        "borders": [
            "BRA",
            "SUR",
            "VEN"
        ],
        "callingCodes": [
            "592"
        ],
        "capital": "Georgetown",
        "currencies": [
            {
                "code": "GYD",
                "name": "Guyanese dollar",
                "symbol": "$"
            }
        ],
        "demonym": "Guyanese",
        "flag": "https://restcountries.eu/data/guy.svg",
        "gini": 44.5,
        "languages": [
            {
                "iso639_1": "en",
                "iso639_2": "eng",
                "name": "English",
                "nativeName": "English"
            }
        ],
        "latlng": [
            5,
            -59
        ],
        "name": "Guyana",
        "nativeName": "Guyana",
        "numericCode": "328",
        "population": 786559,
        "region": "Americas",
        "regionalBlocs": [
            {
                "acronym": "CARICOM",
                "name": "Caribbean Community",
                "otherNames": [
                    "Comunidad del Caribe",
                    "Communauté Caribéenne",
                    "Caribische Gemeenschap"
                ]
            },
            {
                "acronym": "USAN",
                "name": "Union of South American Nations",
                "otherAcronyms": [
                    "UNASUR",
                    "UNASUL",
                    "UZAN"
                ],
                "otherNames": [
                    "Unión de Naciones Suramericanas",
                    "União de Nações Sul-Americanas",
                    "Unie van Zuid-Amerikaanse Naties",
                    "South American Union"
                ]
            }
        ],
        "subregion": "South America",
        "timezones": [
            "UTC-04:00"
        ],
        "topLevelDomain": [
            ".gy"
        ],
        "translations": {
            "br": "Guiana",
            "de": "Guyana",
            "es": "Guyana",
            "fa": "گویان",
            "fr": "Guyane",
            "hr": "Gvajana",
            "it": "Guyana",
            "ja": "ガイアナ",
            "nl": "Guyana",
            "pt": "Guiana",
            "ru": "Гайана",
            "pl": "Gujana",
            "cs": "Guyana",
            "zh": "圭亚那共和国",
            "hu": "Guyana",
            "se": "Guyana"
        },
        "cioc": "GUY"
    },
    {
        "alpha2Code": "HT",
        "alpha3Code": "HTI",
        "altSpellings": [
            "HT",
            "Republic of Haiti",
            "République d'Haïti",
            "Repiblik Ayiti"
        ],
        "area": 27750,
        "borders": [
            "DOM"
        ],
        "callingCodes": [
            "509"
        ],
        "capital": "Port-au-Prince",
        "currencies": [
            {
                "code": "HTG",
                "name": "Haitian gourde",
                "symbol": "G"
            }
        ],
        "demonym": "Haitian",
        "flag": "https://restcountries.eu/data/hti.svg",
        "gini": 59.2,
        "languages": [
            {
                "iso639_1": "fr",
                "iso639_2": "fra",
                "name": "French",
                "nativeName": "français"
            },
            {
                "iso639_1": "ht",
                "iso639_2": "hat",
                "name": "Haitian",
                "nativeName": "Kreyòl ayisyen"
            }
        ],
        "latlng": [
            19,
            -72.41666666
        ],
        "name": "Haiti",
        "nativeName": "Haïti",
        "numericCode": "332",
        "population": 11402533,
        "region": "Americas",
        "regionalBlocs": [
            {
                "acronym": "CARICOM",
                "name": "Caribbean Community",
                "otherNames": [
                    "Comunidad del Caribe",
                    "Communauté Caribéenne",
                    "Caribische Gemeenschap"
                ]
            }
        ],
        "subregion": "Caribbean",
        "timezones": [
            "UTC-05:00"
        ],
        "topLevelDomain": [
            ".ht"
        ],
        "translations": {
            "br": "Haiti",
            "de": "Haiti",
            "es": "Haiti",
            "fa": "هائیتی",
            "fr": "Haïti",
            "hr": "Haiti",
            "it": "Haiti",
            "ja": "ハイチ",
            "nl": "Haïti",
            "pt": "Haiti",
            "ru": "Гаити",
            "pl": "Haiti",
            "cs": "Haiti",
            "zh": "海地共和国",
            "hu": "Haiti",
            "se": "Haiti"
        },
        "cioc": "HAI"
    },
    {
        "alpha2Code": "HM",
        "alpha3Code": "HMD",
        "altSpellings": [
            "HM"
        ],
        "area": 412,
        "borders": [],
        "callingCodes": [
            "672"
        ],
        "capital": "",
        "currencies": [
            {
                "code": "AUD",
                "name": "Australian dollar",
                "symbol": "$"
            }
        ],
        "demonym": "Heard and McDonald Islander",
        "flag": "https://restcountries.eu/data/hmd.svg",
        "languages": [
            {
                "iso639_1": "en",
                "iso639_2": "eng",
                "name": "English",
                "nativeName": "English"
            }
        ],
        "latlng": [
            -53.1,
            72.51666666
        ],
        "name": "Heard Island and McDonald Islands",
        "nativeName": "Heard Island and McDonald Islands",
        "numericCode": "334",
        "population": 0,
        "region": "Polar",
        "regionalBlocs": [],
        "subregion": "",
        "timezones": [
            "UTC+05:00"
        ],
        "topLevelDomain": [
            ".hm",
            ".aq"
        ],
        "translations": {
            "br": "Ilha Heard e Ilhas McDonald",
            "de": "Heard und die McDonaldinseln",
            "es": "Islas Heard y McDonald",
            "fa": "جزیره هرد و جزایر مک‌دونالد",
            "fr": "Îles Heard-et-MacDonald",
            "hr": "Otok Heard i otočje McDonald",
            "it": "Isole Heard e McDonald",
            "ja": "ハード島とマクドナルド諸島",
            "nl": "Heard- en McDonaldeilanden",
            "pt": "Ilha Heard e Ilhas McDonald",
            "pl": "Wyspy Heard i McDonald",
            "cs": "Heardův ostrov a McDonaldovy ostrovy",
            "ru": "Heard Island and McDonald Islands",
            "zh": "赫德岛和麦当劳群岛",
            "hu": "Heard-sziget és McDonald-szigetek",
            "se": "Heard- och McDonaldöarna"
        },
        "cioc": ""
    },
    {
        "alpha2Code": "VA",
        "alpha3Code": "VAT",
        "altSpellings": [
            "Sancta Sedes",
            "Vatican",
            "The Vatican"
        ],
        "area": 0.44,
        "borders": [
            "ITA"
        ],
        "callingCodes": [
            "379"
        ],
        "capital": "Vatican City",
        "currencies": [
            {
                "code": "EUR",
                "name": "Euro",
                "symbol": "€"
            }
        ],
        "demonym": "",
        "flag": "https://restcountries.eu/data/vat.svg",
        "gini": null,
        "languages": [
            {
                "iso639_1": "la",
                "iso639_2": "lat",
                "name": "Latin",
                "nativeName": "latine"
            },
            {
                "iso639_1": "it",
                "iso639_2": "ita",
                "name": "Italian",
                "nativeName": "Italiano"
            },
            {
                "iso639_1": "fr",
                "iso639_2": "fra",
                "name": "French",
                "nativeName": "français"
            },
            {
                "iso639_1": "de",
                "iso639_2": "deu",
                "name": "German",
                "nativeName": "Deutsch"
            }
        ],
        "latlng": [
            41.9,
            12.45
        ],
        "name": "Vatican City",
        "nativeName": "Città del Vaticano",
        "numericCode": "336",
        "population": 451,
        "region": "Europe",
        "regionalBlocs": [],
        "subregion": "Southern Europe",
        "timezones": [
            "UTC+01:00"
        ],
        "topLevelDomain": [
            ".va"
        ],
        "translations": {
            "br": "Vaticano",
            "de": "Vatikanstadt",
            "es": "Santa Sede",
            "fa": "سریر مقدس",
            "fr": "Vatican",
            "hr": "Sveta Stolica",
            "it": "Santa Sede",
            "ja": "聖座",
            "nl": "Vaticaanstad",
            "pt": "Vaticano",
            "pl": "Stolica Apostolska",
            "cs": "Svatý stolec",
            "ru": "Holy See",
            "zh": "梵蒂冈城国",
            "hu": "Vatikán",
            "se": "Vatikanstaten"
        },
        "cioc": ""
    },
    {
        "alpha2Code": "HN",
        "alpha3Code": "HND",
        "altSpellings": [
            "HN",
            "Republic of Honduras",
            "República de Honduras"
        ],
        "area": 112492,
        "borders": [
            "GTM",
            "SLV",
            "NIC"
        ],
        "callingCodes": [
            "504"
        ],
        "capital": "Tegucigalpa",
        "currencies": [
            {
                "code": "HNL",
                "name": "Honduran lempira",
                "symbol": "L"
            }
        ],
        "demonym": "Honduran",
        "flag": "https://restcountries.eu/data/hnd.svg",
        "gini": 57,
        "languages": [
            {
                "iso639_1": "es",
                "iso639_2": "spa",
                "name": "Spanish",
                "nativeName": "Español"
            }
        ],
        "latlng": [
            15,
            -86.5
        ],
        "name": "Honduras",
        "nativeName": "Honduras",
        "numericCode": "340",
        "population": 9904608,
        "region": "Americas",
        "regionalBlocs": [
            {
                "acronym": "CAIS",
                "name": "Central American Integration System",
                "otherAcronyms": [
                    "SICA"
                ],
                "otherNames": [
                    "Sistema de la Integración Centroamericana,"
                ]
            }
        ],
        "subregion": "Central America",
        "timezones": [
            "UTC-06:00"
        ],
        "topLevelDomain": [
            ".hn"
        ],
        "translations": {
            "br": "Honduras",
            "de": "Honduras",
            "es": "Honduras",
            "fa": "هندوراس",
            "fr": "Honduras",
            "hr": "Honduras",
            "it": "Honduras",
            "ja": "ホンジュラス",
            "nl": "Honduras",
            "pt": "Honduras",
            "ru": "Гондурас",
            "pl": "Honduras",
            "cs": "Honduras",
            "zh": "洪都拉斯共和国",
            "hu": "Honduras",
            "se": "Honduras"
        },
        "cioc": "HON"
    },
    {
        "alpha2Code": "HK",
        "alpha3Code": "HKG",
        "altSpellings": [
            "HK",
            "香港"
        ],
        "area": 1104,
        "borders": [
            "CHN"
        ],
        "callingCodes": [
            "852"
        ],
        "capital": "City of Victoria",
        "currencies": [
            {
                "code": "HKD",
                "name": "Hong Kong dollar",
                "symbol": "$"
            }
        ],
        "demonym": "Chinese",
        "flag": "https://restcountries.eu/data/hkg.svg",
        "gini": 53.3,
        "languages": [
            {
                "iso639_1": "en",
                "iso639_2": "eng",
                "name": "English",
                "nativeName": "English"
            },
            {
                "iso639_1": "zh",
                "iso639_2": "zho",
                "name": "Chinese",
                "nativeName": "中文 (Zhōngwén)"
            }
        ],
        "latlng": [
            22.25,
            114.16666666
        ],
        "name": "Hong Kong",
        "nativeName": "香港",
        "numericCode": "344",
        "population": 7481800,
        "region": "Asia",
        "regionalBlocs": [],
        "subregion": "Eastern Asia",
        "timezones": [
            "UTC+08:00"
        ],
        "topLevelDomain": [
            ".hk"
        ],
        "translations": {
            "br": "Hong Kong",
            "de": "Hong Kong",
            "es": "Hong Kong",
            "fa": "هنگ‌کنگ",
            "fr": "Hong Kong",
            "hr": "Hong Kong",
            "it": "Hong Kong",
            "ja": "香港",
            "nl": "Hongkong",
            "pt": "Hong Kong",
            "pl": "Hongkong",
            "cs": "Hongkong",
            "ru": "Hong Kong",
            "zh": "香港",
            "hu": "Hong Kong",
            "se": "Hongkong"
        },
        "cioc": "HKG"
    },
    {
        "alpha2Code": "HU",
        "alpha3Code": "HUN",
        "altSpellings": [
            "HU"
        ],
        "area": 93028,
        "borders": [
            "AUT",
            "HRV",
            "ROU",
            "SRB",
            "SVK",
            "SVN",
            "UKR"
        ],
        "callingCodes": [
            "36"
        ],
        "capital": "Budapest",
        "currencies": [
            {
                "code": "HUF",
                "name": "Hungarian forint",
                "symbol": "Ft"
            }
        ],
        "demonym": "Hungarian",
        "flag": "https://restcountries.eu/data/hun.svg",
        "gini": 31.2,
        "languages": [
            {
                "iso639_1": "hu",
                "iso639_2": "hun",
                "name": "Hungarian",
                "nativeName": "magyar"
            }
        ],
        "latlng": [
            47,
            20
        ],
        "name": "Hungary",
        "nativeName": "Magyarország",
        "numericCode": "348",
        "population": 9749763,
        "region": "Europe",
        "regionalBlocs": [
            {
                "acronym": "EU",
                "name": "European Union"
            }
        ],
        "subregion": "Eastern Europe",
        "timezones": [
            "UTC+01:00"
        ],
        "topLevelDomain": [
            ".hu"
        ],
        "translations": {
            "br": "Hungria",
            "de": "Ungarn",
            "es": "Hungría",
            "fa": "مجارستان",
            "fr": "Hongrie",
            "hr": "Mađarska",
            "it": "Ungheria",
            "ja": "ハンガリー",
            "nl": "Hongarije",
            "pt": "Hungria",
            "ru": "Венгрия",
            "pl": "Węgry",
            "cs": "Maďarsko",
            "zh": "匈牙利",
            "hu": "Magyarország",
            "se": "Ungern"
        },
        "cioc": "HUN"
    },
    {
        "alpha2Code": "IS",
        "alpha3Code": "ISL",
        "altSpellings": [
            "IS",
            "Island",
            "Republic of Iceland",
            "Lýðveldið Ísland"
        ],
        "area": 103000,
        "borders": [],
        "callingCodes": [
            "354"
        ],
        "capital": "Reykjavík",
        "currencies": [
            {
                "code": "ISK",
                "name": "Icelandic króna",
                "symbol": "kr"
            }
        ],
        "demonym": "Icelander",
        "flag": "https://restcountries.eu/data/isl.svg",
        "gini": null,
        "languages": [
            {
                "iso639_1": "is",
                "iso639_2": "isl",
                "name": "Icelandic",
                "nativeName": "Íslenska"
            }
        ],
        "latlng": [
            65,
            -18
        ],
        "name": "Iceland",
        "nativeName": "Ísland",
        "numericCode": "352",
        "population": 366425,
        "region": "Europe",
        "regionalBlocs": [
            {
                "acronym": "EFTA",
                "name": "European Free Trade Association"
            }
        ],
        "subregion": "Northern Europe",
        "timezones": [
            "UTC"
        ],
        "topLevelDomain": [
            ".is"
        ],
        "translations": {
            "br": "Islândia",
            "de": "Island",
            "es": "Islandia",
            "fa": "ایسلند",
            "fr": "Islande",
            "hr": "Island",
            "it": "Islanda",
            "ja": "アイスランド",
            "nl": "IJsland",
            "pt": "Islândia",
            "ru": "Исландия",
            "pl": "Islandia",
            "cs": "Island",
            "zh": "冰岛",
            "hu": "Izland",
            "se": "Island"
        },
        "cioc": "ISL"
    },
    {
        "alpha2Code": "IN",
        "alpha3Code": "IND",
        "altSpellings": [
            "IN",
            "Bhārat",
            "Republic of India",
            "Bharat Ganrajya"
        ],
        "area": 3287590,
        "borders": [
            "AFG",
            "BGD",
            "BTN",
            "MMR",
            "CHN",
            "NPL",
            "PAK",
            "LKA"
        ],
        "callingCodes": [
            "91"
        ],
        "capital": "New Delhi",
        "currencies": [
            {
                "code": "INR",
                "name": "Indian rupee",
                "symbol": "₹"
            }
        ],
        "demonym": "Indian",
        "flag": "https://restcountries.eu/data/ind.svg",
        "gini": 33.4,
        "languages": [
            {
                "iso639_1": "hi",
                "iso639_2": "hin",
                "name": "Hindi",
                "nativeName": "हिन्दी"
            },
            {
                "iso639_1": "en",
                "iso639_2": "eng",
                "name": "English",
                "nativeName": "English"
            }
        ],
        "latlng": [
            20,
            77
        ],
        "name": "India",
        "nativeName": "भारत",
        "numericCode": "356",
        "population": 1380004385,
        "region": "Asia",
        "regionalBlocs": [
            {
                "acronym": "SAARC",
                "name": "South Asian Association for Regional Cooperation"
            }
        ],
        "subregion": "Southern Asia",
        "timezones": [
            "UTC+05:30"
        ],
        "topLevelDomain": [
            ".in"
        ],
        "translations": {
            "br": "Índia",
            "de": "Indien",
            "es": "India",
            "fa": "هند",
            "fr": "Inde",
            "hr": "Indija",
            "it": "India",
            "ja": "インド",
            "nl": "India",
            "pt": "Índia",
            "ru": "Индия",
            "pl": "Indie",
            "cs": "Indie",
            "zh": "印度共和国",
            "hu": "India",
            "se": "Indien"
        },
        "cioc": "IND"
    },
    {
        "alpha2Code": "ID",
        "alpha3Code": "IDN",
        "altSpellings": [
            "ID",
            "Republic of Indonesia",
            "Republik Indonesia"
        ],
        "area": 1904569,
        "borders": [
            "TLS",
            "MYS",
            "PNG"
        ],
        "callingCodes": [
            "62"
        ],
        "capital": "Jakarta",
        "currencies": [
            {
                "code": "IDR",
                "name": "Indonesian rupiah",
                "symbol": "Rp"
            }
        ],
        "demonym": "Indonesian",
        "flag": "https://restcountries.eu/data/idn.svg",
        "gini": 34,
        "languages": [
            {
                "iso639_1": "id",
                "iso639_2": "ind",
                "name": "Indonesian",
                "nativeName": "Bahasa Indonesia"
            }
        ],
        "latlng": [
            -5,
            120
        ],
        "name": "Indonesia",
        "nativeName": "Indonesia",
        "numericCode": "360",
        "population": 273523621,
        "region": "Asia",
        "regionalBlocs": [
            {
                "acronym": "ASEAN",
                "name": "Association of Southeast Asian Nations"
            }
        ],
        "subregion": "South-Eastern Asia",
        "timezones": [
            "UTC+07:00",
            "UTC+08:00",
            "UTC+09:00"
        ],
        "topLevelDomain": [
            ".id"
        ],
        "translations": {
            "br": "Indonésia",
            "de": "Indonesien",
            "es": "Indonesia",
            "fa": "اندونزی",
            "fr": "Indonésie",
            "hr": "Indonezija",
            "it": "Indonesia",
            "ja": "インドネシア",
            "nl": "Indonesië",
            "pt": "Indonésia",
            "ru": "Индонезия",
            "pl": "Indonezja",
            "cs": "Indonésie",
            "zh": "印度尼西亚共和国",
            "hu": "Indonézia",
            "se": "Indonesien"
        },
        "cioc": "INA"
    },
    {
        "alpha2Code": "CI",
        "alpha3Code": "CIV",
        "altSpellings": [
            "CI",
            "Ivory Coast",
            "Republic of Côte d'Ivoire",
            "République de Côte d'Ivoire"
        ],
        "area": 322463,
        "borders": [
            "BFA",
            "GHA",
            "GIN",
            "LBR",
            "MLI"
        ],
        "callingCodes": [
            "225"
        ],
        "capital": "Yamoussoukro",
        "currencies": [
            {
                "code": "XOF",
                "name": "West African CFA franc",
                "symbol": "Fr"
            }
        ],
        "demonym": "Ivorian",
        "flag": "https://restcountries.eu/data/civ.svg",
        "gini": 41.5,
        "languages": [
            {
                "iso639_1": "fr",
                "iso639_2": "fra",
                "name": "French",
                "nativeName": "français"
            }
        ],
        "latlng": [
            8,
            -5
        ],
        "name": "Côte d'Ivoire",
        "nativeName": "Côte d'Ivoire",
        "numericCode": "384",
        "population": 26378275,
        "region": "Africa",
        "regionalBlocs": [
            {
                "acronym": "AU",
                "name": "African Union",
                "otherNames": [
                    "الاتحاد الأفريقي",
                    "Union africaine",
                    "União Africana",
                    "Unión Africana",
                    "Umoja wa Afrika"
                ]
            }
        ],
        "subregion": "Western Africa",
        "timezones": [
            "UTC"
        ],
        "topLevelDomain": [
            ".ci"
        ],
        "translations": {
            "br": "Costa do Marfim",
            "de": "Elfenbeinküste",
            "es": "Costa de Marfil",
            "fa": "ساحل عاج",
            "fr": "Côte d'Ivoire",
            "hr": "Obala Bjelokosti",
            "it": "Costa D'Avorio",
            "ja": "コートジボワール",
            "nl": "Ivoorkust",
            "pt": "Costa do Marfim",
            "ru": "Кот-д’Ивуар",
            "pl": "Wybrzeże Kości Słoniowej",
            "cs": "Pobřeží slonoviny",
            "zh": "科特迪瓦共和国",
            "hu": "Elefántcsontpart",
            "se": "Elfenbenskusten"
        },
        "cioc": "CIV"
    },
    {
        "alpha2Code": "IR",
        "alpha3Code": "IRN",
        "altSpellings": [
            "IR",
            "Islamic Republic of Iran",
            "Jomhuri-ye Eslāmi-ye Irān"
        ],
        "area": 1648195,
        "borders": [
            "AFG",
            "ARM",
            "AZE",
            "IRQ",
            "PAK",
            "TUR",
            "TKM"
        ],
        "callingCodes": [
            "98"
        ],
        "capital": "Tehran",
        "currencies": [
            {
                "code": "IRR",
                "name": "Iranian rial",
                "symbol": "﷼"
            }
        ],
        "demonym": "Iranian",
        "flag": "https://restcountries.eu/data/irn.svg",
        "gini": 38.3,
        "languages": [
            {
                "iso639_1": "fa",
                "iso639_2": "fas",
                "name": "Persian (Farsi)",
                "nativeName": "فارسی"
            }
        ],
        "latlng": [
            32,
            53
        ],
        "name": "Iran (Islamic Republic of)",
        "nativeName": "ایران",
        "numericCode": "364",
        "population": 83992953,
        "region": "Asia",
        "regionalBlocs": [],
        "subregion": "Southern Asia",
        "timezones": [
            "UTC+03:30"
        ],
        "topLevelDomain": [
            ".ir"
        ],
        "translations": {
            "br": "Irã",
            "de": "Iran",
            "es": "Iran",
            "fa": "ایران",
            "fr": "Iran",
            "hr": "Iran",
            "ja": "イラン・イスラム共和国",
            "nl": "Iran",
            "pt": "Irão",
            "ru": "Иран",
            "pl": "Iran",
            "cs": "Írán",
            "it": "Iran (Islamic Republic of)",
            "zh": "伊朗伊斯兰共和国",
            "hu": "Irán",
            "se": "Iran"
        },
        "cioc": "IRI"
    },
    {
        "alpha2Code": "IQ",
        "alpha3Code": "IRQ",
        "altSpellings": [
            "IQ",
            "Republic of Iraq",
            "Jumhūriyyat al-‘Irāq"
        ],
        "area": 438317,
        "borders": [
            "IRN",
            "JOR",
            "KWT",
            "SAU",
            "SYR",
            "TUR"
        ],
        "callingCodes": [
            "964"
        ],
        "capital": "Baghdad",
        "currencies": [
            {
                "code": "IQD",
                "name": "Iraqi dinar",
                "symbol": "ع.د"
            }
        ],
        "demonym": "Iraqi",
        "flag": "https://restcountries.eu/data/irq.svg",
        "gini": 30.9,
        "languages": [
            {
                "iso639_1": "ar",
                "iso639_2": "ara",
                "name": "Arabic",
                "nativeName": "العربية"
            },
            {
                "iso639_1": "ku",
                "iso639_2": "kur",
                "name": "Kurdish",
                "nativeName": "Kurdî"
            }
        ],
        "latlng": [
            33,
            44
        ],
        "name": "Iraq",
        "nativeName": "العراق",
        "numericCode": "368",
        "population": 40222503,
        "region": "Asia",
        "regionalBlocs": [
            {
                "acronym": "AL",
                "name": "Arab League",
                "otherNames": [
                    "جامعة الدول العربية",
                    "Jāmiʻat ad-Duwal al-ʻArabīyah",
                    "League of Arab States"
                ]
            }
        ],
        "subregion": "Western Asia",
        "timezones": [
            "UTC+03:00"
        ],
        "topLevelDomain": [
            ".iq"
        ],
        "translations": {
            "br": "Iraque",
            "de": "Irak",
            "es": "Irak",
            "fa": "عراق",
            "fr": "Irak",
            "hr": "Irak",
            "it": "Iraq",
            "ja": "イラク",
            "nl": "Irak",
            "pt": "Iraque",
            "ru": "Ирак",
            "pl": "Irak",
            "cs": "Irák",
            "zh": "伊拉克共和国",
            "hu": "Irak",
            "se": "Irak"
        },
        "cioc": "IRQ"
    },
    {
        "alpha2Code": "IE",
        "alpha3Code": "IRL",
        "altSpellings": [
            "IE",
            "Éire",
            "Republic of Ireland",
            "Poblacht na hÉireann"
        ],
        "area": 70273,
        "borders": [
            "GBR"
        ],
        "callingCodes": [
            "353"
        ],
        "capital": "Dublin",
        "currencies": [
            {
                "code": "EUR",
                "name": "Euro",
                "symbol": "€"
            }
        ],
        "demonym": "Irish",
        "flag": "https://restcountries.eu/data/irl.svg",
        "gini": 34.3,
        "languages": [
            {
                "iso639_1": "ga",
                "iso639_2": "gle",
                "name": "Irish",
                "nativeName": "Gaeilge"
            },
            {
                "iso639_1": "en",
                "iso639_2": "eng",
                "name": "English",
                "nativeName": "English"
            }
        ],
        "latlng": [
            53,
            -8
        ],
        "name": "Ireland",
        "nativeName": "Éire",
        "numericCode": "372",
        "population": 4994724,
        "region": "Europe",
        "regionalBlocs": [
            {
                "acronym": "EU",
                "name": "European Union"
            }
        ],
        "subregion": "Northern Europe",
        "timezones": [
            "UTC"
        ],
        "topLevelDomain": [
            ".ie"
        ],
        "translations": {
            "br": "Irlanda",
            "de": "Irland",
            "es": "Irlanda",
            "fa": "ایرلند",
            "fr": "Irlande",
            "hr": "Irska",
            "it": "Irlanda",
            "ja": "アイルランド",
            "nl": "Ierland",
            "pt": "Irlanda",
            "ru": "Ирландия",
            "pl": "Irlandia",
            "cs": "Irsko",
            "zh": "爱尔兰共和国",
            "hu": "Írország",
            "se": "Irland"
        },
        "cioc": "IRL"
    },
    {
        "alpha2Code": "IM",
        "alpha3Code": "IMN",
        "altSpellings": [
            "IM",
            "Ellan Vannin",
            "Mann",
            "Mannin"
        ],
        "area": 572,
        "borders": [],
        "callingCodes": [
            "44"
        ],
        "capital": "Douglas",
        "currencies": [
            {
                "code": "GBP",
                "name": "British pound",
                "symbol": "£"
            },
            {
                "code": "IMP[G]",
                "name": "Manx pound",
                "symbol": "£"
            }
        ],
        "demonym": "Manx",
        "flag": "https://restcountries.eu/data/imn.svg",
        "languages": [
            {
                "iso639_1": "en",
                "iso639_2": "eng",
                "name": "English",
                "nativeName": "English"
            },
            {
                "iso639_1": "gv",
                "iso639_2": "glv",
                "name": "Manx",
                "nativeName": "Gaelg"
            }
        ],
        "latlng": [
            54.25,
            -4.5
        ],
        "name": "Isle of Man",
        "nativeName": "Isle of Man",
        "numericCode": "833",
        "population": 85032,
        "region": "Europe",
        "regionalBlocs": [
            {
                "acronym": "EU",
                "name": "European Union"
            }
        ],
        "subregion": "Northern Europe",
        "timezones": [
            "UTC+00:00"
        ],
        "topLevelDomain": [
            ".im"
        ],
        "translations": {
            "br": "Ilha de Man",
            "de": "Insel Man",
            "es": "Isla de Man",
            "fa": "جزیره من",
            "fr": "Île de Man",
            "hr": "Otok Man",
            "it": "Isola di Man",
            "ja": "マン島",
            "nl": "Isle of Man",
            "pt": "Ilha de Man",
            "pl": "Wyspa Man",
            "cs": "Ostrov Man",
            "ru": "Isle of Man",
            "zh": "马恩岛",
            "hu": "Man",
            "se": "Isle of Man"
        },
        "cioc": ""
    },
    {
        "alpha2Code": "IL",
        "alpha3Code": "ISR",
        "altSpellings": [
            "IL",
            "State of Israel",
            "Medīnat Yisrā'el"
        ],
        "area": 20770,
        "borders": [
            "EGY",
            "JOR",
            "LBN",
            "SYR"
        ],
        "callingCodes": [
            "972"
        ],
        "capital": "Jerusalem",
        "currencies": [
            {
                "code": "ILS",
                "name": "Israeli new shekel",
                "symbol": "₪"
            }
        ],
        "demonym": "Israeli",
        "flag": "https://restcountries.eu/data/isr.svg",
        "gini": 39.2,
        "languages": [
            {
                "iso639_1": "he",
                "iso639_2": "heb",
                "name": "Hebrew (modern)",
                "nativeName": "עברית"
            },
            {
                "iso639_1": "ar",
                "iso639_2": "ara",
                "name": "Arabic",
                "nativeName": "العربية"
            }
        ],
        "latlng": [
            31.5,
            34.75
        ],
        "name": "Israel",
        "nativeName": "יִשְׂרָאֵל",
        "numericCode": "376",
        "population": 9216900,
        "region": "Asia",
        "regionalBlocs": [],
        "subregion": "Western Asia",
        "timezones": [
            "UTC+02:00"
        ],
        "topLevelDomain": [
            ".il"
        ],
        "translations": {
            "br": "Israel",
            "de": "Israel",
            "es": "Israel",
            "fa": "اسرائیل",
            "fr": "Israël",
            "hr": "Izrael",
            "it": "Israele",
            "ja": "イスラエル",
            "nl": "Israël",
            "pt": "Israel",
            "ru": "Израиль",
            "pl": "Izrael",
            "cs": "Izrael",
            "zh": "以色列国",
            "hu": "Izrael",
            "se": "Israel"
        },
        "cioc": "ISR"
    },
    {
        "alpha2Code": "IT",
        "alpha3Code": "ITA",
        "altSpellings": [
            "IT",
            "Italian Republic",
            "Repubblica italiana"
        ],
        "area": 301336,
        "borders": [
            "AUT",
            "FRA",
            "SMR",
            "SVN",
            "CHE",
            "VAT"
        ],
        "callingCodes": [
            "39"
        ],
        "capital": "Rome",
        "currencies": [
            {
                "code": "EUR",
                "name": "Euro",
                "symbol": "€"
            }
        ],
        "demonym": "Italian",
        "flag": "https://restcountries.eu/data/ita.svg",
        "gini": 36,
        "languages": [
            {
                "iso639_1": "it",
                "iso639_2": "ita",
                "name": "Italian",
                "nativeName": "Italiano"
            }
        ],
        "latlng": [
            42.83333333,
            12.83333333
        ],
        "name": "Italy",
        "nativeName": "Italia",
        "numericCode": "380",
        "population": 59554023,
        "region": "Europe",
        "regionalBlocs": [
            {
                "acronym": "EU",
                "name": "European Union"
            }
        ],
        "subregion": "Southern Europe",
        "timezones": [
            "UTC+01:00"
        ],
        "topLevelDomain": [
            ".it"
        ],
        "translations": {
            "br": "Itália",
            "de": "Italien",
            "es": "Italia",
            "fa": "ایتالیا",
            "fr": "Italie",
            "hr": "Italija",
            "it": "Italia",
            "ja": "イタリア",
            "nl": "Italië",
            "pt": "Itália",
            "ru": "Италия",
            "pl": "Włochy",
            "cs": "Itálie",
            "zh": "意大利共和国",
            "hu": "Olaszország",
            "se": "Italien"
        },
        "cioc": "ITA"
    },
    {
        "alpha2Code": "JM",
        "alpha3Code": "JAM",
        "altSpellings": [
            "JM"
        ],
        "area": 10991,
        "borders": [],
        "callingCodes": [
            "1"
        ],
        "capital": "Kingston",
        "currencies": [
            {
                "code": "JMD",
                "name": "Jamaican dollar",
                "symbol": "$"
            }
        ],
        "demonym": "Jamaican",
        "flag": "https://restcountries.eu/data/jam.svg",
        "gini": 45.5,
        "languages": [
            {
                "iso639_1": "en",
                "iso639_2": "eng",
                "name": "English",
                "nativeName": "English"
            }
        ],
        "latlng": [
            18.25,
            -77.5
        ],
        "name": "Jamaica",
        "nativeName": "Jamaica",
        "numericCode": "388",
        "population": 2961161,
        "region": "Americas",
        "regionalBlocs": [
            {
                "acronym": "CARICOM",
                "name": "Caribbean Community",
                "otherNames": [
                    "Comunidad del Caribe",
                    "Communauté Caribéenne",
                    "Caribische Gemeenschap"
                ]
            }
        ],
        "subregion": "Caribbean",
        "timezones": [
            "UTC-05:00"
        ],
        "topLevelDomain": [
            ".jm"
        ],
        "translations": {
            "br": "Jamaica",
            "de": "Jamaika",
            "es": "Jamaica",
            "fa": "جامائیکا",
            "fr": "Jamaïque",
            "hr": "Jamajka",
            "it": "Giamaica",
            "ja": "ジャマイカ",
            "nl": "Jamaica",
            "pt": "Jamaica",
            "ru": "Ямайка",
            "pl": "Jamajka",
            "cs": "Jamajka",
            "zh": "牙买加",
            "hu": "Jamaica",
            "se": "Jamaica"
        },
        "cioc": "JAM"
    },
    {
        "alpha2Code": "JP",
        "alpha3Code": "JPN",
        "altSpellings": [
            "JP",
            "Nippon",
            "Nihon"
        ],
        "area": 377930,
        "borders": [],
        "callingCodes": [
            "81"
        ],
        "capital": "Tokyo",
        "currencies": [
            {
                "code": "JPY",
                "name": "Japanese yen",
                "symbol": "¥"
            }
        ],
        "demonym": "Japanese",
        "flag": "https://restcountries.eu/data/jpn.svg",
        "gini": 38.1,
        "languages": [
            {
                "iso639_1": "ja",
                "iso639_2": "jpn",
                "name": "Japanese",
                "nativeName": "日本語 (にほんご)"
            }
        ],
        "latlng": [
            36,
            138
        ],
        "name": "Japan",
        "nativeName": "日本",
        "numericCode": "392",
        "population": 125836021,
        "region": "Asia",
        "regionalBlocs": [],
        "subregion": "Eastern Asia",
        "timezones": [
            "UTC+09:00"
        ],
        "topLevelDomain": [
            ".jp"
        ],
        "translations": {
            "br": "Japão",
            "de": "Japan",
            "es": "Japón",
            "fa": "ژاپن",
            "fr": "Japon",
            "hr": "Japan",
            "it": "Giappone",
            "ja": "日本",
            "nl": "Japan",
            "pt": "Japão",
            "ru": "Япония",
            "pl": "Japonia",
            "cs": "Japonsko",
            "zh": "日本国",
            "hu": "Japán",
            "se": "Japan"
        },
        "cioc": "JPN"
    },
    {
        "alpha2Code": "JE",
        "alpha3Code": "JEY",
        "altSpellings": [
            "JE",
            "Bailiwick of Jersey",
            "Bailliage de Jersey",
            "Bailliage dé Jèrri"
        ],
        "area": 116,
        "borders": [],
        "callingCodes": [
            "44"
        ],
        "capital": "Saint Helier",
        "currencies": [
            {
                "code": "GBP",
                "name": "British pound",
                "symbol": "£"
            },
            {
                "code": "JEP[G]",
                "name": "Jersey pound",
                "symbol": "£"
            }
        ],
        "demonym": "Channel Islander",
        "flag": "https://restcountries.eu/data/jey.svg",
        "languages": [
            {
                "iso639_1": "en",
                "iso639_2": "eng",
                "name": "English",
                "nativeName": "English"
            },
            {
                "iso639_1": "fr",
                "iso639_2": "fra",
                "name": "French",
                "nativeName": "français"
            }
        ],
        "latlng": [
            49.25,
            -2.16666666
        ],
        "name": "Jersey",
        "nativeName": "Jersey",
        "numericCode": "832",
        "population": 100800,
        "region": "Europe",
        "regionalBlocs": [],
        "subregion": "Northern Europe",
        "timezones": [
            "UTC+01:00"
        ],
        "topLevelDomain": [
            ".je"
        ],
        "translations": {
            "br": "Jersey",
            "de": "Jersey",
            "es": "Jersey",
            "fa": "جرزی",
            "fr": "Jersey",
            "hr": "Jersey",
            "it": "Isola di Jersey",
            "ja": "ジャージー",
            "nl": "Jersey",
            "pt": "Jersey",
            "pl": "Jersey",
            "cs": "Jersey",
            "ru": "Jersey",
            "zh": "泽西岛",
            "hu": "Jersey",
            "se": "Jersey"
        },
        "cioc": ""
    },
    {
        "alpha2Code": "JO",
        "alpha3Code": "JOR",
        "altSpellings": [
            "JO",
            "Hashemite Kingdom of Jordan",
            "al-Mamlakah al-Urdunīyah al-Hāshimīyah"
        ],
        "area": 89342,
        "borders": [
            "IRQ",
            "ISR",
            "SAU",
            "SYR"
        ],
        "callingCodes": [
            "962"
        ],
        "capital": "Amman",
        "currencies": [
            {
                "code": "JOD",
                "name": "Jordanian dinar",
                "symbol": "د.ا"
            }
        ],
        "demonym": "Jordanian",
        "flag": "https://restcountries.eu/data/jor.svg",
        "gini": 35.4,
        "languages": [
            {
                "iso639_1": "ar",
                "iso639_2": "ara",
                "name": "Arabic",
                "nativeName": "العربية"
            }
        ],
        "latlng": [
            31,
            36
        ],
        "name": "Jordan",
        "nativeName": "الأردن",
        "numericCode": "400",
        "population": 10203140,
        "region": "Asia",
        "regionalBlocs": [
            {
                "acronym": "AL",
                "name": "Arab League",
                "otherNames": [
                    "جامعة الدول العربية",
                    "Jāmiʻat ad-Duwal al-ʻArabīyah",
                    "League of Arab States"
                ]
            }
        ],
        "subregion": "Western Asia",
        "timezones": [
            "UTC+03:00"
        ],
        "topLevelDomain": [
            ".jo"
        ],
        "translations": {
            "br": "Jordânia",
            "de": "Jordanien",
            "es": "Jordania",
            "fa": "اردن",
            "fr": "Jordanie",
            "hr": "Jordan",
            "it": "Giordania",
            "ja": "ヨルダン",
            "nl": "Jordanië",
            "pt": "Jordânia",
            "ru": "Иордания",
            "pl": "Jordania",
            "cs": "Jordánsko",
            "zh": "约旦哈希姆王国",
            "hu": "Jordánia",
            "se": "Jordanien"
        },
        "cioc": "JOR"
    },
    {
        "alpha2Code": "KZ",
        "alpha3Code": "KAZ",
        "altSpellings": [
            "KZ",
            "Qazaqstan",
            "Казахстан",
            "Republic of Kazakhstan",
            "Қазақстан Республикасы",
            "Qazaqstan Respublïkası",
            "Республика Казахстан",
            "Respublika Kazakhstan"
        ],
        "area": 2724900,
        "borders": [
            "CHN",
            "KGZ",
            "RUS",
            "TKM",
            "UZB"
        ],
        "callingCodes": [
            "7"
        ],
        "capital": "Nur-Sultan",
        "currencies": [
            {
                "code": "KZT",
                "name": "Kazakhstani tenge",
                "symbol": "₸"
            }
        ],
        "demonym": "Kazakhstani",
        "flag": "https://restcountries.eu/data/kaz.svg",
        "gini": 29,
        "languages": [
            {
                "iso639_1": "kk",
                "iso639_2": "kaz",
                "name": "Kazakh",
                "nativeName": "қазақ тілі"
            },
            {
                "iso639_1": "ru",
                "iso639_2": "rus",
                "name": "Russian",
                "nativeName": "Русский"
            }
        ],
        "latlng": [
            48,
            68
        ],
        "name": "Kazakhstan",
        "nativeName": "Қазақстан",
        "numericCode": "398",
        "population": 18754440,
        "region": "Asia",
        "regionalBlocs": [
            {
                "acronym": "EEU",
                "name": "Eurasian Economic Union",
                "otherAcronyms": [
                    "EAEU"
                ]
            }
        ],
        "subregion": "Central Asia",
        "timezones": [
            "UTC+05:00",
            "UTC+06:00"
        ],
        "topLevelDomain": [
            ".kz",
            ".қаз"
        ],
        "translations": {
            "br": "Cazaquistão",
            "de": "Kasachstan",
            "es": "Kazajistán",
            "fa": "قزاقستان",
            "fr": "Kazakhstan",
            "hr": "Kazahstan",
            "it": "Kazakistan",
            "ja": "カザフスタン",
            "nl": "Kazachstan",
            "pt": "Cazaquistão",
            "ru": "Казахстан",
            "pl": "Kazachstan",
            "cs": "Kazachstán",
            "zh": "哈萨克斯坦共和国",
            "hu": "Kazahsztán",
            "se": "Kazakstan"
        },
        "cioc": "KAZ"
    },
    {
        "alpha2Code": "KE",
        "alpha3Code": "KEN",
        "altSpellings": [
            "KE",
            "Republic of Kenya",
            "Jamhuri ya Kenya"
        ],
        "area": 580367,
        "borders": [
            "ETH",
            "SOM",
            "SSD",
            "TZA",
            "UGA"
        ],
        "callingCodes": [
            "254"
        ],
        "capital": "Nairobi",
        "currencies": [
            {
                "code": "KES",
                "name": "Kenyan shilling",
                "symbol": "Sh"
            }
        ],
        "demonym": "Kenyan",
        "flag": "https://restcountries.eu/data/ken.svg",
        "gini": 47.7,
        "languages": [
            {
                "iso639_1": "en",
                "iso639_2": "eng",
                "name": "English",
                "nativeName": "English"
            },
            {
                "iso639_1": "sw",
                "iso639_2": "swa",
                "name": "Swahili",
                "nativeName": "Kiswahili"
            }
        ],
        "latlng": [
            1,
            38
        ],
        "name": "Kenya",
        "nativeName": "Kenya",
        "numericCode": "404",
        "population": 53771300,
        "region": "Africa",
        "regionalBlocs": [
            {
                "acronym": "AU",
                "name": "African Union",
                "otherNames": [
                    "الاتحاد الأفريقي",
                    "Union africaine",
                    "União Africana",
                    "Unión Africana",
                    "Umoja wa Afrika"
                ]
            }
        ],
        "subregion": "Eastern Africa",
        "timezones": [
            "UTC+03:00"
        ],
        "topLevelDomain": [
            ".ke"
        ],
        "translations": {
            "br": "Quênia",
            "de": "Kenia",
            "es": "Kenia",
            "fa": "کنیا",
            "fr": "Kenya",
            "hr": "Kenija",
            "it": "Kenya",
            "ja": "ケニア",
            "nl": "Kenia",
            "pt": "Quénia",
            "ru": "Кения",
            "pl": "Kenia",
            "cs": "Keňa",
            "zh": "肯尼亚共和国",
            "hu": "Kenya",
            "se": "Kenya"
        },
        "cioc": "KEN"
    },
    {
        "alpha2Code": "KI",
        "alpha3Code": "KIR",
        "altSpellings": [
            "KI",
            "Republic of Kiribati",
            "Ribaberiki Kiribati"
        ],
        "area": 811,
        "borders": [],
        "callingCodes": [
            "686"
        ],
        "capital": "South Tarawa",
        "currencies": [
            {
                "code": "AUD",
                "name": "Australian dollar",
                "symbol": "$"
            },
            {
                "code": "(none)",
                "name": "Kiribati dollar",
                "symbol": "$"
            }
        ],
        "demonym": "I-Kiribati",
        "flag": "https://restcountries.eu/data/kir.svg",
        "languages": [
            {
                "iso639_1": "en",
                "iso639_2": "eng",
                "name": "English",
                "nativeName": "English"
            }
        ],
        "latlng": [
            1.41666666,
            173
        ],
        "name": "Kiribati",
        "nativeName": "Kiribati",
        "numericCode": "296",
        "population": 119446,
        "region": "Oceania",
        "regionalBlocs": [],
        "subregion": "Micronesia",
        "timezones": [
            "UTC+12:00",
            "UTC+13:00",
            "UTC+14:00"
        ],
        "topLevelDomain": [
            ".ki"
        ],
        "translations": {
            "br": "Kiribati",
            "de": "Kiribati",
            "es": "Kiribati",
            "fa": "کیریباتی",
            "fr": "Kiribati",
            "hr": "Kiribati",
            "it": "Kiribati",
            "ja": "キリバス",
            "nl": "Kiribati",
            "pt": "Quiribáti",
            "ru": "Кирибати",
            "pl": "Kiribati",
            "cs": "Kiribati",
            "zh": "基里巴斯共和国",
            "hu": "Kiribati",
            "se": "Kiribati"
        },
        "cioc": "KIR"
    },
    {
        "alpha2Code": "KW",
        "alpha3Code": "KWT",
        "altSpellings": [
            "KW",
            "State of Kuwait",
            "Dawlat al-Kuwait"
        ],
        "area": 17818,
        "borders": [
            "IRQ",
            "SAU"
        ],
        "callingCodes": [
            "965"
        ],
        "capital": "Kuwait City",
        "currencies": [
            {
                "code": "KWD",
                "name": "Kuwaiti dinar",
                "symbol": "د.ك"
            }
        ],
        "demonym": "Kuwaiti",
        "flag": "https://restcountries.eu/data/kwt.svg",
        "gini": null,
        "languages": [
            {
                "iso639_1": "ar",
                "iso639_2": "ara",
                "name": "Arabic",
                "nativeName": "العربية"
            }
        ],
        "latlng": [
            29.5,
            45.75
        ],
        "name": "Kuwait",
        "nativeName": "الكويت",
        "numericCode": "414",
        "population": 4270563,
        "region": "Asia",
        "regionalBlocs": [
            {
                "acronym": "AL",
                "name": "Arab League",
                "otherNames": [
                    "جامعة الدول العربية",
                    "Jāmiʻat ad-Duwal al-ʻArabīyah",
                    "League of Arab States"
                ]
            }
        ],
        "subregion": "Western Asia",
        "timezones": [
            "UTC+03:00"
        ],
        "topLevelDomain": [
            ".kw"
        ],
        "translations": {
            "br": "Kuwait",
            "de": "Kuwait",
            "es": "Kuwait",
            "fa": "کویت",
            "fr": "Koweït",
            "hr": "Kuvajt",
            "it": "Kuwait",
            "ja": "クウェート",
            "nl": "Koeweit",
            "pt": "Kuwait",
            "ru": "Кувейт",
            "pl": "Kuwejt",
            "cs": "Kuvajt",
            "zh": "科威特国",
            "hu": "Kuvait",
            "se": "Kuwait"
        },
        "cioc": "KUW"
    },
    {
        "alpha2Code": "KG",
        "alpha3Code": "KGZ",
        "altSpellings": [
            "KG",
            "Киргизия",
            "Kyrgyz Republic",
            "Кыргыз Республикасы",
            "Kyrgyz Respublikasy"
        ],
        "area": 199951,
        "borders": [
            "CHN",
            "KAZ",
            "TJK",
            "UZB"
        ],
        "callingCodes": [
            "996"
        ],
        "capital": "Bishkek",
        "currencies": [
            {
                "code": "KGS",
                "name": "Kyrgyzstani som",
                "symbol": "с"
            }
        ],
        "demonym": "Kirghiz",
        "flag": "https://restcountries.eu/data/kgz.svg",
        "gini": 36.2,
        "languages": [
            {
                "iso639_1": "ky",
                "iso639_2": "kir",
                "name": "Kyrgyz",
                "nativeName": "Кыргызча"
            },
            {
                "iso639_1": "ru",
                "iso639_2": "rus",
                "name": "Russian",
                "nativeName": "Русский"
            }
        ],
        "latlng": [
            41,
            75
        ],
        "name": "Kyrgyzstan",
        "nativeName": "Кыргызстан",
        "numericCode": "417",
        "population": 6591600,
        "region": "Asia",
        "regionalBlocs": [
            {
                "acronym": "EEU",
                "name": "Eurasian Economic Union",
                "otherAcronyms": [
                    "EAEU"
                ]
            }
        ],
        "subregion": "Central Asia",
        "timezones": [
            "UTC+06:00"
        ],
        "topLevelDomain": [
            ".kg"
        ],
        "translations": {
            "br": "Quirguistão",
            "de": "Kirgisistan",
            "es": "Kirguizistán",
            "fa": "قرقیزستان",
            "fr": "Kirghizistan",
            "hr": "Kirgistan",
            "it": "Kirghizistan",
            "ja": "キルギス",
            "nl": "Kirgizië",
            "pt": "Quirguizistão",
            "ru": "Киргизия",
            "pl": "Kirgistan",
            "cs": "Kyrgyzstán",
            "zh": "吉尔吉斯斯坦共和国",
            "hu": "Kirgizisztán",
            "se": "Kirgizistan"
        },
        "cioc": "KGZ"
    },
    {
        "alpha2Code": "LA",
        "alpha3Code": "LAO",
        "altSpellings": [
            "LA",
            "Lao",
            "Laos",
            "Lao People's Democratic Republic",
            "Sathalanalat Paxathipatai Paxaxon Lao"
        ],
        "area": 236800,
        "borders": [
            "MMR",
            "KHM",
            "CHN",
            "THA",
            "VNM"
        ],
        "callingCodes": [
            "856"
        ],
        "capital": "Vientiane",
        "currencies": [
            {
                "code": "LAK",
                "name": "Lao kip",
                "symbol": "₭"
            }
        ],
        "demonym": "Laotian",
        "flag": "https://restcountries.eu/data/lao.svg",
        "gini": 36.7,
        "languages": [
            {
                "iso639_1": "lo",
                "iso639_2": "lao",
                "name": "Lao",
                "nativeName": "ພາສາລາວ"
            }
        ],
        "latlng": [
            18,
            105
        ],
        "name": "Lao People's Democratic Republic",
        "nativeName": "ສປປລາວ",
        "numericCode": "418",
        "population": 7275556,
        "region": "Asia",
        "regionalBlocs": [
            {
                "acronym": "ASEAN",
                "name": "Association of Southeast Asian Nations"
            }
        ],
        "subregion": "South-Eastern Asia",
        "timezones": [
            "UTC+07:00"
        ],
        "topLevelDomain": [
            ".la"
        ],
        "translations": {
            "br": "Laos",
            "de": "Laos",
            "es": "Laos",
            "fa": "لائوس",
            "fr": "Laos",
            "hr": "Laos",
            "it": "Laos",
            "ja": "ラオス人民民主共和国",
            "nl": "Laos",
            "pt": "Laos",
            "ru": "Лаос",
            "pl": "Laos",
            "cs": "Laos",
            "zh": "老挝人民民主共和国",
            "hu": "Laosz",
            "se": "Laos"
        },
        "cioc": "LAO"
    },
    {
        "alpha2Code": "LV",
        "alpha3Code": "LVA",
        "altSpellings": [
            "LV",
            "Republic of Latvia",
            "Latvijas Republika"
        ],
        "area": 64559,
        "borders": [
            "BLR",
            "EST",
            "LTU",
            "RUS"
        ],
        "callingCodes": [
            "371"
        ],
        "capital": "Riga",
        "currencies": [
            {
                "code": "EUR",
                "name": "Euro",
                "symbol": "€"
            }
        ],
        "demonym": "Latvian",
        "flag": "https://restcountries.eu/data/lva.svg",
        "gini": 36.6,
        "languages": [
            {
                "iso639_1": "lv",
                "iso639_2": "lav",
                "name": "Latvian",
                "nativeName": "latviešu valoda"
            }
        ],
        "latlng": [
            57,
            25
        ],
        "name": "Latvia",
        "nativeName": "Latvija",
        "numericCode": "428",
        "population": 1901548,
        "region": "Europe",
        "regionalBlocs": [
            {
                "acronym": "EU",
                "name": "European Union"
            }
        ],
        "subregion": "Northern Europe",
        "timezones": [
            "UTC+02:00"
        ],
        "topLevelDomain": [
            ".lv"
        ],
        "translations": {
            "br": "Letônia",
            "de": "Lettland",
            "es": "Letonia",
            "fa": "لتونی",
            "fr": "Lettonie",
            "hr": "Latvija",
            "it": "Lettonia",
            "ja": "ラトビア",
            "nl": "Letland",
            "pt": "Letónia",
            "ru": "Латвия",
            "pl": "Łotwa",
            "cs": "Lotyšsko",
            "zh": "拉脱维亚共和国",
            "hu": "Lettország",
            "se": "Lettland"
        },
        "cioc": "LAT"
    },
    {
        "alpha2Code": "LB",
        "alpha3Code": "LBN",
        "altSpellings": [
            "LB",
            "Lebanese Republic",
            "Al-Jumhūrīyah Al-Libnānīyah"
        ],
        "area": 10452,
        "borders": [
            "ISR",
            "SYR"
        ],
        "callingCodes": [
            "961"
        ],
        "capital": "Beirut",
        "currencies": [
            {
                "code": "LBP",
                "name": "Lebanese pound",
                "symbol": "ل.ل"
            }
        ],
        "demonym": "Lebanese",
        "flag": "https://restcountries.eu/data/lbn.svg",
        "gini": null,
        "languages": [
            {
                "iso639_1": "ar",
                "iso639_2": "ara",
                "name": "Arabic",
                "nativeName": "العربية"
            },
            {
                "iso639_1": "fr",
                "iso639_2": "fra",
                "name": "French",
                "nativeName": "français"
            }
        ],
        "latlng": [
            33.83333333,
            35.83333333
        ],
        "name": "Lebanon",
        "nativeName": "لبنان",
        "numericCode": "422",
        "population": 6825442,
        "region": "Asia",
        "regionalBlocs": [
            {
                "acronym": "AL",
                "name": "Arab League",
                "otherNames": [
                    "جامعة الدول العربية",
                    "Jāmiʻat ad-Duwal al-ʻArabīyah",
                    "League of Arab States"
                ]
            }
        ],
        "subregion": "Western Asia",
        "timezones": [
            "UTC+02:00"
        ],
        "topLevelDomain": [
            ".lb"
        ],
        "translations": {
            "br": "Líbano",
            "de": "Libanon",
            "es": "Líbano",
            "fa": "لبنان",
            "fr": "Liban",
            "hr": "Libanon",
            "it": "Libano",
            "ja": "レバノン",
            "nl": "Libanon",
            "pt": "Líbano",
            "ru": "Ливан",
            "pl": "Liban",
            "cs": "Libanon",
            "zh": "黎巴嫩共和国",
            "hu": "Libanon",
            "se": "Libanon"
        },
        "cioc": "LIB"
    },
    {
        "alpha2Code": "LS",
        "alpha3Code": "LSO",
        "altSpellings": [
            "LS",
            "Kingdom of Lesotho",
            "Muso oa Lesotho"
        ],
        "area": 30355,
        "borders": [
            "ZAF"
        ],
        "callingCodes": [
            "266"
        ],
        "capital": "Maseru",
        "currencies": [
            {
                "code": "LSL",
                "name": "Lesotho loti",
                "symbol": "L"
            },
            {
                "code": "ZAR",
                "name": "South African rand",
                "symbol": "R"
            }
        ],
        "demonym": "Mosotho",
        "flag": "https://restcountries.eu/data/lso.svg",
        "gini": 52.5,
        "languages": [
            {
                "iso639_1": "en",
                "iso639_2": "eng",
                "name": "English",
                "nativeName": "English"
            },
            {
                "iso639_1": "st",
                "iso639_2": "sot",
                "name": "Southern Sotho",
                "nativeName": "Sesotho"
            }
        ],
        "latlng": [
            -29.5,
            28.5
        ],
        "name": "Lesotho",
        "nativeName": "Lesotho",
        "numericCode": "426",
        "population": 2142252,
        "region": "Africa",
        "regionalBlocs": [
            {
                "acronym": "AU",
                "name": "African Union",
                "otherNames": [
                    "الاتحاد الأفريقي",
                    "Union africaine",
                    "União Africana",
                    "Unión Africana",
                    "Umoja wa Afrika"
                ]
            }
        ],
        "subregion": "Southern Africa",
        "timezones": [
            "UTC+02:00"
        ],
        "topLevelDomain": [
            ".ls"
        ],
        "translations": {
            "br": "Lesoto",
            "de": "Lesotho",
            "es": "Lesotho",
            "fa": "لسوتو",
            "fr": "Lesotho",
            "hr": "Lesoto",
            "it": "Lesotho",
            "ja": "レソト",
            "nl": "Lesotho",
            "pt": "Lesoto",
            "ru": "Лесото",
            "pl": "Lesotho",
            "cs": "Lesotho",
            "zh": "莱索托王国",
            "hu": "Lesotho",
            "se": "Lesotho"
        },
        "cioc": "LES"
    },
    {
        "alpha2Code": "LR",
        "alpha3Code": "LBR",
        "altSpellings": [
            "LR",
            "Republic of Liberia"
        ],
        "area": 111369,
        "borders": [
            "GIN",
            "CIV",
            "SLE"
        ],
        "callingCodes": [
            "231"
        ],
        "capital": "Monrovia",
        "currencies": [
            {
                "code": "LRD",
                "name": "Liberian dollar",
                "symbol": "$"
            }
        ],
        "demonym": "Liberian",
        "flag": "https://restcountries.eu/data/lbr.svg",
        "gini": 38.2,
        "languages": [
            {
                "iso639_1": "en",
                "iso639_2": "eng",
                "name": "English",
                "nativeName": "English"
            }
        ],
        "latlng": [
            6.5,
            -9.5
        ],
        "name": "Liberia",
        "nativeName": "Liberia",
        "numericCode": "430",
        "population": 5057677,
        "region": "Africa",
        "regionalBlocs": [
            {
                "acronym": "AU",
                "name": "African Union",
                "otherNames": [
                    "الاتحاد الأفريقي",
                    "Union africaine",
                    "União Africana",
                    "Unión Africana",
                    "Umoja wa Afrika"
                ]
            }
        ],
        "subregion": "Western Africa",
        "timezones": [
            "UTC"
        ],
        "topLevelDomain": [
            ".lr"
        ],
        "translations": {
            "br": "Libéria",
            "de": "Liberia",
            "es": "Liberia",
            "fa": "لیبریا",
            "fr": "Liberia",
            "hr": "Liberija",
            "it": "Liberia",
            "ja": "リベリア",
            "nl": "Liberia",
            "pt": "Libéria",
            "ru": "Либерия",
            "pl": "Liberia",
            "cs": "Libérie",
            "zh": "利比里亚共和国",
            "hu": "Libéria",
            "se": "Liberia"
        },
        "cioc": "LBR"
    },
    {
        "alpha2Code": "LY",
        "alpha3Code": "LBY",
        "altSpellings": [
            "LY",
            "State of Libya",
            "Dawlat Libya"
        ],
        "area": 1759540,
        "borders": [
            "DZA",
            "TCD",
            "EGY",
            "NER",
            "SDN",
            "TUN"
        ],
        "callingCodes": [
            "218"
        ],
        "capital": "Tripoli",
        "currencies": [
            {
                "code": "LYD",
                "name": "Libyan dinar",
                "symbol": "ل.د"
            }
        ],
        "demonym": "Libyan",
        "flag": "https://restcountries.eu/data/lby.svg",
        "gini": null,
        "languages": [
            {
                "iso639_1": "ar",
                "iso639_2": "ara",
                "name": "Arabic",
                "nativeName": "العربية"
            }
        ],
        "latlng": [
            25,
            17
        ],
        "name": "Libya",
        "nativeName": "‏ليبيا",
        "numericCode": "434",
        "population": 6871287,
        "region": "Africa",
        "regionalBlocs": [
            {
                "acronym": "AU",
                "name": "African Union",
                "otherNames": [
                    "الاتحاد الأفريقي",
                    "Union africaine",
                    "União Africana",
                    "Unión Africana",
                    "Umoja wa Afrika"
                ]
            },
            {
                "acronym": "AL",
                "name": "Arab League",
                "otherNames": [
                    "جامعة الدول العربية",
                    "Jāmiʻat ad-Duwal al-ʻArabīyah",
                    "League of Arab States"
                ]
            }
        ],
        "subregion": "Northern Africa",
        "timezones": [
            "UTC+01:00"
        ],
        "topLevelDomain": [
            ".ly"
        ],
        "translations": {
            "br": "Líbia",
            "de": "Libyen",
            "es": "Libia",
            "fa": "لیبی",
            "fr": "Libye",
            "hr": "Libija",
            "it": "Libia",
            "ja": "リビア",
            "nl": "Libië",
            "pt": "Líbia",
            "ru": "Ливия",
            "pl": "Libia",
            "cs": "Libye",
            "zh": "利比亚国",
            "hu": "Líbia",
            "se": "Libyen"
        },
        "cioc": "LBA"
    },
    {
        "alpha2Code": "LI",
        "alpha3Code": "LIE",
        "altSpellings": [
            "LI",
            "Principality of Liechtenstein",
            "Fürstentum Liechtenstein"
        ],
        "area": 160,
        "borders": [
            "AUT",
            "CHE"
        ],
        "callingCodes": [
            "423"
        ],
        "capital": "Vaduz",
        "currencies": [
            {
                "code": "CHF",
                "name": "Swiss franc",
                "symbol": "Fr"
            }
        ],
        "demonym": "Liechtensteiner",
        "flag": "https://restcountries.eu/data/lie.svg",
        "languages": [
            {
                "iso639_1": "de",
                "iso639_2": "deu",
                "name": "German",
                "nativeName": "Deutsch"
            }
        ],
        "latlng": [
            47.26666666,
            9.53333333
        ],
        "name": "Liechtenstein",
        "nativeName": "Liechtenstein",
        "numericCode": "438",
        "population": 38137,
        "region": "Europe",
        "regionalBlocs": [
            {
                "acronym": "EFTA",
                "name": "European Free Trade Association"
            }
        ],
        "subregion": "Western Europe",
        "timezones": [
            "UTC+01:00"
        ],
        "topLevelDomain": [
            ".li"
        ],
        "translations": {
            "br": "Liechtenstein",
            "de": "Liechtenstein",
            "es": "Liechtenstein",
            "fa": "لیختن‌اشتاین",
            "fr": "Liechtenstein",
            "hr": "Lihtenštajn",
            "it": "Liechtenstein",
            "ja": "リヒテンシュタイン",
            "nl": "Liechtenstein",
            "pt": "Listenstaine",
            "ru": "Лихтенштейн",
            "pl": "Liechtenstein",
            "cs": "Lichtenštejnsko",
            "zh": "列支敦士登公国",
            "hu": "Liechtenstein",
            "se": "Liechtenstein"
        },
        "cioc": "LIE"
    },
    {
        "alpha2Code": "LT",
        "alpha3Code": "LTU",
        "altSpellings": [
            "LT",
            "Republic of Lithuania",
            "Lietuvos Respublika"
        ],
        "area": 65300,
        "borders": [
            "BLR",
            "LVA",
            "POL",
            "RUS"
        ],
        "callingCodes": [
            "370"
        ],
        "capital": "Vilnius",
        "currencies": [
            {
                "code": "EUR",
                "name": "Euro",
                "symbol": "€"
            }
        ],
        "demonym": "Lithuanian",
        "flag": "https://restcountries.eu/data/ltu.svg",
        "gini": 37.6,
        "languages": [
            {
                "iso639_1": "lt",
                "iso639_2": "lit",
                "name": "Lithuanian",
                "nativeName": "lietuvių kalba"
            }
        ],
        "latlng": [
            56,
            24
        ],
        "name": "Lithuania",
        "nativeName": "Lietuva",
        "numericCode": "440",
        "population": 2794700,
        "region": "Europe",
        "regionalBlocs": [
            {
                "acronym": "EU",
                "name": "European Union"
            }
        ],
        "subregion": "Northern Europe",
        "timezones": [
            "UTC+02:00"
        ],
        "topLevelDomain": [
            ".lt"
        ],
        "translations": {
            "br": "Lituânia",
            "de": "Litauen",
            "es": "Lituania",
            "fa": "لیتوانی",
            "fr": "Lituanie",
            "hr": "Litva",
            "it": "Lituania",
            "ja": "リトアニア",
            "nl": "Litouwen",
            "pt": "Lituânia",
            "ru": "Литва",
            "pl": "Litwa",
            "cs": "Litva",
            "zh": "立陶宛共和国",
            "hu": "Litvánia",
            "se": "Litauen"
        },
        "cioc": "LTU"
    },
    {
        "alpha2Code": "LU",
        "alpha3Code": "LUX",
        "altSpellings": [
            "LU",
            "Grand Duchy of Luxembourg",
            "Grand-Duché de Luxembourg",
            "Großherzogtum Luxemburg",
            "Groussherzogtum Lëtzebuerg"
        ],
        "area": 2586,
        "borders": [
            "BEL",
            "FRA",
            "DEU"
        ],
        "callingCodes": [
            "352"
        ],
        "capital": "Luxembourg",
        "currencies": [
            {
                "code": "EUR",
                "name": "Euro",
                "symbol": "€"
            }
        ],
        "demonym": "Luxembourger",
        "flag": "https://restcountries.eu/data/lux.svg",
        "gini": 30.8,
        "languages": [
            {
                "iso639_1": "fr",
                "iso639_2": "fra",
                "name": "French",
                "nativeName": "français"
            },
            {
                "iso639_1": "de",
                "iso639_2": "deu",
                "name": "German",
                "nativeName": "Deutsch"
            },
            {
                "iso639_1": "lb",
                "iso639_2": "ltz",
                "name": "Luxembourgish",
                "nativeName": "Lëtzebuergesch"
            }
        ],
        "latlng": [
            49.75,
            6.16666666
        ],
        "name": "Luxembourg",
        "nativeName": "Lëtzebuerg",
        "numericCode": "442",
        "population": 632275,
        "region": "Europe",
        "regionalBlocs": [
            {
                "acronym": "EU",
                "name": "European Union"
            }
        ],
        "subregion": "Western Europe",
        "timezones": [
            "UTC+01:00"
        ],
        "topLevelDomain": [
            ".lu"
        ],
        "translations": {
            "br": "Luxemburgo",
            "de": "Luxemburg",
            "es": "Luxemburgo",
            "fa": "لوکزامبورگ",
            "fr": "Luxembourg",
            "hr": "Luksemburg",
            "it": "Lussemburgo",
            "ja": "ルクセンブルク",
            "nl": "Luxemburg",
            "pt": "Luxemburgo",
            "ru": "Люксембург",
            "pl": "Luksemburg",
            "cs": "Lucembursko",
            "zh": "卢森堡大公国",
            "hu": "Luxemburg",
            "se": "Luxemburg"
        },
        "cioc": "LUX"
    },
    {
        "alpha2Code": "MO",
        "alpha3Code": "MAC",
        "altSpellings": [
            "MO",
            "澳门",
            "Macao Special Administrative Region of the People's Republic of China",
            "中華人民共和國澳門特別行政區",
            "Região Administrativa Especial de Macau da República Popular da China"
        ],
        "area": 30,
        "borders": [
            "CHN"
        ],
        "callingCodes": [
            "853"
        ],
        "capital": "",
        "currencies": [
            {
                "code": "MOP",
                "name": "Macanese pataca",
                "symbol": "P"
            }
        ],
        "demonym": "Chinese",
        "flag": "https://restcountries.eu/data/mac.svg",
        "languages": [
            {
                "iso639_1": "zh",
                "iso639_2": "zho",
                "name": "Chinese",
                "nativeName": "中文 (Zhōngwén)"
            },
            {
                "iso639_1": "pt",
                "iso639_2": "por",
                "name": "Portuguese",
                "nativeName": "Português"
            }
        ],
        "latlng": [
            22.16666666,
            113.55
        ],
        "name": "Macao",
        "nativeName": "澳門",
        "numericCode": "446",
        "population": 649342,
        "region": "Asia",
        "regionalBlocs": [],
        "subregion": "Eastern Asia",
        "timezones": [
            "UTC+08:00"
        ],
        "topLevelDomain": [
            ".mo"
        ],
        "translations": {
            "br": "Macau",
            "de": "Macao",
            "es": "Macao",
            "fa": "مکائو",
            "fr": "Macao",
            "hr": "Makao",
            "it": "Macao",
            "ja": "マカオ",
            "nl": "Macao",
            "pt": "Macau",
            "pl": "Makau",
            "cs": "Macao",
            "ru": "Macao",
            "zh": "澳门",
            "hu": "Makaó",
            "se": "Macao"
        },
        "cioc": ""
    },
    {
        "alpha2Code": "MK",
        "alpha3Code": "MKD",
        "altSpellings": [
            "MK",
            "Republic of North Macedonia",
            "Република Македонија"
        ],
        "area": 25713,
        "borders": [
            "ALB",
            "BGR",
            "GRC",
            "UNK",
            "SRB"
        ],
        "callingCodes": [
            "389"
        ],
        "capital": "Skopje",
        "currencies": [
            {
                "code": "MKD",
                "name": "Macedonian denar",
                "symbol": "ден"
            }
        ],
        "demonym": "Macedonian",
        "flag": "https://restcountries.eu/data/mkd.svg",
        "gini": 43.2,
        "languages": [
            {
                "iso639_1": "mk",
                "iso639_2": "mkd",
                "name": "Macedonian",
                "nativeName": "македонски јазик"
            }
        ],
        "latlng": [
            41.83333333,
            22
        ],
        "name": "North Macedonia",
        "nativeName": "северна Македонија",
        "numericCode": "807",
        "population": 2083380,
        "region": "Europe",
        "regionalBlocs": [
            {
                "acronym": "CEFTA",
                "name": "Central European Free Trade Agreement"
            }
        ],
        "subregion": "Southern Europe",
        "timezones": [
            "UTC+01:00"
        ],
        "topLevelDomain": [
            ".mk"
        ],
        "translations": {
            "br": "Macedônia",
            "de": "Mazedonien",
            "es": "Macedonia",
            "fa": "North Macedonia",
            "fr": "Macédoine",
            "hr": "Makedonija",
            "it": "Macedonia",
            "ja": "マケドニア旧ユーゴスラビア共和国",
            "nl": "Macedonië",
            "pt": "Macedónia",
            "ru": "Северная Македония",
            "pl": "Macedonia",
            "cs": "Makedonie",
            "zh": "北馬其頓共和國",
            "hu": "Macedónia",
            "se": "Nordmakedonien"
        },
        "cioc": "MKD"
    },
    {
        "alpha2Code": "MG",
        "alpha3Code": "MDG",
        "altSpellings": [
            "MG",
            "Republic of Madagascar",
            "Repoblikan'i Madagasikara",
            "République de Madagascar"
        ],
        "area": 587041,
        "borders": [],
        "callingCodes": [
            "261"
        ],
        "capital": "Antananarivo",
        "currencies": [
            {
                "code": "MGA",
                "name": "Malagasy ariary",
                "symbol": "Ar"
            }
        ],
        "demonym": "Malagasy",
        "flag": "https://restcountries.eu/data/mdg.svg",
        "gini": 44.1,
        "languages": [
            {
                "iso639_1": "fr",
                "iso639_2": "fra",
                "name": "French",
                "nativeName": "français"
            },
            {
                "iso639_1": "mg",
                "iso639_2": "mlg",
                "name": "Malagasy",
                "nativeName": "fiteny malagasy"
            }
        ],
        "latlng": [
            -20,
            47
        ],
        "name": "Madagascar",
        "nativeName": "Madagasikara",
        "numericCode": "450",
        "population": 27691019,
        "region": "Africa",
        "regionalBlocs": [
            {
                "acronym": "AU",
                "name": "African Union",
                "otherNames": [
                    "الاتحاد الأفريقي",
                    "Union africaine",
                    "União Africana",
                    "Unión Africana",
                    "Umoja wa Afrika"
                ]
            }
        ],
        "subregion": "Eastern Africa",
        "timezones": [
            "UTC+03:00"
        ],
        "topLevelDomain": [
            ".mg"
        ],
        "translations": {
            "br": "Madagascar",
            "de": "Madagaskar",
            "es": "Madagascar",
            "fa": "ماداگاسکار",
            "fr": "Madagascar",
            "hr": "Madagaskar",
            "it": "Madagascar",
            "ja": "マダガスカル",
            "nl": "Madagaskar",
            "pt": "Madagáscar",
            "ru": "Мадагаскар",
            "pl": "Madagaskar",
            "cs": "Madagaskar",
            "zh": "马达加斯加共和国",
            "hu": "Madagaszkár",
            "se": "Madagaskar"
        },
        "cioc": "MAD"
    },
    {
        "alpha2Code": "MW",
        "alpha3Code": "MWI",
        "altSpellings": [
            "MW",
            "Republic of Malawi"
        ],
        "area": 118484,
        "borders": [
            "MOZ",
            "TZA",
            "ZMB"
        ],
        "callingCodes": [
            "265"
        ],
        "capital": "Lilongwe",
        "currencies": [
            {
                "code": "MWK",
                "name": "Malawian kwacha",
                "symbol": "MK"
            }
        ],
        "demonym": "Malawian",
        "flag": "https://restcountries.eu/data/mwi.svg",
        "gini": 39,
        "languages": [
            {
                "iso639_1": "en",
                "iso639_2": "eng",
                "name": "English",
                "nativeName": "English"
            },
            {
                "iso639_1": "ny",
                "iso639_2": "nya",
                "name": "Chichewa",
                "nativeName": "chiCheŵa"
            }
        ],
        "latlng": [
            -13.5,
            34
        ],
        "name": "Malawi",
        "nativeName": "Malawi",
        "numericCode": "454",
        "population": 19129955,
        "region": "Africa",
        "regionalBlocs": [
            {
                "acronym": "AU",
                "name": "African Union",
                "otherNames": [
                    "الاتحاد الأفريقي",
                    "Union africaine",
                    "União Africana",
                    "Unión Africana",
                    "Umoja wa Afrika"
                ]
            }
        ],
        "subregion": "Eastern Africa",
        "timezones": [
            "UTC+02:00"
        ],
        "topLevelDomain": [
            ".mw"
        ],
        "translations": {
            "br": "Malawi",
            "de": "Malawi",
            "es": "Malawi",
            "fa": "مالاوی",
            "fr": "Malawi",
            "hr": "Malavi",
            "it": "Malawi",
            "ja": "マラウイ",
            "nl": "Malawi",
            "pt": "Malávi",
            "ru": "Малави",
            "pl": "Malawi",
            "cs": "Malawi",
            "zh": "马拉维共和国",
            "hu": "Malawi",
            "se": "Malawi"
        },
        "cioc": "MAW"
    },
    {
        "alpha2Code": "MY",
        "alpha3Code": "MYS",
        "altSpellings": [
            "MY"
        ],
        "area": 330803,
        "borders": [
            "BRN",
            "IDN",
            "THA"
        ],
        "callingCodes": [
            "60"
        ],
        "capital": "Kuala Lumpur",
        "currencies": [
            {
                "code": "MYR",
                "name": "Malaysian ringgit",
                "symbol": "RM"
            }
        ],
        "demonym": "Malaysian",
        "flag": "https://restcountries.eu/data/mys.svg",
        "gini": 46.2,
        "languages": [
            {
                "iso639_1": "ms",
                "iso639_2": "zsm",
                "name": "Malaysian",
                "nativeName": "بهاس مليسيا"
            }
        ],
        "latlng": [
            2.5,
            112.5
        ],
        "name": "Malaysia",
        "nativeName": "Malaysia",
        "numericCode": "458",
        "population": 32365998,
        "region": "Asia",
        "regionalBlocs": [
            {
                "acronym": "ASEAN",
                "name": "Association of Southeast Asian Nations"
            }
        ],
        "subregion": "South-Eastern Asia",
        "timezones": [
            "UTC+08:00"
        ],
        "topLevelDomain": [
            ".my"
        ],
        "translations": {
            "br": "Malásia",
            "de": "Malaysia",
            "es": "Malasia",
            "fa": "مالزی",
            "fr": "Malaisie",
            "hr": "Malezija",
            "it": "Malesia",
            "ja": "マレーシア",
            "nl": "Maleisië",
            "pt": "Malásia",
            "ru": "Малайзия",
            "pl": "Malezja",
            "cs": "Malajsie",
            "zh": "马来西亚",
            "hu": "Malajzia",
            "se": "Malaysia"
        },
        "cioc": "MAS"
    },
    {
        "alpha2Code": "MV",
        "alpha3Code": "MDV",
        "altSpellings": [
            "MV",
            "Maldive Islands",
            "Republic of the Maldives",
            "Dhivehi Raajjeyge Jumhooriyya"
        ],
        "area": 300,
        "borders": [],
        "callingCodes": [
            "960"
        ],
        "capital": "Malé",
        "currencies": [
            {
                "code": "MVR",
                "name": "Maldivian rufiyaa",
                "symbol": ".ރ"
            }
        ],
        "demonym": "Maldivan",
        "flag": "https://restcountries.eu/data/mdv.svg",
        "gini": 37.4,
        "languages": [
            {
                "iso639_1": "dv",
                "iso639_2": "div",
                "name": "Divehi",
                "nativeName": "ދިވެހި"
            }
        ],
        "latlng": [
            3.25,
            73
        ],
        "name": "Maldives",
        "nativeName": "Maldives",
        "numericCode": "462",
        "population": 540542,
        "region": "Asia",
        "regionalBlocs": [
            {
                "acronym": "SAARC",
                "name": "South Asian Association for Regional Cooperation"
            }
        ],
        "subregion": "Southern Asia",
        "timezones": [
            "UTC+05:00"
        ],
        "topLevelDomain": [
            ".mv"
        ],
        "translations": {
            "br": "Maldivas",
            "de": "Malediven",
            "es": "Maldivas",
            "fa": "مالدیو",
            "fr": "Maldives",
            "hr": "Maldivi",
            "it": "Maldive",
            "ja": "モルディブ",
            "nl": "Maldiven",
            "pt": "Maldivas",
            "ru": "Мальдивы",
            "pl": "Malediwy",
            "cs": "Maledivy",
            "zh": "马尔代夫共和国",
            "hu": "Maldív-szigetek",
            "se": "Maldiverna"
        },
        "cioc": "MDV"
    },
    {
        "alpha2Code": "ML",
        "alpha3Code": "MLI",
        "altSpellings": [
            "ML",
            "Republic of Mali",
            "République du Mali"
        ],
        "area": 1240192,
        "borders": [
            "DZA",
            "BFA",
            "GIN",
            "CIV",
            "MRT",
            "NER",
            "SEN"
        ],
        "callingCodes": [
            "223"
        ],
        "capital": "Bamako",
        "currencies": [
            {
                "code": "XOF",
                "name": "West African CFA franc",
                "symbol": "Fr"
            }
        ],
        "demonym": "Malian",
        "flag": "https://restcountries.eu/data/mli.svg",
        "gini": 33,
        "languages": [
            {
                "iso639_1": "fr",
                "iso639_2": "fra",
                "name": "French",
                "nativeName": "français"
            }
        ],
        "latlng": [
            17,
            -4
        ],
        "name": "Mali",
        "nativeName": "Mali",
        "numericCode": "466",
        "population": 20250834,
        "region": "Africa",
        "regionalBlocs": [
            {
                "acronym": "AU",
                "name": "African Union",
                "otherNames": [
                    "الاتحاد الأفريقي",
                    "Union africaine",
                    "União Africana",
                    "Unión Africana",
                    "Umoja wa Afrika"
                ]
            }
        ],
        "subregion": "Western Africa",
        "timezones": [
            "UTC"
        ],
        "topLevelDomain": [
            ".ml"
        ],
        "translations": {
            "br": "Mali",
            "de": "Mali",
            "es": "Mali",
            "fa": "مالی",
            "fr": "Mali",
            "hr": "Mali",
            "it": "Mali",
            "ja": "マリ",
            "nl": "Mali",
            "pt": "Mali",
            "ru": "Мали",
            "pl": "Mali",
            "cs": "Mali",
            "zh": "马里共和国",
            "hu": "Mali",
            "se": "Mali"
        },
        "cioc": "MLI"
    },
    {
        "alpha2Code": "MT",
        "alpha3Code": "MLT",
        "altSpellings": [
            "MT",
            "Republic of Malta",
            "Repubblika ta' Malta"
        ],
        "area": 316,
        "borders": [],
        "callingCodes": [
            "356"
        ],
        "capital": "Valletta",
        "currencies": [
            {
                "code": "EUR",
                "name": "Euro",
                "symbol": "€"
            }
        ],
        "demonym": "Maltese",
        "flag": "https://restcountries.eu/data/mlt.svg",
        "gini": null,
        "languages": [
            {
                "iso639_1": "mt",
                "iso639_2": "mlt",
                "name": "Maltese",
                "nativeName": "Malti"
            },
            {
                "iso639_1": "en",
                "iso639_2": "eng",
                "name": "English",
                "nativeName": "English"
            }
        ],
        "latlng": [
            35.83333333,
            14.58333333
        ],
        "name": "Malta",
        "nativeName": "Malta",
        "numericCode": "470",
        "population": 525285,
        "region": "Europe",
        "regionalBlocs": [
            {
                "acronym": "EU",
                "name": "European Union"
            }
        ],
        "subregion": "Southern Europe",
        "timezones": [
            "UTC+01:00"
        ],
        "topLevelDomain": [
            ".mt"
        ],
        "translations": {
            "br": "Malta",
            "de": "Malta",
            "es": "Malta",
            "fa": "مالت",
            "fr": "Malte",
            "hr": "Malta",
            "it": "Malta",
            "ja": "マルタ",
            "nl": "Malta",
            "pt": "Malta",
            "ru": "Мальта",
            "pl": "Malta",
            "cs": "Malta",
            "zh": "马耳他共和国",
            "hu": "Málta",
            "se": "Malta"
        },
        "cioc": "MLT"
    },
    {
        "alpha2Code": "MH",
        "alpha3Code": "MHL",
        "altSpellings": [
            "MH",
            "Republic of the Marshall Islands",
            "Aolepān Aorōkin M̧ajeļ"
        ],
        "area": 181,
        "borders": [],
        "callingCodes": [
            "692"
        ],
        "capital": "Majuro",
        "currencies": [
            {
                "code": "USD",
                "name": "United States dollar",
                "symbol": "$"
            }
        ],
        "demonym": "Marshallese",
        "flag": "https://restcountries.eu/data/mhl.svg",
        "languages": [
            {
                "iso639_1": "en",
                "iso639_2": "eng",
                "name": "English",
                "nativeName": "English"
            },
            {
                "iso639_1": "mh",
                "iso639_2": "mah",
                "name": "Marshallese",
                "nativeName": "Kajin M̧ajeļ"
            }
        ],
        "latlng": [
            9,
            168
        ],
        "name": "Marshall Islands",
        "nativeName": "M̧ajeļ",
        "numericCode": "584",
        "population": 59194,
        "region": "Oceania",
        "regionalBlocs": [],
        "subregion": "Micronesia",
        "timezones": [
            "UTC+12:00"
        ],
        "topLevelDomain": [
            ".mh"
        ],
        "translations": {
            "br": "Ilhas Marshall",
            "de": "Marshallinseln",
            "es": "Islas Marshall",
            "fa": "جزایر مارشال",
            "fr": "Îles Marshall",
            "hr": "Maršalovi Otoci",
            "it": "Isole Marshall",
            "ja": "マーシャル諸島",
            "nl": "Marshalleilanden",
            "pt": "Ilhas Marshall",
            "ru": "Маршалловы Острова",
            "pl": "Wyspy Marshalla",
            "cs": "Marshallovy ostrovy",
            "zh": "马绍尔群岛共和国",
            "hu": "Marshall-szigetek",
            "se": "Marshallöarna"
        },
        "cioc": "MHL"
    },
    {
        "alpha2Code": "MQ",
        "alpha3Code": "MTQ",
        "altSpellings": [
            "MQ"
        ],
        "borders": [],
        "callingCodes": [
            "596"
        ],
        "capital": "Fort-de-France",
        "currencies": [
            {
                "code": "EUR",
                "name": "Euro",
                "symbol": "€"
            }
        ],
        "demonym": "French",
        "flag": "https://restcountries.eu/data/mtq.svg",
        "languages": [
            {
                "iso639_1": "fr",
                "iso639_2": "fra",
                "name": "French",
                "nativeName": "français"
            }
        ],
        "latlng": [
            14.666667,
            -61
        ],
        "name": "Martinique",
        "nativeName": "Martinique",
        "numericCode": "474",
        "population": 378243,
        "region": "Americas",
        "regionalBlocs": [],
        "subregion": "Caribbean",
        "timezones": [
            "UTC-04:00"
        ],
        "topLevelDomain": [
            ".mq"
        ],
        "translations": {
            "br": "Martinica",
            "de": "Martinique",
            "es": "Martinica",
            "fa": "مونتسرات",
            "fr": "Martinique",
            "hr": "Martinique",
            "it": "Martinica",
            "ja": "マルティニーク",
            "nl": "Martinique",
            "pt": "Martinica",
            "pl": "Martynika",
            "cs": "Martinik",
            "ru": "Martinique",
            "zh": "马提尼克",
            "hu": "Martinique",
            "se": "Martinique"
        },
        "cioc": ""
    },
    {
        "alpha2Code": "MR",
        "alpha3Code": "MRT",
        "altSpellings": [
            "MR",
            "Islamic Republic of Mauritania",
            "al-Jumhūriyyah al-ʾIslāmiyyah al-Mūrītāniyyah"
        ],
        "area": 1030700,
        "borders": [
            "DZA",
            "MLI",
            "SEN",
            "ESH"
        ],
        "callingCodes": [
            "222"
        ],
        "capital": "Nouakchott",
        "currencies": [
            {
                "code": "MRO",
                "name": "Mauritanian ouguiya",
                "symbol": "UM"
            }
        ],
        "demonym": "Mauritanian",
        "flag": "https://restcountries.eu/data/mrt.svg",
        "gini": 40.5,
        "languages": [
            {
                "iso639_1": "ar",
                "iso639_2": "ara",
                "name": "Arabic",
                "nativeName": "العربية"
            }
        ],
        "latlng": [
            20,
            -12
        ],
        "name": "Mauritania",
        "nativeName": "موريتانيا",
        "numericCode": "478",
        "population": 4649660,
        "region": "Africa",
        "regionalBlocs": [
            {
                "acronym": "AU",
                "name": "African Union",
                "otherNames": [
                    "الاتحاد الأفريقي",
                    "Union africaine",
                    "União Africana",
                    "Unión Africana",
                    "Umoja wa Afrika"
                ]
            },
            {
                "acronym": "AL",
                "name": "Arab League",
                "otherNames": [
                    "جامعة الدول العربية",
                    "Jāmiʻat ad-Duwal al-ʻArabīyah",
                    "League of Arab States"
                ]
            }
        ],
        "subregion": "Western Africa",
        "timezones": [
            "UTC"
        ],
        "topLevelDomain": [
            ".mr"
        ],
        "translations": {
            "br": "Mauritânia",
            "de": "Mauretanien",
            "es": "Mauritania",
            "fa": "موریتانی",
            "fr": "Mauritanie",
            "hr": "Mauritanija",
            "it": "Mauritania",
            "ja": "モーリタニア",
            "nl": "Mauritanië",
            "pt": "Mauritânia",
            "ru": "Мавритания",
            "pl": "Mauretania",
            "cs": "Mauritánie",
            "zh": "毛里塔尼亚伊斯兰共和国",
            "hu": "Mauritánia",
            "se": "Mauretanien"
        },
        "cioc": "MTN"
    },
    {
        "alpha2Code": "MU",
        "alpha3Code": "MUS",
        "altSpellings": [
            "MU",
            "Republic of Mauritius",
            "République de Maurice"
        ],
        "area": 2040,
        "borders": [],
        "callingCodes": [
            "230"
        ],
        "capital": "Port Louis",
        "currencies": [
            {
                "code": "MUR",
                "name": "Mauritian rupee",
                "symbol": "₨"
            }
        ],
        "demonym": "Mauritian",
        "flag": "https://restcountries.eu/data/mus.svg",
        "gini": null,
        "languages": [
            {
                "iso639_1": "en",
                "iso639_2": "eng",
                "name": "English",
                "nativeName": "English"
            }
        ],
        "latlng": [
            -20.28333333,
            57.55
        ],
        "name": "Mauritius",
        "nativeName": "Maurice",
        "numericCode": "480",
        "population": 1265740,
        "region": "Africa",
        "regionalBlocs": [
            {
                "acronym": "AU",
                "name": "African Union",
                "otherNames": [
                    "الاتحاد الأفريقي",
                    "Union africaine",
                    "União Africana",
                    "Unión Africana",
                    "Umoja wa Afrika"
                ]
            }
        ],
        "subregion": "Eastern Africa",
        "timezones": [
            "UTC+04:00"
        ],
        "topLevelDomain": [
            ".mu"
        ],
        "translations": {
            "br": "Maurício",
            "de": "Mauritius",
            "es": "Mauricio",
            "fa": "موریس",
            "fr": "Île Maurice",
            "hr": "Mauricijus",
            "it": "Mauritius",
            "ja": "モーリシャス",
            "nl": "Mauritius",
            "pt": "Maurícia",
            "ru": "Маврикий",
            "pl": "Mauritius",
            "cs": "Mauricius",
            "zh": "毛里求斯共和国",
            "hu": "Mauritius",
            "se": "Mauritius"
        },
        "cioc": "MRI"
    },
    {
        "alpha2Code": "YT",
        "alpha3Code": "MYT",
        "altSpellings": [
            "YT",
            "Department of Mayotte",
            "Département de Mayotte"
        ],
        "borders": [],
        "callingCodes": [
            "262"
        ],
        "capital": "Mamoudzou",
        "currencies": [
            {
                "code": "EUR",
                "name": "Euro",
                "symbol": "€"
            }
        ],
        "demonym": "French",
        "flag": "https://restcountries.eu/data/myt.svg",
        "languages": [
            {
                "iso639_1": "fr",
                "iso639_2": "fra",
                "name": "French",
                "nativeName": "français"
            }
        ],
        "latlng": [
            -12.83333333,
            45.16666666
        ],
        "name": "Mayotte",
        "nativeName": "Mayotte",
        "numericCode": "175",
        "population": 226915,
        "region": "Africa",
        "regionalBlocs": [
            {
                "acronym": "AU",
                "name": "African Union",
                "otherNames": [
                    "الاتحاد الأفريقي",
                    "Union africaine",
                    "União Africana",
                    "Unión Africana",
                    "Umoja wa Afrika"
                ]
            }
        ],
        "subregion": "Eastern Africa",
        "timezones": [
            "UTC+03:00"
        ],
        "topLevelDomain": [
            ".yt"
        ],
        "translations": {
            "br": "Mayotte",
            "de": "Mayotte",
            "es": "Mayotte",
            "fa": "مایوت",
            "fr": "Mayotte",
            "hr": "Mayotte",
            "it": "Mayotte",
            "ja": "マヨット",
            "nl": "Mayotte",
            "pt": "Mayotte",
            "pl": "Majotta",
            "cs": "Mayotte",
            "ru": "Mayotte",
            "zh": "马约特",
            "hu": "Mayotte",
            "se": "Mayotte"
        },
        "cioc": ""
    },
    {
        "alpha2Code": "MX",
        "alpha3Code": "MEX",
        "altSpellings": [
            "MX",
            "Mexicanos",
            "United Mexican States",
            "Estados Unidos Mexicanos"
        ],
        "area": 1964375,
        "borders": [
            "BLZ",
            "GTM",
            "USA"
        ],
        "callingCodes": [
            "52"
        ],
        "capital": "Mexico City",
        "currencies": [
            {
                "code": "MXN",
                "name": "Mexican peso",
                "symbol": "$"
            }
        ],
        "demonym": "Mexican",
        "flag": "https://restcountries.eu/data/mex.svg",
        "gini": 47,
        "languages": [
            {
                "iso639_1": "es",
                "iso639_2": "spa",
                "name": "Spanish",
                "nativeName": "Español"
            }
        ],
        "latlng": [
            23,
            -102
        ],
        "name": "Mexico",
        "nativeName": "México",
        "numericCode": "484",
        "population": 128932753,
        "region": "Americas",
        "regionalBlocs": [
            {
                "acronym": "PA",
                "name": "Pacific Alliance",
                "otherNames": [
                    "Alianza del Pacífico"
                ]
            },
            {
                "acronym": "NAFTA",
                "name": "North American Free Trade Agreement",
                "otherNames": [
                    "Tratado de Libre Comercio de América del Norte",
                    "Accord de Libre-échange Nord-Américain"
                ]
            }
        ],
        "subregion": "Central America",
        "timezones": [
            "UTC-08:00",
            "UTC-07:00",
            "UTC-06:00"
        ],
        "topLevelDomain": [
            ".mx"
        ],
        "translations": {
            "br": "México",
            "de": "Mexiko",
            "es": "México",
            "fa": "مکزیک",
            "fr": "Mexique",
            "hr": "Meksiko",
            "it": "Messico",
            "ja": "メキシコ",
            "nl": "Mexico",
            "pt": "México",
            "ru": "Мексика",
            "pl": "Meksyk",
            "cs": "Mexiko",
            "zh": "墨西哥合众国",
            "hu": "Mexikó",
            "se": "Mexiko"
        },
        "cioc": "MEX"
    },
    {
        "alpha2Code": "FM",
        "alpha3Code": "FSM",
        "altSpellings": [
            "FM",
            "Federated States of Micronesia"
        ],
        "area": 702,
        "borders": [],
        "callingCodes": [
            "691"
        ],
        "capital": "Palikir",
        "currencies": [
            {
                "code": "USD",
                "name": "United States dollar",
                "symbol": "$"
            }
        ],
        "demonym": "Micronesian",
        "flag": "https://restcountries.eu/data/fsm.svg",
        "languages": [
            {
                "iso639_1": "en",
                "iso639_2": "eng",
                "name": "English",
                "nativeName": "English"
            }
        ],
        "latlng": [
            6.91666666,
            158.25
        ],
        "name": "Micronesia (Federated States of)",
        "nativeName": "Micronesia",
        "numericCode": "583",
        "population": 115021,
        "region": "Oceania",
        "regionalBlocs": [],
        "subregion": "Micronesia",
        "timezones": [
            "UTC+10:00",
            "UTC+11"
        ],
        "topLevelDomain": [
            ".fm"
        ],
        "translations": {
            "br": "Micronésia",
            "de": "Mikronesien",
            "es": "Micronesia",
            "fa": "ایالات فدرال میکرونزی",
            "fr": "Micronésie",
            "hr": "Mikronezija",
            "it": "Micronesia",
            "ja": "ミクロネシア連邦",
            "nl": "Micronesië",
            "pt": "Micronésia",
            "ru": "Микронезия",
            "pl": "Mikronezja",
            "cs": "Mikronésie",
            "zh": "密克罗尼西亚联邦",
            "hu": "Mikronézia",
            "se": "Mikronesiska federationen"
        },
        "cioc": "FSM"
    },
    {
        "alpha2Code": "MD",
        "alpha3Code": "MDA",
        "altSpellings": [
            "MD",
            "Republic of Moldova",
            "Republica Moldova"
        ],
        "area": 33846,
        "borders": [
            "ROU",
            "UKR"
        ],
        "callingCodes": [
            "373"
        ],
        "capital": "Chișinău",
        "currencies": [
            {
                "code": "MDL",
                "name": "Moldovan leu",
                "symbol": "L"
            }
        ],
        "demonym": "Moldovan",
        "flag": "https://restcountries.eu/data/mda.svg",
        "gini": 33,
        "languages": [
            {
                "iso639_1": "ro",
                "iso639_2": "ron",
                "name": "Romanian",
                "nativeName": "Română"
            }
        ],
        "latlng": [
            47,
            29
        ],
        "name": "Moldova (Republic of)",
        "nativeName": "Moldova",
        "numericCode": "498",
        "population": 2617820,
        "region": "Europe",
        "regionalBlocs": [
            {
                "acronym": "CEFTA",
                "name": "Central European Free Trade Agreement"
            }
        ],
        "subregion": "Eastern Europe",
        "timezones": [
            "UTC+02:00"
        ],
        "topLevelDomain": [
            ".md"
        ],
        "translations": {
            "br": "Moldávia",
            "de": "Moldawie",
            "es": "Moldavia",
            "fa": "مولداوی",
            "fr": "Moldavie",
            "hr": "Moldova",
            "it": "Moldavia",
            "ja": "モルドバ共和国",
            "nl": "Moldavië",
            "pt": "Moldávia",
            "ru": "Молдавия",
            "pl": "Mołdawia",
            "cs": "Moldavsko",
            "zh": "摩尔多瓦共和国",
            "hu": "Moldova",
            "se": "Moldavien"
        },
        "cioc": "MDA"
    },
    {
        "alpha2Code": "MC",
        "alpha3Code": "MCO",
        "altSpellings": [
            "MC",
            "Principality of Monaco",
            "Principauté de Monaco"
        ],
        "area": 2.02,
        "borders": [
            "FRA"
        ],
        "callingCodes": [
            "377"
        ],
        "capital": "Monaco",
        "currencies": [
            {
                "code": "EUR",
                "name": "Euro",
                "symbol": "€"
            }
        ],
        "demonym": "Monegasque",
        "flag": "https://restcountries.eu/data/mco.svg",
        "languages": [
            {
                "iso639_1": "fr",
                "iso639_2": "fra",
                "name": "French",
                "nativeName": "français"
            }
        ],
        "latlng": [
            43.73333333,
            7.4
        ],
        "name": "Monaco",
        "nativeName": "Monaco",
        "numericCode": "492",
        "population": 39244,
        "region": "Europe",
        "regionalBlocs": [],
        "subregion": "Western Europe",
        "timezones": [
            "UTC+01:00"
        ],
        "topLevelDomain": [
            ".mc"
        ],
        "translations": {
            "br": "Mônaco",
            "de": "Monaco",
            "es": "Mónaco",
            "fa": "موناکو",
            "fr": "Monaco",
            "hr": "Monako",
            "it": "Principato di Monaco",
            "ja": "モナコ",
            "nl": "Monaco",
            "pt": "Mónaco",
            "ru": "Монако",
            "pl": "Monako",
            "cs": "Monako",
            "zh": "摩纳哥公国",
            "hu": "Monaco",
            "se": "Monaco"
        },
        "cioc": "MON"
    },
    {
        "alpha2Code": "MN",
        "alpha3Code": "MNG",
        "altSpellings": [
            "MN"
        ],
        "area": 1564110,
        "borders": [
            "CHN",
            "RUS"
        ],
        "callingCodes": [
            "976"
        ],
        "capital": "Ulan Bator",
        "currencies": [
            {
                "code": "MNT",
                "name": "Mongolian tögrög",
                "symbol": "₮"
            }
        ],
        "demonym": "Mongolian",
        "flag": "https://restcountries.eu/data/mng.svg",
        "gini": 36.5,
        "languages": [
            {
                "iso639_1": "mn",
                "iso639_2": "mon",
                "name": "Mongolian",
                "nativeName": "Монгол хэл"
            }
        ],
        "latlng": [
            46,
            105
        ],
        "name": "Mongolia",
        "nativeName": "Монгол улс",
        "numericCode": "496",
        "population": 3278292,
        "region": "Asia",
        "regionalBlocs": [],
        "subregion": "Eastern Asia",
        "timezones": [
            "UTC+07:00",
            "UTC+08:00"
        ],
        "topLevelDomain": [
            ".mn"
        ],
        "translations": {
            "br": "Mongólia",
            "de": "Mongolei",
            "es": "Mongolia",
            "fa": "مغولستان",
            "fr": "Mongolie",
            "hr": "Mongolija",
            "it": "Mongolia",
            "ja": "モンゴル",
            "nl": "Mongolië",
            "pt": "Mongólia",
            "ru": "Монголия",
            "pl": "Mongolia",
            "cs": "Mongolsko",
            "zh": "蒙古",
            "hu": "Mongólia",
            "se": "Mongoliet"
        },
        "cioc": "MGL"
    },
    {
        "alpha2Code": "ME",
        "alpha3Code": "MNE",
        "altSpellings": [
            "ME",
            "Crna Gora"
        ],
        "area": 13812,
        "borders": [
            "ALB",
            "BIH",
            "HRV",
            "UNK",
            "SRB"
        ],
        "callingCodes": [
            "382"
        ],
        "capital": "Podgorica",
        "currencies": [
            {
                "code": "EUR",
                "name": "Euro",
                "symbol": "€"
            }
        ],
        "demonym": "Montenegrin",
        "flag": "https://restcountries.eu/data/mne.svg",
        "gini": 30,
        "languages": [
            {
                "iso639_1": "sr",
                "iso639_2": "srp",
                "name": "Serbian",
                "nativeName": "српски језик"
            },
            {
                "iso639_1": "bs",
                "iso639_2": "bos",
                "name": "Bosnian",
                "nativeName": "bosanski jezik"
            },
            {
                "iso639_1": "sq",
                "iso639_2": "sqi",
                "name": "Albanian",
                "nativeName": "Shqip"
            },
            {
                "iso639_1": "hr",
                "iso639_2": "hrv",
                "name": "Croatian",
                "nativeName": "hrvatski jezik"
            }
        ],
        "latlng": [
            42.5,
            19.3
        ],
        "name": "Montenegro",
        "nativeName": "Црна Гора",
        "numericCode": "499",
        "population": 621718,
        "region": "Europe",
        "regionalBlocs": [
            {
                "acronym": "CEFTA",
                "name": "Central European Free Trade Agreement"
            }
        ],
        "subregion": "Southern Europe",
        "timezones": [
            "UTC+01:00"
        ],
        "topLevelDomain": [
            ".me"
        ],
        "translations": {
            "br": "Montenegro",
            "de": "Montenegro",
            "es": "Montenegro",
            "fa": "مونته‌نگرو",
            "fr": "Monténégro",
            "hr": "Crna Gora",
            "it": "Montenegro",
            "ja": "モンテネグロ",
            "nl": "Montenegro",
            "pt": "Montenegro",
            "ru": "Черногория",
            "pl": "Czarnogóra",
            "cs": "Černá Hora",
            "zh": "黑山",
            "hu": "Montenegró",
            "se": "Montenegro"
        },
        "cioc": "MNE"
    },
    {
        "alpha2Code": "MS",
        "alpha3Code": "MSR",
        "altSpellings": [
            "MS"
        ],
        "area": 102,
        "borders": [],
        "callingCodes": [
            "1"
        ],
        "capital": "Plymouth",
        "currencies": [
            {
                "code": "XCD",
                "name": "East Caribbean dollar",
                "symbol": "$"
            }
        ],
        "demonym": "Montserratian",
        "flag": "https://restcountries.eu/data/msr.svg",
        "languages": [
            {
                "iso639_1": "en",
                "iso639_2": "eng",
                "name": "English",
                "nativeName": "English"
            }
        ],
        "latlng": [
            16.75,
            -62.2
        ],
        "name": "Montserrat",
        "nativeName": "Montserrat",
        "numericCode": "500",
        "population": 4922,
        "region": "Americas",
        "regionalBlocs": [
            {
                "acronym": "CARICOM",
                "name": "Caribbean Community",
                "otherNames": [
                    "Comunidad del Caribe",
                    "Communauté Caribéenne",
                    "Caribische Gemeenschap"
                ]
            }
        ],
        "subregion": "Caribbean",
        "timezones": [
            "UTC-04:00"
        ],
        "topLevelDomain": [
            ".ms"
        ],
        "translations": {
            "br": "Montserrat",
            "de": "Montserrat",
            "es": "Montserrat",
            "fa": "مایوت",
            "fr": "Montserrat",
            "hr": "Montserrat",
            "it": "Montserrat",
            "ja": "モントセラト",
            "nl": "Montserrat",
            "pt": "Monserrate",
            "pl": "Montserrat",
            "cs": "Montserrat",
            "ru": "Montserrat",
            "zh": "蒙特塞拉特",
            "hu": "Montserrat",
            "se": "Montserrat"
        },
        "cioc": ""
    },
    {
        "alpha2Code": "MA",
        "alpha3Code": "MAR",
        "altSpellings": [
            "MA",
            "Kingdom of Morocco",
            "Al-Mamlakah al-Maġribiyah"
        ],
        "area": 446550,
        "borders": [
            "DZA",
            "ESH",
            "ESP"
        ],
        "callingCodes": [
            "212"
        ],
        "capital": "Rabat",
        "currencies": [
            {
                "code": "MAD",
                "name": "Moroccan dirham",
                "symbol": "د.م."
            }
        ],
        "demonym": "Moroccan",
        "flag": "https://restcountries.eu/data/mar.svg",
        "gini": 40.9,
        "languages": [
            {
                "iso639_1": "ar",
                "iso639_2": "ara",
                "name": "Arabic",
                "nativeName": "العربية"
            }
        ],
        "latlng": [
            32,
            -5
        ],
        "name": "Morocco",
        "nativeName": "المغرب",
        "numericCode": "504",
        "population": 36910558,
        "region": "Africa",
        "regionalBlocs": [
            {
                "acronym": "AU",
                "name": "African Union",
                "otherNames": [
                    "الاتحاد الأفريقي",
                    "Union africaine",
                    "União Africana",
                    "Unión Africana",
                    "Umoja wa Afrika"
                ]
            },
            {
                "acronym": "AL",
                "name": "Arab League",
                "otherNames": [
                    "جامعة الدول العربية",
                    "Jāmiʻat ad-Duwal al-ʻArabīyah",
                    "League of Arab States"
                ]
            }
        ],
        "subregion": "Northern Africa",
        "timezones": [
            "UTC"
        ],
        "topLevelDomain": [
            ".ma"
        ],
        "translations": {
            "br": "Marrocos",
            "de": "Marokko",
            "es": "Marruecos",
            "fa": "المغرب",
            "fr": "Maroc",
            "hr": "Maroko",
            "it": "Marocco",
            "ja": "モロッコ",
            "nl": "Marokko",
            "pt": "Marrocos",
            "ru": "Марокко",
            "pl": "Maroko",
            "cs": "Maroko",
            "zh": "摩洛哥王国",
            "hu": "Marokkó",
            "se": "Marocko"
        },
        "cioc": "MAR"
    },
    {
        "alpha2Code": "MZ",
        "alpha3Code": "MOZ",
        "altSpellings": [
            "MZ",
            "Republic of Mozambique",
            "República de Moçambique"
        ],
        "area": 801590,
        "borders": [
            "MWI",
            "ZAF",
            "SWZ",
            "TZA",
            "ZMB",
            "ZWE"
        ],
        "callingCodes": [
            "258"
        ],
        "capital": "Maputo",
        "currencies": [
            {
                "code": "MZN",
                "name": "Mozambican metical",
                "symbol": "MT"
            }
        ],
        "demonym": "Mozambican",
        "flag": "https://restcountries.eu/data/moz.svg",
        "gini": 45.7,
        "languages": [
            {
                "iso639_1": "pt",
                "iso639_2": "por",
                "name": "Portuguese",
                "nativeName": "Português"
            }
        ],
        "latlng": [
            -18.25,
            35
        ],
        "name": "Mozambique",
        "nativeName": "Moçambique",
        "numericCode": "508",
        "population": 31255435,
        "region": "Africa",
        "regionalBlocs": [
            {
                "acronym": "AU",
                "name": "African Union",
                "otherNames": [
                    "الاتحاد الأفريقي",
                    "Union africaine",
                    "União Africana",
                    "Unión Africana",
                    "Umoja wa Afrika"
                ]
            }
        ],
        "subregion": "Eastern Africa",
        "timezones": [
            "UTC+02:00"
        ],
        "topLevelDomain": [
            ".mz"
        ],
        "translations": {
            "br": "Moçambique",
            "de": "Mosambik",
            "es": "Mozambique",
            "fa": "موزامبیک",
            "fr": "Mozambique",
            "hr": "Mozambik",
            "it": "Mozambico",
            "ja": "モザンビーク",
            "nl": "Mozambique",
            "pt": "Moçambique",
            "ru": "Мозамбик",
            "pl": "Mozambik",
            "cs": "Mosambik",
            "zh": "莫桑比克共和国",
            "hu": "Mozambik",
            "se": "Moçambique"
        },
        "cioc": "MOZ"
    },
    {
        "alpha2Code": "MM",
        "alpha3Code": "MMR",
        "altSpellings": [
            "MM",
            "Burma",
            "Republic of the Union of Myanmar",
            "Pyidaunzu Thanmăda Myăma Nainngandaw"
        ],
        "area": 676578,
        "borders": [
            "BGD",
            "CHN",
            "IND",
            "LAO",
            "THA"
        ],
        "callingCodes": [
            "95"
        ],
        "capital": "Naypyidaw",
        "currencies": [
            {
                "code": "MMK",
                "name": "Burmese kyat",
                "symbol": "Ks"
            }
        ],
        "demonym": "Burmese",
        "flag": "https://restcountries.eu/data/mmr.svg",
        "gini": null,
        "languages": [
            {
                "iso639_1": "my",
                "iso639_2": "mya",
                "name": "Burmese",
                "nativeName": "ဗမာစာ"
            }
        ],
        "latlng": [
            22,
            98
        ],
        "name": "Myanmar",
        "nativeName": "Myanma",
        "numericCode": "104",
        "population": 54409794,
        "region": "Asia",
        "regionalBlocs": [
            {
                "acronym": "ASEAN",
                "name": "Association of Southeast Asian Nations"
            }
        ],
        "subregion": "South-Eastern Asia",
        "timezones": [
            "UTC+06:30"
        ],
        "topLevelDomain": [
            ".mm"
        ],
        "translations": {
            "br": "Myanmar",
            "de": "Myanmar",
            "es": "Myanmar",
            "fa": "میانمار",
            "fr": "Myanmar",
            "hr": "Mijanmar",
            "it": "Birmania",
            "ja": "ミャンマー",
            "nl": "Myanmar",
            "pt": "Myanmar",
            "ru": "Мьянма",
            "pl": "Mjanma (Birma)",
            "cs": "Myanmar",
            "zh": "缅甸联邦共和国",
            "hu": "Mianmar",
            "se": "Myanmar"
        },
        "cioc": "MYA"
    },
    {
        "alpha2Code": "NA",
        "alpha3Code": "NAM",
        "altSpellings": [
            "NA",
            "Namibië",
            "Republic of Namibia"
        ],
        "area": 825615,
        "borders": [
            "AGO",
            "BWA",
            "ZAF",
            "ZMB"
        ],
        "callingCodes": [
            "264"
        ],
        "capital": "Windhoek",
        "currencies": [
            {
                "code": "NAD",
                "name": "Namibian dollar",
                "symbol": "$"
            },
            {
                "code": "ZAR",
                "name": "South African rand",
                "symbol": "R"
            }
        ],
        "demonym": "Namibian",
        "flag": "https://restcountries.eu/data/nam.svg",
        "gini": 63.9,
        "languages": [
            {
                "iso639_1": "en",
                "iso639_2": "eng",
                "name": "English",
                "nativeName": "English"
            },
            {
                "iso639_1": "af",
                "iso639_2": "afr",
                "name": "Afrikaans",
                "nativeName": "Afrikaans"
            }
        ],
        "latlng": [
            -22,
            17
        ],
        "name": "Namibia",
        "nativeName": "Namibia",
        "numericCode": "516",
        "population": 2540916,
        "region": "Africa",
        "regionalBlocs": [
            {
                "acronym": "AU",
                "name": "African Union",
                "otherNames": [
                    "الاتحاد الأفريقي",
                    "Union africaine",
                    "União Africana",
                    "Unión Africana",
                    "Umoja wa Afrika"
                ]
            }
        ],
        "subregion": "Southern Africa",
        "timezones": [
            "UTC+01:00"
        ],
        "topLevelDomain": [
            ".na"
        ],
        "translations": {
            "br": "Namíbia",
            "de": "Namibia",
            "es": "Namibia",
            "fa": "نامیبیا",
            "fr": "Namibie",
            "hr": "Namibija",
            "it": "Namibia",
            "ja": "ナミビア",
            "nl": "Namibië",
            "pt": "Namíbia",
            "ru": "Намибия",
            "pl": "Namibia",
            "cs": "Namibie",
            "zh": "纳米比亚共和国",
            "hu": "Namíbia",
            "se": "Namibia"
        },
        "cioc": "NAM"
    },
    {
        "alpha2Code": "NR",
        "alpha3Code": "NRU",
        "altSpellings": [
            "NR",
            "Naoero",
            "Pleasant Island",
            "Republic of Nauru",
            "Ripublik Naoero"
        ],
        "area": 21,
        "borders": [],
        "callingCodes": [
            "674"
        ],
        "capital": "Yaren",
        "currencies": [
            {
                "code": "AUD",
                "name": "Australian dollar",
                "symbol": "$"
            },
            {
                "code": "(none)",
                "name": null,
                "symbol": "$"
            }
        ],
        "demonym": "Nauruan",
        "flag": "https://restcountries.eu/data/nru.svg",
        "languages": [
            {
                "iso639_1": "en",
                "iso639_2": "eng",
                "name": "English",
                "nativeName": "English"
            },
            {
                "iso639_1": "na",
                "iso639_2": "nau",
                "name": "Nauruan",
                "nativeName": "Dorerin Naoero"
            }
        ],
        "latlng": [
            -0.53333333,
            166.91666666
        ],
        "name": "Nauru",
        "nativeName": "Nauru",
        "numericCode": "520",
        "population": 10834,
        "region": "Oceania",
        "regionalBlocs": [],
        "subregion": "Micronesia",
        "timezones": [
            "UTC+12:00"
        ],
        "topLevelDomain": [
            ".nr"
        ],
        "translations": {
            "br": "Nauru",
            "de": "Nauru",
            "es": "Nauru",
            "fa": "نائورو",
            "fr": "Nauru",
            "hr": "Nauru",
            "it": "Nauru",
            "ja": "ナウル",
            "nl": "Nauru",
            "pt": "Nauru",
            "ru": "Науру",
            "pl": "Nauru",
            "cs": "Nauru",
            "zh": "瑙鲁共和国",
            "hu": "Nauru",
            "se": "Nauru"
        },
        "cioc": "NRU"
    },
    {
        "alpha2Code": "NP",
        "alpha3Code": "NPL",
        "altSpellings": [
            "NP",
            "Federal Democratic Republic of Nepal",
            "Loktāntrik Ganatantra Nepāl"
        ],
        "area": 147181,
        "borders": [
            "CHN",
            "IND"
        ],
        "callingCodes": [
            "977"
        ],
        "capital": "Kathmandu",
        "currencies": [
            {
                "code": "NPR",
                "name": "Nepalese rupee",
                "symbol": "₨"
            }
        ],
        "demonym": "Nepalese",
        "flag": "https://restcountries.eu/data/npl.svg",
        "gini": 32.8,
        "languages": [
            {
                "iso639_1": "ne",
                "iso639_2": "nep",
                "name": "Nepali",
                "nativeName": "नेपाली"
            }
        ],
        "latlng": [
            28,
            84
        ],
        "name": "Nepal",
        "nativeName": "नेपाल",
        "numericCode": "524",
        "population": 29136808,
        "region": "Asia",
        "regionalBlocs": [
            {
                "acronym": "SAARC",
                "name": "South Asian Association for Regional Cooperation"
            }
        ],
        "subregion": "Southern Asia",
        "timezones": [
            "UTC+05:45"
        ],
        "topLevelDomain": [
            ".np"
        ],
        "translations": {
            "br": "Nepal",
            "de": "Népal",
            "es": "Nepal",
            "fa": "نپال",
            "fr": "Népal",
            "hr": "Nepal",
            "it": "Nepal",
            "ja": "ネパール",
            "nl": "Nepal",
            "pt": "Nepal",
            "ru": "Непал",
            "pl": "Nepal",
            "cs": "Nepál",
            "zh": "尼泊尔联邦民主共和国",
            "hu": "Nepál",
            "se": "Nepal"
        },
        "cioc": "NEP"
    },
    {
        "alpha2Code": "NL",
        "alpha3Code": "NLD",
        "altSpellings": [
            "NL",
            "Holland",
            "Nederland"
        ],
        "area": 41850,
        "borders": [
            "BEL",
            "DEU"
        ],
        "callingCodes": [
            "31"
        ],
        "capital": "Amsterdam",
        "currencies": [
            {
                "code": "EUR",
                "name": "Euro",
                "symbol": "€"
            }
        ],
        "demonym": "Dutch",
        "flag": "https://restcountries.eu/data/nld.svg",
        "gini": 30.9,
        "languages": [
            {
                "iso639_1": "nl",
                "iso639_2": "nld",
                "name": "Dutch",
                "nativeName": "Nederlands"
            }
        ],
        "latlng": [
            52.5,
            5.75
        ],
        "name": "Netherlands",
        "nativeName": "Nederland",
        "numericCode": "528",
        "population": 17441139,
        "region": "Europe",
        "regionalBlocs": [
            {
                "acronym": "EU",
                "name": "European Union"
            }
        ],
        "subregion": "Western Europe",
        "timezones": [
            "UTC-04:00",
            "UTC+01:00"
        ],
        "topLevelDomain": [
            ".nl"
        ],
        "translations": {
            "br": "Holanda",
            "de": "Niederlande",
            "es": "Países Bajos",
            "fa": "پادشاهی هلند",
            "fr": "Pays-Bas",
            "hr": "Nizozemska",
            "it": "Paesi Bassi",
            "ja": "オランダ",
            "nl": "Nederland",
            "pt": "Países Baixos",
            "ru": "Нидерланды",
            "pl": "Holandia",
            "cs": "Nizozemsko",
            "zh": "荷兰",
            "hu": "Hollandia",
            "se": "Nederländerna"
        },
        "cioc": "NED"
    },
    {
        "alpha2Code": "NC",
        "alpha3Code": "NCL",
        "altSpellings": [
            "NC"
        ],
        "area": 18575,
        "borders": [],
        "callingCodes": [
            "687"
        ],
        "capital": "Nouméa",
        "currencies": [
            {
                "code": "XPF",
                "name": "CFP franc",
                "symbol": "Fr"
            }
        ],
        "demonym": "New Caledonian",
        "flag": "https://restcountries.eu/data/ncl.svg",
        "languages": [
            {
                "iso639_1": "fr",
                "iso639_2": "fra",
                "name": "French",
                "nativeName": "français"
            }
        ],
        "latlng": [
            -21.5,
            165.5
        ],
        "name": "New Caledonia",
        "nativeName": "Nouvelle-Calédonie",
        "numericCode": "540",
        "population": 271960,
        "region": "Oceania",
        "regionalBlocs": [],
        "subregion": "Melanesia",
        "timezones": [
            "UTC+11:00"
        ],
        "topLevelDomain": [
            ".nc"
        ],
        "translations": {
            "br": "Nova Caledônia",
            "de": "Neukaledonien",
            "es": "Nueva Caledonia",
            "fa": "کالدونیای جدید",
            "fr": "Nouvelle-Calédonie",
            "hr": "Nova Kaledonija",
            "it": "Nuova Caledonia",
            "ja": "ニューカレドニア",
            "nl": "Nieuw-Caledonië",
            "pt": "Nova Caledónia",
            "pl": "Nowa Kaledonia",
            "cs": "Nová Kaledonie",
            "ru": "New Caledonia",
            "zh": "新喀里多尼亚",
            "hu": "Új-Kaledónia",
            "se": "Nya Kaledonien"
        },
        "cioc": ""
    },
    {
        "alpha2Code": "NZ",
        "alpha3Code": "NZL",
        "altSpellings": [
            "NZ",
            "Aotearoa"
        ],
        "area": 270467,
        "borders": [],
        "callingCodes": [
            "64"
        ],
        "capital": "Wellington",
        "currencies": [
            {
                "code": "NZD",
                "name": "New Zealand dollar",
                "symbol": "$"
            }
        ],
        "demonym": "New Zealander",
        "flag": "https://restcountries.eu/data/nzl.svg",
        "gini": 36.2,
        "languages": [
            {
                "iso639_1": "en",
                "iso639_2": "eng",
                "name": "English",
                "nativeName": "English"
            },
            {
                "iso639_1": "mi",
                "iso639_2": "mri",
                "name": "Māori",
                "nativeName": "te reo Māori"
            }
        ],
        "latlng": [
            -41,
            174
        ],
        "name": "New Zealand",
        "nativeName": "New Zealand",
        "numericCode": "554",
        "population": 5084300,
        "region": "Oceania",
        "regionalBlocs": [],
        "subregion": "Australia and New Zealand",
        "timezones": [
            "UTC-11:00",
            "UTC-10:00",
            "UTC+12:00",
            "UTC+12:45",
            "UTC+13:00"
        ],
        "topLevelDomain": [
            ".nz"
        ],
        "translations": {
            "br": "Nova Zelândia",
            "de": "Neuseeland",
            "es": "Nueva Zelanda",
            "fa": "نیوزیلند",
            "fr": "Nouvelle-Zélande",
            "hr": "Novi Zeland",
            "it": "Nuova Zelanda",
            "ja": "ニュージーランド",
            "nl": "Nieuw-Zeeland",
            "pt": "Nova Zelândia",
            "ru": "Новая Зеландия",
            "pl": "Nowa Zelandia",
            "cs": "Nový Zéland",
            "zh": "新西兰",
            "hu": "Új-Zéland",
            "se": "Nya Zeeland"
        },
        "cioc": "NZL"
    },
    {
        "alpha2Code": "NI",
        "alpha3Code": "NIC",
        "altSpellings": [
            "NI",
            "Republic of Nicaragua",
            "República de Nicaragua"
        ],
        "area": 130373,
        "borders": [
            "CRI",
            "HND"
        ],
        "callingCodes": [
            "505"
        ],
        "capital": "Managua",
        "currencies": [
            {
                "code": "NIO",
                "name": "Nicaraguan córdoba",
                "symbol": "C$"
            }
        ],
        "demonym": "Nicaraguan",
        "flag": "https://restcountries.eu/data/nic.svg",
        "gini": 40.5,
        "languages": [
            {
                "iso639_1": "es",
                "iso639_2": "spa",
                "name": "Spanish",
                "nativeName": "Español"
            }
        ],
        "latlng": [
            13,
            -85
        ],
        "name": "Nicaragua",
        "nativeName": "Nicaragua",
        "numericCode": "558",
        "population": 6624554,
        "region": "Americas",
        "regionalBlocs": [
            {
                "acronym": "CAIS",
                "name": "Central American Integration System",
                "otherAcronyms": [
                    "SICA"
                ],
                "otherNames": [
                    "Sistema de la Integración Centroamericana,"
                ]
            }
        ],
        "subregion": "Central America",
        "timezones": [
            "UTC-06:00"
        ],
        "topLevelDomain": [
            ".ni"
        ],
        "translations": {
            "br": "Nicarágua",
            "de": "Nicaragua",
            "es": "Nicaragua",
            "fa": "نیکاراگوئه",
            "fr": "Nicaragua",
            "hr": "Nikaragva",
            "it": "Nicaragua",
            "ja": "ニカラグア",
            "nl": "Nicaragua",
            "pt": "Nicarágua",
            "ru": "Никарагуа",
            "pl": "Nikaragua",
            "cs": "Nikaragua",
            "zh": "尼加拉瓜共和国",
            "hu": "Nicaragua",
            "se": "Nicaragua"
        },
        "cioc": "NCA"
    },
    {
        "alpha2Code": "NE",
        "alpha3Code": "NER",
        "altSpellings": [
            "NE",
            "Nijar",
            "Republic of Niger",
            "République du Niger"
        ],
        "area": 1267000,
        "borders": [
            "DZA",
            "BEN",
            "BFA",
            "TCD",
            "LBY",
            "MLI",
            "NGA"
        ],
        "callingCodes": [
            "227"
        ],
        "capital": "Niamey",
        "currencies": [
            {
                "code": "XOF",
                "name": "West African CFA franc",
                "symbol": "Fr"
            }
        ],
        "demonym": "Nigerien",
        "flag": "https://restcountries.eu/data/ner.svg",
        "gini": 34.6,
        "languages": [
            {
                "iso639_1": "fr",
                "iso639_2": "fra",
                "name": "French",
                "nativeName": "français"
            }
        ],
        "latlng": [
            16,
            8
        ],
        "name": "Niger",
        "nativeName": "Niger",
        "numericCode": "562",
        "population": 24206636,
        "region": "Africa",
        "regionalBlocs": [
            {
                "acronym": "AU",
                "name": "African Union",
                "otherNames": [
                    "الاتحاد الأفريقي",
                    "Union africaine",
                    "União Africana",
                    "Unión Africana",
                    "Umoja wa Afrika"
                ]
            }
        ],
        "subregion": "Western Africa",
        "timezones": [
            "UTC+01:00"
        ],
        "topLevelDomain": [
            ".ne"
        ],
        "translations": {
            "br": "Níger",
            "de": "Niger",
            "es": "Níger",
            "fa": "نیجر",
            "fr": "Niger",
            "hr": "Niger",
            "it": "Niger",
            "ja": "ニジェール",
            "nl": "Niger",
            "pt": "Níger",
            "ru": "Нигер",
            "pl": "Niger",
            "cs": "Niger",
            "zh": "尼日尔共和国",
            "hu": "Niger",
            "se": "Niger"
        },
        "cioc": "NIG"
    },
    {
        "alpha2Code": "NG",
        "alpha3Code": "NGA",
        "altSpellings": [
            "NG",
            "Nijeriya",
            "Naíjíríà",
            "Federal Republic of Nigeria"
        ],
        "area": 923768,
        "borders": [
            "BEN",
            "CMR",
            "TCD",
            "NER"
        ],
        "callingCodes": [
            "234"
        ],
        "capital": "Abuja",
        "currencies": [
            {
                "code": "NGN",
                "name": "Nigerian naira",
                "symbol": "₦"
            }
        ],
        "demonym": "Nigerian",
        "flag": "https://restcountries.eu/data/nga.svg",
        "gini": 48.8,
        "languages": [
            {
                "iso639_1": "en",
                "iso639_2": "eng",
                "name": "English",
                "nativeName": "English"
            }
        ],
        "latlng": [
            10,
            8
        ],
        "name": "Nigeria",
        "nativeName": "Nigeria",
        "numericCode": "566",
        "population": 206139587,
        "region": "Africa",
        "regionalBlocs": [
            {
                "acronym": "AU",
                "name": "African Union",
                "otherNames": [
                    "الاتحاد الأفريقي",
                    "Union africaine",
                    "União Africana",
                    "Unión Africana",
                    "Umoja wa Afrika"
                ]
            }
        ],
        "subregion": "Western Africa",
        "timezones": [
            "UTC+01:00"
        ],
        "topLevelDomain": [
            ".ng"
        ],
        "translations": {
            "br": "Nigéria",
            "de": "Nigeria",
            "es": "Nigeria",
            "fa": "نیجریه",
            "fr": "Nigéria",
            "hr": "Nigerija",
            "it": "Nigeria",
            "ja": "ナイジェリア",
            "nl": "Nigeria",
            "pt": "Nigéria",
            "ru": "Нигерия",
            "pl": "Nigeria",
            "cs": "Nigérie",
            "zh": "尼日利亚联邦共和国",
            "hu": "Nigéria",
            "se": "Nigeria"
        },
        "cioc": "NGR"
    },
    {
        "alpha2Code": "NU",
        "alpha3Code": "NIU",
        "altSpellings": [
            "NU"
        ],
        "area": 260,
        "borders": [],
        "callingCodes": [
            "683"
        ],
        "capital": "Alofi",
        "currencies": [
            {
                "code": "NZD",
                "name": "New Zealand dollar",
                "symbol": "$"
            },
            {
                "code": "(none)",
                "name": "Niue dollar",
                "symbol": "$"
            }
        ],
        "demonym": "Niuean",
        "flag": "https://restcountries.eu/data/niu.svg",
        "languages": [
            {
                "iso639_1": "en",
                "iso639_2": "eng",
                "name": "English",
                "nativeName": "English"
            }
        ],
        "latlng": [
            -19.03333333,
            -169.86666666
        ],
        "name": "Niue",
        "nativeName": "Niuē",
        "numericCode": "570",
        "population": 1470,
        "region": "Oceania",
        "regionalBlocs": [],
        "subregion": "Polynesia",
        "timezones": [
            "UTC-11:00"
        ],
        "topLevelDomain": [
            ".nu"
        ],
        "translations": {
            "br": "Niue",
            "de": "Niue",
            "es": "Niue",
            "fa": "نیووی",
            "fr": "Niue",
            "hr": "Niue",
            "it": "Niue",
            "ja": "ニウエ",
            "nl": "Niue",
            "pt": "Niue",
            "pl": "Niue",
            "cs": "Niue",
            "ru": "Niue",
            "zh": "纽埃",
            "hu": "Niue",
            "se": "Niue"
        },
        "cioc": ""
    },
    {
        "alpha2Code": "NF",
        "alpha3Code": "NFK",
        "altSpellings": [
            "NF",
            "Territory of Norfolk Island",
            "Teratri of Norf'k Ailen"
        ],
        "area": 36,
        "borders": [],
        "callingCodes": [
            "672"
        ],
        "capital": "Kingston",
        "currencies": [
            {
                "code": "AUD",
                "name": "Australian dollar",
                "symbol": "$"
            }
        ],
        "demonym": "Norfolk Islander",
        "flag": "https://restcountries.eu/data/nfk.svg",
        "languages": [
            {
                "iso639_1": "en",
                "iso639_2": "eng",
                "name": "English",
                "nativeName": "English"
            }
        ],
        "latlng": [
            -29.03333333,
            167.95
        ],
        "name": "Norfolk Island",
        "nativeName": "Norfolk Island",
        "numericCode": "574",
        "population": 2302,
        "region": "Oceania",
        "regionalBlocs": [],
        "subregion": "Australia and New Zealand",
        "timezones": [
            "UTC+11:30"
        ],
        "topLevelDomain": [
            ".nf"
        ],
        "translations": {
            "br": "Ilha Norfolk",
            "de": "Norfolkinsel",
            "es": "Isla de Norfolk",
            "fa": "جزیره نورفک",
            "fr": "Île de Norfolk",
            "hr": "Otok Norfolk",
            "it": "Isola Norfolk",
            "ja": "ノーフォーク島",
            "nl": "Norfolkeiland",
            "pt": "Ilha Norfolk",
            "pl": "Norfolk",
            "cs": "Norfolk",
            "ru": "Norfolk Island",
            "zh": "诺福克岛",
            "hu": "Norfolk-sziget",
            "se": "Norfolkön"
        },
        "cioc": ""
    },
    {
        "alpha2Code": "KP",
        "alpha3Code": "PRK",
        "altSpellings": [
            "KP",
            "Democratic People's Republic of Korea",
            "North Korea",
            "조선민주주의인민공화국",
            "Chosŏn Minjujuŭi Inmin Konghwaguk"
        ],
        "area": 120538,
        "borders": [
            "CHN",
            "KOR",
            "RUS"
        ],
        "callingCodes": [
            "850"
        ],
        "capital": "Pyongyang",
        "currencies": [
            {
                "code": "KPW",
                "name": "North Korean won",
                "symbol": "₩"
            }
        ],
        "demonym": "North Korean",
        "flag": "https://restcountries.eu/data/prk.svg",
        "gini": null,
        "languages": [
            {
                "iso639_1": "ko",
                "iso639_2": "kor",
                "name": "Korean",
                "nativeName": "한국어"
            }
        ],
        "latlng": [
            40,
            127
        ],
        "name": "Korea (Democratic People's Republic of)",
        "nativeName": "북한",
        "numericCode": "408",
        "population": 25778815,
        "region": "Asia",
        "regionalBlocs": [],
        "subregion": "Eastern Asia",
        "timezones": [
            "UTC+09:00"
        ],
        "topLevelDomain": [
            ".kp"
        ],
        "translations": {
            "br": "Coreia do Norte",
            "de": "Nordkorea",
            "es": "Corea del Norte",
            "fa": "کره جنوبی",
            "fr": "Corée du Nord",
            "hr": "Sjeverna Koreja",
            "it": "Corea del Nord",
            "ja": "朝鮮民主主義人民共和国",
            "nl": "Noord-Korea",
            "pt": "Coreia do Norte",
            "ru": "КНДР (Корейская Народно-Демократическая Республика)",
            "pl": "Korea Północna",
            "cs": "Severní Korea",
            "zh": "朝鲜人民民主共和国",
            "hu": "Észak-Korea",
            "se": "Nordkorea"
        },
        "cioc": "PRK"
    },
    {
        "alpha2Code": "MP",
        "alpha3Code": "MNP",
        "altSpellings": [
            "MP",
            "Commonwealth of the Northern Mariana Islands",
            "Sankattan Siha Na Islas Mariånas"
        ],
        "area": 464,
        "borders": [],
        "callingCodes": [
            "1"
        ],
        "capital": "Saipan",
        "currencies": [
            {
                "code": "USD",
                "name": "United States dollar",
                "symbol": "$"
            }
        ],
        "demonym": "American",
        "flag": "https://restcountries.eu/data/mnp.svg",
        "languages": [
            {
                "iso639_1": "en",
                "iso639_2": "eng",
                "name": "English",
                "nativeName": "English"
            },
            {
                "iso639_1": "ch",
                "iso639_2": "cha",
                "name": "Chamorro",
                "nativeName": "Chamoru"
            }
        ],
        "latlng": [
            15.2,
            145.75
        ],
        "name": "Northern Mariana Islands",
        "nativeName": "Northern Mariana Islands",
        "numericCode": "580",
        "population": 57557,
        "region": "Oceania",
        "regionalBlocs": [],
        "subregion": "Micronesia",
        "timezones": [
            "UTC+10:00"
        ],
        "topLevelDomain": [
            ".mp"
        ],
        "translations": {
            "br": "Ilhas Marianas",
            "de": "Nördliche Marianen",
            "es": "Islas Marianas del Norte",
            "fa": "جزایر ماریانای شمالی",
            "fr": "Îles Mariannes du Nord",
            "hr": "Sjevernomarijanski otoci",
            "it": "Isole Marianne Settentrionali",
            "ja": "北マリアナ諸島",
            "nl": "Noordelijke Marianeneilanden",
            "pt": "Ilhas Marianas",
            "pl": "Mariany Północne",
            "cs": "Severní Mariany",
            "ru": "Northern Mariana Islands",
            "zh": "北马里亚纳群岛",
            "hu": "Északi-Mariana-szigetek",
            "se": "Nordmarianerna"
        },
        "cioc": ""
    },
    {
        "alpha2Code": "NO",
        "alpha3Code": "NOR",
        "altSpellings": [
            "NO",
            "Norge",
            "Noreg",
            "Kingdom of Norway",
            "Kongeriket Norge",
            "Kongeriket Noreg"
        ],
        "area": 323802,
        "borders": [
            "FIN",
            "SWE",
            "RUS"
        ],
        "callingCodes": [
            "47"
        ],
        "capital": "Oslo",
        "currencies": [
            {
                "code": "NOK",
                "name": "Norwegian krone",
                "symbol": "kr"
            }
        ],
        "demonym": "Norwegian",
        "flag": "https://restcountries.eu/data/nor.svg",
        "gini": 25.8,
        "languages": [
            {
                "iso639_1": "no",
                "iso639_2": "nor",
                "name": "Norwegian",
                "nativeName": "Norsk"
            },
            {
                "iso639_1": "nb",
                "iso639_2": "nob",
                "name": "Norwegian Bokmål",
                "nativeName": "Norsk bokmål"
            },
            {
                "iso639_1": "nn",
                "iso639_2": "nno",
                "name": "Norwegian Nynorsk",
                "nativeName": "Norsk nynorsk"
            }
        ],
        "latlng": [
            62,
            10
        ],
        "name": "Norway",
        "nativeName": "Norge",
        "numericCode": "578",
        "population": 5379475,
        "region": "Europe",
        "regionalBlocs": [
            {
                "acronym": "EFTA",
                "name": "European Free Trade Association"
            }
        ],
        "subregion": "Northern Europe",
        "timezones": [
            "UTC+01:00"
        ],
        "topLevelDomain": [
            ".no"
        ],
        "translations": {
            "br": "Noruega",
            "de": "Norwegen",
            "es": "Noruega",
            "fa": "نروژ",
            "fr": "Norvège",
            "hr": "Norveška",
            "it": "Norvegia",
            "ja": "ノルウェー",
            "nl": "Noorwegen",
            "pt": "Noruega",
            "ru": "Норвегия",
            "pl": "Norwegia",
            "cs": "Norsko",
            "zh": "挪威王国",
            "hu": "Norvégia",
            "se": "Norge"
        },
        "cioc": "NOR"
    },
    {
        "alpha2Code": "OM",
        "alpha3Code": "OMN",
        "altSpellings": [
            "OM",
            "Sultanate of Oman",
            "Salṭanat ʻUmān"
        ],
        "area": 309500,
        "borders": [
            "SAU",
            "ARE",
            "YEM"
        ],
        "callingCodes": [
            "968"
        ],
        "capital": "Muscat",
        "currencies": [
            {
                "code": "OMR",
                "name": "Omani rial",
                "symbol": "ر.ع."
            }
        ],
        "demonym": "Omani",
        "flag": "https://restcountries.eu/data/omn.svg",
        "gini": null,
        "languages": [
            {
                "iso639_1": "ar",
                "iso639_2": "ara",
                "name": "Arabic",
                "nativeName": "العربية"
            }
        ],
        "latlng": [
            21,
            57
        ],
        "name": "Oman",
        "nativeName": "عمان",
        "numericCode": "512",
        "population": 5106622,
        "region": "Asia",
        "regionalBlocs": [
            {
                "acronym": "AL",
                "name": "Arab League",
                "otherNames": [
                    "جامعة الدول العربية",
                    "Jāmiʻat ad-Duwal al-ʻArabīyah",
                    "League of Arab States"
                ]
            }
        ],
        "subregion": "Western Asia",
        "timezones": [
            "UTC+04:00"
        ],
        "topLevelDomain": [
            ".om"
        ],
        "translations": {
            "br": "Omã",
            "de": "Oman",
            "es": "Omán",
            "fa": "عمان",
            "fr": "Oman",
            "hr": "Oman",
            "it": "oman",
            "ja": "オマーン",
            "nl": "Oman",
            "pt": "Omã",
            "ru": "Оман",
            "pl": "Oman",
            "cs": "Omán",
            "zh": "阿曼苏丹国",
            "hu": "Omán",
            "se": "Oman"
        },
        "cioc": "OMA"
    },
    {
        "alpha2Code": "PK",
        "alpha3Code": "PAK",
        "altSpellings": [
            "PK",
            "Pākistān",
            "Islamic Republic of Pakistan",
            "Islāmī Jumhūriya'eh Pākistān"
        ],
        "area": 881912,
        "borders": [
            "AFG",
            "CHN",
            "IND",
            "IRN"
        ],
        "callingCodes": [
            "92"
        ],
        "capital": "Islamabad",
        "currencies": [
            {
                "code": "PKR",
                "name": "Pakistani rupee",
                "symbol": "₨"
            }
        ],
        "demonym": "Pakistani",
        "flag": "https://restcountries.eu/data/pak.svg",
        "gini": 30,
        "languages": [
            {
                "iso639_1": "en",
                "iso639_2": "eng",
                "name": "English",
                "nativeName": "English"
            },
            {
                "iso639_1": "ur",
                "iso639_2": "urd",
                "name": "Urdu",
                "nativeName": "اردو"
            }
        ],
        "latlng": [
            30,
            70
        ],
        "name": "Pakistan",
        "nativeName": "Pakistan",
        "numericCode": "586",
        "population": 220892331,
        "region": "Asia",
        "regionalBlocs": [
            {
                "acronym": "SAARC",
                "name": "South Asian Association for Regional Cooperation"
            }
        ],
        "subregion": "Southern Asia",
        "timezones": [
            "UTC+05:00"
        ],
        "topLevelDomain": [
            ".pk"
        ],
        "translations": {
            "br": "Paquistão",
            "de": "Pakistan",
            "es": "Pakistán",
            "fa": "پاکستان",
            "fr": "Pakistan",
            "hr": "Pakistan",
            "it": "Pakistan",
            "ja": "パキスタン",
            "nl": "Pakistan",
            "pt": "Paquistão",
            "ru": "Пакистан",
            "pl": "Pakistan",
            "cs": "Pákistán",
            "zh": "巴基斯坦伊斯兰共和国",
            "hu": "Pakisztán",
            "se": "Pakistan"
        },
        "cioc": "PAK"
    },
    {
        "alpha2Code": "PW",
        "alpha3Code": "PLW",
        "altSpellings": [
            "PW",
            "Republic of Palau",
            "Beluu er a Belau"
        ],
        "area": 459,
        "borders": [],
        "callingCodes": [
            "680"
        ],
        "capital": "Ngerulmud",
        "currencies": [
            {
                "code": "USD",
                "name": "United States dollar",
                "symbol": "$"
            }
        ],
        "demonym": "Palauan",
        "flag": "https://restcountries.eu/data/plw.svg",
        "languages": [
            {
                "iso639_1": "en",
                "iso639_2": "eng",
                "name": "English",
                "nativeName": "English"
            }
        ],
        "latlng": [
            7.5,
            134.5
        ],
        "name": "Palau",
        "nativeName": "Palau",
        "numericCode": "585",
        "population": 18092,
        "region": "Oceania",
        "regionalBlocs": [],
        "subregion": "Micronesia",
        "timezones": [
            "UTC+09:00"
        ],
        "topLevelDomain": [
            ".pw"
        ],
        "translations": {
            "br": "Palau",
            "de": "Palau",
            "es": "Palau",
            "fa": "پالائو",
            "fr": "Palaos",
            "hr": "Palau",
            "it": "Palau",
            "ja": "パラオ",
            "nl": "Palau",
            "pt": "Palau",
            "ru": "Палау",
            "pl": "Palau",
            "cs": "Palau",
            "zh": "帕劳共和国",
            "hu": "Palau",
            "se": "Palau"
        },
        "cioc": "PLW"
    },
    {
        "alpha2Code": "PS",
        "alpha3Code": "PSE",
        "altSpellings": [
            "PS",
            "State of Palestine",
            "Dawlat Filasṭin"
        ],
        "borders": [
            "ISR",
            "EGY",
            "JOR"
        ],
        "callingCodes": [
            "970"
        ],
        "capital": "Ramallah",
        "currencies": [
            {
                "code": "ILS",
                "name": "Israeli new sheqel",
                "symbol": "₪"
            }
        ],
        "demonym": "Palestinian",
        "flag": "https://restcountries.eu/data/pse.svg",
        "gini": 35.5,
        "languages": [
            {
                "iso639_1": "ar",
                "iso639_2": "ara",
                "name": "Arabic",
                "nativeName": "العربية"
            }
        ],
        "latlng": [
            31.9,
            35.2
        ],
        "name": "Palestine, State of",
        "nativeName": "فلسطين",
        "numericCode": "275",
        "population": 4803269,
        "region": "Asia",
        "regionalBlocs": [
            {
                "acronym": "AL",
                "name": "Arab League",
                "otherNames": [
                    "جامعة الدول العربية",
                    "Jāmiʻat ad-Duwal al-ʻArabīyah",
                    "League of Arab States"
                ]
            }
        ],
        "subregion": "Western Asia",
        "timezones": [
            "UTC+02:00"
        ],
        "topLevelDomain": [
            ".ps"
        ],
        "translations": {
            "br": "Palestina",
            "de": "Palästina",
            "es": "Palestina",
            "fa": "فلسطین",
            "fr": "Palestine",
            "hr": "Palestina",
            "it": "Palestina",
            "ja": "パレスチナ",
            "nl": "Palestijnse gebieden",
            "pt": "Palestina",
            "pl": "Palestyna",
            "cs": "Palestina",
            "ru": "Palestine, State of",
            "zh": "巴勒斯坦国",
            "hu": "Palesztina",
            "se": "Palestina"
        },
        "cioc": "PLE"
    },
    {
        "alpha2Code": "PA",
        "alpha3Code": "PAN",
        "altSpellings": [
            "PA",
            "Republic of Panama",
            "República de Panamá"
        ],
        "area": 75417,
        "borders": [
            "COL",
            "CRI"
        ],
        "callingCodes": [
            "507"
        ],
        "capital": "Panama City",
        "currencies": [
            {
                "code": "PAB",
                "name": "Panamanian balboa",
                "symbol": "B/."
            },
            {
                "code": "USD",
                "name": "United States dollar",
                "symbol": "$"
            }
        ],
        "demonym": "Panamanian",
        "flag": "https://restcountries.eu/data/pan.svg",
        "gini": 51.9,
        "languages": [
            {
                "iso639_1": "es",
                "iso639_2": "spa",
                "name": "Spanish",
                "nativeName": "Español"
            }
        ],
        "latlng": [
            9,
            -80
        ],
        "name": "Panama",
        "nativeName": "Panamá",
        "numericCode": "591",
        "population": 4314768,
        "region": "Americas",
        "regionalBlocs": [
            {
                "acronym": "CAIS",
                "name": "Central American Integration System",
                "otherAcronyms": [
                    "SICA"
                ],
                "otherNames": [
                    "Sistema de la Integración Centroamericana,"
                ]
            }
        ],
        "subregion": "Central America",
        "timezones": [
            "UTC-05:00"
        ],
        "topLevelDomain": [
            ".pa"
        ],
        "translations": {
            "br": "Panamá",
            "de": "Panama",
            "es": "Panamá",
            "fa": "پاناما",
            "fr": "Panama",
            "hr": "Panama",
            "it": "Panama",
            "ja": "パナマ",
            "nl": "Panama",
            "pt": "Panamá",
            "ru": "Панама",
            "pl": "Panama",
            "cs": "Panama",
            "zh": "巴拿马共和国",
            "hu": "Panama",
            "se": "Panama"
        },
        "cioc": "PAN"
    },
    {
        "alpha2Code": "PG",
        "alpha3Code": "PNG",
        "altSpellings": [
            "PG",
            "Independent State of Papua New Guinea",
            "Independen Stet bilong Papua Niugini"
        ],
        "area": 462840,
        "borders": [
            "IDN"
        ],
        "callingCodes": [
            "675"
        ],
        "capital": "Port Moresby",
        "currencies": [
            {
                "code": "PGK",
                "name": "Papua New Guinean kina",
                "symbol": "K"
            }
        ],
        "demonym": "Papua New Guinean",
        "flag": "https://restcountries.eu/data/png.svg",
        "gini": 50.9,
        "languages": [
            {
                "iso639_1": "en",
                "iso639_2": "eng",
                "name": "English",
                "nativeName": "English"
            }
        ],
        "latlng": [
            -6,
            147
        ],
        "name": "Papua New Guinea",
        "nativeName": "Papua Niugini",
        "numericCode": "598",
        "population": 8947027,
        "region": "Oceania",
        "regionalBlocs": [],
        "subregion": "Melanesia",
        "timezones": [
            "UTC+10:00"
        ],
        "topLevelDomain": [
            ".pg"
        ],
        "translations": {
            "br": "Papua Nova Guiné",
            "de": "Papua-Neuguinea",
            "es": "Papúa Nueva Guinea",
            "fa": "پاپوآ گینه نو",
            "fr": "Papouasie-Nouvelle-Guinée",
            "hr": "Papua Nova Gvineja",
            "it": "Papua Nuova Guinea",
            "ja": "パプアニューギニア",
            "nl": "Papoea-Nieuw-Guinea",
            "pt": "Papua Nova Guiné",
            "ru": "Папуа — Новая Гвинея",
            "pl": "Papua-Nowa Gwinea",
            "cs": "Papua-Nová Guinea",
            "zh": "巴布亚新几内亚",
            "hu": "Pápua Új-Guinea",
            "se": "Papua Nya Guinea"
        },
        "cioc": "PNG"
    },
    {
        "alpha2Code": "PY",
        "alpha3Code": "PRY",
        "altSpellings": [
            "PY",
            "Republic of Paraguay",
            "República del Paraguay",
            "Tetã Paraguái"
        ],
        "area": 406752,
        "borders": [
            "ARG",
            "BOL",
            "BRA"
        ],
        "callingCodes": [
            "595"
        ],
        "capital": "Asunción",
        "currencies": [
            {
                "code": "PYG",
                "name": "Paraguayan guaraní",
                "symbol": "₲"
            }
        ],
        "demonym": "Paraguayan",
        "flag": "https://restcountries.eu/data/pry.svg",
        "gini": 52.4,
        "languages": [
            {
                "iso639_1": "es",
                "iso639_2": "spa",
                "name": "Spanish",
                "nativeName": "Español"
            },
            {
                "iso639_1": "gn",
                "iso639_2": "grn",
                "name": "Guaraní",
                "nativeName": "Avañe'ẽ"
            }
        ],
        "latlng": [
            -23,
            -58
        ],
        "name": "Paraguay",
        "nativeName": "Paraguay",
        "numericCode": "600",
        "population": 7132530,
        "region": "Americas",
        "regionalBlocs": [
            {
                "acronym": "USAN",
                "name": "Union of South American Nations",
                "otherAcronyms": [
                    "UNASUR",
                    "UNASUL",
                    "UZAN"
                ],
                "otherNames": [
                    "Unión de Naciones Suramericanas",
                    "União de Nações Sul-Americanas",
                    "Unie van Zuid-Amerikaanse Naties",
                    "South American Union"
                ]
            }
        ],
        "subregion": "South America",
        "timezones": [
            "UTC-04:00"
        ],
        "topLevelDomain": [
            ".py"
        ],
        "translations": {
            "br": "Paraguai",
            "de": "Paraguay",
            "es": "Paraguay",
            "fa": "پاراگوئه",
            "fr": "Paraguay",
            "hr": "Paragvaj",
            "it": "Paraguay",
            "ja": "パラグアイ",
            "nl": "Paraguay",
            "pt": "Paraguai",
            "ru": "Парагвай",
            "pl": "Paragwaj",
            "cs": "Paraguay",
            "zh": "巴拉圭共和国",
            "hu": "Paraguay",
            "se": "Paraguay"
        },
        "cioc": "PAR"
    },
    {
        "alpha2Code": "PE",
        "alpha3Code": "PER",
        "altSpellings": [
            "PE",
            "Republic of Peru",
            "República del Perú"
        ],
        "area": 1285216,
        "borders": [
            "BOL",
            "BRA",
            "CHL",
            "COL",
            "ECU"
        ],
        "callingCodes": [
            "51"
        ],
        "capital": "Lima",
        "currencies": [
            {
                "code": "PEN",
                "name": "Peruvian sol",
                "symbol": "S/ "
            }
        ],
        "demonym": "Peruvian",
        "flag": "https://restcountries.eu/data/per.svg",
        "gini": 48.1,
        "languages": [
            {
                "iso639_1": "es",
                "iso639_2": "spa",
                "name": "Spanish",
                "nativeName": "Español"
            }
        ],
        "latlng": [
            -10,
            -76
        ],
        "name": "Peru",
        "nativeName": "Perú",
        "numericCode": "604",
        "population": 32971846,
        "region": "Americas",
        "regionalBlocs": [
            {
                "acronym": "PA",
                "name": "Pacific Alliance",
                "otherNames": [
                    "Alianza del Pacífico"
                ]
            },
            {
                "acronym": "USAN",
                "name": "Union of South American Nations",
                "otherAcronyms": [
                    "UNASUR",
                    "UNASUL",
                    "UZAN"
                ],
                "otherNames": [
                    "Unión de Naciones Suramericanas",
                    "União de Nações Sul-Americanas",
                    "Unie van Zuid-Amerikaanse Naties",
                    "South American Union"
                ]
            }
        ],
        "subregion": "South America",
        "timezones": [
            "UTC-05:00"
        ],
        "topLevelDomain": [
            ".pe"
        ],
        "translations": {
            "br": "Peru",
            "de": "Peru",
            "es": "Perú",
            "fa": "پرو",
            "fr": "Pérou",
            "hr": "Peru",
            "it": "Perù",
            "ja": "ペルー",
            "nl": "Peru",
            "pt": "Peru",
            "ru": "Перу",
            "pl": "Peru",
            "cs": "Peru",
            "zh": "秘鲁共和国",
            "hu": "Peru",
            "se": "Peru"
        },
        "cioc": "PER"
    },
    {
        "alpha2Code": "PH",
        "alpha3Code": "PHL",
        "altSpellings": [
            "PH",
            "Republic of the Philippines",
            "Repúblika ng Pilipinas"
        ],
        "area": 342353,
        "borders": [],
        "callingCodes": [
            "63"
        ],
        "capital": "Manila",
        "currencies": [
            {
                "code": "PHP",
                "name": "Philippine peso",
                "symbol": "₱"
            }
        ],
        "demonym": "Filipino",
        "flag": "https://restcountries.eu/data/phl.svg",
        "gini": 43,
        "languages": [
            {
                "iso639_1": "en",
                "iso639_2": "eng",
                "name": "English",
                "nativeName": "English"
            }
        ],
        "latlng": [
            13,
            122
        ],
        "name": "Philippines",
        "nativeName": "Pilipinas",
        "numericCode": "608",
        "population": 109581085,
        "region": "Asia",
        "regionalBlocs": [
            {
                "acronym": "ASEAN",
                "name": "Association of Southeast Asian Nations"
            }
        ],
        "subregion": "South-Eastern Asia",
        "timezones": [
            "UTC+08:00"
        ],
        "topLevelDomain": [
            ".ph"
        ],
        "translations": {
            "br": "Filipinas",
            "de": "Philippinen",
            "es": "Filipinas",
            "fa": "جزایر الندفیلیپین",
            "fr": "Philippines",
            "hr": "Filipini",
            "it": "Filippine",
            "ja": "フィリピン",
            "nl": "Filipijnen",
            "pt": "Filipinas",
            "ru": "Филиппины",
            "pl": "Filipiny",
            "cs": "Filipíny",
            "zh": "菲律宾共和国",
            "hu": "Fülöp-szigetek",
            "se": "Filippinerna"
        },
        "cioc": "PHI"
    },
    {
        "alpha2Code": "PN",
        "alpha3Code": "PCN",
        "altSpellings": [
            "PN",
            "Pitcairn Henderson Ducie and Oeno Islands"
        ],
        "area": 47,
        "borders": [],
        "callingCodes": [
            "64"
        ],
        "capital": "Adamstown",
        "currencies": [
            {
                "code": "NZD",
                "name": "New Zealand dollar",
                "symbol": "$"
            },
            {
                "code": null,
                "name": "Pitcairn Islands dollar",
                "symbol": "$"
            }
        ],
        "demonym": "Pitcairn Islander",
        "flag": "https://restcountries.eu/data/pcn.svg",
        "languages": [
            {
                "iso639_1": "en",
                "iso639_2": "eng",
                "name": "English",
                "nativeName": "English"
            }
        ],
        "latlng": [
            -25.06666666,
            -130.1
        ],
        "name": "Pitcairn",
        "nativeName": "Pitcairn Islands",
        "numericCode": "612",
        "population": 56,
        "region": "Oceania",
        "regionalBlocs": [],
        "subregion": "Polynesia",
        "timezones": [
            "UTC-08:00"
        ],
        "topLevelDomain": [
            ".pn"
        ],
        "translations": {
            "br": "Ilhas Pitcairn",
            "de": "Pitcairn",
            "es": "Islas Pitcairn",
            "fa": "پیتکرن",
            "fr": "Îles Pitcairn",
            "hr": "Pitcairnovo otočje",
            "it": "Isole Pitcairn",
            "ja": "ピトケアン",
            "nl": "Pitcairneilanden",
            "pt": "Ilhas Picárnia",
            "pl": "Pitcairn",
            "cs": "Pitcairnovy ostrovy",
            "ru": "Pitcairn",
            "zh": "皮特凯恩群岛",
            "hu": "Pitcairn-szigetek",
            "se": "Pitcairnöarna"
        },
        "cioc": ""
    },
    {
        "alpha2Code": "PL",
        "alpha3Code": "POL",
        "altSpellings": [
            "PL",
            "Republic of Poland",
            "Rzeczpospolita Polska"
        ],
        "area": 312679,
        "borders": [
            "BLR",
            "CZE",
            "DEU",
            "LTU",
            "RUS",
            "SVK",
            "UKR"
        ],
        "callingCodes": [
            "48"
        ],
        "capital": "Warsaw",
        "currencies": [
            {
                "code": "PLN",
                "name": "Polish złoty",
                "symbol": "zł"
            }
        ],
        "demonym": "Polish",
        "flag": "https://restcountries.eu/data/pol.svg",
        "gini": 34.1,
        "languages": [
            {
                "iso639_1": "pl",
                "iso639_2": "pol",
                "name": "Polish",
                "nativeName": "język polski"
            }
        ],
        "latlng": [
            52,
            20
        ],
        "name": "Poland",
        "nativeName": "Polska",
        "numericCode": "616",
        "population": 37950802,
        "region": "Europe",
        "regionalBlocs": [
            {
                "acronym": "EU",
                "name": "European Union"
            }
        ],
        "subregion": "Eastern Europe",
        "timezones": [
            "UTC+01:00"
        ],
        "topLevelDomain": [
            ".pl"
        ],
        "translations": {
            "br": "Polônia",
            "de": "Polen",
            "es": "Polonia",
            "fa": "لهستان",
            "fr": "Pologne",
            "hr": "Poljska",
            "it": "Polonia",
            "ja": "ポーランド",
            "nl": "Polen",
            "pt": "Polónia",
            "ru": "Польша",
            "pl": "Polska",
            "cs": "Polsko",
            "zh": "波兰共和国",
            "hu": "Lengyelország",
            "se": "Polen"
        },
        "cioc": "POL"
    },
    {
        "alpha2Code": "PT",
        "alpha3Code": "PRT",
        "altSpellings": [
            "PT",
            "Portuguesa",
            "Portuguese Republic",
            "República Portuguesa"
        ],
        "area": 92090,
        "borders": [
            "ESP"
        ],
        "callingCodes": [
            "351"
        ],
        "capital": "Lisbon",
        "currencies": [
            {
                "code": "EUR",
                "name": "Euro",
                "symbol": "€"
            }
        ],
        "demonym": "Portuguese",
        "flag": "https://restcountries.eu/data/prt.svg",
        "gini": 38.5,
        "languages": [
            {
                "iso639_1": "pt",
                "iso639_2": "por",
                "name": "Portuguese",
                "nativeName": "Português"
            }
        ],
        "latlng": [
            39.5,
            -8
        ],
        "name": "Portugal",
        "nativeName": "Portugal",
        "numericCode": "620",
        "population": 10305564,
        "region": "Europe",
        "regionalBlocs": [
            {
                "acronym": "EU",
                "name": "European Union"
            }
        ],
        "subregion": "Southern Europe",
        "timezones": [
            "UTC-01:00",
            "UTC"
        ],
        "topLevelDomain": [
            ".pt"
        ],
        "translations": {
            "br": "Portugal",
            "de": "Portugal",
            "es": "Portugal",
            "fa": "پرتغال",
            "fr": "Portugal",
            "hr": "Portugal",
            "it": "Portogallo",
            "ja": "ポルトガル",
            "nl": "Portugal",
            "pt": "Portugal",
            "ru": "Португалия",
            "pl": "Portugalia",
            "cs": "Portugalsko",
            "zh": "葡萄牙共和国",
            "hu": "Portugália",
            "se": "Portugal"
        },
        "cioc": "POR"
    },
    {
        "alpha2Code": "PR",
        "alpha3Code": "PRI",
        "altSpellings": [
            "PR",
            "Commonwealth of Puerto Rico",
            "Estado Libre Asociado de Puerto Rico"
        ],
        "area": 8870,
        "borders": [],
        "callingCodes": [
            "1"
        ],
        "capital": "San Juan",
        "currencies": [
            {
                "code": "USD",
                "name": "United States dollar",
                "symbol": "$"
            }
        ],
        "demonym": "Puerto Rican",
        "flag": "https://restcountries.eu/data/pri.svg",
        "languages": [
            {
                "iso639_1": "es",
                "iso639_2": "spa",
                "name": "Spanish",
                "nativeName": "Español"
            },
            {
                "iso639_1": "en",
                "iso639_2": "eng",
                "name": "English",
                "nativeName": "English"
            }
        ],
        "latlng": [
            18.25,
            -66.5
        ],
        "name": "Puerto Rico",
        "nativeName": "Puerto Rico",
        "numericCode": "630",
        "population": 3194034,
        "region": "Americas",
        "regionalBlocs": [],
        "subregion": "Caribbean",
        "timezones": [
            "UTC-04:00"
        ],
        "topLevelDomain": [
            ".pr"
        ],
        "translations": {
            "br": "Porto Rico",
            "de": "Puerto Rico",
            "es": "Puerto Rico",
            "fa": "پورتو ریکو",
            "fr": "Porto Rico",
            "hr": "Portoriko",
            "it": "Porto Rico",
            "ja": "プエルトリコ",
            "nl": "Puerto Rico",
            "pt": "Porto Rico",
            "pl": "Portoryko",
            "cs": "Portoriko",
            "ru": "Puerto Rico",
            "zh": "波多黎各联邦",
            "hu": "Puerto Rico",
            "se": "Puerto Rico"
        },
        "cioc": "PUR"
    },
    {
        "alpha2Code": "QA",
        "alpha3Code": "QAT",
        "altSpellings": [
            "QA",
            "State of Qatar",
            "Dawlat Qaṭar"
        ],
        "area": 11586,
        "borders": [
            "SAU"
        ],
        "callingCodes": [
            "974"
        ],
        "capital": "Doha",
        "currencies": [
            {
                "code": "QAR",
                "name": "Qatari riyal",
                "symbol": "ر.ق"
            }
        ],
        "demonym": "Qatari",
        "flag": "https://restcountries.eu/data/qat.svg",
        "gini": 41.1,
        "languages": [
            {
                "iso639_1": "ar",
                "iso639_2": "ara",
                "name": "Arabic",
                "nativeName": "العربية"
            }
        ],
        "latlng": [
            25.5,
            51.25
        ],
        "name": "Qatar",
        "nativeName": "قطر",
        "numericCode": "634",
        "population": 2881060,
        "region": "Asia",
        "regionalBlocs": [
            {
                "acronym": "AL",
                "name": "Arab League",
                "otherNames": [
                    "جامعة الدول العربية",
                    "Jāmiʻat ad-Duwal al-ʻArabīyah",
                    "League of Arab States"
                ]
            }
        ],
        "subregion": "Western Asia",
        "timezones": [
            "UTC+03:00"
        ],
        "topLevelDomain": [
            ".qa"
        ],
        "translations": {
            "br": "Catar",
            "de": "Katar",
            "es": "Catar",
            "fa": "قطر",
            "fr": "Qatar",
            "hr": "Katar",
            "it": "Qatar",
            "ja": "カタール",
            "nl": "Qatar",
            "pt": "Catar",
            "ru": "Катар",
            "pl": "Katar",
            "cs": "Katar",
            "zh": "卡塔尔国",
            "hu": "Katar",
            "se": "Qatar"
        },
        "cioc": "QAT"
    },
    {
        "alpha2Code": "XK",
        "alpha3Code": "UNK",
        "altSpellings": [
            "XK",
            "Република Косово"
        ],
        "area": 10908,
        "borders": [
            "ALB",
            "MKD",
            "MNE",
            "SRB"
        ],
        "callingCodes": [
            "383"
        ],
        "capital": "Pristina",
        "currencies": [
            {
                "code": "EUR",
                "name": "Euro",
                "symbol": "€"
            }
        ],
        "demonym": "Kosovar",
        "flag": "https://restcountries.eu/data/kos.svg",
        "languages": [
            {
                "iso639_1": "sq",
                "iso639_2": "sqi",
                "name": "Albanian",
                "nativeName": "Shqip"
            },
            {
                "iso639_1": "sr",
                "iso639_2": "srp",
                "name": "Serbian",
                "nativeName": "српски језик"
            }
        ],
        "latlng": [
            42.666667,
            21.166667
        ],
        "name": "Republic of Kosovo",
        "nativeName": "Republika e Kosovës",
        "population": 1775378,
        "region": "Europe",
        "regionalBlocs": [
            {
                "acronym": "CEFTA",
                "name": "Central European Free Trade Agreement"
            }
        ],
        "subregion": "Eastern Europe",
        "timezones": [
            "UTC+01:00"
        ],
        "topLevelDomain": [
            ""
        ],
        "translations": {
            "br": "Kosovo",
            "es": "Kosovo",
            "fa": "کوزوو",
            "hr": "Kosovo",
            "pt": "Kosovo",
            "pl": "Kosowo",
            "cs": "Kosovo",
            "de": "Republic of Kosovo",
            "fr": "Republic of Kosovo",
            "it": "Republic of Kosovo",
            "ja": "Republic of Kosovo",
            "nl": "Republiek van Kosovo",
            "ru": "Republic of Kosovo",
            "zh": "科索沃",
            "hu": "Koszovó",
            "se": "Kosovo"
        }
    },
    {
        "alpha2Code": "RE",
        "alpha3Code": "REU",
        "altSpellings": [
            "RE",
            "Reunion"
        ],
        "borders": [],
        "callingCodes": [
            "262"
        ],
        "capital": "Saint-Denis",
        "currencies": [
            {
                "code": "EUR",
                "name": "Euro",
                "symbol": "€"
            }
        ],
        "demonym": "French",
        "flag": "https://restcountries.eu/data/reu.svg",
        "languages": [
            {
                "iso639_1": "fr",
                "iso639_2": "fra",
                "name": "French",
                "nativeName": "français"
            }
        ],
        "latlng": [
            -21.15,
            55.5
        ],
        "name": "Réunion",
        "nativeName": "La Réunion",
        "numericCode": "638",
        "population": 840974,
        "region": "Africa",
        "regionalBlocs": [
            {
                "acronym": "AU",
                "name": "African Union",
                "otherNames": [
                    "الاتحاد الأفريقي",
                    "Union africaine",
                    "União Africana",
                    "Unión Africana",
                    "Umoja wa Afrika"
                ]
            }
        ],
        "subregion": "Eastern Africa",
        "timezones": [
            "UTC+04:00"
        ],
        "topLevelDomain": [
            ".re"
        ],
        "translations": {
            "br": "Reunião",
            "de": "Réunion",
            "es": "Reunión",
            "fa": "رئونیون",
            "fr": "Réunion",
            "hr": "Réunion",
            "it": "Riunione",
            "ja": "レユニオン",
            "nl": "Réunion",
            "pt": "Reunião",
            "pl": "Reunion",
            "cs": "Réunion",
            "ru": "Réunion",
            "zh": "留尼旺岛",
            "hu": "Réunion",
            "se": "Réunion"
        },
        "cioc": ""
    },
    {
        "alpha2Code": "RO",
        "alpha3Code": "ROU",
        "altSpellings": [
            "RO",
            "Rumania",
            "Roumania",
            "România"
        ],
        "area": 238391,
        "borders": [
            "BGR",
            "HUN",
            "MDA",
            "SRB",
            "UKR"
        ],
        "callingCodes": [
            "40"
        ],
        "capital": "Bucharest",
        "currencies": [
            {
                "code": "RON",
                "name": "Romanian leu",
                "symbol": "lei"
            }
        ],
        "demonym": "Romanian",
        "flag": "https://restcountries.eu/data/rou.svg",
        "gini": 30,
        "languages": [
            {
                "iso639_1": "ro",
                "iso639_2": "ron",
                "name": "Romanian",
                "nativeName": "Română"
            }
        ],
        "latlng": [
            46,
            25
        ],
        "name": "Romania",
        "nativeName": "România",
        "numericCode": "642",
        "population": 19286123,
        "region": "Europe",
        "regionalBlocs": [
            {
                "acronym": "EU",
                "name": "European Union"
            }
        ],
        "subregion": "Eastern Europe",
        "timezones": [
            "UTC+02:00"
        ],
        "topLevelDomain": [
            ".ro"
        ],
        "translations": {
            "br": "Romênia",
            "de": "Rumänien",
            "es": "Rumania",
            "fa": "رومانی",
            "fr": "Roumanie",
            "hr": "Rumunjska",
            "it": "Romania",
            "ja": "ルーマニア",
            "nl": "Roemenië",
            "pt": "Roménia",
            "ru": "Румыния",
            "pl": "Rumunia",
            "cs": "Rumunsko",
            "zh": "罗马尼亚",
            "hu": "Románia",
            "se": "Rumänien"
        },
        "cioc": "ROU"
    },
    {
        "alpha2Code": "RU",
        "alpha3Code": "RUS",
        "altSpellings": [
            "RU",
            "Rossiya",
            "Russian Federation",
            "Российская Федерация",
            "Rossiyskaya Federatsiya"
        ],
        "area": 17124442,
        "borders": [
            "AZE",
            "BLR",
            "CHN",
            "EST",
            "FIN",
            "GEO",
            "KAZ",
            "PRK",
            "LVA",
            "LTU",
            "MNG",
            "NOR",
            "POL",
            "UKR"
        ],
        "callingCodes": [
            "7"
        ],
        "capital": "Moscow",
        "currencies": [
            {
                "code": "RUB",
                "name": "Russian ruble",
                "symbol": "₽"
            }
        ],
        "demonym": "Russian",
        "flag": "https://restcountries.eu/data/rus.svg",
        "gini": 40.1,
        "languages": [
            {
                "iso639_1": "ru",
                "iso639_2": "rus",
                "name": "Russian",
                "nativeName": "Русский"
            }
        ],
        "latlng": [
            60,
            100
        ],
        "name": "Russian Federation",
        "nativeName": "Россия",
        "numericCode": "643",
        "population": 144104080,
        "region": "Europe",
        "regionalBlocs": [
            {
                "acronym": "EEU",
                "name": "Eurasian Economic Union",
                "otherAcronyms": [
                    "EAEU"
                ]
            }
        ],
        "subregion": "Eastern Europe",
        "timezones": [
            "UTC+03:00",
            "UTC+04:00",
            "UTC+06:00",
            "UTC+07:00",
            "UTC+08:00",
            "UTC+09:00",
            "UTC+10:00",
            "UTC+11:00",
            "UTC+12:00"
        ],
        "topLevelDomain": [
            ".ru"
        ],
        "translations": {
            "br": "Rússia",
            "de": "Russland",
            "es": "Rusia",
            "fa": "روسیه",
            "fr": "Russie",
            "hr": "Rusija",
            "it": "Russia",
            "ja": "ロシア連邦",
            "nl": "Rusland",
            "pt": "Rússia",
            "ru": "Россия",
            "pl": "Rosja",
            "cs": "Rusko",
            "zh": "俄罗斯联邦",
            "hu": "Oroszország",
            "se": "Ryssland"
        },
        "cioc": "RUS"
    },
    {
        "alpha2Code": "RW",
        "alpha3Code": "RWA",
        "altSpellings": [
            "RW",
            "Republic of Rwanda",
            "Repubulika y'u Rwanda",
            "République du Rwanda"
        ],
        "area": 26338,
        "borders": [
            "BDI",
            "COD",
            "TZA",
            "UGA"
        ],
        "callingCodes": [
            "250"
        ],
        "capital": "Kigali",
        "currencies": [
            {
                "code": "RWF",
                "name": "Rwandan franc",
                "symbol": "Fr"
            }
        ],
        "demonym": "Rwandan",
        "flag": "https://restcountries.eu/data/rwa.svg",
        "gini": 50.8,
        "languages": [
            {
                "iso639_1": "rw",
                "iso639_2": "kin",
                "name": "Kinyarwanda",
                "nativeName": "Ikinyarwanda"
            },
            {
                "iso639_1": "en",
                "iso639_2": "eng",
                "name": "English",
                "nativeName": "English"
            },
            {
                "iso639_1": "fr",
                "iso639_2": "fra",
                "name": "French",
                "nativeName": "français"
            }
        ],
        "latlng": [
            -2,
            30
        ],
        "name": "Rwanda",
        "nativeName": "Rwanda",
        "numericCode": "646",
        "population": 12952209,
        "region": "Africa",
        "regionalBlocs": [
            {
                "acronym": "AU",
                "name": "African Union",
                "otherNames": [
                    "الاتحاد الأفريقي",
                    "Union africaine",
                    "União Africana",
                    "Unión Africana",
                    "Umoja wa Afrika"
                ]
            }
        ],
        "subregion": "Eastern Africa",
        "timezones": [
            "UTC+02:00"
        ],
        "topLevelDomain": [
            ".rw"
        ],
        "translations": {
            "br": "Ruanda",
            "de": "Ruanda",
            "es": "Ruanda",
            "fa": "رواندا",
            "fr": "Rwanda",
            "hr": "Ruanda",
            "it": "Ruanda",
            "ja": "ルワンダ",
            "nl": "Rwanda",
            "pt": "Ruanda",
            "ru": "Руанда",
            "pl": "Rwanda",
            "cs": "Rwanda",
            "zh": "卢旺达共和国",
            "hu": "Ruanda",
            "se": "Rwanda"
        },
        "cioc": "RWA"
    },
    {
        "alpha2Code": "BL",
        "alpha3Code": "BLM",
        "altSpellings": [
            "BL",
            "St. Barthelemy",
            "Collectivity of Saint Barthélemy",
            "Collectivité de Saint-Barthélemy"
        ],
        "area": 21,
        "borders": [],
        "callingCodes": [
            "590"
        ],
        "capital": "Gustavia",
        "currencies": [
            {
                "code": "EUR",
                "name": "Euro",
                "symbol": "€"
            }
        ],
        "demonym": "Saint Barthélemy Islander",
        "flag": "https://restcountries.eu/data/blm.svg",
        "languages": [
            {
                "iso639_1": "fr",
                "iso639_2": "fra",
                "name": "French",
                "nativeName": "français"
            }
        ],
        "latlng": [
            18.5,
            -63.41666666
        ],
        "name": "Saint Barthélemy",
        "nativeName": "Saint-Barthélemy",
        "numericCode": "652",
        "population": 9417,
        "region": "Americas",
        "regionalBlocs": [],
        "subregion": "Caribbean",
        "timezones": [
            "UTC-04:00"
        ],
        "topLevelDomain": [
            ".bl"
        ],
        "translations": {
            "br": "São Bartolomeu",
            "de": "Saint-Barthélemy",
            "es": "San Bartolomé",
            "fa": "سن-بارتلمی",
            "fr": "Saint-Barthélemy",
            "hr": "Saint Barthélemy",
            "it": "Antille Francesi",
            "ja": "サン・バルテルミー",
            "nl": "Saint Barthélemy",
            "pt": "São Bartolomeu",
            "pl": "Wspólnota Saint-Barthélemy",
            "cs": "Svatý Bartoloměj",
            "ru": "Saint Barthélemy",
            "zh": "圣巴泰勒米集体",
            "hu": "Saint-Barthélemy",
            "se": "Saint-Barthélemy"
        },
        "cioc": ""
    },
    {
        "alpha2Code": "SH",
        "alpha3Code": "SHN",
        "altSpellings": [
            "SH"
        ],
        "borders": [],
        "callingCodes": [
            "290"
        ],
        "capital": "Jamestown",
        "currencies": [
            {
                "code": "SHP",
                "name": "Saint Helena pound",
                "symbol": "£"
            }
        ],
        "demonym": "Saint Helenian",
        "flag": "https://restcountries.eu/data/shn.svg",
        "languages": [
            {
                "iso639_1": "en",
                "iso639_2": "eng",
                "name": "English",
                "nativeName": "English"
            }
        ],
        "latlng": [
            -15.95,
            -5.7
        ],
        "name": "Saint Helena, Ascension and Tristan da Cunha",
        "nativeName": "Saint Helena",
        "numericCode": "654",
        "population": 4255,
        "region": "Africa",
        "regionalBlocs": [
            {
                "acronym": "AU",
                "name": "African Union",
                "otherNames": [
                    "الاتحاد الأفريقي",
                    "Union africaine",
                    "União Africana",
                    "Unión Africana",
                    "Umoja wa Afrika"
                ]
            }
        ],
        "subregion": "Western Africa",
        "timezones": [
            "UTC+00:00"
        ],
        "topLevelDomain": [
            ".sh"
        ],
        "translations": {
            "br": "Santa Helena",
            "de": "Sankt Helena",
            "es": "Santa Helena",
            "fa": "سنت هلنا، اسنشن و تریستان دا کونا",
            "fr": "Sainte-Hélène",
            "hr": "Sveta Helena",
            "it": "Sant'Elena",
            "ja": "セントヘレナ・アセンションおよびトリスタンダクーニャ",
            "nl": "Sint-Helena",
            "pt": "Santa Helena",
            "pl": "Święta Helena",
            "cs": "Svatá Helena,  Ascension a Tristan da Cunha",
            "ru": "Saint Helena, Ascension and Tristan da Cunha",
            "zh": "圣赫勒拿、阿森松和特里斯坦-达库尼亚",
            "hu": "Szent Ilona",
            "se": "Sankta Helena"
        }
    },
    {
        "alpha2Code": "KN",
        "alpha3Code": "KNA",
        "altSpellings": [
            "KN",
            "Federation of Saint Christopher and Nevis"
        ],
        "area": 261,
        "borders": [],
        "callingCodes": [
            "1"
        ],
        "capital": "Basseterre",
        "currencies": [
            {
                "code": "XCD",
                "name": "East Caribbean dollar",
                "symbol": "$"
            }
        ],
        "demonym": "Kittian and Nevisian",
        "flag": "https://restcountries.eu/data/kna.svg",
        "languages": [
            {
                "iso639_1": "en",
                "iso639_2": "eng",
                "name": "English",
                "nativeName": "English"
            }
        ],
        "latlng": [
            17.33333333,
            -62.75
        ],
        "name": "Saint Kitts and Nevis",
        "nativeName": "Saint Kitts and Nevis",
        "numericCode": "659",
        "population": 53192,
        "region": "Americas",
        "regionalBlocs": [
            {
                "acronym": "CARICOM",
                "name": "Caribbean Community",
                "otherNames": [
                    "Comunidad del Caribe",
                    "Communauté Caribéenne",
                    "Caribische Gemeenschap"
                ]
            }
        ],
        "subregion": "Caribbean",
        "timezones": [
            "UTC-04:00"
        ],
        "topLevelDomain": [
            ".kn"
        ],
        "translations": {
            "br": "São Cristóvão e Neves",
            "de": "St. Kitts und Nevis",
            "es": "San Cristóbal y Nieves",
            "fa": "سنت کیتس و نویس",
            "fr": "Saint-Christophe-et-Niévès",
            "hr": "Sveti Kristof i Nevis",
            "it": "Saint Kitts e Nevis",
            "ja": "セントクリストファー・ネイビス",
            "nl": "Saint Kitts en Nevis",
            "pt": "São Cristóvão e Neves",
            "ru": "Сент-Китс и Невис",
            "pl": "Saint Kitts i Nevis",
            "cs": "Svatý Kryštof a Nevis",
            "zh": "圣克里斯托弗和尼维斯联邦",
            "hu": "Saint Kitts és Nevis",
            "se": "Saint Kitts och Nevis"
        },
        "cioc": "SKN"
    },
    {
        "alpha2Code": "LC",
        "alpha3Code": "LCA",
        "altSpellings": [
            "LC"
        ],
        "area": 616,
        "borders": [],
        "callingCodes": [
            "1"
        ],
        "capital": "Castries",
        "currencies": [
            {
                "code": "XCD",
                "name": "East Caribbean dollar",
                "symbol": "$"
            }
        ],
        "demonym": "Saint Lucian",
        "flag": "https://restcountries.eu/data/lca.svg",
        "gini": 42.6,
        "languages": [
            {
                "iso639_1": "en",
                "iso639_2": "eng",
                "name": "English",
                "nativeName": "English"
            }
        ],
        "latlng": [
            13.88333333,
            -60.96666666
        ],
        "name": "Saint Lucia",
        "nativeName": "Saint Lucia",
        "numericCode": "662",
        "population": 183629,
        "region": "Americas",
        "regionalBlocs": [
            {
                "acronym": "CARICOM",
                "name": "Caribbean Community",
                "otherNames": [
                    "Comunidad del Caribe",
                    "Communauté Caribéenne",
                    "Caribische Gemeenschap"
                ]
            }
        ],
        "subregion": "Caribbean",
        "timezones": [
            "UTC-04:00"
        ],
        "topLevelDomain": [
            ".lc"
        ],
        "translations": {
            "br": "Santa Lúcia",
            "de": "Saint Lucia",
            "es": "Santa Lucía",
            "fa": "سنت لوسیا",
            "fr": "Saint-Lucie",
            "hr": "Sveta Lucija",
            "it": "Santa Lucia",
            "ja": "セントルシア",
            "nl": "Saint Lucia",
            "pt": "Santa Lúcia",
            "ru": "Сент-Люсия",
            "pl": "Saint Lucia",
            "cs": "Svatá Lucie",
            "zh": "圣卢西亚",
            "hu": "Saint Lucia",
            "se": "Saint Lucia"
        },
        "cioc": "LCA"
    },
    {
        "alpha2Code": "MF",
        "alpha3Code": "MAF",
        "altSpellings": [
            "MF",
            "Collectivity of Saint Martin",
            "Collectivité de Saint-Martin"
        ],
        "area": 53,
        "borders": [
            "SXM",
            "NLD"
        ],
        "callingCodes": [
            "590"
        ],
        "capital": "Marigot",
        "currencies": [
            {
                "code": "EUR",
                "name": "Euro",
                "symbol": "€"
            }
        ],
        "demonym": "Saint Martin Islander",
        "flag": "https://restcountries.eu/data/maf.svg",
        "languages": [
            {
                "iso639_1": "en",
                "iso639_2": "eng",
                "name": "English",
                "nativeName": "English"
            },
            {
                "iso639_1": "fr",
                "iso639_2": "fra",
                "name": "French",
                "nativeName": "français"
            },
            {
                "iso639_1": "nl",
                "iso639_2": "nld",
                "name": "Dutch",
                "nativeName": "Nederlands"
            }
        ],
        "latlng": [
            18.08333333,
            -63.95
        ],
        "name": "Saint Martin (French part)",
        "nativeName": "Saint-Martin",
        "numericCode": "663",
        "population": 38659,
        "region": "Americas",
        "regionalBlocs": [],
        "subregion": "Caribbean",
        "timezones": [
            "UTC-04:00"
        ],
        "topLevelDomain": [
            ".mf",
            ".fr",
            ".gp"
        ],
        "translations": {
            "br": "Saint Martin",
            "de": "Saint Martin",
            "es": "Saint Martin",
            "fa": "سینت مارتن",
            "fr": "Saint-Martin",
            "hr": "Sveti Martin",
            "it": "Saint Martin",
            "ja": "サン・マルタン（フランス領）",
            "nl": "Saint-Martin",
            "pt": "Ilha São Martinho",
            "pl": "Sint Maarten",
            "cs": "Svatý Martin",
            "ru": "Saint Martin (French part)",
            "zh": "圣马丁",
            "hu": "Saint-Martin",
            "se": "Saint Martin"
        },
        "cioc": ""
    },
    {
        "alpha2Code": "PM",
        "alpha3Code": "SPM",
        "altSpellings": [
            "PM",
            "Collectivité territoriale de Saint-Pierre-et-Miquelon"
        ],
        "area": 242,
        "borders": [],
        "callingCodes": [
            "508"
        ],
        "capital": "Saint-Pierre",
        "currencies": [
            {
                "code": "EUR",
                "name": "Euro",
                "symbol": "€"
            }
        ],
        "demonym": "French",
        "flag": "https://restcountries.eu/data/spm.svg",
        "languages": [
            {
                "iso639_1": "fr",
                "iso639_2": "fra",
                "name": "French",
                "nativeName": "français"
            }
        ],
        "latlng": [
            46.83333333,
            -56.33333333
        ],
        "name": "Saint Pierre and Miquelon",
        "nativeName": "Saint-Pierre-et-Miquelon",
        "numericCode": "666",
        "population": 6069,
        "region": "Americas",
        "regionalBlocs": [],
        "subregion": "Northern America",
        "timezones": [
            "UTC-03:00"
        ],
        "topLevelDomain": [
            ".pm"
        ],
        "translations": {
            "br": "Saint-Pierre e Miquelon",
            "de": "Saint-Pierre und Miquelon",
            "es": "San Pedro y Miquelón",
            "fa": "سن پیر و میکلن",
            "fr": "Saint-Pierre-et-Miquelon",
            "hr": "Sveti Petar i Mikelon",
            "it": "Saint-Pierre e Miquelon",
            "ja": "サンピエール島・ミクロン島",
            "nl": "Saint Pierre en Miquelon",
            "pt": "São Pedro e Miquelon",
            "pl": "Wspólnota Terytorialna Saint Pierre i Miquelon",
            "cs": "Saint-Pierre a Miquelon",
            "ru": "Saint Pierre and Miquelon",
            "zh": "圣皮埃尔和密克隆",
            "hu": "Saint-Pierre és Miquelon",
            "se": "Saint-Pierre och Miquelon"
        },
        "cioc": ""
    },
    {
        "alpha2Code": "VC",
        "alpha3Code": "VCT",
        "altSpellings": [
            "VC"
        ],
        "area": 389,
        "borders": [],
        "callingCodes": [
            "1"
        ],
        "capital": "Kingstown",
        "currencies": [
            {
                "code": "XCD",
                "name": "East Caribbean dollar",
                "symbol": "$"
            }
        ],
        "demonym": "Saint Vincentian",
        "flag": "https://restcountries.eu/data/vct.svg",
        "languages": [
            {
                "iso639_1": "en",
                "iso639_2": "eng",
                "name": "English",
                "nativeName": "English"
            }
        ],
        "latlng": [
            13.25,
            -61.2
        ],
        "name": "Saint Vincent and the Grenadines",
        "nativeName": "Saint Vincent and the Grenadines",
        "numericCode": "670",
        "population": 110947,
        "region": "Americas",
        "regionalBlocs": [
            {
                "acronym": "CARICOM",
                "name": "Caribbean Community",
                "otherNames": [
                    "Comunidad del Caribe",
                    "Communauté Caribéenne",
                    "Caribische Gemeenschap"
                ]
            }
        ],
        "subregion": "Caribbean",
        "timezones": [
            "UTC-04:00"
        ],
        "topLevelDomain": [
            ".vc"
        ],
        "translations": {
            "br": "São Vicente e Granadinas",
            "de": "Saint Vincent und die Grenadinen",
            "es": "San Vicente y Granadinas",
            "fa": "سنت وینسنت و گرنادین‌ها",
            "fr": "Saint-Vincent-et-les-Grenadines",
            "hr": "Sveti Vincent i Grenadini",
            "it": "Saint Vincent e Grenadine",
            "ja": "セントビンセントおよびグレナディーン諸島",
            "nl": "Saint Vincent en de Grenadines",
            "pt": "São Vicente e Granadinas",
            "ru": "Сент-Винсент и Гренадины",
            "pl": "Saint Vincent i Grenadyny",
            "cs": "Svatý Vincenc a Grenadiny",
            "zh": "圣文森特和格林纳丁斯",
            "hu": "Saint Vincent és a Grenadine-szigetek",
            "se": "Saint Vincent och Grenadinerna"
        },
        "cioc": "VIN"
    },
    {
        "alpha2Code": "WS",
        "alpha3Code": "WSM",
        "altSpellings": [
            "WS",
            "Independent State of Samoa",
            "Malo Saʻoloto Tutoʻatasi o Sāmoa"
        ],
        "area": 2842,
        "borders": [],
        "callingCodes": [
            "685"
        ],
        "capital": "Apia",
        "currencies": [
            {
                "code": "WST",
                "name": "Samoan tālā",
                "symbol": "T"
            }
        ],
        "demonym": "Samoan",
        "flag": "https://restcountries.eu/data/wsm.svg",
        "languages": [
            {
                "iso639_1": "sm",
                "iso639_2": "smo",
                "name": "Samoan",
                "nativeName": "gagana fa'a Samoa"
            },
            {
                "iso639_1": "en",
                "iso639_2": "eng",
                "name": "English",
                "nativeName": "English"
            }
        ],
        "latlng": [
            -13.58333333,
            -172.33333333
        ],
        "name": "Samoa",
        "nativeName": "Samoa",
        "numericCode": "882",
        "population": 198410,
        "region": "Oceania",
        "regionalBlocs": [],
        "subregion": "Polynesia",
        "timezones": [
            "UTC+13:00"
        ],
        "topLevelDomain": [
            ".ws"
        ],
        "translations": {
            "br": "Samoa",
            "de": "Samoa",
            "es": "Samoa",
            "fa": "ساموآ",
            "fr": "Samoa",
            "hr": "Samoa",
            "it": "Samoa",
            "ja": "サモア",
            "nl": "Samoa",
            "pt": "Samoa",
            "ru": "Самоа",
            "pl": "Samoa",
            "cs": "Samoa",
            "zh": "萨摩亚独立国",
            "hu": "Szamoa",
            "se": "Samoa"
        },
        "cioc": "SAM"
    },
    {
        "alpha2Code": "SM",
        "alpha3Code": "SMR",
        "altSpellings": [
            "SM",
            "Republic of San Marino",
            "Repubblica di San Marino"
        ],
        "area": 61,
        "borders": [
            "ITA"
        ],
        "callingCodes": [
            "378"
        ],
        "capital": "City of San Marino",
        "currencies": [
            {
                "code": "EUR",
                "name": "Euro",
                "symbol": "€"
            }
        ],
        "demonym": "Sammarinese",
        "flag": "https://restcountries.eu/data/smr.svg",
        "languages": [
            {
                "iso639_1": "it",
                "iso639_2": "ita",
                "name": "Italian",
                "nativeName": "Italiano"
            }
        ],
        "latlng": [
            43.76666666,
            12.41666666
        ],
        "name": "San Marino",
        "nativeName": "San Marino",
        "numericCode": "674",
        "population": 33938,
        "region": "Europe",
        "regionalBlocs": [],
        "subregion": "Southern Europe",
        "timezones": [
            "UTC+01:00"
        ],
        "topLevelDomain": [
            ".sm"
        ],
        "translations": {
            "br": "San Marino",
            "de": "San Marino",
            "es": "San Marino",
            "fa": "سان مارینو",
            "fr": "Saint-Marin",
            "hr": "San Marino",
            "it": "San Marino",
            "ja": "サンマリノ",
            "nl": "San Marino",
            "pt": "São Marinho",
            "ru": "Сан-Марино",
            "pl": "San Marino",
            "cs": "San Marino",
            "zh": "圣马力诺共和国",
            "hu": "San Marino",
            "se": "San Marino"
        },
        "cioc": "SMR"
    },
    {
        "alpha2Code": "ST",
        "alpha3Code": "STP",
        "altSpellings": [
            "ST",
            "Democratic Republic of São Tomé and Príncipe",
            "República Democrática de São Tomé e Príncipe"
        ],
        "area": 964,
        "borders": [],
        "callingCodes": [
            "239"
        ],
        "capital": "São Tomé",
        "currencies": [
            {
                "code": "STD",
                "name": "São Tomé and Príncipe dobra",
                "symbol": "Db"
            }
        ],
        "demonym": "Sao Tomean",
        "flag": "https://restcountries.eu/data/stp.svg",
        "gini": 50.8,
        "languages": [
            {
                "iso639_1": "pt",
                "iso639_2": "por",
                "name": "Portuguese",
                "nativeName": "Português"
            }
        ],
        "latlng": [
            1,
            7
        ],
        "name": "Sao Tome and Principe",
        "nativeName": "São Tomé e Príncipe",
        "numericCode": "678",
        "population": 219161,
        "region": "Africa",
        "regionalBlocs": [
            {
                "acronym": "AU",
                "name": "African Union",
                "otherNames": [
                    "الاتحاد الأفريقي",
                    "Union africaine",
                    "União Africana",
                    "Unión Africana",
                    "Umoja wa Afrika"
                ]
            }
        ],
        "subregion": "Middle Africa",
        "timezones": [
            "UTC"
        ],
        "topLevelDomain": [
            ".st"
        ],
        "translations": {
            "br": "São Tomé e Príncipe",
            "de": "São Tomé und Príncipe",
            "es": "Santo Tomé y Príncipe",
            "fa": "کواترو دو فرویرو",
            "fr": "Sao Tomé-et-Principe",
            "hr": "Sveti Toma i Princip",
            "it": "São Tomé e Príncipe",
            "ja": "サントメ・プリンシペ",
            "nl": "Sao Tomé en Principe",
            "pt": "São Tomé e Príncipe",
            "ru": "Сан-Томе и Принсипи",
            "pl": "Wyspy Świętego Tomasza i Książęca",
            "cs": "Svatý Tomáš a Princův ostrov",
            "zh": "圣多美和普林西比民主共和国",
            "hu": "São Tomé és Príncipe",
            "se": "São Tomé och Príncipe"
        },
        "cioc": "STP"
    },
    {
        "alpha2Code": "SA",
        "alpha3Code": "SAU",
        "altSpellings": [
            "SA",
            "Kingdom of Saudi Arabia",
            "Al-Mamlakah al-‘Arabiyyah as-Su‘ūdiyyah"
        ],
        "area": 2149690,
        "borders": [
            "IRQ",
            "JOR",
            "KWT",
            "OMN",
            "QAT",
            "ARE",
            "YEM"
        ],
        "callingCodes": [
            "966"
        ],
        "capital": "Riyadh",
        "currencies": [
            {
                "code": "SAR",
                "name": "Saudi riyal",
                "symbol": "ر.س"
            }
        ],
        "demonym": "Saudi Arabian",
        "flag": "https://restcountries.eu/data/sau.svg",
        "gini": null,
        "languages": [
            {
                "iso639_1": "ar",
                "iso639_2": "ara",
                "name": "Arabic",
                "nativeName": "العربية"
            }
        ],
        "latlng": [
            25,
            45
        ],
        "name": "Saudi Arabia",
        "nativeName": "العربية السعودية",
        "numericCode": "682",
        "population": 34813867,
        "region": "Asia",
        "regionalBlocs": [
            {
                "acronym": "AL",
                "name": "Arab League",
                "otherNames": [
                    "جامعة الدول العربية",
                    "Jāmiʻat ad-Duwal al-ʻArabīyah",
                    "League of Arab States"
                ]
            }
        ],
        "subregion": "Western Asia",
        "timezones": [
            "UTC+03:00"
        ],
        "topLevelDomain": [
            ".sa"
        ],
        "translations": {
            "br": "Arábia Saudita",
            "de": "Saudi-Arabien",
            "es": "Arabia Saudí",
            "fa": "عربستان سعودی",
            "fr": "Arabie Saoudite",
            "hr": "Saudijska Arabija",
            "it": "Arabia Saudita",
            "ja": "サウジアラビア",
            "nl": "Saoedi-Arabië",
            "pt": "Arábia Saudita",
            "ru": "Саудовская Аравия",
            "pl": "Arabia Saudyjska",
            "cs": "Saúdská Arábie",
            "zh": "沙特阿拉伯王国",
            "hu": "Szaúd-Arábia",
            "se": "Saudiarabien"
        },
        "cioc": "KSA"
    },
    {
        "alpha2Code": "SN",
        "alpha3Code": "SEN",
        "altSpellings": [
            "SN",
            "Republic of Senegal",
            "République du Sénégal"
        ],
        "area": 196722,
        "borders": [
            "GMB",
            "GIN",
            "GNB",
            "MLI",
            "MRT"
        ],
        "callingCodes": [
            "221"
        ],
        "capital": "Dakar",
        "currencies": [
            {
                "code": "XOF",
                "name": "West African CFA franc",
                "symbol": "Fr"
            }
        ],
        "demonym": "Senegalese",
        "flag": "https://restcountries.eu/data/sen.svg",
        "gini": 39.2,
        "languages": [
            {
                "iso639_1": "fr",
                "iso639_2": "fra",
                "name": "French",
                "nativeName": "français"
            }
        ],
        "latlng": [
            14,
            -14
        ],
        "name": "Senegal",
        "nativeName": "Sénégal",
        "numericCode": "686",
        "population": 16743930,
        "region": "Africa",
        "regionalBlocs": [
            {
                "acronym": "AU",
                "name": "African Union",
                "otherNames": [
                    "الاتحاد الأفريقي",
                    "Union africaine",
                    "União Africana",
                    "Unión Africana",
                    "Umoja wa Afrika"
                ]
            }
        ],
        "subregion": "Western Africa",
        "timezones": [
            "UTC"
        ],
        "topLevelDomain": [
            ".sn"
        ],
        "translations": {
            "br": "Senegal",
            "de": "Senegal",
            "es": "Senegal",
            "fa": "سنگال",
            "fr": "Sénégal",
            "hr": "Senegal",
            "it": "Senegal",
            "ja": "セネガル",
            "nl": "Senegal",
            "pt": "Senegal",
            "ru": "Сенегал",
            "pl": "Senegal",
            "cs": "Senegal",
            "zh": "塞内加尔共和国",
            "hu": "Szenegál",
            "se": "Senegal"
        },
        "cioc": "SEN"
    },
    {
        "alpha2Code": "RS",
        "alpha3Code": "SRB",
        "altSpellings": [
            "RS",
            "Srbija",
            "Republic of Serbia",
            "Република Србија",
            "Republika Srbija"
        ],
        "area": 88361,
        "borders": [
            "BIH",
            "BGR",
            "HRV",
            "HUN",
            "UNK",
            "MKD",
            "MNE",
            "ROU"
        ],
        "callingCodes": [
            "381"
        ],
        "capital": "Belgrade",
        "currencies": [
            {
                "code": "RSD",
                "name": "Serbian dinar",
                "symbol": "дин."
            }
        ],
        "demonym": "Serbian",
        "flag": "https://restcountries.eu/data/srb.svg",
        "gini": 27.8,
        "languages": [
            {
                "iso639_1": "sr",
                "iso639_2": "srp",
                "name": "Serbian",
                "nativeName": "српски језик"
            }
        ],
        "latlng": [
            44,
            21
        ],
        "name": "Serbia",
        "nativeName": "Србија",
        "numericCode": "688",
        "population": 6908224,
        "region": "Europe",
        "regionalBlocs": [
            {
                "acronym": "CEFTA",
                "name": "Central European Free Trade Agreement"
            }
        ],
        "subregion": "Southern Europe",
        "timezones": [
            "UTC+01:00"
        ],
        "topLevelDomain": [
            ".rs"
        ],
        "translations": {
            "br": "Sérvia",
            "de": "Serbien",
            "es": "Serbia",
            "fa": "صربستان",
            "fr": "Serbie",
            "hr": "Srbija",
            "it": "Serbia",
            "ja": "セルビア",
            "nl": "Servië",
            "pt": "Sérvia",
            "ru": "Сербия",
            "pl": "Serbia",
            "cs": "Srbsko",
            "zh": "塞尔维亚共和国",
            "hu": "Szerbia",
            "se": "Serbien"
        },
        "cioc": "SRB"
    },
    {
        "alpha2Code": "SC",
        "alpha3Code": "SYC",
        "altSpellings": [
            "SC",
            "Republic of Seychelles",
            "Repiblik Sesel",
            "République des Seychelles"
        ],
        "area": 452,
        "borders": [],
        "callingCodes": [
            "248"
        ],
        "capital": "Victoria",
        "currencies": [
            {
                "code": "SCR",
                "name": "Seychellois rupee",
                "symbol": "₨"
            }
        ],
        "demonym": "Seychellois",
        "flag": "https://restcountries.eu/data/syc.svg",
        "gini": 65.8,
        "languages": [
            {
                "iso639_1": "fr",
                "iso639_2": "fra",
                "name": "French",
                "nativeName": "français"
            },
            {
                "iso639_1": "en",
                "iso639_2": "eng",
                "name": "English",
                "nativeName": "English"
            }
        ],
        "latlng": [
            -4.58333333,
            55.66666666
        ],
        "name": "Seychelles",
        "nativeName": "Seychelles",
        "numericCode": "690",
        "population": 98462,
        "region": "Africa",
        "regionalBlocs": [
            {
                "acronym": "AU",
                "name": "African Union",
                "otherNames": [
                    "الاتحاد الأفريقي",
                    "Union africaine",
                    "União Africana",
                    "Unión Africana",
                    "Umoja wa Afrika"
                ]
            }
        ],
        "subregion": "Eastern Africa",
        "timezones": [
            "UTC+04:00"
        ],
        "topLevelDomain": [
            ".sc"
        ],
        "translations": {
            "br": "Seicheles",
            "de": "Seychellen",
            "es": "Seychelles",
            "fa": "سیشل",
            "fr": "Seychelles",
            "hr": "Sejšeli",
            "it": "Seychelles",
            "ja": "セーシェル",
            "nl": "Seychellen",
            "pt": "Seicheles",
            "ru": "Сейшельские Острова",
            "pl": "Seszele",
            "cs": "Seychely",
            "zh": "塞舌尔共和国",
            "hu": "Seychelle-szigetek",
            "se": "Seychellerna"
        },
        "cioc": "SEY"
    },
    {
        "alpha2Code": "SL",
        "alpha3Code": "SLE",
        "altSpellings": [
            "SL",
            "Republic of Sierra Leone"
        ],
        "area": 71740,
        "borders": [
            "GIN",
            "LBR"
        ],
        "callingCodes": [
            "232"
        ],
        "capital": "Freetown",
        "currencies": [
            {
                "code": "SLL",
                "name": "Sierra Leonean leone",
                "symbol": "Le"
            }
        ],
        "demonym": "Sierra Leonean",
        "flag": "https://restcountries.eu/data/sle.svg",
        "gini": 42.5,
        "languages": [
            {
                "iso639_1": "en",
                "iso639_2": "eng",
                "name": "English",
                "nativeName": "English"
            }
        ],
        "latlng": [
            8.5,
            -11.5
        ],
        "name": "Sierra Leone",
        "nativeName": "Sierra Leone",
        "numericCode": "694",
        "population": 7976985,
        "region": "Africa",
        "regionalBlocs": [
            {
                "acronym": "AU",
                "name": "African Union",
                "otherNames": [
                    "الاتحاد الأفريقي",
                    "Union africaine",
                    "União Africana",
                    "Unión Africana",
                    "Umoja wa Afrika"
                ]
            }
        ],
        "subregion": "Western Africa",
        "timezones": [
            "UTC"
        ],
        "topLevelDomain": [
            ".sl"
        ],
        "translations": {
            "br": "Serra Leoa",
            "de": "Sierra Leone",
            "es": "Sierra Leone",
            "fa": "سیرالئون",
            "fr": "Sierra Leone",
            "hr": "Sijera Leone",
            "it": "Sierra Leone",
            "ja": "シエラレオネ",
            "nl": "Sierra Leone",
            "pt": "Serra Leoa",
            "ru": "Сьерра-Леоне",
            "pl": "Sierra Leone",
            "cs": "Sierra Leone",
            "zh": "塞拉利昂共和国",
            "hu": "Sierra Leone",
            "se": "Sierra Leone"
        },
        "cioc": "SLE"
    },
    {
        "alpha2Code": "SG",
        "alpha3Code": "SGP",
        "altSpellings": [
            "SG",
            "Singapura",
            "Republik Singapura",
            "新加坡共和国"
        ],
        "area": 710,
        "borders": [],
        "callingCodes": [
            "65"
        ],
        "capital": "Singapore",
        "currencies": [
            {
                "code": "BND",
                "name": "Brunei dollar",
                "symbol": "$"
            },
            {
                "code": "SGD",
                "name": "Singapore dollar",
                "symbol": "$"
            }
        ],
        "demonym": "Singaporean",
        "flag": "https://restcountries.eu/data/sgp.svg",
        "gini": 48.1,
        "languages": [
            {
                "iso639_1": "en",
                "iso639_2": "eng",
                "name": "English",
                "nativeName": "English"
            },
            {
                "iso639_1": "ms",
                "iso639_2": "msa",
                "name": "Malay",
                "nativeName": "bahasa Melayu"
            },
            {
                "iso639_1": "ta",
                "iso639_2": "tam",
                "name": "Tamil",
                "nativeName": "தமிழ்"
            },
            {
                "iso639_1": "zh",
                "iso639_2": "zho",
                "name": "Chinese",
                "nativeName": "中文 (Zhōngwén)"
            }
        ],
        "latlng": [
            1.36666666,
            103.8
        ],
        "name": "Singapore",
        "nativeName": "Singapore",
        "numericCode": "702",
        "population": 5685807,
        "region": "Asia",
        "regionalBlocs": [
            {
                "acronym": "ASEAN",
                "name": "Association of Southeast Asian Nations"
            }
        ],
        "subregion": "South-Eastern Asia",
        "timezones": [
            "UTC+08:00"
        ],
        "topLevelDomain": [
            ".sg"
        ],
        "translations": {
            "br": "Singapura",
            "de": "Singapur",
            "es": "Singapur",
            "fa": "سنگاپور",
            "fr": "Singapour",
            "hr": "Singapur",
            "it": "Singapore",
            "ja": "シンガポール",
            "nl": "Singapore",
            "pt": "Singapura",
            "ru": "Сингапур",
            "pl": "Singapur",
            "cs": "Singapur",
            "zh": "新加坡",
            "hu": "Szingapúr",
            "se": "Singapore"
        },
        "cioc": "SIN"
    },
    {
        "alpha2Code": "SX",
        "alpha3Code": "SXM",
        "altSpellings": [
            "SX"
        ],
        "area": 34,
        "borders": [
            "MAF"
        ],
        "callingCodes": [
            "1"
        ],
        "capital": "Philipsburg",
        "currencies": [
            {
                "code": "ANG",
                "name": "Netherlands Antillean guilder",
                "symbol": "ƒ"
            }
        ],
        "demonym": "Dutch",
        "flag": "https://restcountries.eu/data/sxm.svg",
        "languages": [
            {
                "iso639_1": "nl",
                "iso639_2": "nld",
                "name": "Dutch",
                "nativeName": "Nederlands"
            },
            {
                "iso639_1": "en",
                "iso639_2": "eng",
                "name": "English",
                "nativeName": "English"
            }
        ],
        "latlng": [
            18.033333,
            -63.05
        ],
        "name": "Sint Maarten (Dutch part)",
        "nativeName": "Sint Maarten",
        "numericCode": "534",
        "population": 40812,
        "region": "Americas",
        "regionalBlocs": [],
        "subregion": "Caribbean",
        "timezones": [
            "UTC-04:00"
        ],
        "topLevelDomain": [
            ".sx"
        ],
        "translations": {
            "br": "Sint Maarten",
            "de": "Sint Maarten (niederl. Teil)",
            "fa": "سینت مارتن",
            "fr": "Saint Martin (partie néerlandaise)",
            "it": "Saint Martin (parte olandese)",
            "nl": "Sint Maarten",
            "pt": "São Martinho",
            "pl": "Sint Maarten",
            "cs": "Svatý Martin",
            "es": "Sint Maarten (Dutch part)",
            "hr": "Sint Maarten (Dutch part)",
            "ja": "Sint Maarten (Dutch part)",
            "ru": "Sint Maarten (Dutch part)",
            "zh": "圣马丁岛",
            "hu": "Sint Maarten",
            "se": "Saint Martin"
        },
        "cioc": ""
    },
    {
        "alpha2Code": "SK",
        "alpha3Code": "SVK",
        "altSpellings": [
            "SK",
            "Slovak Republic",
            "Slovenská republika"
        ],
        "area": 49037,
        "borders": [
            "AUT",
            "CZE",
            "HUN",
            "POL",
            "UKR"
        ],
        "callingCodes": [
            "421"
        ],
        "capital": "Bratislava",
        "currencies": [
            {
                "code": "EUR",
                "name": "Euro",
                "symbol": "€"
            }
        ],
        "demonym": "Slovak",
        "flag": "https://restcountries.eu/data/svk.svg",
        "gini": 26,
        "languages": [
            {
                "iso639_1": "sk",
                "iso639_2": "slk",
                "name": "Slovak",
                "nativeName": "slovenčina"
            }
        ],
        "latlng": [
            48.66666666,
            19.5
        ],
        "name": "Slovakia",
        "nativeName": "Slovensko",
        "numericCode": "703",
        "population": 5458827,
        "region": "Europe",
        "regionalBlocs": [
            {
                "acronym": "EU",
                "name": "European Union"
            }
        ],
        "subregion": "Eastern Europe",
        "timezones": [
            "UTC+01:00"
        ],
        "topLevelDomain": [
            ".sk"
        ],
        "translations": {
            "br": "Eslováquia",
            "de": "Slowakei",
            "es": "República Eslovaca",
            "fa": "اسلواکی",
            "fr": "Slovaquie",
            "hr": "Slovačka",
            "it": "Slovacchia",
            "ja": "スロバキア",
            "nl": "Slowakije",
            "pt": "Eslováquia",
            "ru": "Словакия",
            "pl": "Słowacja",
            "cs": "Slovensko",
            "zh": "斯洛伐克共和国",
            "hu": "Szlovákia",
            "se": "Slovakien"
        },
        "cioc": "SVK"
    },
    {
        "alpha2Code": "SI",
        "alpha3Code": "SVN",
        "altSpellings": [
            "SI",
            "Republic of Slovenia",
            "Republika Slovenija"
        ],
        "area": 20273,
        "borders": [
            "AUT",
            "HRV",
            "ITA",
            "HUN"
        ],
        "callingCodes": [
            "386"
        ],
        "capital": "Ljubljana",
        "currencies": [
            {
                "code": "EUR",
                "name": "Euro",
                "symbol": "€"
            }
        ],
        "demonym": "Slovene",
        "flag": "https://restcountries.eu/data/svn.svg",
        "gini": 31.2,
        "languages": [
            {
                "iso639_1": "sl",
                "iso639_2": "slv",
                "name": "Slovene",
                "nativeName": "slovenski jezik"
            }
        ],
        "latlng": [
            46.11666666,
            14.81666666
        ],
        "name": "Slovenia",
        "nativeName": "Slovenija",
        "numericCode": "705",
        "population": 2100126,
        "region": "Europe",
        "regionalBlocs": [
            {
                "acronym": "EU",
                "name": "European Union"
            }
        ],
        "subregion": "Southern Europe",
        "timezones": [
            "UTC+01:00"
        ],
        "topLevelDomain": [
            ".si"
        ],
        "translations": {
            "br": "Eslovênia",
            "de": "Slowenien",
            "es": "Eslovenia",
            "fa": "اسلوونی",
            "fr": "Slovénie",
            "hr": "Slovenija",
            "it": "Slovenia",
            "ja": "スロベニア",
            "nl": "Slovenië",
            "pt": "Eslovénia",
            "ru": "Словения",
            "pl": "Słowenia",
            "cs": "Slovinsko",
            "zh": "斯洛文尼亚共和国",
            "hu": "Szlovénia",
            "se": "Slovenien"
        },
        "cioc": "SLO"
    },
    {
        "alpha2Code": "SB",
        "alpha3Code": "SLB",
        "altSpellings": [
            "SB"
        ],
        "area": 28896,
        "borders": [],
        "callingCodes": [
            "677"
        ],
        "capital": "Honiara",
        "currencies": [
            {
                "code": "SBD",
                "name": "Solomon Islands dollar",
                "symbol": "$"
            }
        ],
        "demonym": "Solomon Islander",
        "flag": "https://restcountries.eu/data/slb.svg",
        "languages": [
            {
                "iso639_1": "en",
                "iso639_2": "eng",
                "name": "English",
                "nativeName": "English"
            }
        ],
        "latlng": [
            -8,
            159
        ],
        "name": "Solomon Islands",
        "nativeName": "Solomon Islands",
        "numericCode": "090",
        "population": 686878,
        "region": "Oceania",
        "regionalBlocs": [],
        "subregion": "Melanesia",
        "timezones": [
            "UTC+11:00"
        ],
        "topLevelDomain": [
            ".sb"
        ],
        "translations": {
            "br": "Ilhas Salomão",
            "de": "Salomonen",
            "es": "Islas Salomón",
            "fa": "جزایر سلیمان",
            "fr": "Îles Salomon",
            "hr": "Solomonski Otoci",
            "it": "Isole Salomone",
            "ja": "ソロモン諸島",
            "nl": "Salomonseilanden",
            "pt": "Ilhas Salomão",
            "ru": "Соломоновы Острова",
            "pl": "Wyspy Salomona",
            "cs": "Šalamounovy ostrovy",
            "zh": "所罗门群岛",
            "hu": "Salamon-szigetek",
            "se": "Salomonöarna"
        },
        "cioc": "SOL"
    },
    {
        "alpha2Code": "SO",
        "alpha3Code": "SOM",
        "altSpellings": [
            "SO",
            "aṣ-Ṣūmāl",
            "Federal Republic of Somalia",
            "Jamhuuriyadda Federaalka Soomaaliya",
            "Jumhūriyyat aṣ-Ṣūmāl al-Fiderāliyya"
        ],
        "area": 637657,
        "borders": [
            "DJI",
            "ETH",
            "KEN"
        ],
        "callingCodes": [
            "252"
        ],
        "capital": "Mogadishu",
        "currencies": [
            {
                "code": "SOS",
                "name": "Somali shilling",
                "symbol": "Sh"
            }
        ],
        "demonym": "Somali",
        "flag": "https://restcountries.eu/data/som.svg",
        "gini": null,
        "languages": [
            {
                "iso639_1": "so",
                "iso639_2": "som",
                "name": "Somali",
                "nativeName": "Soomaaliga"
            },
            {
                "iso639_1": "ar",
                "iso639_2": "ara",
                "name": "Arabic",
                "nativeName": "العربية"
            }
        ],
        "latlng": [
            10,
            49
        ],
        "name": "Somalia",
        "nativeName": "Soomaaliya",
        "numericCode": "706",
        "population": 15893219,
        "region": "Africa",
        "regionalBlocs": [
            {
                "acronym": "AU",
                "name": "African Union",
                "otherNames": [
                    "الاتحاد الأفريقي",
                    "Union africaine",
                    "União Africana",
                    "Unión Africana",
                    "Umoja wa Afrika"
                ]
            },
            {
                "acronym": "AL",
                "name": "Arab League",
                "otherNames": [
                    "جامعة الدول العربية",
                    "Jāmiʻat ad-Duwal al-ʻArabīyah",
                    "League of Arab States"
                ]
            }
        ],
        "subregion": "Eastern Africa",
        "timezones": [
            "UTC+03:00"
        ],
        "topLevelDomain": [
            ".so"
        ],
        "translations": {
            "br": "Somália",
            "de": "Somalia",
            "es": "Somalia",
            "fa": "سومالی",
            "fr": "Somalie",
            "hr": "Somalija",
            "it": "Somalia",
            "ja": "ソマリア",
            "nl": "Somalië",
            "pt": "Somália",
            "ru": "Сомали",
            "pl": "Somalia",
            "cs": "Somálsko",
            "zh": "索马里共和国",
            "hu": "Szomália",
            "se": "Somalia"
        },
        "cioc": "SOM"
    },
    {
        "alpha2Code": "ZA",
        "alpha3Code": "ZAF",
        "altSpellings": [
            "ZA",
            "RSA",
            "Suid-Afrika",
            "Republic of South Africa"
        ],
        "area": 1221037,
        "borders": [
            "BWA",
            "LSO",
            "MOZ",
            "NAM",
            "SWZ",
            "ZWE"
        ],
        "callingCodes": [
            "27"
        ],
        "capital": "Pretoria",
        "currencies": [
            {
                "code": "ZAR",
                "name": "South African rand",
                "symbol": "R"
            }
        ],
        "demonym": "South African",
        "flag": "https://restcountries.eu/data/zaf.svg",
        "gini": 63.1,
        "languages": [
            {
                "iso639_1": "af",
                "iso639_2": "afr",
                "name": "Afrikaans",
                "nativeName": "Afrikaans"
            },
            {
                "iso639_1": "en",
                "iso639_2": "eng",
                "name": "English",
                "nativeName": "English"
            },
            {
                "iso639_1": "nr",
                "iso639_2": "nbl",
                "name": "Southern Ndebele",
                "nativeName": "isiNdebele"
            },
            {
                "iso639_1": "st",
                "iso639_2": "sot",
                "name": "Southern Sotho",
                "nativeName": "Sesotho"
            },
            {
                "iso639_1": "ss",
                "iso639_2": "ssw",
                "name": "Swati",
                "nativeName": "SiSwati"
            },
            {
                "iso639_1": "tn",
                "iso639_2": "tsn",
                "name": "Tswana",
                "nativeName": "Setswana"
            },
            {
                "iso639_1": "ts",
                "iso639_2": "tso",
                "name": "Tsonga",
                "nativeName": "Xitsonga"
            },
            {
                "iso639_1": "ve",
                "iso639_2": "ven",
                "name": "Venda",
                "nativeName": "Tshivenḓa"
            },
            {
                "iso639_1": "xh",
                "iso639_2": "xho",
                "name": "Xhosa",
                "nativeName": "isiXhosa"
            },
            {
                "iso639_1": "zu",
                "iso639_2": "zul",
                "name": "Zulu",
                "nativeName": "isiZulu"
            }
        ],
        "latlng": [
            -29,
            24
        ],
        "name": "South Africa",
        "nativeName": "South Africa",
        "numericCode": "710",
        "population": 59308690,
        "region": "Africa",
        "regionalBlocs": [
            {
                "acronym": "AU",
                "name": "African Union",
                "otherNames": [
                    "الاتحاد الأفريقي",
                    "Union africaine",
                    "União Africana",
                    "Unión Africana",
                    "Umoja wa Afrika"
                ]
            }
        ],
        "subregion": "Southern Africa",
        "timezones": [
            "UTC+02:00"
        ],
        "topLevelDomain": [
            ".za"
        ],
        "translations": {
            "br": "República Sul-Africana",
            "de": "Republik Südafrika",
            "es": "República de Sudáfrica",
            "fa": "آفریقای جنوبی",
            "fr": "Afrique du Sud",
            "hr": "Južnoafrička Republika",
            "it": "Sud Africa",
            "ja": "南アフリカ",
            "nl": "Zuid-Afrika",
            "pt": "República Sul-Africana",
            "ru": "ЮАР",
            "pl": "Republika Południowej Afryki",
            "cs": "Jihoafrická republika",
            "zh": "南非共和国",
            "hu": "Dél-afrikai Köztársaság",
            "se": "Sydafrika"
        },
        "cioc": "RSA"
    },
    {
        "alpha2Code": "GS",
        "alpha3Code": "SGS",
        "altSpellings": [
            "GS",
            "South Georgia and the South Sandwich Islands"
        ],
        "borders": [],
        "callingCodes": [
            "500"
        ],
        "capital": "King Edward Point",
        "currencies": [
            {
                "code": "GBP",
                "name": "British pound",
                "symbol": "£"
            },
            {
                "code": "(none)",
                "name": null,
                "symbol": "£"
            }
        ],
        "demonym": "South Georgia and the South Sandwich Islander",
        "flag": "https://restcountries.eu/data/sgs.svg",
        "languages": [
            {
                "iso639_1": "en",
                "iso639_2": "eng",
                "name": "English",
                "nativeName": "English"
            }
        ],
        "latlng": [
            -54.5,
            -37
        ],
        "name": "South Georgia and the South Sandwich Islands",
        "nativeName": "South Georgia",
        "numericCode": "239",
        "population": 30,
        "region": "Americas",
        "regionalBlocs": [
            {
                "acronym": "USAN",
                "name": "Union of South American Nations",
                "otherAcronyms": [
                    "UNASUR",
                    "UNASUL",
                    "UZAN"
                ],
                "otherNames": [
                    "Unión de Naciones Suramericanas",
                    "União de Nações Sul-Americanas",
                    "Unie van Zuid-Amerikaanse Naties",
                    "South American Union"
                ]
            }
        ],
        "subregion": "South America",
        "timezones": [
            "UTC-02:00"
        ],
        "topLevelDomain": [
            ".gs"
        ],
        "translations": {
            "br": "Ilhas Geórgias do Sul e Sandwich do Sul",
            "de": "Südgeorgien und die Südlichen Sandwichinseln",
            "es": "Islas Georgias del Sur y Sandwich del Sur",
            "fa": "جزایر جورجیای جنوبی و ساندویچ جنوبی",
            "fr": "Géorgie du Sud-et-les Îles Sandwich du Sud",
            "hr": "Južna Georgija i otočje Južni Sandwich",
            "it": "Georgia del Sud e Isole Sandwich Meridionali",
            "ja": "サウスジョージア・サウスサンドウィッチ諸島",
            "nl": "Zuid-Georgia en Zuidelijke Sandwicheilanden",
            "pt": "Ilhas Geórgia do Sul e Sanduíche do Sul",
            "pl": "Georgia Południowa i Sandwich Południowy",
            "cs": "Jižní Georgie a Jižní Sandwichovy ostrovy",
            "ru": "South Georgia and the South Sandwich Islands",
            "zh": "南乔治亚岛和南桑威奇群岛",
            "hu": "Déli-Georgia és Déli-Sandwich-szigetek",
            "se": "Sydgeorgien och Sydsandwichöarna"
        },
        "cioc": ""
    },
    {
        "alpha2Code": "KR",
        "alpha3Code": "KOR",
        "altSpellings": [
            "KR",
            "Republic of Korea",
            "South Korea"
        ],
        "area": 100210,
        "borders": [
            "PRK"
        ],
        "callingCodes": [
            "82"
        ],
        "capital": "Seoul",
        "currencies": [
            {
                "code": "KRW",
                "name": "South Korean won",
                "symbol": "₩"
            }
        ],
        "demonym": "South Korean",
        "flag": "https://restcountries.eu/data/kor.svg",
        "gini": 31.3,
        "languages": [
            {
                "iso639_1": "ko",
                "iso639_2": "kor",
                "name": "Korean",
                "nativeName": "한국어"
            }
        ],
        "latlng": [
            37,
            127.5
        ],
        "name": "Korea (Republic of)",
        "nativeName": "대한민국",
        "numericCode": "410",
        "population": 51780579,
        "region": "Asia",
        "regionalBlocs": [],
        "subregion": "Eastern Asia",
        "timezones": [
            "UTC+09:00"
        ],
        "topLevelDomain": [
            ".kr"
        ],
        "translations": {
            "br": "Coreia do Sul",
            "de": "Südkorea",
            "es": "Corea del Sur",
            "fa": "کره شمالی",
            "fr": "Corée du Sud",
            "hr": "Južna Koreja",
            "it": "Corea del Sud",
            "ja": "大韓民国",
            "nl": "Zuid-Korea",
            "pt": "Coreia do Sul",
            "ru": "Республика Корея",
            "pl": "Korea Południowa",
            "cs": "Jižní Korea",
            "zh": "大韩民国",
            "hu": "Dél-Korea",
            "se": "Sydkorea"
        },
        "cioc": "KOR"
    },
    {
        "alpha2Code": "SS",
        "alpha3Code": "SSD",
        "altSpellings": [
            "SS"
        ],
        "area": 619745,
        "borders": [
            "CAF",
            "COD",
            "ETH",
            "KEN",
            "SDN",
            "UGA"
        ],
        "callingCodes": [
            "211"
        ],
        "capital": "Juba",
        "currencies": [
            {
                "code": "SSP",
                "name": "South Sudanese pound",
                "symbol": "£"
            }
        ],
        "demonym": "South Sudanese",
        "flag": "https://restcountries.eu/data/ssd.svg",
        "gini": 45.5,
        "languages": [
            {
                "iso639_1": "en",
                "iso639_2": "eng",
                "name": "English",
                "nativeName": "English"
            }
        ],
        "latlng": [
            7,
            30
        ],
        "name": "South Sudan",
        "nativeName": "South Sudan",
        "numericCode": "728",
        "population": 11193729,
        "region": "Africa",
        "regionalBlocs": [
            {
                "acronym": "AU",
                "name": "African Union",
                "otherNames": [
                    "الاتحاد الأفريقي",
                    "Union africaine",
                    "União Africana",
                    "Unión Africana",
                    "Umoja wa Afrika"
                ]
            }
        ],
        "subregion": "Middle Africa",
        "timezones": [
            "UTC+03:00"
        ],
        "topLevelDomain": [
            ".ss"
        ],
        "translations": {
            "br": "Sudão do Sul",
            "de": "Südsudan",
            "es": "Sudán del Sur",
            "fa": "سودان جنوبی",
            "fr": "Soudan du Sud",
            "hr": "Južni Sudan",
            "it": "Sudan del sud",
            "ja": "南スーダン",
            "nl": "Zuid-Soedan",
            "pt": "Sudão do Sul",
            "ru": "Южный Судан",
            "pl": "Sudan Południowy",
            "cs": "Jižní Súdán",
            "zh": "南苏丹共和国",
            "hu": "Dél-Szudán",
            "se": "Sydsudan"
        },
        "cioc": ""
    },
    {
        "alpha2Code": "ES",
        "alpha3Code": "ESP",
        "altSpellings": [
            "ES",
            "Kingdom of Spain",
            "Reino de España"
        ],
        "area": 505992,
        "borders": [
            "AND",
            "FRA",
            "GIB",
            "PRT",
            "MAR"
        ],
        "callingCodes": [
            "34"
        ],
        "capital": "Madrid",
        "currencies": [
            {
                "code": "EUR",
                "name": "Euro",
                "symbol": "€"
            }
        ],
        "demonym": "Spanish",
        "flag": "https://restcountries.eu/data/esp.svg",
        "gini": 34.7,
        "languages": [
            {
                "iso639_1": "es",
                "iso639_2": "spa",
                "name": "Spanish",
                "nativeName": "Español"
            }
        ],
        "latlng": [
            40,
            -4
        ],
        "name": "Spain",
        "nativeName": "España",
        "numericCode": "724",
        "population": 47351567,
        "region": "Europe",
        "regionalBlocs": [
            {
                "acronym": "EU",
                "name": "European Union"
            }
        ],
        "subregion": "Southern Europe",
        "timezones": [
            "UTC",
            "UTC+01:00"
        ],
        "topLevelDomain": [
            ".es"
        ],
        "translations": {
            "br": "Espanha",
            "de": "Spanien",
            "es": "España",
            "fa": "اسپانیا",
            "fr": "Espagne",
            "hr": "Španjolska",
            "it": "Spagna",
            "ja": "スペイン",
            "nl": "Spanje",
            "pt": "Espanha",
            "ru": "Испания",
            "pl": "Hiszpania",
            "cs": "Španělsko",
            "zh": "西班牙王国",
            "hu": "Spanyolország",
            "se": "Spanien"
        },
        "cioc": "ESP"
    },
    {
        "alpha2Code": "LK",
        "alpha3Code": "LKA",
        "altSpellings": [
            "LK",
            "ilaṅkai",
            "Democratic Socialist Republic of Sri Lanka"
        ],
        "area": 65610,
        "borders": [
            "IND"
        ],
        "callingCodes": [
            "94"
        ],
        "capital": "Sri Jayawardenepura Kotte",
        "currencies": [
            {
                "code": "LKR",
                "name": "Sri Lankan rupee",
                "symbol": "Rs"
            }
        ],
        "demonym": "Sri Lankan",
        "flag": "https://restcountries.eu/data/lka.svg",
        "gini": 40.3,
        "languages": [
            {
                "iso639_1": "si",
                "iso639_2": "sin",
                "name": "Sinhalese",
                "nativeName": "සිංහල"
            },
            {
                "iso639_1": "ta",
                "iso639_2": "tam",
                "name": "Tamil",
                "nativeName": "தமிழ்"
            }
        ],
        "latlng": [
            7,
            81
        ],
        "name": "Sri Lanka",
        "nativeName": "śrī laṃkāva",
        "numericCode": "144",
        "population": 21919000,
        "region": "Asia",
        "regionalBlocs": [
            {
                "acronym": "SAARC",
                "name": "South Asian Association for Regional Cooperation"
            }
        ],
        "subregion": "Southern Asia",
        "timezones": [
            "UTC+05:30"
        ],
        "topLevelDomain": [
            ".lk"
        ],
        "translations": {
            "br": "Sri Lanka",
            "de": "Sri Lanka",
            "es": "Sri Lanka",
            "fa": "سری‌لانکا",
            "fr": "Sri Lanka",
            "hr": "Šri Lanka",
            "it": "Sri Lanka",
            "ja": "スリランカ",
            "nl": "Sri Lanka",
            "pt": "Sri Lanka",
            "ru": "Шри-Ланка",
            "pl": "Sri Lanka",
            "cs": "Srí Lanka",
            "zh": "斯里兰卡民主社会主义共和国",
            "hu": "Srí Lanka",
            "se": "Sri Lanka"
        },
        "cioc": "SRI"
    },
    {
        "alpha2Code": "SD",
        "alpha3Code": "SDN",
        "altSpellings": [
            "SD",
            "Republic of the Sudan",
            "Jumhūrīyat as-Sūdān"
        ],
        "area": 1886068,
        "borders": [
            "CAF",
            "TCD",
            "EGY",
            "ERI",
            "ETH",
            "LBY",
            "SSD"
        ],
        "callingCodes": [
            "249"
        ],
        "capital": "Khartoum",
        "currencies": [
            {
                "code": "SDG",
                "name": "Sudanese pound",
                "symbol": "ج.س."
            }
        ],
        "demonym": "Sudanese",
        "flag": "https://restcountries.eu/data/sdn.svg",
        "gini": 35.3,
        "languages": [
            {
                "iso639_1": "ar",
                "iso639_2": "ara",
                "name": "Arabic",
                "nativeName": "العربية"
            },
            {
                "iso639_1": "en",
                "iso639_2": "eng",
                "name": "English",
                "nativeName": "English"
            }
        ],
        "latlng": [
            15,
            30
        ],
        "name": "Sudan",
        "nativeName": "السودان",
        "numericCode": "729",
        "population": 43849269,
        "region": "Africa",
        "regionalBlocs": [
            {
                "acronym": "AU",
                "name": "African Union",
                "otherNames": [
                    "الاتحاد الأفريقي",
                    "Union africaine",
                    "União Africana",
                    "Unión Africana",
                    "Umoja wa Afrika"
                ]
            },
            {
                "acronym": "AL",
                "name": "Arab League",
                "otherNames": [
                    "جامعة الدول العربية",
                    "Jāmiʻat ad-Duwal al-ʻArabīyah",
                    "League of Arab States"
                ]
            }
        ],
        "subregion": "Northern Africa",
        "timezones": [
            "UTC+03:00"
        ],
        "topLevelDomain": [
            ".sd"
        ],
        "translations": {
            "br": "Sudão",
            "de": "Sudan",
            "es": "Sudán",
            "fa": "سودان",
            "fr": "Soudan",
            "hr": "Sudan",
            "it": "Sudan",
            "ja": "スーダン",
            "nl": "Soedan",
            "pt": "Sudão",
            "ru": "Судан",
            "pl": "Sudan",
            "cs": "Súdán",
            "zh": "苏丹共和国",
            "hu": "Szudán",
            "se": "Sudan"
        },
        "cioc": "SUD"
    },
    {
        "alpha2Code": "SR",
        "alpha3Code": "SUR",
        "altSpellings": [
            "SR",
            "Sarnam",
            "Sranangron",
            "Republic of Suriname",
            "Republiek Suriname"
        ],
        "area": 163820,
        "borders": [
            "BRA",
            "GUF",
            "FRA",
            "GUY"
        ],
        "callingCodes": [
            "597"
        ],
        "capital": "Paramaribo",
        "currencies": [
            {
                "code": "SRD",
                "name": "Surinamese dollar",
                "symbol": "$"
            }
        ],
        "demonym": "Surinamer",
        "flag": "https://restcountries.eu/data/sur.svg",
        "gini": 52.9,
        "languages": [
            {
                "iso639_1": "nl",
                "iso639_2": "nld",
                "name": "Dutch",
                "nativeName": "Nederlands"
            }
        ],
        "latlng": [
            4,
            -56
        ],
        "name": "Suriname",
        "nativeName": "Suriname",
        "numericCode": "740",
        "population": 586634,
        "region": "Americas",
        "regionalBlocs": [
            {
                "acronym": "CARICOM",
                "name": "Caribbean Community",
                "otherNames": [
                    "Comunidad del Caribe",
                    "Communauté Caribéenne",
                    "Caribische Gemeenschap"
                ]
            },
            {
                "acronym": "USAN",
                "name": "Union of South American Nations",
                "otherAcronyms": [
                    "UNASUR",
                    "UNASUL",
                    "UZAN"
                ],
                "otherNames": [
                    "Unión de Naciones Suramericanas",
                    "União de Nações Sul-Americanas",
                    "Unie van Zuid-Amerikaanse Naties",
                    "South American Union"
                ]
            }
        ],
        "subregion": "South America",
        "timezones": [
            "UTC-03:00"
        ],
        "topLevelDomain": [
            ".sr"
        ],
        "translations": {
            "br": "Suriname",
            "de": "Suriname",
            "es": "Surinam",
            "fa": "سورینام",
            "fr": "Surinam",
            "hr": "Surinam",
            "it": "Suriname",
            "ja": "スリナム",
            "nl": "Suriname",
            "pt": "Suriname",
            "ru": "Суринам",
            "pl": "Surinam",
            "cs": "Surinam",
            "zh": "苏里南共和国",
            "hu": "Suriname",
            "se": "Surinam"
        },
        "cioc": "SUR"
    },
    {
        "alpha2Code": "SJ",
        "alpha3Code": "SJM",
        "altSpellings": [
            "SJ",
            "Svalbard and Jan Mayen Islands"
        ],
        "borders": [],
        "callingCodes": [
            "47"
        ],
        "capital": "Longyearbyen",
        "currencies": [
            {
                "code": "NOK",
                "name": "Norwegian krone",
                "symbol": "kr"
            }
        ],
        "demonym": "Norwegian",
        "flag": "https://restcountries.eu/data/sjm.svg",
        "languages": [
            {
                "iso639_1": "no",
                "iso639_2": "nor",
                "name": "Norwegian",
                "nativeName": "Norsk"
            }
        ],
        "latlng": [
            78,
            20
        ],
        "name": "Svalbard and Jan Mayen",
        "nativeName": "Svalbard og Jan Mayen",
        "numericCode": "744",
        "population": 2562,
        "region": "Europe",
        "regionalBlocs": [],
        "subregion": "Northern Europe",
        "timezones": [
            "UTC+01:00"
        ],
        "topLevelDomain": [
            ".sj"
        ],
        "translations": {
            "br": "Svalbard",
            "de": "Svalbard und Jan Mayen",
            "es": "Islas Svalbard y Jan Mayen",
            "fa": "سوالبارد و یان ماین",
            "fr": "Svalbard et Jan Mayen",
            "hr": "Svalbard i Jan Mayen",
            "it": "Svalbard e Jan Mayen",
            "ja": "スヴァールバル諸島およびヤンマイエン島",
            "nl": "Svalbard en Jan Mayen",
            "pt": "Svalbard",
            "pl": "Svalbard",
            "cs": "Špicberky a Jan Mayen",
            "ru": "Svalbard and Jan Mayen",
            "zh": "斯瓦尔巴特",
            "hu": "Spitzbergák és Jan Mayen-szigetek",
            "se": "Svalbard och Jan Mayen"
        },
        "cioc": ""
    },
    {
        "alpha2Code": "SZ",
        "alpha3Code": "SWZ",
        "altSpellings": [
            "SZ",
            "weSwatini",
            "Swatini",
            "Ngwane",
            "Kingdom of Swaziland",
            "Umbuso waseSwatini",
            "Swaziland"
        ],
        "area": 17364,
        "borders": [
            "MOZ",
            "ZAF"
        ],
        "callingCodes": [
            "268"
        ],
        "capital": "Mbabane",
        "currencies": [
            {
                "code": "SZL",
                "name": "Swazi lilangeni",
                "symbol": "L"
            }
        ],
        "demonym": "Swazi",
        "flag": "https://restcountries.eu/data/swz.svg",
        "gini": 51.5,
        "languages": [
            {
                "iso639_1": "en",
                "iso639_2": "eng",
                "name": "English",
                "nativeName": "English"
            },
            {
                "iso639_1": "ss",
                "iso639_2": "ssw",
                "name": "Swati",
                "nativeName": "SiSwati"
            }
        ],
        "latlng": [
            -26.5,
            31.5
        ],
        "name": "Eswatini",
        "nativeName": "eSwatini",
        "numericCode": "748",
        "population": 1160164,
        "region": "Africa",
        "regionalBlocs": [
            {
                "acronym": "AU",
                "name": "African Union",
                "otherNames": [
                    "الاتحاد الأفريقي",
                    "Union africaine",
                    "União Africana",
                    "Unión Africana",
                    "Umoja wa Afrika"
                ]
            }
        ],
        "subregion": "Southern Africa",
        "timezones": [
            "UTC+02:00"
        ],
        "topLevelDomain": [
            ".sz"
        ],
        "translations": {
            "br": "Suazilândia",
            "de": "Swasiland",
            "es": "Suazilandia",
            "fa": "سوازیلند",
            "fr": "Swaziland",
            "hr": "Svazi",
            "it": "Swaziland",
            "ja": "スワジランド",
            "nl": "Swaziland",
            "pt": "Suazilândia",
            "ru": "Эсватини",
            "pl": "Suazi",
            "cs": "Svazijsko",
            "zh": "斯威士兰王国",
            "hu": "Szváziföld",
            "se": "Swaziland"
        },
        "cioc": "SWZ"
    },
    {
        "alpha2Code": "SE",
        "alpha3Code": "SWE",
        "altSpellings": [
            "SE",
            "Kingdom of Sweden",
            "Konungariket Sverige"
        ],
        "area": 450295,
        "borders": [
            "FIN",
            "NOR"
        ],
        "callingCodes": [
            "46"
        ],
        "capital": "Stockholm",
        "currencies": [
            {
                "code": "SEK",
                "name": "Swedish krona",
                "symbol": "kr"
            }
        ],
        "demonym": "Swedish",
        "flag": "https://restcountries.eu/data/swe.svg",
        "gini": 25,
        "languages": [
            {
                "iso639_1": "sv",
                "iso639_2": "swe",
                "name": "Swedish",
                "nativeName": "svenska"
            }
        ],
        "latlng": [
            62,
            15
        ],
        "name": "Sweden",
        "nativeName": "Sverige",
        "numericCode": "752",
        "population": 10353442,
        "region": "Europe",
        "regionalBlocs": [
            {
                "acronym": "EU",
                "name": "European Union"
            }
        ],
        "subregion": "Northern Europe",
        "timezones": [
            "UTC+01:00"
        ],
        "topLevelDomain": [
            ".se"
        ],
        "translations": {
            "br": "Suécia",
            "de": "Schweden",
            "es": "Suecia",
            "fa": "سوئد",
            "fr": "Suède",
            "hr": "Švedska",
            "it": "Svezia",
            "ja": "スウェーデン",
            "nl": "Zweden",
            "pt": "Suécia",
            "ru": "Швеция",
            "pl": "Szwecja",
            "cs": "Švédsko",
            "zh": "瑞典王国",
            "hu": "Svédország",
            "se": "Sverige"
        },
        "cioc": "SWE"
    },
    {
        "alpha2Code": "CH",
        "alpha3Code": "CHE",
        "altSpellings": [
            "CH",
            "Swiss Confederation",
            "Schweiz",
            "Suisse",
            "Svizzera",
            "Svizra"
        ],
        "area": 41284,
        "borders": [
            "AUT",
            "FRA",
            "ITA",
            "LIE",
            "DEU"
        ],
        "callingCodes": [
            "41"
        ],
        "capital": "Bern",
        "currencies": [
            {
                "code": "CHF",
                "name": "Swiss franc",
                "symbol": "Fr"
            }
        ],
        "demonym": "Swiss",
        "flag": "https://restcountries.eu/data/che.svg",
        "gini": 33.7,
        "languages": [
            {
                "iso639_1": "de",
                "iso639_2": "deu",
                "name": "German",
                "nativeName": "Deutsch"
            },
            {
                "iso639_1": "fr",
                "iso639_2": "fra",
                "name": "French",
                "nativeName": "français"
            },
            {
                "iso639_1": "it",
                "iso639_2": "ita",
                "name": "Italian",
                "nativeName": "Italiano"
            },
            {
                "iso639-1": "rm",
                "iso639_2": "roh",
                "name": "Romansh",
                "nativName": "Rumantsch"
            }
        ],
        "latlng": [
            47,
            8
        ],
        "name": "Switzerland",
        "nativeName": "Schweiz",
        "numericCode": "756",
        "population": 8636896,
        "region": "Europe",
        "regionalBlocs": [
            {
                "acronym": "EFTA",
                "name": "European Free Trade Association"
            }
        ],
        "subregion": "Western Europe",
        "timezones": [
            "UTC+01:00"
        ],
        "topLevelDomain": [
            ".ch"
        ],
        "translations": {
            "br": "Suíça",
            "de": "Schweiz",
            "es": "Suiza",
            "fa": "سوئیس",
            "fr": "Suisse",
            "hr": "Švicarska",
            "it": "Svizzera",
            "ja": "スイス",
            "nl": "Zwitserland",
            "pt": "Suíça",
            "ru": "Швейцария",
            "pl": "Szwajcaria",
            "cs": "Švýcarsko",
            "zh": "瑞士联邦",
            "hu": "Svájc",
            "se": "Schweiz"
        },
        "cioc": "SUI"
    },
    {
        "alpha2Code": "SY",
        "alpha3Code": "SYR",
        "altSpellings": [
            "SY",
            "Syrian Arab Republic",
            "Al-Jumhūrīyah Al-ʻArabīyah As-Sūrīyah"
        ],
        "area": 185180,
        "borders": [
            "IRQ",
            "ISR",
            "JOR",
            "LBN",
            "TUR"
        ],
        "callingCodes": [
            "963"
        ],
        "capital": "Damascus",
        "currencies": [
            {
                "code": "SYP",
                "name": "Syrian pound",
                "symbol": "£"
            }
        ],
        "demonym": "Syrian",
        "flag": "https://restcountries.eu/data/syr.svg",
        "gini": 35.8,
        "languages": [
            {
                "iso639_1": "ar",
                "iso639_2": "ara",
                "name": "Arabic",
                "nativeName": "العربية"
            }
        ],
        "latlng": [
            35,
            38
        ],
        "name": "Syrian Arab Republic",
        "nativeName": "سوريا",
        "numericCode": "760",
        "population": 17500657,
        "region": "Asia",
        "regionalBlocs": [
            {
                "acronym": "AL",
                "name": "Arab League",
                "otherNames": [
                    "جامعة الدول العربية",
                    "Jāmiʻat ad-Duwal al-ʻArabīyah",
                    "League of Arab States"
                ]
            }
        ],
        "subregion": "Western Asia",
        "timezones": [
            "UTC+02:00"
        ],
        "topLevelDomain": [
            ".sy"
        ],
        "translations": {
            "br": "Síria",
            "de": "Syrien",
            "es": "Siria",
            "fa": "سوریه",
            "fr": "Syrie",
            "hr": "Sirija",
            "it": "Siria",
            "ja": "シリア・アラブ共和国",
            "nl": "Syrië",
            "pt": "Síria",
            "ru": "Сирия",
            "pl": "Syria",
            "cs": "Sýrie",
            "zh": "叙利亚阿拉伯共和国",
            "hu": "Szíria",
            "se": "Syrien"
        },
        "cioc": "SYR"
    },
    {
        "alpha2Code": "TW",
        "alpha3Code": "TWN",
        "altSpellings": [
            "TW",
            "Táiwān",
            "Republic of China",
            "中華民國",
            "Zhōnghuá Mínguó"
        ],
        "area": 36193,
        "borders": [
            "NPL"
        ],
        "callingCodes": [
            "886"
        ],
        "capital": "Taipei",
        "currencies": [
            {
                "code": "TWD",
                "name": "New Taiwan dollar",
                "symbol": "$"
            }
        ],
        "demonym": "Taiwanese",
        "flag": "https://restcountries.eu/data/twn.svg",
        "gini": null,
        "languages": [
            {
                "iso639_1": "zh",
                "iso639_2": "zho",
                "name": "Chinese",
                "nativeName": "中文 (Zhōngwén)"
            }
        ],
        "latlng": [
            23.5,
            121
        ],
        "name": "Taiwan",
        "nativeName": "臺灣",
        "numericCode": "158",
        "population": 23503349,
        "region": "Asia",
        "regionalBlocs": [],
        "subregion": "Eastern Asia",
        "timezones": [
            "UTC+08:00"
        ],
        "topLevelDomain": [
            ".tw"
        ],
        "translations": {
            "br": "Taiwan",
            "de": "Taiwan",
            "es": "Taiwán",
            "fa": "تایوان",
            "fr": "Taïwan",
            "hr": "Tajvan",
            "it": "Taiwan",
            "ja": "台湾（中華民国）",
            "nl": "Taiwan",
            "pt": "Taiwan",
            "pl": "Tajwan",
            "cs": "Taiwan",
            "ru": "Taiwan",
            "zh": "台湾",
            "hu": "Tajvan",
            "se": "Taiwan"
        },
        "cioc": "TPE"
    },
    {
        "alpha2Code": "TJ",
        "alpha3Code": "TJK",
        "altSpellings": [
            "TJ",
            "Toçikiston",
            "Republic of Tajikistan",
            "Ҷумҳурии Тоҷикистон",
            "Çumhuriyi Toçikiston"
        ],
        "area": 143100,
        "borders": [
            "AFG",
            "CHN",
            "KGZ",
            "UZB"
        ],
        "callingCodes": [
            "992"
        ],
        "capital": "Dushanbe",
        "currencies": [
            {
                "code": "TJS",
                "name": "Tajikistani somoni",
                "symbol": "ЅМ"
            }
        ],
        "demonym": "Tadzhik",
        "flag": "https://restcountries.eu/data/tjk.svg",
        "gini": 30.8,
        "languages": [
            {
                "iso639_1": "tg",
                "iso639_2": "tgk",
                "name": "Tajik",
                "nativeName": "тоҷикӣ"
            },
            {
                "iso639_1": "ru",
                "iso639_2": "rus",
                "name": "Russian",
                "nativeName": "Русский"
            }
        ],
        "latlng": [
            39,
            71
        ],
        "name": "Tajikistan",
        "nativeName": "Тоҷикистон",
        "numericCode": "762",
        "population": 9537642,
        "region": "Asia",
        "regionalBlocs": [],
        "subregion": "Central Asia",
        "timezones": [
            "UTC+05:00"
        ],
        "topLevelDomain": [
            ".tj"
        ],
        "translations": {
            "br": "Tajiquistão",
            "de": "Tadschikistan",
            "es": "Tayikistán",
            "fa": "تاجیکستان",
            "fr": "Tadjikistan",
            "hr": "Tađikistan",
            "it": "Tagikistan",
            "ja": "タジキスタン",
            "nl": "Tadzjikistan",
            "pt": "Tajiquistão",
            "ru": "Таджикистан",
            "pl": "Tadżykistan",
            "cs": "Tádžikistán",
            "zh": "塔吉克斯坦共和国",
            "hu": "Tádzsikisztán",
            "se": "Tadzjikistan"
        },
        "cioc": "TJK"
    },
    {
        "alpha2Code": "TZ",
        "alpha3Code": "TZA",
        "altSpellings": [
            "TZ",
            "United Republic of Tanzania",
            "Jamhuri ya Muungano wa Tanzania"
        ],
        "area": 945087,
        "borders": [
            "BDI",
            "COD",
            "KEN",
            "MWI",
            "MOZ",
            "RWA",
            "UGA",
            "ZMB"
        ],
        "callingCodes": [
            "255"
        ],
        "capital": "Dodoma",
        "currencies": [
            {
                "code": "TZS",
                "name": "Tanzanian shilling",
                "symbol": "Sh"
            }
        ],
        "demonym": "Tanzanian",
        "flag": "https://restcountries.eu/data/tza.svg",
        "gini": 37.6,
        "languages": [
            {
                "iso639_1": "sw",
                "iso639_2": "swa",
                "name": "Swahili",
                "nativeName": "Kiswahili"
            },
            {
                "iso639_1": "en",
                "iso639_2": "eng",
                "name": "English",
                "nativeName": "English"
            }
        ],
        "latlng": [
            -6,
            35
        ],
        "name": "Tanzania, United Republic of",
        "nativeName": "Tanzania",
        "numericCode": "834",
        "population": 59734213,
        "region": "Africa",
        "regionalBlocs": [
            {
                "acronym": "AU",
                "name": "African Union",
                "otherNames": [
                    "الاتحاد الأفريقي",
                    "Union africaine",
                    "União Africana",
                    "Unión Africana",
                    "Umoja wa Afrika"
                ]
            }
        ],
        "subregion": "Eastern Africa",
        "timezones": [
            "UTC+03:00"
        ],
        "topLevelDomain": [
            ".tz"
        ],
        "translations": {
            "br": "Tanzânia",
            "de": "Tansania",
            "es": "Tanzania",
            "fa": "تانزانیا",
            "fr": "Tanzanie",
            "hr": "Tanzanija",
            "it": "Tanzania",
            "ja": "タンザニア",
            "nl": "Tanzania",
            "pt": "Tanzânia",
            "ru": "Танзания",
            "pl": "Tanzania",
            "cs": "Tanzanie",
            "zh": "坦桑尼亚联合共和国",
            "hu": "Tádzsikisztán",
            "se": "Tanzania"
        },
        "cioc": "TAN"
    },
    {
        "alpha2Code": "TH",
        "alpha3Code": "THA",
        "altSpellings": [
            "TH",
            "Prathet",
            "Thai",
            "Kingdom of Thailand",
            "ราชอาณาจักรไทย",
            "Ratcha Anachak Thai"
        ],
        "area": 513120,
        "borders": [
            "MMR",
            "KHM",
            "LAO",
            "MYS"
        ],
        "callingCodes": [
            "66"
        ],
        "capital": "Bangkok",
        "currencies": [
            {
                "code": "THB",
                "name": "Thai baht",
                "symbol": "฿"
            }
        ],
        "demonym": "Thai",
        "flag": "https://restcountries.eu/data/tha.svg",
        "gini": 40,
        "languages": [
            {
                "iso639_1": "th",
                "iso639_2": "tha",
                "name": "Thai",
                "nativeName": "ไทย"
            }
        ],
        "latlng": [
            15,
            100
        ],
        "name": "Thailand",
        "nativeName": "ประเทศไทย",
        "numericCode": "764",
        "population": 69799978,
        "region": "Asia",
        "regionalBlocs": [
            {
                "acronym": "ASEAN",
                "name": "Association of Southeast Asian Nations"
            }
        ],
        "subregion": "South-Eastern Asia",
        "timezones": [
            "UTC+07:00"
        ],
        "topLevelDomain": [
            ".th"
        ],
        "translations": {
            "br": "Tailândia",
            "de": "Thailand",
            "es": "Tailandia",
            "fa": "تایلند",
            "fr": "Thaïlande",
            "hr": "Tajland",
            "it": "Tailandia",
            "ja": "タイ",
            "nl": "Thailand",
            "pt": "Tailândia",
            "ru": "Таиланд",
            "pl": "Tajlandia",
            "cs": "Thajsko",
            "zh": "泰王国",
            "hu": "Thaiföld",
            "se": "Thailand"
        },
        "cioc": "THA"
    },
    {
        "alpha2Code": "TL",
        "alpha3Code": "TLS",
        "altSpellings": [
            "TL",
            "East Timor",
            "Democratic Republic of Timor-Leste",
            "República Democrática de Timor-Leste",
            "Repúblika Demokrátika Timór-Leste"
        ],
        "area": 14874,
        "borders": [
            "IDN"
        ],
        "callingCodes": [
            "670"
        ],
        "capital": "Dili",
        "currencies": [
            {
                "code": "USD",
                "name": "United States dollar",
                "symbol": "$"
            },
            {
                "code": null,
                "name": null,
                "symbol": null
            }
        ],
        "demonym": "East Timorese",
        "flag": "https://restcountries.eu/data/tls.svg",
        "gini": 31.9,
        "languages": [
            {
                "iso639_1": "pt",
                "iso639_2": "por",
                "name": "Portuguese",
                "nativeName": "Português"
            }
        ],
        "latlng": [
            -8.83333333,
            125.91666666
        ],
        "name": "Timor-Leste",
        "nativeName": "Timor-Leste",
        "numericCode": "626",
        "population": 1318442,
        "region": "Asia",
        "regionalBlocs": [],
        "subregion": "South-Eastern Asia",
        "timezones": [
            "UTC+09:00"
        ],
        "topLevelDomain": [
            ".tl"
        ],
        "translations": {
            "br": "Timor Leste",
            "de": "Timor-Leste",
            "es": "Timor Oriental",
            "fa": "تیمور شرقی",
            "fr": "Timor oriental",
            "hr": "Istočni Timor",
            "it": "Timor Est",
            "ja": "東ティモール",
            "nl": "Oost-Timor",
            "pt": "Timor Leste",
            "ru": "Восточный Тимор",
            "pl": "Timor Wschodni",
            "cs": "Východní Timor",
            "zh": "东帝汶民主共和国",
            "hu": "Kelet-Timor",
            "se": "Östtimor a.k.a. Timor-Leste"
        },
        "cioc": "TLS"
    },
    {
        "alpha2Code": "TG",
        "alpha3Code": "TGO",
        "altSpellings": [
            "TG",
            "Togolese",
            "Togolese Republic",
            "République Togolaise"
        ],
        "area": 56785,
        "borders": [
            "BEN",
            "BFA",
            "GHA"
        ],
        "callingCodes": [
            "228"
        ],
        "capital": "Lomé",
        "currencies": [
            {
                "code": "XOF",
                "name": "West African CFA franc",
                "symbol": "Fr"
            }
        ],
        "demonym": "Togolese",
        "flag": "https://restcountries.eu/data/tgo.svg",
        "gini": 34.4,
        "languages": [
            {
                "iso639_1": "fr",
                "iso639_2": "fra",
                "name": "French",
                "nativeName": "français"
            }
        ],
        "latlng": [
            8,
            1.16666666
        ],
        "name": "Togo",
        "nativeName": "Togo",
        "numericCode": "768",
        "population": 8278737,
        "region": "Africa",
        "regionalBlocs": [
            {
                "acronym": "AU",
                "name": "African Union",
                "otherNames": [
                    "الاتحاد الأفريقي",
                    "Union africaine",
                    "União Africana",
                    "Unión Africana",
                    "Umoja wa Afrika"
                ]
            }
        ],
        "subregion": "Western Africa",
        "timezones": [
            "UTC"
        ],
        "topLevelDomain": [
            ".tg"
        ],
        "translations": {
            "br": "Togo",
            "de": "Togo",
            "es": "Togo",
            "fa": "توگو",
            "fr": "Togo",
            "hr": "Togo",
            "it": "Togo",
            "ja": "トーゴ",
            "nl": "Togo",
            "pt": "Togo",
            "ru": "Того",
            "pl": "Togo",
            "cs": "Togo",
            "zh": "多哥共和国",
            "hu": "Togo",
            "se": "Togo"
        },
        "cioc": "TOG"
    },
    {
        "alpha2Code": "TK",
        "alpha3Code": "TKL",
        "altSpellings": [
            "TK"
        ],
        "area": 12,
        "borders": [],
        "callingCodes": [
            "690"
        ],
        "capital": "Fakaofo",
        "currencies": [
            {
                "code": "NZD",
                "name": "New Zealand dollar",
                "symbol": "$"
            }
        ],
        "demonym": "Tokelauan",
        "flag": "https://restcountries.eu/data/tkl.svg",
        "languages": [
            {
                "iso639_1": "en",
                "iso639_2": "eng",
                "name": "English",
                "nativeName": "English"
            }
        ],
        "latlng": [
            -9,
            -172
        ],
        "name": "Tokelau",
        "nativeName": "Tokelau",
        "numericCode": "772",
        "population": 1411,
        "region": "Oceania",
        "regionalBlocs": [],
        "subregion": "Polynesia",
        "timezones": [
            "UTC+13:00"
        ],
        "topLevelDomain": [
            ".tk"
        ],
        "translations": {
            "br": "Tokelau",
            "de": "Tokelau",
            "es": "Islas Tokelau",
            "fa": "توکلائو",
            "fr": "Tokelau",
            "hr": "Tokelau",
            "it": "Isole Tokelau",
            "ja": "トケラウ",
            "nl": "Tokelau",
            "pt": "Toquelau",
            "pl": "Tokelau",
            "cs": "Tokelau",
            "ru": "Tokelau",
            "zh": "托克劳",
            "hu": "Tokelau-szigetek",
            "se": "Tokelauöarna"
        },
        "cioc": ""
    },
    {
        "alpha2Code": "TO",
        "alpha3Code": "TON",
        "altSpellings": [
            "TO"
        ],
        "area": 747,
        "borders": [],
        "callingCodes": [
            "676"
        ],
        "capital": "Nuku'alofa",
        "currencies": [
            {
                "code": "TOP",
                "name": "Tongan paʻanga",
                "symbol": "T$"
            }
        ],
        "demonym": "Tongan",
        "flag": "https://restcountries.eu/data/ton.svg",
        "languages": [
            {
                "iso639_1": "en",
                "iso639_2": "eng",
                "name": "English",
                "nativeName": "English"
            },
            {
                "iso639_1": "to",
                "iso639_2": "ton",
                "name": "Tonga (Tonga Islands)",
                "nativeName": "faka Tonga"
            }
        ],
        "latlng": [
            -20,
            -175
        ],
        "name": "Tonga",
        "nativeName": "Tonga",
        "numericCode": "776",
        "population": 105697,
        "region": "Oceania",
        "regionalBlocs": [],
        "subregion": "Polynesia",
        "timezones": [
            "UTC+13:00"
        ],
        "topLevelDomain": [
            ".to"
        ],
        "translations": {
            "br": "Tonga",
            "de": "Tonga",
            "es": "Tonga",
            "fa": "تونگا",
            "fr": "Tonga",
            "hr": "Tonga",
            "it": "Tonga",
            "ja": "トンガ",
            "nl": "Tonga",
            "pt": "Tonga",
            "ru": "Тонга",
            "pl": "Tonga",
            "cs": "Tonga",
            "zh": "汤加王国",
            "hu": "Tonga",
            "se": "Tonga"
        },
        "cioc": "TGA"
    },
    {
        "alpha2Code": "TT",
        "alpha3Code": "TTO",
        "altSpellings": [
            "TT",
            "Republic of Trinidad and Tobago"
        ],
        "area": 5130,
        "borders": [],
        "callingCodes": [
            "1"
        ],
        "capital": "Port of Spain",
        "currencies": [
            {
                "code": "TTD",
                "name": "Trinidad and Tobago dollar",
                "symbol": "$"
            }
        ],
        "demonym": "Trinidadian",
        "flag": "https://restcountries.eu/data/tto.svg",
        "gini": 40.3,
        "languages": [
            {
                "iso639_1": "en",
                "iso639_2": "eng",
                "name": "English",
                "nativeName": "English"
            }
        ],
        "latlng": [
            11,
            -61
        ],
        "name": "Trinidad and Tobago",
        "nativeName": "Trinidad and Tobago",
        "numericCode": "780",
        "population": 1399491,
        "region": "Americas",
        "regionalBlocs": [
            {
                "acronym": "CARICOM",
                "name": "Caribbean Community",
                "otherNames": [
                    "Comunidad del Caribe",
                    "Communauté Caribéenne",
                    "Caribische Gemeenschap"
                ]
            }
        ],
        "subregion": "Caribbean",
        "timezones": [
            "UTC-04:00"
        ],
        "topLevelDomain": [
            ".tt"
        ],
        "translations": {
            "br": "Trinidad e Tobago",
            "de": "Trinidad und Tobago",
            "es": "Trinidad y Tobago",
            "fa": "ترینیداد و توباگو",
            "fr": "Trinité et Tobago",
            "hr": "Trinidad i Tobago",
            "it": "Trinidad e Tobago",
            "ja": "トリニダード・トバゴ",
            "nl": "Trinidad en Tobago",
            "pt": "Trindade e Tobago",
            "ru": "Тринидад и Тобаго",
            "pl": "Trynidad i Tobago",
            "cs": "Trinidad a Tobago",
            "zh": "特立尼达和多巴哥共和国",
            "hu": "Trinidad és Tobago",
            "se": "Trinidad och Tobago"
        },
        "cioc": "TTO"
    },
    {
        "alpha2Code": "TN",
        "alpha3Code": "TUN",
        "altSpellings": [
            "TN",
            "Republic of Tunisia",
            "al-Jumhūriyyah at-Tūnisiyyah"
        ],
        "area": 163610,
        "borders": [
            "DZA",
            "LBY"
        ],
        "callingCodes": [
            "216"
        ],
        "capital": "Tunis",
        "currencies": [
            {
                "code": "TND",
                "name": "Tunisian dinar",
                "symbol": "د.ت"
            }
        ],
        "demonym": "Tunisian",
        "flag": "https://restcountries.eu/data/tun.svg",
        "gini": 41.4,
        "languages": [
            {
                "iso639_1": "ar",
                "iso639_2": "ara",
                "name": "Arabic",
                "nativeName": "العربية"
            }
        ],
        "latlng": [
            34,
            9
        ],
        "name": "Tunisia",
        "nativeName": "تونس",
        "numericCode": "788",
        "population": 11818618,
        "region": "Africa",
        "regionalBlocs": [
            {
                "acronym": "AU",
                "name": "African Union",
                "otherNames": [
                    "الاتحاد الأفريقي",
                    "Union africaine",
                    "União Africana",
                    "Unión Africana",
                    "Umoja wa Afrika"
                ]
            },
            {
                "acronym": "AL",
                "name": "Arab League",
                "otherNames": [
                    "جامعة الدول العربية",
                    "Jāmiʻat ad-Duwal al-ʻArabīyah",
                    "League of Arab States"
                ]
            }
        ],
        "subregion": "Northern Africa",
        "timezones": [
            "UTC+01:00"
        ],
        "topLevelDomain": [
            ".tn"
        ],
        "translations": {
            "br": "Tunísia",
            "de": "Tunesien",
            "es": "Túnez",
            "fa": "تونس",
            "fr": "Tunisie",
            "hr": "Tunis",
            "it": "Tunisia",
            "ja": "チュニジア",
            "nl": "Tunesië",
            "pt": "Tunísia",
            "ru": "Тунис",
            "pl": "Tunezja",
            "cs": "Tunisko",
            "zh": "突尼斯共和国",
            "hu": "Tunézia",
            "se": "Tunisien"
        },
        "cioc": "TUN"
    },
    {
        "alpha2Code": "TR",
        "alpha3Code": "TUR",
        "altSpellings": [
            "TR",
            "Turkiye",
            "Republic of Turkey",
            "Türkiye Cumhuriyeti"
        ],
        "area": 783562,
        "borders": [
            "ARM",
            "AZE",
            "BGR",
            "GEO",
            "GRC",
            "IRN",
            "IRQ",
            "SYR"
        ],
        "callingCodes": [
            "90"
        ],
        "capital": "Ankara",
        "currencies": [
            {
                "code": "TRY",
                "name": "Turkish lira",
                "symbol": "₺"
            }
        ],
        "demonym": "Turkish",
        "flag": "https://restcountries.eu/data/tur.svg",
        "gini": 39,
        "languages": [
            {
                "iso639_1": "tr",
                "iso639_2": "tur",
                "name": "Turkish",
                "nativeName": "Türkçe"
            }
        ],
        "latlng": [
            39,
            35
        ],
        "name": "Turkey",
        "nativeName": "Türkiye",
        "numericCode": "792",
        "population": 84339067,
        "region": "Asia",
        "regionalBlocs": [],
        "subregion": "Western Asia",
        "timezones": [
            "UTC+03:00"
        ],
        "topLevelDomain": [
            ".tr"
        ],
        "translations": {
            "br": "Turquia",
            "de": "Türkei",
            "es": "Turquía",
            "fa": "ترکیه",
            "fr": "Turquie",
            "hr": "Turska",
            "it": "Turchia",
            "ja": "トルコ",
            "nl": "Turkije",
            "pt": "Turquia",
            "ru": "Турция",
            "pl": "Turcja",
            "cs": "Turecko",
            "zh": "土耳其共和国",
            "hu": "Törökország",
            "se": "Turkiet"
        },
        "cioc": "TUR"
    },
    {
        "alpha2Code": "TM",
        "alpha3Code": "TKM",
        "altSpellings": [
            "TM"
        ],
        "area": 488100,
        "borders": [
            "AFG",
            "IRN",
            "KAZ",
            "UZB"
        ],
        "callingCodes": [
            "993"
        ],
        "capital": "Ashgabat",
        "currencies": [
            {
                "code": "TMT",
                "name": "Turkmenistan manat",
                "symbol": "m"
            }
        ],
        "demonym": "Turkmen",
        "flag": "https://restcountries.eu/data/tkm.svg",
        "gini": 40.8,
        "languages": [
            {
                "iso639_1": "tk",
                "iso639_2": "tuk",
                "name": "Turkmen",
                "nativeName": "Türkmen"
            },
            {
                "iso639_1": "ru",
                "iso639_2": "rus",
                "name": "Russian",
                "nativeName": "Русский"
            }
        ],
        "latlng": [
            40,
            60
        ],
        "name": "Turkmenistan",
        "nativeName": "Türkmenistan",
        "numericCode": "795",
        "population": 6031187,
        "region": "Asia",
        "regionalBlocs": [],
        "subregion": "Central Asia",
        "timezones": [
            "UTC+05:00"
        ],
        "topLevelDomain": [
            ".tm"
        ],
        "translations": {
            "br": "Turcomenistão",
            "de": "Turkmenistan",
            "es": "Turkmenistán",
            "fa": "ترکمنستان",
            "fr": "Turkménistan",
            "hr": "Turkmenistan",
            "it": "Turkmenistan",
            "ja": "トルクメニスタン",
            "nl": "Turkmenistan",
            "pt": "Turquemenistão",
            "ru": "Туркмения",
            "pl": "Turkmenistan",
            "cs": "Turkmenistán",
            "zh": "土库曼斯坦",
            "hu": "Türkmenisztán",
            "se": "Turkmenistan"
        },
        "cioc": "TKM"
    },
    {
        "alpha2Code": "TC",
        "alpha3Code": "TCA",
        "altSpellings": [
            "TC"
        ],
        "area": 948,
        "borders": [],
        "callingCodes": [
            "1"
        ],
        "capital": "Cockburn Town",
        "currencies": [
            {
                "code": "USD",
                "name": "United States dollar",
                "symbol": "$"
            }
        ],
        "demonym": "Turks and Caicos Islander",
        "flag": "https://restcountries.eu/data/tca.svg",
        "languages": [
            {
                "iso639_1": "en",
                "iso639_2": "eng",
                "name": "English",
                "nativeName": "English"
            }
        ],
        "latlng": [
            21.75,
            -71.58333333
        ],
        "name": "Turks and Caicos Islands",
        "nativeName": "Turks and Caicos Islands",
        "numericCode": "796",
        "population": 38718,
        "region": "Americas",
        "regionalBlocs": [],
        "subregion": "Caribbean",
        "timezones": [
            "UTC-04:00"
        ],
        "topLevelDomain": [
            ".tc"
        ],
        "translations": {
            "br": "Ilhas Turcas e Caicos",
            "de": "Turks- und Caicosinseln",
            "es": "Islas Turks y Caicos",
            "fa": "جزایر تورکس و کایکوس",
            "fr": "Îles Turques-et-Caïques",
            "hr": "Otoci Turks i Caicos",
            "it": "Isole Turks e Caicos",
            "ja": "タークス・カイコス諸島",
            "nl": "Turks- en Caicoseilanden",
            "pt": "Ilhas Turcas e Caicos",
            "pl": "Turks i Caicos",
            "cs": "Turks a Caicos",
            "ru": "Turks and Caicos Islands",
            "zh": "特克斯和凯科斯群岛",
            "hu": "Turks- és Caicos-szigetek",
            "se": "Turks- och Caicosöarna"
        },
        "cioc": ""
    },
    {
        "alpha2Code": "TV",
        "alpha3Code": "TUV",
        "altSpellings": [
            "TV"
        ],
        "area": 26,
        "borders": [],
        "callingCodes": [
            "688"
        ],
        "capital": "Funafuti",
        "currencies": [
            {
                "code": "AUD",
                "name": "Australian dollar",
                "symbol": "$"
            },
            {
                "code": "TVD[G]",
                "name": "Tuvaluan dollar",
                "symbol": "$"
            }
        ],
        "demonym": "Tuvaluan",
        "flag": "https://restcountries.eu/data/tuv.svg",
        "languages": [
            {
                "iso639_1": "en",
                "iso639_2": "eng",
                "name": "English",
                "nativeName": "English"
            }
        ],
        "latlng": [
            -8,
            178
        ],
        "name": "Tuvalu",
        "nativeName": "Tuvalu",
        "numericCode": "798",
        "population": 11792,
        "region": "Oceania",
        "regionalBlocs": [],
        "subregion": "Polynesia",
        "timezones": [
            "UTC+12:00"
        ],
        "topLevelDomain": [
            ".tv"
        ],
        "translations": {
            "br": "Tuvalu",
            "de": "Tuvalu",
            "es": "Tuvalu",
            "fa": "تووالو",
            "fr": "Tuvalu",
            "hr": "Tuvalu",
            "it": "Tuvalu",
            "ja": "ツバル",
            "nl": "Tuvalu",
            "pt": "Tuvalu",
            "ru": "Тувалу",
            "pl": "Tuvalu",
            "cs": "Tuvalu",
            "zh": "图瓦卢",
            "hu": "Tuvalu",
            "se": "Tuvalu"
        },
        "cioc": "TUV"
    },
    {
        "alpha2Code": "UG",
        "alpha3Code": "UGA",
        "altSpellings": [
            "UG",
            "Republic of Uganda",
            "Jamhuri ya Uganda"
        ],
        "area": 241550,
        "borders": [
            "COD",
            "KEN",
            "RWA",
            "SSD",
            "TZA"
        ],
        "callingCodes": [
            "256"
        ],
        "capital": "Kampala",
        "currencies": [
            {
                "code": "UGX",
                "name": "Ugandan shilling",
                "symbol": "Sh"
            }
        ],
        "demonym": "Ugandan",
        "flag": "https://restcountries.eu/data/uga.svg",
        "gini": 44.3,
        "languages": [
            {
                "iso639_1": "en",
                "iso639_2": "eng",
                "name": "English",
                "nativeName": "English"
            },
            {
                "iso639_1": "sw",
                "iso639_2": "swa",
                "name": "Swahili",
                "nativeName": "Kiswahili"
            }
        ],
        "latlng": [
            1,
            32
        ],
        "name": "Uganda",
        "nativeName": "Uganda",
        "numericCode": "800",
        "population": 45741000,
        "region": "Africa",
        "regionalBlocs": [
            {
                "acronym": "AU",
                "name": "African Union",
                "otherNames": [
                    "الاتحاد الأفريقي",
                    "Union africaine",
                    "União Africana",
                    "Unión Africana",
                    "Umoja wa Afrika"
                ]
            }
        ],
        "subregion": "Eastern Africa",
        "timezones": [
            "UTC+03:00"
        ],
        "topLevelDomain": [
            ".ug"
        ],
        "translations": {
            "br": "Uganda",
            "de": "Uganda",
            "es": "Uganda",
            "fa": "اوگاندا",
            "fr": "Uganda",
            "hr": "Uganda",
            "it": "Uganda",
            "ja": "ウガンダ",
            "nl": "Oeganda",
            "pt": "Uganda",
            "ru": "Уганда",
            "pl": "Uganda",
            "cs": "Uganda",
            "zh": "乌干达共和国",
            "hu": "Uganda",
            "se": "Uganda"
        },
        "cioc": "UGA"
    },
    {
        "alpha2Code": "UA",
        "alpha3Code": "UKR",
        "altSpellings": [
            "UA",
            "Ukrayina"
        ],
        "area": 603700,
        "borders": [
            "BLR",
            "HUN",
            "MDA",
            "POL",
            "ROU",
            "RUS",
            "SVK"
        ],
        "callingCodes": [
            "380"
        ],
        "capital": "Kyiv",
        "currencies": [
            {
                "code": "UAH",
                "name": "Ukrainian hryvnia",
                "symbol": "₴"
            }
        ],
        "demonym": "Ukrainian",
        "flag": "https://restcountries.eu/data/ukr.svg",
        "gini": 26.4,
        "languages": [
            {
                "iso639_1": "uk",
                "iso639_2": "ukr",
                "name": "Ukrainian",
                "nativeName": "Українська"
            }
        ],
        "latlng": [
            49,
            32
        ],
        "name": "Ukraine",
        "nativeName": "Україна",
        "numericCode": "804",
        "population": 44134693,
        "region": "Europe",
        "regionalBlocs": [],
        "subregion": "Eastern Europe",
        "timezones": [
            "UTC+02:00"
        ],
        "topLevelDomain": [
            ".ua"
        ],
        "translations": {
            "br": "Ucrânia",
            "de": "Ukraine",
            "es": "Ucrania",
            "fa": "وکراین",
            "fr": "Ukraine",
            "hr": "Ukrajina",
            "it": "Ucraina",
            "ja": "ウクライナ",
            "nl": "Oekraïne",
            "pt": "Ucrânia",
            "ru": "Украина",
            "pl": "Ukraina",
            "cs": "Ukrajina",
            "zh": "乌克兰",
            "hu": "Ukrajna",
            "se": "Ukraina"
        },
        "cioc": "UKR"
    },
    {
        "alpha2Code": "AE",
        "alpha3Code": "ARE",
        "altSpellings": [
            "AE",
            "UAE"
        ],
        "area": 83600,
        "borders": [
            "OMN",
            "SAU"
        ],
        "callingCodes": [
            "971"
        ],
        "capital": "Abu Dhabi",
        "currencies": [
            {
                "code": "AED",
                "name": "United Arab Emirates dirham",
                "symbol": "د.إ"
            }
        ],
        "demonym": "Emirati",
        "flag": "https://restcountries.eu/data/are.svg",
        "gini": null,
        "languages": [
            {
                "iso639_1": "ar",
                "iso639_2": "ara",
                "name": "Arabic",
                "nativeName": "العربية"
            }
        ],
        "latlng": [
            24,
            54
        ],
        "name": "United Arab Emirates",
        "nativeName": "دولة الإمارات العربية المتحدة",
        "numericCode": "784",
        "population": 9890400,
        "region": "Asia",
        "regionalBlocs": [
            {
                "acronym": "AL",
                "name": "Arab League",
                "otherNames": [
                    "جامعة الدول العربية",
                    "Jāmiʻat ad-Duwal al-ʻArabīyah",
                    "League of Arab States"
                ]
            }
        ],
        "subregion": "Western Asia",
        "timezones": [
            "UTC+04"
        ],
        "topLevelDomain": [
            ".ae"
        ],
        "translations": {
            "br": "Emirados árabes Unidos",
            "de": "Vereinigte Arabische Emirate",
            "es": "Emiratos Árabes Unidos",
            "fa": "امارات متحده عربی",
            "fr": "Émirats arabes unis",
            "hr": "Ujedinjeni Arapski Emirati",
            "it": "Emirati Arabi Uniti",
            "ja": "アラブ首長国連邦",
            "nl": "Verenigde Arabische Emiraten",
            "pt": "Emirados árabes Unidos",
            "ru": "ОАЭ",
            "pl": "Zjednoczone Emiraty Arabskie",
            "cs": "Spojené arabské emiráty",
            "zh": "阿拉伯联合酋长国",
            "hu": "Egyesült Arab Emírségek",
            "se": "Förenade Arabemiraten"
        },
        "cioc": "UAE"
    },
    {
        "alpha2Code": "GB",
        "alpha3Code": "GBR",
        "altSpellings": [
            "GB",
            "UK",
            "Great Britain"
        ],
        "area": 242900,
        "borders": [
            "IRL"
        ],
        "callingCodes": [
            "44"
        ],
        "capital": "London",
        "currencies": [
            {
                "code": "GBP",
                "name": "British pound",
                "symbol": "£"
            }
        ],
        "demonym": "British",
        "flag": "https://restcountries.eu/data/gbr.svg",
        "gini": 34,
        "languages": [
            {
                "iso639_1": "en",
                "iso639_2": "eng",
                "name": "English",
                "nativeName": "English"
            }
        ],
        "latlng": [
            54,
            -2
        ],
        "name": "United Kingdom of Great Britain and Northern Ireland",
        "nativeName": "United Kingdom",
        "numericCode": "826",
        "population": 67215293,
        "region": "Europe",
        "subregion": "Northern Europe",
        "timezones": [
            "UTC-08:00",
            "UTC-05:00",
            "UTC-04:00",
            "UTC-03:00",
            "UTC-02:00",
            "UTC",
            "UTC+01:00",
            "UTC+02:00",
            "UTC+06:00"
        ],
        "topLevelDomain": [
            ".uk"
        ],
        "translations": {
            "br": "Reino Unido",
            "de": "Vereinigtes Königreich",
            "es": "Reino Unido",
            "fa": "بریتانیای کبیر و ایرلند شمالی",
            "fr": "Royaume-Uni",
            "hr": "Ujedinjeno Kraljevstvo",
            "it": "Regno Unito",
            "ja": "イギリス",
            "nl": "Verenigd Koninkrijk",
            "pt": "Reino Unido",
            "ru": "Великобритания",
            "pl": "Wielka Brytania",
            "cs": "Spojené království",
            "zh": "大不列颠及北爱尔兰联合王国",
            "hu": "Nagy-Britannia",
            "se": "Storbritannien"
        },
        "cioc": "GBR"
    },
    {
        "alpha2Code": "US",
        "alpha3Code": "USA",
        "altSpellings": [
            "US",
            "USA",
            "United States of America"
        ],
        "area": 9629091,
        "borders": [
            "CAN",
            "MEX"
        ],
        "callingCodes": [
            "1"
        ],
        "capital": "Washington, D.C.",
        "currencies": [
            {
                "code": "USD",
                "name": "United States dollar",
                "symbol": "$"
            }
        ],
        "demonym": "American",
        "flag": "https://restcountries.eu/data/usa.svg",
        "gini": 48,
        "languages": [
            {
                "iso639_1": "en",
                "iso639_2": "eng",
                "name": "English",
                "nativeName": "English"
            }
        ],
        "latlng": [
            38,
            -97
        ],
        "name": "United States of America",
        "nativeName": "United States",
        "numericCode": "840",
        "population": 329484123,
        "region": "Americas",
        "regionalBlocs": [
            {
                "acronym": "NAFTA",
                "name": "North American Free Trade Agreement",
                "otherNames": [
                    "Tratado de Libre Comercio de América del Norte",
                    "Accord de Libre-échange Nord-Américain"
                ]
            }
        ],
        "subregion": "Northern America",
        "timezones": [
            "UTC-12:00",
            "UTC-11:00",
            "UTC-10:00",
            "UTC-09:00",
            "UTC-08:00",
            "UTC-07:00",
            "UTC-06:00",
            "UTC-05:00",
            "UTC-04:00",
            "UTC+10:00",
            "UTC+12:00"
        ],
        "topLevelDomain": [
            ".us"
        ],
        "translations": {
            "br": "Estados Unidos",
            "de": "Vereinigte Staaten von Amerika",
            "es": "Estados Unidos",
            "fa": "ایالات متحده آمریکا",
            "fr": "États-Unis",
            "hr": "Sjedinjene Američke Države",
            "it": "Stati Uniti D'America",
            "ja": "アメリカ合衆国",
            "nl": "Verenigde Staten",
            "pt": "Estados Unidos",
            "ru": "США",
            "pl": "Stany Zjednoczone",
            "cs": "Spojené státy americké",
            "zh": "美利坚合众国",
            "hu": "Amerikai Egyesült Államok",
            "se": "USA"
        },
        "cioc": "USA"
    },
    {
        "alpha2Code": "UY",
        "alpha3Code": "URY",
        "altSpellings": [
            "UY",
            "Oriental Republic of Uruguay",
            "República Oriental del Uruguay"
        ],
        "area": 181034,
        "borders": [
            "ARG",
            "BRA"
        ],
        "callingCodes": [
            "598"
        ],
        "capital": "Montevideo",
        "currencies": [
            {
                "code": "UYU",
                "name": "Uruguayan peso",
                "symbol": "$"
            }
        ],
        "demonym": "Uruguayan",
        "flag": "https://restcountries.eu/data/ury.svg",
        "gini": 39.7,
        "languages": [
            {
                "iso639_1": "es",
                "iso639_2": "spa",
                "name": "Spanish",
                "nativeName": "Español"
            }
        ],
        "latlng": [
            -33,
            -56
        ],
        "name": "Uruguay",
        "nativeName": "Uruguay",
        "numericCode": "858",
        "population": 3473727,
        "region": "Americas",
        "regionalBlocs": [
            {
                "acronym": "USAN",
                "name": "Union of South American Nations",
                "otherAcronyms": [
                    "UNASUR",
                    "UNASUL",
                    "UZAN"
                ],
                "otherNames": [
                    "Unión de Naciones Suramericanas",
                    "União de Nações Sul-Americanas",
                    "Unie van Zuid-Amerikaanse Naties",
                    "South American Union"
                ]
            }
        ],
        "subregion": "South America",
        "timezones": [
            "UTC-03:00"
        ],
        "topLevelDomain": [
            ".uy"
        ],
        "translations": {
            "br": "Uruguai",
            "de": "Uruguay",
            "es": "Uruguay",
            "fa": "اروگوئه",
            "fr": "Uruguay",
            "hr": "Urugvaj",
            "it": "Uruguay",
            "ja": "ウルグアイ",
            "nl": "Uruguay",
            "pt": "Uruguai",
            "ru": "Уругвай",
            "pl": "Urugwaj",
            "cs": "Uruguay",
            "zh": "乌拉圭东岸共和国",
            "hu": "Uruguay",
            "se": "Uruguay"
        },
        "cioc": "URU"
    },
    {
        "alpha2Code": "UZ",
        "alpha3Code": "UZB",
        "altSpellings": [
            "UZ",
            "Republic of Uzbekistan",
            "O‘zbekiston Respublikasi",
            "Ўзбекистон Республикаси"
        ],
        "area": 447400,
        "borders": [
            "AFG",
            "KAZ",
            "KGZ",
            "TJK",
            "TKM"
        ],
        "callingCodes": [
            "998"
        ],
        "capital": "Tashkent",
        "currencies": [
            {
                "code": "UZS",
                "name": "Uzbekistani so'm",
                "symbol": "so'm"
            }
        ],
        "demonym": "Uzbekistani",
        "flag": "https://restcountries.eu/data/uzb.svg",
        "gini": 36.7,
        "languages": [
            {
                "iso639_1": "uz",
                "iso639_2": "uzb",
                "name": "Uzbek",
                "nativeName": "Oʻzbek"
            },
            {
                "iso639_1": "ru",
                "iso639_2": "rus",
                "name": "Russian",
                "nativeName": "Русский"
            }
        ],
        "latlng": [
            41,
            64
        ],
        "name": "Uzbekistan",
        "nativeName": "O‘zbekiston",
        "numericCode": "860",
        "population": 34232050,
        "region": "Asia",
        "regionalBlocs": [],
        "subregion": "Central Asia",
        "timezones": [
            "UTC+05:00"
        ],
        "topLevelDomain": [
            ".uz"
        ],
        "translations": {
            "br": "Uzbequistão",
            "de": "Usbekistan",
            "es": "Uzbekistán",
            "fa": "ازبکستان",
            "fr": "Ouzbékistan",
            "hr": "Uzbekistan",
            "it": "Uzbekistan",
            "ja": "ウズベキスタン",
            "nl": "Oezbekistan",
            "pt": "Usbequistão",
            "ru": "Узбекистан",
            "pl": "Uzbekistan",
            "cs": "Uzbekistán",
            "zh": "乌兹别克斯坦共和国",
            "hu": "Üzbegisztán",
            "se": "Uzbekistan"
        },
        "cioc": "UZB"
    },
    {
        "alpha2Code": "VU",
        "alpha3Code": "VUT",
        "altSpellings": [
            "VU",
            "Republic of Vanuatu",
            "Ripablik blong Vanuatu",
            "République de Vanuatu"
        ],
        "area": 12189,
        "borders": [],
        "callingCodes": [
            "678"
        ],
        "capital": "Port Vila",
        "currencies": [
            {
                "code": "VUV",
                "name": "Vanuatu vatu",
                "symbol": "Vt"
            }
        ],
        "demonym": "Ni-Vanuatu",
        "flag": "https://restcountries.eu/data/vut.svg",
        "languages": [
            {
                "iso639_1": "bi",
                "iso639_2": "bis",
                "name": "Bislama",
                "nativeName": "Bislama"
            },
            {
                "iso639_1": "en",
                "iso639_2": "eng",
                "name": "English",
                "nativeName": "English"
            },
            {
                "iso639_1": "fr",
                "iso639_2": "fra",
                "name": "French",
                "nativeName": "français"
            }
        ],
        "latlng": [
            -16,
            167
        ],
        "name": "Vanuatu",
        "nativeName": "Vanuatu",
        "numericCode": "548",
        "population": 307150,
        "region": "Oceania",
        "regionalBlocs": [],
        "subregion": "Melanesia",
        "timezones": [
            "UTC+11:00"
        ],
        "topLevelDomain": [
            ".vu"
        ],
        "translations": {
            "br": "Vanuatu",
            "de": "Vanuatu",
            "es": "Vanuatu",
            "fa": "وانواتو",
            "fr": "Vanuatu",
            "hr": "Vanuatu",
            "it": "Vanuatu",
            "ja": "バヌアツ",
            "nl": "Vanuatu",
            "pt": "Vanuatu",
            "ru": "Вануату",
            "pl": "Vanuatu",
            "cs": "Vanuatu",
            "zh": "瓦努阿图共和国",
            "hu": "Vanuatu",
            "se": "Vanuatu"
        },
        "cioc": "VAN"
    },
    {
        "alpha2Code": "VE",
        "alpha3Code": "VEN",
        "altSpellings": [
            "VE",
            "Bolivarian Republic of Venezuela",
            "República Bolivariana de Venezuela"
        ],
        "area": 916445,
        "borders": [
            "BRA",
            "COL",
            "GUY"
        ],
        "callingCodes": [
            "58"
        ],
        "capital": "Caracas",
        "currencies": [
            {
                "code": "VEF",
                "name": "Venezuelan bolívar",
                "symbol": "Bs.S"
            }
        ],
        "demonym": "Venezuelan",
        "flag": "https://restcountries.eu/data/ven.svg",
        "gini": 44.8,
        "languages": [
            {
                "iso639_1": "es",
                "iso639_2": "spa",
                "name": "Spanish",
                "nativeName": "Español"
            }
        ],
        "latlng": [
            8,
            -66
        ],
        "name": "Venezuela (Bolivarian Republic of)",
        "nativeName": "Venezuela",
        "numericCode": "862",
        "population": 28435943,
        "region": "Americas",
        "regionalBlocs": [
            {
                "acronym": "USAN",
                "name": "Union of South American Nations",
                "otherAcronyms": [
                    "UNASUR",
                    "UNASUL",
                    "UZAN"
                ],
                "otherNames": [
                    "Unión de Naciones Suramericanas",
                    "União de Nações Sul-Americanas",
                    "Unie van Zuid-Amerikaanse Naties",
                    "South American Union"
                ]
            }
        ],
        "subregion": "South America",
        "timezones": [
            "UTC-04:00"
        ],
        "topLevelDomain": [
            ".ve"
        ],
        "translations": {
            "br": "Venezuela",
            "de": "Venezuela",
            "es": "Venezuela",
            "fa": "ونزوئلا",
            "fr": "Venezuela",
            "hr": "Venezuela",
            "it": "Venezuela",
            "ja": "ベネズエラ・ボリバル共和国",
            "nl": "Venezuela",
            "pt": "Venezuela",
            "ru": "Венесуэла",
            "pl": "Wenezuela",
            "cs": "Venezuela",
            "zh": "委内瑞拉玻利瓦尔共和国",
            "hu": "Venezuela",
            "se": "Venezuela"
        },
        "cioc": "VEN"
    },
    {
        "alpha2Code": "VN",
        "alpha3Code": "VNM",
        "altSpellings": [
            "VN",
            "Socialist Republic of Vietnam",
            "Cộng hòa Xã hội chủ nghĩa Việt Nam"
        ],
        "area": 331212,
        "borders": [
            "KHM",
            "CHN",
            "LAO"
        ],
        "callingCodes": [
            "84"
        ],
        "capital": "Hanoi",
        "currencies": [
            {
                "code": "VND",
                "name": "Vietnamese đồng",
                "symbol": "₫"
            }
        ],
        "demonym": "Vietnamese",
        "flag": "https://restcountries.eu/data/vnm.svg",
        "gini": 35.6,
        "languages": [
            {
                "iso639_1": "vi",
                "iso639_2": "vie",
                "name": "Vietnamese",
                "nativeName": "Tiếng Việt"
            }
        ],
        "latlng": [
            16.16666666,
            107.83333333
        ],
        "name": "Vietnam",
        "nativeName": "Việt Nam",
        "numericCode": "704",
        "population": 97338583,
        "region": "Asia",
        "regionalBlocs": [
            {
                "acronym": "ASEAN",
                "name": "Association of Southeast Asian Nations"
            }
        ],
        "subregion": "South-Eastern Asia",
        "timezones": [
            "UTC+07:00"
        ],
        "topLevelDomain": [
            ".vn"
        ],
        "translations": {
            "br": "Vietnã",
            "de": "Vietnam",
            "es": "Vietnam",
            "fa": "ویتنام",
            "fr": "Viêt Nam",
            "hr": "Vijetnam",
            "it": "Vietnam",
            "ja": "ベトナム",
            "nl": "Vietnam",
            "pt": "Vietname",
            "ru": "Вьетнам",
            "pl": "Wietnam",
            "cs": "Vietnam",
            "zh": "越南社会主义共和国",
            "hu": "Vietnám",
            "se": "Vietnam"
        },
        "cioc": "VIE"
    },
    {
        "alpha2Code": "WF",
        "alpha3Code": "WLF",
        "altSpellings": [
            "WF",
            "Territory of the Wallis and Futuna Islands",
            "Territoire des îles Wallis et Futuna"
        ],
        "area": 142,
        "borders": [],
        "callingCodes": [
            "681"
        ],
        "capital": "Mata-Utu",
        "currencies": [
            {
                "code": "XPF",
                "name": "CFP franc",
                "symbol": "Fr"
            }
        ],
        "demonym": "Wallis and Futuna Islander",
        "flag": "https://restcountries.eu/data/wlf.svg",
        "languages": [
            {
                "iso639_1": "fr",
                "iso639_2": "fra",
                "name": "French",
                "nativeName": "français"
            }
        ],
        "latlng": [
            -13.3,
            -176.2
        ],
        "name": "Wallis and Futuna",
        "nativeName": "Wallis et Futuna",
        "numericCode": "876",
        "population": 11750,
        "region": "Oceania",
        "regionalBlocs": [],
        "subregion": "Polynesia",
        "timezones": [
            "UTC+12:00"
        ],
        "topLevelDomain": [
            ".wf"
        ],
        "translations": {
            "br": "Wallis e Futuna",
            "de": "Wallis und Futuna",
            "es": "Wallis y Futuna",
            "fa": "والیس و فوتونا",
            "fr": "Wallis-et-Futuna",
            "hr": "Wallis i Fortuna",
            "it": "Wallis e Futuna",
            "ja": "ウォリス・フツナ",
            "nl": "Wallis en Futuna",
            "pt": "Wallis e Futuna",
            "pl": "Wallis i Futuna",
            "cs": "Wallis a Futuna",
            "ru": "Wallis and Futuna",
            "zh": "瓦利斯和富图纳群岛",
            "hu": "Wallis és Futuna",
            "se": "Wallis- och Futunaöarna"
        },
        "cioc": ""
    },
    {
        "alpha2Code": "EH",
        "alpha3Code": "ESH",
        "altSpellings": [
            "EH",
            "Taneẓroft Tutrimt"
        ],
        "area": 266000,
        "borders": [
            "DZA",
            "MRT",
            "MAR"
        ],
        "callingCodes": [
            "212"
        ],
        "capital": "El Aaiún",
        "currencies": [
            {
                "code": "MAD",
                "name": "Moroccan dirham",
                "symbol": "د.م."
            },
            {
                "code": "DZD",
                "name": "Algerian dinar",
                "symbol": "د.ج"
            }
        ],
        "demonym": "Sahrawi",
        "flag": "https://restcountries.eu/data/esh.svg",
        "languages": [
            {
                "iso639_1": "es",
                "iso639_2": "spa",
                "name": "Spanish",
                "nativeName": "Español"
            }
        ],
        "latlng": [
            24.5,
            -13
        ],
        "name": "Western Sahara",
        "nativeName": "الصحراء الغربية",
        "numericCode": "732",
        "population": 510713,
        "region": "Africa",
        "regionalBlocs": [
            {
                "acronym": "AU",
                "name": "African Union",
                "otherNames": [
                    "الاتحاد الأفريقي",
                    "Union africaine",
                    "União Africana",
                    "Unión Africana",
                    "Umoja wa Afrika"
                ]
            }
        ],
        "subregion": "Northern Africa",
        "timezones": [
            "UTC+00:00"
        ],
        "topLevelDomain": [
            ".eh"
        ],
        "translations": {
            "br": "Saara Ocidental",
            "de": "Westsahara",
            "es": "Sahara Occidental",
            "fa": "جمهوری دموکراتیک عربی صحرا",
            "fr": "Sahara Occidental",
            "hr": "Zapadna Sahara",
            "it": "Sahara Occidentale",
            "ja": "西サハラ",
            "nl": "Westelijke Sahara",
            "pt": "Saara Ocidental",
            "pl": "Sahara Zachodnia",
            "cs": "Západní Sahara",
            "ru": "Western Sahara",
            "zh": "阿拉伯撒哈拉民主共和国",
            "hu": "Nyugat-Szahara",
            "se": "Västsahara"
        },
        "cioc": ""
    },
    {
        "alpha2Code": "YE",
        "alpha3Code": "YEM",
        "altSpellings": [
            "YE",
            "Yemeni Republic",
            "al-Jumhūriyyah al-Yamaniyyah"
        ],
        "area": 527968,
        "borders": [
            "OMN",
            "SAU"
        ],
        "callingCodes": [
            "967"
        ],
        "capital": "Sana'a",
        "currencies": [
            {
                "code": "YER",
                "name": "Yemeni rial",
                "symbol": "﷼"
            }
        ],
        "demonym": "Yemeni",
        "flag": "https://restcountries.eu/data/yem.svg",
        "gini": 37.7,
        "languages": [
            {
                "iso639_1": "ar",
                "iso639_2": "ara",
                "name": "Arabic",
                "nativeName": "العربية"
            }
        ],
        "latlng": [
            15,
            48
        ],
        "name": "Yemen",
        "nativeName": "اليَمَن",
        "numericCode": "887",
        "population": 29825968,
        "region": "Asia",
        "regionalBlocs": [
            {
                "acronym": "AL",
                "name": "Arab League",
                "otherNames": [
                    "جامعة الدول العربية",
                    "Jāmiʻat ad-Duwal al-ʻArabīyah",
                    "League of Arab States"
                ]
            }
        ],
        "subregion": "Western Asia",
        "timezones": [
            "UTC+03:00"
        ],
        "topLevelDomain": [
            ".ye"
        ],
        "translations": {
            "br": "Iêmen",
            "de": "Jemen",
            "es": "Yemen",
            "fa": "یمن",
            "fr": "Yémen",
            "hr": "Jemen",
            "it": "Yemen",
            "ja": "イエメン",
            "nl": "Jemen",
            "pt": "Iémen",
            "ru": "Йемен",
            "pl": "Jemen",
            "cs": "Jemen",
            "zh": "也门共和国",
            "hu": "Jemen",
            "se": "Jemen"
        },
        "cioc": "YEM"
    },
    {
        "alpha2Code": "ZM",
        "alpha3Code": "ZMB",
        "altSpellings": [
            "ZM",
            "Republic of Zambia"
        ],
        "area": 752612,
        "borders": [
            "AGO",
            "BWA",
            "COD",
            "MWI",
            "MOZ",
            "NAM",
            "TZA",
            "ZWE"
        ],
        "callingCodes": [
            "260"
        ],
        "capital": "Lusaka",
        "currencies": [
            {
                "code": "ZMW",
                "name": "Zambian kwacha",
                "symbol": "ZK"
            }
        ],
        "demonym": "Zambian",
        "flag": "https://restcountries.eu/data/zmb.svg",
        "gini": 54.6,
        "languages": [
            {
                "iso639_1": "en",
                "iso639_2": "eng",
                "name": "English",
                "nativeName": "English"
            }
        ],
        "latlng": [
            -15,
            30
        ],
        "name": "Zambia",
        "nativeName": "Zambia",
        "numericCode": "894",
        "population": 18383956,
        "region": "Africa",
        "regionalBlocs": [
            {
                "acronym": "AU",
                "name": "African Union",
                "otherNames": [
                    "الاتحاد الأفريقي",
                    "Union africaine",
                    "União Africana",
                    "Unión Africana",
                    "Umoja wa Afrika"
                ]
            }
        ],
        "subregion": "Eastern Africa",
        "timezones": [
            "UTC+02:00"
        ],
        "topLevelDomain": [
            ".zm"
        ],
        "translations": {
            "br": "Zâmbia",
            "de": "Sambia",
            "es": "Zambia",
            "fa": "زامبیا",
            "fr": "Zambie",
            "hr": "Zambija",
            "it": "Zambia",
            "ja": "ザンビア",
            "nl": "Zambia",
            "pt": "Zâmbia",
            "ru": "Замбия",
            "pl": "Zambia",
            "cs": "Zambie",
            "zh": "赞比亚共和国",
            "hu": "Zambia",
            "se": "Zambia"
        },
        "cioc": "ZAM"
    },
    {
        "alpha2Code": "ZW",
        "alpha3Code": "ZWE",
        "altSpellings": [
            "ZW",
            "Republic of Zimbabwe"
        ],
        "area": 390757,
        "borders": [
            "BWA",
            "MOZ",
            "ZAF",
            "ZMB"
        ],
        "callingCodes": [
            "263"
        ],
        "capital": "Harare",
        "currencies": [
            {
                "code": "BWP",
                "name": "Botswana pula",
                "symbol": "P"
            },
            {
                "code": "GBP",
                "name": "British pound",
                "symbol": "£"
            },
            {
                "code": "CNY",
                "name": "Chinese yuan",
                "symbol": "¥"
            },
            {
                "code": "EUR",
                "name": "Euro",
                "symbol": "€"
            },
            {
                "code": "INR",
                "name": "Indian rupee",
                "symbol": "₹"
            },
            {
                "code": "JPY",
                "name": "Japanese yen",
                "symbol": "¥"
            },
            {
                "code": "ZAR",
                "name": "South African rand",
                "symbol": "Rs"
            },
            {
                "code": "USD",
                "name": "United States dollar",
                "symbol": "$"
            }
        ],
        "demonym": "Zimbabwean",
        "flag": "https://restcountries.eu/data/zwe.svg",
        "gini": null,
        "languages": [
            {
                "iso639_1": "en",
                "iso639_2": "eng",
                "name": "English",
                "nativeName": "English"
            },
            {
                "iso639_1": "sn",
                "iso639_2": "sna",
                "name": "Shona",
                "nativeName": "chiShona"
            },
            {
                "iso639_1": "nd",
                "iso639_2": "nde",
                "name": "Northern Ndebele",
                "nativeName": "isiNdebele"
            }
        ],
        "latlng": [
            -20,
            30
        ],
        "name": "Zimbabwe",
        "nativeName": "Zimbabwe",
        "numericCode": "716",
        "population": 14862927,
        "region": "Africa",
        "regionalBlocs": [
            {
                "acronym": "AU",
                "name": "African Union",
                "otherNames": [
                    "الاتحاد الأفريقي",
                    "Union africaine",
                    "União Africana",
                    "Unión Africana",
                    "Umoja wa Afrika"
                ]
            }
        ],
        "subregion": "Eastern Africa",
        "timezones": [
            "UTC+02:00"
        ],
        "topLevelDomain": [
            ".zw"
        ],
        "translations": {
            "br": "Zimbabwe",
            "de": "Simbabwe",
            "es": "Zimbabue",
            "fa": "زیمباوه",
            "fr": "Zimbabwe",
            "hr": "Zimbabve",
            "it": "Zimbabwe",
            "ja": "ジンバブエ",
            "nl": "Zimbabwe",
            "pt": "Zimbabué",
            "ru": "Зимбабве",
            "pl": "Zimbabwe",
            "cs": "Zimbabwe",
            "zh": "津巴布韦共和国",
            "hu": "Zimbabwe",
            "se": "Zimbabwe"
        },
        "cioc": "ZIM"
    }
];

const factor = data.length;

//high means hints with a high risk, and similar.
let high = 0, low = 0, medium = 0;

/**
 * Gets a user-friendly hint based on the provided key.
 * 
 * @param {string} hint - The key to retrieve a hint for.
 * @returns {string} The user-friendly hint.
 */
const getPrettyHint = (hint) => {   
    switch(hint) {
        case 'iso_codetwo': json_codes[hint] = 'alpha2Code'; return 'ISO 3166-1 alpha-2 code';
        case 'iso_codethree': json_codes[hint] = 'alpha3Code'; return 'ISO 3166-1 alpha-3 code';
        case 'timezone': json_codes[hint] = 'timezones'; return 'Timezone';
        case 'borders': json_codes[hint] = 'borders'; return 'Border Nations (2 codes)';
        case 'area': json_codes[hint] = 'area'; return 'Geographical Area';
        case 'capital': json_codes[hint] = 'capital'; return 'Capital City';
        case 'cioc': json_codes[hint] = 'cioc'; return 'International Olympic Committee Code';
        case 'numcode': json_codes[hint] = 'numericCode'; return 'Numeric Code';
        case 'region': json_codes[hint] = 'region'; return 'Region';
        default: return '';
    }
};

/**
 * Sets JSON codes based on selected hints and categorizes them into risk levels.
 */
const setJsonCodes = () => {
    hints.forEach(hint => {
        switch(hint) {
            case 'iso_codetwo': json_codes[hint] = 'alpha2Code'; low += 1; break;
            case 'iso_codethree': json_codes[hint] = 'alpha3Code'; low += 1; break;
            case 'timezone': json_codes[hint] = 'timezones'; low += 1; break;
            case 'borders': json_codes[hint] = 'borders'; medium += 1; break;
            case 'area': json_codes[hint] = 'area'; medium += 1; break;
            case 'capital': json_codes[hint] = 'capital'; medium += 1; break;
            case 'cioc': high +=1; json_codes[hint] = 'cioc'; high += 1; break;
            case 'numcode': json_codes[hint] = 'numericCode'; high += 1; break;
            case 'region': json_codes[hint] = 'region'; high += 1; break;
            default: console.log("[LOG] Unrecognised hint.")
        }
    });
};

/**
 * Gets the selected checkboxes and validates the count.
 * 
 * @returns {Array} An array of selected checkbox values or an empty array if invalid.
 */
const getSelectedCheckboxes = () => {
    const selectedValues = [];
    const checkboxes = document.querySelectorAll('input[type="checkbox"]:checked');
    checkboxes.forEach(checkbox => {
        selectedValues.push(checkbox.value);
    });

    const errorMessageElement = document.getElementById('error-message');
    if (selectedValues.length != 5) {
        errorMessageElement.textContent = "You HAVE to select 5 hints.";
        errorMessageElement.style.display = "block"; 
        return []; 
    } else {
        errorMessageElement.style.display = "none"; 
    }

    return selectedValues; 
};

/**
 * Ends the game, displaying the score and history.
 */
const endGame = () => {
    const hintsContainer = document.querySelector('.col-md-6:nth-child(2)'); 
    hintsContainer.innerHTML = ''; 

    const endGameCard = document.createElement('div');
    endGameCard.className = "card mt-4";
    endGameCard.style.border = "2px solid black"; 

    endGameCard.innerHTML = `
        <div class="card-body text-center">
            <h5 class="card-title">Game Over!</h5>
            <p class="card-text">Your Score: ${score.toFixed(2)}</p>
            <p class="card-text">History: ${history.map(item => item ? '<span class="w">W</span> ' : '<span class="l">L</span> ').join(' ')}</p>
            <div class="button-container mt-3">
            </div>
        </div>
    `;
    hintsContainer.appendChild(endGameCard);

    const playAgainButton = document.createElement('button');
    playAgainButton.className = "btn btn-custom mt-3 mr-3";
    playAgainButton.textContent = "Play Again";
    playAgainButton.onclick = () => {
        window.location.href = 'game.html';
    };
    
    const homeButton = document.createElement('button');
    homeButton.className = "btn btn-custom mt-3 ml-3";
    homeButton.textContent = "Home";
    homeButton.onclick = () => {
        window.location.href = 'index.html';
    };

    const buttonContainer = endGameCard.querySelector('.button-container');
    buttonContainer.appendChild(playAgainButton);
    buttonContainer.appendChild(homeButton);
    gameOverAudio.play();
};

/**
 * Displays a floating message indicating whether the guess was correct.
 * 
 * @param {boolean} isCorrect - Indicates if the guess was correct.
 */
function showFloatingMessage(isCorrect) {
    const floatingMessage = document.createElement("div");
    floatingMessage.textContent = isCorrect ? "Correct." : "Incorrect.";
    floatingMessage.style.position = "fixed";
    floatingMessage.style.bottom = "50px"; 
    floatingMessage.style.left = "50%";
    floatingMessage.style.transform = "translateX(-50%)";
    floatingMessage.style.padding = "10px 20px";
    floatingMessage.style.borderRadius = "5px";
    floatingMessage.style.color = "white";
    floatingMessage.style.backgroundColor = isCorrect ? "green" : "red";
    floatingMessage.style.fontSize = "18px";
    floatingMessage.style.opacity = "1"; 

    document.body.appendChild(floatingMessage);

    setTimeout(() => {
        floatingMessage.style.transition = "all 1s ease";
        floatingMessage.style.opacity = "0"; 
        floatingMessage.style.bottom = "200px"; 
    }, 100); 

    setTimeout(() => {
        floatingMessage.remove();
    }, 1100); 
};

/**
 * Starts the game round with the selected hints.
 * 
 * @param {Array} selectedHints - The hints selected by the user.
 */
const startGameRound = (selectedHints) => {
    if(round > 5 || incorrect >= 3) {
        endGame();
        return;
    }

    let seed = Math.random();
    seed = seed * 10000;
    seed = Math.floor(seed % factor);

    const country = data[seed];
    const hintsContainer = document.querySelector('.col-md-6:nth-child(2)'); 
    hintsContainer.innerHTML = ''; 

    console.log("[LOG] Seed chosen : " + seed);

    const roundCard = document.createElement('div');
    roundCard.className = "card mt-4";
    roundCard.style.border = "2px solid black"; 

    roundCard.innerHTML = `
        <div class="card-body text-center">
        <h5 class="card-title">Round ${round} / 5</h5>
        <p class="card-text">Score: ${score.toFixed(2)}</p>
        <p class="card-text">Lives Remaining: ${lives}</p>
        <p class="card-text">History: ${history.map(item => item ? '<span class = "w">W</span> ' : '<span class="l">L</span> ').join(' ')}</p>
    </div>
    `;
    
    hintsContainer.appendChild(roundCard);

    const hintsList = document.createElement('ul');
    hintsList.className = "list-group mt-3";
    selectedHints.forEach(hint => {
        const listItem = document.createElement('li');
        listItem.className = "list-group-item";
        listItem.style.border = "2px solid black"; 
        listItem.style.color = "black"; 
        let item = country[json_codes[hint]];
        if(hint === 'borders') {
            let len = 0;
            try {
                len = item.length;
                if(len === 0) item = 'No border nations.';
            } catch(e) {
                item = 'No border nations.';
            }
        }
        if(hint === 'capital') {
            try {
                if(typeof item !== "string") {
                    item = 'No capital city.';
                }
            } catch(e) {
                item = 'No capital city.';
            }
        }
        if(hint === 'cioc') {
            try {
                if(typeof item !== "string") {
                    item = 'No capital city.';
                }
            } catch(e) {
                item = 'No capital city.';
            }
        }
        listItem.textContent = getPrettyHint(hint) + " : "  + item;
        hintsList.appendChild(listItem);
    });
    hintsContainer.appendChild(hintsList);

    const feedbackMessage = document.createElement('p');
    feedbackMessage.className = "mt-3"; 
    hintsContainer.appendChild(feedbackMessage);

    const guessInput = document.createElement('input');
    guessInput.type = "text";
    guessInput.className = "form-control mt-3";
    guessInput.placeholder = "Type your guess for the country";
    guessInput.pattern = "[A-Za-z ]+";
    guessInput.required = true;
    hintsContainer.appendChild(guessInput);

    const submitGuessButton = document.createElement('button');
    submitGuessButton.className = "btn btn-custom mt-3";
    submitGuessButton.textContent = "Submit Guess";
    submitGuessButton.id = "submit-guess-button"; 
    hintsContainer.appendChild(submitGuessButton);

    submitGuessButton.onclick = () => {
        const userGuess = guessInput.value.trim().toLowerCase(); 
        console.log("[LOG] The user guessed : " + userGuess);
        if(userGuess === '') {
            return;
        }
        let correct = country["name"].toLowerCase().indexOf(userGuess) != -1 || country["nativeName"].toLowerCase().indexOf(userGuess) != -1;
        if (correct) {
            score += low * 0.4 + medium * 0.5 + high * 0.9;
            feedbackMessage.textContent = "Correct!";
            history.push(true);
            showFloatingMessage(true);
            correctAudio.play();
        } else {
            feedbackMessage.textContent = "Incorrect!";
            score -= low * 0.2 + medium * 0.3 + high * 0.6;
            history.push(false);
            incorrect += 1;
            showFloatingMessage(false);
            if (lives > 0) {
                lives -= 1; 
            }
            wrongAudio.play();
        }
        round += 1; 
        guessInput.value = ''; 
        startGameRound(selectedHints);
    };
};


document.getElementById('submit-choices-button').onclick = () => {
const selectedHints = getSelectedCheckboxes();
hints = selectedHints;
setJsonCodes();
if(selectedHints.length > 0) {
    setJsonCodes();
    startGameRound(selectedHints);
} else {
    console.log("No hints selected.");
}
}