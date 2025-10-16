import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

interface Article {
  id: number;
  title: string;
  excerpt: string;
  image: string;
  author: {
    name: string;
    avatar: string;
  };
  date: string;
  category: string;
  readTime: string;
}

interface Author {
  id: number;
  name: string;
  avatar: string;
  role: string;
  articles: number;
}

const Index = () => {
  const [activeSection, setActiveSection] = useState<'home' | 'authors'>('home');

  const articles: Article[] = [
    {
      id: 1,
      title: 'Современные тренды веб-дизайна 2024',
      excerpt: 'Исследуем актуальные направления в дизайне интерфейсов и UX/UI паттернов, которые формируют индустрию.',
      image: 'https://cdn.poehali.dev/projects/e09562e9-c118-4af3-b644-9d9b271d9939/files/87d08da6-8109-4927-971a-0067f6a8ff21.jpg',
      author: {
        name: 'Анна Смирнова',
        avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop'
      },
      date: '15 октября 2024',
      category: 'Дизайн',
      readTime: '5 мин'
    },
    {
      id: 2,
      title: 'React 19: Что нового?',
      excerpt: 'Обзор ключевых обновлений и новых возможностей последней версии популярной библиотеки.',
      image: 'https://cdn.poehali.dev/projects/e09562e9-c118-4af3-b644-9d9b271d9939/files/a38e2c28-2c22-40a0-97e6-eb1bb8df5a92.jpg',
      author: {
        name: 'Дмитрий Козлов',
        avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop'
      },
      date: '12 октября 2024',
      category: 'Разработка',
      readTime: '8 мин'
    },
    {
      id: 3,
      title: 'Искусство создания контента',
      excerpt: 'Практические советы по написанию текстов, которые увлекают читателей и повышают вовлеченность.',
      image: 'https://images.unsplash.com/photo-1455390582262-044cdead277a?w=800&h=600&fit=crop',
      author: {
        name: 'Мария Волкова',
        avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop'
      },
      date: '10 октября 2024',
      category: 'Контент',
      readTime: '6 мин'
    },
    {
      id: 4,
      title: 'TypeScript: Продвинутые паттерны',
      excerpt: 'Глубокое погружение в сложные типы и паттерны для написания масштабируемого кода.',
      image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&h=600&fit=crop',
      author: {
        name: 'Дмитрий Козлов',
        avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop'
      },
      date: '8 октября 2024',
      category: 'Разработка',
      readTime: '10 мин'
    },
    {
      id: 5,
      title: 'Психология цвета в дизайне',
      excerpt: 'Как правильно использовать цветовые схемы для влияния на восприятие пользователей.',
      image: 'https://images.unsplash.com/photo-1541701494587-cb58502866ab?w=800&h=600&fit=crop',
      author: {
        name: 'Анна Смирнова',
        avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop'
      },
      date: '5 октября 2024',
      category: 'Дизайн',
      readTime: '7 мин'
    },
    {
      id: 6,
      title: 'SEO в 2024: Новые правила',
      excerpt: 'Современные стратегии продвижения сайтов с учетом последних алгоритмов поисковых систем.',
      image: 'https://images.unsplash.com/photo-1432888622747-4eb9a8f2c293?w=800&h=600&fit=crop',
      author: {
        name: 'Мария Волкова',
        avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop'
      },
      date: '3 октября 2024',
      category: 'Маркетинг',
      readTime: '9 мин'
    }
  ];

  const authors: Author[] = [
    {
      id: 1,
      name: 'Анна Смирнова',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop',
      role: 'UI/UX Дизайнер',
      articles: 24
    },
    {
      id: 2,
      name: 'Дмитрий Козлов',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop',
      role: 'Frontend Разработчик',
      articles: 18
    },
    {
      id: 3,
      name: 'Мария Волкова',
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop',
      role: 'Контент-менеджер',
      articles: 32
    },
    {
      id: 4,
      name: 'Алексей Иванов',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop',
      role: 'Tech Lead',
      articles: 15
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-muted/20 to-background">
      <nav className="sticky top-0 z-50 backdrop-blur-lg bg-background/80 border-b border-border/50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                <Icon name="Sparkles" size={24} className="text-white" />
              </div>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                ModernBlog
              </h1>
            </div>
            
            <div className="flex items-center gap-6">
              <Button
                variant={activeSection === 'home' ? 'default' : 'ghost'}
                onClick={() => setActiveSection('home')}
                className="font-medium"
              >
                <Icon name="Home" size={18} className="mr-2" />
                Главная
              </Button>
              <Button
                variant={activeSection === 'authors' ? 'default' : 'ghost'}
                onClick={() => setActiveSection('authors')}
                className="font-medium"
              >
                <Icon name="Users" size={18} className="mr-2" />
                Авторы
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {activeSection === 'home' && (
        <>
          <section className="py-20 px-4">
            <div className="container mx-auto text-center animate-fade-in">
              <Badge className="mb-4 text-sm py-1 px-4 bg-primary/10 text-primary border-primary/20">
                🚀 Новое поколение блогов
              </Badge>
              <h2 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                Истории, которые вдохновляют
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
                Погрузитесь в мир технологий, дизайна и креатива. Читайте статьи от лучших экспертов индустрии.
              </p>
              <Button size="lg" className="text-lg px-8 py-6 rounded-full shadow-lg hover:shadow-xl transition-shadow">
                Начать читать
                <Icon name="ArrowRight" size={20} className="ml-2" />
              </Button>
            </div>
          </section>

          <section className="py-12 px-4">
            <div className="container mx-auto">
              <div className="flex items-center justify-between mb-8">
                <h3 className="text-3xl font-bold">Последние статьи</h3>
                <Button variant="outline" className="gap-2">
                  <Icon name="Filter" size={18} />
                  Фильтры
                </Button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {articles.map((article, index) => (
                  <Card 
                    key={article.id} 
                    className="overflow-hidden hover:shadow-xl transition-all duration-300 group animate-fade-in border-border/50 backdrop-blur-sm"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <div className="relative overflow-hidden h-48">
                      <img 
                        src={article.image} 
                        alt={article.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <Badge className="absolute top-4 right-4 bg-white/90 text-foreground backdrop-blur-sm">
                        {article.category}
                      </Badge>
                    </div>
                    
                    <CardHeader>
                      <CardTitle className="line-clamp-2 group-hover:text-primary transition-colors">
                        {article.title}
                      </CardTitle>
                      <CardDescription className="line-clamp-2 text-base">
                        {article.excerpt}
                      </CardDescription>
                    </CardHeader>

                    <CardContent>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <Avatar className="w-10 h-10 border-2 border-border">
                            <AvatarImage src={article.author.avatar} alt={article.author.name} />
                            <AvatarFallback>{article.author.name[0]}</AvatarFallback>
                          </Avatar>
                          <div>
                            <p className="font-medium text-sm">{article.author.name}</p>
                            <p className="text-xs text-muted-foreground">{article.date}</p>
                          </div>
                        </div>
                      </div>
                    </CardContent>

                    <CardFooter className="border-t pt-4">
                      <div className="flex items-center justify-between w-full">
                        <span className="text-sm text-muted-foreground flex items-center gap-1">
                          <Icon name="Clock" size={14} />
                          {article.readTime}
                        </span>
                        <Button variant="ghost" size="sm" className="group-hover:text-primary">
                          Читать
                          <Icon name="ArrowRight" size={16} className="ml-1" />
                        </Button>
                      </div>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            </div>
          </section>
        </>
      )}

      {activeSection === 'authors' && (
        <section className="py-20 px-4">
          <div className="container mx-auto animate-fade-in">
            <div className="text-center mb-16">
              <Badge className="mb-4 text-sm py-1 px-4 bg-secondary/10 text-secondary border-secondary/20">
                ✨ Наша команда
              </Badge>
              <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent">
                Знакомьтесь с авторами
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Эксперты, которые делятся своими знаниями и опытом
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {authors.map((author, index) => (
                <Card 
                  key={author.id}
                  className="text-center hover:shadow-xl transition-all duration-300 group animate-scale-in border-border/50"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <CardHeader className="pb-4">
                    <div className="flex justify-center mb-4">
                      <Avatar className="w-24 h-24 border-4 border-primary/20 group-hover:border-primary/40 transition-colors">
                        <AvatarImage src={author.avatar} alt={author.name} />
                        <AvatarFallback className="text-2xl">{author.name[0]}</AvatarFallback>
                      </Avatar>
                    </div>
                    <CardTitle className="text-xl group-hover:text-primary transition-colors">
                      {author.name}
                    </CardTitle>
                    <CardDescription className="text-base">
                      {author.role}
                    </CardDescription>
                  </CardHeader>
                  
                  <CardContent>
                    <div className="flex items-center justify-center gap-2 mb-4">
                      <Icon name="FileText" size={18} className="text-muted-foreground" />
                      <span className="text-lg font-semibold">{author.articles}</span>
                      <span className="text-sm text-muted-foreground">статей</span>
                    </div>
                    <Button className="w-full" variant="outline">
                      <Icon name="Mail" size={16} className="mr-2" />
                      Написать
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      )}

      <footer className="border-t border-border/50 py-12 px-4 mt-20 backdrop-blur-sm">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                  <Icon name="Sparkles" size={20} className="text-white" />
                </div>
                <h3 className="text-xl font-bold">ModernBlog</h3>
              </div>
              <p className="text-sm text-muted-foreground">
                Платформа для публикации качественного контента и обмена опытом
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Разделы</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="hover:text-primary cursor-pointer transition-colors">Дизайн</li>
                <li className="hover:text-primary cursor-pointer transition-colors">Разработка</li>
                <li className="hover:text-primary cursor-pointer transition-colors">Контент</li>
                <li className="hover:text-primary cursor-pointer transition-colors">Маркетинг</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Сообщество</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="hover:text-primary cursor-pointer transition-colors">О проекте</li>
                <li className="hover:text-primary cursor-pointer transition-colors">Авторы</li>
                <li className="hover:text-primary cursor-pointer transition-colors">Контакты</li>
                <li className="hover:text-primary cursor-pointer transition-colors">FAQ</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Подписка</h4>
              <p className="text-sm text-muted-foreground mb-4">
                Получайте новые статьи на почту
              </p>
              <div className="flex gap-2">
                <Button className="flex-1">
                  <Icon name="Bell" size={16} className="mr-2" />
                  Подписаться
                </Button>
              </div>
            </div>
          </div>

          <div className="border-t border-border/50 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground">
              © 2024 ModernBlog. Все права защищены
            </p>
            <div className="flex gap-4">
              <Button variant="ghost" size="sm">
                <Icon name="Github" size={18} />
              </Button>
              <Button variant="ghost" size="sm">
                <Icon name="Twitter" size={18} />
              </Button>
              <Button variant="ghost" size="sm">
                <Icon name="Linkedin" size={18} />
              </Button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
