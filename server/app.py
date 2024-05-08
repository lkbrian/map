from flask import Flask
from flask_sqlalchemy import SQLAlchemy

# Initialize SQLAlchemy without passing the app instance
db = SQLAlchemy()

def create_app():
    # Create Flask application instance
    app = Flask(__name__)

    # Configure SQLAlchemy to use SQLite database
    # Using a relative path for the database file
    app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///map.db'
    # Optional: Disable SQLAlchemy event system
    app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

    # Initialize SQLAlchemy with Flask application
    db.init_app(app)

    # Import your models here to avoid circular imports
    from models import User, Cohort, CohortMember, Post, Notification, Fundraiser, Advert, AdminNotification, ChatMessage

    # Define routes and views (if any)
    # You can define your Flask routes and views below this line

    return app

if __name__ == '__main__':
    app = create_app()
    app.run(debug=True)
