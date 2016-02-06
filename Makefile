# Script that runs a jekyll in a docker container
SERVELOCALCMD	=	./bin/servelocal	

SITEDIR      = _site

.PHONY: help clean servelocal push

help:
	@echo "Please use \`make <target>' where <target> is one of"
	@echo "  servelocal    Serve with the grahamc/jekyll image"
	@echo "  push	       Push master branch to origin"

servelocal:
	@$(SERVELOCALCMD)

push:
	git push origin master month-in-review
