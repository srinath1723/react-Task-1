import './App.css'; // Import the CSS file

const App = () => {
  const content = [
    { amount: 'FREE', head: '$0/month', body: ["Single User", "50GB Storage", "Unlimited Public Projects", "Community Access", "Unlimited Private Projects", "Dedicated Phone Support", "Free Subdomain", "Monthly Status Reports"], button: 'Button', added: true },
    { amount: 'PLUS', head: '$9/month', body: ["Single User", "50GB Storage", "Unlimited Public Projects", "Community Access", "Unlimited Private Projects", "Dedicated Phone Support", "Free Subdomain", "Monthly Status Reports"], button: 'Button', added: true },
    { amount: 'PRO', head: '$49/month', body: ["Single User", "50GB Storage", "Unlimited Public Projects", "Community Access", "Unlimited Private Projects", "Dedicated Phone Support", "Free Subdomain", "Monthly Status Reports"], button: 'Button', added: true }
  ];

  return (
    <div className="head">
      <h1>React Price Card Task</h1>
      <div className="container">
        <div className="card-list">
          {content.map((cont, index) => {
            const hasCross = cont.amount === "PLUS" && cont.body.length > 7 || cont.amount === "FREE" && cont.body.length > 4;

            return (
              <div key={index} className="card-item">
                <div className="card">
                  <div className="header">
                    <h4 className="amount">{cont.amount}</h4>
                    <h2>{cont.head}</h2>
                  </div>
                  <hr className="card-divider" />
                  <ul className="card-body">
                    {cont.amount === "PRO" && cont.added && cont.body.map((item, i) => (
                      <li key={i}><span className="check-mark">✔</span> {item}</li>
                    ))}
                    {cont.amount === "PLUS" && cont.added && cont.body.map((item, i) => (
                      i < 7 ? <li key={i}><span className="check-mark">✔</span> {item}</li> : <li key={i}><span className="cross-mark">✘ {item}</span> </li>
                    ))}
                    {cont.amount === "FREE" && cont.added && cont.body.map((item, i) => (
                      i < 4 ? <li key={i}><span className="check-mark">✔</span> {item}</li> : <li key={i}><span className="cross-mark">✘ {item}</span> </li>
                    ))}
                  </ul>
                  <button className={`main-button ${hasCross ? 'lite' : ''}`}>{cont.button}</button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
