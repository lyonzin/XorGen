/*
 * XorGen.js - Código Original
 * Autor: D4rC.nEt (http://d4rc.net)
 * Data de Criação: 2007-2024
 *
 * Créditos:
 * - Código original desenvolvido por D4rC.nEt para ofuscação de strings usando XOR.
 * - Adaptações e melhorias feitas por Lyon.:
 *   - Criação de uma interface profissional para codificaçãoo.
 *   - Desenvolvimento da página de decodificação (Decoded).
 *   - Ajustes na experiência do usuário e adição de suporte a novos formatos.
 *
 * Este código foi adaptado e melhorado para atender às necessidades de profissionais de defesa em Binarios.
 */

var _____WB$wombat$assign$function_____ = function(name) {return (self._wb_wombat && self._wb_wombat.local_init && self._wb_wombat.local_init(name)) || self[name]; };
if (!self.__WB_pmw) { self.__WB_pmw = function(obj) { this.__WB_source = obj; return this; } }
{
  let window = _____WB$wombat$assign$function_____("window");
  let self = _____WB$wombat$assign$function_____("self");
  let document = _____WB$wombat$assign$function_____("document");
  let location = _____WB$wombat$assign$function_____("location");
  //let top = _____WB$wombat$assign$function_____("top");
  let parent = _____WB$wombat$assign$function_____("parent");
  let frames = _____WB$wombat$assign$function_____("frames");
  let opener = _____WB$wombat$assign$function_____("opener");

var symbols = " !\"#$%&'()*+'-./0123456789:;<=>?@";
function toAscii (xx)  
{
	var loAZ = "abcdefghijklmnopqrstuvwxyz";
	symbols+= loAZ.toUpperCase();
	symbols+= "[\\]^_`";
	symbols+= loAZ;
	symbols+= "{|}~";
	var loc;
	loc = symbols.indexOf(xx);
	if (loc >-1) 
	{ 
		Ascii_Decimal = 32 + loc;
		return (32 + loc);
	}
	return(0);  // If not in range 32-126 return ZERO
}

function Dec2Hex(Decimal) 
{
	var hexChars = "0123456789ABCDEF";
	var a = Decimal % 16;
	var b = (Decimal - a)/16;
	hex = "" + hexChars.charAt(b) + hexChars.charAt(a);
	L = hexChars.charAt(a);
	H = hexChars.charAt(b);
	return hex;
}

function randByte() { return Math.floor(Math.random()*256%256); }


function blub(form) 
{
	s1 = form.inp.value;
	xvaluestart = randByte();
	xrefkill =  "0x" + Dec2Hex(randByte()) + Dec2Hex(randByte()) + Dec2Hex(randByte()) + Dec2Hex(randByte());

	finallen = s1.length+1;

	hexsequence = '"';
	xvalue = xvaluestart;
	for(i=0;i<s1.length;i++)
	{ 
		ch     = s1.substr(i,1);
		var chval;
		if(ch=="\\"){
		    i++;
		    ch     = s1.substr(i,1);
		    if(ch=="0")       { chval = 0;  }
			else if(ch=="\\") { chval = toAscii("\\"); }
			else if(ch=="a")  { chval = 7; }
		    else if(ch=="b")  { chval = 8; }
		    else if(ch=="t")  { chval = 9; }
		    else if(ch=="n")  { chval = 10; }
			else if(ch=="v")  { chval = 11; }
			else if(ch=="f")  { chval = 12; }
		    else if(ch=="r")  { chval = 13; }
		    else { javascript:alert("invalid control sequence: \\"+ch); }
		    --finallen;
		}
		else if(ch=="|"){
		    chval=0;
		}
		else { 
		    chval  = toAscii(ch); 
		    if(chval==0) { form.ans.value = "invalid character: "+ch; return; }
        }
		chval ^=xvalue;
		xvalue += 1;
		xvalue %= 256;
		hexsequence += "\\x"+ Dec2Hex(chval);
	}
	hexsequence += '"';
	
	s2  = "/*"+s1+"*/XorStr<0x" + Dec2Hex(xvaluestart) + ","  + finallen + ","+xrefkill+'>('
	s2 += hexsequence + "+" + xrefkill + ").s";
	
	form.ans.value = s2;
	form.ans.focus();
	form.ans.select();
}


}