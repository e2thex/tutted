all:
	echo "bob"
doc: 
	mocha --reporter $(CURDIR)/lib/TuttedMarkdown.js --grep tuttedStdTree > docs/TuttedStdTree.md
	mocha --reporter $(CURDIR)/lib/TuttedMarkdown.js --grep tuttedStdParser > docs/TuttedStdParser.md
