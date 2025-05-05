// data.js

const recitersData = {
    "s_gmd": { // معرف القارئ (يستخدم في رابط API وفي الـ URL)
        name: "سعد الغامدي",
        riwaya: "حفص عن عاصم",
        image: "https://i.scdn.co/image/ab6761610000e5ebfc20c0a2960b06b4a21d958b", // أو مسار محلي
        audioBaseUrl: "https://server7.mp3quran.net/s_gmd/"
    },
    "maher": {
        name: "ماهر المعيقلي",
        riwaya: "حفص عن عاصم",
        image: "https://i1.sndcdn.com/artworks-000107134421-e5068a-t500x500.jpg", // Updated link
        audioBaseUrl: "https://server12.mp3quran.net/maher/"
    },
    "abdulbasit_murattal": {
         name: "عبد الباسط عبد الصمد",
         riwaya: "حفص عن عاصم (مرتل)",
         image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/Abdul-Basit_Abdus-Samad.jpg/220px-Abdul-Basit_Abdus-Samad.jpg",
         audioBaseUrl: "https://server7.mp3quran.net/basit/"
     },
     "minsh_mjwd": {
          name: "محمد صديق المنشاوي",
          riwaya: "حفص عن عاصم (مجود)",
          image: "https://media.unitedmuslimworld.com/img/24/06/20/22294.jpg",
          audioBaseUrl: "https://server10.mp3quran.net/minsh/Almusshaf-Al-Mojawwad"
      },
     "ajm": {
          name: "أحمد بن علي العجمي",
          riwaya: "حفص عن عاصم",
          image: "https://islamweb.net/audio/library/reciters/31.jpg",
          audioBaseUrl: "https://server10.mp3quran.net/ajm/"
     },
      "afs": {
          name: "مشاري راشد العفاسي",
          riwaya: "حفص عن عاصم",
          image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/MishariAlAfasiOfficialPicture.jpg/220px-MishariAlAfasiOfficialPicture.jpg",
          audioBaseUrl: "https://server8.mp3quran.net/afs/"
      }
    // أضف المزيد من القراء هنا بنفس الهيكل
};

const chapterData = [
    { "index": 1, "name": "الفاتحة" }, { "index": 2, "name": "البقرة" },
    { "index": 3, "name": "آل عمران" }, { "index": 4, "name": "النساء" },
    { "index": 5, "name": "المائدة" }, { "index": 6, "name": "الأنعام" },
    { "index": 7, "name": "الأعراف" }, { "index": 8, "name": "الأنفال" },
    { "index": 9, "name": "التوبة" }, { "index": 10, "name": "يونس" },
    { "index": 11, "name": "هود" }, { "index": 12, "name": "يوسف" },
    { "index": 13, "name": "الرعد" }, { "index": 14, "name": "إبراهيم" },
    { "index": 15, "name": "الحجر" }, { "index": 16, "name": "النحل" },
    { "index": 17, "name": "الإسراء" }, { "index": 18, "name": "الكهف" },
    { "index": 19, "name": "مريم" }, { "index": 20, "name": "طه" },
    { "index": 21, "name": "الأنبياء" }, { "index": 22, "name": "الحج" },
    { "index": 23, "name": "المؤمنون" }, { "index": 24, "name": "النور" },
    { "index": 25, "name": "الفرقان" }, { "index": 26, "name": "الشعراء" },
    { "index": 27, "name": "النمل" }, { "index": 28, "name": "القصص" },
    { "index": 29, "name": "العنكبوت" }, { "index": 30, "name": "الرّوم" },
    { "index": 31, "name": "لقمان" }, { "index": 32, "name": "السجدة" },
    { "index": 33, "name": "الأحزاب" }, { "index": 34, "name": "سبأ" },
    { "index": 35, "name": "فاطر" }, { "index": 36, "name": "يس" },
    { "index": 37, "name": "الصافات" }, { "index": 38, "name": "ص" },
    { "index": 39, "name": "الزمر" }, { "index": 40, "name": "غافر" },
    { "index": 41, "name": "فصلت" }, { "index": 42, "name": "الشورى" },
    { "index": 43, "name": "الزخرف" }, { "index": 44, "name": "الدخان" },
    { "index": 45, "name": "الجاثية" }, { "index": 46, "name": "الأحقاف" },
    { "index": 47, "name": "محمد" }, { "index": 48, "name": "الفتح" },
    { "index": 49, "name": "الحجرات" }, { "index": 50, "name": "ق" },
    { "index": 51, "name": "الذاريات" }, { "index": 52, "name": "الطور" },
    { "index": 53, "name": "النجم" }, { "index": 54, "name": "القمر" },
    { "index": 55, "name": "الرحمن" }, { "index": 56, "name": "الواقعة" },
    { "index": 57, "name": "الحديد" }, { "index": 58, "name": "المجادلة" },
    { "index": 59, "name": "الحشر" }, { "index": 60, "name": "الممتحنة" },
    { "index": 61, "name": "الصف" }, { "index": 62, "name": "الجمعة" },
    { "index": 63, "name": "المنافقون" }, { "index": 64, "name": "التغابن" },
    { "index": 65, "name": "الطلاق" }, { "index": 66, "name": "التحريم" },
    { "index": 67, "name": "الملك" }, { "index": 68, "name": "القلم" },
    { "index": 69, "name": "الحاقة" }, { "index": 70, "name": "المعارج" },
    { "index": 71, "name": "نوح" }, { "index": 72, "name": "الجن" },
    { "index": 73, "name": "المزمل" }, { "index": 74, "name": "المدثر" },
    { "index": 75, "name": "القيامة" }, { "index": 76, "name": "الإنسان" },
    { "index": 77, "name": "المرسلات" }, { "index": 78, "name": "النبأ" },
    { "index": 79, "name": "النازعات" }, { "index": 80, "name": "عبس" },
    { "index": 81, "name": "التكوير" }, { "index": 82, "name": "الإنفطار" },
    { "index": 83, "name": "المطففين" }, { "index": 84, "name": "الإنشقاق" },
    { "index": 85, "name": "البروج" }, { "index": 86, "name": "الطارق" },
    { "index": 87, "name": "الأعلى" }, { "index": 88, "name": "الغاشية" },
    { "index": 89, "name": "الفجر" }, { "index": 90, "name": "البلد" },
    { "index": 91, "name": "الشمس" }, { "index": 92, "name": "الليل" },
    { "index": 93, "name": "الضحى" }, { "index": 94, "name": "الشرح" },
    { "index": 95, "name": "التين" }, { "index": 96, "name": "العلق" },
    { "index": 97, "name": "القدر" }, { "index": 98, "name": "البينة" },
    { "index": 99, "name": "الزلزلة" }, { "index": 100, "name": "العاديات" },
    { "index": 101, "name": "القارعة" }, { "index": 102, "name": "التكاثر" },
    { "index": 103, "name": "العصر" }, { "index": 104, "name": "الهمزة" },
    { "index": 105, "name": "الفيل" }, { "index": 106, "name": "قريش" },
    { "index": 107, "name": "الماعون" }, { "index": 108, "name": "الكوثر" },
    { "index": 109, "name": "الكافرون" }, { "index": 110, "name": "النصر" },
    { "index": 111, "name": "المسد" }, { "index": 112, "name": "الإخلاص" },
    { "index": 113, "name": "الفلق" }, { "index": 114, "name": "الناس" }
];

// دالة لجلب اسم السورة بناءً على رقمها - يجب التأكد من وجود chapterData
function getSurahNameByIndex(index) {
    if (typeof chapterData === 'undefined') return 'غير معروف';
    const chapter = chapterData.find(ch => ch.index == index); // Use == for potential string/number comparison
    return chapter ? chapter.name : 'غير معروف';
}
