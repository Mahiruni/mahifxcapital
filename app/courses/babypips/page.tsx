'use client'

import { useState } from 'react'
import { CheckCircle2, PlayCircle } from 'lucide-react'

type Chapter = [string, string[]]

const chapters: Chapter[] = [
  ['1. የፎረክስ መሰረታዊ ነገሮች', ['ምንድን ነው ፎረክስ?', 'የገበያ ሰዓታት', 'የገበያ ተሳታፊዎች', 'የፎረክስ ጥቅሞችና ጉዳቶች']],
  ['2. የገበያ ትንተና', ['ቴክኒካል ትንተና', 'ፋንዳመንታል ትንተና', 'የሰንጠረዥ አይነቶች']],
  ['3. የካንድልስቲክ ስርዓት', ['የካንድል ክፍሎች', 'Doji፣ Hammer እና Engulfing']],
  ['4. የድጋፍና ተቃውሞ', ['Support & Resistance ምንድን ነው?', 'እንዴት እንደሚሳሉ', 'እንዴት እንደሚጠቀሙ']],
  ['5. የአዝማሚያ መስመሮች', ['Trend Lines', 'Channels', 'Breakouts']],
  ['6. Moving Averages', ['SMA vs EMA', 'Crossovers', 'አጠቃቀም']],
  ['7. ኢንዲኬተሮች', ['RSI', 'MACD', 'Stochastic', 'Bollinger Bands']],
  ['8. የአደጋ አስተዳደር', ['Position Sizing', 'Stop Loss & Take Profit', 'Risk-Reward Ratio', 'የገንዘብ አስተዳደር ህጎች']],
  ['9. የንግድ ስነ-ልቦና', ['የንግድ ስሜት', 'ዲሲፕሊን', 'የተለመዱ ስህተቶች']],
  ['10. የንግድ እቅድ', ['የንግድ እቅድ መጻፍ', 'Journaling']],
]

export default function Baby() {
  const [done, setDone] = useState(0)
  const [open, setOpen] = useState(0)
  const currentChapter = chapters[open]

  return (
    <main className="amh-page">
      <section className="course-layout">
        <div className="container course-layout-inner">
          <div>
            <span className="eyebrow">FLAGSHIP AMHARIC COURSE</span>
            <h1>የባቢፒፕስ ትምህርት ቤት – ከመጀመሪያ እስከ ባለሙያ</h1>
            <p>የፎረክስ ገበያን ከባዶ እስከ ሙሉ ጌታነት በአማርኛ ይማሩ። A structured learning path for serious beginners.</p>
            <div className="course-meta">
              <span>★ 4.9 (1,248 ratings)</span><span>1,248 students</span><span>Updated 2026</span><span>አማርኛ</span>
            </div>
          </div>
          <aside className="buy-card">
            <div className="preview"><PlayCircle size={52} /></div>
            <div className="buy-inner">
              <h2>Free</h2><p>Full curriculum access</p>
              <button onClick={() => setDone(1)}>Start learning</button>
              <p style={{ fontSize: 11 }}>30-day structured learning path · Certificate included</p>
            </div>
          </aside>
        </div>
      </section>

      <div className="container" style={{ padding: '32px 0' }}>
        <div className="progress"><i style={{ width: `${done}%` }} /></div>
        <p style={{ fontSize: 12, color: '#667085' }}>{done}% complete · Your progress is saved in this session</p>

        <div className="amh-course">
          <aside className="sidechap">
            {chapters.map(([title, lessons], i) => (
              <button className={open === i ? 'active' : ''} onClick={() => setOpen(i)} key={title}>
                {title}
                <small style={{ display: 'block', color: '#667085', marginTop: 5 }}>{lessons.length} lessons</small>
              </button>
            ))}
          </aside>

          <article className="reading">
            <h2>{currentChapter[0]}</h2>
            <p>በዚህ ምዕራፍ ውስጥ የገበያውን መሠረታዊ ጽንሰ-ሐሳቦች በቀላል ቋንቋ ይማራሉ። ትምህርቱ በእውቀት፣ በሂደት እና በአደጋ ቁጥጥር ላይ ያተኩራል።</p>

            <div className="callout">
              <b>የትምህርት ማስታወሻ</b>
              <p style={{ marginBottom: 0 }}>ንግድ አደገኛ ነው። ትምህርት የገንዘብ ምክር አይደለም፤ ማንኛውንም የገበያ ውሳኔ ከማድረግዎ በፊት የራስዎን ጥናት ያድርጉ።</p>
            </div>

            <h3>ትምህርቶች</h3>
            {currentChapter[1].map((lesson, i) => (
              <div className="lesson-list" key={lesson}>
                <div className="lesson">
                  <span><PlayCircle size={15} style={{ verticalAlign: 'middle', marginRight: 8 }} />{lesson}</span>
                  <small>{i === 0 ? '12 min' : '8 min'}</small>
                </div>
              </div>
            ))}

            <h3>የትምህርት ማጠቃለያ</h3>
            <ul>
              <li>የሚማሩትን ጽንሰ-ሐሳብ በገበያ ላይ ሳይገምቱ መለየት።</li>
              <li>ሂደት እና የአደጋ ቁጥጥር ከግምት በላይ እንደሆኑ መረዳት።</li>
            </ul>

            <h3>የጥያቄዎች ክፍል</h3>
            <div className="callout">Quiz placeholder — 5 questions will appear here after the lesson content is completed.</div>

            <button className="btn gold" onClick={() => setDone(Math.min(100, done + 10))}>
              <CheckCircle2 size={16} style={{ verticalAlign: 'middle' }} /> ይህን ትምህርት አጠናቄያለሁ
            </button>

            <div className="lesson-nav">
              <button className="btn" disabled={open === 0} onClick={() => setOpen(Math.max(0, open - 1))}>← ቀዳሚ ምዕራፍ</button>
              <button className="btn gold" disabled={open === chapters.length - 1} onClick={() => setOpen(Math.min(chapters.length - 1, open + 1))}>ቀጣይ ምዕራፍ →</button>
            </div>
          </article>
        </div>
      </div>
    </main>
  )
}
