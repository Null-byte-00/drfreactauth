# drfreactauth
Django rest framework + React authentication system<br>

# demo
![demo](https://github.com/Null-byte-00/images/blob/master/editeddrfreact.gif?raw=true)

# Setup
## requirements:
<ul>
  <li>python3</li>
  <li>node and npm (if you want to develope frontend)</li>
</ul>

### clone repository<br>
```bash
git clone https://github.com/Null-byte-00/drfreactauth/
```
### enter directory
```bash
cd drfreactauth/
```
### create a virtual inviroment <br>
```bash
virtualenv venv
```
### activate your virtual enviroment
bash:<br>
```bash
source venv/bin/activate
```
powershell:<br>
 ```
 .\venv\Script\activate.ps1
 ```
 cmd:<br>
 ```cmd
 venv\Script\activate.bat
 ```
 ### install required libraries
 ```bash
 pip install -r requirements.txt
 ```
 ### apply migrations
 ```bash
 python manage.py migrate
 ```
 ### run 
 ```bash
 python manage.py runserver
 ```
 
 # to develope
 ### make sure you have node and npm installed
 ### install required packages
 ```bash
 npm install
 ```
 ### compile 
 
 just run: <br>
 ```
 npm run dev
 ```
 and any changes will be applied automaticly
