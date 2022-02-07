# Group 1 Capstone

## Setup & Installtion

clone this repository to a local repository 
```bash
cd whatever/folder
git clone https://github.com/amgosek/capstone
```

Create Python virtual environment:
```bash
macOS
virtualenv -p python3 path/to/virenv_name
```
I put mine inside of the folder that holds this github repository so there was no path in my case the command looked like this:
```bash
macOS
virtualenv -p python3 server
```
enable virtual environment:
```bash
macOS
source <desired-path>/bin/activate
```
in my case:
```bash
source server/bin/activate
```

install requirements: (you can include path before requirements.txt (path/to/requirements.txt) if you need to)
```bash
pip3 install -r requirements.txt
```

## note

anything over python 3.6 and under 3.10 should work (I think im using 3.8.5). Make sure you have it set as project interrupter! If you run these commands inside of vscode terminal after cloning from this repository a message should pop up asking if youd like to use the virtual environment created.

## Running The App (Might have to run twice to work after initial setup)

```bash
python main.py
```

## Viewing The App

Go to `http://127.0.0.1:5000`

## Data Structure

folder holding github project
|- virtual environment 
  | - python interpreter stuff
|- main.py 
|- requirements.txt
|- README.md
|- website folder
   |
   | - __init__.py (Makes website/flask folder is a package. This file is what main.py uses to create our flask app. Very important folder)
   | - __pycache__ folder  
      |- nothing that needs to be touched
   | - auth.py (views having to do with security)
   | - database.db (database where user information is stored for now, its sqlite created in __init__.py) 
   | - models.py (using sqlalchemy to create tables in database by simply writting python classes)
   | - static folder (can eventually hold js files to deal with cookies along with anything static like an img folder)
      | - index.js (empty js file)
   | - templates folder
      | - base.html (has all headers, footers, and everything else every html file will have in common)
      | - all other html files (uses special sections made by jinja in base.html to add content to whatever page)
   | - views.py (just like auth.py but not security related we can create as many blueprint py files we want)
