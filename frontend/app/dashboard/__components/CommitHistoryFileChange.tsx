import React from 'react';

interface CommitHistoryFileChangeProps {
  title: string;
  subtitle: string;
  body: string;
}

const CommitHistoryFileChange: React.FC<CommitHistoryFileChangeProps> = ({ title, subtitle, body }) => {
  return (
    <div className="border border-white rounded-lg p-2 my-2 bg-black min-w-[200px]">
      <h1 className="text-sm mb-1 text-white">{title}</h1>
      <h2 className="text-xs mb-1 text-gray-400">{subtitle}</h2>
      <p className="text-xs text-white">{body}</p>
    </div>
  );
}

export default CommitHistoryFileChange;