import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import Icon from '@/components/ui/icon';

interface Job {
  id: number;
  title: string;
  company: string;
  location: string;
  salary: string;
  type: string;
  level: string;
  description: string;
  featured?: boolean;
}

const Index = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeTab, setActiveTab] = useState('vacancies');
  
  const featuredJobs: Job[] = [
    {
      id: 1,
      title: 'Senior Frontend Developer',
      company: 'TechCorp',
      location: 'Москва',
      salary: '200 000 - 300 000 ₽',
      type: 'Полная занятость',
      level: 'Senior',
      description: 'Ищем опытного Frontend разработчика для работы над современными веб-приложениями.',
      featured: true
    },
    {
      id: 2,
      title: 'Product Designer',
      company: 'DesignHub',
      location: 'Санкт-Петербург',
      salary: '150 000 - 250 000 ₽',
      type: 'Полная занятость',
      level: 'Middle',
      description: 'Создавайте удобные и красивые интерфейсы для миллионов пользователей.',
      featured: true
    },
    {
      id: 3,
      title: 'Backend Engineer',
      company: 'DataFlow',
      location: 'Удаленно',
      salary: '180 000 - 280 000 ₽',
      type: 'Удаленная работа',
      level: 'Middle',
      description: 'Разрабатывайте масштабируемые backend решения на современном стеке.',
      featured: true
    }
  ];

  const allJobs: Job[] = [
    ...featuredJobs,
    {
      id: 4,
      title: 'QA Engineer',
      company: 'QualityFirst',
      location: 'Москва',
      salary: '120 000 - 180 000 ₽',
      type: 'Полная занятость',
      level: 'Middle',
      description: 'Обеспечивайте качество продукта на всех этапах разработки.'
    },
    {
      id: 5,
      title: 'DevOps Engineer',
      company: 'CloudTech',
      location: 'Удаленно',
      salary: '200 000 - 300 000 ₽',
      type: 'Удаленная работа',
      level: 'Senior',
      description: 'Управляйте инфраструктурой и автоматизируйте процессы развертывания.'
    },
    {
      id: 6,
      title: 'Junior Python Developer',
      company: 'StartupLab',
      location: 'Казань',
      salary: '80 000 - 120 000 ₽',
      type: 'Полная занятость',
      level: 'Junior',
      description: 'Начните карьеру в IT с командой опытных наставников.'
    }
  ];

  const filteredJobs = allJobs.filter(job => 
    job.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    job.company.toLowerCase().includes(searchQuery.toLowerCase()) ||
    job.location.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const [resumeData, setResumeData] = useState({
    fullName: '',
    email: '',
    phone: '',
    position: '',
    experience: '',
    education: '',
    skills: '',
    about: ''
  });

  return (
    <div className="min-h-screen bg-background">
      <nav className="border-b bg-white sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Icon name="Briefcase" className="text-primary" size={28} />
              <div>
                <h1 className="text-xl font-bold">ALI HR JobSpace</h1>
                <p className="text-xs text-muted-foreground">Где встречаются талант и возможность</p>
              </div>
            </div>
            <div className="hidden md:flex items-center gap-6">
              <button className="text-sm font-medium hover:text-primary transition-colors">Вакансии</button>
              <button className="text-sm font-medium hover:text-primary transition-colors">Резюме</button>
              <button className="text-sm font-medium hover:text-primary transition-colors">Компании</button>
              <Dialog>
                <DialogTrigger asChild>
                  <Button variant="outline" size="sm">
                    <Icon name="User" size={16} className="mr-2" />
                    Войти
                  </Button>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>Вход в систему</DialogTitle>
                    <DialogDescription>
                      Войдите, чтобы получить доступ ко всем возможностям
                    </DialogDescription>
                  </DialogHeader>
                  <div className="space-y-4 py-4">
                    <div className="space-y-2">
                      <Label>Email</Label>
                      <Input type="email" placeholder="your@email.com" />
                    </div>
                    <div className="space-y-2">
                      <Label>Пароль</Label>
                      <Input type="password" placeholder="••••••••" />
                    </div>
                    <Button className="w-full">Войти</Button>
                    <div className="relative">
                      <div className="absolute inset-0 flex items-center">
                        <span className="w-full border-t" />
                      </div>
                      <div className="relative flex justify-center text-xs uppercase">
                        <span className="bg-white px-2 text-muted-foreground">Или</span>
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-2">
                      <Button variant="outline">
                        <Icon name="Mail" size={16} className="mr-2" />
                        Google
                      </Button>
                      <Button variant="outline">
                        <Icon name="MessageCircle" size={16} className="mr-2" />
                        Telegram
                      </Button>
                    </div>
                  </div>
                </DialogContent>
              </Dialog>
            </div>
          </div>
        </div>
      </nav>

      <section className="bg-gradient-to-b from-blue-50 to-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h2 className="text-5xl font-bold tracking-tight">
              Найдите работу мечты
            </h2>
            <p className="text-xl text-muted-foreground">
              Тысячи вакансий от ведущих компаний. Создайте резюме за 5 минут.
            </p>
            <div className="flex gap-2 max-w-2xl mx-auto">
              <div className="relative flex-1">
                <Icon name="Search" className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" size={20} />
                <Input
                  placeholder="Должность, компания или ключевое слово"
                  className="pl-10 h-12"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
              <Button size="lg" className="h-12 px-8">
                Найти
              </Button>
            </div>
            <div className="flex flex-wrap justify-center gap-2 pt-4">
              <Badge variant="secondary" className="cursor-pointer hover:bg-primary hover:text-primary-foreground transition-colors">
                Frontend
              </Badge>
              <Badge variant="secondary" className="cursor-pointer hover:bg-primary hover:text-primary-foreground transition-colors">
                Backend
              </Badge>
              <Badge variant="secondary" className="cursor-pointer hover:bg-primary hover:text-primary-foreground transition-colors">
                Удаленная работа
              </Badge>
              <Badge variant="secondary" className="cursor-pointer hover:bg-primary hover:text-primary-foreground transition-colors">
                Москва
              </Badge>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 container mx-auto px-4">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <div className="flex items-center justify-between mb-8">
            <TabsList>
              <TabsTrigger value="vacancies" className="px-6">
                <Icon name="Briefcase" size={16} className="mr-2" />
                Вакансии
              </TabsTrigger>
              <TabsTrigger value="resume" className="px-6">
                <Icon name="FileText" size={16} className="mr-2" />
                Создать резюме
              </TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value="vacancies" className="space-y-8">
            <div>
              <div className="flex items-center gap-2 mb-6">
                <Icon name="Star" className="text-primary" size={24} />
                <h3 className="text-2xl font-bold">Рекомендуемые вакансии</h3>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredJobs.slice(0, 3).map((job) => (
                  <Card key={job.id} className="hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <div className="flex items-start justify-between mb-2">
                        <Badge variant={job.featured ? "default" : "secondary"}>
                          {job.level}
                        </Badge>
                        {job.featured && (
                          <Icon name="Star" className="text-primary fill-primary" size={16} />
                        )}
                      </div>
                      <CardTitle className="text-xl">{job.title}</CardTitle>
                      <CardDescription className="flex items-center gap-1">
                        <Icon name="Building2" size={14} />
                        {job.company}
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-3">
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Icon name="MapPin" size={16} />
                        {job.location}
                      </div>
                      <div className="flex items-center gap-2 text-sm font-semibold text-primary">
                        <Icon name="Wallet" size={16} />
                        {job.salary}
                      </div>
                      <Badge variant="outline">{job.type}</Badge>
                      <p className="text-sm text-muted-foreground line-clamp-2">
                        {job.description}
                      </p>
                    </CardContent>
                    <CardFooter>
                      <Button className="w-full">
                        Откликнуться
                      </Button>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-6">Все вакансии</h3>
              <div className="grid md:grid-cols-2 gap-4">
                {filteredJobs.slice(3).map((job) => (
                  <Card key={job.id} className="hover:shadow-md transition-shadow">
                    <CardHeader className="pb-3">
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <CardTitle className="text-lg mb-1">{job.title}</CardTitle>
                          <CardDescription className="flex items-center gap-1">
                            <Icon name="Building2" size={12} />
                            {job.company}
                          </CardDescription>
                        </div>
                        <Badge variant="secondary" className="ml-2">
                          {job.level}
                        </Badge>
                      </div>
                    </CardHeader>
                    <CardContent className="pb-3">
                      <div className="flex flex-wrap gap-3 text-sm">
                        <span className="flex items-center gap-1 text-muted-foreground">
                          <Icon name="MapPin" size={14} />
                          {job.location}
                        </span>
                        <span className="flex items-center gap-1 font-semibold text-primary">
                          <Icon name="Wallet" size={14} />
                          {job.salary}
                        </span>
                      </div>
                      <p className="text-sm text-muted-foreground mt-2 line-clamp-1">
                        {job.description}
                      </p>
                    </CardContent>
                    <CardFooter className="pt-3">
                      <Button variant="outline" className="w-full" size="sm">
                        Подробнее
                      </Button>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            </div>
          </TabsContent>

          <TabsContent value="resume" className="max-w-3xl mx-auto">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">Создайте профессиональное резюме</CardTitle>
                <CardDescription>
                  Заполните форму, и мы создадим красивое резюме, готовое к скачиванию
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="fullName">Полное имя *</Label>
                    <Input
                      id="fullName"
                      placeholder="Иван Иванов"
                      value={resumeData.fullName}
                      onChange={(e) => setResumeData({...resumeData, fullName: e.target.value})}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="position">Желаемая должность *</Label>
                    <Input
                      id="position"
                      placeholder="Frontend Developer"
                      value={resumeData.position}
                      onChange={(e) => setResumeData({...resumeData, position: e.target.value})}
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="email">Email *</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="ivan@example.com"
                      value={resumeData.email}
                      onChange={(e) => setResumeData({...resumeData, email: e.target.value})}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Телефон *</Label>
                    <Input
                      id="phone"
                      placeholder="+7 (900) 123-45-67"
                      value={resumeData.phone}
                      onChange={(e) => setResumeData({...resumeData, phone: e.target.value})}
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="experience">Опыт работы *</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Выберите уровень опыта" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="junior">Junior (0-1 год)</SelectItem>
                      <SelectItem value="middle">Middle (1-3 года)</SelectItem>
                      <SelectItem value="senior">Senior (3+ года)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="education">Образование</Label>
                  <Textarea
                    id="education"
                    placeholder="Укажите ваше образование, университет, специальность"
                    value={resumeData.education}
                    onChange={(e) => setResumeData({...resumeData, education: e.target.value})}
                    rows={3}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="skills">Навыки *</Label>
                  <Textarea
                    id="skills"
                    placeholder="React, TypeScript, Node.js, PostgreSQL..."
                    value={resumeData.skills}
                    onChange={(e) => setResumeData({...resumeData, skills: e.target.value})}
                    rows={3}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="about">О себе</Label>
                  <Textarea
                    id="about"
                    placeholder="Расскажите о себе, ваших целях и достижениях"
                    value={resumeData.about}
                    onChange={(e) => setResumeData({...resumeData, about: e.target.value})}
                    rows={4}
                  />
                </div>

                <div className="bg-blue-50 border border-primary/20 rounded-lg p-4">
                  <div className="flex gap-3">
                    <Icon name="Sparkles" className="text-primary flex-shrink-0" size={20} />
                    <div>
                      <h4 className="font-semibold mb-1">ИИ-помощник</h4>
                      <p className="text-sm text-muted-foreground mb-3">
                        Используйте искусственный интеллект для улучшения текста резюме
                      </p>
                      <Button variant="outline" size="sm">
                        <Icon name="Wand2" size={14} className="mr-2" />
                        Улучшить с помощью ИИ
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="flex gap-3">
                <Button className="flex-1">
                  <Icon name="Eye" size={16} className="mr-2" />
                  Предпросмотр
                </Button>
                <Button variant="outline" className="flex-1">
                  <Icon name="Download" size={16} className="mr-2" />
                  Скачать PDF
                </Button>
              </CardFooter>
            </Card>
          </TabsContent>
        </Tabs>
      </section>

      <section className="bg-gradient-to-b from-blue-50 to-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h3 className="text-3xl font-bold mb-4">Для работодателей</h3>
              <p className="text-xl text-muted-foreground">
                Публикуйте вакансии и находите лучших кандидатов
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              <Card>
                <CardHeader>
                  <Icon name="PenSquare" className="text-primary mb-2" size={32} />
                  <CardTitle>Создайте вакансию</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Опишите требования и условия работы за несколько минут
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <Icon name="TrendingUp" className="text-primary mb-2" size={32} />
                  <CardTitle>Продвигайте</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Поднимайте вакансии в топ и получайте больше откликов
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <Icon name="Users" className="text-primary mb-2" size={32} />
                  <CardTitle>Находите таланты</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Получите доступ к базе квалифицированных специалистов
                  </p>
                </CardContent>
              </Card>
            </div>
            <div className="text-center mt-8">
              <Button size="lg">
                <Icon name="Plus" size={16} className="mr-2" />
                Разместить вакансию
              </Button>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t bg-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Icon name="Briefcase" className="text-primary" size={24} />
                <span className="font-bold">ALI HR JobSpace</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Где встречаются талант и возможность
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Для соискателей</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-primary">Поиск вакансий</a></li>
                <li><a href="#" className="hover:text-primary">Создать резюме</a></li>
                <li><a href="#" className="hover:text-primary">Карьерные советы</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Для работодателей</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-primary">Разместить вакансию</a></li>
                <li><a href="#" className="hover:text-primary">Поиск резюме</a></li>
                <li><a href="#" className="hover:text-primary">Тарифы</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Поддержка</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-primary">Помощь</a></li>
                <li><a href="#" className="hover:text-primary">Контакты</a></li>
                <li><a href="#" className="hover:text-primary">О проекте</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t mt-8 pt-8 text-center text-sm text-muted-foreground">
            © 2024 ALI HR JobSpace. Все права защищены.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
