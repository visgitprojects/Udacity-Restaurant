Restaurant Reviews App

Run the Application

Run locally

Download .zip file:

In this folder, start up a simple HTTP server to serve up the site files on your local computer. Python has some simple tools to do this, and you don't even need to know Python. For most people, it's already installed on your computer.

In a terminal, check the version of Python you have: python -V. If you have Python 2.x, spin up the server with python -m SimpleHTTPServer 8000 (or some other port, if port 8000 is already in use.) For Python 3.x, you can use python3 -m http.server 8000. If you don't have Python installed, navigate to Python's website to download and install the software.


With your server running, visit the site: http://localhost:8000.

****You'll need to change the dbhelper.js file to point to the above port*****


Or if you have access to Visual Studios you can use the File->Open Website option then select the project folder from the list.
Open the index.html and click the play button to play in the default browser.  Once it opens the page, grab the port number from the localhost instance and replace it in  dbhelper.js file to point to the above port.  Then restart the vs instance. 

Code Dependencies
Project Restaurant Reviews (Stage 1) - Starter Code
