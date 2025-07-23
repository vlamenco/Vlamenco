"use client"

import { useState, useEffect } from "react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import {
  Home,
  Camera,
  BookOpen,
  Coffee,
  Plane,
  Music,
  Heart,
  Menu,
  X,
  Quote,
  FileText,
  ImageIcon,
  Github,
} from "lucide-react"
import Image from "next/image"
import ReactMarkdown from "react-markdown"

export default function PersonalBlog() {
  const [activeSection, setActiveSection] = useState("home")
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isMouseMoving, setIsMouseMoving] = useState(false)

  // 鼠标跟随效果
  useEffect(() => {
    let timeoutId: NodeJS.Timeout

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
      setIsMouseMoving(true)

      // 清除之前的定时器
      clearTimeout(timeoutId)

      // 1秒后隐藏字母V
      timeoutId = setTimeout(() => {
        setIsMouseMoving(false)
      }, 1000)
    }

    window.addEventListener("mousemove", handleMouseMove)

    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
      clearTimeout(timeoutId)
    }
  }, [])

  const navigationItems = [
    { id: "home", label: "Home", icon: Home },
    { id: "photography", label: "Photo", icon: Camera },
    { id: "reading", label: "Book", icon: BookOpen },
    { id: "daily", label: "Daily", icon: Coffee },
    { id: "travel", label: "Voyage", icon: Plane },
    { id: "music", label: "Music", icon: Music },
    { id: "mood", label: "Movie", icon: Heart },
    { id: "english", label: "English", icon: BookOpen },
    { id: "french", label: "Française", icon: BookOpen },
    { id: "arabic", label: "اللغة العربية", icon: BookOpen },
    { id: "macrame", label: "Macrame", icon: Heart },
  ]

  // 精选内容 - 混合类型展示
  const featuredContent = [
    {
      id: 1,
      type: "quote",
      content: "生活不是等待暴风雨过去，而是学会在雨中起舞。",
      author: "— 维维安·格林",
      category: "mood",
      time: "2024-01-20",
    },
    {
      id: 2,
      type: "image",
      image: "/placeholder.svg?height=300&width=400",
      caption: "今天的夕阳特别美，配上一杯手冲咖啡，这就是生活中最简单的幸福。",
      category: "daily",
      time: "2024-01-19",
    },
    {
      id: 3,
      type: "article",
      title: "《百年孤独》读后感",
      excerpt: "马尔克斯的魔幻现实主义让我重新思考时间与记忆的关系。孤独不是一种状态，而是一种能力...",
      category: "reading",
      time: "2024-01-18",
      readTime: "5 分钟阅读",
    },
    {
      id: 4,
      type: "image",
      image: "/placeholder.svg?height=400&width=300",
      caption: "街头摄影的魅力在于捕捉那些转瞬即逝的真实瞬间，每个路人都有自己的故事。",
      category: "photography",
      time: "2024-01-17",
    },
    {
      id: 5,
      type: "quote",
      content: "音乐是跨越时空的语言，它能触及灵魂最深处的情感。",
      author: "— 个人感悟",
      category: "music",
      time: "2024-01-16",
    },
    {
      id: 6,
      type: "article",
      title: "京都的秋天",
      excerpt: "红叶季节的古都之旅，每一片落叶都诉说着时间的故事。在清水寺的台阶上，我感受到了千年古都的宁静...",
      category: "travel",
      time: "2024-01-15",
      readTime: "8 分钟阅读",
    },
  ]

  // 这里是各个导航栏的内容，您可以在这里添加Markdown格式的内容
  const articles = {
    photography: [
      {
        title: "Street Photography Tips",
        date: "2024-01-20",
        excerpt: "How to capture moving moments on busy streets",
        content: `
# Street Photography Tips

## Finding the Right Moment

When shooting on the street, patience is key. Wait for the decisive moment when all elements align perfectly.

- Look for interesting light and shadows
- Focus on authentic human expressions
- Capture the essence of daily life

![Street Photography](/placeholder.svg?height=300&width=500&query=street+photography)

> "The best images are the ones that retain their strength and impact over the years, regardless of the number of times they are viewed." — Anne Geddes
        `,
      },
      {
        title: "The Art of Light and Shadow",
        date: "2024-01-18",
        excerpt: "Exploring natural light in photography",
        content: `
# The Art of Light and Shadow

Light is the essence of photography. Understanding how to work with natural light can transform your images from ordinary to extraordinary.

## Key Techniques:
1. Golden hour shooting
2. Working with backlighting
3. Creating silhouettes
4. Using shadows as compositional elements

![Light and Shadow](/placeholder.svg?height=300&width=500&query=light+and+shadow+photography)
        `,
      },
      {
        title: "The Charm of Black and White Photography",
        date: "2024-01-15",
        excerpt: "Why black and white photos always tell stories",
        content: `
# The Charm of Black and White Photography

Black and white photography strips away the distraction of color and focuses on:
- Form
- Texture
- Contrast
- Emotion

## Why Choose Black and White?

Sometimes removing color helps viewers focus on the emotional content of an image. Without color to distract, the composition and subject matter take center stage.

![Black and White](/placeholder.svg?height=300&width=500&query=black+and+white+photography)

### Recommended Settings:
- Higher contrast
- Pay attention to textures
- Look for strong compositional elements
- Focus on the play of light and shadow
        `,
      },
    ],
    reading: [
      {
        title: "One Hundred Years of Solitude Review",
        date: "2024-01-19",
        excerpt: "The literary charm of magical realism",
        content: `
# One Hundred Years of Solitude: A Journey Through Time

Gabriel García Márquez's masterpiece takes us through the multi-generational story of the Buendía family in the fictional town of Macondo.

## The Magic of Magical Realism

What makes this novel special is how it blends the mundane with the magical:

- Butterflies follow characters who are in love
- A character ascends to heaven while hanging laundry
- Rain falls for years, then stops for decades

> "Many years later, as he faced the firing squad, Colonel Aureliano Buendía was to remember that distant afternoon when his father took him to discover ice."

This opening line sets the tone for a novel that bends time and reality in fascinating ways.

![One Hundred Years of Solitude](/placeholder.svg?height=300&width=500&query=one+hundred+years+of+solitude+book)
        `,
      },
      {
        title: "Haruki Murakami's Aesthetic of Solitude",
        date: "2024-01-12",
        excerpt: "Starting from Norwegian Wood",
        content: `
# Haruki Murakami's Aesthetic of Solitude

## Norwegian Wood: A Gateway to Murakami's World

Norwegian Wood stands apart from Murakami's more surrealist works, offering a relatively straightforward narrative about love, loss, and growing up in 1960s Japan.

### Key Themes:
- Isolation in modern society
- The thin line between reality and memory
- Music as a connector between people and experiences
- The weight of the past on the present

![Norwegian Wood](/placeholder.svg?height=300&width=500&query=norwegian+wood+murakami)

> "If you only read the books that everyone else is reading, you can only think what everyone else is thinking."
        `,
      },
      {
        title: "Science Fiction Reading List",
        date: "2024-01-08",
        excerpt: "Sci-fi works that changed my worldview",
        content: `
# Science Fiction That Changed My Worldview

Science fiction at its best doesn't just entertain—it challenges our assumptions about reality, society, and what it means to be human.

## Essential Reading:

1. **Dune** by Frank Herbert
   - Explores ecology, religion, and politics in a far-future space empire
   - Themes of prescience and fate remain relevant today

2. **Neuromancer** by William Gibson
   - Defined cyberpunk and predicted many aspects of our digital world
   - "The sky above the port was the color of television, tuned to a dead channel."

3. **The Three-Body Problem** by Liu Cixin
   - A masterpiece of hard science fiction with a unique Chinese perspective
   - Explores the consequences of first contact with an alien civilization

4. **Hyperion** by Dan Simmons
   - A Canterbury Tales-inspired structure with multiple narrators
   - Combines literary references with far-future technology

![Science Fiction Books](/placeholder.svg?height=300&width=500&query=science+fiction+books)
        `,
      },
    ],
    // 其他导航项的内容...
    daily: [
      {
        title: "Thoughts on Slow Living",
        date: "2024-01-20",
        excerpt: "Finding inner peace in a fast-paced world",
        content: `
# Embracing Slow Living in a Fast-Paced World

In today's hyperconnected society, the concept of "slow living" offers a refreshing counterpoint to our culture of constant productivity and speed.

## What is Slow Living?

Slow living isn't about doing everything at a snail's pace. Rather, it's about:

- Being present in each moment
- Making deliberate choices about how we spend our time
- Prioritizing quality over quantity
- Connecting deeply with people, places, and activities

## Simple Practices to Slow Down

1. **Morning rituals** - Start your day intentionally rather than reaching for your phone
2. **Mindful eating** - Savor each bite rather than eating on the go
3. **Digital detox** - Set boundaries around technology use
4. **Single-tasking** - Focus on one activity at a time

![Slow Living](/placeholder.svg?height=300&width=500&query=slow+living+peaceful)

> "Nature does not hurry, yet everything is accomplished." — Lao Tzu
        `,
      },
      {
        title: "Coffee and Life",
        date: "2024-01-17",
        excerpt: "Every cup of coffee has its story",
        content: `
# Coffee and Life: Brewing Moments of Joy

There's something magical about the ritual of making coffee. The process itself—grinding beans, heating water to the perfect temperature, watching the bloom as hot water hits fresh grounds—forces us to slow down.

## The Art of Hand-Brewing

Hand-brewing methods like pour-over, French press, or AeroPress create space for mindfulness in our day:

- The precision of weighing beans
- The rhythm of the pour
- The patience of the brew
- The reward of that first sip

![Coffee Brewing](/placeholder.svg?height=300&width=500&query=hand+brewing+coffee)

## Coffee as Connection

Beyond the beverage itself, coffee creates moments of connection:

- Morning conversations with loved ones
- Meeting friends at a local café
- Supporting local roasters and their relationships with farmers
- Participating in a ritual shared across cultures and generations

> "Coffee is a language in itself." — Jackie Chan
        `,
      },
      {
        title: "Small Joys in the City",
        date: "2024-01-14",
        excerpt: "Discovering overlooked beautiful moments in life",
        content: `
# Finding Small Joys in Urban Life

Cities can sometimes feel overwhelming—concrete, noise, crowds, and constant motion. Yet within this urban landscape lie countless small moments of beauty and joy, if only we train ourselves to notice them.

## Urban Treasures to Seek Out

### Nature Reclaiming Space
- Wildflowers pushing through sidewalk cracks
- Birds nesting in unexpected places
- Community gardens transforming vacant lots

### Human Connections
- Street musicians sharing their art
- Spontaneous conversations with strangers
- The familiar smile of your local shopkeeper

### Sensory Delights
- The aroma from a neighborhood bakery
- Sunset light reflecting off glass buildings
- The peaceful hour just after rain

![Urban Joy](/placeholder.svg?height=300&width=500&query=urban+life+small+joys)

## Practicing Urban Mindfulness

1. Take different routes to familiar destinations
2. Look up (architecture above street level is often overlooked)
3. Visit local markets and small businesses
4. Sit in public spaces without checking your phone

> "The city is not a concrete jungle. It is a human zoo." — Desmond Morris
        `,
      },
    ],
    travel: [
      {
        title: "Autumn in Kyoto",
        date: "2024-01-16",
        excerpt: "A journey to the ancient capital during maple season",
        content: `
# Autumn in Kyoto: A Symphony of Colors

There's something magical about Kyoto in autumn. As the ancient capital of Japan transforms with fiery maples and golden ginkgos, the city's 1,600+ temples and shrines take on an ethereal quality.

## Must-Visit Autumn Spots

### Tofuku-ji Temple
The view from the Tsutenkyo Bridge over a valley of maple trees is perhaps the most famous autumn scene in Kyoto.

### Arashiyama Bamboo Grove
While famous year-round, the contrast between green bamboo and the surrounding autumn foliage is particularly striking.

### Philosopher's Path
This stone path alongside a canal is lined with maple trees that create a tunnel of red and orange.

![Kyoto Autumn](/placeholder.svg?height=300&width=500&query=kyoto+autumn+leaves)

## Beyond the Foliage

Autumn in Kyoto offers more than just beautiful leaves:

- Seasonal kaiseki cuisine featuring matsutake mushrooms and chestnuts
- Less crowded temples in the early morning hours
- The special evening illuminations at select temples
- The crisp air that makes walking the city a pleasure

> "Kyoto was designed with an eye to beauty... Everywhere in the city you find gardens and parks, temples and palaces." — Pico Iyer
        `,
      },
      {
        title: "Tibet Travel Notes",
        date: "2024-01-10",
        excerpt: "Spiritual cleansing on the plateau",
        content: `
# Tibet: Journey to the Roof of the World

At an average elevation of 4,500 meters, the Tibetan Plateau offers not just breathtaking landscapes but a profound spiritual experience that stays with travelers long after they've descended to lower altitudes.

## Adapting to the Altitude

The first lesson Tibet teaches is patience. Your body must adjust to the thin air:
- Move slowly for the first few days
- Drink plenty of water
- Consider taking altitude sickness medication
- Listen to your body and rest when needed

## Sacred Sites

### Potala Palace
The former winter residence of the Dalai Lama rises 13 stories from Red Hill, containing over 1,000 rooms, 10,000 shrines, and 200,000 statues.

### Jokhang Temple
The spiritual heart of Tibet, where pilgrims prostrate themselves in devotion before entering the most sacred temple in Tibetan Buddhism.

### Namtso Lake
One of the highest saltwater lakes in the world, surrounded by snow-capped mountains and considered one of Tibet's three holy lakes.

![Tibet Landscape](/placeholder.svg?height=300&width=500&query=tibet+mountains+lake)

> "The goal is not to be better than the other man, but your previous self." — Tibetan Proverb
        `,
      },
      {
        title: "Seaside Town Getaway",
        date: "2024-01-05",
        excerpt: "Finding tranquility by the ocean",
        content: `
# Finding Peace in a Seaside Town

There's something about small coastal towns that invites us to slow down. Perhaps it's the rhythm of the waves, the expansive horizon, or simply being away from our usual surroundings.

## The Joy of Coastal Mornings

The early hours in a seaside town have a special quality:
- Misty shores before the day tourists arrive
- Local fishermen returning with the morning catch
- The particular quality of light as the sun rises over water
- The smell of salt and seaweed in the cool morning air

## Simple Pleasures

A seaside retreat offers simple but profound joys:
- Reading a book on the beach with no agenda
- Conversations with locals who live by different rhythms
- Seafood eaten within sight of the water it came from
- Watching the changing moods of the sea throughout the day

![Seaside Town](/placeholder.svg?height=300&width=500&query=peaceful+seaside+town)

## Finding Your Own Rhythm

Away from the structured time of everyday life, you can discover your natural pace:
- Sleep when tired, eat when hungry
- Let curiosity guide your explorations
- Make space for spontaneous discoveries
- Allow yourself to be present without planning the next activity

> "The sea, once it casts its spell, holds one in its net of wonder forever." — Jacques Cousteau
        `,
      },
    ],
    // 添加其他导航项的内容...
  }

  const renderFeaturedItem = (item: any) => {
    const categoryInfo = navigationItems.find((nav) => nav.id === item.category)

    switch (item.type) {
      case "quote":
        return (
          <Card
            key={item.id}
            className="p-6 bg-gradient-to-br from-yellow-50 to-orange-50 dark:from-yellow-950/20 dark:to-orange-950/20 border-l-4 border-l-yellow-500"
          >
            <div className="flex items-start space-x-3">
              <Quote className="h-6 w-6 text-yellow-500 mt-1 flex-shrink-0" />
              <div className="flex-1">
                <blockquote className="text-lg font-medium leading-relaxed mb-3 italic">"{item.content}"</blockquote>
                <div className="flex items-center justify-between">
                  <cite className="text-sm text-muted-foreground not-italic">{item.author}</cite>
                  <div className="flex items-center space-x-2">
                    <Badge variant="outline" className="text-xs">
                      {categoryInfo?.label}
                    </Badge>
                    <span className="text-xs text-muted-foreground">{item.time}</span>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        )

      case "image":
        return (
          <Card key={item.id} className="overflow-hidden hover:shadow-lg transition-all duration-300">
            <div className="relative aspect-[4/3] overflow-hidden">
              <Image
                src={item.image || "/placeholder.svg"}
                alt="精选图片"
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <CardContent className="p-4">
              <div className="flex items-start space-x-2 mb-3">
                <ImageIcon className="h-4 w-4 text-green-500 mt-1 flex-shrink-0" />
                <p className="text-sm leading-relaxed flex-1">{item.caption}</p>
              </div>
              <div className="flex items-center justify-between text-xs text-muted-foreground">
                <Badge variant="outline" className="text-xs">
                  {categoryInfo?.label}
                </Badge>
                <span>{item.time}</span>
              </div>
            </CardContent>
          </Card>
        )

      case "article":
        return (
          <Card
            key={item.id}
            className="p-6 hover:shadow-md transition-shadow cursor-pointer border-l-4 border-l-pink-500"
          >
            <div className="flex items-start space-x-3">
              <FileText className="h-5 w-5 text-pink-500 mt-1 flex-shrink-0" />
              <div className="flex-1">
                <h3 className="text-lg font-semibold mb-2 hover:text-primary transition-colors">{item.title}</h3>
                <p className="text-muted-foreground text-sm mb-3 leading-relaxed">{item.excerpt}</p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <Badge variant="outline" className="text-xs">
                      {categoryInfo?.label}
                    </Badge>
                    <span className="text-xs text-muted-foreground">{item.readTime}</span>
                  </div>
                  <span className="text-xs text-muted-foreground">{item.time}</span>
                </div>
              </div>
            </div>
          </Card>
        )

      default:
        return null
    }
  }

  const renderContent = () => {
    if (activeSection === "home") {
      return (
        <div className="space-y-8">
          {/* 头图和标题 */}
          <div className="relative h-64 md:h-80 rounded-lg overflow-hidden mb-8">
            <Image src="/placeholder.svg?height=320&width=800" alt="博客头图" fill className="object-cover" />
            <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
              <div className="text-center text-white">
                <h1 className="text-4xl md:text-6xl font-bold mb-4">Vlamenco's Venus Zone</h1>
                <p className="text-lg md:text-xl opacity-90">光彩照人 beautiful belle جَمِيلة</p>
              </div>
            </div>
          </div>

          {/* 个人简介区域 */}
          <Card className="p-8 bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/30 dark:to-pink-900/30">
            <div className="flex items-start space-x-6">
              <Avatar className="h-20 w-20 border-4 border-white shadow-lg">
                <AvatarImage src="/placeholder.svg?height=80&width=80" alt="头像" />
                <AvatarFallback className="text-2xl">Vlamenco</AvatarFallback>
              </Avatar>
              <div className="flex-1">
                <h2 className="text-2xl font-bold mb-4">Me?</h2>
                <div className="prose prose-gray dark:prose-invert max-w-none">
                  <p className="text-muted-foreground leading-relaxed mb-4">我是宇宙大喇叭，吹响灵魂的荣光！</p>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    I am the cosmic loudspeaker, sounding the glory of the soul!
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    Je suis le mégaphone cosmique, qui fait retentir la gloire de l'âme !
                  </p>
                  <p className="text-muted-foreground leading-relaxed">!أنا البوصلة الكونية التي تُضجِّع نعمة الروح</p>
                </div>
                <div className="flex items-center space-x-4 mt-6 pt-4 border-t border-gray-200 dark:border-gray-700">
                  <span className="text-sm font-medium text-muted-foreground">Follow me:</span>
                  <div className="flex items-center space-x-3">
                    <Button
                      variant="ghost"
                      size="sm"
                      className="h-9 w-9 p-0 hover:bg-gray-100 dark:hover:bg-gray-800"
                      asChild
                    >
                      <a href="https://github.com/vlamenco" target="_blank" rel="noopener noreferrer" title="GitHub">
                        <Github className="h-4 w-4" />
                      </a>
                    </Button>

                    <Button
                      variant="ghost"
                      size="sm"
                      className="h-9 w-9 p-0 hover:bg-red-50 dark:hover:bg-red-950/20"
                      asChild
                    >
                      <a
                        href="https://www.xiaohongshu.com/user/profile/6400af0600000000290133c5?xsec_token=ABNG-g9ajzDVRwS9mk-5-hgilQWrFin_YN4v-dakcLPJU=&xsec_source=pc_search"
                        target="_blank"
                        rel="noopener noreferrer"
                        title="Red book"
                      >
                        <div className="h-4 w-4 bg-red-500 rounded-sm flex items-center justify-center">
                          <span className="text-white text-xs font-bold">小</span>
                        </div>
                      </a>
                    </Button>

                    <Button
                      variant="ghost"
                      size="sm"
                      className="h-9 w-9 p-0 hover:bg-blue-50 dark:hover:bg-blue-950/20"
                      asChild
                    >
                      <a
                        href="https://space.bilibili.com/37959322?spm_id_from=333.33.0.0"
                        target="_blank"
                        rel="noopener noreferrer"
                        title="bilibili"
                      >
                        <div className="h-4 w-4 bg-gradient-to-r from-blue-400 to-pink-400 rounded-sm flex items-center justify-center">
                          <span className="text-white text-xs font-bold">B</span>
                        </div>
                      </a>
                    </Button>

                    <Button
                      variant="ghost"
                      size="sm"
                      className="h-9 w-9 p-0 hover:bg-yellow-50 dark:hover:bg-yellow-950/20"
                      asChild
                    >
                      <a
                        href="https://www.mafengwo.cn/u/86257380.html"
                        target="_blank"
                        rel="noopener noreferrer"
                        title="mafengwo"
                      >
                        <div className="h-4 w-4 bg-yellow-500 rounded-sm flex items-center justify-center">
                          <span className="text-white text-xs font-bold">蜂</span>
                        </div>
                      </a>
                    </Button>

                    <Button
                      variant="ghost"
                      size="sm"
                      className="h-9 w-9 p-0 hover:bg-green-50 dark:hover:bg-green-950/20"
                      asChild
                    >
                      <a
                        href="https://www.douban.com/people/vlamenco19/?_i=3257934Pvou3qn"
                        target="_blank"
                        rel="noopener noreferrer"
                        title="douban"
                      >
                        <div className="h-4 w-4 bg-green-500 rounded-sm flex items-center justify-center">
                          <span className="text-white text-xs font-bold">豆</span>
                        </div>
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </Card>

          {/* 精选内容 */}
          <div>
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold">Laser emission</h2>
              <p className="text-muted-foreground text-sm">The brightest stars:</p>
            </div>
            <div className="grid gap-6 md:grid-cols-2">{featuredContent.map(renderFeaturedItem)}</div>
          </div>
        </div>
      )
    } else {
      const sectionArticles = articles[activeSection as keyof typeof articles] || []
      const sectionTitle = navigationItems.find((item) => item.id === activeSection)?.label || ""

      return (
        <div className="space-y-6">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold mb-4">{sectionTitle}</h1>
            <p className="text-muted-foreground">Just click click click {sectionTitle.toLowerCase()}'s childrens</p>
          </div>
          <div className="grid gap-4">
            {sectionArticles.map((article, index) => (
              <Card key={index} className="p-6 hover:shadow-md transition-shadow cursor-pointer">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold mb-2 hover:text-primary transition-colors">{article.title}</h3>
                    <p className="text-muted-foreground text-sm mb-3">{article.excerpt}</p>
                    <span className="text-xs text-muted-foreground">{article.date}</span>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {/* 显示选中文章的详细内容 */}
          {sectionArticles.length > 0 && (
            <div className="mt-12 p-6 bg-white dark:bg-gray-900 rounded-lg shadow-lg font-extralight">
              <article className="prose prose-lg dark:prose-invert max-w-none">
                <ReactMarkdown>{sectionArticles[0].content}</ReactMarkdown>
              </article>
            </div>
          )}
        </div>
      )
    }
  }

  return (
    <div className="min-h-screen bg-background flex">
      {/* 可爱的鼠标跟随字母V */}
      <div
        className={`fixed pointer-events-none z-50 transition-all duration-300 ${
          isMouseMoving ? "opacity-100 scale-70" : "opacity-0 scale-45"
        }`}
        style={{
          left: mousePosition.x + 15,
          top: mousePosition.y - 15,
          transform: "translate(0, 0)",
        }}
      >
        <div className="relative">
          <span className="text-2xl font-bold text-primary drop-shadow-lg animate-pulse">V</span>
          <div className="absolute -inset-1 bg-primary/20 rounded-full blur-sm -z-10"></div>
        </div>
      </div>

      {/* Mobile Menu Button */}
      <Button
        variant="ghost"
        size="sm"
        className="fixed top-4 left-4 z-50 md:hidden"
        onClick={() => setSidebarOpen(!sidebarOpen)}
      >
        {sidebarOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
      </Button>

      {/* Fixed Sidebar */}
      <aside
        className={`
        fixed inset-y-0 left-0 z-40 w-64 bg-card border-r transform transition-transform duration-300 ease-in-out
        ${sidebarOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"}
      `}
      >
        <div className="h-full overflow-y-auto p-6">
          <div className="flex items-center space-x-3 mb-8">
            <Avatar className="h-10 w-10">
              <AvatarImage src="/placeholder.svg?height=40&width=40" alt="头像" />
              <AvatarFallback>Vlamenco</AvatarFallback>
            </Avatar>
            <div>
              <h2 className="font-semibold">Vlamenco</h2>
              <p className="text-xs text-muted-foreground">2047</p>
            </div>
          </div>

          <nav className="space-y-2">
            {navigationItems.map((item) => {
              const Icon = item.icon
              return (
                <Button
                  key={item.id}
                  variant={activeSection === item.id ? "default" : "ghost"}
                  className="w-full justify-start"
                  onClick={() => {
                    setActiveSection(item.id)
                    setSidebarOpen(false)
                  }}
                >
                  <Icon className="h-4 w-4 mr-3" />
                  {item.label}
                </Button>
              )
            })}
          </nav>

          <Separator className="my-6" />

          <div className="text-xs text-muted-foreground">
            <p className="mb-2">© Vlamenco2047</p>
            <p>大河向东流啊~</p>
          </div>
        </div>
      </aside>

      {/* Overlay for mobile */}
      {sidebarOpen && (
        <div className="fixed inset-0 bg-black/50 z-30 md:hidden" onClick={() => setSidebarOpen(false)} />
      )}

      {/* Main Content */}
      <main className="flex-1 ml-0 md:ml-64 overflow-auto">
        <div className="p-6 md:p-8">
          <div className="max-w-4xl mx-auto">{renderContent()}</div>
        </div>
      </main>
    </div>
  )
}
