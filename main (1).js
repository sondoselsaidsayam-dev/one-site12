// Dark Mode
const toggle = document.getElementById("darkToggle");
const html = document.documentElement;

toggle.addEventListener("change", () => {
  if (toggle.checked) {
    html.classList.add("dark");
    html.classList.add("light");
    localStorage.setItem("theme", "dark");
  } else {
    html.classList.remove("dark");
    localStorage.setItem("theme", "light");
  }
});

if (localStorage.getItem("theme") === "dark") {
  html.classList.add("dark");
  toggle.checked = true;
}

// Pricing Toggle (Monthly/Yearly with 20% discount for yearly)
const pricingButtons = document.querySelectorAll('#pricing-toggle button');
const pricingAmounts = document.querySelectorAll('.pricing-amount');
const pricingPeriods = document.querySelectorAll('.pricing-period');

pricingButtons.forEach((btn, index) => {
    btn.addEventListener('click', () => {
        pricingButtons.forEach(b => b.classList.remove('bg-blue-600', 'text-white', 'active'));
        pricingButtons.forEach(b => b.classList.add('text-gray-700', 'dark:text-gray-300'));
        btn.classList.add('bg-blue-600', 'text-white', 'active');
        btn.classList.remove('text-gray-700', 'dark:text-gray-300');

        const isYearly = index === 1;
        const monthlyPrices = [0.00, 29.00, 49.00];
        pricingAmounts.forEach((amount, i) => {
            let price = monthlyPrices[i];
            if (isYearly) {
                price = (price * 12 * 0.8).toFixed(2);
            }
            amount.textContent = `$${price}`;
        });
        pricingPeriods.forEach(period => {
            period.textContent = isYearly ? '/Year' : '/Month';
        });
    });
});

// Contact Form Submit
document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Message sent successfully!');
    this.reset();
});