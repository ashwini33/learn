firstName=$1
lastName=$2
show=$3
if [ "$show" = "true" ]; then
	echo "Hello $firstName $lastName"
else
	echo "Mark the show option to show the option"
fi

