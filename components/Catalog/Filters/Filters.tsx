'use client';
import { useFiltersStore } from '@/store/useFiltersStore';
import { CamperFilters, useCampersStore } from '@/store/useCampersStore';
import css from './Filters.module.css';

const Filters = () => {
  const { location, equipment, form, toggleEquipment, setForm } =
    useFiltersStore();

  const { fetchCampers } = useCampersStore();

  const handleSearch = () => {
    const params: CamperFilters = {};

    if (location && location.trim()) {
      params.location = location.trim();
    }

    if (form) {
      params.form = form;
    }

    if (equipment.includes('automatic')) {
      params.transmission = 'automatic';
    }
    if (equipment.includes('AC')) {
      params.AC = 'true';
    }
    if (equipment.includes('kitchen')) {
      params.kitchen = 'true';
    }
    if (equipment.includes('TV')) {
      params.TV = 'true';
    }
    if (equipment.includes('bathroom')) {
      params.bathroom = 'true';
    }
    if (equipment.includes('radio')) {
      params.radio = 'true';
    }
    if (equipment.includes('refrigerator')) {
      params.refrigerator = 'true';
    }
    if (equipment.includes('microwave')) {
      params.microwave = 'true';
    }
    if (equipment.includes('gas')) {
      params.gas = 'true';
    }
    fetchCampers(false, params);
  };

  return (
    <div className={css['filters-container']}>
      <p className={css['filters-title']}>Filters</p>

      <div className={css['filter-section']}>
        <h3 className={css['section-title']}>Vehicle equipment</h3>
        <hr className={css.divider} />
        <div className={css['options-grid']}>
          {[
            { id: 'AC', label: 'AC', icon: 'wind' },
            { id: 'automatic', label: 'Automatic', icon: 'diagram' },
            { id: 'kitchen', label: 'Kitchen', icon: 'cup-hot' },
            { id: 'TV', label: 'TV', icon: 'tv' },
            { id: 'bathroom', label: 'Bathroom', icon: 'shower' },
            { id: 'radio', label: 'Radio', icon: 'radio' },
            { id: 'refrigerator', label: 'Refrigerator', icon: 'fridge' },
            {
              id: 'microwave',
              label: 'Microwave',
              icon: 'microwave',
              isFillNone: true,
            },
            { id: 'gas', label: 'Gas', icon: 'gas', isFillNone: true },
          ].map((item) => (
            <button
              key={item.id}
              type="button"
              className={`${css['option-card']} ${
                equipment.includes(item.id) ? css['active'] : ''
              }`}
              onClick={() => toggleEquipment(item.id)}
            >
              <svg
                width={32}
                height={32}
                className={`${css.icon} ${item.isFillNone ? css.fillNone : ''}`}
              >
                <use href={`/icons-sprite.svg#icon-${item.icon}`}></use>
              </svg>
              <span>{item.label}</span>
            </button>
          ))}
        </div>
      </div>

      <div className={css['filter-section']}>
        <h3 className={css['section-title']}>Vehicle type</h3>
        <hr className={css.divider} />
        <div className={css['options-grid']}>
          {[
            { id: 'panelTruck', label: 'Van', icon: 'grid-1x2' },
            {
              id: 'fullyIntegrated',
              label: 'Fully Integrated',
              icon: 'grid-3x3',
            },
            { id: 'alcove', label: 'Alcove', icon: 'grid' },
          ].map((type) => (
            <button
              key={type.id}
              type="button"
              className={`${css['option-card']} ${
                form === type.id ? css['active'] : ''
              }`}
              onClick={() => setForm(type.id)}
            >
              <svg width={32} height={32} className={css.icon}>
                <use href={`/icons-sprite.svg#icon-${type.icon}`}></use>
              </svg>
              <span>{type.label}</span>
            </button>
          ))}
        </div>
      </div>

      <button
        className={css['search-btn']}
        type="button"
        onClick={handleSearch}
      >
        Search
      </button>
    </div>
  );
};

export default Filters;
