// Color Map for JS Logic (Used to set the dynamic border color)
const classColorMap = {
    'noble gas': '#D8BFD8',
    'alkali metal': '#FFFACD',         
    'alkaline earth metal': '#E0EEE0', 
    'nonmetal': '#FFDAB9',
    'halogen': '#ADD8E6',
    'metalloid': '#F5F5DC',
    'metal': '#B0C4DE'
};

// Main Element Data
const periodicElements = [
    { symbol: 'H', name: 'Hydrogen', atomicNum: 1, class: 'nonmetal', mascot: '1_hydrogen.png',
        funnyDescription: "I'm the lightest one and I never stop! I own 90% of the Universe, but on Earth, I run away from combining. Oxygen's best friend (but I also go boom!)." },
    { symbol: 'He', name: 'Helium', atomicNum: 2, class: 'noble gas', mascot: '2_helium.png',
        funnyDescription: "I'm a noble gas, so I don't socialize. I have one job: making your voice sound like an elf. Zero stress, zero chemical reactions. Perfect!" },
    { symbol: 'Li', name: 'Lithium', atomicNum: 3, class: 'alkali metal', mascot: '3_lithium.png',
        funnyDescription: "I'm small, light, and full of energy! I was created for phones, laptops, and electric cars. My life is a charge-discharge cycle." },
    { symbol: 'Be', name: 'Beryllium', atomicNum: 4, class: 'alkaline earth metal', mascot: '4_beryllium.png',
        funnyDescription: "I'm an elegant metal, aren't I? I hide in emeralds, giving hardness. I'm expensive and I don't react to just anything. Please, keep your distance!" },
    { symbol: 'B', name: 'Boron', atomicNum: 5, class: 'metalloid', mascot: '5_boron.png',
        funnyDescription: "I produce a green flame. I'm a kind of chameleon. I'm used in lab glass because I don't get hot easily." },
    { symbol: 'C', name: 'Carbon', atomicNum: 6, class: 'nonmetal', mascot: '6_carbon.png',
        funnyDescription: "I'm the basis of life! Everything starts with me: you, trees, even diamonds! I like making bonds; I'm the most social element." },
    { symbol: 'N', name: 'Nitrogen', atomicNum: 7, class: 'nonmetal', mascot: '7_nitrogen.png',
        funnyDescription: "I'm 78% of the air, but I'm boring. I don't react much, but I keep things in balance. I'm used for freezing, just to maintain my chill." },
    { symbol: 'O', name: 'Oxygen', atomicNum: 8, class: 'nonmetal', mascot: '8_oxygen.png',
        funnyDescription: "I'm pure and I came in the paired form of O2. You can't exist without me. I'm essential, but also extremely reactive. I don't play around, I combust! The best life partner, but also a rusting agent." },
    { symbol: 'F', name: 'Fluorine', atomicNum: 9, class: 'halogen', mascot: '9_fluorine.png',
        funnyDescription: "I'm the hungriest and most reactive. I steal electrons from everyone! But I help you have clean teeth, so it's okay. Don't touch me, I burn!" },
    { symbol: 'Ne', name: 'Neon', atomicNum: 10, class: 'noble gas', mascot: '10_neon.png',
        funnyDescription: "I'm the star! I light up in reddish-orange colors. I'm an inert gas, so I stand aside, but always in the spotlight. I love the show!" },
    { symbol: 'Na', name: 'Sodium', atomicNum: 11, class: 'alkali metal', mascot: '11_sodium.png',
        funnyDescription: "In pure state, I explode in water! But when I combine with chlorine, I become your favorite salt. I'm essential for chips and for your balance. Yummy!" },
    { symbol: 'Mg', name: 'Magnesium', atomicNum: 12, class: 'alkaline earth metal', mascot: '12_magnesium.png',
        funnyDescription: "I'm good at everything. Are you tired? I'm in supplements! Want a bright flame? I'm in fireworks! You can also find me in plant chlorophyll. I'm an MVP." },
    { symbol: 'Al', name: 'Aluminum', atomicNum: 13, class: 'metal', mascot: '13_aluminum.png',
        funnyDescription: "I'm thin, but also I'm a strong yet lightweight metal. I'm everywhere, from soda cans to airplanes. Recycle me! I don't rust, I'm simply unyielding." },
    { symbol: 'Si', name: 'Silicon', atomicNum: 14, class: 'metalloid', mascot: '14_silicon.png',
        funnyDescription: "I control the future! I'm the soul of computers and phones. I'm not a metal, I'm not a nonmetal, but I am essential. I sit quietly, but I make revolutions." },
    { symbol: 'P', name: 'Phosphorus', atomicNum: 15, class: 'nonmetal', mascot: '15_phosphorus.png',
        funnyDescription: "I have several colors and I'm a bit unstable. I'm in matchsticks and your DNA. I glow in the dark, but don't be scared, I'm friendly (though I am toxic)." },
    { symbol: 'S', name: 'Sulfur', atomicNum: 16, class: 'nonmetal', mascot: '16_sulfur.png',
        funnyDescription: "I can't help but smell bad (rotten eggs, volcanoes). I'm used in sulfuric acid, grenades and gunpowder, so don't mess with me! I'm yellow and I look good, though." },
    { symbol: 'Cl', name: 'Chlorine', atomicNum: 17, class: 'halogen', mascot: '17_chlorine.png',
        funnyDescription: "I'm the best at cleaning! I don't like dirt. I help keep your pool water clean. As a gas, I'm green and toxic, so be careful!" },
    { symbol: 'Ar', name: 'Argon', atomicNum: 18, class: 'noble gas', mascot: '18_argon.png',
        funnyDescription: "I'm the laziest of them all. I'm a noble gas, I don't want to combine with anything! You only use me as a protective shield in welding or in light bulbs, where I do nothing." },
    { symbol: 'K', name: 'Potassium', atomicNum: 19, class: 'alkali metal', mascot: '19_potassium.png',
        funnyDescription: "I'm vital for your muscles (I'm in bananas!). As a pure metal, I react violently and I burn with a lilac flame. Throw me in water? I put on a pyrotechnic show! I'm both explosive and healthy." },
    { symbol: 'Ca', name: 'Calcium', atomicNum: 20, class: 'alkaline earth metal', mascot: '20_calcium.png',
        funnyDescription: "I'm the one who holds your back (and your teeth!). I'm in milk, but also in marble and chalk. I'm a metal, but my role is to be a bone. Without me, you're a jellyfish!" }
];

// Function to populate the periodic table
function populateTable() {
    const periodicTable = document.getElementById('periodic-table');
    
    periodicElements.forEach(element => {
        // Create element div
        const cssClass = element.class.replace(/\s+/g, '-');
         
        const elementDiv = document.createElement('div');
        elementDiv.className = `element ${cssClass}`;
        
        // Create atomic number span
        const atomicNumSpan = document.createElement('span');
        atomicNumSpan.className = 'atomic-number';
        atomicNumSpan.textContent = element.atomicNum;
        
        // Create symbol span
        const symbolSpan = document.createElement('span');
        symbolSpan.className = 'symbol';
        symbolSpan.textContent = element.symbol;
        
        // Create class name span (capitalize first letter)
        const classNameSpan = document.createElement('span');
        classNameSpan.className = 'class-name';
        classNameSpan.textContent = element.class.charAt(0).toUpperCase() + element.class.slice(1);
        
        // Append spans to element div
        elementDiv.appendChild(atomicNumSpan);
        elementDiv.appendChild(symbolSpan);
        elementDiv.appendChild(classNameSpan);
        
        // Add click event listener to each element
        elementDiv.addEventListener('click', function() {
            console.log('Element clicked:', element.symbol); // Debug log
            showDetails(element.symbol);
        });
        
        // Append element div to periodic table
        periodicTable.appendChild(elementDiv);
    });
}

// Function to show element details in modal
function showDetails(elementSymbol) {
    console.log('showDetails called with symbol:', elementSymbol); // Debug log
    
    // Find the element by symbol
    const element = periodicElements.find(el => el.symbol === elementSymbol);
    console.log('Found element:', element); // Debug log
    
    if (element) {
        // Get modal elements
        const modal = document.getElementById('details-modal');
        const charImg = document.getElementById('char-img');
        const modalName = document.getElementById('modal-name');
        const elementSymbolEl = document.getElementById('element-symbol');
        const atomicNumberEl = document.getElementById('atomic-number');
        const funnyDescEl = document.getElementById('funny-desc');
        
        console.log('Modal elements found:', { modal, charImg, modalName }); // Debug log
        
        // Populate modal content
        charImg.src = 'images/' + element.mascot;
        charImg.alt = element.name + ' character';
        modalName.textContent = element.name;
        elementSymbolEl.textContent = 'Symbol: ' + element.symbol;
        atomicNumberEl.textContent = 'Atomic Number: ' + element.atomicNum;
        funnyDescEl.textContent = element.funnyDescription;
        
        // Set border color based on element class
        const borderColor = classColorMap[element.class];
        if (borderColor) {
            charImg.style.borderColor = borderColor;
        }
        
        // Show the modal
        modal.style.display = 'block';
        console.log('Modal should be visible now'); // Debug log
    } else {
        console.log('Element not found for symbol:', elementSymbol);
    }
}

// Function to start the adventure (hide intro, show table)
function startAdventure() {
    const coverIntro = document.getElementById('cover-intro');
    const tableContainer = document.getElementById('table-container');
    
    coverIntro.style.display = 'none';
    tableContainer.style.display = 'block';
}

// Function to close the details modal
function closeModal() {
    const modal = document.getElementById('details-modal');
    modal.style.display = 'none';
}

// Event listeners
document.addEventListener('DOMContentLoaded', function() {
    // Start adventure button
    const startBtn = document.getElementById('btn-start');
    if (startBtn) {
        startBtn.addEventListener('click', startAdventure);
    }
    
    // Close modal button
    const closeBtn = document.getElementById('close-modal');
    if (closeBtn) {
        closeBtn.addEventListener('click', closeModal);
    }
    
    // Close modal when clicking outside of it
    const modal = document.getElementById('details-modal');
    if (modal) {
        modal.addEventListener('click', function(event) {
            if (event.target === modal) {
                closeModal();
            }
        });
    }
});

// Test function to manually test modal (call from browser console)
function testModal() {
    showDetails('H'); // Test with Hydrogen
}

// Run the function to populate the table
populateTable();
