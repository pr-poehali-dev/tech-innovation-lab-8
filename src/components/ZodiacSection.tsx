const zodiacSigns = [
  {
    symbol: "♈",
    name: "Овен",
    dates: "21 марта — 19 апреля",
    myth: "В греческой мифологии — золотой баран, посланный богиней Нефелой, чтобы спасти детей от жертвоприношения. Его золотое руно стало целью похода аргонавтов.",
    origin: "Греция",
    color: "from-red-900/40 to-red-800/20",
    border: "border-red-500/30",
    accent: "text-red-400",
  },
  {
    symbol: "♉",
    name: "Телец",
    dates: "20 апреля — 20 мая",
    myth: "Зевс обратился в белоснежного быка, чтобы похитить прекрасную финикийскую царевну Европу. Он увёз её на остров Крит, где она родила ему троих сыновей.",
    origin: "Греция",
    color: "from-emerald-900/40 to-emerald-800/20",
    border: "border-emerald-500/30",
    accent: "text-emerald-400",
  },
  {
    symbol: "♊",
    name: "Близнецы",
    dates: "21 мая — 20 июня",
    myth: "Диоскуры — братья Кастор и Поллукс. Один был смертным, другой — сыном Зевса. Поллукс отдал брату половину своего бессмертия, и боги вознесли их на небо вместе.",
    origin: "Греция",
    color: "from-yellow-900/40 to-yellow-800/20",
    border: "border-yellow-500/30",
    accent: "text-yellow-400",
  },
  {
    symbol: "♋",
    name: "Рак",
    dates: "21 июня — 22 июля",
    myth: "Гера послала гигантского краба, чтобы помешать Гераклу сразиться с Лернейской гидрой. Краб ущипнул героя за ногу, но был раздавлен. Гера увековечила его на небесах.",
    origin: "Греция",
    color: "from-blue-900/40 to-blue-800/20",
    border: "border-blue-500/30",
    accent: "text-blue-400",
  },
  {
    symbol: "♌",
    name: "Лев",
    dates: "23 июля — 22 августа",
    myth: "Немейский лев — чудовищный зверь с непробиваемой шкурой, опустошавший окрестности. Геракл задушил его голыми руками в первом из своих двенадцати подвигов.",
    origin: "Греция",
    color: "from-orange-900/40 to-orange-800/20",
    border: "border-orange-500/30",
    accent: "text-orange-400",
  },
  {
    symbol: "♍",
    name: "Дева",
    dates: "23 августа — 22 сентября",
    myth: "Богиня справедливости Астрея, дочь Зевса и Фемиды, жила среди людей в золотой век. Когда человечество погрязло в пороках, она покинула землю и стала созвездием.",
    origin: "Греция",
    color: "from-teal-900/40 to-teal-800/20",
    border: "border-teal-500/30",
    accent: "text-teal-400",
  },
  {
    symbol: "♎",
    name: "Весы",
    dates: "23 сентября — 22 октября",
    myth: "Весы богини Фемиды, которыми она взвешивает душу каждого человека. В египетской традиции — весы Маат, богини истины, на которых взвешивали сердца умерших.",
    origin: "Египет / Греция",
    color: "from-violet-900/40 to-violet-800/20",
    border: "border-violet-500/30",
    accent: "text-violet-400",
  },
  {
    symbol: "♏",
    name: "Скорпион",
    dates: "23 октября — 21 ноября",
    myth: "Гигантский скорпион, посланный богиней Артемидой или Геей, чтобы убить охотника Ориона, хвастливо заявлявшего, что истребит всех зверей на земле.",
    origin: "Греция",
    color: "from-rose-900/40 to-rose-800/20",
    border: "border-rose-500/30",
    accent: "text-rose-400",
  },
  {
    symbol: "♐",
    name: "Стрелец",
    dates: "22 ноября — 21 декабря",
    myth: "Мудрый кентавр Хирон, наставник Ахилла и Ясона, случайно раненый отравленной стрелой Геракла. Терпя невыносимую боль, он отдал своё бессмертие и был вознесён на небо.",
    origin: "Греция",
    color: "from-purple-900/40 to-purple-800/20",
    border: "border-purple-500/30",
    accent: "text-purple-400",
  },
  {
    symbol: "♑",
    name: "Козерог",
    dates: "22 декабря — 19 января",
    myth: "Бог Пан, спасаясь от Тифона, прыгнул в Нил и обратился в существо — козёл спереди и рыба сзади. Зевс увековечил это превращение в звёздах в память о его хитрости.",
    origin: "Греция",
    color: "from-indigo-900/40 to-indigo-800/20",
    border: "border-indigo-500/30",
    accent: "text-indigo-400",
  },
  {
    symbol: "♒",
    name: "Водолей",
    dates: "20 января — 18 февраля",
    myth: "Прекрасный юноша Ганимед — сын троянского царя, которого Зевс, поражённый его красотой, похитил в образе орла и сделал виночерпием богов на Олимпе.",
    origin: "Греция",
    color: "from-cyan-900/40 to-cyan-800/20",
    border: "border-cyan-500/30",
    accent: "text-cyan-400",
  },
  {
    symbol: "♓",
    name: "Рыбы",
    dates: "19 февраля — 20 марта",
    myth: "Афродита и её сын Эрос, спасаясь от Тифона, обратились в рыб и связали себя верёвкой, чтобы не потерять друг друга в водах реки Евфрат.",
    origin: "Греция",
    color: "from-sky-900/40 to-sky-800/20",
    border: "border-sky-500/30",
    accent: "text-sky-400",
  },
]

export default function ZodiacSection() {
  return (
    <section className="relative z-10 px-6 sm:px-12 lg:px-20 py-20">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <p className="text-violet-400 text-sm uppercase tracking-widest mb-3">12 созвездий</p>
          <h2 className="text-white text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Истории, записанные звёздами
          </h2>
          <p className="text-white/50 text-base sm:text-lg max-w-2xl mx-auto">
            Каждый знак зодиака — это миф, переживший тысячелетия
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {zodiacSigns.map((sign) => (
            <div
              key={sign.name}
              className={`relative rounded-2xl border ${sign.border} bg-gradient-to-br ${sign.color} backdrop-blur-sm p-6 group hover:scale-[1.02] transition-transform duration-300`}
            >
              <div className="flex items-start justify-between mb-4">
                <div>
                  <span className="text-4xl">{sign.symbol}</span>
                  <h3 className="text-white text-xl font-bold mt-2">{sign.name}</h3>
                  <p className="text-white/40 text-xs mt-0.5">{sign.dates}</p>
                </div>
                <span className={`text-xs font-medium px-2 py-1 rounded-full border ${sign.border} ${sign.accent} bg-black/20`}>
                  {sign.origin}
                </span>
              </div>
              <p className="text-white/70 text-sm leading-relaxed">
                {sign.myth}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
