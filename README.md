# Django Boilerplate

Includes:
- Custom user model
- User registration
- Linting (flake8 / mypy)

## How to set up

1. Create a virtual environment

```
python3 -m venv venv
```

2. Rename `djangoproject/.env.sample`, `djangoproject/.env`. Change the secret key to a value of your choice.

3. Install requirements
```
pip install -r requirements.txt
```

4. Run migrations
```
python manage.py migrate
```

5. Create a superuser
```
python manage.py createsuperuser
```

6. Enable linting (VScode only)

Create a directory called `.vscode`

In `.vscode`, create a file called `settings.json`

Copy the contents of `settings.json.sample` into `settings.json`.

This will enable Flake8, Mypy and Black. It will also enable autoformatting of Python files on-save as per the Black specification.
