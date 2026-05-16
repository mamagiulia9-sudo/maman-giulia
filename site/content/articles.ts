export type ArticleBlock =
  | { type: 'intro'; text: string }
  | { type: 'part-header'; text: string }
  | { type: 'h3'; text: string }
  | { type: 'p'; text: string }
  | { type: 'pull-quote'; text: string }
  | { type: 'stage'; number: number; label: string; labelDesc: string; body: string }
  | { type: 'bullets'; items: string[] }
  | { type: 'closing'; text: string };

export type Article = {
  slug: string;
  readingTime: number;
  titleDisplay: Record<string, string>;
  titleSub: Record<string, string>;
  excerpts: Record<string, string>;
  blocks: ArticleBlock[];
};

const fenetre: Article = {
  slug: 'fenetre-eveil',
  readingTime: 5,
  titleDisplay: {
    fr: "La fenêtre d'éveil",
    en: "The wake window",
    zh: "清醒窗口",
    it: "La finestra di veglia",
  },
  titleSub: {
    fr: "pourquoi moins stimuler votre bébé, c'est l'aider à mieux dormir.",
    en: "why less stimulation helps your baby sleep better.",
    zh: "为何减少刺激，才是帮宝宝好好睡觉的关键。",
    it: "perché stimolare meno il tuo bebè lo aiuta a dormire meglio.",
  },
  excerpts: {
    fr: "Comprendre la notion de fenêtre d'éveil, c'est l'un des outils les plus puissants que vous puissiez avoir en main.",
    en: "Understanding the wake window concept is one of the most powerful tools you can have as a parent.",
    zh: "了解清醒窗口的概念，是您作为父母最有力的工具之一。",
    it: "Comprendere la finestra di veglia è uno degli strumenti più potenti che puoi avere come genitore.",
  },
  blocks: [
    { type: 'intro', text: "Dès que le bébé est éveillé — surtout dans les premières semaines, quand on ne sait pas encore comment occuper ces moments — le réflexe naturel est de le stimuler. On sort les mobiles colorés, on fait des mimiques, on lui parle sans arrêt, on appelle les grands-parents pour qu'ils voient « le bébé qui regarde ». Avec toute la bonne volonté du monde. Pourtant, c'est souvent cette stimulation-là, dans ces fenêtres-là, qui est la première raison pour laquelle un bébé n'arrive pas à s'endormir." },
    { type: 'intro', text: "Comprendre la notion de **fenêtre d'éveil**, c'est l'un des outils les plus puissants que vous puissiez avoir en main." },
    { type: 'part-header', text: 'Pour comprendre' },
    { type: 'h3', text: "Ce qu'est une fenêtre d'éveil" },
    { type: 'p', text: "La fenêtre d'éveil, c'est simplement le temps que votre bébé peut passer éveillé entre deux sommeils sans commencer à accumuler de la fatigue. Et dans les premières semaines, cette fenêtre est bien plus courte qu'on ne l'imagine : **entre 40 et 60 minutes seulement**." },
    { type: 'pull-quote', text: "entre 40 et 60 minutes seulement." },
    { type: 'p', text: "Pensez à ce que contient déjà cette heure : la tétée ou le biberon, le change, quelques minutes dans vos bras — et voilà, votre bébé est prêt à repartir dormir. Ce n'est pas parce qu'il est fragile. C'est parce que son cerveau est en plein travail de construction, et que ce travail se passe… pendant le sommeil." },
    { type: 'h3', text: "Le sommeil de votre bébé n'est pas le vôtre" },
    { type: 'p', text: "Quand vous dormez, vous récupérez. Quand votre bébé dort, il se construit." },
    { type: 'p', text: "Le sommeil d'un nouveau-né est dominé par le sommeil paradoxal — le sommeil REM — qui occupe une proportion bien plus grande que chez l'adulte. C'est durant ce type de sommeil que le cerveau forme de nouvelles connexions neuronales, consolide les expériences vécues dans la journée, et pose les bases du développement cognitif et émotionnel. Chaque sieste compte. Chaque heure de sommeil manquée est une heure de développement en moins." },
    { type: 'p', text: "C'est pourquoi dépasser la fenêtre d'éveil n'est jamais anodin." },
    { type: 'h3', text: 'Les conséquences' },
    { type: 'p', text: "Quand un bébé reste éveillé trop longtemps, son corps sécrète du cortisol — une hormone de stress — pour compenser la fatigue. Résultat : il devient paradoxalement **plus agité, plus difficile à calmer**, et bien plus compliqué à endormir. C'est le bébé qui pleure sans raison apparente, qui se raidit, qui refuse tout contact — et vous qui ne comprenez pas ce qui s'est passé." },
    { type: 'p', text: "Ce n'est pas un caprice. C'est de la biologie." },
    { type: 'p', text: "Et si cette surcharge arrive avant une sieste, la sieste sera souvent plus courte que prévu — parfois réduite à un seul cycle de 20 à 30 minutes — ce qui alimente la spirale : bébé sous-dormé, bébé épuisé, bébé encore plus difficile à coucher." },
    { type: 'part-header', text: 'Pour pratiquer' },
    { type: 'h3', text: 'Repérer les signaux de fatigue en 3 stades' },
    { type: 'p', text: "Votre bébé vous parle. Il ne le fait pas avec des mots, mais avec son corps. Ces signaux arrivent en trois temps — et l'enjeu, c'est d'agir au bon stade." },
    { type: 'stage', number: 1, label: 'Les signaux précoces', labelDesc: 'les plus précieux, les plus faciles à rater', body: "Votre bébé commence à détourner le regard. Il ralentit. Il regarde dans le vide, l'activité perd de son intensité. Ce stade ressemble à de la tranquillité — c'est pour ça qu'on n'intervient pas. Pourtant, **c'est le meilleur moment** : commencez à réduire les stimulations, baissez la voix, atténuez la lumière. La transition sera douce." },
    { type: 'stage', number: 2, label: 'Les signaux actifs', labelDesc: "c'est maintenant", body: "Le bébé bâille, se frotte les yeux, s'agite légèrement. Ces signaux sont reconnaissables. Dès que vous les voyez : stop aux activités, direction le coin sommeil. Ne cherchez pas à finir ce que vous faisiez." },
    { type: 'stage', number: 3, label: 'Les signaux tardifs', labelDesc: 'la fenêtre est dépassée', body: "Le bébé pleure, se crispe, s'arc-boute. Son système nerveux est en surcharge. Vous pouvez encore l'endormir, mais cela prendra plus de temps, plus d'efforts — et le sommeil qui suivra sera souvent de moins bonne qualité, plus court." },
    { type: 'h3', text: 'Ce que vous pouvez faire concrètement' },
    {
      type: 'bullets', items: [
        "**Notez l'heure du réveil.** À 40-45 minutes, commencez à observer — pas à agir encore, juste à regarder. Les signaux arrivent bientôt.",
        "**Préparez l'environnement avant d'en avoir besoin.** Moins de lumière, moins de bruit, moins de monde. C'est une invitation au sommeil, pas une punition.",
        "**Ne cherchez pas à « faire tenir » votre bébé éveillé** pour qu'il dorme mieux la nuit. C'est un mythe : un bébé trop fatigué dort moins bien, pas mieux. La fatigue ne s'accumule pas positivement.",
        "**Commencez par les bâillements.** C'est le signal le plus fiable, le plus universel. Quand vous ne savez pas encore lire les signaux précoces, les bâillements sont votre point d'entrée.",
      ]
    },
    { type: 'closing', text: "Dans les premières semaines, votre bébé n'a pas besoin de votre animation — il a besoin de votre présence. Il a tout le temps devant lui pour les hochets, les livres en tissu et les jeux d'éveil. Pour l'instant, ce qui le développe le mieux, c'est de dormir dans un environnement sécurisant, contre vous ou dans son espace de sommeil.\n\nMoins de stimulation, plus de sommeil. C'est contre-intuitif. Mais c'est ce que la science nous dit — et c'est aussi ce que les parents qui sont passés par là transmettent.\n\nOn apprend ça ensemble. Et plus on le comprend tôt, plus les nuits — les vôtres comme les siennes — s'apaisent." },
  ],
};

export const articles: Article[] = [fenetre];

export function getArticle(slug: string): Article | undefined {
  return articles.find(a => a.slug === slug);
}
