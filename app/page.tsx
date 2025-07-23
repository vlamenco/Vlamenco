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
    music: [
      {
        title: "古典音乐的现代意义",
        date: "2024-01-21",
        excerpt: "为什么在数字时代我们仍需要古典音乐",
        content: `
# 古典音乐的现代意义

在这个快节奏的数字时代，古典音乐似乎显得有些"过时"。然而，正是在这样的时代背景下，古典音乐的价值反而更加凸显。

## 时间的艺术

古典音乐教会我们如何与时间相处：

- **耐心聆听**：一首交响曲需要40-60分钟的专注聆听
- **情感层次**：音乐的发展如同人生，有起伏、有转折
- **深度体验**：不同于快餐文化，古典音乐需要反复品味

![Classical Music](/placeholder.svg?height=300&width=500&query=classical+music+concert)

## 推荐入门曲目

### 巴赫 - 《哥德堡变奏曲》
- 数学般的精确与诗意的完美结合
- 推荐版本：格伦·古尔德1981年录音

### 贝多芬 - 《第九交响曲》
- 人类精神的赞歌
- "欢乐颂"主题至今仍能触动人心

### 德彪西 - 《月光》
- 印象派音乐的代表作
- 如画般的音乐色彩

> "音乐是比一切智慧、一切哲学更高的启示。" — 贝多芬
    `,
      },
      {
        title: "爵士乐的自由精神",
        date: "2024-01-18",
        excerpt: "从新奥尔良到全世界的音乐革命",
        content: `
# 爵士乐：音乐中的自由精神

爵士乐不仅仅是一种音乐风格，它代表着一种生活态度——即兴、自由、创新。

## 爵士乐的核心元素

### 即兴演奏
爵士乐最迷人的地方在于每一次演出都是独一无二的：
- 音乐家在既定和声框架内自由发挥
- 每个solo都是当下情感的真实表达
- 没有两次完全相同的演出

### 摇摆节拍 (Swing)
- 不是机械的节拍，而是有生命力的律动
- "It don't mean a thing if it ain't got that swing"

![Jazz Music](/placeholder.svg?height=300&width=500&query=jazz+musicians+performance)

## 必听爵士经典

1. **Miles Davis - Kind of Blue**
   - 被誉为最伟大的爵士专辑
   - Modal jazz的里程碑

2. **John Coltrane - A Love Supreme**
   - 精神性的音乐探索
   - 自由爵士的代表作

3. **Bill Evans Trio - Waltz for Debby**
   - 室内乐般的精致
   - 钢琴三重奏的典范

## 爵士乐教给我们的人生哲学

- **拥抱不确定性**：最美的音乐往往来自意外
- **团队合作**：每个乐手都重要，但没人是主角
- **从错误中学习**：没有"错误"的音符，只有如何处理它们

> "爵士乐是自由的音乐，但自由不意味着混乱。" — Wynton Marsalis
    `,
      },
      {
        title: "民谣的力量",
        date: "2024-01-15",
        excerpt: "简单旋律背后的深刻情感",
        content: `
# 民谣的力量：简单中的不简单

在复杂的现代音乐制作中，民谣以其朴素的形式提醒我们：最打动人心的往往是最简单的东西。

## 民谣的本质

民谣不是一种音乐风格，而是一种表达方式：
- **真实性**：来自生活的真实体验
- **普遍性**：每个人都能理解的情感
- **传承性**：口耳相传的文化记忆

## 中文民谣的黄金时代

### 李宗盛的人生智慧
- 《凡人歌》：平凡人的不平凡
- 《山丘》：中年人的感慨与和解

### 朴树的青春记忆
- 《那些花儿》：青春的美好与逝去
- 《平凡之路》：成长路上的孤独与坚持

### 赵雷的城市民谣
- 《成都》：对一座城市的深情告白
- 《南方姑娘》：漂泊者的思乡之情

![Folk Music](/placeholder.svg?height=300&width=500&query=folk+singer+guitar)

## 国际民谣经典

### Bob Dylan - 诗人与预言家
- 《Blowin' in the Wind》：时代的质疑之声
- 《The Times They Are A-Changin'》：变革的号角

### Leonard Cohen - 黑暗中的光明
- 《Hallelujah》：神圣与世俗的完美融合
- 《Suzanne》：诗意的爱情叙事

### Joni Mitchell - 女性视角的细腻
- 《Both Sides Now》：对生活的多重理解
- 《Big Yellow Taxi》：环保意识的先声

## 为什么我们需要民谣

在这个信息爆炸的时代，民谣提供了：
- **慢下来的理由**：简单的旋律让心灵得到休息
- **共鸣的力量**：朴实的歌词说出了我们的心声
- **情感的出口**：在快节奏生活中找到情感的归宿

> "民谣就是三个和弦加上真理。" — Harlan Howard
    `,
      },
      {
        title: "电子音乐的未来感",
        date: "2024-01-12",
        excerpt: "科技与艺术的完美结合",
        content: `
# 电子音乐：科技时代的声音艺术

电子音乐不仅仅是音乐的一个分支，它代表着人类对声音可能性的无限探索。

## 电子音乐的演进

### 早期探索 (1950s-1970s)
- **Kraftwerk**：电子音乐的先驱
- **Jean-Michel Jarre**：氛围电子音乐的大师
- **Giorgio Moroder**：Disco与电子的结合

### 舞曲革命 (1980s-1990s)
- **House Music**：芝加哥的地下文化
- **Techno**：底特律的工业之声
- **Trance**：欧洲的迷幻之旅

### 现代电子 (2000s-现在)
- **Dubstep**：英国的低频革命
- **Future Bass**：情感化的电子音乐
- **Ambient**：环境音乐的复兴

![Electronic Music](/placeholder.svg?height=300&width=500&query=electronic+music+dj+performance)

## 电子音乐制作的魅力

### 无限的声音可能性
- 任何声音都可以成为音乐素材
- 数字技术打破了传统乐器的限制
- 采样文化创造了新的创作方式

### 现场演出的新形式
- DJ Set：音乐的重新诠释与混合
- Live Coding：实时编程创作音乐
- 视觉与音乐的完美结合

## 推荐艺术家与作品

### Aphex Twin - 实验电子的鬼才
- 《Selected Ambient Works 85-92》
- 复杂节拍与美妙旋律的结合

### Daft Punk - 法式电子的优雅
- 《Discovery》：电子音乐的流行化
- 《Random Access Memories》：复古未来主义

### Burial - 英式电子的忧郁
- 《Untrue》：城市夜晚的声音风景
- Dubstep的诗意表达

### 国内电子音乐
- **Howie Lee**：中国电子音乐的国际化
- **Shao**：实验电子的本土探索
- **33EMYBW**：新生代的创新力量

## 电子音乐的文化意义

电子音乐不仅改变了我们对音乐的理解，也影响了：
- **科技发展**：推动音频技术的进步
- **文化交流**：全球化的音乐语言
- **艺术边界**：音乐与其他艺术形式的融合

> "电子音乐是未来的声音，但它的根源在于人类对美的永恒追求。" — Brian Eno
    `,
      },
    ],
    mood: [
      {
        title: "《肖申克的救赎》：希望的力量",
        date: "2024-01-22",
        excerpt: "关于自由、希望与人性的永恒思考",
        content: `
# 《肖申克的救赎》：希望的力量

"希望是美好的，也许是人间至善，而美好的事物永不消逝。"

这部1994年的经典电影，改编自斯蒂芬·金的小说，讲述了银行家安迪在肖申克监狱中的19年生涯。

## 电影的深层主题

### 希望与绝望的对比
- **安迪的坚持**：即使在最黑暗的环境中也不放弃希望
- **瑞德的转变**：从"希望是危险的东西"到重新相信希望
- **制度化的恐惧**：老布的悲剧展现了被体制化的可怕

### 友谊的珍贵
电影中安迪与瑞德的友谊是整个故事的情感核心：
- 跨越种族的真挚友谊
- 在绝望中相互支撑
- 友谊成为生存下去的动力

![Shawshank Redemption](/placeholder.svg?height=300&width=500&query=shawshank+redemption+movie)

## 经典台词赏析

> "Get busy living, or get busy dying."
> 
> "要么忙着活，要么忙着死。"

这句话不仅是安迪的人生哲学，也是电影想要传达给观众的核心信息。

## 为什么这部电影经久不衰

1. **普世的主题**：自由、希望、友谊是人类共同的追求
2. **精湛的表演**：蒂姆·罗宾斯和摩根·弗里曼的完美演绎
3. **深刻的人性洞察**：展现了人在极端环境下的坚韧与脆弱
4. **完美的叙事结构**：从绝望到希望的完整弧线

> "有些鸟儿是关不住的，它们的每一片羽毛都闪闪发光着自由的光辉。"
        `,
      },
      {
        title: "宫崎骏动画中的成长哲学",
        date: "2024-01-19",
        excerpt: "从《千与千寻》到《龙猫》的童心世界",
        content: `
# 宫崎骏动画中的成长哲学

宫崎骏的动画不仅仅是给孩子看的童话，更是关于成长、环保和人性的深刻思考。

## 成长的必经之路

### 《千与千寻》：勇气与责任
千寻从一个任性的小女孩成长为勇敢承担责任的少女：
- **面对恐惧**：进入神秘的异世界
- **学会工作**：在汤屋中体验劳动的意义
- **拯救他人**：为了救父母和白龙而努力
- **保持初心**：在诱惑面前坚持本真

### 《龙猫》：纯真与想象
- 保持对世界的好奇心
- 相信美好事物的存在
- 家庭温暖的重要性

![Studio Ghibli](/placeholder.svg?height=300&width=500&query=studio+ghibli+totoro+spirited+away)

## 环保意识的觉醒

### 《风之谷》：人与自然的和谐
- 对环境破坏的警示
- 理解与包容的重要性
- 生态平衡的思考

### 《幽灵公主》：文明与自然的冲突
- 工业发展与环境保护的矛盾
- 没有绝对的善恶
- 寻找平衡点的智慧

## 宫崎骏作品的共同特点

1. **强大的女性角色**：从千寻到娜乌西卡，都是独立勇敢的女性
2. **飞行的意象**：代表自由与梦想的追求
3. **细腻的情感描绘**：每个角色都有复杂的内心世界
4. **手绘的温暖**：传统动画的匠心与美感

## 给成年人的童话

宫崎骏的动画之所以能够跨越年龄界限，是因为：
- **童心的珍贵**：提醒我们不要失去对世界的好奇
- **成长的痛苦**：理解成长过程中的困惑与挣扎
- **希望的力量**：即使在困难中也要相信美好

> "不管前方的路有多苦，只要走的方向正确，不管多么崎岖不平，都比站在原地更接近幸福。" — 宫崎骏
        `,
      },
      {
        title: "诺兰电影的时间美学",
        date: "2024-01-16",
        excerpt: "从《盗梦空间》到《信条》的时空探索",
        content: `
# 诺兰电影的时间美学

克里斯托弗·诺兰被誉为当代最具创新精神的导演之一，他对时间概念的独特处理成为其作品的标志性特征。

## 时间的多重维度

### 《盗梦空间》：梦境中的时间层次
- **时间的相对性**：不同层次梦境中时间流逝的差异
- **现实与虚幻**：时间成为区分现实与梦境的关键
- **记忆的时间**：过去如何影响现在的选择

### 《星际穿越》：物理时间与情感时间
- **相对论的视觉化**：重力对时间的影响
- **爱超越时空**：情感连接的永恒性
- **牺牲与拯救**：为未来而放弃现在

![Christopher Nolan](/placeholder.svg?height=300&width=500&query=christopher+nolan+inception+interstellar)

## 非线性叙事的魅力

### 《记忆碎片》：逆向时间叙事
- 从结果推导原因的独特视角
- 记忆的不可靠性
- 真相的多重可能性

### 《敦刻尔克》：三线并进的时间结构
- **陆地**：一周的时间
- **海上**：一天的时间  
- **空中**：一小时的时间
- 三条时间线最终汇聚的震撼

## 《信条》：时间逆转的哲学思考

### 熵的概念
- 时间的方向性问题
- 因果关系的重新定义
- 自由意志与宿命论的探讨

### 视觉奇观
- 逆向动作的拍摄技巧
- 正向与逆向时间的同框呈现
- 实拍特效的坚持

## 诺兰电影的共同特征

1. **复杂的叙事结构**：需要观众的主动参与和思考
2. **实拍特效的坚持**：追求真实感的视觉体验
3. **哲学思辨**：通过科幻外壳探讨深刻的人性问题
4. **情感核心**：在复杂的概念下始终有人性的温暖

## 观影的思考维度

诺兰的电影提供了多个思考层面：
- **技术层面**：如何通过电影语言表达复杂概念
- **哲学层面**：时间、记忆、现实的本质是什么
- **情感层面**：在宏大叙事中的个人情感体验
- **社会层面**：科技发展对人类社会的影响

> "时间不是河流，而是风景。你可以从任何方向接近它。" — 诺兰电影中的时间哲学
        `,
      },
      {
        title: "法国新浪潮电影的诗意",
        date: "2024-01-13",
        excerpt: "戈达尔与特吕弗的电影革命",
        content: `
# 法国新浪潮电影的诗意革命

1950年代末到1960年代初，法国新浪潮运动彻底改变了电影的语言和美学，其影响至今仍在延续。

## 新浪潮的核心理念

### 作者论的确立
- **导演即作者**：电影是导演个人表达的媒介
- **个人风格**：每个导演都应该有独特的视觉语言
- **艺术自由**：摆脱商业和传统的束缚

### 技术革新
- **手持摄影**：增强真实感和即兴性
- **自然光拍摄**：摒弃传统的打光方式
- **跳切剪辑**：打破传统的连续性剪辑规则
- **同期录音**：保持声音的真实性

![French New Wave](/placeholder.svg?height=300&width=500&query=french+new+wave+godard+truffaut)

## 代表导演与作品

### 让-吕克·戈达尔：电影语言的解构者
**《精疲力尽》(1960)**
- 跳切技术的大胆运用
- 对好莱蛛类型片的致敬与颠覆
- 让-保罗·贝尔蒙多的魅力演出

**《狂人皮埃罗》(1965)**
- 色彩的象征性运用
- 公路电影的法式表达
- 对消费社会的批判

### 弗朗索瓦·特吕弗：温柔的人文主义者
**《四百击》(1959)**
- 半自传性的成长故事
- 对儿童心理的细腻刻画
- 新浪潮的开山之作

**《朱尔与吉姆》(1962)**
- 三角恋情的诗意表达
- 对自由恋爱的探讨
- 让娜·莫罗的经典表演

## 新浪潮的美学特征

### 即兴与自然
- **街头拍摄**：将摄影机带到真实的生活场景中
- **非职业演员**：使用普通人增强真实感
- **即兴对白**：保持语言的生活化

### 自反性电影
- **打破第四堵墙**：角色直接对观众说话
- **电影中的电影**：对电影本身的思考
- **元电影叙事**：揭示电影制作的过程

## 对世界电影的影响

### 美国新好莱坞
- 马丁·斯科塞斯、弗朗西斯·科波拉等导演深受影响
- 个人化表达成为主流
- 独立电影运动的兴起

### 亚洲电影
- 日本新浪潮：大岛渚、今村昌平
- 中国第五代导演：张艺谋、陈凯歌
- 韩国新电影：朴赞郁、奉俊昊

## 新浪潮的当代意义

在数字时代，新浪潮的精神仍然具有重要意义：

1. **技术民主化**：人人都可以成为电影制作者
2. **个人表达**：社交媒体时代的个人化叙事
3. **实验精神**：不断探索新的表达方式
4. **批判意识**：对主流文化的质疑与反思

## 经典台词

> "电影不是现实的反映，电影就是现实。" — 让-吕克·戈达尔

> "我一直想拍一部关于跑步的电影，因为对我来说，电影就是跑步。" — 弗朗索瓦·特吕弗

法国新浪潮不仅改变了电影，更改变了我们看待世界的方式。它提醒我们，艺术的价值不在于完美，而在于真诚的表达。
        `,
      },
    ],
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
