@AGENTS.md

# Maman Giulia — Notes de développement

## Structure des articles (site/content/articles.ts)

Chaque article suit **obligatoirement** cette structure en 3 parties :

### 1. — Pour comprendre —
Blocs : `intro`, `h3`, `p`, `pull-quote`
Objectif : expliquer le concept scientifique/théorique clairement.

### 2. — Pour pratiquer —
Blocs : `h3`, `p`, `stage` (numérotés 1/2/3), `bullets`
Objectif : donner des outils concrets et actionnables aux parents.

### 3. Conclusion (bloc `closing`)
Un paragraphe final en italique centré sur fond crème.
Ton chaleureux et encourageant. Pas de titre — juste un mot pour conclure.

---

## Types de blocs ArticleBlock

| Type | Usage |
|------|-------|
| `intro` | Paragraphe d'introduction (texte plus grand) |
| `part-header` | Séparateur de partie : "Pour comprendre" / "Pour pratiquer" |
| `h3` | Sous-titre de section |
| `p` | Paragraphe courant |
| `pull-quote` | Citation mise en valeur (chiffre clé, phrase forte) |
| `stage` | Étape numérotée 1/2/3 avec label + description |
| `bullets` | Liste à puces avec ✦ |
| `closing` | Conclusion finale (italique centré sur fond crème) |

Le texte supporte le gras via `**texte**`.

---

## Langues

Articles rédigés en **français** (langue principale).
Titres et extraits traduits en FR / EN / ZH / IT dans `titleDisplay`, `titleSub`, `excerpts`.
Le corps de l'article reste en français jusqu'à traduction manuelle.

---

## Déploiement

- GitHub : mamagiulia9-sudo/maman-giulia
- Netlify : maman-giulia.netlify.app (auto-deploy depuis GitHub)
- Sanity project ID : c9cdmt22 (dataset: production)
- Variable env Netlify : RESEND_API_KEY (formulaire contact → Resend)

---

## Préférence de design : plusieurs idées distinctes

Quand un article présente **plusieurs idées/symptômes distincts** dans une même partie (Pour comprendre ou Pour pratiquer), ne pas tout afficher d'un coup. Utiliser le bloc `expandable-group` avec des onglets cliquables.

Règle : toujours utiliser `expandable-group` quand il y a 2+ idées distinctes dans une même partie.

Exemple : article coliques → 3 onglets (Les coliques / L'heure du sorcier / Le deuxième soir).
