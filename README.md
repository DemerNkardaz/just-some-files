# just-some-files
CSS/JS Files separated from my projects

# CSS Help Classes
Based on Bootstrap classes and added extra.

margins: from 0 to 10 + auto : m- | mb- | mt- | mx- | my- | ms- | me-
margins inline/block: from 0 to 10 + auto : logm- | logmb- | logmt- | logmx- | logmy- | logms- | logme-
paddings: from 0 to 10 + auto : p- | pb- | pt- | px- | py- | ps- | pe-
paddings inline/block: from 0 to 10 + auto : logp- | logpb- | logpt- | logpx- | logpy- | logps- | logpe-

left/right/bottom/top: from 0 to 200 px/% : | left_ (left_5px or left_5 ex) | right_ | top_ | bottom_ | topleft/right_ | bottomleft/right_

widht/height: from 0 to 100% : h- | w-

gap/row/column: from 0 to 10 : gap- | row-gap- | column-gap-

underline-offset- from 1 to 10

some other…

# jQuery Drag
Just generated with AI standalone draggable function for using with jQuery.

$('selector').isdrag({ container: 'selector' /* if you want to limit draggable area to the some element */ });
Dragging is will not be triggered when resize by ccs resize both, horizonal, vertical rules.
And it will not be triggered with mousedown on text from ["SPAN", "LABEL", "BUTTON", "P", "UL", "OL", "LI", "H1", "H2", "H3", "H4", "H5", "H6", "PRE", "BLOCKQUOTE"] and just on ["INPUT", "TEXTAREA"] elements.
For forces the drag trigger and with this elements text you can add .forceDrag class to this of its' parent.
