import { useState } from 'react';
import { works, workCategories, type Work, type WorkCategory } from '../../content/portfolio';
import Lightbox from './Lightbox';

const Gallery = () => {
  const [activeCategory, setActiveCategory] = useState<WorkCategory | 'all'>('all');
  const [selectedWork, setSelectedWork] = useState<Work | null>(null);

  const visibleWorks =
    activeCategory === 'all'
      ? works
      : works.filter((work) => work.category === activeCategory);

  return (
    <>
      <div className="filter-bar" role="group" aria-label="Filtrează lucrările">
        {workCategories.map((category) => (
          <button
            key={category.id}
            onClick={() => setActiveCategory(category.id)}
            className={activeCategory === category.id ? 'filter-btn active' : 'filter-btn'}
            aria-pressed={activeCategory === category.id}
          >
            {category.label}
          </button>
        ))}
      </div>

      <p className="filter-count">
        {visibleWorks.length} {visibleWorks.length === 1 ? 'lucrare' : 'lucrări'}
      </p>

      <div className="gallery-grid">
        {visibleWorks.map((work) => (
          <button
            key={work.id}
            className="gallery-tile"
            onClick={() => setSelectedWork(work)}
            aria-label={`Vezi mai mare: ${work.alt}`}
          >
            <img src={work.src} alt={work.alt} loading="lazy" />
          </button>
        ))}
      </div>

      {selectedWork && (
        <Lightbox work={selectedWork} onClose={() => setSelectedWork(null)} />
      )}
    </>
  );
};

export default Gallery;