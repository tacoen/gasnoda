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
