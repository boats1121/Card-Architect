
import React, { useState, useMemo, useCallback } from 'react';
import { CardCategory, CardData } from './types';
import { SPARK_ENTRIES, CHALLENGE_ENTRIES, ACTION_ENTRIES, JUDGE_ENTRIES } from './constants';
import { GameCard } from './components/GameCard';

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState<CardCategory | 'All'>('All');

  const allCards: CardData[] = useMemo(() => {
    const sparks = SPARK_ENTRIES.map((text, i) => ({ id: `spark-${i}`, category: 'Spark' as const, text }));
    const challenges = CHALLENGE_ENTRIES.map((text, i) => ({ id: `challenge-${i}`, category: 'Challenge' as const, text }));
    const actions = ACTION_ENTRIES.map((text, i) => ({ id: `action-${i}`, category: 'Action' as const, text }));
    const judges = JUDGE_ENTRIES.map((text, i) => ({ id: `judge-${i}`, category: 'Judge' as const, text }));
    return [...sparks, ...challenges, ...actions, ...judges];
  }, []);

  const filteredCards = activeTab === 'All' 
    ? allCards 
    : allCards.filter(c => c.category === activeTab);

  const handlePrint = useCallback(() => {
    // Some browsers require a short delay to ensure UI updates are flushed before opening print dialog
    setTimeout(() => {
      window.print();
    }, 150);
  }, []);

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Navigation Header */}
      <header className="no-print sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-200 px-4 py-4 sm:px-8 shadow-sm">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-indigo-600 rounded-2xl flex items-center justify-center text-2xl shadow-inner">🎴</div>
            <div>
              <h1 className="text-xl font-black text-slate-900 tracking-tight leading-none">
                Deck Architect
              </h1>
              <p className="text-slate-500 text-xs font-semibold mt-1 uppercase tracking-wider">Game Card Creator</p>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            {(['All', 'Spark', 'Challenge', 'Action', 'Judge'] as const).map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all border-2 ${
                  activeTab === tab
                    ? 'bg-slate-900 border-slate-900 text-white shadow-lg'
                    : 'bg-white border-slate-100 text-slate-500 hover:border-slate-300'
                }`}
              >
                {tab.toUpperCase()}
              </button>
            ))}
            
            <button
              onClick={handlePrint}
              className="ml-2 px-6 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl text-sm font-black shadow-xl shadow-indigo-100 active:scale-95 transition-all flex items-center gap-2"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
              PDF / PRINT
            </button>
          </div>
        </div>
      </header>

      {/* Main Content Grid */}
      <main className="max-w-7xl mx-auto p-4 sm:p-10">
        {/* Printable Area Instruction */}
        <div className="no-print mb-12 bg-white border-2 border-slate-100 p-8 rounded-3xl shadow-sm max-w-2xl mx-auto">
          <div className="flex items-center gap-4 mb-4">
            <div className="bg-amber-100 text-amber-600 p-2 rounded-lg">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="font-black text-slate-800 text-xl tracking-tight">Print Checklist</h3>
          </div>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-slate-600 text-sm font-medium">
            <li className="flex items-center gap-3">
              <span className="w-2 h-2 bg-indigo-500 rounded-full"></span>
              Set <strong>Scale to 100%</strong>
            </li>
            <li className="flex items-center gap-3">
              <span className="w-2 h-2 bg-indigo-500 rounded-full"></span>
              Set <strong>Margins to None</strong>
            </li>
            <li className="flex items-center gap-3">
              <span className="w-2 h-2 bg-indigo-500 rounded-full"></span>
              Select <strong>"Save as PDF"</strong> to download
            </li>
            <li className="flex items-center gap-3">
              <span className="w-2 h-2 bg-indigo-500 rounded-full"></span>
              Use <strong>Cardstock</strong> (recommended)
            </li>
          </ul>
        </div>

        {/* The Grid - High Spacing to prevent touching */}
        <div className="card-grid flex flex-wrap justify-center gap-12 md:gap-16 print:grid">
          {filteredCards.map((card) => (
            <GameCard key={card.id} card={card} />
          ))}
        </div>

        {filteredCards.length === 0 && (
          <div className="text-center py-32 opacity-30">
            <div className="text-6xl mb-4">📭</div>
            <p className="text-slate-500 text-xl font-bold italic tracking-tight">No cards in this category...</p>
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="no-print py-16 border-t border-slate-100 text-center">
        <p className="text-slate-300 text-[10px] font-black uppercase tracking-[0.3em]">
          End of Deck &bull; {filteredCards.length} Cards Total
        </p>
      </footer>
    </div>
  );
};

export default App;
