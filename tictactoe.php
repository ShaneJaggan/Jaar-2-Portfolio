<!DOCTYPE html>
<html lang="en">
<head>
  <title>Objects and classes in JavaScript</title>
  <meta charset="utf-8">
  <link rel="STYLESHEET" href="css/tictactoeStyles.css" type="text/css">
</head>
<body>
    <div class="page-title">
        <h1 class="title-text">
            Objects and classes in JavaScript
        </h1>
        <h2>
            ✌️ It takes two to Tic Tac Toe! ✌️
        </h2>
    </div>
    <div class="players-container">
            <div class="game-container">
                <div class="row">
                    <div class="column add-players">
                        <div class="row">
                            Create a new player:
                            <br>
                            <input name="player-name" type="text" class="input-field input-field-player-name" placeholder="name">
                        </div>
                        <button type="button" class="button add-player-button">Add player</button>
                        <div class="row">
                            <p>
                            <button type="button" class="button reset-game-button">Reset game</button>
                            </p>
                        </div>
                    </div>
                <row>
                    <div class="column">
                        <div class="player-info-container">
                            <div class="player-one-label">
                                Player One
                            </div>
                            <div>
                                <button type="button" class="add-points-button add-points-player1-button">⬆️</button>
                            </div>
                        </div>
                    </div>
                    <div class="column">
                        <div class="player-info-container">
                            <div class="player-two-label">
                                Player Two
                            </div>
                            <div>
                                <button type="button" class="add-points-button add-points-player2-button">⬆️</button>
                            </div>
                        </div>
                    </div>
                    <row>
                        <div class="tic-tac-toe-board">
                            <div class="box"></div>
                            <div class="box"></div>
                            <div class="box"></div>
                            <div class="box"></div>
                            <div class="box"></div>
                            <div class="box"></div>
                            <div class="box"></div>
                            <div class="box"></div>
                            <div class="box"></div>
                          </div>
                    </row>
                </row>          
            </div>
        </div>
    </div>
    <script src="js/tictactoe.js"></script>
</body>
</html>