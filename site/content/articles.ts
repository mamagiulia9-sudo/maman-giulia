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
  | { type: 'expandable-group'; items: ExpandableItem[] }
  | { type: 'details'; label: string; blocks: ExpandableItemBlock[] };

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
    { type: 'p', text: "La fenêtre d'éveil, c'est le temps que votre bébé peut passer éveillé entre deux sommeils sans accumuler de la fatigue. Dans les premières semaines, cette fenêtre est bien plus courte qu'on ne l'imagine : **entre 40 et 60 minutes seulement**. La tétée, le change, quelques minutes dans vos bras — et voilà, il est prêt à repartir dormir." },
    { type: 'pull-quote', text: "entre 40 et 60 minutes seulement." },
    { type: 'p', text: "Quand votre bébé dort, il ne récupère pas comme vous — il se construit. Son cerveau, dominé par le sommeil paradoxal, forme de nouvelles connexions à chaque sieste. Chaque heure de sommeil manquée est une heure de développement en moins." },
    { type: 'p', text: "Et quand il reste éveillé trop longtemps, son corps sécrète du cortisol — une hormone de stress. Il devient **plus agité, plus difficile à calmer**, bien plus compliqué à endormir. La sieste qui suit est souvent écourtée, ce qui alimente la spirale. Ce n'est pas un caprice. C'est de la biologie." },
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
    { type: 'intro', text: "Il est 18h30. Votre bébé pleure depuis une heure. Vous avez essayé le sein, le biberon, le doudou, le portage, la chanson — rien ne marche. Et dans votre tête, une seule question : est-ce que c'est des coliques ?" },
    { type: 'intro', text: "Peut-être. Mais peut-être pas. Il y a trois situations différentes qui peuvent ressembler à la même chose — et qui n'appellent pas du tout les mêmes réponses. **On les prend une par une.**" },
    { type: 'part-header', text: 'Pour comprendre' },
    {
      type: 'expandable-group',
      items: [
        {
          label: 'Les coliques',
          blocks: [
            { type: 'p', text: "Les coliques, c'est une chose précise : des crises de pleurs intenses, souvent soudaines, dans les premières semaines. Origine biologique — le système digestif du nourrisson n'est pas encore mature. L'intestin ne sait pas encore traiter efficacement la digestion et les gaz. Certains bébés présentent même une perméabilité intestinale plus élevée, ce qui amplifie l'inconfort." },
            { type: 'p', text: "Deux facteurs souvent sous-estimés : **l'alimentation maternelle** — ce que la mère ingère passe en partie dans le lait, l'alcool et la caféine perturbent en premiers — et **l'air avalé pendant la tétée**, qui génère des douleurs abdominales réelles." },
            { type: 'p', text: "La bonne nouvelle : les coliques disparaissent généralement avant la fin du troisième mois." },
          ],
        },
        {
          label: "L'heure du sorcier",
          blocks: [
            { type: 'p', text: "L'heure du sorcier n'est pas une crise digestive. C'est une saturation neurologique. Elle arrive en fin de journée, souvent entre 17h et 21h, avec une régularité déconcertante. Même les bébés « faciles » peuvent basculer à ce moment-là." },
            { type: 'p', text: "Ce qui se passe : le système nerveux du nouveau-né a absorbé toute la journée des stimulations, des informations, des émotions. À un moment, il est plein. Il n'a plus les ressources pour réguler ce qu'il ressent — alors il déborde. Ce n'est pas de la douleur physique. C'est de l'épuisement neurologique." },
            { type: 'p', text: "Ces épisodes disparaissent généralement entre la 12e et la 16e semaine, à mesure que le système nerveux mature." },
          ],
        },
        {
          label: 'Le deuxième soir',
          blocks: [
            { type: 'p', text: "Le deuxième soir après la naissance est souvent vécu comme une catastrophe. Le bébé est inconsolable, réclame le sein en permanence, ne veut plus être déposé — alors que la première nuit était plutôt calme." },
            { type: 'p', text: "Ce qui se passe est d'une logique parfaite : le bébé commence à réaliser qu'il est sorti du ventre. Il cherche la chaleur, l'odeur, la voix de sa mère. Et chaque mise au sein déclenche une libération d'ocytocine chez la mère, ce qui stimule la montée laiteuse. Le bébé programme le corps de sa mère pour produire exactement la quantité de lait dont il aura besoin." },
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

const mauvaisDormeur: Article = {
  slug: 'mauvais-dormeur',
  readingTime: 5,
  titleDisplay: {
    fr: "Votre bébé n'est pas",
    en: "Your baby is not",
    zh: "你的宝宝不是",
    it: "Il tuo bebè non è",
  },
  titleSub: {
    fr: "un mauvais dormeur — voici ce qui manque.",
    en: "a bad sleeper — here's what's missing.",
    zh: "天生睡不好——缺的是这个。",
    it: "un cattivo dormitore — ecco cosa manca.",
  },
  excerpts: {
    fr: "Coller une étiquette sur un bébé, c'est souvent renoncer à ce qui pourrait vraiment changer les nuits.",
    en: "Labeling a baby often means giving up on what could truly change the nights.",
    zh: "给宝宝贴标签，往往意味着放弃了真正能改变夜晚的方法。",
    it: "Etichettare un bambino significa spesso rinunciare a ciò che potrebbe davvero cambiare le notti.",
  },
  blocks: [
    { type: 'intro', text: "Quelques semaines passent, les nuits restent chaotiques, et une pensée s'installe : c'est lui. C'est son tempérament. Il est hypersensible, il n'a pas besoin de beaucoup de sommeil. Certains bébés sont comme ça." },
    { type: 'intro', text: "Cette pensée est compréhensible. Elle donne un nom à quelque chose d'épuisant. Mais elle est presque toujours fausse — et ce qu'elle cache, c'est précisément **ce qui pourrait changer les nuits**." },
    { type: 'part-header', text: 'Pour comprendre' },
    { type: 'p', text: "Avant 3 mois, votre bébé ne sait pas qu'il est 3h du matin. Le rythme circadien — l'horloge biologique qui règle les cycles veille-sommeil — n'est pas encore mature. Il ne distingue pas le jour de la nuit, ne perçoit pas que vous dormez depuis une heure. Le chaos des premières semaines n'est pas le reflet de son caractère. C'est le reflet d'un cerveau qui n'a pas encore ses repères." },
    { type: 'p', text: "Les étiquettes font des dégâts. Dès qu'on colle « hypersensible » ou « grande énergie » sur un bébé, l'étiquette commence à fonctionner comme une prophétie : on baisse les attentes, on renonce à certains ajustements, on interprète chaque difficulté à travers ce prisme. Et souvent, l'étiquette devient la réalité — non pas parce qu'elle était juste, mais parce qu'elle a orienté tout ce qui a suivi." },
    { type: 'p', text: "Ce qui construit vraiment le sommeil, c'est la **répétition**. Le cerveau d'un nouveau-né apprend par la régularité : ce qu'il vit souvent, il commence à l'anticiper. Anticiper, c'est se détendre — parce que l'inconnu ne fait plus peur. La routine du soir ne fait pas dormir le bébé par magie. Elle construit, geste après geste, une carte mentale : « ce qui vient après, je le connais, je suis en sécurité. »" },
    { type: 'part-header', text: 'Pour pratiquer' },
    { type: 'h3', text: 'Construire une routine en 4 gestes' },
    { type: 'p', text: "Une routine n'a pas besoin d'être longue. Elle a besoin d'être **constante** — les mêmes gestes, dans le même ordre, chaque soir." },
    { type: 'stage', number: 1, label: 'Le bain', labelDesc: 'même court, même rapide', body: "Le changement de température de la peau est un signal biologique puissant qui annonce la nuit au corps. Pas besoin qu'il dure dix minutes — l'essentiel, c'est qu'il soit là, chaque soir, au même moment." },
    { type: 'stage', number: 2, label: 'La lumière', labelDesc: 'baissez-la dès le début', body: "Les lumières vives maintiennent l'éveil. Une lumière tamisée, orange ou jaune, dit au cerveau que c'est l'heure de ralentir. Éteignez les écrans — les vôtres aussi. Ce signal visuel s'adresse autant à vous qu'à votre bébé." },
    { type: 'stage', number: 3, label: 'Le bruit blanc', labelDesc: 'pluie douce, ventilateur, son continu', body: "Il masque les variations sonores environnantes et rappelle au bébé les bruits qu'il entendait in utero. Beaucoup de bébés s'endorment nettement plus facilement avec. Un simple ventilateur ou une application suffit." },
    { type: 'stage', number: 4, label: "L'heure fixe", labelDesc: 'chaque soir, même moment', body: "Votre bébé ne lit pas l'heure, mais son corps apprend à la ressentir. La régularité crée l'anticipation — et l'anticipation crée les conditions du sommeil. Commencez la routine au même moment, même les soirs difficiles." },
    { type: 'h3', text: "Avant de conclure que c'est son caractère" },
    { type: 'p', text: "Si les nuits restent difficiles malgré une routine en place, posez-vous ces questions avant de conclure :" },
    {
      type: 'bullets', items: [
        "Y a-t-il une séquence reconnaissable avant chaque endormissement ?",
        "La journée a-t-elle été chargée en stimulations, visites, déplacements ?",
        "Les fenêtres d'éveil ont-elles été respectées, ou le bébé est-il allé jusqu'à l'épuisement ?",
        "Y a-t-il eu un changement d'environnement inhabituel ?",
        "Ce schéma dure-t-il depuis plus de deux semaines, ou est-ce ponctuel ?",
      ],
    },
    { type: 'closing', text: "Un bébé qui ne dort pas bien dans les premières semaines n'est pas un mauvais dormeur. C'est un bébé dont le cerveau se construit, dans un monde qu'il vient à peine de découvrir, qui cherche des repères là où il n'y en a pas encore.\n\nComprendre ça, c'est arrêter de chercher ce qui ne va pas chez lui — et commencer à construire ce qui lui manque. Beaucoup de parents décrivent ce changement de regard comme libérateur. Pas parce que les nuits changent du jour au lendemain. Mais parce que ce qu'on porte à l'intérieur pendant ces nuits-là, lui, change.\n\nEnsemble, on comprend mieux le sommeil de nos enfants." },
  ],
};

const microbiote: Article = {
  slug: 'microbiote-sommeil',
  readingTime: 5,
  titleDisplay: {
    fr: "Et si les nuits",
    en: "What if the nights",
    zh: "如果睡眠问题",
    it: "E se le notti",
  },
  titleSub: {
    fr: "se jouaient dans le ventre de votre bébé ?",
    en: "started in your baby's gut?",
    zh: "其实藏在宝宝肚子里？",
    it: "dipendessero dall'intestino del tuo bebè?",
  },
  excerpts: {
    fr: "Le microbiote intestinal influence directement la production de mélatonine. Un intestin équilibré, c'est souvent aussi de meilleures nuits.",
    en: "Gut microbiome directly influences melatonin production. A balanced gut often means better nights.",
    zh: "肠道菌群直接影响褪黑素的分泌。肠道平衡，夜晚往往也更安稳。",
    it: "Il microbiota intestinale influenza direttamente la produzione di melatonina. Un intestino equilibrato spesso significa notti migliori.",
  },
  blocks: [
    { type: 'intro', text: "On parle de routine, de fenêtres d'éveil, de signaux de fatigue — et tout ça compte. Mais il y a un facteur dont on parle rarement, qui influence directement la qualité du sommeil de votre bébé : l'état de son intestin." },
    { type: 'part-header', text: 'Pour comprendre' },
    { type: 'p', text: "Les bactéries qui vivent dans l'intestin — le microbiote — envoient des signaux constants vers le cerveau. Parmi ces signaux : la production de **sérotonine**, fabriquée à 95 % dans l'intestin. Or la sérotonine est le précurseur de la mélatonine — l'hormone du sommeil. Un intestin déséquilibré produit moins de sérotonine, donc moins de mélatonine, donc un sommeil plus difficile à installer et plus fragmenté." },
    { type: 'pull-quote', text: "95 % de la sérotonine fabriquée dans l'intestin." },
    { type: 'p', text: "Chez le nouveau-né, ce microbiote est en cours de construction. Le peau à peau, les premières tétées, le lait maternel — tout ça pose les fondations d'un équilibre qui influencera le sommeil pendant des années. Un microbiote bien installé réduit aussi les inconforts digestifs — gaz, crampes — qui réveillent un bébé au milieu d'un cycle de sommeil et rendent les nuits imprévisibles." },
    {
      type: 'details',
      label: "En savoir plus : l'axe intestin-cerveau",
      blocks: [
        { type: 'p', text: "L'intestin et le cerveau sont reliés par un réseau de millions de neurones — le système nerveux entérique. Ce réseau envoie des signaux constants vers le cerveau via le nerf vague, sans que vous en ayez conscience." },
        { type: 'p', text: "Les bactéries du microbiote participent activement à cette conversation. Elles produisent ou stimulent la production de neurotransmetteurs : sérotonine, GABA, dopamine. Un microbiote pauvre ou déséquilibré réduit ces productions — avec des effets mesurables sur la régulation émotionnelle et la qualité du sommeil." },
        { type: 'p', text: "Chez le nouveau-né, l'intestin est également plus perméable qu'il ne le sera plus tard. Cette perméabilité laisse passer davantage de molécules dans le sang — ce qui peut amplifier l'inconfort digestif et intensifier les réponses au stress. Un microbiote bien établi contribue à réduire cette perméabilité au fil des semaines." },
      ],
    },
    { type: 'part-header', text: 'Pour pratiquer' },
    { type: 'h3', text: 'Ce qui nourrit le microbiote de votre bébé' },
    {
      type: 'bullets', items: [
        "**Le peau à peau** — dès les premières heures, le contact peau contre peau transfère des bactéries bénéfiques de la peau de la mère vers celle du bébé. Ce n'est pas seulement du lien affectif : c'est une inoculation bactérienne au sens littéral. Prolongez-le autant que possible dans les premières semaines.",
        "**L'allaitement** — chaque tétée apporte au bébé des prébiotiques, des anticorps et des bactéries vivantes qui construisent activement son microbiote. Si vous n'allaitez pas, ce n'est pas une raison de culpabiliser — mais c'est une raison de comprendre pourquoi l'allaitement a un impact direct sur le sommeil.",
        "**Les probiotiques pour le bébé** — certaines souches de lactobacilles en gouttes, adaptées aux nourrissons, peuvent soutenir le développement du microbiote et atténuer les inconforts digestifs. Parlez-en à votre pédiatre, surtout si votre bébé présente des signes de coliques.",
        "**Les probiotiques pour la mère** — si vous allaitez, ce que vous ingérez passe en partie dans le lait. Prendre des probiotiques adaptés peut enrichir le microbiote de votre bébé par ce biais. C'est une piste souvent sous-estimée.",
        "**L'alimentation maternelle** — une alimentation riche en fibres et en légumes fermentés, pauvre en sucres raffinés, soutient un microbiote maternel équilibré. La caféine et l'alcool perturbent l'équilibre intestinal du nourrisson.",
      ],
    },
    { type: 'closing', text: "On cherche souvent les causes des mauvaises nuits du côté du bébé — ses habitudes, son tempérament, ses signaux. Rarement du côté de ce qu'il mange, ou de ce que mange sa mère.\n\nPourtant, ce qui se passe dans son ventre ces premières semaines construit silencieusement la qualité de ses nuits. Prendre soin de l'intestin de son bébé, c'est aussi prendre soin de son sommeil.\n\nEnsemble, on comprend mieux le sommeil de nos enfants." },
  ],
};


const deuxiemeSoir: Article = {
  slug: 'deuxieme-soir',
  readingTime: 5,
  titleDisplay: {
    fr: "Votre bébé est inconsolable le deuxième soir ?",
    en: "Your baby is inconsolable on the second night?",
    zh: "宝宝在第二晚哭闹不止？",
    it: "Il tuo bebè è inconsolabile la seconda sera?",
  },
  titleSub: {
    fr: "C'est exactement ce qui devait se passer.",
    en: "That's exactly what was supposed to happen.",
    zh: "这正是该发生的事。",
    it: "È esattamente quello che doveva succedere.",
  },
  excerpts: {
    fr: "Ce que vous vivez cette nuit-là est précis, prévisible, et biologiquement nécessaire. Comprendre le mécanisme change ce qu'on porte pendant ces heures.",
    en: "What you're experiencing that night is precise, predictable, and biologically necessary. Understanding the mechanism changes what you carry through those hours.",
    zh: "那一晚发生的一切，是精确的、可预见的、在生物学上必要的。理解这个机制，能改变你在那些时刻内心承受的重量。",
    it: "Quello che stai vivendo quella notte è preciso, prevedibile e biologicamente necessario. Capire il meccanismo cambia ciò che si porta dentro durante quelle ore.",
  },
  blocks: [
    { type: 'intro', text: "La première nuit à la maternité passe souvent mieux qu'on ne s'y attendait. Le bébé dort, vous soufflez. Et puis vient le deuxième soir. D'un coup, tout bascule : il réclame le sein sans discontinuer, refuse d'être posé, pleure dès qu'il quitte vos bras. Vous ne comprenez pas ce qui a changé. Vous vous demandez si vous faites quelque chose de mal." },
    { type: 'intro', text: "Vous ne faites rien de mal. Ce que vous vivez est précis, prévisible, et **biologiquement nécessaire**." },
    { type: 'part-header', text: 'Pour comprendre' },
    { type: 'p', text: "Dans les premières heures après la naissance, le bébé est encore sous l'effet des hormones de l'accouchement — les siennes et celles de sa mère. Il dort beaucoup, se laisse porter, s'adapte en douceur. Puis, au deuxième soir, quelque chose change dans son cerveau : il commence à réaliser qu'il est sorti. Que le ventre chaud, le bruit sourd, l'enveloppe familière — tout ça a disparu. Et face à cette prise de conscience, il fait la seule chose qu'il sait faire : il cherche le corps de sa mère." },
    { type: 'p', text: "Ce n'est pas un caprice. Ce n'est pas une mauvaise habitude qui se prend en 48 heures. C'est un mécanisme de survie archaïque, parfaitement programmé. Et ce mécanisme a un deuxième rôle, tout aussi précis : chaque fois que le bébé tète, il déclenche chez la mère une libération d'**ocytocine** — l'hormone qui stimule la montée laiteuse. Cette nuit apparemment chaotique est, en réalité, la façon dont le corps du bébé programme le corps de sa mère pour produire exactement la quantité de lait dont il aura besoin. Plus il réclame, plus le corps de la mère s'ajuste. La nature ne laisse rien au hasard." },
    { type: 'p', text: "Ce deuxième soir difficile est donc, au fond, un cadeau — même s'il ne ressemble pas à un cadeau sur le moment." },
    { type: 'part-header', text: 'Pour pratiquer' },
    { type: 'h3', text: 'Traverser cette nuit sans la subir' },
    {
      type: 'bullets', items: [
        "**Installez-vous pour durer.** Ce n'est pas une nuit à gérer debout, dans l'urgence. Préparez un espace confortable pour vous : coussin d'allaitement, verre d'eau, lumière douce, musique calme si ça aide. Vous allez passer plusieurs heures à nourrir — autant le faire dans les meilleures conditions possibles.",
        "**Ne rationalisez pas les mises au sein.** Cette nuit-là, il n'y a pas de « trop souvent ». Chaque mise au sein est un signal envoyé au corps : produis davantage. Résister à cette demande, c'est contrarier le mécanisme même qui met en place l'allaitement. Laissez-le réclamer.",
        "**Gardez le bébé contre vous.** Peau à peau, portage, bras — peu importe. Ce dont il a besoin, c'est de sentir que la séparation n'est pas totale. Votre chaleur, votre odeur, votre rythme cardiaque sont les seuls repères qu'il connaît.",
        "**Appelez du renfort sans hésiter.** Ce deuxième soir peut être physiquement et émotionnellement éprouvant — surtout quand on vient d'accoucher. Si un partenaire, un proche, une sage-femme peut être là : c'est ce soir-là qu'il faut les appeler. Pas pour prendre le relais sur les tétées, mais pour vous apporter de l'eau, tenir compagnie, alléger le reste.",
        "**Rappelez-vous ce qui se joue.** Quand l'épuisement s'installe et que le bébé réclame pour la huitième fois en deux heures : ce n'est pas lui qui prend, c'est vous deux qui construisez. La montée laiteuse, le lien, la reconnaissance mutuelle — tout ça se bâtit cette nuit-là.",
      ],
    },
    { type: 'closing', text: "Le deuxième soir est l'une des expériences les plus déstabilisantes des premières semaines — en partie parce que personne ne vous y prépare vraiment. On vous parle des coliques, des nuits sans sommeil, de la fatigue. Mais rarement de cette nuit précise, qui ressemble à une catastrophe et qui est, en réalité, le début de quelque chose.\n\nBeaucoup de parents qui l'ont traversée disent la même chose : si on leur avait expliqué ce qui se passait avant, ça n'aurait pas effacé l'épuisement — mais ça aurait changé ce qu'ils portaient pendant cette nuit-là.\n\nC'est pour ça qu'on se le dit. Ensemble, on comprend mieux le sommeil de nos enfants." },
  ],
};

export const articles: Article[] = [fenetre, coliques, mauvaisDormeur, microbiote, deuxiemeSoir];

export function getArticle(slug: string): Article | undefined {
  return articles.find(a => a.slug === slug);
}
