import {useState} from 'react'
import SearchBox from './SearchBox';

function Filter({filterProducts, onSearch}) {
      const [activeFilter, setActiveFilter] = useState("all");
    const filters = [
        { key: 'all', label: 'All Products' },
        { key: 'footwear', label: '👟 Footwear' },
        { key: 'bags', label: '🎒 Bags' },
        { key: 'apparel', label: '👕 Apparel' },
        { key: 'accessories', label: '⌚ Accessories' },
        { key: 'sale', label: '🔥 On Sale' },
    ];
     const handleFilter = (key) => {
        setActiveFilter(key);
        filterProducts(key);
    };
  return (
    <div>
        <section className="flex gap-[160px] max-w-7xl mx-auto px-5 py-8 ">
            <div className="flex gap-3 overflow-x-auto pb-2">
               {filters.map((item) => (
                    <button
                        key={item.key}
                        onClick={() => handleFilter(item.key)}
                        className={`filter-btn whitespace-nowrap px-5 py-2 rounded-full border t-border text-sm font-medium t-text `} 
                        style={{
                            backgroundColor:
                            activeFilter === item.key ? 'var(--text)' : 'transparent',
                            color:
                            activeFilter === item.key ? 'var(--bg)' : 'var(--text)',
                            borderColor:
                            activeFilter === item.key ? 'var(--text)' : 'var(--border)',
                        }} >
                        {item.label}
                    </button>
                ))}
            </div>
            <div >
                <SearchBox  onSearch={onSearch}/>
            </div>
        </section>
    </div>
  )
}

export default Filter