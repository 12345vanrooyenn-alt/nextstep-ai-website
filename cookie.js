/* Nextstep AI — Cookie Consent Banner */
(function () {
  if (localStorage.getItem('nxs_cookie') === 'accepted') return;

  const css = `
    #cookie-bar {
      position: fixed;
      bottom: 0; left: 0; right: 0;
      z-index: 9999;
      background: rgba(11, 20, 36, 0.97);
      border-top: 1px solid rgba(14, 165, 233, 0.25);
      backdrop-filter: blur(12px);
      padding: 16px 24px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 20px;
      flex-wrap: wrap;
      font-family: 'Outfit', sans-serif;
      transform: translateY(100%);
      transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1);
    }
    #cookie-bar.show { transform: translateY(0); }
    #cookie-bar p {
      margin: 0;
      font-size: 14px;
      color: rgba(255,255,255,0.55);
      line-height: 1.6;
      flex: 1;
      min-width: 200px;
    }
    #cookie-bar p a {
      color: #0ea5e9;
      text-decoration: none;
      font-weight: 600;
    }
    #cookie-bar p a:hover { text-decoration: underline; }
    #cookie-bar-btns {
      display: flex;
      gap: 10px;
      flex-shrink: 0;
    }
    #cookie-accept {
      background: #0ea5e9;
      color: #fff;
      border: none;
      border-radius: 8px;
      padding: 9px 20px;
      font-size: 13px;
      font-weight: 700;
      font-family: 'Outfit', sans-serif;
      cursor: pointer;
      transition: background 0.2s;
    }
    #cookie-accept:hover { background: #38bdf8; }
    #cookie-decline {
      background: transparent;
      color: rgba(255,255,255,0.35);
      border: 1px solid rgba(255,255,255,0.12);
      border-radius: 8px;
      padding: 9px 16px;
      font-size: 13px;
      font-weight: 600;
      font-family: 'Outfit', sans-serif;
      cursor: pointer;
      transition: color 0.2s, border-color 0.2s;
    }
    #cookie-decline:hover { color: rgba(255,255,255,0.6); border-color: rgba(255,255,255,0.25); }
    @media (max-width: 600px) {
      #cookie-bar { flex-direction: column; align-items: flex-start; padding: 20px; }
    }
  `;

  const style = document.createElement('style');
  style.textContent = css;
  document.head.appendChild(style);

  const bar = document.createElement('div');
  bar.id = 'cookie-bar';
  bar.setAttribute('role', 'dialog');
  bar.setAttribute('aria-label', 'Cookie consent');
  bar.innerHTML = `
    <p>We use cookies to improve your experience and understand how visitors use our site. By clicking "Accept" you agree to our <a href="/legal.html#privacy">Privacy Policy</a>.</p>
    <div id="cookie-bar-btns">
      <button id="cookie-decline">Decline</button>
      <button id="cookie-accept">Accept</button>
    </div>
  `;
  document.body.appendChild(bar);

  // Animate in
  setTimeout(() => bar.classList.add('show'), 600);

  function dismiss(accepted) {
    bar.style.transform = 'translateY(100%)';
    if (accepted) localStorage.setItem('nxs_cookie', 'accepted');
    setTimeout(() => bar.remove(), 400);
  }

  document.getElementById('cookie-accept').addEventListener('click', () => dismiss(true));
  document.getElementById('cookie-decline').addEventListener('click', () => dismiss(false));
})();
