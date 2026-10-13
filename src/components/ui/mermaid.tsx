'use client';

import { useEffect, useId, useState } from 'react';

export default function Mermaid({ chart }: { chart: string }) {
  const [svg, setSvg] = useState('');
  const [error, setError] = useState<string | null>(null);
  const id = 'mermaid-' + useId().replace(/:/g, '');

  useEffect(() => {
    let cancelled = false;

    (async () => {
      try {
        const mermaid = (await import('mermaid')).default;
        mermaid.initialize({ startOnLoad: false, securityLevel: 'strict' });
        const { svg } = await mermaid.render(id, chart.trim());
        if (!cancelled) {
          setSvg(svg);
          setError(null);
        }
      } catch (e) {
        if (!cancelled) setError(e instanceof Error ? e.message : String(e));
      }
    })();

    return () => {
      cancelled = true;
    };
  }, [chart, id]);

  if (error) return <pre style={{ color: 'crimson' }}>{error}</pre>;

  return <div dangerouslySetInnerHTML={{ __html: svg }} />;
}