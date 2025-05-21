// components/CareerRoad/CareerRoad.tsx
'use client';
import React, { useEffect, useRef, useState, useMemo } from 'react';
import { motion, useMotionValue, useSpring, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import styles from './CareerRoad.module.css';

const CAR_HEIGHT = 60;
export default function CareerRoad() {
  const { t } = useTranslation();
  const wrapperRef = useRef<HTMLDivElement>(null);

  // responsive gap
  const [gap, setGap] = useState(260);
  useEffect(() => {
    const onResize = () => setGap(window.innerWidth < 600 ? 160 : 260);
    onResize();
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  // build stops with category markers
  const stops = useMemo(() => [
    { id: 'cat-edu', label: t('categories.education', 'Education'),        type: 'category' },
    { id: 'school1', label: t('career.school1.label'), sub: t('career.school1.sub'), info: t('career.school1.info') },
    { id: 'school2', label: t('career.school2.label'), sub: t('career.school2.sub'), info: t('career.school2.info') },
    { id: 'school3', label: t('career.school3.label'), sub: t('career.school3.sub'), info: t('career.school3.info') },
    { id: 'cat-intern', label: t('categories.internships', 'Internships'), type: 'category' },
    { id: 'internship1', label: t('career.internship1.label'), sub: t('career.internship1.sub'), info: t('career.internship1.info') },
    { id: 'internship2', label: t('career.internship2.label'), sub: t('career.internship2.sub'), info: t('career.internship2.info') },
    { id: 'internship3', label: t('career.internship3.label'), sub: t('career.internship3.sub'), info: t('career.internship3.info') },
    { id: 'cat-work', label: t('categories.work', 'Work Experience'),    type: 'category' },
    { id: 'work1', label: t('career.work1.label'), sub: t('career.work1.sub'), info: t('career.work1.info') },
    { id: 'work2', label: t('career.work2.label'), sub: t('career.work2.sub'), info: t('career.work2.info') },
    { id: 'work3', label: t('career.work3.label'), sub: t('career.work3.sub'), info: t('career.work3.info') },
    { id: 'work4', label: t('career.work4.label'), sub: t('career.work4.sub'), info: t('career.work4.info') },
    { id: 'cat-vol', label: t('categories.volunteer', 'Volunteer Work'), type: 'category' },
    { id: 'work5', label: t('career.work5.label'), sub: t('career.work5.sub'), info: t('career.work5.info') },
    { id: 'cat-more', label: t('categories.more', 'And many more to come'), type: 'category' },
  ], [t]);

  // total scrollable height
  const totalHeight = stops.length * gap + window.innerHeight;

  // random bg
  const bgArr = ['/background1.png','/background2.png','/background3.png'];
  const bg = useMemo(() => {
    return bgArr[Math.floor(Math.random() * bgArr.length)];
  }, []);

  // motion values
  const rawY = useMotionValue(0);
  const y    = useSpring(rawY, { stiffness: 80, damping: 20, mass: 0.3 });
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      if (!wrapperRef.current) return;
      const start   = wrapperRef.current.offsetTop;
      const middle  = window.scrollY + window.innerHeight / 2;
      const delta   = middle - start;
      const clamped = Math.max(0, Math.min(delta, totalHeight - gap));
      rawY.set(clamped - CAR_HEIGHT / 2);
      setCurrent(Math.round(clamped / gap));
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [totalHeight, gap, rawY]);

  return (
    <section className={styles.bgWrap} style={{ backgroundImage: `url(${bg})` }}>
      {/* Preload background images */}
      <div style={{ display: 'none' }}>
        {bgArr.map(src => (
          <img key={src} src={src} alt="" aria-hidden="true" />
        ))}
      </div>
      <div ref={wrapperRef} className={styles.roadSection} style={{ minHeight: totalHeight }}>
        <div className={styles.road}><div className={styles.centerLine}/></div>

        <motion.div className={styles.carContainer} style={{ y }}>
          <img src="/car.png" alt="car" className={styles.carImg}/>
        </motion.div>

        {stops.map((s, i) => (
          <div key={s.id} className={styles.stop} style={{ top: i * gap }}>
            <div className={styles.pole}/>
            <div className={`${styles.stopLabel} ${s.type === 'category' ? styles.category : ''}`}>
              {s.label}
              {s.sub && <div className={styles.sub}>{s.sub}</div>}
            </div>
          </div>
        ))}

        <AnimatePresence>
          {stops[current]?.info && (
            <motion.div
              key={stops[current].id}
              className={styles.infoWindow}
              style={{ top: current * gap - 10 }}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
            >
              <h3 className={styles.infoTitle}>{stops[current].label}</h3>
              <strong className={styles.infoSub}>{stops[current].sub}</strong>
              <p className={styles.infoText}>{stops[current].info}</p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
