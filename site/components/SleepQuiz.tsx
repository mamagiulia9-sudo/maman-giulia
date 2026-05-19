'use client';
import { useState } from 'react';
import Link from 'next/link';
import { useTranslations } from 'next-intl';
import { articles } from '@/content/articles';
import type { Article } from '@/content/articles';

// Scoring: [questionIndex][answerIndex] → { slug, score }
// score = 0 → correct answer  |  score > 0 → knowledge gap (points to that article)
// 2 questions per article, 10 total
const scoreMap: { slug: string; score: number }[][] = [
  // Q1 — fenetre-eveil : bébé bâille depuis 1h15
  [
    { slug: 'fenetre-eveil', score: 3 },  // propose jouet → gap
    { slug: 'fenetre-eveil', score: 0 },  // lance routine → correct
    { slug: 'fenetre-eveil', score: 2 },  // attend les pleurs → gap
  ],
  // Q2 — fenetre-eveil : conseil "garde-le éveillé plus longtemps"
  [
    { slug: 'fenetre-eveil', score: 3 },  // essaie → gap
    { slug: 'fenetre-eveil', score: 0 },  // respecte la fenêtre → correct
    { slug: 'fenetre-eveil', score: 2 },  // prolonge légèrement → gap
  ],
  // Q3 — coliques-sorcier : 19h30, pleure depuis 45 min
  [
    { slug: 'coliques-sorcier-deuxieme-soir', score: 3 },  // allume TV → gap
    { slug: 'coliques-sorcier-deuxieme-soir', score: 0 },  // tamise + tient → correct
    { slug: 'coliques-sorcier-deuxieme-soir', score: 2 },  // salon animé → gap
  ],
  // Q4 — coliques-sorcier : même heure chaque soir depuis 1 semaine
  [
    { slug: 'coliques-sorcier-deuxieme-soir', score: 2 },  // lait baisse → gap
    { slug: 'coliques-sorcier-deuxieme-soir', score: 0 },  // système nerveux saturé → correct
    { slug: 'coliques-sorcier-deuxieme-soir', score: 3 },  // dents / allergie → gap
  ],
  // Q5 — deuxieme-soir : 3 jours, sein toutes les 30 min
  [
    { slug: 'deuxieme-soir', score: 3 },  // limite tétées → gap
    { slug: 'deuxieme-soir', score: 0 },  // laisse téter → correct
    { slug: 'deuxieme-soir', score: 1 },  // sucette → mild gap
  ],
  // Q6 — deuxieme-soir : 2e nuit, refuse d'être posé
  [
    { slug: 'deuxieme-soir', score: 3 },  // mauvaise habitude → gap
    { slug: 'deuxieme-soir', score: 0 },  // mécanisme normal → correct
    { slug: 'deuxieme-soir', score: 2 },  // lait pas là → gap
  ],
  // Q7 — mauvais-dormeur : 6 semaines, étiquette tempérament
  [
    { slug: 'mauvais-dormeur', score: 3 },  // accepte étiquette → gap
    { slug: 'mauvais-dormeur', score: 0 },  // routine + observation → correct
    { slug: 'mauvais-dormeur', score: 2 },  // cherche profil → gap
  ],
  // Q8 — mauvais-dormeur : heures variables depuis 3 semaines
  [
    { slug: 'mauvais-dormeur', score: 3 },  // s'adapte → gap
    { slug: 'mauvais-dormeur', score: 0 },  // fixe heure + routine → correct
    { slug: 'mauvais-dormeur', score: 2 },  // attend plus grand → gap
  ],
  // Q9 — microbiote-sommeil : 4 semaines, gaz + pleurs
  [
    { slug: 'microbiote-sommeil', score: 2 },  // routine → gap
    { slug: 'microbiote-sommeil', score: 0 },  // intestin + alimentation → correct
    { slug: 'microbiote-sommeil', score: 3 },  // tempérament → gap
  ],
  // Q10 — microbiote-sommeil : allaitement + gaz après tétées
  [
    { slug: 'microbiote-sommeil', score: 2 },  // routine → gap
    { slug: 'microbiote-sommeil', score: 0 },  // alimentation maternelle → correct
    { slug: 'microbiote-sommeil', score: 3 },  // gaz normaux → gap
  ],
];

const NUM_QUESTIONS = 10; // pool total
const NUM_DISPLAY = 3;  // shown per session
type Step = 'intro' | 'quiz' | 'result';

export default function SleepQuiz({ locale = 'fr' }: { locale?: string }) {
  const t = useTranslations('quiz');
  const loc = locale as 'fr' | 'en' | 'zh' | 'it';

  const [step, setStep] = useState<Step>('intro');
  const [questionIndex, setQuestionIndex] = useState(0);
  const [scores, setScores] = useState<Record<string, number>>({});
  const [result, setResult] = useState<Article | null>(null);
  const [allCorrect, setAllCorrect] = useState(false);
  const [selected, setSelected] = useState<number | null>(null);
  const [selectedIndices, setSelectedIndices] = useState<number[]>([]);

  const questions = t.raw('questions') as Array<{ text: string; answers: string[] }>;

  function handleStart() {
    // Pick NUM_DISPLAY random question indices from the pool
    const pool = Array.from({ length: NUM_QUESTIONS }, (_, i) => i);
    const shuffled = pool.sort(() => Math.random() - 0.5).slice(0, NUM_DISPLAY);
    setSelectedIndices(shuffled);
    setStep('quiz');
    setQuestionIndex(0);
    setScores({});
    setResult(null);
    setAllCorrect(false);
    setSelected(null);
  }

  function handleAnswer(answerIndex: number) {
    if (selected !== null) return;
    setSelected(answerIndex);
    const realIndex = selectedIndices[questionIndex];
    const { slug, score } = scoreMap[realIndex][answerIndex];
    const newScores = { ...scores, [slug]: (scores[slug] ?? 0) + score };

    setTimeout(() => {
      if (questionIndex < NUM_DISPLAY - 1) {
        setScores(newScores);
        setQuestionIndex(questionIndex + 1);
        setSelected(null);
      } else {
        const totalScore = Object.values(newScores).reduce((a, b) => a + b, 0);
        if (totalScore === 0) {
          // All correct — default to first article as bonus
          setAllCorrect(true);
          setResult(articles[0] ?? null);
        } else {
          const winner = Object.entries(newScores).sort((a, b) => b[1] - a[1])[0];
          setResult(articles.find(a => a.slug === winner[0]) ?? null);
          setAllCorrect(false);
        }
        setStep('result');
      }
    }, 380);
  }

  function handleRestart() {
    setStep('intro');
    setQuestionIndex(0);
    setScores({});
    setResult(null);
    setAllCorrect(false);
    setSelected(null);
    setSelectedIndices([]);
  }

  return (
    <div className="rounded-2xl border border-teal/15 overflow-hidden bg-white h-full flex flex-col">
      {/* Header */}
      <div className="flex items-center gap-3 px-8 md:px-10 py-5 bg-teal/5 border-b border-teal/10">
        <span className="text-teal/50 text-xs">✦</span>
        <p className="text-xs font-light tracking-[0.25em] uppercase text-teal/70">
          {t('tag')}
        </p>
      </div>

      <div className="px-8 md:px-10 py-8 flex flex-col flex-1">

        {step === 'intro' && (
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 flex-1">
            <div>
              <p className="font-display italic text-2xl md:text-3xl text-dark/80 font-light leading-snug mb-2">
                {t('title')}
              </p>
              <p className="text-dark/40 font-light text-sm max-w-md leading-relaxed">
                {t('subtitle')}
              </p>
            </div>
            <button
              onClick={handleStart}
              className="shrink-0 self-start md:self-center px-7 py-3 bg-teal text-white rounded-full text-sm font-light hover:bg-teal/85 transition-colors"
            >
              {t('start')}
            </button>
          </div>
        )}

        {step === 'quiz' && questions[selectedIndices[questionIndex]] && (
          <div className="flex flex-col flex-1">
            {/* Progress */}
            <div className="flex gap-1.5 mb-6">
              {Array.from({ length: NUM_DISPLAY }).map((_, i) => (
                <div
                  key={i}
                  className={`h-0.5 flex-1 rounded-full transition-all duration-500 ${
                    i < questionIndex ? 'bg-teal' : i === questionIndex ? 'bg-teal/50' : 'bg-dark/10'
                  }`}
                />
              ))}
            </div>
            <p className="text-xs text-dark/30 font-light mb-5">
              {questionIndex + 1} / {NUM_DISPLAY}
            </p>
            <p className="font-display italic text-xl md:text-2xl text-dark/85 font-light mb-7 leading-snug">
              {questions[selectedIndices[questionIndex]].text}
            </p>
            <div className="flex flex-col gap-3">
              {questions[selectedIndices[questionIndex]].answers.map((answer, i) => (
                <button
                  key={i}
                  onClick={() => handleAnswer(i)}
                  disabled={selected !== null}
                  className={`text-left px-6 py-4 rounded-xl border text-sm font-light leading-relaxed transition-all duration-200 ${
                    selected === i
                      ? 'bg-teal text-white border-teal'
                      : selected !== null
                      ? 'opacity-30 bg-white text-dark/55 border-dark/10 cursor-default'
                      : 'bg-white text-dark/60 border-dark/10 hover:border-teal/50 hover:text-dark/80 cursor-pointer'
                  }`}
                >
                  {answer}
                </button>
              ))}
            </div>
          </div>
        )}

        {step === 'result' && result && (
          <div className="flex flex-col flex-1">
            <p className="text-xs text-teal/60 font-light tracking-[0.2em] uppercase mb-1">
              ✦ {t('result_label')}
            </p>
            <p className="text-dark/40 font-light text-sm mb-6 leading-relaxed">
              {allCorrect ? t('result_all_good') : t('result_subtitle')}
            </p>
            <Link
              href={`/${locale}/articles/${result.slug}`}
              className="group flex items-start gap-5 p-6 rounded-2xl border border-teal/25 bg-cream/20 hover:border-teal/55 hover:bg-white transition-all duration-200 mb-6"
            >
              <div className="flex-1 min-w-0">
                <p className="font-display font-light leading-tight mb-2">
                  <span className="italic text-teal text-lg">{result.titleDisplay[loc]}</span>
                  <span className="text-dark/65 text-base ml-2 font-light">{result.titleSub[loc]}</span>
                </p>
                <p className="text-dark/40 text-sm font-light leading-relaxed">
                  {result.excerpts[loc]}
                </p>
              </div>
              <span className="text-teal text-base font-light mt-0.5 shrink-0 group-hover:translate-x-1 transition-transform duration-200">
                →
              </span>
            </Link>
            <button
              onClick={handleRestart}
              className="text-xs text-dark/30 font-light hover:text-teal transition-colors underline underline-offset-2 self-start mt-auto"
            >
              {t('restart')}
            </button>
          </div>
        )}

      </div>
    </div>
  );
}
