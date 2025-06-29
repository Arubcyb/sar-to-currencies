// Fixed exchange rates
const EXCHANGE_RATES = {
    USD: 0.27, // 1 SAR = 0.27 USD
    EUR: 0.25  // 1 SAR = 0.25 EUR
};

// DOM elements
const sarInput = document.getElementById('sar-amount');
const usdResult = document.getElementById('usd-result');
const eurResult = document.getElementById('eur-result');
const convertBtn = document.getElementById('convert-btn');
const lastUpdated = document.getElementById('last-updated');

// Initialize the application
function init() {
    // Set current date and time
    const now = new Date();
    lastUpdated.textContent = now.toLocaleString();
    
    // Add event listeners
    sarInput.addEventListener('input', handleInput);
    sarInput.addEventListener('keypress', handleKeyPress);
    convertBtn.addEventListener('click', convertCurrency);
    
    // Set focus to input field
    sarInput.focus();
}

// Handle input changes
function handleInput() {
    const value = parseFloat(sarInput.value);
    
    if (value > 0) {
        convertCurrency();
    } else {
        resetResults();
    }
}

// Handle Enter key press
function handleKeyPress(event) {
    if (event.key === 'Enter') {
        convertCurrency();
    }
}

// Convert currency
function convertCurrency() {
    const sarAmount = parseFloat(sarInput.value);
    
    if (isNaN(sarAmount) || sarAmount < 0) {
        showError('Please enter a valid amount');
        return;
    }
    
    // Calculate conversions
    const usdAmount = sarAmount * EXCHANGE_RATES.USD;
    const eurAmount = sarAmount * EXCHANGE_RATES.EUR;
    
    // Display results with proper formatting
    usdResult.textContent = formatCurrency(usdAmount, 'USD');
    eurResult.textContent = formatCurrency(eurAmount, 'EUR');
    
    // Add animation effect
    animateResults();
}

// Format currency with proper decimal places
function formatCurrency(amount, currency) {
    return new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: currency,
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
    }).format(amount);
}

// Reset results to zero
function resetResults() {
    usdResult.textContent = '0.00';
    eurResult.textContent = '0.00';
}

// Show error message
function showError(message) {
    // Create a temporary error message
    const errorDiv = document.createElement('div');
    errorDiv.className = 'error-message';
    errorDiv.textContent = message;
    errorDiv.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: #e74c3c;
        color: white;
        padding: 15px 20px;
        border-radius: 8px;
        box-shadow: 0 4px 12px rgba(0,0,0,0.15);
        z-index: 1000;
        animation: slideIn 0.3s ease;
    `;
    
    document.body.appendChild(errorDiv);
    
    // Remove error message after 3 seconds
    setTimeout(() => {
        errorDiv.style.animation = 'slideOut 0.3s ease';
        setTimeout(() => {
            document.body.removeChild(errorDiv);
        }, 300);
    }, 3000);
}

// Animate results
function animateResults() {
    const resultCards = document.querySelectorAll('.result-card');
    
    resultCards.forEach((card, index) => {
        card.style.transform = 'scale(1.05)';
        setTimeout(() => {
            card.style.transform = 'scale(1)';
        }, 200 + (index * 100));
    });
}

// Add CSS animations
const style = document.createElement('style');
style.textContent = `
    @keyframes slideIn {
        from {
            transform: translateX(100%);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
    
    @keyframes slideOut {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(100%);
            opacity: 0;
        }
    }
    
    .result-card {
        transition: transform 0.3s ease;
    }
`;
document.head.appendChild(style);

// Initialize the application when DOM is loaded
document.addEventListener('DOMContentLoaded', init);

// Add some example values for demonstration
function addExampleValues() {
    const examples = [100, 500, 1000, 5000];
    const exampleContainer = document.createElement('div');
    exampleContainer.className = 'examples';
    exampleContainer.style.cssText = `
        margin-top: 20px;
        text-align: center;
    `;
    
    const title = document.createElement('h3');
    title.textContent = 'Quick Examples:';
    title.style.cssText = `
        color: #2c3e50;
        margin-bottom: 10px;
        font-size: 1rem;
    `;
    
    exampleContainer.appendChild(title);
    
    examples.forEach(amount => {
        const button = document.createElement('button');
        button.textContent = `${amount} SAR`;
        button.style.cssText = `
            margin: 5px;
            padding: 8px 15px;
            border: 2px solid #3498db;
            background: white;
            color: #3498db;
            border-radius: 20px;
            cursor: pointer;
            font-size: 0.9rem;
            transition: all 0.3s ease;
        `;
        
        button.addEventListener('mouseenter', () => {
            button.style.background = '#3498db';
            button.style.color = 'white';
        });
        
        button.addEventListener('mouseleave', () => {
            button.style.background = 'white';
            button.style.color = '#3498db';
        });
        
        button.addEventListener('click', () => {
            sarInput.value = amount;
            convertCurrency();
            sarInput.focus();
        });
        
        exampleContainer.appendChild(button);
    });
    
    document.querySelector('.converter-card').appendChild(exampleContainer);
}

// Add example values after initialization
setTimeout(addExampleValues, 1000); 