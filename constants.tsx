
import React from 'react';
import { CardCategory, CardTheme } from './types';

export const CARD_THEMES: Record<CardCategory, CardTheme> = {
  Spark: {
    primary: 'bg-amber-400',
    secondary: 'text-amber-900',
    bg: 'bg-amber-50',
    accent: 'border-amber-500',
    icon: '⚡'
  },
  Challenge: {
    primary: 'bg-blue-500',
    secondary: 'text-blue-900',
    bg: 'bg-blue-50',
    accent: 'border-blue-600',
    icon: '❓'
  },
  Action: {
    primary: 'bg-rose-500',
    secondary: 'text-rose-900',
    bg: 'bg-rose-50',
    accent: 'border-rose-600',
    icon: '🔥'
  },
  Judge: {
    primary: 'bg-purple-600',
    secondary: 'text-purple-900',
    bg: 'bg-purple-50',
    accent: 'border-purple-700',
    icon: '⚖️'
  }
};

export const SPARK_ENTRIES = [
  "A train that refuses to move unless everyone says “thank you”",
  "A goat who eats the referee’s whistle mid-game",
  "A football that changes posession when dropped",
  "A backpack that gives terrible advice",
  "A turtle who demands instant replay",
  "A donkey that knows every shortcut",
  "A sheep who thinks he’s in charge",
  "A camel wearing roller skates",
  "A Bible that slams shut during bad decisions",
  "A baseball that screams when thrown",
  "A rooster who blows the starting horn too early everytime",
  "A vending machine that gives vegetables instead of junk food",
  "A bear who insists he’s “just stretching”",
  "A flag that throws itself on the ground during football games",
  "A choir that sings songs too loud",
  "A pair of gloves that refuse to let go for 5 minutes",
  "A judge who flips a coin to make decisions",
  "A ladder that’s missing the top step",
  "A raccoon coaching a football team",
  "A calendar that skips random days",
  "A microphone that repeats embarrassing things louder",
  "A fishing net that catches colds",
  "A trophy that won’t stop bragging",
  "A whistle that only works underwater",
  "A compass that points to snacks",
  "A parrot repeating the wrong ruling during games",
  "A train that takes bathroom breaks too often",
  "A fox who always demands a rematch",
  "A t-shirt that won’t stop apologizing",
  "A train conductor who announces the wrong station"
];

export const CHALLENGE_ENTRIES = [
  "Explain how this got someone in big trouble",
  "Explain why this was a terrible idea… at first",
  "Explain how this accidentally saved the day",
  "Explain why nobody is allowed to do this anymore",
  "Explain how this caused a very awkward silence",
  "Explain why everyone thought this was a joke",
  "Explain how this ruined the original plan",
  "Explain why this only works once",
  "Explain how this made the crowd gasp",
  "Explain why the rules had to be rewritten",
  "Explain how this started an argument",
  "Explain why someone tried to hide this",
  "Explain how this went wrong immediately",
  "Explain why this became famous for the wrong reason",
  "Explain how this led to an emergency meeting",
  "Explain why everyone blamed the wrong person",
  "Explain how this caused a chain reaction",
  "Explain why this sounded smart but wasn’t",
  "Explain how this turned into a competition",
  "Explain why this was misunderstood",
  "Explain how this caused a surprise celebration",
  "Explain why someone yelled “Wait, what?!”",
  "Explain how this became a new rule",
  "Explain why this only worked by accident",
  "Explain how this embarrassed someone important",
  "Explain why people are still arguing about it",
  "Explain how this went viral (in kid terms)",
  "Explain why this made things worse before better",
  "Explain how this solved the wrong problem",
  "Explain why nobody will ever forget this"
];

export const ACTION_ENTRIES = [
  "Steal 1 Victory Card",
  "Swap hands with any player",
  "Cancel another Action Card",
  "Draw 2 extra cards",
  "Force another player to speak last",
  "Double your points this round",
  "Silence one player for the round",
  "Choose a new Judge Card",
  "Take one card from any deck",
  "Skip your explanation but still compete",
  "Add one surprise rule",
  "Reverse the play order",
  "Force a rematch",
  "Copy another player’s idea",
  "Block a steal",
  "Trade one card with the deck",
  "Take another turn immediately",
  "Remove one rule for the round"
];

export const JUDGE_ENTRIES = [
  "Most creative explanation wins",
  "Most believable explanation wins",
  "Funniest explanation wins",
  "Best teamwork explanation wins",
  "Shortest explanation wins",
  "Most thoughtful explanation wins"
];
