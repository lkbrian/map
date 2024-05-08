from app import create_app, db

# Create the Flask app
app = create_app()

# Initialize the database
with app.app_context():
    db.create_all()

print("Database tables created successfully.")
