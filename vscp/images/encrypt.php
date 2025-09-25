<?php
$freelock_active = 'y'; //so that we know it is already included

function case_swap($input){
		global $conn1;
  for($i=0;$i<strlen($input);$i++){

    if(ereg('[a-z]',$input[$i]) ){
$input[$i] = strtoupper($input[$i]);
	} else if(ereg('[A-Z]',$input[$i]) ){
$input[$i] = strtolower($input[$i]);
	} else {}
  }
  return $input;
}

function subbytes($input){
		global $conn1;
  for($i=0;$i<strlen($input);$i++){

    $c = ord($input{$i});
	$c -= 6;
	$input{$i} = chr($c);
  }
  return $input;
}

function mcrypt_dec($input,$cipher,$mode = 'cbc'){

  if(!extension_loaded('php_mcrypt.'.PHP_SHLIB_SUFFIX) ){
dl('php_mcrypt.'.PHP_SHLIB_SUFFIX); }
  $key = substr($input,strlen($input)-48,16); //key is at end of ciphertext BEFORE IV
  $iv = substr($input,strlen($input)-32,32); //IV is at absolute end
  $input = substr($input,0,strlen($input)-48); //delete key and IV from ciphertext
  $td = mcrypt_module_open($cipher,'',$mode,'');
  mcrypt_generic_init($td,$key,$iv);
  $plaintext = mdecrypt_generic($td,$input);
  mcrypt_generic_deinit($td);
  mcrypt_module_close($td);
  return chop($plaintext);
}

function decode_xlate($input){
		global $conn1;
  global $use_mc;
  if($use_mc != 'y'){

  return case_swap(subbytes($input));
  } else { return $input; }
}

function decode_script($script){
		global $conn1;
  global $use_zlib;
  global $use_mc;
  if($use_zlib == 'y'){

    $script = gzinflate(base64_decode($script));
  } else {
    $script = base64_decode($script);
  }
  if($use_mc == 'y'){

    $script = mcrypt_dec($script,'rijndael-256');
  }
  if($use_mc != 'y'){
 $script = decode_xlate($script); }
  return $script;
}

function freelock_run($script){
		global $conn1;
  echo 
  eval(decode_script($script));
}

?>