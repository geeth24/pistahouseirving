"use client"

import Link from "next/link"
import Image from "next/image"
import { useState, useEffect } from "react"
import { motion, AnimatePresence, useReducedMotion } from "framer-motion"
import { analytics } from "@/components/Firebase"
import { logEvent } from "firebase/analytics"
import { FaArrowRight, FaUtensils, FaCalendarAlt, FaUserFriends, FaMoon, FaStar, FaQuoteLeft, FaYelp, FaPhone } from "react-icons/fa"

const heroSlides = [
    { image: "/Biryani.jpeg", alt: "Hyderabadi dum biryani" },
    { image: "/Kebabs.jpeg", alt: "Fresh grilled kebabs" },
    { image: "/slides/3.jpg", alt: "Authentic Indian cuisine" },
]

const signatureDishes = [
    { name: "Hyderabadi Dum Biryani", image: "/Biryani.jpeg", description: "Slow-cooked aromatic basmati layered with tender meat and a secret blend of spices.", tag: "Signature" },
    { name: "Seekh Kebabs", image: "/Kebabs.jpeg", description: "Minced meat skewers, charred over open flame.", tag: "Popular" },
    { name: "Haleem", image: "/haleem.png", description: "A rich, slow-cooked delicacy of wheat, lentils and meat.", tag: "Seasonal" },
]

const features = [
    { icon: <FaUtensils />, title: "Authentic recipes", description: "Traditional Hyderabadi flavors passed down through generations." },
    { icon: <FaCalendarAlt />, title: "Event catering", description: "From intimate gatherings to celebrations of 500 and more." },
    { icon: <FaUserFriends />, title: "Family dining", description: "A warm room built for long meals and good company." },
    { icon: <FaMoon />, title: "Open till 2 AM", description: "Late-night biryani, haleem and Irani chai, every day." },
]

const testimonials = [
    { name: "Sandeep G.", image: "/reviewer1.png", rating: 5, text: "The Chicken Dum Biryani here is hands down the best in the DFW area. Reminds me exactly of Hyderabad." },
    { name: "Anjali K.", image: "/reviewer2.png", rating: 5, text: "We came in at 1 AM and the Haleem was fresh and delicious. The late-night service is unmatched." },
    { name: "Rahul M.", image: "/reviewer3.png", rating: 5, text: "Authentic Irani chai and Osmania cookies. My go-to spot for an evening snack and great kebabs." },
]

export default function Home() {
    const [logged, setLogged] = useState(false)
    const [currentSlide, setCurrentSlide] = useState(0)
    const reduce = useReducedMotion()

    useEffect(() => {
        if (process.env.NEXT_PUBLIC_ENVIRONMENT === "production") {
            if (!logged) {
                logEvent(analytics, "page_view", {
                    page_title: "Home",
                    page_location: "https://www.pistahouseirving.com/",
                    page_path: "/",
                })
                setLogged(true)
            }
        } else if (!logged) {
            console.log("development")
            setLogged(true)
        }
    }, [logged])

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % heroSlides.length)
        }, 5000)
        return () => clearInterval(interval)
    }, [])

    const reveal = {
        initial: reduce ? {} : { opacity: 0, y: 24 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true, amount: 0.3 },
        transition: { duration: 0.6, ease: [0.23, 1, 0.32, 1] as const },
    }

    return (
        <>
            {/* hero */}
            <section className="container-padding mx-auto grid min-h-[calc(100dvh-72px)] grid-cols-1 items-center gap-10 py-12 lg:grid-cols-[1.05fr_0.95fr] lg:py-16">
                <motion.div
                    initial={reduce ? {} : { opacity: 0, y: 28 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, ease: [0.23, 1, 0.32, 1] }}
                >
                    <span className="inline-flex items-center gap-2 rounded-full border border-primary/25 bg-primary/8 px-4 py-1.5 text-sm font-medium text-primary-dark">
                        Authentic Hyderabadi kitchen
                    </span>
                    <h1 className="mt-6 font-display text-[3.6rem] font-extrabold leading-[0.92] tracking-[-0.03em] text-ink sm:text-7xl lg:text-[5.6rem]">
                        Where every bite tells a <span className="text-primary">story</span>
                    </h1>
                    <p className="mt-7 max-w-md text-lg leading-relaxed text-ink-soft">
                        Royal flavors of Hyderabad in Irving, Texas. Legendary dum biryani, sizzling kebabs, and late-night Irani chai.
                    </p>
                    <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                        <Link href="/menu" className="primary-button group">
                            Explore the menu
                            <FaArrowRight className="text-sm transition-transform group-hover:translate-x-1" />
                        </Link>
                        <Link href="/catering" className="outline-button">Book catering</Link>
                    </div>
                </motion.div>

                <motion.div
                    className="relative h-[60vh] min-h-[420px] lg:h-[78vh]"
                    initial={reduce ? {} : { opacity: 0, scale: 0.97 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
                >
                    <div className="relative h-full w-full overflow-hidden rounded-[2rem] border border-ink/10 shadow-[0_30px_80px_-30px_rgba(29,27,22,0.35)]">
                        <AnimatePresence mode="sync">
                            <motion.div
                                key={currentSlide}
                                className="absolute inset-0"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 0.9 }}
                            >
                                <Image src={heroSlides[currentSlide].image} alt={heroSlides[currentSlide].alt} fill priority className="object-cover" sizes="(max-width: 1024px) 100vw, 50vw" />
                            </motion.div>
                        </AnimatePresence>
                    </div>
                    {/* floating detail */}
                    <div className="absolute -bottom-5 -left-3 flex items-center gap-3 rounded-2xl border border-ink/10 bg-background-card px-5 py-3 shadow-xl sm:-left-5">
                        <div className="flex">
                            {[...Array(5)].map((_, i) => <FaStar key={i} className="text-sm text-accent" />)}
                        </div>
                        <span className="text-sm font-medium text-ink">Loved across DFW</span>
                    </div>
                </motion.div>
            </section>

            {/* signature dishes */}
            <section className="container-padding mx-auto section-padding">
                <motion.div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between" {...reveal}>
                    <h2 className="max-w-xl font-display text-4xl text-ink md:text-5xl">The dishes people drive across Dallas for</h2>
                    <Link href="/menu" className="group inline-flex items-center gap-2 font-medium text-primary-dark transition-colors hover:text-primary">
                        View full menu <FaArrowRight className="text-sm transition-transform group-hover:translate-x-1" />
                    </Link>
                </motion.div>

                <div className="mt-12 grid grid-cols-1 gap-5 lg:grid-cols-2">
                    {/* feature dish */}
                    <motion.article className="group relative overflow-hidden rounded-2xl border border-ink/10 lg:row-span-2" {...reveal}>
                        <div className="relative h-72 overflow-hidden lg:h-full lg:min-h-[460px]">
                            <Image src={signatureDishes[0].image} alt={signatureDishes[0].name} fill className="object-cover transition-transform duration-700 group-hover:scale-105" sizes="(max-width: 1024px) 100vw, 50vw" />
                            <div className="absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/20 to-transparent" />
                        </div>
                        <div className="absolute inset-x-0 bottom-0 p-7">
                            <span className="rounded-full bg-primary px-3 py-1 text-xs font-semibold text-text-inverse">{signatureDishes[0].tag}</span>
                            <h3 className="mt-4 font-display text-3xl text-background md:text-4xl">{signatureDishes[0].name}</h3>
                            <p className="mt-2 max-w-md text-background/80">{signatureDishes[0].description}</p>
                        </div>
                    </motion.article>

                    {/* supporting */}
                    {signatureDishes.slice(1).map((dish) => (
                        <motion.article key={dish.name} className="group relative overflow-hidden rounded-2xl border border-ink/10" {...reveal}>
                            <div className="relative h-56 overflow-hidden sm:h-64">
                                <Image src={dish.image} alt={dish.name} fill className="object-cover transition-transform duration-700 group-hover:scale-105" sizes="(max-width: 1024px) 100vw, 50vw" />
                                <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/15 to-transparent" />
                            </div>
                            <div className="absolute inset-x-0 bottom-0 p-6">
                                <span className="rounded-full bg-background/90 px-3 py-1 text-xs font-semibold text-ink">{dish.tag}</span>
                                <h3 className="mt-3 font-display text-2xl text-background">{dish.name}</h3>
                                <p className="mt-1 text-sm text-background/80">{dish.description}</p>
                            </div>
                        </motion.article>
                    ))}
                </div>
            </section>

            {/* the difference - bento */}
            <section className="bg-background-dark">
                <div className="container-padding mx-auto section-padding">
                    <motion.h2 className="max-w-2xl font-display text-4xl text-ink md:text-5xl" {...reveal}>
                        Twenty years of getting the details right
                    </motion.h2>

                    <div className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-3 md:grid-rows-2">
                        {/* tall photo cell */}
                        <motion.div className="relative overflow-hidden rounded-2xl border border-ink/10 md:row-span-2 md:min-h-[420px]" {...reveal}>
                            <Image src="/slides/5.jpg" alt="Kebabs on the grill" fill className="object-cover" sizes="(max-width: 768px) 100vw, 33vw" />
                            <div className="absolute inset-0 bg-gradient-to-t from-ink/85 to-transparent" />
                            <div className="absolute inset-x-0 bottom-0 p-6">
                                <p className="font-display text-2xl text-background">Cooked to order, the way it should be</p>
                            </div>
                        </motion.div>

                        {/* feature cells */}
                        {features.slice(0, 2).map((f) => (
                            <motion.div key={f.title} className="rounded-2xl border border-ink/10 bg-background-card p-7" {...reveal}>
                                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-xl text-primary-dark">{f.icon}</div>
                                <h3 className="mt-5 font-display text-2xl text-ink">{f.title}</h3>
                                <p className="mt-2 text-ink-soft">{f.description}</p>
                            </motion.div>
                        ))}

                        {/* green emphasis cell */}
                        <motion.div className="rounded-2xl bg-primary-dark p-7 text-text-inverse" {...reveal}>
                            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/15 text-xl">{features[3].icon}</div>
                            <h3 className="mt-5 font-display text-2xl">{features[3].title}</h3>
                            <p className="mt-2 text-text-inverse/80">{features[3].description}</p>
                        </motion.div>

                        {/* family cell */}
                        <motion.div className="rounded-2xl border border-ink/10 bg-background-card p-7" {...reveal}>
                            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-xl text-primary-dark">{features[2].icon}</div>
                            <h3 className="mt-5 font-display text-2xl text-ink">{features[2].title}</h3>
                            <p className="mt-2 text-ink-soft">{features[2].description}</p>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* ambiance */}
            <section className="container-padding mx-auto section-padding">
                <div className="grid items-center gap-12 lg:grid-cols-2">
                    <motion.div {...reveal}>
                        <h2 className="font-display text-4xl text-ink md:text-5xl">Step inside the room</h2>
                        <p className="mt-5 max-w-md text-lg leading-relaxed text-ink-soft">
                            Traditional Indian hospitality meets a comfortable, modern dining room. The right setting for family dinners, celebrations, and easy weeknight meals.
                        </p>
                        <ul className="mt-7 space-y-3">
                            {["Spacious dining area", "Private event space", "Family-friendly environment", "Dine-in, takeout & catering"].map((item) => (
                                <li key={item} className="flex items-center gap-3 text-ink-soft">
                                    <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                                    {item}
                                </li>
                            ))}
                        </ul>
                        <Link href="/aboutus" className="group mt-8 inline-flex items-center gap-2 font-medium text-primary-dark transition-colors hover:text-primary">
                            More about us <FaArrowRight className="text-sm transition-transform group-hover:translate-x-1" />
                        </Link>
                    </motion.div>

                    <motion.div className="grid grid-cols-2 gap-4" {...reveal}>
                        <div className="space-y-4">
                            <div className="relative h-48 overflow-hidden rounded-2xl border border-ink/10"><Image src="/slides/6.jpg" alt="Restaurant interior" fill className="object-cover" sizes="25vw" /></div>
                            <div className="relative h-60 overflow-hidden rounded-2xl border border-ink/10"><Image src="/slides/8.jpg" alt="Food preparation" fill className="object-cover" sizes="25vw" /></div>
                        </div>
                        <div className="space-y-4 pt-8">
                            <div className="relative h-60 overflow-hidden rounded-2xl border border-ink/10"><Image src="/building.jpg" alt="Pista House Irving building" fill className="object-cover" sizes="25vw" /></div>
                            <div className="relative h-48 overflow-hidden rounded-2xl border border-ink/10"><Image src="/slides/10.jpg" alt="Dining experience" fill className="object-cover" sizes="25vw" /></div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* testimonials */}
            <section className="bg-background-dark">
                <div className="container-padding mx-auto section-padding">
                    <motion.div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between" {...reveal}>
                        <h2 className="max-w-lg font-display text-4xl text-ink md:text-5xl">Loved across DFW</h2>
                        <Link href="https://www.yelp.com/biz/pista-house-irving" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 self-start rounded-full border border-ink/15 px-4 py-2 text-sm font-medium text-ink transition-colors hover:border-primary/40 hover:text-primary-dark">
                            <FaYelp className="text-[#d32323]" /> Read more on Yelp
                        </Link>
                    </motion.div>

                    <div className="mt-12 grid grid-cols-1 gap-5 lg:grid-cols-3">
                        {/* featured */}
                        <motion.figure className="rounded-2xl border border-ink/10 bg-background-card p-8 lg:col-span-2" {...reveal}>
                            <FaQuoteLeft className="text-3xl text-primary/30" />
                            <blockquote className="mt-5 font-display text-2xl leading-snug text-ink md:text-3xl">
                                &ldquo;{testimonials[0].text}&rdquo;
                            </blockquote>
                            <figcaption className="mt-6 flex items-center gap-4">
                                <span className="relative h-12 w-12 overflow-hidden rounded-full border border-ink/10">
                                    <Image src={testimonials[0].image} alt={testimonials[0].name} fill className="object-cover" sizes="48px" />
                                </span>
                                <span>
                                    <span className="block font-medium text-ink">{testimonials[0].name}</span>
                                    <span className="flex gap-0.5">{[...Array(5)].map((_, i) => <FaStar key={i} className="text-xs text-accent" />)}</span>
                                </span>
                            </figcaption>
                        </motion.figure>

                        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-1">
                            {testimonials.slice(1).map((t) => (
                                <motion.figure key={t.name} className="rounded-2xl border border-ink/10 bg-background-card p-6" {...reveal}>
                                    <p className="text-ink-soft">&ldquo;{t.text}&rdquo;</p>
                                    <figcaption className="mt-4 flex items-center gap-3">
                                        <span className="relative h-9 w-9 overflow-hidden rounded-full border border-ink/10">
                                            <Image src={t.image} alt={t.name} fill className="object-cover" sizes="36px" />
                                        </span>
                                        <span className="text-sm font-medium text-ink">{t.name}</span>
                                    </figcaption>
                                </motion.figure>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* catering cta */}
            <section className="container-padding mx-auto pb-24 pt-8 md:pb-32">
                <motion.div className="relative overflow-hidden rounded-[2rem] bg-primary-dark px-6 py-16 text-center md:px-12 md:py-24" {...reveal}>
                    <div className="absolute inset-0 opacity-25">
                        <Image src="/cater.jpeg" alt="" fill className="object-cover" sizes="100vw" />
                        <div className="absolute inset-0 bg-primary-dark/70" />
                    </div>
                    <div className="relative mx-auto max-w-2xl">
                        <h2 className="font-display text-4xl text-text-inverse md:text-5xl lg:text-6xl">Make your event unforgettable</h2>
                        <p className="mx-auto mt-5 max-w-xl text-lg text-text-inverse/85">
                            From weddings to corporate gatherings, we bring the authentic taste of Hyderabad to your celebration.
                        </p>
                        <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
                            <Link href="/catering" className="inline-flex items-center justify-center gap-2 rounded-full bg-background px-7 py-3 font-medium text-primary-dark transition-transform duration-200 hover:bg-background-card active:scale-[0.97]">
                                Explore catering <FaArrowRight className="text-sm" />
                            </Link>
                            <a href="tel:9726355657" className="inline-flex items-center justify-center gap-2 rounded-full border border-text-inverse/40 px-7 py-3 font-medium text-text-inverse transition-colors hover:bg-white/10">
                                <FaPhone className="text-sm" /> (972) 635-5657
                            </a>
                        </div>
                    </div>
                </motion.div>
            </section>
        </>
    )
}
