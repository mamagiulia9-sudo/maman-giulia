# Journal du projet — Mama Giulia

---

## Session 1 — Mars 2026
**Mise en place du projet**

- Création du site Next.js 15 avec Tailwind CSS v4
- Mise en place du routing multilingue avec next-intl (EN/FR/ZH)
- Choix de la palette de couleurs : Acid Lime (#AAFF00) + noir
- Polices Google : Outfit (corps) + Syne (titres)
- Création de toutes les sections : Hero, À propos, Ressources, Services, Contact, Footer
- Logo "MAMAGiulia" stylisé dans la nav et le footer
- Premier dépôt git

---

## Session 2 — Avril 2026
**Refonte visuelle + intégration Sanity CMS**

### Design
- Nouvelle palette inspirée du logo NannaLogia : teal (#78B8B5), beurre (#EDE5C0), mauve (#E8C4D4)
- Fond blanc avec cercles décoratifs beurre et mauve
- Police Nunito (arrondie et douce) remplace Syne
- Logo illustré (mains + cœur) intégré en forme ronde dans le Hero
- Remplacement du SVG par la vraie image du logo (`Logo - 2.png`)

### Langues
- Ajout de l'italien comme 4ème langue
- FR défini comme langue par défaut
- Correction du switcher de langue (bug `/fr/en` → `/en`)
- Migration de `middleware.ts` vers `proxy.ts` (Next.js 16)

### Sanity CMS
- Création du compte Sanity (projet ID : c9cdmt22)
- Studio intégré directement dans le site à `/studio`
- Schéma de ressource avec :
  - Titres et descriptions en 4 langues
  - Type de contenu : vidéo / PDF / article
  - **Grande catégorie** (multi-sélection) : Bébés / Jeunes enfants / Labo du Sommeil
  - **Sous-catégorie** (multi-sélection) : Alimentation, Activités, Problèmes récurrents, Cycles, Environnement, Méthodes

### Section Ressources gratuites
- 3 fenêtres accordéon : "Les premiers instants" / "Bébé découvre le monde" / "Le Labo du Sommeil"
- Les ressources publiées dans Sanity s'affichent automatiquement dans la bonne fenêtre et le bon onglet
- Filtrage par grande catégorie ET sous-catégorie

### Git
- 3 commits archivés sur la branche `main`
