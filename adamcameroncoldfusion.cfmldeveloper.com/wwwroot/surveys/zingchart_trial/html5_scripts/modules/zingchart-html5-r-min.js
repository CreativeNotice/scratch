/*
All of the code within the ZingChart software is developed and copyrighted by PINT, Inc., and may not be copied,
replicated, or used in any other software or application without prior permission from PINT. All usage must coincide with the
ZingChart End User License Agreement which can be requested by email at support@zingchart.com.

Build 0.120731
*/
ZC.QU.push("r");
ZC.PY=ZC.TX.B6({$i:function(d){this.b(d);this.KF="";this.GP=this.K1=1;this.EA=this.EB=0;this.IP=0.6},parse:function(){this.b();this.iX+=this.CX;this.iY+=this.CS;this.G-=this.CX+this.CQ;this.E-=this.CS+this.CM;this.Q4("layout","KF");if(this.o["size-factor"]!=null)this.IP=ZC._f_(ZC._p_(this.o["size-factor"]))},ZI:function(d){this.b(d);d=ZC.AV.T3(this.KF,this.Z.length,false);this.K1=d[0];this.GP=d[1];this.EB=this.G/this.GP;this.EA=this.E/this.K1},clear:function(){},build:function(){this.b()},paint:function(){function d(e){if(a.H.M8||
e==0){b=new ZC.D1(a);b.copy(a.BC)}var f=e%a.GP,g=Math.floor(e/a.GP);b.F1=a.P+"-item "+a.A.P+"-scale-item zc-scale-item";b.P=a.P+"-item-"+e;var k=a.HK(e);if(!(a.IM!=null&&ZC.AH(a.IM,k)==-1)){b.AX=k;b.X=a.H.usc()?a.H.mc():ZC.AN(a.A.P+"-scales-ml-0-c");b.parse();b.GW=function(j){j=j.replace(/%i/g,e);j=j.replace(/%v/g,a.Z[e]!=null?a.Z[e]:"");return j=j.replace(/%l/g,a.BK[e]!=null?a.BK[e]:"")};b.DK=a.BC.DK;b.C4()&&b.parse();if(b.AM){k="bottom";if(a.BC.o[ZC._[9]]!=null)k=a.BC.o[ZC._[9]];f=a.iX+f*a.EB;g=
a.iY+g*a.EA;switch(k){case "top-left":b.iX=f;b.iY=g;break;case "top-right":b.iX=f+a.EB-b.D8;b.iY=g;break;case "bottom-left":b.iX=f;b.iY=g+a.EA-b.CG;break;case "bottom-right":b.iX=f+a.EB-b.D8;b.iY=g+a.EA-b.CG;break;case "top":b.iX=f+a.EB/2-b.D8/2;b.iY=g;break;case "right":b.iX=f+a.EB-b.D8;b.iY=g+a.EA/2-b.CG/2;break;case "left":b.iX=f;b.iY=g+a.EA/2-b.CG/2;break;default:b.iX=f+a.EB/2-b.D8/2;b.iY=g+a.EA-b.CG}b.G=b.D8;b.E=b.CG;b.paint();b.D7()}}}var a=this;if(a.AM){a.b();var c=ZC.L.CN(a.H.usc()?a.H.P+
"-main-c":a.A.P+"-scales-ml-0-c",a.H.A5),l=ZC.L.CN(a.H.usc()?a.H.P+"-main-c":a.A.P+"-scales-bl-0-c",a.H.A5),h=[];h.push([a.iX,a.iY],[a.iX+a.G,a.iY],[a.iX+a.G,a.iY+a.E],[a.iX,a.iY+a.E],[a.iX,a.iY]);ZC.BW.paint(c,a,h);if(a.CC.AM){if(a.CC.o.items&&a.CC.o.items.length>0){c=0;for(h=a.Z.length;c<h;c++){var m=c%a.GP,n=Math.floor(c/a.GP),i=new ZC.G4(a);i.o=a.CC.o.items[c%a.CC.o.items.length];i.P=a.P+"-guide-"+c;i.X=a.H.usc()?a.H.mc():ZC.AN(a.A.P+"-scales-bl-0-c");i.parse();i.iX=a.iX+m*a.EB;i.iY=a.iY+n*a.EA;
i.G=a.EB;i.E=a.EA;i.paint()}}if(a.CC.AG>0){h=[];for(c=0;c<=a.GP;c++)h.push([a.iX+c*a.EB,a.iY],[a.iX+c*a.EB,a.iY+a.E],null);for(c=0;c<=a.K1;c++)h.push([a.iX,a.iY+c*a.EA],[a.iX+a.G,a.iY+c*a.EA],null);ZC.BW.paint(l,a.CC,h)}}var b;if(a.BC.AM){c=0;for(h=a.Z.length;c<h;c++)d(c)}}}});ZC.XS=ZC.TX.B6({$i:function(d){this.b(d);this.C7=0;this.H5=360},parse:function(){var d;this.b();if((d=this.o["ref-angle"])!=null)this.C7=ZC._i_(d)%360;if((d=this.o.aperture)!=null)this.H5=ZC._i_(d)%360}});
ZC.A0B=ZC.QY.B6({$i:function(d){this.b(d)},parse:function(){this.b()},JZ:function(){},ZI:function(d){this.b(d);this.JZ()},clear:function(){this.b()},build:function(){this.b()},paint:function(){this.b()}});