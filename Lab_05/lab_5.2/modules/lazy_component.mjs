export function renderReviews(selector) {
    const container = document.querySelector(selector);
    container.innerHTML = `
        <h3 class="text-2xl font-bold mb-6 text-indigo-400">Latest Customer Feedback</h3>
        <div class="grid gap-4">
            <div class="bg-slate-800 p-4 rounded-xl border border-slate-700">
                <p class="text-slate-300 italic text-lg">"The modular interface is buttery smooth!"</p>
                <p class="text-indigo-500 font-bold mt-2">— Sarah K.</p>
            </div>
            <div class="bg-slate-800 p-4 rounded-xl border border-slate-700">
                <p class="text-slate-300 italic text-lg">"Love how the stats load instantly."</p>
                <p class="text-indigo-500 font-bold mt-2">— Mike R.</p>
            </div>
        </div>
    `;
}