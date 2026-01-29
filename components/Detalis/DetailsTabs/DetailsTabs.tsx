import css from './DetailsTabs.module.css';

interface DetailsTabsProps {
  activeTab: 'features' | 'reviews';
  onTabChange: (tab: 'features' | 'reviews') => void;
}

const DetailsTabs = ({ activeTab, onTabChange }: DetailsTabsProps) => {
  return (
    <div className={css.wrapper}>
      <div className={css.tabsNav}>
        <button
          type="button"
          className={`${css.tabButton} ${
            activeTab === 'features' ? css.active : ''
          }`}
          onClick={() => onTabChange('features')}
        >
          Features
        </button>
        <button
          type="button"
          className={`${css.tabButton} ${
            activeTab === 'reviews' ? css.active : ''
          }`}
          onClick={() => onTabChange('reviews')}
        >
          Reviews
        </button>
      </div>
      <hr className={css.fullDivider} />
    </div>
  );
};

export default DetailsTabs;
