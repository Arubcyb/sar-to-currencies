# Saudi Riyal Currency Converter

A beautiful, responsive web application that converts Saudi Riyal (SAR) to US Dollar (USD) and Euro (EUR) using fixed exchange rates.

## Features

- **Real-time Conversion**: Instantly convert SAR amounts to USD and EUR
- **Fixed Exchange Rates**: 
  - 1 SAR = 0.27 USD
  - 1 SAR = 0.25 EUR
- **Modern UI**: Beautiful gradient design with smooth animations
- **Responsive Design**: Works perfectly on desktop, tablet, and mobile devices
- **Interactive Elements**: Hover effects, animations, and quick example buttons
- **Error Handling**: Validates input and shows helpful error messages

## How to Use

1. **Open the Application**: Simply open `index.html` in any modern web browser
2. **Enter Amount**: Type the amount in Saudi Riyal (SAR) in the input field
3. **View Results**: The converted amounts in USD and EUR will appear automatically
4. **Quick Examples**: Click on the example buttons (100, 500, 1000, 5000 SAR) for instant conversion
5. **Keyboard Support**: Press Enter to convert the amount

## File Structure

```
AE WEB/
├── index.html      # Main HTML file
├── styles.css      # CSS styling and responsive design
├── script.js       # JavaScript functionality
└── README.md       # This file
```

## Exchange Rates

The application uses fixed exchange rates for demonstration purposes:

- **SAR to USD**: 1 SAR = 0.27 USD
- **SAR to EUR**: 1 SAR = 0.25 EUR

*Note: These are fixed rates for demonstration. Real exchange rates fluctuate constantly.*

## Browser Compatibility

This application works on all modern browsers including:
- Chrome
- Firefox
- Safari
- Edge

## Technologies Used

- **HTML5**: Semantic markup
- **CSS3**: Modern styling with gradients, animations, and responsive design
- **JavaScript (ES6+)**: Interactive functionality and currency conversion logic
- **Font Awesome**: Icons for better user experience
- **Google Fonts**: Inter font family for modern typography

## Features in Detail

### Input Validation
- Accepts only positive numbers
- Shows error messages for invalid input
- Real-time conversion as you type

### Responsive Design
- Mobile-first approach
- Adapts to different screen sizes
- Touch-friendly interface

### User Experience
- Smooth animations and transitions
- Hover effects on interactive elements
- Clear visual feedback
- Intuitive layout

## Getting Started

1. Download or clone the files to your local machine
2. Open `index.html` in your web browser
3. Start converting SAR to USD and EUR!

## Customization

You can easily modify the exchange rates by editing the `EXCHANGE_RATES` object in `script.js`:

```javascript
const EXCHANGE_RATES = {
    USD: 0.27, // Change this value
    EUR: 0.25  // Change this value
};
```

## License

This project is open source and available under the MIT License. 