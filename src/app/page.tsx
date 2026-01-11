'use client'

import { useEffect, useState } from 'react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { ScrollArea } from '@/components/ui/scroll-area'
import { ArrowRight, ArrowDown, Eye, Heart, Sparkles, Menu, X, ChevronRight, Quote } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

export default function Home() {
  const [currentSection, setCurrentSection] = useState(0)
  const [showMenu, setShowMenu] = useState(false)

  const sections = [
    { id: 'hero', title: 'START', icon: Sparkles },
    { id: 'question', title: 'THE QUESTION', icon: Heart },
    { id: 'scene1', title: 'MIRROR', icon: Eye },
    { id: 'scene2', title: 'ENCOUNTER', icon: Heart },
    { id: 'heart', title: 'INTENT', icon: Sparkles },
    { id: 'divine', title: 'PRINCIPLE', icon: Sparkles },
    { id: 'choice', title: 'CHOICE', icon: ArrowRight },
    { id: 'multiplication', title: 'EFFECT', icon: Sparkles },
    { id: 'steps', title: 'STEPS', icon: ChevronRight },
  ]

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 2
      const newSection = sections.findIndex((section, index) => {
        const element = document.getElementById(section.id)
        if (!element) return false
        const nextElement = document.getElementById(sections[index + 1]?.id)
        if (index === sections.length - 1) return true
        return scrollPosition >= element.offsetTop && scrollPosition < (nextElement?.offsetTop || Infinity)
      })
      if (newSection !== -1) {
        setCurrentSection(newSection)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [sections])

  const scrollToSection = (index: number) => {
    const element = document.getElementById(sections[index].id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setShowMenu(false)
    }
  }

  return (
    <div className="min-h-screen bg-background relative overflow-x-hidden">
      {/* Brutalist Background Pattern */}
      <div className="fixed inset-0 brutal-grid-lines pointer-events-none" />

      {/* Navigation - Brutalist Style */}
      <nav className="fixed top-0 left-0 right-0 z-50 border-b-3 border-border bg-background/95 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <motion.h1
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="brutal-heading-lg uppercase tracking-widest"
            >
              Mirror <span className="text-primary">{`///`}</span> Encounter
            </motion.h1>
            <div className="flex items-center gap-4">
              <Button
                onClick={() => scrollToSection(Math.min(currentSection + 1, sections.length - 1))}
                className="brutal-button-outline px-6 py-3 hidden sm:inline-flex"
              >
                NEXT <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button
                onClick={() => setShowMenu(!showMenu)}
                className="brutal-button-outline p-3 sm:hidden"
              >
                {showMenu ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {showMenu && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="fixed top-16 left-0 right-0 z-40 bg-background border-b-3 border-border sm:hidden"
          >
            <ScrollArea className="max-h-[60vh]">
              <div className="p-4 space-y-2">
                {sections.map((section, index) => (
                  <button
                    key={section.id}
                    onClick={() => scrollToSection(index)}
                    className={`w-full text-left p-4 border-3 ${
                      currentSection === index
                        ? 'border-primary bg-primary text-primary-foreground'
                        : 'border-border hover:border-primary'
                    } transition-all`}
                  >
                    <span className="brutal-body-base uppercase tracking-widest font-bold">
                      0{index + 1}. {section.title}
                    </span>
                  </button>
                ))}
              </div>
            </ScrollArea>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Brutalist Progress Indicator */}
      <div className="fixed top-0 left-0 right-0 z-50 h-1 bg-border">
        <motion.div
          className="h-full bg-primary"
          initial={{ width: 0 }}
          animate={{ width: `${((currentSection + 1) / sections.length) * 100}%` }}
          transition={{ duration: 0.5 }}
        />
      </div>

      {/* Side Navigation - Brutalist Desktop */}
      <nav className="fixed right-6 top-1/2 -translate-y-1/2 z-40 hidden lg:flex flex-col gap-3">
        {sections.map((section, index) => (
          <motion.button
            key={section.id}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.05 }}
            onClick={() => scrollToSection(index)}
            className={`relative w-14 h-14 border-3 font-bold text-sm transition-all ${
              currentSection === index
                ? 'border-primary bg-primary text-primary-foreground'
                : 'border-border bg-background hover:border-primary'
            }`}
            title={section.title}
          >
            <span className="absolute inset-0 flex items-center justify-center">
              0{index + 1}
            </span>
          </motion.button>
        ))}
      </nav>

      {/* Main Content */}
      <main className="pt-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-8">
          {/* Hero Section - Brutalist Impact */}
          <section id="hero" className="min-h-screen flex items-center py-20">
            <div className="w-full">
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="grid lg:grid-cols-12 gap-8 items-center"
              >
                <div className="lg:col-span-8 space-y-8">
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    className="inline-block"
                  >
                    <Badge className="brutal-badge-primary">
                      <Sparkles className="w-4 h-4 mr-2" />
                      Interactive Experience
                    </Badge>
                  </motion.div>

                  <div className="space-y-4">
                    <h1 className="brutal-display-xl uppercase">
                      The Mirror
                      <span className="text-primary block">{`///`}</span>
                      The Encounter
                    </h1>
                    <p className="brutal-heading-lg text-muted-foreground max-w-2xl">
                      An Interactive Journey of True Self-Discovery
                    </p>
                  </div>

                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.4 }}
                    className="brutal-body-lg max-w-xl text-muted-foreground"
                  >
                    Explore the profound choice between self-love and blessing others.
                    Discover the path to true fulfillment through human connection.
                  </motion.p>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 }}
                    className="flex flex-wrap gap-4"
                  >
                    <Button
                      onClick={() => scrollToSection(1)}
                      className="brutal-button-primary px-8 py-4 text-lg"
                    >
                      Begin Journey
                      <ArrowRight className="ml-3 h-5 w-5" />
                    </Button>
                    <Button
                      onClick={() => scrollToSection(2)}
                      className="brutal-button-outline px-8 py-4 text-lg"
                    >
                      Read More
                    </Button>
                  </motion.div>
                </div>

                <div className="lg:col-span-4 hidden lg:block">
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.4 }}
                    className="brutal-card p-8 relative"
                  >
                    <div className="space-y-6">
                      <div className="w-20 h-20 border-3 border-primary flex items-center justify-center">
                        <Eye className="w-10 h-10 text-primary" />
                      </div>
                      <div>
                        <p className="brutal-body-sm uppercase tracking-widest text-muted-foreground mb-2">
                          Total Sections
                        </p>
                        <p className="brutal-display-lg text-primary">
                          09
                        </p>
                      </div>
                      <div className="brutal-separator" />
                      <p className="brutal-body-sm text-muted-foreground">
                        Interactive journey exploring the profound choice between self-focus and blessing others
                      </p>
                    </div>
                  </motion.div>
                </div>
              </motion.div>

              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ repeat: Infinity, duration: 2 }}
                className="pt-16 flex justify-center"
              >
                <ArrowDown className="w-8 h-8 text-muted-foreground" />
              </motion.div>
            </div>
          </section>

          {/* The Question - Brutalist Layout */}
          <section id="question" className="min-h-screen py-32">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="grid lg:grid-cols-12 gap-12"
            >
              <div className="lg:col-span-4 space-y-6">
                <div className="brutal-card-compact p-6">
                  <Heart className="w-12 h-12 text-primary mb-4" />
                  <p className="brutal-body-sm uppercase tracking-widest text-muted-foreground">
                    Section 01
                  </p>
                  <h2 className="brutal-heading-lg">
                    The Question That Changes Everything
                  </h2>
                </div>

                <div className="space-y-4">
                  <div className="brutal-badge">🎯 Key Insight</div>
                  <p className="brutal-body-sm text-muted-foreground">
                    Self-love can become self-centeredness when prioritized above all else
                  </p>
                </div>
              </div>

              <div className="lg:col-span-8 space-y-8">
                <div className="brutal-card p-8 space-y-6">
                  <p className="brutal-body-lg">
                    We live in an age where <strong className="border-b-3 border-primary">"love yourself"</strong> has become the golden mantra for happiness. Social media feeds overflow with self-affirmation quotes, mirror selfies, and declarations of self-worth.
                  </p>

                  <p className="brutal-body-lg">
                    Yet beneath this surface of self-celebration, many find themselves feeling more <span className="line-through opacity-50">isolated</span>, more <span className="line-through opacity-50">fragile</span>, and more desperate for validation than ever before.
                  </p>

                  <div className="brutal-separator" />

                  <div className="brutal-blockquote p-6 bg-muted/30 border-3 border-primary">
                    <p className="brutal-body-base italic">
                      Could it be that our pursuit of self-love has led us down a path that ultimately separates us from the very joy we seek?
                    </p>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="brutal-card-compact p-6">
                    <h3 className="brutal-heading-lg mb-4 text-primary">The Problem</h3>
                    <p className="brutal-body-base">
                      When self-love becomes our highest priority, it risks transforming into self-centeredness, pride, and a blindness to others.
                    </p>
                  </div>

                  <div className="brutal-card-compact p-6 border-primary">
                    <h3 className="brutal-heading-lg mb-4 text-primary">The Alternative</h3>
                    <p className="brutal-body-base">
                      A path that leads not to the empty echo of our own voice, but to the rich symphony of human connection and divine blessing.
                    </p>
                  </div>
                </div>

                <div className="brutal-card p-6 bg-primary text-primary-foreground">
                  <h3 className="brutal-heading-lg mb-4 flex items-center gap-2">
                    <Sparkles className="w-6 h-6" />
                    Key Takeaways
                  </h3>
                  <ul className="space-y-3">
                    {[
                      "Self-love can become self-centeredness when prioritized above all else",
                      "True fulfillment comes through human connection, not isolation",
                      "There's an alternative path that leads to genuine joy and blessing"
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-3 stagger-item">
                        <span className="text-xl">→</span>
                        <span className="brutal-body-base">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          </section>

          {/* Scene 1: The Mirror - Brutalist Contrast */}
          <section id="scene1" className="min-h-screen py-32 bg-muted/30">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="space-y-12"
            >
              <div className="text-center space-y-6">
                <Badge className="brutal-badge text-lg px-6 py-3">SECTION 02</Badge>
                <h2 className="brutal-display-lg uppercase">
                  Scene 1: <span className="text-primary">The Mirror's Deception</span>
                </h2>
              </div>

              <div className="grid lg:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <div className="brutal-card p-8">
                    <Eye className="w-16 h-16 text-primary mb-6" />
                    <p className="brutal-body-lg mb-4">
                      Imagine this familiar moment: You stand before your bathroom mirror each morning, perhaps still groggy from sleep, hair disheveled, searching for something to lift your spirits.
                    </p>
                    <div className="brutal-card-compact p-4 my-6">
                      <p className="brutal-heading-lg text-center italic">
                        "Good morning. You look great today."
                      </p>
                    </div>
                    <p className="brutal-body-base">
                      The words hang in the air, and for a brief moment, you might feel a gentle lift, a small spark of encouragement. 😊
                    </p>
                  </div>

                  <div className="brutal-card-compact p-6 bg-destructive/10">
                    <h3 className="brutal-heading-lg mb-4 text-destructive">The Reality</h3>
                    <p className="brutal-body-base">
                      As you turn away from the mirror and move through your day, how long does that feeling truly last? Minutes? Hours? Or does it fade like morning mist, leaving you somehow emptier than before?
                    </p>
                  </div>
                </div>

                <div className="space-y-6">
                  <div className="brutal-card p-8">
                    <h3 className="brutal-heading-xl mb-6 uppercase tracking-widest">
                      Psychology Behind the Mirror
                    </h3>
                    <p className="brutal-body-base mb-4">
                      What we're experiencing here is what psychologists call:
                    </p>
                    <div className="brutal-card-compact p-4 bg-primary text-primary-foreground mb-4">
                      <p className="brutal-heading-lg text-center">
                        "defensive self-esteem"
                      </p>
                    </div>
                    <p className="brutal-body-base mb-4">
                      A fragile sense of worth that requires constant maintenance and protection.
                    </p>
                    <p className="brutal-body-base text-muted-foreground">
                      When we rely primarily on self-affirmation, we create an echo chamber of our own making. We speak, our reflection appears to respond, but in reality, we're trapped in a monologue disguised as dialogue.
                    </p>
                  </div>

                  <div className="brutal-card p-6">
                    <p className="brutal-body-base mb-4">
                      The mirror can only reflect what we bring to it; it cannot:
                    </p>
                    <ul className="space-y-3">
                      {[
                        "Surprise us with genuine love",
                        "Challenge us to grow",
                        "Offer authentic human connection"
                      ].map((item, i) => (
                        <li key={i} className="flex items-start gap-3 stagger-item brutal-body-base">
                          <span className="text-primary font-bold">✕</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              <div className="brutal-card p-8">
                <h3 className="brutal-heading-lg mb-6 uppercase tracking-widest flex items-center gap-3">
                  <Quote className="w-8 h-8 text-primary" />
                  Interactive Reflection
                </h3>
                <div className="grid md:grid-cols-3 gap-6">
                  {[
                    "How much time do you spend focused on yourself—appearance, achievements, feelings, needs?",
                    "Do you find yourself needing more and more validation to achieve the same emotional lift?",
                    "What does this pattern reveal about the sustainability of self-focused happiness?"
                  ].map((question, i) => (
                    <div key={i} className="brutal-card-compact p-6 stagger-item">
                      <p className="brutal-body-base">{question}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="brutal-card p-6 bg-primary text-primary-foreground">
                <h3 className="brutal-heading-lg mb-4">Key Takeaways</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  {[
                    "Mirror self-affirmation creates temporary feelings that fade quickly",
                    "Defensive self-esteem requires constant maintenance and protection",
                    "Mirrors cannot provide genuine connection or challenge us to grow",
                    "Self-focus can lead to isolation and vulnerability"
                  ].map((item, i) => (
                    <div key={i} className="p-3 border-2 border-primary-foreground/30 stagger-item">
                      <p className="brutal-body-sm">→ {item}</p>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </section>

          {/* Scene 2: The Encounter - Transformation */}
          <section id="scene2" className="min-h-screen py-32">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="space-y-12"
            >
              <div className="text-center space-y-6">
                <Badge className="brutal-badge-primary text-lg px-6 py-3">SECTION 03</Badge>
                <h2 className="brutal-display-lg uppercase">
                  Scene 2: <span className="text-primary">The Encounter That Transforms</span>
                </h2>
              </div>

              <div className="grid lg:grid-cols-2 gap-8 items-start">
                <div className="space-y-6">
                  <div className="brutal-card p-8 border-primary">
                    <h3 className="brutal-heading-xl mb-6 uppercase tracking-widest text-primary">
                      A Radically Different Scenario
                    </h3>
                    <p className="brutal-body-lg mb-6">
                      Instead of spending those precious morning moments in conversation with your reflection, you step outside and encounter another person.
                    </p>
                    <p className="brutal-body-base mb-4">
                      Perhaps it's:
                    </p>
                    <ul className="space-y-3 mb-6">
                      {[
                        "A neighbor rushing to work",
                        "A security guard beginning their shift",
                        "A child waiting for the school bus"
                      ].map((item, i) => (
                        <li key={i} className="flex items-start gap-3 stagger-item brutal-body-base">
                          <span className="text-primary font-bold">→</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="brutal-card-compact p-4 bg-primary text-primary-foreground my-6">
                      <p className="brutal-heading-lg text-center">
                        "Good morning! You look great today."
                      </p>
                    </div>
                    <p className="brutal-body-base">
                      Look them in the eye and offer those same words, but this time directed outward. 😊
                    </p>
                  </div>
                </div>

                <div className="space-y-6">
                  <div className="brutal-card p-8 bg-primary text-primary-foreground">
                    <h3 className="brutal-heading-xl mb-6 uppercase tracking-widest">
                      The Moment of Truth
                    </h3>
                    <p className="brutal-body-base mb-4">
                      Even in imagining this encounter, something profound occurs that <span className="border-b-2 border-primary-foreground">never happens with the mirror</span>.
                    </p>
                    <p className="brutal-body-lg mb-6">
                      You've created a <strong>genuine human connection</strong>.
                    </p>
                    <p className="brutal-body-base mb-4">
                      You've seen another person—truly seen them—and chosen to bless them with your words.
                    </p>
                    <p className="brutal-body-base">
                      This wasn't about inflating your own ego or seeking validation for yourself. You offered genuine kindness, took conscious and intentional action to plant a seed of love.
                    </p>
                  </div>

                  <div className="brutal-card-compact p-6">
                    <p className="brutal-body-base mb-4">
                      Where the mirror left you feeling temporarily elevated but ultimately empty, this genuine act of kindness creates a <span className="text-primary font-bold border-b-3 border-primary">resonance that echoes in both hearts</span>. ❤️
                    </p>
                  </div>

                  <div className="brutal-card p-6">
                    <h3 className="brutal-heading-lg mb-4">The Ripple Effect</h3>
                    <p className="brutal-body-base mb-4">
                      The person you blessed will carry that moment with them. Their experience of your kindness will likely influence how they treat others throughout their day, creating <strong>ripples of positivity</strong> that extend far beyond your initial interaction.
                    </p>
                    <p className="brutal-body-base text-muted-foreground">
                      They will remember you, not because you demanded their attention, but because you freely gave them yours. 🌊
                    </p>
                  </div>
                </div>
              </div>

              <div className="brutal-card p-8">
                <h3 className="brutal-heading-lg mb-6 uppercase tracking-widest flex items-center gap-3">
                  <Quote className="w-8 h-8 text-primary" />
                  Interactive Visualization
                </h3>
                <p className="brutal-body-lg mb-6">
                  Close your eyes and imagine three specific people you encounter regularly. Picture yourself offering each of them a genuine compliment or word of encouragement.
                </p>
                <div className="brutal-card-compact p-6 bg-muted/30">
                  <p className="brutal-heading-lg text-primary text-center">
                    How does this make you feel compared to giving the same affirmation to your mirror reflection?
                  </p>
                </div>
              </div>

              <div className="brutal-card p-6 bg-primary text-primary-foreground">
                <h3 className="brutal-heading-lg mb-4">Key Takeaways</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  {[
                    "Genuine connection creates resonance that echoes in both hearts",
                    "Acts of kindness have ripple effects beyond the initial interaction",
                    "Blessing others provides deeper joy than self-affirmation",
                    "People remember those who freely give attention"
                  ].map((item, i) => (
                    <div key={i} className="p-3 border-2 border-primary-foreground/30 stagger-item">
                      <p className="brutal-body-sm">→ {item}</p>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </section>

          {/* The Heart's Intent */}
          <section id="heart" className="min-h-screen py-32 bg-muted/30">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="space-y-12"
            >
              <div className="grid lg:grid-cols-12 gap-12 items-center">
                <div className="lg:col-span-4 space-y-6">
                  <Badge className="brutal-badge text-lg px-6 py-3">SECTION 04</Badge>
                  <h2 className="brutal-display-md uppercase">
                    The Heart's <span className="text-primary">Intent</span>
                  </h2>
                  <p className="brutal-body-lg text-muted-foreground">
                    Where Transformation Begins
                  </p>
                  <div className="brutal-card-compact p-6">
                    <p className="brutal-heading-lg text-primary mb-2">1 Samuel 16:7</p>
                    <p className="brutal-body-sm italic">
                      "God looks at the heart, not merely at outward actions."
                    </p>
                  </div>
                </div>

                <div className="lg:col-span-8 space-y-6">
                  <div className="brutal-card p-8">
                    <h3 className="brutal-heading-xl mb-6 uppercase tracking-widest">
                      The Divine Perspective on Human Motivation
                    </h3>
                    <p className="brutal-body-lg mb-6">
                      Our intentions matter profoundly in determining both our spiritual condition and our emotional well-being.
                    </p>
                    <div className="grid md:grid-cols-2 gap-6 mb-6">
                      <div className="brutal-card-compact p-6 bg-destructive/10">
                        <h4 className="brutal-heading-lg mb-3 text-destructive">Resentment</h4>
                        <p className="brutal-body-sm">
                          Like <em>drinking poison and expecting the other person to suffer</em>. It consumes us from within, distorting our perception of reality.
                        </p>
                      </div>
                      <div className="brutal-card-compact p-6 bg-primary/10 border-primary">
                        <h4 className="brutal-heading-lg mb-3 text-primary">Blessing Others</h4>
                        <p className="brutal-body-sm">
                          Like <em>opening a window in a stuffy room</em>—it allows fresh air to flow through our souls, refreshing our spirits. 🌿
                        </p>
                      </div>
                    </div>
                    <p className="brutal-body-base">
                      When we hold grudges, we poison our own souls with bitterness. When we choose kindness, we align ourselves with God's character and invite His grace to flow through us. 🙏
                    </p>
                  </div>

                  <div className="brutal-card p-8">
                    <h3 className="brutal-heading-xl mb-6 uppercase tracking-widest">
                      The Biblical Foundation
                    </h3>
                    <div className="brutal-card-compact p-6 my-6 bg-primary text-primary-foreground">
                      <p className="brutal-body-base leading-relaxed text-center">
                        "Love the Lord your God with all your heart and with all your soul and with all your mind. This is the first and greatest commandment. And the second is like it: Love your neighbor as yourself."
                      </p>
                      <p className="brutal-body-sm mt-3 opacity-80">
                        Matthew 22:37-39
                      </p>
                    </div>
                    <p className="brutal-body-base mb-4">
                      Notice the order and the balance—love for God comes first, love for neighbor second, and self-love is the <strong className="border-b-2 border-primary-foreground">baseline, not the destination</strong>.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </section>

          {/* The Divine Principle */}
          <section id="divine" className="min-h-screen py-32">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="space-y-12"
            >
              <div className="text-center space-y-6">
                <Badge className="brutal-badge-primary text-lg px-6 py-3">SECTION 05</Badge>
                <h2 className="brutal-display-lg uppercase">
                  The Divine <span className="text-primary">Principle</span>
                </h2>
                <p className="brutal-heading-xl text-muted-foreground">
                  The Mathematics of Blessing
                </p>
              </div>

              <div className="brutal-card p-8">
                <h3 className="brutal-heading-xl mb-6 uppercase tracking-widest text-center">
                  Luke 6:38
                </h3>
                <div className="brutal-card-compact p-8 my-6 bg-primary text-primary-foreground">
                  <p className="brutal-body-lg leading-relaxed text-center">
                    "Give, and it will be given to you. A good measure, pressed down, shaken together and running over, will be poured into your lap. For with the measure you use, it will be measured to you."
                  </p>
                </div>
                <p className="brutal-body-base text-center">
                  This isn't a transactional formula where we give in order to receive—it's a description of <strong className="border-b-3 border-primary">how God's kingdom operates</strong>. 🌿
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                  {
                    title: "Immediate Level",
                    content: "When we bless others, we experience immediate joy and satisfaction that far exceeds self-affirmation."
                  },
                  {
                    title: "Relational Level",
                    content: "Our acts of blessing create positive relationships and social connections that enrich our lives."
                  },
                  {
                    title: "Spiritual Level",
                    content: "We align ourselves with God's command to love our neighbor as ourselves."
                  },
                  {
                    title: "Eternal Level",
                    content: "Our acts of blessing have eternal significance, fulfilling the law of Christ."
                  }
                ].map((level, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                  >
                    <div className="brutal-card h-full p-6">
                      <h4 className="brutal-heading-lg mb-4 text-primary">{level.title}</h4>
                      <p className="brutal-body-sm">{level.content}</p>
                    </div>
                  </motion.div>
                ))}
              </div>

              <div className="brutal-card p-8 bg-primary text-primary-foreground">
                <h3 className="brutal-heading-lg mb-4">Interactive Application</h3>
                <p className="brutal-body-base mb-6">
                  Choose one person in your life who could benefit from encouragement. Commit to blessing them this week through:
                </p>
                <div className="grid md:grid-cols-3 gap-4">
                  {[
                    "Words of affirmation",
                    "A thoughtful gesture",
                    "Practical help"
                  ].map((action, i) => (
                    <div key={i} className="p-4 border-2 border-primary-foreground/30 stagger-item">
                      <p className="brutal-body-sm text-center">→ {action}</p>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </section>

          {/* The Critical Choice */}
          <section id="choice" className="min-h-screen py-32 bg-muted/30">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="space-y-12"
            >
              <div className="text-center space-y-6">
                <Badge className="brutal-badge text-lg px-6 py-3">SECTION 06</Badge>
                <h2 className="brutal-display-lg uppercase">
                  The Critical <span className="text-primary">Choice</span>
                </h2>
                <p className="brutal-heading-xl text-muted-foreground">
                  Two Paths Diverge
                </p>
              </div>

              <div className="grid lg:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <div className="brutal-card p-8">
                    <h3 className="brutal-heading-xl mb-6 uppercase tracking-widest">
                      Path One: <span className="text-destructive">The Mirror's Promise</span>
                    </h3>
                    <div className="space-y-6">
                      <div>
                        <h4 className="brutal-heading-lg mb-3">This Path Offers:</h4>
                        <ul className="space-y-2">
                          {[
                            "Immediate but fleeting validation",
                            "Complete control over message and timing",
                            "No risk of rejection or misunderstanding",
                            "A sense of self-sufficiency and independence"
                          ].map((item, i) => (
                            <li key={i} className="flex items-start gap-2 brutal-body-sm stagger-item">
                              <span className="text-destructive">✓</span>
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="brutal-separator" />
                      <div>
                        <h4 className="brutal-heading-lg mb-3 text-destructive">But It Delivers:</h4>
                        <ul className="space-y-2">
                          {[
                            "Increasing need for external validation",
                            "Isolation from meaningful human connection",
                            "Fragile self-esteem that crumbles",
                            "A life centered on self that shrinks"
                          ].map((item, i) => (
                            <li key={i} className="flex items-start gap-2 brutal-body-sm stagger-item">
                              <span className="text-destructive">✕</span>
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="space-y-6">
                  <div className="brutal-card p-8 border-primary bg-primary/5">
                    <h3 className="brutal-heading-xl mb-6 uppercase tracking-widest text-primary">
                      Path Two: <span className="text-primary">The Encounter's Promise</span>
                    </h3>
                    <div className="space-y-6">
                      <div>
                        <h4 className="brutal-heading-lg mb-3">This Path Offers:</h4>
                        <ul className="space-y-2">
                          {[
                            "Lasting joy from blessing others",
                            "Meaningful connections and relationships",
                            "Resilient well-being based on purpose",
                            "A life that expands through service and love"
                          ].map((item, i) => (
                            <li key={i} className="flex items-start gap-2 brutal-body-sm stagger-item">
                              <span className="text-primary">✓</span>
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="brutal-separator" />
                      <div>
                        <h4 className="brutal-heading-lg mb-3 text-primary">But It Requires:</h4>
                        <ul className="space-y-2">
                          {[
                            "Vulnerability and risk of rejection",
                            "Intentional focus on others' needs",
                            "Humility to serve without guarantee",
                            "Faith that God's way leads to fulfillment"
                          ].map((item, i) => (
                            <li key={i} className="flex items-start gap-2 brutal-body-sm stagger-item">
                              <span className="text-primary">→</span>
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="brutal-card p-8 text-center">
                <p className="brutal-display-md uppercase mb-6">
                  The Moment of Decision
                </p>
                <p className="brutal-body-lg max-w-3xl mx-auto mb-8">
                  Every morning, you stand at this crossroads. You can choose the mirror—<span className="line-through">safe, predictable, ultimately empty</span>. Or you can choose the encounter—<strong className="border-b-3 border-primary">risky, unpredictable, ultimately transformative</strong>.
                </p>
                <Button
                  onClick={() => scrollToSection(7)}
                  className="brutal-button-primary px-12 py-5 text-xl"
                >
                  Choose Transformation
                  <ArrowRight className="ml-3 h-6 w-6" />
                </Button>
              </div>
            </motion.div>
          </section>

          {/* The Multiplication Effect */}
          <section id="multiplication" className="min-h-screen py-32">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="space-y-12"
            >
              <div className="grid lg:grid-cols-12 gap-12">
                <div className="lg:col-span-4 space-y-6">
                  <Badge className="brutal-badge-primary text-lg px-6 py-3">SECTION 07</Badge>
                  <h2 className="brutal-display-md uppercase">
                    The Multiplication <span className="text-primary">Effect</span>
                  </h2>
                  <p className="brutal-body-lg text-muted-foreground">
                    When Blessing Becomes Abundant
                  </p>
                  <div className="brutal-card-compact p-6">
                    <p className="brutal-body-base">
                      Your acts of kindness become seeds that grow in ways you may never fully understand.
                    </p>
                  </div>
                </div>

                <div className="lg:col-span-8 space-y-6">
                  <div className="brutal-card p-8">
                    <h3 className="brutal-heading-xl mb-6 uppercase tracking-widest">
                      Creating Ripples of Transformation
                    </h3>
                    <p className="brutal-body-lg mb-6">
                      When you consistently choose to bless others, you don't just improve individual moments—you create what can only be described as an <strong className="text-primary border-b-3 border-primary">infectious abundance of love</strong>.
                    </p>
                    <ul className="space-y-3 mb-6">
                      {[
                        "The person you encourage at work may go home and be more patient with their family",
                        "The child you compliment may carry that confidence into a challenging situation",
                        "The neighbor you help may be inspired to help someone else in need"
                      ].map((item, i) => (
                        <li key={i} className="flex items-start gap-3 brutal-body-base stagger-item">
                          <span className="text-primary font-bold">→</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    {[
                      {
                        title: "Personal Transformation",
                        content: "Blessing others doesn't diminish you—it completes you."
                      },
                      {
                        title: "Relational Transformation",
                        content: "Create a community of mutual blessing and support."
                      },
                      {
                        title: "Spiritual Transformation",
                        content: "It is more blessed to give than to receive."
                      },
                      {
                        title: "Cultural Transformation",
                        content: "Workplaces and neighborhoods become more connected and compassionate."
                      }
                    ].map((item, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.1 }}
                      >
                        <div className="brutal-card-compact h-full p-6 border-primary bg-primary/5">
                          <h4 className="brutal-heading-lg mb-3 text-primary">{item.title}</h4>
                          <p className="brutal-body-sm">{item.content}</p>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </section>

          {/* Your Next Steps */}
          <section id="steps" className="min-h-screen py-32 bg-muted/30">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="space-y-12"
            >
              <div className="text-center space-y-6">
                <Badge className="brutal-badge text-lg px-6 py-3">SECTION 08</Badge>
                <h2 className="brutal-display-lg uppercase">
                  Your Next <span className="text-primary">Steps</span>
                </h2>
                <p className="brutal-heading-xl text-muted-foreground">
                  From Mirror to Encounter
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  {
                    emoji: "🌅",
                    title: "Morning Redirection",
                    content: "Spend first minutes asking God how you can bless others"
                  },
                  {
                    emoji: "💬",
                    title: "Intentional Encounters",
                    content: "Offer at least one genuine compliment each day"
                  },
                  {
                    emoji: "🔄",
                    title: "Attention Shift",
                    content: "Redirect focus from self-needs to serving others"
                  },
                  {
                    emoji: "🙏",
                    title: "Gratitude Practice",
                    content: "Thank God for people and ask how to love them better"
                  },
                  {
                    emoji: "🤝",
                    title: "Service Opportunities",
                    content: "Look for regular ways to serve others"
                  }
                ].map((step, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                  >
                    <div className="brutal-card h-full p-6">
                      <div className="text-4xl mb-4">{step.emoji}</div>
                      <h4 className="brutal-heading-lg mb-3">{step.title}</h4>
                      <p className="brutal-body-sm">{step.content}</p>
                    </div>
                  </motion.div>
                ))}
              </div>

              <div className="brutal-card p-12 text-center">
                <p className="brutal-display-md uppercase mb-6">
                  The Choice is Yours
                </p>
                <p className="brutal-body-lg max-w-3xl mx-auto mb-4">
                  The moment is now. The person beside you is waiting.
                </p>
                <p className="brutal-body-base text-primary mb-8">
                  You have the power to bless the person beside you.
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <Button
                    onClick={() => scrollToSection(0)}
                    className="brutal-button-primary px-12 py-5 text-xl"
                  >
                    Start Again
                    <Sparkles className="ml-3 h-6 w-6" />
                  </Button>
                </div>
              </div>
            </motion.div>
          </section>

          {/* Footer - Brutalist Style */}
          <footer className="py-16 border-t-3 border-border">
            <div className="text-center space-y-6">
              <p className="brutal-heading-lg uppercase tracking-widest">
                Mirror {`///`} Encounter
              </p>
              <p className="brutal-body-sm text-muted-foreground">
                An Interactive Journey of True Self-Discovery
              </p>
              <div className="brutal-separator max-w-md mx-auto" />
              <p className="brutal-body-xs text-muted-foreground uppercase tracking-widest">
                © 2025 Built with intention
              </p>
            </div>
          </footer>
        </div>
      </main>
    </div>
  )
}
