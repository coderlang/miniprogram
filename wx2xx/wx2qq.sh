#!/bin/bash

if [ $# != 1 ]; then
	echo "Usage: $0 dir"
	exit 1
fi

sourcedir=$1
targetdir=$1-qq

rm -rf ${targetdir}
cp -rf ${sourcedir} ${targetdir}

find ${targetdir} -name "*.wxml" | awk '{a=$0; sub(/wxml$/, "qml", $0); print "mv", a, $0;}' | bash
find ${targetdir} -name "*.wxss" | awk '{a=$0; sub(/wxss$/, "qss", $0); print "mv", a, $0;}' | bash
find ${targetdir} -name "*.wxs" | awk '{a=$0; sub(/wxs/, "qs", $0); print "mv", a, $0;}' | bash

find ${targetdir} -name "*.wxml" | xargs sed -i "" "s/.wxml/.qml/g"
find ${targetdir} -name "*.wxss" | xargs sed -i "" "s/.wxss/.qss/g"

find ${targetdir} -name "*.wxml" | xargs sed -i "" "s/wx:/qq:/g"
find ${targetdir} -name "*.ts" | xargs sed -i "" "s/wx:/qq:/g"
find ${targetdir} -name "*.js" | xargs sed -i "" "s/wx:/qq:/g"

find ${targetdir} -name "*.wxml" | xargs sed -i "" "s/<wxs/<qs/g"
find ${targetdir} -name "*.wxml" | xargs sed -i "" "s/</wxs>/</qs>/g"
