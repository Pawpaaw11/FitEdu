// Real exercise dataset extracted from PDF and video assets in assets/Konten
import video1 from "../assets/Konten/Video1.mp4";
import video2 from "../assets/Konten/Video2.mp4";
import video3 from "../assets/Konten/Video3.mp4";
import video4 from "../assets/Konten/Video4.mp4";
import video5 from "../assets/Konten/Video5.mp4";
import video6 from "../assets/Konten/Video6.mp4";
import video7 from "../assets/Konten/Video7.mp4";
import video8 from "../assets/Konten/Video8.mp4";
import video9 from "../assets/Konten/Video9.mp4";
import video10 from "../assets/Konten/Video10.mp4";
import video11 from "../assets/Konten/Video11.mp4";
import video12 from "../assets/Konten/Video12.mp4";
import video13 from "../assets/Konten/Video13.mp4";
import video14 from "../assets/Konten/Video14.mp4";
import video15 from "../assets/Konten/VIdeo15.mp4";

const videoMap = {
  1: video1,
  2: video2,
  3: video3,
  4: video4,
  5: video5,
  6: video6,
  7: video7,
  8: video8,
  9: video9,
  10: video10,
  11: video11,
  12: video12,
  13: video13,
  14: video14,
  15: video15,
};

export const allExercises = [
  {
    id: "video-1",
    index: 1,
    title: "Sumo Deadlift",
    category: "Deadlift",
    videoSrc: videoMap[1],
    videoFileName: "Video1.mp4",
    tabs: {
      description: {
        steps: [
          "Berdiri dengan posisi kaki terbuka lebar (lebih lebar dari bahu) dan jari kaki sedikit mengarah ke luar.",
          "Turunkan pinggul ke bawah dan tekuk lutut hingga tangan dapat memegang barbell tepat di dalam posisi kedua kaki.",
          "Jaga punggung tetap lurus, dada terangkat, dan core aktif.",
          "Dorong lantai dengan tumit dan angkat beban secara perlahan hingga tubuh berdiri tegak.",
          "Turunkan kembali barbell ke lantai secara terkontrol."
],
        notes: []
      },
      tips: [
        "Pastikan posisi lutut selalu sejajar dengan arah jari kaki untuk menjaga stabilitas sendi.",
        "Pertahankan barbell tetap dekat dengan tubuh selama gerakan berlangsung.",
        "Fokus pada dorongan kaki ke lantai daripada memaksakan tarikan hanya dengan punggung."
],
      commonMistakes: [
        "Punggung melengkung atau membulat (rounding) saat mengangkat beban.",
        "Lutut menekuk ke dalam (knee valgus) saat mulai mengangkat.",
        "Posisi pinggul terlalu tinggi atau terlalu rendah di awal gerakan."
],
      benefits: [
        "Melatih otot paha bagian dalam (adductors), glutes, hamstrings, dan paha depan (quadriceps).",
        "Mengurangi tekanan berlebih pada punggung bawah dibandingkan deadlift konvensional.",
        "Meningkatkan kekuatan serta stabilitas core dan panggul secara keseluruhan."
]
    }
  },
  {
    id: "video-2",
    index: 2,
    title: "Conventional Deadlift",
    category: "Deadlift",
    videoSrc: videoMap[2],
    videoFileName: "Video2.mp4",
    tabs: {
      description: {
        steps: [
          "Berdiri dengan kaki dibuka selebar pinggul dan posisi barbell berada tepat di atas bagian tengah kaki.",
          "Engselkan panggul ke belakang (hip hinge) dan tekuk lutut secukupnya sampai tangan dapat memegang barbell sedikit di luar lebar bahu.",
          "Jaga tulang belakang tetap netral, tarik bahu ke belakang, dan kencangkan otot latissimus dorsi serta core.",
          "Dorong lantai dengan kaki untuk mengangkat beban hingga tubuh berdiri tegak dan panggul mengunci di atas (lockout).",
          "Turunkan barbell kembali ke lantai secara terkontrol dengan mendorong panggul ke belakang."
],
        notes: []
      },
      tips: [
        "Pastikan barbell bergerak lurus secara vertikal dan tetap menempel dekat dengan tulang kering serta paha sepanjang gerakan.",
        "Jaga pandangan mata tetap netral sejajar dengan tulang belakang, hindari mendongakkan kepala terlalu tinggi.",
        "Atur napas dan kencangkan perut (bracing) sebelum beban diangkat dari lantai."
],
      commonMistakes: [
        "Punggung bawah membulat (lumbar flexion) saat mulai mengait dan mengangkat beban.",
        "Hip naik terlalu cepat sebelum dada terangkat (hip shooting up), sehingga beban bertumpu penuh pada punggung bawah.",
        "Posisi barbell terlalu jauh dari tubuh, membuat moment arm bertambah panjang dan membebankan pinggang."
],
      benefits: [
        "Menguatkan seluruh otot rantai posterior (posterior chain), seperti glutes, hamstrings, dan otot-otot punggung.",
        "Meningkatkan kekuatan genggaman tangan (grip strength) dan stabilitas tulang belakang.",
        "Membantu meningkatkan kapasitas angkatan secara keseluruhan untuk performa olahraga maupun harian."
]
    }
  },
  {
    id: "video-3",
    index: 3,
    title: "Tempo Sumo Deadlift",
    category: "Deadlift",
    videoSrc: videoMap[3],
    videoFileName: "Video3.mp4",
    tabs: {
      description: {
        steps: [
          "Berdiri dengan sikap sumo (kaki terbuka lebar dan jari kaki mengarah ke luar).",
          "Angkat barbell dari lantai hingga posisi berdiri tegak (lockout).",
          "Saat menurunkan beban (fase eksentrik), turunkan barbell secara perlahan dengan kontrol penuh selama 3–5 detik hingga menyentuh lantai kembali.",
          "Pastikan jalur barbell tetap lurus dan dekat dengan tubuh sepanjang fase penurunan."
],
        notes: []
      },
      tips: [
        "Jaga ketegangan core dan otot punggung agar tidak mengendur saat menurunkan beban perlahan.",
        "Dorong panggul ke belakang secara terkontrol sambil membengkokkan lutut sesuai jalur jari kaki.",
        "Gunakan ritme atau hitungan detik yang konsisten saat melakukan fase menurunkan beban."
],
      commonMistakes: [
        "Menurunkan beban terlalu cepat atau menjatuhkannya tanpa ada kontrol eksentrik.",
        "Punggung melengkung (rounding) saat menahan beban di fase penurunan.",
        "Menahan napas terlalu lama yang dapat menyebabkan pusing atau kehilangan stabilitas."
],
      benefits: [
        "Meningkatkan time under tension (TUT) untuk merangsang hipertrofi dan kekuatan otot secara maksimal.",
        "Memperbaiki kontrol teknik dan kesadaran posisi tubuh (positional awareness) saat fase eksentrik.",
        "Memperkuat stabilitas core, panggul, serta otot hamstrings dan glutes."
]
    }
  },
  {
    id: "video-4",
    index: 4,
    title: "Pause Sumo Deadlift",
    category: "Deadlift",
    videoSrc: videoMap[4],
    videoFileName: "Video4.mp4",
    tabs: {
      description: {
        steps: [
          "Berdiri dengan posisi kaki terbuka lebar (sikap sumo), jari kaki mengarah ke luar, dan pegang barbell di antara kedua kaki.",
          "Turunkan panggul, kencangkan core, dan jaga dada tetap terangkat serta punggung tetap lurus.",
          "Angkat barbell dari lantai, lalu berhenti sejenak (pause) selama 1–2 detik saat beban berada tepat di bawah atau di selevel lutut/tulang kering.",
          "Tahan posisi tersebut tanpa menurunkan atau menaikkan beban, lalu lanjutkan dorongan hingga berdiri tegak (lockout).",
          "Turunkan barbell kembali ke lantai secara terkontrol."
],
        notes: []
      },
      tips: [
        "Saat jeda (pause), pertahankan ketegangan seluruh otot rantai posterior dan core; jangan mengendurkan ketegangan tubuh.",
        "Jaga posisi barbell tetap menempel dekat dengan tubuh sepanjang fase angkatan.",
        "Gunakan ritme atau hitungan yang konsisten saat menahan jeda di bawah lutut."
],
      commonMistakes: [
        "Kehilangan ketegangan core atau punggung membulat (rounding) saat melakukan jeda.",
        "Waktu jeda terlalu singkat atau beban tetap bergerak naik/turun alih-alih berhenti total.",
        "Pinggul naik terlalu cepat (hip shooting up) sebelum dada terangkat saat mulai melepaskan beban dari lantai."
],
      benefits: [
        "Melatih kekuatan di titik terlemah (sticking point) pada fase awal hingga pertengahan angkatan.",
        "Meningkatkan kontrol teknik, stabilitas core, dan kesadaran posisi tubuh (positional awareness).",
        "Memperkuat keterlibatan otot paha dalam (adductors), glutes, dan otot punggung secara lebih intensif."
]
    }
  },
  {
    id: "video-5",
    index: 5,
    title: "Romanian Deadlift (RDL)",
    category: "Deadlift",
    videoSrc: videoMap[5],
    videoFileName: "Video5.mp4",
    tabs: {
      description: {
        steps: [
          "Berdiri tegak memegang barbell dengan posisi kaki dibuka selebar pinggul dan pegangan tangan sedikit di luar lebar paha.",
          "Dorong panggul ke belakang (hip hinge) sambil menurunkan barbell menyusuri paha hingga tepat di bawah lutut atau pertengahan tulang kering.",
          "Pertahankan posisi lutut sedikit menekuk (statis), tulang belakang tetap netral, dan dada terangkat sepanjang gerakan.",
          "Kencangkan otot glutes dan hamstrings untuk mendorong panggul kembali ke depan hingga berdiri tegak.",
          "Pada variasi ini, beban tidak dilepaskan penuh ke lantai di setiap repetisinya (tetap melayang atau touch-and-go ringan)."
],
        notes: []
      },
      tips: [
        "Fokus utama ada pada dorongan panggul ke belakang (hip hinge), bukan memindahkan gerakan ke tekukan lutut seperti squat.",
        "Pertahankan barbell tetap dekat dengan paha dan paha bawah agar tidak membebankan punggung bawah secara berlebihan.",
        "Hentikan penurunan beban saat panggul tidak bisa bergerak lebih jauh ke belakang untuk menjaga kurva tulang belakang tetap netral."
],
      commonMistakes: [
        "Membulatkan punggung bawah (lumbar flexion) saat menurunkan barbell.",
        "Menekuk lutut terlalu banyak sehingga fokus beban bergeser dari hamstrings ke quadriceps.",
        "Posisi barbell terlalu jauh melayang di depan tubuh."
],
      benefits: [
        "Mengisolasi dan memperkuat otot hamstrings serta glutes secara optimal.",
        "Meningkatkan kekuatan serta fleksibilitas pola gerakan hip hinge.",
        "Menjaga kesehatan dan kekuatan otot penguat punggung bawah (erector spinae)."
]
    }
  },
  {
    id: "video-6",
    index: 6,
    title: "Barbell Back Squat (High Bar)",
    category: "Squat",
    videoSrc: videoMap[6],
    videoFileName: "Video6.mp4",
    tabs: {
      description: {
        steps: [
          "Posisikan barbell di atas otot trapezius bagian atas (punggung atas) dan pegang stang dengan erat untuk menjaga stabilitas.",
          "Berdiri tegak dengan kaki dibuka sejajar atau sedikit lebih lebar dari bahu, serta jari kaki mengarah sedikit ke luar.",
          "Tarik napas mendalam dan kencangkan otot core (bracing).",
          "Turunkan tubuh dengan menekuk lutut dan mendorong panggul ke belakang hingga paha sejajar atau di bawah sejajar lutut (below parallel).",
          "Dorong lantai kuat-kuat melalui midfoot/tumit untuk kembali ke posisi berdiri tegak sambil menghembuskan napas."
],
        notes: []
      },
      tips: [
        "Pastikan posisi rack diatur pada ketinggian yang pas agar tidak perlu berjinjit saat mengambil (unrack) atau mengembalikan beban (rerack).",
        "Pertahankan posisi dada tetap terangkat dan tulang belakang netral sepanjang rentang gerak.",
        "Jaga panggul dan lutut bergerak secara bersamaan saat mengawali fase penurunan (eccentric)."
],
      commonMistakes: [
        "Punggung bawah membulat (butt wink atau lumbar flexion) saat mencapai kedalaman squat bawah.",
        "Lutut menekuk ke dalam (knee valgus) saat fase mendorong naik.",
        "Tumit terangkat dari lantai karena tumpuan berat badan bergeser terlalu jauh ke depan jari kaki."
],
      benefits: [
        "Membangun kekuatan dan hipertrofi otot quadriceps, glutes, dan adductors secara signifikan.",
        "Memperkuat stabilitas core dan otot penguat tulang belakang (erector spinae).",
        "Meningkatkan kekuatan serta kepadatan tulang pada rantai tubuh bagian bawah."
]
    }
  },
  {
    id: "video-7",
    index: 7,
    title: "Pause Squat (Low Bar)",
    category: "Squat",
    videoSrc: videoMap[7],
    videoFileName: "Video7.mp4",
    tabs: {
      description: {
        steps: [
          "Posisikan barbell di atas bagian belakang bahu (rear deltoids / sedikit di bawah trapezius).",
          "Berdiri tegak dengan kaki dibuka selebar bahu dan jari kaki sedikit mengarah ke luar.",
          "Tarik napas mendalam, kencangkan core (bracing), lalu turunkan tubuh dengan memiringkan pinggul sedikit ke belakang dan menekuk lutut.",
          "Saat mencapai titik kedalaman terbawah (bottom position), tahan posisi tersebut selama 1–2 detik tanpa mengendurkan ketegangan otot.",
          "Dorong lantai dengan kuat melalui telapak kaki untuk kembali berdiri tegak sambil menghembuskan napas."
],
        notes: []
      },
      tips: [
        "Tetap pertahankan ketegangan seluruh otot tubuh (core, glutes, dan punggung) selama jeda di posisi bawah; jangan sampai 'duduk' pasif di sendi.",
        "Gunakan hitungan internal yang konsisten saat menahan jeda (misalnya 1–2 detik).",
        "Pastikan jalur barbell bergerak lurus secara vertikal tepat di atas pertengahan telapak kaki (midfoot)."
],
      commonMistakes: [
        "Mengendurkan ketegangan core atau membulatkan punggung bawah (butt wink) saat berada di posisi bawah.",
        "Memantulkan beban (bouncing) di dasar gerakan alih-alih menahannya secara diam/statis.",
        "Lutut menekuk ke dalam (knee valgus) saat mulai mendorong tubuh naik dari posisi jeda."
],
      benefits: [
        "Membangun kekuatan eksplosif dari posisi paling sulit di dasar gerakan squat (hole).",
        "Memperbaiki kontrol teknik, keseimbangan, dan kesadaran posisi tubuh (positional awareness).",
        "Meningkatkan stabilitas core dan kekuatan otot quadriceps serta glutes secara maksimal."
]
    }
  },
  {
    id: "video-8",
    index: 8,
    title: "Barbell Front Squat",
    category: "Squat",
    videoSrc: videoMap[8],
    videoFileName: "Video8.mp4",
    tabs: {
      description: {
        steps: [
          "Posisikan barbell di atas bahu bagian depan (anterior deltoids) dan kunci stang menggunakan fingertip grip atau posisi lengan bersilang (crossed-arm grip).",
          "Angkat siku hingga sejajar dengan lantai untuk menciptakan 'rak' alami di atas bahu.",
          "Berdiri tegak dengan kaki dibuka selebar bahu dan jari kaki mengarah sedikit ke luar.",
          "Tarik napas mendalam, kencangkan core (bracing), lalu turunkan tubuh secara vertikal dengan menekuk lutut dan pinggul.",
          "Turun hingga paha sejajar atau di bawah lutut sambil mempertahankan dada dan siku tetap terangkat tinggi.",
          "Dorong lantai dengan telapak kaki untuk kembali berdiri tegak."
],
        notes: []
      },
      tips: [
        "Pertahankan siku tetap menunjuk ke depan/atas sepanjang gerakan agar barbell tidak merosot ke bawah.",
        "Jaga batang tubuh (torso) tetap setegak mungkin dibanding pada back squat.",
        "Pastikan mobilitas pergelangan tangan dan bahu sudah cukup hangat sebelum memulai gerakan."
],
      commonMistakes: [
        "Siku turun ke bawah yang menyebabkan barbell merosot dan beban ditarik oleh punggung bawah.",
        "Pinggul terlalu meluncur ke belakang sehingga paha tidak menerima beban secara optimal.",
        "Punggung atas membungkuk (thoracic flexion) karena kehilangan ketegangan otot penguat dada/otot bahu."
],
      benefits: [
        "Mengisolasi otot paha depan (quadriceps) lebih dominan dengan beban geser panggul yang minimal.",
        "Mengurangi tekanan kompresi pada punggung bawah (lumbar spine) dibandingkan back squat.",
        "Memperkuat stabilitas core bagian depan serta otot-otot punggung atas."
]
    }
  },
  {
    id: "video-9",
    index: 9,
    title: "Feet-Up Bench Press",
    category: "Bench Press",
    videoSrc: videoMap[9],
    videoFileName: "Video9.mp4",
    tabs: {
      description: {
        steps: [
          "Berbaring terlentang di atas bench datar, lalu angkat kedua kaki dan tekuk lutut di atas udara/di atas bench sehingga kaki tidak menyentuh lantai.",
          "Pegang stang barbell sedikit lebih lebar dari lebar bahu dengan genggaman kuat.",
          "Tarik tulang belikat ke belakang (scapular retraction) dan aktifkan core secara maksimal untuk menjaga keseimbangan.",
          "Turunkan barbell secara terkontrol hingga menyentuh dada bagian tengah.",
          "Dorong barbell kembali ke atas hingga lengan lurus terentang (lockout)."
],
        notes: []
      },
      tips: [
        "Karena tidak ada bantuan dorongan kaki (leg drive), fokuskan seluruh tenaga pada kontraksi otot dada dan core untuk menjaga stabilitas badan di atas bench.",
        "Gunakan beban yang lebih ringan dari bench press biasa karena stabilitas tubuh berkurang.",
        "Pastikan gerakan dilakukan secara mulus tanpa membuat badan bergoyang ke kanan atau kiri."
],
      commonMistakes: [
        "Menggunakan beban terlalu berat sehingga tubuh kehilangan keseimbangan di atas bench.",
        "Punggung melengkung berlebihan secara tidak stabil karena hilangnya tumpuan kaki di lantai.",
        "Menurunkan beban terlalu cepat tanpa kontrol eksentrik."
],
      benefits: [
        "Mencegah pemakaian leg drive sehingga isolasi murni penuh pada otot dada (pectoralis), bahu depan, dan triceps.",
        "Melatih stabilitas otot core dan postur tubuh bagian atas secara ekstra agar badan tidak goyang.",
        "Aman untuk individu yang sedang mengurangi tekanan atau hiperekstensi pada punggung bawah (lumbar spine)."
]
    }
  },
  {
    id: "video-10",
    index: 10,
    title: "Tempo Pause Bench Press",
    category: "Bench Press",
    videoSrc: videoMap[10],
    videoFileName: "Video10.mp4",
    tabs: {
      description: {
        steps: [
          "Berbaring di bench dengan telapak kaki menapak di lantai seperti bench press biasa.",
          "Turunkan barbell ke dada secara perlahan sesuai tempo (misal: 3 detik hitungan eksentrik).",
          "Tahan/berhentikan barbell diam tepat di atas dada selama 1–2 detik (pause) tanpa mengendurkan ketegangan otot.",
          "Dorong barbell secara eksplosif kembali ke atas hingga lockout."
],
        notes: []
      },
      tips: [
        "Tetap kencangkan otot dada dan core saat posisi barbell diam di dada.",
        "Hitung ritme detik tempo dan pause secara konsisten pada tiap repetisi.",
        "Jaga leg drive tetap aktif untuk menopang stabilitas tubuh."
],
      commonMistakes: [
        "Memantulkan beban di dada (bouncing) alih-alih menahannya secara diam/statis.",
        "Mengendurkan ketegangan otot (loss of tension) saat fase pause.",
        "Menurunkan beban terlalu cepat tanpa mengikuti tempo yang ditentukan."
],
      benefits: [
        "Memperkuat titik terlemah (sticking point) di posisi terbawah angkatan.",
        "Meningkatkan Time Under Tension (TUT) untuk merangsang hipertrofi otot.",
        "Melatih kontrol teknik, pola jalur barbell, serta menghilangkan momentum dorongan."
]
    }
  },
  {
    id: "video-11",
    index: 11,
    title: "Reguler Bench Press",
    category: "Bench Press",
    videoSrc: videoMap[11],
    videoFileName: "Video11.mp4",
    tabs: {
      description: {
        steps: [
          "Berbaring di bench datar dengan kedua telapak kaki menapak kuat di lantai.",
          "Pegang barbell sedikit lebih lebar dari lebar bahu, lalu tarik tulang belikat ke belakang (scapular retraction).",
          "Turunkan barbell secara terkontrol hingga menyentuh dada bagian tengah.",
          "Dorong barbell kembali ke atas menggunakan bantuan leg drive hingga lengan lurus (lockout)."
],
        notes: []
      },
      tips: [
        "Gunakan leg drive dengan menekan tumit ke lantai untuk menjaga stabilitas tubuh.",
        "Pertahankan posisi scapula tetap terkunci selama gerakan.",
        "Atur napas dengan membuang napas saat mendorong beban naik."
],
      commonMistakes: [
        "Pinggul terangkat dari bench saat memaksakan beban naik.",
        "Siku mekar terlalu lebar (flaring elbows) hingga 90 derajat yang bisa mencederai bahu.",
        "Memantulkan barbell di dada (bouncing)."
],
      benefits: [
        "Memaksimalkan beban angkatan (maximum strength) untuk seluruh tubuh.",
        "Melatih kekuatan dan hipertrofi otot dada (pectoralis), bahu depan, dan triceps.",
        "Meningkatkan stabilitas tubuh secara keseluruhan saat mendorong beban berat."
]
    }
  },
  {
    id: "video-12",
    index: 12,
    title: "Larsen Press",
    category: "Bench Press",
    videoSrc: videoMap[12],
    videoFileName: "Video12.mp4",
    tabs: {
      description: {
        steps: [
          "Berbaring di bench datar lalu luruskan kedua kaki ke depan melayang di udara tanpa menyentuh lantai/bench.",
          "Pegang barbell sedikit lebih lebar dari lebar bahu dan kencangkan otot core.",
          "Turunkan barbell secara terkontrol hingga menyentuh dada bagian tengah.",
          "Dorong barbell kembali ke atas hingga lengan terentang lurus (lockout)."
],
        notes: []
      },
      tips: [
        "Kencangkan otot core dan glutes untuk menyeimbangkan posisi tubuh di atas bench.",
        "Gunakan beban yang lebih ringan dari reguler bench press.",
        "Pertahankan pergerakan stang tetap mulus dan lurus di setiap repetisi."
],
      commonMistakes: [
        "Kaki bergoyang turun menyentuh lantai saat mendorong beban.",
        "Punggung bawah melengkung (arch) secara tidak stabil karena kehilangan tumpuan kaki.",
        "Menurunkan beban terlalu cepat tanpa kontrol eksentrik yang baik."
],
      benefits: [
        "Mengisolasi otot dada, bahu depan, dan triceps secara murni tanpa bantuan leg drive.",
        "Meningkatkan kontrol stabilitas otot core dan posisi scapula.",
        "Mengurangi tekanan atau hiperekstensi pada punggung bawah (lumbar spine)."
]
    }
  },
  {
    id: "video-13",
    index: 13,
    title: "Wide-Grip Pause Bench Press",
    category: "Bench Press",
    videoSrc: videoMap[13],
    videoFileName: "Video13.mp4",
    tabs: {
      description: {
        steps: [
          "Berbaring terlentang di atas bench datar dengan telapak kaki menapak di lantai.",
          "Pegang stang barbell dengan pegangan lebar (di luar garis cincin barbell).",
          "Kencangkan core dan tarik tulang belikat ke belakang (scapular retraction).",
          "Turunkan barbell ke dada bagian tengah, lalu tahan/berhentikan gerakan secara penuh (pause) selama 1–2 detik di atas dada tanpa mengendurkan ketegangan otot.",
          "Dorong barbell secara eksplosif kembali ke atas hingga lockout."
],
        notes: []
      },
      tips: [
        "Jaga ketegangan otot dada dan core tetap aktif pas menahan barbell di dada; jangan biarkan beban 'melesak' atau nempel pasif.",
        "Gunakan hitungan pause yang konsisten di setiap repetisi.",
        "Atur lebar pegangan yang aman buat pergelangan tangan dan sendi bahu."
],
      commonMistakes: [
        "Memantulkan beban di dada (bouncing) alih-alih menahannya secara diam/statis.",
        "Mengendurkan ketegangan otot (loss of tension) pas fase pause.",
        "Siku mekar berlebihan (90 derajat) yang bisa bikin sendi bahu rawan cedera."
],
      benefits: [
        "Melatih kekuatan di titik terlemah (sticking point) pada posisi terbawah angkatan bench press.",
        "Memperpendek range of motion sekaligus memaksimalkan rekrutmen otot dada (pectoralis major).",
        "Memperbaiki kontrol teknik dan menghilangkan bantuan momentum saat mendorong beban."
]
    }
  },
  {
    id: "video-14",
    index: 14,
    title: "Wide-Grip Bench Press",
    category: "Bench Press",
    videoSrc: videoMap[14],
    videoFileName: "Video14.mp4",
    tabs: {
      description: {
        steps: [
          "Berbaring terlentang di atas bench datar dengan posisi pegangan tangan di stang barbell dibuka lebih lebar dari standard grip (di luar garis cincin barbell).",
          "Tarik tulang belikat ke belakang (scapular retraction) dan kencangkan otot core.",
          "Turunkan barbell secara terkontrol ke dada bagian tengah.",
          "Dorong barbell kembali ke atas hingga lockout."
],
        notes: []
      },
      tips: [
        "Jaga siku tetap terkontrol dan hindari membuka siku terlalu keluar (90 derajat) untuk melindungi sendi bahu.",
        "Atur napas secara teratur dengan membuang napas saat mendorong beban naik.",
        "Pilih beban yang terukur karena pegangan lebar memberikan tekanan lebih pada sendi bahu."
],
      commonMistakes: [
        "Rentang gerak (range of motion) terlalu pendek atau tidak menyentuh dada.",
        "Siku mekar (flaring) berlebihan yang bikin bahu rentan cedera.",
        "Panggul terangkat dari bench saat berusaha mendorong beban."
],
      benefits: [
        "Memperpendek range of motion dan memberikan rekrutmen/tegangan lebih tinggi pada otot dada (pectoralis major).",
        "Meningkatkan kekuatan dada bagian luar dan stabilitas pegangan lebar.",
        "Variasi efektif untuk powerlifting dan hipertrofi otot dada."
]
    }
  },
  {
    id: "video-15",
    index: 15,
    title: "Close-Grip Bench Press (CGBP)",
    category: "Bench Press",
    videoSrc: videoMap[15],
    videoFileName: "VIdeo15.mp4",
    tabs: {
      description: {
        steps: [
          "Berbaring terlentang di atas bench datar dengan kedua telapak kaki menapak di lantai.",
          "Pegang stang barbell dengan jarak pegangan lebih rapat/sempit (sejajar lebar bahu atau sedikit di dalam lebar bahu).",
          "Tarik tulang belikat ke belakang (scapular retraction) dan kencangkan otot core.",
          "Turunkan barbell secara terkontrol ke arah dada bagian bawah dengan posisi siku tetap rapat ke samping tubuh (tucked in).",
          "Dorong barbell kembali ke atas hingga lengan terentang lurus (lockout)."
],
        notes: []
      },
      tips: [
        "Jaga jarak pegangan selebar bahu (hindari pegangan terlalu rapat/terlalu dekat hingga pergelangan tangan menekuk ekstrem untuk mencegah cedera wrist).",
        "Pertahankan siku tetap menekuk dekat dengan rusuk/samping badan sepanjang gerakan.",
        "Fokus pada dorongan kekuatan otot lengan belakang (triceps)."
],
      commonMistakes: [
        "Memegang stang terlalu rapat yang menyebabkan tekanan berlebih pada sendi pergelangan tangan (wrist).",
        "Siku mekar ke luar (flaring elbows) alih-alih dirapatkan ke samping badan.",
        "Panggul terangkat dari bench saat mendorong beban ke atas."
],
      benefits: [
        "Berfokus utama untuk melatih kekuatan dan hipertrofi otot triceps (lengan belakang).",
        "Mengurangi beban pada sendi bahu dibanding bench press pegangan lebar (wide grip).",
        "Membantu meningkatkan kekuatan lockout pada gerakan standard bench press."
]
    }
  },
];

// Default active exercise (Video 1)
export const exerciseDetail = allExercises[0];

// Related content tabs using real videos
export const relatedTabs = {
  variations: allExercises.map((ex) => ({
    id: ex.id,
    index: ex.index,
    title: ex.title,
    muscle: ex.category,
    videoSrc: ex.videoSrc,
  })),
  videos: allExercises.map((ex) => ({
    id: ex.id,
    index: ex.index,
    title: `Video ${ex.index}: ${ex.title}`,
    category: ex.category,
    duration: "Video Asli MP4",
  })),
  articles: []
};