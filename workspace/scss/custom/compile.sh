#!/bin/sh

function mergebase() {
	IN=$1;
	FD=`echo $IN | sed -e 's/\/$//'`
	echo "/* -------------------------------------------------------------" > _$FD.scss
	echo " * " >> _$FD.scss
	date +" * neocatema/$FD - %D %T" >> _$FD.scss
	echo " * " >> _$FD.scss
	echo " */ " >> _$FD.scss
	echo " " >> _$FD.scss

	echo -n "dir: $FD";

	FILES=$IN*
	for f in $FILES
	do 
		F=`echo $f | sed -e 's/\.scss$//' | sed -e 's/\/_/\//'`
		echo "@import '$F';" >> _$FD.scss

	done
	
	echo " -> _$FD.scss"
	
}

DIR=*/
for d in $DIR 
	do
		mergebase $d
	done