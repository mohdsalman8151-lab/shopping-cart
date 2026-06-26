function SearchBox({onSearch}) {
  return (
    <>
        <div className="hidden md:flex flex-1 max-w-sm mx-8 relative">
            <input id="searchInput" type="text" placeholder="Search products…" onChange={(e)=> onSearch(e.target.value)}
                className="w-full t-surface2 t-border border rounded-full px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-black/10 dark:focus:ring-white/10 placeholder:text-[var(--muted)] t-text"
                />
            <svg className="absolute right-3 top-2.5 w-4 h-4 t-muted pointer-events-none" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-4.35-4.35M17 11A6 6 0 1 1 5 11a6 6 0 0 1 12 0z"/>
            </svg>
        </div>
    </>
  )
}

export default SearchBox