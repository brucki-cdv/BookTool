import "./Logo.css";

const Logo = (props) => {
  return (
    <div className="logo-container">
      <div className="logo__graphic">
        <span className="logo__brand-name">BT</span>
      </div>
      <span className="header__brand-name">BookTools</span>
    </div>
  );
};

export default Logo;
