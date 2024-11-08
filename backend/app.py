from flask import Flask, jsonify, render_template, request
from firebase_admin import credentials, firestore, initialize_app
import uuid
import os
import json
import random

country_dir = os.path.dirname(os.path.abspath(__file__))
country_path = os.path.join(country_dir, 'countries.json')
with open(country_path, 'r') as file:
    countries = json.load(file)

length = len(countries)




# Initialize Flask app
app = Flask(__name__)






# Get the directory of the current Python script
script_dir = os.path.dirname(os.path.abspath(__file__))

# Construct the path to 'serviceAccountKey.json'
service_account_path = os.path.join(script_dir, 'serviceAccountKey.json')

# Initialize Firestore DB
cred = credentials.Certificate(service_account_path)  
initialize_app(cred)
db = firestore.client()
games_collection = db.collection('games')  # Collection name in Firestore

@app.route('/create-game', methods=['POST'])
def create_game():
    # Generate a unique game ID
   # Define the URL-safe 66 alphabet
    urlsafe_66_alphabet = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz_-.~'

    def numberToBase(n, b):
        """Convert a number n to base b."""
        if n == 0:
            return "0"
        digits = []
        while n:
            digits.append(urlsafe_66_alphabet[n % b])
            n //= b
        return ''.join(digits[::-1])

    # Generate a UUID and convert it to an integer
    game_id = str(uuid.uuid4())
    game_id_int = int(game_id.replace('-', ''), 16)  # Convert UUID to an integer

    # Convert the integer to base 66
    short_game_id = numberToBase(game_id_int, 66)
    
    game_data = []

    for i in range(0, 5):
        game_data.append(random.randint(0, length))

    # Save game ID info in Firestore
    game_data = {
        'game_id': short_game_id,
        'status': 'active',
        'game_data': game_data,
        'players': []
    }
    games_collection.document(short_game_id).set(game_data)
    
    # Return the generated game ID as JSON
    return jsonify({'game_id': short_game_id}), 201

@app.route('/creategame', methods=["GET"])
def serve_create_game():
    return render_template('creategame.html')

@app.route('/joingame', methods=['GET'])
def serve_join_game():
    return render_template('joingame.html')

@app.route('/getrounddata', methods=['POST'])
def get_round_data():
    # Parse the JSON request
    data = request.get_json()
    
    # Extract the game ID and round number from the request
    game_id = data.get('gameId')
    round_number = data.get('round') - 1
    print(game_id)
    # Retrieve the game document from Firestore
    try:
        game_doc = games_collection.document(game_id).get()
        if not game_doc.exists:
            return jsonify({'error': 'Game not found'}), 404
        
        # Get the game data from the document
        game_data = game_doc.to_dict().get('game_data', [])
        
        # Ensure round_number is valid
        if round_number < 0 or round_number >= len(game_data):
            return jsonify({'error': 'Invalid round number'}), 400
        
        # Get the country for the specified round
        country = countries[game_data[round_number]]
        
        # Return the response
        return jsonify(country), 200
        
    except Exception as e:
        print(str(e))
        return jsonify({'error': str(e)}), 500



@app.route('/sendplayerdata', methods=['POST'])
def send_player_data():
    # Parse the JSON request
    data = request.get_json()
    
    # Extract game ID, player name, and score from the request
    game_id = data.get('gameId')
    player_name = data.get('playerName')
    score = data.get('score')

    # Validate input data
    if not game_id or not player_name or score is None:
        return jsonify({'error': 'Invalid input data'}), 400

    # Prepare player data for Firestore
    player_data = {
        'player_name': player_name,
        'score': score
    }

    # Save player data to Firestore
    try:
        # Update the game document with player data
        game_ref = games_collection.document(game_id).get()
        existing_players = game_ref.to_dict().get('players', [])
        # Check if a player with the same player_name already exists
        player_name = player_data.get('player_name')
        if any(player.get('player_name') == player_name for player in existing_players):
            return jsonify({'message': 'Player already exists'}), 400
        games_collection.document(game_id).set({
            'players': firestore.ArrayUnion([player_data])  # Append player data to 'players' array
        }, merge=True)  # Use merge=True to keep existing data

        return jsonify({'message': 'Player data saved successfully'}), 200

    except Exception as e:
        return jsonify({'error': str(e)}), 500

@app.route('/get-leaderboard', methods=['POST'])
def get_leaderboard():
    data = request.get_json()
    game_id = data.get('gameId')
    top_10 = []
    try:
        game_doc = games_collection.document(game_id).get()
        if not game_doc.exists:
            return jsonify({'error': 'Game not found'}), 404
        
        # Get the game data from the document
        game_data = game_doc.to_dict().get('game_data', [])
        
        # Get the players array
        players = game_doc.to_dict().get('players', [])
        
        # Sort players by score in descending order and get the top 10
        top_10 = sorted(players, key=lambda x: x['score'], reverse=True)[:10]
        
        # Return the response with top_10
        return jsonify({
            'leaders': top_10
        }), 200
    except Exception as e:
        return jsonify({'error': str(e)}), 500

@app.route('/get-leaderboard', methods=['GET'])
def serve_leaderboard():
    return render_template('leaderboard.html')






if __name__ == '__main__':
    app.run(debug=False)
