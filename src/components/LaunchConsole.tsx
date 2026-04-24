import { useEffect, useState } from 'preact/hooks';

const modes = [
  {
    label: 'Island-first UI',
    score: 92,
    detail: 'Hydrate only the interactive surfaces with Preact and leave the rest as fast Astro HTML.',
  },
  {
    label: 'DaisyUI kit',
    score: 88,
    detail: 'Compose buttons, cards, stats, alerts, badges, and forms from a shared component language.',
  },
  {
    label: 'Edge runtime',
    score: 96,
    detail: 'Keep APIs close to users with the Cloudflare Workers adapter and Wrangler deploy flow.',
  },
];

type HealthState =
  | { status: 'idle'; message: string }
  | { status: 'ready'; message: string }
  | { status: 'error'; message: string };

type ModeKeyboardEvent = KeyboardEvent & { currentTarget: HTMLButtonElement };

export default function LaunchConsole() {
  const [activeMode, setActiveMode] = useState(0);
  const [health, setHealth] = useState<HealthState>({
    status: 'idle',
    message: 'Checking Worker health...',
  });

  useEffect(() => {
    const controller = new AbortController();

    fetch('/api/health', { signal: controller.signal })
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Health check returned ${response.status}`);
        }

        return response.json() as Promise<{ colo?: string; runtime?: string }>;
      })
      .then((data) => {
        setHealth({
          status: 'ready',
          message: `${data.runtime ?? 'worker'} online via ${data.colo ?? 'local'}`,
        });
      })
      .catch((error: Error) => {
        if (error.name === 'AbortError') {
          return;
        }

        setHealth({
          status: 'error',
          message: 'Worker health endpoint is not reachable yet.',
        });
      });

    return () => controller.abort();
  }, []);

  const selected = modes[activeMode];
  const selectedModeId = `launch-console-mode-${activeMode}`;

  const selectMode = (index: number) => {
    setActiveMode(index);
    window.requestAnimationFrame(() => {
      document.getElementById(`launch-console-mode-${index}`)?.focus();
    });
  };

  const handleModeKeyDown = (event: ModeKeyboardEvent, index: number) => {
    if (event.key === 'ArrowLeft' || event.key === 'ArrowUp') {
      event.preventDefault();
      selectMode((index - 1 + modes.length) % modes.length);
    }

    if (event.key === 'ArrowRight' || event.key === 'ArrowDown') {
      event.preventDefault();
      selectMode((index + 1) % modes.length);
    }

    if (event.key === 'Home') {
      event.preventDefault();
      selectMode(0);
    }

    if (event.key === 'End') {
      event.preventDefault();
      selectMode(modes.length - 1);
    }
  };

  return (
    <section className="card glass-grid border border-white/10 bg-base-200/70 shadow-2xl">
      <div className="card-body gap-6 p-5 sm:p-8">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.32em] text-accent">Preact island</p>
            <h2 className="font-serif text-3xl font-black leading-none tracking-tight sm:text-5xl">
              Interactive command deck
            </h2>
          </div>
          <div className="badge badge-accent badge-lg font-black">client:load</div>
        </div>

        <div
          aria-label="Launch console modes"
          className="join join-vertical w-full overflow-hidden rounded-box border border-white/10 lg:join-horizontal"
          role="tablist"
        >
          {modes.map((mode, index) => (
            <button
              aria-controls="launch-console-panel"
              aria-label={`Show ${mode.label} details`}
              aria-selected={activeMode === index}
              type="button"
              className={`btn join-item min-h-16 flex-1 ${activeMode === index ? 'btn-accent' : 'btn-ghost'}`}
              id={`launch-console-mode-${index}`}
              key={mode.label}
              onClick={() => setActiveMode(index)}
              onKeyDown={(event) => handleModeKeyDown(event, index)}
              role="tab"
              tabIndex={activeMode === index ? 0 : -1}
            >
              {mode.label}
            </button>
          ))}
        </div>

        <div className="grid gap-4 lg:grid-cols-[1fr_0.72fr]">
          <article
            aria-labelledby={selectedModeId}
            className="card border border-white/10 bg-base-100/70"
            id="launch-console-panel"
            role="tabpanel"
          >
            <div className="card-body">
              <div className="flex items-center justify-between gap-3">
                <h3 className="card-title text-2xl">{selected.label}</h3>
                <span className="badge badge-outline">{selected.score}% ready</span>
              </div>
              <p className="text-base-content/70">{selected.detail}</p>
              <progress className="progress progress-accent" value={selected.score} max="100" />
            </div>
          </article>

          <aside className="stats stats-vertical border border-white/10 bg-base-100/70 shadow">
            <div className="stat">
              <div className="stat-title">UI runtime</div>
              <div className="stat-value text-accent">Preact</div>
              <div className="stat-desc">Astro island hydration</div>
            </div>
            <div className="stat">
              <div className="stat-title">Component kit</div>
              <div className="stat-value">DaisyUI</div>
              <div className="stat-desc">Tailwind CSS v4 plugin</div>
            </div>
          </aside>
        </div>

        <div className={`alert ${health.status === 'error' ? 'alert-error' : 'alert-success'}`}>
          <span className="font-bold">{health.message}</span>
        </div>
      </div>
    </section>
  );
}
