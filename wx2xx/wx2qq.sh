#!/bin/bash

if [[ $#!=2 ]]; then
	echo "Usage: $0 wxdir qqdir"
	exit 1
fi

find ../miniprogram -name "*.wxml" | xargs sed -i "" "s/.wxml/.qml/g"
find ../miniprogram -name "*.wxss" | xargs sed -i "" "s/.wxss/.qss/g"

find ../miniprogram -name "*.wxml" | xargs sed -i "" "s/wx:/qq:/g"
find ../miniprogram -name "*.ts" | xargs sed -i "" "s/wx:/qq:/g"
find ../miniprogram -name "*.js" | xargs sed -i "" "s/wx:/qq:/g"

find ../miniprogram -name "*.wxml" | awk '{a=$0; sub(/wxml$/, "qml", $0); print "mv", a, $0;}' | bash
find ../miniprogram -name "*.wxss" | awk '{a=$0; sub(/wxss$/, "qss", $0); print "mv", a, $0;}' | bash

