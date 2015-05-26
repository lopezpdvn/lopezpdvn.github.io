
# Script that runs a jekyll in a docker container
SERVELOCALCMD	=	./bin/servelocal	

SITEDIR      = _site

.PHONY: help clean servelocal

help:
	@echo "Please use \`make <target>' where <target> is one of"
	@echo "  servelocal    Serve with the grahamc/jekyll image"

clean:
	-rm -rf $(SITEDIR)/*

servelocal:
	$(SERVELOCALCMD)
