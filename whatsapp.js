/* Nextstep AI — WhatsApp Floating Button */
(function () {
  const css = `
    #wa-btn {
      position: fixed;
      bottom: 28px;
      right: 28px;
      z-index: 9000;
      width: 56px;
      height: 56px;
      border-radius: 50%;
      background: #25d366;
      box-shadow: 0 4px 20px rgba(37,211,102,0.45), 0 2px 8px rgba(0,0,0,0.3);
      display: flex;
      align-items: center;
      justify-content: center;
      text-decoration: none;
      transition: transform 0.2s cubic-bezier(0.34,1.56,0.64,1), box-shadow 0.2s;
      animation: wa-pop 0.5s 1.5s cubic-bezier(0.34,1.56,0.64,1) both;
    }
    @keyframes wa-pop {
      from { transform: scale(0); opacity: 0; }
      to   { transform: scale(1); opacity: 1; }
    }
    #wa-btn:hover {
      transform: scale(1.1);
      box-shadow: 0 6px 28px rgba(37,211,102,0.55), 0 4px 12px rgba(0,0,0,0.3);
    }
    #wa-tooltip {
      position: fixed;
      bottom: 36px;
      right: 92px;
      z-index: 9000;
      background: rgba(11,20,36,0.95);
      border: 1px solid rgba(255,255,255,0.1);
      border-radius: 10px;
      padding: 10px 14px;
      font-family: 'Outfit', sans-serif;
      font-size: 13px;
      font-weight: 600;
      color: rgba(255,255,255,0.85);
      white-space: nowrap;
      pointer-events: none;
      opacity: 0;
      transform: translateX(6px);
      transition: opacity 0.2s, transform 0.2s;
    }
    #wa-btn:hover + #wa-tooltip,
    #wa-btn:focus + #wa-tooltip {
      opacity: 1;
      transform: translateX(0);
    }
    @media (max-width: 600px) {
      #wa-btn { bottom: 20px; right: 20px; width: 50px; height: 50px; }
      #wa-tooltip { display: none; }
    }
  `;

  const style = document.createElement('style');
  style.textContent = css;
  document.head.appendChild(style);

  const link = document.createElement('a');
  link.id = 'wa-btn';
  link.href = 'https://wa.me/27736466567?text=Hi%20Caleb%2C%20I%20saw%20your%20website%20and%20I%27m%20interested%20in%20a%20free%20brand%20audit.';
  link.target = '_blank';
  link.rel = 'noopener noreferrer';
  link.setAttribute('aria-label', 'Chat on WhatsApp');
  link.innerHTML = `<svg width="28" height="28" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M16 2C8.268 2 2 8.268 2 16c0 2.454.664 4.755 1.82 6.733L2 30l7.48-1.794A13.94 13.94 0 0016 30c7.732 0 14-6.268 14-14S23.732 2 16 2z" fill="white"/>
    <path d="M23.5 20.5c-.3.8-1.5 1.5-2.4 1.7-.6.1-1.4.2-4.1-.9-3.4-1.4-5.6-4.9-5.8-5.1-.2-.3-1.4-1.9-1.4-3.6 0-1.7.9-2.5 1.2-2.8.3-.3.6-.4.9-.4h.6c.2 0 .4 0 .6.5l.9 2.2c.1.2.1.4 0 .6l-.5.6-.4.5c.3.5 1.2 1.9 2.4 2.8 1.2.9 2.2 1.2 2.7 1.4l.8-1c.2-.3.5-.3.8-.2l2.1.9c.5.2.5.5.6.8z" fill="#25d366"/>
  </svg>`;

  const tooltip = document.createElement('div');
  tooltip.id = 'wa-tooltip';
  tooltip.textContent = 'Chat on WhatsApp';

  document.body.appendChild(link);
  document.body.appendChild(tooltip);
})();
