import React from 'react';

export default function ContributorAvatar({ contributors = [] }) {
  return (
    <div className="flex items-center gap-2 mt-2">
      {contributors.map((contributor, idx) => (
        <a key={idx} href={contributor.html_url} target="_blank" rel="noreferrer">
          <img
            src={contributor.avatar_url}
            alt={contributor.login}
            title={contributor.login}
            className="w-8 h-8 rounded-full border border-white shadow-sm"
          />
        </a>
      ))}
    </div>
  );
}
