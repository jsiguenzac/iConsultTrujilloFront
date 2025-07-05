import { useEffect, useState } from 'react';
import constants from '../../core/constants';

const useIsMobile = (useResize = false, useBreakpoint?: number): boolean => {
  const breakpoint =
    useBreakpoint ??
    (useResize ? constants.SCREEN_SIZE.sm : constants.SCREEN_SIZE.lg);

  const [isMobile, setIsMobile] = useState(window.innerWidth < breakpoint);

  const query = `(max-width: ${breakpoint}px)`;
  const [matches, setMatches] = useState(window.matchMedia(query).matches);

  useEffect(() => {
    if (!useResize) return undefined;
    const updateIsMobile = () => setIsMobile(window.innerWidth < breakpoint);
    window.addEventListener('resize', updateIsMobile);
    return () => window.removeEventListener('resize', updateIsMobile);
  }, [useResize, breakpoint]);

  useEffect(() => {
    if (useResize) return undefined;
    const media = window.matchMedia(query);
    const updateMatches = () => setMatches(media.matches);
    media.addEventListener('change', updateMatches);
    return () => media.removeEventListener('change', updateMatches);
  }, [query]);

  return useResize ? isMobile : !matches;
};

export default useIsMobile;
