import React from 'react';

export const CommentsCounter = () => {
  return (
    <button className="app-control-counter">
        <div className="app-control-counter__icon">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 58 58">
              <path d="M29 1.5c-16.016 0-29 11.641-29 26 0 5.292 1.768 10.211 4.796 14.318C4.398 46.563 3.254 53.246 0 56.5c0 0 9.943-1.395 16.677-5.462l.022.009c2.764-1.801 5.532-3.656 6.105-4.126.3-.421.879-.548 1.33-.277.296.178.483.503.489.848.01.622-.005.784-5.585 4.421A31.914 31.914 0 0029 53.5c16.016 0 29-11.641 29-26s-12.984-26-29-26z" />
            </svg>
        </div>
        <div className="app-control-counter__count">10</div>
    </button>
  );
};