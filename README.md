# Mobile Order Website

## Setup & Installtion

clone this repository to a local repository 
```bash
cd whatever/folder
git clone <repo-url> in this case, https://github.com/amgosek/capstone
```

Create Python virtual environment
```bash
macOS
virtualenv -p python3 <desired-path> 

I put mine inside of the folder that holds this github repository so there was no path in my case the command looked like this,
virtualenv -p python3 server
```

enable virtual environment:
```bash
macOS
source <desired-path>/bin/activate

in my case,
source server/bin/activate
```

NOTE:
```bash
anything over python 3.6 and under 3.10 should work (I think im using 3.8.5). Make sure you have it set as project interrupter! If you run these commands inside of vscode terminal after cloning from this repository a message should pop up asking if youd like to use the virtual environment created.
```

install requirements
```bash
pip3 install -r requirements.txt
```

## Running The App

```bash
python main.py
(Might have to run twice to work)
```

## Viewing The App

Go to `http://127.0.0.1:5000`
