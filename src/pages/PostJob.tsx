import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import Icon from '@/components/ui/icon';
import { Badge } from '@/components/ui/badge';

const PostJob = () => {
  const navigate = useNavigate();
  const [jobData, setJobData] = useState({
    title: '',
    company: '',
    location: '',
    salaryMin: '',
    salaryMax: '',
    type: '',
    level: '',
    description: '',
    requirements: '',
    responsibilities: '',
    benefits: ''
  });

  const [aiSuggestions, setAiSuggestions] = useState({
    title: ['Senior Frontend Developer', 'React Developer', 'JavaScript Engineer'],
    description: 'Разрабатывайте современные веб-приложения с использованием React и TypeScript...',
    keywords: ['React', 'TypeScript', 'Frontend', 'JavaScript', 'CSS']
  });

  return (
    <div className="min-h-screen bg-background">
      <nav className="border-b bg-white sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <button onClick={() => navigate('/')} className="flex items-center gap-2">
              <Icon name="Briefcase" className="text-primary" size={28} />
              <div className="text-left">
                <h1 className="text-xl font-bold">ALI HR JobSpace</h1>
                <p className="text-xs text-muted-foreground">Где встречаются талант и возможность</p>
              </div>
            </button>
            <Button variant="outline" onClick={() => navigate('/')}>
              <Icon name="ArrowLeft" size={16} className="mr-2" />
              Назад
            </Button>
          </div>
        </div>
      </nav>

      <div className="container mx-auto px-4 py-8">
        <div className="max-w-5xl mx-auto">
          <div className="mb-8">
            <h2 className="text-3xl font-bold mb-2">Разместить вакансию</h2>
            <p className="text-muted-foreground">
              Создайте привлекательное объявление и найдите лучших кандидатов
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2 space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Icon name="FileText" size={20} />
                    Основная информация
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="title">Название вакансии *</Label>
                    <Input
                      id="title"
                      placeholder="Senior Frontend Developer"
                      value={jobData.title}
                      onChange={(e) => setJobData({...jobData, title: e.target.value})}
                    />
                    <div className="flex gap-2 flex-wrap mt-2">
                      <span className="text-xs text-muted-foreground">ИИ предлагает:</span>
                      {aiSuggestions.title.map((suggestion, i) => (
                        <Badge
                          key={i}
                          variant="secondary"
                          className="cursor-pointer hover:bg-primary hover:text-primary-foreground transition-colors"
                          onClick={() => setJobData({...jobData, title: suggestion})}
                        >
                          {suggestion}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="company">Компания *</Label>
                      <Input
                        id="company"
                        placeholder="TechCorp"
                        value={jobData.company}
                        onChange={(e) => setJobData({...jobData, company: e.target.value})}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="location">Локация *</Label>
                      <Input
                        id="location"
                        placeholder="Москва / Удаленно"
                        value={jobData.location}
                        onChange={(e) => setJobData({...jobData, location: e.target.value})}
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label>Зарплата от (₽) *</Label>
                      <Input
                        type="number"
                        placeholder="150000"
                        value={jobData.salaryMin}
                        onChange={(e) => setJobData({...jobData, salaryMin: e.target.value})}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label>Зарплата до (₽) *</Label>
                      <Input
                        type="number"
                        placeholder="250000"
                        value={jobData.salaryMax}
                        onChange={(e) => setJobData({...jobData, salaryMax: e.target.value})}
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label>Тип занятости *</Label>
                      <Select value={jobData.type} onValueChange={(val) => setJobData({...jobData, type: val})}>
                        <SelectTrigger>
                          <SelectValue placeholder="Выберите тип" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="full">Полная занятость</SelectItem>
                          <SelectItem value="part">Частичная занятость</SelectItem>
                          <SelectItem value="remote">Удаленная работа</SelectItem>
                          <SelectItem value="contract">Контракт</SelectItem>
                          <SelectItem value="internship">Стажировка</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label>Уровень *</Label>
                      <Select value={jobData.level} onValueChange={(val) => setJobData({...jobData, level: val})}>
                        <SelectTrigger>
                          <SelectValue placeholder="Выберите уровень" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="intern">Intern</SelectItem>
                          <SelectItem value="junior">Junior</SelectItem>
                          <SelectItem value="middle">Middle</SelectItem>
                          <SelectItem value="senior">Senior</SelectItem>
                          <SelectItem value="lead">Lead</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Icon name="AlignLeft" size={20} />
                    Описание вакансии
                  </CardTitle>
                  <CardDescription>
                    Подробно опишите позицию и требования
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <Label htmlFor="description">Описание *</Label>
                      <Button variant="ghost" size="sm">
                        <Icon name="Wand2" size={14} className="mr-2" />
                        ИИ-генерация
                      </Button>
                    </div>
                    <Textarea
                      id="description"
                      placeholder="Опишите вакансию, чем будет заниматься сотрудник..."
                      rows={5}
                      value={jobData.description}
                      onChange={(e) => setJobData({...jobData, description: e.target.value})}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="requirements">Требования *</Label>
                    <Textarea
                      id="requirements"
                      placeholder="Перечислите требования к кандидату (каждое с новой строки)"
                      rows={4}
                      value={jobData.requirements}
                      onChange={(e) => setJobData({...jobData, requirements: e.target.value})}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="responsibilities">Обязанности</Label>
                    <Textarea
                      id="responsibilities"
                      placeholder="Опишите основные обязанности (каждая с новой строки)"
                      rows={4}
                      value={jobData.responsibilities}
                      onChange={(e) => setJobData({...jobData, responsibilities: e.target.value})}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="benefits">Что предлагаем</Label>
                    <Textarea
                      id="benefits"
                      placeholder="ДМС, гибкий график, удаленка..."
                      rows={3}
                      value={jobData.benefits}
                      onChange={(e) => setJobData({...jobData, benefits: e.target.value})}
                    />
                  </div>
                </CardContent>
              </Card>

              <div className="flex gap-3">
                <Button className="flex-1" size="lg">
                  <Icon name="Eye" size={16} className="mr-2" />
                  Предпросмотр
                </Button>
                <Button variant="outline" className="flex-1" size="lg">
                  <Icon name="Save" size={16} className="mr-2" />
                  Сохранить черновик
                </Button>
              </div>
            </div>

            <div className="lg:col-span-1 space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle className="text-base flex items-center gap-2">
                    <Icon name="Sparkles" className="text-primary" size={20} />
                    ИИ-помощник
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-sm mb-2">SEO-оптимизация</h4>
                    <div className="flex flex-wrap gap-2">
                      {aiSuggestions.keywords.map((keyword, i) => (
                        <Badge key={i} variant="outline">
                          {keyword}
                        </Badge>
                      ))}
                    </div>
                    <p className="text-xs text-muted-foreground mt-2">
                      Используйте эти ключевые слова для лучшей видимости
                    </p>
                  </div>

                  <Button variant="outline" className="w-full">
                    <Icon name="RefreshCw" size={14} className="mr-2" />
                    Обновить предложения
                  </Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-base flex items-center gap-2">
                    <Icon name="TrendingUp" size={20} />
                    Продвижение
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium">Базовая публикация</span>
                      <Badge variant="secondary">Бесплатно</Badge>
                    </div>
                    <p className="text-xs text-muted-foreground">
                      Стандартное размещение в общем списке
                    </p>
                  </div>

                  <div className="p-3 border-2 border-primary rounded-lg bg-primary/5">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-semibold">Премиум</span>
                      <Badge variant="default">2 990 ₽</Badge>
                    </div>
                    <ul className="space-y-1 text-xs text-muted-foreground mb-3">
                      <li className="flex items-center gap-1">
                        <Icon name="Check" size={12} className="text-primary" />
                        Топ-3 в поиске на 7 дней
                      </li>
                      <li className="flex items-center gap-1">
                        <Icon name="Check" size={12} className="text-primary" />
                        Выделение цветом
                      </li>
                      <li className="flex items-center gap-1">
                        <Icon name="Check" size={12} className="text-primary" />
                        +300% просмотров
                      </li>
                    </ul>
                    <Button className="w-full" size="sm">
                      Выбрать
                    </Button>
                  </div>

                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium">VIP размещение</span>
                      <Badge>4 990 ₽</Badge>
                    </div>
                    <ul className="space-y-1 text-xs text-muted-foreground">
                      <li className="flex items-center gap-1">
                        <Icon name="Check" size={12} />
                        Всё из Премиум
                      </li>
                      <li className="flex items-center gap-1">
                        <Icon name="Check" size={12} />
                        Email рассылка кандидатам
                      </li>
                      <li className="flex items-center gap-1">
                        <Icon name="Check" size={12} />
                        Публикация в соцсетях
                      </li>
                    </ul>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-base">Статистика</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">Ожидаемые просмотры</span>
                    <span className="font-bold">~450</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">Средний отклик</span>
                    <span className="font-bold">15-25</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">Время заполнения</span>
                    <span className="font-bold">~14 дней</span>
                  </div>
                </CardContent>
              </Card>

              <Button className="w-full" size="lg">
                <Icon name="Send" size={16} className="mr-2" />
                Опубликовать вакансию
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostJob;
