'use client';

import { useRef, useEffect, useCallback } from 'react';
import gsap from 'gsap';
import './BlobCursor.css';

export default function BlobCursor({
  blobType = 'circle',
  fillColor = '#C87898',
  trailCount = 3,
  sizes = [24, 16, 10],
  innerSizes = [8, 5, 3],
  innerColor = 'rgba(255,255,255,0.7)',
  opacities = [0.85, 0.55, 0.35],
  shadowColor = 'transparent',
  shadowBlur = 0,
  shadowOffsetX = 0,
  shadowOffsetY = 0,
  filterId = 'blob',
  filterStdDeviation = 0,
  filterColorMatrixValues = '1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 35 -10',
  useFilter = false,
  fastDuration = 0.08,
  slowDuration = 0.35,
  fastEase = 'power3.out',
  slowEase = 'power1.out',
  zIndex = 9999
}: {
  blobType?: 'circle' | 'square';
  fillColor?: string;
  trailCount?: number;
  sizes?: number[];
  innerSizes?: number[];
  innerColor?: string;
  opacities?: number[];
  shadowColor?: string;
  shadowBlur?: number;
  shadowOffsetX?: number;
  shadowOffsetY?: number;
  filterId?: string;
  filterStdDeviation?: number;
  filterColorMatrixValues?: string;
  useFilter?: boolean;
  fastDuration?: number;
  slowDuration?: number;
  fastEase?: string;
  slowEase?: string;
  zIndex?: number;
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const blobsRef = useRef<(HTMLDivElement | null)[]>([]);

  // Center each blob on cursor
  useEffect(() => {
    blobsRef.current.forEach(el => {
      if (el) gsap.set(el, { xPercent: -50, yPercent: -50 });
    });
  }, []);

  const handleMove = useCallback(
    (e: MouseEvent | TouchEvent) => {
      const x = 'clientX' in e ? e.clientX : e.touches[0].clientX;
      const y = 'clientY' in e ? e.clientY : e.touches[0].clientY;

      blobsRef.current.forEach((el, i) => {
        if (!el) return;
        const isLead = i === 0;
        gsap.to(el, {
          x,
          y,
          duration: isLead ? fastDuration : slowDuration,
          ease: isLead ? fastEase : slowEase,
        });
      });
    },
    [fastDuration, slowDuration, fastEase, slowEase]
  );

  useEffect(() => {
    window.addEventListener('mousemove', handleMove as EventListener);
    window.addEventListener('touchmove', handleMove as EventListener, { passive: true });
    return () => {
      window.removeEventListener('mousemove', handleMove as EventListener);
      window.removeEventListener('touchmove', handleMove as EventListener);
    };
  }, [handleMove]);

  return (
    <div
      ref={containerRef}
      className="blob-container"
      style={{ zIndex, position: 'fixed', inset: 0, pointerEvents: 'none' }}
    >
      {useFilter && (
        <svg style={{ position: 'absolute', width: 0, height: 0 }}>
          <defs>
            <filter id={filterId}>
              <feGaussianBlur in="SourceGraphic" result="blur" stdDeviation={filterStdDeviation} />
              <feColorMatrix in="blur" values={filterColorMatrixValues} />
            </filter>
          </defs>
        </svg>
      )}

      <div
        className="blob-main"
        style={{ filter: useFilter ? `url(#${filterId})` : undefined }}
      >
        {Array.from({ length: trailCount }).map((_, i) => (
          <div
            key={i}
            ref={el => { blobsRef.current[i] = el; }}
            className="blob"
            style={{
              width: sizes[i],
              height: sizes[i],
              borderRadius: blobType === 'circle' ? '50%' : '0%',
              backgroundColor: fillColor,
              opacity: opacities[i],
            }}
          >
            <div
              className="inner-dot"
              style={{
                width: innerSizes[i],
                height: innerSizes[i],
                top: (sizes[i] - innerSizes[i]) / 2,
                left: (sizes[i] - innerSizes[i]) / 2,
                backgroundColor: innerColor,
                borderRadius: blobType === 'circle' ? '50%' : '0%',
              }}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
