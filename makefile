all:
	echo "bob"
doc: 
	mocha --reporter $(CURDIR)/lib/TuttedMarkdown.js --grep tuttedStdTree > docs/tuttedStdTree.md
	mocha --reporter $(CURDIR)/lib/TuttedMarkdown.js --grep tuttedStdParser > docs/tuttedStdParser.md
	mocha --reporter $(CURDIR)/lib/TuttedMarkdown.js --grep "tuttedStd " > docs/tuttedStd.md
