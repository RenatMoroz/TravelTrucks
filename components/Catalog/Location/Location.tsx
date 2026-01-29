'use client';
import { useFiltersStore } from '@/store/useFiltersStore';
import css from './Location.module.css';

const Location = () => {
  const { location, setLocation } = useFiltersStore();

  return (
    <div className={css['location-container']}>
      <label htmlFor="location" className={css['label']}>
        Location
      </label>
      <div className={css['input-wrapper']}>
        <input
          id="location"
          type="text"
          name="location"
          placeholder="City, Country"
          className={css['input']}
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />
        <svg width={20} height={20} className={css['icon-location']}>
          <use href="/icons-sprite.svg#icon-Map"></use>
        </svg>
      </div>
    </div>
  );
};

export default Location;
