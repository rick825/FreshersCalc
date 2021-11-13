function func1(){
	// bca
var totalf = document.querySelector('.cfnum').value;
var totalFp = document.querySelector('.cfprice').value;

var totals =document.querySelector('.csnum').value;
var totalSp = document.querySelector('.csprice').value;

var totalt = document.querySelector('.ctnum').value;
var totalTp = document.querySelector('.ctprice').value;

var totalbca1 = totalf * totalFp;
var totalbca2 = totals * totalSp;
var totalbca3 = totalt * totalTp;

totalfbca = totalf *1;
totalsbca = totals *1;
totaltbca = totalt *1;

var totalbca = totalfbca + totalsbca + totaltbca;
var totalpricebca = totalbca1 + totalbca2 + totalbca3; 
 
var cftprice = document.querySelector('.cftprice').innerHTML = totalbca1;
var cstprice = document.querySelector('.cstprice').innerHTML = totalbca2;
var cttprice = document.querySelector('.cttprice').innerHTML = totalbca3; 
var totalstbca = document.querySelector('.tcprice').innerHTML = totalbca;
var totalprbca = document.querySelector('.ttprice').innerHTML = totalpricebca;

// end bca

// bpt
var totalfp = document.querySelector('.pfnum').value;
var totalFpp = document.querySelector('.pfprice').value;

var totalsp =document.querySelector('.psnum').value;
var totalSpp = document.querySelector('.psprice').value;

var totaltp = document.querySelector('.ptnum').value;
var totalTpp = document.querySelector('.ptprice').value;

var totalbpt1 = totalfp * totalFpp;
var totalbpt2 = totalsp * totalSpp;
var totalbpt3 = totaltp * totalTpp;

totalfbpt = totalfp *1;
totalsbpt = totalsp *1;
totaltbpt = totaltp *1;

var totalbpt = totalfbpt + totalsbpt + totaltbpt;
var totalpricebpt = totalbpt1 + totalbpt2 + totalbpt3; 
 
var pftprice = document.querySelector('.pftprice').innerHTML = totalbpt1;
var pstprice = document.querySelector('.pstprice').innerHTML = totalbpt2;
var pttprice = document.querySelector('.pttprice').innerHTML = totalbpt3; 
var totalstbpt = document.querySelector('.tpprice').innerHTML = totalbpt;
var totalprbpt = document.querySelector('.tpbprice').innerHTML = totalpricebpt;

// end bpt

// total 

totalstrength = totalbpt + totalbca;
totalprice =  totalpricebpt + totalpricebca;
var tstrength = document.querySelector('.tstrength').innerHTML = totalstrength;
var tprice = document.querySelector('.tcol').innerHTML = totalprice;
// end total
}


