export type ExpandableItemBlock =
  | { type: 'p'; text: string }
  | { type: 'bullets'; items: string[] };

export type ExpandableItem = {
  label: string;
  blocks: ExpandableItemBlock[];
};

export type ArticleBlock =
  | { type: 'intro'; text: string }
  | { type: 'part-header'; text: string }
  | { type: 'h3'; text: string }
  | { type: 'p'; text: string }
  | { type: 'pull-quote'; text: string }
  | { type: 'stage'; number: number; label: string; labelDesc: string; body: string }
  | { type: 'bullets'; items: string[] }
  | { type: 'closing'; text: string }
  | { type: 'expandable-group'; items: ExpandableItem[] };

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
    { type: 'intro', text: "Dès que le bébé est éveillé — surtout dans les premières semaines, quand on ne sait pas encore comment occuper ces moments — le réflexe naturel est de le stimuler. On sort les mobiles colorés, on fait des mimiques, on lui parle sans arrêt, on appelle les grands-parents pour qu'ils voient « le bébé qui regarde ». Avec toute la bonne volonté du monde. Pourtant, c'est souvent cette stimulation-là, dans ces fenêtres-là, qui est la première raison pour laquelle un bébé n'arrive pas à s'endormir." },
    { type: 'intro', text: "Comprendre la notion de **fenêtre d'éveil**, c'est l'un des outils les plus puissants que vous puissiez avoir en main." },
    { type: 'part-header', text: 'Pour comprendre' },
    { type: 'p', text: "La fenêtre d'éveil, c'est le temps que votre bébé peut passer éveillé entre deux sommeils sans accumuler de la fatigue. Dans les premières semaines, cette fenêtre est bien plus courte qu'on ne l'imagine : **entre 40 et 60 minutes seulement**. La tétée, le change, quelques minutes dans vos bras — et voilà, il est prêt à repartir dormir." },
    { type: 'pull-quote', text: "entre 40 et 60 minutes seulement." },
    { type: 'p', text: "Quand votre bébé dort, il ne récupère pas comme vous — il se construit. Son cerveau, dominé par le sommeil paradoxal, forme de nouvelles connexions à chaque sieste. Chaque heure de sommeil manquée est une heure de développement en moins." },
    { type: 'p', text: "Et quand il reste éveillé trop longtemps, son corps sécrète du cortisol — une hormone de stress. Il devient **plus agité, plus difficile à calmer**, bien plus compliqué à endormir. La sieste qui suit est souvent écourtée, ce qui alimente la spirale. Ce n'est pas un caprice. C'est de la biologie." },
    { type: 'part-header', text: 'Pour pratiquer' },
    { type: 'h3', text: 'Repérer les signaux de fatigue en 3 stades' },
    { type: 'p', text: "Votre bébé vous parle. Il ne le fait pas avec des mots, mais avec son corps. Ces signaux arrivent en trois temps — et l'enjeu, c'est d'agir au bon stade." },
    { type: 'stage', number: 1, label: 'Les signaux précoces', labelDesc: 'les plus précieux, les plus faciles à rater', body: "Votre bébé commence à détourner le regard. Il ralentit. Il regarde dans le vide, l'activité perd de son intensité. Ce stade ressemble à de la tranquillité — c'est pour ça qu'on n'intervient pas. Pourtant, **c'est le meilleur moment** : commencez à réduire les stimulations, baissez la voix, atténuez la lumière. La transition sera douce." },
    { type: 'stage', number: 2, label: 'Les signaux actifs', labelDesc: "c'est maintenant", body: "Le bébé bâille, se frotte les yeux, s'agite légèrement. Ces signaux sont reconnaissables. Dès que vous les voyez : stop aux activités, direction le coin sommeil. Ne cherchez pas à finir ce que vous faisiez." },
    { type: 'stage', number: 3, label: 'Les signaux tardifs', labelDesc: 'la fenêtre est dépassée', body: "Le bébé pleure, se crispe, s'arc-boute. Son système nerveux est en surcharge. Vous pouvez encore l'endormir, mais cela prendra plus de temps, plus d'efforts — et le sommeil qui suivra sera souvent de moins bonne qualité, plus court." },
    { type: 'h3', text: 'Ce que vous pouvez faire concrètement' },
    {
      type: 'bullets', items: [
        "**Notez l'heure du réveil.** À 40-45 minutes, commencez à observer — pas à agir encore, juste à regarder. Les signaux arrivent bientôt.",
        "**Préparez l'environnement avant d'en avoir besoin.** Moins de lumière, moins de bruit, moins de monde. C'est une invitation au sommeil, pas une punition.",
        "**Ne cherchez pas à « faire tenir » votre bébé éveillé** pour qu'il dorme mieux la nuit. C'est un mythe : un bébé trop fatigué dort moins bien, pas mieux. La fatigue ne s'accumule pas positivement.",
        "**Commencez par les bâillements.** C'est le signal le plus fiable, le plus universel. Quand vous ne savez pas encore lire les signaux précoces, les bâillements sont votre point d'entrée.",
      ]
    },
    { type: 'closing', text: "Dans les premières semaines, votre bébé n'a pas besoin de votre animation — il a besoin de votre présence. Il a tout le temps devant lui pour les hochets, les livres en tissu et les jeux d'éveil. Pour l'instant, ce qui le développe le mieux, c'est de dormir dans un environnement sécurisant, contre vous ou dans son espace de sommeil.\n\nMoins de stimulation, plus de sommeil. C'est contre-intuitif. Mais c'est ce que la science nous dit — et c'est aussi ce que les parents qui sont passés par là transmettent.\n\nOn apprend ça ensemble. Et plus on le comprend tôt, plus les nuits — les vôtres comme les siennes — s'apaisent." },
  ],
};

const coliques: Article = {
  slug: 'coliques-sorcier-deuxieme-soir',
  readingTime: 7,
  titleDisplay: {
    fr: "Bébé qui pleure sans raison :",
    en: "Baby crying for no reason:",
    zh: "宝宝无缘无故哭泣：",
    it: "Bebè che piange senza motivo:",
  },
  titleSub: {
    fr: "trois causes possibles, trois réponses. On fait le tri.",
    en: "three possible causes, three answers. Let's sort it out.",
    zh: "三种可能的原因，三种应对方式。逐一解决。",
    it: "tre cause possibili, tre risposte. Facciamo chiarezza.",
  },
  excerpts: {
    fr: "Il existe trois réalités distinctes que les parents vivent dans ces premières semaines. Les distinguer, c'est reprendre un peu de contrôle dans le chaos.",
    en: "There are three distinct realities parents face in those early weeks. Telling them apart means regaining a little control in the chaos.",
    zh: "新手父母在最初几周会经历三种截然不同的现实。区分它们，意味着在混乱中重新掌握一点主动权。",
    it: "Ci sono tre realtà distinte che i genitori vivono nelle prime settimane. Distinguerle significa riprendere un po' di controllo nel caos.",
  },
  blocks: [
    { type: 'intro', text: "Il est 18h30. Votre bébé pleure depuis une heure. Vous avez essayé le sein, le biberon, le doudou, le portage, la chanson — rien ne marche. Et dans votre tête, une seule question : est-ce que c'est des coliques ?" },
    { type: 'intro', text: "Peut-être. Mais peut-être pas. Il y a trois situations différentes qui peuvent ressembler à la même chose — et qui n'appellent pas du tout les mêmes réponses. **On les prend une par une.**" },
    { type: 'part-header', text: 'Pour comprendre' },
    {
      type: 'expandable-group',
      items: [
        {
          label: 'Les coliques',
          blocks: [
            { type: 'p', text: "Les coliques, c'est une chose précise : des crises de pleurs intenses, souvent soudaines, dans les premières semaines. Origine biologique — le système digestif du nourrisson n'est pas encore mature. L'intestin ne sait pas encore traiter efficacement la digestion et les gaz. Certains bébés présentent même une perméabilité intestinale plus élevée, ce qui amplifie l'inconfort." },
            { type: 'p', text: "Deux facteurs souvent sous-estimés : **l'alimentation maternelle** — ce que la mère ingère passe en partie dans le lait, l'alcool et la caféine perturbent en premiers — et **l'air avalé pendant la tétée**, qui génère des douleurs abdominales réelles." },
            { type: 'p', text: "La bonne nouvelle : les coliques disparaissent généralement avant la fin du troisième mois." },
          ],
        },
        {
          label: "L'heure du sorcier",
          blocks: [
            { type: 'p', text: "L'heure du sorcier n'est pas une crise digestive. C'est une saturation neurologique. Elle arrive en fin de journée, souvent entre 17h et 21h, avec une régularité déconcertante. Même les bébés « faciles » peuvent basculer à ce moment-là." },
            { type: 'p', text: "Ce qui se passe : le système nerveux du nouveau-né a absorbé toute la journée des stimulations, des informations, des émotions. À un moment, il est plein. Il n'a plus les ressources pour réguler ce qu'il ressent — alors il déborde. Ce n'est pas de la douleur physique. C'est de l'épuisement neurologique." },
            { type: 'p', text: "Ces épisodes disparaissent généralement entre la 12e et la 16e semaine, à mesure que le système nerveux mature." },
          ],
        },
        {
          label: 'Le deuxième soir',
          blocks: [
            { type: 'p', text: "Le deuxième soir après la naissance est souvent vécu comme une catastrophe. Le bébé est inconsolable, réclame le sein en permanence, ne veut plus être déposé — alors que la première nuit était plutôt calme." },
            { type: 'p', text: "Ce qui se passe est d'une logique parfaite : le bébé commence à réaliser qu'il est sorti du ventre. Il cherche la chaleur, l'odeur, la voix de sa mère. Et chaque mise au sein déclenche une libération d'ocytocine chez la mère, ce qui stimule la montée laiteuse. Le bébé programme le corps de sa mère pour produire exactement la quantité de lait dont il aura besoin." },
            { type: 'p', text: "Ce mécanisme n'est pas un problème. C'est une solution — avec beaucoup de bruit." },
          ],
        },
      ],
    },
    { type: 'part-header', text: 'Pour pratiquer' },
    {
      type: 'expandable-group',
      items: [
        {
          label: 'Coliques',
          blocks: [
            {
              type: 'bullets', items: [
                "**Vérifiez l'alimentation maternelle.** Si vous allaitez, écartez temporairement la caféine et l'alcool. Observez l'effet sur quelques jours.",
                "**Soignez la prise du sein ou du biberon.** Un bébé qui tète mal avale de l'air. Après chaque tétée, prenez le temps de le faire roter — en le tenant droit contre votre épaule.",
                "**Pensez aux probiotiques.** Certaines souches de lactobacilles ont montré des effets positifs sur l'inconfort digestif. Parlez-en à votre pédiatre.",
                "**Distinguez les cris.** Les coliques produisent souvent un cri haut perché, avec le ventre dur et les jambes repliées. Un massage abdominal doux peut aider.",
              ],
            },
          ],
        },
        {
          label: 'Heure du sorcier',
          blocks: [
            {
              type: 'bullets', items: [
                "**Réduisez tout.** Lumières tamisées, sons au minimum, moins de monde dans la pièce. L'heure du sorcier s'alimente de la stimulation — lui en retirer, c'est lui couper le combustible.",
                "**Mettez le bébé contre vous.** Peau à peau, portage, bras — la proximité physique est le meilleur régulateur du système nerveux à cet âge.",
                "**Lâchez ce qui ne marche pas.** Essayez le bruit blanc, le mouvement doux, le calme de votre propre corps. Votre état se transmet.",
                "**Tenez jusqu'à la 12e semaine.** Ces épisodes ont une fin — autour de 12 à 16 semaines. Remettre ces nuits dans une durée connue change quelque chose.",
              ],
            },
          ],
        },
        {
          label: 'Deuxième soir',
          blocks: [
            {
              type: 'bullets', items: [
                "**Ne rationalisez pas les mises au sein.** Votre bébé peut demander le sein toutes les 30 à 45 minutes ce soir-là. C'est normal — c'est même utile. Chaque tétée stimule la montée laiteuse.",
                "**Installez-vous confortablement pour une longue nuit.** Coussin d'allaitement, eau à portée — préparez l'environnement pour vous, pas seulement pour le bébé.",
                "**Demandez de l'aide sans hésiter.** Le deuxième soir peut être physiquement et émotionnellement éprouvant. Si vous avez quelqu'un à vos côtés, c'est le moment de l'appeler.",
                "**Rappelez-vous ce qui se joue.** Ce n'est pas votre bébé qui prend de mauvaises habitudes. C'est un mécanisme biologique au service d'un lien qui se construit.",
              ],
            },
          ],
        },
      ],
    },
    { type: 'closing', text: "Ces trois réalités — coliques, heure du sorcier, deuxième soir — arrivent souvent en même temps, se superposent, se ressemblent. L'épuisement fait qu'on ne sait plus très bien ce qu'on traverse.\n\nMais comprendre ce qui se passe — dans le ventre de votre bébé, dans son système nerveux, dans son tout premier lien au monde — change quelque chose. Pas l'intensité des pleurs. Mais ce qu'on fait de ce moment-là, à l'intérieur.\n\nOn est beaucoup à avoir traversé ces nuits sans en comprendre le sens. Plus on les comprend tôt, moins elles font peur." },
  ],
};

export const articles: Article[] = [fenetre, coliques];

export function getArticle(slug: string): Article | undefined {
  return articles.find(a => a.slug === slug);
}
