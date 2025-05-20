var gamma, kx, ky, thetax, thetay;

 function getIntegratedShapeFunction(a, b, f){
   var n = 100;
   var shape = f(a)/2.
   var step = (b-a)/ n ;
   for(i=1; i <= n -1; i++ )
   {
     var x = a + step*i;
	 shape += f(x)
   }
	 shape += f(b)/2.;
// https://en.wikipedia.org/wiki/Numerical_integration
	 shape = (b-a)/n * shape;
	 return shape;
}


  function shapeFunction(x){
      var D = 1. + Math.pow(ky * Math.sin(x) - gamma * thetax, 2) + Math.pow(kx * Math.cos(x) - gamma * thetay, 2);
	  shapeFunction = (Math.pow(kx * Math.cos(x),2) + Math.pow(ky * Math.sin(x),2))/Math.pow(D,3) -
		                 ((Math.pow(ky,2) - Math.pow(kx,2))*Math.sin(2.*x) - 2.*ky*gamma*thetax*Math.cos(x) + 
		                2.*kx*gamma*thetay*Math.sin(x))/ Math.pow(D, 5);
//	  document.write("(x,shapefunction)=" + x + "," + shapeFunction + "<br>" );
	  return shapeFunction;

  }
