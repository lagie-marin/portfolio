import { createContext, useState, useContext, ReactNode, useEffect } from 'react';
import { Button } from 'react-bootstrap';
import { useLocation, useNavigate } from 'react-router-dom';

type Language = 'fr' | 'en';

// Define types for your translations
interface TranslationSet {
  [key: string]: string;
}

interface Translations {
  fr: TranslationSet;
  en: TranslationSet;
}

interface LanguageContextType {
  language: Language;
  setLanguage: (language: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>('fr');
  const location = useLocation();
  const navigate = useNavigate();
  
  // Simplified language detection from URL
  useEffect(() => {
    const path = location.pathname;
    if (path.startsWith('/en')) {
      setLanguageState('en');
    } else if (path.startsWith('/fr')) {
      setLanguageState('fr');
    }
  }, [location.pathname]);

  // Simplified URL updating when language changes
  const setLanguage = (newLanguage: Language) => {
    setLanguageState(newLanguage);
    
    const currentPath = location.pathname;
    let newPath;
    
    // For root path
    if (currentPath === '/') {
      newPath = `/${newLanguage}`;
    } 
    // For language-specific root paths
    else if (currentPath === '/fr' || currentPath === '/en') {
      newPath = `/${newLanguage}`;
    }
    // For paths with language prefix
    else if (currentPath.startsWith('/fr/') || currentPath.startsWith('/en/')) {
      const pathWithoutLang = currentPath.substring(3);
      newPath = `/${newLanguage}${pathWithoutLang}`;
    }
    // Fallback - just add language prefix
    else {
      newPath = `/${newLanguage}`;
    }
    
    navigate(newPath);
  };

  const translations: Translations = {
    fr: {
      'main.skills': 'Mes Compétences',
      'main.school': 'Études',
      'contact.button': 'Me contacter',
      'contact.toaster': 'Copié dans le presse-papier',
      'contact.or': 'Ou',
      'project.discover': 'Découvrez mes derniers projets dans le développement informatique',
      'project.view': 'Voir le projet',
      'project.description': 'Description:',
      'nav.skills': 'Compétences',
      'nav.education': 'Étude',
      'nav.projects': 'Projets',
      'nav.about': 'A propos',
      'me.student': 'Étudiant à Épitech',
      'me.dev': 'Développeur Full-Stack',
      'me.projects': 'Mes projets',
      'school.title': 'Mon parcours scolaire',
      'school.desc': "Passionné par l'informatique depuis le collège, je poursuis mes études en informatique à Epitech.\nJ'ai eu l'opportunité de travailler sur divers projets personnels et étudiants.",
      'about.name': "Nom",
      'about.age': "Âge",
      'about.location': "Localisation",
      'about.title': 'Qui suis-je?',
      'about.hobby': 'Le ski est l\'une de mes passions, me permettant de ressentir la liberté en glissant sur les pistes, entouré par la nature. J\'adore aussi écouter de la musique, qui me transporte dans différents univers et m\'aide à me reconnecter avec mes émotions.',
      'about.discovery': 'C\'est en 2018, au collège, que j\'ai découvert la programmation en regardant des tutoriels pour développer des plugins Minecraft en Java. J\'ai découvert qu\'on pouvait créer plein de projets différents. J\'ai créé mon premier plugin Minecraft AshGuard qui me permettait de créer un inventaire customisé pour des interactions spécifiques et de gérer les accès au serveur.',
      'about.project1': 'En 3e, j\'ai fait un projet en C# sur Unity pour créer une map à génération procédurale avec un système de chunk pour gérer les éléments de la map.',
      'about.project2': 'En 1ère j\'ai développé un bot discord en Node.js qui permet de gérer les recrutements et la gestion de projet sur GitHub avec un système de connexion.',
      'about.current': 'Aujourd\'hui étudiant à Epitech, je me perfectionne dans la création d\'application et de site, alliant passion et rigueur pour créer des projets de qualité.',
    },
    en: {
      'main.skills': 'My Skills',
      'main.school': 'Education',
      'contact.button': 'Contact me',
      'contact.toaster': 'Copied to clipboard',
      'contact.or': 'Or',
      'project.discover': 'Discover my latest projects in IT development',
      'project.view': 'View project',
      'project.description': 'Description:',
      'nav.skills': 'Skills',
      'nav.education': 'Education',
      'nav.projects': 'Projects',
      'nav.about': 'About',
      'me.student': 'Student at Épitech',
      'me.dev': 'Full-Stack Developer',
      'me.projects': 'My projects',
      'school.title': 'My educational background',
      'school.desc': "I've been passionate about computers since secondary school, and I'm currently studying computer science at Epitech.\nI've had the opportunity to work on various personal and student projects.",
      'about.name': 'Name',
      'about.age': 'Age',
      'about.location': 'Location',
      'about.title': 'About me',
      'about.hobby': 'Skiing is one of my passions, allowing me to feel the freedom of gliding down slopes surrounded by nature. I also love listening to music, which transports me to different worlds and helps me reconnect with my emotions.',
      'about.discovery': 'I discovered programming in 2018, during middle school, by watching tutorials on developing Minecraft plugins in Java. I realized you could create many different projects. I created my first Minecraft plugin called AshGuard that allowed me to create a customized inventory for specific interactions and manage server access.',
      'about.project1': 'In 9th grade, I made a project in C# using Unity to create a procedurally generated map with a chunk system to manage map elements.',
      'about.project2': 'In 11th grade, I developed a Discord bot in Node.js that managed recruitment and GitHub project management with a connection system.',
      'about.current': 'Now as an Epitech student, I\'m perfecting my skills in application and website creation, combining passion and discipline to create quality projects.',
    }
  };

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

export function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="d-flex align-items-center ms-2">
      <Button
        variant={language === 'fr' ? 'light' : 'outline-light'} 
        size="sm" 
        onClick={() => setLanguage('fr')}
        className="me-1"
      >
        FR
      </Button>
      <Button 
        variant={language === 'en' ? 'light' : 'outline-light'} 
        size="sm" 
        onClick={() => setLanguage('en')}
      >
        EN
      </Button>
    </div>
  );
}