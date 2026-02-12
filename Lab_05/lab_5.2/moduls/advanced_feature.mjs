export function renderStats(selector, value) {
    const container = document.querySelector(selector);
    container.innerHTML = `
        <div class="p-6 bg-indigo-50 border-2 border-indigo-100 rounded-2xl animate-pulse">
            <p class="text-indigo-600 font-bold uppercase text-xs tracking-widest mb-1">Live Revenue</p>
            <p class="text-4xl font-black text-indigo-900">${value}</p>
            <p class="text-sm text-indigo-400 mt-2">↑ 12% increase from yesterday</p>
        </div>
    `;
    setTimeout(() => {
        container.firstElementChild.classList.remove('animate-pulse');
    }, 1000);
}