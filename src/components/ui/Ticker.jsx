import React from 'react';

export const Ticker = () => {
  return (
    <div className="border-y border-zinc-900 bg-zinc-950 py-10 overflow-hidden whitespace-nowrap">
      <div className="flex gap-20 animate-infinite-scroll text-zinc-800 font-bold text-4xl tracking-tighter uppercase italic">
        {[1,2,3,4].map(i => (
          <React.Fragment key={i}>
            <span>MongoDB</span>
            <span>Express.js</span>
            <span>React.js</span>
            <span>Node.js</span>
            <span>Dynamic UI</span>
            <span>Static Excellence</span>
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};
