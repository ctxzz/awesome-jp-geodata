// Color palette
const palette = {
    bg: '#F5F5F5',
    card: '#FFFFFF',
    text: '#333333',
    primary: '#7D8F69',
    secondary: '#A2B29F',
    accent: '#D3E0DC'
};

// Tooltip configuration
const tooltipTitleCallback = (tooltipItems) => {
    const item = tooltipItems[0];
    let label = item.chart.data.labels[item.dataIndex];
    if (Array.isArray(label)) {
        return label.join(' ');
    }
    return label;
};

// Initialize the application
document.addEventListener('DOMContentLoaded', async () => {
    try {
        // Fetch data from external JSON file
        const response = await fetch('data.json');
        const dataSource = await response.json();
        
        // Render data cards
        renderDataCards(dataSource);
        
        // Setup filters
        setupFilters();
        
    } catch (error) {
        console.error('Error loading data:', error);
        document.getElementById('dataSourceGrid').innerHTML = 
            '<div class="col-span-full text-center text-red-500">データの読み込みに失敗しました。</div>';
    }
});

// Render data cards to the grid
function renderDataCards(dataSource) {
    const grid = document.getElementById('dataSourceGrid');
    
    dataSource.forEach(item => {
        const card = document.createElement('div');
        card.className = 'data-card bg-white rounded-lg shadow-md p-6 flex flex-col transition-all duration-300 hover:shadow-xl hover:-translate-y-1';
        card.dataset.category = item.category;
        card.dataset.cost = item.cost;
        
        card.innerHTML = `
            <div class="flex-grow">
                <div class="flex justify-between items-start mb-2">
                    <a href="${item.url}" target="_blank" rel="noopener noreferrer" class="hover:underline hover:text-[#7D8F69] transition-colors">
                        <h3 class="text-xl font-bold text-gray-800">${item.name}</h3>
                    </a>
                    <span class="text-sm font-bold py-1 px-3 rounded-full ${item.cost === '有料' ? 'bg-red-100 text-red-800' : 'bg-green-100 text-green-800'}">${item.cost}</span>
                </div>
                <p class="text-sm text-gray-500 mb-3">${item.provider}</p>
                <p class="text-gray-600 text-sm mb-4">${item.description}</p>
            </div>
            <div class="mt-auto pt-4 border-t border-gray-200">
                <p class="text-xs text-gray-500"><span class="font-bold">アクセス:</span> ${item.access}</p>
            </div>
        `;
        grid.appendChild(card);
    });
}

// Setup filter functionality
function setupFilters() {
    const categoryFilterGroup = document.getElementById('category-filter-group');
    const costFilterGroup = document.getElementById('cost-filter-group');
    let currentCategoryFilter = 'all';
    let currentCostFilter = 'all';

    const applyFilters = () => {
        const cards = document.querySelectorAll('.data-card');
        cards.forEach(card => {
            const categoryMatch = currentCategoryFilter === 'all' || card.dataset.category === currentCategoryFilter;
            const costMatch = currentCostFilter === 'all' || card.dataset.cost === currentCostFilter;
            if (categoryMatch && costMatch) {
                card.classList.remove('hidden');
            } else {
                card.classList.add('hidden');
            }
        });
    };
    
    const setupFilterGroup = (groupElement, filterStateSetter) => {
        groupElement.addEventListener('click', (e) => {
            if (e.target.tagName === 'BUTTON') {
                groupElement.querySelectorAll('button').forEach(btn => btn.classList.remove('active'));
                e.target.classList.add('active');
                filterStateSetter(e.target.dataset.filter);
            }
        });
    };
    
    setupFilterGroup(categoryFilterGroup, (value) => {
        currentCategoryFilter = value;
        applyFilters();
    });

    setupFilterGroup(costFilterGroup, (value) => {
        currentCostFilter = value;
        applyFilters();
    });
}
