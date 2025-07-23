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
    { id: "home", label: "首页", icon: Home },
    { id: "photography", label: "摄影", icon: Camera },
    { id: "reading", label: "读书笔记", icon: BookOpen },
    { id: "daily", label: "日常随想", icon: Coffee },
    { id: "travel", label: "旅行记录", icon: Plane },
    { id: "music", label: "音乐分享", icon: Music },
    { id: "mood", label: "心情日记", icon: Heart },
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

  const articles = {
    photography: [
      { title: "街头摄影技巧分享", date: "2024-01-20", excerpt: "如何在繁忙的街道中捕捉动人瞬间" },
      { title: "光影的艺术", date: "2024-01-18", excerpt: "探索自然光在摄影中的运用" },
      { title: "黑白摄影的魅力", date: "2024-01-15", excerpt: "为什么黑白照片总是那么有故事感" },
    ],
    reading: [
      { title: "《百年孤独》读后感", date: "2024-01-19", excerpt: "魔幻现实主义的文学魅力" },
      { title: "村上春树的孤独美学", date: "2024-01-12", excerpt: "从《挪威的森林》谈起" },
      { title: "科幻小说推荐清单", date: "2024-01-08", excerpt: "那些改变我世界观的科幻作品" },
    ],
    daily: [
      { title: "关于慢生活的思考", date: "2024-01-20", excerpt: "在快节奏的世界中寻找内心的平静" },
      { title: "咖啡与人生", date: "2024-01-17", excerpt: "每一杯咖啡都有它的故事" },
      { title: "城市中的小确幸", date: "2024-01-14", excerpt: "发现生活中被忽略的美好瞬间" },
    ],
    travel: [
      { title: "京都的秋天", date: "2024-01-16", excerpt: "红叶季节的古都之旅" },
      { title: "西藏行记", date: "2024-01-10", excerpt: "高原上的心灵洗礼" },
      { title: "海边小镇的慢时光", date: "2024-01-05", excerpt: "在海风中找到内心的宁静" },
    ],
    music: [
      { title: "我的年度歌单", date: "2024-01-18", excerpt: "2024年最打动我的音乐作品" },
      { title: "爵士乐入门指南", date: "2024-01-13", excerpt: "从经典专辑开始的音乐之旅" },
      { title: "独立音乐的魅力", date: "2024-01-09", excerpt: "那些小众但动人的声音" },
    ],
    mood: [
      { title: "关于成长的碎碎念", date: "2024-01-19", excerpt: "三十岁后的人生感悟" },
      { title: "孤独是一种能力", date: "2024-01-11", excerpt: "学会与自己相处的艺术" },
      { title: "写给未来的自己", date: "2024-01-06", excerpt: "时间胶囊里的心情记录" },
    ],
  }

  const renderFeaturedItem = (item: any) => {
    const categoryInfo = navigationItems.find((nav) => nav.id === item.category)

    switch (item.type) {
      case "quote":
        return (
          <Card
            key={item.id}
            className="p-6 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-950/20 dark:to-indigo-950/20 border-l-4 border-l-blue-500"
          >
            <div className="flex items-start space-x-3">
              <Quote className="h-6 w-6 text-blue-500 mt-1 flex-shrink-0" />
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
            className="p-6 hover:shadow-md transition-shadow cursor-pointer border-l-4 border-l-orange-500"
          >
            <div className="flex items-start space-x-3">
              <FileText className="h-5 w-5 text-orange-500 mt-1 flex-shrink-0" />
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
                <h1 className="text-4xl md:text-6xl font-bold mb-4">张三的生活札记</h1>
                <p className="text-lg md:text-xl opacity-90">记录生活的美好瞬间</p>
              </div>
            </div>
          </div>

          {/* 个人简介区域 */}
          <Card className="p-8 bg-gradient-to-r from-slate-50 to-gray-50 dark:from-slate-900/50 dark:to-gray-900/50">
            <div className="flex items-start space-x-6">
              <Avatar className="h-20 w-20 border-4 border-white shadow-lg">
                <AvatarImage src="/placeholder.svg?height=80&width=80" alt="头像" />
                <AvatarFallback className="text-2xl">张三</AvatarFallback>
              </Avatar>
              <div className="flex-1">
                <h2 className="text-2xl font-bold mb-4">关于我</h2>
                <div className="prose prose-gray dark:prose-invert max-w-none">
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    你好，我是张三。这里是我的个人空间，用来记录生活中的点点滴滴。
                  </p>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    我喜欢摄影、阅读、旅行和音乐。相信生活中的每一个瞬间都值得被记录和分享。
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    在这里，你会看到我精心挑选的文章、感悟和图片，希望能与你产生共鸣。
                  </p>
                </div>
                <div className="flex items-center space-x-4 mt-6 pt-4 border-t border-gray-200 dark:border-gray-700">
                  <span className="text-sm font-medium text-muted-foreground">关注我：</span>
                  <div className="flex items-center space-x-3">
                    <Button
                      variant="ghost"
                      size="sm"
                      className="h-9 w-9 p-0 hover:bg-gray-100 dark:hover:bg-gray-800"
                      asChild
                    >
                      <a
                        href="https://github.com/yourusername"
                        target="_blank"
                        rel="noopener noreferrer"
                        title="GitHub"
                      >
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
                        href="https://xiaohongshu.com/user/profile/yourid"
                        target="_blank"
                        rel="noopener noreferrer"
                        title="小红书"
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
                        href="https://space.bilibili.com/yourid"
                        target="_blank"
                        rel="noopener noreferrer"
                        title="哔哩哔哩"
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
                        href="https://www.mafengwo.cn/u/yourid.html"
                        target="_blank"
                        rel="noopener noreferrer"
                        title="蚂蜂窝"
                      >
                        <div className="h-4 w-4 bg-yellow-500 rounded-sm flex items-center justify-center">
                          <span className="text-white text-xs font-bold">蜂</span>
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
              <h2 className="text-2xl font-bold">精选内容</h2>
              <p className="text-muted-foreground text-sm">我亲自挑选的文章、句子和图片</p>
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
            <p className="text-muted-foreground">这里收录了我关于{sectionTitle.toLowerCase()}的所有文章</p>
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
        </div>
      )
    }
  }

  return (
    <div className="min-h-screen bg-background flex">
      {/* 可爱的鼠标跟随字母V */}
      <div
        className={`fixed pointer-events-none z-50 transition-all duration-300 ${
          isMouseMoving ? "opacity-100 scale-100" : "opacity-0 scale-75"
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
              <AvatarFallback>张三</AvatarFallback>
            </Avatar>
            <div>
              <h2 className="font-semibold">张三的生活</h2>
              <p className="text-xs text-muted-foreground">记录美好时光</p>
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
            <p className="mb-2">© 2024 张三的生活札记</p>
            <p>用心记录每一个美好瞬间</p>
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
