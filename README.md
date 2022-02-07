# Mobile Order Website

## Setup & Installtion

Create Python virtual environment, anything over 3.6 and under 3.10 should work. Make sure you have it set as project interrupter.
```bash
macOS/Linux
You may need to run sudo apt-get install python3-venv first

python3 -m venv venv_name
```
```bash
Windows
You can also use py -3 -m venv .venv
python -m venv venv_name
```

clone this repository to a local repository 
```bash
cd whatever/folder
git clone <repo-url>
```

enable virtual environment 
```bash
On Unix or MacOS, run:
source venv_name/bin/activate
```

```bash
On Windows, run:
venv_name\Scripts\activate.bat
```

install requirements
```bash
pip install -r requirements.txt
```

## Running The App

```bash
python main.py
```

## Viewing The App

Go to `http://127.0.0.1:5000`
