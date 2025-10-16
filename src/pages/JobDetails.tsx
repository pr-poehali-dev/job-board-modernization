import { useParams, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import Icon from '@/components/ui/icon';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

const JobDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const jobs = [
    {
      id: '1',
      title: 'Senior Frontend Developer',
      company: 'TechCorp',
      location: 'Москва',
      salary: '200 000 - 300 000 ₽',
      type: 'Полная занятость',
      level: 'Senior',
      description: 'Ищем опытного Frontend разработчика для работы над современными веб-приложениями.',
      requirements: [
        'Опыт работы с React 5+ лет',
        'Знание TypeScript, Redux, Next.js',
        'Опыт создания адаптивных интерфейсов',
        'Понимание принципов accessibility',
        'Навыки code review и менторинга'
      ],
      responsibilities: [
        'Разработка новых функций продукта',
        'Оптимизация производительности приложений',
        'Участие в архитектурных решениях',
        'Менторинг junior разработчиков',
        'Code review и поддержка качества кода'
      ],
      benefits: [
        'Гибкий график работы',
        'Удаленная работа или гибрид',
        'ДМС для сотрудника и семьи',
        'Обучение за счет компании',
        'Корпоративные мероприятия'
      ],
      about: 'TechCorp — лидер в разработке SaaS решений для бизнеса. Наша команда из 200+ специалистов создает продукты, которыми пользуются более 10 000 компаний по всему миру.'
    },
    {
      id: '2',
      title: 'Product Designer',
      company: 'DesignHub',
      location: 'Санкт-Петербург',
      salary: '150 000 - 250 000 ₽',
      type: 'Полная занятость',
      level: 'Middle',
      description: 'Создавайте удобные и красивые интерфейсы для миллионов пользователей.',
      requirements: [
        'Опыт работы Product Designer 3+ года',
        'Владение Figma на продвинутом уровне',
        'Портфолио с реализованными проектами',
        'Понимание UX research методологий',
        'Навыки прототипирования'
      ],
      responsibilities: [
        'Проектирование пользовательских интерфейсов',
        'Проведение UX исследований',
        'Создание дизайн-систем',
        'Работа с продуктовой командой',
        'A/B тестирование решений'
      ],
      benefits: [
        'Креативная атмосфера',
        'Современный офис в центре',
        'Бюджет на конференции',
        'Гибкий график',
        'Yearly bonuses'
      ],
      about: 'DesignHub — дизайн-студия полного цикла, создающая digital-продукты для крупнейших брендов.'
    }
  ];

  const job = jobs.find(j => j.id === id);

  if (!job) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Вакансия не найдена</h2>
          <Button onClick={() => navigate('/')}>Вернуться на главную</Button>
        </div>
      </div>
    );
  }

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
              Назад к поиску
            </Button>
          </div>
        </div>
      </nav>

      <div className="container mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-6">
            <Card>
              <CardHeader>
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <CardTitle className="text-3xl mb-2">{job.title}</CardTitle>
                    <CardDescription className="flex items-center gap-2 text-base">
                      <Icon name="Building2" size={18} />
                      {job.company}
                    </CardDescription>
                  </div>
                  <Badge variant="default" className="text-sm">
                    {job.level}
                  </Badge>
                </div>

                <div className="flex flex-wrap gap-4 text-sm">
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Icon name="MapPin" size={18} />
                    {job.location}
                  </div>
                  <div className="flex items-center gap-2 font-semibold text-primary">
                    <Icon name="Wallet" size={18} />
                    {job.salary}
                  </div>
                  <Badge variant="outline">{job.type}</Badge>
                </div>
              </CardHeader>

              <CardContent className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold mb-3 flex items-center gap-2">
                    <Icon name="FileText" size={20} />
                    Описание вакансии
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">{job.description}</p>
                </div>

                <Separator />

                <div>
                  <h3 className="text-xl font-semibold mb-3 flex items-center gap-2">
                    <Icon name="CheckCircle" size={20} />
                    Требования
                  </h3>
                  <ul className="space-y-2">
                    {job.requirements.map((req, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <Icon name="Check" className="text-primary mt-1 flex-shrink-0" size={16} />
                        <span className="text-muted-foreground">{req}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <Separator />

                <div>
                  <h3 className="text-xl font-semibold mb-3 flex items-center gap-2">
                    <Icon name="Target" size={20} />
                    Обязанности
                  </h3>
                  <ul className="space-y-2">
                    {job.responsibilities.map((resp, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <Icon name="ChevronRight" className="text-primary mt-1 flex-shrink-0" size={16} />
                        <span className="text-muted-foreground">{resp}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <Separator />

                <div>
                  <h3 className="text-xl font-semibold mb-3 flex items-center gap-2">
                    <Icon name="Gift" size={20} />
                    Что мы предлагаем
                  </h3>
                  <ul className="space-y-2">
                    {job.benefits.map((benefit, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <Icon name="Star" className="text-primary mt-1 flex-shrink-0 fill-primary" size={16} />
                        <span className="text-muted-foreground">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <Separator />

                <div>
                  <h3 className="text-xl font-semibold mb-3 flex items-center gap-2">
                    <Icon name="Info" size={20} />
                    О компании
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">{job.about}</p>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="lg:col-span-1">
            <div className="sticky top-24 space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>Откликнуться на вакансию</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button className="w-full" size="lg">
                        <Icon name="Send" size={16} className="mr-2" />
                        Отправить резюме
                      </Button>
                    </DialogTrigger>
                    <DialogContent>
                      <DialogHeader>
                        <DialogTitle>Отклик на вакансию</DialogTitle>
                        <DialogDescription>
                          {job.title} в {job.company}
                        </DialogDescription>
                      </DialogHeader>
                      <div className="space-y-4 py-4">
                        <div className="space-y-2">
                          <Label>Ваше имя</Label>
                          <Input placeholder="Иван Иванов" />
                        </div>
                        <div className="space-y-2">
                          <Label>Email</Label>
                          <Input type="email" placeholder="ivan@example.com" />
                        </div>
                        <div className="space-y-2">
                          <Label>Телефон</Label>
                          <Input placeholder="+7 (900) 123-45-67" />
                        </div>
                        <div className="space-y-2">
                          <Label>Сопроводительное письмо</Label>
                          <Textarea rows={4} placeholder="Расскажите, почему вы подходите на эту позицию..." />
                        </div>
                        <div className="space-y-2">
                          <Label>Резюме</Label>
                          <Button variant="outline" className="w-full">
                            <Icon name="Upload" size={16} className="mr-2" />
                            Загрузить файл
                          </Button>
                        </div>
                        <Button className="w-full">
                          Отправить отклик
                        </Button>
                      </div>
                    </DialogContent>
                  </Dialog>

                  <Button variant="outline" className="w-full">
                    <Icon name="Bookmark" size={16} className="mr-2" />
                    Сохранить
                  </Button>

                  <Button variant="outline" className="w-full">
                    <Icon name="Share2" size={16} className="mr-2" />
                    Поделиться
                  </Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-base flex items-center gap-2">
                    <Icon name="Sparkles" className="text-primary" size={20} />
                    ИИ-совпадение
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-muted-foreground">Соответствие профилю</span>
                      <span className="text-lg font-bold text-primary">85%</span>
                    </div>
                    <div className="w-full bg-secondary rounded-full h-2">
                      <div className="bg-primary h-2 rounded-full" style={{ width: '85%' }}></div>
                    </div>
                    <p className="text-xs text-muted-foreground">
                      Ваш профиль хорошо подходит для этой вакансии. Рекомендуем откликнуться!
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-base">Похожие вакансии</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <button className="w-full text-left p-3 rounded-lg hover:bg-secondary transition-colors">
                    <h4 className="font-semibold text-sm mb-1">Middle Frontend Developer</h4>
                    <p className="text-xs text-muted-foreground">InnoTech • 150 000 ₽</p>
                  </button>
                  <button className="w-full text-left p-3 rounded-lg hover:bg-secondary transition-colors">
                    <h4 className="font-semibold text-sm mb-1">React Developer</h4>
                    <p className="text-xs text-muted-foreground">StartupLab • 180 000 ₽</p>
                  </button>
                  <button className="w-full text-left p-3 rounded-lg hover:bg-secondary transition-colors">
                    <h4 className="font-semibold text-sm mb-1">Lead Frontend Engineer</h4>
                    <p className="text-xs text-muted-foreground">CodeFactory • 280 000 ₽</p>
                  </button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobDetails;
