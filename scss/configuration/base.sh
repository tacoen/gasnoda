
FD='default'
date +"// base.sh: $FD - %D %T" > _$FD.scss
ls -1 $FD/* \
	| sed -e "s/\.scss$/';/" \
	| sed -e "s/^$FD\/_/@import '$FD\//" \
	>> _$FD.scss

