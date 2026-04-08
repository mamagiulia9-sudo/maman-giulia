import { defineField, defineType } from "sanity";

export const resourceSchema = defineType({
  name: "resource",
  title: "Ressource",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Titre (EN)",
      type: "string",
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: "titleFr",
      title: "Titre (Français)",
      type: "string",
    }),
    defineField({
      name: "titleZh",
      title: "Titre (中文)",
      type: "string",
    }),
    defineField({
      name: "titleIt",
      title: "Titre (Italiano)",
      type: "string",
    }),
    defineField({
      name: "categories",
      title: "Grande catégorie",
      description: "Dans quelle fenêtre cette ressource apparaît-elle ?",
      type: "array",
      of: [{ type: "string" }],
      options: {
        list: [
          { title: "🍼 Pour les bébés (0–12 mois)", value: "bebes" },
          { title: "🧒 Pour les jeunes enfants (1–3 ans)", value: "jeunes-enfants" },
          { title: "🌙 Le Labo du Sommeil (général)", value: "sommeil-general" },
        ],
        layout: "grid",
      },
      validation: Rule => Rule.required().min(1),
    }),
    defineField({
      name: "subcategories",
      title: "Sous-catégories",
      description: "Tu peux en choisir plusieurs",
      type: "array",
      of: [{ type: "string" }],
      options: {
        list: [
          // Bébés
          { title: "🍼 Alimentation (bébé)", value: "alimentation" },
          { title: "🍼 Activités de la journée (bébé)", value: "activites" },
          { title: "🍼 Problèmes récurrents (bébé)", value: "problemes" },
          // Jeunes enfants
          { title: "🧒 Alimentation (enfant)", value: "alimentation-enfant" },
          { title: "🧒 Activités de la journée (enfant)", value: "activites-enfant" },
          { title: "🧒 Problèmes récurrents (enfant)", value: "problemes-enfant" },
          // Labo du Sommeil
          { title: "🌙 Cycles du sommeil", value: "cycles" },
          { title: "🌙 Environnement", value: "environnement" },
          { title: "🌙 Méthodes", value: "methodes" },
        ],
        layout: "grid",
      },
    }),
    defineField({
      name: "description",
      title: "Description (EN)",
      type: "text",
      rows: 3,
    }),
    defineField({
      name: "descriptionFr",
      title: "Description (Français)",
      type: "text",
      rows: 3,
    }),
    defineField({
      name: "descriptionZh",
      title: "Description (中文)",
      type: "text",
      rows: 3,
    }),
    defineField({
      name: "descriptionIt",
      title: "Description (Italiano)",
      type: "text",
      rows: 3,
    }),
    defineField({
      name: "type",
      title: "Type de contenu",
      type: "string",
      options: {
        list: [
          { title: "▶ Vidéo (YouTube / Vimeo)", value: "video" },
          { title: "↓ PDF / Guide", value: "pdf" },
          { title: "✦ Article", value: "article" },
        ],
        layout: "radio",
      },
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: "videoUrl",
      title: "Lien vidéo (YouTube / Vimeo)",
      type: "url",
      hidden: ({ document }) => document?.type !== "video",
    }),
    defineField({
      name: "file",
      title: "Fichier PDF",
      type: "file",
      hidden: ({ document }) => document?.type !== "pdf",
    }),
    defineField({
      name: "coverImage",
      title: "Image de couverture",
      type: "image",
      options: { hotspot: true },
    }),
    defineField({
      name: "publishedAt",
      title: "Date de publication",
      type: "datetime",
    }),
  ],
  preview: {
    select: {
      title: "titleFr",
      subtitle: "type",
      media: "coverImage",
    },
    prepare({ title, subtitle, media }) {
      const icons: Record<string, string> = { video: "▶", pdf: "↓", article: "✦" };
      return { title: title || "Sans titre", subtitle: icons[subtitle] + " " + subtitle, media };
    },
  },
});
