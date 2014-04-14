all:
	echo "bob"
doc: 
	mocha --reporter $(CURDIR)/lib/TuttedMarkdown.js --grep tuttedStdTree > docs/api.md
	mocha --reporter $(CURDIR)/lib/TuttedMarkdown.js --grep tuttedStdParser > docs/TutteeStdParser.md
