import React from 'react';

export function Button({ children, onClick, disabled, variant = 'default' }) {
  return (
    <div className="button-group">
      <button className="btn upload">Upload</button>
      <button className="btn cancel">Cancel</button>
    </div>

  );
}
