printf "Install following dependencies before continuing: \n• Python 2.7.15 \n• Pip \n• NodeJS \n• Bower\n\n"
echo "Continue?: (n/y)"
read response
if [ -z "$response" ] && [ "$response" != "yes" ] || [ "$response" != "y" ]
then
    exit 0
fi
echo `pip install -r app/requirements.txt -t app/lib`
echo `bower install`
echo `npm install`
echo `npm run build`
echo `python app/main.py`