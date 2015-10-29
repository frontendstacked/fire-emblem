# PREREQUISITE: Node.js, BASH shell
#
# Node dependencies are installed into cwd local node_modules
#

BOWER = $(CURDIR)/node_modules/.bin/bower
GRUNT = $(CURDIR)/node_modules/.bin/grunt

install: node_modules bower_components build

clean:
	rm -rf ./node_modules/ ./bower_components/ ./public/stylesheets/* ./public/bower_components

node_modules:
	npm install

bower_components:
	$(BOWER) install
	# link bower_components to public (for now)
	ln -sfv $(CURDIR)/bower_components $(CURDIR)/public

mongo:
	# prep database dir
	mkdir -p ./data/mongodb

build: mongo
	# Hand off build to Gruntfile
	$(GRUNT) build
