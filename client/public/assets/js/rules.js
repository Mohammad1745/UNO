let ruleContent = `
  <div class="center-btn">
  <button class="rules-hide-button" id="hide_rule_btn">X</button>
  </div>
  <button type="button" class="collapsible">Steps to initiate a game</button>
  <div class="rule-content">
    <ul>
      <li>To create a game enter your nickname and click "Create Game".To create a game enter your nickname and click "Create Game".</li>
      <li>Share the game id with your friends.</li>
      <li>To join a game enter your nickname and the game id your friend provided and click "Join Game".</li>
      <li>After all your friends have joined, click "Start Game".</li>
      <li>Yeah! It's that simple.</li>
    </ul>
  </div>

  <button type="button" class="collapsible">Get to know the cards</button>
  <div class="rule-content">
    <p>The deck consists of 108 cards: four each of "Wild" and "Wild Draw Four",
      and 25 each of four colors (red, yellow, green, blue). Each color consists
      of one zero, two each of 1 through 9, and two each of "Skip", "Draw Two",
      and "Reverse". These last three types are known as "action cards".</p>
    <b>Wild & Wild Draw Four Cards:</b>
    <div class="rules-cards-section">
      <img src="./public/assets/images/cards/cC.png" alt="">
      <img src="./public/assets/images/cards/fC.png" alt="">
    </div>
    <br>
    <b>Red Number Cards:</b>
    <div class="rules-cards-section">
      <img src="./public/assets/images/cards/0R.png" alt="">
      <img src="./public/assets/images/cards/1R.png" alt="">
      <img src="./public/assets/images/cards/2R.png" alt="">
      <img src="./public/assets/images/cards/3R.png" alt="">
      <img src="./public/assets/images/cards/4R.png" alt="">
      <img src="./public/assets/images/cards/5R.png" alt="">
      <img src="./public/assets/images/cards/6R.png" alt="">
      <img src="./public/assets/images/cards/7R.png" alt="">
      <img src="./public/assets/images/cards/8R.png" alt="">
      <img src="./public/assets/images/cards/9R.png" alt="">
    </div>
    <br>
    <b>Yellow Number Cards:</b>
    <div class="rules-cards-section">
      <img src="./public/assets/images/cards/0Y.png" alt="">
      <img src="./public/assets/images/cards/1Y.png" alt="">
      <img src="./public/assets/images/cards/2Y.png" alt="">
      <img src="./public/assets/images/cards/3Y.png" alt="">
      <img src="./public/assets/images/cards/4Y.png" alt="">
      <img src="./public/assets/images/cards/5Y.png" alt="">
      <img src="./public/assets/images/cards/6Y.png" alt="">
      <img src="./public/assets/images/cards/7Y.png" alt="">
      <img src="./public/assets/images/cards/8Y.png" alt="">
      <img src="./public/assets/images/cards/9Y.png" alt="">
    </div>
    <br>
    <b>Green Number Cards:</b>
    <div class="rules-cards-section">
      <img src="./public/assets/images/cards/0G.png" alt="">
      <img src="./public/assets/images/cards/1G.png" alt="">
      <img src="./public/assets/images/cards/2G.png" alt="">
      <img src="./public/assets/images/cards/3G.png" alt="">
      <img src="./public/assets/images/cards/4G.png" alt="">
      <img src="./public/assets/images/cards/5G.png" alt="">
      <img src="./public/assets/images/cards/6G.png" alt="">
      <img src="./public/assets/images/cards/7G.png" alt="">
      <img src="./public/assets/images/cards/8G.png" alt="">
      <img src="./public/assets/images/cards/9G.png" alt="">
    </div>
    <br>
    <b>Blue Number Cards:</b>
    <div class="rules-cards-section">
      <img src="./public/assets/images/cards/0B.png" alt="">
      <img src="./public/assets/images/cards/1B.png" alt="">
      <img src="./public/assets/images/cards/2B.png" alt="">
      <img src="./public/assets/images/cards/3B.png" alt="">
      <img src="./public/assets/images/cards/4B.png" alt="">
      <img src="./public/assets/images/cards/5B.png" alt="">
      <img src="./public/assets/images/cards/6B.png" alt="">
      <img src="./public/assets/images/cards/7B.png" alt="">
      <img src="./public/assets/images/cards/8B.png" alt="">
      <img src="./public/assets/images/cards/9B.png" alt="">
    </div>
    <br>
    <b>Skip Cards:</b>
    <div class="rules-cards-section">
      <img src="./public/assets/images/cards/sR.png" alt="">
      <img src="./public/assets/images/cards/sY.png" alt="">
      <img src="./public/assets/images/cards/sG.png" alt="">
      <img src="./public/assets/images/cards/sB.png" alt="">
    </div>
    <br>
    <b>Reverse Cards:</b>
    <div class="rules-cards-section">
      <img src="./public/assets/images/cards/rR.png" alt="">
      <img src="./public/assets/images/cards/rY.png" alt="">
      <img src="./public/assets/images/cards/rG.png" alt="">
      <img src="./public/assets/images/cards/rB.png" alt="">
    </div>
    <br>
    <b>Draw Two Cards:</b>
    <div class="rules-cards-section">
      <img src="./public/assets/images/cards/dR.png" alt="">
      <img src="./public/assets/images/cards/dY.png" alt="">
      <img src="./public/assets/images/cards/dG.png" alt="">
      <img src="./public/assets/images/cards/dB.png" alt="">
    </div>
  </div>

  <button type="button" class="collapsible">Learn playing rules</button>
  <div class="rule-content">
    <p>To start a hand, 10 cards are dealt to each player, and the top card
      of the remaining deck is flipped over and set aside to begin the discard
      pile. Cards are played by laying them face-up on top of the discard pile.
      Play proceeds clockwise around the table.
      <br>
      On a player's turn, they must do one of the following:</p>
      <ul>
        <li>play one card matching the discard in color, number, or symbol</li>
        <li>play a Wild card, or a Wild Draw Four card</li>
        <li>draw the top card from the deck, then play it if possible</li>
      </ul>
      <p>Action or Wild cards have the following effects:</p>
      <table>
        <tr>
          <th>Card</th>
          <th>Effect when played from hand</th>
        </tr>
        <tr>
          <td>Skip</td>
          <td>Next player in sequence misses a turn</td>
        </tr>
        <tr>
          <td>Reverse</td>
          <td>Order of play switches directions (clockwise to counterclockwise, or vice versa)</td>
        </tr>
        <tr>
          <td>Draw Two (+2)</td>
          <td>Next player in sequence draws two cards if he has no Draw Two cards or Wild cards</td>
        </tr>
        <tr>
          <td>Wild</td>
          <td>Player declares the next color to be matched (may be used on any turn even if the player has matching color; current color may be chosen as the next to be matched)</td>
        </tr>
        <tr>
          <td>Wild Draw Four/Draw Four Wild (+4 and wild)</td>
          <td>Player declares the next color to be matched; next player in sequence draws two cards if he has no Draw Two cards or Wild cards</td>
        </tr>
      </table>
      <br>

      <ul>
        <li>A player who draws from the deck must play or keep that card and may play no other card
          from their hand on that turn.</li>
        <li>A player may play a Wild card at any time, even if that player has other playable cards.</li>
        <li>A player may play a Wild Draw Four card at any time, even if that player other cards matching
          the current color. The player may have cards of a different color matching the current number
          or symbol or a Wild card and still play the Wild Draw Four card.</li>
        <li>If the entire deck is used during play, the top discard is set aside and the rest of the
            pile is shuffled to create a new deck. Play then proceeds normally.</li>
        <li>A player who plays their next-to-last-card must call "uno" as a warning to the other players.
            Or else that player has to draw 2 cards as a penalty.</li>
        <li>The first player to finish all cars on hand wins.</li>
      </ul>
  </div>`

let ruleButton = document.getElementById('rule_btn')
let ruleContainer = document.getElementById('rule_container')
ruleButton.addEventListener('click', () => {
    ruleContainer.innerHTML = ruleContent
    ruleContainer.classList.remove('hide')
    hideButtonHandler(ruleContainer)


    var coll = document.getElementsByClassName("collapsible");
    var i;

    for (i = 0; i < coll.length; i++) {
        coll[i].addEventListener("click", function() {
            this.classList.toggle("activate");
            var content = this.nextElementSibling;
            if (content.style.display === "block") {
                content.style.display = "none";
            } else {
                content.style.display = "block";
            }
        });
    }
})

function hideButtonHandler(ruleContainer) {
    let hideRuleButton = document.getElementById('hide_rule_btn')
    hideRuleButton.addEventListener('click', () => {
        ruleContainer.classList.add('hide')
    })
}
