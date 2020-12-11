date +"/* Compile Time: %D %T */" > module.js

cat 'w3color/w3color.js' >> module.js
	
for f in gasnoda/*
do
	echo "" >> module.js
	echo "" >> module.js
	echo "/* $f */" >> module.js
	echo "" >> module.js
	cat $f >> module.js
done;


date +"/* Compile Time: %D %T */" > ncc-module.js

for f in neoca/*
do
	echo "" >> ncc-module.js
	echo "" >> ncc-module.js
	echo "/* $f */" >> ncc-module.js
	echo "" >> ncc-module.js
	cat $f >> ncc-module.js
done;

cat 'w3color/w3color.js' >> ncc-module.js