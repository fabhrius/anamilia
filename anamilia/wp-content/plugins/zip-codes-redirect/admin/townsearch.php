<meta name="robots" content="noindex">
<?php 
$xmlDoc=new DOMDocument();
$xmlDoc->load("../town/towns.xml");
//print $xmlDoc->saveXML();
$x=$xmlDoc->getElementsByTagName('link');

//get the q parameter from URL
$q=$_GET["q"];

//lookup all links from the xml file if length of q>0
if (strlen($q)>0) {
  $hint="";
  
  for($i=0; $i<($x->length); $i++) {
    $y=$x->item($i)->getElementsByTagName('title');// get first town
	
    $z=$x->item($i)->getElementsByTagName('url');  // get town url
    if ($y->item(0)->nodeType==1) { //if y is an element
      //find a link matching the search text
      if (stripos($y->item(0)->childNodes->item(0)->nodeValue,$q) === 0) { //find var q in town name and if a match do this
        if ($hint=="") { // if hint is blank build the first link
          $hint="<a href='" .
          $z->item(0)->childNodes->item(0)->nodeValue .
          "' target='_blank'>" .
          $y->item(0)->childNodes->item(0)->nodeValue . "</a>";
        } else { // add the next link to hint
          $hint=$hint . "<br /><a href='" .
          $z->item(0)->childNodes->item(0)->nodeValue .
          "' target='_blank'>" .
          $y->item(0)->childNodes->item(0)->nodeValue . "</a>";
        }
      }
    }
  }
}

// Set output to "no suggestion" if no hint was found
// or to the correct values
if ($hint=="") {
  $response="We Are Very Sorry, But We Cannot Help You On This Occasion.";
} else {
  $response=$hint;
}

//output the response
echo $response;
?>