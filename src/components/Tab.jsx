import { useSnapshot } from 'valtio';

import state from '../store';

function Tab({ tab, isFilterTab, isActiveTab, handleClick }) {
  const snap = useSnapshot(state);

  const activeStyles =
    isFilterTab && isActiveTab
      ? { backgroundColor: snap.color, opacity: 0.5 }
      : { backgroundColor: 'transparent', opacity: 1 };

  return (
    <div
      className={`tab-btn ${
        isFilterTab ? 'rounded-full glassmorphism' : 'rounded-4'
      }`}
      style={activeStyles}
      key={tab.name}
      onClick={handleClick}
    >
      <img
        className={`${
          isFilterTab ? 'w-2/3 h-2/3' : 'w-11/12 h-11/12 object-contain'
        }`}
        src={tab.icon}
        alt={tab.name}
      />
    </div>
  );
}

export default Tab;
