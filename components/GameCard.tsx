
import React from 'react';
import { CardData } from '../types';
import { CARD_THEMES } from '../constants';

interface GameCardProps {
  card: CardData;
}

export const GameCard: React.FC<GameCardProps> = ({ card }) => {
  const theme = CARD_THEMES[card.category];

  return (
    <div 
      className={`card relative overflow-hidden rounded-xl border-4 ${theme.accent} ${theme.bg} flex flex-col items-center justify-between p-4 text-center shadow-lg transition-all hover:-translate-y-1 select-none print:shadow-none print:hover:translate-y-0`}
      style={{
        width: '2in',
        height: '3in',
        minWidth: '2in',
        minHeight: '3in',
      }}
    >
      {/* Visual Cut Marks (only visible on print to help cutting) */}
      <div className="hidden print:block absolute -top-4 -left-4 w-8 h-8 border-r border-b border-slate-300 pointer-events-none opacity-50"></div>
      <div className="hidden print:block absolute -top-4 -right-4 w-8 h-8 border-l border-b border-slate-300 pointer-events-none opacity-50"></div>
      <div className="hidden print:block absolute -bottom-4 -left-4 w-8 h-8 border-r border-t border-slate-300 pointer-events-none opacity-50"></div>
      <div className="hidden print:block absolute -bottom-4 -right-4 w-8 h-8 border-l border-t border-slate-300 pointer-events-none opacity-50"></div>

      {/* Category Header */}
      <div className={`absolute top-0 left-0 right-0 ${theme.primary} py-1 z-10`}>
        <span className={`text-[10px] font-extrabold uppercase tracking-widest ${theme.secondary}`}>
          {card.category}
        </span>
      </div>

      {/* Icon Area */}
      <div className="mt-6 mb-2 flex flex-col items-center">
        <span className="text-2xl" role="img" aria-label={card.category}>{theme.icon}</span>
        <div className={`w-8 h-1 ${theme.primary} mt-1 rounded-full opacity-40`}></div>
      </div>

      {/* Card Text */}
      <div className="flex-1 flex items-center justify-center w-full px-1">
        <p className={`font-bold leading-snug ${theme.secondary}`} 
           style={{ fontSize: card.text.length > 50 ? '0.75rem' : '0.85rem' }}>
          {card.text}
        </p>
      </div>

      {/* ID Footer */}
      <div className="mt-2 w-full flex justify-center opacity-30">
        <div className={`text-[8px] font-mono font-bold tracking-tighter ${theme.secondary}`}>
          ID: {card.id.split('-')[0].toUpperCase()}-{card.id.split('-')[1]}
        </div>
      </div>

      {/* Decorative Corner */}
      <div className={`absolute -bottom-6 -right-6 w-12 h-12 ${theme.primary} opacity-10 rounded-full`}></div>
    </div>
  );
};
