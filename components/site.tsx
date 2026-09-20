'use client'
import Link from 'next/link'
import { Search, ShoppingCart, Heart, Menu, X, ChevronDown, PlayCircle, Star, ShieldCheck, BookOpen, Users, Globe2 } from 'lucide-react'
import { useState } from 'react'

export const courses = [
 {id:'baby',title:'የባቢፒፕስ ትምህርት ቤት – ከመጀመሪያ እስከ ባለሙያ',en:'BabyPips School of Forex — Beginner to Professional',instructor:'Mahifxcapital Academy',rating:4.9,students:1248,price:'Free',level:'Beginner',language:'አማርኛ',badge:'Featured'},
 {id:'technical',title:'Technical Analysis Masterclass',instructor:'Mahir Aman',rating:4.8,students:684,price:'ETB 2,490',level:'Intermediate',language:'English',badge:'Bestseller'},
 {id:'risk',title:'Risk Management & Trading Psychology',instructor:'Mahifxcapital Academy',rating:4.9,students:512,price:'ETB 1,990',level:'All levels',language:'English',badge:'New'},
 {id:'price-action',title:'Price Action & Market Structure',instructor:'Mahir Aman',rating:4.7,students:391,price:'ETB 2,990',level:'Advanced',language:'English',badge:''},
]

export function SiteHeader(){
 const [open,setOpen]=useState(false)
 return <header className="topbar"><div className="nav"><button className="mobile-menu" onClick={()=>setOpen(!open)}>{open?<X/>:<Menu/>}</button><Link href="/" className="logo"><span>MF</span><b>Mahifxcapital</b></Link><div className="search"><Search size={18}/><input placeholder="Search for courses, topics and skills"/><kbd>⌘ K</kbd></div><nav className={open?'navlinks open':'navlinks'}><Link href="/courses">Courses</Link><Link href="/learn">My Learning</Link><Link href="/instructor">Teach on Mahifxcapital</Link><Link href="/courses/babypips" className="amh">አማርኛ School</Link></nav><div className="navactions"><Link href="/wishlist"><Heart size={19}/></Link><Link href="/cart"><ShoppingCart size={19}/></Link><Link href="/login" className="btn ghost">Log in</Link><Link href="/signup" className="btn gold">Sign up</Link><button className="lang">EN <ChevronDown size={14}/></button></div></div></header>
}

export function CourseCard({c}:{c:any}){return <Link href={c.id==='baby'?'/courses/babypips':`/courses/${c.id}`} className="course-card"><div className="thumb"><div className="chart-grid"><span>EUR/USD</span><i>↗</i></div>{c.badge&&<strong className="badge">{c.badge}</strong>}<PlayCircle className="play"/></div><div className="course-body"><h3>{c.title}</h3><p>{c.instructor}</p><div className="rating"><b>{c.rating}</b><span>★★★★★</span><small>({c.students.toLocaleString()})</small></div><div className="meta"><span>{c.level}</span><span>{c.language}</span></div><strong className="price">{c.price}</strong></div></Link>}

export function Section({title,children,sub}:{title:string;children:React.ReactNode;sub?:string}){return <section className="section container"><div className="section-head"><div><h2>{title}</h2>{sub&&<p>{sub}</p>}</div><Link href="/courses" className="text-link">View all →</Link></div>{children}</section>}

export function Footer(){return <><div className="risk">⚠️ Risk Warning: Trading foreign exchange and leveraged financial products carries substantial risk. Past performance does not guarantee future results. Education is not financial advice.</div><footer><div className="footer-grid container"><div><Link href="/" className="logo"><span>MF</span><b>Mahifxcapital</b></Link><p>Learn Trading the Smart Way.</p><p className="muted">Professional Forex & Financial Markets education for serious learners.</p></div><div><h4>Explore</h4><Link href="/courses">All Courses</Link><Link href="/courses/babypips">Amharic School</Link><Link href="/learn">My Learning</Link><Link href="/blog">Market Insights</Link></div><div><h4>Company</h4><Link href="/about">About Us</Link><Link href="/instructor">Teach on Mahifxcapital</Link><Link href="/pricing">Mentorship</Link><Link href="/contact">Contact</Link></div><div><h4>Support</h4><Link href="/faq">Help Center / FAQ</Link><Link href="/contact">WhatsApp</Link><Link href="/contact">Telegram</Link><Link href="/contact">Email</Link></div></div><div className="footer-bottom container"><span>© 2026 Mahifxcapital. All rights reserved.</span><span>Privacy · Terms · Risk Disclosure</span></div></footer></>}

export const IconStats=()=> <div className="stats"><div><BookOpen/><b>20+</b><span>Structured courses</span></div><div><Users/><b>2,800+</b><span>Learners</span></div><div><ShieldCheck/><b>Risk-first</b><span>Education philosophy</span></div><div><Globe2/><b>EN + አማርኛ</b><span>Learning languages</span></div></div>
