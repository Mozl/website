import React, { forwardRef } from 'react';

const Overlay = forwardRef(({ caption, scroll }, ref) => {
  return (
    <>
      <div
        ref={ref}
        onScroll={(e) => {
          scroll.current = e.target.scrollTop / (e.target.scrollHeight - window.innerHeight);
          // caption.current.innerText = scroll.current.toFixed(2);
        }}
        className="scroll overlay"
      >
        <div style={{ height: '400vh' }}>
          <div className="dot"></div>
        </div>
        <div style={{ height: '200vh' }}>
          <div className="dot"></div>
        </div>
        <div style={{ height: '200vh' }}>
          <div className="dot"></div>
        </div>
        <div style={{ height: '200vh' }}>
          <div className="dot"></div>
        </div>
        <div style={{ height: '200vh' }}>
          <div className="dot"></div>
        </div>
        <div style={{ height: '200vh' }}>
          <div className="dot"></div>
        </div>
        <div style={{ height: '200vh' }}>
          <div className="dot"></div>
        </div>
        {/* <span className="caption" ref={caption}>
          0.00
        </span> */}
      </div>
      <style jsx>{`
        .scroll {
          position: absolute;
          top: 0;
          left: 0;
          scroll-snap-type: y proximity;
          overflow-y: auto;
          height: 100%;
          width: 100%;
        }

        .scroll > div {
          scroll-snap-align: start;
        }
        .caption {
          pointer-events: none;
          position: fixed;
          top: 0;
          right: 0;
          margin: 80px;
          color: white;
          font-size: 8em;
          font-weight: 100;
          line-height: 1em;
          font-variant-numeric: tabular-nums;
          -webkit-font-smoothing: auto;
        }

        .dot {
          pointer-events: none;
          position: sticky;
          top: 0px;
          display: inline-block;
          max-width: 600px;
          padding: 0;
          padding: 80px;
          color: #a0a0a0;
          line-height: 1.6em;
          font-size: 15px;
          letter-spacing: 1.5px;
        }

        .dot > h1 {
          -webkit-font-smoothing: auto;
          pointer-events: none;
          color: blue;
          font-size: 5em;
          font-weight: 100;
          line-height: 1em;
          margin: 0;
          margin-bottom: 0.25em;
        }
      `}</style>
    </>
  );
});

export default Overlay;
