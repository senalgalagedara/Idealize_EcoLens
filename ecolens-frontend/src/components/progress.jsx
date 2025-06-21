import React from 'react';

export function Progress({ value }) {
  return (
    <div className="box">
    <p className="label">Progress</p>
    <div className="progress-bar">
      <div className="progress-fill" style={{ width: `${progress}%` }}></div>
    </div>
  </div>

  );
}
