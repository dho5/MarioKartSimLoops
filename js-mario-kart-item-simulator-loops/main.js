// Mario Kart Item Simulator
'use strict';

// Global variables
let racerPos;
let numBanana = 0;
let numGreenShell = 0;
let numStar = 0;
let numGoldenMushroom = 0;
let numBulletBill = 0;

// Event Listener
document.getElementById('generate-btn').addEventListener('click', generateItem);
document.getElementById('generate-5-btn').addEventListener('click', generate5Items);
document.getElementById('bullet-bill-btn').addEventListener('click', generateBulletBill);
document.getElementById('custom-simulation').addEventListener('click', customSimulation);

// Event Function

// GENERATING 1 ITEM

function generateItem() {
  // INPUT - prompt user to input racer position
  racerPos = Number(prompt('Indicate the racer position:'));

  // PROCESS - simulate items based on racer position
  if (racerPos >= 1 && racerPos <= 6) { // Outer chained-if without else statement
    // Generate random number
    let randNum = Math.random(); // Random number between 0-0.99...
    console.log(randNum);

    if (randNum <= 0.45) { // Nested chained-if statement; racer position 1-6; banana
      document.getElementById('item').src = 'images/banana.png';
      document.getElementById('results').innerHTML += '<img src = "images/banana.png">';
      numBanana++;
      document.getElementById('banana').innerHTML = numBanana;
    } else if (randNum <= 0.80) { // Green Shell
      document.getElementById('item').src = 'images/greenshell.png';
      document.getElementById('results').innerHTML += '<img src = "images/greenshell.png">';
      numGreenShell++;
      document.getElementById('green-shell').innerHTML = numGreenShell;
    } else if (randNum <= 0.95) { // Star
      document.getElementById('item').src = 'images/star.png';
      document.getElementById('results').innerHTML += '<img src = "images/star.png">';
      numStar++;
      document.getElementById('star').innerHTML = numStar;
    } else if (randNum <= 0.99) { // Golden Mushroom
      document.getElementById('item').src = 'images/goldenmushroom.png';
      document.getElementById('results').innerHTML += '<img src = "images/goldenmushroom.png">';
      numGoldenMushroom++;
      document.getElementById('golden-mushroom').innerHTML = numGoldenMushroom;
    } else { // Bullet Bill
      document.getElementById('item').src = 'images/bulletbill.png';
      document.getElementById('results').innerHTML += '<img src = "images/bulletbill.png">';
      numBulletBill++;
      document.getElementById('bullet-bill').innerHTML = numBulletBill;
    }
  } else if (racerPos >= 7 && racerPos <= 12) { // Outer chained-if without else statement
      // Generate random number 
      let randNum = Math.random(); // Random number between 0-0.99...
      console.log(randNum);

      if (randNum <= 0.05) { // Nested chained-if statement; racer position 7-12; banana
        document.getElementById('item').src = 'images/banana.png';
        document.getElementById('results').innerHTML += '<img src = "images/banana.png">';
        numBanana++;
        document.getElementById('banana').innerHTML = numBanana;
      } else if (randNum <= 0.10) { // Green Shell
        document.getElementById('item').src = 'images/greenshell.png';
        document.getElementById('results').innerHTML += '<img src = "images/greenshell.png">';
        numGreenShell++;
        document.getElementById('green-shell').innerHTML = numGreenShell;
      } else if (randNum <= 0.35) { // Star
        document.getElementById('item').src = 'images/star.png';
        document.getElementById('results').innerHTML += '<img src = "images/star.png">';
        numStar++;
        document.getElementById('star').innerHTML = numStar;
      } else if (randNum <= 0.70) { // Golden Mushroom
        document.getElementById('item').src = 'images/goldenmushroom.png';
        document.getElementById('results').innerHTML += '<img src = "images/goldenmushroom.png">';
        numGoldenMushroom++;
        document.getElementById('golden-mushroom').innerHTML = numGoldenMushroom;
      } else { // Bullet Bill
        document.getElementById('item').src = 'images/bulletbill.png';
        document.getElementById('results').innerHTML += '<img src = "images/bulletbill.png">';
        numBulletBill++;
        document.getElementById('bullet-bill').innerHTML = numBulletBill;
      }
  }
}

// GENERATING 5 ITEMS

function generate5Items() { // Generate 5 items at once based on racer position
  racerPos = Number(prompt('Indicate the racer position:'));
  
  for (let simulate5 = 0; simulate5 < 5; simulate5++) {
    if (racerPos >= 1 && racerPos <= 6) { // Outer chained-if without else statement
      // Generate random number
      let randNum = Math.random(); // Random number between 0-0.99...
      console.log(randNum);
  
      if (randNum <= 0.45) { // Nested chained-if statement; racer position 1-6; banana
        document.getElementById('item').src = 'images/banana.png';
        document.getElementById('results').innerHTML += '<img src = "images/banana.png">';
        numBanana++;
        document.getElementById('banana').innerHTML = numBanana;
      } else if (randNum <= 0.80) { // Green Shell
        document.getElementById('item').src = 'images/greenshell.png';
        document.getElementById('results').innerHTML += '<img src = "images/greenshell.png">';
        numGreenShell++;
        document.getElementById('green-shell').innerHTML = numGreenShell;
      } else if (randNum <= 0.95) { // Star
        document.getElementById('item').src = 'images/star.png';
        document.getElementById('results').innerHTML += '<img src = "images/star.png">';
        numStar++;
        document.getElementById('star').innerHTML = numStar;
      } else if (randNum <= 0.99) { // Golden Mushroom
        document.getElementById('item').src = 'images/goldenmushroom.png';
        document.getElementById('results').innerHTML += '<img src = "images/goldenmushroom.png">';
        numGoldenMushroom++;
        document.getElementById('golden-mushroom').innerHTML = numGoldenMushroom;
      } else { // Bullet Bill
        document.getElementById('item').src = 'images/bulletbill.png';
        document.getElementById('results').innerHTML += '<img src = "images/bulletbill.png">';
        numBulletBill++;
        document.getElementById('bullet-bill').innerHTML = numBulletBill;
      }
    } else if (racerPos >= 7 && racerPos <= 12) { // Outer chained-if without else statement
        // Generate random number 
        let randNum = Math.random(); // Random number between 0-0.99...
        console.log(randNum);
  
        if (randNum <= 0.05) { // Nested chained-if statement; racer position 7-12; banana
          document.getElementById('item').src = 'images/banana.png';
          document.getElementById('results').innerHTML += '<img src = "images/banana.png">';
          numBanana++;
          document.getElementById('banana').innerHTML = numBanana;
        } else if (randNum <= 0.10) { // Green Shell
          document.getElementById('item').src = 'images/greenshell.png';
          document.getElementById('results').innerHTML += '<img src = "images/greenshell.png">';
          numGreenShell++;
          document.getElementById('green-shell').innerHTML = numGreenShell;
        } else if (randNum <= 0.35) { // Star
          document.getElementById('item').src = 'images/star.png';
          document.getElementById('results').innerHTML += '<img src = "images/star.png">';
          numStar++;
          document.getElementById('star').innerHTML = numStar;
        } else if (randNum <= 0.70) { // Golden Mushroom
          document.getElementById('item').src = 'images/goldenmushroom.png';
          document.getElementById('results').innerHTML += '<img src = "images/goldenmushroom.png">';
          numGoldenMushroom++;
          document.getElementById('golden-mushroom').innerHTML = numGoldenMushroom;
        } else { // Bullet Bill
          document.getElementById('item').src = 'images/bulletbill.png';
          document.getElementById('results').innerHTML += '<img src = "images/bulletbill.png">';
          numBulletBill++;
          document.getElementById('bullet-bill').innerHTML = numBulletBill;
        }
    }
  }
}

// GENERATING 10 BULLET BILLS

function generateBulletBill() {
  racerPos = Number(prompt('Indicate the racer position:'));


  while (numBulletBill < 10) {
    if (racerPos >= 1 && racerPos <= 6) { // Outer chained-if without else statement
      // Generate random number
      let randNum = Math.random(); // Random number between 0-0.99...
      console.log(randNum);
  
      if (randNum <= 0.45) { // Nested chained-if statement; racer position 1-6; banana
        document.getElementById('item').src = 'images/banana.png';
        document.getElementById('results').innerHTML += '<img src = "images/banana.png">';
        numBanana++;
        document.getElementById('banana').innerHTML = numBanana;
      } else if (randNum <= 0.80) { // Green Shell
        document.getElementById('item').src = 'images/greenshell.png';
        document.getElementById('results').innerHTML += '<img src = "images/greenshell.png">';
        numGreenShell++;
        document.getElementById('green-shell').innerHTML = numGreenShell;
      } else if (randNum <= 0.95) { // Star
        document.getElementById('item').src = 'images/star.png';
        document.getElementById('results').innerHTML += '<img src = "images/star.png">';
        numStar++;
        document.getElementById('star').innerHTML = numStar;
      } else if (randNum <= 0.99) { // Golden Mushroom
        document.getElementById('item').src = 'images/goldenmushroom.png';
        document.getElementById('results').innerHTML += '<img src = "images/goldenmushroom.png">';
        numGoldenMushroom++;
        document.getElementById('golden-mushroom').innerHTML = numGoldenMushroom;
      } else { // Bullet Bill
        document.getElementById('item').src = 'images/bulletbill.png';
        document.getElementById('results').innerHTML += '<img src = "images/bulletbill.png">';
        numBulletBill++;
        document.getElementById('bullet-bill').innerHTML = numBulletBill;
      }
    } else if (racerPos >= 7 && racerPos <= 12) { // Outer chained-if without else statement
        // Generate random number 
        let randNum = Math.random(); // Random number between 0-0.99...
        console.log(randNum);
  
        if (randNum <= 0.05) { // Nested chained-if statement; racer position 7-12; banana
          document.getElementById('item').src = 'images/banana.png';
          document.getElementById('results').innerHTML += '<img src = "images/banana.png">';
          numBanana++;
          document.getElementById('banana').innerHTML = numBanana;
        } else if (randNum <= 0.10) { // Green Shell
          document.getElementById('item').src = 'images/greenshell.png';
          document.getElementById('results').innerHTML += '<img src = "images/greenshell.png">';
          numGreenShell++;
          document.getElementById('green-shell').innerHTML = numGreenShell;
        } else if (randNum <= 0.35) { // Star
          document.getElementById('item').src = 'images/star.png';
          document.getElementById('results').innerHTML += '<img src = "images/star.png">';
          numStar++;
          document.getElementById('star').innerHTML = numStar;
        } else if (randNum <= 0.70) { // Golden Mushroom
          document.getElementById('item').src = 'images/goldenmushroom.png';
          document.getElementById('results').innerHTML += '<img src = "images/goldenmushroom.png">';
          numGoldenMushroom++;
          document.getElementById('golden-mushroom').innerHTML = numGoldenMushroom;
        } else { // Bullet Bill
          document.getElementById('item').src = 'images/bulletbill.png';
          document.getElementById('results').innerHTML += '<img src = "images/bulletbill.png">';
          numBulletBill++;
          document.getElementById('bullet-bill').innerHTML = numBulletBill;
        }
    }
  }
  numBulletBill = 0;
}

// CUSTOM SIMULATION

function customSimulation() {
  racerPos = Number(prompt('Indicate the racer position:'));
  let nTImes = Number(prompt('How many times would you like the simulation to run?'));

  for (let n = 0; n < nTImes; n++) {
    if (racerPos >= 1 && racerPos <= 6) {
      // Generate random number
      let randNum = Math.random(); // Random number between 0-0.99...
      console.log(randNum);

      if (randNum <= 0.45) { // Nested chained-if statement; racer position 1-6; banana
        document.getElementById('item').src = 'images/banana.png';
        document.getElementById('results').innerHTML += '<img src = "images/banana.png">';
        numBanana++;
        document.getElementById('banana').innerHTML = numBanana;
      } else if (randNum <= 0.80) { // Green Shell
        document.getElementById('item').src = 'images/greenshell.png';
        document.getElementById('results').innerHTML += '<img src = "images/greenshell.png">';
        numGreenShell++;
        document.getElementById('green-shell').innerHTML = numGreenShell;
      } else if (randNum <= 0.95) { // Star
        document.getElementById('item').src = 'images/star.png';
        document.getElementById('results').innerHTML += '<img src = "images/star.png">';
        numStar++;
        document.getElementById('star').innerHTML = numStar;
      } else if (randNum <= 0.99) { // Golden Mushroom
        document.getElementById('item').src = 'images/goldenmushroom.png';
        document.getElementById('results').innerHTML += '<img src = "images/goldenmushroom.png">';
        numGoldenMushroom++;
        document.getElementById('golden-mushroom').innerHTML = numGoldenMushroom;
      } else { // Bullet Bill
        document.getElementById('item').src = 'images/bulletbill.png';
        document.getElementById('results').innerHTML += '<img src = "images/bulletbill.png">';
        numBulletBill++;
        document.getElementById('bullet-bill').innerHTML = numBulletBill;
      }
    } else if (racerPos >= 7 && racerPos <= 12) { // Outer chained-if without else statement
        // Generate random number 
        let randNum = Math.random(); // Random number between 0-0.99...
        console.log(randNum);
  
        if (randNum <= 0.05) { // Nested chained-if statement; racer position 7-12; banana
          document.getElementById('item').src = 'images/banana.png';
          document.getElementById('results').innerHTML += '<img src = "images/banana.png">';
          numBanana++;
          document.getElementById('banana').innerHTML = numBanana;
        } else if (randNum <= 0.10) { // Green Shell
          document.getElementById('item').src = 'images/greenshell.png';
          document.getElementById('results').innerHTML += '<img src = "images/greenshell.png">';
          numGreenShell++;
          document.getElementById('green-shell').innerHTML = numGreenShell;
        } else if (randNum <= 0.35) { // Star
          document.getElementById('item').src = 'images/star.png';
          document.getElementById('results').innerHTML += '<img src = "images/star.png">';
          numStar++;
          document.getElementById('star').innerHTML = numStar;
        } else if (randNum <= 0.70) { // Golden Mushroom
          document.getElementById('item').src = 'images/goldenmushroom.png';
          document.getElementById('results').innerHTML += '<img src = "images/goldenmushroom.png">';
          numGoldenMushroom++;
          document.getElementById('golden-mushroom').innerHTML = numGoldenMushroom;
        } else { // Bullet Bill
          document.getElementById('item').src = 'images/bulletbill.png';
          document.getElementById('results').innerHTML += '<img src = "images/bulletbill.png">';
          numBulletBill++;
          document.getElementById('bullet-bill').innerHTML = numBulletBill;
        }
    }
  }
}