// components/CareerRoad/CareerRoad.tsx
'use client';
import React, { useEffect, useRef, useState, useMemo } from 'react';
import { motion, useMotionValue, useSpring, AnimatePresence, useAnimation, useTransform } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import styles from './CareerRoad.module.css';

const CAR_HEIGHT = 60;
const DECOR_IMAGES = ['/decor/house1.png', '/decor/house2.png', '/decor/tree1.png', '/decor/tree2.png'];

// Simple pseudo-random number generator for repeatable results per session
const mulberry32 = (seed: number) => {
  return () => {
    seed |= 0; seed = seed + 0x6D2B79F5 | 0;
    let t = Math.imul(seed ^ seed >>> 15, 1 | seed);
    t = t + Math.imul(t ^ t >>> 7, 61 | t) ^ t;
    return ((t ^ t >>> 14) >>> 0) / 4294967296;
  }
}
export default function CareerRoad() {
  const { t } = useTranslation();
  const wrapperRef = useRef<HTMLDivElement>(null);

  // responsive gap and mobile detection
  const [gap, setGap] = useState(260);
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const onResize = () => {
      const mobile = window.innerWidth < 600;
      setGap(mobile ? 160 : 260);
      setIsMobile(mobile);
    };
    onResize();
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  // State for mobile tap-to-expand
  const [selectedMobileStopId, setSelectedMobileStopId] = useState<string | null>(null);

  const handleStopLabelTap = (stopId: string) => {
    if (isMobile) {
      setSelectedMobileStopId(prevId => (prevId === stopId ? null : stopId));
    }
  };

  // build stops with category markers
  const stops = useMemo(() => [
    { id: 'cat-edu', label: t('categories.education', 'Education'),        type: 'category', icon: '🎓' },
    { id: 'school1', label: t('career.school1.label'), sub: t('career.school1.sub'), info: t('career.school1.info'), icon: '🏫' },
    { id: 'school2', label: t('career.school2.label'), sub: t('career.school2.sub'), info: t('career.school2.info'), icon: '📚' },
    { id: 'school3', label: t('career.school3.label'), sub: t('career.school3.sub'), info: t('career.school3.info'), icon: '🧑‍🎓' },
    { id: 'cat-intern', label: t('categories.internships', 'Internships'), type: 'category', icon: '🤝' },
    { id: 'internship1', label: t('career.internship1.label'), sub: t('career.internship1.sub'), info: t('career.internship1.info'), icon: '👨‍💻' },
    { id: 'internship2', label: t('career.internship2.label'), sub: t('career.internship2.sub'), info: t('career.internship2.info'), icon: '💡' },
    { id: 'internship3', label: t('career.internship3.label'), sub: t('career.internship3.sub'), info: t('career.internship3.info'), icon: '📈' },
    { id: 'cat-work', label: t('categories.work', 'Work Experience'),    type: 'category', icon: '💼' },
    { id: 'work1', label: t('career.work1.label'), sub: t('career.work1.sub'), info: t('career.work1.info'), icon: '🏢' },
    { id: 'work2', label: t('career.work2.label'), sub: t('career.work2.sub'), info: t('career.work2.info'), icon: '💻' },
    { id: 'work3', label: t('career.work3.label'), sub: t('career.work3.sub'), info: t('career.work3.info'), icon: '📊' },
    { id: 'work4', label: t('career.work4.label'), sub: t('career.work4.sub'), info: t('career.work4.info'), icon: '🚀' },
    { id: 'cat-vol', label: t('categories.volunteer', 'Volunteer Work'), type: 'category', icon: '🌍' },
    { id: 'work5', label: t('career.work5.label'), sub: t('career.work5.sub'), info: t('career.work5.info'), icon: '🌟' },
    { id: 'cat-more', label: t('categories.more', 'And many more to come'), type: 'category', icon: '➕' },
  ], [t]);

  // Generate decor props for each non-category stop
  const decorProps = useMemo(() => {
    const random = mulberry32(stops.length); // Seed with stops length for session-consistent randomness
    return stops.reduce((acc, stop, index) => {
      if (stop.type !== 'category') {
        const numDecor = Math.floor(random() * 2) + 1; // 1 or 2 decor items
        for (let i = 0; i < numDecor; i++) {
          acc.push({
            id: `${stop.id}-decor-${i}`,
            src: DECOR_IMAGES[Math.floor(random() * DECOR_IMAGES.length)],
            stopIndex: index,
            offsetX: (random() * 100 + 50) * (i % 2 === 0 ? 1 : -1), // Random horizontal offset, alternating sides
            offsetY: random() * gap / 2 - gap / 4, // Random vertical offset within the stop's space
            scale: random() * 0.3 + 0.7, // Random scale factor (0.7 to 1.0)
            parallaxFactor: random() * 0.4 - 0.2, // Random parallax factor (-0.2 to 0.2)
          });
        }
      }
      return acc;
    }, [] as Array<{id: string, src: string, stopIndex: number, offsetX: number, offsetY: number, scale: number, parallaxFactor: number}>);
  }, [stops, gap, t]); // Include t to ensure re-generation if language changes, affecting stops

  // total scrollable height
  const totalHeight = stops.length * gap + window.innerHeight;

  // random bg
  const bgArr = ['/background1.png','/background2.png','/background3.png'];
  const bg = useMemo(() => {
    return bgArr[Math.floor(Math.random() * bgArr.length)];
  }, []);

  // motion values
  const rawY = useMotionValue(0);
  const y    = useSpring(rawY, { stiffness: 100, damping: 30, mass: 0.5 });
  const carControls = useAnimation();
  const [current, setCurrent] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const pauseTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (isPaused) {
      carControls.start({
        scale: [1, 1.15, 1],
        transition: { duration: 0.4, times: [0, 0.5, 1] },
      });
    }
  }, [isPaused, carControls]);

  useEffect(() => {
    const onScroll = () => {
      if (!wrapperRef.current || isPaused) return;

      const start = wrapperRef.current.offsetTop;
      const middle = window.scrollY + window.innerHeight / 2;
      const delta = middle - start;
      let clamped = Math.max(0, Math.min(delta, totalHeight - gap));
      
      const currentStopIndex = Math.round(clamped / gap);
      const stopPosition = currentStopIndex * gap;
      const distanceToStop = Math.abs(clamped - stopPosition);

      // Check if near a stop and not category (and not mobile, as pausing is less ideal with tap-to-expand)
      if (!isMobile && distanceToStop < gap / 4 && stops[currentStopIndex] && stops[currentStopIndex].type !== 'category') {
        clamped = stopPosition; // Snap to stop position
        rawY.set(clamped - CAR_HEIGHT / 2);
        setCurrent(currentStopIndex);

        if (!isPaused) { // isPaused check is still relevant for desktop
          setIsPaused(true);
          if (pauseTimeoutRef.current) {
            clearTimeout(pauseTimeoutRef.current);
          }
          pauseTimeoutRef.current = setTimeout(() => {
            setIsPaused(false);
            const newMiddle = window.scrollY + window.innerHeight / 2;
            const newDelta = newMiddle - start;
            const newClamped = Math.max(0, Math.min(newDelta, totalHeight - gap));
            rawY.set(newClamped - CAR_HEIGHT / 2);
            setCurrent(Math.round(newClamped / gap));
          }, 500);
        }
      } else if (!isPaused) { // only update if not paused (relevant for desktop)
        rawY.set(clamped - CAR_HEIGHT / 2);
        // On mobile, current might be set by tapping, so don't aggressively set it by scroll unless not paused by tap
        if (!isMobile || (isMobile && selectedMobileStopId === null)) {
           setCurrent(Math.round(clamped / gap));
        }
      }
    };

    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', onScroll);
      if (pauseTimeoutRef.current) {
        clearTimeout(pauseTimeoutRef.current);
      }
    };
  }, [totalHeight, gap, rawY, isPaused, stops, isMobile, selectedMobileStopId]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'ArrowDown' || event.key === 'ArrowUp') {
        event.preventDefault();
        if (!wrapperRef.current) return;

        let nextIndex = current;
        if (event.key === 'ArrowDown') {
          nextIndex = Math.min(stops.length - 1, current + 1);
          // Optional: Loop to first stop
          // nextIndex = (current + 1) % stops.length; 
        } else if (event.key === 'ArrowUp') {
          nextIndex = Math.max(0, current - 1);
          // Optional: Loop to last stop
          // nextIndex = (current - 1 + stops.length) % stops.length;
        }

        if (nextIndex !== current || (event.key === 'ArrowDown' && current === 0 && nextIndex === 0) || (event.key === 'ArrowUp' && current === stops.length -1 && nextIndex === stops.length -1) ) { // Ensure it scrolls if at ends and trying to loop (if looping is implemented) or if index changed
          // Find the next stop that is not a category, if possible
          let targetStopIndex = nextIndex;
          const direction = event.key === 'ArrowDown' ? 1 : -1;
          
          // Iterate to find the next non-category stop for scrolling, but don't get stuck
          let iterations = 0;
          while(stops[targetStopIndex] && stops[targetStopIndex].type === 'category' && iterations < stops.length) {
            targetStopIndex = (targetStopIndex + direction + stops.length) % stops.length;
            iterations++;
          }
          // Fallback to original nextIndex if all are categories (edge case) or stuck
          if (iterations === stops.length || !stops[targetStopIndex] || stops[targetStopIndex].type === 'category') {
            targetStopIndex = nextIndex; 
          }


          const stopTopPosition = targetStopIndex * gap;
          const roadSectionOffsetTop = wrapperRef.current.offsetTop;
          const targetScrollY = roadSectionOffsetTop + stopTopPosition - (window.innerHeight / 2) + (CAR_HEIGHT / 2);
          
          window.scrollTo({ top: targetScrollY, behavior: 'smooth' });
          
          // Optionally, focus the stop label after scroll for better a11y
          // This requires stop labels to have focusable properties and unique IDs.
          // const stopLabelId = `stop-label-${stops[targetStopIndex]?.id}`;
          // document.getElementById(stopLabelId)?.focus();
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [current, stops, gap, totalHeight, isMobile]); // Added isMobile to dependencies, keyboard nav might be preferred on desktop

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

        <motion.div className={styles.carContainer} style={{ y }} animate={carControls}>
          <img src="/car.png" alt="car" className={styles.carImg}/>
        </motion.div>

        {/* Render Decor Props */}
        {decorProps.map(decor => {
          // Calculate the base top position for the decor item
          const initialTop = decor.stopIndex * gap + decor.offsetY;
          // Create a parallax motion value based on rawY and the decor's parallaxFactor
          // This y will be relative to its initialTop position
          const parallaxY = useTransform(rawY, value => value * decor.parallaxFactor);

          return (
            <motion.img
              key={decor.id}
              src={decor.src}
              alt="decor"
              className={styles.decorItem}
              style={{
                top: initialTop, // Set the initial top position
                left: `calc(50% + ${decor.offsetX}px)`,
                scale: decor.scale,
                y: parallaxY, // Apply the parallax effect on the y-axis
              }}
              initial={{ opacity: 0, y: 20 }} // Initial animation might need adjustment with parallax
              whileInView={{ opacity: 1 }} // y is now controlled by parallaxY + initial y:20
              viewport={{ once: true, amount: 0.3 }} // Lowered amount for earlier trigger
              transition={{ duration: 0.5 }}
            />
          );
        })}

        {stops.map((s, i) => {
          const isSelectedOnMobile = isMobile && selectedMobileStopId === s.id;
          return (
            <div key={s.id} className={styles.stop} style={{ top: i * gap }}>
              <div className={styles.pole}/>
              <motion.div
                id={`stop-label-${s.id}`} // ID for potential focus management
                className={`${styles.stopLabel} ${s.type === 'category' ? styles.category : ''} ${isMobile ? styles.mobileStopLabel : ''}`}
                onClick={() => handleStopLabelTap(s.id)}
                role={isMobile ? "button" : undefined} // Role button only on mobile for tap interaction
                aria-expanded={isMobile ? isSelectedOnMobile : undefined}
                aria-controls={isMobile && s.info ? `mobile-info-${s.id}` : undefined}
                tabIndex={isMobile && s.type !== 'category' && s.info ? 0 : -1} // Tabbable on mobile if it's an interactive stop
                // Add layout prop for smoother animation if children change size
                layout="position" 
                transition={{ duration: 0.2 }}
                onKeyDown={ (e) => { // Allow Enter/Space to toggle mobile view if focused
                    if (isMobile && (e.key === 'Enter' || e.key === ' ')) {
                        handleStopLabelTap(s.id);
                    }
                }}
              >
                {s.icon && <span className={styles.stopIcon}>{s.icon}</span>}
                <div>
                  {s.label}
                  {s.sub && !isSelectedOnMobile && <div className={styles.sub}>{s.sub}</div>} {/* Hide sub on mobile when not expanded to save space */}
                  {s.sub && isSelectedOnMobile && <div className={styles.sub}>{s.sub}</div>} {/* Show sub when expanded */}
                </div>
              </motion.div>
              <AnimatePresence>
                {isSelectedOnMobile && s.info && (
                  <motion.div
                    id={`mobile-info-${s.id}`} // ID for aria-controls
                    className={styles.mobileInfoContent}
                    initial={{ opacity: 0, height: 0, marginTop: 0 }}
                    animate={{ opacity: 1, height: 'auto', marginTop: '10px' }}
                    exit={{ opacity: 0, height: 0, marginTop: 0 }}
                    transition={{ duration: 0.3 }}
                    // Stop propagation to prevent stopLabel click handler if content is inside label
                    onClick={(e) => e.stopPropagation()}
                    role="region"
                    aria-labelledby={`stop-label-${s.id}`}
                  >
                    {/* <h3 className={styles.infoTitle}>{s.label}</h3> // Title is already in stopLabel */}
                    {s.sub && <strong className={styles.infoSubMobile}>{s.sub}</strong>}
                    <p className={styles.infoTextMobile}>{s.info}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}

        <AnimatePresence>
          {!isMobile && stops[current]?.info && stops[current]?.type !== 'category' && (
            <motion.div
              key={stops[current].id} // Ensure key is stable and correct
              className={styles.infoWindow}
              style={{ top: current * gap - 10 }} // Adjust positioning as needed
              initial={{ opacity: 0, x: 20 }} // Changed from x: -20 for appearing from right
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
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
