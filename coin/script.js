// Game state
let coins = 0;
let coinsPerClick = 5;
let passiveIncome = 0;
let upgrades = [
  { name: 'Click Accelerator', cost: 40000, effect: () => { passiveIncome *= 10; }, bought: false },
  { name: 'Coin Multiplier', cost: 40000, effect: () => { coinsPerClick *= 10; }, bought: false },
  { name: 'Power Tap', cost: 10000, effect: () => { coinsPerClick *= 2; }, bought: false },
  { name: 'Golden Touch', cost: 40000, effect: () => { coins += Math.floor(Math.random() * 10000); }, bought: false },
  { name: 'Coin Stream', cost: 40000, effect: () => { passiveIncome *= 10; }, bought: false },
  { name: 'Mining Drone', cost: 100000, effect: () => {}, bought: false },
];

function updateUI() {
  document.getElementById('profile-coins').querySelector('span').textContent = coins;
  document.getElementById('stat-total').textContent = coins;
  document.getElementById('stat-cpc').textContent = coinsPerClick;
  document.getElementById('stat-passive').textContent = passiveIncome;
  upgrades.forEach((upg, i) => {
    const el = document.getElementById('upgrade-' + i);
    if (upg.bought) {
      el.classList.add('disabled');
      el.querySelector('button').disabled = true;
    } else {
      el.classList.remove('disabled');
      el.querySelector('button').disabled = coins < upg.cost;
    }
  });
}

window.clickCoin = function() {
  coins += coinsPerClick;
  updateUI();
}

window.buyUpgrade = function(idx) {
  const upg = upgrades[idx];
  if (coins >= upg.cost && !upg.bought) {
    coins -= upg.cost;
    upg.bought = true;
    upg.effect();
    updateUI();
  }
}

setInterval(() => {
  coins += passiveIncome;
  updateUI();
}, 1000);

updateUI(); 